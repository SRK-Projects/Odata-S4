const cds = require('@sap/cds');
const core = require('@sap-cloud-sdk/http-client');
const leadController = require('./utils/leadController.js');
const apiCase = require('./resources/api-clients/SalesSvcCloudV2_case/index').CaseApi;
const apiLead = require('./resources/api-clients/SalesSvcCloudV2_lead/index').LeadApi;
const destinationName = 'CNS_MY1000231_DE';
const destinationName1 = 'S4HANACLOUD_SO';
const odatagetLeadById = require('../srv/Lead/getLeadById.js');
const odatagetServiceOrder = require('../srv/utils/serviceS4Controller.js');// require('../srv/utils/serviceS4Controller.js)
const odatBP = require('../srv/utils/bpS4Controller.js');
const odatagetSalesOrder = require('../srv/utils/salesS4Controller.js')


const S4HANACLOUD_SALESORDER = 'S4HANACLOUD_SALESORDER';


module.exports = cds.service.impl(async function (srv) {

    const { Suppliers } = this.entities;
    const { s4SO, Create_S4ServiceOrder } = this.entities;
    const { SalesOrder, Create_Order } = this.entities;



    getToken1 = async () => {
        let destinationConfig = { destinationName: S4HANACLOUD_SALESORDER };
        let requestConfig = { method: 'GET', url: 'https://my300047.s4hana.ondemand.com/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder?$top=1', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'x-csrf-token': 'fetch' } };
        let httpRequestOptions = { fetchCsrfToken: false }
        const response = await core.executeHttpRequest(destinationConfig, requestConfig, httpRequestOptions);
        return response.headers["x-csrf-token"];
    };

    getToken = async () => {
        let destinationConfig = { destinationName: destinationName };
        let requestConfig = { method: 'GET', url: '/sap/c4c/api/v1/iam-service/token', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } };
        let httpRequestOptions = { fetchCsrfToken: false }
        const response = await core.executeHttpRequest(destinationConfig, requestConfig, httpRequestOptions);
        return response.data.value.access_token;
    };

    srv.on('createCase', async (req) => {
        let requestBuilder = await apiCase.createcaseserviceCase(req.data.caseInfo);
        requestBuilder.addCustomHeaders({ 'Content-Type': 'application/json' });
        requestBuilder.addCustomHeaders({ 'Accept': 'application/json' });
        requestBuilder.addCustomHeaders({ 'x-sap-crm-token': await getToken() });
        let response = await requestBuilder.skipCsrfTokenFetching().execute({ destinationName: destinationName })
        return response;
    });

    srv.on('getCaseByUUID', async (req) => {
        let requestBuilder = await apiCase.readcaseserviceCase(req.data.caseId);
        requestBuilder.addCustomHeaders({ 'Accept': 'application/json' });
        requestBuilder.addCustomHeaders({ 'x-sap-crm-token': await getToken() });
        let response = await requestBuilder.skipCsrfTokenFetching().execute({ destinationName: destinationName })
        return response;
    });

    srv.on('getLeads', async (req) => {
        return await leadController.getLeads();
    });

    srv.on('getLeadById', async (req) => {
        const odataResult2 = await leadController.getLeadById(req.data.leadId);///await odatagetLeadById(req.data.leadId)
        return odataResult2;
    });
    ////////////////Start Service Order S4/HANA/////////////////////////////

    srv.on('READ', 's4SO', async req => {
        const odataResult2 = await odatagetServiceOrder.getServiceOrder(req)
        return odataResult2;
    });

    srv.on('Create_S4ServiceOrder', async (req) => {
        // const odataResult2 = await odatagetServiceOrder.createServiceOrder(req)
        // return odataResult2;
        const order = await cds.connect.to('API_SERVICE_ORDER_SRV');
        // Extract the Sales Order payload from the request data
        const OrderData = req.data.Order;
        const csrfToken = await getToken1()
        // Map the POST request on remote service
        // const SalesOrderResponse = await order.run(INSERT.into('SalesOrderService.SalesOrder', [OrderData]));

        const SalesOrderResponse = await order.run({
            headers: {
                'x-csrf-token': csrfToken,
            },
            INSERT: 'S4ServiceOrder.s4SO',
            data: [OrderData]
        });

        // Return the response
        return SalesOrderResponse;
    });
    ////////////////End Service Order S4/HANA/////////////////////////////
    ////////////////Start Sales Order S4/HANA/////////////////////////////

    // Handle GET call
    srv.on('READ', 'SalesOrder', async req => {

        const odataResult2 = await odatagetSalesOrder.getSalesOrder(req)
        return odataResult2;
    });

    // Handle POST call
    srv.on('Create_Order', async (req) => {
        const odataResult2 = await odatagetSalesOrder.createSalesOrder(req)
        return odataResult2;

    });
    /////////////////End Sales Order S4/HANA/////////////////////////////////
    ////////////////Start BP S4/HANA/////////////////////////////

    srv.on('READ', Suppliers, async (req) => {
        const odataResult2 = await odatBP.getSuppliers1(req)
        return odataResult2;

    });

    srv.on('UPDATE', 'Suppliers', async (req) => {
        const odataResult2 = await odatBP.getSuppliers2(req)
        return odataResult2;

    });

    ////////////////Start BP S4/HANA/////////////////////////////

});