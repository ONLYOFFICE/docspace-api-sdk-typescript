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
 * One role of a form and the account that fills it.
 */
export interface FormRoleRequest {
    /**
     * The ID of the room the form is in. It is stored with the role as sent, so pass the room the form lives in.
     */
    'roomId'?: number;
    /**
     * The name of a role the form defines, such as the one the form author gave a group of fields.
     */
    'roleName'?: string | null;
    /**
     * The color the editor marks the fields of this role with, as a hex code.
     */
    'roleColor'?: string | null;
    /**
     * The account that fills this role. It is notified once filling starts, unless it is the caller.
     */
    'userId'?: string;
    /**
     * Accepted for compatibility and ignored: the position of the role in the list sets the filling order.
     */
    'sequence'?: number;
    /**
     * Whether this role counts as already submitted. It is stored as sent; send false when filling starts.
     */
    'submitted'?: boolean;
    /**
     * Accepted for compatibility and ignored: the portal records when the role is opened.
     */
    'openedAt'?: string;
    /**
     * Accepted for compatibility and ignored: the portal records when the role is submitted.
     */
    'submissionDate'?: string;
}

