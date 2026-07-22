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


/**
 * Represents the usage statistics of a single DocsCloud user category (editor or viewer).
 */
export interface DocsCloudUserStats {
    /**
     * The number of active users.
     */
    'active'?: number;
    /**
     * The number of internal users.
     */
    'internal'?: number;
    /**
     * The number of external users.
     */
    'external'?: number;
    /**
     * The number of remaining users before the limit is reached.
     */
    'remaining'?: number;
    /**
     * Whether the number of remaining users is critically low.
     */
    'criticalRemaining'?: boolean;
}

