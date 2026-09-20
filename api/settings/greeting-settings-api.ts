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
import type { GreetingSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * GreetingSettingsApi - axios parameter creator
 * @export
 */
export const GreetingSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the greeting title of the current portal - the caption shown as the welcome heading on the sign-in  page, kept as the portal name. Any authenticated user may call it and no administrative right is needed; the  call is read-only. The title comes back as a bare string and is never empty: when the portal has no title of  its own, the built-in default caption is returned instead, localized to the caller\'s language. Because of that  fallback this operation cannot tell a saved title from the default one - call  `GET api/2.0/settings/greetingsettings/isdefault` when that distinction matters. The same string is part of  the portal settings answer as the `greetingSettings` field of `GET api/2.0/settings`, so a client that already  reads the settings needs no separate call. The value is a caption only: it is neither the portal address nor  the white-label logo text of the header, which is returned by `GET api/2.0/settings/whitelabel/logotext`.
         * @summary Get greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-greeting-settings/
         */
        getGreetingSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/greetingsettings`;
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
         * Reports whether the current portal still shows the built-in greeting caption instead of a title of its own.  The check is read-only and open to any authenticated user, with no administrative right required. It answers  `true` while no title is stored for the portal - the state after  `POST api/2.0/settings/greetingsettings/restore` on an installation that configures no portal name, and also  after saving an empty `title` - and `false` as soon as a non-empty title has been saved. Use it together with  `GET api/2.0/settings/greetingsettings`: that operation substitutes the localized default caption for a  missing title, so only these two calls together separate a default greeting from a custom one that happens to  repeat the default wording. The answer covers the greeting title alone; whether the white-label logos and logo  text are still the default ones is reported by `GET api/2.0/settings/whitelabel/logos/isdefault` and  `GET api/2.0/settings/whitelabel/logotext/isdefault`.
         * @summary Check the default greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-greeting-settings/
         */
        getIsDefaultGreetingSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/greetingsettings/isdefault`;
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
         * Drops the custom greeting title of the current portal and puts back the title configured for the installation,  which is an empty value unless the installation defines a portal name of its own. The caller needs the  portal-settings right of a DocSpace administrator, otherwise the call is refused. The change is immediate for  every user of the portal and a second call changes nothing, so a retry after a failed attempt is safe. The  answer is the greeting in force afterwards: the configured title when there is one, and the localized default  caption when the stored title ends up empty - in that case `GET api/2.0/settings/greetingsettings/isdefault`  starts answering `true`. Only the caption is touched: the portal logos and the white-label logo text keep  their values and are reset separately by `PUT api/2.0/settings/whitelabel/logos/restore` and  `PUT api/2.0/settings/whitelabel/logotext/restore`. To set a title instead of the default one use  `POST api/2.0/settings/greetingsettings`.
         * @summary Restore the greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-greeting-settings/
         */
        restoreGreetingSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/greetingsettings/restore`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the greeting title of the current portal with the `title` from the request, storing it as the portal  name. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused.  The new caption takes effect at once for every user of the portal and the change is written to the audit  trail; repeating the call with the same title leaves the portal in the same state. A missing `title` or one  longer than 255 characters is rejected as an invalid request before the handler runs. On a cloud portal with a  free or trial plan the title is also matched against the character rule configured for the installation and a  title that breaks it is refused, while a paid cloud plan and a server installation apply no character check.  An empty `title` clears the greeting: the portal falls back to the built-in default caption and  `GET api/2.0/settings/greetingsettings/isdefault` starts answering `true`. What comes back is a localized  confirmation message, not the stored title - read the title with `GET api/2.0/settings/greetingsettings`.
         * @summary Save the greeting settings
         * @param {GreetingSettingsRequestsDto} [greetingSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-greeting-settings/
         */
        saveGreetingSettings: async (greetingSettingsRequestsDto?: GreetingSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/greetingsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(greetingSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GreetingSettingsApi - functional programming interface
 * @export
 */
export const GreetingSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GreetingSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the greeting title of the current portal - the caption shown as the welcome heading on the sign-in  page, kept as the portal name. Any authenticated user may call it and no administrative right is needed; the  call is read-only. The title comes back as a bare string and is never empty: when the portal has no title of  its own, the built-in default caption is returned instead, localized to the caller\'s language. Because of that  fallback this operation cannot tell a saved title from the default one - call  `GET api/2.0/settings/greetingsettings/isdefault` when that distinction matters. The same string is part of  the portal settings answer as the `greetingSettings` field of `GET api/2.0/settings`, so a client that already  reads the settings needs no separate call. The value is a caption only: it is neither the portal address nor  the white-label logo text of the header, which is returned by `GET api/2.0/settings/whitelabel/logotext`.
         * @summary Get greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-greeting-settings/
         */
        async getGreetingSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGreetingSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GreetingSettingsApi.getGreetingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether the current portal still shows the built-in greeting caption instead of a title of its own.  The check is read-only and open to any authenticated user, with no administrative right required. It answers  `true` while no title is stored for the portal - the state after  `POST api/2.0/settings/greetingsettings/restore` on an installation that configures no portal name, and also  after saving an empty `title` - and `false` as soon as a non-empty title has been saved. Use it together with  `GET api/2.0/settings/greetingsettings`: that operation substitutes the localized default caption for a  missing title, so only these two calls together separate a default greeting from a custom one that happens to  repeat the default wording. The answer covers the greeting title alone; whether the white-label logos and logo  text are still the default ones is reported by `GET api/2.0/settings/whitelabel/logos/isdefault` and  `GET api/2.0/settings/whitelabel/logotext/isdefault`.
         * @summary Check the default greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-greeting-settings/
         */
        async getIsDefaultGreetingSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsDefaultGreetingSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GreetingSettingsApi.getIsDefaultGreetingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Drops the custom greeting title of the current portal and puts back the title configured for the installation,  which is an empty value unless the installation defines a portal name of its own. The caller needs the  portal-settings right of a DocSpace administrator, otherwise the call is refused. The change is immediate for  every user of the portal and a second call changes nothing, so a retry after a failed attempt is safe. The  answer is the greeting in force afterwards: the configured title when there is one, and the localized default  caption when the stored title ends up empty - in that case `GET api/2.0/settings/greetingsettings/isdefault`  starts answering `true`. Only the caption is touched: the portal logos and the white-label logo text keep  their values and are reset separately by `PUT api/2.0/settings/whitelabel/logos/restore` and  `PUT api/2.0/settings/whitelabel/logotext/restore`. To set a title instead of the default one use  `POST api/2.0/settings/greetingsettings`.
         * @summary Restore the greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-greeting-settings/
         */
        async restoreGreetingSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restoreGreetingSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GreetingSettingsApi.restoreGreetingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the greeting title of the current portal with the `title` from the request, storing it as the portal  name. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused.  The new caption takes effect at once for every user of the portal and the change is written to the audit  trail; repeating the call with the same title leaves the portal in the same state. A missing `title` or one  longer than 255 characters is rejected as an invalid request before the handler runs. On a cloud portal with a  free or trial plan the title is also matched against the character rule configured for the installation and a  title that breaks it is refused, while a paid cloud plan and a server installation apply no character check.  An empty `title` clears the greeting: the portal falls back to the built-in default caption and  `GET api/2.0/settings/greetingsettings/isdefault` starts answering `true`. What comes back is a localized  confirmation message, not the stored title - read the title with `GET api/2.0/settings/greetingsettings`.
         * @summary Save the greeting settings
         * @param {GreetingSettingsRequestsDto} [greetingSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-greeting-settings/
         */
        async saveGreetingSettings(greetingSettingsRequestsDto?: GreetingSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveGreetingSettings(greetingSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GreetingSettingsApi.saveGreetingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * GreetingSettingsApi - factory interface
 * @export
 */
export const GreetingSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GreetingSettingsApiFp(configuration)
    return {
        /**
         * Returns the greeting title of the current portal - the caption shown as the welcome heading on the sign-in  page, kept as the portal name. Any authenticated user may call it and no administrative right is needed; the  call is read-only. The title comes back as a bare string and is never empty: when the portal has no title of  its own, the built-in default caption is returned instead, localized to the caller\'s language. Because of that  fallback this operation cannot tell a saved title from the default one - call  `GET api/2.0/settings/greetingsettings/isdefault` when that distinction matters. The same string is part of  the portal settings answer as the `greetingSettings` field of `GET api/2.0/settings`, so a client that already  reads the settings needs no separate call. The value is a caption only: it is neither the portal address nor  the white-label logo text of the header, which is returned by `GET api/2.0/settings/whitelabel/logotext`.
         * @summary Get greeting settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-greeting-settings/
         * @throws {RequiredError}
         */
        getGreetingSettings(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getGreetingSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether the current portal still shows the built-in greeting caption instead of a title of its own.  The check is read-only and open to any authenticated user, with no administrative right required. It answers  `true` while no title is stored for the portal - the state after  `POST api/2.0/settings/greetingsettings/restore` on an installation that configures no portal name, and also  after saving an empty `title` - and `false` as soon as a non-empty title has been saved. Use it together with  `GET api/2.0/settings/greetingsettings`: that operation substitutes the localized default caption for a  missing title, so only these two calls together separate a default greeting from a custom one that happens to  repeat the default wording. The answer covers the greeting title alone; whether the white-label logos and logo  text are still the default ones is reported by `GET api/2.0/settings/whitelabel/logos/isdefault` and  `GET api/2.0/settings/whitelabel/logotext/isdefault`.
         * @summary Check the default greeting settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsDefaultGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-greeting-settings/
         * @throws {RequiredError}
         */
        getIsDefaultGreetingSettings(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getIsDefaultGreetingSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Drops the custom greeting title of the current portal and puts back the title configured for the installation,  which is an empty value unless the installation defines a portal name of its own. The caller needs the  portal-settings right of a DocSpace administrator, otherwise the call is refused. The change is immediate for  every user of the portal and a second call changes nothing, so a retry after a failed attempt is safe. The  answer is the greeting in force afterwards: the configured title when there is one, and the localized default  caption when the stored title ends up empty - in that case `GET api/2.0/settings/greetingsettings/isdefault`  starts answering `true`. Only the caption is touched: the portal logos and the white-label logo text keep  their values and are reset separately by `PUT api/2.0/settings/whitelabel/logos/restore` and  `PUT api/2.0/settings/whitelabel/logotext/restore`. To set a title instead of the default one use  `POST api/2.0/settings/greetingsettings`.
         * @summary Restore the greeting settings
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-greeting-settings/
         * @throws {RequiredError}
         */
        restoreGreetingSettings(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.restoreGreetingSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the greeting title of the current portal with the `title` from the request, storing it as the portal  name. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused.  The new caption takes effect at once for every user of the portal and the change is written to the audit  trail; repeating the call with the same title leaves the portal in the same state. A missing `title` or one  longer than 255 characters is rejected as an invalid request before the handler runs. On a cloud portal with a  free or trial plan the title is also matched against the character rule configured for the installation and a  title that breaks it is refused, while a paid cloud plan and a server installation apply no character check.  An empty `title` clears the greeting: the portal falls back to the built-in default caption and  `GET api/2.0/settings/greetingsettings/isdefault` starts answering `true`. What comes back is a localized  confirmation message, not the stored title - read the title with `GET api/2.0/settings/greetingsettings`.
         * @summary Save the greeting settings
         * @param {GreetingSettingsApiSaveGreetingSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-greeting-settings/
         * @throws {RequiredError}
         */
        saveGreetingSettings(requestParameters: GreetingSettingsApiSaveGreetingSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.saveGreetingSettings(requestParameters.greetingSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for saveGreetingSettings operation in GreetingSettingsApi.
 * @export
 * @interface GreetingSettingsApiSaveGreetingSettingsRequest
 */
export interface GreetingSettingsApiSaveGreetingSettingsRequest {
    /**
     * 
     * @type {GreetingSettingsRequestsDto}
     * @memberof GreetingSettingsApiSaveGreetingSettings
     */
    readonly greetingSettingsRequestsDto?: GreetingSettingsRequestsDto
}

/**
 * GreetingSettingsApi - object-oriented interface
 * @export
 * @class GreetingSettingsApi
 * @extends {BaseAPI}
 */
export class GreetingSettingsApi extends BaseAPI {
    /**
     * Returns the greeting title of the current portal - the caption shown as the welcome heading on the sign-in  page, kept as the portal name. Any authenticated user may call it and no administrative right is needed; the  call is read-only. The title comes back as a bare string and is never empty: when the portal has no title of  its own, the built-in default caption is returned instead, localized to the caller\'s language. Because of that  fallback this operation cannot tell a saved title from the default one - call  `GET api/2.0/settings/greetingsettings/isdefault` when that distinction matters. The same string is part of  the portal settings answer as the `greetingSettings` field of `GET api/2.0/settings`, so a client that already  reads the settings needs no separate call. The value is a caption only: it is neither the portal address nor  the white-label logo text of the header, which is returned by `GET api/2.0/settings/whitelabel/logotext`.
     * @summary Get greeting settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GreetingSettingsApi
     */
    public getGreetingSettings(options?: RawAxiosRequestConfig) {
        return GreetingSettingsApiFp(this.configuration).getGreetingSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether the current portal still shows the built-in greeting caption instead of a title of its own.  The check is read-only and open to any authenticated user, with no administrative right required. It answers  `true` while no title is stored for the portal - the state after  `POST api/2.0/settings/greetingsettings/restore` on an installation that configures no portal name, and also  after saving an empty `title` - and `false` as soon as a non-empty title has been saved. Use it together with  `GET api/2.0/settings/greetingsettings`: that operation substitutes the localized default caption for a  missing title, so only these two calls together separate a default greeting from a custom one that happens to  repeat the default wording. The answer covers the greeting title alone; whether the white-label logos and logo  text are still the default ones is reported by `GET api/2.0/settings/whitelabel/logos/isdefault` and  `GET api/2.0/settings/whitelabel/logotext/isdefault`.
     * @summary Check the default greeting settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GreetingSettingsApi
     */
    public getIsDefaultGreetingSettings(options?: RawAxiosRequestConfig) {
        return GreetingSettingsApiFp(this.configuration).getIsDefaultGreetingSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Drops the custom greeting title of the current portal and puts back the title configured for the installation,  which is an empty value unless the installation defines a portal name of its own. The caller needs the  portal-settings right of a DocSpace administrator, otherwise the call is refused. The change is immediate for  every user of the portal and a second call changes nothing, so a retry after a failed attempt is safe. The  answer is the greeting in force afterwards: the configured title when there is one, and the localized default  caption when the stored title ends up empty - in that case `GET api/2.0/settings/greetingsettings/isdefault`  starts answering `true`. Only the caption is touched: the portal logos and the white-label logo text keep  their values and are reset separately by `PUT api/2.0/settings/whitelabel/logos/restore` and  `PUT api/2.0/settings/whitelabel/logotext/restore`. To set a title instead of the default one use  `POST api/2.0/settings/greetingsettings`.
     * @summary Restore the greeting settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GreetingSettingsApi
     */
    public restoreGreetingSettings(options?: RawAxiosRequestConfig) {
        return GreetingSettingsApiFp(this.configuration).restoreGreetingSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the greeting title of the current portal with the `title` from the request, storing it as the portal  name. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused.  The new caption takes effect at once for every user of the portal and the change is written to the audit  trail; repeating the call with the same title leaves the portal in the same state. A missing `title` or one  longer than 255 characters is rejected as an invalid request before the handler runs. On a cloud portal with a  free or trial plan the title is also matched against the character rule configured for the installation and a  title that breaks it is refused, while a paid cloud plan and a server installation apply no character check.  An empty `title` clears the greeting: the portal falls back to the built-in default caption and  `GET api/2.0/settings/greetingsettings/isdefault` starts answering `true`. What comes back is a localized  confirmation message, not the stored title - read the title with `GET api/2.0/settings/greetingsettings`.
     * @summary Save the greeting settings
     * @param {SettingsGreetingSettingsApiSaveGreetingSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GreetingSettingsApi
     */
    public saveGreetingSettings(requestParameters: GreetingSettingsApiSaveGreetingSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return GreetingSettingsApiFp(this.configuration).saveGreetingSettings(requestParameters.greetingSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

