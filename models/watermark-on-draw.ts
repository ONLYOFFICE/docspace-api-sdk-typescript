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
import type { Paragraph } from './paragraph';

/**
 * The document watermark parameters.
 * @export
 * @interface WatermarkOnDraw
 */
export interface WatermarkOnDraw {
    /**
     * Defines the watermark width measured in millimeters.
     * @type {number}
     * @memberof WatermarkOnDraw
     */
    'width'?: number;
    /**
     * Defines the watermark height measured in millimeters.
     * @type {number}
     * @memberof WatermarkOnDraw
     */
    'height'?: number;
    /**
     * Defines the watermark margins measured in millimeters.
     * @type {Array<number>}
     * @memberof WatermarkOnDraw
     */
    'margins'?: Array<number> | null;
    /**
     * Defines the watermark fill color.
     * @type {string}
     * @memberof WatermarkOnDraw
     */
    'fill'?: string | null;
    /**
     * Defines the watermark rotation angle.
     * @type {number}
     * @memberof WatermarkOnDraw
     */
    'rotate'?: number;
    /**
     * Defines the watermark transparency percentage.
     * @type {number}
     * @memberof WatermarkOnDraw
     */
    'transparent'?: number;
    /**
     * The list of paragraphs of the watermark.
     * @type {Array<Paragraph>}
     * @memberof WatermarkOnDraw
     */
    'paragraphs'?: Array<Paragraph> | null;
}

