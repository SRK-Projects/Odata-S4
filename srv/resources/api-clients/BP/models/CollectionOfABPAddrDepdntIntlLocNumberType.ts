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
import type { APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType } from './APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType';
import {
    APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeFromJSON,
    APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeFromJSONTyped,
    APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeToJSON,
} from './APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType';
import type { Count } from './Count';
import {
    CountFromJSON,
    CountFromJSONTyped,
    CountToJSON,
} from './Count';

/**
 * 
 * @export
 * @interface CollectionOfABPAddrDepdntIntlLocNumberType
 */
export interface CollectionOfABPAddrDepdntIntlLocNumberType {
    /**
     * 
     * @type {Count}
     * @memberof CollectionOfABPAddrDepdntIntlLocNumberType
     */
    count?: Count;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType>}
     * @memberof CollectionOfABPAddrDepdntIntlLocNumberType
     */
    value?: Array<APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType>;
}

/**
 * Check if a given object implements the CollectionOfABPAddrDepdntIntlLocNumberType interface.
 */
export function instanceOfCollectionOfABPAddrDepdntIntlLocNumberType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfABPAddrDepdntIntlLocNumberTypeFromJSON(json: any): CollectionOfABPAddrDepdntIntlLocNumberType {
    return CollectionOfABPAddrDepdntIntlLocNumberTypeFromJSONTyped(json, false);
}

export function CollectionOfABPAddrDepdntIntlLocNumberTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfABPAddrDepdntIntlLocNumberType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, '@count') ? undefined : CountFromJSON(json['@count']),
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeFromJSON)),
    };
}

export function CollectionOfABPAddrDepdntIntlLocNumberTypeToJSON(value?: CollectionOfABPAddrDepdntIntlLocNumberType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@count': CountToJSON(value.count),
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeToJSON)),
    };
}

