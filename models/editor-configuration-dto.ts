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
import type { CoEditingConfig } from './co-editing-config';
// May contain unused imports in some cases
// @ts-ignore
import type { CustomizationConfigDto } from './customization-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EmbeddedConfig } from './embedded-config';
// May contain unused imports in some cases
// @ts-ignore
import type { EncryptionKeysConfig } from './encryption-keys-config';
// May contain unused imports in some cases
// @ts-ignore
import type { PluginsConfig } from './plugins-config';
// May contain unused imports in some cases
// @ts-ignore
import type { RecentConfig } from './recent-config';
// May contain unused imports in some cases
// @ts-ignore
import type { TemplatesConfig } from './templates-config';
// May contain unused imports in some cases
// @ts-ignore
import type { UserConfig } from './user-config';

/**
 * The editor configuration parameters.
 * @export
 * @interface EditorConfigurationDto
 */
export interface EditorConfigurationDto {
    /**
     * The callback URL of the editor.
     * @type {string}
     * @memberof EditorConfigurationDto
     */
    'callbackUrl'?: string | null;
    /**
     * 
     * @type {CoEditingConfig}
     * @memberof EditorConfigurationDto
     */
    'coEditing'?: CoEditingConfig;
    /**
     * The creation URL of the editor.
     * @type {string}
     * @memberof EditorConfigurationDto
     */
    'createUrl'?: string | null;
    /**
     * 
     * @type {CustomizationConfigDto}
     * @memberof EditorConfigurationDto
     */
    'customization'?: CustomizationConfigDto;
    /**
     * 
     * @type {EmbeddedConfig}
     * @memberof EditorConfigurationDto
     */
    'embedded'?: EmbeddedConfig;
    /**
     * 
     * @type {EncryptionKeysConfig}
     * @memberof EditorConfigurationDto
     */
    'encryptionKeys'?: EncryptionKeysConfig;
    /**
     * The language of the editor configuration.
     * @type {string}
     * @memberof EditorConfigurationDto
     */
    'lang'?: string | null;
    /**
     * The mode of the editor configuration.
     * @type {string}
     * @memberof EditorConfigurationDto
     */
    'mode'?: string | null;
    /**
     * Specifies if the mode is write of the editor configuration.
     * @type {boolean}
     * @memberof EditorConfigurationDto
     */
    'modeWrite'?: boolean;
    /**
     * 
     * @type {PluginsConfig}
     * @memberof EditorConfigurationDto
     */
    'plugins'?: PluginsConfig;
    /**
     * The recent configuration of the editor.
     * @type {Array<RecentConfig>}
     * @memberof EditorConfigurationDto
     */
    'recent'?: Array<RecentConfig> | null;
    /**
     * The templates of the editor configuration.
     * @type {Array<TemplatesConfig>}
     * @memberof EditorConfigurationDto
     */
    'templates'?: Array<TemplatesConfig> | null;
    /**
     * 
     * @type {UserConfig}
     * @memberof EditorConfigurationDto
     */
    'user'?: UserConfig;
}

