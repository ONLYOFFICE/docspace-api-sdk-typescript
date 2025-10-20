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
 * [0 - Emp invite, 1 - Link invite, 2 - Portal suspend, 3 - Portal continue, 4 - Portal remove, 5 - Dns change, 6 - Portal owner change, 7 - Activation, 8 - Email change, 9 - Email activation, 10 - Password change, 11 - Profile remove, 12 - Phone activation, 13 - Phone auth, 14 - Auth, 15 - Tfa activation, 16 - Tfa auth, 17 - Wizard, 18 - Guest share link]
 * @export
 * @enum {number}
 */

export const ConfirmType = {
    /**
    * Emp invite
    */
    EmpInvite: 0,
    /**
    * Link invite
    */
    LinkInvite: 1,
    /**
    * Portal suspend
    */
    PortalSuspend: 2,
    /**
    * Portal continue
    */
    PortalContinue: 3,
    /**
    * Portal remove
    */
    PortalRemove: 4,
    /**
    * Dns change
    */
    DnsChange: 5,
    /**
    * Portal owner change
    */
    PortalOwnerChange: 6,
    /**
    * Activation
    */
    Activation: 7,
    /**
    * Email change
    */
    EmailChange: 8,
    /**
    * Email activation
    */
    EmailActivation: 9,
    /**
    * Password change
    */
    PasswordChange: 10,
    /**
    * Profile remove
    */
    ProfileRemove: 11,
    /**
    * Phone activation
    */
    PhoneActivation: 12,
    /**
    * Phone auth
    */
    PhoneAuth: 13,
    /**
    * Auth
    */
    Auth: 14,
    /**
    * Tfa activation
    */
    TfaActivation: 15,
    /**
    * Tfa auth
    */
    TfaAuth: 16,
    /**
    * Wizard
    */
    Wizard: 17,
    /**
    * Guest share link
    */
    GuestShareLink: 18
} as const;

export type ConfirmType = typeof ConfirmType[keyof typeof ConfirmType];



