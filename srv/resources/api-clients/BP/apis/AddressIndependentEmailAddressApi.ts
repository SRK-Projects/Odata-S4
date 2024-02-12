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
  APIBUSINESSPARTNERABPAddressIndependentEmailType,
  APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate,
  APIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdate,
  CollectionOfABPAddressIndependentEmailType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERABPAddressIndependentEmailTypeFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentEmailTypeToJSON,
    APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreateFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreateToJSON,
    APIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdateFromJSON,
    APIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdateToJSON,
    CollectionOfABPAddressIndependentEmailTypeFromJSON,
    CollectionOfABPAddressIndependentEmailTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRequest {
    businessPartner: string;
    addressID: string;
    person: string;
    ordinalNumber: string;
}

export interface ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRequest {
    businessPartner: string;
    addressID: string;
    person: string;
    ordinalNumber: string;
    $select?: Set<ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum>;
}

export interface ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRequest {
    businessPartner: string;
    addressID: string;
    person: string;
    ordinalNumber: string;
    aPIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdate: APIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdate;
}

export interface ABPAddressIndependentEmailGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABPAddressIndependentEmailGetOrderbyEnum>;
    $select?: Set<ABPAddressIndependentEmailGetSelectEnum>;
}

export interface ABPAddressIndependentEmailPostRequest {
    aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate: APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate;
}

export interface ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetRequest {
    businessPartner: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetOrderbyEnum>;
    $select?: Set<ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetSelectEnum>;
}

export interface ABusinessPartnerBusinessPartnerToAddressIndependentEmailPostRequest {
    businessPartner: string;
    aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate: APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate;
}

/**
 * 
 */
export class AddressIndependentEmailAddressApi extends runtime.BaseAPI {

    /**
     * Deletes an address-independent email address identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Removes an address-independent email address from a Business Partner.
     */
    async aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRaw(requestParameters: ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        if (requestParameters.addressID === null || requestParameters.addressID === undefined) {
            throw new runtime.RequiredError('addressID','Required parameter requestParameters.addressID was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
        }

        if (requestParameters.ordinalNumber === null || requestParameters.ordinalNumber === undefined) {
            throw new runtime.RequiredError('ordinalNumber','Required parameter requestParameters.ordinalNumber was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete.');
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
            path: `/A_BPAddressIndependentEmail(BusinessPartner='{BusinessPartner}',AddressID='{AddressID}',Person='{Person}',OrdinalNumber='{OrdinalNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"AddressID"}}`, encodeURIComponent(String(requestParameters.addressID))).replace(`{${"Person"}}`, encodeURIComponent(String(requestParameters.person))).replace(`{${"OrdinalNumber"}}`, encodeURIComponent(String(requestParameters.ordinalNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an address-independent email address identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Removes an address-independent email address from a Business Partner.
     */
    async aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDelete(requestParameters: ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves address-independent Business Partner email addresses by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address independent Business Partner email addresses.
     */
    async aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRaw(requestParameters: ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPAddressIndependentEmailType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        if (requestParameters.addressID === null || requestParameters.addressID === undefined) {
            throw new runtime.RequiredError('addressID','Required parameter requestParameters.addressID was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
        }

        if (requestParameters.ordinalNumber === null || requestParameters.ordinalNumber === undefined) {
            throw new runtime.RequiredError('ordinalNumber','Required parameter requestParameters.ordinalNumber was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet.');
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
            path: `/A_BPAddressIndependentEmail(BusinessPartner='{BusinessPartner}',AddressID='{AddressID}',Person='{Person}',OrdinalNumber='{OrdinalNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"AddressID"}}`, encodeURIComponent(String(requestParameters.addressID))).replace(`{${"Person"}}`, encodeURIComponent(String(requestParameters.person))).replace(`{${"OrdinalNumber"}}`, encodeURIComponent(String(requestParameters.ordinalNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPAddressIndependentEmailTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves address-independent Business Partner email addresses by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address independent Business Partner email addresses.
     */
    async aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGet(requestParameters: ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPAddressIndependentEmailType> {
        const response = await this.aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an address-independent Business Partner email address identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Updates an address-independent Business Partner email address.
     */
    async aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRaw(requestParameters: ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.addressID === null || requestParameters.addressID === undefined) {
            throw new runtime.RequiredError('addressID','Required parameter requestParameters.addressID was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.ordinalNumber === null || requestParameters.ordinalNumber === undefined) {
            throw new runtime.RequiredError('ordinalNumber','Required parameter requestParameters.ordinalNumber was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdate === null || requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdate','Required parameter requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdate was null or undefined when calling aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch.');
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
            path: `/A_BPAddressIndependentEmail(BusinessPartner='{BusinessPartner}',AddressID='{AddressID}',Person='{Person}',OrdinalNumber='{OrdinalNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"AddressID"}}`, encodeURIComponent(String(requestParameters.addressID))).replace(`{${"Person"}}`, encodeURIComponent(String(requestParameters.person))).replace(`{${"OrdinalNumber"}}`, encodeURIComponent(String(requestParameters.ordinalNumber))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdateToJSON(requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates an address-independent Business Partner email address identified by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Updates an address-independent Business Partner email address.
     */
    async aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatch(requestParameters: ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberPatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves address-independent Business Partner email addresses by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address independent Business Partner email addresses.
     */
    async aBPAddressIndependentEmailGetRaw(requestParameters: ABPAddressIndependentEmailGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPAddressIndependentEmailType>> {
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
            path: `/A_BPAddressIndependentEmail`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPAddressIndependentEmailTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves address-independent Business Partner email addresses by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address independent Business Partner email addresses.
     */
    async aBPAddressIndependentEmailGet(requestParameters: ABPAddressIndependentEmailGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPAddressIndependentEmailType> {
        const response = await this.aBPAddressIndependentEmailGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates an address-independent Business Partner email address linked to an existing Business Partner.
     * Creates an address-independent Business Partner email address.
     */
    async aBPAddressIndependentEmailPostRaw(requestParameters: ABPAddressIndependentEmailPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPAddressIndependentEmailType>> {
        if (requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate was null or undefined when calling aBPAddressIndependentEmailPost.');
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
            path: `/A_BPAddressIndependentEmail`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPAddressIndependentEmailTypeFromJSON(jsonValue));
    }

    /**
     * Creates an address-independent Business Partner email address linked to an existing Business Partner.
     * Creates an address-independent Business Partner email address.
     */
    async aBPAddressIndependentEmailPost(requestParameters: ABPAddressIndependentEmailPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPAddressIndependentEmailType> {
        const response = await this.aBPAddressIndependentEmailPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves address-independent Business Partner email addresses by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address independent Business Partner email addresses.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentEmailGetRaw(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPAddressIndependentEmailType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToAddressIndependentEmailGet.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_AddressIndependentEmail`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPAddressIndependentEmailTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves address-independent Business Partner email addresses by BusinessPartner, AddressID, Person, and OrdinalNumber.
     * Retrieves address independent Business Partner email addresses.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentEmailGet(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPAddressIndependentEmailType> {
        const response = await this.aBusinessPartnerBusinessPartnerToAddressIndependentEmailGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates an address-independent Business Partner email address linked to an existing Business Partner.
     * Creates an address-independent Business Partner email address.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentEmailPostRaw(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentEmailPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPAddressIndependentEmailType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToAddressIndependentEmailPost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate was null or undefined when calling aBusinessPartnerBusinessPartnerToAddressIndependentEmailPost.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_AddressIndependentEmail`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPAddressIndependentEmailTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPAddressIndependentEmailTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPAddressIndependentEmailTypeFromJSON(jsonValue));
    }

    /**
     * Creates an address-independent Business Partner email address linked to an existing Business Partner.
     * Creates an address-independent Business Partner email address.
     */
    async aBusinessPartnerBusinessPartnerToAddressIndependentEmailPost(requestParameters: ABusinessPartnerBusinessPartnerToAddressIndependentEmailPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPAddressIndependentEmailType> {
        const response = await this.aBusinessPartnerBusinessPartnerToAddressIndependentEmailPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    AddressId: 'AddressID',
    Person: 'Person',
    OrdinalNumber: 'OrdinalNumber',
    EmailAddress: 'EmailAddress',
    IsDefaultEmailAddress: 'IsDefaultEmailAddress',
    ValidityStartDate: 'ValidityStartDate',
    ValidityEndDate: 'ValidityEndDate'
} as const;
export type ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum = typeof ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum[keyof typeof ABPAddressIndependentEmailBusinessPartnerBusinessPartnerAddressIDAddressIDPersonPersonOrdinalNumberOrdinalNumberGetSelectEnum];
/**
 * @export
 */
export const ABPAddressIndependentEmailGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    AddressId: 'AddressID',
    AddressIdDesc: 'AddressID desc',
    Person: 'Person',
    PersonDesc: 'Person desc',
    OrdinalNumber: 'OrdinalNumber',
    OrdinalNumberDesc: 'OrdinalNumber desc',
    EmailAddress: 'EmailAddress',
    EmailAddressDesc: 'EmailAddress desc',
    IsDefaultEmailAddress: 'IsDefaultEmailAddress',
    IsDefaultEmailAddressDesc: 'IsDefaultEmailAddress desc',
    ValidityStartDate: 'ValidityStartDate',
    ValidityStartDateDesc: 'ValidityStartDate desc',
    ValidityEndDate: 'ValidityEndDate',
    ValidityEndDateDesc: 'ValidityEndDate desc'
} as const;
export type ABPAddressIndependentEmailGetOrderbyEnum = typeof ABPAddressIndependentEmailGetOrderbyEnum[keyof typeof ABPAddressIndependentEmailGetOrderbyEnum];
/**
 * @export
 */
export const ABPAddressIndependentEmailGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    AddressId: 'AddressID',
    Person: 'Person',
    OrdinalNumber: 'OrdinalNumber',
    EmailAddress: 'EmailAddress',
    IsDefaultEmailAddress: 'IsDefaultEmailAddress',
    ValidityStartDate: 'ValidityStartDate',
    ValidityEndDate: 'ValidityEndDate'
} as const;
export type ABPAddressIndependentEmailGetSelectEnum = typeof ABPAddressIndependentEmailGetSelectEnum[keyof typeof ABPAddressIndependentEmailGetSelectEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    AddressId: 'AddressID',
    AddressIdDesc: 'AddressID desc',
    Person: 'Person',
    PersonDesc: 'Person desc',
    OrdinalNumber: 'OrdinalNumber',
    OrdinalNumberDesc: 'OrdinalNumber desc',
    EmailAddress: 'EmailAddress',
    EmailAddressDesc: 'EmailAddress desc',
    IsDefaultEmailAddress: 'IsDefaultEmailAddress',
    IsDefaultEmailAddressDesc: 'IsDefaultEmailAddress desc',
    ValidityStartDate: 'ValidityStartDate',
    ValidityStartDateDesc: 'ValidityStartDate desc',
    ValidityEndDate: 'ValidityEndDate',
    ValidityEndDateDesc: 'ValidityEndDate desc'
} as const;
export type ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetOrderbyEnum = typeof ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetOrderbyEnum[keyof typeof ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetOrderbyEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    AddressId: 'AddressID',
    Person: 'Person',
    OrdinalNumber: 'OrdinalNumber',
    EmailAddress: 'EmailAddress',
    IsDefaultEmailAddress: 'IsDefaultEmailAddress',
    ValidityStartDate: 'ValidityStartDate',
    ValidityEndDate: 'ValidityEndDate'
} as const;
export type ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetSelectEnum = typeof ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetSelectEnum[keyof typeof ABusinessPartnerBusinessPartnerToAddressIndependentEmailGetSelectEnum];