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
import type { EmployeeFullDto } from './employee-full-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShareLink } from './file-share-link';
// May contain unused imports in some cases
// @ts-ignore
import type { GroupSummaryDto } from './group-summary-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SubjectType } from './subject-type';

/**
 * One access entry on a file, a folder or a room: who holds it, at which level, and what the caller may change about  it.
 */
export interface FileShareDto {
    /**
     * The level the subject holds on the entry. On a link entry it is the level the link hands to whoever opens it,  and in a batch answer `Varies` means the subject holds different levels on the listed entries.
     */
    'access'?: FileShare;
    'sharedTo'?: any;
    /**
     * The account the entry belongs to. It is filled in only when `subjectType` says an account, and is null for a  group entry and for a link.
     */
    'sharedToUser'?: EmployeeFullDto;
    /**
     * The portal group the entry belongs to, which hands the level to everybody in it. It is filled in only for a  group entry, and is null otherwise.
     */
    'sharedToGroup'?: GroupSummaryDto;
    /**
     * The sharing link the entry stands for, together with everything set on it. It is filled in only for a link  entry, and is null for an account or a group.
     */
    'sharedLink'?: FileShareLink;
    /**
     * Whether this entry is the caller\'s own, which is why they cannot change its level. Link entries never report  it.
     */
    'isLocked': boolean;
    /**
     * Whether the subject created the entry the access is given on, and so cannot be removed from it.
     */
    'isOwner': boolean;
    /**
     * Whether the caller may change the level of this entry. It is false on the caller\'s own entry, on every link,  and whenever the caller may not hand out access at all.
     */
    'canEditAccess': boolean;
    /**
     * Whether the caller may switch this link between being open to anybody and asking the visitor to sign in to the  portal first.
     */
    'canEditInternal': boolean;
    /**
     * Whether the caller may forbid downloading through this link. Only a link of a virtual data room reports true,  and only while the room itself still allows downloads.
     */
    'canEditDenyDownload': boolean;
    /**
     * Whether the caller may move the moment this link stops working.
     */
    'canEditExpirationDate': boolean;
    /**
     * Whether the caller may take this entry away altogether, which for a link means deleting the link.
     */
    'canRevoke': boolean;
    /**
     * What the entry was given to, which tells which of the three subject fields is filled in: an account, a group,  or one of the kinds of link.
     */
    'subjectType': SubjectType;
}



