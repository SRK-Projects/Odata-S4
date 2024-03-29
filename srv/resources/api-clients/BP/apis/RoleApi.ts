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
  APIBUSINESSPARTNERABusinessPartnerRoleType,
  APIBUSINESSPARTNERABusinessPartnerRoleTypeCreate,
  APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate,
  CollectionOfABusinessPartnerRoleType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERABusinessPartnerRoleTypeFromJSON,
    APIBUSINESSPARTNERABusinessPartnerRoleTypeToJSON,
    APIBUSINESSPARTNERABusinessPartnerRoleTypeCreateFromJSON,
    APIBUSINESSPARTNERABusinessPartnerRoleTypeCreateToJSON,
    APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdateFromJSON,
    APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdateToJSON,
    CollectionOfABusinessPartnerRoleTypeFromJSON,
    CollectionOfABusinessPartnerRoleTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetRequest {
    businessPartner: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetOrderbyEnum>;
    $select?: Set<ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetSelectEnum>;
}

export interface ABusinessPartnerBusinessPartnerToBusinessPartnerRolePostRequest {
    businessPartner: string;
    aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate: APIBUSINESSPARTNERABusinessPartnerRoleTypeCreate;
}

export interface ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetRequest {
    businessPartner: string;
    businessPartnerRole: string;
    $select?: Set<ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetSelectEnum>;
}

export interface ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRolePatchRequest {
    businessPartner: string;
    businessPartnerRole: string;
    aPIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate: APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate;
}

export interface ABusinessPartnerRoleGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABusinessPartnerRoleGetOrderbyEnum>;
    $select?: Set<ABusinessPartnerRoleGetSelectEnum>;
}

export interface ABusinessPartnerRolePostRequest {
    aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate: APIBUSINESSPARTNERABusinessPartnerRoleTypeCreate;
}

/**
 * 
 */
export class RoleApi extends runtime.BaseAPI {

    /**
     * Retrieves business partner role data fields of all the records available records in the system.
     * Retrieves business partner role data.
     */
    async aBusinessPartnerBusinessPartnerToBusinessPartnerRoleGetRaw(requestParameters: ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABusinessPartnerRoleType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToBusinessPartnerRoleGet.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_BusinessPartnerRole`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABusinessPartnerRoleTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner role data fields of all the records available records in the system.
     * Retrieves business partner role data.
     */
    async aBusinessPartnerBusinessPartnerToBusinessPartnerRoleGet(requestParameters: ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABusinessPartnerRoleType> {
        const response = await this.aBusinessPartnerBusinessPartnerToBusinessPartnerRoleGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a new role to the existing business partner record with role and validity details.
     * Creates a new role for an existing business partner.
     */
    async aBusinessPartnerBusinessPartnerToBusinessPartnerRolePostRaw(requestParameters: ABusinessPartnerBusinessPartnerToBusinessPartnerRolePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABusinessPartnerRoleType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToBusinessPartnerRolePost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate was null or undefined when calling aBusinessPartnerBusinessPartnerToBusinessPartnerRolePost.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_BusinessPartnerRole`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABusinessPartnerRoleTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABusinessPartnerRoleTypeFromJSON(jsonValue));
    }

    /**
     * Adds a new role to the existing business partner record with role and validity details.
     * Creates a new role for an existing business partner.
     */
    async aBusinessPartnerBusinessPartnerToBusinessPartnerRolePost(requestParameters: ABusinessPartnerBusinessPartnerToBusinessPartnerRolePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABusinessPartnerRoleType> {
        const response = await this.aBusinessPartnerBusinessPartnerToBusinessPartnerRolePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves business partner role data using business partner number and business partner role.
     * Retrieves business partner role data using the key fields.
     */
    async aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetRaw(requestParameters: ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABusinessPartnerRoleType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGet.');
        }

        if (requestParameters.businessPartnerRole === null || requestParameters.businessPartnerRole === undefined) {
            throw new runtime.RequiredError('businessPartnerRole','Required parameter requestParameters.businessPartnerRole was null or undefined when calling aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGet.');
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
            path: `/A_BusinessPartnerRole(BusinessPartner='{BusinessPartner}',BusinessPartnerRole='{BusinessPartnerRole}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"BusinessPartnerRole"}}`, encodeURIComponent(String(requestParameters.businessPartnerRole))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABusinessPartnerRoleTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner role data using business partner number and business partner role.
     * Retrieves business partner role data using the key fields.
     */
    async aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGet(requestParameters: ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABusinessPartnerRoleType> {
        const response = await this.aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates role validity data identified by business partner number and business partner role.
     * Updates role data fields.
     */
    async aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRolePatchRaw(requestParameters: ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRolePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRolePatch.');
        }

        if (requestParameters.businessPartnerRole === null || requestParameters.businessPartnerRole === undefined) {
            throw new runtime.RequiredError('businessPartnerRole','Required parameter requestParameters.businessPartnerRole was null or undefined when calling aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRolePatch.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate === null || requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate','Required parameter requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate was null or undefined when calling aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRolePatch.');
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
            path: `/A_BusinessPartnerRole(BusinessPartner='{BusinessPartner}',BusinessPartnerRole='{BusinessPartnerRole}')`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"BusinessPartnerRole"}}`, encodeURIComponent(String(requestParameters.businessPartnerRole))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABusinessPartnerRoleTypeUpdateToJSON(requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates role validity data identified by business partner number and business partner role.
     * Updates role data fields.
     */
    async aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRolePatch(requestParameters: ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRolePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRolePatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves business partner role data fields of all the records available records in the system.
     * Retrieves business partner role data.
     */
    async aBusinessPartnerRoleGetRaw(requestParameters: ABusinessPartnerRoleGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABusinessPartnerRoleType>> {
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
            path: `/A_BusinessPartnerRole`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABusinessPartnerRoleTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner role data fields of all the records available records in the system.
     * Retrieves business partner role data.
     */
    async aBusinessPartnerRoleGet(requestParameters: ABusinessPartnerRoleGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABusinessPartnerRoleType> {
        const response = await this.aBusinessPartnerRoleGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a new role to the existing business partner record with role and validity details.
     * Creates a new role for an existing business partner.
     */
    async aBusinessPartnerRolePostRaw(requestParameters: ABusinessPartnerRolePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABusinessPartnerRoleType>> {
        if (requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate was null or undefined when calling aBusinessPartnerRolePost.');
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
            path: `/A_BusinessPartnerRole`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABusinessPartnerRoleTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABusinessPartnerRoleTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABusinessPartnerRoleTypeFromJSON(jsonValue));
    }

    /**
     * Adds a new role to the existing business partner record with role and validity details.
     * Creates a new role for an existing business partner.
     */
    async aBusinessPartnerRolePost(requestParameters: ABusinessPartnerRolePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABusinessPartnerRoleType> {
        const response = await this.aBusinessPartnerRolePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    BusinessPartnerRole: 'BusinessPartnerRole',
    BusinessPartnerRoleDesc: 'BusinessPartnerRole desc',
    ValidFrom: 'ValidFrom',
    ValidFromDesc: 'ValidFrom desc',
    ValidTo: 'ValidTo',
    ValidToDesc: 'ValidTo desc',
    AuthorizationGroup: 'AuthorizationGroup',
    AuthorizationGroupDesc: 'AuthorizationGroup desc'
} as const;
export type ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetOrderbyEnum = typeof ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetOrderbyEnum[keyof typeof ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetOrderbyEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerRole: 'BusinessPartnerRole',
    ValidFrom: 'ValidFrom',
    ValidTo: 'ValidTo',
    AuthorizationGroup: 'AuthorizationGroup'
} as const;
export type ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetSelectEnum = typeof ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetSelectEnum[keyof typeof ABusinessPartnerBusinessPartnerToBusinessPartnerRoleGetSelectEnum];
/**
 * @export
 */
export const ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerRole: 'BusinessPartnerRole',
    ValidFrom: 'ValidFrom',
    ValidTo: 'ValidTo',
    AuthorizationGroup: 'AuthorizationGroup'
} as const;
export type ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetSelectEnum = typeof ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetSelectEnum[keyof typeof ABusinessPartnerRoleBusinessPartnerBusinessPartnerBusinessPartnerRoleBusinessPartnerRoleGetSelectEnum];
/**
 * @export
 */
export const ABusinessPartnerRoleGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    BusinessPartnerRole: 'BusinessPartnerRole',
    BusinessPartnerRoleDesc: 'BusinessPartnerRole desc',
    ValidFrom: 'ValidFrom',
    ValidFromDesc: 'ValidFrom desc',
    ValidTo: 'ValidTo',
    ValidToDesc: 'ValidTo desc',
    AuthorizationGroup: 'AuthorizationGroup',
    AuthorizationGroupDesc: 'AuthorizationGroup desc'
} as const;
export type ABusinessPartnerRoleGetOrderbyEnum = typeof ABusinessPartnerRoleGetOrderbyEnum[keyof typeof ABusinessPartnerRoleGetOrderbyEnum];
/**
 * @export
 */
export const ABusinessPartnerRoleGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerRole: 'BusinessPartnerRole',
    ValidFrom: 'ValidFrom',
    ValidTo: 'ValidTo',
    AuthorizationGroup: 'AuthorizationGroup'
} as const;
export type ABusinessPartnerRoleGetSelectEnum = typeof ABusinessPartnerRoleGetSelectEnum[keyof typeof ABusinessPartnerRoleGetSelectEnum];
