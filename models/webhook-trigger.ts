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
 * [0 - *, 1 - user.created, 2 - user.invited, 4 - user.updated, 8 - user.deleted, 16 - group.created, 32 - group.updated, 64 - group.deleted, 128 - file.created, 256 - file.uploaded, 512 - file.updated, 1024 - file.trashed, 2048 - file.deleted, 4096 - file.restored, 8192 - file.copied, 16384 - file.moved, 32768 - folder.created, 65536 - folder.updated, 131072 - folder.trashed, 262144 - folder.deleted, 524288 - folder.restored, 1048576 - folder.copied, 2097152 - folder.moved, 4194304 - room.created, 8388608 - room.updated, 16777216 - room.archived, 33554432 - room.deleted, 67108864 - room.restored, 134217728 - room.copied]
 * @export
 * @enum {number}
 */

export const WebhookTrigger = {
    /**
    * *
    */
    All: 0,
    /**
    * user.created
    */
    UserCreated: 1,
    /**
    * user.invited
    */
    UserInvited: 2,
    /**
    * user.updated
    */
    UserUpdated: 4,
    /**
    * user.deleted
    */
    UserDeleted: 8,
    /**
    * group.created
    */
    GroupCreated: 16,
    /**
    * group.updated
    */
    GroupUpdated: 32,
    /**
    * group.deleted
    */
    GroupDeleted: 64,
    /**
    * file.created
    */
    FileCreated: 128,
    /**
    * file.uploaded
    */
    FileUploaded: 256,
    /**
    * file.updated
    */
    FileUpdated: 512,
    /**
    * file.trashed
    */
    FileTrashed: 1024,
    /**
    * file.deleted
    */
    FileDeleted: 2048,
    /**
    * file.restored
    */
    FileRestored: 4096,
    /**
    * file.copied
    */
    FileCopied: 8192,
    /**
    * file.moved
    */
    FileMoved: 16384,
    /**
    * folder.created
    */
    FolderCreated: 32768,
    /**
    * folder.updated
    */
    FolderUpdated: 65536,
    /**
    * folder.trashed
    */
    FolderTrashed: 131072,
    /**
    * folder.deleted
    */
    FolderDeleted: 262144,
    /**
    * folder.restored
    */
    FolderRestored: 524288,
    /**
    * folder.copied
    */
    FolderCopied: 1048576,
    /**
    * folder.moved
    */
    FolderMoved: 2097152,
    /**
    * room.created
    */
    RoomCreated: 4194304,
    /**
    * room.updated
    */
    RoomUpdated: 8388608,
    /**
    * room.archived
    */
    RoomArchived: 16777216,
    /**
    * room.deleted
    */
    RoomDeleted: 33554432,
    /**
    * room.restored
    */
    RoomRestored: 67108864,
    /**
    * room.copied
    */
    RoomCopied: 134217728
} as const;

export type WebhookTrigger = typeof WebhookTrigger[keyof typeof WebhookTrigger];



