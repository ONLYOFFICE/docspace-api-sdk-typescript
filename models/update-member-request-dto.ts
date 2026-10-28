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

/**
 * The request parameters for updating the user information.
 */
export interface UpdateMemberRequestDto {
    /**
     * The account the change applies to. It is read from this body by `POST api/2.0/people/email`, while  `PUT api/2.0/people/{userId}` takes the account from the route and ignores this field.
     */
    'userId'?: string | null;
    /**
     * Set it to true to give the account the `Terminated` status and end every session it has, and to false to  bring it back. It is applied only when the caller edits somebody else, and omitting it keeps the current  status.
     */
    'disable'?: boolean | null;
    /**
     * The new email address, up to 255 characters. It is read only by `POST api/2.0/people/email`, which either  mails a confirmation letter or, for an administrator acting on somebody else, applies the address at once;  `PUT api/2.0/people/{userId}` ignores it.
     */
    'email'?: string | null;
    /**
     * Set it to true to turn the account into a guest and to false to turn it back into a member. Either direction  takes a seat and can answer 402, it is applied only when the caller edits somebody else, and a request to  make the portal owner, a DocSpace administrator or a module administrator a guest is ignored.
     */
    'isUser'?: boolean | null;
    /**
     * The new first name, up to 255 characters. It is applied only to the caller\'s own profile, is left alone on an  LDAP or SSO account, and a pair the portal does not accept as a name answers 400.
     */
    'firstName'?: string | null;
    /**
     * The new last name, up to 255 characters. It is applied only to the caller\'s own profile, is left alone on an  LDAP or SSO account, and a pair the portal does not accept as a name answers 400.
     */
    'lastName'?: string | null;
    /**
     * The groups the profile should belong to, by group ID, replacing the current ones. It is applied only to the  caller\'s own profile.
     */
    'department'?: Array<string> | null;
    /**
     * The new free-text location shown on the profile. It is applied only to the caller\'s own profile and is left  alone on an LDAP or SSO account.
     */
    'location'?: string | null;
    /**
     * The new free-text note kept with the profile. It is applied only to the caller\'s own profile.
     */
    'comment'?: string | null;
    /**
     * The additional ways to reach the person, replacing the current ones. Each entry is a free-text type such as  `email`, `phone`, `skype` or `telegram` and its value, an entry with an empty value is dropped, and the field  is applied only to the caller\'s own profile.
     */
    'contacts'?: Array<Contact> | null;
    /**
     * The address the portal downloads the new avatar from. It is applied only to the caller\'s own profile, has to  use HTTPS unless the request itself came over HTTP, and passing the address the profile already uses  downloads nothing.
     */
    'files'?: string | null;
    /**
     * Whether the account agrees to receive tips, updates and offers. It is applied only to the caller\'s own  profile, and omitting it on such a request stores false rather than keeping the current value.
     */
    'spam'?: boolean | null;
}

