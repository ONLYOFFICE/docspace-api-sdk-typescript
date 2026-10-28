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
 * The vocabularies the audit and login-history filters accept, one array of names per dimension of an event.
 */
export interface AuditTrailTypesDto {
    /**
     * Every action name the build can record, spelled as the `action` filter of  `GET api/2.0/security/audit/events/filter` and `GET api/2.0/security/audit/login/filter` expects it. It is  the whole vocabulary, not the actions this portal has recorded, and only a handful of the names are the  sign-in actions the login filter accepts.
     */
    'actions'?: Array<string> | null;
    /**
     * The kinds of change an action can stand for, spelled as the `actionType` filter of  `GET api/2.0/security/audit/events/filter` expects it.
     */
    'actionTypes'?: Array<string> | null;
    /**
     * The products an action can belong to, spelled as the `productType` filter of  `GET api/2.0/security/audit/mappers` expects it. The audit trail itself cannot be filtered by product.
     */
    'productTypes'?: Array<string> | null;
    /**
     * The locations inside those products, spelled as the `moduleType` filter of  `GET api/2.0/security/audit/events/filter` and `GET api/2.0/security/audit/mappers` expects it.
     */
    'moduleTypes'?: Array<string> | null;
    /**
     * The kinds of object an action can be applied to, spelled as the `entryType` filter of  `GET api/2.0/security/audit/events/filter` expects it.
     */
    'entryTypes'?: Array<string> | null;
}

