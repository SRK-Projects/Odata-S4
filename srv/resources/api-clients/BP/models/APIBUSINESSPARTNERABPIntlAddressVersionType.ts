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
 * @interface APIBUSINESSPARTNERABPIntlAddressVersionType
 */
export interface APIBUSINESSPARTNERABPIntlAddressVersionType {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    businessPartner?: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    addressID?: string;
    /**
     * Version ID for International Addresses
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    addressRepresentationCode?: string;
    /**
     * Full Name of Person
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    addresseeFullName?: string | null;
    /**
     * Address number in external system
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    addressIDByExternalSystem?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    addressPersonID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    addressSearchTerm1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    addressSearchTerm2?: string | null;
    /**
     * Address Time Zone
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    addressTimeZone?: string | null;
    /**
     * c/o name
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    careOfName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    cityName?: string | null;
    /**
     * City code for city/street file
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    cityNumber?: string | null;
    /**
     * Company Postal Code (for Large Customers)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    companyPostalCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    country?: string | null;
    /**
     * Number of Delivery Service
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    deliveryServiceNumber?: string | null;
    /**
     * Type of Delivery Service
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    deliveryServiceTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    districtName?: string | null;
    /**
     * Form-of-Address Key
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    formOfAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    houseNumber?: string | null;
    /**
     * House number supplement
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    houseNumberSupplementText?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    language?: string | null;
    /**
     * Name 1
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    organizationName1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    organizationName2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    organizationName3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    organizationName4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    personFamilyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    personGivenName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    pOBox?: string | null;
    /**
     * PO Box city
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    pOBoxDeviatingCityName?: string | null;
    /**
     * PO Box of Country/Region
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    pOBoxDeviatingCountry?: string | null;
    /**
     * Region for PO Box (Country/Region, State, Province, ...)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    pOBoxDeviatingRegion?: string | null;
    /**
     * Flag: PO Box Without Number
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    pOBoxIsWithoutNumber?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    pOBoxLobbyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    pOBoxPostalCode?: string | null;
    /**
     * City Postal Code
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    postalCode?: string | null;
    /**
     * Communication Method (Key) (Business Address Services)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    prfrdCommMediumType?: string | null;
    /**
     * Region (State, Province, County)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    region?: string | null;
    /**
     * County code for county
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    secondaryRegion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    secondaryRegionName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    streetName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    streetPrefixName1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    streetPrefixName2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    streetSuffixName1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    streetSuffixName2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    taxJurisdiction?: string | null;
    /**
     * Township code for Township
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    tertiaryRegion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    tertiaryRegionName?: string | null;
    /**
     * Transportation zone to or from which the goods are delivered
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    transportZone?: string | null;
    /**
     * City (different from postal city)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPIntlAddressVersionType
     */
    villageName?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPIntlAddressVersionType interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPIntlAddressVersionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABPIntlAddressVersionTypeFromJSON(json: any): APIBUSINESSPARTNERABPIntlAddressVersionType {
    return APIBUSINESSPARTNERABPIntlAddressVersionTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPIntlAddressVersionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPIntlAddressVersionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': !exists(json, 'BusinessPartner') ? undefined : json['BusinessPartner'],
        'addressID': !exists(json, 'AddressID') ? undefined : json['AddressID'],
        'addressRepresentationCode': !exists(json, 'AddressRepresentationCode') ? undefined : json['AddressRepresentationCode'],
        'addresseeFullName': !exists(json, 'AddresseeFullName') ? undefined : json['AddresseeFullName'],
        'addressIDByExternalSystem': !exists(json, 'AddressIDByExternalSystem') ? undefined : json['AddressIDByExternalSystem'],
        'addressPersonID': !exists(json, 'AddressPersonID') ? undefined : json['AddressPersonID'],
        'addressSearchTerm1': !exists(json, 'AddressSearchTerm1') ? undefined : json['AddressSearchTerm1'],
        'addressSearchTerm2': !exists(json, 'AddressSearchTerm2') ? undefined : json['AddressSearchTerm2'],
        'addressTimeZone': !exists(json, 'AddressTimeZone') ? undefined : json['AddressTimeZone'],
        'careOfName': !exists(json, 'CareOfName') ? undefined : json['CareOfName'],
        'cityName': !exists(json, 'CityName') ? undefined : json['CityName'],
        'cityNumber': !exists(json, 'CityNumber') ? undefined : json['CityNumber'],
        'companyPostalCode': !exists(json, 'CompanyPostalCode') ? undefined : json['CompanyPostalCode'],
        'country': !exists(json, 'Country') ? undefined : json['Country'],
        'deliveryServiceNumber': !exists(json, 'DeliveryServiceNumber') ? undefined : json['DeliveryServiceNumber'],
        'deliveryServiceTypeCode': !exists(json, 'DeliveryServiceTypeCode') ? undefined : json['DeliveryServiceTypeCode'],
        'districtName': !exists(json, 'DistrictName') ? undefined : json['DistrictName'],
        'formOfAddress': !exists(json, 'FormOfAddress') ? undefined : json['FormOfAddress'],
        'houseNumber': !exists(json, 'HouseNumber') ? undefined : json['HouseNumber'],
        'houseNumberSupplementText': !exists(json, 'HouseNumberSupplementText') ? undefined : json['HouseNumberSupplementText'],
        'language': !exists(json, 'Language') ? undefined : json['Language'],
        'organizationName1': !exists(json, 'OrganizationName1') ? undefined : json['OrganizationName1'],
        'organizationName2': !exists(json, 'OrganizationName2') ? undefined : json['OrganizationName2'],
        'organizationName3': !exists(json, 'OrganizationName3') ? undefined : json['OrganizationName3'],
        'organizationName4': !exists(json, 'OrganizationName4') ? undefined : json['OrganizationName4'],
        'personFamilyName': !exists(json, 'PersonFamilyName') ? undefined : json['PersonFamilyName'],
        'personGivenName': !exists(json, 'PersonGivenName') ? undefined : json['PersonGivenName'],
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
        'secondaryRegion': !exists(json, 'SecondaryRegion') ? undefined : json['SecondaryRegion'],
        'secondaryRegionName': !exists(json, 'SecondaryRegionName') ? undefined : json['SecondaryRegionName'],
        'streetName': !exists(json, 'StreetName') ? undefined : json['StreetName'],
        'streetPrefixName1': !exists(json, 'StreetPrefixName1') ? undefined : json['StreetPrefixName1'],
        'streetPrefixName2': !exists(json, 'StreetPrefixName2') ? undefined : json['StreetPrefixName2'],
        'streetSuffixName1': !exists(json, 'StreetSuffixName1') ? undefined : json['StreetSuffixName1'],
        'streetSuffixName2': !exists(json, 'StreetSuffixName2') ? undefined : json['StreetSuffixName2'],
        'taxJurisdiction': !exists(json, 'TaxJurisdiction') ? undefined : json['TaxJurisdiction'],
        'tertiaryRegion': !exists(json, 'TertiaryRegion') ? undefined : json['TertiaryRegion'],
        'tertiaryRegionName': !exists(json, 'TertiaryRegionName') ? undefined : json['TertiaryRegionName'],
        'transportZone': !exists(json, 'TransportZone') ? undefined : json['TransportZone'],
        'villageName': !exists(json, 'VillageName') ? undefined : json['VillageName'],
    };
}

export function APIBUSINESSPARTNERABPIntlAddressVersionTypeToJSON(value?: APIBUSINESSPARTNERABPIntlAddressVersionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'AddressID': value.addressID,
        'AddressRepresentationCode': value.addressRepresentationCode,
        'AddresseeFullName': value.addresseeFullName,
        'AddressIDByExternalSystem': value.addressIDByExternalSystem,
        'AddressPersonID': value.addressPersonID,
        'AddressSearchTerm1': value.addressSearchTerm1,
        'AddressSearchTerm2': value.addressSearchTerm2,
        'AddressTimeZone': value.addressTimeZone,
        'CareOfName': value.careOfName,
        'CityName': value.cityName,
        'CityNumber': value.cityNumber,
        'CompanyPostalCode': value.companyPostalCode,
        'Country': value.country,
        'DeliveryServiceNumber': value.deliveryServiceNumber,
        'DeliveryServiceTypeCode': value.deliveryServiceTypeCode,
        'DistrictName': value.districtName,
        'FormOfAddress': value.formOfAddress,
        'HouseNumber': value.houseNumber,
        'HouseNumberSupplementText': value.houseNumberSupplementText,
        'Language': value.language,
        'OrganizationName1': value.organizationName1,
        'OrganizationName2': value.organizationName2,
        'OrganizationName3': value.organizationName3,
        'OrganizationName4': value.organizationName4,
        'PersonFamilyName': value.personFamilyName,
        'PersonGivenName': value.personGivenName,
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
        'SecondaryRegion': value.secondaryRegion,
        'SecondaryRegionName': value.secondaryRegionName,
        'StreetName': value.streetName,
        'StreetPrefixName1': value.streetPrefixName1,
        'StreetPrefixName2': value.streetPrefixName2,
        'StreetSuffixName1': value.streetSuffixName1,
        'StreetSuffixName2': value.streetSuffixName2,
        'TaxJurisdiction': value.taxJurisdiction,
        'TertiaryRegion': value.tertiaryRegion,
        'TertiaryRegionName': value.tertiaryRegionName,
        'TransportZone': value.transportZone,
        'VillageName': value.villageName,
    };
}

