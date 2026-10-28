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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';

/**
 * The response data for the API key operations.
 */
export interface ApiKeyResponseDto {
    /**
     * The ID of the key. This is the value to pass to `PUT api/2.0/keys/{keyId}` and  `DELETE api/2.0/keys/{keyId}`.
     */
    'id': string;
    /**
     * The label given to the key when it was created or last updated.
     */
    'name': string | null;
    /**
     * The secret to send in the `Authorization` header as `Bearer sk-...`. It is filled in only by the answer of  `POST api/2.0/keys` and cannot be read again afterwards, so it has to be stored at that moment.
     */
    'key': string | null;
    /**
     * The last four characters of the secret. It is the only part of the secret that later reads expose, and it is  meant for telling keys apart in a list.
     */
    'keyPostfix'?: string | null;
    /**
     * The scopes the key may use, as accepted by `GET api/2.0/keys/permissions`. An empty list means the key has no  scope restrictions.
     */
    'permissions': Array<string> | null;
    /**
     * The UTC moment the key was last used to authenticate a request. It is empty for a key that has never been  used.
     */
    'lastUsed'?: ApiDateTime;
    /**
     * The UTC moment the key was created.
     */
    'createOn'?: ApiDateTime;
    /**
     * The portal member who created the key, and whose access the key acts with.
     */
    'createBy'?: EmployeeDto;
    /**
     * The UTC moment the key stops working. It is empty for a key created without `expiresInDays`, which never  expires.
     */
    'expiresAt'?: ApiDateTime;
    /**
     * Whether the key may authenticate requests. A key deactivated through `PUT api/2.0/keys/{keyId}` stays in the  list with this field set to false.
     */
    'isActive': boolean;
}

