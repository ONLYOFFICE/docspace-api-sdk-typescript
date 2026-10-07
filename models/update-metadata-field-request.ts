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
import type { MetadataFieldOptionRequest } from './metadata-field-option-request';
// May contain unused imports in some cases
// @ts-ignore
import type { MetadataFieldType } from './metadata-field-type';

/**
 * The parameters of a metadata field update. Every property is optional: a property that is omitted keeps its current value.
 */
export interface UpdateMetadataFieldRequest {
    /**
     * The new field name.
     */
    'name'?: string | null;
    /**
     * The new field type. The type can be changed only while the field has no values.
     */
    'type'?: MetadataFieldType;
    /**
     * The new choice options of the field. The options in use cannot be removed.
     */
    'options'?: Array<MetadataFieldOptionRequest> | null;
    /**
     * The new display position of the field inside the template: the fields are shown by it ascending.
     */
    'order'?: number | null;
}



