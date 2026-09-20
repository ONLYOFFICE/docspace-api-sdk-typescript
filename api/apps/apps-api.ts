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
import type { AppArrayWrapper } from '../../models';
// @ts-ignore
import type { AppWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { SetAppEnabledBody } from '../../models';
// @ts-ignore
import type { SetAppSettingsBody } from '../../models';
// @ts-ignore
import type { UnknownNullableWrapper } from '../../models';
/**
 * AppsApi - axios parameter creator
 * @export
 */
export const AppsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns one portal application by its identifier - one of the feature modules the portal can turn on, such as  `ai-rooms` or `docs-cloud` - with the enabled state and the settings document stored for the current portal.  The identifier must be an application declared in the installation configuration: take it  from `GET api/2.0/apps`, because an unknown identifier is rejected instead of creating anything. Any  authenticated portal member may read it. The call is read-only and idempotent. The result carries the  identifier, the enabled flag of the current portal and the settings JSON document, which is empty while the  portal has never saved settings for this application. An application that is not configured on this  installation fails with 404, so this is also the way to find out whether an application exists here at all.  Use `GET api/2.0/apps` to read all applications in one call, or `GET api/2.0/apps/{id}/settings` when only the  settings document is needed.
         * @summary Get an app
         * @param {string} id The application to read, by the identifier `GET api/2.0/apps` reports - one of the feature modules the portal  can turn on, such as `ai-room` or `docs-cloud`. An identifier not declared in the installation configuration  answers 404, which is also how a caller learns that an application does not exist here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for get operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get/
         */
        get: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('get', 'id', id)

            const localVarPath = `/api/2.0/apps/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Returns every portal application available on this installation, each with the state it has for the current  portal: the feature modules the portal can turn on and configure, such as `ai-rooms` or `docs-cloud`. The set  of applications and their initial enabled state come from the installation configuration and cannot be changed  through the API; only the enabled flag and the settings document are stored per portal, by  `PUT api/2.0/apps/{id}/enabled` and `PUT api/2.0/apps/{id}/settings`. Any authenticated portal member may read  the list. The call is read-only and idempotent. The list follows the order of the configuration, and every item  carries the application identifier, whether the application is enabled for the current portal, and the settings  JSON document saved for it, which is empty while the portal has never saved one. An empty list means that no  applications are configured on this installation, not that they are all disabled. There is neither paging nor  filtering here: to read a single application use `GET api/2.0/apps/{id}`.
         * @summary Get all apps
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAll operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all/
         */
        getAll: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/apps`;
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
         * Returns only the settings document of one portal application, such as `ai-rooms` or `docs-cloud`: the JSON  that the current portal has saved for it through `PUT api/2.0/apps/{id}/settings`, with no wrapper around it.  The identifier must be an application declared in the installation configuration, as listed by  `GET api/2.0/apps`. Any authenticated portal member  may read it. The call is read-only and idempotent. The document comes back exactly as it was saved: its shape  is defined by the application itself and is not validated by the portal, and an empty result means that the  portal has never saved settings for this application, so the application uses its own defaults. The enabled  state is not part of the answer: read it from `GET api/2.0/apps/{id}`.
         * @summary Get app settings
         * @param {string} id The application to read, by the identifier `GET api/2.0/apps` reports - one of the feature modules the portal  can turn on, such as `ai-room` or `docs-cloud`. An identifier not declared in the installation configuration  answers 404, which is also how a caller learns that an application does not exist here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-settings/
         */
        getSettings: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSettings', 'id', id)

            const localVarPath = `/api/2.0/apps/{id}/settings`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Turns one portal application on or off for the current portal, and notifies the clients connected to the portal  so that they can show or hide it without being reloaded. The identifier must be an application declared in the  installation configuration, as listed by `GET api/2.0/apps`. The caller must be a portal administrator allowed  to edit the portal settings. The call is mutating and idempotent: it stores the flag for this portal, overriding  the default that the configuration gives the application, and repeating it with the same value changes nothing.  Disabling an application does not delete its settings document, which stays saved and applies again as soon as  the application is enabled. The response is the application in its new state, including that settings document.  Only the enabled flag is affected here: to change the settings document use `PUT api/2.0/apps/{id}/settings`.
         * @summary Enable or disable an app
         * @param {string} id The application to switch, by the identifier `GET api/2.0/apps` reports. It has to be an application declared  in the installation configuration; an unknown identifier answers 404 rather than creating anything.
         * @param {SetAppEnabledBody} setAppEnabledBody The new state of the application. Only the enabled flag travels here; the settings document is changed  through `PUT api/2.0/apps/{id}/settings`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setEnabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-enabled/
         */
        setEnabled: async (id: string, setAppEnabledBody: SetAppEnabledBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setEnabled', 'id', id)
            // verify required parameter 'setAppEnabledBody' is not null or undefined
            assertParamExists('setEnabled', 'setAppEnabledBody', setAppEnabledBody)

            const localVarPath = `/api/2.0/apps/{id}/enabled`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(setAppEnabledBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores the application-specific settings document of one portal application for the current portal. The  identifier must be an application declared in the installation configuration, as listed by `GET api/2.0/apps`.  The caller must be a portal administrator allowed to edit the portal settings. The call is mutating and  idempotent, and it replaces the whole document instead of merging into it: read the current one with  `GET api/2.0/apps/{id}/settings`, change it and send it back complete, or send `null` to drop the saved document  and let the application fall back to its own defaults. Any valid JSON value is accepted, since the content is  stored as it is and is interpreted by the application rather than by the portal, while a body that is not valid  JSON fails with 400 and stores nothing. The response is the application in its new state, with the stored  document echoed back. Unlike `PUT api/2.0/apps/{id}/enabled`, this operation sends no notification to the  connected clients, which pick the new settings up on their next read.
         * @summary Save app settings
         * @param {string} id The application whose configuration is stored, by the identifier `GET api/2.0/apps` reports. An identifier  not declared in the installation configuration answers 404.
         * @param {SetAppSettingsBody} setAppSettingsBody The configuration to store for this portal, replacing whatever was stored before.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-settings/
         */
        setSettings: async (id: string, setAppSettingsBody: SetAppSettingsBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setSettings', 'id', id)
            // verify required parameter 'setAppSettingsBody' is not null or undefined
            assertParamExists('setSettings', 'setAppSettingsBody', setAppSettingsBody)

            const localVarPath = `/api/2.0/apps/{id}/settings`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(setAppSettingsBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AppsApi - functional programming interface
 * @export
 */
export const AppsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AppsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns one portal application by its identifier - one of the feature modules the portal can turn on, such as  `ai-rooms` or `docs-cloud` - with the enabled state and the settings document stored for the current portal.  The identifier must be an application declared in the installation configuration: take it  from `GET api/2.0/apps`, because an unknown identifier is rejected instead of creating anything. Any  authenticated portal member may read it. The call is read-only and idempotent. The result carries the  identifier, the enabled flag of the current portal and the settings JSON document, which is empty while the  portal has never saved settings for this application. An application that is not configured on this  installation fails with 404, so this is also the way to find out whether an application exists here at all.  Use `GET api/2.0/apps` to read all applications in one call, or `GET api/2.0/apps/{id}/settings` when only the  settings document is needed.
         * @summary Get an app
         * @param {string} id The application to read, by the identifier `GET api/2.0/apps` reports - one of the feature modules the portal  can turn on, such as `ai-room` or `docs-cloud`. An identifier not declared in the installation configuration  answers 404, which is also how a caller learns that an application does not exist here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for get operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get/
         */
        async get(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.get']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns every portal application available on this installation, each with the state it has for the current  portal: the feature modules the portal can turn on and configure, such as `ai-rooms` or `docs-cloud`. The set  of applications and their initial enabled state come from the installation configuration and cannot be changed  through the API; only the enabled flag and the settings document are stored per portal, by  `PUT api/2.0/apps/{id}/enabled` and `PUT api/2.0/apps/{id}/settings`. Any authenticated portal member may read  the list. The call is read-only and idempotent. The list follows the order of the configuration, and every item  carries the application identifier, whether the application is enabled for the current portal, and the settings  JSON document saved for it, which is empty while the portal has never saved one. An empty list means that no  applications are configured on this installation, not that they are all disabled. There is neither paging nor  filtering here: to read a single application use `GET api/2.0/apps/{id}`.
         * @summary Get all apps
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAll operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all/
         */
        async getAll(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.getAll']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns only the settings document of one portal application, such as `ai-rooms` or `docs-cloud`: the JSON  that the current portal has saved for it through `PUT api/2.0/apps/{id}/settings`, with no wrapper around it.  The identifier must be an application declared in the installation configuration, as listed by  `GET api/2.0/apps`. Any authenticated portal member  may read it. The call is read-only and idempotent. The document comes back exactly as it was saved: its shape  is defined by the application itself and is not validated by the portal, and an empty result means that the  portal has never saved settings for this application, so the application uses its own defaults. The enabled  state is not part of the answer: read it from `GET api/2.0/apps/{id}`.
         * @summary Get app settings
         * @param {string} id The application to read, by the identifier `GET api/2.0/apps` reports - one of the feature modules the portal  can turn on, such as `ai-room` or `docs-cloud`. An identifier not declared in the installation configuration  answers 404, which is also how a caller learns that an application does not exist here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-settings/
         */
        async getSettings(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UnknownNullableWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSettings(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.getSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Turns one portal application on or off for the current portal, and notifies the clients connected to the portal  so that they can show or hide it without being reloaded. The identifier must be an application declared in the  installation configuration, as listed by `GET api/2.0/apps`. The caller must be a portal administrator allowed  to edit the portal settings. The call is mutating and idempotent: it stores the flag for this portal, overriding  the default that the configuration gives the application, and repeating it with the same value changes nothing.  Disabling an application does not delete its settings document, which stays saved and applies again as soon as  the application is enabled. The response is the application in its new state, including that settings document.  Only the enabled flag is affected here: to change the settings document use `PUT api/2.0/apps/{id}/settings`.
         * @summary Enable or disable an app
         * @param {string} id The application to switch, by the identifier `GET api/2.0/apps` reports. It has to be an application declared  in the installation configuration; an unknown identifier answers 404 rather than creating anything.
         * @param {SetAppEnabledBody} setAppEnabledBody The new state of the application. Only the enabled flag travels here; the settings document is changed  through `PUT api/2.0/apps/{id}/settings`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setEnabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-enabled/
         */
        async setEnabled(id: string, setAppEnabledBody: SetAppEnabledBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setEnabled(id, setAppEnabledBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.setEnabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores the application-specific settings document of one portal application for the current portal. The  identifier must be an application declared in the installation configuration, as listed by `GET api/2.0/apps`.  The caller must be a portal administrator allowed to edit the portal settings. The call is mutating and  idempotent, and it replaces the whole document instead of merging into it: read the current one with  `GET api/2.0/apps/{id}/settings`, change it and send it back complete, or send `null` to drop the saved document  and let the application fall back to its own defaults. Any valid JSON value is accepted, since the content is  stored as it is and is interpreted by the application rather than by the portal, while a body that is not valid  JSON fails with 400 and stores nothing. The response is the application in its new state, with the stored  document echoed back. Unlike `PUT api/2.0/apps/{id}/enabled`, this operation sends no notification to the  connected clients, which pick the new settings up on their next read.
         * @summary Save app settings
         * @param {string} id The application whose configuration is stored, by the identifier `GET api/2.0/apps` reports. An identifier  not declared in the installation configuration answers 404.
         * @param {SetAppSettingsBody} setAppSettingsBody The configuration to store for this portal, replacing whatever was stored before.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-settings/
         */
        async setSettings(id: string, setAppSettingsBody: SetAppSettingsBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setSettings(id, setAppSettingsBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AppsApi.setSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AppsApi - factory interface
 * @export
 */
export const AppsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AppsApiFp(configuration)
    return {
        /**
         * Returns one portal application by its identifier - one of the feature modules the portal can turn on, such as  `ai-rooms` or `docs-cloud` - with the enabled state and the settings document stored for the current portal.  The identifier must be an application declared in the installation configuration: take it  from `GET api/2.0/apps`, because an unknown identifier is rejected instead of creating anything. Any  authenticated portal member may read it. The call is read-only and idempotent. The result carries the  identifier, the enabled flag of the current portal and the settings JSON document, which is empty while the  portal has never saved settings for this application. An application that is not configured on this  installation fails with 404, so this is also the way to find out whether an application exists here at all.  Use `GET api/2.0/apps` to read all applications in one call, or `GET api/2.0/apps/{id}/settings` when only the  settings document is needed.
         * @summary Get an app
         * @param {AppsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for get operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get/
         * @throws {RequiredError}
         */
        get(requestParameters: AppsApiGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<AppWrapper> {
            return localVarFp.get(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns every portal application available on this installation, each with the state it has for the current  portal: the feature modules the portal can turn on and configure, such as `ai-rooms` or `docs-cloud`. The set  of applications and their initial enabled state come from the installation configuration and cannot be changed  through the API; only the enabled flag and the settings document are stored per portal, by  `PUT api/2.0/apps/{id}/enabled` and `PUT api/2.0/apps/{id}/settings`. Any authenticated portal member may read  the list. The call is read-only and idempotent. The list follows the order of the configuration, and every item  carries the application identifier, whether the application is enabled for the current portal, and the settings  JSON document saved for it, which is empty while the portal has never saved one. An empty list means that no  applications are configured on this installation, not that they are all disabled. There is neither paging nor  filtering here: to read a single application use `GET api/2.0/apps/{id}`.
         * @summary Get all apps
         * @param {*} [options] Override http request option.
         * REST API Reference for getAll operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-all/
         * @throws {RequiredError}
         */
        getAll(options?: RawAxiosRequestConfig): AxiosPromise<AppArrayWrapper> {
            return localVarFp.getAll(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns only the settings document of one portal application, such as `ai-rooms` or `docs-cloud`: the JSON  that the current portal has saved for it through `PUT api/2.0/apps/{id}/settings`, with no wrapper around it.  The identifier must be an application declared in the installation configuration, as listed by  `GET api/2.0/apps`. Any authenticated portal member  may read it. The call is read-only and idempotent. The document comes back exactly as it was saved: its shape  is defined by the application itself and is not validated by the portal, and an empty result means that the  portal has never saved settings for this application, so the application uses its own defaults. The enabled  state is not part of the answer: read it from `GET api/2.0/apps/{id}`.
         * @summary Get app settings
         * @param {AppsApiGetSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-settings/
         * @throws {RequiredError}
         */
        getSettings(requestParameters: AppsApiGetSettingsRequest, options?: RawAxiosRequestConfig): AxiosPromise<UnknownNullableWrapper> {
            return localVarFp.getSettings(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Turns one portal application on or off for the current portal, and notifies the clients connected to the portal  so that they can show or hide it without being reloaded. The identifier must be an application declared in the  installation configuration, as listed by `GET api/2.0/apps`. The caller must be a portal administrator allowed  to edit the portal settings. The call is mutating and idempotent: it stores the flag for this portal, overriding  the default that the configuration gives the application, and repeating it with the same value changes nothing.  Disabling an application does not delete its settings document, which stays saved and applies again as soon as  the application is enabled. The response is the application in its new state, including that settings document.  Only the enabled flag is affected here: to change the settings document use `PUT api/2.0/apps/{id}/settings`.
         * @summary Enable or disable an app
         * @param {AppsApiSetEnabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setEnabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-enabled/
         * @throws {RequiredError}
         */
        setEnabled(requestParameters: AppsApiSetEnabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<AppWrapper> {
            return localVarFp.setEnabled(requestParameters.id, requestParameters.setAppEnabledBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores the application-specific settings document of one portal application for the current portal. The  identifier must be an application declared in the installation configuration, as listed by `GET api/2.0/apps`.  The caller must be a portal administrator allowed to edit the portal settings. The call is mutating and  idempotent, and it replaces the whole document instead of merging into it: read the current one with  `GET api/2.0/apps/{id}/settings`, change it and send it back complete, or send `null` to drop the saved document  and let the application fall back to its own defaults. Any valid JSON value is accepted, since the content is  stored as it is and is interpreted by the application rather than by the portal, while a body that is not valid  JSON fails with 400 and stores nothing. The response is the application in its new state, with the stored  document echoed back. Unlike `PUT api/2.0/apps/{id}/enabled`, this operation sends no notification to the  connected clients, which pick the new settings up on their next read.
         * @summary Save app settings
         * @param {AppsApiSetSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-settings/
         * @throws {RequiredError}
         */
        setSettings(requestParameters: AppsApiSetSettingsRequest, options?: RawAxiosRequestConfig): AxiosPromise<AppWrapper> {
            return localVarFp.setSettings(requestParameters.id, requestParameters.setAppSettingsBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in AppsApi.
 * @export
 * @interface AppsApiGetRequest
 */
export interface AppsApiGetRequest {
    /**
     * The application to read, by the identifier `GET api/2.0/apps` reports - one of the feature modules the portal  can turn on, such as `ai-room` or `docs-cloud`. An identifier not declared in the installation configuration  answers 404, which is also how a caller learns that an application does not exist here.
     * @type {string}
     * @memberof AppsApiGet
     */
    readonly id: string
}

/**
 * Request parameters for getSettings operation in AppsApi.
 * @export
 * @interface AppsApiGetSettingsRequest
 */
export interface AppsApiGetSettingsRequest {
    /**
     * The application to read, by the identifier `GET api/2.0/apps` reports - one of the feature modules the portal  can turn on, such as `ai-room` or `docs-cloud`. An identifier not declared in the installation configuration  answers 404, which is also how a caller learns that an application does not exist here.
     * @type {string}
     * @memberof AppsApiGetSettings
     */
    readonly id: string
}

/**
 * Request parameters for setEnabled operation in AppsApi.
 * @export
 * @interface AppsApiSetEnabledRequest
 */
export interface AppsApiSetEnabledRequest {
    /**
     * The application to switch, by the identifier `GET api/2.0/apps` reports. It has to be an application declared  in the installation configuration; an unknown identifier answers 404 rather than creating anything.
     * @type {string}
     * @memberof AppsApiSetEnabled
     */
    readonly id: string

    /**
     * The new state of the application. Only the enabled flag travels here; the settings document is changed  through `PUT api/2.0/apps/{id}/settings`.
     * @type {SetAppEnabledBody}
     * @memberof AppsApiSetEnabled
     */
    readonly setAppEnabledBody: SetAppEnabledBody
}

/**
 * Request parameters for setSettings operation in AppsApi.
 * @export
 * @interface AppsApiSetSettingsRequest
 */
export interface AppsApiSetSettingsRequest {
    /**
     * The application whose configuration is stored, by the identifier `GET api/2.0/apps` reports. An identifier  not declared in the installation configuration answers 404.
     * @type {string}
     * @memberof AppsApiSetSettings
     */
    readonly id: string

    /**
     * The configuration to store for this portal, replacing whatever was stored before.
     * @type {SetAppSettingsBody}
     * @memberof AppsApiSetSettings
     */
    readonly setAppSettingsBody: SetAppSettingsBody
}

/**
 * AppsApi - object-oriented interface
 * @export
 * @class AppsApi
 * @extends {BaseAPI}
 */
export class AppsApi extends BaseAPI {
    /**
     * Returns one portal application by its identifier - one of the feature modules the portal can turn on, such as  `ai-rooms` or `docs-cloud` - with the enabled state and the settings document stored for the current portal.  The identifier must be an application declared in the installation configuration: take it  from `GET api/2.0/apps`, because an unknown identifier is rejected instead of creating anything. Any  authenticated portal member may read it. The call is read-only and idempotent. The result carries the  identifier, the enabled flag of the current portal and the settings JSON document, which is empty while the  portal has never saved settings for this application. An application that is not configured on this  installation fails with 404, so this is also the way to find out whether an application exists here at all.  Use `GET api/2.0/apps` to read all applications in one call, or `GET api/2.0/apps/{id}/settings` when only the  settings document is needed.
     * @summary Get an app
     * @param {AppsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public get(requestParameters: AppsApiGetRequest, options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).get(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns every portal application available on this installation, each with the state it has for the current  portal: the feature modules the portal can turn on and configure, such as `ai-rooms` or `docs-cloud`. The set  of applications and their initial enabled state come from the installation configuration and cannot be changed  through the API; only the enabled flag and the settings document are stored per portal, by  `PUT api/2.0/apps/{id}/enabled` and `PUT api/2.0/apps/{id}/settings`. Any authenticated portal member may read  the list. The call is read-only and idempotent. The list follows the order of the configuration, and every item  carries the application identifier, whether the application is enabled for the current portal, and the settings  JSON document saved for it, which is empty while the portal has never saved one. An empty list means that no  applications are configured on this installation, not that they are all disabled. There is neither paging nor  filtering here: to read a single application use `GET api/2.0/apps/{id}`.
     * @summary Get all apps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public getAll(options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).getAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns only the settings document of one portal application, such as `ai-rooms` or `docs-cloud`: the JSON  that the current portal has saved for it through `PUT api/2.0/apps/{id}/settings`, with no wrapper around it.  The identifier must be an application declared in the installation configuration, as listed by  `GET api/2.0/apps`. Any authenticated portal member  may read it. The call is read-only and idempotent. The document comes back exactly as it was saved: its shape  is defined by the application itself and is not validated by the portal, and an empty result means that the  portal has never saved settings for this application, so the application uses its own defaults. The enabled  state is not part of the answer: read it from `GET api/2.0/apps/{id}`.
     * @summary Get app settings
     * @param {AppsApiGetSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public getSettings(requestParameters: AppsApiGetSettingsRequest, options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).getSettings(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Turns one portal application on or off for the current portal, and notifies the clients connected to the portal  so that they can show or hide it without being reloaded. The identifier must be an application declared in the  installation configuration, as listed by `GET api/2.0/apps`. The caller must be a portal administrator allowed  to edit the portal settings. The call is mutating and idempotent: it stores the flag for this portal, overriding  the default that the configuration gives the application, and repeating it with the same value changes nothing.  Disabling an application does not delete its settings document, which stays saved and applies again as soon as  the application is enabled. The response is the application in its new state, including that settings document.  Only the enabled flag is affected here: to change the settings document use `PUT api/2.0/apps/{id}/settings`.
     * @summary Enable or disable an app
     * @param {AppsApiSetEnabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public setEnabled(requestParameters: AppsApiSetEnabledRequest, options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).setEnabled(requestParameters.id, requestParameters.setAppEnabledBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores the application-specific settings document of one portal application for the current portal. The  identifier must be an application declared in the installation configuration, as listed by `GET api/2.0/apps`.  The caller must be a portal administrator allowed to edit the portal settings. The call is mutating and  idempotent, and it replaces the whole document instead of merging into it: read the current one with  `GET api/2.0/apps/{id}/settings`, change it and send it back complete, or send `null` to drop the saved document  and let the application fall back to its own defaults. Any valid JSON value is accepted, since the content is  stored as it is and is interpreted by the application rather than by the portal, while a body that is not valid  JSON fails with 400 and stores nothing. The response is the application in its new state, with the stored  document echoed back. Unlike `PUT api/2.0/apps/{id}/enabled`, this operation sends no notification to the  connected clients, which pick the new settings up on their next read.
     * @summary Save app settings
     * @param {AppsApiSetSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppsApi
     */
    public setSettings(requestParameters: AppsApiSetSettingsRequest, options?: RawAxiosRequestConfig) {
        return AppsApiFp(this.configuration).setSettings(requestParameters.id, requestParameters.setAppSettingsBody, options).then((request) => request(this.axios, this.basePath));
    }
}

