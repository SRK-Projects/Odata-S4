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
import type { APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoType } from './APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoType';
import {
    APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeFromJSON,
    APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeFromJSONTyped,
    APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeToJSON,
} from './APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoType';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERACustomerSalesAreaTaxType
 */
export interface APIBUSINESSPARTNERACustomerSalesAreaTaxType {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTaxType
     */
    customer?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTaxType
     */
    salesOrganization?: string;
    /**
     * Reference distrib.channel for cust.and material masters
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTaxType
     */
    distributionChannel?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTaxType
     */
    division?: string;
    /**
     * Departure Country/Region (from which the goods are sent)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTaxType
     */
    departureCountry?: string;
    /**
     * Tax Condition Type (Sales Tax, Value-Added Tax,...)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTaxType
     */
    customerTaxCategory?: string;
    /**
     * Tax Classification for Customer
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTaxType
     */
    customerTaxClassification?: string | null;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoType>}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTaxType
     */
    toSlsAreaAddrDepdntTax?: Array<APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoType>;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustomerSalesAreaTaxType interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustomerSalesAreaTaxType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERACustomerSalesAreaTaxTypeFromJSON(json: any): APIBUSINESSPARTNERACustomerSalesAreaTaxType {
    return APIBUSINESSPARTNERACustomerSalesAreaTaxTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustomerSalesAreaTaxTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustomerSalesAreaTaxType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': !exists(json, 'Customer') ? undefined : json['Customer'],
        'salesOrganization': !exists(json, 'SalesOrganization') ? undefined : json['SalesOrganization'],
        'distributionChannel': !exists(json, 'DistributionChannel') ? undefined : json['DistributionChannel'],
        'division': !exists(json, 'Division') ? undefined : json['Division'],
        'departureCountry': !exists(json, 'DepartureCountry') ? undefined : json['DepartureCountry'],
        'customerTaxCategory': !exists(json, 'CustomerTaxCategory') ? undefined : json['CustomerTaxCategory'],
        'customerTaxClassification': !exists(json, 'CustomerTaxClassification') ? undefined : json['CustomerTaxClassification'],
        'toSlsAreaAddrDepdntTax': !exists(json, 'to_SlsAreaAddrDepdntTax') ? undefined : ((json['to_SlsAreaAddrDepdntTax'] as Array<any>).map(APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeFromJSON)),
    };
}

export function APIBUSINESSPARTNERACustomerSalesAreaTaxTypeToJSON(value?: APIBUSINESSPARTNERACustomerSalesAreaTaxType | null): any {
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
        'DepartureCountry': value.departureCountry,
        'CustomerTaxCategory': value.customerTaxCategory,
        'CustomerTaxClassification': value.customerTaxClassification,
        'to_SlsAreaAddrDepdntTax': value.toSlsAreaAddrDepdntTax === undefined ? undefined : ((value.toSlsAreaAddrDepdntTax as Array<any>).map(APIBUSINESSPARTNERACustSlsAreaAddrDepdntTaxInfoTypeToJSON)),
    };
}

