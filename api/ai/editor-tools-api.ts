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
/**
 * EditorToolsApi - axios parameter creator
 * @export
 */
export const EditorToolsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Executes one DocSpace tool on behalf of the document editor\'s AI plugin, server-side and with the caller\'s forwarded credentials. Whatever the tool produced is returned for the plugin to relay to the model; a failure comes back as an error payload.
         * @summary Execute a DocSpace tool on behalf of the editor AI plugin
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiEditorToolsCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-call/
         */
        aiEditorToolsCall: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('aiEditorToolsCall', 'requestBody', requestBody)

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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the sanitized catalog of DocSpace tools available to the document editor\'s AI plugin - the same composed tool set the DocSpace chat sees, minus the web-search pair the editor already has through its own passthrough. Only the name, description, parameters and approval flag of each tool are exposed; transport details never reach the browser.
         * @summary Sanitized DocSpace tool catalog for the editor AI plugin
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
         * Executes one DocSpace tool on behalf of the document editor\'s AI plugin, server-side and with the caller\'s forwarded credentials. Whatever the tool produced is returned for the plugin to relay to the model; a failure comes back as an error payload.
         * @summary Execute a DocSpace tool on behalf of the editor AI plugin
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiEditorToolsCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-call/
         */
        async aiEditorToolsCall(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiEditorToolsCall(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EditorToolsApi.aiEditorToolsCall']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the sanitized catalog of DocSpace tools available to the document editor\'s AI plugin - the same composed tool set the DocSpace chat sees, minus the web-search pair the editor already has through its own passthrough. Only the name, description, parameters and approval flag of each tool are exposed; transport details never reach the browser.
         * @summary Sanitized DocSpace tool catalog for the editor AI plugin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiEditorToolsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-list/
         */
        async aiEditorToolsList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
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
         * Executes one DocSpace tool on behalf of the document editor\'s AI plugin, server-side and with the caller\'s forwarded credentials. Whatever the tool produced is returned for the plugin to relay to the model; a failure comes back as an error payload.
         * @summary Execute a DocSpace tool on behalf of the editor AI plugin
         * @param {EditorToolsApiAiEditorToolsCallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiEditorToolsCall operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-call/
         * @throws {RequiredError}
         */
        aiEditorToolsCall(requestParameters: EditorToolsApiAiEditorToolsCallRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiEditorToolsCall(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the sanitized catalog of DocSpace tools available to the document editor\'s AI plugin - the same composed tool set the DocSpace chat sees, minus the web-search pair the editor already has through its own passthrough. Only the name, description, parameters and approval flag of each tool are exposed; transport details never reach the browser.
         * @summary Sanitized DocSpace tool catalog for the editor AI plugin
         * @param {*} [options] Override http request option.
         * REST API Reference for aiEditorToolsList operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-editor-tools-list/
         * @throws {RequiredError}
         */
        aiEditorToolsList(options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
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
     * 
     * @type {{ [key: string]: any; }}
     * @memberof EditorToolsApiAiEditorToolsCall
     */
    readonly requestBody: { [key: string]: any; }
}

/**
 * EditorToolsApi - object-oriented interface
 * @export
 * @class EditorToolsApi
 * @extends {BaseAPI}
 */
export class EditorToolsApi extends BaseAPI {
    /**
     * Executes one DocSpace tool on behalf of the document editor\'s AI plugin, server-side and with the caller\'s forwarded credentials. Whatever the tool produced is returned for the plugin to relay to the model; a failure comes back as an error payload.
     * @summary Execute a DocSpace tool on behalf of the editor AI plugin
     * @param {AIEditorToolsApiAiEditorToolsCallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorToolsApi
     */
    public aiEditorToolsCall(requestParameters: EditorToolsApiAiEditorToolsCallRequest, options?: RawAxiosRequestConfig) {
        return EditorToolsApiFp(this.configuration).aiEditorToolsCall(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the sanitized catalog of DocSpace tools available to the document editor\'s AI plugin - the same composed tool set the DocSpace chat sees, minus the web-search pair the editor already has through its own passthrough. Only the name, description, parameters and approval flag of each tool are exposed; transport details never reach the browser.
     * @summary Sanitized DocSpace tool catalog for the editor AI plugin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorToolsApi
     */
    public aiEditorToolsList(options?: RawAxiosRequestConfig) {
        return EditorToolsApiFp(this.configuration).aiEditorToolsList(options).then((request) => request(this.axios, this.basePath));
    }
}

