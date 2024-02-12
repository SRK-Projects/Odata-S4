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
  APIBUSINESSPARTNERACustomerTaxGroupingType,
  APIBUSINESSPARTNERACustomerTaxGroupingTypeUpdate,
  CollectionOfACustomerTaxGroupingType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERACustomerTaxGroupingTypeFromJSON,
    APIBUSINESSPARTNERACustomerTaxGroupingTypeToJSON,
    APIBUSINESSPARTNERACustomerTaxGroupingTypeUpdateFromJSON,
    APIBUSINESSPARTNERACustomerTaxGroupingTypeUpdateToJSON,
    CollectionOfACustomerTaxGroupingTypeFromJSON,
    CollectionOfACustomerTaxGroupingTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ACustomerCustomerToCustomerTaxGroupingGetRequest {
    customer: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ACustomerCustomerToCustomerTaxGroupingGetOrderbyEnum>;
    $select?: Set<ACustomerCustomerToCustomerTaxGroupingGetSelectEnum>;
}

export interface ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeDeleteRequest {
    customer: string;
    customerTaxGroupingCode: string;
}

export interface ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetRequest {
    customer: string;
    customerTaxGroupingCode: string;
    $select?: Set<ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetSelectEnum>;
}

export interface ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodePatchRequest {
    customer: string;
    customerTaxGroupingCode: string;
    aPIBUSINESSPARTNERACustomerTaxGroupingTypeUpdate: APIBUSINESSPARTNERACustomerTaxGroupingTypeUpdate;
}

export interface ACustomerTaxGroupingGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ACustomerTaxGroupingGetOrderbyEnum>;
    $select?: Set<ACustomerTaxGroupingGetSelectEnum>;
}

/**
 * 
 */
export class CustomerTaxGroupingApi extends runtime.BaseAPI {

    /**
     * Retrieves all the customer tax grouping data attached to a customer in the system.
     * Retrieves customer tax grouping data.
     */
    async aCustomerCustomerToCustomerTaxGroupingGetRaw(requestParameters: ACustomerCustomerToCustomerTaxGroupingGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfACustomerTaxGroupingType>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerCustomerToCustomerTaxGroupingGet.');
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
            path: `/A_Customer('{Customer}')/to_CustomerTaxGrouping`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfACustomerTaxGroupingTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all the customer tax grouping data attached to a customer in the system.
     * Retrieves customer tax grouping data.
     */
    async aCustomerCustomerToCustomerTaxGroupingGet(requestParameters: ACustomerCustomerToCustomerTaxGroupingGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfACustomerTaxGroupingType> {
        const response = await this.aCustomerCustomerToCustomerTaxGroupingGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes customer tax grouping records by Customer and CustomerTaxGroupingCode.
     * Deletes customer tax grouping records by using the key fields.
     */
    async aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeDeleteRaw(requestParameters: ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeDelete.');
        }

        if (requestParameters.customerTaxGroupingCode === null || requestParameters.customerTaxGroupingCode === undefined) {
            throw new runtime.RequiredError('customerTaxGroupingCode','Required parameter requestParameters.customerTaxGroupingCode was null or undefined when calling aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeDelete.');
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
            path: `/A_CustomerTaxGrouping(Customer='{Customer}',CustomerTaxGroupingCode='{CustomerTaxGroupingCode}')`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"CustomerTaxGroupingCode"}}`, encodeURIComponent(String(requestParameters.customerTaxGroupingCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes customer tax grouping records by Customer and CustomerTaxGroupingCode.
     * Deletes customer tax grouping records by using the key fields.
     */
    async aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeDelete(requestParameters: ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves customer tax grouping records by using Customer and CustomerTaxGroupingCode.
     * Retrieves customer tax grouping records using the key fields.
     */
    async aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetRaw(requestParameters: ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERACustomerTaxGroupingType>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGet.');
        }

        if (requestParameters.customerTaxGroupingCode === null || requestParameters.customerTaxGroupingCode === undefined) {
            throw new runtime.RequiredError('customerTaxGroupingCode','Required parameter requestParameters.customerTaxGroupingCode was null or undefined when calling aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGet.');
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
            path: `/A_CustomerTaxGrouping(Customer='{Customer}',CustomerTaxGroupingCode='{CustomerTaxGroupingCode}')`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"CustomerTaxGroupingCode"}}`, encodeURIComponent(String(requestParameters.customerTaxGroupingCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERACustomerTaxGroupingTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves customer tax grouping records by using Customer and CustomerTaxGroupingCode.
     * Retrieves customer tax grouping records using the key fields.
     */
    async aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGet(requestParameters: ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERACustomerTaxGroupingType> {
        const response = await this.aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates customer tax grouping records by Customer and CustomerTaxGroupingCode.
     * Updates customer tax grouping records using the key fields.
     */
    async aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodePatchRaw(requestParameters: ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodePatch.');
        }

        if (requestParameters.customerTaxGroupingCode === null || requestParameters.customerTaxGroupingCode === undefined) {
            throw new runtime.RequiredError('customerTaxGroupingCode','Required parameter requestParameters.customerTaxGroupingCode was null or undefined when calling aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodePatch.');
        }

        if (requestParameters.aPIBUSINESSPARTNERACustomerTaxGroupingTypeUpdate === null || requestParameters.aPIBUSINESSPARTNERACustomerTaxGroupingTypeUpdate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERACustomerTaxGroupingTypeUpdate','Required parameter requestParameters.aPIBUSINESSPARTNERACustomerTaxGroupingTypeUpdate was null or undefined when calling aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodePatch.');
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
            path: `/A_CustomerTaxGrouping(Customer='{Customer}',CustomerTaxGroupingCode='{CustomerTaxGroupingCode}')`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"CustomerTaxGroupingCode"}}`, encodeURIComponent(String(requestParameters.customerTaxGroupingCode))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERACustomerTaxGroupingTypeUpdateToJSON(requestParameters.aPIBUSINESSPARTNERACustomerTaxGroupingTypeUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates customer tax grouping records by Customer and CustomerTaxGroupingCode.
     * Updates customer tax grouping records using the key fields.
     */
    async aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodePatch(requestParameters: ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aCustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodePatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves all the customer tax grouping data attached to a customer in the system.
     * Retrieves customer tax grouping data.
     */
    async aCustomerTaxGroupingGetRaw(requestParameters: ACustomerTaxGroupingGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfACustomerTaxGroupingType>> {
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
            path: `/A_CustomerTaxGrouping`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfACustomerTaxGroupingTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all the customer tax grouping data attached to a customer in the system.
     * Retrieves customer tax grouping data.
     */
    async aCustomerTaxGroupingGet(requestParameters: ACustomerTaxGroupingGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfACustomerTaxGroupingType> {
        const response = await this.aCustomerTaxGroupingGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ACustomerCustomerToCustomerTaxGroupingGetOrderbyEnum = {
    Customer: 'Customer',
    CustomerDesc: 'Customer desc',
    CustomerTaxGroupingCode: 'CustomerTaxGroupingCode',
    CustomerTaxGroupingCodeDesc: 'CustomerTaxGroupingCode desc',
    CustTaxGrpExemptionCertificate: 'CustTaxGrpExemptionCertificate',
    CustTaxGrpExemptionCertificateDesc: 'CustTaxGrpExemptionCertificate desc',
    CustTaxGroupExemptionRate: 'CustTaxGroupExemptionRate',
    CustTaxGroupExemptionRateDesc: 'CustTaxGroupExemptionRate desc',
    CustTaxGroupExemptionStartDate: 'CustTaxGroupExemptionStartDate',
    CustTaxGroupExemptionStartDateDesc: 'CustTaxGroupExemptionStartDate desc',
    CustTaxGroupExemptionEndDate: 'CustTaxGroupExemptionEndDate',
    CustTaxGroupExemptionEndDateDesc: 'CustTaxGroupExemptionEndDate desc',
    CustTaxGroupSubjectedStartDate: 'CustTaxGroupSubjectedStartDate',
    CustTaxGroupSubjectedStartDateDesc: 'CustTaxGroupSubjectedStartDate desc',
    CustTaxGroupSubjectedEndDate: 'CustTaxGroupSubjectedEndDate',
    CustTaxGroupSubjectedEndDateDesc: 'CustTaxGroupSubjectedEndDate desc'
} as const;
export type ACustomerCustomerToCustomerTaxGroupingGetOrderbyEnum = typeof ACustomerCustomerToCustomerTaxGroupingGetOrderbyEnum[keyof typeof ACustomerCustomerToCustomerTaxGroupingGetOrderbyEnum];
/**
 * @export
 */
export const ACustomerCustomerToCustomerTaxGroupingGetSelectEnum = {
    Customer: 'Customer',
    CustomerTaxGroupingCode: 'CustomerTaxGroupingCode',
    CustTaxGrpExemptionCertificate: 'CustTaxGrpExemptionCertificate',
    CustTaxGroupExemptionRate: 'CustTaxGroupExemptionRate',
    CustTaxGroupExemptionStartDate: 'CustTaxGroupExemptionStartDate',
    CustTaxGroupExemptionEndDate: 'CustTaxGroupExemptionEndDate',
    CustTaxGroupSubjectedStartDate: 'CustTaxGroupSubjectedStartDate',
    CustTaxGroupSubjectedEndDate: 'CustTaxGroupSubjectedEndDate'
} as const;
export type ACustomerCustomerToCustomerTaxGroupingGetSelectEnum = typeof ACustomerCustomerToCustomerTaxGroupingGetSelectEnum[keyof typeof ACustomerCustomerToCustomerTaxGroupingGetSelectEnum];
/**
 * @export
 */
export const ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetSelectEnum = {
    Customer: 'Customer',
    CustomerTaxGroupingCode: 'CustomerTaxGroupingCode',
    CustTaxGrpExemptionCertificate: 'CustTaxGrpExemptionCertificate',
    CustTaxGroupExemptionRate: 'CustTaxGroupExemptionRate',
    CustTaxGroupExemptionStartDate: 'CustTaxGroupExemptionStartDate',
    CustTaxGroupExemptionEndDate: 'CustTaxGroupExemptionEndDate',
    CustTaxGroupSubjectedStartDate: 'CustTaxGroupSubjectedStartDate',
    CustTaxGroupSubjectedEndDate: 'CustTaxGroupSubjectedEndDate'
} as const;
export type ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetSelectEnum = typeof ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetSelectEnum[keyof typeof ACustomerTaxGroupingCustomerCustomerCustomerTaxGroupingCodeCustomerTaxGroupingCodeGetSelectEnum];
/**
 * @export
 */
export const ACustomerTaxGroupingGetOrderbyEnum = {
    Customer: 'Customer',
    CustomerDesc: 'Customer desc',
    CustomerTaxGroupingCode: 'CustomerTaxGroupingCode',
    CustomerTaxGroupingCodeDesc: 'CustomerTaxGroupingCode desc',
    CustTaxGrpExemptionCertificate: 'CustTaxGrpExemptionCertificate',
    CustTaxGrpExemptionCertificateDesc: 'CustTaxGrpExemptionCertificate desc',
    CustTaxGroupExemptionRate: 'CustTaxGroupExemptionRate',
    CustTaxGroupExemptionRateDesc: 'CustTaxGroupExemptionRate desc',
    CustTaxGroupExemptionStartDate: 'CustTaxGroupExemptionStartDate',
    CustTaxGroupExemptionStartDateDesc: 'CustTaxGroupExemptionStartDate desc',
    CustTaxGroupExemptionEndDate: 'CustTaxGroupExemptionEndDate',
    CustTaxGroupExemptionEndDateDesc: 'CustTaxGroupExemptionEndDate desc',
    CustTaxGroupSubjectedStartDate: 'CustTaxGroupSubjectedStartDate',
    CustTaxGroupSubjectedStartDateDesc: 'CustTaxGroupSubjectedStartDate desc',
    CustTaxGroupSubjectedEndDate: 'CustTaxGroupSubjectedEndDate',
    CustTaxGroupSubjectedEndDateDesc: 'CustTaxGroupSubjectedEndDate desc'
} as const;
export type ACustomerTaxGroupingGetOrderbyEnum = typeof ACustomerTaxGroupingGetOrderbyEnum[keyof typeof ACustomerTaxGroupingGetOrderbyEnum];
/**
 * @export
 */
export const ACustomerTaxGroupingGetSelectEnum = {
    Customer: 'Customer',
    CustomerTaxGroupingCode: 'CustomerTaxGroupingCode',
    CustTaxGrpExemptionCertificate: 'CustTaxGrpExemptionCertificate',
    CustTaxGroupExemptionRate: 'CustTaxGroupExemptionRate',
    CustTaxGroupExemptionStartDate: 'CustTaxGroupExemptionStartDate',
    CustTaxGroupExemptionEndDate: 'CustTaxGroupExemptionEndDate',
    CustTaxGroupSubjectedStartDate: 'CustTaxGroupSubjectedStartDate',
    CustTaxGroupSubjectedEndDate: 'CustTaxGroupSubjectedEndDate'
} as const;
export type ACustomerTaxGroupingGetSelectEnum = typeof ACustomerTaxGroupingGetSelectEnum[keyof typeof ACustomerTaxGroupingGetSelectEnum];