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
import type { CoEditingConfigDto } from './co-editing-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { CustomizationConfigDto } from './customization-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EmbeddedConfigDto } from './embedded-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EncryptionKeyDto } from './encryption-key-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { PluginsConfigDto } from './plugins-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { RecentConfigDto } from './recent-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { TemplatesConfigDto } from './templates-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { UserConfigDto } from './user-config-dto';

/**
 * How the editors behave for this opening: the mode, the language, the interface, and who is editing.
 */
export interface EditorConfigurationDto {
    /**
     * Where the editors post the document back to when they save it. A client must not call it itself; it is the  address the document service uses.
     */
    'callbackUrl'?: string | null;
    /**
     * How co-editing starts out for this session and whether the user may switch it in the interface.
     */
    'coEditing'?: CoEditingConfigDto;
    /**
     * Where the editor sends the user when they ask for a new document of the same type. It is empty when creating  one is not offered here.
     */
    'createUrl'?: string | null;
    /**
     * How the editor interface is dressed for this portal, this document and this layout.
     */
    'customization'?: CustomizationConfigDto;
    /**
     * The addresses the framed viewer needs. It is filled in only for the embedded layout.
     */
    'embedded'?: EmbeddedConfigDto;
    /**
     * The caller\'s end-to-end encryption keys, added only when the document lies in a private room, so that the  editors can decrypt it in the browser. It is empty everywhere else.
     */
    'encryptionKeys'?: Array<EncryptionKeyDto> | null;
    /**
     * The culture the editor interface is shown in, taken from the profile of the caller.
     */
    'lang': string | null;
    /**
     * `edit` when this session may write the document, `view` when it may only read it.
     */
    'mode': string | null;
    /**
     * Whether this session may write; it is what the mode above says in one word.
     */
    'modeWrite'?: boolean;
    /**
     * Which editor plugins are offered. The portal currently offers none, so the list inside comes back empty.
     */
    'plugins'?: PluginsConfigDto;
    /**
     * The documents offered in the editor\'s recent list. It is left out altogether when there is nothing to offer.
     */
    'recent'?: Array<RecentConfigDto> | null;
    /**
     * Always empty: the portal no longer passes creation templates through the editor configuration.
     */
    'templates'?: Array<TemplatesConfigDto> | null;
    /**
     * The account the editors attribute changes to. It is empty for an anonymous session opened through an external  link, and the editors then ask for a name themselves.
     */
    'user'?: UserConfigDto;
}

