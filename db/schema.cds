namespace db;

using { API_BUSINESS_PARTNER as external } from '../srv/external/API_BUSINESS_PARTNER';
using { API_SERVICE_ORDER_SRV as serviceOrder}  from '../srv/external/API_SERVICE_ORDER_SRV';
using { API_SALES_ORDER_SRV as salesOrder}  from '../srv/external/API_SALES_ORDER_SRV';

entity A_BusinessPartner as projection on external.A_BusinessPartner;
entity A_ServiceOrder as projection on serviceOrder.A_ServiceOrder;
entity A_SalesOrder as projection on salesOrder.A_SalesOrder;