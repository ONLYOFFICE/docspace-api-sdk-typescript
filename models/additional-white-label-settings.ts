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
 * The additional white label settings.
 * @export
 * @interface AdditionalWhiteLabelSettings
 */
export interface AdditionalWhiteLabelSettings {
    /**
     * Specifies if the sample documents are displayed or hidden.
     * @type {boolean}
     * @memberof AdditionalWhiteLabelSettings
     */
    'startDocsEnabled'?: boolean;
    /**
     * Specifies if the Help Center link is available or not.
     * @type {boolean}
     * @memberof AdditionalWhiteLabelSettings
     */
    'helpCenterEnabled'?: boolean;
    /**
     * Specifies if the Feedback & Support link is available or not.
     * @type {boolean}
     * @memberof AdditionalWhiteLabelSettings
     */
    'feedbackAndSupportEnabled'?: boolean;
    /**
     * Specifies if the user forum is available or not.
     * @type {boolean}
     * @memberof AdditionalWhiteLabelSettings
     */
    'userForumEnabled'?: boolean;
    /**
     * Specifies if the Video Guides link is available or not.
     * @type {boolean}
     * @memberof AdditionalWhiteLabelSettings
     */
    'videoGuidesEnabled'?: boolean;
    /**
     * Specifies if the License Agreements link is available or not.
     * @type {boolean}
     * @memberof AdditionalWhiteLabelSettings
     */
    'licenseAgreementsEnabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AdditionalWhiteLabelSettings
     */
    'lastModified'?: string;
}

