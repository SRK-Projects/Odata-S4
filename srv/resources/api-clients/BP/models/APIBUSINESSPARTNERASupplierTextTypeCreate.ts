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
 * @interface APIBUSINESSPARTNERASupplierTextTypeCreate
 */
export interface APIBUSINESSPARTNERASupplierTextTypeCreate {
    /**
     * Account Number of Supplier
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTextTypeCreate
     */
    supplier: string;
    /**
     * Language key
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTextTypeCreate
     */
    language: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTextTypeCreate
     */
    longTextID: string;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERASupplierTextTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERASupplierTextTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "supplier" in value;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "longTextID" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERASupplierTextTypeCreateFromJSON(json: any): APIBUSINESSPARTNERASupplierTextTypeCreate {
    return APIBUSINESSPARTNERASupplierTextTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERASupplierTextTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERASupplierTextTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'supplier': json['Supplier'],
        'language': json['Language'],
        'longTextID': json['LongTextID'],
    };
}

export function APIBUSINESSPARTNERASupplierTextTypeCreateToJSON(value?: APIBUSINESSPARTNERASupplierTextTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Supplier': value.supplier,
        'Language': value.language,
        'LongTextID': value.longTextID,
    };
}

