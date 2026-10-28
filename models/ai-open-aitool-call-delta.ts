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
import type { AiOpenAIToolCallDeltaFunction } from './ai-open-aitool-call-delta-function';

/**
 * The incremental part of one tool call the model requested.
 */
export interface AiOpenAIToolCallDelta {
    /**
     * The zero-based position of the tool call within the message.
     */
    'index': number;
    /**
     * The tool call identifier, quoted back when its result is submitted.
     */
    'id'?: string;
    /**
     * Always `function` - the only tool kind the API defines.
     */
    'type'?: AiOpenAIToolCallDeltaTypeEnum;
    'function'?: AiOpenAIToolCallDeltaFunction;
}

export const AiOpenAIToolCallDeltaTypeEnum = {
    Function: 'function',
} as const;

export type AiOpenAIToolCallDeltaTypeEnum = typeof AiOpenAIToolCallDeltaTypeEnum[keyof typeof AiOpenAIToolCallDeltaTypeEnum];


