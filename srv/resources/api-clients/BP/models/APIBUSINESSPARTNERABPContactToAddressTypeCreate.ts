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
import type { APIBUSINESSPARTNERAAddressEmailAddressTypeCreate } from './APIBUSINESSPARTNERAAddressEmailAddressTypeCreate';
import {
    APIBUSINESSPARTNERAAddressEmailAddressTypeCreateFromJSON,
    APIBUSINESSPARTNERAAddressEmailAddressTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERAAddressEmailAddressTypeCreateToJSON,
} from './APIBUSINESSPARTNERAAddressEmailAddressTypeCreate';
import type { APIBUSINESSPARTNERAAddressFaxNumberTypeCreate } from './APIBUSINESSPARTNERAAddressFaxNumberTypeCreate';
import {
    APIBUSINESSPARTNERAAddressFaxNumberTypeCreateFromJSON,
    APIBUSINESSPARTNERAAddressFaxNumberTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERAAddressFaxNumberTypeCreateToJSON,
} from './APIBUSINESSPARTNERAAddressFaxNumberTypeCreate';
import type { APIBUSINESSPARTNERAAddressHomePageURLTypeCreate } from './APIBUSINESSPARTNERAAddressHomePageURLTypeCreate';
import {
    APIBUSINESSPARTNERAAddressHomePageURLTypeCreateFromJSON,
    APIBUSINESSPARTNERAAddressHomePageURLTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERAAddressHomePageURLTypeCreateToJSON,
} from './APIBUSINESSPARTNERAAddressHomePageURLTypeCreate';
import type { APIBUSINESSPARTNERAAddressPhoneNumberTypeCreate } from './APIBUSINESSPARTNERAAddressPhoneNumberTypeCreate';
import {
    APIBUSINESSPARTNERAAddressPhoneNumberTypeCreateFromJSON,
    APIBUSINESSPARTNERAAddressPhoneNumberTypeCreateFromJSONTyped,
    APIBUSINESSPARTNERAAddressPhoneNumberTypeCreateToJSON,
} from './APIBUSINESSPARTNERAAddressPhoneNumberTypeCreate';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERABPContactToAddressTypeCreate
 */
export interface APIBUSINESSPARTNERABPContactToAddressTypeCreate {
    /**
     * BP Relationship Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    relationshipNumber: string;
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    businessPartnerCompany: string;
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    businessPartnerPerson: string;
    /**
     * Validity Date (Valid To)
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    validityEndDate: Date;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    addressID: string;
    /**
     * Building (number or code)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    contactPersonBuilding?: string | null;
    /**
     * Communication Method (Key) (Business Address Services)
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    contactPersonPrfrdCommMedium?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    contactRelationshipDepartment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    contactRelationshipFunction?: string | null;
    /**
     * Short name for correspondence
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    correspondenceShortName?: string | null;
    /**
     * Floor in building
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    floor?: string | null;
    /**
     * Internal Mail Postal Code
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    inhouseMail?: string | null;
    /**
     * Indicator: Address is standard address
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    isDefaultAddress?: boolean | null;
    /**
     * Room or Apartment Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    roomNumber?: string | null;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressEmailAddressTypeCreate>}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    toEmailAddress?: Array<APIBUSINESSPARTNERAAddressEmailAddressTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressFaxNumberTypeCreate>}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    toFaxNumber?: Array<APIBUSINESSPARTNERAAddressFaxNumberTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressPhoneNumberTypeCreate>}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    toMobilePhoneNumber?: Array<APIBUSINESSPARTNERAAddressPhoneNumberTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressPhoneNumberTypeCreate>}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    toPhoneNumber?: Array<APIBUSINESSPARTNERAAddressPhoneNumberTypeCreate>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERAAddressHomePageURLTypeCreate>}
     * @memberof APIBUSINESSPARTNERABPContactToAddressTypeCreate
     */
    toURLAddress?: Array<APIBUSINESSPARTNERAAddressHomePageURLTypeCreate>;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPContactToAddressTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPContactToAddressTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "relationshipNumber" in value;
    isInstance = isInstance && "businessPartnerCompany" in value;
    isInstance = isInstance && "businessPartnerPerson" in value;
    isInstance = isInstance && "validityEndDate" in value;
    isInstance = isInstance && "addressID" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABPContactToAddressTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABPContactToAddressTypeCreate {
    return APIBUSINESSPARTNERABPContactToAddressTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPContactToAddressTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPContactToAddressTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relationshipNumber': json['RelationshipNumber'],
        'businessPartnerCompany': json['BusinessPartnerCompany'],
        'businessPartnerPerson': json['BusinessPartnerPerson'],
        'validityEndDate': (new Date(json['ValidityEndDate'])),
        'addressID': json['AddressID'],
        'contactPersonBuilding': !exists(json, 'ContactPersonBuilding') ? undefined : json['ContactPersonBuilding'],
        'contactPersonPrfrdCommMedium': !exists(json, 'ContactPersonPrfrdCommMedium') ? undefined : json['ContactPersonPrfrdCommMedium'],
        'contactRelationshipDepartment': !exists(json, 'ContactRelationshipDepartment') ? undefined : json['ContactRelationshipDepartment'],
        'contactRelationshipFunction': !exists(json, 'ContactRelationshipFunction') ? undefined : json['ContactRelationshipFunction'],
        'correspondenceShortName': !exists(json, 'CorrespondenceShortName') ? undefined : json['CorrespondenceShortName'],
        'floor': !exists(json, 'Floor') ? undefined : json['Floor'],
        'inhouseMail': !exists(json, 'InhouseMail') ? undefined : json['InhouseMail'],
        'isDefaultAddress': !exists(json, 'IsDefaultAddress') ? undefined : json['IsDefaultAddress'],
        'roomNumber': !exists(json, 'RoomNumber') ? undefined : json['RoomNumber'],
        'toEmailAddress': !exists(json, 'to_EmailAddress') ? undefined : ((json['to_EmailAddress'] as Array<any>).map(APIBUSINESSPARTNERAAddressEmailAddressTypeCreateFromJSON)),
        'toFaxNumber': !exists(json, 'to_FaxNumber') ? undefined : ((json['to_FaxNumber'] as Array<any>).map(APIBUSINESSPARTNERAAddressFaxNumberTypeCreateFromJSON)),
        'toMobilePhoneNumber': !exists(json, 'to_MobilePhoneNumber') ? undefined : ((json['to_MobilePhoneNumber'] as Array<any>).map(APIBUSINESSPARTNERAAddressPhoneNumberTypeCreateFromJSON)),
        'toPhoneNumber': !exists(json, 'to_PhoneNumber') ? undefined : ((json['to_PhoneNumber'] as Array<any>).map(APIBUSINESSPARTNERAAddressPhoneNumberTypeCreateFromJSON)),
        'toURLAddress': !exists(json, 'to_URLAddress') ? undefined : ((json['to_URLAddress'] as Array<any>).map(APIBUSINESSPARTNERAAddressHomePageURLTypeCreateFromJSON)),
    };
}

export function APIBUSINESSPARTNERABPContactToAddressTypeCreateToJSON(value?: APIBUSINESSPARTNERABPContactToAddressTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RelationshipNumber': value.relationshipNumber,
        'BusinessPartnerCompany': value.businessPartnerCompany,
        'BusinessPartnerPerson': value.businessPartnerPerson,
        'ValidityEndDate': (value.validityEndDate.toISOString().substring(0,10)),
        'AddressID': value.addressID,
        'ContactPersonBuilding': value.contactPersonBuilding,
        'ContactPersonPrfrdCommMedium': value.contactPersonPrfrdCommMedium,
        'ContactRelationshipDepartment': value.contactRelationshipDepartment,
        'ContactRelationshipFunction': value.contactRelationshipFunction,
        'CorrespondenceShortName': value.correspondenceShortName,
        'Floor': value.floor,
        'InhouseMail': value.inhouseMail,
        'IsDefaultAddress': value.isDefaultAddress,
        'RoomNumber': value.roomNumber,
        'to_EmailAddress': value.toEmailAddress === undefined ? undefined : ((value.toEmailAddress as Array<any>).map(APIBUSINESSPARTNERAAddressEmailAddressTypeCreateToJSON)),
        'to_FaxNumber': value.toFaxNumber === undefined ? undefined : ((value.toFaxNumber as Array<any>).map(APIBUSINESSPARTNERAAddressFaxNumberTypeCreateToJSON)),
        'to_MobilePhoneNumber': value.toMobilePhoneNumber === undefined ? undefined : ((value.toMobilePhoneNumber as Array<any>).map(APIBUSINESSPARTNERAAddressPhoneNumberTypeCreateToJSON)),
        'to_PhoneNumber': value.toPhoneNumber === undefined ? undefined : ((value.toPhoneNumber as Array<any>).map(APIBUSINESSPARTNERAAddressPhoneNumberTypeCreateToJSON)),
        'to_URLAddress': value.toURLAddress === undefined ? undefined : ((value.toURLAddress as Array<any>).map(APIBUSINESSPARTNERAAddressHomePageURLTypeCreateToJSON)),
    };
}

