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
 * [0 - None, 2 - Documents, 3 - Login, 4 - Others, 5 - People, 7 - Settings]
 * @export
 * @enum {number}
 */

export const ProductType = {
    /**
    * None
    */
    None: 0,
    /**
    * Documents
    */
    Documents: 2,
    /**
    * Login
    */
    Login: 3,
    /**
    * Others
    */
    Others: 4,
    /**
    * People
    */
    People: 5,
    /**
    * Settings
    */
    Settings: 7
} as const;

export type ProductType = typeof ProductType[keyof typeof ProductType];



