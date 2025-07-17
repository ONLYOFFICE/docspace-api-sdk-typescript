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
import type { ActiveConnectionsWrapperLinksInner } from './active-connections-wrapper-links-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { FormsItemDto } from './forms-item-dto';

/**
 * 
 * @export
 * @interface FormsItemArrayWrapper
 */
export interface FormsItemArrayWrapper {
    /**
     * 
     * @type {Array<FormsItemDto>}
     * @memberof FormsItemArrayWrapper
     */
    'response'?: Array<FormsItemDto>;
    /**
     * 
     * @type {number}
     * @memberof FormsItemArrayWrapper
     */
    'count'?: number;
    /**
     * 
     * @type {Array<ActiveConnectionsWrapperLinksInner>}
     * @memberof FormsItemArrayWrapper
     */
    'links'?: Array<ActiveConnectionsWrapperLinksInner>;
    /**
     * 
     * @type {number}
     * @memberof FormsItemArrayWrapper
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof FormsItemArrayWrapper
     */
    'statusCode'?: number;
}

