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
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { WebhookTrigger } from './webhook-trigger';

/**
 * The webhook configuration parameters.
 * @export
 * @interface WebhooksConfigDto
 */
export interface WebhooksConfigDto {
    /**
     * The webhook ID.
     * @type {number}
     * @memberof WebhooksConfigDto
     */
    'id'?: number;
    /**
     * The webhook name.
     * @type {string}
     * @memberof WebhooksConfigDto
     */
    'name'?: string | null;
    /**
     * The webhook URI.
     * @type {string}
     * @memberof WebhooksConfigDto
     */
    'uri'?: string | null;
    /**
     * Specifies if the webhooks are enabled or not.
     * @type {boolean}
     * @memberof WebhooksConfigDto
     */
    'enabled'?: boolean;
    /**
     * The webhook SSL verification (enabled or not).
     * @type {boolean}
     * @memberof WebhooksConfigDto
     */
    'ssl'?: boolean;
    /**
     * 
     * @type {WebhookTrigger}
     * @memberof WebhooksConfigDto
     */
    'triggers'?: WebhookTrigger;
    /**
     * The webhook target ID.
     * @type {string}
     * @memberof WebhooksConfigDto
     */
    'targetId'?: string | null;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof WebhooksConfigDto
     */
    'createdBy'?: EmployeeDto;
    /**
     * The date and time when the webhook was created.
     * @type {string}
     * @memberof WebhooksConfigDto
     */
    'createdOn'?: string | null;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof WebhooksConfigDto
     */
    'modifiedBy'?: EmployeeDto;
    /**
     * The date and time when the webhook was modified.
     * @type {string}
     * @memberof WebhooksConfigDto
     */
    'modifiedOn'?: string | null;
    /**
     * The date and time of the webhook last failure.
     * @type {string}
     * @memberof WebhooksConfigDto
     */
    'lastFailureOn'?: string | null;
    /**
     * The webhook last failure content.
     * @type {string}
     * @memberof WebhooksConfigDto
     */
    'lastFailureContent'?: string | null;
    /**
     * The date and time of the webhook last success.
     * @type {string}
     * @memberof WebhooksConfigDto
     */
    'lastSuccessOn'?: string | null;
}



