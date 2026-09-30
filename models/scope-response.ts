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
 * One scope from the tenant scope catalogue, as it may be requested by a client.
 */
export interface ScopeResponse {
    /**
     * The scope exactly as it is written in an authorization request, for example files:read or openid.
     */
    'name'?: string;
    /**
     * The area of the portal the scope belongs to, which is what groups the scopes on the consent screen: files, rooms, contacts, profiles or openid.
     */
    'group'?: string;
    /**
     * What the scope allows inside its group: read for read-only access, write for changes, and openid for the identity scope itself.
     */
    'type'?: string;
}

