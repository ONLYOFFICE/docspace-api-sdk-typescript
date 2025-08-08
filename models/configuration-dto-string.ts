/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { EditorType } from './editor-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDtoString } from './file-dto-string';
// May contain unused imports in some cases
// @ts-ignore
import type { StartFillingMode } from './start-filling-mode';

/**
 * The configuration parameters.
 * @export
 * @interface ConfigurationDtoString
 */
export interface ConfigurationDtoString {
    /**
     * 
     * @type {DocumentConfigDto}
     * @memberof ConfigurationDtoString
     */
    'document'?: DocumentConfigDto;
    /**
     * The document type.
     * @type {string}
     * @memberof ConfigurationDtoString
     */
    'documentType'?: string | null;
    /**
     * 
     * @type {EditorConfigurationDto}
     * @memberof ConfigurationDtoString
     */
    'editorConfig'?: EditorConfigurationDto;
    /**
     * 
     * @type {EditorType}
     * @memberof ConfigurationDtoString
     */
    'editorType'?: EditorType;
    /**
     * The editor URL.
     * @type {string}
     * @memberof ConfigurationDtoString
     */
    'editorUrl'?: string | null;
    /**
     * The token of the file configuration.
     * @type {string}
     * @memberof ConfigurationDtoString
     */
    'token'?: string | null;
    /**
     * The platform type.
     * @type {string}
     * @memberof ConfigurationDtoString
     */
    'type'?: string | null;
    /**
     * 
     * @type {FileDtoString}
     * @memberof ConfigurationDtoString
     */
    'file'?: FileDtoString;
    /**
     * The error message.
     * @type {string}
     * @memberof ConfigurationDtoString
     */
    'errorMessage'?: string | null;
    /**
     * Specifies if the file filling has started or not.
     * @type {boolean}
     * @memberof ConfigurationDtoString
     */
    'startFilling'?: boolean | null;
    /**
     * The file filling status.
     * @type {boolean}
     * @memberof ConfigurationDtoString
     */
    'fillingStatus'?: boolean | null;
    /**
     * 
     * @type {StartFillingMode}
     * @memberof ConfigurationDtoString
     */
    'startFillingMode'?: StartFillingMode;
    /**
     * The file filling session ID.
     * @type {string}
     * @memberof ConfigurationDtoString
     */
    'fillingSessionId'?: string | null;
}



