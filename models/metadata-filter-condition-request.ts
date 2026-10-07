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
 * One metadata filter condition as the clients send it: an element of the metadataFilters JSON of the listings and of  the body of the search endpoints. All conditions are combined with AND.
 */
export interface MetadataFilterConditionRequest {
    /**
     * The ID of the template field the condition is on. A custom field is addressed by ASC.Files.Core.MetadataFilterConditionRequest.Name instead.
     */
    'fieldId'?: number;
    /**
     * The name of a custom field, for the conditions on the custom fields, which have no identifier outside. Either the  field ID or the name is given; the name is matched without regard to case.
     */
    'name'?: string | null;
    /**
     * The operator, one of ASC.Files.Core.MetadataFilterOperators. Optional: the field type alone determines how the  condition is evaluated, so an omitted operator is accepted, while a present one has to match the field type.
     */
    'op'?: string | null;
    /**
     * The exact value: string fields, and number fields given a single value. A JSON number is accepted as well as a string.
     */
    'value'?: string | null;
    /**
     * The inclusive lower bound of a range. A date given without a time (2026-06-01) is the start of that day (UTC).
     */
    'from'?: string | null;
    /**
     * The inclusive upper bound of a range. A date given without a time (2026-06-30) covers the whole day (UTC);  a value with a time is an instant and is taken as is.
     */
    'to'?: string | null;
    /**
     * The options any of which the choice field must hold.
     */
    'optionIds'?: Array<string> | null;
}

