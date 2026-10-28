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
import type { EmailInvitationDto } from './email-invitation-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';

/**
 * @type FileShareParams
 * One sharing entry: an account, a group or an email address, and the access level it is given.
 * @export
 */
export type FileShareParams = EmailInvitationDto &  {
    /**
     * The account or the group the entry is about, taken from the portal people and group listings. Leave it out and  give an email address instead to share with somebody who has no account yet.
     * @type {string}
     * @memberof FileShareParams
     */
    'shareTo'?: string;
    /**
     * What the subject may do with the shared item. The value 0 takes the access away again, and which of the other  levels are accepted depends on what is being shared.
     * @type {FileShare}
     * @memberof FileShareParams
     */
    'access'?: FileShare;
};


