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

// May contain unused imports in some cases
// @ts-ignore
import type { ColorThemeColorsRequestDto } from './color-theme-colors-request-dto';

/**
 * A colour theme to store.
 */
export interface CustomColorThemeRequestDto {
    /**
     * The id of the custom theme to replace, or an id no stored theme has to add a new one.
     */
    'id'?: number;
    /**
     * Accepted for compatibility with earlier clients and not read: a custom theme is always stored without a name.
     */
    'name'?: string | null;
    /**
     * The accent and button colours of the interface. Left out, a stored theme keeps its own.
     */
    'main'?: ColorThemeColorsRequestDto;
    /**
     * The colours of the text shown on the accent and on the buttons. Left out, a stored theme keeps its own.
     */
    'text'?: ColorThemeColorsRequestDto;
}

