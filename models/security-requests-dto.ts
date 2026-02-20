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
 * The request parameters for managing user security and access permissions.
 */
export interface SecurityRequestsDto {
    /**
     * The product ID for which permissions are being set.
     */
    'productId': string;
    /**
     * The ID of the user whose permissions are being configured.
     */
    'userId': string;
    /**
     * Specifies whether the user has administrative privileges.
     */
    'administrator'?: boolean;
}

