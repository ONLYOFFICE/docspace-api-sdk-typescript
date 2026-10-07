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
// May contain unused imports in some cases
// @ts-ignore
import type { MetadataValueDto } from './metadata-value-dto';

/**
 * A metadata template field with its value on the entry.
 */
export interface EntryFieldDto {
    /**
     * The field ID.
     */
    'id'?: number;
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
    /**
     * The value of the field on the entry, or `null` when the entry holds no value for it.
     */
    'value'?: MetadataValueDto;
}



