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
 * @interface APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate
 */
export interface APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate {
    /**
     * 
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate
     */
    defaultPartner?: boolean | null;
    /**
     * Reference to other supplier
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate
     */
    referenceSupplier?: string | null;
    /**
     * Authorization Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate
     */
    authorizationGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate {
    return APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultPartner': !exists(json, 'DefaultPartner') ? undefined : json['DefaultPartner'],
        'referenceSupplier': !exists(json, 'ReferenceSupplier') ? undefined : json['ReferenceSupplier'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
    };
}

export function APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdateToJSON(value?: APIBUSINESSPARTNERASupplierPartnerFuncTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DefaultPartner': value.defaultPartner,
        'ReferenceSupplier': value.referenceSupplier,
        'AuthorizationGroup': value.authorizationGroup,
    };
}
