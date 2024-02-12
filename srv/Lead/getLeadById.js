const apiLead = require('../resources/api-clients/SalesSvcCloudV2_lead/index').LeadApi;
const destinationName = 'CNS_MY1000231_DE';





async function getLeadById1(leadId) {
    try {
        let requestBuilder = await apiLead.readleadserviceLead(leadId);
        requestBuilder.addCustomHeaders({ 'Accept': 'application/json' });
        requestBuilder.addCustomHeaders({ 'x-sap-crm-token': await getToken() });
        let response = await requestBuilder.skipCsrfTokenFetching().execute({ destinationName: destinationName })
        return response;

    } catch (error) {
        console.error('Error fetching data from OData service:', error);
        throw error;
    }
}

// module.exports = {}