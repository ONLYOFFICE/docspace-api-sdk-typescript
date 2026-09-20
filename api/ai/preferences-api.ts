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
import type { AiAiReasoningLevel } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiPreferencesSetDeepModeRequest } from '../../models';
// @ts-ignore
import type { AiPreferencesSetReasoningLevelRequest } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
/**
 * PreferencesApi - axios parameter creator
 * @export
 */
export const PreferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Removes the stored extended-thinking setting of a scope (the depth and, with it, the deep-mode toggle), after which reads fall back to the configured default rather than to false. `entityId` picks a room and omitting it clears the portal-wide preference. Clearing a scope that has no stored value is not an error. This differs from storing false, which is an explicit choice a later read reports as set.
         * @summary Clear deep mode
         * @param {string} body The ID of the room whose preference is cleared, as a bare JSON string. Send an empty body to clear the portal-wide preference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesClearDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-clear-deep-mode/
         */
        aiPreferencesClearDeepMode: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiPreferencesClearDeepMode', 'body', body)

            const localVarPath = `/api/2.0/ai/preferences/clear-deep-mode`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the deep-mode toggle of a scope, as a bare boolean: whether the stored extended-thinking depth is above `off`. `entityId` picks a room and omitting it reads the portal-wide preference. A scope that has never had a value stored falls back to the configured default, so the answer never distinguishes off from unset - ask `GET api/2.0/ai/preferences/is-deep-mode-set` for that. This is a read-only operation.
         * @summary Get deep mode
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesGetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-get-deep-mode/
         */
        aiPreferencesGetDeepMode: async (entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/preferences/get-deep-mode`;
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

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * Returns the effective extended-thinking depth of the scope: `off` while deep mode is off, otherwise the persisted depth (`low`, `medium`, `high`, `max`), falling back to the default depth (`medium`) when none has been stored. `entityId` picks a room and omitting it reads the portal-wide preference. Providers clamp the depth to what the model accepts.
         * @summary Get reasoning level
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesGetReasoningLevel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-get-reasoning-level/
         */
        aiPreferencesGetReasoningLevel: async (entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/preferences/get-reasoning-level`;
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

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * Tells whether a scope has an explicitly persisted extended-thinking setting of its own, as opposed to inheriting the configured default. `entityId` picks a room and omitting it asks about the portal-wide preference. A true answer means a value was stored, whether that value is on or off - read the value itself with `GET api/2.0/ai/preferences/get-deep-mode`. This is the check a settings screen uses to show an explicit override rather than an inherited state.
         * @summary Is deep mode set
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesIsDeepModeSet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-is-deep-mode-set/
         */
        aiPreferencesIsDeepModeSet: async (entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/preferences/is-deep-mode-set`;
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

            if (entityId !== undefined) {
                localVarQueryParameter['entityId'] = entityId;
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
         * Stores the deep-mode toggle of a scope. `false` stores the `off` depth; `true` keeps the depth already stored and falls back to the default depth (`medium`) when none is. `value` has to be a real boolean: a string, a number or an absent value is rejected rather than coerced, so the string false cannot silently switch the setting on and an empty request cannot silently switch it off. `entityId` picks a room and omitting it writes the portal-wide preference. It is idempotent, so there is no need to read the current value first.
         * @summary Set deep mode
         * @param {AiPreferencesSetDeepModeRequest} aiPreferencesSetDeepModeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesSetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-set-deep-mode/
         */
        aiPreferencesSetDeepMode: async (aiPreferencesSetDeepModeRequest: AiPreferencesSetDeepModeRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiPreferencesSetDeepModeRequest' is not null or undefined
            assertParamExists('aiPreferencesSetDeepMode', 'aiPreferencesSetDeepModeRequest', aiPreferencesSetDeepModeRequest)

            const localVarPath = `/api/2.0/ai/preferences/set-deep-mode`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiPreferencesSetDeepModeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Persists the extended-thinking depth of the scope as its single stored value: a depth turns deep mode on at that depth, `off` turns it off and replaces the stored depth (a later deep-mode `true` without a depth lands on `medium`). `entityId` picks a room and omitting it writes the portal-wide preference. Idempotent.
         * @summary Set reasoning level
         * @param {AiPreferencesSetReasoningLevelRequest} aiPreferencesSetReasoningLevelRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesSetReasoningLevel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-set-reasoning-level/
         */
        aiPreferencesSetReasoningLevel: async (aiPreferencesSetReasoningLevelRequest: AiPreferencesSetReasoningLevelRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiPreferencesSetReasoningLevelRequest' is not null or undefined
            assertParamExists('aiPreferencesSetReasoningLevel', 'aiPreferencesSetReasoningLevelRequest', aiPreferencesSetReasoningLevelRequest)

            const localVarPath = `/api/2.0/ai/preferences/set-reasoning-level`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiPreferencesSetReasoningLevelRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PreferencesApi - functional programming interface
 * @export
 */
export const PreferencesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PreferencesApiAxiosParamCreator(configuration)
    return {
        /**
         * Removes the stored extended-thinking setting of a scope (the depth and, with it, the deep-mode toggle), after which reads fall back to the configured default rather than to false. `entityId` picks a room and omitting it clears the portal-wide preference. Clearing a scope that has no stored value is not an error. This differs from storing false, which is an explicit choice a later read reports as set.
         * @summary Clear deep mode
         * @param {string} body The ID of the room whose preference is cleared, as a bare JSON string. Send an empty body to clear the portal-wide preference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesClearDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-clear-deep-mode/
         */
        async aiPreferencesClearDeepMode(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPreferencesClearDeepMode(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.aiPreferencesClearDeepMode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the deep-mode toggle of a scope, as a bare boolean: whether the stored extended-thinking depth is above `off`. `entityId` picks a room and omitting it reads the portal-wide preference. A scope that has never had a value stored falls back to the configured default, so the answer never distinguishes off from unset - ask `GET api/2.0/ai/preferences/is-deep-mode-set` for that. This is a read-only operation.
         * @summary Get deep mode
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesGetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-get-deep-mode/
         */
        async aiPreferencesGetDeepMode(entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPreferencesGetDeepMode(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.aiPreferencesGetDeepMode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the effective extended-thinking depth of the scope: `off` while deep mode is off, otherwise the persisted depth (`low`, `medium`, `high`, `max`), falling back to the default depth (`medium`) when none has been stored. `entityId` picks a room and omitting it reads the portal-wide preference. Providers clamp the depth to what the model accepts.
         * @summary Get reasoning level
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesGetReasoningLevel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-get-reasoning-level/
         */
        async aiPreferencesGetReasoningLevel(entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAiReasoningLevel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPreferencesGetReasoningLevel(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.aiPreferencesGetReasoningLevel']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Tells whether a scope has an explicitly persisted extended-thinking setting of its own, as opposed to inheriting the configured default. `entityId` picks a room and omitting it asks about the portal-wide preference. A true answer means a value was stored, whether that value is on or off - read the value itself with `GET api/2.0/ai/preferences/get-deep-mode`. This is the check a settings screen uses to show an explicit override rather than an inherited state.
         * @summary Is deep mode set
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesIsDeepModeSet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-is-deep-mode-set/
         */
        async aiPreferencesIsDeepModeSet(entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPreferencesIsDeepModeSet(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.aiPreferencesIsDeepModeSet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores the deep-mode toggle of a scope. `false` stores the `off` depth; `true` keeps the depth already stored and falls back to the default depth (`medium`) when none is. `value` has to be a real boolean: a string, a number or an absent value is rejected rather than coerced, so the string false cannot silently switch the setting on and an empty request cannot silently switch it off. `entityId` picks a room and omitting it writes the portal-wide preference. It is idempotent, so there is no need to read the current value first.
         * @summary Set deep mode
         * @param {AiPreferencesSetDeepModeRequest} aiPreferencesSetDeepModeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesSetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-set-deep-mode/
         */
        async aiPreferencesSetDeepMode(aiPreferencesSetDeepModeRequest: AiPreferencesSetDeepModeRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPreferencesSetDeepMode(aiPreferencesSetDeepModeRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.aiPreferencesSetDeepMode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Persists the extended-thinking depth of the scope as its single stored value: a depth turns deep mode on at that depth, `off` turns it off and replaces the stored depth (a later deep-mode `true` without a depth lands on `medium`). `entityId` picks a room and omitting it writes the portal-wide preference. Idempotent.
         * @summary Set reasoning level
         * @param {AiPreferencesSetReasoningLevelRequest} aiPreferencesSetReasoningLevelRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiPreferencesSetReasoningLevel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-set-reasoning-level/
         */
        async aiPreferencesSetReasoningLevel(aiPreferencesSetReasoningLevelRequest: AiPreferencesSetReasoningLevelRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiPreferencesSetReasoningLevel(aiPreferencesSetReasoningLevelRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PreferencesApi.aiPreferencesSetReasoningLevel']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PreferencesApi - factory interface
 * @export
 */
export const PreferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PreferencesApiFp(configuration)
    return {
        /**
         * Removes the stored extended-thinking setting of a scope (the depth and, with it, the deep-mode toggle), after which reads fall back to the configured default rather than to false. `entityId` picks a room and omitting it clears the portal-wide preference. Clearing a scope that has no stored value is not an error. This differs from storing false, which is an explicit choice a later read reports as set.
         * @summary Clear deep mode
         * @param {PreferencesApiAiPreferencesClearDeepModeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPreferencesClearDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-clear-deep-mode/
         * @throws {RequiredError}
         */
        aiPreferencesClearDeepMode(requestParameters: PreferencesApiAiPreferencesClearDeepModeRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiPreferencesClearDeepMode(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the deep-mode toggle of a scope, as a bare boolean: whether the stored extended-thinking depth is above `off`. `entityId` picks a room and omitting it reads the portal-wide preference. A scope that has never had a value stored falls back to the configured default, so the answer never distinguishes off from unset - ask `GET api/2.0/ai/preferences/is-deep-mode-set` for that. This is a read-only operation.
         * @summary Get deep mode
         * @param {PreferencesApiAiPreferencesGetDeepModeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPreferencesGetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-get-deep-mode/
         * @throws {RequiredError}
         */
        aiPreferencesGetDeepMode(requestParameters: PreferencesApiAiPreferencesGetDeepModeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.aiPreferencesGetDeepMode(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the effective extended-thinking depth of the scope: `off` while deep mode is off, otherwise the persisted depth (`low`, `medium`, `high`, `max`), falling back to the default depth (`medium`) when none has been stored. `entityId` picks a room and omitting it reads the portal-wide preference. Providers clamp the depth to what the model accepts.
         * @summary Get reasoning level
         * @param {PreferencesApiAiPreferencesGetReasoningLevelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPreferencesGetReasoningLevel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-get-reasoning-level/
         * @throws {RequiredError}
         */
        aiPreferencesGetReasoningLevel(requestParameters: PreferencesApiAiPreferencesGetReasoningLevelRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AiAiReasoningLevel> {
            return localVarFp.aiPreferencesGetReasoningLevel(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Tells whether a scope has an explicitly persisted extended-thinking setting of its own, as opposed to inheriting the configured default. `entityId` picks a room and omitting it asks about the portal-wide preference. A true answer means a value was stored, whether that value is on or off - read the value itself with `GET api/2.0/ai/preferences/get-deep-mode`. This is the check a settings screen uses to show an explicit override rather than an inherited state.
         * @summary Is deep mode set
         * @param {PreferencesApiAiPreferencesIsDeepModeSetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPreferencesIsDeepModeSet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-is-deep-mode-set/
         * @throws {RequiredError}
         */
        aiPreferencesIsDeepModeSet(requestParameters: PreferencesApiAiPreferencesIsDeepModeSetRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.aiPreferencesIsDeepModeSet(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores the deep-mode toggle of a scope. `false` stores the `off` depth; `true` keeps the depth already stored and falls back to the default depth (`medium`) when none is. `value` has to be a real boolean: a string, a number or an absent value is rejected rather than coerced, so the string false cannot silently switch the setting on and an empty request cannot silently switch it off. `entityId` picks a room and omitting it writes the portal-wide preference. It is idempotent, so there is no need to read the current value first.
         * @summary Set deep mode
         * @param {PreferencesApiAiPreferencesSetDeepModeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPreferencesSetDeepMode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-set-deep-mode/
         * @throws {RequiredError}
         */
        aiPreferencesSetDeepMode(requestParameters: PreferencesApiAiPreferencesSetDeepModeRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiPreferencesSetDeepMode(requestParameters.aiPreferencesSetDeepModeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Persists the extended-thinking depth of the scope as its single stored value: a depth turns deep mode on at that depth, `off` turns it off and replaces the stored depth (a later deep-mode `true` without a depth lands on `medium`). `entityId` picks a room and omitting it writes the portal-wide preference. Idempotent.
         * @summary Set reasoning level
         * @param {PreferencesApiAiPreferencesSetReasoningLevelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiPreferencesSetReasoningLevel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-preferences-set-reasoning-level/
         * @throws {RequiredError}
         */
        aiPreferencesSetReasoningLevel(requestParameters: PreferencesApiAiPreferencesSetReasoningLevelRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiPreferencesSetReasoningLevel(requestParameters.aiPreferencesSetReasoningLevelRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiPreferencesClearDeepMode operation in PreferencesApi.
 * @export
 * @interface PreferencesApiAiPreferencesClearDeepModeRequest
 */
export interface PreferencesApiAiPreferencesClearDeepModeRequest {
    /**
     * The ID of the room whose preference is cleared, as a bare JSON string. Send an empty body to clear the portal-wide preference.
     * @type {string}
     * @memberof PreferencesApiAiPreferencesClearDeepMode
     */
    readonly body: string
}

/**
 * Request parameters for aiPreferencesGetDeepMode operation in PreferencesApi.
 * @export
 * @interface PreferencesApiAiPreferencesGetDeepModeRequest
 */
export interface PreferencesApiAiPreferencesGetDeepModeRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof PreferencesApiAiPreferencesGetDeepMode
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiPreferencesGetReasoningLevel operation in PreferencesApi.
 * @export
 * @interface PreferencesApiAiPreferencesGetReasoningLevelRequest
 */
export interface PreferencesApiAiPreferencesGetReasoningLevelRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof PreferencesApiAiPreferencesGetReasoningLevel
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiPreferencesIsDeepModeSet operation in PreferencesApi.
 * @export
 * @interface PreferencesApiAiPreferencesIsDeepModeSetRequest
 */
export interface PreferencesApiAiPreferencesIsDeepModeSetRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof PreferencesApiAiPreferencesIsDeepModeSet
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiPreferencesSetDeepMode operation in PreferencesApi.
 * @export
 * @interface PreferencesApiAiPreferencesSetDeepModeRequest
 */
export interface PreferencesApiAiPreferencesSetDeepModeRequest {
    /**
     * 
     * @type {AiPreferencesSetDeepModeRequest}
     * @memberof PreferencesApiAiPreferencesSetDeepMode
     */
    readonly aiPreferencesSetDeepModeRequest: AiPreferencesSetDeepModeRequest
}

/**
 * Request parameters for aiPreferencesSetReasoningLevel operation in PreferencesApi.
 * @export
 * @interface PreferencesApiAiPreferencesSetReasoningLevelRequest
 */
export interface PreferencesApiAiPreferencesSetReasoningLevelRequest {
    /**
     * 
     * @type {AiPreferencesSetReasoningLevelRequest}
     * @memberof PreferencesApiAiPreferencesSetReasoningLevel
     */
    readonly aiPreferencesSetReasoningLevelRequest: AiPreferencesSetReasoningLevelRequest
}

/**
 * PreferencesApi - object-oriented interface
 * @export
 * @class PreferencesApi
 * @extends {BaseAPI}
 */
export class PreferencesApi extends BaseAPI {
    /**
     * Removes the stored extended-thinking setting of a scope (the depth and, with it, the deep-mode toggle), after which reads fall back to the configured default rather than to false. `entityId` picks a room and omitting it clears the portal-wide preference. Clearing a scope that has no stored value is not an error. This differs from storing false, which is an explicit choice a later read reports as set.
     * @summary Clear deep mode
     * @param {AIPreferencesApiAiPreferencesClearDeepModeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public aiPreferencesClearDeepMode(requestParameters: PreferencesApiAiPreferencesClearDeepModeRequest, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).aiPreferencesClearDeepMode(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the deep-mode toggle of a scope, as a bare boolean: whether the stored extended-thinking depth is above `off`. `entityId` picks a room and omitting it reads the portal-wide preference. A scope that has never had a value stored falls back to the configured default, so the answer never distinguishes off from unset - ask `GET api/2.0/ai/preferences/is-deep-mode-set` for that. This is a read-only operation.
     * @summary Get deep mode
     * @param {AIPreferencesApiAiPreferencesGetDeepModeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public aiPreferencesGetDeepMode(requestParameters: PreferencesApiAiPreferencesGetDeepModeRequest = {}, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).aiPreferencesGetDeepMode(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the effective extended-thinking depth of the scope: `off` while deep mode is off, otherwise the persisted depth (`low`, `medium`, `high`, `max`), falling back to the default depth (`medium`) when none has been stored. `entityId` picks a room and omitting it reads the portal-wide preference. Providers clamp the depth to what the model accepts.
     * @summary Get reasoning level
     * @param {AIPreferencesApiAiPreferencesGetReasoningLevelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public aiPreferencesGetReasoningLevel(requestParameters: PreferencesApiAiPreferencesGetReasoningLevelRequest = {}, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).aiPreferencesGetReasoningLevel(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tells whether a scope has an explicitly persisted extended-thinking setting of its own, as opposed to inheriting the configured default. `entityId` picks a room and omitting it asks about the portal-wide preference. A true answer means a value was stored, whether that value is on or off - read the value itself with `GET api/2.0/ai/preferences/get-deep-mode`. This is the check a settings screen uses to show an explicit override rather than an inherited state.
     * @summary Is deep mode set
     * @param {AIPreferencesApiAiPreferencesIsDeepModeSetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public aiPreferencesIsDeepModeSet(requestParameters: PreferencesApiAiPreferencesIsDeepModeSetRequest = {}, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).aiPreferencesIsDeepModeSet(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores the deep-mode toggle of a scope. `false` stores the `off` depth; `true` keeps the depth already stored and falls back to the default depth (`medium`) when none is. `value` has to be a real boolean: a string, a number or an absent value is rejected rather than coerced, so the string false cannot silently switch the setting on and an empty request cannot silently switch it off. `entityId` picks a room and omitting it writes the portal-wide preference. It is idempotent, so there is no need to read the current value first.
     * @summary Set deep mode
     * @param {AIPreferencesApiAiPreferencesSetDeepModeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public aiPreferencesSetDeepMode(requestParameters: PreferencesApiAiPreferencesSetDeepModeRequest, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).aiPreferencesSetDeepMode(requestParameters.aiPreferencesSetDeepModeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Persists the extended-thinking depth of the scope as its single stored value: a depth turns deep mode on at that depth, `off` turns it off and replaces the stored depth (a later deep-mode `true` without a depth lands on `medium`). `entityId` picks a room and omitting it writes the portal-wide preference. Idempotent.
     * @summary Set reasoning level
     * @param {AIPreferencesApiAiPreferencesSetReasoningLevelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public aiPreferencesSetReasoningLevel(requestParameters: PreferencesApiAiPreferencesSetReasoningLevelRequest, options?: RawAxiosRequestConfig) {
        return PreferencesApiFp(this.configuration).aiPreferencesSetReasoningLevel(requestParameters.aiPreferencesSetReasoningLevelRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

