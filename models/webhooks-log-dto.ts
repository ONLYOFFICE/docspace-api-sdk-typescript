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
import type { WebhookTrigger } from './webhook-trigger';

/**
 * The webhook log parameters.
 * @export
 * @interface WebhooksLogDto
 */
export interface WebhooksLogDto {
    /**
     * The webhook log ID.
     * @type {number}
     * @memberof WebhooksLogDto
     */
    'id'?: number;
    /**
     * The webhook configuration name.
     * @type {string}
     * @memberof WebhooksLogDto
     */
    'configName'?: string | null;
    /**
     * 
     * @type {WebhookTrigger}
     * @memberof WebhooksLogDto
     */
    'trigger'?: WebhookTrigger;
    /**
     * The webhook creation time.
     * @type {string}
     * @memberof WebhooksLogDto
     */
    'creationTime'?: string;
    /**
     * The webhook method.
     * @type {string}
     * @memberof WebhooksLogDto
     */
    'method'?: string | null;
    /**
     * The webhook route.
     * @type {string}
     * @memberof WebhooksLogDto
     */
    'route'?: string | null;
    /**
     * The webhook request headers.
     * @type {string}
     * @memberof WebhooksLogDto
     */
    'requestHeaders'?: string | null;
    /**
     * The webhook request payload.
     * @type {string}
     * @memberof WebhooksLogDto
     */
    'requestPayload'?: string | null;
    /**
     * The webhook response headers.
     * @type {string}
     * @memberof WebhooksLogDto
     */
    'responseHeaders'?: string | null;
    /**
     * The webhook response payload.
     * @type {string}
     * @memberof WebhooksLogDto
     */
    'responsePayload'?: string | null;
    /**
     * The webhook status.
     * @type {number}
     * @memberof WebhooksLogDto
     */
    'status'?: number;
    /**
     * The webhook delivery time.
     * @type {string}
     * @memberof WebhooksLogDto
     */
    'delivery'?: string | null;
}



