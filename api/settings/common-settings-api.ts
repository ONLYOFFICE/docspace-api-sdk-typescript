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
import type { CustomColorThemesSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { CustomColorThemesSettingsWrapper } from '../../models';
// @ts-ignore
import type { DeepLinkConfigurationRequestsDto } from '../../models';
// @ts-ignore
import type { DefaultProductRequestDto } from '../../models';
// @ts-ignore
import type { DnsSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { EmailActivationSettings } from '../../models';
// @ts-ignore
import type { EmailActivationSettingsWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { MailDomainSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { PaymentSettingsWrapper } from '../../models';
// @ts-ignore
import type { STRINGArrayWrapper } from '../../models';
// @ts-ignore
import type { SettingsWrapper } from '../../models';
// @ts-ignore
import type { SocketSettingsWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { StudioDefaultPageSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantAiAccessSettingsDto } from '../../models';
// @ts-ignore
import type { TenantAiAccessSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantDeepLinkSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantUserInvitationSettingsRequestDto } from '../../models';
// @ts-ignore
import type { TenantUserInvitationSettingsWrapper } from '../../models';
// @ts-ignore
import type { TimezonesRequestsArrayWrapper } from '../../models';
// @ts-ignore
import type { WizardRequestsDto } from '../../models';
// @ts-ignore
import type { WizardSettingsWrapper } from '../../models';
/**
 * CommonSettingsApi - axios parameter creator
 * @export
 */
export const CommonSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Dismisses the administrator helper tip for the caller, so it is not shown again on this account. Available  only to a DocSpace administrator, which includes the portal Owner, on a Standalone (self-hosted) installation  running outside white-label custom mode; every other caller is refused. This is a mutating, idempotent call  scoped to the calling account only; it never affects other administrators. It returns no data on success.
         * @summary Close the admin helper
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for closeAdminHelper operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/close-admin-helper/
         */
        closeAdminHelper: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/closeadminhelper`;
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
         * Finishes the initial portal setup wizard: sets the owner\'s password and locale, applies the supplied license  if one is required, and marks the wizard as completed so it is not shown again. This call is not for a normal  logged-in session: it requires a confirmation link bearing the Wizard claim, of the kind issued when a new  portal is created, and the link is consumed as part of authenticating the request; the caller must also hold  the EditPortalSettings permission. An empty password or a malformed email address is rejected without  completing the wizard, and so is a missing, invalid, or expired license, or a license whose user quota does  not cover the portal. This call is meant to run once per portal; running it again is accepted but has no  further effect once the wizard is already completed. It returns the resulting wizard settings, including the  completed flag.
         * @summary Complete the Wizard settings
         * @param {WizardRequestsDto} [wizardRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for completeWizard operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/complete-wizard/
         */
        completeWizard: async (wizardRequestsDto?: WizardRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/wizard/complete`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(wizardRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets how the portal responds when a client opens a DocSpace link on a mobile device: always in the browser,  always in the native app, or asking the user to choose each time. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). The handling mode must be one of the documented enum values; anything else is  rejected without being saved. This is a mutating, idempotent call: sending the same mode again leaves the  setting unchanged. It returns the saved deep link settings, including the timestamp of the last change; read  the current value at any time, including anonymously, from `GET api/2.0/settings/deeplink`.
         * @summary Configure the deep link settings
         * @param {DeepLinkConfigurationRequestsDto} [deepLinkConfigurationRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for configureDeepLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-deep-link/
         */
        configureDeepLink: async (deepLinkConfigurationRequestsDto?: DeepLinkConfigurationRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/deeplink`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(deepLinkConfigurationRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a custom color theme from the portal by its ID. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). An ID belonging to one of the built-in default themes is not removable; the  call succeeds but leaves the theme list unchanged. If the deleted theme was the currently selected one, the  theme with the lowest remaining ID is selected automatically. This is a mutating, idempotent call: deleting an  ID that is already gone succeeds without error and again leaves nothing changed. It returns the full updated  theme configuration, including the (possibly new) selected theme.
         * @summary Delete a color theme
         * @param {number} id The theme to remove, by theme ID. An ID belonging to a built-in theme leaves the list untouched, and so does  one that is already gone - neither is reported as an error. Removing the theme currently in use moves the  portal to the remaining theme with the lowest ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deletePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal-color-theme/
         */
        deletePortalColorTheme: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deletePortalColorTheme', 'id', id)

            const localVarPath = `/api/2.0/settings/colortheme`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns how the portal currently responds when a client opens a DocSpace link on a mobile device: always in  the browser, always in the native app, or asking the user to choose. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call. The response supports conditional requests:  send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response  comes back empty instead of resending the settings. Change the mode with `POST api/2.0/settings/deeplink`,  which requires the EditPortalSettings permission.
         * @summary Get the deep link settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDeepLinkSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deep-link-settings/
         */
        getDeepLinkSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/deeplink`;
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
         * Returns the portal\'s payment-related configuration: the sales contact email, the URL to buy or extend a  subscription, whether the portal is Standalone, the current license\'s trial status and expiration date, and  the maximum quota quantity that can be purchased at once. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). This is a read-only, idempotent call. It remains reachable even while the  portal\'s own subscription payment is overdue, since this is how the caller finds the link to resolve it.
         * @summary Get the payment settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-settings/
         */
        getPaymentSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/payment`;
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
         * Returns the portal\'s color theme configuration: every saved custom theme, which one is currently selected, and  how many custom themes the plan still allows. No permission is required; anonymous callers can read it too.  This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings. A `limit` of `0` means the plan does not cap the number of custom  themes.
         * @summary Get a color theme
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-color-theme/
         */
        getPortalColorTheme: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/colortheme`;
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
         * Returns the hostname the current request arrived on, exactly as sent in the HTTP Host header, so a client  mid-setup can learn the address the portal is actually reachable at. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard claim, of the kind generated during initial portal  setup, and the link is consumed as part of authenticating the request. This is a read-only, idempotent call.  The value reflects whatever the caller connected through, including a reverse proxy\'s public name, and is not  necessarily the tenant\'s configured alias or mapped domain.
         * @summary Get the portal hostname
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalHostname operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-hostname/
         */
        getPortalHostname: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/machine`;
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
         * Returns the absolute URL of the portal\'s current logo image, already resolved against the active white-label  branding. Requires an authenticated session; every role, including Guest, can read it. This is a read-only,  idempotent call. The response supports conditional requests: send the standard If-Modified-Since header with  the previous `lastModified` value, and an unchanged response comes back empty instead of resending the same  URL. The URL points at whatever image is currently configured, including the default DocSpace logo when no  custom branding has been set.
         * @summary Get a portal logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-logo/
         */
        getPortalLogo: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/logo`;
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
         * Returns the current portal\'s general configuration: branding, culture, feature flags, and DocSpace/Standalone  mode, everything the client needs to render its shell before or after login. No permission is required, but  the response shape depends on the caller\'s identity. An anonymous caller receives only the public subset  (culture, branding, DocSpace/Standalone flags, deep link data, setup-wizard and join-by-domain hints); once  authenticated, the response also includes tenant-specific fields such as the owner ID, time zone, invitation  limit, AI/banner/dev-tools flags, and, for a DocSpace administrator, the tenant wallet\'s low-balance flag.  This is a read-only, idempotent call. Pass `withPassword=true` to also receive the parameters (`salt`,  iteration count, hash size) used to hash the password client-side before it is sent to the authentication  endpoints; these are only added for an anonymous caller or when explicitly requested, never as part of the  default authenticated response.
         * @summary Get the portal settings
         * @param {boolean} [withpassword] Whether the answer also carries the salt, iteration count and hash size a client needs to hash a password  before sending it to the authentication operations. They are included for an anonymous caller anyway; for a  signed-in one they are left out unless this is set.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-settings/
         */
        getPortalSettings: async (withpassword?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings`;
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

            if (withpassword !== undefined) {
                localVarQueryParameter['withpassword'] = withpassword;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the base URL of the portal\'s real-time notification hub (Socket.IO), which the client connects to for  live updates such as file changes, presence, or quota alerts. Requires an authenticated session; every role  can read it. This is a read-only, idempotent call. The value comes from server-side configuration and cannot  be changed through this API; an empty `url` means the portal has no notification hub configured and the client  should not attempt to connect.
         * @summary Get the socket settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSocketSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-socket-settings/
         */
        getSocketSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/socket`;
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
         * Returns the two- or four-letter language codes of every culture currently enabled on the portal (for example  `en-US`), used to populate a language picker before or after login. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call, and the list is not paginated. The response  supports conditional requests: an unchanged result is signaled instead of resending the same list. The set of  enabled cultures is a portal-wide configuration value, not a per-user preference.
         * @summary Get supported languages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSupportedCultures operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-supported-cultures/
         */
        getSupportedCultures: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/cultures`;
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
         * Returns whether AI functionality (chat, agents, vectorization) is currently available on the portal at all; AI  is enabled by default. Requires an authenticated session; every role can read it. This is a read-only,  idempotent call. When the setting is disabled, every AI-specific endpoint and folder is unavailable regardless  of the caller\'s own permissions; this call only reports the portal-wide switch, not any per-user entitlement.
         * @summary Get the AI access settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantAiAccessSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-ai-access-settings/
         */
        getTenantAiAccessSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/ai-access`;
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
         * Returns whether the portal currently allows inviting new members and new guests at all. No permission is  required; anonymous callers can read it too, since the invitation flow itself may run before the caller has  signed in. This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings.
         * @summary Get the user invitation settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantUserInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-user-invitation-settings/
         */
        getTenantUserInvitationSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/invitationsettings`;
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
         * Returns every time zone known to the host machine, each with its IANA identifier and a human-readable display  name, ordered from the most negative to the most positive UTC offset. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard or Administrators claim, of the kind generated  during initial portal setup or issued by an administrator, and the link is consumed as part of authenticating  the request. This is a read-only, idempotent call, and the list is not paginated. Use the returned `id` values  wherever the portal expects a time zone identifier; an unrecognized value is rejected there, not here.
         * @summary Get time zones
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTimeZones operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-time-zones/
         */
        getTimeZones: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/timezones`;
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
         * Sets which folder the current user\'s account opens into by default, such as My Documents, the rooms list, or  favorites. Requires an authenticated session; every role may set its own default, and the change never affects  any other user. Only folder types the client actually offers as a landing page are accepted; picking My  Documents (`USER`) as a Guest is rejected too, since guests have no personal storage. This is a mutating,  idempotent call. It returns the saved setting.
         * @summary Set the default folder
         * @param {DefaultProductRequestDto} [defaultProductRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveDefaultFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-default-folder/
         */
        saveDefaultFolder: async (defaultProductRequestDto?: DefaultProductRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/defaultfolder`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(defaultProductRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Maps a custom domain name onto the current tenant, or clears the mapping, so the portal becomes reachable  under the caller\'s own DNS name instead of only its default alias. Available only on a Standalone  (self-hosted) installation; on SaaS the call is always refused. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disable the mapping by passing `enable=false`, in which case the domain name  in the request is ignored. A domain that collides with the portal\'s reserved base domain, or otherwise fails  validation, is rejected without changing the current mapping. This is a mutating, idempotent call. On success  the previous domain also stops answering, and any CSP configuration referencing it is updated to the new one.
         * @summary Save the DNS settings
         * @param {DnsSettingsRequestsDto} [dnsSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveDnsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-dns-settings/
         */
        saveDnsSettings: async (dnsSettingsRequestsDto?: DnsSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/dns`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(dnsSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Overwrites the portal\'s trusted mail domain configuration, which controls which email domains are treated as  already verified when a user is invited or self-registers. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). When the requested mode is a custom domain list, every domain is normalized to  lowercase and checked against the expected hostname format; a domain that fails the check, or an empty custom  list, causes the whole call to be rejected without saving anything. For the other modes the domain list in the  request is ignored. The `inviteUsersAsVisitors` flag controls whether users who join through a trusted domain  are added as full members or as visitors, and takes effect on the next join rather than retroactively. This is  a mutating, idempotent call: repeating it with the same body leaves the portal in the same state. On success  it returns a confirmation message, not the saved settings themselves; read them back from  `GET api/2.0/settings`.
         * @summary Save the mail domain settings
         * @param {MailDomainSettingsRequestsDto} [mailDomainSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveMailDomainSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mail-domain-settings/
         */
        saveMailDomainSettings: async (mailDomainSettingsRequestsDto?: MailDomainSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/maildomainsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(mailDomainSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds or updates a custom color theme, or changes which theme is selected, for the whole portal. Requires Owner  or DocSpaceAdmin (the EditPortalSettings permission). Pass `theme` to create or edit one: an existing theme is  matched and updated by its ID, a new one is appended, and an ID that collides with a built-in default theme is  treated as a request to create a new custom theme instead of overwriting the default. Once the plan\'s  custom-theme limit is reached, a new theme is silently not added rather than rejected with an error, so check  the returned `themes` count against `limit` before assuming it was saved. Pass `selected` to switch the active  theme; an ID that does not match any existing theme is ignored. This is a mutating call, not strictly  idempotent once the limit has been reached. It returns the full updated theme configuration.
         * @summary Save a color theme
         * @param {CustomColorThemesSettingsRequestsDto} [customColorThemesSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for savePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-portal-color-theme/
         */
        savePortalColorTheme: async (customColorThemesSettingsRequestsDto?: CustomColorThemesSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/colortheme`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(customColorThemesSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Turns AI functionality (chat, agents, vectorization) on or off for the whole portal; AI is enabled by default.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other caller is refused. Disabling  it immediately hides the AI Agents folder from root folder listings, makes AI status checks report disabled,  and makes AI chat endpoints unreachable for every user on the tenant, not only the caller. This is a mutating,  idempotent, portal-wide call, and the change is pushed to already-connected clients over the real-time  notification hub rather than waiting for their next request. It returns the saved setting.
         * @summary Set the AI access settings
         * @param {TenantAiAccessSettingsDto} [tenantAiAccessSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantAiAccessSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-ai-access-settings/
         */
        setTenantAiAccessSettings: async (tenantAiAccessSettingsDto?: TenantAiAccessSettingsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/ai-access`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantAiAccessSettingsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the current user\'s own preference for whether the email confirmation prompt is displayed on their  account. Requires an authenticated session; every role may change its own setting, and the change never  affects any other user. This is a mutating, idempotent call. It returns the settings exactly as submitted,  without validating them against the account\'s actual email confirmation state, so `show` can be set to `true`  even after the address is already confirmed.
         * @summary Update the email activation settings
         * @param {EmailActivationSettings} [emailActivationSettings] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateEmailActivationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-email-activation-settings/
         */
        updateEmailActivationSettings: async (emailActivationSettings?: EmailActivationSettings, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/emailactivation`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(emailActivationSettings, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets whether the portal allows inviting new members and new guests. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disabling member or guest invitations only blocks creating new invitations  going forward; it does not revoke links already issued or remove members already invited. This is a mutating,  idempotent, portal-wide call. It returns the saved setting; read the current value at any time, including  anonymously, from `GET api/2.0/settings/invitationsettings`.
         * @summary Update the user invitation settings
         * @param {TenantUserInvitationSettingsRequestDto} [tenantUserInvitationSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-settings/
         */
        updateInvitationSettings: async (tenantUserInvitationSettingsRequestDto?: TenantUserInvitationSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/invitationsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantUserInvitationSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CommonSettingsApi - functional programming interface
 * @export
 */
export const CommonSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CommonSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Dismisses the administrator helper tip for the caller, so it is not shown again on this account. Available  only to a DocSpace administrator, which includes the portal Owner, on a Standalone (self-hosted) installation  running outside white-label custom mode; every other caller is refused. This is a mutating, idempotent call  scoped to the calling account only; it never affects other administrators. It returns no data on success.
         * @summary Close the admin helper
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for closeAdminHelper operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/close-admin-helper/
         */
        async closeAdminHelper(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.closeAdminHelper(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.closeAdminHelper']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Finishes the initial portal setup wizard: sets the owner\'s password and locale, applies the supplied license  if one is required, and marks the wizard as completed so it is not shown again. This call is not for a normal  logged-in session: it requires a confirmation link bearing the Wizard claim, of the kind issued when a new  portal is created, and the link is consumed as part of authenticating the request; the caller must also hold  the EditPortalSettings permission. An empty password or a malformed email address is rejected without  completing the wizard, and so is a missing, invalid, or expired license, or a license whose user quota does  not cover the portal. This call is meant to run once per portal; running it again is accepted but has no  further effect once the wizard is already completed. It returns the resulting wizard settings, including the  completed flag.
         * @summary Complete the Wizard settings
         * @param {WizardRequestsDto} [wizardRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for completeWizard operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/complete-wizard/
         */
        async completeWizard(wizardRequestsDto?: WizardRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WizardSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.completeWizard(wizardRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.completeWizard']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets how the portal responds when a client opens a DocSpace link on a mobile device: always in the browser,  always in the native app, or asking the user to choose each time. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). The handling mode must be one of the documented enum values; anything else is  rejected without being saved. This is a mutating, idempotent call: sending the same mode again leaves the  setting unchanged. It returns the saved deep link settings, including the timestamp of the last change; read  the current value at any time, including anonymously, from `GET api/2.0/settings/deeplink`.
         * @summary Configure the deep link settings
         * @param {DeepLinkConfigurationRequestsDto} [deepLinkConfigurationRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for configureDeepLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-deep-link/
         */
        async configureDeepLink(deepLinkConfigurationRequestsDto?: DeepLinkConfigurationRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantDeepLinkSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.configureDeepLink(deepLinkConfigurationRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.configureDeepLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes a custom color theme from the portal by its ID. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). An ID belonging to one of the built-in default themes is not removable; the  call succeeds but leaves the theme list unchanged. If the deleted theme was the currently selected one, the  theme with the lowest remaining ID is selected automatically. This is a mutating, idempotent call: deleting an  ID that is already gone succeeds without error and again leaves nothing changed. It returns the full updated  theme configuration, including the (possibly new) selected theme.
         * @summary Delete a color theme
         * @param {number} id The theme to remove, by theme ID. An ID belonging to a built-in theme leaves the list untouched, and so does  one that is already gone - neither is reported as an error. Removing the theme currently in use moves the  portal to the remaining theme with the lowest ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deletePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal-color-theme/
         */
        async deletePortalColorTheme(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomColorThemesSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePortalColorTheme(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.deletePortalColorTheme']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns how the portal currently responds when a client opens a DocSpace link on a mobile device: always in  the browser, always in the native app, or asking the user to choose. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call. The response supports conditional requests:  send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response  comes back empty instead of resending the settings. Change the mode with `POST api/2.0/settings/deeplink`,  which requires the EditPortalSettings permission.
         * @summary Get the deep link settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDeepLinkSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deep-link-settings/
         */
        async getDeepLinkSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantDeepLinkSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeepLinkSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getDeepLinkSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal\'s payment-related configuration: the sales contact email, the URL to buy or extend a  subscription, whether the portal is Standalone, the current license\'s trial status and expiration date, and  the maximum quota quantity that can be purchased at once. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). This is a read-only, idempotent call. It remains reachable even while the  portal\'s own subscription payment is overdue, since this is how the caller finds the link to resolve it.
         * @summary Get the payment settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-settings/
         */
        async getPaymentSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getPaymentSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal\'s color theme configuration: every saved custom theme, which one is currently selected, and  how many custom themes the plan still allows. No permission is required; anonymous callers can read it too.  This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings. A `limit` of `0` means the plan does not cap the number of custom  themes.
         * @summary Get a color theme
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-color-theme/
         */
        async getPortalColorTheme(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomColorThemesSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalColorTheme(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getPortalColorTheme']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the hostname the current request arrived on, exactly as sent in the HTTP Host header, so a client  mid-setup can learn the address the portal is actually reachable at. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard claim, of the kind generated during initial portal  setup, and the link is consumed as part of authenticating the request. This is a read-only, idempotent call.  The value reflects whatever the caller connected through, including a reverse proxy\'s public name, and is not  necessarily the tenant\'s configured alias or mapped domain.
         * @summary Get the portal hostname
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalHostname operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-hostname/
         */
        async getPortalHostname(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalHostname(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getPortalHostname']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the absolute URL of the portal\'s current logo image, already resolved against the active white-label  branding. Requires an authenticated session; every role, including Guest, can read it. This is a read-only,  idempotent call. The response supports conditional requests: send the standard If-Modified-Since header with  the previous `lastModified` value, and an unchanged response comes back empty instead of resending the same  URL. The URL points at whatever image is currently configured, including the default DocSpace logo when no  custom branding has been set.
         * @summary Get a portal logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-logo/
         */
        async getPortalLogo(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalLogo(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getPortalLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current portal\'s general configuration: branding, culture, feature flags, and DocSpace/Standalone  mode, everything the client needs to render its shell before or after login. No permission is required, but  the response shape depends on the caller\'s identity. An anonymous caller receives only the public subset  (culture, branding, DocSpace/Standalone flags, deep link data, setup-wizard and join-by-domain hints); once  authenticated, the response also includes tenant-specific fields such as the owner ID, time zone, invitation  limit, AI/banner/dev-tools flags, and, for a DocSpace administrator, the tenant wallet\'s low-balance flag.  This is a read-only, idempotent call. Pass `withPassword=true` to also receive the parameters (`salt`,  iteration count, hash size) used to hash the password client-side before it is sent to the authentication  endpoints; these are only added for an anonymous caller or when explicitly requested, never as part of the  default authenticated response.
         * @summary Get the portal settings
         * @param {boolean} [withpassword] Whether the answer also carries the salt, iteration count and hash size a client needs to hash a password  before sending it to the authentication operations. They are included for an anonymous caller anyway; for a  signed-in one they are left out unless this is set.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-settings/
         */
        async getPortalSettings(withpassword?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalSettings(withpassword, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getPortalSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the base URL of the portal\'s real-time notification hub (Socket.IO), which the client connects to for  live updates such as file changes, presence, or quota alerts. Requires an authenticated session; every role  can read it. This is a read-only, idempotent call. The value comes from server-side configuration and cannot  be changed through this API; an empty `url` means the portal has no notification hub configured and the client  should not attempt to connect.
         * @summary Get the socket settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSocketSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-socket-settings/
         */
        async getSocketSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SocketSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSocketSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getSocketSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the two- or four-letter language codes of every culture currently enabled on the portal (for example  `en-US`), used to populate a language picker before or after login. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call, and the list is not paginated. The response  supports conditional requests: an unchanged result is signaled instead of resending the same list. The set of  enabled cultures is a portal-wide configuration value, not a per-user preference.
         * @summary Get supported languages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSupportedCultures operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-supported-cultures/
         */
        async getSupportedCultures(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<STRINGArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSupportedCultures(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getSupportedCultures']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns whether AI functionality (chat, agents, vectorization) is currently available on the portal at all; AI  is enabled by default. Requires an authenticated session; every role can read it. This is a read-only,  idempotent call. When the setting is disabled, every AI-specific endpoint and folder is unavailable regardless  of the caller\'s own permissions; this call only reports the portal-wide switch, not any per-user entitlement.
         * @summary Get the AI access settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantAiAccessSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-ai-access-settings/
         */
        async getTenantAiAccessSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantAiAccessSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantAiAccessSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getTenantAiAccessSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns whether the portal currently allows inviting new members and new guests at all. No permission is  required; anonymous callers can read it too, since the invitation flow itself may run before the caller has  signed in. This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings.
         * @summary Get the user invitation settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantUserInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-user-invitation-settings/
         */
        async getTenantUserInvitationSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantUserInvitationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantUserInvitationSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getTenantUserInvitationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns every time zone known to the host machine, each with its IANA identifier and a human-readable display  name, ordered from the most negative to the most positive UTC offset. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard or Administrators claim, of the kind generated  during initial portal setup or issued by an administrator, and the link is consumed as part of authenticating  the request. This is a read-only, idempotent call, and the list is not paginated. Use the returned `id` values  wherever the portal expects a time zone identifier; an unrecognized value is rejected there, not here.
         * @summary Get time zones
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTimeZones operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-time-zones/
         */
        async getTimeZones(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimezonesRequestsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTimeZones(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.getTimeZones']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets which folder the current user\'s account opens into by default, such as My Documents, the rooms list, or  favorites. Requires an authenticated session; every role may set its own default, and the change never affects  any other user. Only folder types the client actually offers as a landing page are accepted; picking My  Documents (`USER`) as a Guest is rejected too, since guests have no personal storage. This is a mutating,  idempotent call. It returns the saved setting.
         * @summary Set the default folder
         * @param {DefaultProductRequestDto} [defaultProductRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveDefaultFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-default-folder/
         */
        async saveDefaultFolder(defaultProductRequestDto?: DefaultProductRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudioDefaultPageSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveDefaultFolder(defaultProductRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.saveDefaultFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Maps a custom domain name onto the current tenant, or clears the mapping, so the portal becomes reachable  under the caller\'s own DNS name instead of only its default alias. Available only on a Standalone  (self-hosted) installation; on SaaS the call is always refused. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disable the mapping by passing `enable=false`, in which case the domain name  in the request is ignored. A domain that collides with the portal\'s reserved base domain, or otherwise fails  validation, is rejected without changing the current mapping. This is a mutating, idempotent call. On success  the previous domain also stops answering, and any CSP configuration referencing it is updated to the new one.
         * @summary Save the DNS settings
         * @param {DnsSettingsRequestsDto} [dnsSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveDnsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-dns-settings/
         */
        async saveDnsSettings(dnsSettingsRequestsDto?: DnsSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveDnsSettings(dnsSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.saveDnsSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Overwrites the portal\'s trusted mail domain configuration, which controls which email domains are treated as  already verified when a user is invited or self-registers. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). When the requested mode is a custom domain list, every domain is normalized to  lowercase and checked against the expected hostname format; a domain that fails the check, or an empty custom  list, causes the whole call to be rejected without saving anything. For the other modes the domain list in the  request is ignored. The `inviteUsersAsVisitors` flag controls whether users who join through a trusted domain  are added as full members or as visitors, and takes effect on the next join rather than retroactively. This is  a mutating, idempotent call: repeating it with the same body leaves the portal in the same state. On success  it returns a confirmation message, not the saved settings themselves; read them back from  `GET api/2.0/settings`.
         * @summary Save the mail domain settings
         * @param {MailDomainSettingsRequestsDto} [mailDomainSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveMailDomainSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mail-domain-settings/
         */
        async saveMailDomainSettings(mailDomainSettingsRequestsDto?: MailDomainSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveMailDomainSettings(mailDomainSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.saveMailDomainSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds or updates a custom color theme, or changes which theme is selected, for the whole portal. Requires Owner  or DocSpaceAdmin (the EditPortalSettings permission). Pass `theme` to create or edit one: an existing theme is  matched and updated by its ID, a new one is appended, and an ID that collides with a built-in default theme is  treated as a request to create a new custom theme instead of overwriting the default. Once the plan\'s  custom-theme limit is reached, a new theme is silently not added rather than rejected with an error, so check  the returned `themes` count against `limit` before assuming it was saved. Pass `selected` to switch the active  theme; an ID that does not match any existing theme is ignored. This is a mutating call, not strictly  idempotent once the limit has been reached. It returns the full updated theme configuration.
         * @summary Save a color theme
         * @param {CustomColorThemesSettingsRequestsDto} [customColorThemesSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for savePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-portal-color-theme/
         */
        async savePortalColorTheme(customColorThemesSettingsRequestsDto?: CustomColorThemesSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomColorThemesSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.savePortalColorTheme(customColorThemesSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.savePortalColorTheme']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Turns AI functionality (chat, agents, vectorization) on or off for the whole portal; AI is enabled by default.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other caller is refused. Disabling  it immediately hides the AI Agents folder from root folder listings, makes AI status checks report disabled,  and makes AI chat endpoints unreachable for every user on the tenant, not only the caller. This is a mutating,  idempotent, portal-wide call, and the change is pushed to already-connected clients over the real-time  notification hub rather than waiting for their next request. It returns the saved setting.
         * @summary Set the AI access settings
         * @param {TenantAiAccessSettingsDto} [tenantAiAccessSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantAiAccessSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-ai-access-settings/
         */
        async setTenantAiAccessSettings(tenantAiAccessSettingsDto?: TenantAiAccessSettingsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantAiAccessSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setTenantAiAccessSettings(tenantAiAccessSettingsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.setTenantAiAccessSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the current user\'s own preference for whether the email confirmation prompt is displayed on their  account. Requires an authenticated session; every role may change its own setting, and the change never  affects any other user. This is a mutating, idempotent call. It returns the settings exactly as submitted,  without validating them against the account\'s actual email confirmation state, so `show` can be set to `true`  even after the address is already confirmed.
         * @summary Update the email activation settings
         * @param {EmailActivationSettings} [emailActivationSettings] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateEmailActivationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-email-activation-settings/
         */
        async updateEmailActivationSettings(emailActivationSettings?: EmailActivationSettings, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmailActivationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEmailActivationSettings(emailActivationSettings, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.updateEmailActivationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets whether the portal allows inviting new members and new guests. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disabling member or guest invitations only blocks creating new invitations  going forward; it does not revoke links already issued or remove members already invited. This is a mutating,  idempotent, portal-wide call. It returns the saved setting; read the current value at any time, including  anonymously, from `GET api/2.0/settings/invitationsettings`.
         * @summary Update the user invitation settings
         * @param {TenantUserInvitationSettingsRequestDto} [tenantUserInvitationSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-settings/
         */
        async updateInvitationSettings(tenantUserInvitationSettingsRequestDto?: TenantUserInvitationSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantUserInvitationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInvitationSettings(tenantUserInvitationSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CommonSettingsApi.updateInvitationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CommonSettingsApi - factory interface
 * @export
 */
export const CommonSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CommonSettingsApiFp(configuration)
    return {
        /**
         * Dismisses the administrator helper tip for the caller, so it is not shown again on this account. Available  only to a DocSpace administrator, which includes the portal Owner, on a Standalone (self-hosted) installation  running outside white-label custom mode; every other caller is refused. This is a mutating, idempotent call  scoped to the calling account only; it never affects other administrators. It returns no data on success.
         * @summary Close the admin helper
         * @param {*} [options] Override http request option.
         * REST API Reference for closeAdminHelper operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/close-admin-helper/
         * @throws {RequiredError}
         */
        closeAdminHelper(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.closeAdminHelper(options).then((request) => request(axios, basePath));
        },
        /**
         * Finishes the initial portal setup wizard: sets the owner\'s password and locale, applies the supplied license  if one is required, and marks the wizard as completed so it is not shown again. This call is not for a normal  logged-in session: it requires a confirmation link bearing the Wizard claim, of the kind issued when a new  portal is created, and the link is consumed as part of authenticating the request; the caller must also hold  the EditPortalSettings permission. An empty password or a malformed email address is rejected without  completing the wizard, and so is a missing, invalid, or expired license, or a license whose user quota does  not cover the portal. This call is meant to run once per portal; running it again is accepted but has no  further effect once the wizard is already completed. It returns the resulting wizard settings, including the  completed flag.
         * @summary Complete the Wizard settings
         * @param {CommonSettingsApiCompleteWizardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for completeWizard operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/complete-wizard/
         * @throws {RequiredError}
         */
        completeWizard(requestParameters: CommonSettingsApiCompleteWizardRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WizardSettingsWrapper> {
            return localVarFp.completeWizard(requestParameters.wizardRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets how the portal responds when a client opens a DocSpace link on a mobile device: always in the browser,  always in the native app, or asking the user to choose each time. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). The handling mode must be one of the documented enum values; anything else is  rejected without being saved. This is a mutating, idempotent call: sending the same mode again leaves the  setting unchanged. It returns the saved deep link settings, including the timestamp of the last change; read  the current value at any time, including anonymously, from `GET api/2.0/settings/deeplink`.
         * @summary Configure the deep link settings
         * @param {CommonSettingsApiConfigureDeepLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for configureDeepLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-deep-link/
         * @throws {RequiredError}
         */
        configureDeepLink(requestParameters: CommonSettingsApiConfigureDeepLinkRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantDeepLinkSettingsWrapper> {
            return localVarFp.configureDeepLink(requestParameters.deepLinkConfigurationRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a custom color theme from the portal by its ID. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). An ID belonging to one of the built-in default themes is not removable; the  call succeeds but leaves the theme list unchanged. If the deleted theme was the currently selected one, the  theme with the lowest remaining ID is selected automatically. This is a mutating, idempotent call: deleting an  ID that is already gone succeeds without error and again leaves nothing changed. It returns the full updated  theme configuration, including the (possibly new) selected theme.
         * @summary Delete a color theme
         * @param {CommonSettingsApiDeletePortalColorThemeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deletePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal-color-theme/
         * @throws {RequiredError}
         */
        deletePortalColorTheme(requestParameters: CommonSettingsApiDeletePortalColorThemeRequest, options?: RawAxiosRequestConfig): AxiosPromise<CustomColorThemesSettingsWrapper> {
            return localVarFp.deletePortalColorTheme(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns how the portal currently responds when a client opens a DocSpace link on a mobile device: always in  the browser, always in the native app, or asking the user to choose. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call. The response supports conditional requests:  send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response  comes back empty instead of resending the settings. Change the mode with `POST api/2.0/settings/deeplink`,  which requires the EditPortalSettings permission.
         * @summary Get the deep link settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getDeepLinkSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deep-link-settings/
         * @throws {RequiredError}
         */
        getDeepLinkSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantDeepLinkSettingsWrapper> {
            return localVarFp.getDeepLinkSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal\'s payment-related configuration: the sales contact email, the URL to buy or extend a  subscription, whether the portal is Standalone, the current license\'s trial status and expiration date, and  the maximum quota quantity that can be purchased at once. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). This is a read-only, idempotent call. It remains reachable even while the  portal\'s own subscription payment is overdue, since this is how the caller finds the link to resolve it.
         * @summary Get the payment settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-settings/
         * @throws {RequiredError}
         */
        getPaymentSettings(options?: RawAxiosRequestConfig): AxiosPromise<PaymentSettingsWrapper> {
            return localVarFp.getPaymentSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal\'s color theme configuration: every saved custom theme, which one is currently selected, and  how many custom themes the plan still allows. No permission is required; anonymous callers can read it too.  This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings. A `limit` of `0` means the plan does not cap the number of custom  themes.
         * @summary Get a color theme
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-color-theme/
         * @throws {RequiredError}
         */
        getPortalColorTheme(options?: RawAxiosRequestConfig): AxiosPromise<CustomColorThemesSettingsWrapper> {
            return localVarFp.getPortalColorTheme(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the hostname the current request arrived on, exactly as sent in the HTTP Host header, so a client  mid-setup can learn the address the portal is actually reachable at. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard claim, of the kind generated during initial portal  setup, and the link is consumed as part of authenticating the request. This is a read-only, idempotent call.  The value reflects whatever the caller connected through, including a reverse proxy\'s public name, and is not  necessarily the tenant\'s configured alias or mapped domain.
         * @summary Get the portal hostname
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalHostname operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-hostname/
         * @throws {RequiredError}
         */
        getPortalHostname(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPortalHostname(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the absolute URL of the portal\'s current logo image, already resolved against the active white-label  branding. Requires an authenticated session; every role, including Guest, can read it. This is a read-only,  idempotent call. The response supports conditional requests: send the standard If-Modified-Since header with  the previous `lastModified` value, and an unchanged response comes back empty instead of resending the same  URL. The URL points at whatever image is currently configured, including the default DocSpace logo when no  custom branding has been set.
         * @summary Get a portal logo
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-logo/
         * @throws {RequiredError}
         */
        getPortalLogo(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPortalLogo(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current portal\'s general configuration: branding, culture, feature flags, and DocSpace/Standalone  mode, everything the client needs to render its shell before or after login. No permission is required, but  the response shape depends on the caller\'s identity. An anonymous caller receives only the public subset  (culture, branding, DocSpace/Standalone flags, deep link data, setup-wizard and join-by-domain hints); once  authenticated, the response also includes tenant-specific fields such as the owner ID, time zone, invitation  limit, AI/banner/dev-tools flags, and, for a DocSpace administrator, the tenant wallet\'s low-balance flag.  This is a read-only, idempotent call. Pass `withPassword=true` to also receive the parameters (`salt`,  iteration count, hash size) used to hash the password client-side before it is sent to the authentication  endpoints; these are only added for an anonymous caller or when explicitly requested, never as part of the  default authenticated response.
         * @summary Get the portal settings
         * @param {CommonSettingsApiGetPortalSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-settings/
         * @throws {RequiredError}
         */
        getPortalSettings(requestParameters: CommonSettingsApiGetPortalSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SettingsWrapper> {
            return localVarFp.getPortalSettings(requestParameters.withpassword, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the base URL of the portal\'s real-time notification hub (Socket.IO), which the client connects to for  live updates such as file changes, presence, or quota alerts. Requires an authenticated session; every role  can read it. This is a read-only, idempotent call. The value comes from server-side configuration and cannot  be changed through this API; an empty `url` means the portal has no notification hub configured and the client  should not attempt to connect.
         * @summary Get the socket settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getSocketSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-socket-settings/
         * @throws {RequiredError}
         */
        getSocketSettings(options?: RawAxiosRequestConfig): AxiosPromise<SocketSettingsWrapper> {
            return localVarFp.getSocketSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the two- or four-letter language codes of every culture currently enabled on the portal (for example  `en-US`), used to populate a language picker before or after login. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call, and the list is not paginated. The response  supports conditional requests: an unchanged result is signaled instead of resending the same list. The set of  enabled cultures is a portal-wide configuration value, not a per-user preference.
         * @summary Get supported languages
         * @param {*} [options] Override http request option.
         * REST API Reference for getSupportedCultures operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-supported-cultures/
         * @throws {RequiredError}
         */
        getSupportedCultures(options?: RawAxiosRequestConfig): AxiosPromise<STRINGArrayWrapper> {
            return localVarFp.getSupportedCultures(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns whether AI functionality (chat, agents, vectorization) is currently available on the portal at all; AI  is enabled by default. Requires an authenticated session; every role can read it. This is a read-only,  idempotent call. When the setting is disabled, every AI-specific endpoint and folder is unavailable regardless  of the caller\'s own permissions; this call only reports the portal-wide switch, not any per-user entitlement.
         * @summary Get the AI access settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantAiAccessSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-ai-access-settings/
         * @throws {RequiredError}
         */
        getTenantAiAccessSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantAiAccessSettingsWrapper> {
            return localVarFp.getTenantAiAccessSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns whether the portal currently allows inviting new members and new guests at all. No permission is  required; anonymous callers can read it too, since the invitation flow itself may run before the caller has  signed in. This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings.
         * @summary Get the user invitation settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantUserInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-user-invitation-settings/
         * @throws {RequiredError}
         */
        getTenantUserInvitationSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantUserInvitationSettingsWrapper> {
            return localVarFp.getTenantUserInvitationSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns every time zone known to the host machine, each with its IANA identifier and a human-readable display  name, ordered from the most negative to the most positive UTC offset. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard or Administrators claim, of the kind generated  during initial portal setup or issued by an administrator, and the link is consumed as part of authenticating  the request. This is a read-only, idempotent call, and the list is not paginated. Use the returned `id` values  wherever the portal expects a time zone identifier; an unrecognized value is rejected there, not here.
         * @summary Get time zones
         * @param {*} [options] Override http request option.
         * REST API Reference for getTimeZones operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-time-zones/
         * @throws {RequiredError}
         */
        getTimeZones(options?: RawAxiosRequestConfig): AxiosPromise<TimezonesRequestsArrayWrapper> {
            return localVarFp.getTimeZones(options).then((request) => request(axios, basePath));
        },
        /**
         * Sets which folder the current user\'s account opens into by default, such as My Documents, the rooms list, or  favorites. Requires an authenticated session; every role may set its own default, and the change never affects  any other user. Only folder types the client actually offers as a landing page are accepted; picking My  Documents (`USER`) as a Guest is rejected too, since guests have no personal storage. This is a mutating,  idempotent call. It returns the saved setting.
         * @summary Set the default folder
         * @param {CommonSettingsApiSaveDefaultFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveDefaultFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-default-folder/
         * @throws {RequiredError}
         */
        saveDefaultFolder(requestParameters: CommonSettingsApiSaveDefaultFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StudioDefaultPageSettingsWrapper> {
            return localVarFp.saveDefaultFolder(requestParameters.defaultProductRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Maps a custom domain name onto the current tenant, or clears the mapping, so the portal becomes reachable  under the caller\'s own DNS name instead of only its default alias. Available only on a Standalone  (self-hosted) installation; on SaaS the call is always refused. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disable the mapping by passing `enable=false`, in which case the domain name  in the request is ignored. A domain that collides with the portal\'s reserved base domain, or otherwise fails  validation, is rejected without changing the current mapping. This is a mutating, idempotent call. On success  the previous domain also stops answering, and any CSP configuration referencing it is updated to the new one.
         * @summary Save the DNS settings
         * @param {CommonSettingsApiSaveDnsSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveDnsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-dns-settings/
         * @throws {RequiredError}
         */
        saveDnsSettings(requestParameters: CommonSettingsApiSaveDnsSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.saveDnsSettings(requestParameters.dnsSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Overwrites the portal\'s trusted mail domain configuration, which controls which email domains are treated as  already verified when a user is invited or self-registers. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). When the requested mode is a custom domain list, every domain is normalized to  lowercase and checked against the expected hostname format; a domain that fails the check, or an empty custom  list, causes the whole call to be rejected without saving anything. For the other modes the domain list in the  request is ignored. The `inviteUsersAsVisitors` flag controls whether users who join through a trusted domain  are added as full members or as visitors, and takes effect on the next join rather than retroactively. This is  a mutating, idempotent call: repeating it with the same body leaves the portal in the same state. On success  it returns a confirmation message, not the saved settings themselves; read them back from  `GET api/2.0/settings`.
         * @summary Save the mail domain settings
         * @param {CommonSettingsApiSaveMailDomainSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveMailDomainSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mail-domain-settings/
         * @throws {RequiredError}
         */
        saveMailDomainSettings(requestParameters: CommonSettingsApiSaveMailDomainSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.saveMailDomainSettings(requestParameters.mailDomainSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds or updates a custom color theme, or changes which theme is selected, for the whole portal. Requires Owner  or DocSpaceAdmin (the EditPortalSettings permission). Pass `theme` to create or edit one: an existing theme is  matched and updated by its ID, a new one is appended, and an ID that collides with a built-in default theme is  treated as a request to create a new custom theme instead of overwriting the default. Once the plan\'s  custom-theme limit is reached, a new theme is silently not added rather than rejected with an error, so check  the returned `themes` count against `limit` before assuming it was saved. Pass `selected` to switch the active  theme; an ID that does not match any existing theme is ignored. This is a mutating call, not strictly  idempotent once the limit has been reached. It returns the full updated theme configuration.
         * @summary Save a color theme
         * @param {CommonSettingsApiSavePortalColorThemeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for savePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-portal-color-theme/
         * @throws {RequiredError}
         */
        savePortalColorTheme(requestParameters: CommonSettingsApiSavePortalColorThemeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<CustomColorThemesSettingsWrapper> {
            return localVarFp.savePortalColorTheme(requestParameters.customColorThemesSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Turns AI functionality (chat, agents, vectorization) on or off for the whole portal; AI is enabled by default.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other caller is refused. Disabling  it immediately hides the AI Agents folder from root folder listings, makes AI status checks report disabled,  and makes AI chat endpoints unreachable for every user on the tenant, not only the caller. This is a mutating,  idempotent, portal-wide call, and the change is pushed to already-connected clients over the real-time  notification hub rather than waiting for their next request. It returns the saved setting.
         * @summary Set the AI access settings
         * @param {CommonSettingsApiSetTenantAiAccessSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setTenantAiAccessSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-ai-access-settings/
         * @throws {RequiredError}
         */
        setTenantAiAccessSettings(requestParameters: CommonSettingsApiSetTenantAiAccessSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantAiAccessSettingsWrapper> {
            return localVarFp.setTenantAiAccessSettings(requestParameters.tenantAiAccessSettingsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the current user\'s own preference for whether the email confirmation prompt is displayed on their  account. Requires an authenticated session; every role may change its own setting, and the change never  affects any other user. This is a mutating, idempotent call. It returns the settings exactly as submitted,  without validating them against the account\'s actual email confirmation state, so `show` can be set to `true`  even after the address is already confirmed.
         * @summary Update the email activation settings
         * @param {CommonSettingsApiUpdateEmailActivationSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateEmailActivationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-email-activation-settings/
         * @throws {RequiredError}
         */
        updateEmailActivationSettings(requestParameters: CommonSettingsApiUpdateEmailActivationSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmailActivationSettingsWrapper> {
            return localVarFp.updateEmailActivationSettings(requestParameters.emailActivationSettings, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets whether the portal allows inviting new members and new guests. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disabling member or guest invitations only blocks creating new invitations  going forward; it does not revoke links already issued or remove members already invited. This is a mutating,  idempotent, portal-wide call. It returns the saved setting; read the current value at any time, including  anonymously, from `GET api/2.0/settings/invitationsettings`.
         * @summary Update the user invitation settings
         * @param {CommonSettingsApiUpdateInvitationSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-settings/
         * @throws {RequiredError}
         */
        updateInvitationSettings(requestParameters: CommonSettingsApiUpdateInvitationSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantUserInvitationSettingsWrapper> {
            return localVarFp.updateInvitationSettings(requestParameters.tenantUserInvitationSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for completeWizard operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiCompleteWizardRequest
 */
export interface CommonSettingsApiCompleteWizardRequest {
    /**
     * 
     * @type {WizardRequestsDto}
     * @memberof CommonSettingsApiCompleteWizard
     */
    readonly wizardRequestsDto?: WizardRequestsDto
}

/**
 * Request parameters for configureDeepLink operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiConfigureDeepLinkRequest
 */
export interface CommonSettingsApiConfigureDeepLinkRequest {
    /**
     * 
     * @type {DeepLinkConfigurationRequestsDto}
     * @memberof CommonSettingsApiConfigureDeepLink
     */
    readonly deepLinkConfigurationRequestsDto?: DeepLinkConfigurationRequestsDto
}

/**
 * Request parameters for deletePortalColorTheme operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiDeletePortalColorThemeRequest
 */
export interface CommonSettingsApiDeletePortalColorThemeRequest {
    /**
     * The theme to remove, by theme ID. An ID belonging to a built-in theme leaves the list untouched, and so does  one that is already gone - neither is reported as an error. Removing the theme currently in use moves the  portal to the remaining theme with the lowest ID.
     * @type {number}
     * @memberof CommonSettingsApiDeletePortalColorTheme
     */
    readonly id: number
}

/**
 * Request parameters for getPortalSettings operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiGetPortalSettingsRequest
 */
export interface CommonSettingsApiGetPortalSettingsRequest {
    /**
     * Whether the answer also carries the salt, iteration count and hash size a client needs to hash a password  before sending it to the authentication operations. They are included for an anonymous caller anyway; for a  signed-in one they are left out unless this is set.
     * @type {boolean}
     * @memberof CommonSettingsApiGetPortalSettings
     */
    readonly withpassword?: boolean
}

/**
 * Request parameters for saveDefaultFolder operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiSaveDefaultFolderRequest
 */
export interface CommonSettingsApiSaveDefaultFolderRequest {
    /**
     * 
     * @type {DefaultProductRequestDto}
     * @memberof CommonSettingsApiSaveDefaultFolder
     */
    readonly defaultProductRequestDto?: DefaultProductRequestDto
}

/**
 * Request parameters for saveDnsSettings operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiSaveDnsSettingsRequest
 */
export interface CommonSettingsApiSaveDnsSettingsRequest {
    /**
     * 
     * @type {DnsSettingsRequestsDto}
     * @memberof CommonSettingsApiSaveDnsSettings
     */
    readonly dnsSettingsRequestsDto?: DnsSettingsRequestsDto
}

/**
 * Request parameters for saveMailDomainSettings operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiSaveMailDomainSettingsRequest
 */
export interface CommonSettingsApiSaveMailDomainSettingsRequest {
    /**
     * 
     * @type {MailDomainSettingsRequestsDto}
     * @memberof CommonSettingsApiSaveMailDomainSettings
     */
    readonly mailDomainSettingsRequestsDto?: MailDomainSettingsRequestsDto
}

/**
 * Request parameters for savePortalColorTheme operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiSavePortalColorThemeRequest
 */
export interface CommonSettingsApiSavePortalColorThemeRequest {
    /**
     * 
     * @type {CustomColorThemesSettingsRequestsDto}
     * @memberof CommonSettingsApiSavePortalColorTheme
     */
    readonly customColorThemesSettingsRequestsDto?: CustomColorThemesSettingsRequestsDto
}

/**
 * Request parameters for setTenantAiAccessSettings operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiSetTenantAiAccessSettingsRequest
 */
export interface CommonSettingsApiSetTenantAiAccessSettingsRequest {
    /**
     * 
     * @type {TenantAiAccessSettingsDto}
     * @memberof CommonSettingsApiSetTenantAiAccessSettings
     */
    readonly tenantAiAccessSettingsDto?: TenantAiAccessSettingsDto
}

/**
 * Request parameters for updateEmailActivationSettings operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiUpdateEmailActivationSettingsRequest
 */
export interface CommonSettingsApiUpdateEmailActivationSettingsRequest {
    /**
     * 
     * @type {EmailActivationSettings}
     * @memberof CommonSettingsApiUpdateEmailActivationSettings
     */
    readonly emailActivationSettings?: EmailActivationSettings
}

/**
 * Request parameters for updateInvitationSettings operation in CommonSettingsApi.
 * @export
 * @interface CommonSettingsApiUpdateInvitationSettingsRequest
 */
export interface CommonSettingsApiUpdateInvitationSettingsRequest {
    /**
     * 
     * @type {TenantUserInvitationSettingsRequestDto}
     * @memberof CommonSettingsApiUpdateInvitationSettings
     */
    readonly tenantUserInvitationSettingsRequestDto?: TenantUserInvitationSettingsRequestDto
}

/**
 * CommonSettingsApi - object-oriented interface
 * @export
 * @class CommonSettingsApi
 * @extends {BaseAPI}
 */
export class CommonSettingsApi extends BaseAPI {
    /**
     * Dismisses the administrator helper tip for the caller, so it is not shown again on this account. Available  only to a DocSpace administrator, which includes the portal Owner, on a Standalone (self-hosted) installation  running outside white-label custom mode; every other caller is refused. This is a mutating, idempotent call  scoped to the calling account only; it never affects other administrators. It returns no data on success.
     * @summary Close the admin helper
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public closeAdminHelper(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).closeAdminHelper(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes the initial portal setup wizard: sets the owner\'s password and locale, applies the supplied license  if one is required, and marks the wizard as completed so it is not shown again. This call is not for a normal  logged-in session: it requires a confirmation link bearing the Wizard claim, of the kind issued when a new  portal is created, and the link is consumed as part of authenticating the request; the caller must also hold  the EditPortalSettings permission. An empty password or a malformed email address is rejected without  completing the wizard, and so is a missing, invalid, or expired license, or a license whose user quota does  not cover the portal. This call is meant to run once per portal; running it again is accepted but has no  further effect once the wizard is already completed. It returns the resulting wizard settings, including the  completed flag.
     * @summary Complete the Wizard settings
     * @param {SettingsCommonSettingsApiCompleteWizardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public completeWizard(requestParameters: CommonSettingsApiCompleteWizardRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).completeWizard(requestParameters.wizardRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets how the portal responds when a client opens a DocSpace link on a mobile device: always in the browser,  always in the native app, or asking the user to choose each time. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). The handling mode must be one of the documented enum values; anything else is  rejected without being saved. This is a mutating, idempotent call: sending the same mode again leaves the  setting unchanged. It returns the saved deep link settings, including the timestamp of the last change; read  the current value at any time, including anonymously, from `GET api/2.0/settings/deeplink`.
     * @summary Configure the deep link settings
     * @param {SettingsCommonSettingsApiConfigureDeepLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public configureDeepLink(requestParameters: CommonSettingsApiConfigureDeepLinkRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).configureDeepLink(requestParameters.deepLinkConfigurationRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a custom color theme from the portal by its ID. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). An ID belonging to one of the built-in default themes is not removable; the  call succeeds but leaves the theme list unchanged. If the deleted theme was the currently selected one, the  theme with the lowest remaining ID is selected automatically. This is a mutating, idempotent call: deleting an  ID that is already gone succeeds without error and again leaves nothing changed. It returns the full updated  theme configuration, including the (possibly new) selected theme.
     * @summary Delete a color theme
     * @param {SettingsCommonSettingsApiDeletePortalColorThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public deletePortalColorTheme(requestParameters: CommonSettingsApiDeletePortalColorThemeRequest, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).deletePortalColorTheme(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns how the portal currently responds when a client opens a DocSpace link on a mobile device: always in  the browser, always in the native app, or asking the user to choose. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call. The response supports conditional requests:  send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response  comes back empty instead of resending the settings. Change the mode with `POST api/2.0/settings/deeplink`,  which requires the EditPortalSettings permission.
     * @summary Get the deep link settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getDeepLinkSettings(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getDeepLinkSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal\'s payment-related configuration: the sales contact email, the URL to buy or extend a  subscription, whether the portal is Standalone, the current license\'s trial status and expiration date, and  the maximum quota quantity that can be purchased at once. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). This is a read-only, idempotent call. It remains reachable even while the  portal\'s own subscription payment is overdue, since this is how the caller finds the link to resolve it.
     * @summary Get the payment settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getPaymentSettings(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getPaymentSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal\'s color theme configuration: every saved custom theme, which one is currently selected, and  how many custom themes the plan still allows. No permission is required; anonymous callers can read it too.  This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings. A `limit` of `0` means the plan does not cap the number of custom  themes.
     * @summary Get a color theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getPortalColorTheme(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getPortalColorTheme(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the hostname the current request arrived on, exactly as sent in the HTTP Host header, so a client  mid-setup can learn the address the portal is actually reachable at. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard claim, of the kind generated during initial portal  setup, and the link is consumed as part of authenticating the request. This is a read-only, idempotent call.  The value reflects whatever the caller connected through, including a reverse proxy\'s public name, and is not  necessarily the tenant\'s configured alias or mapped domain.
     * @summary Get the portal hostname
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getPortalHostname(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getPortalHostname(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the absolute URL of the portal\'s current logo image, already resolved against the active white-label  branding. Requires an authenticated session; every role, including Guest, can read it. This is a read-only,  idempotent call. The response supports conditional requests: send the standard If-Modified-Since header with  the previous `lastModified` value, and an unchanged response comes back empty instead of resending the same  URL. The URL points at whatever image is currently configured, including the default DocSpace logo when no  custom branding has been set.
     * @summary Get a portal logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getPortalLogo(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getPortalLogo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current portal\'s general configuration: branding, culture, feature flags, and DocSpace/Standalone  mode, everything the client needs to render its shell before or after login. No permission is required, but  the response shape depends on the caller\'s identity. An anonymous caller receives only the public subset  (culture, branding, DocSpace/Standalone flags, deep link data, setup-wizard and join-by-domain hints); once  authenticated, the response also includes tenant-specific fields such as the owner ID, time zone, invitation  limit, AI/banner/dev-tools flags, and, for a DocSpace administrator, the tenant wallet\'s low-balance flag.  This is a read-only, idempotent call. Pass `withPassword=true` to also receive the parameters (`salt`,  iteration count, hash size) used to hash the password client-side before it is sent to the authentication  endpoints; these are only added for an anonymous caller or when explicitly requested, never as part of the  default authenticated response.
     * @summary Get the portal settings
     * @param {SettingsCommonSettingsApiGetPortalSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getPortalSettings(requestParameters: CommonSettingsApiGetPortalSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getPortalSettings(requestParameters.withpassword, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the base URL of the portal\'s real-time notification hub (Socket.IO), which the client connects to for  live updates such as file changes, presence, or quota alerts. Requires an authenticated session; every role  can read it. This is a read-only, idempotent call. The value comes from server-side configuration and cannot  be changed through this API; an empty `url` means the portal has no notification hub configured and the client  should not attempt to connect.
     * @summary Get the socket settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getSocketSettings(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getSocketSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the two- or four-letter language codes of every culture currently enabled on the portal (for example  `en-US`), used to populate a language picker before or after login. No permission is required; anonymous  callers can read it too. This is a read-only, idempotent call, and the list is not paginated. The response  supports conditional requests: an unchanged result is signaled instead of resending the same list. The set of  enabled cultures is a portal-wide configuration value, not a per-user preference.
     * @summary Get supported languages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getSupportedCultures(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getSupportedCultures(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns whether AI functionality (chat, agents, vectorization) is currently available on the portal at all; AI  is enabled by default. Requires an authenticated session; every role can read it. This is a read-only,  idempotent call. When the setting is disabled, every AI-specific endpoint and folder is unavailable regardless  of the caller\'s own permissions; this call only reports the portal-wide switch, not any per-user entitlement.
     * @summary Get the AI access settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getTenantAiAccessSettings(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getTenantAiAccessSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns whether the portal currently allows inviting new members and new guests at all. No permission is  required; anonymous callers can read it too, since the invitation flow itself may run before the caller has  signed in. This is a read-only, idempotent call. The response supports conditional requests: send the standard  If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty  instead of resending the same settings.
     * @summary Get the user invitation settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getTenantUserInvitationSettings(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getTenantUserInvitationSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns every time zone known to the host machine, each with its IANA identifier and a human-readable display  name, ordered from the most negative to the most positive UTC offset. This call is not for a normal logged-in  session: it requires a confirmation link bearing the Wizard or Administrators claim, of the kind generated  during initial portal setup or issued by an administrator, and the link is consumed as part of authenticating  the request. This is a read-only, idempotent call, and the list is not paginated. Use the returned `id` values  wherever the portal expects a time zone identifier; an unrecognized value is rejected there, not here.
     * @summary Get time zones
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public getTimeZones(options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).getTimeZones(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets which folder the current user\'s account opens into by default, such as My Documents, the rooms list, or  favorites. Requires an authenticated session; every role may set its own default, and the change never affects  any other user. Only folder types the client actually offers as a landing page are accepted; picking My  Documents (`USER`) as a Guest is rejected too, since guests have no personal storage. This is a mutating,  idempotent call. It returns the saved setting.
     * @summary Set the default folder
     * @param {SettingsCommonSettingsApiSaveDefaultFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public saveDefaultFolder(requestParameters: CommonSettingsApiSaveDefaultFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).saveDefaultFolder(requestParameters.defaultProductRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Maps a custom domain name onto the current tenant, or clears the mapping, so the portal becomes reachable  under the caller\'s own DNS name instead of only its default alias. Available only on a Standalone  (self-hosted) installation; on SaaS the call is always refused. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disable the mapping by passing `enable=false`, in which case the domain name  in the request is ignored. A domain that collides with the portal\'s reserved base domain, or otherwise fails  validation, is rejected without changing the current mapping. This is a mutating, idempotent call. On success  the previous domain also stops answering, and any CSP configuration referencing it is updated to the new one.
     * @summary Save the DNS settings
     * @param {SettingsCommonSettingsApiSaveDnsSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public saveDnsSettings(requestParameters: CommonSettingsApiSaveDnsSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).saveDnsSettings(requestParameters.dnsSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Overwrites the portal\'s trusted mail domain configuration, which controls which email domains are treated as  already verified when a user is invited or self-registers. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). When the requested mode is a custom domain list, every domain is normalized to  lowercase and checked against the expected hostname format; a domain that fails the check, or an empty custom  list, causes the whole call to be rejected without saving anything. For the other modes the domain list in the  request is ignored. The `inviteUsersAsVisitors` flag controls whether users who join through a trusted domain  are added as full members or as visitors, and takes effect on the next join rather than retroactively. This is  a mutating, idempotent call: repeating it with the same body leaves the portal in the same state. On success  it returns a confirmation message, not the saved settings themselves; read them back from  `GET api/2.0/settings`.
     * @summary Save the mail domain settings
     * @param {SettingsCommonSettingsApiSaveMailDomainSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public saveMailDomainSettings(requestParameters: CommonSettingsApiSaveMailDomainSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).saveMailDomainSettings(requestParameters.mailDomainSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds or updates a custom color theme, or changes which theme is selected, for the whole portal. Requires Owner  or DocSpaceAdmin (the EditPortalSettings permission). Pass `theme` to create or edit one: an existing theme is  matched and updated by its ID, a new one is appended, and an ID that collides with a built-in default theme is  treated as a request to create a new custom theme instead of overwriting the default. Once the plan\'s  custom-theme limit is reached, a new theme is silently not added rather than rejected with an error, so check  the returned `themes` count against `limit` before assuming it was saved. Pass `selected` to switch the active  theme; an ID that does not match any existing theme is ignored. This is a mutating call, not strictly  idempotent once the limit has been reached. It returns the full updated theme configuration.
     * @summary Save a color theme
     * @param {SettingsCommonSettingsApiSavePortalColorThemeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public savePortalColorTheme(requestParameters: CommonSettingsApiSavePortalColorThemeRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).savePortalColorTheme(requestParameters.customColorThemesSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Turns AI functionality (chat, agents, vectorization) on or off for the whole portal; AI is enabled by default.  Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other caller is refused. Disabling  it immediately hides the AI Agents folder from root folder listings, makes AI status checks report disabled,  and makes AI chat endpoints unreachable for every user on the tenant, not only the caller. This is a mutating,  idempotent, portal-wide call, and the change is pushed to already-connected clients over the real-time  notification hub rather than waiting for their next request. It returns the saved setting.
     * @summary Set the AI access settings
     * @param {SettingsCommonSettingsApiSetTenantAiAccessSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public setTenantAiAccessSettings(requestParameters: CommonSettingsApiSetTenantAiAccessSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).setTenantAiAccessSettings(requestParameters.tenantAiAccessSettingsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the current user\'s own preference for whether the email confirmation prompt is displayed on their  account. Requires an authenticated session; every role may change its own setting, and the change never  affects any other user. This is a mutating, idempotent call. It returns the settings exactly as submitted,  without validating them against the account\'s actual email confirmation state, so `show` can be set to `true`  even after the address is already confirmed.
     * @summary Update the email activation settings
     * @param {SettingsCommonSettingsApiUpdateEmailActivationSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public updateEmailActivationSettings(requestParameters: CommonSettingsApiUpdateEmailActivationSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).updateEmailActivationSettings(requestParameters.emailActivationSettings, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets whether the portal allows inviting new members and new guests. Requires Owner or DocSpaceAdmin (the  EditPortalSettings permission). Disabling member or guest invitations only blocks creating new invitations  going forward; it does not revoke links already issued or remove members already invited. This is a mutating,  idempotent, portal-wide call. It returns the saved setting; read the current value at any time, including  anonymously, from `GET api/2.0/settings/invitationsettings`.
     * @summary Update the user invitation settings
     * @param {SettingsCommonSettingsApiUpdateInvitationSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonSettingsApi
     */
    public updateInvitationSettings(requestParameters: CommonSettingsApiUpdateInvitationSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return CommonSettingsApiFp(this.configuration).updateInvitationSettings(requestParameters.tenantUserInvitationSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

