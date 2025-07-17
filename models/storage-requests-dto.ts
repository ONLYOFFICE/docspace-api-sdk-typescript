/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { ItemKeyValuePairStringString } from './item-key-value-pair-string-string';

/**
 * The request parameters for configuring the storage module settings.
 * @export
 * @interface StorageRequestsDto
 */
export interface StorageRequestsDto {
    /**
     * The name for the storage module to be configured.
     * @type {string}
     * @memberof StorageRequestsDto
     */
    'module': string | null;
    /**
     * The list of configuration key-value pairs for the storage module.
     * @type {Array<ItemKeyValuePairStringString>}
     * @memberof StorageRequestsDto
     */
    'props'?: Array<ItemKeyValuePairStringString> | null;
}

