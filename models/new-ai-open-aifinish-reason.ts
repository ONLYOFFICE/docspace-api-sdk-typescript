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
 * OpenAI Chat Completions streaming shapes.   {@link  toOpenAIChatCompletionStream }  maps the engine\'s transport-agnostic  {@link  ChatEvent }  stream onto these chunks so a host can expose an OpenAI-compatible `POST /v1/chat/completions` (`stream: true`) endpoint backed by the same chat pipeline as the in-app widget. Only the subset of fields the engine can populate is emitted; everything else an OpenAI client tolerates as absent.
 */

export const NewAiOpenAIFinishReason = {
    Stop: 'stop',
    Length: 'length',
    ToolCalls: 'tool_calls',
    ContentFilter: 'content_filter',
} as const;

export type NewAiOpenAIFinishReason = typeof NewAiOpenAIFinishReason[keyof typeof NewAiOpenAIFinishReason];



