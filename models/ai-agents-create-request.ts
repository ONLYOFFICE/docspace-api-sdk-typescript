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


export interface AiAgentsCreateRequest {
    /**
     * Profile id bound to the agent.
     */
    'profileId': string;
    /**
     * Agent system prompt; stored as the room\'s `chatSettings.prompt`.
     */
    'prompt': string;
    /**
     * Whether the agent room is private.
     */
    'private'?: boolean;
    /**
     * Initial share entries (`FileShareParams`).
     */
    'share'?: Array<object>;
    /**
     * Whether to attach the default DocSpace MCP tool server.
     */
    'attachDefaultTools'?: boolean;
    /**
     * Agent (room) title.
     */
    'title'?: string;
    /**
     * Room quota in bytes.
     */
    'quota'?: number;
    /**
     * Whether room content is indexed for search.
     */
    'indexing'?: boolean;
    /**
     * Whether downloading room content is denied.
     */
    'denyDownload'?: boolean;
    /**
     * Room data lifetime policy (`RoomDataLifetimeDto`).
     */
    'lifetime'?: object;
    /**
     * Watermark settings (`WatermarkRequestDto`).
     */
    'watermark'?: object;
    /**
     * Room logo (`LogoRequest`).
     */
    'logo'?: object;
    /**
     * Room tags.
     */
    'tags'?: Array<string>;
    /**
     * Room accent color.
     */
    'color'?: string;
    /**
     * Room cover image id.
     */
    'cover'?: string;
}

