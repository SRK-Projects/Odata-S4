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
 * @interface APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate
 */
export interface APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate
     */
    businessPartner: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate
     */
    addressID: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate
     */
    person: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate
     */
    ordinalNumber: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate
     */
    emailAddress?: string | null;
    /**
     * Indicator : Current Default Email Address
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate
     */
    isDefaultEmailAddress?: boolean | null;
    /**
     * 
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate
     */
    validityStartDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate
     */
    validityEndDate?: Date | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "businessPartner" in value;
    isInstance = isInstance && "addressID" in value;
    isInstance = isInstance && "person" in value;
    isInstance = isInstance && "ordinalNumber" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate {
    return APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': json['BusinessPartner'],
        'addressID': json['AddressID'],
        'person': json['Person'],
        'ordinalNumber': json['OrdinalNumber'],
        'emailAddress': !exists(json, 'EmailAddress') ? undefined : json['EmailAddress'],
        'isDefaultEmailAddress': !exists(json, 'IsDefaultEmailAddress') ? undefined : json['IsDefaultEmailAddress'],
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (json['ValidityEndDate'] === null ? null : new Date(json['ValidityEndDate'])),
    };
}

export function APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreateToJSON(value?: APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate | null): any {
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
        'EmailAddress': value.emailAddress,
        'IsDefaultEmailAddress': value.isDefaultEmailAddress,
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString().substring(0,10)),
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate === null ? null : value.validityEndDate.toISOString().substring(0,10)),
    };
}

