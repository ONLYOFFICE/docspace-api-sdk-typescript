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
 * The pair of values that names a document across portals, as it is written into a spreadsheet formula.
 */
export interface FileReferenceDataDto {
    /**
     * The id of the document inside the portal named below.
     */
    'fileKey'?: string | null;
    /**
     * The portal the document lives in. A reference whose value is not this portal cannot be resolved by the file  key and falls back to the path or the link.
     */
    'instanceId'?: string | null;
    /**
     * The room the document lies in. It is filled in only for a document opened in a virtual data room, and stays  empty everywhere else.
     */
    'roomId'?: string | null;
    /**
     * Whether the caller may manage the room named above; it is only meaningful together with it.
     */
    'canEditRoom'?: boolean;
}

