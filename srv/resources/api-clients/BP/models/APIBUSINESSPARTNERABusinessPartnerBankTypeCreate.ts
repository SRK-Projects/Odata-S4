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
 * @interface APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
 */
export interface APIBUSINESSPARTNERABusinessPartnerBankTypeCreate {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    businessPartner: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    bankIdentification: string;
    /**
     * Bank Country/Region Key
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    bankCountryKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    bankNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    bankControlKey?: string | null;
    /**
     * Account Holder Name
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    bankAccountHolderName?: string | null;
    /**
     * Name of Bank Account
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    bankAccountName?: string | null;
    /**
     * Validity Start of Business Partner Bank Details
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    validityStartDate?: Date | null;
    /**
     * Validity End of Business Partner Bank Details
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    validityEndDate?: Date | null;
    /**
     * IBAN (International Bank Account Number)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    iBAN?: string | null;
    /**
     * Validity Start of IBAN
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    iBANValidityStartDate?: Date | null;
    /**
     * Bank Account Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    bankAccount?: string | null;
    /**
     * Reference Details for Bank Details
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    bankAccountReferenceText?: string | null;
    /**
     * Indicator: Collection Authorization
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    collectionAuthInd?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerBankTypeCreate
     */
    authorizationGroup?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABusinessPartnerBankTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABusinessPartnerBankTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "businessPartner" in value;
    isInstance = isInstance && "bankIdentification" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABusinessPartnerBankTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABusinessPartnerBankTypeCreate {
    return APIBUSINESSPARTNERABusinessPartnerBankTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABusinessPartnerBankTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABusinessPartnerBankTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': json['BusinessPartner'],
        'bankIdentification': json['BankIdentification'],
        'bankCountryKey': !exists(json, 'BankCountryKey') ? undefined : json['BankCountryKey'],
        'bankNumber': !exists(json, 'BankNumber') ? undefined : json['BankNumber'],
        'bankControlKey': !exists(json, 'BankControlKey') ? undefined : json['BankControlKey'],
        'bankAccountHolderName': !exists(json, 'BankAccountHolderName') ? undefined : json['BankAccountHolderName'],
        'bankAccountName': !exists(json, 'BankAccountName') ? undefined : json['BankAccountName'],
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (json['ValidityEndDate'] === null ? null : new Date(json['ValidityEndDate'])),
        'iBAN': !exists(json, 'IBAN') ? undefined : json['IBAN'],
        'iBANValidityStartDate': !exists(json, 'IBANValidityStartDate') ? undefined : (json['IBANValidityStartDate'] === null ? null : new Date(json['IBANValidityStartDate'])),
        'bankAccount': !exists(json, 'BankAccount') ? undefined : json['BankAccount'],
        'bankAccountReferenceText': !exists(json, 'BankAccountReferenceText') ? undefined : json['BankAccountReferenceText'],
        'collectionAuthInd': !exists(json, 'CollectionAuthInd') ? undefined : json['CollectionAuthInd'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
    };
}

export function APIBUSINESSPARTNERABusinessPartnerBankTypeCreateToJSON(value?: APIBUSINESSPARTNERABusinessPartnerBankTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'BankIdentification': value.bankIdentification,
        'BankCountryKey': value.bankCountryKey,
        'BankNumber': value.bankNumber,
        'BankControlKey': value.bankControlKey,
        'BankAccountHolderName': value.bankAccountHolderName,
        'BankAccountName': value.bankAccountName,
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString()),
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate === null ? null : value.validityEndDate.toISOString()),
        'IBAN': value.iBAN,
        'IBANValidityStartDate': value.iBANValidityStartDate === undefined ? undefined : (value.iBANValidityStartDate === null ? null : value.iBANValidityStartDate.toISOString().substring(0,10)),
        'BankAccount': value.bankAccount,
        'BankAccountReferenceText': value.bankAccountReferenceText,
        'CollectionAuthInd': value.collectionAuthInd,
        'AuthorizationGroup': value.authorizationGroup,
    };
}

