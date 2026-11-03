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
import type { AiThreadMessageLike } from './ai-thread-message-like';

/**
 * One event of a chat stream, told apart by `type`: `message-start`, `message-delta` and `message-end` frame the assistant reply, `message-incomplete` reports a provider error or an unfinished answer, `thread-title` carries a generated title, and `tool-call-pending` pauses the round until the call is approved (`POST api/2.0/ai/ai/approve-tool-call`) or denied (`POST api/2.0/ai/ai/deny-tool-call`).
 */
export interface AiChatEvent {
    /**
     * Emitted once per `sendWithStream` call, immediately after the user message has been persisted by storage and before the assistant stream starts. Carries the storage-assigned `id` and `createdAt`. The UI uses it to render the user bubble — no client-side optimistic placeholder is needed, which keeps the runtime tree free of phantom nodes from index-fallback ids.
     */
    'type': AiChatEventTypeEnum;
    /**
     * The message the event is about, in the state it has reached.
     */
    'message'?: AiThreadMessageLike;
    /**
     * The storage identifier of that message.
     */
    'messageId'?: string;
    /**
     * The zero-based position of the pending tool call within the message.
     */
    'idx'?: number;
    /**
     * The thread the event belongs to.
     */
    'threadId'?: string;
    /**
     * The tool runs without asking the user, as the user\'s tool permission mode decides: under `ask` never - the always-allow list, `requireApproval` and the annotations are all ignored; under `auto` a tool on the always-allow list, one with `requireApproval: false`, or one annotated `readOnlyHint: true` or `destructiveHint: false`; under `allow` every tool.
     */
    'autoAllow'?: boolean;
    /**
     * The tool is run by the service itself: the client must not run it, only ask for approval (unless `autoAllow`) and approve or deny the call - an approval needs no `result`.
     */
    'serverExecuted'?: boolean;
    /**
     * The generated thread title.
     */
    'title'?: string;
    /**
     * The profile that generated the title, when one was used.
     */
    'profileId'?: string;
}

export const AiChatEventTypeEnum = {
    UserMessageStored: 'user-message-stored',
    MessageStart: 'message-start',
    MessageDelta: 'message-delta',
    MessageEnd: 'message-end',
    MessageIncomplete: 'message-incomplete',
    ToolCallPending: 'tool-call-pending',
    ThreadTitle: 'thread-title',
} as const;

export type AiChatEventTypeEnum = typeof AiChatEventTypeEnum[keyof typeof AiChatEventTypeEnum];


