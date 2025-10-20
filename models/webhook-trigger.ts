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



