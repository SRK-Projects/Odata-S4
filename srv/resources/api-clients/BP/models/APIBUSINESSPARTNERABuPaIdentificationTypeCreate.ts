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
 * @interface APIBUSINESSPARTNERABuPaIdentificationTypeCreate
 */
export interface APIBUSINESSPARTNERABuPaIdentificationTypeCreate {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    businessPartner: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    bPIdentificationType: string;
    /**
     * Identification Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    bPIdentificationNumber: string;
    /**
     * Responsible Institution for ID Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    bPIdnNmbrIssuingInstitute?: string | null;
    /**
     * Date of Entry for ID Number
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    bPIdentificationEntryDate?: Date | null;
    /**
     * Country/Region in Which ID Number is Valid or Was Assigned
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    country?: string | null;
    /**
     * Region (State, Province, County)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    region?: string | null;
    /**
     * Validity Start for ID Number
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    validityStartDate?: Date | null;
    /**
     * Validity End for ID Number
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    validityEndDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABuPaIdentificationTypeCreate
     */
    authorizationGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABuPaIdentificationTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABuPaIdentificationTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "businessPartner" in value;
    isInstance = isInstance && "bPIdentificationType" in value;
    isInstance = isInstance && "bPIdentificationNumber" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABuPaIdentificationTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABuPaIdentificationTypeCreate {
    return APIBUSINESSPARTNERABuPaIdentificationTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABuPaIdentificationTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABuPaIdentificationTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': json['BusinessPartner'],
        'bPIdentificationType': json['BPIdentificationType'],
        'bPIdentificationNumber': json['BPIdentificationNumber'],
        'bPIdnNmbrIssuingInstitute': !exists(json, 'BPIdnNmbrIssuingInstitute') ? undefined : json['BPIdnNmbrIssuingInstitute'],
        'bPIdentificationEntryDate': !exists(json, 'BPIdentificationEntryDate') ? undefined : (json['BPIdentificationEntryDate'] === null ? null : new Date(json['BPIdentificationEntryDate'])),
        'country': !exists(json, 'Country') ? undefined : json['Country'],
        'region': !exists(json, 'Region') ? undefined : json['Region'],
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (json['ValidityEndDate'] === null ? null : new Date(json['ValidityEndDate'])),
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
    };
}

export function APIBUSINESSPARTNERABuPaIdentificationTypeCreateToJSON(value?: APIBUSINESSPARTNERABuPaIdentificationTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'BPIdentificationType': value.bPIdentificationType,
        'BPIdentificationNumber': value.bPIdentificationNumber,
        'BPIdnNmbrIssuingInstitute': value.bPIdnNmbrIssuingInstitute,
        'BPIdentificationEntryDate': value.bPIdentificationEntryDate === undefined ? undefined : (value.bPIdentificationEntryDate === null ? null : value.bPIdentificationEntryDate.toISOString().substring(0,10)),
        'Country': value.country,
        'Region': value.region,
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString().substring(0,10)),
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate === null ? null : value.validityEndDate.toISOString().substring(0,10)),
        'AuthorizationGroup': value.authorizationGroup,
    };
}

