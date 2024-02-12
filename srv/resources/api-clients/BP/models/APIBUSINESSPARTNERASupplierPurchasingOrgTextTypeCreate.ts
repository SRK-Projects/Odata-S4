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
 * @interface APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate
 */
export interface APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate {
    /**
     * Account Number of Supplier
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate
     */
    supplier: string;
    /**
     * Purchasing Organization
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate
     */
    purchasingOrganization: string;
    /**
     * Language key
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate
     */
    language: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate
     */
    longTextID: string;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "supplier" in value;
    isInstance = isInstance && "purchasingOrganization" in value;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "longTextID" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreateFromJSON(json: any): APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate {
    return APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'supplier': json['Supplier'],
        'purchasingOrganization': json['PurchasingOrganization'],
        'language': json['Language'],
        'longTextID': json['LongTextID'],
    };
}

export function APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreateToJSON(value?: APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Supplier': value.supplier,
        'PurchasingOrganization': value.purchasingOrganization,
        'Language': value.language,
        'LongTextID': value.longTextID,
    };
}
