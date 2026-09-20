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
 * One two-factor authentication method the portal offers, with the portal-wide state of that method.
 */
export interface TfaSettingsDto {
    /**
     * Which method this entry describes: `sms` for a code sent by text message, `app` for a code from an  authenticator application. It is the value `PUT api/2.0/settings/tfaapp` takes as its `type`, and no other  value ever appears here.
     */
    'id': string | null;
    /**
     * The label for the method in the portal language, meant for a button or a radio option. It is not stable  enough to branch on - match `id` for that.
     */
    'title': string | null;
    /**
     * Whether this method is the portal\'s current policy. At most one entry can have it set, and none has it  while the portal challenges nobody. It says nothing about the caller\'s own account, which may be exempt  through `trustedIps` or forced through `mandatoryUsers`.
     */
    'enabled': boolean;
    /**
     * Whether the method could be switched on at all. For `sms` it is `false` until the installation has a  working SMS provider, so a method can be offered here and still be impossible to enable; for `app` it is  always `true`.
     */
    'available': boolean;
    /**
     * The addresses that skip the challenge, each either a single address, a `from-to` pair or a CIDR range. It  is empty when no address is exempt, which means every account is challenged.
     */
    'trustedIps'?: Array<string> | null;
    /**
     * The accounts that are challenged even from a trusted address, by user ID. Empty means the exemption in  `trustedIps` holds for everyone.
     */
    'mandatoryUsers'?: Array<string> | null;
    /**
     * The groups whose members are challenged even from a trusted address, by group ID, with the same reading of  an empty list as `mandatoryUsers`.
     */
    'mandatoryGroups'?: Array<string> | null;
}

