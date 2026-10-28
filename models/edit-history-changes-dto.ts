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
import type { EditHistoryAuthorDto } from './edit-history-author-dto';

/**
 * One single change inside a saved revision of a file.
 */
export interface EditHistoryChangesDto {
    /**
     * The account that made this change, as the editing service reported it; an account it could not name is  reported as a guest.
     */
    'user'?: EditHistoryAuthorDto;
    /**
     * When this change was made, written with the offset of the portal\'s time zone rather than as plain UTC.
     */
    'created'?: ApiDateTime;
    /**
     * The SHA-256 hash of the document as it stood after this change, where the editing service recorded one, so  that a client can check a stored copy against the change it claims to hold. Empty when the change record  carries no hash.
     */
    'documentSha256'?: string | null;
}

