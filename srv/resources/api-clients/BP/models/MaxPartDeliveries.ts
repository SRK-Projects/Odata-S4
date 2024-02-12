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
 * Maximum Number of Partial Deliveries Allowed Per Item
 * @export
 * @interface MaxPartDeliveries
 */
export interface MaxPartDeliveries {
}

/**
 * Check if a given object implements the MaxPartDeliveries interface.
 */
export function instanceOfMaxPartDeliveries(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MaxPartDeliveriesFromJSON(json: any): MaxPartDeliveries {
    return MaxPartDeliveriesFromJSONTyped(json, false);
}

export function MaxPartDeliveriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaxPartDeliveries {
    return json;
}

export function MaxPartDeliveriesToJSON(value?: MaxPartDeliveries | null): any {
    return value;
}

