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

import { LegalConsentCheckbox } from '../models/LegalConsentCheckbox';

export class LegalConsentOptionsExplicitConsentToProcess {
    'type': LegalConsentOptionsExplicitConsentToProcessTypeEnum;
    'communicationConsentText'?: string;
    'communicationsCheckboxes': Array<LegalConsentCheckbox>;
    'consentToProcessText'?: string;
    'consentToProcessCheckboxLabel'?: string;
    'consentToProcessFooterText'?: string;
    'privacyText': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "LegalConsentOptionsExplicitConsentToProcessTypeEnum",
            "format": ""
        },
        {
            "name": "communicationConsentText",
            "baseName": "communicationConsentText",
            "type": "string",
            "format": ""
        },
        {
            "name": "communicationsCheckboxes",
            "baseName": "communicationsCheckboxes",
            "type": "Array<LegalConsentCheckbox>",
            "format": ""
        },
        {
            "name": "consentToProcessText",
            "baseName": "consentToProcessText",
            "type": "string",
            "format": ""
        },
        {
            "name": "consentToProcessCheckboxLabel",
            "baseName": "consentToProcessCheckboxLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "consentToProcessFooterText",
            "baseName": "consentToProcessFooterText",
            "type": "string",
            "format": ""
        },
        {
            "name": "privacyText",
            "baseName": "privacyText",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LegalConsentOptionsExplicitConsentToProcess.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum LegalConsentOptionsExplicitConsentToProcessTypeEnum {
    ExplicitConsentToProcess = 'explicit_consent_to_process'
}
