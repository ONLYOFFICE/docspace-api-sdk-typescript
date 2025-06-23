// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode


/**
 * The permissions configuration parameters.
 * @export
 * @interface PermissionsConfig
 */
export interface PermissionsConfig {
    /**
     * Specifies whether to display the \"Restore\" button when using the \"onRequestRestore\" event.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'changeHistory'?: boolean;
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
     * Specifies whether to display the \"Rename...\" button when using the \"onRequestRename\" event.
     * @type {boolean}
     * @memberof PermissionsConfig
     */
    'rename'?: boolean;
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

