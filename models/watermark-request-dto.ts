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
import type { WatermarkAdditions } from './watermark-additions';

/**
 * The watermark drawn over the documents of a room.
 */
export interface WatermarkRequestDto {
    /**
     * Whether the room draws a watermark at all. Sending the object with this turned off removes the watermark the  room has, and the rest of the fields are then irrelevant.
     */
    'enabled'?: boolean | null;
    /**
     * Which details of the reader and of the room are stamped into the watermark alongside the text. The values  combine, so several of them can be added together to stamp more than one.
     */
    'additions'?: WatermarkAdditions;
    /**
     * The fixed line drawn over the document, shown before the details selected alongside it. It is the whole  watermark when no details are added.
     */
    'text'?: string | null;
    /**
     * How far the watermark is turned, in degrees, with negative values turning it anticlockwise. Zero draws it  horizontally across the page.
     */
    'rotate'?: number;
    /**
     * How large the watermark image is drawn, as a percentage of its own size. It applies to the image form of the  watermark only.
     */
    'imageScale'?: number;
    /**
     * The picture to use instead of a text watermark, named by the path that `POST api/2.0/files/logos` returned for  an image uploaded beforehand. The portal copies it into the room when the setting is saved.
     */
    'imageUrl'?: string | null;
    /**
     * The height the watermark image is drawn with, in pixels, used together with the width to keep its proportions.
     */
    'imageHeight'?: number;
    /**
     * The width the watermark image is drawn with, in pixels, used together with the height to keep its proportions.
     */
    'imageWidth'?: number;
}



