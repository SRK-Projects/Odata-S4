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
 * @interface APIBUSINESSPARTNERAAddressEmailAddressTypeCreate
 */
export interface APIBUSINESSPARTNERAAddressEmailAddressTypeCreate {
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressEmailAddressTypeCreate
     */
    addressID: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressEmailAddressTypeCreate
     */
    person: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressEmailAddressTypeCreate
     */
    ordinalNumber: string;
    /**
     * Flag: this address is the default address
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERAAddressEmailAddressTypeCreate
     */
    isDefaultEmailAddress?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressEmailAddressTypeCreate
     */
    emailAddress?: string | null;
    /**
     * Communication link notes
     * @type {string}
     * @memberof APIBUSINESSPARTNERAAddressEmailAddressTypeCreate
     */
    addressCommunicationRemarkText?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERAAddressEmailAddressTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERAAddressEmailAddressTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "addressID" in value;
    isInstance = isInstance && "person" in value;
    isInstance = isInstance && "ordinalNumber" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERAAddressEmailAddressTypeCreateFromJSON(json: any): APIBUSINESSPARTNERAAddressEmailAddressTypeCreate {
    return APIBUSINESSPARTNERAAddressEmailAddressTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERAAddressEmailAddressTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERAAddressEmailAddressTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressID': json['AddressID'],
        'person': json['Person'],
        'ordinalNumber': json['OrdinalNumber'],
        'isDefaultEmailAddress': !exists(json, 'IsDefaultEmailAddress') ? undefined : json['IsDefaultEmailAddress'],
        'emailAddress': !exists(json, 'EmailAddress') ? undefined : json['EmailAddress'],
        'addressCommunicationRemarkText': !exists(json, 'AddressCommunicationRemarkText') ? undefined : json['AddressCommunicationRemarkText'],
    };
}

export function APIBUSINESSPARTNERAAddressEmailAddressTypeCreateToJSON(value?: APIBUSINESSPARTNERAAddressEmailAddressTypeCreate | null): any {
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
        'IsDefaultEmailAddress': value.isDefaultEmailAddress,
        'EmailAddress': value.emailAddress,
        'AddressCommunicationRemarkText': value.addressCommunicationRemarkText,
    };
}
