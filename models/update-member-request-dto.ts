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

// May contain unused imports in some cases
// @ts-ignore
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { Contact } from './contact';
// May contain unused imports in some cases
// @ts-ignore
import type { SexEnum } from './sex-enum';

/**
 * The request parameters for updating the user information.
 */
export interface UpdateMemberRequestDto {
    /**
     * The user ID.
     */
    'userId'?: string | null;
    /**
     * Specifies whether to disable a user or not.
     */
    'disable'?: boolean | null;
    /**
     * The user email address.
     */
    'email'?: string | null;
    /**
     * Specifies if this is a guest or a user.
     */
    'isUser'?: boolean | null;
    /**
     * The user first name.
     */
    'firstName'?: string | null;
    /**
     * The user last name.
     */
    'lastName'?: string | null;
    /**
     * The list of the user departments.
     */
    'department'?: Array<string> | null;
    /**
     * The user title.
     */
    'title'?: string | null;
    /**
     * The user location.
     */
    'location'?: string | null;
    'sex'?: SexEnum;
    'birthday'?: ApiDateTime;
    'worksfrom'?: ApiDateTime;
    /**
     * The user comment.
     */
    'comment'?: string | null;
    /**
     * The list of the user contacts.
     */
    'contacts'?: Array<Contact> | null;
    /**
     * The user avatar photo URL.
     */
    'files'?: string | null;
    /**
     * Specifies if tips, updates and offers are allowed to be sent to the user or not.
     */
    'spam'?: boolean | null;
}



