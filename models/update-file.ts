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
 * The changes to make to a file: a new title, an earlier version to restore, or both.
 */
export interface UpdateFile {
    /**
     * The new title of the file, without an extension - the stored extension is kept whatever the title says, so a  rename cannot change the format. Left empty, the file keeps its name.
     */
    'title'?: string | null;
    /**
     * The version to restore on top of the history, as reported by `GET api/2.0/files/file/{fileId}/history`; 0 or  less leaves the versions untouched.
     */
    'lastVersion'?: number;
}

