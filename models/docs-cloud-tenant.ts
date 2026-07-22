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
import type { DocsCloudPayment } from './docs-cloud-payment';

/**
 * Represents a DocsCloud tenant of a portal.
 */
export interface DocsCloudTenant {
    /**
     * The external ID of the dedicated resource the tenant is hosted on.
     */
    'dedicatedResourceExId'?: number;
    /**
     * The tenant alias.
     */
    'alias'?: string | null;
    /**
     * The tenant name.
     */
    'name'?: string | null;
    /**
     * The date and time when the tenant was last modified.
     */
    'modifiedDate'?: string;
    /**
     * The customer ID.
     */
    'customerId'?: string | null;
    /**
     * The customer name.
     */
    'customerName'?: string | null;
    /**
     * The date and time when the tenant subscription ends.
     */
    'endDate'?: string;
    /**
     * The resource type.
     */
    'resourceType'?: number;
    /**
     * Whether the tenant is active (the end date is in the future).
     */
    'isActive'?: boolean;
    /**
     * The tenant address.
     */
    'address'?: string | null;
    'payment'?: DocsCloudPayment;
}

