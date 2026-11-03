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


/**
 * Why a choice of an OpenAI-compatible streamed completion ended, as the OpenAI Chat Completions format spells it; null while the choice is still streaming.
 */

export const AiOpenAIFinishReason = {
    Stop: 'stop',
    Length: 'length',
    ToolCalls: 'tool_calls',
    ContentFilter: 'content_filter',
} as const;

export type AiOpenAIFinishReason = typeof AiOpenAIFinishReason[keyof typeof AiOpenAIFinishReason];



