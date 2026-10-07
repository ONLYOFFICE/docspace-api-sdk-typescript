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
 * How a tool call the model makes is approved: ask every time, auto-approve opted-out tools, or allow all.
 */

export const AiChatToolPermissionMode = {
    Ask: 'ask',
    Auto: 'auto',
    Allow: 'allow',
} as const;

export type AiChatToolPermissionMode = typeof AiChatToolPermissionMode[keyof typeof AiChatToolPermissionMode];



