/**
 * Feedback Submissions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class Filter {
    'value'?: string;
    'highValue'?: string;
    'values'?: Array<string>;
    'propertyName': string;
    /**
    * null
    */
    'operator': FilterOperatorEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "highValue",
            "baseName": "highValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "propertyName",
            "baseName": "propertyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "FilterOperatorEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Filter.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FilterOperatorEnum = "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE" | "BETWEEN" | "IN" | "NOT_IN" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "CONTAINS_TOKEN" | "NOT_CONTAINS_TOKEN" ;

