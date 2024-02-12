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
  APIBUSINESSPARTNERABPEmploymentType,
  APIBUSINESSPARTNERABPEmploymentTypeCreate,
  APIBUSINESSPARTNERABPEmploymentTypeUpdate,
  CollectionOfABPEmploymentType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERABPEmploymentTypeFromJSON,
    APIBUSINESSPARTNERABPEmploymentTypeToJSON,
    APIBUSINESSPARTNERABPEmploymentTypeCreateFromJSON,
    APIBUSINESSPARTNERABPEmploymentTypeCreateToJSON,
    APIBUSINESSPARTNERABPEmploymentTypeUpdateFromJSON,
    APIBUSINESSPARTNERABPEmploymentTypeUpdateToJSON,
    CollectionOfABPEmploymentTypeFromJSON,
    CollectionOfABPEmploymentTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateDeleteRequest {
    businessPartner: string;
    bPEmploymentStartDate: Date;
}

export interface ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetRequest {
    businessPartner: string;
    bPEmploymentStartDate: Date;
    $select?: Set<ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetSelectEnum>;
}

export interface ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDatePatchRequest {
    businessPartner: string;
    bPEmploymentStartDate: Date;
    aPIBUSINESSPARTNERABPEmploymentTypeUpdate: APIBUSINESSPARTNERABPEmploymentTypeUpdate;
}

export interface ABPEmploymentGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABPEmploymentGetOrderbyEnum>;
    $select?: Set<ABPEmploymentGetSelectEnum>;
}

export interface ABPEmploymentPostRequest {
    aPIBUSINESSPARTNERABPEmploymentTypeCreate: APIBUSINESSPARTNERABPEmploymentTypeCreate;
}

export interface ABusinessPartnerBusinessPartnerToBPEmploymentGetRequest {
    businessPartner: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABusinessPartnerBusinessPartnerToBPEmploymentGetOrderbyEnum>;
    $select?: Set<ABusinessPartnerBusinessPartnerToBPEmploymentGetSelectEnum>;
}

export interface ABusinessPartnerBusinessPartnerToBPEmploymentPostRequest {
    businessPartner: string;
    aPIBUSINESSPARTNERABPEmploymentTypeCreate: APIBUSINESSPARTNERABPEmploymentTypeCreate;
}

/**
 * 
 */
export class EmploymentOverviewApi extends runtime.BaseAPI {

    /**
     * Deletes a business partner employment identified by business partner number and start date of the employment.
     * Deletes a business partner employment.
     */
    async aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateDeleteRaw(requestParameters: ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateDelete.');
        }

        if (requestParameters.bPEmploymentStartDate === null || requestParameters.bPEmploymentStartDate === undefined) {
            throw new runtime.RequiredError('bPEmploymentStartDate','Required parameter requestParameters.bPEmploymentStartDate was null or undefined when calling aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateDelete.');
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
            path: `/A_BPEmployment(BusinessPartner='{BusinessPartner}',BPEmploymentStartDate={BPEmploymentStartDate})`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"BPEmploymentStartDate"}}`, encodeURIComponent(String(requestParameters.bPEmploymentStartDate))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a business partner employment identified by business partner number and start date of the employment.
     * Deletes a business partner employment.
     */
    async aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateDelete(requestParameters: ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves business partner employments of all the available records linked to business partners in the system.
     * Retrieves business partner employments.
     */
    async aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetRaw(requestParameters: ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPEmploymentType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGet.');
        }

        if (requestParameters.bPEmploymentStartDate === null || requestParameters.bPEmploymentStartDate === undefined) {
            throw new runtime.RequiredError('bPEmploymentStartDate','Required parameter requestParameters.bPEmploymentStartDate was null or undefined when calling aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGet.');
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
            path: `/A_BPEmployment(BusinessPartner='{BusinessPartner}',BPEmploymentStartDate={BPEmploymentStartDate})`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"BPEmploymentStartDate"}}`, encodeURIComponent(String(requestParameters.bPEmploymentStartDate))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPEmploymentTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner employments of all the available records linked to business partners in the system.
     * Retrieves business partner employments.
     */
    async aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGet(requestParameters: ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPEmploymentType> {
        const response = await this.aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a business partner employment identified by business partner number and start date of the employment.
     * Updates a business partner employment.
     */
    async aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDatePatchRaw(requestParameters: ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDatePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDatePatch.');
        }

        if (requestParameters.bPEmploymentStartDate === null || requestParameters.bPEmploymentStartDate === undefined) {
            throw new runtime.RequiredError('bPEmploymentStartDate','Required parameter requestParameters.bPEmploymentStartDate was null or undefined when calling aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDatePatch.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeUpdate === null || requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeUpdate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPEmploymentTypeUpdate','Required parameter requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeUpdate was null or undefined when calling aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDatePatch.');
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
            path: `/A_BPEmployment(BusinessPartner='{BusinessPartner}',BPEmploymentStartDate={BPEmploymentStartDate})`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))).replace(`{${"BPEmploymentStartDate"}}`, encodeURIComponent(String(requestParameters.bPEmploymentStartDate))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPEmploymentTypeUpdateToJSON(requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a business partner employment identified by business partner number and start date of the employment.
     * Updates a business partner employment.
     */
    async aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDatePatch(requestParameters: ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDatePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDatePatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves business partner employments of all the available records linked to business partners in the system.
     * Retrieves business partner employments.
     */
    async aBPEmploymentGetRaw(requestParameters: ABPEmploymentGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPEmploymentType>> {
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
            path: `/A_BPEmployment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPEmploymentTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner employments of all the available records linked to business partners in the system.
     * Retrieves business partner employments.
     */
    async aBPEmploymentGet(requestParameters: ABPEmploymentGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPEmploymentType> {
        const response = await this.aBPEmploymentGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates business partner employments linked to an existing business partner.
     * Creates business partner employments.
     */
    async aBPEmploymentPostRaw(requestParameters: ABPEmploymentPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPEmploymentType>> {
        if (requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPEmploymentTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeCreate was null or undefined when calling aBPEmploymentPost.');
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
            path: `/A_BPEmployment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPEmploymentTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPEmploymentTypeFromJSON(jsonValue));
    }

    /**
     * Creates business partner employments linked to an existing business partner.
     * Creates business partner employments.
     */
    async aBPEmploymentPost(requestParameters: ABPEmploymentPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPEmploymentType> {
        const response = await this.aBPEmploymentPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves business partner employments of all the available records linked to business partners in the system.
     * Retrieves business partner employments.
     */
    async aBusinessPartnerBusinessPartnerToBPEmploymentGetRaw(requestParameters: ABusinessPartnerBusinessPartnerToBPEmploymentGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPEmploymentType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToBPEmploymentGet.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_BPEmployment`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPEmploymentTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner employments of all the available records linked to business partners in the system.
     * Retrieves business partner employments.
     */
    async aBusinessPartnerBusinessPartnerToBPEmploymentGet(requestParameters: ABusinessPartnerBusinessPartnerToBPEmploymentGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPEmploymentType> {
        const response = await this.aBusinessPartnerBusinessPartnerToBPEmploymentGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates business partner employments linked to an existing business partner.
     * Creates business partner employments.
     */
    async aBusinessPartnerBusinessPartnerToBPEmploymentPostRaw(requestParameters: ABusinessPartnerBusinessPartnerToBPEmploymentPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPEmploymentType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToBPEmploymentPost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPEmploymentTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeCreate was null or undefined when calling aBusinessPartnerBusinessPartnerToBPEmploymentPost.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_BPEmployment`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPEmploymentTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPEmploymentTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPEmploymentTypeFromJSON(jsonValue));
    }

    /**
     * Creates business partner employments linked to an existing business partner.
     * Creates business partner employments.
     */
    async aBusinessPartnerBusinessPartnerToBPEmploymentPost(requestParameters: ABusinessPartnerBusinessPartnerToBPEmploymentPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPEmploymentType> {
        const response = await this.aBusinessPartnerBusinessPartnerToBPEmploymentPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    BpEmploymentStartDate: 'BPEmploymentStartDate',
    BpEmploymentEndDate: 'BPEmploymentEndDate',
    BpEmploymentStatus: 'BPEmploymentStatus',
    BusPartEmplrIndstryCode: 'BusPartEmplrIndstryCode',
    BusinessPartnerEmployerName: 'BusinessPartnerEmployerName',
    BusinessPartnerOccupationGroup: 'BusinessPartnerOccupationGroup'
} as const;
export type ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetSelectEnum = typeof ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetSelectEnum[keyof typeof ABPEmploymentBusinessPartnerBusinessPartnerBPEmploymentStartDateBPEmploymentStartDateGetSelectEnum];
/**
 * @export
 */
export const ABPEmploymentGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    BpEmploymentStartDate: 'BPEmploymentStartDate',
    BpEmploymentStartDateDesc: 'BPEmploymentStartDate desc',
    BpEmploymentEndDate: 'BPEmploymentEndDate',
    BpEmploymentEndDateDesc: 'BPEmploymentEndDate desc',
    BpEmploymentStatus: 'BPEmploymentStatus',
    BpEmploymentStatusDesc: 'BPEmploymentStatus desc',
    BusPartEmplrIndstryCode: 'BusPartEmplrIndstryCode',
    BusPartEmplrIndstryCodeDesc: 'BusPartEmplrIndstryCode desc',
    BusinessPartnerEmployerName: 'BusinessPartnerEmployerName',
    BusinessPartnerEmployerNameDesc: 'BusinessPartnerEmployerName desc',
    BusinessPartnerOccupationGroup: 'BusinessPartnerOccupationGroup',
    BusinessPartnerOccupationGroupDesc: 'BusinessPartnerOccupationGroup desc'
} as const;
export type ABPEmploymentGetOrderbyEnum = typeof ABPEmploymentGetOrderbyEnum[keyof typeof ABPEmploymentGetOrderbyEnum];
/**
 * @export
 */
export const ABPEmploymentGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    BpEmploymentStartDate: 'BPEmploymentStartDate',
    BpEmploymentEndDate: 'BPEmploymentEndDate',
    BpEmploymentStatus: 'BPEmploymentStatus',
    BusPartEmplrIndstryCode: 'BusPartEmplrIndstryCode',
    BusinessPartnerEmployerName: 'BusinessPartnerEmployerName',
    BusinessPartnerOccupationGroup: 'BusinessPartnerOccupationGroup'
} as const;
export type ABPEmploymentGetSelectEnum = typeof ABPEmploymentGetSelectEnum[keyof typeof ABPEmploymentGetSelectEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToBPEmploymentGetOrderbyEnum = {
    BusinessPartner: 'BusinessPartner',
    BusinessPartnerDesc: 'BusinessPartner desc',
    BpEmploymentStartDate: 'BPEmploymentStartDate',
    BpEmploymentStartDateDesc: 'BPEmploymentStartDate desc',
    BpEmploymentEndDate: 'BPEmploymentEndDate',
    BpEmploymentEndDateDesc: 'BPEmploymentEndDate desc',
    BpEmploymentStatus: 'BPEmploymentStatus',
    BpEmploymentStatusDesc: 'BPEmploymentStatus desc',
    BusPartEmplrIndstryCode: 'BusPartEmplrIndstryCode',
    BusPartEmplrIndstryCodeDesc: 'BusPartEmplrIndstryCode desc',
    BusinessPartnerEmployerName: 'BusinessPartnerEmployerName',
    BusinessPartnerEmployerNameDesc: 'BusinessPartnerEmployerName desc',
    BusinessPartnerOccupationGroup: 'BusinessPartnerOccupationGroup',
    BusinessPartnerOccupationGroupDesc: 'BusinessPartnerOccupationGroup desc'
} as const;
export type ABusinessPartnerBusinessPartnerToBPEmploymentGetOrderbyEnum = typeof ABusinessPartnerBusinessPartnerToBPEmploymentGetOrderbyEnum[keyof typeof ABusinessPartnerBusinessPartnerToBPEmploymentGetOrderbyEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToBPEmploymentGetSelectEnum = {
    BusinessPartner: 'BusinessPartner',
    BpEmploymentStartDate: 'BPEmploymentStartDate',
    BpEmploymentEndDate: 'BPEmploymentEndDate',
    BpEmploymentStatus: 'BPEmploymentStatus',
    BusPartEmplrIndstryCode: 'BusPartEmplrIndstryCode',
    BusinessPartnerEmployerName: 'BusinessPartnerEmployerName',
    BusinessPartnerOccupationGroup: 'BusinessPartnerOccupationGroup'
} as const;
export type ABusinessPartnerBusinessPartnerToBPEmploymentGetSelectEnum = typeof ABusinessPartnerBusinessPartnerToBPEmploymentGetSelectEnum[keyof typeof ABusinessPartnerBusinessPartnerToBPEmploymentGetSelectEnum];
