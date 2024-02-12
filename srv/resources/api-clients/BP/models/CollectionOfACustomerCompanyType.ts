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
import type { APIBUSINESSPARTNERACustomerCompanyType } from './APIBUSINESSPARTNERACustomerCompanyType';
import {
    APIBUSINESSPARTNERACustomerCompanyTypeFromJSON,
    APIBUSINESSPARTNERACustomerCompanyTypeFromJSONTyped,
    APIBUSINESSPARTNERACustomerCompanyTypeToJSON,
} from './APIBUSINESSPARTNERACustomerCompanyType';
import type { Count } from './Count';
import {
    CountFromJSON,
    CountFromJSONTyped,
    CountToJSON,
} from './Count';

/**
 * 
 * @export
 * @interface CollectionOfACustomerCompanyType
 */
export interface CollectionOfACustomerCompanyType {
    /**
     * 
     * @type {Count}
     * @memberof CollectionOfACustomerCompanyType
     */
    count?: Count;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerCompanyType>}
     * @memberof CollectionOfACustomerCompanyType
     */
    value?: Array<APIBUSINESSPARTNERACustomerCompanyType>;
}

/**
 * Check if a given object implements the CollectionOfACustomerCompanyType interface.
 */
export function instanceOfCollectionOfACustomerCompanyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionOfACustomerCompanyTypeFromJSON(json: any): CollectionOfACustomerCompanyType {
    return CollectionOfACustomerCompanyTypeFromJSONTyped(json, false);
}

export function CollectionOfACustomerCompanyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionOfACustomerCompanyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, '@count') ? undefined : CountFromJSON(json['@count']),
        'value': !exists(json, 'value') ? undefined : ((json['value'] as Array<any>).map(APIBUSINESSPARTNERACustomerCompanyTypeFromJSON)),
    };
}

export function CollectionOfACustomerCompanyTypeToJSON(value?: CollectionOfACustomerCompanyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@count': CountToJSON(value.count),
        'value': value.value === undefined ? undefined : ((value.value as Array<any>).map(APIBUSINESSPARTNERACustomerCompanyTypeToJSON)),
    };
}
