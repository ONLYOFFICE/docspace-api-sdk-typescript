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
 * The configuration parameters for the embedded document type.
 * @export
 * @interface EmbeddedConfig
 */
export interface EmbeddedConfig {
    /**
     * The absolute URL to the document serving as a source file for the document embedded into the web page.
     * @type {string}
     * @memberof EmbeddedConfig
     */
    'embedUrl'?: string | null;
    /**
     * The absolute URL that will allow the document to be saved onto the user personal computer.
     * @type {string}
     * @memberof EmbeddedConfig
     */
    'saveUrl'?: string | null;
    /**
     * The shared URL parameter.
     * @type {string}
     * @memberof EmbeddedConfig
     */
    'shareLinkParam'?: string | null;
    /**
     * The absolute URL that will allow other users to share this document.
     * @type {string}
     * @memberof EmbeddedConfig
     */
    'shareUrl'?: string | null;
    /**
     * The place for the embedded viewer toolbar, can be either \"top\" or \"bottom\".
     * @type {string}
     * @memberof EmbeddedConfig
     */
    'toolbarDocked'?: string | null;
}

