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
import type { AuditTrailModuleMapperDto } from './audit-trail-module-mapper-dto';

/**
 * The audit trail actions of one product, grouped by module.
 */
export interface AuditTrailProductMapperDto {
    /**
     * The product this branch of the tree belongs to, as the `productType` filter of this operation spells it and  as `GET api/2.0/security/audit/types` lists it under `productTypes`.
     */
    'productType'?: string | null;
    /**
     * The locations inside the product. It is empty when `moduleType` was passed and this product has no module  of that name, which is why a product can come back with nothing under it.
     */
    'modules'?: Array<AuditTrailModuleMapperDto> | null;
}

