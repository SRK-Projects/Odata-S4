const cds = require('@sap/cds');
const core = require('@sap-cloud-sdk/http-client');
const destinationName1 = 'S4HANACLOUD_SO';


//const { Suppliers1 } = this.entities;



async function getSuppliers1(req) {
  try {
        const apiBusinessPartner = await cds.connect.to('API_BUSINESS_PARTNER');
        const response = await apiBusinessPartner.run(req.query);
        return response;

  } catch (error) {
    console.error('Error fetching data from OData service:', error);
    throw error;
  }
}

async function getSuppliers2(req) {
  try {
        const apiBusinessPartner = await cds.connect.to('API_BUSINESS_PARTNER');
        const response = apiBusinessPartner.send({
          method: 'PATCH',
          path: 'A_BusinessPartner',
          data: {
            BusinessPartner: 11,
            BusinessPartnerIsBlocked: true
          }
        })
        return response;

  } catch (error) {
    console.error('Error fetching data from OData service:', error);
    throw error;
  }
}

module.exports = { getSuppliers1,getSuppliers2 };