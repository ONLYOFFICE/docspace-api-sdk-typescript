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


export interface ExchangeToken200Response {
    /**
     * The token to send as a Bearer credential when calling the portal on the user behalf.
     */
    'access_token'?: string;
    /**
     * How the access token is to be presented. It is always Bearer.
     */
    'token_type'?: string;
    /**
     * How many seconds the access token stays valid, counted from the moment it was issued.
     */
    'expires_in'?: number;
    /**
     * The token that buys a new access token once the current one expires. It is present only when the client is registered for the refresh token grant.
     */
    'refresh_token'?: string;
}

