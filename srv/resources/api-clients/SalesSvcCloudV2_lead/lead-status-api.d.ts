/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  LeadStatusqueryresponse,
  LeadStatuscreaterequest,
  LeadStatusfile
} from './schema';
/**
 * Representation of the 'LeadStatusApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
export declare const LeadStatusApi: {
  /**
   * Query all (active/inactive) lead status
   * @param queryParameters - Object containing the following keys: isActive, $orderby.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryleadserviceLeadStatus: (queryParameters?: {
    isActive?: boolean;
    $orderby?: string;
  }) => OpenApiRequestBuilder<LeadStatusqueryresponse>;
  /**
   * Send lead status information to create a new lead status entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createleadserviceLeadStatus: (
    body: LeadStatuscreaterequest | undefined
  ) => OpenApiRequestBuilder<LeadStatusfile>;
  /**
   * Retrieve a specific lead status using the lead status code.
   * @param code - Lead Status Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readleadserviceLeadStatusCode: (
    code: string
  ) => OpenApiRequestBuilder<LeadStatusfile>;
  /**
   * Delete a lead status using the lead status code.
   * @param code - Lead Status Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteleadserviceLeadStatus: (code: string) => OpenApiRequestBuilder<any>;
};
