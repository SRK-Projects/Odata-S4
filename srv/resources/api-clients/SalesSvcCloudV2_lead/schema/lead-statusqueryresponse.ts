/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'LeadStatusqueryresponse' schema.
 */
export type LeadStatusqueryresponse =
  | {
      /**
       * Format: "int32".
       */
      count?: number;
      value?:
        | {
            code?: string;
            internalStatus?: 'OPEN' | 'CONVERTED' | 'ACCEPTED' | 'DECLINED';
            isActive?: boolean;
            sequence?: number;
            description?: string;
            descriptions?:
              | {
                  content?: string;
                  languageCode?: string;
                }
              | Record<string, any>[];
          }
        | Record<string, any>[];
    }
  | Record<string, any>;
