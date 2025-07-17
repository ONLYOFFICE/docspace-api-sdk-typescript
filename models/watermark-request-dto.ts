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

// May contain unused imports in some cases
// @ts-ignore
import type { WatermarkAdditions } from './watermark-additions';

/**
 * The request parameters for adding watermarks.
 * @export
 * @interface WatermarkRequestDto
 */
export interface WatermarkRequestDto {
    /**
     * Specifies whether watermarks are on or off.
     * @type {boolean}
     * @memberof WatermarkRequestDto
     */
    'enabled'?: boolean | null;
    /**
     * 
     * @type {WatermarkAdditions}
     * @memberof WatermarkRequestDto
     */
    'additions'?: WatermarkAdditions;
    /**
     * The watermark text.
     * @type {string}
     * @memberof WatermarkRequestDto
     */
    'text'?: string | null;
    /**
     * The watermark text and image rotate angle.
     * @type {number}
     * @memberof WatermarkRequestDto
     */
    'rotate'?: number;
    /**
     * The watermark image scale.
     * @type {number}
     * @memberof WatermarkRequestDto
     */
    'imageScale'?: number;
    /**
     * The path to the temporary image file.
     * @type {string}
     * @memberof WatermarkRequestDto
     */
    'imageUrl'?: string | null;
    /**
     * The watermark image height.
     * @type {number}
     * @memberof WatermarkRequestDto
     */
    'imageHeight'?: number;
    /**
     * The watermark image width.
     * @type {number}
     * @memberof WatermarkRequestDto
     */
    'imageWidth'?: number;
}



