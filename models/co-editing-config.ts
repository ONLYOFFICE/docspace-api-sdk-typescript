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
import type { CoEditingConfigMode } from './co-editing-config-mode';

/**
 * The co-editing configuration parameters.
 * @export
 * @interface CoEditingConfig
 */
export interface CoEditingConfig {
    /**
     * Specifies if the co-editing mode can be changed in the editor interface or not.
     * @type {boolean}
     * @memberof CoEditingConfig
     */
    'change'?: boolean;
    /**
     * Specifies if the co-editing mode is fast.
     * @type {boolean}
     * @memberof CoEditingConfig
     */
    'fast'?: boolean;
    /**
     * 
     * @type {CoEditingConfigMode}
     * @memberof CoEditingConfig
     */
    'mode'?: CoEditingConfigMode;
}



