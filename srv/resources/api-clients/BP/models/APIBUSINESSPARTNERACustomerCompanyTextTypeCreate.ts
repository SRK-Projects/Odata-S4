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
 * @interface APIBUSINESSPARTNERACustomerCompanyTextTypeCreate
 */
export interface APIBUSINESSPARTNERACustomerCompanyTextTypeCreate {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyTextTypeCreate
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyTextTypeCreate
     */
    companyCode: string;
    /**
     * Language key
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyTextTypeCreate
     */
    language: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyTextTypeCreate
     */
    longTextID: string;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustomerCompanyTextTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustomerCompanyTextTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customer" in value;
    isInstance = isInstance && "companyCode" in value;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "longTextID" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERACustomerCompanyTextTypeCreateFromJSON(json: any): APIBUSINESSPARTNERACustomerCompanyTextTypeCreate {
    return APIBUSINESSPARTNERACustomerCompanyTextTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustomerCompanyTextTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustomerCompanyTextTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['Customer'],
        'companyCode': json['CompanyCode'],
        'language': json['Language'],
        'longTextID': json['LongTextID'],
    };
}

export function APIBUSINESSPARTNERACustomerCompanyTextTypeCreateToJSON(value?: APIBUSINESSPARTNERACustomerCompanyTextTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'CompanyCode': value.companyCode,
        'Language': value.language,
        'LongTextID': value.longTextID,
    };
}

