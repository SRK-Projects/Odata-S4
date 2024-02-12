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
import type { APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate } from './APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate';
import {
    APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreateFromJSON,
    APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreateToJSON,
} from './APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate';
import type { APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreate } from './APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreate';
import {
    APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreateFromJSON,
    APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreateToJSON,
} from './APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreate';
import type { APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreate } from './APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreate';
import {
    APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreateFromJSON,
    APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreateToJSON,
} from './APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreate';
import type { APIBUSINESSPARTNERACustomerCompanyTypeCreate } from './APIBUSINESSPARTNERACustomerCompanyTypeCreate';
import {
    APIBUSINESSPARTNERACustomerCompanyTypeCreateFromJSON,
    APIBUSINESSPARTNERACustomerCompanyTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERACustomerCompanyTypeCreateToJSON,
} from './APIBUSINESSPARTNERACustomerCompanyTypeCreate';
import type { APIBUSINESSPARTNERACustomerSalesAreaTypeCreate } from './APIBUSINESSPARTNERACustomerSalesAreaTypeCreate';
import {
    APIBUSINESSPARTNERACustomerSalesAreaTypeCreateFromJSON,
    APIBUSINESSPARTNERACustomerSalesAreaTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERACustomerSalesAreaTypeCreateToJSON,
} from './APIBUSINESSPARTNERACustomerSalesAreaTypeCreate';
import type { APIBUSINESSPARTNERACustomerTaxGroupingTypeCreate } from './APIBUSINESSPARTNERACustomerTaxGroupingTypeCreate';
import {
    APIBUSINESSPARTNERACustomerTaxGroupingTypeCreateFromJSON,
    APIBUSINESSPARTNERACustomerTaxGroupingTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERACustomerTaxGroupingTypeCreateToJSON,
} from './APIBUSINESSPARTNERACustomerTaxGroupingTypeCreate';
import type { APIBUSINESSPARTNERACustomerTextTypeCreate } from './APIBUSINESSPARTNERACustomerTextTypeCreate';
import {
    APIBUSINESSPARTNERACustomerTextTypeCreateFromJSON,
    APIBUSINESSPARTNERACustomerTextTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERACustomerTextTypeCreateToJSON,
} from './APIBUSINESSPARTNERACustomerTextTypeCreate';
import type { APIBUSINESSPARTNERACustomerUnloadingPointTypeCreate } from './APIBUSINESSPARTNERACustomerUnloadingPointTypeCreate';
import {
    APIBUSINESSPARTNERACustomerUnloadingPointTypeCreateFromJSON,
    APIBUSINESSPARTNERACustomerUnloadingPointTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERACustomerUnloadingPointTypeCreateToJSON,
} from './APIBUSINESSPARTNERACustomerUnloadingPointTypeCreate';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERACustomerTypeCreate
 */
export interface APIBUSINESSPARTNERACustomerTypeCreate {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    customer: string;
    /**
     * Authorization Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    authorizationGroup?: string | null;
    /**
     * Central billing block for customer
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    billingIsBlockedForCustomer?: string | null;
    /**
     * Customer Account Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    customerAccountGroup?: string | null;
    /**
     * Customer Classification
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    customerClassification?: string | null;
    /**
     * Central delivery block for the customer
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    deliveryIsBlocked?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute01?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute02?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute03?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute04?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute05?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute06?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute07?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute08?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute09?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    freeDefinedAttribute10?: string | null;
    /**
     * Central Order Block for Customer
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    orderIsBlockedForCustomer?: string | null;
    /**
     * Central Posting Block
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    postingIsBlocked?: boolean | null;
    /**
     * Account Number of Supplier
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    supplier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    customerCorporateGroup?: string | null;
    /**
     * Account number of the master record with the fiscal address
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    fiscalAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    industryCode1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    industryCode2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    industryCode3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    industryCode4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    industryCode5?: string | null;
    /**
     * Nielsen ID
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    nielsenRegion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    paymentReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    responsibleType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    taxNumberType?: string | null;
    /**
     * Central Deletion Flag for Master Record
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    deletionIndicator?: boolean | null;
    /**
     * Express train station
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    expressTrainStationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    trainStationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    cityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    county?: string | null;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate>}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    toCustAddrDepdntExtIdentifier?: Array<APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreate>}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    toCustAddrDepdntInformation?: Array<APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerCompanyTypeCreate>}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    toCustomerCompany?: Array<APIBUSINESSPARTNERACustomerCompanyTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerSalesAreaTypeCreate>}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    toCustomerSalesArea?: Array<APIBUSINESSPARTNERACustomerSalesAreaTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerTaxGroupingTypeCreate>}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    toCustomerTaxGrouping?: Array<APIBUSINESSPARTNERACustomerTaxGroupingTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerTextTypeCreate>}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    toCustomerText?: Array<APIBUSINESSPARTNERACustomerTextTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustomerUnloadingPointTypeCreate>}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    toCustomerUnloadingPoint?: Array<APIBUSINESSPARTNERACustomerUnloadingPointTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreate>}
     * @memberof APIBUSINESSPARTNERACustomerTypeCreate
     */
    toCustUnldgPtAddrDepdntInfo?: Array<APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreate>;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustomerTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustomerTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customer" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERACustomerTypeCreateFromJSON(json: any): APIBUSINESSPARTNERACustomerTypeCreate {
    return APIBUSINESSPARTNERACustomerTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustomerTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustomerTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['Customer'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
        'billingIsBlockedForCustomer': !exists(json, 'BillingIsBlockedForCustomer') ? undefined : json['BillingIsBlockedForCustomer'],
        'customerAccountGroup': !exists(json, 'CustomerAccountGroup') ? undefined : json['CustomerAccountGroup'],
        'customerClassification': !exists(json, 'CustomerClassification') ? undefined : json['CustomerClassification'],
        'deliveryIsBlocked': !exists(json, 'DeliveryIsBlocked') ? undefined : json['DeliveryIsBlocked'],
        'freeDefinedAttribute01': !exists(json, 'FreeDefinedAttribute01') ? undefined : json['FreeDefinedAttribute01'],
        'freeDefinedAttribute02': !exists(json, 'FreeDefinedAttribute02') ? undefined : json['FreeDefinedAttribute02'],
        'freeDefinedAttribute03': !exists(json, 'FreeDefinedAttribute03') ? undefined : json['FreeDefinedAttribute03'],
        'freeDefinedAttribute04': !exists(json, 'FreeDefinedAttribute04') ? undefined : json['FreeDefinedAttribute04'],
        'freeDefinedAttribute05': !exists(json, 'FreeDefinedAttribute05') ? undefined : json['FreeDefinedAttribute05'],
        'freeDefinedAttribute06': !exists(json, 'FreeDefinedAttribute06') ? undefined : json['FreeDefinedAttribute06'],
        'freeDefinedAttribute07': !exists(json, 'FreeDefinedAttribute07') ? undefined : json['FreeDefinedAttribute07'],
        'freeDefinedAttribute08': !exists(json, 'FreeDefinedAttribute08') ? undefined : json['FreeDefinedAttribute08'],
        'freeDefinedAttribute09': !exists(json, 'FreeDefinedAttribute09') ? undefined : json['FreeDefinedAttribute09'],
        'freeDefinedAttribute10': !exists(json, 'FreeDefinedAttribute10') ? undefined : json['FreeDefinedAttribute10'],
        'orderIsBlockedForCustomer': !exists(json, 'OrderIsBlockedForCustomer') ? undefined : json['OrderIsBlockedForCustomer'],
        'postingIsBlocked': !exists(json, 'PostingIsBlocked') ? undefined : json['PostingIsBlocked'],
        'supplier': !exists(json, 'Supplier') ? undefined : json['Supplier'],
        'customerCorporateGroup': !exists(json, 'CustomerCorporateGroup') ? undefined : json['CustomerCorporateGroup'],
        'fiscalAddress': !exists(json, 'FiscalAddress') ? undefined : json['FiscalAddress'],
        'industryCode1': !exists(json, 'IndustryCode1') ? undefined : json['IndustryCode1'],
        'industryCode2': !exists(json, 'IndustryCode2') ? undefined : json['IndustryCode2'],
        'industryCode3': !exists(json, 'IndustryCode3') ? undefined : json['IndustryCode3'],
        'industryCode4': !exists(json, 'IndustryCode4') ? undefined : json['IndustryCode4'],
        'industryCode5': !exists(json, 'IndustryCode5') ? undefined : json['IndustryCode5'],
        'nielsenRegion': !exists(json, 'NielsenRegion') ? undefined : json['NielsenRegion'],
        'paymentReason': !exists(json, 'PaymentReason') ? undefined : json['PaymentReason'],
        'responsibleType': !exists(json, 'ResponsibleType') ? undefined : json['ResponsibleType'],
        'taxNumberType': !exists(json, 'TaxNumberType') ? undefined : json['TaxNumberType'],
        'deletionIndicator': !exists(json, 'DeletionIndicator') ? undefined : json['DeletionIndicator'],
        'expressTrainStationName': !exists(json, 'ExpressTrainStationName') ? undefined : json['ExpressTrainStationName'],
        'trainStationName': !exists(json, 'TrainStationName') ? undefined : json['TrainStationName'],
        'cityCode': !exists(json, 'CityCode') ? undefined : json['CityCode'],
        'county': !exists(json, 'County') ? undefined : json['County'],
        'toCustAddrDepdntExtIdentifier': !exists(json, 'to_CustAddrDepdntExtIdentifier') ? undefined : ((json['to_CustAddrDepdntExtIdentifier'] as Array<any>).map(APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreateFromJSON)),
        'toCustAddrDepdntInformation': !exists(json, 'to_CustAddrDepdntInformation') ? undefined : ((json['to_CustAddrDepdntInformation'] as Array<any>).map(APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreateFromJSON)),
        'toCustomerCompany': !exists(json, 'to_CustomerCompany') ? undefined : ((json['to_CustomerCompany'] as Array<any>).map(APIBUSINESSPARTNERACustomerCompanyTypeCreateFromJSON)),
        'toCustomerSalesArea': !exists(json, 'to_CustomerSalesArea') ? undefined : ((json['to_CustomerSalesArea'] as Array<any>).map(APIBUSINESSPARTNERACustomerSalesAreaTypeCreateFromJSON)),
        'toCustomerTaxGrouping': !exists(json, 'to_CustomerTaxGrouping') ? undefined : ((json['to_CustomerTaxGrouping'] as Array<any>).map(APIBUSINESSPARTNERACustomerTaxGroupingTypeCreateFromJSON)),
        'toCustomerText': !exists(json, 'to_CustomerText') ? undefined : ((json['to_CustomerText'] as Array<any>).map(APIBUSINESSPARTNERACustomerTextTypeCreateFromJSON)),
        'toCustomerUnloadingPoint': !exists(json, 'to_CustomerUnloadingPoint') ? undefined : ((json['to_CustomerUnloadingPoint'] as Array<any>).map(APIBUSINESSPARTNERACustomerUnloadingPointTypeCreateFromJSON)),
        'toCustUnldgPtAddrDepdntInfo': !exists(json, 'to_CustUnldgPtAddrDepdntInfo') ? undefined : ((json['to_CustUnldgPtAddrDepdntInfo'] as Array<any>).map(APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreateFromJSON)),
    };
}

export function APIBUSINESSPARTNERACustomerTypeCreateToJSON(value?: APIBUSINESSPARTNERACustomerTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'AuthorizationGroup': value.authorizationGroup,
        'BillingIsBlockedForCustomer': value.billingIsBlockedForCustomer,
        'CustomerAccountGroup': value.customerAccountGroup,
        'CustomerClassification': value.customerClassification,
        'DeliveryIsBlocked': value.deliveryIsBlocked,
        'FreeDefinedAttribute01': value.freeDefinedAttribute01,
        'FreeDefinedAttribute02': value.freeDefinedAttribute02,
        'FreeDefinedAttribute03': value.freeDefinedAttribute03,
        'FreeDefinedAttribute04': value.freeDefinedAttribute04,
        'FreeDefinedAttribute05': value.freeDefinedAttribute05,
        'FreeDefinedAttribute06': value.freeDefinedAttribute06,
        'FreeDefinedAttribute07': value.freeDefinedAttribute07,
        'FreeDefinedAttribute08': value.freeDefinedAttribute08,
        'FreeDefinedAttribute09': value.freeDefinedAttribute09,
        'FreeDefinedAttribute10': value.freeDefinedAttribute10,
        'OrderIsBlockedForCustomer': value.orderIsBlockedForCustomer,
        'PostingIsBlocked': value.postingIsBlocked,
        'Supplier': value.supplier,
        'CustomerCorporateGroup': value.customerCorporateGroup,
        'FiscalAddress': value.fiscalAddress,
        'IndustryCode1': value.industryCode1,
        'IndustryCode2': value.industryCode2,
        'IndustryCode3': value.industryCode3,
        'IndustryCode4': value.industryCode4,
        'IndustryCode5': value.industryCode5,
        'NielsenRegion': value.nielsenRegion,
        'PaymentReason': value.paymentReason,
        'ResponsibleType': value.responsibleType,
        'TaxNumberType': value.taxNumberType,
        'DeletionIndicator': value.deletionIndicator,
        'ExpressTrainStationName': value.expressTrainStationName,
        'TrainStationName': value.trainStationName,
        'CityCode': value.cityCode,
        'County': value.county,
        'to_CustAddrDepdntExtIdentifier': value.toCustAddrDepdntExtIdentifier === undefined ? undefined : ((value.toCustAddrDepdntExtIdentifier as Array<any>).map(APIBUSINESSPARTNERACustAddrDepdntExtIdentifierTypeCreateToJSON)),
        'to_CustAddrDepdntInformation': value.toCustAddrDepdntInformation === undefined ? undefined : ((value.toCustAddrDepdntInformation as Array<any>).map(APIBUSINESSPARTNERACustAddrDepdntInformationTypeCreateToJSON)),
        'to_CustomerCompany': value.toCustomerCompany === undefined ? undefined : ((value.toCustomerCompany as Array<any>).map(APIBUSINESSPARTNERACustomerCompanyTypeCreateToJSON)),
        'to_CustomerSalesArea': value.toCustomerSalesArea === undefined ? undefined : ((value.toCustomerSalesArea as Array<any>).map(APIBUSINESSPARTNERACustomerSalesAreaTypeCreateToJSON)),
        'to_CustomerTaxGrouping': value.toCustomerTaxGrouping === undefined ? undefined : ((value.toCustomerTaxGrouping as Array<any>).map(APIBUSINESSPARTNERACustomerTaxGroupingTypeCreateToJSON)),
        'to_CustomerText': value.toCustomerText === undefined ? undefined : ((value.toCustomerText as Array<any>).map(APIBUSINESSPARTNERACustomerTextTypeCreateToJSON)),
        'to_CustomerUnloadingPoint': value.toCustomerUnloadingPoint === undefined ? undefined : ((value.toCustomerUnloadingPoint as Array<any>).map(APIBUSINESSPARTNERACustomerUnloadingPointTypeCreateToJSON)),
        'to_CustUnldgPtAddrDepdntInfo': value.toCustUnldgPtAddrDepdntInfo === undefined ? undefined : ((value.toCustUnldgPtAddrDepdntInfo as Array<any>).map(APIBUSINESSPARTNERACustUnldgPtAddrDepdntInfoTypeCreateToJSON)),
    };
}

