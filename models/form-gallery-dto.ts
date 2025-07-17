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
 * The form gallery parameters.
 * @export
 * @interface FormGalleryDto
 */
export interface FormGalleryDto {
    /**
     * The form gallery path.
     * @type {string}
     * @memberof FormGalleryDto
     */
    'path'?: string | null;
    /**
     * The form gallery domain.
     * @type {string}
     * @memberof FormGalleryDto
     */
    'domain'?: string | null;
    /**
     * The form gallery extension.
     * @type {string}
     * @memberof FormGalleryDto
     */
    'ext'?: string | null;
    /**
     * The form gallery upload path.
     * @type {string}
     * @memberof FormGalleryDto
     */
    'uploadPath'?: string | null;
    /**
     * The form gallery upload domain.
     * @type {string}
     * @memberof FormGalleryDto
     */
    'uploadDomain'?: string | null;
    /**
     * The form gallery upload extension.
     * @type {string}
     * @memberof FormGalleryDto
     */
    'uploadExt'?: string | null;
    /**
     * The form gallery upload dashboard.
     * @type {string}
     * @memberof FormGalleryDto
     */
    'uploadDashboard'?: string | null;
}

