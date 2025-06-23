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



