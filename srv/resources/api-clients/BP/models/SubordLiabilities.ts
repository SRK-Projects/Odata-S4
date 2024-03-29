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
 * Amount of Subordinated Liabilities for Company
 * @export
 * @interface SubordLiabilities
 */
export interface SubordLiabilities {
}

/**
 * Check if a given object implements the SubordLiabilities interface.
 */
export function instanceOfSubordLiabilities(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubordLiabilitiesFromJSON(json: any): SubordLiabilities {
    return SubordLiabilitiesFromJSONTyped(json, false);
}

export function SubordLiabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubordLiabilities {
    return json;
}

export function SubordLiabilitiesToJSON(value?: SubordLiabilities | null): any {
    return value;
}

