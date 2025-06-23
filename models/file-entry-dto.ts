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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryType } from './file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { FolderType } from './folder-type';

/**
 * The file entry information.
 * @export
 * @interface FileEntryDto
 */
export interface FileEntryDto {
    /**
     * The file entry title.
     * @type {string}
     * @memberof FileEntryDto
     */
    'title'?: string | null;
    /**
     * 
     * @type {FileShare}
     * @memberof FileEntryDto
     */
    'access'?: FileShare;
    /**
     * Specifies if the file entry is shared or not.
     * @type {boolean}
     * @memberof FileEntryDto
     */
    'shared'?: boolean;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileEntryDto
     */
    'created'?: ApiDateTime;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof FileEntryDto
     */
    'createdBy'?: EmployeeDto;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileEntryDto
     */
    'updated'?: ApiDateTime;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof FileEntryDto
     */
    'autoDelete'?: ApiDateTime;
    /**
     * 
     * @type {FolderType}
     * @memberof FileEntryDto
     */
    'rootFolderType'?: FolderType;
    /**
     * 
     * @type {FolderType}
     * @memberof FileEntryDto
     */
    'parentRoomType'?: FolderType;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof FileEntryDto
     */
    'updatedBy'?: EmployeeDto;
    /**
     * Specifies if the file entry provider is specified or not.
     * @type {boolean}
     * @memberof FileEntryDto
     */
    'providerItem'?: boolean | null;
    /**
     * The provider key of the file entry.
     * @type {string}
     * @memberof FileEntryDto
     */
    'providerKey'?: string | null;
    /**
     * The provider ID of the file entry.
     * @type {number}
     * @memberof FileEntryDto
     */
    'providerId'?: number | null;
    /**
     * The order of the file entry.
     * @type {string}
     * @memberof FileEntryDto
     */
    'order'?: string | null;
    /**
     * 
     * @type {FileEntryType}
     * @memberof FileEntryDto
     */
    'fileEntryType'?: FileEntryType;
}



