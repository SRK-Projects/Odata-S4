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
 * @interface APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
 */
export interface APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate {
    /**
     * Validity Start of a Business Partner Address
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    validityStartDate?: Date | null;
    /**
     * Validity End of a Business Partner Address
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    validityEndDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    authorizationGroup?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    additionalStreetPrefixName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    additionalStreetSuffixName?: string | null;
    /**
     * Address Time Zone
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    addressTimeZone?: string | null;
    /**
     * c/o name
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    careOfName?: string | null;
    /**
     * City code for city/street file
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    cityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    cityName?: string | null;
    /**
     * Company Postal Code (for Large Customers)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    companyPostalCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    county?: string | null;
    /**
     * Number of Delivery Service
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    deliveryServiceNumber?: string | null;
    /**
     * Type of Delivery Service
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    deliveryServiceTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    district?: string | null;
    /**
     * City (different from postal city)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    homeCityName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    houseNumber?: string | null;
    /**
     * House number supplement
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    houseNumberSupplementText?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    language?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    pOBox?: string | null;
    /**
     * PO Box city
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    pOBoxDeviatingCityName?: string | null;
    /**
     * PO Box of Country/Region
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    pOBoxDeviatingCountry?: string | null;
    /**
     * Region for PO Box (Country/Region, State, Province, ...)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    pOBoxDeviatingRegion?: string | null;
    /**
     * Flag: PO Box Without Number
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    pOBoxIsWithoutNumber?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    pOBoxLobbyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    pOBoxPostalCode?: string | null;
    /**
     * City Postal Code
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    postalCode?: string | null;
    /**
     * Communication Method (Key) (Business Address Services)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    prfrdCommMediumType?: string | null;
    /**
     * Region (State, Province, County)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    streetName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    streetPrefixName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    streetSuffixName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    taxJurisdiction?: string | null;
    /**
     * Transportation zone to or from which the goods are delivered
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    transportZone?: string | null;
    /**
     * Address number in external system
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    addressIDByExternalSystem?: string | null;
    /**
     * County code for county
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    countyCode?: string | null;
    /**
     * Township code for Township
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    townshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate
     */
    townshipName?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate {
    return APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'validityStartDate': !exists(json, 'ValidityStartDate') ? undefined : (json['ValidityStartDate'] === null ? null : new Date(json['ValidityStartDate'])),
        'validityEndDate': !exists(json, 'ValidityEndDate') ? undefined : (json['ValidityEndDate'] === null ? null : new Date(json['ValidityEndDate'])),
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
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
    };
}

export function APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdateToJSON(value?: APIBUSINESSPARTNERABusinessPartnerAddressTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ValidityStartDate': value.validityStartDate === undefined ? undefined : (value.validityStartDate === null ? null : value.validityStartDate.toISOString()),
        'ValidityEndDate': value.validityEndDate === undefined ? undefined : (value.validityEndDate === null ? null : value.validityEndDate.toISOString()),
        'AuthorizationGroup': value.authorizationGroup,
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
    };
}
