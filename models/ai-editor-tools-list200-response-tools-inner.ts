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


export interface AiEditorToolsList200ResponseToolsInner {
    /**
     * Tool name, as it is passed back to the call endpoint.
     */
    'name': string;
    /**
     * What the tool does, empty when the server declares nothing.
     */
    'description': string;
    /**
     * JSON Schema of the tool arguments.
     */
    'inputSchema': { [key: string]: any | null; };
    /**
     * Whether the editor has to ask the user before running the tool. Read-only operations arrive with this off.
     */
    'requireApproval': boolean;
}

