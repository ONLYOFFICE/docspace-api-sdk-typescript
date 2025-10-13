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
import type { EmployeeFullDto } from './employee-full-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';

/**
 * The security request parameters of the group member.
 * @export
 * @interface GroupMemberSecurityRequestDto
 */
export interface GroupMemberSecurityRequestDto {
    /**
     * 
     * @type {EmployeeFullDto}
     * @memberof GroupMemberSecurityRequestDto
     */
    'user': EmployeeFullDto;
    /**
     * 
     * @type {FileShare}
     * @memberof GroupMemberSecurityRequestDto
     */
    'groupAccess': FileShare;
    /**
     * 
     * @type {FileShare}
     * @memberof GroupMemberSecurityRequestDto
     */
    'userAccess'?: FileShare;
    /**
     * Specifies if the group access rights are overridden or not.
     * @type {boolean}
     * @memberof GroupMemberSecurityRequestDto
     */
    'overridden': boolean;
    /**
     * Specifies if the group member can edit the group access rights or not.
     * @type {boolean}
     * @memberof GroupMemberSecurityRequestDto
     */
    'canEditAccess': boolean;
    /**
     * Specifies if the group member is a group owner or not.
     * @type {boolean}
     * @memberof GroupMemberSecurityRequestDto
     */
    'owner': boolean;
}



