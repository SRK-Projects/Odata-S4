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
import type { APIBUSINESSPARTNERABusinessPartnerIsBankType } from './APIBUSINESSPARTNERABusinessPartnerIsBankType';
import {
    APIBUSINESSPARTNERABusinessPartnerIsBankTypeFromJSON,
    APIBUSINESSPARTNERABusinessPartnerIsBankTypeFromJSONTyped,
    APIBUSINESSPARTNERABusinessPartnerIsBankTypeToJSON,
} from './APIBUSINESSPARTNERABusinessPartnerIsBankType';
import type { Count } from './Count';
import {
    CountFromJSON,
    CountFromJSONTyped,
    CountToJSON,
} from './Count';

/**
 * 
 * @export
 * @interface CollectionOfABusinessPartnerIsBankType
 */
export interface CollectionOfABusinessPartnerIsBankType {
    /**
     * 
     * @type {Count}
     * @memberof CollectionOfABusinessPartnerIsBankType
     */
    count?: Count;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERABusinessPartnerIsBankType>}
     * @memberof CollectionOfABusinessPartnerIsBankType
     */
    value?: Array<APIBUSINESSPARTNERABusinessPartnerIsBankType>;
}

/**
 * Check if a given object implements the CollectionOfABusinessPartnerIsBankType interface.
 */
export function instanceOfCollectionOfABusinessPartnerIsBankType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfABusinessPartnerIsBankTypeFromJSON(json: any): CollectionOfABusinessPartnerIsBankType {
    return CollectionOfABusinessPartnerIsBankTypeFromJSONTyped(json, false);
}

export function CollectionOfABusinessPartnerIsBankTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfABusinessPartnerIsBankType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, '@count') ? undefined : CountFromJSON(json['@count']),
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(APIBUSINESSPARTNERABusinessPartnerIsBankTypeFromJSON)),
    };
}

export function CollectionOfABusinessPartnerIsBankTypeToJSON(value?: CollectionOfABusinessPartnerIsBankType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@count': CountToJSON(value.count),
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(APIBUSINESSPARTNERABusinessPartnerIsBankTypeToJSON)),
    };
}

