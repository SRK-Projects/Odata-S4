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
 * @interface APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate
 */
export interface APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate {
    /**
     * Country/Region for Telephone/Fax Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate
     */
    faxCountry?: string | null;
    /**
     * Fax Number: Dialing Code and Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate
     */
    faxAreaCodeSubscriberNumber?: string | null;
    /**
     * Fax no.: Extension
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate
     */
    faxNumberExtension?: string | null;
    /**
     * Indicator : Current Default Fax Number
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate
     */
    isDefaultFaxNumber?: boolean | null;
    /**
     * 
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate
     */
    validityEndDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate
     */
    validityStartDate?: Date | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate {
    return APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'faxCountry': !exists(json, 'FaxCountry') ? undefined : json['FaxCountry'],
        'faxAreaCodeSubscriberNumber': !exists(json, 'FaxAreaCodeSubscriberNumber') ? undefined : json['FaxAreaCodeSubscriberNumber'],
        'faxNumberExtension': !exists(json, 'FaxNumberExtension') ? undefined : json['FaxNumberExtension'],
        'isDefaultFaxNumber': !exists(json, 'IsDefaultFaxNumber') ? undefined : json['IsDefaultFaxNumber'],
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (json['ValidityEndDate'] === null ? null : new Date(json['ValidityEndDate'])),
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
    };
}

export function APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdateToJSON(value?: APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'FaxCountry': value.faxCountry,
        'FaxAreaCodeSubscriberNumber': value.faxAreaCodeSubscriberNumber,
        'FaxNumberExtension': value.faxNumberExtension,
        'IsDefaultFaxNumber': value.isDefaultFaxNumber,
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate === null ? null : value.validityEndDate.toISOString().substring(0,10)),
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString().substring(0,10)),
    };
}

