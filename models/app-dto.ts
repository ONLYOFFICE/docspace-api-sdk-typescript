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
import type { AppDtoSettings } from './app-dto-settings';

/**
 * The portal application information.
 */
export interface AppDto {
    /**
     * The application identifier (stable slug). The client maps this to its title, description and icon.
     */
    'id'?: string | null;
    /**
     * Whether the application is enabled for the current tenant.
     */
    'enabled'?: boolean;
    'settings'?: AppDtoSettings;
}

