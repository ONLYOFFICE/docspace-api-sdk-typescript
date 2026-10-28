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
import type { MetadataConflictResolveType } from './metadata-conflict-resolve-type';

/**
 * The new state of a template assignment on a folder: whether the template cascades to the content of the folder and how.
 */
export interface UpdateFolderMetadataTemplateRequest {
    /**
     * Whether the template cascades from the folder to the folders and files below it: true turns the cascade on,  false turns it off while the template stays on the folder.
     */
    'cascade'?: boolean;
    /**
     * How the cascade treats a value an entry below already holds.
     */
    'conflictResolveType'?: MetadataConflictResolveType;
}



