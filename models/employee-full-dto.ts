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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { Contact } from './contact';
// May contain unused imports in some cases
// @ts-ignore
import type { DarkThemeSettingsType } from './dark-theme-settings-type';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeActivationStatus } from './employee-activation-status';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeStatus } from './employee-status';
// May contain unused imports in some cases
// @ts-ignore
import type { GroupSummaryDto } from './group-summary-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MobilePhoneActivationStatus } from './mobile-phone-activation-status';

/**
 * The full list of user parameters.
 * @export
 * @interface EmployeeFullDto
 */
export interface EmployeeFullDto {
    /**
     * The user ID.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'id'?: string;
    /**
     * The user display name.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'displayName'?: string | null;
    /**
     * The user title.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'title'?: string | null;
    /**
     * The user avatar.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'avatar'?: string | null;
    /**
     * The user original size avatar.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'avatarOriginal'?: string | null;
    /**
     * The user maximum size avatar.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'avatarMax'?: string | null;
    /**
     * The user medium size avatar.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'avatarMedium'?: string | null;
    /**
     * The user small size avatar.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'avatarSmall'?: string | null;
    /**
     * The user profile URL.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'profileUrl'?: string | null;
    /**
     * Specifies if the user has an avatar or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'hasAvatar'?: boolean;
    /**
     * Specifies if the user is anonymous or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'isAnonim'?: boolean;
    /**
     * The user first name.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'firstName'?: string | null;
    /**
     * The user last name.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'lastName'?: string | null;
    /**
     * The user username.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'userName'?: string | null;
    /**
     * The user email.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'email'?: string | null;
    /**
     * The list of user contacts.
     * @type {Array<Contact>}
     * @memberof EmployeeFullDto
     */
    'contacts'?: Array<Contact> | null;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof EmployeeFullDto
     */
    'birthday'?: ApiDateTime;
    /**
     * The user sex.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'sex'?: string | null;
    /**
     * 
     * @type {EmployeeStatus}
     * @memberof EmployeeFullDto
     */
    'status'?: EmployeeStatus;
    /**
     * 
     * @type {EmployeeActivationStatus}
     * @memberof EmployeeFullDto
     */
    'activationStatus'?: EmployeeActivationStatus;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof EmployeeFullDto
     */
    'terminated'?: ApiDateTime;
    /**
     * The user department.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'department'?: string | null;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof EmployeeFullDto
     */
    'workFrom'?: ApiDateTime;
    /**
     * The list of user groups.
     * @type {Array<GroupSummaryDto>}
     * @memberof EmployeeFullDto
     */
    'groups'?: Array<GroupSummaryDto> | null;
    /**
     * The user location.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'location'?: string | null;
    /**
     * The user notes.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'notes'?: string | null;
    /**
     * Specifies if the user is an administrator or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'isAdmin'?: boolean;
    /**
     * Specifies if the user is a room administrator or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'isRoomAdmin'?: boolean;
    /**
     * Specifies if the LDAP settings are enabled for the user or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'isLDAP'?: boolean;
    /**
     * The list of the administrator modules.
     * @type {Array<string>}
     * @memberof EmployeeFullDto
     */
    'listAdminModules'?: Array<string> | null;
    /**
     * Specifies if the user is a portal owner or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'isOwner'?: boolean;
    /**
     * Specifies if the user is a portal visitor or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'isVisitor'?: boolean;
    /**
     * Specifies if the user is a portal collaborator or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'isCollaborator'?: boolean;
    /**
     * The user culture code.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'cultureName'?: string | null;
    /**
     * The user mobile phone number.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'mobilePhone'?: string | null;
    /**
     * 
     * @type {MobilePhoneActivationStatus}
     * @memberof EmployeeFullDto
     */
    'mobilePhoneActivationStatus'?: MobilePhoneActivationStatus;
    /**
     * Specifies if the SSO settings are enabled for the user or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'isSSO'?: boolean;
    /**
     * 
     * @type {DarkThemeSettingsType}
     * @memberof EmployeeFullDto
     */
    'theme'?: DarkThemeSettingsType;
    /**
     * The user quota limit.
     * @type {number}
     * @memberof EmployeeFullDto
     */
    'quotaLimit'?: number | null;
    /**
     * The portal used space of the user.
     * @type {number}
     * @memberof EmployeeFullDto
     */
    'usedSpace'?: number | null;
    /**
     * Specifies if the user has access rights.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'shared'?: boolean | null;
    /**
     * Specifies if the user has a custom quota or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'isCustomQuota'?: boolean | null;
    /**
     * The current login event ID.
     * @type {number}
     * @memberof EmployeeFullDto
     */
    'loginEventId'?: number | null;
    /**
     * 
     * @type {EmployeeDto}
     * @memberof EmployeeFullDto
     */
    'createdBy'?: EmployeeDto;
    /**
     * 
     * @type {ApiDateTime}
     * @memberof EmployeeFullDto
     */
    'registrationDate'?: ApiDateTime;
    /**
     * Specifies if the user has a personal folder or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'hasPersonalFolder'?: boolean;
    /**
     * Indicates whether the user has enabled two-factor authentication (TFA) using an authentication app.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'tfaAppEnabled'?: boolean | null;
}



