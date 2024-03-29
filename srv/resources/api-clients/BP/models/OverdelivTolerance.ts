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
 * Overdelivery Tolerance
 * @export
 * @interface OverdelivTolerance
 */
export interface OverdelivTolerance {
}

/**
 * Check if a given object implements the OverdelivTolerance interface.
 */
export function instanceOfOverdelivTolerance(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OverdelivToleranceFromJSON(json: any): OverdelivTolerance {
    return OverdelivToleranceFromJSONTyped(json, false);
}

export function OverdelivToleranceFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverdelivTolerance {
    return json;
}

export function OverdelivToleranceToJSON(value?: OverdelivTolerance | null): any {
    return value;
}

