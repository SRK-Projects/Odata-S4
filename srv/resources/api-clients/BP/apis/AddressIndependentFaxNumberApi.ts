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
  APIBUSINESSPARTNERABPAddressIndependentFaxType,
  APIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate,
  APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate,
  CollectionOfABPAddressIndependentFaxType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERABPAddressIndependentFaxTypeFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentFaxTypeToJSON,
    APIBUSINESSPARTNERABPAddressIndependentFaxTypeCreateFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentFaxTypeCreateToJSON,
    APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdateFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdateToJSON,
    CollectionOfABPAddressIndependentFaxTypeFromJSON,
    CollectionOfABPAddressIndependentFaxTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRequest {
    businessPartner: string;
    addressID: string;
    person: string;
    ordinalNumber: string;
}

export interface ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRequest {
    businessPartner: string;
    addressID: string;
    person: string;
    ordinalNumber: string;
    $select?: Set<ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum>;
}

export interface ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRequest {
    businessPartner: string;
    addressID: string;
    person: string;
    ordinalNumber: string;
    aPIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate: APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate;
}

export interface ABPAddressIndependentFaxGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABPAddressIndependentFaxGetOrderbyEnum>;
    $select?: Set<ABPAddressIndependentFaxGetSelectEnum>;
}

export interface ABPAddressIndependentFaxPostRequest {
    aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate: APIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate;
}

export interface ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetRequest {
    businessPartner: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetOrderbyEnum>;
    $select?: Set<ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetSelectEnum>;
}

export interface ABusinessPartnerBusinessPartnerToAddressIndependentFaxPostRequest {
    businessPartner: string;
    aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate: APIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate;
}

/**
 * 
 */
export class AddressIndependentFaxNumberApi extends runtime.BaseAPI {

    /**
     * Deletes an address-independent fax number identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Removes an address-independent fax number from a Business Partner.
     */
    async aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRaw(requestParameters: ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        if (requestParameters.addressID === null || requestParameters.addressID === undefined) {
            throw new runtime.RequiredError('addressID','Required parameter requestParameters.addressID was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        if (requestParameters.ordinalNumber === null || requestParameters.ordinalNumber === undefined) {
            throw new runtime.RequiredError('ordinalNumber','Required parameter requestParameters.ordinalNumber was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
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
            path: `/A_BPAddressIndependentFax(BusinessPartner='{BusinessPartner}',AddressID='{AddressID}',Person='{Person}',OrdinalNumber='{OrdinalNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"AddressID"}}`, encodeURIComponent(String(requestParameters.addressID))).replace(`{${"Person"}}`, encodeURIComponent(String(requestParameters.person))).replace(`{${"OrdinalNumber"}}`, encodeURIComponent(String(requestParameters.ordinalNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an address-independent fax number identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Removes an address-independent fax number from a Business Partner.
     */
    async aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete(requestParameters: ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves address-independent Business Partner fax numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner fax numbers.
     */
    async aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRaw(requestParameters: ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPAddressIndependentFaxType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        if (requestParameters.addressID === null || requestParameters.addressID === undefined) {
            throw new runtime.RequiredError('addressID','Required parameter requestParameters.addressID was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        if (requestParameters.ordinalNumber === null || requestParameters.ordinalNumber === undefined) {
            throw new runtime.RequiredError('ordinalNumber','Required parameter requestParameters.ordinalNumber was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
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
            path: `/A_BPAddressIndependentFax(BusinessPartner='{BusinessPartner}',AddressID='{AddressID}',Person='{Person}',OrdinalNumber='{OrdinalNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"AddressID"}}`, encodeURIComponent(String(requestParameters.addressID))).replace(`{${"Person"}}`, encodeURIComponent(String(requestParameters.person))).replace(`{${"OrdinalNumber"}}`, encodeURIComponent(String(requestParameters.ordinalNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPAddressIndependentFaxTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves address-independent Business Partner fax numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner fax numbers.
     */
    async aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet(requestParameters: ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPAddressIndependentFaxType> {
        const response = await this.aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an address-independent Business Partner fax number identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Updates an address-independent Business Partner fax number.
     */
    async aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRaw(requestParameters: ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.addressID === null || requestParameters.addressID === undefined) {
            throw new runtime.RequiredError('addressID','Required parameter requestParameters.addressID was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.ordinalNumber === null || requestParameters.ordinalNumber === undefined) {
            throw new runtime.RequiredError('ordinalNumber','Required parameter requestParameters.ordinalNumber was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate === null || requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate','Required parameter requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate was null or undefined when calling aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
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
            path: `/A_BPAddressIndependentFax(BusinessPartner='{BusinessPartner}',AddressID='{AddressID}',Person='{Person}',OrdinalNumber='{OrdinalNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"AddressID"}}`, encodeURIComponent(String(requestParameters.addressID))).replace(`{${"Person"}}`, encodeURIComponent(String(requestParameters.person))).replace(`{${"OrdinalNumber"}}`, encodeURIComponent(String(requestParameters.ordinalNumber))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdateToJSON(requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates an address-independent Business Partner fax number identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Updates an address-independent Business Partner fax number.
     */
    async aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch(requestParameters: ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves address-independent Business Partner fax numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner fax numbers.
     */
    async aBPAddressIndependentFaxGetRaw(requestParameters: ABPAddressIndependentFaxGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPAddressIndependentFaxType>> {
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
            path: `/A_BPAddressIndependentFax`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPAddressIndependentFaxTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves address-independent Business Partner fax numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner fax numbers.
     */
    async aBPAddressIndependentFaxGet(requestParameters: ABPAddressIndependentFaxGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPAddressIndependentFaxType> {
        const response = await this.aBPAddressIndependentFaxGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates an address-independent Business Partner fax number linked to an existing Business Partner.
     * Creates an address-independent Business Partner fax number.
     */
    async aBPAddressIndependentFaxPostRaw(requestParameters: ABPAddressIndependentFaxPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPAddressIndependentFaxType>> {
        if (requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate was null or undefined when calling aBPAddressIndependentFaxPost.');
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
            path: `/A_BPAddressIndependentFax`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPAddressIndependentFaxTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPAddressIndependentFaxTypeFromJSON(jsonValue));
    }

    /**
     * Creates an address-independent Business Partner fax number linked to an existing Business Partner.
     * Creates an address-independent Business Partner fax number.
     */
    async aBPAddressIndependentFaxPost(requestParameters: ABPAddressIndependentFaxPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPAddressIndependentFaxType> {
        const response = await this.aBPAddressIndependentFaxPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves address-independent Business Partner fax numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner fax numbers.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentFaxGetRaw(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPAddressIndependentFaxType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToAddressIndependentFaxGet.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_AddressIndependentFax`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPAddressIndependentFaxTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves address-independent Business Partner fax numbers by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address-independent Business Partner fax numbers.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentFaxGet(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPAddressIndependentFaxType> {
        const response = await this.aBusinessPartnerBusinessPartnerToAddressIndependentFaxGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates an address-independent Business Partner fax number linked to an existing Business Partner.
     * Creates an address-independent Business Partner fax number.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentFaxPostRaw(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentFaxPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPAddressIndependentFaxType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToAddressIndependentFaxPost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate was null or undefined when calling aBusinessPartnerBusinessPartnerToAddressIndependentFaxPost.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_AddressIndependentFax`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPAddressIndependentFaxTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPAddressIndependentFaxTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPAddressIndependentFaxTypeFromJSON(jsonValue));
    }

    /**
     * Creates an address-independent Business Partner fax number linked to an existing Business Partner.
     * Creates an address-independent Business Partner fax number.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentFaxPost(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentFaxPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPAddressIndependentFaxType> {
        const response = await this.aBusinessPartnerBusinessPartnerToAddressIndependentFaxPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    AddressId: 'AddressID',
    Person: 'Person',
    OrdinalNumber: 'OrdinalNumber',
    FaxCountry: 'FaxCountry',
    FaxAreaCodeSubscriberNumber: 'FaxAreaCodeSubscriberNumber',
    FaxNumberExtension: 'FaxNumberExtension',
    InternationalFaxNumber: 'InternationalFaxNumber',
    IsDefaultFaxNumber: 'IsDefaultFaxNumber',
    ValidityEndDate: 'ValidityEndDate',
    ValidityStartDate: 'ValidityStartDate'
} as const;
export type ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum = typeof ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum[keyof typeof ABPAddressIndependentFaxBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum];
/**
 * @export
 */
export const ABPAddressIndependentFaxGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    AddressId: 'AddressID',
    AddressIdDesc: 'AddressID desc',
    Person: 'Person',
    PersonDesc: 'Person desc',
    OrdinalNumber: 'OrdinalNumber',
    OrdinalNumberDesc: 'OrdinalNumber desc',
    FaxCountry: 'FaxCountry',
    FaxCountryDesc: 'FaxCountry desc',
    FaxAreaCodeSubscriberNumber: 'FaxAreaCodeSubscriberNumber',
    FaxAreaCodeSubscriberNumberDesc: 'FaxAreaCodeSubscriberNumber desc',
    FaxNumberExtension: 'FaxNumberExtension',
    FaxNumberExtensionDesc: 'FaxNumberExtension desc',
    InternationalFaxNumber: 'InternationalFaxNumber',
    InternationalFaxNumberDesc: 'InternationalFaxNumber desc',
    IsDefaultFaxNumber: 'IsDefaultFaxNumber',
    IsDefaultFaxNumberDesc: 'IsDefaultFaxNumber desc',
    ValidityEndDate: 'ValidityEndDate',
    ValidityEndDateDesc: 'ValidityEndDate desc',
    ValidityStartDate: 'ValidityStartDate',
    ValidityStartDateDesc: 'ValidityStartDate desc'
} as const;
export type ABPAddressIndependentFaxGetOrderbyEnum = typeof ABPAddressIndependentFaxGetOrderbyEnum[keyof typeof ABPAddressIndependentFaxGetOrderbyEnum];
/**
 * @export
 */
export const ABPAddressIndependentFaxGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    AddressId: 'AddressID',
    Person: 'Person',
    OrdinalNumber: 'OrdinalNumber',
    FaxCountry: 'FaxCountry',
    FaxAreaCodeSubscriberNumber: 'FaxAreaCodeSubscriberNumber',
    FaxNumberExtension: 'FaxNumberExtension',
    InternationalFaxNumber: 'InternationalFaxNumber',
    IsDefaultFaxNumber: 'IsDefaultFaxNumber',
    ValidityEndDate: 'ValidityEndDate',
    ValidityStartDate: 'ValidityStartDate'
} as const;
export type ABPAddressIndependentFaxGetSelectEnum = typeof ABPAddressIndependentFaxGetSelectEnum[keyof typeof ABPAddressIndependentFaxGetSelectEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    AddressId: 'AddressID',
    AddressIdDesc: 'AddressID desc',
    Person: 'Person',
    PersonDesc: 'Person desc',
    OrdinalNumber: 'OrdinalNumber',
    OrdinalNumberDesc: 'OrdinalNumber desc',
    FaxCountry: 'FaxCountry',
    FaxCountryDesc: 'FaxCountry desc',
    FaxAreaCodeSubscriberNumber: 'FaxAreaCodeSubscriberNumber',
    FaxAreaCodeSubscriberNumberDesc: 'FaxAreaCodeSubscriberNumber desc',
    FaxNumberExtension: 'FaxNumberExtension',
    FaxNumberExtensionDesc: 'FaxNumberExtension desc',
    InternationalFaxNumber: 'InternationalFaxNumber',
    InternationalFaxNumberDesc: 'InternationalFaxNumber desc',
    IsDefaultFaxNumber: 'IsDefaultFaxNumber',
    IsDefaultFaxNumberDesc: 'IsDefaultFaxNumber desc',
    ValidityEndDate: 'ValidityEndDate',
    ValidityEndDateDesc: 'ValidityEndDate desc',
    ValidityStartDate: 'ValidityStartDate',
    ValidityStartDateDesc: 'ValidityStartDate desc'
} as const;
export type ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetOrderbyEnum = typeof ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetOrderbyEnum[keyof typeof ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetOrderbyEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    AddressId: 'AddressID',
    Person: 'Person',
    OrdinalNumber: 'OrdinalNumber',
    FaxCountry: 'FaxCountry',
    FaxAreaCodeSubscriberNumber: 'FaxAreaCodeSubscriberNumber',
    FaxNumberExtension: 'FaxNumberExtension',
    InternationalFaxNumber: 'InternationalFaxNumber',
    IsDefaultFaxNumber: 'IsDefaultFaxNumber',
    ValidityEndDate: 'ValidityEndDate',
    ValidityStartDate: 'ValidityStartDate'
} as const;
export type ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetSelectEnum = typeof ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetSelectEnum[keyof typeof ABusinessPartnerBusinessPartnerToAddressIndependentFaxGetSelectEnum];
