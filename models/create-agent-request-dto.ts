/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { ChatSettings } from './chat-settings';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShareParams } from './file-share-params';
// May contain unused imports in some cases
// @ts-ignore
import type { LogoRequest } from './logo-request';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomDataLifetimeDto } from './room-data-lifetime-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { WatermarkRequestDto } from './watermark-request-dto';

/**
 * Request to create a new AI agent room.
 */
export interface CreateAgentRequestDto {
    /**
     * The room name.
     */
    'title': string | null;
    /**
     * The room quota.
     */
    'quota'?: number | null;
    /**
     * Specifies whether to create a room with indexing.
     */
    'indexing'?: boolean | null;
    /**
     * Specifies whether to deny downloads from the room.
     */
    'denyDownload'?: boolean | null;
    'lifetime'?: RoomDataLifetimeDto;
    'watermark'?: WatermarkRequestDto;
    'logo'?: LogoRequest;
    /**
     * The list of tags.
     */
    'tags'?: Array<string> | null;
    /**
     * The room color.
     */
    'color'?: string | null;
    /**
     * The room cover.
     */
    'cover'?: string | null;
    /**
     * Specifies whether the room to be created is private or not.
     */
    'private'?: boolean;
    /**
     * The collection of sharing parameters.
     */
    'share'?: Array<FileShareParams> | null;
    'chatSettings': ChatSettings;
    /**
     * Specifies whether to attach default tools to the agent or not.
     */
    'attachDefaultTools'?: boolean;
}

