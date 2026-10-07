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
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiProfilesTestConnection200Response } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
// @ts-ignore
import type { AiWebSearchConfig } from '../../models';
// @ts-ignore
import type { AiWebSearchConfigureRequest } from '../../models';
// @ts-ignore
import type { AiWebSearchMutationResult } from '../../models';
// @ts-ignore
import type { AiWebSearchSetActiveConfigRequest } from '../../models';
/**
 * WebSearchApi - axios parameter creator
 * @export
 */
export const WebSearchApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Removes the portal\'s web-search configuration, after which web search is unavailable everywhere it was not configured separately. This is not scoped: it takes no `entityId` and any body sent with it is ignored, so it cannot be used to clear one room\'s configuration. Clearing an already-unconfigured portal is not an error and the call answers success either way. The stored provider key is destroyed with the configuration and has to be entered again.
         * @summary Clear the web-search configuration
         * @param {string} aiWebSearchClearRequest Ignored. The operation always clears the portal-wide configuration, so send an empty body; a value here does not scope it to a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchClear operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-clear/
         */
        aiWebSearchClear: async (aiWebSearchClearRequest: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiWebSearchClearRequest' is not null or undefined
            assertParamExists('aiWebSearchClear', 'aiWebSearchClearRequest', aiWebSearchClearRequest)

            const localVarPath = `/api/2.0/ai/web-search/clear`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiWebSearchClearRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Validates a web-search configuration against the live provider and stores it only if the provider answers, which makes it the safe way to save a form in one step. `entityId` scopes the configuration to a room and has to name one the caller can open; omitting it configures the portal. A `baseUrl` pointing at a private network address is refused. Use `PUT api/2.0/ai/web-search/set-active-config` when the configuration should be stored without a provider round trip.
         * @summary Configure and verify web search
         * @param {AiWebSearchConfigureRequest} aiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchConfigure operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-configure/
         */
        aiWebSearchConfigure: async (aiWebSearchConfigureRequest: AiWebSearchConfigureRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiWebSearchConfigureRequest' is not null or undefined
            assertParamExists('aiWebSearchConfigure', 'aiWebSearchConfigureRequest', aiWebSearchConfigureRequest)

            const localVarPath = `/api/2.0/ai/web-search/configure`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiWebSearchConfigureRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the web-search configuration in force for a scope - the provider, its endpoint and its settings. `entityId` picks a room and has to name one the caller can open; omitting it reads the portal-wide configuration, and a room with none of its own falls back to that. An unconfigured scope answers an empty result rather than 404. The provider key is not part of the answer, so a client cannot read it back after storing it.
         * @summary Get active config
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchGetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-get-active-config/
         */
        aiWebSearchGetActiveConfig: async (entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/web-search/get-active-config`;
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
         * Tells whether web search is available in a scope, as a bare boolean, which is the cheap check for hiding or showing the feature. `entityId` picks a room and has to name one the caller can open. It reports the same state as `GET api/2.0/ai/web-search/get-active-config` without transferring the configuration itself. A true answer means a provider is stored, not that the provider is currently reachable - probe that with `POST api/2.0/ai/web-search/test-connection`.
         * @summary Is configured
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchIsConfigured operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-is-configured/
         */
        aiWebSearchIsConfigured: async (entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/web-search/is-configured`;
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
         * Fetches the contents of web pages on behalf of the document editor\'s AI plugin, against the portal\'s active web-search provider, exactly as the search passthrough does — including the `entityId` / `entityKind` billing attribution. The portal-wide configuration is used and a portal without one answers 404. The provider\'s status, body and content type are relayed verbatim, so its 429 and its failures surface unchanged. This is the follow-up to `POST api/2.0/ai/websearch/v1/search`, which returns the results whose contents this operation retrieves.
         * @summary Web page contents passthrough
         * @param {{ [key: string]: any | null; }} aiWebSearchPassthroughContentsRequest A page-contents request in the shape the portal\'s active web-search provider expects, forwarded to it unchanged. The endpoint and the key come from the stored configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchPassthroughContents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-passthrough-contents/
         */
        aiWebSearchPassthroughContents: async (aiWebSearchPassthroughContentsRequest: { [key: string]: any | null; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiWebSearchPassthroughContentsRequest' is not null or undefined
            assertParamExists('aiWebSearchPassthroughContents', 'aiWebSearchPassthroughContentsRequest', aiWebSearchPassthroughContentsRequest)

            const localVarPath = `/api/2.0/ai/websearch/v1/contents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiWebSearchPassthroughContentsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Runs a web search on behalf of the document editor\'s AI plugin, which holds only a placeholder configuration - the portal\'s active provider and its key are resolved here, so neither ever reaches the browser. The portal-wide configuration is used, and a portal without one answers 404. The `entityId` and `entityKind` query parameters name the document the search is billed to; with the ONLYOFFICE provider the entry is resolved under the caller\'s credentials and sent to the gateway as the request `metadata` (`source_id` / `source_type` / `source_title`), and an entry the caller cannot open sends none. The provider\'s own status, body and content type are relayed as they stand, so a provider that rate-limits answers 429 and one that is unreachable answers 502. Closing the connection aborts the upstream request.
         * @summary Web search passthrough
         * @param {{ [key: string]: any | null; }} aiWebSearchPassthroughSearchRequest A search request in the shape the portal\'s active web-search provider expects, forwarded to it unchanged. The endpoint and the key come from the stored configuration and must not be sent here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchPassthroughSearch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-passthrough-search/
         */
        aiWebSearchPassthroughSearch: async (aiWebSearchPassthroughSearchRequest: { [key: string]: any | null; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiWebSearchPassthroughSearchRequest' is not null or undefined
            assertParamExists('aiWebSearchPassthroughSearch', 'aiWebSearchPassthroughSearchRequest', aiWebSearchPassthroughSearchRequest)

            const localVarPath = `/api/2.0/ai/websearch/v1/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiWebSearchPassthroughSearchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores a web-search configuration without contacting the provider first, for a form that has already validated its input or for restoring a known-good configuration. `entityId` scopes it to a room and has to name one the caller can open. A `baseUrl` pointing at a private network address is still refused, because that check is local. Nothing guarantees the stored provider works: follow up with `POST api/2.0/ai/web-search/test-connection`, or use `PUT api/2.0/ai/web-search/configure` to have the store gated on a live probe.
         * @summary Set active config
         * @param {AiWebSearchSetActiveConfigRequest} aiWebSearchSetActiveConfigRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchSetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-set-active-config/
         */
        aiWebSearchSetActiveConfig: async (aiWebSearchSetActiveConfigRequest: AiWebSearchSetActiveConfigRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiWebSearchSetActiveConfigRequest' is not null or undefined
            assertParamExists('aiWebSearchSetActiveConfig', 'aiWebSearchSetActiveConfigRequest', aiWebSearchSetActiveConfigRequest)

            const localVarPath = `/api/2.0/ai/web-search/set-active-config`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiWebSearchSetActiveConfigRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Probes a web-search configuration against the live provider and reports the outcome, storing nothing - this is what a Test button calls so that a failure commits no state. The configuration is taken from the request rather than from storage, so credentials that were never saved can be checked. A `baseUrl` pointing at a private network address is refused before any request leaves the portal. The verdict is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload.
         * @summary Test a web-search provider
         * @param {AiWebSearchConfig} aiWebSearchConfig 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-test-connection/
         */
        aiWebSearchTestConnection: async (aiWebSearchConfig: AiWebSearchConfig, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiWebSearchConfig' is not null or undefined
            assertParamExists('aiWebSearchTestConnection', 'aiWebSearchConfig', aiWebSearchConfig)

            const localVarPath = `/api/2.0/ai/web-search/test-connection`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiWebSearchConfig, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebSearchApi - functional programming interface
 * @export
 */
export const WebSearchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebSearchApiAxiosParamCreator(configuration)
    return {
        /**
         * Removes the portal\'s web-search configuration, after which web search is unavailable everywhere it was not configured separately. This is not scoped: it takes no `entityId` and any body sent with it is ignored, so it cannot be used to clear one room\'s configuration. Clearing an already-unconfigured portal is not an error and the call answers success either way. The stored provider key is destroyed with the configuration and has to be entered again.
         * @summary Clear the web-search configuration
         * @param {string} aiWebSearchClearRequest Ignored. The operation always clears the portal-wide configuration, so send an empty body; a value here does not scope it to a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchClear operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-clear/
         */
        async aiWebSearchClear(aiWebSearchClearRequest: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchClear(aiWebSearchClearRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchClear']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Validates a web-search configuration against the live provider and stores it only if the provider answers, which makes it the safe way to save a form in one step. `entityId` scopes the configuration to a room and has to name one the caller can open; omitting it configures the portal. A `baseUrl` pointing at a private network address is refused. Use `PUT api/2.0/ai/web-search/set-active-config` when the configuration should be stored without a provider round trip.
         * @summary Configure and verify web search
         * @param {AiWebSearchConfigureRequest} aiWebSearchConfigureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchConfigure operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-configure/
         */
        async aiWebSearchConfigure(aiWebSearchConfigureRequest: AiWebSearchConfigureRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiWebSearchMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchConfigure(aiWebSearchConfigureRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchConfigure']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the web-search configuration in force for a scope - the provider, its endpoint and its settings. `entityId` picks a room and has to name one the caller can open; omitting it reads the portal-wide configuration, and a room with none of its own falls back to that. An unconfigured scope answers an empty result rather than 404. The provider key is not part of the answer, so a client cannot read it back after storing it.
         * @summary Get active config
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchGetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-get-active-config/
         */
        async aiWebSearchGetActiveConfig(entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiWebSearchConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchGetActiveConfig(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchGetActiveConfig']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Tells whether web search is available in a scope, as a bare boolean, which is the cheap check for hiding or showing the feature. `entityId` picks a room and has to name one the caller can open. It reports the same state as `GET api/2.0/ai/web-search/get-active-config` without transferring the configuration itself. A true answer means a provider is stored, not that the provider is currently reachable - probe that with `POST api/2.0/ai/web-search/test-connection`.
         * @summary Is configured
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchIsConfigured operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-is-configured/
         */
        async aiWebSearchIsConfigured(entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchIsConfigured(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchIsConfigured']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches the contents of web pages on behalf of the document editor\'s AI plugin, against the portal\'s active web-search provider, exactly as the search passthrough does — including the `entityId` / `entityKind` billing attribution. The portal-wide configuration is used and a portal without one answers 404. The provider\'s status, body and content type are relayed verbatim, so its 429 and its failures surface unchanged. This is the follow-up to `POST api/2.0/ai/websearch/v1/search`, which returns the results whose contents this operation retrieves.
         * @summary Web page contents passthrough
         * @param {{ [key: string]: any | null; }} aiWebSearchPassthroughContentsRequest A page-contents request in the shape the portal\'s active web-search provider expects, forwarded to it unchanged. The endpoint and the key come from the stored configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchPassthroughContents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-passthrough-contents/
         */
        async aiWebSearchPassthroughContents(aiWebSearchPassthroughContentsRequest: { [key: string]: any | null; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: any; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchPassthroughContents(aiWebSearchPassthroughContentsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchPassthroughContents']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Runs a web search on behalf of the document editor\'s AI plugin, which holds only a placeholder configuration - the portal\'s active provider and its key are resolved here, so neither ever reaches the browser. The portal-wide configuration is used, and a portal without one answers 404. The `entityId` and `entityKind` query parameters name the document the search is billed to; with the ONLYOFFICE provider the entry is resolved under the caller\'s credentials and sent to the gateway as the request `metadata` (`source_id` / `source_type` / `source_title`), and an entry the caller cannot open sends none. The provider\'s own status, body and content type are relayed as they stand, so a provider that rate-limits answers 429 and one that is unreachable answers 502. Closing the connection aborts the upstream request.
         * @summary Web search passthrough
         * @param {{ [key: string]: any | null; }} aiWebSearchPassthroughSearchRequest A search request in the shape the portal\'s active web-search provider expects, forwarded to it unchanged. The endpoint and the key come from the stored configuration and must not be sent here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchPassthroughSearch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-passthrough-search/
         */
        async aiWebSearchPassthroughSearch(aiWebSearchPassthroughSearchRequest: { [key: string]: any | null; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: any; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchPassthroughSearch(aiWebSearchPassthroughSearchRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchPassthroughSearch']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores a web-search configuration without contacting the provider first, for a form that has already validated its input or for restoring a known-good configuration. `entityId` scopes it to a room and has to name one the caller can open. A `baseUrl` pointing at a private network address is still refused, because that check is local. Nothing guarantees the stored provider works: follow up with `POST api/2.0/ai/web-search/test-connection`, or use `PUT api/2.0/ai/web-search/configure` to have the store gated on a live probe.
         * @summary Set active config
         * @param {AiWebSearchSetActiveConfigRequest} aiWebSearchSetActiveConfigRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchSetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-set-active-config/
         */
        async aiWebSearchSetActiveConfig(aiWebSearchSetActiveConfigRequest: AiWebSearchSetActiveConfigRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchSetActiveConfig(aiWebSearchSetActiveConfigRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchSetActiveConfig']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Probes a web-search configuration against the live provider and reports the outcome, storing nothing - this is what a Test button calls so that a failure commits no state. The configuration is taken from the request rather than from storage, so credentials that were never saved can be checked. A `baseUrl` pointing at a private network address is refused before any request leaves the portal. The verdict is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload.
         * @summary Test a web-search provider
         * @param {AiWebSearchConfig} aiWebSearchConfig 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiWebSearchTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-test-connection/
         */
        async aiWebSearchTestConnection(aiWebSearchConfig: AiWebSearchConfig, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProfilesTestConnection200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiWebSearchTestConnection(aiWebSearchConfig, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebSearchApi.aiWebSearchTestConnection']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WebSearchApi - factory interface
 * @export
 */
export const WebSearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebSearchApiFp(configuration)
    return {
        /**
         * Removes the portal\'s web-search configuration, after which web search is unavailable everywhere it was not configured separately. This is not scoped: it takes no `entityId` and any body sent with it is ignored, so it cannot be used to clear one room\'s configuration. Clearing an already-unconfigured portal is not an error and the call answers success either way. The stored provider key is destroyed with the configuration and has to be entered again.
         * @summary Clear the web-search configuration
         * @param {WebSearchApiAiWebSearchClearRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchClear operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-clear/
         * @throws {RequiredError}
         */
        aiWebSearchClear(requestParameters: WebSearchApiAiWebSearchClearRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiWebSearchClear(requestParameters.aiWebSearchClearRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Validates a web-search configuration against the live provider and stores it only if the provider answers, which makes it the safe way to save a form in one step. `entityId` scopes the configuration to a room and has to name one the caller can open; omitting it configures the portal. A `baseUrl` pointing at a private network address is refused. Use `PUT api/2.0/ai/web-search/set-active-config` when the configuration should be stored without a provider round trip.
         * @summary Configure and verify web search
         * @param {WebSearchApiAiWebSearchConfigureRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchConfigure operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-configure/
         * @throws {RequiredError}
         */
        aiWebSearchConfigure(requestParameters: WebSearchApiAiWebSearchConfigureRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiWebSearchMutationResult> {
            return localVarFp.aiWebSearchConfigure(requestParameters.aiWebSearchConfigureRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the web-search configuration in force for a scope - the provider, its endpoint and its settings. `entityId` picks a room and has to name one the caller can open; omitting it reads the portal-wide configuration, and a room with none of its own falls back to that. An unconfigured scope answers an empty result rather than 404. The provider key is not part of the answer, so a client cannot read it back after storing it.
         * @summary Get active config
         * @param {WebSearchApiAiWebSearchGetActiveConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchGetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-get-active-config/
         * @throws {RequiredError}
         */
        aiWebSearchGetActiveConfig(requestParameters: WebSearchApiAiWebSearchGetActiveConfigRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AiWebSearchConfig> {
            return localVarFp.aiWebSearchGetActiveConfig(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Tells whether web search is available in a scope, as a bare boolean, which is the cheap check for hiding or showing the feature. `entityId` picks a room and has to name one the caller can open. It reports the same state as `GET api/2.0/ai/web-search/get-active-config` without transferring the configuration itself. A true answer means a provider is stored, not that the provider is currently reachable - probe that with `POST api/2.0/ai/web-search/test-connection`.
         * @summary Is configured
         * @param {WebSearchApiAiWebSearchIsConfiguredRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchIsConfigured operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-is-configured/
         * @throws {RequiredError}
         */
        aiWebSearchIsConfigured(requestParameters: WebSearchApiAiWebSearchIsConfiguredRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.aiWebSearchIsConfigured(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches the contents of web pages on behalf of the document editor\'s AI plugin, against the portal\'s active web-search provider, exactly as the search passthrough does — including the `entityId` / `entityKind` billing attribution. The portal-wide configuration is used and a portal without one answers 404. The provider\'s status, body and content type are relayed verbatim, so its 429 and its failures surface unchanged. This is the follow-up to `POST api/2.0/ai/websearch/v1/search`, which returns the results whose contents this operation retrieves.
         * @summary Web page contents passthrough
         * @param {WebSearchApiAiWebSearchPassthroughContentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchPassthroughContents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-passthrough-contents/
         * @throws {RequiredError}
         */
        aiWebSearchPassthroughContents(requestParameters: WebSearchApiAiWebSearchPassthroughContentsRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: any; }> {
            return localVarFp.aiWebSearchPassthroughContents(requestParameters.aiWebSearchPassthroughContentsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Runs a web search on behalf of the document editor\'s AI plugin, which holds only a placeholder configuration - the portal\'s active provider and its key are resolved here, so neither ever reaches the browser. The portal-wide configuration is used, and a portal without one answers 404. The `entityId` and `entityKind` query parameters name the document the search is billed to; with the ONLYOFFICE provider the entry is resolved under the caller\'s credentials and sent to the gateway as the request `metadata` (`source_id` / `source_type` / `source_title`), and an entry the caller cannot open sends none. The provider\'s own status, body and content type are relayed as they stand, so a provider that rate-limits answers 429 and one that is unreachable answers 502. Closing the connection aborts the upstream request.
         * @summary Web search passthrough
         * @param {WebSearchApiAiWebSearchPassthroughSearchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchPassthroughSearch operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-passthrough-search/
         * @throws {RequiredError}
         */
        aiWebSearchPassthroughSearch(requestParameters: WebSearchApiAiWebSearchPassthroughSearchRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: any; }> {
            return localVarFp.aiWebSearchPassthroughSearch(requestParameters.aiWebSearchPassthroughSearchRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores a web-search configuration without contacting the provider first, for a form that has already validated its input or for restoring a known-good configuration. `entityId` scopes it to a room and has to name one the caller can open. A `baseUrl` pointing at a private network address is still refused, because that check is local. Nothing guarantees the stored provider works: follow up with `POST api/2.0/ai/web-search/test-connection`, or use `PUT api/2.0/ai/web-search/configure` to have the store gated on a live probe.
         * @summary Set active config
         * @param {WebSearchApiAiWebSearchSetActiveConfigRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchSetActiveConfig operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-set-active-config/
         * @throws {RequiredError}
         */
        aiWebSearchSetActiveConfig(requestParameters: WebSearchApiAiWebSearchSetActiveConfigRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiWebSearchSetActiveConfig(requestParameters.aiWebSearchSetActiveConfigRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Probes a web-search configuration against the live provider and reports the outcome, storing nothing - this is what a Test button calls so that a failure commits no state. The configuration is taken from the request rather than from storage, so credentials that were never saved can be checked. A `baseUrl` pointing at a private network address is refused before any request leaves the portal. The verdict is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload.
         * @summary Test a web-search provider
         * @param {WebSearchApiAiWebSearchTestConnectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiWebSearchTestConnection operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-web-search-test-connection/
         * @throws {RequiredError}
         */
        aiWebSearchTestConnection(requestParameters: WebSearchApiAiWebSearchTestConnectionRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiProfilesTestConnection200Response> {
            return localVarFp.aiWebSearchTestConnection(requestParameters.aiWebSearchConfig, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiWebSearchClear operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchClearRequest
 */
export interface WebSearchApiAiWebSearchClearRequest {
    /**
     * Ignored. The operation always clears the portal-wide configuration, so send an empty body; a value here does not scope it to a room.
     * @type {string}
     * @memberof WebSearchApiAiWebSearchClear
     */
    readonly aiWebSearchClearRequest: string
}

/**
 * Request parameters for aiWebSearchConfigure operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchConfigureRequest
 */
export interface WebSearchApiAiWebSearchConfigureRequest {
    /**
     * 
     * @type {AiWebSearchConfigureRequest}
     * @memberof WebSearchApiAiWebSearchConfigure
     */
    readonly aiWebSearchConfigureRequest: AiWebSearchConfigureRequest
}

/**
 * Request parameters for aiWebSearchGetActiveConfig operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchGetActiveConfigRequest
 */
export interface WebSearchApiAiWebSearchGetActiveConfigRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof WebSearchApiAiWebSearchGetActiveConfig
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiWebSearchIsConfigured operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchIsConfiguredRequest
 */
export interface WebSearchApiAiWebSearchIsConfiguredRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof WebSearchApiAiWebSearchIsConfigured
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiWebSearchPassthroughContents operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchPassthroughContentsRequest
 */
export interface WebSearchApiAiWebSearchPassthroughContentsRequest {
    /**
     * A page-contents request in the shape the portal\'s active web-search provider expects, forwarded to it unchanged. The endpoint and the key come from the stored configuration.
     * @type {{ [key: string]: any | null; }}
     * @memberof WebSearchApiAiWebSearchPassthroughContents
     */
    readonly aiWebSearchPassthroughContentsRequest: { [key: string]: any | null; }
}

/**
 * Request parameters for aiWebSearchPassthroughSearch operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchPassthroughSearchRequest
 */
export interface WebSearchApiAiWebSearchPassthroughSearchRequest {
    /**
     * A search request in the shape the portal\'s active web-search provider expects, forwarded to it unchanged. The endpoint and the key come from the stored configuration and must not be sent here.
     * @type {{ [key: string]: any | null; }}
     * @memberof WebSearchApiAiWebSearchPassthroughSearch
     */
    readonly aiWebSearchPassthroughSearchRequest: { [key: string]: any | null; }
}

/**
 * Request parameters for aiWebSearchSetActiveConfig operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchSetActiveConfigRequest
 */
export interface WebSearchApiAiWebSearchSetActiveConfigRequest {
    /**
     * 
     * @type {AiWebSearchSetActiveConfigRequest}
     * @memberof WebSearchApiAiWebSearchSetActiveConfig
     */
    readonly aiWebSearchSetActiveConfigRequest: AiWebSearchSetActiveConfigRequest
}

/**
 * Request parameters for aiWebSearchTestConnection operation in WebSearchApi.
 * @export
 * @interface WebSearchApiAiWebSearchTestConnectionRequest
 */
export interface WebSearchApiAiWebSearchTestConnectionRequest {
    /**
     * 
     * @type {AiWebSearchConfig}
     * @memberof WebSearchApiAiWebSearchTestConnection
     */
    readonly aiWebSearchConfig: AiWebSearchConfig
}

/**
 * WebSearchApi - object-oriented interface
 * @export
 * @class WebSearchApi
 * @extends {BaseAPI}
 */
export class WebSearchApi extends BaseAPI {
    /**
     * Removes the portal\'s web-search configuration, after which web search is unavailable everywhere it was not configured separately. This is not scoped: it takes no `entityId` and any body sent with it is ignored, so it cannot be used to clear one room\'s configuration. Clearing an already-unconfigured portal is not an error and the call answers success either way. The stored provider key is destroyed with the configuration and has to be entered again.
     * @summary Clear the web-search configuration
     * @param {AIWebSearchApiAiWebSearchClearRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchClear(requestParameters: WebSearchApiAiWebSearchClearRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchClear(requestParameters.aiWebSearchClearRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Validates a web-search configuration against the live provider and stores it only if the provider answers, which makes it the safe way to save a form in one step. `entityId` scopes the configuration to a room and has to name one the caller can open; omitting it configures the portal. A `baseUrl` pointing at a private network address is refused. Use `PUT api/2.0/ai/web-search/set-active-config` when the configuration should be stored without a provider round trip.
     * @summary Configure and verify web search
     * @param {AIWebSearchApiAiWebSearchConfigureRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchConfigure(requestParameters: WebSearchApiAiWebSearchConfigureRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchConfigure(requestParameters.aiWebSearchConfigureRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the web-search configuration in force for a scope - the provider, its endpoint and its settings. `entityId` picks a room and has to name one the caller can open; omitting it reads the portal-wide configuration, and a room with none of its own falls back to that. An unconfigured scope answers an empty result rather than 404. The provider key is not part of the answer, so a client cannot read it back after storing it.
     * @summary Get active config
     * @param {AIWebSearchApiAiWebSearchGetActiveConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchGetActiveConfig(requestParameters: WebSearchApiAiWebSearchGetActiveConfigRequest = {}, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchGetActiveConfig(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tells whether web search is available in a scope, as a bare boolean, which is the cheap check for hiding or showing the feature. `entityId` picks a room and has to name one the caller can open. It reports the same state as `GET api/2.0/ai/web-search/get-active-config` without transferring the configuration itself. A true answer means a provider is stored, not that the provider is currently reachable - probe that with `POST api/2.0/ai/web-search/test-connection`.
     * @summary Is configured
     * @param {AIWebSearchApiAiWebSearchIsConfiguredRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchIsConfigured(requestParameters: WebSearchApiAiWebSearchIsConfiguredRequest = {}, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchIsConfigured(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches the contents of web pages on behalf of the document editor\'s AI plugin, against the portal\'s active web-search provider, exactly as the search passthrough does — including the `entityId` / `entityKind` billing attribution. The portal-wide configuration is used and a portal without one answers 404. The provider\'s status, body and content type are relayed verbatim, so its 429 and its failures surface unchanged. This is the follow-up to `POST api/2.0/ai/websearch/v1/search`, which returns the results whose contents this operation retrieves.
     * @summary Web page contents passthrough
     * @param {AIWebSearchApiAiWebSearchPassthroughContentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchPassthroughContents(requestParameters: WebSearchApiAiWebSearchPassthroughContentsRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchPassthroughContents(requestParameters.aiWebSearchPassthroughContentsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Runs a web search on behalf of the document editor\'s AI plugin, which holds only a placeholder configuration - the portal\'s active provider and its key are resolved here, so neither ever reaches the browser. The portal-wide configuration is used, and a portal without one answers 404. The `entityId` and `entityKind` query parameters name the document the search is billed to; with the ONLYOFFICE provider the entry is resolved under the caller\'s credentials and sent to the gateway as the request `metadata` (`source_id` / `source_type` / `source_title`), and an entry the caller cannot open sends none. The provider\'s own status, body and content type are relayed as they stand, so a provider that rate-limits answers 429 and one that is unreachable answers 502. Closing the connection aborts the upstream request.
     * @summary Web search passthrough
     * @param {AIWebSearchApiAiWebSearchPassthroughSearchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchPassthroughSearch(requestParameters: WebSearchApiAiWebSearchPassthroughSearchRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchPassthroughSearch(requestParameters.aiWebSearchPassthroughSearchRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores a web-search configuration without contacting the provider first, for a form that has already validated its input or for restoring a known-good configuration. `entityId` scopes it to a room and has to name one the caller can open. A `baseUrl` pointing at a private network address is still refused, because that check is local. Nothing guarantees the stored provider works: follow up with `POST api/2.0/ai/web-search/test-connection`, or use `PUT api/2.0/ai/web-search/configure` to have the store gated on a live probe.
     * @summary Set active config
     * @param {AIWebSearchApiAiWebSearchSetActiveConfigRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchSetActiveConfig(requestParameters: WebSearchApiAiWebSearchSetActiveConfigRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchSetActiveConfig(requestParameters.aiWebSearchSetActiveConfigRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Probes a web-search configuration against the live provider and reports the outcome, storing nothing - this is what a Test button calls so that a failure commits no state. The configuration is taken from the request rather than from storage, so credentials that were never saved can be checked. A `baseUrl` pointing at a private network address is refused before any request leaves the portal. The verdict is carried in the body rather than in the status, so a failed probe still answers 200 and the caller has to read the payload.
     * @summary Test a web-search provider
     * @param {AIWebSearchApiAiWebSearchTestConnectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSearchApi
     */
    public aiWebSearchTestConnection(requestParameters: WebSearchApiAiWebSearchTestConnectionRequest, options?: RawAxiosRequestConfig) {
        return WebSearchApiFp(this.configuration).aiWebSearchTestConnection(requestParameters.aiWebSearchConfig, options).then((request) => request(this.axios, this.basePath));
    }
}

