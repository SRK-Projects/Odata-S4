/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * Representation of the 'LeadSourcequeryresponse' schema.
 */
export type LeadSourcequeryresponse =
  | {
      /**
       * Format: "int32".
       */
      count?: number;
      value?:
        | {
            code?: string;
            description?: string;
            isActive?: boolean;
            sequence?: number;
          }
        | Record<string, any>[];
    }
  | Record<string, any>;
