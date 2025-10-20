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


/**
 * The parameters of the usage space statistics item.
 * @export
 * @interface UsageSpaceStatItemDto
 */
export interface UsageSpaceStatItemDto {
    /**
     * The item name.
     * @type {string}
     * @memberof UsageSpaceStatItemDto
     */
    'name'?: string | null;
    /**
     * The item icon path.
     * @type {string}
     * @memberof UsageSpaceStatItemDto
     */
    'icon'?: string | null;
    /**
     * Specifies if the item is disabled or not.
     * @type {boolean}
     * @memberof UsageSpaceStatItemDto
     */
    'disabled'?: boolean;
    /**
     * The item used space.
     * @type {string}
     * @memberof UsageSpaceStatItemDto
     */
    'size'?: string | null;
    /**
     * The item URL.
     * @type {string}
     * @memberof UsageSpaceStatItemDto
     */
    'url'?: string | null;
}

