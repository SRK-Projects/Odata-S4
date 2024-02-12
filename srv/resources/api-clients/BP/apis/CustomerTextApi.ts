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
  APIBUSINESSPARTNERACustomerTextType,
  APIBUSINESSPARTNERACustomerTextTypeCreate,
  CollectionOfACustomerTextType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERACustomerTextTypeFromJSON,
    APIBUSINESSPARTNERACustomerTextTypeToJSON,
    APIBUSINESSPARTNERACustomerTextTypeCreateFromJSON,
    APIBUSINESSPARTNERACustomerTextTypeCreateToJSON,
    CollectionOfACustomerTextTypeFromJSON,
    CollectionOfACustomerTextTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ACustomerCustomerToCustomerTextGetRequest {
    customer: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ACustomerCustomerToCustomerTextGetOrderbyEnum>;
    $select?: Set<ACustomerCustomerToCustomerTextGetSelectEnum>;
}

export interface ACustomerCustomerToCustomerTextPostRequest {
    customer: string;
    aPIBUSINESSPARTNERACustomerTextTypeCreate: APIBUSINESSPARTNERACustomerTextTypeCreate;
}

export interface ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDDeleteRequest {
    customer: string;
    language: string;
    longTextID: string;
}

export interface ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetRequest {
    customer: string;
    language: string;
    longTextID: string;
    $select?: Set<ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetSelectEnum>;
}

export interface ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatchRequest {
    customer: string;
    language: string;
    longTextID: string;
    body: object;
}

export interface ACustomerTextGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ACustomerTextGetOrderbyEnum>;
    $select?: Set<ACustomerTextGetSelectEnum>;
}

export interface ACustomerTextPostRequest {
    aPIBUSINESSPARTNERACustomerTextTypeCreate: APIBUSINESSPARTNERACustomerTextTypeCreate;
}

/**
 * 
 */
export class CustomerTextApi extends runtime.BaseAPI {

    /**
     * Retrieves all customer text data attached to a customer in the system.
     * Retrieves customer text data.
     */
    async aCustomerCustomerToCustomerTextGetRaw(requestParameters: ACustomerCustomerToCustomerTextGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfACustomerTextType>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerCustomerToCustomerTextGet.');
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
            path: `/A_Customer('{Customer}')/to_CustomerText`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfACustomerTextTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all customer text data attached to a customer in the system.
     * Retrieves customer text data.
     */
    async aCustomerCustomerToCustomerTextGet(requestParameters: ACustomerCustomerToCustomerTextGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfACustomerTextType> {
        const response = await this.aCustomerCustomerToCustomerTextGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates text data attached to a customer in the system.
     * Creates customer long text.
     */
    async aCustomerCustomerToCustomerTextPostRaw(requestParameters: ACustomerCustomerToCustomerTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERACustomerTextType>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerCustomerToCustomerTextPost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERACustomerTextTypeCreate === null || requestParameters.aPIBUSINESSPARTNERACustomerTextTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERACustomerTextTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERACustomerTextTypeCreate was null or undefined when calling aCustomerCustomerToCustomerTextPost.');
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
            path: `/A_Customer('{Customer}')/to_CustomerText`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERACustomerTextTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERACustomerTextTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERACustomerTextTypeFromJSON(jsonValue));
    }

    /**
     * Creates text data attached to a customer in the system.
     * Creates customer long text.
     */
    async aCustomerCustomerToCustomerTextPost(requestParameters: ACustomerCustomerToCustomerTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERACustomerTextType> {
        const response = await this.aCustomerCustomerToCustomerTextPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes customer text records by Customer, Language, and LongTextID fields.
     * Deletes customer text records by using key fields.
     */
    async aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDDeleteRaw(requestParameters: ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDDelete.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDDelete.');
        }

        if (requestParameters.longTextID === null || requestParameters.longTextID === undefined) {
            throw new runtime.RequiredError('longTextID','Required parameter requestParameters.longTextID was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDDelete.');
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
            path: `/A_CustomerText(Customer='{Customer}',Language='{Language}',LongTextID='{LongTextID}')`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"Language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"LongTextID"}}`, encodeURIComponent(String(requestParameters.longTextID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes customer text records by Customer, Language, and LongTextID fields.
     * Deletes customer text records by using key fields.
     */
    async aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDDelete(requestParameters: ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves customer text records by using Customer, Language, and LongTextID fields.
     * Retrieves customer text records using the key fields.
     */
    async aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetRaw(requestParameters: ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERACustomerTextType>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGet.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGet.');
        }

        if (requestParameters.longTextID === null || requestParameters.longTextID === undefined) {
            throw new runtime.RequiredError('longTextID','Required parameter requestParameters.longTextID was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGet.');
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
            path: `/A_CustomerText(Customer='{Customer}',Language='{Language}',LongTextID='{LongTextID}')`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"Language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"LongTextID"}}`, encodeURIComponent(String(requestParameters.longTextID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERACustomerTextTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves customer text records by using Customer, Language, and LongTextID fields.
     * Retrieves customer text records using the key fields.
     */
    async aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGet(requestParameters: ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERACustomerTextType> {
        const response = await this.aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates customer text records by using Customer, Language, and LongTextID fields.
     * Updates customer text records by using the key fields.
     */
    async aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatchRaw(requestParameters: ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.longTextID === null || requestParameters.longTextID === undefined) {
            throw new runtime.RequiredError('longTextID','Required parameter requestParameters.longTextID was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatch.');
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
            path: `/A_CustomerText(Customer='{Customer}',Language='{Language}',LongTextID='{LongTextID}')`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"Language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"LongTextID"}}`, encodeURIComponent(String(requestParameters.longTextID))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates customer text records by using Customer, Language, and LongTextID fields.
     * Updates customer text records by using the key fields.
     */
    async aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatch(requestParameters: ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aCustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDPatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves all customer text data attached to a customer in the system.
     * Retrieves customer text data.
     */
    async aCustomerTextGetRaw(requestParameters: ACustomerTextGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfACustomerTextType>> {
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
            path: `/A_CustomerText`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfACustomerTextTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all customer text data attached to a customer in the system.
     * Retrieves customer text data.
     */
    async aCustomerTextGet(requestParameters: ACustomerTextGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfACustomerTextType> {
        const response = await this.aCustomerTextGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates text data attached to a customer in the system.
     * Creates customer long text.
     */
    async aCustomerTextPostRaw(requestParameters: ACustomerTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERACustomerTextType>> {
        if (requestParameters.aPIBUSINESSPARTNERACustomerTextTypeCreate === null || requestParameters.aPIBUSINESSPARTNERACustomerTextTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERACustomerTextTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERACustomerTextTypeCreate was null or undefined when calling aCustomerTextPost.');
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
            path: `/A_CustomerText`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERACustomerTextTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERACustomerTextTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERACustomerTextTypeFromJSON(jsonValue));
    }

    /**
     * Creates text data attached to a customer in the system.
     * Creates customer long text.
     */
    async aCustomerTextPost(requestParameters: ACustomerTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERACustomerTextType> {
        const response = await this.aCustomerTextPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ACustomerCustomerToCustomerTextGetOrderbyEnum = {
    Customer: 'Customer',
    CustomerDesc: 'Customer desc',
    Language: 'Language',
    LanguageDesc: 'Language desc',
    LongTextId: 'LongTextID',
    LongTextIdDesc: 'LongTextID desc'
} as const;
export type ACustomerCustomerToCustomerTextGetOrderbyEnum = typeof ACustomerCustomerToCustomerTextGetOrderbyEnum[keyof typeof ACustomerCustomerToCustomerTextGetOrderbyEnum];
/**
 * @export
 */
export const ACustomerCustomerToCustomerTextGetSelectEnum = {
    Customer: 'Customer',
    Language: 'Language',
    LongTextId: 'LongTextID',
    LongText: 'LongText'
} as const;
export type ACustomerCustomerToCustomerTextGetSelectEnum = typeof ACustomerCustomerToCustomerTextGetSelectEnum[keyof typeof ACustomerCustomerToCustomerTextGetSelectEnum];
/**
 * @export
 */
export const ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetSelectEnum = {
    Customer: 'Customer',
    Language: 'Language',
    LongTextId: 'LongTextID',
    LongText: 'LongText'
} as const;
export type ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetSelectEnum = typeof ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetSelectEnum[keyof typeof ACustomerTextCustomerCustomerLanguageLanguageLongTextIDLongTextIDGetSelectEnum];
/**
 * @export
 */
export const ACustomerTextGetOrderbyEnum = {
    Customer: 'Customer',
    CustomerDesc: 'Customer desc',
    Language: 'Language',
    LanguageDesc: 'Language desc',
    LongTextId: 'LongTextID',
    LongTextIdDesc: 'LongTextID desc'
} as const;
export type ACustomerTextGetOrderbyEnum = typeof ACustomerTextGetOrderbyEnum[keyof typeof ACustomerTextGetOrderbyEnum];
/**
 * @export
 */
export const ACustomerTextGetSelectEnum = {
    Customer: 'Customer',
    Language: 'Language',
    LongTextId: 'LongTextID',
    LongText: 'LongText'
} as const;
export type ACustomerTextGetSelectEnum = typeof ACustomerTextGetSelectEnum[keyof typeof ACustomerTextGetSelectEnum];