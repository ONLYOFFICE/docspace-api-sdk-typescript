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

// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { SubjectType } from './subject-type';

/**
 * The file sharing information and access rights.
 * @export
 * @interface FileShareDto
 */
export interface FileShareDto {
    /**
     * 
     * @type {FileShare}
     * @memberof FileShareDto
     */
    'access'?: FileShare;
    /**
     * The user who has the access to the specified file.
     * @type {any}
     * @memberof FileShareDto
     */
    'sharedTo'?: any | null;
    /**
     * Specifies if the access right is locked or not.
     * @type {boolean}
     * @memberof FileShareDto
     */
    'isLocked'?: boolean;
    /**
     * Specifies if the user is an owner of the specified file or not.
     * @type {boolean}
     * @memberof FileShareDto
     */
    'isOwner'?: boolean;
    /**
     * Specifies if the user can edit the access to the specified file or not.
     * @type {boolean}
     * @memberof FileShareDto
     */
    'canEditAccess'?: boolean;
    /**
     * Indicates whether internal editing permissions are granted.
     * @type {boolean}
     * @memberof FileShareDto
     */
    'canEditInternal'?: boolean;
    /**
     * Determines whether the user has permission to modify the deny download setting for the file share.
     * @type {boolean}
     * @memberof FileShareDto
     */
    'canEditDenyDownload'?: boolean;
    /**
     * Indicates whether the expiration date of access permissions can be edited.
     * @type {boolean}
     * @memberof FileShareDto
     */
    'canEditExpirationDate'?: boolean;
    /**
     * 
     * @type {SubjectType}
     * @memberof FileShareDto
     */
    'subjectType'?: SubjectType;
}



