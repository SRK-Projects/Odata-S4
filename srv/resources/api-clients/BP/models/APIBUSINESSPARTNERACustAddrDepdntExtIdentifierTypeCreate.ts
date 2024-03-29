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
 * @interface APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate
 */
export interface APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate
     */
    customer: string;
    /**
     * Business Partner Address Number (from BUT020)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate
     */
    addressID: string;
    /**
     * Seller-Defined Customer Address ID for EDI
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate
     */
    customerExternalRefID?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customer" in value;
    isInstance = isInstance && "addressID" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreateFromJSON(json: any): APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate {
    return APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['Customer'],
        'addressID': json['AddressID'],
        'customerExternalRefID': !exists(json, 'CustomerExternalRefID') ? undefined : json['CustomerExternalRefID'],
    };
}

export function APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreateToJSON(value?: APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'AddressID': value.addressID,
        'CustomerExternalRefID': value.customerExternalRefID,
    };
}

