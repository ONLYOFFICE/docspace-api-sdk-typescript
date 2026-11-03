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
import type { AiActionArgsPrompt } from './ai-action-args-prompt';
// May contain unused imports in some cases
// @ts-ignore
import type { AiContextRoomRef } from './ai-context-room-ref';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFolderContextRef } from './ai-folder-context-ref';
// May contain unused imports in some cases
// @ts-ignore
import type { AiKnowledgeRoomRef } from './ai-knowledge-room-ref';
// May contain unused imports in some cases
// @ts-ignore
import type { AiMCPItem } from './ai-mcpitem';
// May contain unused imports in some cases
// @ts-ignore
import type { AiReasoningLevel } from './ai-reasoning-level';

/**
 * Per-request options of an AI round: extra tools, the depth of reasoning, a system prompt override and the rooms and folder connected as context.
 */
export interface AiActionArgs {
    /**
     * Extra tools offered to the model for this request.
     */
    'tools'?: Array<AiMCPItem>;
    /**
     * Legacy extended-thinking switch; stands for `medium`. `reasoningLevel` wins when both are set.
     */
    'isReasoning'?: boolean;
    /**
     * Depth of extended thinking for the round; providers clamp it to what the model accepts.
     */
    'reasoningLevel'?: AiReasoningLevel;
    'prompt'?: AiActionArgsPrompt;
    /**
     * Usage notes of the MCP servers the caller holds the connection to, keyed by server type; folded into the system prompt as advisory text.
     */
    'toolInstructions'?: { [key: string]: string; };
    /**
     * Instructions rooms connected to the chat as context, each with the skills the round may use.
     */
    'contextRooms'?: Array<AiContextRoomRef>;
    /**
     * Knowledge rooms connected to the chat; the knowledge search tool of the round is limited to them. Each `id` has to be a DocSpace room id.
     */
    'knowledgeRooms'?: Array<AiKnowledgeRoomRef>;
    /**
     * A single knowledge room, as an older client sends it. Read only when `knowledgeRooms` is absent; send `knowledgeRooms` instead.
     * @deprecated
     */
    'knowledgeRoom'?: AiKnowledgeRoomRef;
    /**
     * The folder connected to the chat as the round\'s context. It becomes the location the model is told the user works in, and the entry the round is attributed to.
     */
    'folderContext'?: AiFolderContextRef;
    /**
     * The entry the round is attributed to. A hint, resolved against the caller\'s own access.
     */
    'entityId'?: string;
}



