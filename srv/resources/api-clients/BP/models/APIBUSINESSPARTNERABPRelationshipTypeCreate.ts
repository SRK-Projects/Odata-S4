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
 * @interface APIBUSINESSPARTNERABPRelationshipTypeCreate
 */
export interface APIBUSINESSPARTNERABPRelationshipTypeCreate {
    /**
     * BP Relationship Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipTypeCreate
     */
    relationshipNumber: string;
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipTypeCreate
     */
    businessPartner1: string;
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipTypeCreate
     */
    businessPartner2: string;
    /**
     * Validity Date (Valid To)
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPRelationshipTypeCreate
     */
    validityEndDate: Date;
    /**
     * Validity Date (Valid From)
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPRelationshipTypeCreate
     */
    validityStartDate?: Date | null;
    /**
     * Standard Relationship
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPRelationshipTypeCreate
     */
    isStandardRelationship?: boolean | null;
    /**
     * Business Partner Relationship Category
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipTypeCreate
     */
    relationshipCategory?: string | null;
    /**
     * Business partner relationship type
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipTypeCreate
     */
    bPRelationshipType?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPRelationshipTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPRelationshipTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "relationshipNumber" in value;
    isInstance = isInstance && "businessPartner1" in value;
    isInstance = isInstance && "businessPartner2" in value;
    isInstance = isInstance && "validityEndDate" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABPRelationshipTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABPRelationshipTypeCreate {
    return APIBUSINESSPARTNERABPRelationshipTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPRelationshipTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPRelationshipTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relationshipNumber': json['RelationshipNumber'],
        'businessPartner1': json['BusinessPartner1'],
        'businessPartner2': json['BusinessPartner2'],
        'validityEndDate': (new Date(json['ValidityEndDate'])),
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'isStandardRelationship': !exists(json, 'IsStandardRelationship') ? undefined : json['IsStandardRelationship'],
        'relationshipCategory': !exists(json, 'RelationshipCategory') ? undefined : json['RelationshipCategory'],
        'bPRelationshipType': !exists(json, 'BPRelationshipType') ? undefined : json['BPRelationshipType'],
    };
}

export function APIBUSINESSPARTNERABPRelationshipTypeCreateToJSON(value?: APIBUSINESSPARTNERABPRelationshipTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RelationshipNumber': value.relationshipNumber,
        'BusinessPartner1': value.businessPartner1,
        'BusinessPartner2': value.businessPartner2,
        'ValidityEndDate': (value.validityEndDate.toISOString().substring(0,10)),
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString().substring(0,10)),
        'IsStandardRelationship': value.isStandardRelationship,
        'RelationshipCategory': value.relationshipCategory,
        'BPRelationshipType': value.bPRelationshipType,
    };
}

