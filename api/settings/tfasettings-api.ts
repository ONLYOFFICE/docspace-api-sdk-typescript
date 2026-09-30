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
import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TfaAppCodeArrayWrapper } from '../../models';
// @ts-ignore
import type { TfaConfirmDataWrapper } from '../../models';
// @ts-ignore
import type { TfaRequestsDto } from '../../models';
// @ts-ignore
import type { TfaSettingsArrayWrapper } from '../../models';
// @ts-ignore
import type { TfaSetupCodeWrapper } from '../../models';
// @ts-ignore
import type { TfaValidateRequestsDto } from '../../models';
/**
 * TFASettingsApi - axios parameter creator
 * @export
 */
export const TFASettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the one-time backup codes of the current user\'s authenticator-application credential, each with the  flag that says whether it has been spent. A backup code is accepted in place of a code from the application  when signing in, and every code works exactly once, so this list is what a member falls back on after losing  access to their authenticator. Any authenticated member may call it, always for their own account: there is no  way to read someone else\'s codes. The authenticator method has to be enabled on the portal and an application  has to be linked to the account already, otherwise the call answers 405; link one through  `GET api/2.0/settings/tfaapp/confirm` and `POST api/2.0/settings/tfaapp/validate`. Accounts flagged as  outsiders are refused. This is a read-only, idempotent call: the codes are generated once, when the  application is first linked, and the whole set is replaced by `PUT api/2.0/settings/tfaappnewcodes`. The  default configuration issues five codes of six characters, and a portal may be configured for a different  number and length.
         * @summary Get the TFA backup codes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-app-codes/
         */
        getTfaAppCodes: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tfaappcodes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the confirmation link the current user has to follow to pass the portal\'s two-factor authentication  step, together with the confirmation cookie that link depends on. Any authenticated member may call it, always  for their own account, and TFA has to be required for that account by the portal policy already, otherwise the  response body is empty. Which link comes back depends on the method. With the SMS method it is a phone  activation link while the account has no activated mobile number and a phone authorization link afterwards,  and only `url` is filled in. With the authenticator-application method the response also carries `cookieName`  and `cookieValue`, and the call mutates state by issuing a fresh confirmation key and setting that cookie; the  link then points at activation while no application is linked, or after the previous link was reset, and at  re-verification once one is linked. Hand the code obtained through that flow to  `POST api/2.0/settings/tfaapp/validate`. The portal-wide policy behind all of this is read with  `GET api/2.0/settings/tfaapp`.
         * @summary Get TFA confirmation data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaConfirmData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-confirm-data/
         */
        getTfaConfirmData: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tfaapp/confirm`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the two-factor authentication methods this portal offers, with the state of each one. The list carries  at most two entries: `sms`, present only when the SMS method is enabled in the portal\'s configuration, and  `app`, present only when the authenticator-application method is enabled there, so an empty list means neither  method is offered here. Any authenticated member may call it, and what it returns is the portal-wide policy,  not the caller\'s own linked credential. This is a read-only, idempotent call. For every entry `enabled` says  whether that method is the current policy, `available` says whether it can actually be switched on (for `sms`  that also requires a configured SMS provider), `trustedIps` lists the addresses and ranges exempt from the  challenge, and `mandatoryUsers` and `mandatoryGroups` list the accounts that have to pass it even from a  trusted address. Change the policy with `PUT api/2.0/settings/tfaapp`, and read the caller\'s own backup codes  with `GET api/2.0/settings/tfaappcodes`.
         * @summary Get the TFA settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-settings/
         */
        getTfaSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tfaapp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Issues the secret the current user has to enter in an authenticator application before the  authenticator-application method can be used, both as a scannable QR-code image and as a key for manual entry.  The call is reachable only with a confirmation token carrying the `TfaActivation` role, obtained from  `GET api/2.0/settings/tfaapp/confirm` or from the login flow; an ordinary bearer token is refused. The  authenticator method has to be enabled on the portal and be its current policy, and the account must have no  application linked yet: for an already-linked account the call answers 405, so reset the credential first with  `PUT api/2.0/settings/tfaappnewapp`. Accounts flagged as outsiders are refused. Repeating the call is safe and  hands back the same secret for the account, so the QR code and the manual key always describe one and the same  credential. `qrCodeSetupImageUrl` is a base64 `data:` URL of a PNG image, and `account` is the label the  application will show. Finish the setup by sending a code from the application to  `POST api/2.0/settings/tfaapp/validate`.
         * @summary Generate the TFA setup code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for tfaAppGenerateSetupCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-app-generate-setup-code/
         */
        tfaAppGenerateSetupCode: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tfaapp/setup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Verifies a two-factor authentication code for the account named in the confirmation link being used, and  completes that account\'s pending TFA step. The call is reachable only with a confirmation token carrying the  `TfaActivation` or `TfaAuth` role, issued by `GET api/2.0/settings/tfaapp/confirm` or by the login flow; an  ordinary bearer token is refused. Both a code from the authenticator application and one of the account\'s  unused backup codes are accepted, and a backup code is spent by the check. The call mutates state: it signs  the account in, clears the confirmation cookie so the link cannot be replayed, and on the very first  activation it generates the backup codes later returned by `GET api/2.0/settings/tfaappcodes`. Pass  `session=true` to keep that sign-in for the browser session only instead of a persistent one. It answers  `true` only for that first activation and `false` when an application was already linked. A wrong code is  rejected as an invalid request, and further attempts are refused once the portal\'s login attempt limit is  reached. The call also works while the portal\'s payment is overdue.
         * @summary Validate the TFA code
         * @param {TfaValidateRequestsDto} [tfaValidateRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for tfaValidateAuthCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-validate-auth-code/
         */
        tfaValidateAuthCode: async (tfaValidateRequestsDto?: TfaValidateRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tfaapp/validate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tfaValidateRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Detaches the authenticator application from an account, so that the account has to link a new one before it  can sign in again. `id` has to name an existing account: an empty or unknown value is refused. Passing the  caller\'s own ID resets their own credential and returns the activation link they should follow next; passing  another member\'s ID is allowed for the portal owner only, and every other caller, a DocSpace administrator  included, is refused. The account has to have an application linked and the authenticator method has to be  enabled on the portal, otherwise the call answers 405. The call is destructive: the account\'s backup codes are  dropped together with the credential and all of its sessions are signed out. For another member the portal  also emails them that their TFA was reset, and the answer is then an empty string. The portal-wide policy is  not touched, so TFA stays required and the account sets up an application again through  `GET api/2.0/settings/tfaapp/confirm`; lift the requirement for everyone with `PUT api/2.0/settings/tfaapp`.
         * @summary Unlink the TFA application
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkTfaApp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-tfa-app/
         */
        unlinkTfaApp: async (tfaRequestsDto?: TfaRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tfaappnewapp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tfaRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the current user\'s one-time backup codes with a freshly generated set and returns it. Use it once the  previous codes have been spent or may have leaked: the whole old set stops being accepted the moment this call  succeeds, so store the new codes before leaving the response. Any authenticated member may call it, always for  their own account. The authenticator method has to be enabled on the portal and an application has to be  linked to the account already, otherwise the call answers 405, and accounts flagged as outsiders are refused.  The call mutates state and is not idempotent: every invocation issues another set and discards the one before  it, so a retry after a timeout returns codes different from those the first attempt generated. The codes come  back unused, five of them of six characters with the default configuration, and a portal may be configured for  a different number and length. Read the current set without changing it through  `GET api/2.0/settings/tfaappcodes`. The authenticator secret itself is untouched, so the linked application  keeps working.
         * @summary Regenerate the TFA backup codes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-app-codes/
         */
        updateTfaAppCodes: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tfaappnewcodes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the portal-wide two-factor authentication policy: `type` `1` switches on the SMS method, `2` switches on  the authenticator application, and `0` turns TFA off, as does any unknown value. The two methods are mutually  exclusive, so switching one on switches the other off. The caller has to be the portal owner or a DocSpace  administrator; other members are refused, and a request that names the owner\'s account in `id` or in  `mandatoryUsers` is refused unless `id` carries the caller\'s own account. `trustedIps` takes single addresses,  inclusive ranges and CIDR blocks, and an unparseable entry is rejected as an invalid request; accounts listed  in `mandatoryUsers` or `mandatoryGroups` still have to pass the challenge even from a trusted address.  Switching a method on is disruptive: it resets the portal\'s authentication cookies, so every session on the  portal, the caller\'s own included, has to sign in again. The answer is `true` when a method was switched on  and `false` when TFA was turned off. Use `PUT api/2.0/settings/tfaappwithlink` instead to receive the caller\'s  own confirmation link in the same step.
         * @summary Update the TFA settings
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings/
         */
        updateTfaSettings: async (tfaRequestsDto?: TfaRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tfaapp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tfaRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Applies the same portal-wide two-factor authentication change as `PUT api/2.0/settings/tfaapp` and  additionally returns the confirmation link the caller needs to pass the new challenge, so an administrator who  has just switched TFA on can go straight to setting it up for themselves. The caller has to be the portal  owner or a DocSpace administrator, and a request that names the owner\'s account in `id` or in `mandatoryUsers`  is refused unless `id` carries the caller\'s own account. Every effect of the plain call applies here too: the  methods are mutually exclusive, `type` `0` turns TFA off, `trustedIps` and the two mandatory lists behave the  same way, and switching a method on resets the portal\'s authentication cookies, so all sessions have to sign  in again. The answer is an empty string whenever there is no link to hand out: when the request turned TFA  off, and when the caller is exempt from the challenge, most often because their own address is in the  `trustedIps` list of that very request. The cookie the link depends on is not returned here, read it with  `GET api/2.0/settings/tfaapp/confirm`.
         * @summary Update TFA settings with a link
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaSettingsLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings-link/
         */
        updateTfaSettingsLink: async (tfaRequestsDto?: TfaRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/tfaappwithlink`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(tfaRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TFASettingsApi - functional programming interface
 * @export
 */
export const TFASettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TFASettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the one-time backup codes of the current user\'s authenticator-application credential, each with the  flag that says whether it has been spent. A backup code is accepted in place of a code from the application  when signing in, and every code works exactly once, so this list is what a member falls back on after losing  access to their authenticator. Any authenticated member may call it, always for their own account: there is no  way to read someone else\'s codes. The authenticator method has to be enabled on the portal and an application  has to be linked to the account already, otherwise the call answers 405; link one through  `GET api/2.0/settings/tfaapp/confirm` and `POST api/2.0/settings/tfaapp/validate`. Accounts flagged as  outsiders are refused. This is a read-only, idempotent call: the codes are generated once, when the  application is first linked, and the whole set is replaced by `PUT api/2.0/settings/tfaappnewcodes`. The  default configuration issues five codes of six characters, and a portal may be configured for a different  number and length.
         * @summary Get the TFA backup codes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-app-codes/
         */
        async getTfaAppCodes(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TfaAppCodeArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTfaAppCodes(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TFASettingsApi.getTfaAppCodes']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the confirmation link the current user has to follow to pass the portal\'s two-factor authentication  step, together with the confirmation cookie that link depends on. Any authenticated member may call it, always  for their own account, and TFA has to be required for that account by the portal policy already, otherwise the  response body is empty. Which link comes back depends on the method. With the SMS method it is a phone  activation link while the account has no activated mobile number and a phone authorization link afterwards,  and only `url` is filled in. With the authenticator-application method the response also carries `cookieName`  and `cookieValue`, and the call mutates state by issuing a fresh confirmation key and setting that cookie; the  link then points at activation while no application is linked, or after the previous link was reset, and at  re-verification once one is linked. Hand the code obtained through that flow to  `POST api/2.0/settings/tfaapp/validate`. The portal-wide policy behind all of this is read with  `GET api/2.0/settings/tfaapp`.
         * @summary Get TFA confirmation data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaConfirmData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-confirm-data/
         */
        async getTfaConfirmData(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TfaConfirmDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTfaConfirmData(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TFASettingsApi.getTfaConfirmData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the two-factor authentication methods this portal offers, with the state of each one. The list carries  at most two entries: `sms`, present only when the SMS method is enabled in the portal\'s configuration, and  `app`, present only when the authenticator-application method is enabled there, so an empty list means neither  method is offered here. Any authenticated member may call it, and what it returns is the portal-wide policy,  not the caller\'s own linked credential. This is a read-only, idempotent call. For every entry `enabled` says  whether that method is the current policy, `available` says whether it can actually be switched on (for `sms`  that also requires a configured SMS provider), `trustedIps` lists the addresses and ranges exempt from the  challenge, and `mandatoryUsers` and `mandatoryGroups` list the accounts that have to pass it even from a  trusted address. Change the policy with `PUT api/2.0/settings/tfaapp`, and read the caller\'s own backup codes  with `GET api/2.0/settings/tfaappcodes`.
         * @summary Get the TFA settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-settings/
         */
        async getTfaSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TfaSettingsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTfaSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TFASettingsApi.getTfaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Issues the secret the current user has to enter in an authenticator application before the  authenticator-application method can be used, both as a scannable QR-code image and as a key for manual entry.  The call is reachable only with a confirmation token carrying the `TfaActivation` role, obtained from  `GET api/2.0/settings/tfaapp/confirm` or from the login flow; an ordinary bearer token is refused. The  authenticator method has to be enabled on the portal and be its current policy, and the account must have no  application linked yet: for an already-linked account the call answers 405, so reset the credential first with  `PUT api/2.0/settings/tfaappnewapp`. Accounts flagged as outsiders are refused. Repeating the call is safe and  hands back the same secret for the account, so the QR code and the manual key always describe one and the same  credential. `qrCodeSetupImageUrl` is a base64 `data:` URL of a PNG image, and `account` is the label the  application will show. Finish the setup by sending a code from the application to  `POST api/2.0/settings/tfaapp/validate`.
         * @summary Generate the TFA setup code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for tfaAppGenerateSetupCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-app-generate-setup-code/
         */
        async tfaAppGenerateSetupCode(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TfaSetupCodeWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tfaAppGenerateSetupCode(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TFASettingsApi.tfaAppGenerateSetupCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Verifies a two-factor authentication code for the account named in the confirmation link being used, and  completes that account\'s pending TFA step. The call is reachable only with a confirmation token carrying the  `TfaActivation` or `TfaAuth` role, issued by `GET api/2.0/settings/tfaapp/confirm` or by the login flow; an  ordinary bearer token is refused. Both a code from the authenticator application and one of the account\'s  unused backup codes are accepted, and a backup code is spent by the check. The call mutates state: it signs  the account in, clears the confirmation cookie so the link cannot be replayed, and on the very first  activation it generates the backup codes later returned by `GET api/2.0/settings/tfaappcodes`. Pass  `session=true` to keep that sign-in for the browser session only instead of a persistent one. It answers  `true` only for that first activation and `false` when an application was already linked. A wrong code is  rejected as an invalid request, and further attempts are refused once the portal\'s login attempt limit is  reached. The call also works while the portal\'s payment is overdue.
         * @summary Validate the TFA code
         * @param {TfaValidateRequestsDto} [tfaValidateRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for tfaValidateAuthCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-validate-auth-code/
         */
        async tfaValidateAuthCode(tfaValidateRequestsDto?: TfaValidateRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tfaValidateAuthCode(tfaValidateRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TFASettingsApi.tfaValidateAuthCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Detaches the authenticator application from an account, so that the account has to link a new one before it  can sign in again. `id` has to name an existing account: an empty or unknown value is refused. Passing the  caller\'s own ID resets their own credential and returns the activation link they should follow next; passing  another member\'s ID is allowed for the portal owner only, and every other caller, a DocSpace administrator  included, is refused. The account has to have an application linked and the authenticator method has to be  enabled on the portal, otherwise the call answers 405. The call is destructive: the account\'s backup codes are  dropped together with the credential and all of its sessions are signed out. For another member the portal  also emails them that their TFA was reset, and the answer is then an empty string. The portal-wide policy is  not touched, so TFA stays required and the account sets up an application again through  `GET api/2.0/settings/tfaapp/confirm`; lift the requirement for everyone with `PUT api/2.0/settings/tfaapp`.
         * @summary Unlink the TFA application
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkTfaApp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-tfa-app/
         */
        async unlinkTfaApp(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkTfaApp(tfaRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TFASettingsApi.unlinkTfaApp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the current user\'s one-time backup codes with a freshly generated set and returns it. Use it once the  previous codes have been spent or may have leaked: the whole old set stops being accepted the moment this call  succeeds, so store the new codes before leaving the response. Any authenticated member may call it, always for  their own account. The authenticator method has to be enabled on the portal and an application has to be  linked to the account already, otherwise the call answers 405, and accounts flagged as outsiders are refused.  The call mutates state and is not idempotent: every invocation issues another set and discards the one before  it, so a retry after a timeout returns codes different from those the first attempt generated. The codes come  back unused, five of them of six characters with the default configuration, and a portal may be configured for  a different number and length. Read the current set without changing it through  `GET api/2.0/settings/tfaappcodes`. The authenticator secret itself is untouched, so the linked application  keeps working.
         * @summary Regenerate the TFA backup codes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-app-codes/
         */
        async updateTfaAppCodes(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TfaAppCodeArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTfaAppCodes(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TFASettingsApi.updateTfaAppCodes']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the portal-wide two-factor authentication policy: `type` `1` switches on the SMS method, `2` switches on  the authenticator application, and `0` turns TFA off, as does any unknown value. The two methods are mutually  exclusive, so switching one on switches the other off. The caller has to be the portal owner or a DocSpace  administrator; other members are refused, and a request that names the owner\'s account in `id` or in  `mandatoryUsers` is refused unless `id` carries the caller\'s own account. `trustedIps` takes single addresses,  inclusive ranges and CIDR blocks, and an unparseable entry is rejected as an invalid request; accounts listed  in `mandatoryUsers` or `mandatoryGroups` still have to pass the challenge even from a trusted address.  Switching a method on is disruptive: it resets the portal\'s authentication cookies, so every session on the  portal, the caller\'s own included, has to sign in again. The answer is `true` when a method was switched on  and `false` when TFA was turned off. Use `PUT api/2.0/settings/tfaappwithlink` instead to receive the caller\'s  own confirmation link in the same step.
         * @summary Update the TFA settings
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings/
         */
        async updateTfaSettings(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTfaSettings(tfaRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TFASettingsApi.updateTfaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Applies the same portal-wide two-factor authentication change as `PUT api/2.0/settings/tfaapp` and  additionally returns the confirmation link the caller needs to pass the new challenge, so an administrator who  has just switched TFA on can go straight to setting it up for themselves. The caller has to be the portal  owner or a DocSpace administrator, and a request that names the owner\'s account in `id` or in `mandatoryUsers`  is refused unless `id` carries the caller\'s own account. Every effect of the plain call applies here too: the  methods are mutually exclusive, `type` `0` turns TFA off, `trustedIps` and the two mandatory lists behave the  same way, and switching a method on resets the portal\'s authentication cookies, so all sessions have to sign  in again. The answer is an empty string whenever there is no link to hand out: when the request turned TFA  off, and when the caller is exempt from the challenge, most often because their own address is in the  `trustedIps` list of that very request. The cookie the link depends on is not returned here, read it with  `GET api/2.0/settings/tfaapp/confirm`.
         * @summary Update TFA settings with a link
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaSettingsLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings-link/
         */
        async updateTfaSettingsLink(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTfaSettingsLink(tfaRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TFASettingsApi.updateTfaSettingsLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TFASettingsApi - factory interface
 * @export
 */
export const TFASettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TFASettingsApiFp(configuration)
    return {
        /**
         * Returns the one-time backup codes of the current user\'s authenticator-application credential, each with the  flag that says whether it has been spent. A backup code is accepted in place of a code from the application  when signing in, and every code works exactly once, so this list is what a member falls back on after losing  access to their authenticator. Any authenticated member may call it, always for their own account: there is no  way to read someone else\'s codes. The authenticator method has to be enabled on the portal and an application  has to be linked to the account already, otherwise the call answers 405; link one through  `GET api/2.0/settings/tfaapp/confirm` and `POST api/2.0/settings/tfaapp/validate`. Accounts flagged as  outsiders are refused. This is a read-only, idempotent call: the codes are generated once, when the  application is first linked, and the whole set is replaced by `PUT api/2.0/settings/tfaappnewcodes`. The  default configuration issues five codes of six characters, and a portal may be configured for a different  number and length.
         * @summary Get the TFA backup codes
         * @param {*} [options] Override http request option.
         * REST API Reference for getTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-app-codes/
         * @throws {RequiredError}
         */
        getTfaAppCodes(options?: RawAxiosRequestConfig): AxiosPromise<TfaAppCodeArrayWrapper> {
            return localVarFp.getTfaAppCodes(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the confirmation link the current user has to follow to pass the portal\'s two-factor authentication  step, together with the confirmation cookie that link depends on. Any authenticated member may call it, always  for their own account, and TFA has to be required for that account by the portal policy already, otherwise the  response body is empty. Which link comes back depends on the method. With the SMS method it is a phone  activation link while the account has no activated mobile number and a phone authorization link afterwards,  and only `url` is filled in. With the authenticator-application method the response also carries `cookieName`  and `cookieValue`, and the call mutates state by issuing a fresh confirmation key and setting that cookie; the  link then points at activation while no application is linked, or after the previous link was reset, and at  re-verification once one is linked. Hand the code obtained through that flow to  `POST api/2.0/settings/tfaapp/validate`. The portal-wide policy behind all of this is read with  `GET api/2.0/settings/tfaapp`.
         * @summary Get TFA confirmation data
         * @param {*} [options] Override http request option.
         * REST API Reference for getTfaConfirmData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-confirm-data/
         * @throws {RequiredError}
         */
        getTfaConfirmData(options?: RawAxiosRequestConfig): AxiosPromise<TfaConfirmDataWrapper> {
            return localVarFp.getTfaConfirmData(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the two-factor authentication methods this portal offers, with the state of each one. The list carries  at most two entries: `sms`, present only when the SMS method is enabled in the portal\'s configuration, and  `app`, present only when the authenticator-application method is enabled there, so an empty list means neither  method is offered here. Any authenticated member may call it, and what it returns is the portal-wide policy,  not the caller\'s own linked credential. This is a read-only, idempotent call. For every entry `enabled` says  whether that method is the current policy, `available` says whether it can actually be switched on (for `sms`  that also requires a configured SMS provider), `trustedIps` lists the addresses and ranges exempt from the  challenge, and `mandatoryUsers` and `mandatoryGroups` list the accounts that have to pass it even from a  trusted address. Change the policy with `PUT api/2.0/settings/tfaapp`, and read the caller\'s own backup codes  with `GET api/2.0/settings/tfaappcodes`.
         * @summary Get the TFA settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-settings/
         * @throws {RequiredError}
         */
        getTfaSettings(options?: RawAxiosRequestConfig): AxiosPromise<TfaSettingsArrayWrapper> {
            return localVarFp.getTfaSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Issues the secret the current user has to enter in an authenticator application before the  authenticator-application method can be used, both as a scannable QR-code image and as a key for manual entry.  The call is reachable only with a confirmation token carrying the `TfaActivation` role, obtained from  `GET api/2.0/settings/tfaapp/confirm` or from the login flow; an ordinary bearer token is refused. The  authenticator method has to be enabled on the portal and be its current policy, and the account must have no  application linked yet: for an already-linked account the call answers 405, so reset the credential first with  `PUT api/2.0/settings/tfaappnewapp`. Accounts flagged as outsiders are refused. Repeating the call is safe and  hands back the same secret for the account, so the QR code and the manual key always describe one and the same  credential. `qrCodeSetupImageUrl` is a base64 `data:` URL of a PNG image, and `account` is the label the  application will show. Finish the setup by sending a code from the application to  `POST api/2.0/settings/tfaapp/validate`.
         * @summary Generate the TFA setup code
         * @param {*} [options] Override http request option.
         * REST API Reference for tfaAppGenerateSetupCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-app-generate-setup-code/
         * @throws {RequiredError}
         */
        tfaAppGenerateSetupCode(options?: RawAxiosRequestConfig): AxiosPromise<TfaSetupCodeWrapper> {
            return localVarFp.tfaAppGenerateSetupCode(options).then((request) => request(axios, basePath));
        },
        /**
         * Verifies a two-factor authentication code for the account named in the confirmation link being used, and  completes that account\'s pending TFA step. The call is reachable only with a confirmation token carrying the  `TfaActivation` or `TfaAuth` role, issued by `GET api/2.0/settings/tfaapp/confirm` or by the login flow; an  ordinary bearer token is refused. Both a code from the authenticator application and one of the account\'s  unused backup codes are accepted, and a backup code is spent by the check. The call mutates state: it signs  the account in, clears the confirmation cookie so the link cannot be replayed, and on the very first  activation it generates the backup codes later returned by `GET api/2.0/settings/tfaappcodes`. Pass  `session=true` to keep that sign-in for the browser session only instead of a persistent one. It answers  `true` only for that first activation and `false` when an application was already linked. A wrong code is  rejected as an invalid request, and further attempts are refused once the portal\'s login attempt limit is  reached. The call also works while the portal\'s payment is overdue.
         * @summary Validate the TFA code
         * @param {TFASettingsApiTfaValidateAuthCodeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for tfaValidateAuthCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-validate-auth-code/
         * @throws {RequiredError}
         */
        tfaValidateAuthCode(requestParameters: TFASettingsApiTfaValidateAuthCodeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.tfaValidateAuthCode(requestParameters.tfaValidateRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Detaches the authenticator application from an account, so that the account has to link a new one before it  can sign in again. `id` has to name an existing account: an empty or unknown value is refused. Passing the  caller\'s own ID resets their own credential and returns the activation link they should follow next; passing  another member\'s ID is allowed for the portal owner only, and every other caller, a DocSpace administrator  included, is refused. The account has to have an application linked and the authenticator method has to be  enabled on the portal, otherwise the call answers 405. The call is destructive: the account\'s backup codes are  dropped together with the credential and all of its sessions are signed out. For another member the portal  also emails them that their TFA was reset, and the answer is then an empty string. The portal-wide policy is  not touched, so TFA stays required and the account sets up an application again through  `GET api/2.0/settings/tfaapp/confirm`; lift the requirement for everyone with `PUT api/2.0/settings/tfaapp`.
         * @summary Unlink the TFA application
         * @param {TFASettingsApiUnlinkTfaAppRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for unlinkTfaApp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-tfa-app/
         * @throws {RequiredError}
         */
        unlinkTfaApp(requestParameters: TFASettingsApiUnlinkTfaAppRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.unlinkTfaApp(requestParameters.tfaRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the current user\'s one-time backup codes with a freshly generated set and returns it. Use it once the  previous codes have been spent or may have leaked: the whole old set stops being accepted the moment this call  succeeds, so store the new codes before leaving the response. Any authenticated member may call it, always for  their own account. The authenticator method has to be enabled on the portal and an application has to be  linked to the account already, otherwise the call answers 405, and accounts flagged as outsiders are refused.  The call mutates state and is not idempotent: every invocation issues another set and discards the one before  it, so a retry after a timeout returns codes different from those the first attempt generated. The codes come  back unused, five of them of six characters with the default configuration, and a portal may be configured for  a different number and length. Read the current set without changing it through  `GET api/2.0/settings/tfaappcodes`. The authenticator secret itself is untouched, so the linked application  keeps working.
         * @summary Regenerate the TFA backup codes
         * @param {*} [options] Override http request option.
         * REST API Reference for updateTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-app-codes/
         * @throws {RequiredError}
         */
        updateTfaAppCodes(options?: RawAxiosRequestConfig): AxiosPromise<TfaAppCodeArrayWrapper> {
            return localVarFp.updateTfaAppCodes(options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the portal-wide two-factor authentication policy: `type` `1` switches on the SMS method, `2` switches on  the authenticator application, and `0` turns TFA off, as does any unknown value. The two methods are mutually  exclusive, so switching one on switches the other off. The caller has to be the portal owner or a DocSpace  administrator; other members are refused, and a request that names the owner\'s account in `id` or in  `mandatoryUsers` is refused unless `id` carries the caller\'s own account. `trustedIps` takes single addresses,  inclusive ranges and CIDR blocks, and an unparseable entry is rejected as an invalid request; accounts listed  in `mandatoryUsers` or `mandatoryGroups` still have to pass the challenge even from a trusted address.  Switching a method on is disruptive: it resets the portal\'s authentication cookies, so every session on the  portal, the caller\'s own included, has to sign in again. The answer is `true` when a method was switched on  and `false` when TFA was turned off. Use `PUT api/2.0/settings/tfaappwithlink` instead to receive the caller\'s  own confirmation link in the same step.
         * @summary Update the TFA settings
         * @param {TFASettingsApiUpdateTfaSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings/
         * @throws {RequiredError}
         */
        updateTfaSettings(requestParameters: TFASettingsApiUpdateTfaSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updateTfaSettings(requestParameters.tfaRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Applies the same portal-wide two-factor authentication change as `PUT api/2.0/settings/tfaapp` and  additionally returns the confirmation link the caller needs to pass the new challenge, so an administrator who  has just switched TFA on can go straight to setting it up for themselves. The caller has to be the portal  owner or a DocSpace administrator, and a request that names the owner\'s account in `id` or in `mandatoryUsers`  is refused unless `id` carries the caller\'s own account. Every effect of the plain call applies here too: the  methods are mutually exclusive, `type` `0` turns TFA off, `trustedIps` and the two mandatory lists behave the  same way, and switching a method on resets the portal\'s authentication cookies, so all sessions have to sign  in again. The answer is an empty string whenever there is no link to hand out: when the request turned TFA  off, and when the caller is exempt from the challenge, most often because their own address is in the  `trustedIps` list of that very request. The cookie the link depends on is not returned here, read it with  `GET api/2.0/settings/tfaapp/confirm`.
         * @summary Update TFA settings with a link
         * @param {TFASettingsApiUpdateTfaSettingsLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateTfaSettingsLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings-link/
         * @throws {RequiredError}
         */
        updateTfaSettingsLink(requestParameters: TFASettingsApiUpdateTfaSettingsLinkRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.updateTfaSettingsLink(requestParameters.tfaRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for tfaValidateAuthCode operation in TFASettingsApi.
 * @export
 * @interface TFASettingsApiTfaValidateAuthCodeRequest
 */
export interface TFASettingsApiTfaValidateAuthCodeRequest {
    /**
     * 
     * @type {TfaValidateRequestsDto}
     * @memberof TFASettingsApiTfaValidateAuthCode
     */
    readonly tfaValidateRequestsDto?: TfaValidateRequestsDto
}

/**
 * Request parameters for unlinkTfaApp operation in TFASettingsApi.
 * @export
 * @interface TFASettingsApiUnlinkTfaAppRequest
 */
export interface TFASettingsApiUnlinkTfaAppRequest {
    /**
     * 
     * @type {TfaRequestsDto}
     * @memberof TFASettingsApiUnlinkTfaApp
     */
    readonly tfaRequestsDto?: TfaRequestsDto
}

/**
 * Request parameters for updateTfaSettings operation in TFASettingsApi.
 * @export
 * @interface TFASettingsApiUpdateTfaSettingsRequest
 */
export interface TFASettingsApiUpdateTfaSettingsRequest {
    /**
     * 
     * @type {TfaRequestsDto}
     * @memberof TFASettingsApiUpdateTfaSettings
     */
    readonly tfaRequestsDto?: TfaRequestsDto
}

/**
 * Request parameters for updateTfaSettingsLink operation in TFASettingsApi.
 * @export
 * @interface TFASettingsApiUpdateTfaSettingsLinkRequest
 */
export interface TFASettingsApiUpdateTfaSettingsLinkRequest {
    /**
     * 
     * @type {TfaRequestsDto}
     * @memberof TFASettingsApiUpdateTfaSettingsLink
     */
    readonly tfaRequestsDto?: TfaRequestsDto
}

/**
 * TFASettingsApi - object-oriented interface
 * @export
 * @class TFASettingsApi
 * @extends {BaseAPI}
 */
export class TFASettingsApi extends BaseAPI {
    /**
     * Returns the one-time backup codes of the current user\'s authenticator-application credential, each with the  flag that says whether it has been spent. A backup code is accepted in place of a code from the application  when signing in, and every code works exactly once, so this list is what a member falls back on after losing  access to their authenticator. Any authenticated member may call it, always for their own account: there is no  way to read someone else\'s codes. The authenticator method has to be enabled on the portal and an application  has to be linked to the account already, otherwise the call answers 405; link one through  `GET api/2.0/settings/tfaapp/confirm` and `POST api/2.0/settings/tfaapp/validate`. Accounts flagged as  outsiders are refused. This is a read-only, idempotent call: the codes are generated once, when the  application is first linked, and the whole set is replaced by `PUT api/2.0/settings/tfaappnewcodes`. The  default configuration issues five codes of six characters, and a portal may be configured for a different  number and length.
     * @summary Get the TFA backup codes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TFASettingsApi
     */
    public getTfaAppCodes(options?: RawAxiosRequestConfig) {
        return TFASettingsApiFp(this.configuration).getTfaAppCodes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the confirmation link the current user has to follow to pass the portal\'s two-factor authentication  step, together with the confirmation cookie that link depends on. Any authenticated member may call it, always  for their own account, and TFA has to be required for that account by the portal policy already, otherwise the  response body is empty. Which link comes back depends on the method. With the SMS method it is a phone  activation link while the account has no activated mobile number and a phone authorization link afterwards,  and only `url` is filled in. With the authenticator-application method the response also carries `cookieName`  and `cookieValue`, and the call mutates state by issuing a fresh confirmation key and setting that cookie; the  link then points at activation while no application is linked, or after the previous link was reset, and at  re-verification once one is linked. Hand the code obtained through that flow to  `POST api/2.0/settings/tfaapp/validate`. The portal-wide policy behind all of this is read with  `GET api/2.0/settings/tfaapp`.
     * @summary Get TFA confirmation data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TFASettingsApi
     */
    public getTfaConfirmData(options?: RawAxiosRequestConfig) {
        return TFASettingsApiFp(this.configuration).getTfaConfirmData(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the two-factor authentication methods this portal offers, with the state of each one. The list carries  at most two entries: `sms`, present only when the SMS method is enabled in the portal\'s configuration, and  `app`, present only when the authenticator-application method is enabled there, so an empty list means neither  method is offered here. Any authenticated member may call it, and what it returns is the portal-wide policy,  not the caller\'s own linked credential. This is a read-only, idempotent call. For every entry `enabled` says  whether that method is the current policy, `available` says whether it can actually be switched on (for `sms`  that also requires a configured SMS provider), `trustedIps` lists the addresses and ranges exempt from the  challenge, and `mandatoryUsers` and `mandatoryGroups` list the accounts that have to pass it even from a  trusted address. Change the policy with `PUT api/2.0/settings/tfaapp`, and read the caller\'s own backup codes  with `GET api/2.0/settings/tfaappcodes`.
     * @summary Get the TFA settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TFASettingsApi
     */
    public getTfaSettings(options?: RawAxiosRequestConfig) {
        return TFASettingsApiFp(this.configuration).getTfaSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Issues the secret the current user has to enter in an authenticator application before the  authenticator-application method can be used, both as a scannable QR-code image and as a key for manual entry.  The call is reachable only with a confirmation token carrying the `TfaActivation` role, obtained from  `GET api/2.0/settings/tfaapp/confirm` or from the login flow; an ordinary bearer token is refused. The  authenticator method has to be enabled on the portal and be its current policy, and the account must have no  application linked yet: for an already-linked account the call answers 405, so reset the credential first with  `PUT api/2.0/settings/tfaappnewapp`. Accounts flagged as outsiders are refused. Repeating the call is safe and  hands back the same secret for the account, so the QR code and the manual key always describe one and the same  credential. `qrCodeSetupImageUrl` is a base64 `data:` URL of a PNG image, and `account` is the label the  application will show. Finish the setup by sending a code from the application to  `POST api/2.0/settings/tfaapp/validate`.
     * @summary Generate the TFA setup code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TFASettingsApi
     */
    public tfaAppGenerateSetupCode(options?: RawAxiosRequestConfig) {
        return TFASettingsApiFp(this.configuration).tfaAppGenerateSetupCode(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Verifies a two-factor authentication code for the account named in the confirmation link being used, and  completes that account\'s pending TFA step. The call is reachable only with a confirmation token carrying the  `TfaActivation` or `TfaAuth` role, issued by `GET api/2.0/settings/tfaapp/confirm` or by the login flow; an  ordinary bearer token is refused. Both a code from the authenticator application and one of the account\'s  unused backup codes are accepted, and a backup code is spent by the check. The call mutates state: it signs  the account in, clears the confirmation cookie so the link cannot be replayed, and on the very first  activation it generates the backup codes later returned by `GET api/2.0/settings/tfaappcodes`. Pass  `session=true` to keep that sign-in for the browser session only instead of a persistent one. It answers  `true` only for that first activation and `false` when an application was already linked. A wrong code is  rejected as an invalid request, and further attempts are refused once the portal\'s login attempt limit is  reached. The call also works while the portal\'s payment is overdue.
     * @summary Validate the TFA code
     * @param {SettingsTFASettingsApiTfaValidateAuthCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TFASettingsApi
     */
    public tfaValidateAuthCode(requestParameters: TFASettingsApiTfaValidateAuthCodeRequest = {}, options?: RawAxiosRequestConfig) {
        return TFASettingsApiFp(this.configuration).tfaValidateAuthCode(requestParameters.tfaValidateRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Detaches the authenticator application from an account, so that the account has to link a new one before it  can sign in again. `id` has to name an existing account: an empty or unknown value is refused. Passing the  caller\'s own ID resets their own credential and returns the activation link they should follow next; passing  another member\'s ID is allowed for the portal owner only, and every other caller, a DocSpace administrator  included, is refused. The account has to have an application linked and the authenticator method has to be  enabled on the portal, otherwise the call answers 405. The call is destructive: the account\'s backup codes are  dropped together with the credential and all of its sessions are signed out. For another member the portal  also emails them that their TFA was reset, and the answer is then an empty string. The portal-wide policy is  not touched, so TFA stays required and the account sets up an application again through  `GET api/2.0/settings/tfaapp/confirm`; lift the requirement for everyone with `PUT api/2.0/settings/tfaapp`.
     * @summary Unlink the TFA application
     * @param {SettingsTFASettingsApiUnlinkTfaAppRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TFASettingsApi
     */
    public unlinkTfaApp(requestParameters: TFASettingsApiUnlinkTfaAppRequest = {}, options?: RawAxiosRequestConfig) {
        return TFASettingsApiFp(this.configuration).unlinkTfaApp(requestParameters.tfaRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the current user\'s one-time backup codes with a freshly generated set and returns it. Use it once the  previous codes have been spent or may have leaked: the whole old set stops being accepted the moment this call  succeeds, so store the new codes before leaving the response. Any authenticated member may call it, always for  their own account. The authenticator method has to be enabled on the portal and an application has to be  linked to the account already, otherwise the call answers 405, and accounts flagged as outsiders are refused.  The call mutates state and is not idempotent: every invocation issues another set and discards the one before  it, so a retry after a timeout returns codes different from those the first attempt generated. The codes come  back unused, five of them of six characters with the default configuration, and a portal may be configured for  a different number and length. Read the current set without changing it through  `GET api/2.0/settings/tfaappcodes`. The authenticator secret itself is untouched, so the linked application  keeps working.
     * @summary Regenerate the TFA backup codes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TFASettingsApi
     */
    public updateTfaAppCodes(options?: RawAxiosRequestConfig) {
        return TFASettingsApiFp(this.configuration).updateTfaAppCodes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the portal-wide two-factor authentication policy: `type` `1` switches on the SMS method, `2` switches on  the authenticator application, and `0` turns TFA off, as does any unknown value. The two methods are mutually  exclusive, so switching one on switches the other off. The caller has to be the portal owner or a DocSpace  administrator; other members are refused, and a request that names the owner\'s account in `id` or in  `mandatoryUsers` is refused unless `id` carries the caller\'s own account. `trustedIps` takes single addresses,  inclusive ranges and CIDR blocks, and an unparseable entry is rejected as an invalid request; accounts listed  in `mandatoryUsers` or `mandatoryGroups` still have to pass the challenge even from a trusted address.  Switching a method on is disruptive: it resets the portal\'s authentication cookies, so every session on the  portal, the caller\'s own included, has to sign in again. The answer is `true` when a method was switched on  and `false` when TFA was turned off. Use `PUT api/2.0/settings/tfaappwithlink` instead to receive the caller\'s  own confirmation link in the same step.
     * @summary Update the TFA settings
     * @param {SettingsTFASettingsApiUpdateTfaSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TFASettingsApi
     */
    public updateTfaSettings(requestParameters: TFASettingsApiUpdateTfaSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return TFASettingsApiFp(this.configuration).updateTfaSettings(requestParameters.tfaRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Applies the same portal-wide two-factor authentication change as `PUT api/2.0/settings/tfaapp` and  additionally returns the confirmation link the caller needs to pass the new challenge, so an administrator who  has just switched TFA on can go straight to setting it up for themselves. The caller has to be the portal  owner or a DocSpace administrator, and a request that names the owner\'s account in `id` or in `mandatoryUsers`  is refused unless `id` carries the caller\'s own account. Every effect of the plain call applies here too: the  methods are mutually exclusive, `type` `0` turns TFA off, `trustedIps` and the two mandatory lists behave the  same way, and switching a method on resets the portal\'s authentication cookies, so all sessions have to sign  in again. The answer is an empty string whenever there is no link to hand out: when the request turned TFA  off, and when the caller is exempt from the challenge, most often because their own address is in the  `trustedIps` list of that very request. The cookie the link depends on is not returned here, read it with  `GET api/2.0/settings/tfaapp/confirm`.
     * @summary Update TFA settings with a link
     * @param {SettingsTFASettingsApiUpdateTfaSettingsLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TFASettingsApi
     */
    public updateTfaSettingsLink(requestParameters: TFASettingsApiUpdateTfaSettingsLinkRequest = {}, options?: RawAxiosRequestConfig) {
        return TFASettingsApiFp(this.configuration).updateTfaSettingsLink(requestParameters.tfaRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

