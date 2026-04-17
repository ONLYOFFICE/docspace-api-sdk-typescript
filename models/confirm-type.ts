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
 * [EmpInvite - Emp invite, LinkInvite - Link invite, PortalSuspend - Portal suspend, PortalContinue - Portal continue, PortalRemove - Portal remove, DnsChange - Dns change, PortalOwnerChange - Portal owner change, Activation - Activation, EmailChange - Email change, EmailActivation - Email activation, PasswordChange - Password change, ProfileRemove - Profile remove, PhoneActivation - Phone activation, PhoneAuth - Phone auth, Auth - Auth, TfaActivation - Tfa activation, TfaAuth - Tfa auth, Wizard - Wizard, GuestShareLink - Guest share link]
 */

export const ConfirmType = {
    EmpInvite: 'EmpInvite',
    LinkInvite: 'LinkInvite',
    PortalSuspend: 'PortalSuspend',
    PortalContinue: 'PortalContinue',
    PortalRemove: 'PortalRemove',
    DnsChange: 'DnsChange',
    PortalOwnerChange: 'PortalOwnerChange',
    Activation: 'Activation',
    EmailChange: 'EmailChange',
    EmailActivation: 'EmailActivation',
    PasswordChange: 'PasswordChange',
    ProfileRemove: 'ProfileRemove',
    PhoneActivation: 'PhoneActivation',
    PhoneAuth: 'PhoneAuth',
    Auth: 'Auth',
    TfaActivation: 'TfaActivation',
    TfaAuth: 'TfaAuth',
    Wizard: 'Wizard',
    GuestShareLink: 'GuestShareLink',
} as const;

export type ConfirmType = typeof ConfirmType[keyof typeof ConfirmType];



