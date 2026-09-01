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
import type { WebhookTrigger } from './webhook-trigger';

/**
 * The webhook log parameters.
 */
export interface WebhooksLogDto {
    /**
     * The webhook log ID.
     */
    'id': number;
    /**
     * The webhook configuration name.
     */
    'configName'?: string | null;
    /**
     * The webhook trigger type.
     */
    'trigger'?: WebhookTrigger;
    /**
     * The webhook creation time.
     */
    'creationTime'?: string;
    /**
     * The webhook method.
     */
    'method'?: string | null;
    /**
     * The webhook route.
     */
    'route'?: string | null;
    /**
     * The webhook request headers.
     */
    'requestHeaders'?: string | null;
    /**
     * The webhook request payload.
     */
    'requestPayload'?: string | null;
    /**
     * The webhook response headers.
     */
    'responseHeaders'?: string | null;
    /**
     * The webhook response payload.
     */
    'responsePayload'?: string | null;
    /**
     * The webhook status.
     */
    'status'?: number;
    /**
     * The webhook delivery time.
     */
    'delivery'?: string | null;
}



