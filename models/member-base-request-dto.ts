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


/**
 * The request parameters for the user generic information.
 * @export
 * @interface MemberBaseRequestDto
 */
export interface MemberBaseRequestDto {
    /**
     * The user password.
     * @type {string}
     * @memberof MemberBaseRequestDto
     */
    'password'?: string | null;
    /**
     * The user password hash.
     * @type {string}
     * @memberof MemberBaseRequestDto
     */
    'passwordHash'?: string | null;
    /**
     * The user email address.
     * @type {string}
     * @memberof MemberBaseRequestDto
     */
    'email'?: string | null;
    /**
     * The user encrypted email address.
     * @type {string}
     * @memberof MemberBaseRequestDto
     */
    'encEmail'?: string | null;
}

