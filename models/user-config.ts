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
 * The account the editors attribute the changes of this session to.
 */
export interface UserConfig {
    /**
     * The account the changes are recorded under. Two sessions carrying the same value are taken by the editors for  the same person.
     */
    'id'?: string | null;
    /**
     * The name shown next to the changes and in the list of participants.
     */
    'name'?: string | null;
    /**
     * An absolute address of the avatar shown for this participant.
     */
    'image'?: string | null;
    /**
     * The filling roles this participant holds in the form being filled out. It is set only for a form in a virtual  data room, where the role decides which fields open for them.
     */
    'roles'?: Array<string> | null;
    /**
     * Identifies the paying customer this participant belongs to, on deployments where the editors are licensed per  customer.
     */
    'customerId'?: string | null;
}

