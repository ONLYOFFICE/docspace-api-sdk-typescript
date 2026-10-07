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
import type { AuthKeyDto } from './auth-key-dto';

/**
 * One third-party authorization or storage provider and the keys the portal connects to it with.
 */
export interface AuthServiceDto {
    /**
     * The internal key of the provider, such as `google` or `box`. It is the `name` that  `POST api/2.0/settings/authservice` takes to select the provider.
     */
    'name'?: string | null;
    /**
     * The provider name as it is shown in the interface.
     */
    'title'?: string | null;
    /**
     * A sentence about what connecting the provider gives the portal, shown next to it in the interface.
     */
    'description'?: string | null;
    /**
     * The steps an administrator has to take on the provider side to obtain the keys, shown in the interface.
     */
    'instruction'?: string | null;
    /**
     * Whether this provider accepts keys through the API at all. A provider whose keys are fixed by the  installation reports `false`, and saving keys for it is refused.
     */
    'canSet'?: boolean;
    /**
     * Whether the provider is a paid option. A paid one can only be connected while the portal plan includes  third-party storage or the installation is licensed as self-hosted.
     */
    'paid'?: boolean;
    /**
     * The keys the provider defines, with the values last saved and how the settings form shows each of them.  It is `null` for a provider that forbids changes (`canSet` is `false`): its keys are not read at all.
     */
    'props'?: Array<AuthKeyDto> | null;
}

