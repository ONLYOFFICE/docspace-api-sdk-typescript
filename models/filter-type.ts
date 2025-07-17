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
 * [0 - None, 1 - Files  only, 2 - Folders only, 3 - Documents only, 4 - Presentations only, 5 - Spreadsheets only, 7 - Images only, 8 - By user, 9 - By department, 10 - Archive only, 11 - By extension, 12 - Media only, 13 - Filling forms rooms, 14 - Editing rooms, 17 - Custom rooms, 20 - Public rooms, 22 - Pdf, 23 - Pdf form, 24 - Virtual data rooms, 25 - Diagrams only]
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
    PdfForm: 23,
    /**
    * Virtual data rooms
    */
    VirtualDataRooms: 24,
    /**
    * Diagrams only
    */
    DiagramsOnly: 25
} as const;

export type FilterType = typeof FilterType[keyof typeof FilterType];



