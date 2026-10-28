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
import type { AiAttachmentFormKeysInner } from './ai-attachment-form-keys-inner';

/**
 * Persistent record for a single attachment (file or image) referenced from a user message. Files carry extracted text in `content`; images carry base64 data in `base64`. Metadata (`title`, `path`, `type`) is always present for display purposes regardless of whether the heavy payload is loaded.
 */
export interface AiAttachment {
    /**
     * Storage-assigned UUID.
     */
    'id': string;
    /**
     * file | image.
     */
    'kind': AiAttachmentKindEnum;
    /**
     * Origin of the attachment. `user` — uploaded by the user in the composer (the default when unset, for backward compatibility). `tool` — produced by a tool call (e.g. `generate_image`). Lets the integrator\'s adapter route or apply policies (separate bucket, quotas, TTL, CDN) per source.
     */
    'source'?: AiAttachmentSourceEnum;
    /**
     * Display label (filename or user-visible title).
     */
    'title': string;
    /**
     * Extracted text for files.
     */
    'content'?: string;
    /**
     * Base64 data URL for images.
     */
    'base64'?: string;
    /**
     * Original host file path (for files).
     */
    'path'?: string;
    /**
     * ONLYOFFICE file type code (for files).
     */
    'type'?: number;
    /**
     * Owning message id once linked. Unset while the attachment is a draft.
     */
    'messageId'?: string;
    /**
     * Owning thread id once linked. Unset while the attachment is a draft.
     */
    'threadId'?: string;
    /**
     * Opaque scope token (entity / room) the attachment was created in. Drafts carry it so an entity switch keeps in-flight composer state isolated; once linked to a message the field is redundant with the thread\'s own entity binding.
     */
    'entityId'?: string;
    /**
     * Storage-assigned creation timestamp.
     */
    'createdAt': number;
    /**
     * Whether the attached form can be analyzed.
     */
    'canAnalyze'?: boolean;
    /**
     * Keys of the fields inside the form. `key` is the field identifier, `text` its human-readable label.
     */
    'formKeys'?: Array<AiAttachmentFormKeysInner>;
}

export const AiAttachmentKindEnum = {
    File: 'file',
    Image: 'image',
} as const;

export type AiAttachmentKindEnum = typeof AiAttachmentKindEnum[keyof typeof AiAttachmentKindEnum];
export const AiAttachmentSourceEnum = {
    User: 'user',
    Tool: 'tool',
} as const;

export type AiAttachmentSourceEnum = typeof AiAttachmentSourceEnum[keyof typeof AiAttachmentSourceEnum];


