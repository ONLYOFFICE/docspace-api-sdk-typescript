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
 * @type EmployeeFullDto
 * The full list of user parameters.
 * @export
 */
export type EmployeeFullDto = EmployeeDto &  {
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
     * The user status.
     * @type {EmployeeStatus}
     * @memberof EmployeeFullDto
     */
    'status'?: EmployeeStatus;
    /**
     * The user activation status.
     * @type {EmployeeActivationStatus}
     * @memberof EmployeeFullDto
     */
    'activationStatus'?: EmployeeActivationStatus;
    /**
     * The date when the user account was terminated.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'terminated'?: string | null;
    /**
     * The user department.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'department'?: string | null;
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
     * The mobile phone activation status.
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
     * The user theme settings.
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
     * The auth cookie lifetime in seconds.
     * @type {number}
     * @memberof EmployeeFullDto
     */
    'authCookieLifetime'?: number | null;
    /**
     * The user who created the current user.
     * @type {EmployeeDto}
     * @memberof EmployeeFullDto
     */
    'createdBy'?: EmployeeDto;
    /**
     * The user registration date.
     * @type {string}
     * @memberof EmployeeFullDto
     */
    'registrationDate'?: string | null;
    /**
     * Specifies if the user has a personal folder or not.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'hasPersonalFolder'?: boolean | null;
    /**
     * Indicates whether the user has enabled two-factor authentication (TFA) using an authentication app.
     * @type {boolean}
     * @memberof EmployeeFullDto
     */
    'tfaAppEnabled'?: boolean | null;
};


