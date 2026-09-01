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
import type { AiTErrorData } from './ai-terror-data';

/**
 * Per-entry error reported by `PromptsEngine.importBundle`.
 */
export interface AiImportError {
    /**
     * `folder` or `prompt`, plus the offending name or id.
     */
    'kind': AiImportErrorKindEnum;
    /**
     * The offending entry - its name or its id.
     */
    'ref': string;
    /**
     * Why the entry was rejected.
     */
    'error': AiTErrorData;
}

export const AiImportErrorKindEnum = {
    Folder: 'folder',
    Prompt: 'prompt',
} as const;

export type AiImportErrorKindEnum = typeof AiImportErrorKindEnum[keyof typeof AiImportErrorKindEnum];


