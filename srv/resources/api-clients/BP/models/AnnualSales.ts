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
 * Amount of Annual Sales for Company
 * @export
 * @interface AnnualSales
 */
export interface AnnualSales {
}

/**
 * Check if a given object implements the AnnualSales interface.
 */
export function instanceOfAnnualSales(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnnualSalesFromJSON(json: any): AnnualSales {
    return AnnualSalesFromJSONTyped(json, false);
}

export function AnnualSalesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnualSales {
    return json;
}

export function AnnualSalesToJSON(value?: AnnualSales | null): any {
    return value;
}

