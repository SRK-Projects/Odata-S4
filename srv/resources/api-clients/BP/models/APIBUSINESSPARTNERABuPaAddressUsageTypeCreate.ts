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
 * @interface APIBUSINESSPARTNERABuPaAddressUsageTypeCreate
 */
export interface APIBUSINESSPARTNERABuPaAddressUsageTypeCreate {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageTypeCreate
     */
    businessPartner: string;
    /**
     * Validity End of a Business Partner Address Usage
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageTypeCreate
     */
    validityEndDate: Date;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageTypeCreate
     */
    addressUsage: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageTypeCreate
     */
    addressID: string;
    /**
     * Validity Start of a Business Partner Address Usage
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageTypeCreate
     */
    validityStartDate?: Date | null;
    /**
     * Indicator: Standard Address Usage
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageTypeCreate
     */
    standardUsage?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaAddressUsageTypeCreate
     */
    authorizationGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABuPaAddressUsageTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABuPaAddressUsageTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "businessPartner" in value;
    isInstance = isInstance && "validityEndDate" in value;
    isInstance = isInstance && "addressUsage" in value;
    isInstance = isInstance && "addressID" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABuPaAddressUsageTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABuPaAddressUsageTypeCreate {
    return APIBUSINESSPARTNERABuPaAddressUsageTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABuPaAddressUsageTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABuPaAddressUsageTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': json['BusinessPartner'],
        'validityEndDate': (new Date(json['ValidityEndDate'])),
        'addressUsage': json['AddressUsage'],
        'addressID': json['AddressID'],
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'standardUsage': !exists(json, 'StandardUsage') ? undefined : json['StandardUsage'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
    };
}

export function APIBUSINESSPARTNERABuPaAddressUsageTypeCreateToJSON(value?: APIBUSINESSPARTNERABuPaAddressUsageTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'ValidityEndDate': (value.validityEndDate.toISOString()),
        'AddressUsage': value.addressUsage,
        'AddressID': value.addressID,
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString()),
        'StandardUsage': value.standardUsage,
        'AuthorizationGroup': value.authorizationGroup,
    };
}

