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
import type { EmployeeType } from './employee-type';

/**
 * The parameters for updating the type of the user or guest when reassigning rooms and shared files.
 */
export interface StartUpdateUserTypeDto {
    /**
     * The new user type.
     */
    'type'?: EmployeeType;
    /**
     * The user ID.
     */
    'userId'?: string;
    /**
     * The user ID to reassign.
     */
    'reassignUserId'?: string | null;
}



