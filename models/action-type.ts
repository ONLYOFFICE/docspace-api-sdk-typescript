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
 * [0 - None, 1 - Create, 2 - Update, 3 - Delete, 4 - Link, 5 - Unlink, 6 - Attach, 7 - Detach, 8 - Send, 9 - Import, 10 - Export, 11 - Update access, 12 - Download, 13 - Upload, 14 - Copy, 15 - Move, 16 - Reassigns, 17 - Follow, 18 - Unfollow, 19 - Logout]
 * @export
 * @enum {number}
 */

export const ActionType = {
    /**
    * None
    */
    None: 0,
    /**
    * Create
    */
    Create: 1,
    /**
    * Update
    */
    Update: 2,
    /**
    * Delete
    */
    Delete: 3,
    /**
    * Link
    */
    Link: 4,
    /**
    * Unlink
    */
    Unlink: 5,
    /**
    * Attach
    */
    Attach: 6,
    /**
    * Detach
    */
    Detach: 7,
    /**
    * Send
    */
    Send: 8,
    /**
    * Import
    */
    Import: 9,
    /**
    * Export
    */
    Export: 10,
    /**
    * Update access
    */
    UpdateAccess: 11,
    /**
    * Download
    */
    Download: 12,
    /**
    * Upload
    */
    Upload: 13,
    /**
    * Copy
    */
    Copy: 14,
    /**
    * Move
    */
    Move: 15,
    /**
    * Reassigns
    */
    Reassigns: 16,
    /**
    * Follow
    */
    Follow: 17,
    /**
    * Unfollow
    */
    Unfollow: 18,
    /**
    * Logout
    */
    Logout: 19
} as const;

export type ActionType = typeof ActionType[keyof typeof ActionType];



