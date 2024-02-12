/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * Representation of the 'LeadStatuscreaterequest' schema.
 */
export type LeadStatuscreaterequest =
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
  | Record<string, any>;
