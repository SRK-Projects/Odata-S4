/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'CaseApi'.
 * This API is part of the 'SalesSvcCloudV2_case' service.
 */
export declare const CaseApi: {
  /**
   * Specify query parameters to return desired case records from the system.
   * @param queryParameters - Object containing the following keys: $top, $skip, $search, $orderby, $filter, $select, $exclude, $count, $query.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  querycaseserviceCase: (queryParameters?: {
    $top?: number;
    $skip?: number;
    $search?: string;
    $orderby?: string;
    $filter?: string;
    $select?: string;
    $exclude?: string;
    $count?: boolean;
    $query?: string;
  }) => OpenApiRequestBuilder<
    | Record<string, any>
    | {
        /**
         * Format: "int32".
         */
        count?: number | undefined;
        value?:
          | Record<string, any>[]
          | {
              /**
               * Format: "uuid".
               */
              id?: string | undefined;
              displayId?: string | undefined;
              subject?: string | undefined;
              priority?: string | undefined;
              priorityDescription?: string | undefined;
              origin?: string | undefined;
              caseType?: string | undefined;
              caseTypeDescription?: string | undefined;
              status?: string | undefined;
              statusDescription?: string | undefined;
              escalationStatus?: string | undefined;
              registeredProducts?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    serialId?: string | undefined;
                  }
                | undefined;
              functionalLocations?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              productInstallPoints?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              installedBases?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              account?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    country?: string | undefined;
                    state?: string | undefined;
                    streetPostalCode?: string | undefined;
                  }
                | undefined;
              contact?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                    phoneNumber?: string | undefined;
                  }
                | undefined;
              individualCustomer?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              processor?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              approvers?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              serviceTeam?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                  }
                | undefined;
              description?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              notes?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              relatedObjects?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    objectId?: string | undefined;
                    type?: string | undefined;
                    role?: string | undefined;
                  }
                | undefined;
              timePoints?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    reportedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    escalatedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToCustomerOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToProcessorOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewCompletedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    resolutionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    responseDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    closedOn?: string | undefined;
                  }
                | undefined;
              categoryLevel1?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              categoryLevel2?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              /**
               * Format: "uuid".
               */
              serviceLevelId?: string | undefined;
              durationTerms?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    durationWithAgent?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    durationWithCustomer?: string | undefined;
                  }
                | undefined;
              isRead?: boolean | undefined;
              isEndOfPurpose?: boolean | undefined;
              isDepersonalized?: boolean | undefined;
              adminData?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    createdBy?: string | undefined;
                    createdByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    createdOn?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    updatedBy?: string | undefined;
                    updatedByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    updatedOn?: string | undefined;
                  }
                | undefined;
              extensions?: Record<string, any> | undefined;
            }
          | undefined;
        info?:
          | Record<string, any>
          | {
              code?: string | undefined;
              details?:
                | Record<string, any>[]
                | {
                    message?: string | undefined;
                    target?: string | undefined;
                    code?: string | undefined;
                  }
                | undefined;
              message?: string | undefined;
              target?: string | undefined;
            }
          | undefined;
      }
  >;
  /**
   * Send case information to the system to create a new case entity.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createcaseserviceCase: (
    body:
      | {
          subject?: string;
          priority?: string;
          origin?: string;
          caseType?: string;
          status?: string;
          escalationStatus?: string;
          registeredProducts?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
                serialId?: string;
              }
            | Record<string, any>[];
          functionalLocations?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
              }
            | Record<string, any>[];
          productInstallPoints?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
              }
            | Record<string, any>[];
          installedBases?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
              }
            | Record<string, any>[];
          account?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
                name?: string;
                country?: string;
                state?: string;
                streetPostalCode?: string;
              }
            | Record<string, any>;
          contact?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
                name?: string;
                emailId?: string;
                phoneNumber?: string;
              }
            | Record<string, any>;
          individualCustomer?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
                name?: string;
                emailId?: string;
              }
            | Record<string, any>;
          processor?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
                name?: string;
                emailId?: string;
              }
            | Record<string, any>;
          approvers?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
                name?: string;
                emailId?: string;
              }
            | Record<string, any>[];
          serviceTeam?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
                name?: string;
              }
            | Record<string, any>;
          description?:
            | {
                /**
                 * Format: "uuid".
                 */
                noteId?: string;
                content?: string;
              }
            | Record<string, any>;
          notes?:
            | {
                /**
                 * Format: "uuid".
                 */
                noteId?: string;
                /**
                 * Format: "uuid".
                 */
                id?: string;
                content?: string;
              }
            | Record<string, any>[];
          timePoints?:
            | {
                /**
                 * Format: "date-time".
                 */
                reportedOn?: string;
                /**
                 * Format: "date-time".
                 */
                escalatedOn?: string;
                /**
                 * Format: "date-time".
                 */
                completedOn?: string;
                /**
                 * Format: "date-time".
                 */
                completionDueOn?: string;
                /**
                 * Format: "date-time".
                 */
                assignedToCustomerOn?: string;
                /**
                 * Format: "date-time".
                 */
                assignedToProcessorOn?: string;
                /**
                 * Format: "date-time".
                 */
                initialReviewDueOn?: string;
                /**
                 * Format: "date-time".
                 */
                initialReviewCompletedOn?: string;
                /**
                 * Format: "date-time".
                 */
                resolutionDueOn?: string;
                /**
                 * Format: "date-time".
                 */
                responseDueOn?: string;
                /**
                 * Format: "date-time".
                 */
                closedOn?: string;
              }
            | Record<string, any>;
          categoryLevel1?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
              }
            | Record<string, any>;
          categoryLevel2?:
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string;
                displayId?: string;
              }
            | Record<string, any>;
          extensions?: Record<string, any>;
        }
      | Record<string, any>
      | undefined
  ) => OpenApiRequestBuilder<
    | Record<string, any>
    | {
        value?:
          | Record<string, any>
          | {
              /**
               * Format: "uuid".
               */
              id?: string | undefined;
              displayId?: string | undefined;
              subject?: string | undefined;
              priority?: string | undefined;
              priorityDescription?: string | undefined;
              origin?: string | undefined;
              caseType?: string | undefined;
              caseTypeDescription?: string | undefined;
              status?: string | undefined;
              statusDescription?: string | undefined;
              escalationStatus?: string | undefined;
              registeredProducts?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    serialId?: string | undefined;
                  }
                | undefined;
              functionalLocations?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              productInstallPoints?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              installedBases?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              account?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    country?: string | undefined;
                    state?: string | undefined;
                    streetPostalCode?: string | undefined;
                  }
                | undefined;
              contact?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                    phoneNumber?: string | undefined;
                  }
                | undefined;
              individualCustomer?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              processor?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              approvers?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              serviceTeam?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                  }
                | undefined;
              description?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              notes?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              relatedObjects?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    objectId?: string | undefined;
                    type?: string | undefined;
                    role?: string | undefined;
                  }
                | undefined;
              timePoints?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    reportedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    escalatedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToCustomerOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToProcessorOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewCompletedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    resolutionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    responseDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    closedOn?: string | undefined;
                  }
                | undefined;
              categoryLevel1?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              categoryLevel2?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              /**
               * Format: "uuid".
               */
              serviceLevelId?: string | undefined;
              durationTerms?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    durationWithAgent?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    durationWithCustomer?: string | undefined;
                  }
                | undefined;
              isRead?: boolean | undefined;
              isEndOfPurpose?: boolean | undefined;
              isDepersonalized?: boolean | undefined;
              adminData?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    createdBy?: string | undefined;
                    createdByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    createdOn?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    updatedBy?: string | undefined;
                    updatedByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    updatedOn?: string | undefined;
                  }
                | undefined;
              extensions?: Record<string, any> | undefined;
            }
          | undefined;
        info?:
          | Record<string, any>
          | {
              code?: string | undefined;
              details?:
                | Record<string, any>[]
                | {
                    message?: string | undefined;
                    target?: string | undefined;
                    code?: string | undefined;
                  }
                | undefined;
              message?: string | undefined;
              target?: string | undefined;
            }
          | undefined;
      }
  >;
  /**
   * Query the system for a specific case using the case ID.
   * @param id - Case ID
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readcaseserviceCase: (id: string) => OpenApiRequestBuilder<
    | Record<string, any>
    | {
        value?:
          | Record<string, any>
          | {
              /**
               * Format: "uuid".
               */
              id?: string | undefined;
              displayId?: string | undefined;
              subject?: string | undefined;
              priority?: string | undefined;
              priorityDescription?: string | undefined;
              origin?: string | undefined;
              caseType?: string | undefined;
              caseTypeDescription?: string | undefined;
              status?: string | undefined;
              statusDescription?: string | undefined;
              escalationStatus?: string | undefined;
              registeredProducts?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    serialId?: string | undefined;
                  }
                | undefined;
              functionalLocations?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              productInstallPoints?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              installedBases?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              account?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    country?: string | undefined;
                    state?: string | undefined;
                    streetPostalCode?: string | undefined;
                  }
                | undefined;
              contact?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                    phoneNumber?: string | undefined;
                  }
                | undefined;
              individualCustomer?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              processor?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              approvers?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              serviceTeam?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                  }
                | undefined;
              description?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              notes?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              relatedObjects?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    objectId?: string | undefined;
                    type?: string | undefined;
                    role?: string | undefined;
                  }
                | undefined;
              timePoints?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    reportedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    escalatedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToCustomerOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToProcessorOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewCompletedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    resolutionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    responseDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    closedOn?: string | undefined;
                  }
                | undefined;
              categoryLevel1?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              categoryLevel2?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              /**
               * Format: "uuid".
               */
              serviceLevelId?: string | undefined;
              durationTerms?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    durationWithAgent?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    durationWithCustomer?: string | undefined;
                  }
                | undefined;
              isRead?: boolean | undefined;
              isEndOfPurpose?: boolean | undefined;
              isDepersonalized?: boolean | undefined;
              adminData?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    createdBy?: string | undefined;
                    createdByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    createdOn?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    updatedBy?: string | undefined;
                    updatedByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    updatedOn?: string | undefined;
                  }
                | undefined;
              extensions?: Record<string, any> | undefined;
            }
          | undefined;
        info?:
          | Record<string, any>
          | {
              code?: string | undefined;
              details?:
                | Record<string, any>[]
                | {
                    message?: string | undefined;
                    target?: string | undefined;
                    code?: string | undefined;
                  }
                | undefined;
              message?: string | undefined;
              target?: string | undefined;
            }
          | undefined;
      }
  >;
  /**
   * Add attributes to a specific case by ID.
   * @param id - Case ID
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updatecaseserviceCase: (
    id: string,
    body:
      | Record<string, any>
      | {
          subject?: string | undefined;
          priority?: string | undefined;
          status?: string | undefined;
          escalationStatus?: string | undefined;
          registeredProducts?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                serialId?: string | undefined;
              }
            | undefined;
          functionalLocations?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          productInstallPoints?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          installedBases?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          account?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                country?: string | undefined;
                state?: string | undefined;
                streetPostalCode?: string | undefined;
              }
            | undefined;
          contact?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                emailId?: string | undefined;
                phoneNumber?: string | undefined;
              }
            | undefined;
          individualCustomer?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                emailId?: string | undefined;
              }
            | undefined;
          processor?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                emailId?: string | undefined;
              }
            | undefined;
          approvers?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                emailId?: string | undefined;
              }
            | undefined;
          serviceTeam?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
              }
            | undefined;
          description?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                noteId?: string | undefined;
                content?: string | undefined;
              }
            | undefined;
          notes?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                noteId?: string | undefined;
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                content?: string | undefined;
              }
            | undefined;
          timePoints?:
            | Record<string, any>
            | {
                /**
                 * Format: "date-time".
                 */
                reportedOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                escalatedOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                completedOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                completionDueOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                assignedToCustomerOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                assignedToProcessorOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                initialReviewDueOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                initialReviewCompletedOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                resolutionDueOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                responseDueOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                closedOn?: string | undefined;
              }
            | undefined;
          categoryLevel1?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          categoryLevel2?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          extensions?: Record<string, any> | undefined;
        }
      | undefined
  ) => OpenApiRequestBuilder<
    | Record<string, any>
    | {
        value?:
          | Record<string, any>
          | {
              /**
               * Format: "uuid".
               */
              id?: string | undefined;
              displayId?: string | undefined;
              subject?: string | undefined;
              priority?: string | undefined;
              priorityDescription?: string | undefined;
              origin?: string | undefined;
              caseType?: string | undefined;
              caseTypeDescription?: string | undefined;
              status?: string | undefined;
              statusDescription?: string | undefined;
              escalationStatus?: string | undefined;
              registeredProducts?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    serialId?: string | undefined;
                  }
                | undefined;
              functionalLocations?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              productInstallPoints?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              installedBases?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              account?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    country?: string | undefined;
                    state?: string | undefined;
                    streetPostalCode?: string | undefined;
                  }
                | undefined;
              contact?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                    phoneNumber?: string | undefined;
                  }
                | undefined;
              individualCustomer?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              processor?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              approvers?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              serviceTeam?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                  }
                | undefined;
              description?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              notes?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              relatedObjects?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    objectId?: string | undefined;
                    type?: string | undefined;
                    role?: string | undefined;
                  }
                | undefined;
              timePoints?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    reportedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    escalatedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToCustomerOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToProcessorOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewCompletedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    resolutionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    responseDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    closedOn?: string | undefined;
                  }
                | undefined;
              categoryLevel1?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              categoryLevel2?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              /**
               * Format: "uuid".
               */
              serviceLevelId?: string | undefined;
              durationTerms?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    durationWithAgent?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    durationWithCustomer?: string | undefined;
                  }
                | undefined;
              isRead?: boolean | undefined;
              isEndOfPurpose?: boolean | undefined;
              isDepersonalized?: boolean | undefined;
              adminData?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    createdBy?: string | undefined;
                    createdByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    createdOn?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    updatedBy?: string | undefined;
                    updatedByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    updatedOn?: string | undefined;
                  }
                | undefined;
              extensions?: Record<string, any> | undefined;
            }
          | undefined;
        info?:
          | Record<string, any>
          | {
              code?: string | undefined;
              details?:
                | Record<string, any>[]
                | {
                    message?: string | undefined;
                    target?: string | undefined;
                    code?: string | undefined;
                  }
                | undefined;
              message?: string | undefined;
              target?: string | undefined;
            }
          | undefined;
      }
  >;
  /**
   * Update case attributes in the system.
   * @param id - Case ID
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  modifycaseserviceCase: (
    id: string,
    body:
      | Record<string, any>
      | {
          subject?: string | undefined;
          priority?: string | undefined;
          status?: string | undefined;
          escalationStatus?: string | undefined;
          registeredProducts?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                serialId?: string | undefined;
              }
            | undefined;
          functionalLocations?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          productInstallPoints?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          installedBases?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          account?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                country?: string | undefined;
                state?: string | undefined;
                streetPostalCode?: string | undefined;
              }
            | undefined;
          contact?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                emailId?: string | undefined;
                phoneNumber?: string | undefined;
              }
            | undefined;
          individualCustomer?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                emailId?: string | undefined;
              }
            | undefined;
          processor?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                emailId?: string | undefined;
              }
            | undefined;
          approvers?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
                emailId?: string | undefined;
              }
            | undefined;
          serviceTeam?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
                name?: string | undefined;
              }
            | undefined;
          description?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                noteId?: string | undefined;
                content?: string | undefined;
              }
            | undefined;
          notes?:
            | Record<string, any>[]
            | {
                /**
                 * Format: "uuid".
                 */
                noteId?: string | undefined;
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                content?: string | undefined;
              }
            | undefined;
          timePoints?:
            | Record<string, any>
            | {
                /**
                 * Format: "date-time".
                 */
                reportedOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                escalatedOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                completedOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                completionDueOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                assignedToCustomerOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                assignedToProcessorOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                initialReviewDueOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                initialReviewCompletedOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                resolutionDueOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                responseDueOn?: string | undefined;
                /**
                 * Format: "date-time".
                 */
                closedOn?: string | undefined;
              }
            | undefined;
          categoryLevel1?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          categoryLevel2?:
            | Record<string, any>
            | {
                /**
                 * Format: "uuid".
                 */
                id?: string | undefined;
                displayId?: string | undefined;
              }
            | undefined;
          extensions?: Record<string, any> | undefined;
        }
      | undefined
  ) => OpenApiRequestBuilder<
    | Record<string, any>
    | {
        value?:
          | Record<string, any>
          | {
              /**
               * Format: "uuid".
               */
              id?: string | undefined;
              displayId?: string | undefined;
              subject?: string | undefined;
              priority?: string | undefined;
              priorityDescription?: string | undefined;
              origin?: string | undefined;
              caseType?: string | undefined;
              caseTypeDescription?: string | undefined;
              status?: string | undefined;
              statusDescription?: string | undefined;
              escalationStatus?: string | undefined;
              registeredProducts?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    serialId?: string | undefined;
                  }
                | undefined;
              functionalLocations?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              productInstallPoints?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              installedBases?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              account?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    country?: string | undefined;
                    state?: string | undefined;
                    streetPostalCode?: string | undefined;
                  }
                | undefined;
              contact?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                    phoneNumber?: string | undefined;
                  }
                | undefined;
              individualCustomer?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              processor?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              approvers?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                    emailId?: string | undefined;
                  }
                | undefined;
              serviceTeam?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                    name?: string | undefined;
                  }
                | undefined;
              description?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              notes?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    noteId?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    content?: string | undefined;
                  }
                | undefined;
              relatedObjects?:
                | Record<string, any>[]
                | {
                    /**
                     * Format: "uuid".
                     */
                    objectId?: string | undefined;
                    type?: string | undefined;
                    role?: string | undefined;
                  }
                | undefined;
              timePoints?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    reportedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    escalatedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    completionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToCustomerOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    assignedToProcessorOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    initialReviewCompletedOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    resolutionDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    responseDueOn?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    closedOn?: string | undefined;
                  }
                | undefined;
              categoryLevel1?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              categoryLevel2?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    id?: string | undefined;
                    displayId?: string | undefined;
                  }
                | undefined;
              /**
               * Format: "uuid".
               */
              serviceLevelId?: string | undefined;
              durationTerms?:
                | Record<string, any>
                | {
                    /**
                     * Format: "date-time".
                     */
                    durationWithAgent?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    durationWithCustomer?: string | undefined;
                  }
                | undefined;
              isRead?: boolean | undefined;
              isEndOfPurpose?: boolean | undefined;
              isDepersonalized?: boolean | undefined;
              adminData?:
                | Record<string, any>
                | {
                    /**
                     * Format: "uuid".
                     */
                    createdBy?: string | undefined;
                    createdByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    createdOn?: string | undefined;
                    /**
                     * Format: "uuid".
                     */
                    updatedBy?: string | undefined;
                    updatedByName?: string | undefined;
                    /**
                     * Format: "date-time".
                     */
                    updatedOn?: string | undefined;
                  }
                | undefined;
              extensions?: Record<string, any> | undefined;
            }
          | undefined;
        info?:
          | Record<string, any>
          | {
              code?: string | undefined;
              details?:
                | Record<string, any>[]
                | {
                    message?: string | undefined;
                    target?: string | undefined;
                    code?: string | undefined;
                  }
                | undefined;
              message?: string | undefined;
              target?: string | undefined;
            }
          | undefined;
      }
  >;
};
