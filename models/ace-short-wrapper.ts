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
 * The information about the settings which allow to share the document with other users.
 * @export
 * @interface AceShortWrapper
 */
export interface AceShortWrapper {
    /**
     * The name of the user the document will be shared with.
     * @type {string}
     * @memberof AceShortWrapper
     */
    'user'?: string | null;
    /**
     * The access rights for the user with the name above.  Can be \"Full Access\", \"Read Only\", or \"Deny Access\".
     * @type {string}
     * @memberof AceShortWrapper
     */
    'permissions'?: string | null;
    /**
     * Specifies whether to change the user icon to the link icon.
     * @type {boolean}
     * @memberof AceShortWrapper
     */
    'isLink'?: boolean;
}

