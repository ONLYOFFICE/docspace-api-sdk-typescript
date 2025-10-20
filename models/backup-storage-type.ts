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
 * [0 - Documents, 1 - Thridparty documents, 2 - Custom cloud, 3 - Local, 4 - Data store, 5 - Thirdparty consumer]
 * @export
 * @enum {number}
 */

export const BackupStorageType = {
    /**
    * Documents
    */
    Documents: 0,
    /**
    * Thridparty documents
    */
    ThridpartyDocuments: 1,
    /**
    * Custom cloud
    */
    CustomCloud: 2,
    /**
    * Local
    */
    Local: 3,
    /**
    * Data store
    */
    DataStore: 4,
    /**
    * Thirdparty consumer
    */
    ThirdPartyConsumer: 5
} as const;

export type BackupStorageType = typeof BackupStorageType[keyof typeof BackupStorageType];



