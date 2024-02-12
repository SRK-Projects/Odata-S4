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
import type { ExemptionRate } from './ExemptionRate';
import {
    ExemptionRateFromJSON,
    ExemptionRateFromJSONTyped,
    ExemptionRateToJSON,
} from './ExemptionRate';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERACustomerTaxGroupingType
 */
export interface APIBUSINESSPARTNERACustomerTaxGroupingType {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTaxGroupingType
     */
    customer?: string;
    /**
     * Category Indicator for Tax Codes
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTaxGroupingType
     */
    customerTaxGroupingCode?: string;
    /**
     * Number of exemption certificate
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTaxGroupingType
     */
    custTaxGrpExemptionCertificate?: string | null;
    /**
     * 
     * @type {ExemptionRate}
     * @memberof APIBUSINESSPARTNERACustomerTaxGroupingType
     */
    custTaxGroupExemptionRate?: ExemptionRate | null;
    /**
     * Start date of exemption
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerTaxGroupingType
     */
    custTaxGroupExemptionStartDate?: Date | null;
    /**
     * Date on which exemption ends
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerTaxGroupingType
     */
    custTaxGroupExemptionEndDate?: Date | null;
    /**
     * Subjected from
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerTaxGroupingType
     */
    custTaxGroupSubjectedStartDate?: Date | null;
    /**
     * Subjected until
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerTaxGroupingType
     */
    custTaxGroupSubjectedEndDate?: Date | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustomerTaxGroupingType interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustomerTaxGroupingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERACustomerTaxGroupingTypeFromJSON(json: any): APIBUSINESSPARTNERACustomerTaxGroupingType {
    return APIBUSINESSPARTNERACustomerTaxGroupingTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustomerTaxGroupingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustomerTaxGroupingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': !exists(json, 'Customer') ? undefined : json['Customer'],
        'customerTaxGroupingCode': !exists(json, 'CustomerTaxGroupingCode') ? undefined : json['CustomerTaxGroupingCode'],
        'custTaxGrpExemptionCertificate': !exists(json, 'CustTaxGrpExemptionCertificate') ? undefined : json['CustTaxGrpExemptionCertificate'],
        'custTaxGroupExemptionRate': !exists(json, 'CustTaxGroupExemptionRate') ? undefined : ExemptionRateFromJSON(json['CustTaxGroupExemptionRate']),
        'custTaxGroupExemptionStartDate': !exists(json, 'CustTaxGroupExemptionStartDate') ? undefined : (json['CustTaxGroupExemptionStartDate'] === null ? null : new Date(json['CustTaxGroupExemptionStartDate'])),
        'custTaxGroupExemptionEndDate': !exists(json, 'CustTaxGroupExemptionEndDate') ? undefined : (json['CustTaxGroupExemptionEndDate'] === null ? null : new Date(json['CustTaxGroupExemptionEndDate'])),
        'custTaxGroupSubjectedStartDate': !exists(json, 'CustTaxGroupSubjectedStartDate') ? undefined : (json['CustTaxGroupSubjectedStartDate'] === null ? null : new Date(json['CustTaxGroupSubjectedStartDate'])),
        'custTaxGroupSubjectedEndDate': !exists(json, 'CustTaxGroupSubjectedEndDate') ? undefined : (json['CustTaxGroupSubjectedEndDate'] === null ? null : new Date(json['CustTaxGroupSubjectedEndDate'])),
    };
}

export function APIBUSINESSPARTNERACustomerTaxGroupingTypeToJSON(value?: APIBUSINESSPARTNERACustomerTaxGroupingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'CustomerTaxGroupingCode': value.customerTaxGroupingCode,
        'CustTaxGrpExemptionCertificate': value.custTaxGrpExemptionCertificate,
        'CustTaxGroupExemptionRate': ExemptionRateToJSON(value.custTaxGroupExemptionRate),
        'CustTaxGroupExemptionStartDate': value.custTaxGroupExemptionStartDate === undefined ? undefined : (value.custTaxGroupExemptionStartDate === null ? null : value.custTaxGroupExemptionStartDate.toISOString().substring(0,10)),
        'CustTaxGroupExemptionEndDate': value.custTaxGroupExemptionEndDate === undefined ? undefined : (value.custTaxGroupExemptionEndDate === null ? null : value.custTaxGroupExemptionEndDate.toISOString().substring(0,10)),
        'CustTaxGroupSubjectedStartDate': value.custTaxGroupSubjectedStartDate === undefined ? undefined : (value.custTaxGroupSubjectedStartDate === null ? null : value.custTaxGroupSubjectedStartDate.toISOString().substring(0,10)),
        'CustTaxGroupSubjectedEndDate': value.custTaxGroupSubjectedEndDate === undefined ? undefined : (value.custTaxGroupSubjectedEndDate === null ? null : value.custTaxGroupSubjectedEndDate.toISOString().substring(0,10)),
    };
}
