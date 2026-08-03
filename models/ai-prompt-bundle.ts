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
import type { AiPrompt } from './ai-prompt';
// May contain unused imports in some cases
// @ts-ignore
import type { AiPromptFolder } from './ai-prompt-folder';

/**
 * Versioned, self-contained bundle of every saved prompt and folder. Stable wire format — `version` lets the import path migrate older shapes if the schema ever changes.
 */
export interface AiPromptBundle {
    'version': AiPromptBundleVersionEnum;
    'folders': Array<AiPromptFolder>;
    'prompts': Array<AiPrompt>;
}

export const AiPromptBundleVersionEnum = {
    NUMBER_1: 1,
} as const;

export type AiPromptBundleVersionEnum = typeof AiPromptBundleVersionEnum[keyof typeof AiPromptBundleVersionEnum];


