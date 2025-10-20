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
 * [0 - User or group, 1 - Invitation link, 2 - External link, 4 - Additional external link, 8 - Primary external link, 16 - User, 32 - Group]
 * @export
 * @enum {number}
 */

export const ShareFilterType = {
    /**
    * User or group
    */
    UserOrGroup: 0,
    /**
    * Invitation link
    */
    InvitationLink: 1,
    /**
    * External link
    */
    ExternalLink: 2,
    /**
    * Additional external link
    */
    AdditionalExternalLink: 4,
    /**
    * Primary external link
    */
    PrimaryExternalLink: 8,
    /**
    * User
    */
    User: 16,
    /**
    * Group
    */
    Group: 32
} as const;

export type ShareFilterType = typeof ShareFilterType[keyof typeof ShareFilterType];



