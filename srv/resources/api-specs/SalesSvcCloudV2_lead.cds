/* checksum : f5f5c7c3167ace69b7a33333b933e5af */
@Capabilities.BatchSupported : false
@Capabilities.KeyAsSegmentSupported : true
@Core.Description : 'Lead Service'
@Core.SchemaVersion : '1.0.0'
@Core.LongDescription : 'The lead helps to describe, store, update, and manage the potential interest of (and interaction with) a prospect in a certain timeframe. Leads represent a potential chance to do business.'
service Lead.Service {};

@Common.Label : 'Lead'
@Core.Description : 'Query leads.'
@Core.LongDescription : 'Specify query parameters to return desired lead entities.'
@openapi.path : '/sap/c4c/api/v1/lead-service/leads'
function Lead.Service.sap_c4c_api_v1_lead_service_leads(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Show only the first n leads.'
  @openapi.in : 'query'
  @openapi.name : '$top'
  _top : Integer,
  @description : 'Skip the first n leads.'
  @openapi.in : 'query'
  @openapi.name : '$skip'
  _skip : Integer,
  @description : 'Search for a string within lead.'
  @openapi.in : 'query'
  @openapi.name : '$search'
  _search : String,
  @description : 'Order leads by attribute.'
  @openapi.in : 'query'
  @openapi.name : '$orderby'
  _orderby : String,
  @description : 'Filter leads by attribute.'
  @openapi.in : 'query'
  @openapi.name : '$filter'
  _filter : String,
  @description : 'Select attributes to be returned.'
  @openapi.in : 'query'
  @openapi.name : '$select'
  _select : String,
  @description : 'Indicates if count of leads to be returned.'
  @openapi.in : 'query'
  @openapi.name : '$count'
  _count : Boolean,
  @description : 'Indicates the query to be used.'
  @openapi.in : 'query'
  @openapi.name : '$query'
  _query : String
) returns Lead.Service_types.Leadqueryresponse;

@Common.Label : 'Lead'
@Core.Description : 'Create a new lead.'
@Core.LongDescription : 'Send lead information to create a new lead entity.'
@openapi.path : '/sap/c4c/api/v1/lead-service/leads'
action Lead.Service.sap_c4c_api_v1_lead_service_leads_post(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @openapi.in : 'body'
  body : Lead.Service_types.Leadcreaterequest
) returns Lead.Service_types.Leadfile;

@Common.Label : 'Lead'
@Core.Description : 'Retrieve a lead by ID.'
@Core.LongDescription : 'Retrieve a specific lead using the lead ID.'
@openapi.path : '/sap/c4c/api/v1/lead-service/leads/{id}'
function Lead.Service.sap_c4c_api_v1_lead_service_leads_(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Id'
  @openapi.in : 'path'
  id : UUID
) returns Lead.Service_types.Leadfile;

@Common.Label : 'Lead'
@Core.Description : 'Update a lead.'
@Core.LongDescription : 'Update a lead using the lead ID'
@openapi.method : 'PUT'
@openapi.path : '/sap/c4c/api/v1/lead-service/leads/{id}'
action Lead.Service.sap_c4c_api_v1_lead_service_leads__put(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Id'
  @openapi.in : 'path'
  id : UUID,
  @openapi.in : 'body'
  body : Lead.Service_types.Leadupdaterequest
) returns Lead.Service_types.Leadfile;

@Common.Label : 'Lead'
@Core.Description : 'Update lead attributes.'
@Core.LongDescription : 'Update lead attributes using the lead ID.'
@openapi.method : 'PATCH'
@openapi.path : '/sap/c4c/api/v1/lead-service/leads/{id}'
action Lead.Service.sap_c4c_api_v1_lead_service_leads__patch(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Id'
  @openapi.in : 'path'
  id : UUID,
  @openapi.in : 'body'
  body : Lead.Service_types.Leadpatchupdaterequest
) returns Lead.Service_types.Leadfile;

@Common.Label : 'Lead'
@Core.Description : 'Delete a lead.'
@Core.LongDescription : 'Delete a lead using the lead ID.'
@openapi.method : 'DELETE'
@openapi.path : '/sap/c4c/api/v1/lead-service/leads/{id}'
action Lead.Service.sap_c4c_api_v1_lead_service_leads__delete(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Id'
  @openapi.in : 'path'
  id : UUID
);

@Common.Label : 'Lead Qualification'
@Core.Description : 'Query lead qualifications.'
@Core.LongDescription : 'Query all (active/inactive) lead qualifications'
@openapi.path : '/sap/c4c/api/v1/lead-service/qualifications'
function Lead.Service.sap_c4c_api_v1_lead_service_qualifications(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @openapi.in : 'query'
  isActive : Boolean
) returns Lead.Service_types.LeadQualificationqueryresponse;

@Common.Label : 'Lead Qualification'
@Core.Description : 'Create a new lead qualification.'
@Core.LongDescription : 'Send lead qualification information to create a new lead qualification entity.'
@openapi.path : '/sap/c4c/api/v1/lead-service/qualifications'
action Lead.Service.sap_c4c_api_v1_lead_service_qualifications_post(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @openapi.in : 'body'
  body : Lead.Service_types.LeadQualificationcreaterequest
) returns Lead.Service_types.LeadQualificationfile;

@Common.Label : 'Lead Qualification'
@Core.Description : 'Retrieve a lead qualification by code.'
@Core.LongDescription : 'Retrieve a specific lead qualification using the lead qualification code.'
@openapi.path : '/sap/c4c/api/v1/lead-service/qualifications/{code}'
function Lead.Service.sap_c4c_api_v1_lead_service_qualifications_(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Qualification Code'
  @openapi.in : 'path'
  code : String
) returns Lead.Service_types.LeadQualificationfile;

@Common.Label : 'Lead Qualification'
@Core.Description : 'Delete a lead qualification.'
@Core.LongDescription : 'Delete a lead qualification using the lead qualification code.'
@openapi.method : 'DELETE'
@openapi.path : '/sap/c4c/api/v1/lead-service/qualifications/{code}'
action Lead.Service.sap_c4c_api_v1_lead_service_qualifications__delete(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Qualification Code'
  @openapi.in : 'path'
  code : String
);

@Common.Label : 'Lead Source'
@Core.Description : 'Query lead sources.'
@Core.LongDescription : 'Query all (active/inactive) lead sources'
@openapi.path : '/sap/c4c/api/v1/lead-service/sources'
function Lead.Service.sap_c4c_api_v1_lead_service_sources(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @openapi.in : 'query'
  isActive : Boolean
) returns Lead.Service_types.LeadSourcequeryresponse;

@Common.Label : 'Lead Source'
@Core.Description : 'Create a new lead source.'
@Core.LongDescription : 'Send lead source information to create a new lead source entity.'
@openapi.path : '/sap/c4c/api/v1/lead-service/sources'
action Lead.Service.sap_c4c_api_v1_lead_service_sources_post(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @openapi.in : 'body'
  body : Lead.Service_types.LeadSourcecreaterequest
) returns Lead.Service_types.LeadSourcefile;

@Common.Label : 'Lead Source'
@Core.Description : 'Retrieve a lead source by code.'
@Core.LongDescription : 'Retrieve a specific lead source using the lead source code.'
@openapi.path : '/sap/c4c/api/v1/lead-service/sources/{code}'
function Lead.Service.sap_c4c_api_v1_lead_service_sources_(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Source Code'
  @openapi.in : 'path'
  code : String
) returns Lead.Service_types.LeadSourcefile;

@Common.Label : 'Lead Source'
@Core.Description : 'Delete a lead source.'
@Core.LongDescription : 'Delete a lead source using the lead source code.'
@openapi.method : 'DELETE'
@openapi.path : '/sap/c4c/api/v1/lead-service/sources/{code}'
action Lead.Service.sap_c4c_api_v1_lead_service_sources__delete(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Source Code'
  @openapi.in : 'path'
  code : String
);

@Common.Label : 'Lead Status'
@Core.Description : 'Query lead status.'
@Core.LongDescription : 'Query all (active/inactive) lead status'
@openapi.path : '/sap/c4c/api/v1/lead-service/statuses'
function Lead.Service.sap_c4c_api_v1_lead_service_statuses(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @openapi.in : 'query'
  isActive : Boolean,
  @openapi.in : 'query'
  @openapi.name : '$orderby'
  _orderby : String
) returns Lead.Service_types.LeadStatusqueryresponse;

@Common.Label : 'Lead Status'
@Core.Description : 'Create a new lead status.'
@Core.LongDescription : 'Send lead status information to create a new lead status entity.'
@openapi.path : '/sap/c4c/api/v1/lead-service/statuses'
action Lead.Service.sap_c4c_api_v1_lead_service_statuses_post(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @openapi.in : 'body'
  body : Lead.Service_types.LeadStatuscreaterequest
) returns Lead.Service_types.LeadStatusfile;

@Common.Label : 'Lead Status'
@Core.Description : 'Retrieve a lead status by code.'
@Core.LongDescription : 'Retrieve a specific lead status using the lead status code.'
@openapi.path : '/sap/c4c/api/v1/lead-service/statuses/{code}'
function Lead.Service.sap_c4c_api_v1_lead_service_statuses_(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Status Code'
  @openapi.in : 'path'
  code : String
) returns Lead.Service_types.LeadStatusfile;

@Common.Label : 'Lead Status'
@Core.Description : 'Delete a lead status.'
@Core.LongDescription : 'Delete a lead status using the lead status code.'
@openapi.method : 'DELETE'
@openapi.path : '/sap/c4c/api/v1/lead-service/statuses/{code}'
action Lead.Service.sap_c4c_api_v1_lead_service_statuses__delete(
  @openapi.in : 'header'
  @openapi.required : true
  @openapi.name : 'x-sap-crm-token'
  x_sap_crm_token : String,
  @description : 'Lead Status Code'
  @openapi.in : 'path'
  code : String
);

type Lead.Service_types.error {
  error : {
    code : String;
    details : many {
      message : String;
      code : String;
      target : String;
    };
    message : String;
    target : String;
  };
};

@title : 'Lead query response'
type Lead.Service_types.Leadqueryresponse {
  count : Integer;
  value : many {
    id : UUID;
    displayId : String;
    name : String;
    @assert.range : true
    internalStatus : String enum {
      OPEN;
      CONVERTED;
      ACCEPTED;
      DECLINED;
    };
    status : String;
    statusDescription : String;
    source : String;
    sourceDescription : String;
    qualification : String;
    qualificationDescription : String;
    score : Double;
    @assert.range : true
    accountContactsStatus : String enum {
      ALL_EXIST;
      ALL_NEW;
    };
    account : {
      id : UUID;
      displayId : String;
      formattedName : String;
      firstLineName : String;
      secondLineName : String;
      thirdLineName : String;
      fourthLineName : String;
      address : {
        streetName : String;
        houseId : String;
        postalCode : String;
        cityName : String;
        country : String;
        countryDescription : String;
        email : String;
        web : String;
        phoneFormattedNumber : String;
        mobileFormattedNumber : String;
      };
    };
    businessArea : {
      salesOrganisationId : UUID;
      salesOrganisationDisplayId : String;
      salesOrganisationName : String;
      distributionChannel : String;
      distributionChannelName : String;
      division : String;
      divisionName : String;
      salesGroupId : UUID;
      salesGroupDisplayId : String;
      salesGroupName : String;
      salesOfficeId : UUID;
      salesOfficeDisplayId : String;
      salesOfficeName : String;
      salesTerritoryId : UUID;
      salesTerritoryDisplayId : String;
      salesTerritoryName : String;
    };
    owner : {
      id : UUID;
      displayId : String;
      formattedName : String;
    };
    salesEmployees : many {
      id : UUID;
      salesEmployeeId : UUID;
      displayId : String;
      role : String;
      formattedName : String;
    };
    contacts : many {
      id : UUID;
      contactId : UUID;
      displayId : String;
      isPrimary : Boolean;
      formattedName : String;
      givenName : String;
      familyName : String;
      gender : String;
      genderDescription : String;
      address : {
        email : String;
        phoneFormattedNumber : String;
        mobileFormattedNumber : String;
        departmentName : String;
        functionalTitleName : String;
        buildingId : String;
        floorId : String;
        roomId : String;
      };
    };
    products : many {
      id : UUID;
      productId : String;
      displayId : String;
      productDescription : String;
      quantity : {
        content : Double;
        uomCode : String;
      };
    };
    notes : many {
      id : UUID;
      content : String;
      adminData : {
        createdBy : UUID;
        createdByName : String;
        createdOn : Timestamp;
        updatedBy : UUID;
        updatedByName : String;
        updatedOn : Timestamp;
      };
    };
    relatedObjects : many {
      id : UUID;
      objectId : String;
      displayId : String;
      type : String;
      typeDescription : String;
      @assert.range : true
      role : String enum {
        PREDECESSOR;
        SUCCESSOR;
      };
      roleDescription : String;
      @assert.range : true
      status : String enum {
        OPEN;
        IN_PROCESS;
        COMPLETED;
        CANCELLED;
      };
      startDateTime : Timestamp;
      dueDateTime : Timestamp;
    };
    worklistItems : many {
      id : UUID;
      @assert.range : true
      type : String enum {
        ACTION;
        APPOINTMENT;
        TASK;
        PHONECALL;
        SURVEY;
        UNKNOWN;
      };
      title : String;
      description : String;
      priority : String;
      priorityDescription : String;
      category : String;
      categoryDescription : String;
      duration : String;
      relatedObjectId : UUID;
      isRelatedObjectCompleted : Boolean;
      isMandatory : Boolean;
      @assert.range : true
      status : String enum {
        UNKNOWN;
        PROPOSED;
        PLANNED;
        DISMISSED;
        COMPLETED;
      };
      scheduleOn : Timestamp;
      endDateTime : Timestamp;
      note : {
        id : UUID;
        content : String;
        adminData : {
          createdBy : UUID;
          createdByName : String;
          createdOn : Timestamp;
          updatedBy : UUID;
          updatedByName : String;
          updatedOn : Timestamp;
        };
      };
    };
    attachments : many {
      id : UUID;
      title : String;
      type : String;
      fileName : String;
      fileSize : String;
      contentType : String;
      category : String;
      status : String;
      uploadUrl : String;
      url : String;
      adminData : {
        createdBy : UUID;
        createdByName : String;
        createdOn : Timestamp;
        updatedBy : UUID;
        updatedByName : String;
        updatedOn : Timestamp;
      };
    };
    adminData : {
      createdBy : UUID;
      createdByName : String;
      createdOn : Timestamp;
      updatedBy : UUID;
      updatedByName : String;
      updatedOn : Timestamp;
    };
    primaryContact : {
      id : UUID;
      contactId : UUID;
      displayId : String;
      isPrimary : Boolean;
      formattedName : String;
      givenName : String;
      familyName : String;
      gender : String;
      genderDescription : String;
      address : {
        email : String;
        phoneFormattedNumber : String;
        mobileFormattedNumber : String;
        departmentName : String;
        functionalTitleName : String;
        buildingId : String;
        floorId : String;
        roomId : String;
      };
    };
    isEndOfPurpose : Boolean;
  };
};

@title : 'Lead file'
type Lead.Service_types.Leadfile {
  value : {
    id : UUID;
    displayId : String;
    name : String;
    @assert.range : true
    internalStatus : String enum {
      OPEN;
      CONVERTED;
      ACCEPTED;
      DECLINED;
    };
    status : String;
    statusDescription : String;
    source : String;
    sourceDescription : String;
    qualification : String;
    qualificationDescription : String;
    score : Double;
    @assert.range : true
    accountContactsStatus : String enum {
      ALL_EXIST;
      ALL_NEW;
    };
    account : {
      id : UUID;
      displayId : String;
      formattedName : String;
      firstLineName : String;
      secondLineName : String;
      thirdLineName : String;
      fourthLineName : String;
      address : {
        streetName : String;
        houseId : String;
        postalCode : String;
        cityName : String;
        country : String;
        countryDescription : String;
        email : String;
        web : String;
        phoneFormattedNumber : String;
        mobileFormattedNumber : String;
      };
    };
    businessArea : {
      salesOrganisationId : UUID;
      salesOrganisationDisplayId : String;
      salesOrganisationName : String;
      distributionChannel : String;
      distributionChannelName : String;
      division : String;
      divisionName : String;
      salesGroupId : UUID;
      salesGroupDisplayId : String;
      salesGroupName : String;
      salesOfficeId : UUID;
      salesOfficeDisplayId : String;
      salesOfficeName : String;
      salesTerritoryId : UUID;
      salesTerritoryDisplayId : String;
      salesTerritoryName : String;
    };
    owner : {
      id : UUID;
      displayId : String;
      formattedName : String;
    };
    salesEmployees : many {
      id : UUID;
      salesEmployeeId : UUID;
      displayId : String;
      role : String;
      formattedName : String;
    };
    contacts : many {
      id : UUID;
      contactId : UUID;
      displayId : String;
      isPrimary : Boolean;
      formattedName : String;
      givenName : String;
      familyName : String;
      gender : String;
      genderDescription : String;
      address : {
        email : String;
        phoneFormattedNumber : String;
        mobileFormattedNumber : String;
        departmentName : String;
        functionalTitleName : String;
        buildingId : String;
        floorId : String;
        roomId : String;
      };
    };
    products : many {
      id : UUID;
      productId : String;
      displayId : String;
      productDescription : String;
      quantity : {
        content : Double;
        uomCode : String;
      };
    };
    notes : many {
      id : UUID;
      content : String;
      adminData : {
        createdBy : UUID;
        createdByName : String;
        createdOn : Timestamp;
        updatedBy : UUID;
        updatedByName : String;
        updatedOn : Timestamp;
      };
    };
    relatedObjects : many {
      id : UUID;
      objectId : String;
      displayId : String;
      type : String;
      typeDescription : String;
      @assert.range : true
      role : String enum {
        PREDECESSOR;
        SUCCESSOR;
      };
      roleDescription : String;
      @assert.range : true
      status : String enum {
        OPEN;
        IN_PROCESS;
        COMPLETED;
        CANCELLED;
      };
      startDateTime : Timestamp;
      dueDateTime : Timestamp;
    };
    worklistItems : many {
      id : UUID;
      @assert.range : true
      type : String enum {
        ACTION;
        APPOINTMENT;
        TASK;
        PHONECALL;
        SURVEY;
        UNKNOWN;
      };
      title : String;
      description : String;
      priority : String;
      priorityDescription : String;
      category : String;
      categoryDescription : String;
      duration : String;
      relatedObjectId : UUID;
      isRelatedObjectCompleted : Boolean;
      isMandatory : Boolean;
      @assert.range : true
      status : String enum {
        UNKNOWN;
        PROPOSED;
        PLANNED;
        DISMISSED;
        COMPLETED;
      };
      scheduleOn : Timestamp;
      endDateTime : Timestamp;
      note : {
        id : UUID;
        content : String;
        adminData : {
          createdBy : UUID;
          createdByName : String;
          createdOn : Timestamp;
          updatedBy : UUID;
          updatedByName : String;
          updatedOn : Timestamp;
        };
      };
    };
    attachments : many {
      id : UUID;
      title : String;
      type : String;
      fileName : String;
      fileSize : String;
      contentType : String;
      category : String;
      status : String;
      uploadUrl : String;
      url : String;
      adminData : {
        createdBy : UUID;
        createdByName : String;
        createdOn : Timestamp;
        updatedBy : UUID;
        updatedByName : String;
        updatedOn : Timestamp;
      };
    };
    adminData : {
      createdBy : UUID;
      createdByName : String;
      createdOn : Timestamp;
      updatedBy : UUID;
      updatedByName : String;
      updatedOn : Timestamp;
    };
    primaryContact : {
      id : UUID;
      contactId : UUID;
      displayId : String;
      isPrimary : Boolean;
      formattedName : String;
      givenName : String;
      familyName : String;
      gender : String;
      genderDescription : String;
      address : {
        email : String;
        phoneFormattedNumber : String;
        mobileFormattedNumber : String;
        departmentName : String;
        functionalTitleName : String;
        buildingId : String;
        floorId : String;
        roomId : String;
      };
    };
    isEndOfPurpose : Boolean;
  };
};

@title : 'Lead create request'
type Lead.Service_types.Leadcreaterequest {
  name : String;
  status : String;
  source : String;
  qualification : String;
  account : {
    id : UUID;
    displayId : String;
    formattedName : String;
    firstLineName : String;
    secondLineName : String;
    thirdLineName : String;
    fourthLineName : String;
    address : {
      streetName : String;
      houseId : String;
      postalCode : String;
      cityName : String;
      country : String;
      countryDescription : String;
      email : String;
      web : String;
      phoneFormattedNumber : String;
      mobileFormattedNumber : String;
    };
  };
  businessArea : {
    salesOrganisationId : UUID;
    salesOrganisationDisplayId : String;
    salesOrganisationName : String;
    distributionChannel : String;
    distributionChannelName : String;
    division : String;
    divisionName : String;
    salesGroupId : UUID;
    salesGroupDisplayId : String;
    salesGroupName : String;
    salesOfficeId : UUID;
    salesOfficeDisplayId : String;
    salesOfficeName : String;
    salesTerritoryId : UUID;
    salesTerritoryDisplayId : String;
    salesTerritoryName : String;
  };
  owner : {
    id : UUID;
    displayId : String;
    formattedName : String;
  };
  salesEmployees : many {
    id : UUID;
    salesEmployeeId : UUID;
    displayId : String;
    role : String;
    formattedName : String;
  };
  contacts : many {
    id : UUID;
    contactId : UUID;
    displayId : String;
    isPrimary : Boolean;
    formattedName : String;
    givenName : String;
    familyName : String;
    gender : String;
    genderDescription : String;
    address : {
      email : String;
      phoneFormattedNumber : String;
      mobileFormattedNumber : String;
      departmentName : String;
      functionalTitleName : String;
      buildingId : String;
      floorId : String;
      roomId : String;
    };
  };
  products : many {
    id : UUID;
    productId : String;
    displayId : String;
    productDescription : String;
    quantity : {
      content : Double;
      uomCode : String;
    };
  };
  notes : many {
    id : UUID;
    content : String;
    adminData : {
      createdBy : UUID;
      createdByName : String;
      createdOn : Timestamp;
      updatedBy : UUID;
      updatedByName : String;
      updatedOn : Timestamp;
    };
  };
  relatedObjects : many {
    id : UUID;
    objectId : String;
    displayId : String;
    type : String;
    typeDescription : String;
    @assert.range : true
    role : String enum {
      PREDECESSOR;
      SUCCESSOR;
    };
    roleDescription : String;
    @assert.range : true
    status : String enum {
      OPEN;
      IN_PROCESS;
      COMPLETED;
      CANCELLED;
    };
    startDateTime : Timestamp;
    dueDateTime : Timestamp;
  };
  worklistItems : many {
    id : UUID;
    @assert.range : true
    type : String enum {
      ACTION;
      APPOINTMENT;
      TASK;
      PHONECALL;
      SURVEY;
      UNKNOWN;
    };
    title : String;
    description : String;
    priority : String;
    priorityDescription : String;
    category : String;
    categoryDescription : String;
    duration : String;
    relatedObjectId : UUID;
    isRelatedObjectCompleted : Boolean;
    isMandatory : Boolean;
    @assert.range : true
    status : String enum {
      UNKNOWN;
      PROPOSED;
      PLANNED;
      DISMISSED;
      COMPLETED;
    };
    scheduleOn : Timestamp;
    endDateTime : Timestamp;
    note : {
      id : UUID;
      content : String;
      adminData : {
        createdBy : UUID;
        createdByName : String;
        createdOn : Timestamp;
        updatedBy : UUID;
        updatedByName : String;
        updatedOn : Timestamp;
      };
    };
  };
  attachments : many {
    id : UUID;
    title : String;
    type : String;
    fileName : String;
    fileSize : String;
    contentType : String;
    category : String;
    status : String;
    uploadUrl : String;
    url : String;
    adminData : {
      createdBy : UUID;
      createdByName : String;
      createdOn : Timestamp;
      updatedBy : UUID;
      updatedByName : String;
      updatedOn : Timestamp;
    };
  };
  isEndOfPurpose : Boolean;
};

@title : 'Lead update request'
type Lead.Service_types.Leadupdaterequest {
  name : String;
  status : String;
  source : String;
  qualification : String;
  account : {
    id : UUID;
    displayId : String;
    formattedName : String;
    firstLineName : String;
    secondLineName : String;
    thirdLineName : String;
    fourthLineName : String;
    address : {
      streetName : String;
      houseId : String;
      postalCode : String;
      cityName : String;
      country : String;
      countryDescription : String;
      email : String;
      web : String;
      phoneFormattedNumber : String;
      mobileFormattedNumber : String;
    };
  };
  businessArea : {
    salesOrganisationId : UUID;
    salesOrganisationDisplayId : String;
    salesOrganisationName : String;
    distributionChannel : String;
    distributionChannelName : String;
    division : String;
    divisionName : String;
    salesGroupId : UUID;
    salesGroupDisplayId : String;
    salesGroupName : String;
    salesOfficeId : UUID;
    salesOfficeDisplayId : String;
    salesOfficeName : String;
    salesTerritoryId : UUID;
    salesTerritoryDisplayId : String;
    salesTerritoryName : String;
  };
  owner : {
    id : UUID;
    displayId : String;
    formattedName : String;
  };
  salesEmployees : many {
    id : UUID;
    salesEmployeeId : UUID;
    displayId : String;
    role : String;
    formattedName : String;
  };
  contacts : many {
    id : UUID;
    contactId : UUID;
    displayId : String;
    isPrimary : Boolean;
    formattedName : String;
    givenName : String;
    familyName : String;
    gender : String;
    genderDescription : String;
    address : {
      email : String;
      phoneFormattedNumber : String;
      mobileFormattedNumber : String;
      departmentName : String;
      functionalTitleName : String;
      buildingId : String;
      floorId : String;
      roomId : String;
    };
  };
  products : many {
    id : UUID;
    productId : String;
    displayId : String;
    productDescription : String;
    quantity : {
      content : Double;
      uomCode : String;
    };
  };
  notes : many {
    id : UUID;
    content : String;
    adminData : {
      createdBy : UUID;
      createdByName : String;
      createdOn : Timestamp;
      updatedBy : UUID;
      updatedByName : String;
      updatedOn : Timestamp;
    };
  };
  relatedObjects : many {
    id : UUID;
    objectId : String;
    displayId : String;
    type : String;
    typeDescription : String;
    @assert.range : true
    role : String enum {
      PREDECESSOR;
      SUCCESSOR;
    };
    roleDescription : String;
    @assert.range : true
    status : String enum {
      OPEN;
      IN_PROCESS;
      COMPLETED;
      CANCELLED;
    };
    startDateTime : Timestamp;
    dueDateTime : Timestamp;
  };
  worklistItems : many {
    id : UUID;
    @assert.range : true
    type : String enum {
      ACTION;
      APPOINTMENT;
      TASK;
      PHONECALL;
      SURVEY;
      UNKNOWN;
    };
    title : String;
    description : String;
    priority : String;
    priorityDescription : String;
    category : String;
    categoryDescription : String;
    duration : String;
    relatedObjectId : UUID;
    isRelatedObjectCompleted : Boolean;
    isMandatory : Boolean;
    @assert.range : true
    status : String enum {
      UNKNOWN;
      PROPOSED;
      PLANNED;
      DISMISSED;
      COMPLETED;
    };
    scheduleOn : Timestamp;
    endDateTime : Timestamp;
    note : {
      id : UUID;
      content : String;
      adminData : {
        createdBy : UUID;
        createdByName : String;
        createdOn : Timestamp;
        updatedBy : UUID;
        updatedByName : String;
        updatedOn : Timestamp;
      };
    };
  };
  attachments : many {
    id : UUID;
    title : String;
    type : String;
    fileName : String;
    fileSize : String;
    contentType : String;
    category : String;
    status : String;
    uploadUrl : String;
    url : String;
    adminData : {
      createdBy : UUID;
      createdByName : String;
      createdOn : Timestamp;
      updatedBy : UUID;
      updatedByName : String;
      updatedOn : Timestamp;
    };
  };
  isEndOfPurpose : Boolean;
};

@title : 'Lead patchupdate request'
type Lead.Service_types.Leadpatchupdaterequest {
  name : String;
  status : String;
  source : String;
  qualification : String;
  account : {
    id : UUID;
    displayId : String;
    formattedName : String;
    firstLineName : String;
    secondLineName : String;
    thirdLineName : String;
    fourthLineName : String;
    address : {
      streetName : String;
      houseId : String;
      postalCode : String;
      cityName : String;
      country : String;
      countryDescription : String;
      email : String;
      web : String;
      phoneFormattedNumber : String;
      mobileFormattedNumber : String;
    };
  };
  businessArea : {
    salesOrganisationId : UUID;
    salesOrganisationDisplayId : String;
    salesOrganisationName : String;
    distributionChannel : String;
    distributionChannelName : String;
    division : String;
    divisionName : String;
    salesGroupId : UUID;
    salesGroupDisplayId : String;
    salesGroupName : String;
    salesOfficeId : UUID;
    salesOfficeDisplayId : String;
    salesOfficeName : String;
    salesTerritoryId : UUID;
    salesTerritoryDisplayId : String;
    salesTerritoryName : String;
  };
  owner : {
    id : UUID;
    displayId : String;
    formattedName : String;
  };
  salesEmployees : many {
    id : UUID;
    salesEmployeeId : UUID;
    displayId : String;
    role : String;
    formattedName : String;
  };
  contacts : many {
    id : UUID;
    contactId : UUID;
    displayId : String;
    isPrimary : Boolean;
    formattedName : String;
    givenName : String;
    familyName : String;
    gender : String;
    genderDescription : String;
    address : {
      email : String;
      phoneFormattedNumber : String;
      mobileFormattedNumber : String;
      departmentName : String;
      functionalTitleName : String;
      buildingId : String;
      floorId : String;
      roomId : String;
    };
  };
  products : many {
    id : UUID;
    productId : String;
    displayId : String;
    productDescription : String;
    quantity : {
      content : Double;
      uomCode : String;
    };
  };
  notes : many {
    id : UUID;
    content : String;
    adminData : {
      createdBy : UUID;
      createdByName : String;
      createdOn : Timestamp;
      updatedBy : UUID;
      updatedByName : String;
      updatedOn : Timestamp;
    };
  };
  relatedObjects : many {
    id : UUID;
    objectId : String;
    displayId : String;
    type : String;
    typeDescription : String;
    @assert.range : true
    role : String enum {
      PREDECESSOR;
      SUCCESSOR;
    };
    roleDescription : String;
    @assert.range : true
    status : String enum {
      OPEN;
      IN_PROCESS;
      COMPLETED;
      CANCELLED;
    };
    startDateTime : Timestamp;
    dueDateTime : Timestamp;
  };
  worklistItems : many {
    id : UUID;
    @assert.range : true
    type : String enum {
      ACTION;
      APPOINTMENT;
      TASK;
      PHONECALL;
      SURVEY;
      UNKNOWN;
    };
    title : String;
    description : String;
    priority : String;
    priorityDescription : String;
    category : String;
    categoryDescription : String;
    duration : String;
    relatedObjectId : UUID;
    isRelatedObjectCompleted : Boolean;
    isMandatory : Boolean;
    @assert.range : true
    status : String enum {
      UNKNOWN;
      PROPOSED;
      PLANNED;
      DISMISSED;
      COMPLETED;
    };
    scheduleOn : Timestamp;
    endDateTime : Timestamp;
    note : {
      id : UUID;
      content : String;
      adminData : {
        createdBy : UUID;
        createdByName : String;
        createdOn : Timestamp;
        updatedBy : UUID;
        updatedByName : String;
        updatedOn : Timestamp;
      };
    };
  };
  attachments : many {
    id : UUID;
    title : String;
    type : String;
    fileName : String;
    fileSize : String;
    contentType : String;
    category : String;
    status : String;
    uploadUrl : String;
    url : String;
    adminData : {
      createdBy : UUID;
      createdByName : String;
      createdOn : Timestamp;
      updatedBy : UUID;
      updatedByName : String;
      updatedOn : Timestamp;
    };
  };
  isEndOfPurpose : Boolean;
};

@title : 'Lead Qualification query response'
type Lead.Service_types.LeadQualificationqueryresponse {
  count : Integer;
  value : many {
    code : String;
    description : String;
    isActive : Boolean;
    sequence : Integer;
    @assert.range : true
    color : String enum {
      PRIMARY;
      AQUA;
      TEAL;
      GREEN;
      YELLOW;
      ORANGE;
      RED;
      PINK;
      PURPLE;
      VIOLET;
      ULTRAMARINE;
      BLUE;
    };
  };
};

@title : 'Lead Qualification create request'
type Lead.Service_types.LeadQualificationcreaterequest {
  code : String;
  description : String;
  isActive : Boolean;
  sequence : Integer;
  @assert.range : true
  color : String enum {
    PRIMARY;
    AQUA;
    TEAL;
    GREEN;
    YELLOW;
    ORANGE;
    RED;
    PINK;
    PURPLE;
    VIOLET;
    ULTRAMARINE;
    BLUE;
  };
};

@title : 'Lead Qualification file'
type Lead.Service_types.LeadQualificationfile {
  value : {
    code : String;
    description : String;
    isActive : Boolean;
    sequence : Integer;
    @assert.range : true
    color : String enum {
      PRIMARY;
      AQUA;
      TEAL;
      GREEN;
      YELLOW;
      ORANGE;
      RED;
      PINK;
      PURPLE;
      VIOLET;
      ULTRAMARINE;
      BLUE;
    };
  };
};

@title : 'Lead Source query response'
type Lead.Service_types.LeadSourcequeryresponse {
  count : Integer;
  value : many {
    code : String;
    description : String;
    isActive : Boolean;
    sequence : Integer;
  };
};

@title : 'Lead Source create request'
type Lead.Service_types.LeadSourcecreaterequest {
  code : String;
  description : String;
  isActive : Boolean;
  sequence : Integer;
};

@title : 'Lead Source file'
type Lead.Service_types.LeadSourcefile {
  value : {
    code : String;
    description : String;
    isActive : Boolean;
    sequence : Integer;
  };
};

@title : 'Lead Status query response'
type Lead.Service_types.LeadStatusqueryresponse {
  count : Integer;
  value : many {
    code : String;
    @assert.range : true
    internalStatus : String enum {
      OPEN;
      CONVERTED;
      ACCEPTED;
      DECLINED;
    };
    isActive : Boolean;
    sequence : Integer;
    description : String;
    descriptions : many {
      content : String;
      languageCode : String;
    };
  };
};

@title : 'Lead Status create request'
type Lead.Service_types.LeadStatuscreaterequest {
  code : String;
  @assert.range : true
  internalStatus : String enum {
    OPEN;
    CONVERTED;
    ACCEPTED;
    DECLINED;
  };
  isActive : Boolean;
  sequence : Integer;
  description : String;
  descriptions : many {
    content : String;
    languageCode : String;
  };
};

@title : 'Lead Status file'
type Lead.Service_types.LeadStatusfile {
  value : {
    code : String;
    @assert.range : true
    internalStatus : String enum {
      OPEN;
      CONVERTED;
      ACCEPTED;
      DECLINED;
    };
    isActive : Boolean;
    sequence : Integer;
    description : String;
    descriptions : many {
      content : String;
      languageCode : String;
    };
  };
};

