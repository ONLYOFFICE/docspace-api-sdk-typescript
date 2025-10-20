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
 * [0 - User, 1 - External link, 2 - Group, 3 - Invitation link, 4 - Primary external link]
 * @export
 * @enum {number}
 */

export const SubjectType = {
    /**
    * User
    */
    User: 0,
    /**
    * External link
    */
    ExternalLink: 1,
    /**
    * Group
    */
    Group: 2,
    /**
    * Invitation link
    */
    InvitationLink: 3,
    /**
    * Primary external link
    */
    PrimaryExternalLink: 4
} as const;

export type SubjectType = typeof SubjectType[keyof typeof SubjectType];



