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
import type { EntryFieldDto } from './entry-field-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MetadataConflictResolveType } from './metadata-conflict-resolve-type';

/**
 * A metadata template assigned to an entry: the template with every field of it, each field carrying its value on the entry.
 */
export interface EntryTemplateDto {
    /**
     * The template ID.
     */
    'id'?: number;
    /**
     * The template name.
     */
    'name'?: string | null;
    /**
     * Specifies if the template is visible in the UI pickers.
     */
    'visible'?: boolean;
    /**
     * Whether the template cascades from this entry to the folders and files below it. Only a folder or a room can  cascade; on a file the value is always false.
     */
    'cascade'?: boolean;
    /**
     * How the cascade of this entry treats a value an entry below already holds. Null while the template does not  cascade from this entry.
     */
    'conflictResolveType'?: MetadataConflictResolveType;
    /**
     * The template fields with their values on the entry.
     */
    'fields'?: Array<EntryFieldDto> | null;
}



