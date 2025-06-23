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

// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeActivationStatus } from './employee-activation-status';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeStatus } from './employee-status';
// May contain unused imports in some cases
// @ts-ignore
import type { MobilePhoneActivationStatus } from './mobile-phone-activation-status';

/**
 * The user information.
 * @export
 * @interface UserInfo
 */
export interface UserInfo {
    /**
     * The user ID.
     * @type {string}
     * @memberof UserInfo
     */
    'id'?: string;
    /**
     * The user first name.
     * @type {string}
     * @memberof UserInfo
     */
    'firstName'?: string | null;
    /**
     * The user last name.
     * @type {string}
     * @memberof UserInfo
     */
    'lastName'?: string | null;
    /**
     * The user username.
     * @type {string}
     * @memberof UserInfo
     */
    'userName'?: string | null;
    /**
     * The user birthday.
     * @type {string}
     * @memberof UserInfo
     */
    'birthDate'?: string | null;
    /**
     * The user sex (male or female).
     * @type {boolean}
     * @memberof UserInfo
     */
    'sex'?: boolean | null;
    /**
     * 
     * @type {EmployeeStatus}
     * @memberof UserInfo
     */
    'status'?: EmployeeStatus;
    /**
     * 
     * @type {EmployeeActivationStatus}
     * @memberof UserInfo
     */
    'activationStatus'?: EmployeeActivationStatus;
    /**
     * The date and time when the user account was terminated.
     * @type {string}
     * @memberof UserInfo
     */
    'terminatedDate'?: string | null;
    /**
     * The user title.
     * @type {string}
     * @memberof UserInfo
     */
    'title'?: string | null;
    /**
     * The user registration date.
     * @type {string}
     * @memberof UserInfo
     */
    'workFromDate'?: string | null;
    /**
     * The user email address.
     * @type {string}
     * @memberof UserInfo
     */
    'email'?: string | null;
    /**
     * The list of user contacts in the string format.
     * @type {string}
     * @memberof UserInfo
     */
    'contacts'?: string | null;
    /**
     * The list of user contacts.
     * @type {Array<string>}
     * @memberof UserInfo
     */
    'contactsList'?: Array<string> | null;
    /**
     * The user location.
     * @type {string}
     * @memberof UserInfo
     */
    'location'?: string | null;
    /**
     * The user notes.
     * @type {string}
     * @memberof UserInfo
     */
    'notes'?: string | null;
    /**
     * Specifies if the user account was removed or not.
     * @type {boolean}
     * @memberof UserInfo
     */
    'removed'?: boolean;
    /**
     * The date and time when the user account was last modified.
     * @type {string}
     * @memberof UserInfo
     */
    'lastModified'?: string;
    /**
     * The tenant ID.
     * @type {number}
     * @memberof UserInfo
     */
    'tenantId'?: number;
    /**
     * Specifies if the user is active or not.
     * @type {boolean}
     * @memberof UserInfo
     */
    'isActive'?: boolean;
    /**
     * The user culture code.
     * @type {string}
     * @memberof UserInfo
     */
    'cultureName'?: string | null;
    /**
     * The user mobile phone.
     * @type {string}
     * @memberof UserInfo
     */
    'mobilePhone'?: string | null;
    /**
     * 
     * @type {MobilePhoneActivationStatus}
     * @memberof UserInfo
     */
    'mobilePhoneActivationStatus'?: MobilePhoneActivationStatus;
    /**
     * The LDAP user identificator.
     * @type {string}
     * @memberof UserInfo
     */
    'sid'?: string | null;
    /**
     * The LDAP user quota attribute.
     * @type {number}
     * @memberof UserInfo
     */
    'ldapQouta'?: number;
    /**
     * The SSO SAML user identificator.
     * @type {string}
     * @memberof UserInfo
     */
    'ssoNameId'?: string | null;
    /**
     * The SSO SAML user session identificator.
     * @type {string}
     * @memberof UserInfo
     */
    'ssoSessionId'?: string | null;
    /**
     * The date and time when the user account was created.
     * @type {string}
     * @memberof UserInfo
     */
    'createDate'?: string;
    /**
     * The ID of the user who created the current user account.
     * @type {string}
     * @memberof UserInfo
     */
    'createdBy'?: string | null;
    /**
     * Specifies if tips, updates and offers are allowed to be sent to the user or not.
     * @type {boolean}
     * @memberof UserInfo
     */
    'spam'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserInfo
     */
    'checkActivation'?: boolean;
}



