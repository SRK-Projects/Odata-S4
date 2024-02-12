const cds = require('@sap/cds');
const core = require('@sap-cloud-sdk/http-client');
const destinationName1 = 'S4HANACLOUD_SO';


//const { Suppliers1 } = this.entities;



async function getServiceOrder(req) {
  try {
    const apiServiceOrder = await cds.connect.to('API_SERVICE_ORDER_SRV');
    const response = await apiServiceOrder.run(req.query);
    return response;

  } catch (error) {
    console.error('Error fetching data from OData service:', error);
    throw error;
  }
}

async function createServiceOrder(req) {
  const { data } = req;
  try {
    const createdOrder = await cds.transaction(req).run(
      INSERT.into(Order).entries(data)
    );
    return createdOrder;

  } catch (error) {
    console.error('Error fetching data from OData service:', error);
    throw error;
  }
}



module.exports = { getServiceOrder, createServiceOrder };