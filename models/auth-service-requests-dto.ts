/* tslint:disable */
/* eslint-disable */
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
import type { AuthKey } from './auth-key';

/**
 * The request parameters for handling the authorization service.
 */
export interface AuthServiceRequestsDto {
    /**
     * The name of the authorization service.
     */
    'name'?: string;
    /**
     * The user-friendly display title of the authorization service.
     */
    'title'?: string;
    /**
     * The brief description of the authorization service.
     */
    'description'?: string;
    /**
     * The detailed instructions for configuring or using the authorization service.
     */
    'instruction'?: string;
    /**
     * Specifies whether the authorization service can be configured by the user.
     */
    'canSet'?: boolean;
    /**
     * Specifies whether the authorization service is paid or not.
     */
    'paid'?: boolean;
    /**
     * The collection of authorization keys associated with the authorization service.
     */
    'props'?: Array<AuthKey>;
}

