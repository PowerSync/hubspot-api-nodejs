/**
 * Marketing Events Extension
 * These APIs allow you to interact with HubSpot's Marketing Events Extension. It allows you to: * Create, Read or update Marketing Event information in HubSpot * Specify whether a HubSpot contact has registered, attended or cancelled a registration to a Marketing Event. * Specify a URL that can be called to get the details of a Marketing Event. 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class MarketingEventExternalUniqueIdentifier {
    /**
    * The id of the application that created the marketing event in HubSpot.
    */
    'appId': number;
    /**
    * The accountId that is associated with this marketing event in the external event application.
    */
    'externalAccountId': string;
    /**
    * The id of the marketing event in the external event application.
    */
    'externalEventId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appId",
            "baseName": "appId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "externalAccountId",
            "baseName": "externalAccountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalEventId",
            "baseName": "externalEventId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MarketingEventExternalUniqueIdentifier.attributeTypeMap;
    }

    public constructor() {
    }
}
