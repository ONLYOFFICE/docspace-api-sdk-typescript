// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

// May contain unused imports in some cases
// @ts-ignore
import type { BaseBatchRequestDtoFolderIdsInner } from './base-batch-request-dto-folder-ids-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { BatchRequestDtoDestFolderId } from './batch-request-dto-dest-folder-id';
// May contain unused imports in some cases
// @ts-ignore
import type { FileConflictResolveType } from './file-conflict-resolve-type';

/**
 * The request parameters for copying/moving files.
 * @export
 * @interface BatchRequestDto
 */
export interface BatchRequestDto {
    /**
     * Specifies whether to return only the current operation
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'returnSingleOperation'?: boolean;
    /**
     * The list of folder IDs to be copied/moved.
     * @type {Array<BaseBatchRequestDtoFolderIdsInner>}
     * @memberof BatchRequestDto
     */
    'folderIds'?: Array<BaseBatchRequestDtoFolderIdsInner> | null;
    /**
     * The list of file IDs to be copied/moved.
     * @type {Array<BaseBatchRequestDtoFolderIdsInner>}
     * @memberof BatchRequestDto
     */
    'fileIds'?: Array<BaseBatchRequestDtoFolderIdsInner> | null;
    /**
     * 
     * @type {BatchRequestDtoDestFolderId}
     * @memberof BatchRequestDto
     */
    'destFolderId'?: BatchRequestDtoDestFolderId;
    /**
     * 
     * @type {FileConflictResolveType}
     * @memberof BatchRequestDto
     */
    'conflictResolveType'?: FileConflictResolveType;
    /**
     * Specifies whether to delete the source files/folders after they are moved or copied to the destination folder.
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'deleteAfter'?: boolean;
    /**
     * Specifies whether to copy or move the folder content or not.
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'content'?: boolean;
    /**
     * Specifies whether the file is copied for filling out
     * @type {boolean}
     * @memberof BatchRequestDto
     */
    'toFillOut'?: boolean;
}



