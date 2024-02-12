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
 * @interface APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate
 */
export interface APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate {
    /**
     * Validity Start of a BP Role
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate
     */
    validFrom?: Date | null;
    /**
     * Validity End of a BP Role
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate
     */
    validTo?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate
     */
    authorizationGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate {
    return APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'validFrom': !exists(json, 'ValidFrom') ? undefined : (json['ValidFrom'] === null ? null : new Date(json['ValidFrom'])),
        'validTo': !exists(json, 'ValidTo') ? undefined : (json['ValidTo'] === null ? null : new Date(json['ValidTo'])),
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
    };
}

export function APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdateToJSON(value?: APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ValidFrom': value.validFrom === undefined ? undefined : (value.validFrom === null ? null : value.validFrom.toISOString()),
        'ValidTo': value.validTo === undefined ? undefined : (value.validTo === null ? null : value.validTo.toISOString()),
        'AuthorizationGroup': value.authorizationGroup,
    };
}

