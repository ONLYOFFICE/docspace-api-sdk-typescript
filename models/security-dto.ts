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
import type { GroupSummaryDto } from './group-summary-dto';

/**
 * How access to one portal module is configured: whether it is restricted, and who is let in.
 */
export interface SecurityDto {
    /**
     * The module this entry is about, echoed from the identifier that was asked about. When several identifiers  are asked about at once, entries come back one per identifier and in the order they were sent, so they can  also be matched by position.
     */
    'webItemId'?: string | null;
    /**
     * The individual members the rule was stored for. Members the caller is not allowed to see are left out, so  the same module can come back with different lists for different callers and an empty list does not prove  that nobody was granted access.
     */
    'users'?: Array<EmployeeDto> | null;
    /**
     * The groups the rule was stored for, listed in full - unlike `users`, nothing is filtered out of it.
     */
    'groups'?: Array<GroupSummaryDto> | null;
    /**
     * Whether access to the module is restricted to the subjects listed here. It is `false` for a module nobody  has ever configured, in which case the two lists say nothing about who may open it.
     */
    'enabled'?: boolean;
    /**
     * Whether the module hangs under another one rather than standing on its own. A sub-module is never returned  by `GET api/2.0/settings/security/modules`, which lists top-level modules only.
     */
    'isSubItem'?: boolean;
}

