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
 * 
 * @export
 * @interface ExemptionRate1
 */
export interface ExemptionRate1 {
}

/**
 * Check if a given object implements the ExemptionRate1 interface.
 */
export function instanceOfExemptionRate1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExemptionRate1FromJSON(json: any): ExemptionRate1 {
    return ExemptionRate1FromJSONTyped(json, false);
}

export function ExemptionRate1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ExemptionRate1 {
    return json;
}

export function ExemptionRate1ToJSON(value?: ExemptionRate1 | null): any {
    return value;
}
