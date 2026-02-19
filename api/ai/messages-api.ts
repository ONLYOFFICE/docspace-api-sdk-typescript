/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { ExportMessageRequestBodyInteger } from '../../models';
/**
 * MessagesApi - axios parameter creator
 * @export
 */
export const MessagesApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Exports a specific AI chat message as a document into the specified folder. The system verifies that the message exists  and belongs to a chat accessible by the current user, then publishes an asynchronous export task to the event bus.  The exported document will be created in the target folder with the given title once the background task completes.
         * @summary Export a single AI message to a document
         * @param {number} messageId The unique identifier of the AI chat message to export.
         * @param {ExportMessageRequestBodyInteger} exportMessageRequestBodyInteger The export parameters including destination folder and file title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for exportMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/export-message/
         */
        exportMessage: async (messageId: number, exportMessageRequestBodyInteger: ExportMessageRequestBodyInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'messageId' is not null or undefined
            assertParamExists('exportMessage', 'messageId', messageId)
            // verify required parameter 'exportMessageRequestBodyInteger' is not null or undefined
            assertParamExists('exportMessage', 'exportMessageRequestBodyInteger', exportMessageRequestBodyInteger)

            const localVarPath = `/api/2.0/ai/messages/{messageId}/export`
                .replace(`{${"messageId"}}`, encodeURIComponent(String(messageId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(exportMessageRequestBodyInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MessagesApi - functional programming interface
 * @export
 */
export const MessagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MessagesApiAxiosParamCreator(configuration)
    return {
        /**
         * Exports a specific AI chat message as a document into the specified folder. The system verifies that the message exists  and belongs to a chat accessible by the current user, then publishes an asynchronous export task to the event bus.  The exported document will be created in the target folder with the given title once the background task completes.
         * @summary Export a single AI message to a document
         * @param {number} messageId The unique identifier of the AI chat message to export.
         * @param {ExportMessageRequestBodyInteger} exportMessageRequestBodyInteger The export parameters including destination folder and file title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for exportMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/export-message/
         */
        async exportMessage(messageId: number, exportMessageRequestBodyInteger: ExportMessageRequestBodyInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.exportMessage(messageId, exportMessageRequestBodyInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MessagesApi.exportMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MessagesApi - factory interface
 * @export
 */
export const MessagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MessagesApiFp(configuration)
    return {
        /**
         * Exports a specific AI chat message as a document into the specified folder. The system verifies that the message exists  and belongs to a chat accessible by the current user, then publishes an asynchronous export task to the event bus.  The exported document will be created in the target folder with the given title once the background task completes.
         * @summary Export a single AI message to a document
         * @param {number} messageId The unique identifier of the AI chat message to export.
         * @param {ExportMessageRequestBodyInteger} exportMessageRequestBodyInteger The export parameters including destination folder and file title.
         * @param {*} [options] Override http request option.
         * REST API Reference for exportMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/export-message/
         * @throws {RequiredError}
         */
        exportMessage(messageId: number, exportMessageRequestBodyInteger: ExportMessageRequestBodyInteger, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.exportMessage(messageId, exportMessageRequestBodyInteger, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MessagesApi - object-oriented interface
 * @export
 * @class MessagesApi
 * @extends {BaseAPI}
 */
export class MessagesApi extends BaseAPI {
    /**
     * Exports a specific AI chat message as a document into the specified folder. The system verifies that the message exists  and belongs to a chat accessible by the current user, then publishes an asynchronous export task to the event bus.  The exported document will be created in the target folder with the given title once the background task completes.
     * @summary Export a single AI message to a document
     * @param {number} messageId The unique identifier of the AI chat message to export.
     * @param {ExportMessageRequestBodyInteger} exportMessageRequestBodyInteger The export parameters including destination folder and file title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public exportMessage(messageId: number, exportMessageRequestBodyInteger: ExportMessageRequestBodyInteger, options?: RawAxiosRequestConfig) {
        return MessagesApiFp(this.configuration).exportMessage(messageId, exportMessageRequestBodyInteger, options).then((request) => request(this.axios, this.basePath));
    }
}

