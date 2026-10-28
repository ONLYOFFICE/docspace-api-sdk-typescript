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

// May contain unused imports in some cases
// @ts-ignore
import type { AiWatermarkAdditions } from './ai-watermark-additions';

/**
 * The watermark drawn over the documents of a room while they are viewed and printed.
 */
export interface AiWatermarkDto {
    /**
     * Which details of the reader and of the room are stamped alongside the text. The values combine, so a number  that is not a member on its own is the sum of several of them, and 0 means that only the text is stamped.
     */
    'additions': AiWatermarkAdditions;
    /**
     * The fixed line drawn over the document, printed before the details selected alongside it. Empty when the room  stamps an image instead.
     */
    'text'?: string | null;
    /**
     * How far the stamp is turned, in degrees, with negative values turning it anticlockwise and 0 drawing it  horizontally.
     */
    'rotate': number;
    /**
     * How large the image is drawn, as a percentage of its own size. It is 0 for a text watermark, where nothing is  scaled.
     */
    'imageScale': number;
    /**
     * The address the stamped picture is served from, inside the storage of the room. Empty for a text watermark.
     */
    'imageUrl'?: string | null;
    /**
     * The height the picture is drawn with, in pixels, kept together with the width so that the proportions survive.  It is 0 for a text watermark.
     */
    'imageHeight': number;
    /**
     * The width the picture is drawn with, in pixels, kept together with the height so that the proportions survive.  It is 0 for a text watermark.
     */
    'imageWidth': number;
}



