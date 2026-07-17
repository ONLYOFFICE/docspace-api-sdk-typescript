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
 * The additional white label settings parameters.
 */
export interface AdditionalWhiteLabelSettingsDto {
    /**
     * Specifies if the sample documents are displayed or hidden.
     */
    'startDocsEnabled': boolean;
    /**
     * Specifies if the Help Center link is available or not.
     */
    'helpCenterEnabled': boolean;
    /**
     * Specifies if the Feedback & Support link is available or not.
     */
    'feedbackAndSupportEnabled': boolean;
    /**
     * Specifies if the user forum is available or not.
     */
    'userForumEnabled': boolean;
    /**
     * Specifies if the Video Guides link is available or not.
     */
    'videoGuidesEnabled': boolean;
    /**
     * Specifies if the License Agreements link is available or not.
     */
    'licenseAgreementsEnabled': boolean;
    /**
     * Specifies if the additional white label settings are default or not.
     */
    'isDefault': boolean;
}

