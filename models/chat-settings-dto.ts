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
import type { AiModelCapabilities } from './ai-model-capabilities';
// May contain unused imports in some cases
// @ts-ignore
import type { ChatMultimodalSettingsDto } from './chat-multimodal-settings-dto';

/**
 * The chat settings parameters.
 */
export interface ChatSettingsDto {
    /**
     * The AI provider ID.
     */
    'providerId'?: number;
    /**
     * The AI model ID used for chat completions.
     */
    'modelId'?: string | null;
    /**
     * The AI model display alias.
     */
    'modelAlias'?: string | null;
    /**
     * The system prompt for the chat.
     */
    'prompt'?: string | null;
    'multimodal'?: ChatMultimodalSettingsDto;
    /**
     * Indicates whether the model supports extended thinking mode.
     * @deprecated
     */
    'thinking'?: boolean;
    'capabilities'?: AiModelCapabilities;
    /**
     * Indicates whether this is an internal AI gateway provider.
     */
    'internal'?: boolean;
}

