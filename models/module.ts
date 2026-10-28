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
 * The descriptor of a portal module: what it is called, where it starts and how it is pictured.
 */
export interface Module {
    /**
     * The identifier of the module. It is the same in every portal and in every language, so use it rather than the  title to tell modules apart.
     */
    'id'?: string;
    /**
     * The short system name of the module, the one that appears in its addresses and in the portal configuration.  Unlike the title it is not translated.
     */
    'appName'?: string | null;
    /**
     * The display name of the module, already translated for the calling account, so it changes with the language  and must not be compared against a fixed string.
     */
    'title'?: string | null;
    /**
     * The address of the start page of the module, to be opened in a browser rather than called as an API.
     */
    'link'?: string | null;
    /**
     * The address of the small icon of the module, meant for a menu entry.
     */
    'iconUrl'?: string | null;
    /**
     * The address of the large image of the module, meant for a tile or a start screen.
     */
    'imageUrl'?: string | null;
    /**
     * The address of the help section of the module. It is empty when the portal publishes no help for it.
     */
    'helpUrl'?: string | null;
    /**
     * The one-line description of the module shown next to its title, translated for the calling account.
     */
    'description'?: string | null;
    /**
     * Whether the portal opens this module first when no other destination is given.
     */
    'isPrimary'?: boolean;
}

