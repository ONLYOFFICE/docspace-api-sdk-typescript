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
import type { EditHistoryUrl } from './edit-history-url';

/**
 * The file editing history data.
 * @export
 * @interface EditHistoryDataDto
 */
export interface EditHistoryDataDto {
    /**
     * The URL address of the file with the document changes data.
     * @type {string}
     * @memberof EditHistoryDataDto
     */
    'changesUrl'?: string | null;
    /**
     * The document identifier used to unambiguously identify the document file.
     * @type {string}
     * @memberof EditHistoryDataDto
     */
    'key'?: string | null;
    /**
     * 
     * @type {EditHistoryUrl}
     * @memberof EditHistoryDataDto
     */
    'previous'?: EditHistoryUrl;
    /**
     * The encrypted signature added to the parameter in the form of a token.
     * @type {string}
     * @memberof EditHistoryDataDto
     */
    'token'?: string | null;
    /**
     * The URL address of the current document version.
     * @type {string}
     * @memberof EditHistoryDataDto
     */
    'url'?: string | null;
    /**
     * The document version number.
     * @type {number}
     * @memberof EditHistoryDataDto
     */
    'version'?: number;
    /**
     * The document extension.
     * @type {string}
     * @memberof EditHistoryDataDto
     */
    'fileType'?: string | null;
}

