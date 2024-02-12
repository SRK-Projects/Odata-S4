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
import type { APIBUSINESSPARTNERABusinessPartnerTaxNumberType } from './APIBUSINESSPARTNERABusinessPartnerTaxNumberType';
import {
    APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeFromJSON,
    APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeFromJSONTyped,
    APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeToJSON,
} from './APIBUSINESSPARTNERABusinessPartnerTaxNumberType';
import type { Count } from './Count';
import {
    CountFromJSON,
    CountFromJSONTyped,
    CountToJSON,
} from './Count';

/**
 * 
 * @export
 * @interface CollectionOfABusinessPartnerTaxNumberType
 */
export interface CollectionOfABusinessPartnerTaxNumberType {
    /**
     * 
     * @type {Count}
     * @memberof CollectionOfABusinessPartnerTaxNumberType
     */
    count?: Count;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERABusinessPartnerTaxNumberType>}
     * @memberof CollectionOfABusinessPartnerTaxNumberType
     */
    value?: Array<APIBUSINESSPARTNERABusinessPartnerTaxNumberType>;
}

/**
 * Check if a given object implements the CollectionOfABusinessPartnerTaxNumberType interface.
 */
export function instanceOfCollectionOfABusinessPartnerTaxNumberType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfABusinessPartnerTaxNumberTypeFromJSON(json: any): CollectionOfABusinessPartnerTaxNumberType {
    return CollectionOfABusinessPartnerTaxNumberTypeFromJSONTyped(json, false);
}

export function CollectionOfABusinessPartnerTaxNumberTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfABusinessPartnerTaxNumberType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, '@count') ? undefined : CountFromJSON(json['@count']),
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeFromJSON)),
    };
}

export function CollectionOfABusinessPartnerTaxNumberTypeToJSON(value?: CollectionOfABusinessPartnerTaxNumberType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@count': CountToJSON(value.count),
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(APIBUSINESSPARTNERABusinessPartnerTaxNumberTypeToJSON)),
    };
}
