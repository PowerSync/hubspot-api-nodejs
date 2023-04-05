/**
 * HubDB endpoints
 * HubDB is a relational data store that presents data as rows, columns, and cells in a table, much like a spreadsheet. HubDB tables can be added or modified [in the HubSpot CMS](https://knowledge.hubspot.com/cos-general/how-to-edit-hubdb-tables), but you can also use the API endpoints documented here. For more information on HubDB tables and using their data on a HubSpot site, see the [CMS developers site](https://designers.hubspot.com/docs/tools/hubdb). You can also see the [documentation for dynamic pages](https://designers.hubspot.com/docs/tutorials/how-to-build-dynamic-pages-with-hubdb) for more details about the `useForPages` field.  HubDB tables support `draft` and `published` versions. This allows you to update data in the table, either for testing or to allow for a manual approval process, without affecting any live pages using the existing data. Draft data can be reviewed, and published by a user working in HubSpot or published via the API. Draft data can also be discarded, allowing users to go back to the published version of the data without disrupting it. If a table is set to be `allowed for public access`, you can access the published version of the table and rows without any authentication by specifying the portal id via the query parameter `portalId`.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Column } from '../models/Column';
import { SimpleUser } from '../models/SimpleUser';

/**
* Model for HubDB table
*/
export class HubDbTableV3 {
    /**
    * Id of the table
    */
    'id'?: string;
    /**
    * Name of the table
    */
    'name': string;
    /**
    * Label of the table
    */
    'label': string;
    /**
    * List of columns in the table
    */
    'columns'?: Array<Column>;
    'published'?: boolean;
    'deleted'?: boolean;
    /**
    * Number of columns including deleted
    */
    'columnCount'?: number;
    /**
    * Number of rows in the table
    */
    'rowCount'?: number;
    'createdBy'?: SimpleUser;
    'updatedBy'?: SimpleUser;
    /**
    * Specifies whether the table can be used for creation of dynamic pages
    */
    'useForPages'?: boolean;
    /**
    * Specifies whether child tables can be created
    */
    'allowChildTables'?: boolean;
    /**
    * Specifies creation of multi-level dynamic pages using child tables
    */
    'enableChildTablePages'?: boolean;
    'isOrderedManually'?: boolean;
    /**
    * Specifies the key value pairs of the metadata fields with the associated column ids
    */
    'dynamicMetaTags'?: { [key: string]: number; };
    /**
    * Specifies whether the table can be read by public without authorization
    */
    'allowPublicApiAccess'?: boolean;
    /**
    * Timestamp at which the table is created
    */
    'createdAt'?: Date;
    /**
    * Timestamp at which the table is published recently
    */
    'publishedAt'?: Date;
    /**
    * Timestamp at which the table is updated recently
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<Column>",
            "format": ""
        },
        {
            "name": "published",
            "baseName": "published",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "columnCount",
            "baseName": "columnCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "rowCount",
            "baseName": "rowCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "SimpleUser",
            "format": ""
        },
        {
            "name": "updatedBy",
            "baseName": "updatedBy",
            "type": "SimpleUser",
            "format": ""
        },
        {
            "name": "useForPages",
            "baseName": "useForPages",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowChildTables",
            "baseName": "allowChildTables",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enableChildTablePages",
            "baseName": "enableChildTablePages",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isOrderedManually",
            "baseName": "isOrderedManually",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dynamicMetaTags",
            "baseName": "dynamicMetaTags",
            "type": "{ [key: string]: number; }",
            "format": "int32"
        },
        {
            "name": "allowPublicApiAccess",
            "baseName": "allowPublicApiAccess",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "publishedAt",
            "baseName": "publishedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return HubDbTableV3.attributeTypeMap;
    }

    public constructor() {
    }
}

