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
import type { ExemptionRate1 } from './ExemptionRate1';
import {
    ExemptionRate1FromJSON,
    ExemptionRate1FromJSONTyped,
    ExemptionRate1ToJSON,
} from './ExemptionRate1';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
 */
export interface APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    companyCode: string;
    /**
     * Indicator for Withholding Tax Type
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    withholdingTaxType: string;
    /**
     * Withholding Tax Code
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    withholdingTaxCode?: string | null;
    /**
     * Indicator: Withholding Tax Agent?
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    withholdingTaxAgent?: boolean | null;
    /**
     * Obligated to Withhold Tax From
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    obligationDateBegin?: Date | null;
    /**
     * Obligated to Withhold Tax Until
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    obligationDateEnd?: Date | null;
    /**
     * Withholding tax identification number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    withholdingTaxNumber?: string | null;
    /**
     * Exemption Certificate Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    withholdingTaxCertificate?: string | null;
    /**
     * 
     * @type {ExemptionRate1}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    withholdingTaxExmptPercent?: ExemptionRate1 | null;
    /**
     * Date on Which Exemption Begins
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    exemptionDateBegin?: Date | null;
    /**
     * Date on Which Exemption Ends
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    exemptionDateEnd?: Date | null;
    /**
     * Reason for Exemption
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    exemptionReason?: string | null;
    /**
     * Authorization Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate
     */
    authorizationGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customer" in value;
    isInstance = isInstance && "companyCode" in value;
    isInstance = isInstance && "withholdingTaxType" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreateFromJSON(json: any): APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate {
    return APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['Customer'],
        'companyCode': json['CompanyCode'],
        'withholdingTaxType': json['WithholdingTaxType'],
        'withholdingTaxCode': !exists(json, 'WithholdingTaxCode') ? undefined : json['WithholdingTaxCode'],
        'withholdingTaxAgent': !exists(json, 'WithholdingTaxAgent') ? undefined : json['WithholdingTaxAgent'],
        'obligationDateBegin': !exists(json, 'ObligationDateBegin') ? undefined : (json['ObligationDateBegin'] === null ? null : new Date(json['ObligationDateBegin'])),
        'obligationDateEnd': !exists(json, 'ObligationDateEnd') ? undefined : (json['ObligationDateEnd'] === null ? null : new Date(json['ObligationDateEnd'])),
        'withholdingTaxNumber': !exists(json, 'WithholdingTaxNumber') ? undefined : json['WithholdingTaxNumber'],
        'withholdingTaxCertificate': !exists(json, 'WithholdingTaxCertificate') ? undefined : json['WithholdingTaxCertificate'],
        'withholdingTaxExmptPercent': !exists(json, 'WithholdingTaxExmptPercent') ? undefined : ExemptionRate1FromJSON(json['WithholdingTaxExmptPercent']),
        'exemptionDateBegin': !exists(json, 'ExemptionDateBegin') ? undefined : (json['ExemptionDateBegin'] === null ? null : new Date(json['ExemptionDateBegin'])),
        'exemptionDateEnd': !exists(json, 'ExemptionDateEnd') ? undefined : (json['ExemptionDateEnd'] === null ? null : new Date(json['ExemptionDateEnd'])),
        'exemptionReason': !exists(json, 'ExemptionReason') ? undefined : json['ExemptionReason'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
    };
}

export function APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreateToJSON(value?: APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'CompanyCode': value.companyCode,
        'WithholdingTaxType': value.withholdingTaxType,
        'WithholdingTaxCode': value.withholdingTaxCode,
        'WithholdingTaxAgent': value.withholdingTaxAgent,
        'ObligationDateBegin': value.obligationDateBegin === undefined ? undefined : (value.obligationDateBegin === null ? null : value.obligationDateBegin.toISOString().substring(0,10)),
        'ObligationDateEnd': value.obligationDateEnd === undefined ? undefined : (value.obligationDateEnd === null ? null : value.obligationDateEnd.toISOString().substring(0,10)),
        'WithholdingTaxNumber': value.withholdingTaxNumber,
        'WithholdingTaxCertificate': value.withholdingTaxCertificate,
        'WithholdingTaxExmptPercent': ExemptionRate1ToJSON(value.withholdingTaxExmptPercent),
        'ExemptionDateBegin': value.exemptionDateBegin === undefined ? undefined : (value.exemptionDateBegin === null ? null : value.exemptionDateBegin.toISOString().substring(0,10)),
        'ExemptionDateEnd': value.exemptionDateEnd === undefined ? undefined : (value.exemptionDateEnd === null ? null : value.exemptionDateEnd.toISOString().substring(0,10)),
        'ExemptionReason': value.exemptionReason,
        'AuthorizationGroup': value.authorizationGroup,
    };
}

