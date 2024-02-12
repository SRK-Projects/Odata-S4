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
import type { APIBUSINESSPARTNERABPAddressIndependentWebsiteType } from './APIBUSINESSPARTNERABPAddressIndependentWebsiteType';
import {
    APIBUSINESSPARTNERABPAddressIndependentWebsiteTypeFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentWebsiteTypeFromJSONTyped,
    APIBUSINESSPARTNERABPAddressIndependentWebsiteTypeToJSON,
} from './APIBUSINESSPARTNERABPAddressIndependentWebsiteType';
import type { Count } from './Count';
import {
    CountFromJSON,
    CountFromJSONTyped,
    CountToJSON,
} from './Count';

/**
 * 
 * @export
 * @interface CollectionOfABPAddressIndependentWebsiteType
 */
export interface CollectionOfABPAddressIndependentWebsiteType {
    /**
     * 
     * @type {Count}
     * @memberof CollectionOfABPAddressIndependentWebsiteType
     */
    count?: Count;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERABPAddressIndependentWebsiteType>}
     * @memberof CollectionOfABPAddressIndependentWebsiteType
     */
    value?: Array<APIBUSINESSPARTNERABPAddressIndependentWebsiteType>;
}

/**
 * Check if a given object implements the CollectionOfABPAddressIndependentWebsiteType interface.
 */
export function instanceOfCollectionOfABPAddressIndependentWebsiteType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfABPAddressIndependentWebsiteTypeFromJSON(json: any): CollectionOfABPAddressIndependentWebsiteType {
    return CollectionOfABPAddressIndependentWebsiteTypeFromJSONTyped(json, false);
}

export function CollectionOfABPAddressIndependentWebsiteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfABPAddressIndependentWebsiteType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, '@count') ? undefined : CountFromJSON(json['@count']),
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(APIBUSINESSPARTNERABPAddressIndependentWebsiteTypeFromJSON)),
    };
}

export function CollectionOfABPAddressIndependentWebsiteTypeToJSON(value?: CollectionOfABPAddressIndependentWebsiteType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@count': CountToJSON(value.count),
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(APIBUSINESSPARTNERABPAddressIndependentWebsiteTypeToJSON)),
    };
}
