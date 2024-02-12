/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  Leadqueryresponse,
  Leadcreaterequest,
  Leadfile,
  Leadupdaterequest,
  Leadpatchupdaterequest
} from './schema';
/**
 * Representation of the 'LeadApi'.
 * This API is part of the 'SalesSvcCloudV2_lead' service.
 */
export declare const LeadApi: {
  /**
   * Specify query parameters to return desired lead entities.
   * @param queryParameters - Object containing the following keys: $top, $skip, $search, $orderby, $filter, $select, $count, $query.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryleadserviceLead: (queryParameters?: {
    $top?: number;
    $skip?: number;
    $search?: string;
    $orderby?: string;
    $filter?: string;
    $select?: string;
    $count?: boolean;
    $query?: string;
  }) => OpenApiRequestBuilder<Leadqueryresponse>;
  /**
   * Send lead information to create a new lead entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createleadserviceLead: (
    body: Leadcreaterequest | undefined
  ) => OpenApiRequestBuilder<Leadfile>;
  /**
   * Retrieve a specific lead using the lead ID.
   * @param id - Lead Id
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readleadserviceLead: (id: string) => OpenApiRequestBuilder<Leadfile>;
  /**
   * Update a lead using the lead ID
   * @param id - Lead Id
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateleadserviceLead: (
    id: string,
    body: Leadupdaterequest | undefined
  ) => OpenApiRequestBuilder<Leadfile>;
  /**
   * Update lead attributes using the lead ID.
   * @param id - Lead Id
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  modifyleadserviceLead: (
    id: string,
    body: Leadpatchupdaterequest | undefined
  ) => OpenApiRequestBuilder<Leadfile>;
  /**
   * Delete a lead using the lead ID.
   * @param id - Lead Id
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteleadserviceLead: (id: string) => OpenApiRequestBuilder<any>;
};
