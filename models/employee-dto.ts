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
 * The user parameters.
 */
export interface EmployeeDto {
    /**
     * The user ID.
     */
    'id'?: string;
    /**
     * The HTML-encoded user\'s display name formatted according to the default format for the current culture.
     */
    'displayName'?: string | null;
    /**
     * The user title.
     */
    'title'?: string | null;
    /**
     * The user avatar.
     */
    'avatar'?: string | null;
    /**
     * The user original size avatar.
     */
    'avatarOriginal'?: string | null;
    /**
     * The user maximum size avatar.
     */
    'avatarMax'?: string | null;
    /**
     * The user medium size avatar.
     */
    'avatarMedium'?: string | null;
    /**
     * The user small size avatar.
     */
    'avatarSmall'?: string | null;
    /**
     * The user profile URL.
     */
    'profileUrl'?: string | null;
    /**
     * Specifies if the user has an avatar or not.
     */
    'hasAvatar'?: boolean;
    /**
     * Specifies if the user is anonymous or not.
     */
    'isAnonim'?: boolean;
}

