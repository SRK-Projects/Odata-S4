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
import type { APIBUSINESSPARTNERAAddressEmailAddressType } from './APIBUSINESSPARTNERAAddressEmailAddressType';
import {
    APIBUSINESSPARTNERAAddressEmailAddressTypeFromJSON,
    APIBUSINESSPARTNERAAddressEmailAddressTypeFromJSONTyped,
    APIBUSINESSPARTNERAAddressEmailAddressTypeToJSON,
} from './APIBUSINESSPARTNERAAddressEmailAddressType';
import type { APIBUSINESSPARTNERAAddressFaxNumberType } from './APIBUSINESSPARTNERAAddressFaxNumberType';
import {
    APIBUSINESSPARTNERAAddressFaxNumberTypeFromJSON,
    APIBUSINESSPARTNERAAddressFaxNumberTypeFromJSONTyped,
    APIBUSINESSPARTNERAAddressFaxNumberTypeToJSON,
} from './APIBUSINESSPARTNERAAddressFaxNumberType';
import type { APIBUSINESSPARTNERAAddressHomePageURLType } from './APIBUSINESSPARTNERAAddressHomePageURLType';
import {
    APIBUSINESSPARTNERAAddressHomePageURLTypeFromJSON,
    APIBUSINESSPARTNERAAddressHomePageURLTypeFromJSONTyped,
    APIBUSINESSPARTNERAAddressHomePageURLTypeToJSON,
} from './APIBUSINESSPARTNERAAddressHomePageURLType';
import type { APIBUSINESSPARTNERAAddressPhoneNumberType } from './APIBUSINESSPARTNERAAddressPhoneNumberType';
import {
    APIBUSINESSPARTNERAAddressPhoneNumberTypeFromJSON,
    APIBUSINESSPARTNERAAddressPhoneNumberTypeFromJSONTyped,
    APIBUSINESSPARTNERAAddressPhoneNumberTypeToJSON,
} from './APIBUSINESSPARTNERAAddressPhoneNumberType';
import type { APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType } from './APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType';
import {
    APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeFromJSON,
    APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeFromJSONTyped,
    APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeToJSON,
} from './APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType';
import type { APIBUSINESSPARTNERABPIntlAddressVersionType } from './APIBUSINESSPARTNERABPIntlAddressVersionType';
import {
    APIBUSINESSPARTNERABPIntlAddressVersionTypeFromJSON,
    APIBUSINESSPARTNERABPIntlAddressVersionTypeFromJSONTyped,
    APIBUSINESSPARTNERABPIntlAddressVersionTypeToJSON,
} from './APIBUSINESSPARTNERABPIntlAddressVersionType';
import type { APIBUSINESSPARTNERABuPaAddressUsageType } from './APIBUSINESSPARTNERABuPaAddressUsageType';
import {
    APIBUSINESSPARTNERABuPaAddressUsageTypeFromJSON,
    APIBUSINESSPARTNERABuPaAddressUsageTypeFromJSONTyped,
    APIBUSINESSPARTNERABuPaAddressUsageTypeToJSON,
} from './APIBUSINESSPARTNERABuPaAddressUsageType';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERABusinessPartnerAddressType
 */
export interface APIBUSINESSPARTNERABusinessPartnerAddressType {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    businessPartner?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    addressID?: string;
    /**
     * Validity Start of a Business Partner Address
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    validityStartDate?: Date | null;
    /**
     * Validity End of a Business Partner Address
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    validityEndDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    authorizationGroup?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    addressUUID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    additionalStreetPrefixName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    additionalStreetSuffixName?: string | null;
    /**
     * Address Time Zone
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    addressTimeZone?: string | null;
    /**
     * c/o name
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    careOfName?: string | null;
    /**
     * City code for city/street file
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    cityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    cityName?: string | null;
    /**
     * Company Postal Code (for Large Customers)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    companyPostalCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    county?: string | null;
    /**
     * Number of Delivery Service
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    deliveryServiceNumber?: string | null;
    /**
     * Type of Delivery Service
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    deliveryServiceTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    district?: string | null;
    /**
     * Form-of-Address Key
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    formOfAddress?: string | null;
    /**
     * Full name of a party (Bus. Partner, Org. Unit, Doc. address)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    fullName?: string | null;
    /**
     * City (different from postal city)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    homeCityName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    houseNumber?: string | null;
    /**
     * House number supplement
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    houseNumberSupplementText?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    language?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    pOBox?: string | null;
    /**
     * PO Box city
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    pOBoxDeviatingCityName?: string | null;
    /**
     * PO Box of Country/Region
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    pOBoxDeviatingCountry?: string | null;
    /**
     * Region for PO Box (Country/Region, State, Province, ...)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    pOBoxDeviatingRegion?: string | null;
    /**
     * Flag: PO Box Without Number
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    pOBoxIsWithoutNumber?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    pOBoxLobbyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    pOBoxPostalCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    person?: string | null;
    /**
     * City Postal Code
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    postalCode?: string | null;
    /**
     * Communication Method (Key) (Business Address Services)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    prfrdCommMediumType?: string | null;
    /**
     * Region (State, Province, County)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    streetName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    streetPrefixName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    streetSuffixName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    taxJurisdiction?: string | null;
    /**
     * Transportation zone to or from which the goods are delivered
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    transportZone?: string | null;
    /**
     * Address number in external system
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    addressIDByExternalSystem?: string | null;
    /**
     * County code for county
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    countyCode?: string | null;
    /**
     * Township code for Township
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    townshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    townshipName?: string | null;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERABuPaAddressUsageType>}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    toAddressUsage?: Array<APIBUSINESSPARTNERABuPaAddressUsageType>;
    /**
     * 
     * @type {APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    toBPAddrDepdntIntlLocNumber?: APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberType | null;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERABPIntlAddressVersionType>}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    toBPIntlAddressVersion?: Array<APIBUSINESSPARTNERABPIntlAddressVersionType>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressEmailAddressType>}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    toEmailAddress?: Array<APIBUSINESSPARTNERAAddressEmailAddressType>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressFaxNumberType>}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    toFaxNumber?: Array<APIBUSINESSPARTNERAAddressFaxNumberType>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressPhoneNumberType>}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    toMobilePhoneNumber?: Array<APIBUSINESSPARTNERAAddressPhoneNumberType>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressPhoneNumberType>}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    toPhoneNumber?: Array<APIBUSINESSPARTNERAAddressPhoneNumberType>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressHomePageURLType>}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressType
     */
    toURLAddress?: Array<APIBUSINESSPARTNERAAddressHomePageURLType>;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABusinessPartnerAddressType interface.
 */
export function instanceOfAPIBUSINESSPARTNERABusinessPartnerAddressType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABusinessPartnerAddressTypeFromJSON(json: any): APIBUSINESSPARTNERABusinessPartnerAddressType {
    return APIBUSINESSPARTNERABusinessPartnerAddressTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABusinessPartnerAddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABusinessPartnerAddressType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': !exists(json, 'BusinessPartner') ? undefined : json['BusinessPartner'],
        'addressID': !exists(json, 'AddressID') ? undefined : json['AddressID'],
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (json['ValidityEndDate'] === null ? null : new Date(json['ValidityEndDate'])),
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
        'addressUUID': !exists(json, 'AddressUUID') ? undefined : json['AddressUUID'],
        'additionalStreetPrefixName': !exists(json, 'AdditionalStreetPrefixName') ? undefined : json['AdditionalStreetPrefixName'],
        'additionalStreetSuffixName': !exists(json, 'AdditionalStreetSuffixName') ? undefined : json['AdditionalStreetSuffixName'],
        'addressTimeZone': !exists(json, 'AddressTimeZone') ? undefined : json['AddressTimeZone'],
        'careOfName': !exists(json, 'CareOfName') ? undefined : json['CareOfName'],
        'cityCode': !exists(json, 'CityCode') ? undefined : json['CityCode'],
        'cityName': !exists(json, 'CityName') ? undefined : json['CityName'],
        'companyPostalCode': !exists(json, 'CompanyPostalCode') ? undefined : json['CompanyPostalCode'],
        'country': !exists(json, 'Country') ? undefined : json['Country'],
        'county': !exists(json, 'County') ? undefined : json['County'],
        'deliveryServiceNumber': !exists(json, 'DeliveryServiceNumber') ? undefined : json['DeliveryServiceNumber'],
        'deliveryServiceTypeCode': !exists(json, 'DeliveryServiceTypeCode') ? undefined : json['DeliveryServiceTypeCode'],
        'district': !exists(json, 'District') ? undefined : json['District'],
        'formOfAddress': !exists(json, 'FormOfAddress') ? undefined : json['FormOfAddress'],
        'fullName': !exists(json, 'FullName') ? undefined : json['FullName'],
        'homeCityName': !exists(json, 'HomeCityName') ? undefined : json['HomeCityName'],
        'houseNumber': !exists(json, 'HouseNumber') ? undefined : json['HouseNumber'],
        'houseNumberSupplementText': !exists(json, 'HouseNumberSupplementText') ? undefined : json['HouseNumberSupplementText'],
        'language': !exists(json, 'Language') ? undefined : json['Language'],
        'pOBox': !exists(json, 'POBox') ? undefined : json['POBox'],
        'pOBoxDeviatingCityName': !exists(json, 'POBoxDeviatingCityName') ? undefined : json['POBoxDeviatingCityName'],
        'pOBoxDeviatingCountry': !exists(json, 'POBoxDeviatingCountry') ? undefined : json['POBoxDeviatingCountry'],
        'pOBoxDeviatingRegion': !exists(json, 'POBoxDeviatingRegion') ? undefined : json['POBoxDeviatingRegion'],
        'pOBoxIsWithoutNumber': !exists(json, 'POBoxIsWithoutNumber') ? undefined : json['POBoxIsWithoutNumber'],
        'pOBoxLobbyName': !exists(json, 'POBoxLobbyName') ? undefined : json['POBoxLobbyName'],
        'pOBoxPostalCode': !exists(json, 'POBoxPostalCode') ? undefined : json['POBoxPostalCode'],
        'person': !exists(json, 'Person') ? undefined : json['Person'],
        'postalCode': !exists(json, 'PostalCode') ? undefined : json['PostalCode'],
        'prfrdCommMediumType': !exists(json, 'PrfrdCommMediumType') ? undefined : json['PrfrdCommMediumType'],
        'region': !exists(json, 'Region') ? undefined : json['Region'],
        'streetName': !exists(json, 'StreetName') ? undefined : json['StreetName'],
        'streetPrefixName': !exists(json, 'StreetPrefixName') ? undefined : json['StreetPrefixName'],
        'streetSuffixName': !exists(json, 'StreetSuffixName') ? undefined : json['StreetSuffixName'],
        'taxJurisdiction': !exists(json, 'TaxJurisdiction') ? undefined : json['TaxJurisdiction'],
        'transportZone': !exists(json, 'TransportZone') ? undefined : json['TransportZone'],
        'addressIDByExternalSystem': !exists(json, 'AddressIDByExternalSystem') ? undefined : json['AddressIDByExternalSystem'],
        'countyCode': !exists(json, 'CountyCode') ? undefined : json['CountyCode'],
        'townshipCode': !exists(json, 'TownshipCode') ? undefined : json['TownshipCode'],
        'townshipName': !exists(json, 'TownshipName') ? undefined : json['TownshipName'],
        'toAddressUsage': !exists(json, 'to_AddressUsage') ? undefined : ((json['to_AddressUsage'] as Array<any>).map(APIBUSINESSPARTNERABuPaAddressUsageTypeFromJSON)),
        'toBPAddrDepdntIntlLocNumber': !exists(json, 'to_BPAddrDepdntIntlLocNumber') ? undefined : APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeFromJSON(json['to_BPAddrDepdntIntlLocNumber']),
        'toBPIntlAddressVersion': !exists(json, 'to_BPIntlAddressVersion') ? undefined : ((json['to_BPIntlAddressVersion'] as Array<any>).map(APIBUSINESSPARTNERABPIntlAddressVersionTypeFromJSON)),
        'toEmailAddress': !exists(json, 'to_EmailAddress') ? undefined : ((json['to_EmailAddress'] as Array<any>).map(APIBUSINESSPARTNERAAddressEmailAddressTypeFromJSON)),
        'toFaxNumber': !exists(json, 'to_FaxNumber') ? undefined : ((json['to_FaxNumber'] as Array<any>).map(APIBUSINESSPARTNERAAddressFaxNumberTypeFromJSON)),
        'toMobilePhoneNumber': !exists(json, 'to_MobilePhoneNumber') ? undefined : ((json['to_MobilePhoneNumber'] as Array<any>).map(APIBUSINESSPARTNERAAddressPhoneNumberTypeFromJSON)),
        'toPhoneNumber': !exists(json, 'to_PhoneNumber') ? undefined : ((json['to_PhoneNumber'] as Array<any>).map(APIBUSINESSPARTNERAAddressPhoneNumberTypeFromJSON)),
        'toURLAddress': !exists(json, 'to_URLAddress') ? undefined : ((json['to_URLAddress'] as Array<any>).map(APIBUSINESSPARTNERAAddressHomePageURLTypeFromJSON)),
    };
}

export function APIBUSINESSPARTNERABusinessPartnerAddressTypeToJSON(value?: APIBUSINESSPARTNERABusinessPartnerAddressType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'AddressID': value.addressID,
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString()),
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate === null ? null : value.validityEndDate.toISOString()),
        'AuthorizationGroup': value.authorizationGroup,
        'AddressUUID': value.addressUUID,
        'AdditionalStreetPrefixName': value.additionalStreetPrefixName,
        'AdditionalStreetSuffixName': value.additionalStreetSuffixName,
        'AddressTimeZone': value.addressTimeZone,
        'CareOfName': value.careOfName,
        'CityCode': value.cityCode,
        'CityName': value.cityName,
        'CompanyPostalCode': value.companyPostalCode,
        'Country': value.country,
        'County': value.county,
        'DeliveryServiceNumber': value.deliveryServiceNumber,
        'DeliveryServiceTypeCode': value.deliveryServiceTypeCode,
        'District': value.district,
        'FormOfAddress': value.formOfAddress,
        'FullName': value.fullName,
        'HomeCityName': value.homeCityName,
        'HouseNumber': value.houseNumber,
        'HouseNumberSupplementText': value.houseNumberSupplementText,
        'Language': value.language,
        'POBox': value.pOBox,
        'POBoxDeviatingCityName': value.pOBoxDeviatingCityName,
        'POBoxDeviatingCountry': value.pOBoxDeviatingCountry,
        'POBoxDeviatingRegion': value.pOBoxDeviatingRegion,
        'POBoxIsWithoutNumber': value.pOBoxIsWithoutNumber,
        'POBoxLobbyName': value.pOBoxLobbyName,
        'POBoxPostalCode': value.pOBoxPostalCode,
        'Person': value.person,
        'PostalCode': value.postalCode,
        'PrfrdCommMediumType': value.prfrdCommMediumType,
        'Region': value.region,
        'StreetName': value.streetName,
        'StreetPrefixName': value.streetPrefixName,
        'StreetSuffixName': value.streetSuffixName,
        'TaxJurisdiction': value.taxJurisdiction,
        'TransportZone': value.transportZone,
        'AddressIDByExternalSystem': value.addressIDByExternalSystem,
        'CountyCode': value.countyCode,
        'TownshipCode': value.townshipCode,
        'TownshipName': value.townshipName,
        'to_AddressUsage': value.toAddressUsage === undefined ? undefined : ((value.toAddressUsage as Array<any>).map(APIBUSINESSPARTNERABuPaAddressUsageTypeToJSON)),
        'to_BPAddrDepdntIntlLocNumber': APIBUSINESSPARTNERABPAddrDepdntIntlLocNumberTypeToJSON(value.toBPAddrDepdntIntlLocNumber),
        'to_BPIntlAddressVersion': value.toBPIntlAddressVersion === undefined ? undefined : ((value.toBPIntlAddressVersion as Array<any>).map(APIBUSINESSPARTNERABPIntlAddressVersionTypeToJSON)),
        'to_EmailAddress': value.toEmailAddress === undefined ? undefined : ((value.toEmailAddress as Array<any>).map(APIBUSINESSPARTNERAAddressEmailAddressTypeToJSON)),
        'to_FaxNumber': value.toFaxNumber === undefined ? undefined : ((value.toFaxNumber as Array<any>).map(APIBUSINESSPARTNERAAddressFaxNumberTypeToJSON)),
        'to_MobilePhoneNumber': value.toMobilePhoneNumber === undefined ? undefined : ((value.toMobilePhoneNumber as Array<any>).map(APIBUSINESSPARTNERAAddressPhoneNumberTypeToJSON)),
        'to_PhoneNumber': value.toPhoneNumber === undefined ? undefined : ((value.toPhoneNumber as Array<any>).map(APIBUSINESSPARTNERAAddressPhoneNumberTypeToJSON)),
        'to_URLAddress': value.toURLAddress === undefined ? undefined : ((value.toURLAddress as Array<any>).map(APIBUSINESSPARTNERAAddressHomePageURLTypeToJSON)),
    };
}
