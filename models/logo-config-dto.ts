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


/**
 * The logo config parameters.
 */
export interface LogoConfigDto {
    /**
     * The image of the logo.
     */
    'image'?: string | null;
    /**
     * The dark image of the logo.
     */
    'imageDark'?: string | null;
    /**
     * The light image of the logo.
     */
    'imageLight'?: string | null;
    /**
     * The embedded image of the logo.
     */
    'imageEmbedded'?: string | null;
    /**
     * The url link of the logo.
     */
    'url'?: string | null;
    /**
     * Specifies if the logo is visible.
     */
    'visible'?: boolean;
}

