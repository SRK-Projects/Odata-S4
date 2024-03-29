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
 * @interface APIBUSINESSPARTNERAAddressPhoneNumberType
 */
export interface APIBUSINESSPARTNERAAddressPhoneNumberType {
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    addressID?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    person?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    ordinalNumber?: string;
    /**
     * Country/Region for Telephone/Fax Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    destinationLocationCountry?: string | null;
    /**
     * Standard Sender Address in this Communication Type
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    isDefaultPhoneNumber?: boolean | null;
    /**
     * Telephone No.: Dialing Code and Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    phoneNumber?: string | null;
    /**
     * Telephone no.: Extension
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    phoneNumberExtension?: string | null;
    /**
     * Complete Number: Dialing Code+Number+Extension
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    internationalPhoneNumber?: string | null;
    /**
     * Indicator: Telephone is a Mobile Telephone
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    phoneNumberType?: string | null;
    /**
     * Communication link notes
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressPhoneNumberType
     */
    addressCommunicationRemarkText?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERAAddressPhoneNumberType interface.
 */
export function instanceOfAPIBUSINESSPARTNERAAddressPhoneNumberType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERAAddressPhoneNumberTypeFromJSON(json: any): APIBUSINESSPARTNERAAddressPhoneNumberType {
    return APIBUSINESSPARTNERAAddressPhoneNumberTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERAAddressPhoneNumberTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERAAddressPhoneNumberType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressID': !exists(json, 'AddressID') ? undefined : json['AddressID'],
        'person': !exists(json, 'Person') ? undefined : json['Person'],
        'ordinalNumber': !exists(json, 'OrdinalNumber') ? undefined : json['OrdinalNumber'],
        'destinationLocationCountry': !exists(json, 'DestinationLocationCountry') ? undefined : json['DestinationLocationCountry'],
        'isDefaultPhoneNumber': !exists(json, 'IsDefaultPhoneNumber') ? undefined : json['IsDefaultPhoneNumber'],
        'phoneNumber': !exists(json, 'PhoneNumber') ? undefined : json['PhoneNumber'],
        'phoneNumberExtension': !exists(json, 'PhoneNumberExtension') ? undefined : json['PhoneNumberExtension'],
        'internationalPhoneNumber': !exists(json, 'InternationalPhoneNumber') ? undefined : json['InternationalPhoneNumber'],
        'phoneNumberType': !exists(json, 'PhoneNumberType') ? undefined : json['PhoneNumberType'],
        'addressCommunicationRemarkText': !exists(json, 'AddressCommunicationRemarkText') ? undefined : json['AddressCommunicationRemarkText'],
    };
}

export function APIBUSINESSPARTNERAAddressPhoneNumberTypeToJSON(value?: APIBUSINESSPARTNERAAddressPhoneNumberType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AddressID': value.addressID,
        'Person': value.person,
        'OrdinalNumber': value.ordinalNumber,
        'DestinationLocationCountry': value.destinationLocationCountry,
        'IsDefaultPhoneNumber': value.isDefaultPhoneNumber,
        'PhoneNumber': value.phoneNumber,
        'PhoneNumberExtension': value.phoneNumberExtension,
        'InternationalPhoneNumber': value.internationalPhoneNumber,
        'PhoneNumberType': value.phoneNumberType,
        'AddressCommunicationRemarkText': value.addressCommunicationRemarkText,
    };
}

