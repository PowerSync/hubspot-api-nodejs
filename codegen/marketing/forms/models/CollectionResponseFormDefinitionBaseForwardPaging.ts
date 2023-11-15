/**
 * Forms
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CollectionResponseFormDefinitionBaseForwardPagingResultsInner } from '../models/CollectionResponseFormDefinitionBaseForwardPagingResultsInner';
import { ForwardPaging } from '../models/ForwardPaging';
import { HttpFile } from '../http/http';

export class CollectionResponseFormDefinitionBaseForwardPaging {
    'paging'?: ForwardPaging;
    'results': Array<CollectionResponseFormDefinitionBaseForwardPagingResultsInner>;

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
            "type": "Array<CollectionResponseFormDefinitionBaseForwardPagingResultsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseFormDefinitionBaseForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

