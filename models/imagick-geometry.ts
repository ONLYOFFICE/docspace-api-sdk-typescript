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
 * 
 * @export
 * @interface IMagickGeometry
 */
export interface IMagickGeometry {
    /**
     * 
     * @type {boolean}
     * @memberof IMagickGeometry
     */
    'aspectRatio'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMagickGeometry
     */
    'fillArea'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMagickGeometry
     */
    'greater'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof IMagickGeometry
     */
    'height'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof IMagickGeometry
     */
    'ignoreAspectRatio'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMagickGeometry
     */
    'isPercentage'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMagickGeometry
     */
    'less'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMagickGeometry
     */
    'limitPixels'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof IMagickGeometry
     */
    'width'?: number;
    /**
     * 
     * @type {number}
     * @memberof IMagickGeometry
     */
    'x'?: number;
    /**
     * 
     * @type {number}
     * @memberof IMagickGeometry
     */
    'y'?: number;
}

