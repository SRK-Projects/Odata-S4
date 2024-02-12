/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'LeadQualificationcreaterequest' schema.
 */
export type LeadQualificationcreaterequest =
  | {
      code?: string;
      description?: string;
      isActive?: boolean;
      sequence?: number;
      color?:
        | 'PRIMARY'
        | 'AQUA'
        | 'TEAL'
        | 'GREEN'
        | 'YELLOW'
        | 'ORANGE'
        | 'RED'
        | 'PINK'
        | 'PURPLE'
        | 'VIOLET'
        | 'ULTRAMARINE'
        | 'BLUE';
    }
  | Record<string, any>;
