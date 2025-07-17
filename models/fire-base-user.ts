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
import type { DbTenant } from './db-tenant';

/**
 * The Firebase user parameters.
 * @export
 * @interface FireBaseUser
 */
export interface FireBaseUser {
    /**
     * The Firebase user ID.
     * @type {number}
     * @memberof FireBaseUser
     */
    'id'?: number;
    /**
     * The user ID.
     * @type {string}
     * @memberof FireBaseUser
     */
    'userId'?: string;
    /**
     * The tenant ID.
     * @type {number}
     * @memberof FireBaseUser
     */
    'tenantId'?: number;
    /**
     * The Firebase device token.
     * @type {string}
     * @memberof FireBaseUser
     */
    'firebaseDeviceToken'?: string | null;
    /**
     * The Firebase application.
     * @type {string}
     * @memberof FireBaseUser
     */
    'application'?: string | null;
    /**
     * Specifies if the user is subscribed to the push notifications or not.
     * @type {boolean}
     * @memberof FireBaseUser
     */
    'isSubscribed'?: boolean | null;
    /**
     * 
     * @type {DbTenant}
     * @memberof FireBaseUser
     */
    'tenant'?: DbTenant;
}

