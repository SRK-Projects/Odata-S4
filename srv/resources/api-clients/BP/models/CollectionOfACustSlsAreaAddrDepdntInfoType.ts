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
import type { APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoType } from './APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoType';
import {
    APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeFromJSON,
    APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeFromJSONTyped,
    APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeToJSON,
} from './APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoType';
import type { Count } from './Count';
import {
    CountFromJSON,
    CountFromJSONTyped,
    CountToJSON,
} from './Count';

/**
 * 
 * @export
 * @interface CollectionOfACustSlsAreaAddrDepdntInfoType
 */
export interface CollectionOfACustSlsAreaAddrDepdntInfoType {
    /**
     * 
     * @type {Count}
     * @memberof CollectionOfACustSlsAreaAddrDepdntInfoType
     */
    count?: Count;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoType>}
     * @memberof CollectionOfACustSlsAreaAddrDepdntInfoType
     */
    value?: Array<APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoType>;
}

/**
 * Check if a given object implements the CollectionOfACustSlsAreaAddrDepdntInfoType interface.
 */
export function instanceOfCollectionOfACustSlsAreaAddrDepdntInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfACustSlsAreaAddrDepdntInfoTypeFromJSON(json: any): CollectionOfACustSlsAreaAddrDepdntInfoType {
    return CollectionOfACustSlsAreaAddrDepdntInfoTypeFromJSONTyped(json, false);
}

export function CollectionOfACustSlsAreaAddrDepdntInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfACustSlsAreaAddrDepdntInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, '@count') ? undefined : CountFromJSON(json['@count']),
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeFromJSON)),
    };
}

export function CollectionOfACustSlsAreaAddrDepdntInfoTypeToJSON(value?: CollectionOfACustSlsAreaAddrDepdntInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@count': CountToJSON(value.count),
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeToJSON)),
    };
}

