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


export class PublicCampaignInfluencedFilter {
    'filterType': PublicCampaignInfluencedFilterFilterTypeEnum;
    'campaignId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicCampaignInfluencedFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "campaignId",
            "baseName": "campaignId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicCampaignInfluencedFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicCampaignInfluencedFilterFilterTypeEnum {
    CampaignInfluenced = 'CAMPAIGN_INFLUENCED'
}
