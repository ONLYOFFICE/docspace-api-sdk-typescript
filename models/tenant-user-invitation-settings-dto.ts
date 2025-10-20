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
 * The user invitation settings.
 * @export
 * @interface TenantUserInvitationSettingsDto
 */
export interface TenantUserInvitationSettingsDto {
    /**
     * Specifies whether to allow inviting new DocSpace members through the Contacts section.
     * @type {boolean}
     * @memberof TenantUserInvitationSettingsDto
     */
    'allowInvitingMembers': boolean;
    /**
     * Specifies whether to allow all DocSpace members to invite external guests to the rooms.
     * @type {boolean}
     * @memberof TenantUserInvitationSettingsDto
     */
    'allowInvitingGuests': boolean;
}

