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
 * [0 - None, 1 - Read and write, 2 - Read, 3 - Restrict, 4 - Varies, 5 - Review, 6 - Comment, 7 - Fill forms, 8 - Custom filter, 9 - Room manager, 10 - Editing, 11 - Content creator]
 * @export
 * @enum {number}
 */

export const FileShare = {
    /**
    * None
    */
    None: 0,
    /**
    * Read and write
    */
    ReadWrite: 1,
    /**
    * Read
    */
    Read: 2,
    /**
    * Restrict
    */
    Restrict: 3,
    /**
    * Varies
    */
    Varies: 4,
    /**
    * Review
    */
    Review: 5,
    /**
    * Comment
    */
    Comment: 6,
    /**
    * Fill forms
    */
    FillForms: 7,
    /**
    * Custom filter
    */
    CustomFilter: 8,
    /**
    * Room manager
    */
    RoomManager: 9,
    /**
    * Editing
    */
    Editing: 10,
    /**
    * Content creator
    */
    ContentCreator: 11
} as const;

export type FileShare = typeof FileShare[keyof typeof FileShare];



