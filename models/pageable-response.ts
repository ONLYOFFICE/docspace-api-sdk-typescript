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
 * The response containing paginated data.
 * @export
 * @interface PageableResponse
 */
export interface PageableResponse {
    /**
     * The paginated data.
     * @type {object}
     * @memberof PageableResponse
     */
    'data'?: object;
    /**
     * The maximum number of results returned per page.
     * @type {number}
     * @memberof PageableResponse
     */
    'limit'?: number;
    /**
     * The identifier of the last retrieved client.
     * @type {string}
     * @memberof PageableResponse
     */
    'last_client_id'?: string;
    /**
     * The creation date of the last retrieved client.
     * @type {string}
     * @memberof PageableResponse
     */
    'last_created_on'?: string;
}

