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
import type { AiThreadMessageLikeContentAnyOfInner } from './ai-thread-message-like-content-any-of-inner';

/**
 * Message content: either plain text or a list of typed content parts. One part schema lists every field of every part kind of the `@assistant-ui/react` 0.11 `ThreadMessageLike` union (text, reasoning, source, image, file, audio, data, tool-call) plus what the chat library adds itself (`name` on an image part, `metadata` on a tool-call part), so a strict client can read any stored part; each field says which kinds carry it.
 */
export interface AiThreadMessageLikeContent {
}

