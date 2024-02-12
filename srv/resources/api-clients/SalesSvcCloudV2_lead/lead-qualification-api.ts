/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  LeadQualificationqueryresponse,
  LeadQualificationcreaterequest,
  LeadQualificationfile
} from './schema';
/**
 * Representation of the 'LeadQualificationApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
export const LeadQualificationApi = {
  /**
   * Query all (active/inactive) lead qualifications
   * @param queryParameters - Object containing the following keys: isActive.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryleadserviceLeadQualification: (queryParameters?: {
    isActive?: boolean;
  }) =>
    new OpenApiRequestBuilder<LeadQualificationqueryresponse>(
      'get',
      '/sap/c4c/api/v1/lead-service/qualifications',
      {
        queryParameters
      }
    ),
  /**
   * Send lead qualification information to create a new lead qualification entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createleadserviceLeadQualification: (
    body: LeadQualificationcreaterequest | undefined
  ) =>
    new OpenApiRequestBuilder<LeadQualificationfile>(
      'post',
      '/sap/c4c/api/v1/lead-service/qualifications',
      {
        body
      }
    ),
  /**
   * Retrieve a specific lead qualification using the lead qualification code.
   * @param code - Lead Qualification Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readleadserviceLeadQualificationCode: (code: string) =>
    new OpenApiRequestBuilder<LeadQualificationfile>(
      'get',
      '/sap/c4c/api/v1/lead-service/qualifications/{code}',
      {
        pathParameters: { code }
      }
    ),
  /**
   * Delete a lead qualification using the lead qualification code.
   * @param code - Lead Qualification Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteleadserviceLeadQualification: (code: string) =>
    new OpenApiRequestBuilder<any>(
      'delete',
      '/sap/c4c/api/v1/lead-service/qualifications/{code}',
      {
        pathParameters: { code }
      }
    )
};
