"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadStatusApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'LeadStatusApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
exports.LeadStatusApi = {
    /**
     * Query all (active/inactive) lead status
     * @param queryParameters - Object containing the following keys: isActive, $orderby.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    queryleadserviceLeadStatus: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/statuses', {
        queryParameters
    }),
    /**
     * Send lead status information to create a new lead status entity.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createleadserviceLeadStatus: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/lead-service/statuses', {
        body
    }),
    /**
     * Retrieve a specific lead status using the lead status code.
     * @param code - Lead Status Code
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readleadserviceLeadStatusCode: (code) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/statuses/{code}', {
        pathParameters: { code }
    }),
    /**
     * Delete a lead status using the lead status code.
     * @param code - Lead Status Code
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteleadserviceLeadStatus: (code) => new openapi_1.OpenApiRequestBuilder('delete', '/sap/c4c/api/v1/lead-service/statuses/{code}', {
        pathParameters: { code }
    })
};
//# sourceMappingURL=lead-status-api.js.map