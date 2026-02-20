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
import type { TfaRequestsDtoType } from './tfa-requests-dto-type';

/**
 * The request parameters for configuring the Two-Factor Authentication (TFA) settings.
 */
export interface TfaRequestsDto {
    'type'?: TfaRequestsDtoType;
    /**
     * The ID of the user for whom the TFA settings are being configured.
     */
    'id'?: string;
    /**
     * The list of IP addresses that bypass TFA verification.
     */
    'trustedIps'?: Array<string> | null;
    /**
     * The list of user IDs for whom TFA is mandatory.
     */
    'mandatoryUsers'?: Array<string> | null;
    /**
     * The list group IDs whose members must use TFA.
     */
    'mandatoryGroups'?: Array<string> | null;
}



