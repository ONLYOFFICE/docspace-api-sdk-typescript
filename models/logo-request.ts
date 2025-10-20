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


/**
 * The logo request parameters.
 * @export
 * @interface LogoRequest
 */
export interface LogoRequest {
    /**
     * The path to the temporary image file.
     * @type {string}
     * @memberof LogoRequest
     */
    'tmpFile'?: string | null;
    /**
     * The X coordinate of the rectangle starting point.
     * @type {number}
     * @memberof LogoRequest
     */
    'x'?: number;
    /**
     * The Y coordinate of the rectangle starting point.
     * @type {number}
     * @memberof LogoRequest
     */
    'y'?: number;
    /**
     * The rectangle width.
     * @type {number}
     * @memberof LogoRequest
     */
    'width'?: number;
    /**
     * The rectangle height.
     * @type {number}
     * @memberof LogoRequest
     */
    'height'?: number;
}

