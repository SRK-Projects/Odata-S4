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
 * @interface APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
 */
export interface APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    salesOrganization: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    distributionChannel: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    division: string;
    /**
     * Business Partner Address Number (from BUT020)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    addressID: string;
    /**
     * Incoterms (Part 1)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    incotermsClassification?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    incotermsLocation1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    incotermsLocation2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    incotermsSupChnLoc1AddlUUID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    incotermsSupChnLoc2AddlUUID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    incotermsSupChnDvtgLocAddlUUID?: string | null;
    /**
     * Customer delivery block (sales area)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    deliveryIsBlocked?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    salesOffice?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    salesGroup?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    shippingCondition?: string | null;
    /**
     * Delivering Plant (Own or External)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    supplyingPlant?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate
     */
    incotermsVersion?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customer" in value;
    isInstance = isInstance && "salesOrganization" in value;
    isInstance = isInstance && "distributionChannel" in value;
    isInstance = isInstance && "division" in value;
    isInstance = isInstance && "addressID" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreateFromJSON(json: any): APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate {
    return APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': json['Customer'],
        'salesOrganization': json['SalesOrganization'],
        'distributionChannel': json['DistributionChannel'],
        'division': json['Division'],
        'addressID': json['AddressID'],
        'incotermsClassification': !exists(json, 'IncotermsClassification') ? undefined : json['IncotermsClassification'],
        'incotermsLocation1': !exists(json, 'IncotermsLocation1') ? undefined : json['IncotermsLocation1'],
        'incotermsLocation2': !exists(json, 'IncotermsLocation2') ? undefined : json['IncotermsLocation2'],
        'incotermsSupChnLoc1AddlUUID': !exists(json, 'IncotermsSupChnLoc1AddlUUID') ? undefined : json['IncotermsSupChnLoc1AddlUUID'],
        'incotermsSupChnLoc2AddlUUID': !exists(json, 'IncotermsSupChnLoc2AddlUUID') ? undefined : json['IncotermsSupChnLoc2AddlUUID'],
        'incotermsSupChnDvtgLocAddlUUID': !exists(json, 'IncotermsSupChnDvtgLocAddlUUID') ? undefined : json['IncotermsSupChnDvtgLocAddlUUID'],
        'deliveryIsBlocked': !exists(json, 'DeliveryIsBlocked') ? undefined : json['DeliveryIsBlocked'],
        'salesOffice': !exists(json, 'SalesOffice') ? undefined : json['SalesOffice'],
        'salesGroup': !exists(json, 'SalesGroup') ? undefined : json['SalesGroup'],
        'shippingCondition': !exists(json, 'ShippingCondition') ? undefined : json['ShippingCondition'],
        'supplyingPlant': !exists(json, 'SupplyingPlant') ? undefined : json['SupplyingPlant'],
        'incotermsVersion': !exists(json, 'IncotermsVersion') ? undefined : json['IncotermsVersion'],
    };
}

export function APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreateToJSON(value?: APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'SalesOrganization': value.salesOrganization,
        'DistributionChannel': value.distributionChannel,
        'Division': value.division,
        'AddressID': value.addressID,
        'IncotermsClassification': value.incotermsClassification,
        'IncotermsLocation1': value.incotermsLocation1,
        'IncotermsLocation2': value.incotermsLocation2,
        'IncotermsSupChnLoc1AddlUUID': value.incotermsSupChnLoc1AddlUUID,
        'IncotermsSupChnLoc2AddlUUID': value.incotermsSupChnLoc2AddlUUID,
        'IncotermsSupChnDvtgLocAddlUUID': value.incotermsSupChnDvtgLocAddlUUID,
        'DeliveryIsBlocked': value.deliveryIsBlocked,
        'SalesOffice': value.salesOffice,
        'SalesGroup': value.salesGroup,
        'ShippingCondition': value.shippingCondition,
        'SupplyingPlant': value.supplyingPlant,
        'IncotermsVersion': value.incotermsVersion,
    };
}

