/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
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
 * The pixel box a logo slot is drawn in, in the shape the imaging library reports a geometry.
 */
export interface WhiteLabelItemSizeDto {
    /**
     * Whether the numbers are to be read as an aspect ratio rather than as pixels. Always `false` on the sizes  this API reports.
     */
    'aspectRatio'?: boolean;
    /**
     * Whether an image would be scaled to cover the box rather than to fit inside it. Always `false` here.
     */
    'fillArea'?: boolean;
    /**
     * Whether scaling would apply only to an image larger than the box. Always `false` here.
     */
    'greater'?: boolean;
    /**
     * The height of the box in pixels - one of the two fields of this object that carry information.
     */
    'height'?: number;
    /**
     * Whether scaling would be allowed to distort the image. Always `false` here.
     */
    'ignoreAspectRatio'?: boolean;
    /**
     * Whether `width` and `height` are to be read as percentages. Always `false` here, so both are pixels.
     */
    'isPercentage'?: boolean;
    /**
     * Whether scaling would apply only to an image smaller than the box. Always `false` here.
     */
    'less'?: boolean;
    /**
     * Whether the box is to be read as a total pixel-area budget instead of as two dimensions. Always `false`  here.
     */
    'limitPixels'?: boolean;
    /**
     * The width of the box in pixels - the other field of this object that carries information.
     */
    'width'?: number;
    /**
     * The horizontal offset of the box from the origin. Always `0` here.
     */
    'x'?: number;
    /**
     * The vertical offset of the box from the origin. Always `0` here.
     */
    'y'?: number;
}

