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
 * @interface APIBUSINESSPARTNERACustAddrDepdntInformationType
 */
export interface APIBUSINESSPARTNERACustAddrDepdntInformationType {
    /**
     * Customer Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustAddrDepdntInformationType
     */
    customer?: string;
    /**
     * Business Partner Address Number (from BUT020)
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustAddrDepdntInformationType
     */
    addressID?: string;
    /**
     * Express train station
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustAddrDepdntInformationType
     */
    expressTrainStationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustAddrDepdntInformationType
     */
    trainStationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustAddrDepdntInformationType
     */
    cityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERACustAddrDepdntInformationType
     */
    county?: string | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERACustAddrDepdntInformationType interface.
 */
export function instanceOfAPIBUSINESSPARTNERACustAddrDepdntInformationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERACustAddrDepdntInformationTypeFromJSON(json: any): APIBUSINESSPARTNERACustAddrDepdntInformationType {
    return APIBUSINESSPARTNERACustAddrDepdntInformationTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERACustAddrDepdntInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERACustAddrDepdntInformationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer': !exists(json, 'Customer') ? undefined : json['Customer'],
        'addressID': !exists(json, 'AddressID') ? undefined : json['AddressID'],
        'expressTrainStationName': !exists(json, 'ExpressTrainStationName') ? undefined : json['ExpressTrainStationName'],
        'trainStationName': !exists(json, 'TrainStationName') ? undefined : json['TrainStationName'],
        'cityCode': !exists(json, 'CityCode') ? undefined : json['CityCode'],
        'county': !exists(json, 'County') ? undefined : json['County'],
    };
}

export function APIBUSINESSPARTNERACustAddrDepdntInformationTypeToJSON(value?: APIBUSINESSPARTNERACustAddrDepdntInformationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Customer': value.customer,
        'AddressID': value.addressID,
        'ExpressTrainStationName': value.expressTrainStationName,
        'TrainStationName': value.trainStationName,
        'CityCode': value.cityCode,
        'County': value.county,
    };
}
