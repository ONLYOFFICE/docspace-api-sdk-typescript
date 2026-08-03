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


export interface AiAgentsUpdateRequest {
    /**
     * Profile id to rebind (optional).
     */
    'profileId'?: string;
    /**
     * Chat settings (`ChatSettings`); requires a valid provider/model.
     */
    'chatSettings'?: object;
    /**
     * Whether form results are sent to an external DB.
     */
    'sendFormToExternalDB'?: boolean;
    /**
     * Whether forms are saved as XLSX.
     */
    'saveFormAsXLSX'?: boolean;
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

