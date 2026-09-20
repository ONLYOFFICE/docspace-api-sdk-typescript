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
import type { AiSuccessResponse } from '../../models';
// @ts-ignore
import type { AiToolsAddCustomServerRequest } from '../../models';
// @ts-ignore
import type { AiToolsBulkResult } from '../../models';
// @ts-ignore
import type { AiToolsListSystemTools200Response } from '../../models';
// @ts-ignore
import type { AiToolsMutationResult } from '../../models';
// @ts-ignore
import type { AiToolsRemoveCustomServerRequest } from '../../models';
// @ts-ignore
import type { AiToolsReplaceAllCustomServersRequest } from '../../models';
// @ts-ignore
import type { AiToolsSetAllowAlwaysRequest } from '../../models';
// @ts-ignore
import type { AiToolsSetDisabledRequest } from '../../models';
// @ts-ignore
import type { AiToolsUpdateCustomServerRequest } from '../../models';
/**
 * ToolsApi - axios parameter creator
 * @export
 */
export const ToolsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Registers a custom MCP server under the given name so the model may call its tools. The name becomes a URL path segment, so it may not be `.`, `..`, or contain a path separator or a control character. `config` may be omitted in two cases: a name matching a host-configured system server pins the entry to that server\'s canonical settings as a whitelist marker, and a name already registered portal-wide copies the portal-level configuration into this scope; anything else without a config is rejected. `entityId` scopes the registration and has to name a room the caller can open - a room that is not an agent room folds to the portal-wide scope, while an unreachable one is refused so it cannot silently rewrite the portal\'s own registry.
         * @summary Add custom server
         * @param {AiToolsAddCustomServerRequest} aiToolsAddCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsAddCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-add-custom-server/
         */
        aiToolsAddCustomServer: async (aiToolsAddCustomServerRequest: AiToolsAddCustomServerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsAddCustomServerRequest' is not null or undefined
            assertParamExists('aiToolsAddCustomServer', 'aiToolsAddCustomServerRequest', aiToolsAddCustomServerRequest)

            const localVarPath = `/api/2.0/ai/tools/add-custom-server`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsAddCustomServerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the always-allow list of the scope - the tools whose calls run without pausing the round for approval. `entityId` picks the scope and omitting it reads the portal-wide setting. An empty answer means every tool call has to be approved through `POST api/2.0/ai/ai/approve-tool-call`. Use `GET api/2.0/ai/tools/is-allow-always` to ask about a single tool.
         * @summary Get allow always
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsGetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-allow-always/
         */
        aiToolsGetAllowAlways: async (entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/tools/get-allow-always`;
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
         * Returns the stored configuration of one registered custom MCP server. The name is required and is read from the query; `entityId` picks the scope, and omitting it reads the portal-wide registry. A name that is not registered answers a null body with status 200 rather than 404. The configuration of a system server is returned empty on purpose: those run server-side only, so neither their endpoint nor their credentials are handed to a browser.
         * @summary Get custom server
         * @param {string} name The custom MCP server name.
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsGetCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-custom-server/
         */
        aiToolsGetCustomServer: async (name: string, entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('aiToolsGetCustomServer', 'name', name)

            const localVarPath = `/api/2.0/ai/tools/get-custom-server`;
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

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

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
         * Returns the tools switched off in the scope, as a map of server type to tool names. `entityId` picks the scope and omitting it reads the portal-wide setting. An absent server type means nothing is switched off for it, so an empty answer means every tool is on offer. Use `GET api/2.0/ai/tools/is-tool-disabled` to ask about one tool instead of reading the whole map.
         * @summary Get disabled
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsGetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-disabled/
         */
        aiToolsGetDisabled: async (entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/tools/get-disabled`;
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
         * Tells whether one named tool runs without an approval pause in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. A false answer means a call to that tool pauses the round, and the caller resumes it with the approve or deny operation.
         * @summary Is allow always
         * @param {string} serverType The MCP server type the tool belongs to.
         * @param {string} toolName The tool name.
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsIsAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-allow-always/
         */
        aiToolsIsAllowAlways: async (serverType: string, toolName: string, entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serverType' is not null or undefined
            assertParamExists('aiToolsIsAllowAlways', 'serverType', serverType)
            // verify required parameter 'toolName' is not null or undefined
            assertParamExists('aiToolsIsAllowAlways', 'toolName', toolName)

            const localVarPath = `/api/2.0/ai/tools/is-allow-always`;
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

            if (serverType !== undefined) {
                localVarQueryParameter['serverType'] = serverType;
            }

            if (toolName !== undefined) {
                localVarQueryParameter['toolName'] = toolName;
            }

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
         * Tells whether one named tool of one server type is switched off in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. It reflects only the disable list - a tool that is on offer may still require approval, which `GET api/2.0/ai/tools/is-allow-always` reports.
         * @summary Is tool disabled
         * @param {string} serverType The MCP server type the tool belongs to.
         * @param {string} toolName The tool name.
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsIsToolDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-tool-disabled/
         */
        aiToolsIsToolDisabled: async (serverType: string, toolName: string, entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serverType' is not null or undefined
            assertParamExists('aiToolsIsToolDisabled', 'serverType', serverType)
            // verify required parameter 'toolName' is not null or undefined
            assertParamExists('aiToolsIsToolDisabled', 'toolName', toolName)

            const localVarPath = `/api/2.0/ai/tools/is-tool-disabled`;
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

            if (serverType !== undefined) {
                localVarQueryParameter['serverType'] = serverType;
            }

            if (toolName !== undefined) {
                localVarQueryParameter['toolName'] = toolName;
            }

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
         * Lists the custom MCP servers registered in the scope as a map of name to configuration. `entityId` picks the scope and omitting it lists the portal-wide registry. The configuration of any entry that names a host-configured system server comes back empty, for the same reason as in the single-server read, and the portal\'s own built-in MCP server is left out of the list entirely because it is always enabled and cannot be configured. The names in the answer are what the disable and always-allow operations accept as `serverType`.
         * @summary List custom servers
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsListCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-custom-servers/
         */
        aiToolsListCustomServers: async (entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/tools/list-custom-servers`;
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
         * Lists every tool the scope can offer the model, as a map of server type to tool group. The answer merges two sources - the host-configured system servers and the live tools of the scope\'s registered custom MCP servers - and names the system ones separately in `system`, so a client can tell the two apart. `errors` carries the reason a registered server delivered no tools, which is the text to show on a permission card, because the browser cannot reach a server-executed MCP server to find out for itself. The connections are opened server-side, so one request is enough and the client never speaks MCP itself; the portal\'s own built-in server is left out because it is always enabled.
         * @summary List system tools
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsListSystemTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-system-tools/
         */
        aiToolsListSystemTools: async (entityId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/tools/list-system-tools`;
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
         * Unregisters a custom MCP server from the scope, so the model is no longer offered its tools. The name is required and may be sent in the body or as a query parameter, and `entityId` has to name a room the caller can open. A name that is not registered is not reported: the call answers success without removing anything. The server itself is untouched - only this portal\'s registration is dropped.
         * @summary Remove custom server
         * @param {AiToolsRemoveCustomServerRequest} aiToolsRemoveCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsRemoveCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-remove-custom-server/
         */
        aiToolsRemoveCustomServer: async (aiToolsRemoveCustomServerRequest: AiToolsRemoveCustomServerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsRemoveCustomServerRequest' is not null or undefined
            assertParamExists('aiToolsRemoveCustomServer', 'aiToolsRemoveCustomServerRequest', aiToolsRemoveCustomServerRequest)

            const localVarPath = `/api/2.0/ai/tools/remove-custom-server`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsRemoveCustomServerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the whole custom MCP server registry of the scope with the supplied map in one write, which makes it the operation a settings screen saves with. `map` is required: without it the registry would be emptied, so a missing or non-object value is rejected rather than treated as none. Every name in the map is validated as a routable path segment and every configuration is resolved before anything is written, so a map with one bad entry changes nothing. `entityId` has to name a room the caller can open - this is the operation where an unreachable one would otherwise have wiped the portal-wide registry.
         * @summary Replace all custom servers
         * @param {AiToolsReplaceAllCustomServersRequest} aiToolsReplaceAllCustomServersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsReplaceAllCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-replace-all-custom-servers/
         */
        aiToolsReplaceAllCustomServers: async (aiToolsReplaceAllCustomServersRequest: AiToolsReplaceAllCustomServersRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsReplaceAllCustomServersRequest' is not null or undefined
            assertParamExists('aiToolsReplaceAllCustomServers', 'aiToolsReplaceAllCustomServersRequest', aiToolsReplaceAllCustomServersRequest)

            const localVarPath = `/api/2.0/ai/tools/replace-all-custom-servers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsReplaceAllCustomServersRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds one tool to the scope\'s always-allow list, or takes it off, which decides whether a call to it pauses the round for approval. `value` is coerced to a boolean, so any truthy value adds and any falsy one removes. Unlike the disable operation, `serverType` is not validated here: an unknown one is stored and then simply never matches, so a wrong value fails silently. `entityId` has to name a room the caller can open.
         * @summary Set allow always
         * @param {AiToolsSetAllowAlwaysRequest} aiToolsSetAllowAlwaysRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsSetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-allow-always/
         */
        aiToolsSetAllowAlways: async (aiToolsSetAllowAlwaysRequest: AiToolsSetAllowAlwaysRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsSetAllowAlwaysRequest' is not null or undefined
            assertParamExists('aiToolsSetAllowAlways', 'aiToolsSetAllowAlwaysRequest', aiToolsSetAllowAlwaysRequest)

            const localVarPath = `/api/2.0/ai/tools/set-allow-always`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsSetAllowAlwaysRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Switches off the listed tools of one server type in the scope, so the model is no longer offered them. `serverType` has to be a key the round\'s tool filter actually matches - a host-configured system server, one of the two DocSpace integration groups, web search, image generation, or one of the scope\'s registered custom servers - and an unknown value is rejected with the list of valid ones in the message, rather than stored and silently ignored. `toolNames` replaces the previous selection for that server type, so send the full list and pass an empty one to switch everything back on. `entityId` has to name a room the caller can open.
         * @summary Set disabled
         * @param {AiToolsSetDisabledRequest} aiToolsSetDisabledRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsSetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-disabled/
         */
        aiToolsSetDisabled: async (aiToolsSetDisabledRequest: AiToolsSetDisabledRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsSetDisabledRequest' is not null or undefined
            assertParamExists('aiToolsSetDisabled', 'aiToolsSetDisabledRequest', aiToolsSetDisabledRequest)

            const localVarPath = `/api/2.0/ai/tools/set-disabled`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsSetDisabledRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the stored configuration of a registered custom MCP server, under the same name and scope rules as the add operation. The name is re-validated as a routable path segment, and an omitted `config` resolves the same way - to a system server\'s canonical settings, or to the portal-level entry of that name. `entityId` has to name a room the caller can open. The answer carries the stored registry entry.
         * @summary Update custom server
         * @param {AiToolsUpdateCustomServerRequest} aiToolsUpdateCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsUpdateCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-update-custom-server/
         */
        aiToolsUpdateCustomServer: async (aiToolsUpdateCustomServerRequest: AiToolsUpdateCustomServerRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiToolsUpdateCustomServerRequest' is not null or undefined
            assertParamExists('aiToolsUpdateCustomServer', 'aiToolsUpdateCustomServerRequest', aiToolsUpdateCustomServerRequest)

            const localVarPath = `/api/2.0/ai/tools/update-custom-server`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiToolsUpdateCustomServerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ToolsApi - functional programming interface
 * @export
 */
export const ToolsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ToolsApiAxiosParamCreator(configuration)
    return {
        /**
         * Registers a custom MCP server under the given name so the model may call its tools. The name becomes a URL path segment, so it may not be `.`, `..`, or contain a path separator or a control character. `config` may be omitted in two cases: a name matching a host-configured system server pins the entry to that server\'s canonical settings as a whitelist marker, and a name already registered portal-wide copies the portal-level configuration into this scope; anything else without a config is rejected. `entityId` scopes the registration and has to name a room the caller can open - a room that is not an agent room folds to the portal-wide scope, while an unreachable one is refused so it cannot silently rewrite the portal\'s own registry.
         * @summary Add custom server
         * @param {AiToolsAddCustomServerRequest} aiToolsAddCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsAddCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-add-custom-server/
         */
        async aiToolsAddCustomServer(aiToolsAddCustomServerRequest: AiToolsAddCustomServerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiToolsMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsAddCustomServer(aiToolsAddCustomServerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsAddCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the always-allow list of the scope - the tools whose calls run without pausing the round for approval. `entityId` picks the scope and omitting it reads the portal-wide setting. An empty answer means every tool call has to be approved through `POST api/2.0/ai/ai/approve-tool-call`. Use `GET api/2.0/ai/tools/is-allow-always` to ask about a single tool.
         * @summary Get allow always
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsGetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-allow-always/
         */
        async aiToolsGetAllowAlways(entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsGetAllowAlways(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsGetAllowAlways']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the stored configuration of one registered custom MCP server. The name is required and is read from the query; `entityId` picks the scope, and omitting it reads the portal-wide registry. A name that is not registered answers a null body with status 200 rather than 404. The configuration of a system server is returned empty on purpose: those run server-side only, so neither their endpoint nor their credentials are handed to a browser.
         * @summary Get custom server
         * @param {string} name The custom MCP server name.
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsGetCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-custom-server/
         */
        async aiToolsGetCustomServer(name: string, entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsGetCustomServer(name, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsGetCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the tools switched off in the scope, as a map of server type to tool names. `entityId` picks the scope and omitting it reads the portal-wide setting. An absent server type means nothing is switched off for it, so an empty answer means every tool is on offer. Use `GET api/2.0/ai/tools/is-tool-disabled` to ask about one tool instead of reading the whole map.
         * @summary Get disabled
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsGetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-disabled/
         */
        async aiToolsGetDisabled(entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<string>; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsGetDisabled(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsGetDisabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Tells whether one named tool runs without an approval pause in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. A false answer means a call to that tool pauses the round, and the caller resumes it with the approve or deny operation.
         * @summary Is allow always
         * @param {string} serverType The MCP server type the tool belongs to.
         * @param {string} toolName The tool name.
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsIsAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-allow-always/
         */
        async aiToolsIsAllowAlways(serverType: string, toolName: string, entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsIsAllowAlways(serverType, toolName, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsIsAllowAlways']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Tells whether one named tool of one server type is switched off in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. It reflects only the disable list - a tool that is on offer may still require approval, which `GET api/2.0/ai/tools/is-allow-always` reports.
         * @summary Is tool disabled
         * @param {string} serverType The MCP server type the tool belongs to.
         * @param {string} toolName The tool name.
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsIsToolDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-tool-disabled/
         */
        async aiToolsIsToolDisabled(serverType: string, toolName: string, entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsIsToolDisabled(serverType, toolName, entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsIsToolDisabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the custom MCP servers registered in the scope as a map of name to configuration. `entityId` picks the scope and omitting it lists the portal-wide registry. The configuration of any entry that names a host-configured system server comes back empty, for the same reason as in the single-server read, and the portal\'s own built-in MCP server is left out of the list entirely because it is always enabled and cannot be configured. The names in the answer are what the disable and always-allow operations accept as `serverType`.
         * @summary List custom servers
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsListCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-custom-servers/
         */
        async aiToolsListCustomServers(entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: object; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsListCustomServers(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsListCustomServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists every tool the scope can offer the model, as a map of server type to tool group. The answer merges two sources - the host-configured system servers and the live tools of the scope\'s registered custom MCP servers - and names the system ones separately in `system`, so a client can tell the two apart. `errors` carries the reason a registered server delivered no tools, which is the text to show on a permission card, because the browser cannot reach a server-executed MCP server to find out for itself. The connections are opened server-side, so one request is enough and the client never speaks MCP itself; the portal\'s own built-in server is left out because it is always enabled.
         * @summary List system tools
         * @param {string} [entityId] The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsListSystemTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-system-tools/
         */
        async aiToolsListSystemTools(entityId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiToolsListSystemTools200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsListSystemTools(entityId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsListSystemTools']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Unregisters a custom MCP server from the scope, so the model is no longer offered its tools. The name is required and may be sent in the body or as a query parameter, and `entityId` has to name a room the caller can open. A name that is not registered is not reported: the call answers success without removing anything. The server itself is untouched - only this portal\'s registration is dropped.
         * @summary Remove custom server
         * @param {AiToolsRemoveCustomServerRequest} aiToolsRemoveCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsRemoveCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-remove-custom-server/
         */
        async aiToolsRemoveCustomServer(aiToolsRemoveCustomServerRequest: AiToolsRemoveCustomServerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsRemoveCustomServer(aiToolsRemoveCustomServerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsRemoveCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the whole custom MCP server registry of the scope with the supplied map in one write, which makes it the operation a settings screen saves with. `map` is required: without it the registry would be emptied, so a missing or non-object value is rejected rather than treated as none. Every name in the map is validated as a routable path segment and every configuration is resolved before anything is written, so a map with one bad entry changes nothing. `entityId` has to name a room the caller can open - this is the operation where an unreachable one would otherwise have wiped the portal-wide registry.
         * @summary Replace all custom servers
         * @param {AiToolsReplaceAllCustomServersRequest} aiToolsReplaceAllCustomServersRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsReplaceAllCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-replace-all-custom-servers/
         */
        async aiToolsReplaceAllCustomServers(aiToolsReplaceAllCustomServersRequest: AiToolsReplaceAllCustomServersRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiToolsBulkResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsReplaceAllCustomServers(aiToolsReplaceAllCustomServersRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsReplaceAllCustomServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds one tool to the scope\'s always-allow list, or takes it off, which decides whether a call to it pauses the round for approval. `value` is coerced to a boolean, so any truthy value adds and any falsy one removes. Unlike the disable operation, `serverType` is not validated here: an unknown one is stored and then simply never matches, so a wrong value fails silently. `entityId` has to name a room the caller can open.
         * @summary Set allow always
         * @param {AiToolsSetAllowAlwaysRequest} aiToolsSetAllowAlwaysRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsSetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-allow-always/
         */
        async aiToolsSetAllowAlways(aiToolsSetAllowAlwaysRequest: AiToolsSetAllowAlwaysRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsSetAllowAlways(aiToolsSetAllowAlwaysRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsSetAllowAlways']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Switches off the listed tools of one server type in the scope, so the model is no longer offered them. `serverType` has to be a key the round\'s tool filter actually matches - a host-configured system server, one of the two DocSpace integration groups, web search, image generation, or one of the scope\'s registered custom servers - and an unknown value is rejected with the list of valid ones in the message, rather than stored and silently ignored. `toolNames` replaces the previous selection for that server type, so send the full list and pass an empty one to switch everything back on. `entityId` has to name a room the caller can open.
         * @summary Set disabled
         * @param {AiToolsSetDisabledRequest} aiToolsSetDisabledRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsSetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-disabled/
         */
        async aiToolsSetDisabled(aiToolsSetDisabledRequest: AiToolsSetDisabledRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsSetDisabled(aiToolsSetDisabledRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsSetDisabled']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the stored configuration of a registered custom MCP server, under the same name and scope rules as the add operation. The name is re-validated as a routable path segment, and an omitted `config` resolves the same way - to a system server\'s canonical settings, or to the portal-level entry of that name. `entityId` has to name a room the caller can open. The answer carries the stored registry entry.
         * @summary Update custom server
         * @param {AiToolsUpdateCustomServerRequest} aiToolsUpdateCustomServerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiToolsUpdateCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-update-custom-server/
         */
        async aiToolsUpdateCustomServer(aiToolsUpdateCustomServerRequest: AiToolsUpdateCustomServerRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiToolsMutationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiToolsUpdateCustomServer(aiToolsUpdateCustomServerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ToolsApi.aiToolsUpdateCustomServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ToolsApi - factory interface
 * @export
 */
export const ToolsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ToolsApiFp(configuration)
    return {
        /**
         * Registers a custom MCP server under the given name so the model may call its tools. The name becomes a URL path segment, so it may not be `.`, `..`, or contain a path separator or a control character. `config` may be omitted in two cases: a name matching a host-configured system server pins the entry to that server\'s canonical settings as a whitelist marker, and a name already registered portal-wide copies the portal-level configuration into this scope; anything else without a config is rejected. `entityId` scopes the registration and has to name a room the caller can open - a room that is not an agent room folds to the portal-wide scope, while an unreachable one is refused so it cannot silently rewrite the portal\'s own registry.
         * @summary Add custom server
         * @param {ToolsApiAiToolsAddCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsAddCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-add-custom-server/
         * @throws {RequiredError}
         */
        aiToolsAddCustomServer(requestParameters: ToolsApiAiToolsAddCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiToolsMutationResult> {
            return localVarFp.aiToolsAddCustomServer(requestParameters.aiToolsAddCustomServerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the always-allow list of the scope - the tools whose calls run without pausing the round for approval. `entityId` picks the scope and omitting it reads the portal-wide setting. An empty answer means every tool call has to be approved through `POST api/2.0/ai/ai/approve-tool-call`. Use `GET api/2.0/ai/tools/is-allow-always` to ask about a single tool.
         * @summary Get allow always
         * @param {ToolsApiAiToolsGetAllowAlwaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsGetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-allow-always/
         * @throws {RequiredError}
         */
        aiToolsGetAllowAlways(requestParameters: ToolsApiAiToolsGetAllowAlwaysRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<string>> {
            return localVarFp.aiToolsGetAllowAlways(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the stored configuration of one registered custom MCP server. The name is required and is read from the query; `entityId` picks the scope, and omitting it reads the portal-wide registry. A name that is not registered answers a null body with status 200 rather than 404. The configuration of a system server is returned empty on purpose: those run server-side only, so neither their endpoint nor their credentials are handed to a browser.
         * @summary Get custom server
         * @param {ToolsApiAiToolsGetCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsGetCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-custom-server/
         * @throws {RequiredError}
         */
        aiToolsGetCustomServer(requestParameters: ToolsApiAiToolsGetCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.aiToolsGetCustomServer(requestParameters.name, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the tools switched off in the scope, as a map of server type to tool names. `entityId` picks the scope and omitting it reads the portal-wide setting. An absent server type means nothing is switched off for it, so an empty answer means every tool is on offer. Use `GET api/2.0/ai/tools/is-tool-disabled` to ask about one tool instead of reading the whole map.
         * @summary Get disabled
         * @param {ToolsApiAiToolsGetDisabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsGetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-get-disabled/
         * @throws {RequiredError}
         */
        aiToolsGetDisabled(requestParameters: ToolsApiAiToolsGetDisabledRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: Array<string>; }> {
            return localVarFp.aiToolsGetDisabled(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Tells whether one named tool runs without an approval pause in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. A false answer means a call to that tool pauses the round, and the caller resumes it with the approve or deny operation.
         * @summary Is allow always
         * @param {ToolsApiAiToolsIsAllowAlwaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsIsAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-allow-always/
         * @throws {RequiredError}
         */
        aiToolsIsAllowAlways(requestParameters: ToolsApiAiToolsIsAllowAlwaysRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.aiToolsIsAllowAlways(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Tells whether one named tool of one server type is switched off in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. It reflects only the disable list - a tool that is on offer may still require approval, which `GET api/2.0/ai/tools/is-allow-always` reports.
         * @summary Is tool disabled
         * @param {ToolsApiAiToolsIsToolDisabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsIsToolDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-is-tool-disabled/
         * @throws {RequiredError}
         */
        aiToolsIsToolDisabled(requestParameters: ToolsApiAiToolsIsToolDisabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.aiToolsIsToolDisabled(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the custom MCP servers registered in the scope as a map of name to configuration. `entityId` picks the scope and omitting it lists the portal-wide registry. The configuration of any entry that names a host-configured system server comes back empty, for the same reason as in the single-server read, and the portal\'s own built-in MCP server is left out of the list entirely because it is always enabled and cannot be configured. The names in the answer are what the disable and always-allow operations accept as `serverType`.
         * @summary List custom servers
         * @param {ToolsApiAiToolsListCustomServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsListCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-custom-servers/
         * @throws {RequiredError}
         */
        aiToolsListCustomServers(requestParameters: ToolsApiAiToolsListCustomServersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: object; }> {
            return localVarFp.aiToolsListCustomServers(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists every tool the scope can offer the model, as a map of server type to tool group. The answer merges two sources - the host-configured system servers and the live tools of the scope\'s registered custom MCP servers - and names the system ones separately in `system`, so a client can tell the two apart. `errors` carries the reason a registered server delivered no tools, which is the text to show on a permission card, because the browser cannot reach a server-executed MCP server to find out for itself. The connections are opened server-side, so one request is enough and the client never speaks MCP itself; the portal\'s own built-in server is left out because it is always enabled.
         * @summary List system tools
         * @param {ToolsApiAiToolsListSystemToolsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsListSystemTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-list-system-tools/
         * @throws {RequiredError}
         */
        aiToolsListSystemTools(requestParameters: ToolsApiAiToolsListSystemToolsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AiToolsListSystemTools200Response> {
            return localVarFp.aiToolsListSystemTools(requestParameters.entityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Unregisters a custom MCP server from the scope, so the model is no longer offered its tools. The name is required and may be sent in the body or as a query parameter, and `entityId` has to name a room the caller can open. A name that is not registered is not reported: the call answers success without removing anything. The server itself is untouched - only this portal\'s registration is dropped.
         * @summary Remove custom server
         * @param {ToolsApiAiToolsRemoveCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsRemoveCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-remove-custom-server/
         * @throws {RequiredError}
         */
        aiToolsRemoveCustomServer(requestParameters: ToolsApiAiToolsRemoveCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiToolsRemoveCustomServer(requestParameters.aiToolsRemoveCustomServerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the whole custom MCP server registry of the scope with the supplied map in one write, which makes it the operation a settings screen saves with. `map` is required: without it the registry would be emptied, so a missing or non-object value is rejected rather than treated as none. Every name in the map is validated as a routable path segment and every configuration is resolved before anything is written, so a map with one bad entry changes nothing. `entityId` has to name a room the caller can open - this is the operation where an unreachable one would otherwise have wiped the portal-wide registry.
         * @summary Replace all custom servers
         * @param {ToolsApiAiToolsReplaceAllCustomServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsReplaceAllCustomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-replace-all-custom-servers/
         * @throws {RequiredError}
         */
        aiToolsReplaceAllCustomServers(requestParameters: ToolsApiAiToolsReplaceAllCustomServersRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiToolsBulkResult> {
            return localVarFp.aiToolsReplaceAllCustomServers(requestParameters.aiToolsReplaceAllCustomServersRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds one tool to the scope\'s always-allow list, or takes it off, which decides whether a call to it pauses the round for approval. `value` is coerced to a boolean, so any truthy value adds and any falsy one removes. Unlike the disable operation, `serverType` is not validated here: an unknown one is stored and then simply never matches, so a wrong value fails silently. `entityId` has to name a room the caller can open.
         * @summary Set allow always
         * @param {ToolsApiAiToolsSetAllowAlwaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsSetAllowAlways operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-allow-always/
         * @throws {RequiredError}
         */
        aiToolsSetAllowAlways(requestParameters: ToolsApiAiToolsSetAllowAlwaysRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiToolsSetAllowAlways(requestParameters.aiToolsSetAllowAlwaysRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches off the listed tools of one server type in the scope, so the model is no longer offered them. `serverType` has to be a key the round\'s tool filter actually matches - a host-configured system server, one of the two DocSpace integration groups, web search, image generation, or one of the scope\'s registered custom servers - and an unknown value is rejected with the list of valid ones in the message, rather than stored and silently ignored. `toolNames` replaces the previous selection for that server type, so send the full list and pass an empty one to switch everything back on. `entityId` has to name a room the caller can open.
         * @summary Set disabled
         * @param {ToolsApiAiToolsSetDisabledRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsSetDisabled operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-set-disabled/
         * @throws {RequiredError}
         */
        aiToolsSetDisabled(requestParameters: ToolsApiAiToolsSetDisabledRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiToolsSetDisabled(requestParameters.aiToolsSetDisabledRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the stored configuration of a registered custom MCP server, under the same name and scope rules as the add operation. The name is re-validated as a routable path segment, and an omitted `config` resolves the same way - to a system server\'s canonical settings, or to the portal-level entry of that name. `entityId` has to name a room the caller can open. The answer carries the stored registry entry.
         * @summary Update custom server
         * @param {ToolsApiAiToolsUpdateCustomServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiToolsUpdateCustomServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-tools-update-custom-server/
         * @throws {RequiredError}
         */
        aiToolsUpdateCustomServer(requestParameters: ToolsApiAiToolsUpdateCustomServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiToolsMutationResult> {
            return localVarFp.aiToolsUpdateCustomServer(requestParameters.aiToolsUpdateCustomServerRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiToolsAddCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsAddCustomServerRequest
 */
export interface ToolsApiAiToolsAddCustomServerRequest {
    /**
     * 
     * @type {AiToolsAddCustomServerRequest}
     * @memberof ToolsApiAiToolsAddCustomServer
     */
    readonly aiToolsAddCustomServerRequest: AiToolsAddCustomServerRequest
}

/**
 * Request parameters for aiToolsGetAllowAlways operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsGetAllowAlwaysRequest
 */
export interface ToolsApiAiToolsGetAllowAlwaysRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof ToolsApiAiToolsGetAllowAlways
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiToolsGetCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsGetCustomServerRequest
 */
export interface ToolsApiAiToolsGetCustomServerRequest {
    /**
     * The custom MCP server name.
     * @type {string}
     * @memberof ToolsApiAiToolsGetCustomServer
     */
    readonly name: string

    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof ToolsApiAiToolsGetCustomServer
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiToolsGetDisabled operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsGetDisabledRequest
 */
export interface ToolsApiAiToolsGetDisabledRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof ToolsApiAiToolsGetDisabled
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiToolsIsAllowAlways operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsIsAllowAlwaysRequest
 */
export interface ToolsApiAiToolsIsAllowAlwaysRequest {
    /**
     * The MCP server type the tool belongs to.
     * @type {string}
     * @memberof ToolsApiAiToolsIsAllowAlways
     */
    readonly serverType: string

    /**
     * The tool name.
     * @type {string}
     * @memberof ToolsApiAiToolsIsAllowAlways
     */
    readonly toolName: string

    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof ToolsApiAiToolsIsAllowAlways
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiToolsIsToolDisabled operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsIsToolDisabledRequest
 */
export interface ToolsApiAiToolsIsToolDisabledRequest {
    /**
     * The MCP server type the tool belongs to.
     * @type {string}
     * @memberof ToolsApiAiToolsIsToolDisabled
     */
    readonly serverType: string

    /**
     * The tool name.
     * @type {string}
     * @memberof ToolsApiAiToolsIsToolDisabled
     */
    readonly toolName: string

    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof ToolsApiAiToolsIsToolDisabled
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiToolsListCustomServers operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsListCustomServersRequest
 */
export interface ToolsApiAiToolsListCustomServersRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof ToolsApiAiToolsListCustomServers
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiToolsListSystemTools operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsListSystemToolsRequest
 */
export interface ToolsApiAiToolsListSystemToolsRequest {
    /**
     * The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope.
     * @type {string}
     * @memberof ToolsApiAiToolsListSystemTools
     */
    readonly entityId?: string
}

/**
 * Request parameters for aiToolsRemoveCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsRemoveCustomServerRequest
 */
export interface ToolsApiAiToolsRemoveCustomServerRequest {
    /**
     * 
     * @type {AiToolsRemoveCustomServerRequest}
     * @memberof ToolsApiAiToolsRemoveCustomServer
     */
    readonly aiToolsRemoveCustomServerRequest: AiToolsRemoveCustomServerRequest
}

/**
 * Request parameters for aiToolsReplaceAllCustomServers operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsReplaceAllCustomServersRequest
 */
export interface ToolsApiAiToolsReplaceAllCustomServersRequest {
    /**
     * 
     * @type {AiToolsReplaceAllCustomServersRequest}
     * @memberof ToolsApiAiToolsReplaceAllCustomServers
     */
    readonly aiToolsReplaceAllCustomServersRequest: AiToolsReplaceAllCustomServersRequest
}

/**
 * Request parameters for aiToolsSetAllowAlways operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsSetAllowAlwaysRequest
 */
export interface ToolsApiAiToolsSetAllowAlwaysRequest {
    /**
     * 
     * @type {AiToolsSetAllowAlwaysRequest}
     * @memberof ToolsApiAiToolsSetAllowAlways
     */
    readonly aiToolsSetAllowAlwaysRequest: AiToolsSetAllowAlwaysRequest
}

/**
 * Request parameters for aiToolsSetDisabled operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsSetDisabledRequest
 */
export interface ToolsApiAiToolsSetDisabledRequest {
    /**
     * 
     * @type {AiToolsSetDisabledRequest}
     * @memberof ToolsApiAiToolsSetDisabled
     */
    readonly aiToolsSetDisabledRequest: AiToolsSetDisabledRequest
}

/**
 * Request parameters for aiToolsUpdateCustomServer operation in ToolsApi.
 * @export
 * @interface ToolsApiAiToolsUpdateCustomServerRequest
 */
export interface ToolsApiAiToolsUpdateCustomServerRequest {
    /**
     * 
     * @type {AiToolsUpdateCustomServerRequest}
     * @memberof ToolsApiAiToolsUpdateCustomServer
     */
    readonly aiToolsUpdateCustomServerRequest: AiToolsUpdateCustomServerRequest
}

/**
 * ToolsApi - object-oriented interface
 * @export
 * @class ToolsApi
 * @extends {BaseAPI}
 */
export class ToolsApi extends BaseAPI {
    /**
     * Registers a custom MCP server under the given name so the model may call its tools. The name becomes a URL path segment, so it may not be `.`, `..`, or contain a path separator or a control character. `config` may be omitted in two cases: a name matching a host-configured system server pins the entry to that server\'s canonical settings as a whitelist marker, and a name already registered portal-wide copies the portal-level configuration into this scope; anything else without a config is rejected. `entityId` scopes the registration and has to name a room the caller can open - a room that is not an agent room folds to the portal-wide scope, while an unreachable one is refused so it cannot silently rewrite the portal\'s own registry.
     * @summary Add custom server
     * @param {AIToolsApiAiToolsAddCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsAddCustomServer(requestParameters: ToolsApiAiToolsAddCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsAddCustomServer(requestParameters.aiToolsAddCustomServerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the always-allow list of the scope - the tools whose calls run without pausing the round for approval. `entityId` picks the scope and omitting it reads the portal-wide setting. An empty answer means every tool call has to be approved through `POST api/2.0/ai/ai/approve-tool-call`. Use `GET api/2.0/ai/tools/is-allow-always` to ask about a single tool.
     * @summary Get allow always
     * @param {AIToolsApiAiToolsGetAllowAlwaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsGetAllowAlways(requestParameters: ToolsApiAiToolsGetAllowAlwaysRequest = {}, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsGetAllowAlways(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the stored configuration of one registered custom MCP server. The name is required and is read from the query; `entityId` picks the scope, and omitting it reads the portal-wide registry. A name that is not registered answers a null body with status 200 rather than 404. The configuration of a system server is returned empty on purpose: those run server-side only, so neither their endpoint nor their credentials are handed to a browser.
     * @summary Get custom server
     * @param {AIToolsApiAiToolsGetCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsGetCustomServer(requestParameters: ToolsApiAiToolsGetCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsGetCustomServer(requestParameters.name, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the tools switched off in the scope, as a map of server type to tool names. `entityId` picks the scope and omitting it reads the portal-wide setting. An absent server type means nothing is switched off for it, so an empty answer means every tool is on offer. Use `GET api/2.0/ai/tools/is-tool-disabled` to ask about one tool instead of reading the whole map.
     * @summary Get disabled
     * @param {AIToolsApiAiToolsGetDisabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsGetDisabled(requestParameters: ToolsApiAiToolsGetDisabledRequest = {}, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsGetDisabled(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tells whether one named tool runs without an approval pause in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. A false answer means a call to that tool pauses the round, and the caller resumes it with the approve or deny operation.
     * @summary Is allow always
     * @param {AIToolsApiAiToolsIsAllowAlwaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsIsAllowAlways(requestParameters: ToolsApiAiToolsIsAllowAlwaysRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsIsAllowAlways(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tells whether one named tool of one server type is switched off in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. It reflects only the disable list - a tool that is on offer may still require approval, which `GET api/2.0/ai/tools/is-allow-always` reports.
     * @summary Is tool disabled
     * @param {AIToolsApiAiToolsIsToolDisabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsIsToolDisabled(requestParameters: ToolsApiAiToolsIsToolDisabledRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsIsToolDisabled(requestParameters.serverType, requestParameters.toolName, requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the custom MCP servers registered in the scope as a map of name to configuration. `entityId` picks the scope and omitting it lists the portal-wide registry. The configuration of any entry that names a host-configured system server comes back empty, for the same reason as in the single-server read, and the portal\'s own built-in MCP server is left out of the list entirely because it is always enabled and cannot be configured. The names in the answer are what the disable and always-allow operations accept as `serverType`.
     * @summary List custom servers
     * @param {AIToolsApiAiToolsListCustomServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsListCustomServers(requestParameters: ToolsApiAiToolsListCustomServersRequest = {}, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsListCustomServers(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists every tool the scope can offer the model, as a map of server type to tool group. The answer merges two sources - the host-configured system servers and the live tools of the scope\'s registered custom MCP servers - and names the system ones separately in `system`, so a client can tell the two apart. `errors` carries the reason a registered server delivered no tools, which is the text to show on a permission card, because the browser cannot reach a server-executed MCP server to find out for itself. The connections are opened server-side, so one request is enough and the client never speaks MCP itself; the portal\'s own built-in server is left out because it is always enabled.
     * @summary List system tools
     * @param {AIToolsApiAiToolsListSystemToolsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsListSystemTools(requestParameters: ToolsApiAiToolsListSystemToolsRequest = {}, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsListSystemTools(requestParameters.entityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unregisters a custom MCP server from the scope, so the model is no longer offered its tools. The name is required and may be sent in the body or as a query parameter, and `entityId` has to name a room the caller can open. A name that is not registered is not reported: the call answers success without removing anything. The server itself is untouched - only this portal\'s registration is dropped.
     * @summary Remove custom server
     * @param {AIToolsApiAiToolsRemoveCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsRemoveCustomServer(requestParameters: ToolsApiAiToolsRemoveCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsRemoveCustomServer(requestParameters.aiToolsRemoveCustomServerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the whole custom MCP server registry of the scope with the supplied map in one write, which makes it the operation a settings screen saves with. `map` is required: without it the registry would be emptied, so a missing or non-object value is rejected rather than treated as none. Every name in the map is validated as a routable path segment and every configuration is resolved before anything is written, so a map with one bad entry changes nothing. `entityId` has to name a room the caller can open - this is the operation where an unreachable one would otherwise have wiped the portal-wide registry.
     * @summary Replace all custom servers
     * @param {AIToolsApiAiToolsReplaceAllCustomServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsReplaceAllCustomServers(requestParameters: ToolsApiAiToolsReplaceAllCustomServersRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsReplaceAllCustomServers(requestParameters.aiToolsReplaceAllCustomServersRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds one tool to the scope\'s always-allow list, or takes it off, which decides whether a call to it pauses the round for approval. `value` is coerced to a boolean, so any truthy value adds and any falsy one removes. Unlike the disable operation, `serverType` is not validated here: an unknown one is stored and then simply never matches, so a wrong value fails silently. `entityId` has to name a room the caller can open.
     * @summary Set allow always
     * @param {AIToolsApiAiToolsSetAllowAlwaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsSetAllowAlways(requestParameters: ToolsApiAiToolsSetAllowAlwaysRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsSetAllowAlways(requestParameters.aiToolsSetAllowAlwaysRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches off the listed tools of one server type in the scope, so the model is no longer offered them. `serverType` has to be a key the round\'s tool filter actually matches - a host-configured system server, one of the two DocSpace integration groups, web search, image generation, or one of the scope\'s registered custom servers - and an unknown value is rejected with the list of valid ones in the message, rather than stored and silently ignored. `toolNames` replaces the previous selection for that server type, so send the full list and pass an empty one to switch everything back on. `entityId` has to name a room the caller can open.
     * @summary Set disabled
     * @param {AIToolsApiAiToolsSetDisabledRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsSetDisabled(requestParameters: ToolsApiAiToolsSetDisabledRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsSetDisabled(requestParameters.aiToolsSetDisabledRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the stored configuration of a registered custom MCP server, under the same name and scope rules as the add operation. The name is re-validated as a routable path segment, and an omitted `config` resolves the same way - to a system server\'s canonical settings, or to the portal-level entry of that name. `entityId` has to name a room the caller can open. The answer carries the stored registry entry.
     * @summary Update custom server
     * @param {AIToolsApiAiToolsUpdateCustomServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToolsApi
     */
    public aiToolsUpdateCustomServer(requestParameters: ToolsApiAiToolsUpdateCustomServerRequest, options?: RawAxiosRequestConfig) {
        return ToolsApiFp(this.configuration).aiToolsUpdateCustomServer(requestParameters.aiToolsUpdateCustomServerRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

