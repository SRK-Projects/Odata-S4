"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadSourceApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'LeadSourceApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
exports.LeadSourceApi = {
    /**
     * Query all (active/inactive) lead sources
     * @param queryParameters - Object containing the following keys: isActive.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    queryleadserviceLeadSource: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/sources', {
        queryParameters
    }),
    /**
     * Send lead source information to create a new lead source entity.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createleadserviceLeadSource: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/lead-service/sources', {
        body
    }),
    /**
     * Retrieve a specific lead source using the lead source code.
     * @param code - Lead Source Code
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readleadserviceLeadSourceCode: (code) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/sources/{code}', {
        pathParameters: { code }
    }),
    /**
     * Delete a lead source using the lead source code.
     * @param code - Lead Source Code
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteleadserviceLeadSource: (code) => new openapi_1.OpenApiRequestBuilder('delete', '/sap/c4c/api/v1/lead-service/sources/{code}', {
        pathParameters: { code }
    })
};
//# sourceMappingURL=lead-source-api.js.map