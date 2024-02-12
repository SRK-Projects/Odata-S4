/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  LeadSourcequeryresponse,
  LeadSourcecreaterequest,
  LeadSourcefile
} from './schema';
/**
 * Representation of the 'LeadSourceApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
export const LeadSourceApi = {
  /**
   * Query all (active/inactive) lead sources
   * @param queryParameters - Object containing the following keys: isActive.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryleadserviceLeadSource: (queryParameters?: { isActive?: boolean }) =>
    new OpenApiRequestBuilder<LeadSourcequeryresponse>(
      'get',
      '/sap/c4c/api/v1/lead-service/sources',
      {
        queryParameters
      }
    ),
  /**
   * Send lead source information to create a new lead source entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createleadserviceLeadSource: (body: LeadSourcecreaterequest | undefined) =>
    new OpenApiRequestBuilder<LeadSourcefile>(
      'post',
      '/sap/c4c/api/v1/lead-service/sources',
      {
        body
      }
    ),
  /**
   * Retrieve a specific lead source using the lead source code.
   * @param code - Lead Source Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readleadserviceLeadSourceCode: (code: string) =>
    new OpenApiRequestBuilder<LeadSourcefile>(
      'get',
      '/sap/c4c/api/v1/lead-service/sources/{code}',
      {
        pathParameters: { code }
      }
    ),
  /**
   * Delete a lead source using the lead source code.
   * @param code - Lead Source Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteleadserviceLeadSource: (code: string) =>
    new OpenApiRequestBuilder<any>(
      'delete',
      '/sap/c4c/api/v1/lead-service/sources/{code}',
      {
        pathParameters: { code }
      }
    )
};
