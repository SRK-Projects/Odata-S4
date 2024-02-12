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
 * Amount of Equity Capital for Company
 * @export
 * @interface EquityCapital
 */
export interface EquityCapital {
}

/**
 * Check if a given object implements the EquityCapital interface.
 */
export function instanceOfEquityCapital(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EquityCapitalFromJSON(json: any): EquityCapital {
    return EquityCapitalFromJSONTyped(json, false);
}

export function EquityCapitalFromJSONTyped(json: any, ignoreDiscriminator: boolean): EquityCapital {
    return json;
}

export function EquityCapitalToJSON(value?: EquityCapital | null): any {
    return value;
}
