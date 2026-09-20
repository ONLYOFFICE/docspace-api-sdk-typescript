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
 * The image URLs of one logo slot, per interface theme.
 */
export interface WhiteLabelItemPathDto {
    /**
     * The absolute URL of the image to render on a light background. It is filled in unless the request asked  for the dark theme alone with `isDark=true`, in which case only `dark` comes back.
     */
    'light'?: string | null;
    /**
     * The absolute URL of the image to render on a dark background. When both themes are asked for it comes back  empty for a slot that has no separate dark image, meaning the light one is to be used for both; when  `isDark=false` was passed it is left out entirely.
     */
    'dark'?: string | null;
}

