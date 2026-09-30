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
import type { AuthKey } from './auth-key';

/**
 * One third-party authorization or storage provider and the keys the portal connects to it with.
 */
export interface AuthServiceRequestsDto {
    /**
     * The provider being configured, by its internal key such as `google` or `box`. Take it from the `name` of  `GET api/2.0/settings/authservice`; it is the only field that selects the provider, and a key this  installation does not know is refused the same way a provider that forbids changes is.
     */
    'name'?: string | null;
    /**
     * The provider name as it is shown in the interface. It is filled in by the portal when the providers are  listed and is ignored when keys are saved.
     */
    'title'?: string | null;
    /**
     * A sentence about what connecting the provider gives the portal, shown next to it in the interface. It is  filled in by the portal and ignored when keys are saved.
     */
    'description'?: string | null;
    /**
     * The steps an administrator has to take on the provider side to obtain the keys, shown in the interface. It is  filled in by the portal and ignored when keys are saved.
     */
    'instruction'?: string | null;
    /**
     * Whether this provider accepts keys through the API at all. A provider whose keys are fixed by the  installation reports `false`, and saving keys for it is refused; the field is reported by the portal and  ignored on the way in.
     */
    'canSet'?: boolean;
    /**
     * Whether the provider is a paid option. A paid one can only be connected while the portal plan includes  third-party storage or the installation is licensed as self-hosted; the field is reported by the portal and  ignored on the way in.
     */
    'paid'?: boolean;
    /**
     * The credentials the portal authenticates to the provider with, as the name and value pairs the provider  defines. Send the whole set the provider expects: leaving every value empty disconnects it, and a set that  fails the provider validation is cleared rather than stored half-applied. The listing operation reports the  values last saved, and a provider that forbids changes reports none at all.
     */
    'props'?: Array<AuthKey> | null;
}

