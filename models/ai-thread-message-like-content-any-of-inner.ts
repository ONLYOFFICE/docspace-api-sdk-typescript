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
import type { AiThreadMessageLikeContentAnyOfInnerAudio } from './ai-thread-message-like-content-any-of-inner-audio';
// May contain unused imports in some cases
// @ts-ignore
import type { AiThreadMessageLikeContentAnyOfInnerInterrupt } from './ai-thread-message-like-content-any-of-inner-interrupt';

export interface AiThreadMessageLikeContentAnyOfInner {
    /**
     * Part kind: `text`, `reasoning`, `source`, `image`, `file`, `audio`, `data` or `tool-call`.
     */
    'type': string;
    /**
     * The text of a `text` or `reasoning` part.
     */
    'text'?: string;
    /**
     * Id of the part this one belongs to, on `text`, `reasoning`, `source` and `tool-call` parts. On a `reasoning` part the chat library keeps the provider\'s thinking signature here.
     */
    'parentId'?: string;
    /**
     * A `source` part\'s source kind; always `url`.
     */
    'sourceType'?: string;
    /**
     * A `source` part\'s id.
     */
    'id'?: string;
    /**
     * A `source` part\'s URL.
     */
    'url'?: string;
    /**
     * A `source` part\'s title.
     */
    'title'?: string;
    /**
     * An `image` part\'s picture, as a URL (usually a `data:` URL). For an image the user attached, a JSON string `{ ref, title, kind: image }` naming the stored attachment instead.
     */
    'image'?: string;
    /**
     * A `file` part\'s media type. For a file the user attached, a JSON string `{ ref, title, kind: file, path, type }` naming the stored attachment instead - the chat library carries the reference here.
     */
    'mimeType'?: string;
    /**
     * A `file` part\'s content; empty when the part references an attachment. (A `data` part would carry its payload here too, as any JSON value; neither the chat library nor this service writes one.)
     */
    'data'?: string;
    /**
     * The file name of a `file` or `image` part.
     */
    'filename'?: string;
    /**
     * An `image` part\'s display name, or a `data` part\'s name.
     */
    'name'?: string;
    'audio'?: AiThreadMessageLikeContentAnyOfInnerAudio;
    /**
     * A `tool-call` part\'s call id.
     */
    'toolCallId'?: string;
    /**
     * A `tool-call` part\'s tool name.
     */
    'toolName'?: string;
    /**
     * A `tool-call` part\'s arguments.
     */
    'args'?: object;
    /**
     * A `tool-call` part\'s arguments as the model streamed them, JSON text.
     */
    'argsText'?: string;
    'result'?: any;
    /**
     * Whether a `tool-call` part\'s result is an error.
     */
    'isError'?: boolean;
    'artifact'?: any;
    'interrupt'?: AiThreadMessageLikeContentAnyOfInnerInterrupt;
    /**
     * Messages of a sub-agent run inside a `tool-call` part.
     */
    'messages'?: Array<object>;
    /**
     * Provider-specific data of a `tool-call` part - for a Gemini call, `{ thoughtSignature }`, which has to be sent back with the call.
     */
    'metadata'?: object;
}

