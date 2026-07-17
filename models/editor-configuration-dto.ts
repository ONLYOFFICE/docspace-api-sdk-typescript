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
 */
export interface EditorConfigurationDto {
    /**
     * The callback URL of the editor.
     */
    'callbackUrl'?: string | null;
    'coEditing'?: CoEditingConfig;
    /**
     * The creation URL of the editor.
     */
    'createUrl'?: string | null;
    'customization'?: CustomizationConfigDto;
    'embedded'?: EmbeddedConfig;
    'encryptionKeys'?: EncryptionKeysConfig;
    /**
     * The language of the editor configuration.
     */
    'lang': string | null;
    /**
     * The mode of the editor configuration.
     */
    'mode': string | null;
    /**
     * Specifies if the mode is write of the editor configuration.
     */
    'modeWrite'?: boolean;
    'plugins'?: PluginsConfig;
    /**
     * The recent configuration of the editor.
     */
    'recent'?: Array<RecentConfig> | null;
    /**
     * The templates of the editor configuration.
     */
    'templates'?: Array<TemplatesConfig> | null;
    'user'?: UserConfig;
}

