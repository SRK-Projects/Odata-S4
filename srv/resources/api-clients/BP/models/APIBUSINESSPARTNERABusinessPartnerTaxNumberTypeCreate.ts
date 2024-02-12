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
 * @interface APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate
 */
export interface APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate
     */
    businessPartner: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate
     */
    bPTaxType: string;
    /**
     * Business Partner Tax Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate
     */
    bPTaxNumber?: string | null;
    /**
     * Business Partner Tax Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate
     */
    bPTaxLongNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate
     */
    authorizationGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "businessPartner" in value;
    isInstance = isInstance && "bPTaxType" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate {
    return APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': json['BusinessPartner'],
        'bPTaxType': json['BPTaxType'],
        'bPTaxNumber': !exists(json, 'BPTaxNumber') ? undefined : json['BPTaxNumber'],
        'bPTaxLongNumber': !exists(json, 'BPTaxLongNumber') ? undefined : json['BPTaxLongNumber'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
    };
}

export function APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreateToJSON(value?: APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'BPTaxType': value.bPTaxType,
        'BPTaxNumber': value.bPTaxNumber,
        'BPTaxLongNumber': value.bPTaxLongNumber,
        'AuthorizationGroup': value.authorizationGroup,
    };
}
