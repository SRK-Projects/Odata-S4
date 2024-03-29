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
import type { APIBUSINESSPARTNERABPAddressIndependentFaxType } from './APIBUSINESSPARTNERABPAddressIndependentFaxType';
import {
    APIBUSINESSPARTNERABPAddressIndependentFaxTypeFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentFaxTypeFromJSONTyped,
    APIBUSINESSPARTNERABPAddressIndependentFaxTypeToJSON,
} from './APIBUSINESSPARTNERABPAddressIndependentFaxType';
import type { Count } from './Count';
import {
    CountFromJSON,
    CountFromJSONTyped,
    CountToJSON,
} from './Count';

/**
 * 
 * @export
 * @interface CollectionOfABPAddressIndependentFaxType
 */
export interface CollectionOfABPAddressIndependentFaxType {
    /**
     * 
     * @type {Count}
     * @memberof CollectionOfABPAddressIndependentFaxType
     */
    count?: Count;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERABPAddressIndependentFaxType>}
     * @memberof CollectionOfABPAddressIndependentFaxType
     */
    value?: Array<APIBUSINESSPARTNERABPAddressIndependentFaxType>;
}

/**
 * Check if a given object implements the CollectionOfABPAddressIndependentFaxType interface.
 */
export function instanceOfCollectionOfABPAddressIndependentFaxType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfABPAddressIndependentFaxTypeFromJSON(json: any): CollectionOfABPAddressIndependentFaxType {
    return CollectionOfABPAddressIndependentFaxTypeFromJSONTyped(json, false);
}

export function CollectionOfABPAddressIndependentFaxTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfABPAddressIndependentFaxType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, '@count') ? undefined : CountFromJSON(json['@count']),
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(APIBUSINESSPARTNERABPAddressIndependentFaxTypeFromJSON)),
    };
}

export function CollectionOfABPAddressIndependentFaxTypeToJSON(value?: CollectionOfABPAddressIndependentFaxType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@count': CountToJSON(value.count),
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(APIBUSINESSPARTNERABPAddressIndependentFaxTypeToJSON)),
    };
}

