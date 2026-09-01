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
     * The user\'s first name.
     */
    'firstName'?: string | null;
    /**
     * The user\'s last name.
     */
    'lastName'?: string | null;
    /**
     * The user username.
     */
    'userName'?: string | null;
    /**
     * The user birthday.
     */
    'birthDate'?: string | null;
    /**
     * The user sex (male or female).
     */
    'sex'?: boolean | null;
    /**
     * The user status.
     */
    'status'?: EmployeeStatus;
    /**
     * The user activation status.
     */
    'activationStatus'?: EmployeeActivationStatus;
    /**
     * The date and time when the user account was terminated.
     */
    'terminatedDate'?: string | null;
    /**
     * The user title.
     */
    'title'?: string | null;
    /**
     * The user registration date.
     */
    'workFromDate'?: string | null;
    /**
     * The user email address.
     */
    'email'?: string | null;
    /**
     * The list of user contacts in the string format.
     */
    'contacts'?: string | null;
    /**
     * The list of user contacts.
     */
    'contactsList'?: Array<string> | null;
    /**
     * The user location.
     */
    'location'?: string | null;
    /**
     * The user notes.
     */
    'notes'?: string | null;
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
    'cultureName'?: string | null;
    /**
     * The user mobile phone.
     */
    'mobilePhone'?: string | null;
    /**
     * The user mobile phone activation status.
     */
    'mobilePhoneActivationStatus'?: MobilePhoneActivationStatus;
    /**
     * The LDAP user identifier.
     */
    'sid'?: string | null;
    /**
     * The LDAP user quota attribute.
     */
    'ldapQouta'?: number;
    /**
     * The SSO SAML user identifier.
     */
    'ssoNameId'?: string | null;
    /**
     * The SSO SAML user session identifier.
     */
    'ssoSessionId'?: string | null;
    /**
     * The date and time when the user account was created.
     */
    'createDate'?: string;
    /**
     * The ID of the user who created the current user account.
     */
    'createdBy'?: string | null;
    /**
     * Specifies if tips, updates and offers are allowed to be sent to the user or not.
     */
    'spam'?: boolean | null;
    /**
     * Indicates whether the activation status of the employee or recipient is unchecked or inactive.  Depending on the context, this property evaluates the activation or eligibility status accordingly.
     */
    'checkActivation'?: boolean;
}



