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
 * [0 - Move, 1 - Copy, 2 - Delete, 3 - Download, 4 - MarkAsRead, 5 - Import, 6 - Convert, 7 - Duplicate]
 * @export
 * @enum {number}
 */

export const FileOperationType = {
    /**
    * Move
    */
    Move: 0,
    /**
    * Copy
    */
    Copy: 1,
    /**
    * Delete
    */
    Delete: 2,
    /**
    * Download
    */
    Download: 3,
    /**
    * MarkAsRead
    */
    MarkAsRead: 4,
    /**
    * Import
    */
    Import: 5,
    /**
    * Convert
    */
    Convert: 6,
    /**
    * Duplicate
    */
    Duplicate: 7
} as const;

export type FileOperationType = typeof FileOperationType[keyof typeof FileOperationType];



