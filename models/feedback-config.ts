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
 * The settings for the \"Feedback & Support\" menu button.
 * @export
 * @interface FeedbackConfig
 */
export interface FeedbackConfig {
    /**
     * The absolute URL to the website address which will be opened when clicking the \"Feedback & Support\" menu button.
     * @type {string}
     * @memberof FeedbackConfig
     */
    'url'?: string | null;
    /**
     * Shows or hides the \"Feedback & Support\" menu button.
     * @type {boolean}
     * @memberof FeedbackConfig
     */
    'visible'?: boolean;
}

