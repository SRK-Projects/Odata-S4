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
 * @interface APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
 */
export interface APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate {
    /**
     * Partner's Authority
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    contactPersonAuthorityType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    contactPersonDepartment?: string | null;
    /**
     * Department at business partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    contactPersonDepartmentName?: string | null;
    /**
     * Function of partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    contactPersonFunction?: string | null;
    /**
     * Function name of partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    contactPersonFunctionName?: string | null;
    /**
     * Notes for Partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    contactPersonRemarkText?: string | null;
    /**
     * VIP Partner
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    contactPersonVIPType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    emailAddress?: string | null;
    /**
     * Fax Number: Dialing Code and Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    faxNumber?: string | null;
    /**
     * Fax no.: Extension
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    faxNumberExtension?: string | null;
    /**
     * Telephone No.: Dialing Code and Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    phoneNumber?: string | null;
    /**
     * Telephone no.: Extension
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    phoneNumberExtension?: string | null;
    /**
     * Business Partner Relationship Category
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate
     */
    relationshipCategory?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate {
    return APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contactPersonAuthorityType': !exists(json, 'ContactPersonAuthorityType') ? undefined : json['ContactPersonAuthorityType'],
        'contactPersonDepartment': !exists(json, 'ContactPersonDepartment') ? undefined : json['ContactPersonDepartment'],
        'contactPersonDepartmentName': !exists(json, 'ContactPersonDepartmentName') ? undefined : json['ContactPersonDepartmentName'],
        'contactPersonFunction': !exists(json, 'ContactPersonFunction') ? undefined : json['ContactPersonFunction'],
        'contactPersonFunctionName': !exists(json, 'ContactPersonFunctionName') ? undefined : json['ContactPersonFunctionName'],
        'contactPersonRemarkText': !exists(json, 'ContactPersonRemarkText') ? undefined : json['ContactPersonRemarkText'],
        'contactPersonVIPType': !exists(json, 'ContactPersonVIPType') ? undefined : json['ContactPersonVIPType'],
        'emailAddress': !exists(json, 'EmailAddress') ? undefined : json['EmailAddress'],
        'faxNumber': !exists(json, 'FaxNumber') ? undefined : json['FaxNumber'],
        'faxNumberExtension': !exists(json, 'FaxNumberExtension') ? undefined : json['FaxNumberExtension'],
        'phoneNumber': !exists(json, 'PhoneNumber') ? undefined : json['PhoneNumber'],
        'phoneNumberExtension': !exists(json, 'PhoneNumberExtension') ? undefined : json['PhoneNumberExtension'],
        'relationshipCategory': !exists(json, 'RelationshipCategory') ? undefined : json['RelationshipCategory'],
    };
}

export function APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdateToJSON(value?: APIBUSINESSPARTNERABPContactToFuncAndDeptTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ContactPersonAuthorityType': value.contactPersonAuthorityType,
        'ContactPersonDepartment': value.contactPersonDepartment,
        'ContactPersonDepartmentName': value.contactPersonDepartmentName,
        'ContactPersonFunction': value.contactPersonFunction,
        'ContactPersonFunctionName': value.contactPersonFunctionName,
        'ContactPersonRemarkText': value.contactPersonRemarkText,
        'ContactPersonVIPType': value.contactPersonVIPType,
        'EmailAddress': value.emailAddress,
        'FaxNumber': value.faxNumber,
        'FaxNumberExtension': value.faxNumberExtension,
        'PhoneNumber': value.phoneNumber,
        'PhoneNumberExtension': value.phoneNumberExtension,
        'RelationshipCategory': value.relationshipCategory,
    };
}

