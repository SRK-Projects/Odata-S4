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
 * @interface APIBUSINESSPARTNERACustomerTextTypeCreate
 */
export interface APIBUSINESSPARTNERACustomerTextTypeCreate {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTextTypeCreate
     */
    customer: string;
    /**
     * Language key
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTextTypeCreate
     */
    language: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTextTypeCreate
     */
    longTextID: string;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustomerTextTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustomerTextTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customer" in value;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "longTextID" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERACustomerTextTypeCreateFromJSON(json: any): APIBUSINESSPARTNERACustomerTextTypeCreate {
    return APIBUSINESSPARTNERACustomerTextTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustomerTextTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustomerTextTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['Customer'],
        'language': json['Language'],
        'longTextID': json['LongTextID'],
    };
}

export function APIBUSINESSPARTNERACustomerTextTypeCreateToJSON(value?: APIBUSINESSPARTNERACustomerTextTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'Language': value.language,
        'LongTextID': value.longTextID,
    };
}

