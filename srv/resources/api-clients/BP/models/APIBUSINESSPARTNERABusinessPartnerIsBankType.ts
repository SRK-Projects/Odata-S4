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
 * @interface APIBUSINESSPARTNERABusinessPartnerIsBankType
 */
export interface APIBUSINESSPARTNERABusinessPartnerIsBankType {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerIsBankType
     */
    businessPartner?: string;
    /**
     * Bank Keys
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerIsBankType
     */
    bankKey?: string | null;
    /**
     * Bank Country/Region Key
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerIsBankType
     */
    bankCountry?: string | null;
    /**
     * Minimum Reserve Requirement for Bank
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerIsBankType
     */
    bPMinimumReserve?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABusinessPartnerIsBankType interface.
 */
export function instanceOfAPIBUSINESSPARTNERABusinessPartnerIsBankType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABusinessPartnerIsBankTypeFromJSON(json: any): APIBUSINESSPARTNERABusinessPartnerIsBankType {
    return APIBUSINESSPARTNERABusinessPartnerIsBankTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABusinessPartnerIsBankTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABusinessPartnerIsBankType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': !exists(json, 'BusinessPartner') ? undefined : json['BusinessPartner'],
        'bankKey': !exists(json, 'BankKey') ? undefined : json['BankKey'],
        'bankCountry': !exists(json, 'BankCountry') ? undefined : json['BankCountry'],
        'bPMinimumReserve': !exists(json, 'BPMinimumReserve') ? undefined : json['BPMinimumReserve'],
    };
}

export function APIBUSINESSPARTNERABusinessPartnerIsBankTypeToJSON(value?: APIBUSINESSPARTNERABusinessPartnerIsBankType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'BankKey': value.bankKey,
        'BankCountry': value.bankCountry,
        'BPMinimumReserve': value.bPMinimumReserve,
    };
}

