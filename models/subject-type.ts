/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
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
 */

export const SubjectType = {
    User: 0,
    ExternalLink: 1,
    Group: 2,
    InvitationLink: 3,
    PrimaryExternalLink: 4,
} as const;

export type SubjectType = typeof SubjectType[keyof typeof SubjectType];



