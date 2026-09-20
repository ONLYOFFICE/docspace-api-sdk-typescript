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
import type { OAuth20Token } from './oauth20-token';

/**
 * The credentials of a third-party storage account. The portal takes them when an account is connected and does not  give them back afterwards.
 */
export interface AuthData {
    /**
     * The account name at the storage service.
     */
    'login'?: string | null;
    /**
     * The password of the account at the storage service.
     */
    'password'?: string | null;
    /**
     * The token of the account, kept as the raw JSON document the storage service issued it in.
     */
    'rawToken'?: string | null;
    /**
     * The address of the storage server the account lives on.
     */
    'url'?: string | null;
    /**
     * The storage service the credentials belong to, as the provider key the account was connected with.
     */
    'provider'?: string | null;
    /**
     * The same token as in `rawToken`, parsed into its OAuth 2.0 fields.
     */
    'token'?: OAuth20Token;
}

