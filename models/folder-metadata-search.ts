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
import type { FilterType } from './filter-type';
// May contain unused imports in some cases
// @ts-ignore
import type { MetadataFilterConditionRequest } from './metadata-filter-condition-request';
// May contain unused imports in some cases
// @ts-ignore
import type { SortOrder } from './sort-order';

/**
 * The typed form of the metadata search of a folder: the same filter the folder listing takes in the metadataTemplateId  and metadataFilters query parameters, with the conditions as objects instead of a JSON string.
 */
export interface FolderMetadataSearch {
    /**
     * The ID of the metadata template the entries must be assigned to. On its own it narrows the listing to the entries  carrying the template; together with the conditions it also pins the template the filtered fields belong to.
     */
    'metadataTemplateId'?: number | null;
    /**
     * The metadata filter conditions, combined with AND. A custom field is addressed by its name instead of the field ID.
     */
    'metadataFilters'?: Array<MetadataFilterConditionRequest> | null;
    /**
     * Whether the text search, and the metadataMatches it reports, also look at the values of the hidden metadata  templates (created with visible false for the metadata a service keeps for itself, which the web client never  shows). False, the default, leaves them out, so an entry is not found by such a value; true takes them in.  metadataTemplateId and metadataFilters are not concerned: a hidden template or field named there is searched  either way.
     */
    'includeHiddenMetadata'?: boolean | null;
    /**
     * The text to search for in the titles and in the string metadata values of the entries, the custom fields and the  template fields alike; an entry found by its metadata says where in metadataMatches.
     */
    'filterValue'?: string | null;
    /**
     * Specifies whether to search the whole subtree of the folder (the default) or its direct children only.
     */
    'withSubFolders'?: boolean | null;
    /**
     * The filter type.
     */
    'filterType'?: FilterType;
    /**
     * The number of entries to return, from 1 to 100.
     */
    'count'?: number;
    /**
     * The zero-based index of the first entry to return.
     */
    'startIndex'?: number;
    /**
     * The field to sort by, a name of the SortedByType values.
     */
    'sortBy'?: string | null;
    /**
     * The sort order.
     */
    'sortOrder'?: SortOrder;
}



