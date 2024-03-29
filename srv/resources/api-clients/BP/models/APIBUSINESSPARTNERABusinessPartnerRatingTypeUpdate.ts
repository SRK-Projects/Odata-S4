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
 * @interface APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
 */
export interface APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate {
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    businessPartnerRatingGrade?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    businessPartnerRatingTrend?: string | null;
    /**
     * Valid-from Date for Rating
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    bPRatingValidityStartDate?: Date | null;
    /**
     * Entered-on Date for Rating
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    bPRatingCreationDate?: Date | null;
    /**
     * Text for Ratings
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    businessPartnerRatingComment?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    businessPartnerRatingIsAllowed?: boolean | null;
    /**
     * Business Partner Rating is valid on Key Date
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    bPRatingIsValidOnKeyDate?: boolean | null;
    /**
     * Key Date of Accessing Business Partner Rating Data
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    businessPartnerRatingKeyDate?: Date | null;
    /**
     * Rating Validity is Expired according to Permitted Period
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    businessPartnerRatingIsExpired?: boolean | null;
    /**
     * Longtext for Rating
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate
     */
    bPRatingLongComment?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate {
    return APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartnerRatingGrade': !exists(json, 'BusinessPartnerRatingGrade') ? undefined : json['BusinessPartnerRatingGrade'],
        'businessPartnerRatingTrend': !exists(json, 'BusinessPartnerRatingTrend') ? undefined : json['BusinessPartnerRatingTrend'],
        'bPRatingValidityStartDate': !exists(json, 'BPRatingValidityStartDate') ? undefined : (json['BPRatingValidityStartDate'] === null ? null : new Date(json['BPRatingValidityStartDate'])),
        'bPRatingCreationDate': !exists(json, 'BPRatingCreationDate') ? undefined : (json['BPRatingCreationDate'] === null ? null : new Date(json['BPRatingCreationDate'])),
        'businessPartnerRatingComment': !exists(json, 'BusinessPartnerRatingComment') ? undefined : json['BusinessPartnerRatingComment'],
        'businessPartnerRatingIsAllowed': !exists(json, 'BusinessPartnerRatingIsAllowed') ? undefined : json['BusinessPartnerRatingIsAllowed'],
        'bPRatingIsValidOnKeyDate': !exists(json, 'BPRatingIsValidOnKeyDate') ? undefined : json['BPRatingIsValidOnKeyDate'],
        'businessPartnerRatingKeyDate': !exists(json, 'BusinessPartnerRatingKeyDate') ? undefined : (json['BusinessPartnerRatingKeyDate'] === null ? null : new Date(json['BusinessPartnerRatingKeyDate'])),
        'businessPartnerRatingIsExpired': !exists(json, 'BusinessPartnerRatingIsExpired') ? undefined : json['BusinessPartnerRatingIsExpired'],
        'bPRatingLongComment': !exists(json, 'BPRatingLongComment') ? undefined : json['BPRatingLongComment'],
    };
}

export function APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdateToJSON(value?: APIBUSINESSPARTNERABusinessPartnerRatingTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartnerRatingGrade': value.businessPartnerRatingGrade,
        'BusinessPartnerRatingTrend': value.businessPartnerRatingTrend,
        'BPRatingValidityStartDate': value.bPRatingValidityStartDate === undefined ? undefined : (value.bPRatingValidityStartDate === null ? null : value.bPRatingValidityStartDate.toISOString().substring(0,10)),
        'BPRatingCreationDate': value.bPRatingCreationDate === undefined ? undefined : (value.bPRatingCreationDate === null ? null : value.bPRatingCreationDate.toISOString().substring(0,10)),
        'BusinessPartnerRatingComment': value.businessPartnerRatingComment,
        'BusinessPartnerRatingIsAllowed': value.businessPartnerRatingIsAllowed,
        'BPRatingIsValidOnKeyDate': value.bPRatingIsValidOnKeyDate,
        'BusinessPartnerRatingKeyDate': value.businessPartnerRatingKeyDate === undefined ? undefined : (value.businessPartnerRatingKeyDate === null ? null : value.businessPartnerRatingKeyDate.toISOString().substring(0,10)),
        'BusinessPartnerRatingIsExpired': value.businessPartnerRatingIsExpired,
        'BPRatingLongComment': value.bPRatingLongComment,
    };
}

