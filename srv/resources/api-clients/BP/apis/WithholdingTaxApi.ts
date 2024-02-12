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
  APIBUSINESSPARTNERACustomerWithHoldingTaxType,
  APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate,
  APIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdate,
  CollectionOfACustomerWithHoldingTaxType,
  ModelError,
} from '../models/index';
import {
    APIBUSINESSPARTNERACustomerWithHoldingTaxTypeFromJSON,
    APIBUSINESSPARTNERACustomerWithHoldingTaxTypeToJSON,
    APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreateFromJSON,
    APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreateToJSON,
    APIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdateFromJSON,
    APIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdateToJSON,
    CollectionOfACustomerWithHoldingTaxTypeFromJSON,
    CollectionOfACustomerWithHoldingTaxTypeToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models/index';

export interface ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetRequest {
    customer: string;
    companyCode: string;
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetOrderbyEnum>;
    $select?: Set<ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetSelectEnum>;
}

export interface ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxPostRequest {
    customer: string;
    companyCode: string;
    aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate: APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate;
}

export interface ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeDeleteRequest {
    customer: string;
    companyCode: string;
    withholdingTaxType: string;
}

export interface ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetRequest {
    customer: string;
    companyCode: string;
    withholdingTaxType: string;
    $select?: Set<ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetSelectEnum>;
}

export interface ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatchRequest {
    customer: string;
    companyCode: string;
    withholdingTaxType: string;
    aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdate: APIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdate;
}

export interface ACustomerWithHoldingTaxGetRequest {
    $top?: number;
    $skip?: number;
    $filter?: string;
    $count?: boolean;
    $orderby?: Set<ACustomerWithHoldingTaxGetOrderbyEnum>;
    $select?: Set<ACustomerWithHoldingTaxGetSelectEnum>;
}

export interface ACustomerWithHoldingTaxPostRequest {
    aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate: APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate;
}

/**
 * 
 */
export class WithholdingTaxApi extends runtime.BaseAPI {

    /**
     * Retrieves all the withholding tax records attached to customer company in the system.
     * Retrieves customer withholding tax records attached to customer company.
     */
    async aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetRaw(requestParameters: ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfACustomerWithHoldingTaxType>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGet.');
        }

        if (requestParameters.companyCode === null || requestParameters.companyCode === undefined) {
            throw new runtime.RequiredError('companyCode','Required parameter requestParameters.companyCode was null or undefined when calling aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGet.');
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
            path: `/A_CustomerCompany(Customer='{Customer}',CompanyCode='{CompanyCode}')/to_WithHoldingTax`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"CompanyCode"}}`, encodeURIComponent(String(requestParameters.companyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfACustomerWithHoldingTaxTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all the withholding tax records attached to customer company in the system.
     * Retrieves customer withholding tax records attached to customer company.
     */
    async aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGet(requestParameters: ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfACustomerWithHoldingTaxType> {
        const response = await this.aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates customer withholding tax record linked to customer company.
     * Creates new customer withholding tax record.
     */
    async aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxPostRaw(requestParameters: ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERACustomerWithHoldingTaxType>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxPost.');
        }

        if (requestParameters.companyCode === null || requestParameters.companyCode === undefined) {
            throw new runtime.RequiredError('companyCode','Required parameter requestParameters.companyCode was null or undefined when calling aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxPost.');
        }

        if (requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate === null || requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate was null or undefined when calling aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxPost.');
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
            path: `/A_CustomerCompany(Customer='{Customer}',CompanyCode='{CompanyCode}')/to_WithHoldingTax`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"CompanyCode"}}`, encodeURIComponent(String(requestParameters.companyCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERACustomerWithHoldingTaxTypeFromJSON(jsonValue));
    }

    /**
     * Creates customer withholding tax record linked to customer company.
     * Creates new customer withholding tax record.
     */
    async aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxPost(requestParameters: ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERACustomerWithHoldingTaxType> {
        const response = await this.aCustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes customer withholding tax record linked to customer company by fields such as Customer, CompanyCode, and WithholdingTaxType
     * Deletes customer withholding tax record linked to customer company by customer, customer company, withholding tax.
     */
    async aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeDeleteRaw(requestParameters: ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeDelete.');
        }

        if (requestParameters.companyCode === null || requestParameters.companyCode === undefined) {
            throw new runtime.RequiredError('companyCode','Required parameter requestParameters.companyCode was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeDelete.');
        }

        if (requestParameters.withholdingTaxType === null || requestParameters.withholdingTaxType === undefined) {
            throw new runtime.RequiredError('withholdingTaxType','Required parameter requestParameters.withholdingTaxType was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeDelete.');
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
            path: `/A_CustomerWithHoldingTax(Customer='{Customer}',CompanyCode='{CompanyCode}',WithholdingTaxType='{WithholdingTaxType}')`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"CompanyCode"}}`, encodeURIComponent(String(requestParameters.companyCode))).replace(`{${"WithholdingTaxType"}}`, encodeURIComponent(String(requestParameters.withholdingTaxType))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes customer withholding tax record linked to customer company by fields such as Customer, CompanyCode, and WithholdingTaxType
     * Deletes customer withholding tax record linked to customer company by customer, customer company, withholding tax.
     */
    async aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeDelete(requestParameters: ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves customer withholding tax records by customer, company code, and withholding tax type.
     * Retrieves customer withholding tax records by using key fields.
     */
    async aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetRaw(requestParameters: ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERACustomerWithHoldingTaxType>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGet.');
        }

        if (requestParameters.companyCode === null || requestParameters.companyCode === undefined) {
            throw new runtime.RequiredError('companyCode','Required parameter requestParameters.companyCode was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGet.');
        }

        if (requestParameters.withholdingTaxType === null || requestParameters.withholdingTaxType === undefined) {
            throw new runtime.RequiredError('withholdingTaxType','Required parameter requestParameters.withholdingTaxType was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGet.');
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
            path: `/A_CustomerWithHoldingTax(Customer='{Customer}',CompanyCode='{CompanyCode}',WithholdingTaxType='{WithholdingTaxType}')`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"CompanyCode"}}`, encodeURIComponent(String(requestParameters.companyCode))).replace(`{${"WithholdingTaxType"}}`, encodeURIComponent(String(requestParameters.withholdingTaxType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERACustomerWithHoldingTaxTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves customer withholding tax records by customer, company code, and withholding tax type.
     * Retrieves customer withholding tax records by using key fields.
     */
    async aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGet(requestParameters: ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERACustomerWithHoldingTaxType> {
        const response = await this.aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates customer withholding tax record linked to customer company by fields such as Customer, CompanyCode and WithholdingTaxType
     * Updates customer company withholding tax record.
     */
    async aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatchRaw(requestParameters: ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatch.');
        }

        if (requestParameters.companyCode === null || requestParameters.companyCode === undefined) {
            throw new runtime.RequiredError('companyCode','Required parameter requestParameters.companyCode was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatch.');
        }

        if (requestParameters.withholdingTaxType === null || requestParameters.withholdingTaxType === undefined) {
            throw new runtime.RequiredError('withholdingTaxType','Required parameter requestParameters.withholdingTaxType was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatch.');
        }

        if (requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdate === null || requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdate','Required parameter requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdate was null or undefined when calling aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatch.');
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
            path: `/A_CustomerWithHoldingTax(Customer='{Customer}',CompanyCode='{CompanyCode}',WithholdingTaxType='{WithholdingTaxType}')`.replace(`{${"Customer"}}`, encodeURIComponent(String(requestParameters.customer))).replace(`{${"CompanyCode"}}`, encodeURIComponent(String(requestParameters.companyCode))).replace(`{${"WithholdingTaxType"}}`, encodeURIComponent(String(requestParameters.withholdingTaxType))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdateToJSON(requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates customer withholding tax record linked to customer company by fields such as Customer, CompanyCode and WithholdingTaxType
     * Updates customer company withholding tax record.
     */
    async aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatch(requestParameters: ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aCustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypePatchRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves all the withholding tax records attached to customer company in the system.
     * Retrieves customer withholding tax records attached to customer company.
     */
    async aCustomerWithHoldingTaxGetRaw(requestParameters: ACustomerWithHoldingTaxGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionOfACustomerWithHoldingTaxType>> {
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
            path: `/A_CustomerWithHoldingTax`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionOfACustomerWithHoldingTaxTypeFromJSON(jsonValue));
    }

    /**
     * Retrieves all the withholding tax records attached to customer company in the system.
     * Retrieves customer withholding tax records attached to customer company.
     */
    async aCustomerWithHoldingTaxGet(requestParameters: ACustomerWithHoldingTaxGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionOfACustomerWithHoldingTaxType> {
        const response = await this.aCustomerWithHoldingTaxGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates customer withholding tax record linked to customer company.
     * Creates new customer withholding tax record.
     */
    async aCustomerWithHoldingTaxPostRaw(requestParameters: ACustomerWithHoldingTaxPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIBUSINESSPARTNERACustomerWithHoldingTaxType>> {
        if (requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate === null || requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate === undefined) {
            throw new runtime.RequiredError('aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate','Required parameter requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate was null or undefined when calling aCustomerWithHoldingTaxPost.');
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
            path: `/A_CustomerWithHoldingTax`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: APIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreateToJSON(requestParameters.aPIBUSINESSPARTNERACustomerWithHoldingTaxTypeCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIBUSINESSPARTNERACustomerWithHoldingTaxTypeFromJSON(jsonValue));
    }

    /**
     * Creates customer withholding tax record linked to customer company.
     * Creates new customer withholding tax record.
     */
    async aCustomerWithHoldingTaxPost(requestParameters: ACustomerWithHoldingTaxPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIBUSINESSPARTNERACustomerWithHoldingTaxType> {
        const response = await this.aCustomerWithHoldingTaxPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetOrderbyEnum = {
    Customer: 'Customer',
    CustomerDesc: 'Customer desc',
    CompanyCode: 'CompanyCode',
    CompanyCodeDesc: 'CompanyCode desc',
    WithholdingTaxType: 'WithholdingTaxType',
    WithholdingTaxTypeDesc: 'WithholdingTaxType desc',
    WithholdingTaxCode: 'WithholdingTaxCode',
    WithholdingTaxCodeDesc: 'WithholdingTaxCode desc',
    WithholdingTaxAgent: 'WithholdingTaxAgent',
    WithholdingTaxAgentDesc: 'WithholdingTaxAgent desc',
    ObligationDateBegin: 'ObligationDateBegin',
    ObligationDateBeginDesc: 'ObligationDateBegin desc',
    ObligationDateEnd: 'ObligationDateEnd',
    ObligationDateEndDesc: 'ObligationDateEnd desc',
    WithholdingTaxNumber: 'WithholdingTaxNumber',
    WithholdingTaxNumberDesc: 'WithholdingTaxNumber desc',
    WithholdingTaxCertificate: 'WithholdingTaxCertificate',
    WithholdingTaxCertificateDesc: 'WithholdingTaxCertificate desc',
    WithholdingTaxExmptPercent: 'WithholdingTaxExmptPercent',
    WithholdingTaxExmptPercentDesc: 'WithholdingTaxExmptPercent desc',
    ExemptionDateBegin: 'ExemptionDateBegin',
    ExemptionDateBeginDesc: 'ExemptionDateBegin desc',
    ExemptionDateEnd: 'ExemptionDateEnd',
    ExemptionDateEndDesc: 'ExemptionDateEnd desc',
    ExemptionReason: 'ExemptionReason',
    ExemptionReasonDesc: 'ExemptionReason desc',
    AuthorizationGroup: 'AuthorizationGroup',
    AuthorizationGroupDesc: 'AuthorizationGroup desc'
} as const;
export type ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetOrderbyEnum = typeof ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetOrderbyEnum[keyof typeof ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetOrderbyEnum];
/**
 * @export
 */
export const ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetSelectEnum = {
    Customer: 'Customer',
    CompanyCode: 'CompanyCode',
    WithholdingTaxType: 'WithholdingTaxType',
    WithholdingTaxCode: 'WithholdingTaxCode',
    WithholdingTaxAgent: 'WithholdingTaxAgent',
    ObligationDateBegin: 'ObligationDateBegin',
    ObligationDateEnd: 'ObligationDateEnd',
    WithholdingTaxNumber: 'WithholdingTaxNumber',
    WithholdingTaxCertificate: 'WithholdingTaxCertificate',
    WithholdingTaxExmptPercent: 'WithholdingTaxExmptPercent',
    ExemptionDateBegin: 'ExemptionDateBegin',
    ExemptionDateEnd: 'ExemptionDateEnd',
    ExemptionReason: 'ExemptionReason',
    AuthorizationGroup: 'AuthorizationGroup'
} as const;
export type ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetSelectEnum = typeof ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetSelectEnum[keyof typeof ACustomerCompanyCustomerCustomerCompanyCodeCompanyCodeToWithHoldingTaxGetSelectEnum];
/**
 * @export
 */
export const ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetSelectEnum = {
    Customer: 'Customer',
    CompanyCode: 'CompanyCode',
    WithholdingTaxType: 'WithholdingTaxType',
    WithholdingTaxCode: 'WithholdingTaxCode',
    WithholdingTaxAgent: 'WithholdingTaxAgent',
    ObligationDateBegin: 'ObligationDateBegin',
    ObligationDateEnd: 'ObligationDateEnd',
    WithholdingTaxNumber: 'WithholdingTaxNumber',
    WithholdingTaxCertificate: 'WithholdingTaxCertificate',
    WithholdingTaxExmptPercent: 'WithholdingTaxExmptPercent',
    ExemptionDateBegin: 'ExemptionDateBegin',
    ExemptionDateEnd: 'ExemptionDateEnd',
    ExemptionReason: 'ExemptionReason',
    AuthorizationGroup: 'AuthorizationGroup'
} as const;
export type ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetSelectEnum = typeof ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetSelectEnum[keyof typeof ACustomerWithHoldingTaxCustomerCustomerCompanyCodeCompanyCodeWithholdingTaxTypeWithholdingTaxTypeGetSelectEnum];
/**
 * @export
 */
export const ACustomerWithHoldingTaxGetOrderbyEnum = {
    Customer: 'Customer',
    CustomerDesc: 'Customer desc',
    CompanyCode: 'CompanyCode',
    CompanyCodeDesc: 'CompanyCode desc',
    WithholdingTaxType: 'WithholdingTaxType',
    WithholdingTaxTypeDesc: 'WithholdingTaxType desc',
    WithholdingTaxCode: 'WithholdingTaxCode',
    WithholdingTaxCodeDesc: 'WithholdingTaxCode desc',
    WithholdingTaxAgent: 'WithholdingTaxAgent',
    WithholdingTaxAgentDesc: 'WithholdingTaxAgent desc',
    ObligationDateBegin: 'ObligationDateBegin',
    ObligationDateBeginDesc: 'ObligationDateBegin desc',
    ObligationDateEnd: 'ObligationDateEnd',
    ObligationDateEndDesc: 'ObligationDateEnd desc',
    WithholdingTaxNumber: 'WithholdingTaxNumber',
    WithholdingTaxNumberDesc: 'WithholdingTaxNumber desc',
    WithholdingTaxCertificate: 'WithholdingTaxCertificate',
    WithholdingTaxCertificateDesc: 'WithholdingTaxCertificate desc',
    WithholdingTaxExmptPercent: 'WithholdingTaxExmptPercent',
    WithholdingTaxExmptPercentDesc: 'WithholdingTaxExmptPercent desc',
    ExemptionDateBegin: 'ExemptionDateBegin',
    ExemptionDateBeginDesc: 'ExemptionDateBegin desc',
    ExemptionDateEnd: 'ExemptionDateEnd',
    ExemptionDateEndDesc: 'ExemptionDateEnd desc',
    ExemptionReason: 'ExemptionReason',
    ExemptionReasonDesc: 'ExemptionReason desc',
    AuthorizationGroup: 'AuthorizationGroup',
    AuthorizationGroupDesc: 'AuthorizationGroup desc'
} as const;
export type ACustomerWithHoldingTaxGetOrderbyEnum = typeof ACustomerWithHoldingTaxGetOrderbyEnum[keyof typeof ACustomerWithHoldingTaxGetOrderbyEnum];
/**
 * @export
 */
export const ACustomerWithHoldingTaxGetSelectEnum = {
    Customer: 'Customer',
    CompanyCode: 'CompanyCode',
    WithholdingTaxType: 'WithholdingTaxType',
    WithholdingTaxCode: 'WithholdingTaxCode',
    WithholdingTaxAgent: 'WithholdingTaxAgent',
    ObligationDateBegin: 'ObligationDateBegin',
    ObligationDateEnd: 'ObligationDateEnd',
    WithholdingTaxNumber: 'WithholdingTaxNumber',
    WithholdingTaxCertificate: 'WithholdingTaxCertificate',
    WithholdingTaxExmptPercent: 'WithholdingTaxExmptPercent',
    ExemptionDateBegin: 'ExemptionDateBegin',
    ExemptionDateEnd: 'ExemptionDateEnd',
    ExemptionReason: 'ExemptionReason',
    AuthorizationGroup: 'AuthorizationGroup'
} as const;
export type ACustomerWithHoldingTaxGetSelectEnum = typeof ACustomerWithHoldingTaxGetSelectEnum[keyof typeof ACustomerWithHoldingTaxGetSelectEnum];