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
 * The branding of the organization running the portal, as the editor About panel shows it. It is reported on a  server installation only.
 */
export interface CustomerConfigDto {
    /**
     * The postal address from the portal branding settings; empty when none was entered.
     */
    'address'?: string | null;
    /**
     * The About-panel logo of the organization.
     */
    'logo'?: string | null;
    /**
     * The About-panel logo for a dark interface theme.
     */
    'logoDark'?: string | null;
    /**
     * The contact address from the portal branding settings.
     */
    'mail'?: string | null;
    /**
     * The organization name shown in the editor.
     */
    'name'?: string | null;
    /**
     * The website of the organization.
     */
    'www'?: string | null;
}

