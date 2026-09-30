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
 * Whether the portal promotional banners are hidden.
 */
export interface TenantBannerSettingsDto {
    /**
     * Whether the promotional banners are hidden from every user of the portal. The flag is only honoured on a  self-hosted installation; a SaaS portal keeps showing the banners whatever is stored here.
     */
    'hidden'?: boolean;
}

