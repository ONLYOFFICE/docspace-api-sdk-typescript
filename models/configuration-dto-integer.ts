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
import type { FileDtoInteger } from './file-dto-integer';
// May contain unused imports in some cases
// @ts-ignore
import type { QuotaScope } from './quota-scope';
// May contain unused imports in some cases
// @ts-ignore
import type { StartFillingMode } from './start-filling-mode';

/**
 * The configuration parameters.
 */
export interface ConfigurationDtoInteger {
    /**
     * The document configuration.
     */
    'document': DocumentConfigDto;
    /**
     * The document type.
     */
    'documentType': string | null;
    /**
     * The editor configuration.
     */
    'editorConfig': EditorConfigurationDto;
    /**
     * The editor type.
     */
    'editorType': EditorType;
    /**
     * The editor URL.
     */
    'editorUrl': string | null;
    /**
     * The token of the file configuration.
     */
    'token'?: string | null;
    /**
     * The platform type.
     */
    'type'?: string | null;
    /**
     * The file parameters.
     */
    'file': FileDtoInteger;
    /**
     * The error message.
     */
    'errorMessage'?: string | null;
    /**
     * Specifies if the file filling has started or not.
     */
    'startFilling'?: boolean | null;
    /**
     * The file filling status.
     */
    'fillingStatus'?: boolean | null;
    /**
     * The start filling mode.
     */
    'startFillingMode'?: StartFillingMode;
    /**
     * The file filling session ID.
     */
    'fillingSessionId'?: string | null;
    /**
     * Indicates which quota scope has been exceeded.
     */
    'quotaExceededScope'?: QuotaScope;
    /**
     * The generation tool call state. Used to run the agent flow in the editor.
     */
    'generationToolCallState'?: EditorToolCallStateDto;
}



