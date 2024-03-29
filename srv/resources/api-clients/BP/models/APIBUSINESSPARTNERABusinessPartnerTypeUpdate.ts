/* tslint:disable */
/* eslint-disable */
/**
 * Business Partner (A2X)
 *     This service enables you to create, display, update, and delete data related to Business Partner, Supplier, and Customer with the data provided in a payload, in an API call. This service also supports create deep entity operation and batch processing.
 *
 * The version of the OpenAPI document: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERABusinessPartnerTypeUpdate
 */
export interface APIBUSINESSPARTNERABusinessPartnerTypeUpdate {
    /**
     * Academic Title: Key
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    academicTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    authorizationGroup?: string | null;
    /**
     * Business Partner Category
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerCategory?: string | null;
    /**
     * Business Partner Grouping
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerGrouping?: string | null;
    /**
     * Business Partner: Correspondence Language
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    correspondenceLanguage?: string | null;
    /**
     * First Name of Business Partner (Person)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    firstName?: string | null;
    /**
     * Form-of-Address Key
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    formOfAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    industry?: string | null;
    /**
     * International location number  (part 1)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    internationalLocationNumber1?: string | null;
    /**
     * International location number (Part 2)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    internationalLocationNumber2?: string | null;
    /**
     * Selection: Business partner is female
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    isFemale?: boolean | null;
    /**
     * Selection: Business partner is male
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    isMale?: boolean | null;
    /**
     * Business Partner Is a Natural Person Under the Tax Laws
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    isNaturalPerson?: string | null;
    /**
     * Selection: Sex of business partner is not known
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    isSexUnknown?: boolean | null;
    /**
     * Gender of Business Partner (Person)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    genderCodeName?: string | null;
    /**
     * Business partner: Language
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    language?: string | null;
    /**
     * Last Name of Business Partner (Person)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    lastName?: string | null;
    /**
     * BP: Legal form of organization
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    legalForm?: string | null;
    /**
     * Name 1 of organization
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    organizationBPName1?: string | null;
    /**
     * Name 2 of organization
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    organizationBPName2?: string | null;
    /**
     * Name 3 of organization
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    organizationBPName3?: string | null;
    /**
     * Name 4 of organization
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    organizationBPName4?: string | null;
    /**
     * Date organization founded
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    organizationFoundationDate?: Date | null;
    /**
     * Liquidation date of organization
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    organizationLiquidationDate?: Date | null;
    /**
     * Search Term 1 for Business Partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    searchTerm1?: string | null;
    /**
     * Search Term 2 for Business Partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    searchTerm2?: string | null;
    /**
     * Other Last Name of a Person
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    additionalLastName?: string | null;
    /**
     * Date of Birth of Business Partner
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    birthDate?: Date | null;
    /**
     * Date of Birth: Status
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerBirthDateStatus?: string | null;
    /**
     * Birthplace of business partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerBirthplaceName?: string | null;
    /**
     * Date of death of business partner
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerDeathDate?: Date | null;
    /**
     * Central Block for Business Partner
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerIsBlocked?: boolean | null;
    /**
     * Business Partner Type
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerType?: string | null;
    /**
     * Name 1 (group)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    groupBusinessPartnerName1?: string | null;
    /**
     * Name 2 (group)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    groupBusinessPartnerName2?: string | null;
    /**
     * Check digit for the international location number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    internationalLocationNumber3?: string | null;
    /**
     * Middle Name or Second Forename of a Person
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    middleName?: string | null;
    /**
     * Country/Region for Name Format Rule
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    nameCountry?: string | null;
    /**
     * Name format
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    nameFormat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    personFullName?: string | null;
    /**
     * Central Archiving Flag
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    isMarkedForArchiving?: boolean | null;
    /**
     * Business Partner Number in External System
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerIDByExtSystem?: string | null;
    /**
     * Business Partner Print Format
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerPrintFormat?: string | null;
    /**
     * Occupation/group
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerOccupation?: string | null;
    /**
     * Marital Status of Business Partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    busPartMaritalStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    busPartNationality?: string | null;
    /**
     * Name at birth of business partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerBirthName?: string | null;
    /**
     * Name supplement, e.g. noble title (key)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    businessPartnerSupplementName?: string | null;
    /**
     * Name of Employer of a Natural Person
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    naturalPersonEmployerName?: string | null;
    /**
     * Name Prefix (Key)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    lastNamePrefix?: string | null;
    /**
     * 2nd name prefix (key)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    lastNameSecondPrefix?: string | null;
    /**
     * "Middle Initial" or personal initials
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    initials?: string | null;
    /**
     * BP: Data Controller Not Required
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    bPDataControllerIsNotRequired?: boolean | null;
    /**
     * Company ID of Trading Partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABusinessPartnerTypeUpdate
     */
    tradingPartner?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABusinessPartnerTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABusinessPartnerTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABusinessPartnerTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERABusinessPartnerTypeUpdate {
    return APIBUSINESSPARTNERABusinessPartnerTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABusinessPartnerTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABusinessPartnerTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'academicTitle': !exists(json, 'AcademicTitle') ? undefined : json['AcademicTitle'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
        'businessPartnerCategory': !exists(json, 'BusinessPartnerCategory') ? undefined : json['BusinessPartnerCategory'],
        'businessPartnerGrouping': !exists(json, 'BusinessPartnerGrouping') ? undefined : json['BusinessPartnerGrouping'],
        'correspondenceLanguage': !exists(json, 'CorrespondenceLanguage') ? undefined : json['CorrespondenceLanguage'],
        'firstName': !exists(json, 'FirstName') ? undefined : json['FirstName'],
        'formOfAddress': !exists(json, 'FormOfAddress') ? undefined : json['FormOfAddress'],
        'industry': !exists(json, 'Industry') ? undefined : json['Industry'],
        'internationalLocationNumber1': !exists(json, 'InternationalLocationNumber1') ? undefined : json['InternationalLocationNumber1'],
        'internationalLocationNumber2': !exists(json, 'InternationalLocationNumber2') ? undefined : json['InternationalLocationNumber2'],
        'isFemale': !exists(json, 'IsFemale') ? undefined : json['IsFemale'],
        'isMale': !exists(json, 'IsMale') ? undefined : json['IsMale'],
        'isNaturalPerson': !exists(json, 'IsNaturalPerson') ? undefined : json['IsNaturalPerson'],
        'isSexUnknown': !exists(json, 'IsSexUnknown') ? undefined : json['IsSexUnknown'],
        'genderCodeName': !exists(json, 'GenderCodeName') ? undefined : json['GenderCodeName'],
        'language': !exists(json, 'Language') ? undefined : json['Language'],
        'lastName': !exists(json, 'LastName') ? undefined : json['LastName'],
        'legalForm': !exists(json, 'LegalForm') ? undefined : json['LegalForm'],
        'organizationBPName1': !exists(json, 'OrganizationBPName1') ? undefined : json['OrganizationBPName1'],
        'organizationBPName2': !exists(json, 'OrganizationBPName2') ? undefined : json['OrganizationBPName2'],
        'organizationBPName3': !exists(json, 'OrganizationBPName3') ? undefined : json['OrganizationBPName3'],
        'organizationBPName4': !exists(json, 'OrganizationBPName4') ? undefined : json['OrganizationBPName4'],
        'organizationFoundationDate': !exists(json, 'OrganizationFoundationDate') ? undefined : (json['OrganizationFoundationDate'] === null ? null : new Date(json['OrganizationFoundationDate'])),
        'organizationLiquidationDate': !exists(json, 'OrganizationLiquidationDate') ? undefined : (json['OrganizationLiquidationDate'] === null ? null : new Date(json['OrganizationLiquidationDate'])),
        'searchTerm1': !exists(json, 'SearchTerm1') ? undefined : json['SearchTerm1'],
        'searchTerm2': !exists(json, 'SearchTerm2') ? undefined : json['SearchTerm2'],
        'additionalLastName': !exists(json, 'AdditionalLastName') ? undefined : json['AdditionalLastName'],
        'birthDate': !exists(json, 'BirthDate') ? undefined : (json['BirthDate'] === null ? null : new Date(json['BirthDate'])),
        'businessPartnerBirthDateStatus': !exists(json, 'BusinessPartnerBirthDateStatus') ? undefined : json['BusinessPartnerBirthDateStatus'],
        'businessPartnerBirthplaceName': !exists(json, 'BusinessPartnerBirthplaceName') ? undefined : json['BusinessPartnerBirthplaceName'],
        'businessPartnerDeathDate': !exists(json, 'BusinessPartnerDeathDate') ? undefined : (json['BusinessPartnerDeathDate'] === null ? null : new Date(json['BusinessPartnerDeathDate'])),
        'businessPartnerIsBlocked': !exists(json, 'BusinessPartnerIsBlocked') ? undefined : json['BusinessPartnerIsBlocked'],
        'businessPartnerType': !exists(json, 'BusinessPartnerType') ? undefined : json['BusinessPartnerType'],
        'groupBusinessPartnerName1': !exists(json, 'GroupBusinessPartnerName1') ? undefined : json['GroupBusinessPartnerName1'],
        'groupBusinessPartnerName2': !exists(json, 'GroupBusinessPartnerName2') ? undefined : json['GroupBusinessPartnerName2'],
        'internationalLocationNumber3': !exists(json, 'InternationalLocationNumber3') ? undefined : json['InternationalLocationNumber3'],
        'middleName': !exists(json, 'MiddleName') ? undefined : json['MiddleName'],
        'nameCountry': !exists(json, 'NameCountry') ? undefined : json['NameCountry'],
        'nameFormat': !exists(json, 'NameFormat') ? undefined : json['NameFormat'],
        'personFullName': !exists(json, 'PersonFullName') ? undefined : json['PersonFullName'],
        'isMarkedForArchiving': !exists(json, 'IsMarkedForArchiving') ? undefined : json['IsMarkedForArchiving'],
        'businessPartnerIDByExtSystem': !exists(json, 'BusinessPartnerIDByExtSystem') ? undefined : json['BusinessPartnerIDByExtSystem'],
        'businessPartnerPrintFormat': !exists(json, 'BusinessPartnerPrintFormat') ? undefined : json['BusinessPartnerPrintFormat'],
        'businessPartnerOccupation': !exists(json, 'BusinessPartnerOccupation') ? undefined : json['BusinessPartnerOccupation'],
        'busPartMaritalStatus': !exists(json, 'BusPartMaritalStatus') ? undefined : json['BusPartMaritalStatus'],
        'busPartNationality': !exists(json, 'BusPartNationality') ? undefined : json['BusPartNationality'],
        'businessPartnerBirthName': !exists(json, 'BusinessPartnerBirthName') ? undefined : json['BusinessPartnerBirthName'],
        'businessPartnerSupplementName': !exists(json, 'BusinessPartnerSupplementName') ? undefined : json['BusinessPartnerSupplementName'],
        'naturalPersonEmployerName': !exists(json, 'NaturalPersonEmployerName') ? undefined : json['NaturalPersonEmployerName'],
        'lastNamePrefix': !exists(json, 'LastNamePrefix') ? undefined : json['LastNamePrefix'],
        'lastNameSecondPrefix': !exists(json, 'LastNameSecondPrefix') ? undefined : json['LastNameSecondPrefix'],
        'initials': !exists(json, 'Initials') ? undefined : json['Initials'],
        'bPDataControllerIsNotRequired': !exists(json, 'BPDataControllerIsNotRequired') ? undefined : json['BPDataControllerIsNotRequired'],
        'tradingPartner': !exists(json, 'TradingPartner') ? undefined : json['TradingPartner'],
    };
}

export function APIBUSINESSPARTNERABusinessPartnerTypeUpdateToJSON(value?: APIBUSINESSPARTNERABusinessPartnerTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AcademicTitle': value.academicTitle,
        'AuthorizationGroup': value.authorizationGroup,
        'BusinessPartnerCategory': value.businessPartnerCategory,
        'BusinessPartnerGrouping': value.businessPartnerGrouping,
        'CorrespondenceLanguage': value.correspondenceLanguage,
        'FirstName': value.firstName,
        'FormOfAddress': value.formOfAddress,
        'Industry': value.industry,
        'InternationalLocationNumber1': value.internationalLocationNumber1,
        'InternationalLocationNumber2': value.internationalLocationNumber2,
        'IsFemale': value.isFemale,
        'IsMale': value.isMale,
        'IsNaturalPerson': value.isNaturalPerson,
        'IsSexUnknown': value.isSexUnknown,
        'GenderCodeName': value.genderCodeName,
        'Language': value.language,
        'LastName': value.lastName,
        'LegalForm': value.legalForm,
        'OrganizationBPName1': value.organizationBPName1,
        'OrganizationBPName2': value.organizationBPName2,
        'OrganizationBPName3': value.organizationBPName3,
        'OrganizationBPName4': value.organizationBPName4,
        'OrganizationFoundationDate': value.organizationFoundationDate === undefined ? undefined : (value.organizationFoundationDate === null ? null : value.organizationFoundationDate.toISOString().substring(0,10)),
        'OrganizationLiquidationDate': value.organizationLiquidationDate === undefined ? undefined : (value.organizationLiquidationDate === null ? null : value.organizationLiquidationDate.toISOString().substring(0,10)),
        'SearchTerm1': value.searchTerm1,
        'SearchTerm2': value.searchTerm2,
        'AdditionalLastName': value.additionalLastName,
        'BirthDate': value.birthDate === undefined ? undefined : (value.birthDate === null ? null : value.birthDate.toISOString().substring(0,10)),
        'BusinessPartnerBirthDateStatus': value.businessPartnerBirthDateStatus,
        'BusinessPartnerBirthplaceName': value.businessPartnerBirthplaceName,
        'BusinessPartnerDeathDate': value.businessPartnerDeathDate === undefined ? undefined : (value.businessPartnerDeathDate === null ? null : value.businessPartnerDeathDate.toISOString().substring(0,10)),
        'BusinessPartnerIsBlocked': value.businessPartnerIsBlocked,
        'BusinessPartnerType': value.businessPartnerType,
        'GroupBusinessPartnerName1': value.groupBusinessPartnerName1,
        'GroupBusinessPartnerName2': value.groupBusinessPartnerName2,
        'InternationalLocationNumber3': value.internationalLocationNumber3,
        'MiddleName': value.middleName,
        'NameCountry': value.nameCountry,
        'NameFormat': value.nameFormat,
        'PersonFullName': value.personFullName,
        'IsMarkedForArchiving': value.isMarkedForArchiving,
        'BusinessPartnerIDByExtSystem': value.businessPartnerIDByExtSystem,
        'BusinessPartnerPrintFormat': value.businessPartnerPrintFormat,
        'BusinessPartnerOccupation': value.businessPartnerOccupation,
        'BusPartMaritalStatus': value.busPartMaritalStatus,
        'BusPartNationality': value.busPartNationality,
        'BusinessPartnerBirthName': value.businessPartnerBirthName,
        'BusinessPartnerSupplementName': value.businessPartnerSupplementName,
        'NaturalPersonEmployerName': value.naturalPersonEmployerName,
        'LastNamePrefix': value.lastNamePrefix,
        'LastNameSecondPrefix': value.lastNameSecondPrefix,
        'Initials': value.initials,
        'BPDataControllerIsNotRequired': value.bPDataControllerIsNotRequired,
        'TradingPartner': value.tradingPartner,
    };
}

