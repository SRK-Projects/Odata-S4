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
 * @interface APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate
 */
export interface APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate
     */
    salesOrganization: string;
    /**
     * Reference distrib.channel for cust.and material masters
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate
     */
    distributionChannel: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate
     */
    division: string;
    /**
     * Business Partner Address Number (from BUT020)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate
     */
    addressID: string;
    /**
     * Departure Country/Region (from which the goods are sent)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate
     */
    departureCountry: string;
    /**
     * Tax Condition Type (Sales Tax, Value-Added Tax,...)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate
     */
    customerTaxCategory: string;
    /**
     * Tax Classification for Customer
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate
     */
    customerTaxClassification?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customer" in value;
    isInstance = isInstance && "salesOrganization" in value;
    isInstance = isInstance && "distributionChannel" in value;
    isInstance = isInstance && "division" in value;
    isInstance = isInstance && "addressID" in value;
    isInstance = isInstance && "departureCountry" in value;
    isInstance = isInstance && "customerTaxCategory" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreateFromJSON(json: any): APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate {
    return APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['Customer'],
        'salesOrganization': json['SalesOrganization'],
        'distributionChannel': json['DistributionChannel'],
        'division': json['Division'],
        'addressID': json['AddressID'],
        'departureCountry': json['DepartureCountry'],
        'customerTaxCategory': json['CustomerTaxCategory'],
        'customerTaxClassification': !exists(json, 'CustomerTaxClassification') ? undefined : json['CustomerTaxClassification'],
    };
}

export function APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreateToJSON(value?: APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeCreate | null): any {
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
        'AddressID': value.addressID,
        'DepartureCountry': value.departureCountry,
        'CustomerTaxCategory': value.customerTaxCategory,
        'CustomerTaxClassification': value.customerTaxClassification,
    };
}

