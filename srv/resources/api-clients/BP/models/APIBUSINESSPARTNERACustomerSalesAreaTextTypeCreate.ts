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
 * @interface APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate
 */
export interface APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate
     */
    salesOrganization: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate
     */
    distributionChannel: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate
     */
    division: string;
    /**
     * Language key
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate
     */
    language: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate
     */
    longTextID: string;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customer" in value;
    isInstance = isInstance && "salesOrganization" in value;
    isInstance = isInstance && "distributionChannel" in value;
    isInstance = isInstance && "division" in value;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "longTextID" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreateFromJSON(json: any): APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate {
    return APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['Customer'],
        'salesOrganization': json['SalesOrganization'],
        'distributionChannel': json['DistributionChannel'],
        'division': json['Division'],
        'language': json['Language'],
        'longTextID': json['LongTextID'],
    };
}

export function APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreateToJSON(value?: APIBUSINESSPARTNERACustomerSalesAreaTextTypeCreate | null): any {
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
        'Language': value.language,
        'LongTextID': value.longTextID,
    };
}
