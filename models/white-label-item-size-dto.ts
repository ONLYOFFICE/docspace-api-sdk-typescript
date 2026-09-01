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
 * The white label logo size parameters.
 */
export interface WhiteLabelItemSizeDto {
    /**
     * Specifies whether the size is an aspect ratio.
     */
    'aspectRatio'?: boolean;
    /**
     * Specifies whether the logo is resized based on the smallest fitting dimension.
     */
    'fillArea'?: boolean;
    /**
     * Specifies whether the logo is resized only if it is greater than the size.
     */
    'greater'?: boolean;
    /**
     * The logo height, in pixels.
     */
    'height'?: number;
    /**
     * Specifies whether the logo is resized without preserving the aspect ratio.
     */
    'ignoreAspectRatio'?: boolean;
    /**
     * Specifies whether the width and height are expressed as percentages.
     */
    'isPercentage'?: boolean;
    /**
     * Specifies whether the logo is resized only if it is less than the size.
     */
    'less'?: boolean;
    /**
     * Specifies whether the logo is resized using a pixel area count limit.
     */
    'limitPixels'?: boolean;
    /**
     * The logo width, in pixels.
     */
    'width'?: number;
    /**
     * The X offset from the origin, in pixels.
     */
    'x'?: number;
    /**
     * The Y offset from the origin, in pixels.
     */
    'y'?: number;
}

