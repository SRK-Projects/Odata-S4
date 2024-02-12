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
 * Probable Time Until Check Is Paid
 * @export
 * @interface CheckCashingTime
 */
export interface CheckCashingTime {
}

/**
 * Check if a given object implements the CheckCashingTime interface.
 */
export function instanceOfCheckCashingTime(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckCashingTimeFromJSON(json: any): CheckCashingTime {
    return CheckCashingTimeFromJSONTyped(json, false);
}

export function CheckCashingTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckCashingTime {
    return json;
}

export function CheckCashingTimeToJSON(value?: CheckCashingTime | null): any {
    return value;
}
