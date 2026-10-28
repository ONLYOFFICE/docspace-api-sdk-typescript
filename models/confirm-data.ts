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
 * The confirmation link a sign-in is authorised with, in place of a password.
 */
export interface ConfirmData {
    /**
     * The address the confirmation link was issued for. It has to be the same address the key was signed with, and  a value that is not an email address fails the request with 400.
     */
    'email'?: string | null;
    /**
     * Whether the link is being followed for the first time, taken from the `first` parameter of the confirmation  URL. It is part of what the key was signed over, so passing a different value invalidates the key rather than  changing behaviour.
     */
    'first'?: boolean | null;
    /**
     * The `key` parameter of the confirmation URL, copied verbatim. It is bound to the address and to the moment it  was issued, so it stops being accepted once the portal email key lifetime has passed.
     */
    'key'?: string | null;
}

