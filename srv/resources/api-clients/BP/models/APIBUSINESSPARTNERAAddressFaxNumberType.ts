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
 * @interface APIBUSINESSPARTNERAAddressFaxNumberType
 */
export interface APIBUSINESSPARTNERAAddressFaxNumberType {
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressFaxNumberType
     */
    addressID?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressFaxNumberType
     */
    person?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressFaxNumberType
     */
    ordinalNumber?: string;
    /**
     * Standard Sender Address in this Communication Type
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERAAddressFaxNumberType
     */
    isDefaultFaxNumber?: boolean | null;
    /**
     * Country/Region for Telephone/Fax Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressFaxNumberType
     */
    faxCountry?: string | null;
    /**
     * Fax Number: Dialing Code and Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressFaxNumberType
     */
    faxNumber?: string | null;
    /**
     * Fax no.: Extension
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressFaxNumberType
     */
    faxNumberExtension?: string | null;
    /**
     * Complete Number: Dialing Code+Number+Extension
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressFaxNumberType
     */
    internationalFaxNumber?: string | null;
    /**
     * Communication link notes
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressFaxNumberType
     */
    addressCommunicationRemarkText?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERAAddressFaxNumberType interface.
 */
export function instanceOfAPIBUSINESSPARTNERAAddressFaxNumberType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERAAddressFaxNumberTypeFromJSON(json: any): APIBUSINESSPARTNERAAddressFaxNumberType {
    return APIBUSINESSPARTNERAAddressFaxNumberTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERAAddressFaxNumberTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERAAddressFaxNumberType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressID': !exists(json, 'AddressID') ? undefined : json['AddressID'],
        'person': !exists(json, 'Person') ? undefined : json['Person'],
        'ordinalNumber': !exists(json, 'OrdinalNumber') ? undefined : json['OrdinalNumber'],
        'isDefaultFaxNumber': !exists(json, 'IsDefaultFaxNumber') ? undefined : json['IsDefaultFaxNumber'],
        'faxCountry': !exists(json, 'FaxCountry') ? undefined : json['FaxCountry'],
        'faxNumber': !exists(json, 'FaxNumber') ? undefined : json['FaxNumber'],
        'faxNumberExtension': !exists(json, 'FaxNumberExtension') ? undefined : json['FaxNumberExtension'],
        'internationalFaxNumber': !exists(json, 'InternationalFaxNumber') ? undefined : json['InternationalFaxNumber'],
        'addressCommunicationRemarkText': !exists(json, 'AddressCommunicationRemarkText') ? undefined : json['AddressCommunicationRemarkText'],
    };
}

export function APIBUSINESSPARTNERAAddressFaxNumberTypeToJSON(value?: APIBUSINESSPARTNERAAddressFaxNumberType | null): any {
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
        'IsDefaultFaxNumber': value.isDefaultFaxNumber,
        'FaxCountry': value.faxCountry,
        'FaxNumber': value.faxNumber,
        'FaxNumberExtension': value.faxNumberExtension,
        'InternationalFaxNumber': value.internationalFaxNumber,
        'AddressCommunicationRemarkText': value.addressCommunicationRemarkText,
    };
}

