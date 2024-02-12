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
  APIBUSINESSPARTNERABusinessPartnerAliasType,
  APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate,
  APIBUSINESSPARTNERABusinessPartnerAliasTypeUpdate,
  CollectionOfABusinessPartnerAliasType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERABusinessPartnerAliasTypeFromJSON,
    APIBUSINESSPARTNERABusinessPartnerAliasTypeToJSON,
    APIBUSINESSPARTNERABusinessPartnerAliasTypeCreateFromJSON,
    APIBUSINESSPARTNERABusinessPartnerAliasTypeCreateToJSON,
    APIBUSINESSPARTNERABusinessPartnerAliasTypeUpdateFromJSON,
    APIBUSINESSPARTNERABusinessPartnerAliasTypeUpdateToJSON,
    CollectionOfABusinessPartnerAliasTypeFromJSON,
    CollectionOfABusinessPartnerAliasTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberDeleteRequest {
    businessPartner: string;
    bPAliasPositionNumber: string;
}

export interface ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetRequest {
    businessPartner: string;
    bPAliasPositionNumber: string;
    $select?: Set<ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetSelectEnum>;
}

export interface ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberPatchRequest {
    businessPartner: string;
    bPAliasPositionNumber: string;
    aPIBUSINESSPARTNERABusinessPartnerAliasTypeUpdate: APIBUSINESSPARTNERABusinessPartnerAliasTypeUpdate;
}

export interface ABusinessPartnerAliasGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABusinessPartnerAliasGetOrderbyEnum>;
    $select?: Set<ABusinessPartnerAliasGetSelectEnum>;
}

export interface ABusinessPartnerAliasPostRequest {
    aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate: APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate;
}

export interface ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetRequest {
    businessPartner: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetOrderbyEnum>;
    $select?: Set<ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetSelectEnum>;
}

export interface ABusinessPartnerBusinessPartnerToBusinessPartnerAliasPostRequest {
    businessPartner: string;
    aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate: APIBUSINESSPARTNERABusinessPartnerAliasTypeCreate;
}

/**
 * 
 */
export class AdditionalNamesApi extends runtime.BaseAPI {

    /**
     * Deletes a business partner alias identified by business partner number and alias position number.
     * Deletes a business partner alias.
     */
    async aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberDeleteRaw(requestParameters: ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberDelete.');
        }

        if (requestParameters.bPAliasPositionNumber === null || requestParameters.bPAliasPositionNumber === undefined) {
            throw new runtime.RequiredError('bPAliasPositionNumber','Required parameter requestParameters.bPAliasPositionNumber was null or undefined when calling aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberDelete.');
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
            path: `/A_BusinessPartnerAlias(BusinessPartner='{BusinessPartner}',BPAliasPositionNumber='{BPAliasPositionNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"BPAliasPositionNumber"}}`, encodeURIComponent(String(requestParameters.bPAliasPositionNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a business partner alias identified by business partner number and alias position number.
     * Deletes a business partner alias.
     */
    async aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberDelete(requestParameters: ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves business partner aliases of all the available records linked to business partners in the system.
     * Retrieves business partner aliases.
     */
    async aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetRaw(requestParameters: ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABusinessPartnerAliasType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGet.');
        }

        if (requestParameters.bPAliasPositionNumber === null || requestParameters.bPAliasPositionNumber === undefined) {
            throw new runtime.RequiredError('bPAliasPositionNumber','Required parameter requestParameters.bPAliasPositionNumber was null or undefined when calling aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGet.');
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
            path: `/A_BusinessPartnerAlias(BusinessPartner='{BusinessPartner}',BPAliasPositionNumber='{BPAliasPositionNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"BPAliasPositionNumber"}}`, encodeURIComponent(String(requestParameters.bPAliasPositionNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABusinessPartnerAliasTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner aliases of all the available records linked to business partners in the system.
     * Retrieves business partner aliases.
     */
    async aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGet(requestParameters: ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABusinessPartnerAliasType> {
        const response = await this.aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a business partner alias identified by business partner number and alias position number.
     * Updates a business partner alias.
     */
    async aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberPatchRaw(requestParameters: ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberPatch.');
        }

        if (requestParameters.bPAliasPositionNumber === null || requestParameters.bPAliasPositionNumber === undefined) {
            throw new runtime.RequiredError('bPAliasPositionNumber','Required parameter requestParameters.bPAliasPositionNumber was null or undefined when calling aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberPatch.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeUpdate === null || requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeUpdate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABusinessPartnerAliasTypeUpdate','Required parameter requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeUpdate was null or undefined when calling aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberPatch.');
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
            path: `/A_BusinessPartnerAlias(BusinessPartner='{BusinessPartner}',BPAliasPositionNumber='{BPAliasPositionNumber}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"BPAliasPositionNumber"}}`, encodeURIComponent(String(requestParameters.bPAliasPositionNumber))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABusinessPartnerAliasTypeUpdateToJSON(requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a business partner alias identified by business partner number and alias position number.
     * Updates a business partner alias.
     */
    async aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberPatch(requestParameters: ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberPatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves business partner aliases of all the available records linked to business partners in the system.
     * Retrieves business partner aliases.
     */
    async aBusinessPartnerAliasGetRaw(requestParameters: ABusinessPartnerAliasGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABusinessPartnerAliasType>> {
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
            path: `/A_BusinessPartnerAlias`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABusinessPartnerAliasTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner aliases of all the available records linked to business partners in the system.
     * Retrieves business partner aliases.
     */
    async aBusinessPartnerAliasGet(requestParameters: ABusinessPartnerAliasGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABusinessPartnerAliasType> {
        const response = await this.aBusinessPartnerAliasGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates business partner aliases linked to an existing business partner.
     * Creates business partner aliases.
     */
    async aBusinessPartnerAliasPostRaw(requestParameters: ABusinessPartnerAliasPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABusinessPartnerAliasType>> {
        if (requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate was null or undefined when calling aBusinessPartnerAliasPost.');
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
            path: `/A_BusinessPartnerAlias`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABusinessPartnerAliasTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABusinessPartnerAliasTypeFromJSON(jsonValue));
    }

    /**
     * Creates business partner aliases linked to an existing business partner.
     * Creates business partner aliases.
     */
    async aBusinessPartnerAliasPost(requestParameters: ABusinessPartnerAliasPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABusinessPartnerAliasType> {
        const response = await this.aBusinessPartnerAliasPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves business partner aliases of all the available records linked to business partners in the system.
     * Retrieves business partner aliases.
     */
    async aBusinessPartnerBusinessPartnerToBusinessPartnerAliasGetRaw(requestParameters: ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABusinessPartnerAliasType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToBusinessPartnerAliasGet.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_BusinessPartnerAlias`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABusinessPartnerAliasTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner aliases of all the available records linked to business partners in the system.
     * Retrieves business partner aliases.
     */
    async aBusinessPartnerBusinessPartnerToBusinessPartnerAliasGet(requestParameters: ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABusinessPartnerAliasType> {
        const response = await this.aBusinessPartnerBusinessPartnerToBusinessPartnerAliasGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates business partner aliases linked to an existing business partner.
     * Creates business partner aliases.
     */
    async aBusinessPartnerBusinessPartnerToBusinessPartnerAliasPostRaw(requestParameters: ABusinessPartnerBusinessPartnerToBusinessPartnerAliasPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABusinessPartnerAliasType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToBusinessPartnerAliasPost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate was null or undefined when calling aBusinessPartnerBusinessPartnerToBusinessPartnerAliasPost.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_BusinessPartnerAlias`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABusinessPartnerAliasTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABusinessPartnerAliasTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABusinessPartnerAliasTypeFromJSON(jsonValue));
    }

    /**
     * Creates business partner aliases linked to an existing business partner.
     * Creates business partner aliases.
     */
    async aBusinessPartnerBusinessPartnerToBusinessPartnerAliasPost(requestParameters: ABusinessPartnerBusinessPartnerToBusinessPartnerAliasPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABusinessPartnerAliasType> {
        const response = await this.aBusinessPartnerBusinessPartnerToBusinessPartnerAliasPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    BpAliasPositionNumber: 'BPAliasPositionNumber',
    BusinessPartnerAliasName: 'BusinessPartnerAliasName'
} as const;
export type ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetSelectEnum = typeof ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetSelectEnum[keyof typeof ABusinessPartnerAliasBusinessPartnerBusinessPartnerBPAliasPositionNumberBPAliasPositionNumberGetSelectEnum];
/**
 * @export
 */
export const ABusinessPartnerAliasGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    BpAliasPositionNumber: 'BPAliasPositionNumber',
    BpAliasPositionNumberDesc: 'BPAliasPositionNumber desc',
    BusinessPartnerAliasName: 'BusinessPartnerAliasName',
    BusinessPartnerAliasNameDesc: 'BusinessPartnerAliasName desc'
} as const;
export type ABusinessPartnerAliasGetOrderbyEnum = typeof ABusinessPartnerAliasGetOrderbyEnum[keyof typeof ABusinessPartnerAliasGetOrderbyEnum];
/**
 * @export
 */
export const ABusinessPartnerAliasGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    BpAliasPositionNumber: 'BPAliasPositionNumber',
    BusinessPartnerAliasName: 'BusinessPartnerAliasName'
} as const;
export type ABusinessPartnerAliasGetSelectEnum = typeof ABusinessPartnerAliasGetSelectEnum[keyof typeof ABusinessPartnerAliasGetSelectEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    BpAliasPositionNumber: 'BPAliasPositionNumber',
    BpAliasPositionNumberDesc: 'BPAliasPositionNumber desc',
    BusinessPartnerAliasName: 'BusinessPartnerAliasName',
    BusinessPartnerAliasNameDesc: 'BusinessPartnerAliasName desc'
} as const;
export type ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetOrderbyEnum = typeof ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetOrderbyEnum[keyof typeof ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetOrderbyEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    BpAliasPositionNumber: 'BPAliasPositionNumber',
    BusinessPartnerAliasName: 'BusinessPartnerAliasName'
} as const;
export type ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetSelectEnum = typeof ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetSelectEnum[keyof typeof ABusinessPartnerBusinessPartnerToBusinessPartnerAliasGetSelectEnum];