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
 * The SSO field mapping.
 * @export
 * @interface SsoFieldMapping
 */
export interface SsoFieldMapping {
    /**
     * The first name.
     * @type {string}
     * @memberof SsoFieldMapping
     */
    'firstName'?: string | null;
    /**
     * The last name.
     * @type {string}
     * @memberof SsoFieldMapping
     */
    'lastName'?: string | null;
    /**
     * The email address.
     * @type {string}
     * @memberof SsoFieldMapping
     */
    'email'?: string | null;
    /**
     * The title.
     * @type {string}
     * @memberof SsoFieldMapping
     */
    'title'?: string | null;
    /**
     * The location.
     * @type {string}
     * @memberof SsoFieldMapping
     */
    'location'?: string | null;
    /**
     * The phone number.
     * @type {string}
     * @memberof SsoFieldMapping
     */
    'phone'?: string | null;
}

