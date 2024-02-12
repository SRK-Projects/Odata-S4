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
  APIBUSINESSPARTNERASupplierTextType,
  APIBUSINESSPARTNERASupplierTextTypeCreate,
  CollectionOfASupplierTextType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERASupplierTextTypeFromJSON,
    APIBUSINESSPARTNERASupplierTextTypeToJSON,
    APIBUSINESSPARTNERASupplierTextTypeCreateFromJSON,
    APIBUSINESSPARTNERASupplierTextTypeCreateToJSON,
    CollectionOfASupplierTextTypeFromJSON,
    CollectionOfASupplierTextTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ASupplierSupplierToSupplierTextGetRequest {
    supplier: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ASupplierSupplierToSupplierTextGetOrderbyEnum>;
    $select?: Set<ASupplierSupplierToSupplierTextGetSelectEnum>;
}

export interface ASupplierSupplierToSupplierTextPostRequest {
    supplier: string;
    aPIBUSINESSPARTNERASupplierTextTypeCreate: APIBUSINESSPARTNERASupplierTextTypeCreate;
}

export interface ASupplierTextGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ASupplierTextGetOrderbyEnum>;
    $select?: Set<ASupplierTextGetSelectEnum>;
}

export interface ASupplierTextPostRequest {
    aPIBUSINESSPARTNERASupplierTextTypeCreate: APIBUSINESSPARTNERASupplierTextTypeCreate;
}

export interface ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDDeleteRequest {
    supplier: string;
    language: string;
    longTextID: string;
}

export interface ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetRequest {
    supplier: string;
    language: string;
    longTextID: string;
    $select?: Set<ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetSelectEnum>;
}

export interface ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatchRequest {
    supplier: string;
    language: string;
    longTextID: string;
    body: object;
}

/**
 * 
 */
export class SupplierTextApi extends runtime.BaseAPI {

    /**
     * Retrieves all the supplier text data attached to purchasing organization in the system.
     * Retrieves supplier text data.
     */
    async aSupplierSupplierToSupplierTextGetRaw(requestParameters: ASupplierSupplierToSupplierTextGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfASupplierTextType>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierSupplierToSupplierTextGet.');
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
            path: `/A_Supplier('{Supplier}')/to_SupplierText`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfASupplierTextTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all the supplier text data attached to purchasing organization in the system.
     * Retrieves supplier text data.
     */
    async aSupplierSupplierToSupplierTextGet(requestParameters: ASupplierSupplierToSupplierTextGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfASupplierTextType> {
        const response = await this.aSupplierSupplierToSupplierTextGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates text data attached to a supplier in the system.
     * Creates supplier text data.
     */
    async aSupplierSupplierToSupplierTextPostRaw(requestParameters: ASupplierSupplierToSupplierTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERASupplierTextType>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierSupplierToSupplierTextPost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERASupplierTextTypeCreate === null || requestParameters.aPIBUSINESSPARTNERASupplierTextTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERASupplierTextTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERASupplierTextTypeCreate was null or undefined when calling aSupplierSupplierToSupplierTextPost.');
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
            path: `/A_Supplier('{Supplier}')/to_SupplierText`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERASupplierTextTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERASupplierTextTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERASupplierTextTypeFromJSON(jsonValue));
    }

    /**
     * Creates text data attached to a supplier in the system.
     * Creates supplier text data.
     */
    async aSupplierSupplierToSupplierTextPost(requestParameters: ASupplierSupplierToSupplierTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERASupplierTextType> {
        const response = await this.aSupplierSupplierToSupplierTextPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves all the supplier text data attached to purchasing organization in the system.
     * Retrieves supplier text data.
     */
    async aSupplierTextGetRaw(requestParameters: ASupplierTextGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfASupplierTextType>> {
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
            path: `/A_SupplierText`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfASupplierTextTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all the supplier text data attached to purchasing organization in the system.
     * Retrieves supplier text data.
     */
    async aSupplierTextGet(requestParameters: ASupplierTextGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfASupplierTextType> {
        const response = await this.aSupplierTextGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates text data attached to a supplier in the system.
     * Creates supplier text data.
     */
    async aSupplierTextPostRaw(requestParameters: ASupplierTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERASupplierTextType>> {
        if (requestParameters.aPIBUSINESSPARTNERASupplierTextTypeCreate === null || requestParameters.aPIBUSINESSPARTNERASupplierTextTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERASupplierTextTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERASupplierTextTypeCreate was null or undefined when calling aSupplierTextPost.');
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
            path: `/A_SupplierText`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERASupplierTextTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERASupplierTextTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERASupplierTextTypeFromJSON(jsonValue));
    }

    /**
     * Creates text data attached to a supplier in the system.
     * Creates supplier text data.
     */
    async aSupplierTextPost(requestParameters: ASupplierTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERASupplierTextType> {
        const response = await this.aSupplierTextPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes text data linked to supplier by Supplier, Language, and LongTextID fields.
     * Deletes supplier text data by key fields.
     */
    async aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDDeleteRaw(requestParameters: ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDDelete.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDDelete.');
        }

        if (requestParameters.longTextID === null || requestParameters.longTextID === undefined) {
            throw new runtime.RequiredError('longTextID','Required parameter requestParameters.longTextID was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDDelete.');
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
            path: `/A_SupplierText(Supplier='{Supplier}',Language='{Language}',LongTextID='{LongTextID}')`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))).replace(`{${"Language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"LongTextID"}}`, encodeURIComponent(String(requestParameters.longTextID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes text data linked to supplier by Supplier, Language, and LongTextID fields.
     * Deletes supplier text data by key fields.
     */
    async aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDDelete(requestParameters: ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves supplier purchasing organization text data by using Supplier, Language, and LongTextID fields.
     * Retrieves supplier text data by key fields.
     */
    async aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetRaw(requestParameters: ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERASupplierTextType>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGet.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGet.');
        }

        if (requestParameters.longTextID === null || requestParameters.longTextID === undefined) {
            throw new runtime.RequiredError('longTextID','Required parameter requestParameters.longTextID was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGet.');
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
            path: `/A_SupplierText(Supplier='{Supplier}',Language='{Language}',LongTextID='{LongTextID}')`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))).replace(`{${"Language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"LongTextID"}}`, encodeURIComponent(String(requestParameters.longTextID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERASupplierTextTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves supplier purchasing organization text data by using Supplier, Language, and LongTextID fields.
     * Retrieves supplier text data by key fields.
     */
    async aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGet(requestParameters: ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERASupplierTextType> {
        const response = await this.aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates text data linked to supplier by using Supplier, Language and LongTextID fields.
     * Updates supplier text data by key fields.
     */
    async aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatchRaw(requestParameters: ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.longTextID === null || requestParameters.longTextID === undefined) {
            throw new runtime.RequiredError('longTextID','Required parameter requestParameters.longTextID was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatch.');
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
            path: `/A_SupplierText(Supplier='{Supplier}',Language='{Language}',LongTextID='{LongTextID}')`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))).replace(`{${"Language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"LongTextID"}}`, encodeURIComponent(String(requestParameters.longTextID))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates text data linked to supplier by using Supplier, Language and LongTextID fields.
     * Updates supplier text data by key fields.
     */
    async aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatch(requestParameters: ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aSupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDPatchRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const ASupplierSupplierToSupplierTextGetOrderbyEnum = {
    Supplier: 'Supplier',
    SupplierDesc: 'Supplier desc',
    Language: 'Language',
    LanguageDesc: 'Language desc',
    LongTextId: 'LongTextID',
    LongTextIdDesc: 'LongTextID desc'
} as const;
export type ASupplierSupplierToSupplierTextGetOrderbyEnum = typeof ASupplierSupplierToSupplierTextGetOrderbyEnum[keyof typeof ASupplierSupplierToSupplierTextGetOrderbyEnum];
/**
 * @export
 */
export const ASupplierSupplierToSupplierTextGetSelectEnum = {
    Supplier: 'Supplier',
    Language: 'Language',
    LongTextId: 'LongTextID',
    LongText: 'LongText'
} as const;
export type ASupplierSupplierToSupplierTextGetSelectEnum = typeof ASupplierSupplierToSupplierTextGetSelectEnum[keyof typeof ASupplierSupplierToSupplierTextGetSelectEnum];
/**
 * @export
 */
export const ASupplierTextGetOrderbyEnum = {
    Supplier: 'Supplier',
    SupplierDesc: 'Supplier desc',
    Language: 'Language',
    LanguageDesc: 'Language desc',
    LongTextId: 'LongTextID',
    LongTextIdDesc: 'LongTextID desc'
} as const;
export type ASupplierTextGetOrderbyEnum = typeof ASupplierTextGetOrderbyEnum[keyof typeof ASupplierTextGetOrderbyEnum];
/**
 * @export
 */
export const ASupplierTextGetSelectEnum = {
    Supplier: 'Supplier',
    Language: 'Language',
    LongTextId: 'LongTextID',
    LongText: 'LongText'
} as const;
export type ASupplierTextGetSelectEnum = typeof ASupplierTextGetSelectEnum[keyof typeof ASupplierTextGetSelectEnum];
/**
 * @export
 */
export const ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetSelectEnum = {
    Supplier: 'Supplier',
    Language: 'Language',
    LongTextId: 'LongTextID',
    LongText: 'LongText'
} as const;
export type ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetSelectEnum = typeof ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetSelectEnum[keyof typeof ASupplierTextSupplierSupplierLanguageLanguageLongTextIDLongTextIDGetSelectEnum];