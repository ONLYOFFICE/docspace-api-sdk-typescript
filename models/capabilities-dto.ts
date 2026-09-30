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
 * The sign-in methods this portal offers, as a login client needs them before anyone has signed in.
 */
export interface CapabilitiesDto {
    /**
     * Whether members may sign in with their directory credentials. It is `false` both when LDAP sign-in is  switched off and when the pricing plan or the installation does not include it, and also when the settings  could not be read at all - a `false` here means the method is not offered, never that it is unknown.
     */
    'ldapEnabled': boolean;
    /**
     * The directory domain members authenticate against, to be shown next to the login field. It is empty  whenever `ldapEnabled` is `false`, and also while the portal has not completed a directory synchronisation.
     */
    'ldapDomain'?: string | null;
    /**
     * The keys of the external identity providers to offer, ordered for the country the caller\'s IP address  resolves to and reduced to those this installation has credentials for. Pass one of them as `provider` to  `POST api/2.0/authentication`. An empty list means external sign-in is not on offer.
     */
    'providers': Array<string> | null;
    /**
     * The caption for the single sign-on button in the portal language, empty whenever `ssoUrl` is.
     */
    'ssoLabel': string | null;
    /**
     * Whether external identity providers may be used on this portal at all. While it is `false`, `providers` is  empty because the list is not even assembled.
     */
    'oauthEnabled': boolean;
    /**
     * The address to send the browser to for SAML single sign-on. It is empty when single sign-on is not on  offer, which is the one thing to test - there is no separate flag for it.
     */
    'ssoUrl': string | null;
    /**
     * Whether the installation exposes its built-in identity server, which is what the portal\'s own OAuth  applications authenticate against. It concerns third-party applications signing in to the portal, not  portal members signing in to an external provider - that is `providers`.
     */
    'identityServerEnabled': boolean;
}

