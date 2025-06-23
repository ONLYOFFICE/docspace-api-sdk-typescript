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
 * [0 - None, 1 - Files  only, 2 - Folders only, 3 - Documents only, 4 - Presentations only, 5 - Spreadsheets only, 7 - Images only, 8 - By user, 9 - By department, 10 - Archive only, 11 - By extension, 12 - Media only, 13 - Filling forms rooms, 14 - Editing rooms, 17 - Custom rooms, 20 - Public rooms, 22 - Pdf, 23 - Pdf form]
 * @export
 * @enum {number}
 */

export const FilterType = {
    /**
    * None
    */
    None: 0,
    /**
    * Files  only
    */
    FilesOnly: 1,
    /**
    * Folders only
    */
    FoldersOnly: 2,
    /**
    * Documents only
    */
    DocumentsOnly: 3,
    /**
    * Presentations only
    */
    PresentationsOnly: 4,
    /**
    * Spreadsheets only
    */
    SpreadsheetsOnly: 5,
    /**
    * Images only
    */
    ImagesOnly: 7,
    /**
    * By user
    */
    ByUser: 8,
    /**
    * By department
    */
    ByDepartment: 9,
    /**
    * Archive only
    */
    ArchiveOnly: 10,
    /**
    * By extension
    */
    ByExtension: 11,
    /**
    * Media only
    */
    MediaOnly: 12,
    /**
    * Filling forms rooms
    */
    FillingFormsRooms: 13,
    /**
    * Editing rooms
    */
    EditingRooms: 14,
    /**
    * Custom rooms
    */
    CustomRooms: 17,
    /**
    * Public rooms
    */
    PublicRooms: 20,
    /**
    * Pdf
    */
    Pdf: 22,
    /**
    * Pdf form
    */
    PdfForm: 23
} as const;

export type FilterType = typeof FilterType[keyof typeof FilterType];



