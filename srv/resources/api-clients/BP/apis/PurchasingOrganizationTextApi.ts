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
  APIBUSINESSPARTNERASupplierPurchasingOrgTextType,
  APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate,
  CollectionOfASupplierPurchasingOrgTextType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeFromJSON,
    APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeToJSON,
    APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreateFromJSON,
    APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreateToJSON,
    CollectionOfASupplierPurchasingOrgTextTypeFromJSON,
    CollectionOfASupplierPurchasingOrgTextTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetRequest {
    supplier: string;
    purchasingOrganization: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetOrderbyEnum>;
    $select?: Set<ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetSelectEnum>;
}

export interface ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextPostRequest {
    supplier: string;
    purchasingOrganization: string;
    aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate: APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate;
}

export interface ASupplierPurchasingOrgTextGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ASupplierPurchasingOrgTextGetOrderbyEnum>;
    $select?: Set<ASupplierPurchasingOrgTextGetSelectEnum>;
}

export interface ASupplierPurchasingOrgTextPostRequest {
    aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate: APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate;
}

export interface ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDeleteRequest {
    supplier: string;
    purchasingOrganization: string;
    language: string;
    longTextID: string;
}

export interface ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetRequest {
    supplier: string;
    purchasingOrganization: string;
    language: string;
    longTextID: string;
    $select?: Set<ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetSelectEnum>;
}

export interface ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatchRequest {
    supplier: string;
    purchasingOrganization: string;
    language: string;
    longTextID: string;
    body: object;
}

/**
 * 
 */
export class PurchasingOrganizationTextApi extends runtime.BaseAPI {

    /**
     * Retrieves all the supplier purchasing organization text data attached to purchasing organization in the system.
     * Retrieves supplier purchasing organization text data.
     */
    async aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetRaw(requestParameters: ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfASupplierPurchasingOrgTextType>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGet.');
        }

        if (requestParameters.purchasingOrganization === null || requestParameters.purchasingOrganization === undefined) {
            throw new runtime.RequiredError('purchasingOrganization','Required parameter requestParameters.purchasingOrganization was null or undefined when calling aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGet.');
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
            path: `/A_SupplierPurchasingOrg(Supplier='{Supplier}',PurchasingOrganization='{PurchasingOrganization}')/to_PurchasingOrgText`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))).replace(`{${"PurchasingOrganization"}}`, encodeURIComponent(String(requestParameters.purchasingOrganization))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfASupplierPurchasingOrgTextTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all the supplier purchasing organization text data attached to purchasing organization in the system.
     * Retrieves supplier purchasing organization text data.
     */
    async aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGet(requestParameters: ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfASupplierPurchasingOrgTextType> {
        const response = await this.aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates text data attached to a supplier purchasing organization in the system.
     * Creates supplier purchasing organization text data.
     */
    async aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextPostRaw(requestParameters: ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERASupplierPurchasingOrgTextType>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextPost.');
        }

        if (requestParameters.purchasingOrganization === null || requestParameters.purchasingOrganization === undefined) {
            throw new runtime.RequiredError('purchasingOrganization','Required parameter requestParameters.purchasingOrganization was null or undefined when calling aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextPost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate === null || requestParameters.aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate was null or undefined when calling aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextPost.');
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
            path: `/A_SupplierPurchasingOrg(Supplier='{Supplier}',PurchasingOrganization='{PurchasingOrganization}')/to_PurchasingOrgText`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))).replace(`{${"PurchasingOrganization"}}`, encodeURIComponent(String(requestParameters.purchasingOrganization))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeFromJSON(jsonValue));
    }

    /**
     * Creates text data attached to a supplier purchasing organization in the system.
     * Creates supplier purchasing organization text data.
     */
    async aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextPost(requestParameters: ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERASupplierPurchasingOrgTextType> {
        const response = await this.aSupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves all the supplier purchasing organization text data attached to purchasing organization in the system.
     * Retrieves supplier purchasing organization text data.
     */
    async aSupplierPurchasingOrgTextGetRaw(requestParameters: ASupplierPurchasingOrgTextGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfASupplierPurchasingOrgTextType>> {
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
            path: `/A_SupplierPurchasingOrgText`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfASupplierPurchasingOrgTextTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all the supplier purchasing organization text data attached to purchasing organization in the system.
     * Retrieves supplier purchasing organization text data.
     */
    async aSupplierPurchasingOrgTextGet(requestParameters: ASupplierPurchasingOrgTextGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfASupplierPurchasingOrgTextType> {
        const response = await this.aSupplierPurchasingOrgTextGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates text data attached to a supplier purchasing organization in the system.
     * Creates supplier purchasing organization text data.
     */
    async aSupplierPurchasingOrgTextPostRaw(requestParameters: ASupplierPurchasingOrgTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERASupplierPurchasingOrgTextType>> {
        if (requestParameters.aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate === null || requestParameters.aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate was null or undefined when calling aSupplierPurchasingOrgTextPost.');
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
            path: `/A_SupplierPurchasingOrgText`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERASupplierPurchasingOrgTextTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeFromJSON(jsonValue));
    }

    /**
     * Creates text data attached to a supplier purchasing organization in the system.
     * Creates supplier purchasing organization text data.
     */
    async aSupplierPurchasingOrgTextPost(requestParameters: ASupplierPurchasingOrgTextPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERASupplierPurchasingOrgTextType> {
        const response = await this.aSupplierPurchasingOrgTextPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes text data linked to purchasing organization by Supplier, PurchasingOrganization, Language, and LongTextID.
     * Deletes supplier purchasing organization text data by using key fields.
     */
    async aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDeleteRaw(requestParameters: ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDelete.');
        }

        if (requestParameters.purchasingOrganization === null || requestParameters.purchasingOrganization === undefined) {
            throw new runtime.RequiredError('purchasingOrganization','Required parameter requestParameters.purchasingOrganization was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDelete.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDelete.');
        }

        if (requestParameters.longTextID === null || requestParameters.longTextID === undefined) {
            throw new runtime.RequiredError('longTextID','Required parameter requestParameters.longTextID was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDelete.');
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
            path: `/A_SupplierPurchasingOrgText(Supplier='{Supplier}',PurchasingOrganization='{PurchasingOrganization}',Language='{Language}',LongTextID='{LongTextID}')`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))).replace(`{${"PurchasingOrganization"}}`, encodeURIComponent(String(requestParameters.purchasingOrganization))).replace(`{${"Language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"LongTextID"}}`, encodeURIComponent(String(requestParameters.longTextID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes text data linked to purchasing organization by Supplier, PurchasingOrganization, Language, and LongTextID.
     * Deletes supplier purchasing organization text data by using key fields.
     */
    async aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDelete(requestParameters: ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves supplier purchasing organization text data using Supplier, PurchasingOrganization, Language, and LongTextID
     * Retrieves supplier purchasing organization text data by using the key fields.
     */
    async aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetRaw(requestParameters: ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERASupplierPurchasingOrgTextType>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGet.');
        }

        if (requestParameters.purchasingOrganization === null || requestParameters.purchasingOrganization === undefined) {
            throw new runtime.RequiredError('purchasingOrganization','Required parameter requestParameters.purchasingOrganization was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGet.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGet.');
        }

        if (requestParameters.longTextID === null || requestParameters.longTextID === undefined) {
            throw new runtime.RequiredError('longTextID','Required parameter requestParameters.longTextID was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGet.');
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
            path: `/A_SupplierPurchasingOrgText(Supplier='{Supplier}',PurchasingOrganization='{PurchasingOrganization}',Language='{Language}',LongTextID='{LongTextID}')`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))).replace(`{${"PurchasingOrganization"}}`, encodeURIComponent(String(requestParameters.purchasingOrganization))).replace(`{${"Language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"LongTextID"}}`, encodeURIComponent(String(requestParameters.longTextID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves supplier purchasing organization text data using Supplier, PurchasingOrganization, Language, and LongTextID
     * Retrieves supplier purchasing organization text data by using the key fields.
     */
    async aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGet(requestParameters: ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERASupplierPurchasingOrgTextType> {
        const response = await this.aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates text data linked to purchasing organization by using Supplier, PurchasingOrganization, Language, and LongTextID fields.
     * Updates supplier purchasing organization text data using key fields.
     */
    async aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatchRaw(requestParameters: ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.purchasingOrganization === null || requestParameters.purchasingOrganization === undefined) {
            throw new runtime.RequiredError('purchasingOrganization','Required parameter requestParameters.purchasingOrganization was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.longTextID === null || requestParameters.longTextID === undefined) {
            throw new runtime.RequiredError('longTextID','Required parameter requestParameters.longTextID was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatch.');
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
            path: `/A_SupplierPurchasingOrgText(Supplier='{Supplier}',PurchasingOrganization='{PurchasingOrganization}',Language='{Language}',LongTextID='{LongTextID}')`.replace(`{${"Supplier"}}`, encodeURIComponent(String(requestParameters.supplier))).replace(`{${"PurchasingOrganization"}}`, encodeURIComponent(String(requestParameters.purchasingOrganization))).replace(`{${"Language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"LongTextID"}}`, encodeURIComponent(String(requestParameters.longTextID))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates text data linked to purchasing organization by using Supplier, PurchasingOrganization, Language, and LongTextID fields.
     * Updates supplier purchasing organization text data using key fields.
     */
    async aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatch(requestParameters: ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aSupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDPatchRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetOrderbyEnum = {
    Supplier: 'Supplier',
    SupplierDesc: 'Supplier desc',
    PurchasingOrganization: 'PurchasingOrganization',
    PurchasingOrganizationDesc: 'PurchasingOrganization desc',
    Language: 'Language',
    LanguageDesc: 'Language desc',
    LongTextId: 'LongTextID',
    LongTextIdDesc: 'LongTextID desc'
} as const;
export type ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetOrderbyEnum = typeof ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetOrderbyEnum[keyof typeof ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetOrderbyEnum];
/**
 * @export
 */
export const ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetSelectEnum = {
    Supplier: 'Supplier',
    PurchasingOrganization: 'PurchasingOrganization',
    Language: 'Language',
    LongTextId: 'LongTextID',
    LongText: 'LongText'
} as const;
export type ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetSelectEnum = typeof ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetSelectEnum[keyof typeof ASupplierPurchasingOrgSupplierSupplierPurchasingOrganizationPurchasingOrganizationToPurchasingOrgTextGetSelectEnum];
/**
 * @export
 */
export const ASupplierPurchasingOrgTextGetOrderbyEnum = {
    Supplier: 'Supplier',
    SupplierDesc: 'Supplier desc',
    PurchasingOrganization: 'PurchasingOrganization',
    PurchasingOrganizationDesc: 'PurchasingOrganization desc',
    Language: 'Language',
    LanguageDesc: 'Language desc',
    LongTextId: 'LongTextID',
    LongTextIdDesc: 'LongTextID desc'
} as const;
export type ASupplierPurchasingOrgTextGetOrderbyEnum = typeof ASupplierPurchasingOrgTextGetOrderbyEnum[keyof typeof ASupplierPurchasingOrgTextGetOrderbyEnum];
/**
 * @export
 */
export const ASupplierPurchasingOrgTextGetSelectEnum = {
    Supplier: 'Supplier',
    PurchasingOrganization: 'PurchasingOrganization',
    Language: 'Language',
    LongTextId: 'LongTextID',
    LongText: 'LongText'
} as const;
export type ASupplierPurchasingOrgTextGetSelectEnum = typeof ASupplierPurchasingOrgTextGetSelectEnum[keyof typeof ASupplierPurchasingOrgTextGetSelectEnum];
/**
 * @export
 */
export const ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetSelectEnum = {
    Supplier: 'Supplier',
    PurchasingOrganization: 'PurchasingOrganization',
    Language: 'Language',
    LongTextId: 'LongTextID',
    LongText: 'LongText'
} as const;
export type ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetSelectEnum = typeof ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetSelectEnum[keyof typeof ASupplierPurchasingOrgTextSupplierSupplierPurchasingOrganizationPurchasingOrganizationLanguageLanguageLongTextIDLongTextIDGetSelectEnum];
