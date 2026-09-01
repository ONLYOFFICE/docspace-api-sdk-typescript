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
import type { AiPromptFolder } from './ai-prompt-folder';
// May contain unused imports in some cases
// @ts-ignore
import type { AiTErrorData } from './ai-terror-data';

/**
 * Outcome of `createFolder` / `renameFolder` — either the persisted folder or a field-scoped error.
 */
export interface AiFolderMutationResult {
    /**
     * True when the folder was persisted.
     */
    'success': boolean;
    /**
     * The persisted folder. Present on success.
     */
    'folder'?: AiPromptFolder;
    /**
     * Why the folder was rejected. Present on failure.
     */
    'error'?: AiTErrorData;
}

