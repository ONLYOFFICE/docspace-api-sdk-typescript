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
 * Discriminated event emitted by the streaming methods of `AIEngine`. The engine never invokes user-supplied middleware or callbacks directly — every observable side-effect is encoded as a `ChatEvent` so the same stream can be replayed over SSE, WebSocket, or in-process.  Pause point: `tool-call-pending` is the only stop. The UI must execute the tool itself (consulting `autoAllow` to decide between the silent path and the approve dialog) and resume via `AIEngine.approveToolCall` or `AIEngine.denyToolCall`.  Other variants are pure data:  - `message-start` / `message-delta` / `message-end` — assistant reply lifecycle. - `message-incomplete` — the provider returned an error or incomplete status. - `thread-title` — auto-generated title ready for a new thread.
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
     * The consumer should execute the tool without prompting the user. True when the tool is in the persisted always-allow list, or the tool itself opts in via `TMCPItem.requireApproval === false` (host tools default to this). For a client-side tool with a server-side engine, this lets the engine return the pending call already flagged auto-allow so the client runs it and streams the result back without a dialog round-trip.
     */
    'autoAllow'?: boolean;
    /**
     * Set when the tool is served by a server-side system source: the consumer must NOT execute it locally — only show the approval UI (unless `autoAllow`) and resume via `approveToolCall` (no `result` needed) / `denyToolCall`. The engine runs it in-engine.
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


