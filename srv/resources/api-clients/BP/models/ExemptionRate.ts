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
 * Exemption rate
 * @export
 * @interface ExemptionRate
 */
export interface ExemptionRate {
}

/**
 * Check if a given object implements the ExemptionRate interface.
 */
export function instanceOfExemptionRate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExemptionRateFromJSON(json: any): ExemptionRate {
    return ExemptionRateFromJSONTyped(json, false);
}

export function ExemptionRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExemptionRate {
    return json;
}

export function ExemptionRateToJSON(value?: ExemptionRate | null): any {
    return value;
}

