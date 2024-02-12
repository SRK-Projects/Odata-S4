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
 * Amount of Profit/Loss Carried Forward for Company
 * @export
 * @interface PLCarriedFwd
 */
export interface PLCarriedFwd {
}

/**
 * Check if a given object implements the PLCarriedFwd interface.
 */
export function instanceOfPLCarriedFwd(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PLCarriedFwdFromJSON(json: any): PLCarriedFwd {
    return PLCarriedFwdFromJSONTyped(json, false);
}

export function PLCarriedFwdFromJSONTyped(json: any, ignoreDiscriminator: boolean): PLCarriedFwd {
    return json;
}

export function PLCarriedFwdToJSON(value?: PLCarriedFwd | null): any {
    return value;
}
