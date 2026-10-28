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
 * The logo the editor shows, resolved for the file type and the layout of this opening.
 */
export interface LogoConfigDto {
    /**
     * The logo for the current layout and file type, as the portal branding defines it.
     */
    'image'?: string | null;
    /**
     * The variant for a dark interface theme.
     */
    'imageDark'?: string | null;
    /**
     * The variant for a light interface theme.
     */
    'imageLight'?: string | null;
    /**
     * The variant for the framed viewer. It is empty in every layout but the embedded one.
     */
    'imageEmbedded'?: string | null;
    /**
     * Where clicking the logo takes the user.
     */
    'url'?: string | null;
    /**
     * Whether the logo is shown at all; the mobile layout hides it.
     */
    'visible'?: boolean;
}

