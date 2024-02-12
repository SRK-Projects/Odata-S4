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
import type { APIBUSINESSPARTNERACustomerCompanyTextType } from './APIBUSINESSPARTNERACustomerCompanyTextType';
import {
    APIBUSINESSPARTNERACustomerCompanyTextTypeFromJSON,
    APIBUSINESSPARTNERACustomerCompanyTextTypeFromJSONTyped,
    APIBUSINESSPARTNERACustomerCompanyTextTypeToJSON,
} from './APIBUSINESSPARTNERACustomerCompanyTextType';
import type { APIBUSINESSPARTNERACustomerDunningType } from './APIBUSINESSPARTNERACustomerDunningType';
import {
    APIBUSINESSPARTNERACustomerDunningTypeFromJSON,
    APIBUSINESSPARTNERACustomerDunningTypeFromJSONTyped,
    APIBUSINESSPARTNERACustomerDunningTypeToJSON,
} from './APIBUSINESSPARTNERACustomerDunningType';
import type { APIBUSINESSPARTNERACustomerWithHoldingTaxType } from './APIBUSINESSPARTNERACustomerWithHoldingTaxType';
import {
    APIBUSINESSPARTNERACustomerWithHoldingTaxTypeFromJSON,
    APIBUSINESSPARTNERACustomerWithHoldingTaxTypeFromJSONTyped,
    APIBUSINESSPARTNERACustomerWithHoldingTaxTypeToJSON,
} from './APIBUSINESSPARTNERACustomerWithHoldingTaxType';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERACustomerCompanyType
 */
export interface APIBUSINESSPARTNERACustomerCompanyType {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    customer?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    companyCode?: string;
    /**
     * Tolerance Group for Business Partner/G/L Account
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    aPARToleranceGroup?: string | null;
    /**
     * Our Account Number at Customer
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    accountByCustomer?: string | null;
    /**
     * Accounting Clerk Abbreviation
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    accountingClerk?: string | null;
    /**
     * Accounting clerk's fax number at the customer/vendor
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    accountingClerkFaxNumber?: string | null;
    /**
     * Internet address of partner company clerk
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    accountingClerkInternetAddress?: string | null;
    /**
     * Accounting clerk's telephone number at business partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    accountingClerkPhoneNumber?: string | null;
    /**
     * Account number of an alternative payer
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    alternativePayerAccount?: string | null;
    /**
     * Authorization Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    authorizationGroup?: string | null;
    /**
     * Collective Invoice Variant
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    collectiveInvoiceVariant?: string | null;
    /**
     * Memo
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    customerAccountNote?: string | null;
    /**
     * Head Office Account Number (in branch accounts)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    customerHeadOffice?: string | null;
    /**
     * Indicator: Clearing between customer and vendor ?
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    customerSupplierClearingIsUsed?: boolean | null;
    /**
     * Short Key for a House Bank
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    houseBank?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    interestCalculationCode?: string | null;
    /**
     * Key Date of Last Interest Calculation
     * @type {Date}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    interestCalculationDate?: Date | null;
    /**
     * Interest Calculation Frequency in Months
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    intrstCalcFrequencyInMonths?: string | null;
    /**
     * Indicator: Local Processing?
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    isToBeLocallyProcessed?: boolean | null;
    /**
     * Indicator: Pay All Items Separately?
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    itemIsToBePaidSeparately?: boolean | null;
    /**
     * Key for Sorting According to Assignment Numbers
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    layoutSortingRule?: string | null;
    /**
     * Block Key for Payment
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    paymentBlockingReason?: string | null;
    /**
     * List of Respected Payment Methods
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    paymentMethodsList?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    paymentReason?: string | null;
    /**
     * Key for Terms of Payment
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    paymentTerms?: string | null;
    /**
     * Indicator: Send Payment Advices by EDI
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    paytAdviceIsSentbyEDI?: boolean | null;
    /**
     * Posting block for company code
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    physicalInventoryBlockInd?: boolean | null;
    /**
     * Reconciliation Account in General Ledger
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    reconciliationAccount?: string | null;
    /**
     * Indicator: Record Payment History ?
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    recordPaymentHistoryIndicator?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    userAtCustomer?: string | null;
    /**
     * Deletion Flag for Master Record (Company Code Level)
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    deletionIndicator?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    cashPlanningGroup?: string | null;
    /**
     * Short Key for Known/Negotiated Leave
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    knownOrNegotiatedLeave?: string | null;
    /**
     * Value Adjustment Key
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    valueAdjustmentKey?: string | null;
    /**
     * Customer Account Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    customerAccountGroup?: string | null;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerCompanyTextType>}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    toCompanyText?: Array<APIBUSINESSPARTNERACustomerCompanyTextType>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerDunningType>}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    toCustomerDunning?: Array<APIBUSINESSPARTNERACustomerDunningType>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerWithHoldingTaxType>}
     * @memberof APIBUSINESSPARTNERACustomerCompanyType
     */
    toWithHoldingTax?: Array<APIBUSINESSPARTNERACustomerWithHoldingTaxType>;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustomerCompanyType interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustomerCompanyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERACustomerCompanyTypeFromJSON(json: any): APIBUSINESSPARTNERACustomerCompanyType {
    return APIBUSINESSPARTNERACustomerCompanyTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustomerCompanyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustomerCompanyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': !exists(json, 'Customer') ? undefined : json['Customer'],
        'companyCode': !exists(json, 'CompanyCode') ? undefined : json['CompanyCode'],
        'aPARToleranceGroup': !exists(json, 'APARToleranceGroup') ? undefined : json['APARToleranceGroup'],
        'accountByCustomer': !exists(json, 'AccountByCustomer') ? undefined : json['AccountByCustomer'],
        'accountingClerk': !exists(json, 'AccountingClerk') ? undefined : json['AccountingClerk'],
        'accountingClerkFaxNumber': !exists(json, 'AccountingClerkFaxNumber') ? undefined : json['AccountingClerkFaxNumber'],
        'accountingClerkInternetAddress': !exists(json, 'AccountingClerkInternetAddress') ? undefined : json['AccountingClerkInternetAddress'],
        'accountingClerkPhoneNumber': !exists(json, 'AccountingClerkPhoneNumber') ? undefined : json['AccountingClerkPhoneNumber'],
        'alternativePayerAccount': !exists(json, 'AlternativePayerAccount') ? undefined : json['AlternativePayerAccount'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
        'collectiveInvoiceVariant': !exists(json, 'CollectiveInvoiceVariant') ? undefined : json['CollectiveInvoiceVariant'],
        'customerAccountNote': !exists(json, 'CustomerAccountNote') ? undefined : json['CustomerAccountNote'],
        'customerHeadOffice': !exists(json, 'CustomerHeadOffice') ? undefined : json['CustomerHeadOffice'],
        'customerSupplierClearingIsUsed': !exists(json, 'CustomerSupplierClearingIsUsed') ? undefined : json['CustomerSupplierClearingIsUsed'],
        'houseBank': !exists(json, 'HouseBank') ? undefined : json['HouseBank'],
        'interestCalculationCode': !exists(json, 'InterestCalculationCode') ? undefined : json['InterestCalculationCode'],
        'interestCalculationDate': !exists(json, 'InterestCalculationDate') ? undefined : (json['InterestCalculationDate'] === null ? null : new Date(json['InterestCalculationDate'])),
        'intrstCalcFrequencyInMonths': !exists(json, 'IntrstCalcFrequencyInMonths') ? undefined : json['IntrstCalcFrequencyInMonths'],
        'isToBeLocallyProcessed': !exists(json, 'IsToBeLocallyProcessed') ? undefined : json['IsToBeLocallyProcessed'],
        'itemIsToBePaidSeparately': !exists(json, 'ItemIsToBePaidSeparately') ? undefined : json['ItemIsToBePaidSeparately'],
        'layoutSortingRule': !exists(json, 'LayoutSortingRule') ? undefined : json['LayoutSortingRule'],
        'paymentBlockingReason': !exists(json, 'PaymentBlockingReason') ? undefined : json['PaymentBlockingReason'],
        'paymentMethodsList': !exists(json, 'PaymentMethodsList') ? undefined : json['PaymentMethodsList'],
        'paymentReason': !exists(json, 'PaymentReason') ? undefined : json['PaymentReason'],
        'paymentTerms': !exists(json, 'PaymentTerms') ? undefined : json['PaymentTerms'],
        'paytAdviceIsSentbyEDI': !exists(json, 'PaytAdviceIsSentbyEDI') ? undefined : json['PaytAdviceIsSentbyEDI'],
        'physicalInventoryBlockInd': !exists(json, 'PhysicalInventoryBlockInd') ? undefined : json['PhysicalInventoryBlockInd'],
        'reconciliationAccount': !exists(json, 'ReconciliationAccount') ? undefined : json['ReconciliationAccount'],
        'recordPaymentHistoryIndicator': !exists(json, 'RecordPaymentHistoryIndicator') ? undefined : json['RecordPaymentHistoryIndicator'],
        'userAtCustomer': !exists(json, 'UserAtCustomer') ? undefined : json['UserAtCustomer'],
        'deletionIndicator': !exists(json, 'DeletionIndicator') ? undefined : json['DeletionIndicator'],
        'cashPlanningGroup': !exists(json, 'CashPlanningGroup') ? undefined : json['CashPlanningGroup'],
        'knownOrNegotiatedLeave': !exists(json, 'KnownOrNegotiatedLeave') ? undefined : json['KnownOrNegotiatedLeave'],
        'valueAdjustmentKey': !exists(json, 'ValueAdjustmentKey') ? undefined : json['ValueAdjustmentKey'],
        'customerAccountGroup': !exists(json, 'CustomerAccountGroup') ? undefined : json['CustomerAccountGroup'],
        'toCompanyText': !exists(json, 'to_CompanyText') ? undefined : ((json['to_CompanyText'] as Array<any>).map(APIBUSINESSPARTNERACustomerCompanyTextTypeFromJSON)),
        'toCustomerDunning': !exists(json, 'to_CustomerDunning') ? undefined : ((json['to_CustomerDunning'] as Array<any>).map(APIBUSINESSPARTNERACustomerDunningTypeFromJSON)),
        'toWithHoldingTax': !exists(json, 'to_WithHoldingTax') ? undefined : ((json['to_WithHoldingTax'] as Array<any>).map(APIBUSINESSPARTNERACustomerWithHoldingTaxTypeFromJSON)),
    };
}

export function APIBUSINESSPARTNERACustomerCompanyTypeToJSON(value?: APIBUSINESSPARTNERACustomerCompanyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'CompanyCode': value.companyCode,
        'APARToleranceGroup': value.aPARToleranceGroup,
        'AccountByCustomer': value.accountByCustomer,
        'AccountingClerk': value.accountingClerk,
        'AccountingClerkFaxNumber': value.accountingClerkFaxNumber,
        'AccountingClerkInternetAddress': value.accountingClerkInternetAddress,
        'AccountingClerkPhoneNumber': value.accountingClerkPhoneNumber,
        'AlternativePayerAccount': value.alternativePayerAccount,
        'AuthorizationGroup': value.authorizationGroup,
        'CollectiveInvoiceVariant': value.collectiveInvoiceVariant,
        'CustomerAccountNote': value.customerAccountNote,
        'CustomerHeadOffice': value.customerHeadOffice,
        'CustomerSupplierClearingIsUsed': value.customerSupplierClearingIsUsed,
        'HouseBank': value.houseBank,
        'InterestCalculationCode': value.interestCalculationCode,
        'InterestCalculationDate': value.interestCalculationDate === undefined ? undefined : (value.interestCalculationDate === null ? null : value.interestCalculationDate.toISOString().substring(0,10)),
        'IntrstCalcFrequencyInMonths': value.intrstCalcFrequencyInMonths,
        'IsToBeLocallyProcessed': value.isToBeLocallyProcessed,
        'ItemIsToBePaidSeparately': value.itemIsToBePaidSeparately,
        'LayoutSortingRule': value.layoutSortingRule,
        'PaymentBlockingReason': value.paymentBlockingReason,
        'PaymentMethodsList': value.paymentMethodsList,
        'PaymentReason': value.paymentReason,
        'PaymentTerms': value.paymentTerms,
        'PaytAdviceIsSentbyEDI': value.paytAdviceIsSentbyEDI,
        'PhysicalInventoryBlockInd': value.physicalInventoryBlockInd,
        'ReconciliationAccount': value.reconciliationAccount,
        'RecordPaymentHistoryIndicator': value.recordPaymentHistoryIndicator,
        'UserAtCustomer': value.userAtCustomer,
        'DeletionIndicator': value.deletionIndicator,
        'CashPlanningGroup': value.cashPlanningGroup,
        'KnownOrNegotiatedLeave': value.knownOrNegotiatedLeave,
        'ValueAdjustmentKey': value.valueAdjustmentKey,
        'CustomerAccountGroup': value.customerAccountGroup,
        'to_CompanyText': value.toCompanyText === undefined ? undefined : ((value.toCompanyText as Array<any>).map(APIBUSINESSPARTNERACustomerCompanyTextTypeToJSON)),
        'to_CustomerDunning': value.toCustomerDunning === undefined ? undefined : ((value.toCustomerDunning as Array<any>).map(APIBUSINESSPARTNERACustomerDunningTypeToJSON)),
        'to_WithHoldingTax': value.toWithHoldingTax === undefined ? undefined : ((value.toWithHoldingTax as Array<any>).map(APIBUSINESSPARTNERACustomerWithHoldingTaxTypeToJSON)),
    };
}

