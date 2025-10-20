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
 * The document service URL parameters.
 * @export
 * @interface DocServiceUrlDto
 */
export interface DocServiceUrlDto {
    /**
     * The version of the document service.
     * @type {string}
     * @memberof DocServiceUrlDto
     */
    'version': string | null;
    /**
     * The document service URL API.
     * @type {string}
     * @memberof DocServiceUrlDto
     */
    'docServiceUrlApi': string | null;
    /**
     * The document service URL.
     * @type {string}
     * @memberof DocServiceUrlDto
     */
    'docServiceUrl': string | null;
    /**
     * The URL used to preload the document service scripts.
     * @type {string}
     * @memberof DocServiceUrlDto
     */
    'docServicePreloadUrl': string | null;
    /**
     * The internal document service URL.
     * @type {string}
     * @memberof DocServiceUrlDto
     */
    'docServiceUrlInternal': string | null;
    /**
     * The document service portal URL.
     * @type {string}
     * @memberof DocServiceUrlDto
     */
    'docServicePortalUrl': string | null;
    /**
     * The document service signature header.
     * @type {string}
     * @memberof DocServiceUrlDto
     */
    'docServiceSignatureHeader': string | null;
    /**
     * Specifies if the document service SSL verification is enabled.
     * @type {boolean}
     * @memberof DocServiceUrlDto
     */
    'docServiceSslVerification': boolean;
    /**
     * Specifies if the document service is default.
     * @type {boolean}
     * @memberof DocServiceUrlDto
     */
    'isDefault': boolean;
}

