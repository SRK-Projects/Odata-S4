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
export declare const LeadSourceApi: {
  /**
   * Query all (active/inactive) lead sources
   * @param queryParameters - Object containing the following keys: isActive.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryleadserviceLeadSource: (queryParameters?: {
    isActive?: boolean;
  }) => OpenApiRequestBuilder<LeadSourcequeryresponse>;
  /**
   * Send lead source information to create a new lead source entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createleadserviceLeadSource: (
    body: LeadSourcecreaterequest | undefined
  ) => OpenApiRequestBuilder<LeadSourcefile>;
  /**
   * Retrieve a specific lead source using the lead source code.
   * @param code - Lead Source Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readleadserviceLeadSourceCode: (
    code: string
  ) => OpenApiRequestBuilder<LeadSourcefile>;
  /**
   * Delete a lead source using the lead source code.
   * @param code - Lead Source Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteleadserviceLeadSource: (code: string) => OpenApiRequestBuilder<any>;
};
