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
import type { FolderContentDtoInteger } from './folder-content-dto-integer';

/**
 * 
 * @export
 * @interface FolderContentIntegerArrayWrapper
 */
export interface FolderContentIntegerArrayWrapper {
    /**
     * 
     * @type {Array<FolderContentDtoInteger>}
     * @memberof FolderContentIntegerArrayWrapper
     */
    'response'?: Array<FolderContentDtoInteger>;
    /**
     * 
     * @type {number}
     * @memberof FolderContentIntegerArrayWrapper
     */
    'count'?: number;
    /**
     * 
     * @type {Array<ActiveConnectionsWrapperLinksInner>}
     * @memberof FolderContentIntegerArrayWrapper
     */
    'links'?: Array<ActiveConnectionsWrapperLinksInner>;
    /**
     * 
     * @type {number}
     * @memberof FolderContentIntegerArrayWrapper
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof FolderContentIntegerArrayWrapper
     */
    'statusCode'?: number;
}

