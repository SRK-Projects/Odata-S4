/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * Representation of the 'Leadcreaterequest' schema.
 */
export type Leadcreaterequest =
  | {
      name?: string;
      status?: string;
      source?: string;
      qualification?: string;
      account?:
        | {
            /**
             * Format: "uuid".
             */
            id?: string;
            displayId?: string;
            formattedName?: string;
            firstLineName?: string;
            secondLineName?: string;
            thirdLineName?: string;
            fourthLineName?: string;
            address?:
              | {
                  streetName?: string;
                  houseId?: string;
                  postalCode?: string;
                  cityName?: string;
                  country?: string;
                  countryDescription?: string;
                  /**
                   * Format: "email".
                   */
                  email?: string;
                  web?: string;
                  phoneFormattedNumber?: string;
                  mobileFormattedNumber?: string;
                }
              | Record<string, any>;
          }
        | Record<string, any>;
      businessArea?:
        | {
            /**
             * Format: "uuid".
             */
            salesOrganisationId?: string;
            salesOrganisationDisplayId?: string;
            salesOrganisationName?: string;
            distributionChannel?: string;
            distributionChannelName?: string;
            division?: string;
            divisionName?: string;
            /**
             * Format: "uuid".
             */
            salesGroupId?: string;
            salesGroupDisplayId?: string;
            salesGroupName?: string;
            /**
             * Format: "uuid".
             */
            salesOfficeId?: string;
            salesOfficeDisplayId?: string;
            salesOfficeName?: string;
            /**
             * Format: "uuid".
             */
            salesTerritoryId?: string;
            salesTerritoryDisplayId?: string;
            salesTerritoryName?: string;
          }
        | Record<string, any>;
      owner?:
        | {
            /**
             * Format: "uuid".
             */
            id?: string;
            displayId?: string;
            formattedName?: string;
          }
        | Record<string, any>;
      salesEmployees?:
        | {
            /**
             * Format: "uuid".
             */
            id?: string;
            /**
             * Format: "uuid".
             */
            salesEmployeeId?: string;
            displayId?: string;
            role?: string;
            formattedName?: string;
          }
        | Record<string, any>[];
      contacts?:
        | {
            /**
             * Format: "uuid".
             */
            id?: string;
            /**
             * Format: "uuid".
             */
            contactId?: string;
            displayId?: string;
            isPrimary?: boolean;
            formattedName?: string;
            givenName?: string;
            familyName?: string;
            gender?: string;
            genderDescription?: string;
            address?:
              | {
                  /**
                   * Format: "email".
                   */
                  email?: string;
                  phoneFormattedNumber?: string;
                  mobileFormattedNumber?: string;
                  departmentName?: string;
                  functionalTitleName?: string;
                  buildingId?: string;
                  floorId?: string;
                  roomId?: string;
                }
              | Record<string, any>;
          }
        | Record<string, any>[];
      products?:
        | {
            /**
             * Format: "uuid".
             */
            id?: string;
            productId?: string;
            displayId?: string;
            productDescription?: string;
            quantity?:
              | {
                  /**
                   * Format: "double".
                   */
                  content?: number;
                  uomCode?: string;
                }
              | Record<string, any>;
          }
        | Record<string, any>[];
      notes?:
        | {
            /**
             * Format: "uuid".
             */
            id?: string;
            content?: string;
            adminData?:
              | {
                  /**
                   * Format: "uuid".
                   */
                  createdBy?: string;
                  createdByName?: string;
                  /**
                   * Format: "date-time".
                   */
                  createdOn?: string;
                  /**
                   * Format: "uuid".
                   */
                  updatedBy?: string;
                  updatedByName?: string;
                  /**
                   * Format: "date-time".
                   */
                  updatedOn?: string;
                }
              | Record<string, any>;
          }
        | Record<string, any>[];
      relatedObjects?:
        | {
            /**
             * Format: "uuid".
             */
            id?: string;
            objectId?: string;
            displayId?: string;
            type?: string;
            typeDescription?: string;
            role?: 'PREDECESSOR' | 'SUCCESSOR';
            roleDescription?: string;
            status?: 'OPEN' | 'IN_PROCESS' | 'COMPLETED' | 'CANCELLED';
            /**
             * Format: "date-time".
             */
            startDateTime?: string;
            /**
             * Format: "date-time".
             */
            dueDateTime?: string;
          }
        | Record<string, any>[];
      worklistItems?:
        | {
            /**
             * Format: "uuid".
             */
            id?: string;
            type?:
              | 'ACTION'
              | 'APPOINTMENT'
              | 'TASK'
              | 'PHONECALL'
              | 'SURVEY'
              | 'UNKNOWN';
            title?: string;
            description?: string;
            priority?: string;
            priorityDescription?: string;
            category?: string;
            categoryDescription?: string;
            duration?: string;
            /**
             * Format: "uuid".
             */
            relatedObjectId?: string;
            isRelatedObjectCompleted?: boolean;
            isMandatory?: boolean;
            status?:
              | 'UNKNOWN'
              | 'PROPOSED'
              | 'PLANNED'
              | 'DISMISSED'
              | 'COMPLETED';
            /**
             * Format: "date-time".
             */
            scheduleOn?: string;
            /**
             * Format: "date-time".
             */
            endDateTime?: string;
            note?:
              | {
                  /**
                   * Format: "uuid".
                   */
                  id?: string;
                  content?: string;
                  adminData?:
                    | {
                        /**
                         * Format: "uuid".
                         */
                        createdBy?: string;
                        createdByName?: string;
                        /**
                         * Format: "date-time".
                         */
                        createdOn?: string;
                        /**
                         * Format: "uuid".
                         */
                        updatedBy?: string;
                        updatedByName?: string;
                        /**
                         * Format: "date-time".
                         */
                        updatedOn?: string;
                      }
                    | Record<string, any>;
                }
              | Record<string, any>;
          }
        | Record<string, any>[];
      attachments?:
        | {
            /**
             * Format: "uuid".
             */
            id?: string;
            title?: string;
            type?: string;
            fileName?: string;
            fileSize?: string;
            contentType?: string;
            category?: string;
            status?: string;
            uploadUrl?: string;
            url?: string;
            adminData?:
              | {
                  /**
                   * Format: "uuid".
                   */
                  createdBy?: string;
                  createdByName?: string;
                  /**
                   * Format: "date-time".
                   */
                  createdOn?: string;
                  /**
                   * Format: "uuid".
                   */
                  updatedBy?: string;
                  updatedByName?: string;
                  /**
                   * Format: "date-time".
                   */
                  updatedOn?: string;
                }
              | Record<string, any>;
          }
        | Record<string, any>[];
      isEndOfPurpose?: boolean;
    }
  | Record<string, any>;
