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
 * @interface APIBUSINESSPARTNERABPAddressIndependentWebsiteType
 */
export interface APIBUSINESSPARTNERABPAddressIndependentWebsiteType {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentWebsiteType
     */
    businessPartner?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentWebsiteType
     */
    addressID?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentWebsiteType
     */
    person?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentWebsiteType
     */
    ordinalNumber?: string;
    /**
     * Flag: this address is the default address
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentWebsiteType
     */
    isDefaultURLAddress?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentWebsiteType
     */
    uRLFieldLength?: number | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentWebsiteType
     */
    websiteURL?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPAddressIndependentWebsiteType interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPAddressIndependentWebsiteType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABPAddressIndependentWebsiteTypeFromJSON(json: any): APIBUSINESSPARTNERABPAddressIndependentWebsiteType {
    return APIBUSINESSPARTNERABPAddressIndependentWebsiteTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPAddressIndependentWebsiteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPAddressIndependentWebsiteType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': !exists(json, 'BusinessPartner') ? undefined : json['BusinessPartner'],
        'addressID': !exists(json, 'AddressID') ? undefined : json['AddressID'],
        'person': !exists(json, 'Person') ? undefined : json['Person'],
        'ordinalNumber': !exists(json, 'OrdinalNumber') ? undefined : json['OrdinalNumber'],
        'isDefaultURLAddress': !exists(json, 'IsDefaultURLAddress') ? undefined : json['IsDefaultURLAddress'],
        'uRLFieldLength': !exists(json, 'URLFieldLength') ? undefined : json['URLFieldLength'],
        'websiteURL': !exists(json, 'WebsiteURL') ? undefined : json['WebsiteURL'],
    };
}

export function APIBUSINESSPARTNERABPAddressIndependentWebsiteTypeToJSON(value?: APIBUSINESSPARTNERABPAddressIndependentWebsiteType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'AddressID': value.addressID,
        'Person': value.person,
        'OrdinalNumber': value.ordinalNumber,
        'IsDefaultURLAddress': value.isDefaultURLAddress,
        'URLFieldLength': value.uRLFieldLength,
        'WebsiteURL': value.websiteURL,
    };
}
