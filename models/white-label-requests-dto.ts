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
import type { ItemKeyValuePairStringLogoRequestsDto } from './item-key-value-pair-string-logo-requests-dto';

/**
 * The request parameters for configuring the white label branding settings.
 * @export
 * @interface WhiteLabelRequestsDto
 */
export interface WhiteLabelRequestsDto {
    /**
     * The text to display alongside or in place of the logo.
     * @type {string}
     * @memberof WhiteLabelRequestsDto
     */
    'logoText'?: string | null;
    /**
     * The white label tenant IDs with their logos (light or dark).
     * @type {Array<ItemKeyValuePairStringLogoRequestsDto>}
     * @memberof WhiteLabelRequestsDto
     */
    'logo'?: Array<ItemKeyValuePairStringLogoRequestsDto> | null;
}

