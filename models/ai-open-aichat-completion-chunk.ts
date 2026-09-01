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
import type { AiOpenAIChunkChoice } from './ai-open-aichunk-choice';

/**
 * One `chat.completion.chunk` of an OpenAI-compatible streaming response. Only the fields this service can populate are emitted - an OpenAI client tolerates the rest as absent.
 */
export interface AiOpenAIChatCompletionChunk {
    /**
     * The completion identifier, stable across every chunk of one response.
     */
    'id': string;
    /**
     * Always `chat.completion.chunk`.
     */
    'object': AiOpenAIChatCompletionChunkObjectEnum;
    /**
     * When the completion started, in Unix seconds.
     */
    'created': number;
    /**
     * The model that produced the completion - the resolved profile\'s model.
     */
    'model': string;
    /**
     * The choices carried by this chunk. This service emits exactly one.
     */
    'choices': Array<AiOpenAIChunkChoice>;
}

export const AiOpenAIChatCompletionChunkObjectEnum = {
    ChatCompletionChunk: 'chat.completion.chunk',
} as const;

export type AiOpenAIChatCompletionChunkObjectEnum = typeof AiOpenAIChatCompletionChunkObjectEnum[keyof typeof AiOpenAIChatCompletionChunkObjectEnum];


