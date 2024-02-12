const cds = require('@sap/cds');
const core = require('@sap-cloud-sdk/http-client');

async function getSalesOrder(req) {
    try {
        const apiServiceOrder = await cds.connect.to('API_SALES_ORDER_SRV');
        const response = await apiServiceOrder.run(req.query);
        return response;


    } catch (error) {
        console.error('Error fetching data from OData service:', error);
        throw error;
    }
}

async function createSalesOrder(req) {
    const order = await cds.connect.to('API_SALES_ORDER_SRV');
    // Extract the Sales Order payload from the request data


    // let requestConfig = { method: 'GET', url: 'https://my300047.s4hana.ondemand.com/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder?$top=1', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'x-csrf-token': 'fetch' } };
    // const response = await core.executeHttpRequest( requestConfig);

    const OrderData = req.data.Order;
    const csrfToken = await getToken1()
    // Map the POST request on remote service
   const SalesOrderResponse = await order.run(INSERT.into('SalesOrderService.SalesOrder', [OrderData]));

    // const SalesOrderResponse = await order.run({
    //     headers: {
    //         'x-csrf-token':csrfToken// response.headers["x-csrf-token"],
    //     },
    //     INSERT: 'SalesOrderService.SalesOrder',
    //     data: OrderData
    // });

  //  const SalesOrderResponse = await order.run(INSERT.into('SalesOrderService.SalesOrder', [OrderData]));

    // Return the response
    return SalesOrderResponse;
}

module.exports = { getSalesOrder, createSalesOrder };
