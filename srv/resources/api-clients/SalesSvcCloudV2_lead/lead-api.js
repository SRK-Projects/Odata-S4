"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'LeadApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
exports.LeadApi = {
    /**
     * Specify query parameters to return desired lead entities.
     * @param queryParameters - Object containing the following keys: $top, $skip, $search, $orderby, $filter, $select, $count, $query.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    queryleadserviceLead: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/leads', {
        queryParameters
    }),
    /**
     * Send lead information to create a new lead entity.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createleadserviceLead: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/lead-service/leads', {
        body
    }),
    /**
     * Retrieve a specific lead using the lead ID.
     * @param id - Lead Id
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readleadserviceLead: (id) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/leads/{id}', {
        pathParameters: { id }
    }),
    /**
     * Update a lead using the lead ID
     * @param id - Lead Id
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateleadserviceLead: (id, body) => new openapi_1.OpenApiRequestBuilder('put', '/sap/c4c/api/v1/lead-service/leads/{id}', {
        pathParameters: { id },
        body
    }),
    /**
     * Update lead attributes using the lead ID.
     * @param id - Lead Id
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    modifyleadserviceLead: (id, body) => new openapi_1.OpenApiRequestBuilder('patch', '/sap/c4c/api/v1/lead-service/leads/{id}', {
        pathParameters: { id },
        body
    }),
    /**
     * Delete a lead using the lead ID.
     * @param id - Lead Id
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteleadserviceLead: (id) => new openapi_1.OpenApiRequestBuilder('delete', '/sap/c4c/api/v1/lead-service/leads/{id}', {
        pathParameters: { id }
    })
};
//# sourceMappingURL=lead-api.js.map