"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'CaseApi'.
 * This API is part of the 'SalesSvcCloudV2_case' service.
 */
exports.CaseApi = {
    /**
     * Specify query parameters to return desired case records from the system.
     * @param queryParameters - Object containing the following keys: $top, $skip, $search, $orderby, $filter, $select, $exclude, $count, $query.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    querycaseserviceCase: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/case-service/cases', {
        queryParameters
    }),
    /**
     * Send case information to the system to create a new case entity.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createcaseserviceCase: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/case-service/cases', {
        body
    }),
    /**
     * Query the system for a specific case using the case ID.
     * @param id - Case ID
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readcaseserviceCase: (id) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/case-service/cases/{id}', {
        pathParameters: { id }
    }),
    /**
     * Add attributes to a specific case by ID.
     * @param id - Case ID
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updatecaseserviceCase: (id, body) => new openapi_1.OpenApiRequestBuilder('put', '/sap/c4c/api/v1/case-service/cases/{id}', {
        pathParameters: { id },
        body
    }),
    /**
     * Update case attributes in the system.
     * @param id - Case ID
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    modifycaseserviceCase: (id, body) => new openapi_1.OpenApiRequestBuilder('patch', '/sap/c4c/api/v1/case-service/cases/{id}', {
        pathParameters: { id },
        body
    })
};
//# sourceMappingURL=case-api.js.map