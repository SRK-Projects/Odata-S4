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
import type { APIBUSINESSPARTNERACustomerUnloadingPointType } from './APIBUSINESSPARTNERACustomerUnloadingPointType';
import {
    APIBUSINESSPARTNERACustomerUnloadingPointTypeFromJSON,
    APIBUSINESSPARTNERACustomerUnloadingPointTypeFromJSONTyped,
    APIBUSINESSPARTNERACustomerUnloadingPointTypeToJSON,
} from './APIBUSINESSPARTNERACustomerUnloadingPointType';
import type { Count } from './Count';
import {
    CountFromJSON,
    CountFromJSONTyped,
    CountToJSON,
} from './Count';

/**
 * 
 * @export
 * @interface CollectionOfACustomerUnloadingPointType
 */
export interface CollectionOfACustomerUnloadingPointType {
    /**
     * 
     * @type {Count}
     * @memberof CollectionOfACustomerUnloadingPointType
     */
    count?: Count;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerUnloadingPointType>}
     * @memberof CollectionOfACustomerUnloadingPointType
     */
    value?: Array<APIBUSINESSPARTNERACustomerUnloadingPointType>;
}

/**
 * Check if a given object implements the CollectionOfACustomerUnloadingPointType interface.
 */
export function instanceOfCollectionOfACustomerUnloadingPointType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfACustomerUnloadingPointTypeFromJSON(json: any): CollectionOfACustomerUnloadingPointType {
    return CollectionOfACustomerUnloadingPointTypeFromJSONTyped(json, false);
}

export function CollectionOfACustomerUnloadingPointTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfACustomerUnloadingPointType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, '@count') ? undefined : CountFromJSON(json['@count']),
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(APIBUSINESSPARTNERACustomerUnloadingPointTypeFromJSON)),
    };
}

export function CollectionOfACustomerUnloadingPointTypeToJSON(value?: CollectionOfACustomerUnloadingPointType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@count': CountToJSON(value.count),
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(APIBUSINESSPARTNERACustomerUnloadingPointTypeToJSON)),
    };
}

