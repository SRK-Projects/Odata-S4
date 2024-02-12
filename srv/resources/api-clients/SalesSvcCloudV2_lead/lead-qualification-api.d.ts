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
export declare const LeadQualificationApi: {
  /**
   * Query all (active/inactive) lead qualifications
   * @param queryParameters - Object containing the following keys: isActive.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryleadserviceLeadQualification: (queryParameters?: {
    isActive?: boolean;
  }) => OpenApiRequestBuilder<LeadQualificationqueryresponse>;
  /**
   * Send lead qualification information to create a new lead qualification entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createleadserviceLeadQualification: (
    body: LeadQualificationcreaterequest | undefined
  ) => OpenApiRequestBuilder<LeadQualificationfile>;
  /**
   * Retrieve a specific lead qualification using the lead qualification code.
   * @param code - Lead Qualification Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readleadserviceLeadQualificationCode: (
    code: string
  ) => OpenApiRequestBuilder<LeadQualificationfile>;
  /**
   * Delete a lead qualification using the lead qualification code.
   * @param code - Lead Qualification Code
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteleadserviceLeadQualification: (
    code: string
  ) => OpenApiRequestBuilder<any>;
};
