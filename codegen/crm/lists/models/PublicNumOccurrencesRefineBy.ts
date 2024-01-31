/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicNumOccurrencesRefineBy {
    'type': PublicNumOccurrencesRefineByTypeEnum;
    'minOccurrences'?: number;
    'maxOccurrences'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PublicNumOccurrencesRefineByTypeEnum",
            "format": ""
        },
        {
            "name": "minOccurrences",
            "baseName": "minOccurrences",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maxOccurrences",
            "baseName": "maxOccurrences",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PublicNumOccurrencesRefineBy.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicNumOccurrencesRefineByTypeEnum {
    NumOccurrences = 'NUM_OCCURRENCES'
}
