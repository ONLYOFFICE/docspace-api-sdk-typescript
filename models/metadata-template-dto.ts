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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { MetadataFieldDto } from './metadata-field-dto';

/**
 * The metadata template information.
 */
export interface MetadataTemplateDto {
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
     * The user who created the template.
     */
    'createBy'?: string;
    /**
     * The template creation date.
     */
    'createOn'?: ApiDateTime;
    /**
     * The user who modified the template last.
     */
    'modifiedBy'?: string;
    /**
     * The date when the template was modified last.
     */
    'modifiedOn'?: ApiDateTime;
    /**
     * The template metadata fields.
     */
    'fields'?: Array<MetadataFieldDto> | null;
}

