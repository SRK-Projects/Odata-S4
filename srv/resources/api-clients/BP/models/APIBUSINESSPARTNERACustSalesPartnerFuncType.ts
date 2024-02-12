/* tslint:disable */
/* eslint-disable */
/**
 * Business Partner (A2X)
 *     This service enables you to create, display, update, and delete data related to Business Partner, Supplier, and Customer with the data provided in a payload, in an API call. This service also supports create deep entity operation and batch processing.
 *
 * The version of the OpenAPI document: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERACustSalesPartnerFuncType
 */
export interface APIBUSINESSPARTNERACustSalesPartnerFuncType {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    customer?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    salesOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    distributionChannel?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    division?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    partnerCounter?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    partnerFunction?: string;
    /**
     * Account Number of Supplier
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    bPCustomerNumber?: string | null;
    /**
     * Cust.-Specif. Descr. of Business Partner (Plant, Stor. Loc.)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    customerPartnerDescription?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    defaultPartner?: boolean | null;
    /**
     * Account Number of Supplier
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    supplier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    personnelNumber?: string | null;
    /**
     * Number of Contact Person
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    contactPerson?: string | null;
    /**
     * Business Partner Address Number (from BUT020)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    addressID?: string | null;
    /**
     * Authorization Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSalesPartnerFuncType
     */
    authorizationGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustSalesPartnerFuncType interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustSalesPartnerFuncType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERACustSalesPartnerFuncTypeFromJSON(json: any): APIBUSINESSPARTNERACustSalesPartnerFuncType {
    return APIBUSINESSPARTNERACustSalesPartnerFuncTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustSalesPartnerFuncTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustSalesPartnerFuncType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': !exists(json, 'Customer') ? undefined : json['Customer'],
        'salesOrganization': !exists(json, 'SalesOrganization') ? undefined : json['SalesOrganization'],
        'distributionChannel': !exists(json, 'DistributionChannel') ? undefined : json['DistributionChannel'],
        'division': !exists(json, 'Division') ? undefined : json['Division'],
        'partnerCounter': !exists(json, 'PartnerCounter') ? undefined : json['PartnerCounter'],
        'partnerFunction': !exists(json, 'PartnerFunction') ? undefined : json['PartnerFunction'],
        'bPCustomerNumber': !exists(json, 'BPCustomerNumber') ? undefined : json['BPCustomerNumber'],
        'customerPartnerDescription': !exists(json, 'CustomerPartnerDescription') ? undefined : json['CustomerPartnerDescription'],
        'defaultPartner': !exists(json, 'DefaultPartner') ? undefined : json['DefaultPartner'],
        'supplier': !exists(json, 'Supplier') ? undefined : json['Supplier'],
        'personnelNumber': !exists(json, 'PersonnelNumber') ? undefined : json['PersonnelNumber'],
        'contactPerson': !exists(json, 'ContactPerson') ? undefined : json['ContactPerson'],
        'addressID': !exists(json, 'AddressID') ? undefined : json['AddressID'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
    };
}

export function APIBUSINESSPARTNERACustSalesPartnerFuncTypeToJSON(value?: APIBUSINESSPARTNERACustSalesPartnerFuncType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'SalesOrganization': value.salesOrganization,
        'DistributionChannel': value.distributionChannel,
        'Division': value.division,
        'PartnerCounter': value.partnerCounter,
        'PartnerFunction': value.partnerFunction,
        'BPCustomerNumber': value.bPCustomerNumber,
        'CustomerPartnerDescription': value.customerPartnerDescription,
        'DefaultPartner': value.defaultPartner,
        'Supplier': value.supplier,
        'PersonnelNumber': value.personnelNumber,
        'ContactPerson': value.contactPerson,
        'AddressID': value.addressID,
        'AuthorizationGroup': value.authorizationGroup,
    };
}

