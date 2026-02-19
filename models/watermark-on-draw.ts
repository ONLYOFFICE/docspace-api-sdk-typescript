/* tslint:disable */
/* eslint-disable */
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
 */
export interface WatermarkOnDraw {
    /**
     * Defines the watermark width measured in millimeters.
     */
    'width'?: number;
    /**
     * Defines the watermark height measured in millimeters.
     */
    'height'?: number;
    /**
     * Defines the watermark margins measured in millimeters.
     */
    'margins'?: Array<number>;
    /**
     * Defines the watermark fill color.
     */
    'fill'?: string;
    /**
     * Defines the watermark rotation angle.
     */
    'rotate'?: number;
    /**
     * Defines the watermark transparency percentage.
     */
    'transparent'?: number;
    /**
     * The list of paragraphs of the watermark.
     */
    'paragraphs'?: Array<Paragraph>;
}

