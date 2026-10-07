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
import type { MetadataFieldOptionDto } from './metadata-field-option-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MetadataFieldType } from './metadata-field-type';

/**
 * The metadata field information.
 */
export interface MetadataFieldDto {
    /**
     * The field ID.
     */
    'id'?: number;
    /**
     * The ID of the template the field belongs to.
     */
    'templateId'?: number;
    /**
     * The field name.
     */
    'name'?: string | null;
    /**
     * The field type.
     */
    'type'?: MetadataFieldType;
    /**
     * The choice options of the field.
     */
    'options'?: Array<MetadataFieldOptionDto> | null;
    /**
     * The field display order inside the template.
     */
    'order'?: number;
}



