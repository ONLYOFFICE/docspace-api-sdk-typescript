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
 * Where one produced file goes.
 */
export interface RunBuilderScriptOutputRequest {
    /**
     * The id of a portal file to store the result in as a new version, as reported by a folder listing such as  `GET api/2.0/files/{folderId}`.
     */
    'fileId'?: number | null;
    /**
     * The id of a folder to save the result in as a new file, as reported by a folder listing such as  `GET api/2.0/files/{folderId}`.
     */
    'folderId'?: number | null;
    /**
     * The title of the new file, when it has to differ from the name the script saved the result under.
     */
    'title'?: string | null;
}

