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
import type { BatchRequestDtoAllOfDestFolderId } from './batch-request-dto-all-of-dest-folder-id';
// May contain unused imports in some cases
// @ts-ignore
import type { BatchRequestDtoAllOfFileIds } from './batch-request-dto-all-of-file-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { BatchRequestDtoAllOfFolderIds } from './batch-request-dto-all-of-folder-ids';
// May contain unused imports in some cases
// @ts-ignore
import type { FileConflictResolveType } from './file-conflict-resolve-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileOperationRequestBaseDto } from './file-operation-request-base-dto';

/**
 * @type BatchRequestDto
 * The files and folders to move or copy, the folder they go to, and the way name clashes are settled.
 * @export
 */
export type BatchRequestDto = FileOperationRequestBaseDto &  {
    /**
     * The folders to move or copy, by id. A number addresses a folder stored in the portal itself, a string  addresses a folder on a connected third-party account, and both kinds may be sent in one list.
     * @type {Array<BatchRequestDtoAllOfFolderIds>}
     * @memberof BatchRequestDto
     */
    'folderIds'?: Array<BatchRequestDtoAllOfFolderIds> | null;
    /**
     * The files to move or copy, by id. A number addresses a file stored in the portal itself, a string addresses a  file on a connected third-party account, and both kinds may be sent in one list.
     * @type {Array<BatchRequestDtoAllOfFileIds>}
     * @memberof BatchRequestDto
     */
    'fileIds'?: Array<BatchRequestDtoAllOfFileIds> | null;
    /**
     * 
     * @type {BatchRequestDtoAllOfDestFolderId}
     * @memberof BatchRequestDto
     */
    'destFolderId'?: BatchRequestDtoAllOfDestFolderId;
    /**
     * What happens to an item whose name is already taken in the destination folder: `skip` leaves it where it is,  `overwrite` replaces the entry at the destination, and `duplicate` places it beside that entry under a name  with a numeric suffix. `GET api/2.0/files/fileops/move` reports which items would clash.
     * @type {FileConflictResolveType}
     * @memberof BatchRequestDto
     */
    'conflictResolveType'?: FileConflictResolveType;
    /**
     * Whether the finished operation is still reported: `false` keeps its final record readable through  `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done.  It deletes nothing: a move takes the sources away in any case, and a copy always leaves them.
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'deleteAfter'?: boolean;
    /**
     * What is taken from a listed folder: `false` moves or copies the folder itself, `true` takes only what it  contains, so its files and subfolders land in the destination and the folder is not recreated there.
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'content'?: boolean;
    /**
     * Marks every copied PDF form as a draft prepared for filling, which is how such a copy reports its filling  status in a virtual data room. Files that are not forms are left unaffected.
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'toFillOut'?: boolean;
};


