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
import type { DocumentConfigDto } from './document-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EditorConfigurationDto } from './editor-configuration-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EditorType } from './editor-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDtoInteger } from './file-dto-integer';
// May contain unused imports in some cases
// @ts-ignore
import type { StartFillingMode } from './start-filling-mode';

/**
 * The configuration parameters.
 * @export
 * @interface ConfigurationDtoInteger
 */
export interface ConfigurationDtoInteger {
    /**
     * 
     * @type {DocumentConfigDto}
     * @memberof ConfigurationDtoInteger
     */
    'document'?: DocumentConfigDto;
    /**
     * The document type.
     * @type {string}
     * @memberof ConfigurationDtoInteger
     */
    'documentType'?: string | null;
    /**
     * 
     * @type {EditorConfigurationDto}
     * @memberof ConfigurationDtoInteger
     */
    'editorConfig'?: EditorConfigurationDto;
    /**
     * 
     * @type {EditorType}
     * @memberof ConfigurationDtoInteger
     */
    'editorType'?: EditorType;
    /**
     * The editor URL.
     * @type {string}
     * @memberof ConfigurationDtoInteger
     */
    'editorUrl'?: string | null;
    /**
     * The token of the file configuration.
     * @type {string}
     * @memberof ConfigurationDtoInteger
     */
    'token'?: string | null;
    /**
     * The platform type.
     * @type {string}
     * @memberof ConfigurationDtoInteger
     */
    'type'?: string | null;
    /**
     * 
     * @type {FileDtoInteger}
     * @memberof ConfigurationDtoInteger
     */
    'file'?: FileDtoInteger;
    /**
     * The error message.
     * @type {string}
     * @memberof ConfigurationDtoInteger
     */
    'errorMessage'?: string | null;
    /**
     * Specifies if the file filling has started or not.
     * @type {boolean}
     * @memberof ConfigurationDtoInteger
     */
    'startFilling'?: boolean | null;
    /**
     * The file filling status.
     * @type {boolean}
     * @memberof ConfigurationDtoInteger
     */
    'fillingStatus'?: boolean | null;
    /**
     * 
     * @type {StartFillingMode}
     * @memberof ConfigurationDtoInteger
     */
    'startFillingMode'?: StartFillingMode;
    /**
     * The file filling session ID.
     * @type {string}
     * @memberof ConfigurationDtoInteger
     */
    'fillingSessionId'?: string | null;
}



