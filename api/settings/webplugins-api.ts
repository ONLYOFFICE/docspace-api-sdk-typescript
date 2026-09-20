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
import type { WebPluginArrayWrapper } from '../../models';
// @ts-ignore
import type { WebPluginRequests } from '../../models';
// @ts-ignore
import type { WebPluginWrapper } from '../../models';
/**
 * WebpluginsApi - axios parameter creator
 * @export
 */
export const WebpluginsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Installs a web plugin into the current portal from an uploaded package, and switches the plugin on straight  away. The package is sent as `multipart/form-data` with exactly one file: a `.zip` archive holding a  `config.json` manifest and a `plugin.js` entry point, under the configured size cap of 5 MB by default.  Editing the portal settings is required, so a portal owner or administrator, and the installation has to have  web plugins and plugin uploading enabled in its configuration. Pass `system=true` to install the plugin for  every portal of the installation, which is accepted on standalone installations only. The call is mutating and  not idempotent: a package whose manifest name is already installed replaces the stored files and keeps the  settings saved for that name, and the domains the manifest declares are added to the portal Content Security  Policy. It returns the freshly installed plugin, enabled, with the `url` its script is served from. A portal  holds up to 100 plugins by default, the manifest name has to be lower-case letters, digits, `_`, `.` or `-`,  and the package is rejected when another installed plugin registers the same JavaScript object under a  different name. List what is installed with `GET api/2.0/settings/webplugins`.
         * @summary Add a web plugin
         * @param {boolean} [system] Whether the plugin is installed for every portal of the installation rather than only this one. It is  accepted on a self-hosted installation alone and refused with 403 elsewhere; an installation-wide plugin also  hides a portal plugin that carries the same name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addWebPluginFromFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-web-plugin-from-file/
         */
        addWebPluginFromFile: async (system?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/webplugins`;
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

            if (system !== undefined) {
                localVarQueryParameter['system'] = system;
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
         * Removes a web plugin from the current portal and deletes the files of its package from storage. The `name` is  the manifest name published by `GET api/2.0/settings/webplugins`, matched without regard to case. Editing the  portal settings is required, so a portal owner or administrator, and the installation has to have web plugins  and plugin deletion enabled in its configuration. An installation-wide plugin, the one whose `system` field is  true, can be removed on standalone installations only. The call is destructive and cannot be undone: the state  and the settings stored for the plugin are dropped along with its files, the domains its manifest declares are  taken out of the portal Content Security Policy, and the connected clients are notified. Getting the plugin  back means uploading its package again with `POST api/2.0/settings/webplugins`, and the settings it had are  gone. Nothing is returned on success, and a repeated call on a name that is no longer installed is rejected as  not found instead of answered as success. To keep a plugin installed but inactive, switch it off with  `PUT api/2.0/settings/webplugins/{name}` instead.
         * @summary Delete a web plugin
         * @param {string} name The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched  without regard to case. It is neither the localized display name nor the JavaScript object name in  `pluginName`; a name that is not installed answers 404.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-web-plugin/
         */
        deleteWebPlugin: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteWebPlugin', 'name', name)

            const localVarPath = `/api/2.0/settings/webplugins/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
         * Returns one web plugin of the current portal by its manifest name, looked up over the same set as  `GET api/2.0/settings/webplugins`: the installation-wide plugins plus the portal\'s own. The `name` is the  manifest name published in the `name` field of that list, matched without regard to case; it is neither the  localized display name nor the JavaScript object name in `pluginName`, so it cannot be taken from the title  shown in the interface. Any authenticated portal member may call it, no settings permission needed, and the  installation has to have web plugins enabled in its configuration. The call is read-only and idempotent. The  response carries the manifest data along with the state the portal stored for that plugin: `enabled`, the  `settings` string, `system`, and the `url` and `cssUrl` a client loads it from. A name that is not installed  is rejected as not found, and 403 means web plugins are switched off for the installation. Change the state of  the plugin with `PUT api/2.0/settings/webplugins/{name}`.
         * @summary Get a web plugin by name
         * @param {string} name The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched  without regard to case. It is neither the localized display name nor the JavaScript object name in  `pluginName`; a name that is not installed answers 404.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugin/
         */
        getWebPlugin: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getWebPlugin', 'name', name)

            const localVarPath = `/api/2.0/settings/webplugins/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
         * Lists the web plugins available in the current portal: the plugins installed for the whole installation first,  then the portal\'s own, with a portal plugin dropped when an installation-wide plugin already uses its name.  Any authenticated portal member may call it, no settings permission needed, and the installation has to have  web plugins enabled in its configuration. The call is read-only and idempotent. Pass `enabled=true` or  `enabled=false` to keep only the plugins in that state, and leave the parameter out to get every plugin. Each  entry carries the manifest data together with the state the portal stored for that plugin: `enabled`, the  `settings` string, `system` for an installation-wide plugin, and the `url` and `cssUrl` a client loads the  plugin from. An empty list means nothing is installed for this portal, not that plugins are switched off,  which is refused with 403 instead. The list is capped at the configured maximum, 100 plugins by default, and  is not paginated. For one plugin by its manifest name use `GET api/2.0/settings/webplugins/{name}`.
         * @summary Get web plugins
         * @param {boolean} [enabled] Which plugins are kept: `true` the ones switched on, `false` the ones switched off. Omitting it lists every  installed plugin whatever its state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebPlugins operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugins/
         */
        getWebPlugins: async (enabled?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/webplugins`;
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

            if (enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
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
         * Switches a web plugin of the current portal on or off and stores the settings string the portal keeps for it.  The plugin has to be installed already, so upload its package with `POST api/2.0/settings/webplugins` first,  and `name` is its manifest name as published by `GET api/2.0/settings/webplugins`, matched without regard to  case. Editing the portal settings is required, so a portal owner or administrator, and the installation has to  have web plugins enabled in its configuration. The body replaces the stored state instead of merging into it,  which makes the call idempotent; `settings` is required, so send `{}` when there is nothing to keep, and it is  limited to 255 characters and stored encrypted for this portal alone. Switching the plugin on adds the domains  its manifest declares to the portal Content Security Policy and switching it off takes them away again, and  the connected clients are notified of the new state. Nothing is returned on success. A name that is not  installed is rejected as not found, and 403 means web plugins are switched off or the caller may not edit the  portal settings.
         * @summary Update a web plugin
         * @param {string} name The plugin to change, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched  without regard to case. It is neither the localized display name nor the JavaScript object name in  `pluginName`, so it cannot be read off the interface; a name that is not installed answers 404.
         * @param {WebPluginRequests} webPluginRequests The whole state the plugin is to have afterwards. It replaces what was stored instead of merging into it, so  both the enabled flag and the settings have to be sent every time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-web-plugin/
         */
        updateWebPlugin: async (name: string, webPluginRequests: WebPluginRequests, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateWebPlugin', 'name', name)
            // verify required parameter 'webPluginRequests' is not null or undefined
            assertParamExists('updateWebPlugin', 'webPluginRequests', webPluginRequests)

            const localVarPath = `/api/2.0/settings/webplugins/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(webPluginRequests, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebpluginsApi - functional programming interface
 * @export
 */
export const WebpluginsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebpluginsApiAxiosParamCreator(configuration)
    return {
        /**
         * Installs a web plugin into the current portal from an uploaded package, and switches the plugin on straight  away. The package is sent as `multipart/form-data` with exactly one file: a `.zip` archive holding a  `config.json` manifest and a `plugin.js` entry point, under the configured size cap of 5 MB by default.  Editing the portal settings is required, so a portal owner or administrator, and the installation has to have  web plugins and plugin uploading enabled in its configuration. Pass `system=true` to install the plugin for  every portal of the installation, which is accepted on standalone installations only. The call is mutating and  not idempotent: a package whose manifest name is already installed replaces the stored files and keeps the  settings saved for that name, and the domains the manifest declares are added to the portal Content Security  Policy. It returns the freshly installed plugin, enabled, with the `url` its script is served from. A portal  holds up to 100 plugins by default, the manifest name has to be lower-case letters, digits, `_`, `.` or `-`,  and the package is rejected when another installed plugin registers the same JavaScript object under a  different name. List what is installed with `GET api/2.0/settings/webplugins`.
         * @summary Add a web plugin
         * @param {boolean} [system] Whether the plugin is installed for every portal of the installation rather than only this one. It is  accepted on a self-hosted installation alone and refused with 403 elsewhere; an installation-wide plugin also  hides a portal plugin that carries the same name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addWebPluginFromFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-web-plugin-from-file/
         */
        async addWebPluginFromFile(system?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebPluginWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addWebPluginFromFile(system, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.addWebPluginFromFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes a web plugin from the current portal and deletes the files of its package from storage. The `name` is  the manifest name published by `GET api/2.0/settings/webplugins`, matched without regard to case. Editing the  portal settings is required, so a portal owner or administrator, and the installation has to have web plugins  and plugin deletion enabled in its configuration. An installation-wide plugin, the one whose `system` field is  true, can be removed on standalone installations only. The call is destructive and cannot be undone: the state  and the settings stored for the plugin are dropped along with its files, the domains its manifest declares are  taken out of the portal Content Security Policy, and the connected clients are notified. Getting the plugin  back means uploading its package again with `POST api/2.0/settings/webplugins`, and the settings it had are  gone. Nothing is returned on success, and a repeated call on a name that is no longer installed is rejected as  not found instead of answered as success. To keep a plugin installed but inactive, switch it off with  `PUT api/2.0/settings/webplugins/{name}` instead.
         * @summary Delete a web plugin
         * @param {string} name The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched  without regard to case. It is neither the localized display name nor the JavaScript object name in  `pluginName`; a name that is not installed answers 404.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-web-plugin/
         */
        async deleteWebPlugin(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebPlugin(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.deleteWebPlugin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one web plugin of the current portal by its manifest name, looked up over the same set as  `GET api/2.0/settings/webplugins`: the installation-wide plugins plus the portal\'s own. The `name` is the  manifest name published in the `name` field of that list, matched without regard to case; it is neither the  localized display name nor the JavaScript object name in `pluginName`, so it cannot be taken from the title  shown in the interface. Any authenticated portal member may call it, no settings permission needed, and the  installation has to have web plugins enabled in its configuration. The call is read-only and idempotent. The  response carries the manifest data along with the state the portal stored for that plugin: `enabled`, the  `settings` string, `system`, and the `url` and `cssUrl` a client loads it from. A name that is not installed  is rejected as not found, and 403 means web plugins are switched off for the installation. Change the state of  the plugin with `PUT api/2.0/settings/webplugins/{name}`.
         * @summary Get a web plugin by name
         * @param {string} name The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched  without regard to case. It is neither the localized display name nor the JavaScript object name in  `pluginName`; a name that is not installed answers 404.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugin/
         */
        async getWebPlugin(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebPluginWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebPlugin(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.getWebPlugin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the web plugins available in the current portal: the plugins installed for the whole installation first,  then the portal\'s own, with a portal plugin dropped when an installation-wide plugin already uses its name.  Any authenticated portal member may call it, no settings permission needed, and the installation has to have  web plugins enabled in its configuration. The call is read-only and idempotent. Pass `enabled=true` or  `enabled=false` to keep only the plugins in that state, and leave the parameter out to get every plugin. Each  entry carries the manifest data together with the state the portal stored for that plugin: `enabled`, the  `settings` string, `system` for an installation-wide plugin, and the `url` and `cssUrl` a client loads the  plugin from. An empty list means nothing is installed for this portal, not that plugins are switched off,  which is refused with 403 instead. The list is capped at the configured maximum, 100 plugins by default, and  is not paginated. For one plugin by its manifest name use `GET api/2.0/settings/webplugins/{name}`.
         * @summary Get web plugins
         * @param {boolean} [enabled] Which plugins are kept: `true` the ones switched on, `false` the ones switched off. Omitting it lists every  installed plugin whatever its state.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebPlugins operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugins/
         */
        async getWebPlugins(enabled?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebPluginArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebPlugins(enabled, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.getWebPlugins']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Switches a web plugin of the current portal on or off and stores the settings string the portal keeps for it.  The plugin has to be installed already, so upload its package with `POST api/2.0/settings/webplugins` first,  and `name` is its manifest name as published by `GET api/2.0/settings/webplugins`, matched without regard to  case. Editing the portal settings is required, so a portal owner or administrator, and the installation has to  have web plugins enabled in its configuration. The body replaces the stored state instead of merging into it,  which makes the call idempotent; `settings` is required, so send `{}` when there is nothing to keep, and it is  limited to 255 characters and stored encrypted for this portal alone. Switching the plugin on adds the domains  its manifest declares to the portal Content Security Policy and switching it off takes them away again, and  the connected clients are notified of the new state. Nothing is returned on success. A name that is not  installed is rejected as not found, and 403 means web plugins are switched off or the caller may not edit the  portal settings.
         * @summary Update a web plugin
         * @param {string} name The plugin to change, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched  without regard to case. It is neither the localized display name nor the JavaScript object name in  `pluginName`, so it cannot be read off the interface; a name that is not installed answers 404.
         * @param {WebPluginRequests} webPluginRequests The whole state the plugin is to have afterwards. It replaces what was stored instead of merging into it, so  both the enabled flag and the settings have to be sent every time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-web-plugin/
         */
        async updateWebPlugin(name: string, webPluginRequests: WebPluginRequests, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebPlugin(name, webPluginRequests, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebpluginsApi.updateWebPlugin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WebpluginsApi - factory interface
 * @export
 */
export const WebpluginsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebpluginsApiFp(configuration)
    return {
        /**
         * Installs a web plugin into the current portal from an uploaded package, and switches the plugin on straight  away. The package is sent as `multipart/form-data` with exactly one file: a `.zip` archive holding a  `config.json` manifest and a `plugin.js` entry point, under the configured size cap of 5 MB by default.  Editing the portal settings is required, so a portal owner or administrator, and the installation has to have  web plugins and plugin uploading enabled in its configuration. Pass `system=true` to install the plugin for  every portal of the installation, which is accepted on standalone installations only. The call is mutating and  not idempotent: a package whose manifest name is already installed replaces the stored files and keeps the  settings saved for that name, and the domains the manifest declares are added to the portal Content Security  Policy. It returns the freshly installed plugin, enabled, with the `url` its script is served from. A portal  holds up to 100 plugins by default, the manifest name has to be lower-case letters, digits, `_`, `.` or `-`,  and the package is rejected when another installed plugin registers the same JavaScript object under a  different name. List what is installed with `GET api/2.0/settings/webplugins`.
         * @summary Add a web plugin
         * @param {WebpluginsApiAddWebPluginFromFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addWebPluginFromFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-web-plugin-from-file/
         * @throws {RequiredError}
         */
        addWebPluginFromFile(requestParameters: WebpluginsApiAddWebPluginFromFileRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WebPluginWrapper> {
            return localVarFp.addWebPluginFromFile(requestParameters.system, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a web plugin from the current portal and deletes the files of its package from storage. The `name` is  the manifest name published by `GET api/2.0/settings/webplugins`, matched without regard to case. Editing the  portal settings is required, so a portal owner or administrator, and the installation has to have web plugins  and plugin deletion enabled in its configuration. An installation-wide plugin, the one whose `system` field is  true, can be removed on standalone installations only. The call is destructive and cannot be undone: the state  and the settings stored for the plugin are dropped along with its files, the domains its manifest declares are  taken out of the portal Content Security Policy, and the connected clients are notified. Getting the plugin  back means uploading its package again with `POST api/2.0/settings/webplugins`, and the settings it had are  gone. Nothing is returned on success, and a repeated call on a name that is no longer installed is rejected as  not found instead of answered as success. To keep a plugin installed but inactive, switch it off with  `PUT api/2.0/settings/webplugins/{name}` instead.
         * @summary Delete a web plugin
         * @param {WebpluginsApiDeleteWebPluginRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-web-plugin/
         * @throws {RequiredError}
         */
        deleteWebPlugin(requestParameters: WebpluginsApiDeleteWebPluginRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteWebPlugin(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one web plugin of the current portal by its manifest name, looked up over the same set as  `GET api/2.0/settings/webplugins`: the installation-wide plugins plus the portal\'s own. The `name` is the  manifest name published in the `name` field of that list, matched without regard to case; it is neither the  localized display name nor the JavaScript object name in `pluginName`, so it cannot be taken from the title  shown in the interface. Any authenticated portal member may call it, no settings permission needed, and the  installation has to have web plugins enabled in its configuration. The call is read-only and idempotent. The  response carries the manifest data along with the state the portal stored for that plugin: `enabled`, the  `settings` string, `system`, and the `url` and `cssUrl` a client loads it from. A name that is not installed  is rejected as not found, and 403 means web plugins are switched off for the installation. Change the state of  the plugin with `PUT api/2.0/settings/webplugins/{name}`.
         * @summary Get a web plugin by name
         * @param {WebpluginsApiGetWebPluginRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugin/
         * @throws {RequiredError}
         */
        getWebPlugin(requestParameters: WebpluginsApiGetWebPluginRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebPluginWrapper> {
            return localVarFp.getWebPlugin(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the web plugins available in the current portal: the plugins installed for the whole installation first,  then the portal\'s own, with a portal plugin dropped when an installation-wide plugin already uses its name.  Any authenticated portal member may call it, no settings permission needed, and the installation has to have  web plugins enabled in its configuration. The call is read-only and idempotent. Pass `enabled=true` or  `enabled=false` to keep only the plugins in that state, and leave the parameter out to get every plugin. Each  entry carries the manifest data together with the state the portal stored for that plugin: `enabled`, the  `settings` string, `system` for an installation-wide plugin, and the `url` and `cssUrl` a client loads the  plugin from. An empty list means nothing is installed for this portal, not that plugins are switched off,  which is refused with 403 instead. The list is capped at the configured maximum, 100 plugins by default, and  is not paginated. For one plugin by its manifest name use `GET api/2.0/settings/webplugins/{name}`.
         * @summary Get web plugins
         * @param {WebpluginsApiGetWebPluginsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebPlugins operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-plugins/
         * @throws {RequiredError}
         */
        getWebPlugins(requestParameters: WebpluginsApiGetWebPluginsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WebPluginArrayWrapper> {
            return localVarFp.getWebPlugins(requestParameters.enabled, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches a web plugin of the current portal on or off and stores the settings string the portal keeps for it.  The plugin has to be installed already, so upload its package with `POST api/2.0/settings/webplugins` first,  and `name` is its manifest name as published by `GET api/2.0/settings/webplugins`, matched without regard to  case. Editing the portal settings is required, so a portal owner or administrator, and the installation has to  have web plugins enabled in its configuration. The body replaces the stored state instead of merging into it,  which makes the call idempotent; `settings` is required, so send `{}` when there is nothing to keep, and it is  limited to 255 characters and stored encrypted for this portal alone. Switching the plugin on adds the domains  its manifest declares to the portal Content Security Policy and switching it off takes them away again, and  the connected clients are notified of the new state. Nothing is returned on success. A name that is not  installed is rejected as not found, and 403 means web plugins are switched off or the caller may not edit the  portal settings.
         * @summary Update a web plugin
         * @param {WebpluginsApiUpdateWebPluginRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateWebPlugin operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-web-plugin/
         * @throws {RequiredError}
         */
        updateWebPlugin(requestParameters: WebpluginsApiUpdateWebPluginRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateWebPlugin(requestParameters.name, requestParameters.webPluginRequests, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addWebPluginFromFile operation in WebpluginsApi.
 * @export
 * @interface WebpluginsApiAddWebPluginFromFileRequest
 */
export interface WebpluginsApiAddWebPluginFromFileRequest {
    /**
     * Whether the plugin is installed for every portal of the installation rather than only this one. It is  accepted on a self-hosted installation alone and refused with 403 elsewhere; an installation-wide plugin also  hides a portal plugin that carries the same name.
     * @type {boolean}
     * @memberof WebpluginsApiAddWebPluginFromFile
     */
    readonly system?: boolean
}

/**
 * Request parameters for deleteWebPlugin operation in WebpluginsApi.
 * @export
 * @interface WebpluginsApiDeleteWebPluginRequest
 */
export interface WebpluginsApiDeleteWebPluginRequest {
    /**
     * The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched  without regard to case. It is neither the localized display name nor the JavaScript object name in  `pluginName`; a name that is not installed answers 404.
     * @type {string}
     * @memberof WebpluginsApiDeleteWebPlugin
     */
    readonly name: string
}

/**
 * Request parameters for getWebPlugin operation in WebpluginsApi.
 * @export
 * @interface WebpluginsApiGetWebPluginRequest
 */
export interface WebpluginsApiGetWebPluginRequest {
    /**
     * The plugin to act on, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched  without regard to case. It is neither the localized display name nor the JavaScript object name in  `pluginName`; a name that is not installed answers 404.
     * @type {string}
     * @memberof WebpluginsApiGetWebPlugin
     */
    readonly name: string
}

/**
 * Request parameters for getWebPlugins operation in WebpluginsApi.
 * @export
 * @interface WebpluginsApiGetWebPluginsRequest
 */
export interface WebpluginsApiGetWebPluginsRequest {
    /**
     * Which plugins are kept: `true` the ones switched on, `false` the ones switched off. Omitting it lists every  installed plugin whatever its state.
     * @type {boolean}
     * @memberof WebpluginsApiGetWebPlugins
     */
    readonly enabled?: boolean
}

/**
 * Request parameters for updateWebPlugin operation in WebpluginsApi.
 * @export
 * @interface WebpluginsApiUpdateWebPluginRequest
 */
export interface WebpluginsApiUpdateWebPluginRequest {
    /**
     * The plugin to change, by the manifest name `GET api/2.0/settings/webplugins` publishes as `name`, matched  without regard to case. It is neither the localized display name nor the JavaScript object name in  `pluginName`, so it cannot be read off the interface; a name that is not installed answers 404.
     * @type {string}
     * @memberof WebpluginsApiUpdateWebPlugin
     */
    readonly name: string

    /**
     * The whole state the plugin is to have afterwards. It replaces what was stored instead of merging into it, so  both the enabled flag and the settings have to be sent every time.
     * @type {WebPluginRequests}
     * @memberof WebpluginsApiUpdateWebPlugin
     */
    readonly webPluginRequests: WebPluginRequests
}

/**
 * WebpluginsApi - object-oriented interface
 * @export
 * @class WebpluginsApi
 * @extends {BaseAPI}
 */
export class WebpluginsApi extends BaseAPI {
    /**
     * Installs a web plugin into the current portal from an uploaded package, and switches the plugin on straight  away. The package is sent as `multipart/form-data` with exactly one file: a `.zip` archive holding a  `config.json` manifest and a `plugin.js` entry point, under the configured size cap of 5 MB by default.  Editing the portal settings is required, so a portal owner or administrator, and the installation has to have  web plugins and plugin uploading enabled in its configuration. Pass `system=true` to install the plugin for  every portal of the installation, which is accepted on standalone installations only. The call is mutating and  not idempotent: a package whose manifest name is already installed replaces the stored files and keeps the  settings saved for that name, and the domains the manifest declares are added to the portal Content Security  Policy. It returns the freshly installed plugin, enabled, with the `url` its script is served from. A portal  holds up to 100 plugins by default, the manifest name has to be lower-case letters, digits, `_`, `.` or `-`,  and the package is rejected when another installed plugin registers the same JavaScript object under a  different name. List what is installed with `GET api/2.0/settings/webplugins`.
     * @summary Add a web plugin
     * @param {SettingsWebpluginsApiAddWebPluginFromFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public addWebPluginFromFile(requestParameters: WebpluginsApiAddWebPluginFromFileRequest = {}, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).addWebPluginFromFile(requestParameters.system, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a web plugin from the current portal and deletes the files of its package from storage. The `name` is  the manifest name published by `GET api/2.0/settings/webplugins`, matched without regard to case. Editing the  portal settings is required, so a portal owner or administrator, and the installation has to have web plugins  and plugin deletion enabled in its configuration. An installation-wide plugin, the one whose `system` field is  true, can be removed on standalone installations only. The call is destructive and cannot be undone: the state  and the settings stored for the plugin are dropped along with its files, the domains its manifest declares are  taken out of the portal Content Security Policy, and the connected clients are notified. Getting the plugin  back means uploading its package again with `POST api/2.0/settings/webplugins`, and the settings it had are  gone. Nothing is returned on success, and a repeated call on a name that is no longer installed is rejected as  not found instead of answered as success. To keep a plugin installed but inactive, switch it off with  `PUT api/2.0/settings/webplugins/{name}` instead.
     * @summary Delete a web plugin
     * @param {SettingsWebpluginsApiDeleteWebPluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public deleteWebPlugin(requestParameters: WebpluginsApiDeleteWebPluginRequest, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).deleteWebPlugin(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one web plugin of the current portal by its manifest name, looked up over the same set as  `GET api/2.0/settings/webplugins`: the installation-wide plugins plus the portal\'s own. The `name` is the  manifest name published in the `name` field of that list, matched without regard to case; it is neither the  localized display name nor the JavaScript object name in `pluginName`, so it cannot be taken from the title  shown in the interface. Any authenticated portal member may call it, no settings permission needed, and the  installation has to have web plugins enabled in its configuration. The call is read-only and idempotent. The  response carries the manifest data along with the state the portal stored for that plugin: `enabled`, the  `settings` string, `system`, and the `url` and `cssUrl` a client loads it from. A name that is not installed  is rejected as not found, and 403 means web plugins are switched off for the installation. Change the state of  the plugin with `PUT api/2.0/settings/webplugins/{name}`.
     * @summary Get a web plugin by name
     * @param {SettingsWebpluginsApiGetWebPluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public getWebPlugin(requestParameters: WebpluginsApiGetWebPluginRequest, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).getWebPlugin(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the web plugins available in the current portal: the plugins installed for the whole installation first,  then the portal\'s own, with a portal plugin dropped when an installation-wide plugin already uses its name.  Any authenticated portal member may call it, no settings permission needed, and the installation has to have  web plugins enabled in its configuration. The call is read-only and idempotent. Pass `enabled=true` or  `enabled=false` to keep only the plugins in that state, and leave the parameter out to get every plugin. Each  entry carries the manifest data together with the state the portal stored for that plugin: `enabled`, the  `settings` string, `system` for an installation-wide plugin, and the `url` and `cssUrl` a client loads the  plugin from. An empty list means nothing is installed for this portal, not that plugins are switched off,  which is refused with 403 instead. The list is capped at the configured maximum, 100 plugins by default, and  is not paginated. For one plugin by its manifest name use `GET api/2.0/settings/webplugins/{name}`.
     * @summary Get web plugins
     * @param {SettingsWebpluginsApiGetWebPluginsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public getWebPlugins(requestParameters: WebpluginsApiGetWebPluginsRequest = {}, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).getWebPlugins(requestParameters.enabled, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches a web plugin of the current portal on or off and stores the settings string the portal keeps for it.  The plugin has to be installed already, so upload its package with `POST api/2.0/settings/webplugins` first,  and `name` is its manifest name as published by `GET api/2.0/settings/webplugins`, matched without regard to  case. Editing the portal settings is required, so a portal owner or administrator, and the installation has to  have web plugins enabled in its configuration. The body replaces the stored state instead of merging into it,  which makes the call idempotent; `settings` is required, so send `{}` when there is nothing to keep, and it is  limited to 255 characters and stored encrypted for this portal alone. Switching the plugin on adds the domains  its manifest declares to the portal Content Security Policy and switching it off takes them away again, and  the connected clients are notified of the new state. Nothing is returned on success. A name that is not  installed is rejected as not found, and 403 means web plugins are switched off or the caller may not edit the  portal settings.
     * @summary Update a web plugin
     * @param {SettingsWebpluginsApiUpdateWebPluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebpluginsApi
     */
    public updateWebPlugin(requestParameters: WebpluginsApiUpdateWebPluginRequest, options?: RawAxiosRequestConfig) {
        return WebpluginsApiFp(this.configuration).updateWebPlugin(requestParameters.name, requestParameters.webPluginRequests, options).then((request) => request(this.axios, this.basePath));
    }
}

