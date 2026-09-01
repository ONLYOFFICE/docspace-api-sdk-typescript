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
import type { AiOpenAIChoiceDelta } from './ai-open-aichoice-delta';
// May contain unused imports in some cases
// @ts-ignore
import type { AiOpenAIFinishReason } from './ai-open-aifinish-reason';

/**
 * One choice of a streaming completion, carrying the part this chunk adds.
 */
export interface AiOpenAIChunkChoice {
    /**
     * The zero-based position of the choice. This service emits a single choice, so always 0.
     */
    'index': number;
    /**
     * What this chunk adds to the choice.
     */
    'delta': AiOpenAIChoiceDelta;
    /**
     * Why the completion stopped, or null while it is still streaming.
     */
    'finish_reason': AiOpenAIFinishReason | null;
}



