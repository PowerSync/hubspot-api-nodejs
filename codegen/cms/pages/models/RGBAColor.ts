/**
 * Pages
 * Use these endpoints for interacting with Landing Pages and Site Pages
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* A color defined by RGB values.
*/
export class RGBAColor {
    /**
    * Alpha.
    */
    'a': number;
    /**
    * Red.
    */
    'r': number;
    /**
    * Blue.
    */
    'b': number;
    /**
    * Green.
    */
    'g': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "a",
            "baseName": "a",
            "type": "number",
            "format": ""
        },
        {
            "name": "r",
            "baseName": "r",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "b",
            "baseName": "b",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "g",
            "baseName": "g",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RGBAColor.attributeTypeMap;
    }

    public constructor() {
    }
}
