/**
 * Subscriptions
 * Subscriptions allow contacts to control what forms of communications they receive. Contacts can decide whether they want to receive communication pertaining to a specific topic, brand, or an entire HubSpot account.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SubscriptionDefinition {
    /**
    * A default description that is used by some HubSpot tools and cannot be edited.
    */
    'isInternal': boolean;
    /**
    * Time at which the definition was created.
    */
    'createdAt': Date;
    /**
    * A subscription definition created by HubSpot.
    */
    'isDefault': boolean;
    /**
    * The method or technology used to contact.
    */
    'communicationMethod'?: string;
    /**
    * The purpose of this subscription or the department in your organization that uses it.
    */
    'purpose'?: string;
    /**
    * The name of the subscription.
    */
    'name': string;
    /**
    * A description of the subscription.
    */
    'description': string;
    /**
    * The ID of the definition.
    */
    'id': string;
    /**
    * Whether the definition is active or archived.
    */
    'isActive': boolean;
    /**
    * Time at which the definition was last updated.
    */
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isInternal",
            "baseName": "isInternal",
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
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "communicationMethod",
            "baseName": "communicationMethod",
            "type": "string",
            "format": ""
        },
        {
            "name": "purpose",
            "baseName": "purpose",
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}

