using {Lead.Service_types as leadTypes} from './resources/api-specs/SalesSvcCloudV2_lead';
using {API_BUSINESS_PARTNER as bupa} from '../srv/external/API_BUSINESS_PARTNER';
using {API_SALES_ORDER_SRV as salesOrder} from '../srv/external/API_SALES_ORDER_SRV';
using {db} from '../db/schema';


@protocol: ['rest']
service CxCnsService {

    @open
    type object {}

    function getCaseByUUID(caseId : String) returns object;
    action   createCase(caseInfo : object)  returns object;
    function getLeadById(leadId : String)   returns leadTypes.Leadfile;
    function getLeads()                     returns leadTypes.Leadqueryresponse;
    function getSuppliers()                 returns object;


}

@protocol: ['odata']


service CxS4ODATA {
    @open
    type object {}

    entity Suppliers    as projection on db.A_BusinessPartner;
    entity ServiceOrder as projection on db.A_ServiceOrder;
    action createServiceOrder(caseInfo : object) returns object;
    entity salesOrder   as projection on db.A_SalesOrder;
}


//////////////////SalesOrderService////////////////////////////////////////////
service SalesOrderService @(path: '/Sales') {
    entity SalesOrder   as projection on db.A_SalesOrder;
};

@protocol: 'rest'
service OrderPostService {
    @open
    type object {};
    action Create_Order(Order : object) returns object;
}

//////////////////S4ServiceOrder////////////////////////////////////////////
service S4ServiceOrder @(path: '/serviceOrder') {
    entity s4SO  as projection on db.A_ServiceOrder;
};
service OrderS4ServiceOrder {
    @open
    type object {};

    action Create_S4ServiceOrder(Order : object) returns object;
}
