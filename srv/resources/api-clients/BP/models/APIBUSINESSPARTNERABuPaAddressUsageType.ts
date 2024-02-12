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
 * @interface APIBUSINESSPARTNERABuPaAddressUsageType
 */
export interface APIBUSINESSPARTNERABuPaAddressUsageType {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageType
     */
    businessPartner?: string;
    /**
     * Validity End of a Business Partner Address Usage
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageType
     */
    validityEndDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageType
     */
    addressUsage?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageType
     */
    addressID?: string;
    /**
     * Validity Start of a Business Partner Address Usage
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageType
     */
    validityStartDate?: Date | null;
    /**
     * Indicator: Standard Address Usage
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageType
     */
    standardUsage?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageType
     */
    authorizationGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABuPaAddressUsageType interface.
 */
export function instanceOfAPIBUSINESSPARTNERABuPaAddressUsageType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABuPaAddressUsageTypeFromJSON(json: any): APIBUSINESSPARTNERABuPaAddressUsageType {
    return APIBUSINESSPARTNERABuPaAddressUsageTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABuPaAddressUsageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABuPaAddressUsageType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': !exists(json, 'BusinessPartner') ? undefined : json['BusinessPartner'],
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (new Date(json['ValidityEndDate'])),
        'addressUsage': !exists(json, 'AddressUsage') ? undefined : json['AddressUsage'],
        'addressID': !exists(json, 'AddressID') ? undefined : json['AddressID'],
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'standardUsage': !exists(json, 'StandardUsage') ? undefined : json['StandardUsage'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
    };
}

export function APIBUSINESSPARTNERABuPaAddressUsageTypeToJSON(value?: APIBUSINESSPARTNERABuPaAddressUsageType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate.toISOString()),
        'AddressUsage': value.addressUsage,
        'AddressID': value.addressID,
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString()),
        'StandardUsage': value.standardUsage,
        'AuthorizationGroup': value.authorizationGroup,
    };
}

