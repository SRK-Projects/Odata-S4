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
 * @interface APIBUSINESSPARTNERASupplierDunningType
 */
export interface APIBUSINESSPARTNERASupplierDunningType {
    /**
     * Account Number of Supplier
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    supplier?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    companyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    dunningArea?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    dunningBlock?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    dunningLevel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    dunningProcedure?: string | null;
    /**
     * Account number of the dunning recipient
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    dunningRecipient?: string | null;
    /**
     * Date of Last Dunning Notice
     * @type {Date}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    lastDunnedOn?: Date | null;
    /**
     * Date of the Legal Dunning Proceedings
     * @type {Date}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    legDunningProcedureOn?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    dunningClerk?: string | null;
    /**
     * Authorization Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    authorizationGroup?: string | null;
    /**
     * Supplier Account Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierDunningType
     */
    supplierAccountGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERASupplierDunningType interface.
 */
export function instanceOfAPIBUSINESSPARTNERASupplierDunningType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERASupplierDunningTypeFromJSON(json: any): APIBUSINESSPARTNERASupplierDunningType {
    return APIBUSINESSPARTNERASupplierDunningTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERASupplierDunningTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERASupplierDunningType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'supplier': !exists(json, 'Supplier') ? undefined : json['Supplier'],
        'companyCode': !exists(json, 'CompanyCode') ? undefined : json['CompanyCode'],
        'dunningArea': !exists(json, 'DunningArea') ? undefined : json['DunningArea'],
        'dunningBlock': !exists(json, 'DunningBlock') ? undefined : json['DunningBlock'],
        'dunningLevel': !exists(json, 'DunningLevel') ? undefined : json['DunningLevel'],
        'dunningProcedure': !exists(json, 'DunningProcedure') ? undefined : json['DunningProcedure'],
        'dunningRecipient': !exists(json, 'DunningRecipient') ? undefined : json['DunningRecipient'],
        'lastDunnedOn': !exists(json, 'LastDunnedOn') ? undefined : (json['LastDunnedOn'] === null ? null : new Date(json['LastDunnedOn'])),
        'legDunningProcedureOn': !exists(json, 'LegDunningProcedureOn') ? undefined : (json['LegDunningProcedureOn'] === null ? null : new Date(json['LegDunningProcedureOn'])),
        'dunningClerk': !exists(json, 'DunningClerk') ? undefined : json['DunningClerk'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
        'supplierAccountGroup': !exists(json, 'SupplierAccountGroup') ? undefined : json['SupplierAccountGroup'],
    };
}

export function APIBUSINESSPARTNERASupplierDunningTypeToJSON(value?: APIBUSINESSPARTNERASupplierDunningType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Supplier': value.supplier,
        'CompanyCode': value.companyCode,
        'DunningArea': value.dunningArea,
        'DunningBlock': value.dunningBlock,
        'DunningLevel': value.dunningLevel,
        'DunningProcedure': value.dunningProcedure,
        'DunningRecipient': value.dunningRecipient,
        'LastDunnedOn': value.lastDunnedOn === undefined ? undefined : (value.lastDunnedOn === null ? null : value.lastDunnedOn.toISOString().substring(0,10)),
        'LegDunningProcedureOn': value.legDunningProcedureOn === undefined ? undefined : (value.legDunningProcedureOn === null ? null : value.legDunningProcedureOn.toISOString().substring(0,10)),
        'DunningClerk': value.dunningClerk,
        'AuthorizationGroup': value.authorizationGroup,
        'SupplierAccountGroup': value.supplierAccountGroup,
    };
}
