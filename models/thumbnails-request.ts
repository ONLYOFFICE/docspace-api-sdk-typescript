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
 * The crop rectangle to apply to an avatar image.
 */
export interface ThumbnailsRequest {
    /**
     * The temporary image to crop, as returned in the `data` of an upload made with `autosave` off. Only the file  name part of the value is used. Omit it to re-crop the photo the profile already has.
     */
    'tmpFile'?: string | null;
    /**
     * The distance in pixels from the left edge of the original image to the left edge of the crop rectangle.
     */
    'x'?: number;
    /**
     * The distance in pixels from the top edge of the original image to the top edge of the crop rectangle.
     */
    'y'?: number;
    /**
     * The width of the crop rectangle in pixels. Passing 0 together with `height` and `tmpFile` keeps the whole  uploaded image instead of cropping it.
     */
    'width'?: number;
    /**
     * The height of the crop rectangle in pixels. Passing 0 together with `width` and `tmpFile` keeps the whole  uploaded image instead of cropping it.
     */
    'height'?: number;
}

