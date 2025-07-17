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
import type { FeatureUsedDto } from './feature-used-dto';

/**
 * The tenant quota feature parameters.
 * @export
 * @interface TenantQuotaFeatureDto
 */
export interface TenantQuotaFeatureDto {
    /**
     * The ID of the tenant quota feature.
     * @type {string}
     * @memberof TenantQuotaFeatureDto
     */
    'id'?: string | null;
    /**
     * The title of the tenant quota feature.
     * @type {string}
     * @memberof TenantQuotaFeatureDto
     */
    'title'?: string | null;
    /**
     * The image URL of the tenant quota feature.
     * @type {string}
     * @memberof TenantQuotaFeatureDto
     */
    'image'?: string | null;
    /**
     * The value of the tenant quota feature.
     * @type {any}
     * @memberof TenantQuotaFeatureDto
     */
    'value'?: any | null;
    /**
     * The type of the tenant quota feature.
     * @type {string}
     * @memberof TenantQuotaFeatureDto
     */
    'type'?: string | null;
    /**
     * 
     * @type {FeatureUsedDto}
     * @memberof TenantQuotaFeatureDto
     */
    'used'?: FeatureUsedDto;
    /**
     * The price title of the tenant quota feature.
     * @type {string}
     * @memberof TenantQuotaFeatureDto
     */
    'priceTitle'?: string | null;
}

