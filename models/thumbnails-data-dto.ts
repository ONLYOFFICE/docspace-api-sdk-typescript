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
 * The thumbnails data parameters.
 * @export
 * @interface ThumbnailsDataDto
 */
export interface ThumbnailsDataDto {
    /**
     * The thumbnail original photo.
     * @type {string}
     * @memberof ThumbnailsDataDto
     */
    'original'?: string | null;
    /**
     * The thumbnail retina.
     * @type {string}
     * @memberof ThumbnailsDataDto
     */
    'retina'?: string | null;
    /**
     * The thumbnail maximum size photo.
     * @type {string}
     * @memberof ThumbnailsDataDto
     */
    'max'?: string | null;
    /**
     * The thumbnail big size photo.
     * @type {string}
     * @memberof ThumbnailsDataDto
     */
    'big'?: string | null;
    /**
     * The thumbnail medium size photo.
     * @type {string}
     * @memberof ThumbnailsDataDto
     */
    'medium'?: string | null;
    /**
     * The thumbnail small size photo.
     * @type {string}
     * @memberof ThumbnailsDataDto
     */
    'small'?: string | null;
}

