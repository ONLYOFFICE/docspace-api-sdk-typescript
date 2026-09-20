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
 * One feature module of the portal: whether it is switched on here, and the settings stored for it.
 */
export interface AppDto {
    /**
     * The application\'s stable key, declared in the installation configuration - `ai-rooms`, `docs-cloud` and  the like. It is what every other operation of this group addresses an application by, and a client maps it  to a title and an icon of its own; the portal ships no display name for it.
     */
    'id'?: string | null;
    /**
     * Whether the application is switched on for this portal. It is the portal\'s own flag where one has been  saved, and the default the installation configuration gives the application otherwise.
     */
    'enabled'?: boolean;
    'settings'?: AppDtoSettings;
}

