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
  APIBUSINESSPARTNERABPRelationshipType,
  APIBUSINESSPARTNERABPRelationshipTypeCreate,
  APIBUSINESSPARTNERABPRelationshipTypeUpdate,
  CollectionOfABPRelationshipType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERABPRelationshipTypeFromJSON,
    APIBUSINESSPARTNERABPRelationshipTypeToJSON,
    APIBUSINESSPARTNERABPRelationshipTypeCreateFromJSON,
    APIBUSINESSPARTNERABPRelationshipTypeCreateToJSON,
    APIBUSINESSPARTNERABPRelationshipTypeUpdateFromJSON,
    APIBUSINESSPARTNERABPRelationshipTypeUpdateToJSON,
    CollectionOfABPRelationshipTypeFromJSON,
    CollectionOfABPRelationshipTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ABPRelationshipGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABPRelationshipGetOrderbyEnum>;
    $select?: Set<ABPRelationshipGetSelectEnum>;
}

export interface ABPRelationshipPostRequest {
    aPIBUSINESSPARTNERABPRelationshipTypeCreate: APIBUSINESSPARTNERABPRelationshipTypeCreate;
}

export interface ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDeleteRequest {
    relationshipNumber: string;
    businessPartner1: string;
    businessPartner2: string;
    validityEndDate: Date;
}

export interface ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetRequest {
    relationshipNumber: string;
    businessPartner1: string;
    businessPartner2: string;
    validityEndDate: Date;
    $select?: Set<ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetSelectEnum>;
}

export interface ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatchRequest {
    relationshipNumber: string;
    businessPartner1: string;
    businessPartner2: string;
    validityEndDate: Date;
    aPIBUSINESSPARTNERABPRelationshipTypeUpdate: APIBUSINESSPARTNERABPRelationshipTypeUpdate;
}

export interface ABusinessPartnerBusinessPartnerToBPRelationshipGetRequest {
    businessPartner: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ABusinessPartnerBusinessPartnerToBPRelationshipGetOrderbyEnum>;
    $select?: Set<ABusinessPartnerBusinessPartnerToBPRelationshipGetSelectEnum>;
}

export interface ABusinessPartnerBusinessPartnerToBPRelationshipPostRequest {
    businessPartner: string;
    aPIBUSINESSPARTNERABPRelationshipTypeCreate: APIBUSINESSPARTNERABPRelationshipTypeCreate;
}

/**
 * 
 */
export class BusinessPartnerRelationshipApi extends runtime.BaseAPI {

    /**
     * Retrieves business partner relationship data fields of all the available records in the system.
     * Retrieves business partner relationship data.
     */
    async aBPRelationshipGetRaw(requestParameters: ABPRelationshipGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPRelationshipType>> {
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
            path: `/A_BPRelationship`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPRelationshipTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner relationship data fields of all the available records in the system.
     * Retrieves business partner relationship data.
     */
    async aBPRelationshipGet(requestParameters: ABPRelationshipGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPRelationshipType> {
        const response = await this.aBPRelationshipGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a new business partner relationship to the business partner.
     * Creates new business partner relationship data.
     */
    async aBPRelationshipPostRaw(requestParameters: ABPRelationshipPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPRelationshipType>> {
        if (requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPRelationshipTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeCreate was null or undefined when calling aBPRelationshipPost.');
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
            path: `/A_BPRelationship`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPRelationshipTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPRelationshipTypeFromJSON(jsonValue));
    }

    /**
     * Adds a new business partner relationship to the business partner.
     * Creates new business partner relationship data.
     */
    async aBPRelationshipPost(requestParameters: ABPRelationshipPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPRelationshipType> {
        const response = await this.aBPRelationshipPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes business partner relationship data by RelationshipNumber, BusinessPartner1, BusinessPartner2 and ValidityEndDate
     * Removes the relationship assigned to the business partner by using the key fields.
     */
    async aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDeleteRaw(requestParameters: ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.relationshipNumber === null || requestParameters.relationshipNumber === undefined) {
            throw new runtime.RequiredError('relationshipNumber','Required parameter requestParameters.relationshipNumber was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDelete.');
        }

        if (requestParameters.businessPartner1 === null || requestParameters.businessPartner1 === undefined) {
            throw new runtime.RequiredError('businessPartner1','Required parameter requestParameters.businessPartner1 was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDelete.');
        }

        if (requestParameters.businessPartner2 === null || requestParameters.businessPartner2 === undefined) {
            throw new runtime.RequiredError('businessPartner2','Required parameter requestParameters.businessPartner2 was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDelete.');
        }

        if (requestParameters.validityEndDate === null || requestParameters.validityEndDate === undefined) {
            throw new runtime.RequiredError('validityEndDate','Required parameter requestParameters.validityEndDate was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDelete.');
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
            path: `/A_BPRelationship(RelationshipNumber='{RelationshipNumber}',BusinessPartner1='{BusinessPartner1}',BusinessPartner2='{BusinessPartner2}',ValidityEndDate={ValidityEndDate})`.replace(`{${"RelationshipNumber"}}`, encodeURIComponent(String(requestParameters.relationshipNumber))).replace(`{${"BusinessPartner1"}}`, encodeURIComponent(String(requestParameters.businessPartner1))).replace(`{${"BusinessPartner2"}}`, encodeURIComponent(String(requestParameters.businessPartner2))).replace(`{${"ValidityEndDate"}}`, encodeURIComponent(String(requestParameters.validityEndDate))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes business partner relationship data by RelationshipNumber, BusinessPartner1, BusinessPartner2 and ValidityEndDate
     * Removes the relationship assigned to the business partner by using the key fields.
     */
    async aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDelete(requestParameters: ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves business partner relationship data by RelationshipNumber, BusinessPartner1, BusinessPartner2 and ValidityEndDate.
     * Retrieves business partner relationship data by using key fields.
     */
    async aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetRaw(requestParameters: ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPRelationshipType>> {
        if (requestParameters.relationshipNumber === null || requestParameters.relationshipNumber === undefined) {
            throw new runtime.RequiredError('relationshipNumber','Required parameter requestParameters.relationshipNumber was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGet.');
        }

        if (requestParameters.businessPartner1 === null || requestParameters.businessPartner1 === undefined) {
            throw new runtime.RequiredError('businessPartner1','Required parameter requestParameters.businessPartner1 was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGet.');
        }

        if (requestParameters.businessPartner2 === null || requestParameters.businessPartner2 === undefined) {
            throw new runtime.RequiredError('businessPartner2','Required parameter requestParameters.businessPartner2 was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGet.');
        }

        if (requestParameters.validityEndDate === null || requestParameters.validityEndDate === undefined) {
            throw new runtime.RequiredError('validityEndDate','Required parameter requestParameters.validityEndDate was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGet.');
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
            path: `/A_BPRelationship(RelationshipNumber='{RelationshipNumber}',BusinessPartner1='{BusinessPartner1}',BusinessPartner2='{BusinessPartner2}',ValidityEndDate={ValidityEndDate})`.replace(`{${"RelationshipNumber"}}`, encodeURIComponent(String(requestParameters.relationshipNumber))).replace(`{${"BusinessPartner1"}}`, encodeURIComponent(String(requestParameters.businessPartner1))).replace(`{${"BusinessPartner2"}}`, encodeURIComponent(String(requestParameters.businessPartner2))).replace(`{${"ValidityEndDate"}}`, encodeURIComponent(String(requestParameters.validityEndDate))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPRelationshipTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner relationship data by RelationshipNumber, BusinessPartner1, BusinessPartner2 and ValidityEndDate.
     * Retrieves business partner relationship data by using key fields.
     */
    async aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGet(requestParameters: ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPRelationshipType> {
        const response = await this.aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates business partner relationship data by RelationshipNumber, BusinessPartner1, BusinessPartner2 and ValidityEndDate
     * Updates business partner relationship data.
     */
    async aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatchRaw(requestParameters: ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.relationshipNumber === null || requestParameters.relationshipNumber === undefined) {
            throw new runtime.RequiredError('relationshipNumber','Required parameter requestParameters.relationshipNumber was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatch.');
        }

        if (requestParameters.businessPartner1 === null || requestParameters.businessPartner1 === undefined) {
            throw new runtime.RequiredError('businessPartner1','Required parameter requestParameters.businessPartner1 was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatch.');
        }

        if (requestParameters.businessPartner2 === null || requestParameters.businessPartner2 === undefined) {
            throw new runtime.RequiredError('businessPartner2','Required parameter requestParameters.businessPartner2 was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatch.');
        }

        if (requestParameters.validityEndDate === null || requestParameters.validityEndDate === undefined) {
            throw new runtime.RequiredError('validityEndDate','Required parameter requestParameters.validityEndDate was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatch.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeUpdate === null || requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeUpdate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPRelationshipTypeUpdate','Required parameter requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeUpdate was null or undefined when calling aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatch.');
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
            path: `/A_BPRelationship(RelationshipNumber='{RelationshipNumber}',BusinessPartner1='{BusinessPartner1}',BusinessPartner2='{BusinessPartner2}',ValidityEndDate={ValidityEndDate})`.replace(`{${"RelationshipNumber"}}`, encodeURIComponent(String(requestParameters.relationshipNumber))).replace(`{${"BusinessPartner1"}}`, encodeURIComponent(String(requestParameters.businessPartner1))).replace(`{${"BusinessPartner2"}}`, encodeURIComponent(String(requestParameters.businessPartner2))).replace(`{${"ValidityEndDate"}}`, encodeURIComponent(String(requestParameters.validityEndDate))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPRelationshipTypeUpdateToJSON(requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates business partner relationship data by RelationshipNumber, BusinessPartner1, BusinessPartner2 and ValidityEndDate
     * Updates business partner relationship data.
     */
    async aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatch(requestParameters: ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aBPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDatePatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves business partner relationship data fields of all the available records in the system.
     * Retrieves business partner relationship data.
     */
    async aBusinessPartnerBusinessPartnerToBPRelationshipGetRaw(requestParameters: ABusinessPartnerBusinessPartnerToBPRelationshipGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfABPRelationshipType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToBPRelationshipGet.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_BPRelationship`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfABPRelationshipTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves business partner relationship data fields of all the available records in the system.
     * Retrieves business partner relationship data.
     */
    async aBusinessPartnerBusinessPartnerToBPRelationshipGet(requestParameters: ABusinessPartnerBusinessPartnerToBPRelationshipGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfABPRelationshipType> {
        const response = await this.aBusinessPartnerBusinessPartnerToBPRelationshipGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add new entity to related to_BPRelationship
     */
    async aBusinessPartnerBusinessPartnerToBPRelationshipPostRaw(requestParameters: ABusinessPartnerBusinessPartnerToBPRelationshipPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERABPRelationshipType>> {
        if (requestParameters.businessPartner === null || requestParameters.businessPartner === undefined) {
            throw new runtime.RequiredError('businessPartner','Required parameter requestParameters.businessPartner was null or undefined when calling aBusinessPartnerBusinessPartnerToBPRelationshipPost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeCreate === null || requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERABPRelationshipTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeCreate was null or undefined when calling aBusinessPartnerBusinessPartnerToBPRelationshipPost.');
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
            path: `/A_BusinessPartner('{BusinessPartner}')/to_BPRelationship`.replace(`{${"BusinessPartner"}}`, encodeURIComponent(String(requestParameters.businessPartner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERABPRelationshipTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERABPRelationshipTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERABPRelationshipTypeFromJSON(jsonValue));
    }

    /**
     * Add new entity to related to_BPRelationship
     */
    async aBusinessPartnerBusinessPartnerToBPRelationshipPost(requestParameters: ABusinessPartnerBusinessPartnerToBPRelationshipPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERABPRelationshipType> {
        const response = await this.aBusinessPartnerBusinessPartnerToBPRelationshipPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ABPRelationshipGetOrderbyEnum = {
    RelationshipNumber: 'RelationshipNumber',
    RelationshipNumberDesc: 'RelationshipNumber desc',
    BusinessPartner1: 'BusinessPartner1',
    BusinessPartner1Desc: 'BusinessPartner1 desc',
    BusinessPartner2: 'BusinessPartner2',
    BusinessPartner2Desc: 'BusinessPartner2 desc',
    ValidityEndDate: 'ValidityEndDate',
    ValidityEndDateDesc: 'ValidityEndDate desc',
    ValidityStartDate: 'ValidityStartDate',
    ValidityStartDateDesc: 'ValidityStartDate desc',
    IsStandardRelationship: 'IsStandardRelationship',
    IsStandardRelationshipDesc: 'IsStandardRelationship desc',
    RelationshipCategory: 'RelationshipCategory',
    RelationshipCategoryDesc: 'RelationshipCategory desc',
    BpRelationshipType: 'BPRelationshipType',
    BpRelationshipTypeDesc: 'BPRelationshipType desc',
    CreatedByUser: 'CreatedByUser',
    CreatedByUserDesc: 'CreatedByUser desc',
    CreationDate: 'CreationDate',
    CreationDateDesc: 'CreationDate desc',
    CreationTime: 'CreationTime',
    CreationTimeDesc: 'CreationTime desc',
    LastChangedByUser: 'LastChangedByUser',
    LastChangedByUserDesc: 'LastChangedByUser desc',
    LastChangeDate: 'LastChangeDate',
    LastChangeDateDesc: 'LastChangeDate desc',
    LastChangeTime: 'LastChangeTime',
    LastChangeTimeDesc: 'LastChangeTime desc'
} as const;
export type ABPRelationshipGetOrderbyEnum = typeof ABPRelationshipGetOrderbyEnum[keyof typeof ABPRelationshipGetOrderbyEnum];
/**
 * @export
 */
export const ABPRelationshipGetSelectEnum = {
    RelationshipNumber: 'RelationshipNumber',
    BusinessPartner1: 'BusinessPartner1',
    BusinessPartner2: 'BusinessPartner2',
    ValidityEndDate: 'ValidityEndDate',
    ValidityStartDate: 'ValidityStartDate',
    IsStandardRelationship: 'IsStandardRelationship',
    RelationshipCategory: 'RelationshipCategory',
    BpRelationshipType: 'BPRelationshipType',
    CreatedByUser: 'CreatedByUser',
    CreationDate: 'CreationDate',
    CreationTime: 'CreationTime',
    LastChangedByUser: 'LastChangedByUser',
    LastChangeDate: 'LastChangeDate',
    LastChangeTime: 'LastChangeTime'
} as const;
export type ABPRelationshipGetSelectEnum = typeof ABPRelationshipGetSelectEnum[keyof typeof ABPRelationshipGetSelectEnum];
/**
 * @export
 */
export const ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetSelectEnum = {
    RelationshipNumber: 'RelationshipNumber',
    BusinessPartner1: 'BusinessPartner1',
    BusinessPartner2: 'BusinessPartner2',
    ValidityEndDate: 'ValidityEndDate',
    ValidityStartDate: 'ValidityStartDate',
    IsStandardRelationship: 'IsStandardRelationship',
    RelationshipCategory: 'RelationshipCategory',
    BpRelationshipType: 'BPRelationshipType',
    CreatedByUser: 'CreatedByUser',
    CreationDate: 'CreationDate',
    CreationTime: 'CreationTime',
    LastChangedByUser: 'LastChangedByUser',
    LastChangeDate: 'LastChangeDate',
    LastChangeTime: 'LastChangeTime'
} as const;
export type ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetSelectEnum = typeof ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetSelectEnum[keyof typeof ABPRelationshipRelationshipNumberRelationshipNumberBusinessPartner1BusinessPartner1BusinessPartner2BusinessPartner2ValidityEndDateValidityEndDateGetSelectEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToBPRelationshipGetOrderbyEnum = {
    RelationshipNumber: 'RelationshipNumber',
    RelationshipNumberDesc: 'RelationshipNumber desc',
    BusinessPartner1: 'BusinessPartner1',
    BusinessPartner1Desc: 'BusinessPartner1 desc',
    BusinessPartner2: 'BusinessPartner2',
    BusinessPartner2Desc: 'BusinessPartner2 desc',
    ValidityEndDate: 'ValidityEndDate',
    ValidityEndDateDesc: 'ValidityEndDate desc',
    ValidityStartDate: 'ValidityStartDate',
    ValidityStartDateDesc: 'ValidityStartDate desc',
    IsStandardRelationship: 'IsStandardRelationship',
    IsStandardRelationshipDesc: 'IsStandardRelationship desc',
    RelationshipCategory: 'RelationshipCategory',
    RelationshipCategoryDesc: 'RelationshipCategory desc',
    BpRelationshipType: 'BPRelationshipType',
    BpRelationshipTypeDesc: 'BPRelationshipType desc',
    CreatedByUser: 'CreatedByUser',
    CreatedByUserDesc: 'CreatedByUser desc',
    CreationDate: 'CreationDate',
    CreationDateDesc: 'CreationDate desc',
    CreationTime: 'CreationTime',
    CreationTimeDesc: 'CreationTime desc',
    LastChangedByUser: 'LastChangedByUser',
    LastChangedByUserDesc: 'LastChangedByUser desc',
    LastChangeDate: 'LastChangeDate',
    LastChangeDateDesc: 'LastChangeDate desc',
    LastChangeTime: 'LastChangeTime',
    LastChangeTimeDesc: 'LastChangeTime desc'
} as const;
export type ABusinessPartnerBusinessPartnerToBPRelationshipGetOrderbyEnum = typeof ABusinessPartnerBusinessPartnerToBPRelationshipGetOrderbyEnum[keyof typeof ABusinessPartnerBusinessPartnerToBPRelationshipGetOrderbyEnum];
/**
 * @export
 */
export const ABusinessPartnerBusinessPartnerToBPRelationshipGetSelectEnum = {
    RelationshipNumber: 'RelationshipNumber',
    BusinessPartner1: 'BusinessPartner1',
    BusinessPartner2: 'BusinessPartner2',
    ValidityEndDate: 'ValidityEndDate',
    ValidityStartDate: 'ValidityStartDate',
    IsStandardRelationship: 'IsStandardRelationship',
    RelationshipCategory: 'RelationshipCategory',
    BpRelationshipType: 'BPRelationshipType',
    CreatedByUser: 'CreatedByUser',
    CreationDate: 'CreationDate',
    CreationTime: 'CreationTime',
    LastChangedByUser: 'LastChangedByUser',
    LastChangeDate: 'LastChangeDate',
    LastChangeTime: 'LastChangeTime'
} as const;
export type ABusinessPartnerBusinessPartnerToBPRelationshipGetSelectEnum = typeof ABusinessPartnerBusinessPartnerToBPRelationshipGetSelectEnum[keyof typeof ABusinessPartnerBusinessPartnerToBPRelationshipGetSelectEnum];
