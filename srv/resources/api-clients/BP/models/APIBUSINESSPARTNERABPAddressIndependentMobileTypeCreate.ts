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
 * @interface APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
 */
export interface APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    businessPartner: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    addressID: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    person: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    ordinalNumber: string;
    /**
     * Data element for domain BOOLE: TRUE (='X') and FALSE (=' ')
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    isDefaultPhoneNumber?: boolean | null;
    /**
     * Country/Region for Telephone/Fax Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    mobilePhoneCountry?: string | null;
    /**
     * Telephone No.: Dialing Code and Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    mobilePhoneNumber?: string | null;
    /**
     * Telephone no.: Extension
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    phoneNumberExtension?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    validityStartDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate
     */
    validityEndDate?: Date | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "businessPartner" in value;
    isInstance = isInstance && "addressID" in value;
    isInstance = isInstance && "person" in value;
    isInstance = isInstance && "ordinalNumber" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate {
    return APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': json['BusinessPartner'],
        'addressID': json['AddressID'],
        'person': json['Person'],
        'ordinalNumber': json['OrdinalNumber'],
        'isDefaultPhoneNumber': !exists(json, 'IsDefaultPhoneNumber') ? undefined : json['IsDefaultPhoneNumber'],
        'mobilePhoneCountry': !exists(json, 'MobilePhoneCountry') ? undefined : json['MobilePhoneCountry'],
        'mobilePhoneNumber': !exists(json, 'MobilePhoneNumber') ? undefined : json['MobilePhoneNumber'],
        'phoneNumberExtension': !exists(json, 'PhoneNumberExtension') ? undefined : json['PhoneNumberExtension'],
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (json['ValidityEndDate'] === null ? null : new Date(json['ValidityEndDate'])),
    };
}

export function APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreateToJSON(value?: APIBUSINESSPARTNERABPAddressIndependentMobileTypeCreate | null): any {
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
        'IsDefaultPhoneNumber': value.isDefaultPhoneNumber,
        'MobilePhoneCountry': value.mobilePhoneCountry,
        'MobilePhoneNumber': value.mobilePhoneNumber,
        'PhoneNumberExtension': value.phoneNumberExtension,
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString().substring(0,10)),
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate === null ? null : value.validityEndDate.toISOString().substring(0,10)),
    };
}

