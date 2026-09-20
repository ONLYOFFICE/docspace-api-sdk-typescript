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
import type { ClientResponse } from './client-response';

/**
 * One page of full client records together with the next-page cursor.
 */
export interface PageableClientResponse {
    /**
     * The items on this page, at most as many as the requested limit. An empty array means there is nothing further to read.
     */
    'data'?: Array<ClientResponse>;
    /**
     * The page size that was applied to this request, between 1 and 50.
     */
    'limit'?: number;
    /**
     * The cursor to send back as last_client_id to ask for the next page, together with last_created_on. It is null when the page is empty.
     */
    'last_client_id'?: string;
    /**
     * The cursor to send back as last_created_on to ask for the next page, together with last_client_id. It is null when the page is empty.
     */
    'last_created_on'?: string;
}

