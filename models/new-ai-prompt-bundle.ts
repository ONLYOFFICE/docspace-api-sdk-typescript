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
import type { NewAiPrompt } from './new-ai-prompt';
// May contain unused imports in some cases
// @ts-ignore
import type { NewAiPromptFolder } from './new-ai-prompt-folder';

/**
 * Versioned, self-contained bundle of every saved prompt and folder. Stable wire format — `version` lets the import path migrate older shapes if the schema ever changes.
 */
export interface NewAiPromptBundle {
    'version': NewAiPromptBundleVersionEnum;
    'folders': Array<NewAiPromptFolder>;
    'prompts': Array<NewAiPrompt>;
}

export const NewAiPromptBundleVersionEnum = {
    NUMBER_1: 1,
} as const;

export type NewAiPromptBundleVersionEnum = typeof NewAiPromptBundleVersionEnum[keyof typeof NewAiPromptBundleVersionEnum];


