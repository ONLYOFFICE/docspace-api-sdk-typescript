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
import type { QuotaSettingsRequestDtoDefaultQuota } from './quota-settings-request-dto-default-quota';

/**
 * The default storage limit given to newly created users, rooms or AI agents, and whether it is enforced.
 */
export interface QuotaSettingsRequestDto {
    /**
     * Whether the limit is enforced at all. While it is false the size is ignored and nothing created afterwards  carries a limit; objects that already have one keep it either way.
     */
    'enableQuota'?: boolean;
    'defaultQuota': QuotaSettingsRequestDtoDefaultQuota;
}

