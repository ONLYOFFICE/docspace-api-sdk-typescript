/**
 *
 * (c) Copyright Ascensio System SIA 2025
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */


/**
 * The parameters for checking file conversion.
 * @export
 * @interface CheckConversionRequestDtoInteger
 */
export interface CheckConversionRequestDtoInteger {
    /**
     * The file ID to check conversion proccess.
     * @type {number}
     * @memberof CheckConversionRequestDtoInteger
     */
    'fileId'?: number;
    /**
     * Specifies if the conversion process is synchronous or not.
     * @type {boolean}
     * @memberof CheckConversionRequestDtoInteger
     */
    'sync'?: boolean;
    /**
     * Specifies whether to start a conversion process or not.
     * @type {boolean}
     * @memberof CheckConversionRequestDtoInteger
     */
    'startConvert'?: boolean;
    /**
     * The file version that is converted.
     * @type {number}
     * @memberof CheckConversionRequestDtoInteger
     */
    'version'?: number;
    /**
     * The password of the converted file.
     * @type {string}
     * @memberof CheckConversionRequestDtoInteger
     */
    'password'?: string | null;
    /**
     * The conversion output type.
     * @type {string}
     * @memberof CheckConversionRequestDtoInteger
     */
    'outputType'?: string | null;
    /**
     * Specifies whether to create a new file if it exists or not.
     * @type {boolean}
     * @memberof CheckConversionRequestDtoInteger
     */
    'createNewIfExist'?: boolean;
}

