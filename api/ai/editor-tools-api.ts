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
import type { AiEditorToolsCall200Response } from '../../models';
// @ts-ignore
import type { AiEditorToolsCallRequest } from '../../models';
// @ts-ignore
import type { AiEditorToolsList200Response } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
/**
 * EditorToolsApi - axios parameter creator
 * @export
 */
export const EditorToolsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Executes one DocSpace tool on behalf of the document editor\'s AI plugin, server-side and under the caller\'s own credentials, so the browser never holds the transport. `name` has to be one of the tools `GET api/2.0/ai/editor-tools/list` reports; anything else, including a tool the editor is not allowed to reach, is refused. The result is always returned as a string - a structured result is serialised - because the plugin relays it to the model verbatim. A tool that fails does so inside that string as an error payload rather than as an HTTP status, so check the content before trusting it.
         * @summary Call an editor tool
         * @param {AiEditorToolsCallRequest} aiEditorToolsCallRequest The tool to run: `name` from `GET api/2.0/ai/editor-tools/list`, `arguments` matching that tool\'s input schema, and an optional `entityId` for the room to run it in.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiEditorToolsCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-call/
         */
        aiEditorToolsCall: async (aiEditorToolsCallRequest: AiEditorToolsCallRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiEditorToolsCallRequest' is not null or undefined
            assertParamExists('aiEditorToolsCall', 'aiEditorToolsCallRequest', aiEditorToolsCallRequest)

            const localVarPath = `/api/2.0/ai/editor-tools/call`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiEditorToolsCallRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the catalogue of DocSpace tools the document editor\'s AI plugin may offer the model - the same composed set the DocSpace chat sees, minus the two web-search tools the editor already reaches through its own passthrough. `entityId` scopes the catalogue to a room, which decides the room-specific tools it contains. Each entry carries exactly four fields: the tool name, its description, its input schema, and whether calling it requires an approval dialog; nothing else is exposed, because the raw listings of system servers carry transport details that must not reach a browser. The approval flag follows the same policy the chat engine applies, and a read-only tool comes back needing none - execute a tool with `POST api/2.0/ai/editor-tools/call`, which accepts only the names this catalogue reports.
         * @summary List editor tools
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiEditorToolsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-list/
         */
        aiEditorToolsList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/editor-tools/list`;
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
    }
};

/**
 * EditorToolsApi - functional programming interface
 * @export
 */
export const EditorToolsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EditorToolsApiAxiosParamCreator(configuration)
    return {
        /**
         * Executes one DocSpace tool on behalf of the document editor\'s AI plugin, server-side and under the caller\'s own credentials, so the browser never holds the transport. `name` has to be one of the tools `GET api/2.0/ai/editor-tools/list` reports; anything else, including a tool the editor is not allowed to reach, is refused. The result is always returned as a string - a structured result is serialised - because the plugin relays it to the model verbatim. A tool that fails does so inside that string as an error payload rather than as an HTTP status, so check the content before trusting it.
         * @summary Call an editor tool
         * @param {AiEditorToolsCallRequest} aiEditorToolsCallRequest The tool to run: `name` from `GET api/2.0/ai/editor-tools/list`, `arguments` matching that tool\'s input schema, and an optional `entityId` for the room to run it in.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiEditorToolsCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-call/
         */
        async aiEditorToolsCall(aiEditorToolsCallRequest: AiEditorToolsCallRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiEditorToolsCall200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiEditorToolsCall(aiEditorToolsCallRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EditorToolsApi.aiEditorToolsCall']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the catalogue of DocSpace tools the document editor\'s AI plugin may offer the model - the same composed set the DocSpace chat sees, minus the two web-search tools the editor already reaches through its own passthrough. `entityId` scopes the catalogue to a room, which decides the room-specific tools it contains. Each entry carries exactly four fields: the tool name, its description, its input schema, and whether calling it requires an approval dialog; nothing else is exposed, because the raw listings of system servers carry transport details that must not reach a browser. The approval flag follows the same policy the chat engine applies, and a read-only tool comes back needing none - execute a tool with `POST api/2.0/ai/editor-tools/call`, which accepts only the names this catalogue reports.
         * @summary List editor tools
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiEditorToolsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-list/
         */
        async aiEditorToolsList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiEditorToolsList200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiEditorToolsList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EditorToolsApi.aiEditorToolsList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EditorToolsApi - factory interface
 * @export
 */
export const EditorToolsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EditorToolsApiFp(configuration)
    return {
        /**
         * Executes one DocSpace tool on behalf of the document editor\'s AI plugin, server-side and under the caller\'s own credentials, so the browser never holds the transport. `name` has to be one of the tools `GET api/2.0/ai/editor-tools/list` reports; anything else, including a tool the editor is not allowed to reach, is refused. The result is always returned as a string - a structured result is serialised - because the plugin relays it to the model verbatim. A tool that fails does so inside that string as an error payload rather than as an HTTP status, so check the content before trusting it.
         * @summary Call an editor tool
         * @param {EditorToolsApiAiEditorToolsCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiEditorToolsCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-call/
         * @throws {RequiredError}
         */
        aiEditorToolsCall(requestParameters: EditorToolsApiAiEditorToolsCallRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiEditorToolsCall200Response> {
            return localVarFp.aiEditorToolsCall(requestParameters.aiEditorToolsCallRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the catalogue of DocSpace tools the document editor\'s AI plugin may offer the model - the same composed set the DocSpace chat sees, minus the two web-search tools the editor already reaches through its own passthrough. `entityId` scopes the catalogue to a room, which decides the room-specific tools it contains. Each entry carries exactly four fields: the tool name, its description, its input schema, and whether calling it requires an approval dialog; nothing else is exposed, because the raw listings of system servers carry transport details that must not reach a browser. The approval flag follows the same policy the chat engine applies, and a read-only tool comes back needing none - execute a tool with `POST api/2.0/ai/editor-tools/call`, which accepts only the names this catalogue reports.
         * @summary List editor tools
         * @param {*} [options] Override http request option.
         * REST API Reference for aiEditorToolsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-list/
         * @throws {RequiredError}
         */
        aiEditorToolsList(options?: RawAxiosRequestConfig): AxiosPromise<AiEditorToolsList200Response> {
            return localVarFp.aiEditorToolsList(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiEditorToolsCall operation in EditorToolsApi.
 * @export
 * @interface EditorToolsApiAiEditorToolsCallRequest
 */
export interface EditorToolsApiAiEditorToolsCallRequest {
    /**
     * The tool to run: `name` from `GET api/2.0/ai/editor-tools/list`, `arguments` matching that tool\'s input schema, and an optional `entityId` for the room to run it in.
     * @type {AiEditorToolsCallRequest}
     * @memberof EditorToolsApiAiEditorToolsCall
     */
    readonly aiEditorToolsCallRequest: AiEditorToolsCallRequest
}

/**
 * EditorToolsApi - object-oriented interface
 * @export
 * @class EditorToolsApi
 * @extends {BaseAPI}
 */
export class EditorToolsApi extends BaseAPI {
    /**
     * Executes one DocSpace tool on behalf of the document editor\'s AI plugin, server-side and under the caller\'s own credentials, so the browser never holds the transport. `name` has to be one of the tools `GET api/2.0/ai/editor-tools/list` reports; anything else, including a tool the editor is not allowed to reach, is refused. The result is always returned as a string - a structured result is serialised - because the plugin relays it to the model verbatim. A tool that fails does so inside that string as an error payload rather than as an HTTP status, so check the content before trusting it.
     * @summary Call an editor tool
     * @param {AIEditorToolsApiAiEditorToolsCallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorToolsApi
     */
    public aiEditorToolsCall(requestParameters: EditorToolsApiAiEditorToolsCallRequest, options?: RawAxiosRequestConfig) {
        return EditorToolsApiFp(this.configuration).aiEditorToolsCall(requestParameters.aiEditorToolsCallRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the catalogue of DocSpace tools the document editor\'s AI plugin may offer the model - the same composed set the DocSpace chat sees, minus the two web-search tools the editor already reaches through its own passthrough. `entityId` scopes the catalogue to a room, which decides the room-specific tools it contains. Each entry carries exactly four fields: the tool name, its description, its input schema, and whether calling it requires an approval dialog; nothing else is exposed, because the raw listings of system servers carry transport details that must not reach a browser. The approval flag follows the same policy the chat engine applies, and a read-only tool comes back needing none - execute a tool with `POST api/2.0/ai/editor-tools/call`, which accepts only the names this catalogue reports.
     * @summary List editor tools
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorToolsApi
     */
    public aiEditorToolsList(options?: RawAxiosRequestConfig) {
        return EditorToolsApiFp(this.configuration).aiEditorToolsList(options).then((request) => request(this.axios, this.basePath));
    }
}

