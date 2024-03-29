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
import type { APIBUSINESSPARTNERASupplierCompanyTypeCreate } from './APIBUSINESSPARTNERASupplierCompanyTypeCreate';
import {
    APIBUSINESSPARTNERASupplierCompanyTypeCreateFromJSON,
    APIBUSINESSPARTNERASupplierCompanyTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERASupplierCompanyTypeCreateToJSON,
} from './APIBUSINESSPARTNERASupplierCompanyTypeCreate';
import type { APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreate } from './APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreate';
import {
    APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreateFromJSON,
    APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreateToJSON,
} from './APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreate';
import type { APIBUSINESSPARTNERASupplierTextTypeCreate } from './APIBUSINESSPARTNERASupplierTextTypeCreate';
import {
    APIBUSINESSPARTNERASupplierTextTypeCreateFromJSON,
    APIBUSINESSPARTNERASupplierTextTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERASupplierTextTypeCreateToJSON,
} from './APIBUSINESSPARTNERASupplierTextTypeCreate';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERASupplierTypeCreate
 */
export interface APIBUSINESSPARTNERASupplierTypeCreate {
    /**
     * Account Number of Supplier
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    supplier: string;
    /**
     * Account Number of the Alternative Payee
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    alternativePayeeAccountNumber?: string | null;
    /**
     * Authorization Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    authorizationGroup?: string | null;
    /**
     * Permanent Account Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    businessPartnerPanNumber?: string | null;
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    customer?: string | null;
    /**
     * Payment Block
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    paymentIsBlockedForSupplier?: boolean | null;
    /**
     * Central Posting Block
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    postingIsBlocked?: boolean | null;
    /**
     * Centrally imposed purchasing block
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    purchasingIsBlocked?: boolean | null;
    /**
     * Supplier Account Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    supplierAccountGroup?: string | null;
    /**
     * Date of Birth of the Person Subject to Withholding Tax
     * @type {Date}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    birthDate?: Date | null;
    /**
     * Central Deletion Flag for Master Record
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    deletionIndicator?: boolean | null;
    /**
     * Account number of the master record with fiscal address
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    fiscalAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    paymentReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    responsibleType?: string | null;
    /**
     * Validity Date of Certification
     * @type {Date}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    suplrQltyInProcmtCertfnValidTo?: Date | null;
    /**
     * Supplier's QM System
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    suplrQualityManagementSystem?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    supplierCorporateGroup?: string | null;
    /**
     * Function That Will Be Blocked
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    supplierProcurementBlock?: string | null;
    /**
     * Tax Number at Responsible Tax Authority
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    taxNumberResponsible?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    taxNumberType?: string | null;
    /**
     * Supplier indicator relevant for proof of delivery
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    suplrProofOfDelivRlvtCode?: string | null;
    /**
     * Tax Split
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    bRTaxIsSplit?: boolean | null;
    /**
     * Instruction Key for Data Medium Exchange
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    dataExchangeInstructionKey?: string | null;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERASupplierCompanyTypeCreate>}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    toSupplierCompany?: Array<APIBUSINESSPARTNERASupplierCompanyTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreate>}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    toSupplierPurchasingOrg?: Array<APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERASupplierTextTypeCreate>}
     * @memberof APIBUSINESSPARTNERASupplierTypeCreate
     */
    toSupplierText?: Array<APIBUSINESSPARTNERASupplierTextTypeCreate>;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERASupplierTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERASupplierTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "supplier" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERASupplierTypeCreateFromJSON(json: any): APIBUSINESSPARTNERASupplierTypeCreate {
    return APIBUSINESSPARTNERASupplierTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERASupplierTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERASupplierTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'supplier': json['Supplier'],
        'alternativePayeeAccountNumber': !exists(json, 'AlternativePayeeAccountNumber') ? undefined : json['AlternativePayeeAccountNumber'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
        'businessPartnerPanNumber': !exists(json, 'BusinessPartnerPanNumber') ? undefined : json['BusinessPartnerPanNumber'],
        'customer': !exists(json, 'Customer') ? undefined : json['Customer'],
        'paymentIsBlockedForSupplier': !exists(json, 'PaymentIsBlockedForSupplier') ? undefined : json['PaymentIsBlockedForSupplier'],
        'postingIsBlocked': !exists(json, 'PostingIsBlocked') ? undefined : json['PostingIsBlocked'],
        'purchasingIsBlocked': !exists(json, 'PurchasingIsBlocked') ? undefined : json['PurchasingIsBlocked'],
        'supplierAccountGroup': !exists(json, 'SupplierAccountGroup') ? undefined : json['SupplierAccountGroup'],
        'birthDate': !exists(json, 'BirthDate') ? undefined : (json['BirthDate'] === null ? null : new Date(json['BirthDate'])),
        'deletionIndicator': !exists(json, 'DeletionIndicator') ? undefined : json['DeletionIndicator'],
        'fiscalAddress': !exists(json, 'FiscalAddress') ? undefined : json['FiscalAddress'],
        'paymentReason': !exists(json, 'PaymentReason') ? undefined : json['PaymentReason'],
        'responsibleType': !exists(json, 'ResponsibleType') ? undefined : json['ResponsibleType'],
        'suplrQltyInProcmtCertfnValidTo': !exists(json, 'SuplrQltyInProcmtCertfnValidTo') ? undefined : (json['SuplrQltyInProcmtCertfnValidTo'] === null ? null : new Date(json['SuplrQltyInProcmtCertfnValidTo'])),
        'suplrQualityManagementSystem': !exists(json, 'SuplrQualityManagementSystem') ? undefined : json['SuplrQualityManagementSystem'],
        'supplierCorporateGroup': !exists(json, 'SupplierCorporateGroup') ? undefined : json['SupplierCorporateGroup'],
        'supplierProcurementBlock': !exists(json, 'SupplierProcurementBlock') ? undefined : json['SupplierProcurementBlock'],
        'taxNumberResponsible': !exists(json, 'TaxNumberResponsible') ? undefined : json['TaxNumberResponsible'],
        'taxNumberType': !exists(json, 'TaxNumberType') ? undefined : json['TaxNumberType'],
        'suplrProofOfDelivRlvtCode': !exists(json, 'SuplrProofOfDelivRlvtCode') ? undefined : json['SuplrProofOfDelivRlvtCode'],
        'bRTaxIsSplit': !exists(json, 'BR_TaxIsSplit') ? undefined : json['BR_TaxIsSplit'],
        'dataExchangeInstructionKey': !exists(json, 'DataExchangeInstructionKey') ? undefined : json['DataExchangeInstructionKey'],
        'toSupplierCompany': !exists(json, 'to_SupplierCompany') ? undefined : ((json['to_SupplierCompany'] as Array<any>).map(APIBUSINESSPARTNERASupplierCompanyTypeCreateFromJSON)),
        'toSupplierPurchasingOrg': !exists(json, 'to_SupplierPurchasingOrg') ? undefined : ((json['to_SupplierPurchasingOrg'] as Array<any>).map(APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreateFromJSON)),
        'toSupplierText': !exists(json, 'to_SupplierText') ? undefined : ((json['to_SupplierText'] as Array<any>).map(APIBUSINESSPARTNERASupplierTextTypeCreateFromJSON)),
    };
}

export function APIBUSINESSPARTNERASupplierTypeCreateToJSON(value?: APIBUSINESSPARTNERASupplierTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Supplier': value.supplier,
        'AlternativePayeeAccountNumber': value.alternativePayeeAccountNumber,
        'AuthorizationGroup': value.authorizationGroup,
        'BusinessPartnerPanNumber': value.businessPartnerPanNumber,
        'Customer': value.customer,
        'PaymentIsBlockedForSupplier': value.paymentIsBlockedForSupplier,
        'PostingIsBlocked': value.postingIsBlocked,
        'PurchasingIsBlocked': value.purchasingIsBlocked,
        'SupplierAccountGroup': value.supplierAccountGroup,
        'BirthDate': value.birthDate === undefined ? undefined : (value.birthDate === null ? null : value.birthDate.toISOString().substring(0,10)),
        'DeletionIndicator': value.deletionIndicator,
        'FiscalAddress': value.fiscalAddress,
        'PaymentReason': value.paymentReason,
        'ResponsibleType': value.responsibleType,
        'SuplrQltyInProcmtCertfnValidTo': value.suplrQltyInProcmtCertfnValidTo === undefined ? undefined : (value.suplrQltyInProcmtCertfnValidTo === null ? null : value.suplrQltyInProcmtCertfnValidTo.toISOString().substring(0,10)),
        'SuplrQualityManagementSystem': value.suplrQualityManagementSystem,
        'SupplierCorporateGroup': value.supplierCorporateGroup,
        'SupplierProcurementBlock': value.supplierProcurementBlock,
        'TaxNumberResponsible': value.taxNumberResponsible,
        'TaxNumberType': value.taxNumberType,
        'SuplrProofOfDelivRlvtCode': value.suplrProofOfDelivRlvtCode,
        'BR_TaxIsSplit': value.bRTaxIsSplit,
        'DataExchangeInstructionKey': value.dataExchangeInstructionKey,
        'to_SupplierCompany': value.toSupplierCompany === undefined ? undefined : ((value.toSupplierCompany as Array<any>).map(APIBUSINESSPARTNERASupplierCompanyTypeCreateToJSON)),
        'to_SupplierPurchasingOrg': value.toSupplierPurchasingOrg === undefined ? undefined : ((value.toSupplierPurchasingOrg as Array<any>).map(APIBUSINESSPARTNERASupplierPurchasingOrgTypeCreateToJSON)),
        'to_SupplierText': value.toSupplierText === undefined ? undefined : ((value.toSupplierText as Array<any>).map(APIBUSINESSPARTNERASupplierTextTypeCreateToJSON)),
    };
}

