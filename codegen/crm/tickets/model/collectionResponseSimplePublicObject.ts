/**
 * Tickets
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { Paging } from './paging';
import { SimplePublicObject } from './simplePublicObject';

export class CollectionResponseSimplePublicObject {
    'results': Array<SimplePublicObject>;
    'paging'?: Paging;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObject>"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging"
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseSimplePublicObject.attributeTypeMap;
    }
}

