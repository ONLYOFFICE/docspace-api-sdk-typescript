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
import type { LogoCover } from './logo-cover';

/**
 * The room logo information.
 * @export
 * @interface Logo
 */
export interface Logo {
    /**
     * The original logo.
     * @type {string}
     * @memberof Logo
     */
    'original': string | null;
    /**
     * The large logo.
     * @type {string}
     * @memberof Logo
     */
    'large': string | null;
    /**
     * The medium logo.
     * @type {string}
     * @memberof Logo
     */
    'medium': string | null;
    /**
     * The small logo.
     * @type {string}
     * @memberof Logo
     */
    'small': string | null;
    /**
     * The logo color.
     * @type {string}
     * @memberof Logo
     */
    'color'?: string | null;
    /**
     * 
     * @type {LogoCover}
     * @memberof Logo
     */
    'cover'?: LogoCover;
}

