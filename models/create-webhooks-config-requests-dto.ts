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
 * The request parameters for creating the webhook configuration.
 * @export
 * @interface CreateWebhooksConfigRequestsDto
 */
export interface CreateWebhooksConfigRequestsDto {
    /**
     * The human-readable name of the webhook configuration.
     * @type {string}
     * @memberof CreateWebhooksConfigRequestsDto
     */
    'name': string;
    /**
     * The destination URL where the webhook events will be sent.
     * @type {string}
     * @memberof CreateWebhooksConfigRequestsDto
     */
    'uri': string;
    /**
     * The webhook secret key used to sign the webhook payloads for the security verification.
     * @type {string}
     * @memberof CreateWebhooksConfigRequestsDto
     */
    'secretKey'?: string | null;
    /**
     * Specifies whether the webhook configuration is active or not.
     * @type {boolean}
     * @memberof CreateWebhooksConfigRequestsDto
     */
    'enabled'?: boolean;
    /**
     * Specifies whether the SSL certificate verification is required or not.
     * @type {boolean}
     * @memberof CreateWebhooksConfigRequestsDto
     */
    'ssl'?: boolean;
    /**
     * 
     * @type {WebhookTrigger}
     * @memberof CreateWebhooksConfigRequestsDto
     */
    'triggers'?: WebhookTrigger;
    /**
     * Target ID
     * @type {string}
     * @memberof CreateWebhooksConfigRequestsDto
     */
    'targetId'?: string | null;
}



