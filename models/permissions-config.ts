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
 * The permissions configuration parameters.
 * @export
 * @interface PermissionsConfig
 */
export interface PermissionsConfig {
    /**
     * Defines if the document can be commented or not.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'comment'?: boolean;
    /**
     * Defines if the chat functionality is enabled in the document or not.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'chat'?: boolean;
    /**
     * Defines if the document can be downloaded or only viewed or edited online.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'download'?: boolean;
    /**
     * Defines if the document can be edited or only viewed.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'edit'?: boolean;
    /**
     * Defines if the forms can be filled.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'fillForms'?: boolean;
    /**
     * Defines if the filter can be applied globally (true) affecting all the other users,  or locally (false), i.e. for the current user only.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'modifyFilter'?: boolean;
    /**
     * Defines if the \"Protection\" tab on the toolbar and the \"Protect\" button in the left menu are displayedor hidden.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'protect'?: boolean;
    /**
     * Defines if the document can be printed or not.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'print'?: boolean;
    /**
     * Defines if the document can be reviewed or not.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'review'?: boolean;
    /**
     * Defines if the content can be copied to the clipboard or not.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'copy'?: boolean;
}

