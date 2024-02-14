const cds = require('@sap/cds');
const core = require('@sap-cloud-sdk/http-client');
const destinationName1 = 'S4HANACLOUD_SO';

const { ServiceOrders, SOPersonResponsibles } = cds.entities;

async function getServiceOrder(query) {
  try {
    const apiServiceOrder = await cds.connect.to('API_SERVICE_ORDER_SRV');
    const response = await apiServiceOrder.run(query);
    return response;
  } catch (error) {
    console.error('Error fetching data from OData service:', error);
    throw error;
  }
}

async function createServiceOrder(order) {
  try {
    const apiServiceOrder = await cds.connect.to('API_SERVICE_ORDER_SRV');
    const response = await apiServiceOrder.run(INSERT.into(ServiceOrders).entries(order));
    return response;
  } catch (error) {
    console.error('Error fetching data from OData service:', error);
    throw error;
  }
}


module.exports = { getServiceOrder, createServiceOrder };