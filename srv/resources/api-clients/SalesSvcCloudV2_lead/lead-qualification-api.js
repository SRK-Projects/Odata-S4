"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadQualificationApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'LeadQualificationApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
exports.LeadQualificationApi = {
    /**
     * Query all (active/inactive) lead qualifications
     * @param queryParameters - Object containing the following keys: isActive.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    queryleadserviceLeadQualification: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/qualifications', {
        queryParameters
    }),
    /**
     * Send lead qualification information to create a new lead qualification entity.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createleadserviceLeadQualification: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/lead-service/qualifications', {
        body
    }),
    /**
     * Retrieve a specific lead qualification using the lead qualification code.
     * @param code - Lead Qualification Code
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readleadserviceLeadQualificationCode: (code) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/qualifications/{code}', {
        pathParameters: { code }
    }),
    /**
     * Delete a lead qualification using the lead qualification code.
     * @param code - Lead Qualification Code
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteleadserviceLeadQualification: (code) => new openapi_1.OpenApiRequestBuilder('delete', '/sap/c4c/api/v1/lead-service/qualifications/{code}', {
        pathParameters: { code }
    })
};
//# sourceMappingURL=lead-qualification-api.js.map