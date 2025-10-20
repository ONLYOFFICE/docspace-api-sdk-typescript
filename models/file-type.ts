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
 * [0 - Unknown, 1 - Archive, 2 - Video, 3 - Audio, 4 - Image, 5 - Spreadsheet, 6 - Presentation, 7 - Document, 10 - Pdf, 11 - Diagram]
 * @export
 * @enum {number}
 */

export const FileType = {
    /**
    * Unknown
    */
    Unknown: 0,
    /**
    * Archive
    */
    Archive: 1,
    /**
    * Video
    */
    Video: 2,
    /**
    * Audio
    */
    Audio: 3,
    /**
    * Image
    */
    Image: 4,
    /**
    * Spreadsheet
    */
    Spreadsheet: 5,
    /**
    * Presentation
    */
    Presentation: 6,
    /**
    * Document
    */
    Document: 7,
    /**
    * Pdf
    */
    Pdf: 10,
    /**
    * Diagram
    */
    Diagram: 11
} as const;

export type FileType = typeof FileType[keyof typeof FileType];



