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
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { SsoSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { SsoSettingsV2ConstantsWrapper } from '../../models';
// @ts-ignore
import type { SsoSettingsV2Wrapper } from '../../models';
/**
 * SSOApi - axios parameter creator
 * @export
 */
export const SSOApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the built-in SSO configuration a portal starts from: empty identity provider and service provider  sections with the stock SAML settings already filled in (HTTP-POST binding, transient name ID format, RSA-SHA1  signing, AES-128 encryption), the default attribute mapping of `givenName`, `sn` and `mail`, the  `Single Sign-on` login label, new accounts typed as user, and SSO switched off. Use it as the template for a  new configuration: fill in the identity provider entity ID, sign-in URL and certificates, then send the result  to `POST api/2.0/settings/ssov2`. The values are the same for every portal and do not depend on what is  currently saved, nothing is written, and the call is safe to repeat. The caller needs the permission to edit  portal settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to  include Single Sign-On. This operation changes nothing by itself: to actually discard the configuration in  use, call `DELETE api/2.0/settings/ssov2`, and to read what is configured now, call  `GET api/2.0/settings/ssov2`.
         * @summary Get the default SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-sso-settings-v2/
         */
        getDefaultSsoSettingsV2: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/ssov2/default`;
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
         * Returns the SAML Single Sign-On configuration of the current portal: the identity provider endpoints and  certificates, the service provider certificates, the attribute mapping, the login button label and the user  type new SSO accounts get. Anonymous callers are accepted, but an unauthenticated one receives only  `hideAuthPage`, which tells the sign-in page whether the built-in login form has to be hidden; every other  field stays empty, so read the full configuration with an authenticated request. An authenticated caller needs  the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and the  portal plan has to include Single Sign-On, otherwise the call is refused. The operation only reads and is safe  to repeat. When the login label was never set, the response carries the built-in `Single Sign-on` instead of  an empty string, and `enableSso` is null until the settings are saved for the first time. Use  `GET api/2.0/settings/ssov2/default` for a blank configuration to start from, and  `GET api/2.0/settings/ssov2/constants` for the values the SAML fields accept.
         * @summary Get the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2/
         */
        getSsoSettingsV2: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/ssov2`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns every literal value the SAML fields of the SSO configuration accept, grouped by the field it belongs  to: name ID formats, request bindings, signing and encryption algorithms, and what a service provider or  identity provider certificate can be used for. The values are the SAML URNs and algorithm URIs themselves, so  they can be written into the configuration exactly as they come back; picking one from the matching group is  the point, because `POST api/2.0/settings/ssov2` stores these fields as they are given and a misspelled value  therefore surfaces only later, as a failing sign-in. The list is a fixed part of the product: it is the same  for every portal, does not depend on the saved settings and does not change between calls within a release, so  it can be cached. The operation only reads, is safe to repeat and needs nothing beyond an authenticated  caller. Use it together with `GET api/2.0/settings/ssov2/default`, which already has the usual values set.
         * @summary Get the SSO settings constants
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2Constants operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2-constants/
         */
        getSsoSettingsV2Constants: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/ssov2/constants`;
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
         * Discards the SAML Single Sign-On configuration of the current portal, stores the built-in default one in its  place and returns what was stored, which is the same content as `GET api/2.0/settings/ssov2/default`. This is  destructive and cannot be undone through the API: the identity provider addresses, both certificate sets, the  attribute mapping and the login label are gone and SSO is left switched off, so keep a copy of  `GET api/2.0/settings/ssov2` first if the configuration may be needed again. Every account that signed in  through SSO is unlinked and becomes an ordinary account that keeps its data but authenticates with portal  credentials from then on, and its external contacts are converted the same way. Repeating the call is  harmless, as the second one stores the same defaults again. The caller needs the permission to edit portal  settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to include  Single Sign-On, otherwise the call is refused. To switch SSO off while keeping the configuration, send it back  to `POST api/2.0/settings/ssov2` with SSO disabled instead. The reset is recorded in the audit trail.
         * @summary Reset the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-sso-settings-v2/
         */
        resetSsoSettingsV2: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/ssov2`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the whole SAML Single Sign-On configuration of the current portal with the one passed as a JSON  object in `serializeSettings`, and returns the configuration as it was stored. The payload is a complete  configuration rather than a patch: fields left out are stored empty, so send back a changed copy of  `GET api/2.0/settings/ssov2`, or start from `GET api/2.0/settings/ssov2/default`. The identity provider entity  ID and sign-in URL are required, the sign-in and sign-out URLs have to be absolute http or https addresses,  and the attribute mapping has to name the fields for first name, last name and email; otherwise nothing is  saved. The caller has to be allowed to edit portal settings (portal owner or DocSpace admin), and the portal  plan has to include Single Sign-On. Some values are normalised on the way in: a `usersType` other than 1 (room  admin), 3 (DocSpace admin) or 4 (user) becomes 4, an empty login label becomes `Single Sign-on`, and a longer  one is cut to 100 characters. Saving with SSO switched off unlinks every existing SSO account and turns it  into an ordinary one; switching SSO back on later does not restore those links. The change is recorded in the  audit trail.
         * @summary Save the SSO settings
         * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-sso-settings-v2/
         */
        saveSsoSettingsV2: async (ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/ssov2`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ssoSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SSOApi - functional programming interface
 * @export
 */
export const SSOApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SSOApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the built-in SSO configuration a portal starts from: empty identity provider and service provider  sections with the stock SAML settings already filled in (HTTP-POST binding, transient name ID format, RSA-SHA1  signing, AES-128 encryption), the default attribute mapping of `givenName`, `sn` and `mail`, the  `Single Sign-on` login label, new accounts typed as user, and SSO switched off. Use it as the template for a  new configuration: fill in the identity provider entity ID, sign-in URL and certificates, then send the result  to `POST api/2.0/settings/ssov2`. The values are the same for every portal and do not depend on what is  currently saved, nothing is written, and the call is safe to repeat. The caller needs the permission to edit  portal settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to  include Single Sign-On. This operation changes nothing by itself: to actually discard the configuration in  use, call `DELETE api/2.0/settings/ssov2`, and to read what is configured now, call  `GET api/2.0/settings/ssov2`.
         * @summary Get the default SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-sso-settings-v2/
         */
        async getDefaultSsoSettingsV2(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultSsoSettingsV2(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.getDefaultSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the SAML Single Sign-On configuration of the current portal: the identity provider endpoints and  certificates, the service provider certificates, the attribute mapping, the login button label and the user  type new SSO accounts get. Anonymous callers are accepted, but an unauthenticated one receives only  `hideAuthPage`, which tells the sign-in page whether the built-in login form has to be hidden; every other  field stays empty, so read the full configuration with an authenticated request. An authenticated caller needs  the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and the  portal plan has to include Single Sign-On, otherwise the call is refused. The operation only reads and is safe  to repeat. When the login label was never set, the response carries the built-in `Single Sign-on` instead of  an empty string, and `enableSso` is null until the settings are saved for the first time. Use  `GET api/2.0/settings/ssov2/default` for a blank configuration to start from, and  `GET api/2.0/settings/ssov2/constants` for the values the SAML fields accept.
         * @summary Get the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2/
         */
        async getSsoSettingsV2(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSsoSettingsV2(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.getSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns every literal value the SAML fields of the SSO configuration accept, grouped by the field it belongs  to: name ID formats, request bindings, signing and encryption algorithms, and what a service provider or  identity provider certificate can be used for. The values are the SAML URNs and algorithm URIs themselves, so  they can be written into the configuration exactly as they come back; picking one from the matching group is  the point, because `POST api/2.0/settings/ssov2` stores these fields as they are given and a misspelled value  therefore surfaces only later, as a failing sign-in. The list is a fixed part of the product: it is the same  for every portal, does not depend on the saved settings and does not change between calls within a release, so  it can be cached. The operation only reads, is safe to repeat and needs nothing beyond an authenticated  caller. Use it together with `GET api/2.0/settings/ssov2/default`, which already has the usual values set.
         * @summary Get the SSO settings constants
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2Constants operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2-constants/
         */
        async getSsoSettingsV2Constants(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2ConstantsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSsoSettingsV2Constants(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.getSsoSettingsV2Constants']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Discards the SAML Single Sign-On configuration of the current portal, stores the built-in default one in its  place and returns what was stored, which is the same content as `GET api/2.0/settings/ssov2/default`. This is  destructive and cannot be undone through the API: the identity provider addresses, both certificate sets, the  attribute mapping and the login label are gone and SSO is left switched off, so keep a copy of  `GET api/2.0/settings/ssov2` first if the configuration may be needed again. Every account that signed in  through SSO is unlinked and becomes an ordinary account that keeps its data but authenticates with portal  credentials from then on, and its external contacts are converted the same way. Repeating the call is  harmless, as the second one stores the same defaults again. The caller needs the permission to edit portal  settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to include  Single Sign-On, otherwise the call is refused. To switch SSO off while keeping the configuration, send it back  to `POST api/2.0/settings/ssov2` with SSO disabled instead. The reset is recorded in the audit trail.
         * @summary Reset the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-sso-settings-v2/
         */
        async resetSsoSettingsV2(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetSsoSettingsV2(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.resetSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the whole SAML Single Sign-On configuration of the current portal with the one passed as a JSON  object in `serializeSettings`, and returns the configuration as it was stored. The payload is a complete  configuration rather than a patch: fields left out are stored empty, so send back a changed copy of  `GET api/2.0/settings/ssov2`, or start from `GET api/2.0/settings/ssov2/default`. The identity provider entity  ID and sign-in URL are required, the sign-in and sign-out URLs have to be absolute http or https addresses,  and the attribute mapping has to name the fields for first name, last name and email; otherwise nothing is  saved. The caller has to be allowed to edit portal settings (portal owner or DocSpace admin), and the portal  plan has to include Single Sign-On. Some values are normalised on the way in: a `usersType` other than 1 (room  admin), 3 (DocSpace admin) or 4 (user) becomes 4, an empty login label becomes `Single Sign-on`, and a longer  one is cut to 100 characters. Saving with SSO switched off unlinks every existing SSO account and turns it  into an ordinary one; switching SSO back on later does not restore those links. The change is recorded in the  audit trail.
         * @summary Save the SSO settings
         * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-sso-settings-v2/
         */
        async saveSsoSettingsV2(ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveSsoSettingsV2(ssoSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SSOApi.saveSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SSOApi - factory interface
 * @export
 */
export const SSOApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SSOApiFp(configuration)
    return {
        /**
         * Returns the built-in SSO configuration a portal starts from: empty identity provider and service provider  sections with the stock SAML settings already filled in (HTTP-POST binding, transient name ID format, RSA-SHA1  signing, AES-128 encryption), the default attribute mapping of `givenName`, `sn` and `mail`, the  `Single Sign-on` login label, new accounts typed as user, and SSO switched off. Use it as the template for a  new configuration: fill in the identity provider entity ID, sign-in URL and certificates, then send the result  to `POST api/2.0/settings/ssov2`. The values are the same for every portal and do not depend on what is  currently saved, nothing is written, and the call is safe to repeat. The caller needs the permission to edit  portal settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to  include Single Sign-On. This operation changes nothing by itself: to actually discard the configuration in  use, call `DELETE api/2.0/settings/ssov2`, and to read what is configured now, call  `GET api/2.0/settings/ssov2`.
         * @summary Get the default SSO settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getDefaultSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-sso-settings-v2/
         * @throws {RequiredError}
         */
        getDefaultSsoSettingsV2(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.getDefaultSsoSettingsV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the SAML Single Sign-On configuration of the current portal: the identity provider endpoints and  certificates, the service provider certificates, the attribute mapping, the login button label and the user  type new SSO accounts get. Anonymous callers are accepted, but an unauthenticated one receives only  `hideAuthPage`, which tells the sign-in page whether the built-in login form has to be hidden; every other  field stays empty, so read the full configuration with an authenticated request. An authenticated caller needs  the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and the  portal plan has to include Single Sign-On, otherwise the call is refused. The operation only reads and is safe  to repeat. When the login label was never set, the response carries the built-in `Single Sign-on` instead of  an empty string, and `enableSso` is null until the settings are saved for the first time. Use  `GET api/2.0/settings/ssov2/default` for a blank configuration to start from, and  `GET api/2.0/settings/ssov2/constants` for the values the SAML fields accept.
         * @summary Get the SSO settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2/
         * @throws {RequiredError}
         */
        getSsoSettingsV2(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.getSsoSettingsV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns every literal value the SAML fields of the SSO configuration accept, grouped by the field it belongs  to: name ID formats, request bindings, signing and encryption algorithms, and what a service provider or  identity provider certificate can be used for. The values are the SAML URNs and algorithm URIs themselves, so  they can be written into the configuration exactly as they come back; picking one from the matching group is  the point, because `POST api/2.0/settings/ssov2` stores these fields as they are given and a misspelled value  therefore surfaces only later, as a failing sign-in. The list is a fixed part of the product: it is the same  for every portal, does not depend on the saved settings and does not change between calls within a release, so  it can be cached. The operation only reads, is safe to repeat and needs nothing beyond an authenticated  caller. Use it together with `GET api/2.0/settings/ssov2/default`, which already has the usual values set.
         * @summary Get the SSO settings constants
         * @param {*} [options] Override http request option.
         * REST API Reference for getSsoSettingsV2Constants operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2-constants/
         * @throws {RequiredError}
         */
        getSsoSettingsV2Constants(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2ConstantsWrapper> {
            return localVarFp.getSsoSettingsV2Constants(options).then((request) => request(axios, basePath));
        },
        /**
         * Discards the SAML Single Sign-On configuration of the current portal, stores the built-in default one in its  place and returns what was stored, which is the same content as `GET api/2.0/settings/ssov2/default`. This is  destructive and cannot be undone through the API: the identity provider addresses, both certificate sets, the  attribute mapping and the login label are gone and SSO is left switched off, so keep a copy of  `GET api/2.0/settings/ssov2` first if the configuration may be needed again. Every account that signed in  through SSO is unlinked and becomes an ordinary account that keeps its data but authenticates with portal  credentials from then on, and its external contacts are converted the same way. Repeating the call is  harmless, as the second one stores the same defaults again. The caller needs the permission to edit portal  settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to include  Single Sign-On, otherwise the call is refused. To switch SSO off while keeping the configuration, send it back  to `POST api/2.0/settings/ssov2` with SSO disabled instead. The reset is recorded in the audit trail.
         * @summary Reset the SSO settings
         * @param {*} [options] Override http request option.
         * REST API Reference for resetSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-sso-settings-v2/
         * @throws {RequiredError}
         */
        resetSsoSettingsV2(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.resetSsoSettingsV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the whole SAML Single Sign-On configuration of the current portal with the one passed as a JSON  object in `serializeSettings`, and returns the configuration as it was stored. The payload is a complete  configuration rather than a patch: fields left out are stored empty, so send back a changed copy of  `GET api/2.0/settings/ssov2`, or start from `GET api/2.0/settings/ssov2/default`. The identity provider entity  ID and sign-in URL are required, the sign-in and sign-out URLs have to be absolute http or https addresses,  and the attribute mapping has to name the fields for first name, last name and email; otherwise nothing is  saved. The caller has to be allowed to edit portal settings (portal owner or DocSpace admin), and the portal  plan has to include Single Sign-On. Some values are normalised on the way in: a `usersType` other than 1 (room  admin), 3 (DocSpace admin) or 4 (user) becomes 4, an empty login label becomes `Single Sign-on`, and a longer  one is cut to 100 characters. Saving with SSO switched off unlinks every existing SSO account and turns it  into an ordinary one; switching SSO back on later does not restore those links. The change is recorded in the  audit trail.
         * @summary Save the SSO settings
         * @param {SSOApiSaveSsoSettingsV2Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-sso-settings-v2/
         * @throws {RequiredError}
         */
        saveSsoSettingsV2(requestParameters: SSOApiSaveSsoSettingsV2Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.saveSsoSettingsV2(requestParameters.ssoSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for saveSsoSettingsV2 operation in SSOApi.
 * @export
 * @interface SSOApiSaveSsoSettingsV2Request
 */
export interface SSOApiSaveSsoSettingsV2Request {
    /**
     * 
     * @type {SsoSettingsRequestsDto}
     * @memberof SSOApiSaveSsoSettingsV2
     */
    readonly ssoSettingsRequestsDto?: SsoSettingsRequestsDto
}

/**
 * SSOApi - object-oriented interface
 * @export
 * @class SSOApi
 * @extends {BaseAPI}
 */
export class SSOApi extends BaseAPI {
    /**
     * Returns the built-in SSO configuration a portal starts from: empty identity provider and service provider  sections with the stock SAML settings already filled in (HTTP-POST binding, transient name ID format, RSA-SHA1  signing, AES-128 encryption), the default attribute mapping of `givenName`, `sn` and `mail`, the  `Single Sign-on` login label, new accounts typed as user, and SSO switched off. Use it as the template for a  new configuration: fill in the identity provider entity ID, sign-in URL and certificates, then send the result  to `POST api/2.0/settings/ssov2`. The values are the same for every portal and do not depend on what is  currently saved, nothing is written, and the call is safe to repeat. The caller needs the permission to edit  portal settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to  include Single Sign-On. This operation changes nothing by itself: to actually discard the configuration in  use, call `DELETE api/2.0/settings/ssov2`, and to read what is configured now, call  `GET api/2.0/settings/ssov2`.
     * @summary Get the default SSO settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public getDefaultSsoSettingsV2(options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).getDefaultSsoSettingsV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the SAML Single Sign-On configuration of the current portal: the identity provider endpoints and  certificates, the service provider certificates, the attribute mapping, the login button label and the user  type new SSO accounts get. Anonymous callers are accepted, but an unauthenticated one receives only  `hideAuthPage`, which tells the sign-in page whether the built-in login form has to be hidden; every other  field stays empty, so read the full configuration with an authenticated request. An authenticated caller needs  the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and the  portal plan has to include Single Sign-On, otherwise the call is refused. The operation only reads and is safe  to repeat. When the login label was never set, the response carries the built-in `Single Sign-on` instead of  an empty string, and `enableSso` is null until the settings are saved for the first time. Use  `GET api/2.0/settings/ssov2/default` for a blank configuration to start from, and  `GET api/2.0/settings/ssov2/constants` for the values the SAML fields accept.
     * @summary Get the SSO settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public getSsoSettingsV2(options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).getSsoSettingsV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns every literal value the SAML fields of the SSO configuration accept, grouped by the field it belongs  to: name ID formats, request bindings, signing and encryption algorithms, and what a service provider or  identity provider certificate can be used for. The values are the SAML URNs and algorithm URIs themselves, so  they can be written into the configuration exactly as they come back; picking one from the matching group is  the point, because `POST api/2.0/settings/ssov2` stores these fields as they are given and a misspelled value  therefore surfaces only later, as a failing sign-in. The list is a fixed part of the product: it is the same  for every portal, does not depend on the saved settings and does not change between calls within a release, so  it can be cached. The operation only reads, is safe to repeat and needs nothing beyond an authenticated  caller. Use it together with `GET api/2.0/settings/ssov2/default`, which already has the usual values set.
     * @summary Get the SSO settings constants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public getSsoSettingsV2Constants(options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).getSsoSettingsV2Constants(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Discards the SAML Single Sign-On configuration of the current portal, stores the built-in default one in its  place and returns what was stored, which is the same content as `GET api/2.0/settings/ssov2/default`. This is  destructive and cannot be undone through the API: the identity provider addresses, both certificate sets, the  attribute mapping and the login label are gone and SSO is left switched off, so keep a copy of  `GET api/2.0/settings/ssov2` first if the configuration may be needed again. Every account that signed in  through SSO is unlinked and becomes an ordinary account that keeps its data but authenticates with portal  credentials from then on, and its external contacts are converted the same way. Repeating the call is  harmless, as the second one stores the same defaults again. The caller needs the permission to edit portal  settings, which in practice means the portal owner or a DocSpace admin, and the portal plan has to include  Single Sign-On, otherwise the call is refused. To switch SSO off while keeping the configuration, send it back  to `POST api/2.0/settings/ssov2` with SSO disabled instead. The reset is recorded in the audit trail.
     * @summary Reset the SSO settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public resetSsoSettingsV2(options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).resetSsoSettingsV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the whole SAML Single Sign-On configuration of the current portal with the one passed as a JSON  object in `serializeSettings`, and returns the configuration as it was stored. The payload is a complete  configuration rather than a patch: fields left out are stored empty, so send back a changed copy of  `GET api/2.0/settings/ssov2`, or start from `GET api/2.0/settings/ssov2/default`. The identity provider entity  ID and sign-in URL are required, the sign-in and sign-out URLs have to be absolute http or https addresses,  and the attribute mapping has to name the fields for first name, last name and email; otherwise nothing is  saved. The caller has to be allowed to edit portal settings (portal owner or DocSpace admin), and the portal  plan has to include Single Sign-On. Some values are normalised on the way in: a `usersType` other than 1 (room  admin), 3 (DocSpace admin) or 4 (user) becomes 4, an empty login label becomes `Single Sign-on`, and a longer  one is cut to 100 characters. Saving with SSO switched off unlinks every existing SSO account and turns it  into an ordinary one; switching SSO back on later does not restore those links. The change is recorded in the  audit trail.
     * @summary Save the SSO settings
     * @param {SettingsSSOApiSaveSsoSettingsV2Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSOApi
     */
    public saveSsoSettingsV2(requestParameters: SSOApiSaveSsoSettingsV2Request = {}, options?: RawAxiosRequestConfig) {
        return SSOApiFp(this.configuration).saveSsoSettingsV2(requestParameters.ssoSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

