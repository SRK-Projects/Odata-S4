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
 * @interface APIBUSINESSPARTNERACustomerDunningTypeUpdate
 */
export interface APIBUSINESSPARTNERACustomerDunningTypeUpdate {
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerDunningTypeUpdate
     */
    dunningBlock?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerDunningTypeUpdate
     */
    dunningLevel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerDunningTypeUpdate
     */
    dunningProcedure?: string | null;
    /**
     * Account Number of the Dunning Recipient
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerDunningTypeUpdate
     */
    dunningRecipient?: string | null;
    /**
     * Date of Last Dunning Notice
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerDunningTypeUpdate
     */
    lastDunnedOn?: Date | null;
    /**
     * Date of the Legal Dunning Proceedings
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerDunningTypeUpdate
     */
    legDunningProcedureOn?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerDunningTypeUpdate
     */
    dunningClerk?: string | null;
    /**
     * Authorization Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerDunningTypeUpdate
     */
    authorizationGroup?: string | null;
    /**
     * Customer Account Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerDunningTypeUpdate
     */
    customerAccountGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustomerDunningTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustomerDunningTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERACustomerDunningTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERACustomerDunningTypeUpdate {
    return APIBUSINESSPARTNERACustomerDunningTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustomerDunningTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustomerDunningTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dunningBlock': !exists(json, 'DunningBlock') ? undefined : json['DunningBlock'],
        'dunningLevel': !exists(json, 'DunningLevel') ? undefined : json['DunningLevel'],
        'dunningProcedure': !exists(json, 'DunningProcedure') ? undefined : json['DunningProcedure'],
        'dunningRecipient': !exists(json, 'DunningRecipient') ? undefined : json['DunningRecipient'],
        'lastDunnedOn': !exists(json, 'LastDunnedOn') ? undefined : (json['LastDunnedOn'] === null ? null : new Date(json['LastDunnedOn'])),
        'legDunningProcedureOn': !exists(json, 'LegDunningProcedureOn') ? undefined : (json['LegDunningProcedureOn'] === null ? null : new Date(json['LegDunningProcedureOn'])),
        'dunningClerk': !exists(json, 'DunningClerk') ? undefined : json['DunningClerk'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
        'customerAccountGroup': !exists(json, 'CustomerAccountGroup') ? undefined : json['CustomerAccountGroup'],
    };
}

export function APIBUSINESSPARTNERACustomerDunningTypeUpdateToJSON(value?: APIBUSINESSPARTNERACustomerDunningTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DunningBlock': value.dunningBlock,
        'DunningLevel': value.dunningLevel,
        'DunningProcedure': value.dunningProcedure,
        'DunningRecipient': value.dunningRecipient,
        'LastDunnedOn': value.lastDunnedOn === undefined ? undefined : (value.lastDunnedOn === null ? null : value.lastDunnedOn.toISOString().substring(0,10)),
        'LegDunningProcedureOn': value.legDunningProcedureOn === undefined ? undefined : (value.legDunningProcedureOn === null ? null : value.legDunningProcedureOn.toISOString().substring(0,10)),
        'DunningClerk': value.dunningClerk,
        'AuthorizationGroup': value.authorizationGroup,
        'CustomerAccountGroup': value.customerAccountGroup,
    };
}

