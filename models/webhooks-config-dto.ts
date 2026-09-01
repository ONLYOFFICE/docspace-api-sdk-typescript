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
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { WebhookTrigger } from './webhook-trigger';

/**
 * The webhook configuration parameters.
 */
export interface WebhooksConfigDto {
    /**
     * The webhook ID.
     */
    'id': number;
    /**
     * The webhook name.
     */
    'name'?: string | null;
    /**
     * The webhook URI.
     */
    'uri'?: string | null;
    /**
     * Specifies if the webhooks are enabled or not.
     */
    'enabled'?: boolean;
    /**
     * The webhook SSL verification (enabled or not).
     */
    'ssl'?: boolean;
    /**
     * The webhook trigger type.
     */
    'triggers'?: WebhookTrigger;
    /**
     * The webhook target ID.
     */
    'targetId'?: string | null;
    /**
     * The user who created the webhook.
     */
    'createdBy'?: EmployeeDto;
    /**
     * The date and time when the webhook was created.
     */
    'createdOn'?: string | null;
    /**
     * The user who modified the webhook.
     */
    'modifiedBy'?: EmployeeDto;
    /**
     * The date and time when the webhook was modified.
     */
    'modifiedOn'?: string | null;
    /**
     * The date and time of the webhook last failure.
     */
    'lastFailureOn'?: string | null;
    /**
     * The webhook last failure content.
     */
    'lastFailureContent'?: string | null;
    /**
     * The date and time of the webhook last success.
     */
    'lastSuccessOn'?: string | null;
}



