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
 * @interface APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate
 */
export interface APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate {
    /**
     * Data element for domain BOOLE: TRUE (='X') and FALSE (=' ')
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate
     */
    isDefaultPhoneNumber?: boolean | null;
    /**
     * Country/Region for Telephone/Fax Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate
     */
    mobilePhoneCountry?: string | null;
    /**
     * Telephone No.: Dialing Code and Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate
     */
    mobilePhoneNumber?: string | null;
    /**
     * Telephone no.: Extension
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate
     */
    phoneNumberExtension?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate
     */
    validityStartDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate
     */
    validityEndDate?: Date | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate {
    return APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isDefaultPhoneNumber': !exists(json, 'IsDefaultPhoneNumber') ? undefined : json['IsDefaultPhoneNumber'],
        'mobilePhoneCountry': !exists(json, 'MobilePhoneCountry') ? undefined : json['MobilePhoneCountry'],
        'mobilePhoneNumber': !exists(json, 'MobilePhoneNumber') ? undefined : json['MobilePhoneNumber'],
        'phoneNumberExtension': !exists(json, 'PhoneNumberExtension') ? undefined : json['PhoneNumberExtension'],
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (json['ValidityEndDate'] === null ? null : new Date(json['ValidityEndDate'])),
    };
}

export function APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdateToJSON(value?: APIBUSINESSPARTNERABPAddressIndependentMobileTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'IsDefaultPhoneNumber': value.isDefaultPhoneNumber,
        'MobilePhoneCountry': value.mobilePhoneCountry,
        'MobilePhoneNumber': value.mobilePhoneNumber,
        'PhoneNumberExtension': value.phoneNumberExtension,
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString().substring(0,10)),
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate === null ? null : value.validityEndDate.toISOString().substring(0,10)),
    };
}

