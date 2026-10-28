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
 * The parameters of a metadata field value.
 */
export interface MetadataValueRequest {
    /**
     * The field ID.
     */
    'fieldId': number;
    /**
     * The string value.
     */
    'stringValue'?: string | null;
    /**
     * The number value.
     */
    'numberValue'?: number | null;
    /**
     * The date value. A value without a time zone offset is treated as UTC, the same way the metadata filters treat their date bounds.
     */
    'dateValue'?: string | null;
    /**
     * The selected choice option IDs.
     */
    'optionIds'?: Array<string> | null;
}

