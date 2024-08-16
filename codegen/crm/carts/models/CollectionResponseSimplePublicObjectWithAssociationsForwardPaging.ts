/**
 * Carts
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ForwardPaging } from '../models/ForwardPaging';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';

export class CollectionResponseSimplePublicObjectWithAssociationsForwardPaging {
    'paging'?: ForwardPaging;
    'results': Array<SimplePublicObjectWithAssociations>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObjectWithAssociations>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseSimplePublicObjectWithAssociationsForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

