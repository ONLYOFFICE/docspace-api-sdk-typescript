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



