/**
 * CrmPublicObjectsService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicAssociationDefinitionUpdateRequest {
    'associationTypeId': number;
    'label': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associationTypeId",
            "baseName": "associationTypeId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicAssociationDefinitionUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

