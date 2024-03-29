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
 * @interface APIBUSINESSPARTNERABPRelationshipType
 */
export interface APIBUSINESSPARTNERABPRelationshipType {
    /**
     * BP Relationship Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    relationshipNumber?: string;
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    businessPartner1?: string;
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    businessPartner2?: string;
    /**
     * Validity Date (Valid To)
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    validityEndDate?: Date;
    /**
     * Validity Date (Valid From)
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    validityStartDate?: Date | null;
    /**
     * Standard Relationship
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    isStandardRelationship?: boolean | null;
    /**
     * Business Partner Relationship Category
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    relationshipCategory?: string | null;
    /**
     * Business partner relationship type
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    bPRelationshipType?: string | null;
    /**
     * User who created the object
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    createdByUser?: string | null;
    /**
     * Date on which the object was created
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    creationDate?: Date | null;
    /**
     * Time at which the object was created
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    creationTime?: string | null;
    /**
     * Last user to change object
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    lastChangedByUser?: string | null;
    /**
     * Date when object was last changed
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    lastChangeDate?: Date | null;
    /**
     * Time at which object was last changed
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPRelationshipType
     */
    lastChangeTime?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPRelationshipType interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPRelationshipType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABPRelationshipTypeFromJSON(json: any): APIBUSINESSPARTNERABPRelationshipType {
    return APIBUSINESSPARTNERABPRelationshipTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPRelationshipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPRelationshipType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relationshipNumber': !exists(json, 'RelationshipNumber') ? undefined : json['RelationshipNumber'],
        'businessPartner1': !exists(json, 'BusinessPartner1') ? undefined : json['BusinessPartner1'],
        'businessPartner2': !exists(json, 'BusinessPartner2') ? undefined : json['BusinessPartner2'],
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (new Date(json['ValidityEndDate'])),
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'isStandardRelationship': !exists(json, 'IsStandardRelationship') ? undefined : json['IsStandardRelationship'],
        'relationshipCategory': !exists(json, 'RelationshipCategory') ? undefined : json['RelationshipCategory'],
        'bPRelationshipType': !exists(json, 'BPRelationshipType') ? undefined : json['BPRelationshipType'],
        'createdByUser': !exists(json, 'CreatedByUser') ? undefined : json['CreatedByUser'],
        'creationDate': !exists(json, 'CreationDate') ? undefined : (json['CreationDate'] === null ? null : new Date(json['CreationDate'])),
        'creationTime': !exists(json, 'CreationTime') ? undefined : json['CreationTime'],
        'lastChangedByUser': !exists(json, 'LastChangedByUser') ? undefined : json['LastChangedByUser'],
        'lastChangeDate': !exists(json, 'LastChangeDate') ? undefined : (json['LastChangeDate'] === null ? null : new Date(json['LastChangeDate'])),
        'lastChangeTime': !exists(json, 'LastChangeTime') ? undefined : json['LastChangeTime'],
    };
}

export function APIBUSINESSPARTNERABPRelationshipTypeToJSON(value?: APIBUSINESSPARTNERABPRelationshipType | null): any {
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
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate.toISOString().substring(0,10)),
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString().substring(0,10)),
        'IsStandardRelationship': value.isStandardRelationship,
        'RelationshipCategory': value.relationshipCategory,
        'BPRelationshipType': value.bPRelationshipType,
        'CreatedByUser': value.createdByUser,
        'CreationDate': value.creationDate === undefined ? undefined : (value.creationDate === null ? null : value.creationDate.toISOString().substring(0,10)),
        'CreationTime': value.creationTime,
        'LastChangedByUser': value.lastChangedByUser,
        'LastChangeDate': value.lastChangeDate === undefined ? undefined : (value.lastChangeDate === null ? null : value.lastChangeDate.toISOString().substring(0,10)),
        'LastChangeTime': value.lastChangeTime,
    };
}

