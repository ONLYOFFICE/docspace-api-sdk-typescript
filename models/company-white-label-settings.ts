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
 * The company white label settings.
 * @export
 * @interface CompanyWhiteLabelSettings
 */
export interface CompanyWhiteLabelSettings {
    /**
     * The company name.
     * @type {string}
     * @memberof CompanyWhiteLabelSettings
     */
    'companyName'?: string | null;
    /**
     * The company site.
     * @type {string}
     * @memberof CompanyWhiteLabelSettings
     */
    'site'?: string | null;
    /**
     * The company email address.
     * @type {string}
     * @memberof CompanyWhiteLabelSettings
     */
    'email'?: string | null;
    /**
     * The company address.
     * @type {string}
     * @memberof CompanyWhiteLabelSettings
     */
    'address'?: string | null;
    /**
     * The company phone number.
     * @type {string}
     * @memberof CompanyWhiteLabelSettings
     */
    'phone'?: string | null;
    /**
     * Specifies if a company is a licensor or not.
     * @type {boolean}
     * @memberof CompanyWhiteLabelSettings
     */
    'IsLicensor'?: boolean;
    /**
     * Specifies if the About page is visible or not
     * @type {boolean}
     * @memberof CompanyWhiteLabelSettings
     */
    'hideAbout'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CompanyWhiteLabelSettings
     */
    'lastModified'?: string;
}

