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
 * What the initial setup wizard needs to finish a new portal: the owner credentials and the portal locale.
 */
export interface WizardRequestsDto {
    /**
     * The address the portal owner account is created with, which is also the address every administrative letter  goes to afterwards. It has to be a well-formed email address; a malformed one leaves the wizard unfinished.
     */
    'email': string | null;
    /**
     * The owner password, already hashed in the client rather than sent in the clear. Hash it with the `salt`,  iteration count and hash size that `GET api/2.0/settings?withpassword=true` publishes, so the portal can  recognise it later; an empty value leaves the wizard unfinished.
     */
    'passwordHash': string | null;
    /**
     * The portal interface language, as a culture name such as `en-US`. It has to be one of the cultures enabled  for the installation, and an unknown one leaves the shipped default in place instead of failing the wizard.
     */
    'lng'?: string | null;
    /**
     * The time zone every portal date is rendered in, as an IANA identifier such as `Europe/Riga`. A value that  matches nothing falls back to UTC rather than failing the wizard.
     */
    'timeZone'?: string | null;
    /**
     * The identifier of the Amazon Machine Image the portal was launched from, for an installation started from an  AWS image. It is recorded for the installation record only and changes nothing about the portal; leave it out  anywhere else.
     */
    'amiId'?: string | null;
    /**
     * Whether the owner agrees to receive product news at the address in `email`. It is a mailing consent and has  no bearing on the portal notifications, which are subscribed separately.
     */
    'subscribeFromSite'?: boolean;
}

