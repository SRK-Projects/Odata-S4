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
 * @interface APIBUSINESSPARTNERABPDataControllerTypeUpdate
 */
export interface APIBUSINESSPARTNERABPDataControllerTypeUpdate {
    /**
     * BP: Data Controller Purpose Assignment Status
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPDataControllerTypeUpdate
     */
    dataControlAssignmentStatus?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPDataControllerTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPDataControllerTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABPDataControllerTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERABPDataControllerTypeUpdate {
    return APIBUSINESSPARTNERABPDataControllerTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPDataControllerTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPDataControllerTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataControlAssignmentStatus': !exists(json, 'DataControlAssignmentStatus') ? undefined : json['DataControlAssignmentStatus'],
    };
}

export function APIBUSINESSPARTNERABPDataControllerTypeUpdateToJSON(value?: APIBUSINESSPARTNERABPDataControllerTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DataControlAssignmentStatus': value.dataControlAssignmentStatus,
    };
}

