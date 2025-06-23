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
import type { FileReferenceData } from './file-reference-data';
// May contain unused imports in some cases
// @ts-ignore
import type { InfoConfigDto } from './info-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { Options } from './options';
// May contain unused imports in some cases
// @ts-ignore
import type { PermissionsConfig } from './permissions-config';

/**
 * The document config parameters.
 * @export
 * @interface DocumentConfigDto
 */
export interface DocumentConfigDto {
    /**
     * The file type of the document.
     * @type {string}
     * @memberof DocumentConfigDto
     */
    'fileType'?: string | null;
    /**
     * 
     * @type {InfoConfigDto}
     * @memberof DocumentConfigDto
     */
    'info'?: InfoConfigDto;
    /**
     * Specifies if the documnet is linked for current user.
     * @type {boolean}
     * @memberof DocumentConfigDto
     */
    'isLinkedForMe'?: boolean;
    /**
     * The document key.
     * @type {string}
     * @memberof DocumentConfigDto
     */
    'key'?: string | null;
    /**
     * 
     * @type {PermissionsConfig}
     * @memberof DocumentConfigDto
     */
    'permissions'?: PermissionsConfig;
    /**
     * The shared link parameter of the document.
     * @type {string}
     * @memberof DocumentConfigDto
     */
    'sharedLinkParam'?: string | null;
    /**
     * The shared link key of the document.
     * @type {string}
     * @memberof DocumentConfigDto
     */
    'sharedLinkKey'?: string | null;
    /**
     * 
     * @type {FileReferenceData}
     * @memberof DocumentConfigDto
     */
    'referenceData'?: FileReferenceData;
    /**
     * The document title.
     * @type {string}
     * @memberof DocumentConfigDto
     */
    'title'?: string | null;
    /**
     * The document url.
     * @type {string}
     * @memberof DocumentConfigDto
     */
    'url'?: string | null;
    /**
     * Indicates whether this is a form.
     * @type {boolean}
     * @memberof DocumentConfigDto
     */
    'isForm'?: boolean;
    /**
     * 
     * @type {Options}
     * @memberof DocumentConfigDto
     */
    'options'?: Options;
}

