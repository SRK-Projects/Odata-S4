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
import type { ErrorErrorMessage } from './ErrorErrorMessage';
import {
    ErrorErrorMessageFromJSON,
    ErrorErrorMessageFromJSONTyped,
    ErrorErrorMessageToJSON,
} from './ErrorErrorMessage';

/**
 * 
 * @export
 * @interface ErrorError
 */
export interface ErrorError {
    /**
     * 
     * @type {string}
     * @memberof ErrorError
     */
    code: string;
    /**
     * 
     * @type {ErrorErrorMessage}
     * @memberof ErrorError
     */
    message: ErrorErrorMessage;
    /**
     * The structure of this object is service-specific
     * @type {object}
     * @memberof ErrorError
     */
    innererror?: object;
}

/**
 * Check if a given object implements the ErrorError interface.
 */
export function instanceOfErrorError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function ErrorErrorFromJSON(json: any): ErrorError {
    return ErrorErrorFromJSONTyped(json, false);
}

export function ErrorErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'message': ErrorErrorMessageFromJSON(json['message']),
        'innererror': !exists(json, 'innererror') ? undefined : json['innererror'],
    };
}

export function ErrorErrorToJSON(value?: ErrorError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': ErrorErrorMessageToJSON(value.message),
        'innererror': value.innererror,
    };
}

