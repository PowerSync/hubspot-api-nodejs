/**
 * Orderss
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SimplePublicObjectBatchInput } from '../models/SimplePublicObjectBatchInput';

export class BatchInputSimplePublicObjectBatchInput {
    'inputs': Array<SimplePublicObjectBatchInput>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<SimplePublicObjectBatchInput>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputSimplePublicObjectBatchInput.attributeTypeMap;
    }

    public constructor() {
    }
}

