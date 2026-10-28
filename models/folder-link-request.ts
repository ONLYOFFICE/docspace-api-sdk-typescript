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
import type { FileShare } from './file-share';

/**
 * The external link of a folder, as it is to be created or rewritten.
 */
export interface FolderLinkRequest {
    /**
     * Which link the request addresses: the identifier of an existing link rewrites that link, while an identifier  that is not in use, the empty one included, creates a new link. Take an existing identifier from  `GET api/2.0/files/folder/{id}/links`.
     */
    'linkId'?: string;
    /**
     * The rights a visitor following the link is given. The value that grants nothing revokes the link instead of  setting it, and the answer is then empty.
     */
    'access'?: FileShare;
    /**
     * The moment the link stops working, sent as an ISO-8601 stamp. A moment that lies in the past is ignored,  and leaving the field out gives the link no expiry.
     */
    'expirationDate'?: ApiDateTime;
    /**
     * The name the link is listed under for the people who manage the folder; a visitor following it never sees the  name.
     */
    'title'?: string | null;
    /**
     * The secret a visitor has to enter before the link opens. Leave it out for a link that opens without one; the  secret itself is never given back, only the fact that one is set.
     */
    'password'?: string | null;
    /**
     * Whether visitors are left with viewing alone: with true downloading and copying through the link are blocked,  with false they are allowed.
     */
    'denyDownload'?: boolean;
    /**
     * Whether the link admits signed-in portal members only: with true a visitor has to sign in before the link  opens, with false anyone holding the address may follow it.
     */
    'internal'?: boolean;
    /**
     * Whether this link becomes the primary link of the folder, the one the Copy link action of a client hands  out; a folder has one primary link at a time.
     */
    'primary'?: boolean;
}



