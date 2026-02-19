/* tslint:disable */
/* eslint-disable */
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
 */
export interface UserInfo {
    /**
     * The user ID.
     */
    'id'?: string;
    /**
     * The user first name.
     */
    'firstName'?: string;
    /**
     * The user last name.
     */
    'lastName'?: string;
    /**
     * The user username.
     */
    'userName'?: string;
    /**
     * The user birthday.
     */
    'birthDate'?: string;
    /**
     * The user sex (male or female).
     */
    'sex'?: boolean;
    'status'?: EmployeeStatus;
    'activationStatus'?: EmployeeActivationStatus;
    /**
     * The date and time when the user account was terminated.
     */
    'terminatedDate'?: string;
    /**
     * The user title.
     */
    'title'?: string;
    /**
     * The user registration date.
     */
    'workFromDate'?: string;
    /**
     * The user email address.
     */
    'email'?: string;
    /**
     * The list of user contacts in the string format.
     */
    'contacts'?: string;
    /**
     * The list of user contacts.
     */
    'contactsList'?: Array<string>;
    /**
     * The user location.
     */
    'location'?: string;
    /**
     * The user notes.
     */
    'notes'?: string;
    /**
     * Specifies if the user account was removed or not.
     */
    'removed'?: boolean;
    /**
     * The date and time when the user account was last modified.
     */
    'lastModified'?: string;
    /**
     * The tenant ID.
     */
    'tenantId'?: number;
    /**
     * Specifies if the user is active or not.
     */
    'isActive'?: boolean;
    /**
     * The user culture code.
     */
    'cultureName'?: string;
    /**
     * The user mobile phone.
     */
    'mobilePhone'?: string;
    'mobilePhoneActivationStatus'?: MobilePhoneActivationStatus;
    /**
     * The LDAP user identificator.
     */
    'sid'?: string;
    /**
     * The LDAP user quota attribute.
     */
    'ldapQouta'?: number;
    /**
     * The SSO SAML user identificator.
     */
    'ssoNameId'?: string;
    /**
     * The SSO SAML user session identificator.
     */
    'ssoSessionId'?: string;
    /**
     * The date and time when the user account was created.
     */
    'createDate'?: string;
    /**
     * The ID of the user who created the current user account.
     */
    'createdBy'?: string;
    /**
     * Specifies if tips, updates and offers are allowed to be sent to the user or not.
     */
    'spam'?: boolean;
    'checkActivation'?: boolean;
}



