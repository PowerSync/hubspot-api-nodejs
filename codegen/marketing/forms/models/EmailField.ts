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

import { DependentField } from '../models/DependentField';
import { EmailFieldValidation } from '../models/EmailFieldValidation';
import { HttpFile } from '../http/http';

/**
* A form field used for collecting an email address.
*/
export class EmailField {
    /**
    * Determines how the field will be displayed and validated.
    */
    'fieldType': EmailFieldFieldTypeEnum;
    /**
    * A unique ID for this field's CRM object type. For example a CONTACT field will have the object type ID 0-1.
    */
    'objectTypeId': string;
    /**
    * The identifier of the field. In combination with the object type ID, it must be unique.
    */
    'name': string;
    /**
    * The main label for the form field.
    */
    'label': string;
    /**
    * Additional text helping the customer to complete the field.
    */
    'description'?: string;
    /**
    * Whether a value for this field is required when submitting the form.
    */
    'required': boolean;
    /**
    * Whether a field should be hidden or not. Hidden fields won't appear on the form, but can be used to pass a value to a property without requiring the customer to fill it in.
    */
    'hidden': boolean;
    /**
    * A list of other fields to make visible based on the value filled in for this field.
    */
    'dependentFields': Array<DependentField>;
    /**
    * The prompt text showing when the field isn't filled in.
    */
    'placeholder'?: string;
    /**
    * The value filled in by default. This value will be submitted unless the customer modifies it.
    */
    'defaultValue'?: string;
    'validation': EmailFieldValidation;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "EmailFieldFieldTypeEnum",
            "format": ""
        },
        {
            "name": "objectTypeId",
            "baseName": "objectTypeId",
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dependentFields",
            "baseName": "dependentFields",
            "type": "Array<DependentField>",
            "format": ""
        },
        {
            "name": "placeholder",
            "baseName": "placeholder",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultValue",
            "baseName": "defaultValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "validation",
            "baseName": "validation",
            "type": "EmailFieldValidation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailField.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EmailFieldFieldTypeEnum = "email" ;

