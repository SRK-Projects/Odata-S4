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


import * as runtime from '../runtime';
import type {
  APIBUSINESSPARTNERABPAddressIndependentPhoneType,
  APIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate,
  APIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdate,
  CollectionOfABPAddressIndependentPhoneType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERABPAddressIndependentPhoneTypeFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentPhoneTypeToJSON,
    APIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreateFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreateToJSON,
    APIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdateFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdateToJSON,
    CollectionOfABPAddressIndependentPhoneTypeFromJSON,
    CollectionOfABPAddressIndependentPhoneTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRequest {
    businessPartner: string;
    addressID: string;
    person: string;
    ordinalNumber: string;
}

export interface ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRequest {
    businessPartner: string;
    addressID: string;
    person: string;
    ordinalNumber: string;
    $select?: Set<ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum>;
}

export interface ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRequest {
    businessPartner: string;
    addressID: string;
    person: string;
    ordinalNumber: string;
    aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdate: APIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdate;
}

export interface ABPAddressIndependentPhoneGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABPAddressIndependentPhoneGetOrderbyEnum>;
    $select?: Set<ABPAddressIndependentPhoneGetSelectEnum>;
}

export interface ABPAddressIndependentPhonePostRequest {
    aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate: APIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate;
}

export interface ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetRequest {
    businessPartner: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetOrderbyEnum>;
    $select?: Set<ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetSelectEnum>;
}

export interface ABusinessPartnerBusinessPartnerToAddressIndependentPhonePostRequest {
    businessPartner: string;
    aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate: APIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate;
}

/**
 * 
 */
export class AddressIndependentPhoneNumberApi extends runtime.BaseAPI {

    /**
     * Deletes an address-independent phone number identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Removes an address-independent phone number from a Business Partner.
     */
    async aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRaw(requestParameters: ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        if (requestParameters.addressID === null || requestParameters.addressID === undefined) {
            throw new runtime.RequiredError('addressID','Required parameter requestParameters.addressID was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        if (requestParameters.ordinalNumber === null || requestParameters.ordinalNumber === undefined) {
            throw new runtime.RequiredError('ordinalNumber','Required parameter requestParameters.ordinalNumber was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2Auth", ["API_BUSINESS_PARTNER_0001"]);
        }

        const response = await this.request({
            path: `/A_BPAddressIndependentPhone(BusinessPartner='{BusinessPartner}',AddressID='{AddressID}',Person='{Person}',OrdinalNumber='{OrdinalNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"AddressID"}}`, encodeURIComponent(String(requestParameters.addressID))).replace(`{${"Person"}}`, encodeURIComponent(String(requestParameters.person))).replace(`{${"OrdinalNumber"}}`, encodeURIComponent(String(requestParameters.ordinalNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an address-independent phone number identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Removes an address-independent phone number from a Business Partner.
     */
    async aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete(requestParameters: ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves address-independent Business Partner phone numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner phone numbers.
     */
    async aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRaw(requestParameters: ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPAddressIndependentPhoneType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        if (requestParameters.addressID === null || requestParameters.addressID === undefined) {
            throw new runtime.RequiredError('addressID','Required parameter requestParameters.addressID was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        if (requestParameters.ordinalNumber === null || requestParameters.ordinalNumber === undefined) {
            throw new runtime.RequiredError('ordinalNumber','Required parameter requestParameters.ordinalNumber was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.$select) {
            queryParameters['$select'] = Array.from(requestParameters.$select).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2Auth", ["API_BUSINESS_PARTNER_0001"]);
        }

        const response = await this.request({
            path: `/A_BPAddressIndependentPhone(BusinessPartner='{BusinessPartner}',AddressID='{AddressID}',Person='{Person}',OrdinalNumber='{OrdinalNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"AddressID"}}`, encodeURIComponent(String(requestParameters.addressID))).replace(`{${"Person"}}`, encodeURIComponent(String(requestParameters.person))).replace(`{${"OrdinalNumber"}}`, encodeURIComponent(String(requestParameters.ordinalNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPAddressIndependentPhoneTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves address-independent Business Partner phone numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner phone numbers.
     */
    async aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet(requestParameters: ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPAddressIndependentPhoneType> {
        const response = await this.aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an address-independent Business Partner phone number identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Updates an address-independent Business Partner phone number.
     */
    async aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRaw(requestParameters: ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.addressID === null || requestParameters.addressID === undefined) {
            throw new runtime.RequiredError('addressID','Required parameter requestParameters.addressID was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.ordinalNumber === null || requestParameters.ordinalNumber === undefined) {
            throw new runtime.RequiredError('ordinalNumber','Required parameter requestParameters.ordinalNumber was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdate === null || requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdate','Required parameter requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdate was null or undefined when calling aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2Auth", ["API_BUSINESS_PARTNER_0001"]);
        }

        const response = await this.request({
            path: `/A_BPAddressIndependentPhone(BusinessPartner='{BusinessPartner}',AddressID='{AddressID}',Person='{Person}',OrdinalNumber='{OrdinalNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"AddressID"}}`, encodeURIComponent(String(requestParameters.addressID))).replace(`{${"Person"}}`, encodeURIComponent(String(requestParameters.person))).replace(`{${"OrdinalNumber"}}`, encodeURIComponent(String(requestParameters.ordinalNumber))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdateToJSON(requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates an address-independent Business Partner phone number identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Updates an address-independent Business Partner phone number.
     */
    async aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch(requestParameters: ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves address-independent Business Partner phone numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner phone numbers.
     */
    async aBPAddressIndependentPhoneGetRaw(requestParameters: ABPAddressIndependentPhoneGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPAddressIndependentPhoneType>> {
        const queryParameters: any = {};

        if (requestParameters.$top !== undefined) {
            queryParameters['$top'] = requestParameters.$top;
        }

        if (requestParameters.$skip !== undefined) {
            queryParameters['$skip'] = requestParameters.$skip;
        }

        if (requestParameters.$filter !== undefined) {
            queryParameters['$filter'] = requestParameters.$filter;
        }

        if (requestParameters.$count !== undefined) {
            queryParameters['$count'] = requestParameters.$count;
        }

        if (requestParameters.$orderby) {
            queryParameters['$orderby'] = Array.from(requestParameters.$orderby).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.$select) {
            queryParameters['$select'] = Array.from(requestParameters.$select).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2Auth", ["API_BUSINESS_PARTNER_0001"]);
        }

        const response = await this.request({
            path: `/A_BPAddressIndependentPhone`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPAddressIndependentPhoneTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves address-independent Business Partner phone numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner phone numbers.
     */
    async aBPAddressIndependentPhoneGet(requestParameters: ABPAddressIndependentPhoneGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPAddressIndependentPhoneType> {
        const response = await this.aBPAddressIndependentPhoneGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates an address-independent Business Partner phone number linked to an existing Business Partner.
     * Creates an address-independent Business Partner phone number.
     */
    async aBPAddressIndependentPhonePostRaw(requestParameters: ABPAddressIndependentPhonePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPAddressIndependentPhoneType>> {
        if (requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate was null or undefined when calling aBPAddressIndependentPhonePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2Auth", ["API_BUSINESS_PARTNER_0001"]);
        }

        const response = await this.request({
            path: `/A_BPAddressIndependentPhone`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPAddressIndependentPhoneTypeFromJSON(jsonValue));
    }

    /**
     * Creates an address-independent Business Partner phone number linked to an existing Business Partner.
     * Creates an address-independent Business Partner phone number.
     */
    async aBPAddressIndependentPhonePost(requestParameters: ABPAddressIndependentPhonePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPAddressIndependentPhoneType> {
        const response = await this.aBPAddressIndependentPhonePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves address-independent Business Partner phone numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner phone numbers.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentPhoneGetRaw(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPAddressIndependentPhoneType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToAddressIndependentPhoneGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.$top !== undefined) {
            queryParameters['$top'] = requestParameters.$top;
        }

        if (requestParameters.$skip !== undefined) {
            queryParameters['$skip'] = requestParameters.$skip;
        }

        if (requestParameters.$filter !== undefined) {
            queryParameters['$filter'] = requestParameters.$filter;
        }

        if (requestParameters.$count !== undefined) {
            queryParameters['$count'] = requestParameters.$count;
        }

        if (requestParameters.$orderby) {
            queryParameters['$orderby'] = Array.from(requestParameters.$orderby).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.$select) {
            queryParameters['$select'] = Array.from(requestParameters.$select).join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2Auth", ["API_BUSINESS_PARTNER_0001"]);
        }

        const response = await this.request({
            path: `/A_BusinessPartner('{BusinessPartner}')/to_AddressIndependentPhone`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPAddressIndependentPhoneTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves address-independent Business Partner phone numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner phone numbers.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentPhoneGet(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPAddressIndependentPhoneType> {
        const response = await this.aBusinessPartnerBusinessPartnerToAddressIndependentPhoneGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates an address-independent Business Partner phone number linked to an existing Business Partner.
     * Creates an address-independent Business Partner phone number.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentPhonePostRaw(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentPhonePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPAddressIndependentPhoneType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToAddressIndependentPhonePost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate was null or undefined when calling aBusinessPartnerBusinessPartnerToAddressIndependentPhonePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2Auth", ["API_BUSINESS_PARTNER_0001"]);
        }

        const response = await this.request({
            path: `/A_BusinessPartner('{BusinessPartner}')/to_AddressIndependentPhone`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPAddressIndependentPhoneTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPAddressIndependentPhoneTypeFromJSON(jsonValue));
    }

    /**
     * Creates an address-independent Business Partner phone number linked to an existing Business Partner.
     * Creates an address-independent Business Partner phone number.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentPhonePost(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentPhonePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPAddressIndependentPhoneType> {
        const response = await this.aBusinessPartnerBusinessPartnerToAddressIndependentPhonePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    AddressId: 'AddressID',
    Person: 'Person',
    OrdinalNumber: 'OrdinalNumber',
    DestinationLocationCountry: 'DestinationLocationCountry',
    InternationalPhoneNumber: 'InternationalPhoneNumber',
    IsDefaultPhoneNumber: 'IsDefaultPhoneNumber',
    PhoneNumber: 'PhoneNumber',
    PhoneNumberExtension: 'PhoneNumberExtension',
    PhoneNumberType: 'PhoneNumberType',
    ValidityStartDate: 'ValidityStartDate',
    ValidityEndDate: 'ValidityEndDate'
} as const;
export type ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum = typeof ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum[keyof typeof ABPAddressIndependentPhoneBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum];
/**
 * @export
 */
export const ABPAddressIndependentPhoneGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    AddressId: 'AddressID',
    AddressIdDesc: 'AddressID desc',
    Person: 'Person',
    PersonDesc: 'Person desc',
    OrdinalNumber: 'OrdinalNumber',
    OrdinalNumberDesc: 'OrdinalNumber desc',
    DestinationLocationCountry: 'DestinationLocationCountry',
    DestinationLocationCountryDesc: 'DestinationLocationCountry desc',
    InternationalPhoneNumber: 'InternationalPhoneNumber',
    InternationalPhoneNumberDesc: 'InternationalPhoneNumber desc',
    IsDefaultPhoneNumber: 'IsDefaultPhoneNumber',
    IsDefaultPhoneNumberDesc: 'IsDefaultPhoneNumber desc',
    PhoneNumber: 'PhoneNumber',
    PhoneNumberDesc: 'PhoneNumber desc',
    PhoneNumberExtension: 'PhoneNumberExtension',
    PhoneNumberExtensionDesc: 'PhoneNumberExtension desc',
    PhoneNumberType: 'PhoneNumberType',
    PhoneNumberTypeDesc: 'PhoneNumberType desc',
    ValidityStartDate: 'ValidityStartDate',
    ValidityStartDateDesc: 'ValidityStartDate desc',
    ValidityEndDate: 'ValidityEndDate',
    ValidityEndDateDesc: 'ValidityEndDate desc'
} as const;
export type ABPAddressIndependentPhoneGetOrderbyEnum = typeof ABPAddressIndependentPhoneGetOrderbyEnum[keyof typeof ABPAddressIndependentPhoneGetOrderbyEnum];
/**
 * @export
 */
export const ABPAddressIndependentPhoneGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    AddressId: 'AddressID',
    Person: 'Person',
    OrdinalNumber: 'OrdinalNumber',
    DestinationLocationCountry: 'DestinationLocationCountry',
    InternationalPhoneNumber: 'InternationalPhoneNumber',
    IsDefaultPhoneNumber: 'IsDefaultPhoneNumber',
    PhoneNumber: 'PhoneNumber',
    PhoneNumberExtension: 'PhoneNumberExtension',
    PhoneNumberType: 'PhoneNumberType',
    ValidityStartDate: 'ValidityStartDate',
    ValidityEndDate: 'ValidityEndDate'
} as const;
export type ABPAddressIndependentPhoneGetSelectEnum = typeof ABPAddressIndependentPhoneGetSelectEnum[keyof typeof ABPAddressIndependentPhoneGetSelectEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    AddressId: 'AddressID',
    AddressIdDesc: 'AddressID desc',
    Person: 'Person',
    PersonDesc: 'Person desc',
    OrdinalNumber: 'OrdinalNumber',
    OrdinalNumberDesc: 'OrdinalNumber desc',
    DestinationLocationCountry: 'DestinationLocationCountry',
    DestinationLocationCountryDesc: 'DestinationLocationCountry desc',
    InternationalPhoneNumber: 'InternationalPhoneNumber',
    InternationalPhoneNumberDesc: 'InternationalPhoneNumber desc',
    IsDefaultPhoneNumber: 'IsDefaultPhoneNumber',
    IsDefaultPhoneNumberDesc: 'IsDefaultPhoneNumber desc',
    PhoneNumber: 'PhoneNumber',
    PhoneNumberDesc: 'PhoneNumber desc',
    PhoneNumberExtension: 'PhoneNumberExtension',
    PhoneNumberExtensionDesc: 'PhoneNumberExtension desc',
    PhoneNumberType: 'PhoneNumberType',
    PhoneNumberTypeDesc: 'PhoneNumberType desc',
    ValidityStartDate: 'ValidityStartDate',
    ValidityStartDateDesc: 'ValidityStartDate desc',
    ValidityEndDate: 'ValidityEndDate',
    ValidityEndDateDesc: 'ValidityEndDate desc'
} as const;
export type ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetOrderbyEnum = typeof ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetOrderbyEnum[keyof typeof ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetOrderbyEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    AddressId: 'AddressID',
    Person: 'Person',
    OrdinalNumber: 'OrdinalNumber',
    DestinationLocationCountry: 'DestinationLocationCountry',
    InternationalPhoneNumber: 'InternationalPhoneNumber',
    IsDefaultPhoneNumber: 'IsDefaultPhoneNumber',
    PhoneNumber: 'PhoneNumber',
    PhoneNumberExtension: 'PhoneNumberExtension',
    PhoneNumberType: 'PhoneNumberType',
    ValidityStartDate: 'ValidityStartDate',
    ValidityEndDate: 'ValidityEndDate'
} as const;
export type ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetSelectEnum = typeof ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetSelectEnum[keyof typeof ABusinessPartnerBusinessPartnerToAddressIndependentPhoneGetSelectEnum];
