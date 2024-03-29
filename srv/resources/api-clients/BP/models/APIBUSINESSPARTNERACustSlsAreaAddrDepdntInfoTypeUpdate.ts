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
 * @interface APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
 */
export interface APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate {
    /**
     * Incoterms (Part 1)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    incotermsClassification?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    incotermsLocation1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    incotermsLocation2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    incotermsSupChnLoc1AddlUUID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    incotermsSupChnLoc2AddlUUID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    incotermsSupChnDvtgLocAddlUUID?: string | null;
    /**
     * Customer delivery block (sales area)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    deliveryIsBlocked?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    salesOffice?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    salesGroup?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    shippingCondition?: string | null;
    /**
     * Delivering Plant (Own or External)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    supplyingPlant?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate
     */
    incotermsVersion?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdateFromJSON(json: any): APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate {
    return APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
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

export function APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdateToJSON(value?: APIBUSINESSPARTNERACustSlsAreaAddrDepdntInfoTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
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

