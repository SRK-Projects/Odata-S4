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
 * @interface APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate
 */
export interface APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate
     */
    businessPartner: string;
    /**
     * Items with Business Partner Name/Alias
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate
     */
    bPAliasPositionNumber: string;
    /**
     * Business Partner Alias
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate
     */
    businessPartnerAliasName?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "businessPartner" in value;
    isInstance = isInstance && "bPAliasPositionNumber" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABusinessPartnerAliasTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate {
    return APIBUSINESSPARTNERABusinessPartnerAliasTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABusinessPartnerAliasTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': json['BusinessPartner'],
        'bPAliasPositionNumber': json['BPAliasPositionNumber'],
        'businessPartnerAliasName': !exists(json, 'BusinessPartnerAliasName') ? undefined : json['BusinessPartnerAliasName'],
    };
}

export function APIBUSINESSPARTNERABusinessPartnerAliasTypeCreateToJSON(value?: APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'BPAliasPositionNumber': value.bPAliasPositionNumber,
        'BusinessPartnerAliasName': value.businessPartnerAliasName,
    };
}
