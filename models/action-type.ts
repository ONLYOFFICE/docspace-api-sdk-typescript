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



