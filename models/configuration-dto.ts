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
import type { DocumentConfigDto } from './document-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EditorConfigurationDto } from './editor-configuration-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EditorToolCallStateDto } from './editor-tool-call-state-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EditorType } from './editor-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDto } from './file-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { QuotaScope } from './quota-scope';
// May contain unused imports in some cases
// @ts-ignore
import type { StartFillingMode } from './start-filling-mode';

/**
 * Everything an editor client needs in order to open one document: the document itself, the editor setup for this  caller, and the signature that lets the editors trust both.
 */
export interface ConfigurationDto {
    /**
     * The document as the editors address it: its revision key, title, type, download address and the permissions of  this caller on it.
     */
    'document': DocumentConfigDto;
    /**
     * The editor family the file opens in - `word`, `cell`, `slide`, `pdf` or `diagram`. It comes back empty for a  format no editor handles.
     */
    'documentType': string | null;
    /**
     * How the editor is set up for this opening: the mode, the language, the interface customization, the callback  the editors save through, and the account they attribute changes to.
     */
    'editorConfig': EditorConfigurationDto;
    /**
     * The layout the configuration was actually built for. It echoes the requested one except where the room  overruled it, as the templates folder does by forcing the embedded viewer.
     */
    'editorType': EditorType;
    /**
     * The address of the editor api script the client has to load, with the shard key of this document already  appended. Load it as it is given rather than assembling it by hand.
     */
    'editorUrl': string | null;
    /**
     * Signs this whole configuration so that the editors can trust it; anything a client changes in the  configuration invalidates it. It stays empty on a portal that has no signature secret configured for the  document service.
     */
    'token'?: string | null;
    /**
     * The layout spelled as a lowercase word - `desktop`, `mobile` or `embedded` - the same value the editor type  carries as a number.
     */
    'type'?: string | null;
    /**
     * The file the configuration was built for, in the same shape the file listings report it.
     */
    'file': FileDto;
    /**
     * Filled in when the document could not be prepared for opening; the rest of the configuration should then not  be handed to the editors.
     */
    'errorMessage'?: string | null;
    /**
     * Whether this caller may start a filling session on the form from inside the editor. It stays empty when the  file is not a form opened where starting is possible at all.
     */
    'startFilling'?: boolean | null;
    /**
     * True once the caller holds a role in the running filling session of this form. It stays empty outside a  virtual data room, where roles are the only place it is set.
     */
    'fillingStatus'?: boolean | null;
    /**
     * Which filling button the editor offers: none at all, sharing the form out for others to fill, starting a  filling session, or starting one inside the form-filling room.
     */
    'startFillingMode'?: StartFillingMode;
    /**
     * Identifies the filling session this opening belongs to, and is empty when the document is not opened as part  of one. Submissions made in the editor are collected under it.
     */
    'fillingSessionId'?: string | null;
    /**
     * Names the quota that ran out - the user, the room or the portal - and is set only when the document had to be  opened read-only because of it.
     */
    'quotaExceededScope'?: QuotaScope;
    /**
     * The generation the editor should run as soon as the document opens. It is set only for a document an AI agent  produced and left waiting for its content, and is empty for every other file.
     */
    'generationToolCallState'?: EditorToolCallStateDto;
}



