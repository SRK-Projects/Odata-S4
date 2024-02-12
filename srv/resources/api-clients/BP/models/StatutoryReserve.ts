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
 * Amount of Statutory Revenue Reserve for Company
 * @export
 * @interface StatutoryReserve
 */
export interface StatutoryReserve {
}

/**
 * Check if a given object implements the StatutoryReserve interface.
 */
export function instanceOfStatutoryReserve(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatutoryReserveFromJSON(json: any): StatutoryReserve {
    return StatutoryReserveFromJSONTyped(json, false);
}

export function StatutoryReserveFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatutoryReserve {
    return json;
}

export function StatutoryReserveToJSON(value?: StatutoryReserve | null): any {
    return value;
}
