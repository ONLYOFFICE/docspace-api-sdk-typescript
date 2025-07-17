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
 * The deep link parameters.
 * @export
 * @interface DeepLinkDto
 */
export interface DeepLinkDto {
    /**
     * The Android package name.
     * @type {string}
     * @memberof DeepLinkDto
     */
    'androidPackageName'?: string | null;
    /**
     * The deep link URL.
     * @type {string}
     * @memberof DeepLinkDto
     */
    'url'?: string | null;
    /**
     * The deep link IOS package ID.
     * @type {string}
     * @memberof DeepLinkDto
     */
    'iosPackageId'?: string | null;
}

