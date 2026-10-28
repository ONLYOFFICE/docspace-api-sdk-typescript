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
import type { EmployeeFullDto } from './employee-full-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FormFillingStatus } from './form-filling-status';

/**
 * One role of a PDF form, with the state the turn of that role is in.
 */
export interface FormRoleDto {
    /**
     * The name the role was given when the form was laid out, unique within that form. It is the value that names  the role in the calls which change or stop the filling.
     */
    'roleName': string | null;
    /**
     * The colour a client paints the role with, as a hexadecimal RGB value; empty when the role mapping assigned  none.
     */
    'roleColor'?: string | null;
    /**
     * The account the role was assigned to, which is the person expected to fill this part of the form.
     */
    'user'?: EmployeeFullDto;
    /**
     * The turn this role takes: the roles come back ordered by this number, roles sharing a number are filled in  parallel, and a role with a higher number waits until every lower one has been submitted.
     */
    'sequence': number;
    /**
     * Reports whether this role has already handed in its part. The lowest sequence number that still holds an  unsubmitted role is the turn the form as a whole is waiting on.
     */
    'submitted': boolean;
    /**
     * The account that interrupted the filling. It is filled in on the one role the filling was stopped at and stays  empty on every other role, and on all of them while the filling runs normally.
     */
    'stopedBy'?: EmployeeFullDto;
    /**
     * When the role passed through the stages of its turn, keyed by stage: 0 is the moment the form was opened for  it, 1 the moment it was submitted and 2 the moment the filling was stopped at it. The times are given in the  time zone of the portal, and only the stages that have actually happened are present, so an empty object means  the role has not been opened yet.
     */
    'history'?: { [key: string]: string; };
    /**
     * Where the role stands in the queue: roles of earlier turns are reported as complete, roles of later turns as a  draft, and the role whose turn it is as either yours to fill or in progress, depending on whether that person  has already opened the form. The role the filling was stopped at is reported as stopped whatever its turn.
     */
    'roleStatus'?: FormFillingStatus;
}



