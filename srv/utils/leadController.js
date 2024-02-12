
const apiLead = require('../resources/api-clients/SalesSvcCloudV2_lead/index').LeadApi;
const destinationName = 'CNS_MY1000231_DE';


async function getLeads() {
  let requestBuilder = await apiLead.queryleadserviceLead({ $top: 10 });
  requestBuilder.addCustomHeaders({ 'Accept': 'application/json' });
  requestBuilder.addCustomHeaders({ 'x-sap-crm-token': await getToken() });
  let response = await requestBuilder.skipCsrfTokenFetching().execute({ destinationName: destinationName })
  return response;
}


async function getLeadById(leadId) {
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

module.exports = {getLeads, getLeadById};