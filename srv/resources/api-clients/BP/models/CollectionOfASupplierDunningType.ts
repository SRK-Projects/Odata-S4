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
import type { APIBUSINESSPARTNERASupplierDunningType } from './APIBUSINESSPARTNERASupplierDunningType';
import {
    APIBUSINESSPARTNERASupplierDunningTypeFromJSON,
    APIBUSINESSPARTNERASupplierDunningTypeFromJSONTyped,
    APIBUSINESSPARTNERASupplierDunningTypeToJSON,
} from './APIBUSINESSPARTNERASupplierDunningType';
import type { Count } from './Count';
import {
    CountFromJSON,
    CountFromJSONTyped,
    CountToJSON,
} from './Count';

/**
 * 
 * @export
 * @interface CollectionOfASupplierDunningType
 */
export interface CollectionOfASupplierDunningType {
    /**
     * 
     * @type {Count}
     * @memberof CollectionOfASupplierDunningType
     */
    count?: Count;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERASupplierDunningType>}
     * @memberof CollectionOfASupplierDunningType
     */
    value?: Array<APIBUSINESSPARTNERASupplierDunningType>;
}

/**
 * Check if a given object implements the CollectionOfASupplierDunningType interface.
 */
export function instanceOfCollectionOfASupplierDunningType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfASupplierDunningTypeFromJSON(json: any): CollectionOfASupplierDunningType {
    return CollectionOfASupplierDunningTypeFromJSONTyped(json, false);
}

export function CollectionOfASupplierDunningTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfASupplierDunningType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, '@count') ? undefined : CountFromJSON(json['@count']),
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(APIBUSINESSPARTNERASupplierDunningTypeFromJSON)),
    };
}

export function CollectionOfASupplierDunningTypeToJSON(value?: CollectionOfASupplierDunningType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@count': CountToJSON(value.count),
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(APIBUSINESSPARTNERASupplierDunningTypeToJSON)),
    };
}

