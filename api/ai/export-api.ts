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
import type { AiExportTextToDocx202Response } from '../../models';
// @ts-ignore
import type { AiExportTextToDocxRequest } from '../../models';
/**
 * ExportApi - axios parameter creator
 * @export
 */
export const ExportApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Queues a markdown export and answers 202 as soon as the job is accepted, without waiting for it. `title`, `content` and `folderId` are all required, and a `content` of only whitespace counts as missing even though it is not empty. `format` is optional and selects the output - `Docx` (the default), `Pdf`, or `Md`, which stores the markdown verbatim instead of converting it. The conversion runs in the AI worker, which saves the .docx into the target folder - an agent room resolves to its own result-storage subfolder - so there is nothing to poll here: completion arrives as the ordinary folder-modified socket event. This route accepts a body of up to 15 MB rather than the 100 KB the rest of the API allows, because a whole thread transcript is sent in one request.
         * @summary Start markdown export
         * @param {AiExportTextToDocxRequest} aiExportTextToDocxRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiExportTextToDocx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-export-text-to-docx/
         */
        aiExportTextToDocx: async (aiExportTextToDocxRequest: AiExportTextToDocxRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiExportTextToDocxRequest' is not null or undefined
            assertParamExists('aiExportTextToDocx', 'aiExportTextToDocxRequest', aiExportTextToDocxRequest)

            const localVarPath = `/api/2.0/ai/text-to-docx`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiExportTextToDocxRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExportApi - functional programming interface
 * @export
 */
export const ExportApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExportApiAxiosParamCreator(configuration)
    return {
        /**
         * Queues a markdown export and answers 202 as soon as the job is accepted, without waiting for it. `title`, `content` and `folderId` are all required, and a `content` of only whitespace counts as missing even though it is not empty. `format` is optional and selects the output - `Docx` (the default), `Pdf`, or `Md`, which stores the markdown verbatim instead of converting it. The conversion runs in the AI worker, which saves the .docx into the target folder - an agent room resolves to its own result-storage subfolder - so there is nothing to poll here: completion arrives as the ordinary folder-modified socket event. This route accepts a body of up to 15 MB rather than the 100 KB the rest of the API allows, because a whole thread transcript is sent in one request.
         * @summary Start markdown export
         * @param {AiExportTextToDocxRequest} aiExportTextToDocxRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiExportTextToDocx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-export-text-to-docx/
         */
        async aiExportTextToDocx(aiExportTextToDocxRequest: AiExportTextToDocxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiExportTextToDocx202Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiExportTextToDocx(aiExportTextToDocxRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ExportApi.aiExportTextToDocx']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ExportApi - factory interface
 * @export
 */
export const ExportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExportApiFp(configuration)
    return {
        /**
         * Queues a markdown export and answers 202 as soon as the job is accepted, without waiting for it. `title`, `content` and `folderId` are all required, and a `content` of only whitespace counts as missing even though it is not empty. `format` is optional and selects the output - `Docx` (the default), `Pdf`, or `Md`, which stores the markdown verbatim instead of converting it. The conversion runs in the AI worker, which saves the .docx into the target folder - an agent room resolves to its own result-storage subfolder - so there is nothing to poll here: completion arrives as the ordinary folder-modified socket event. This route accepts a body of up to 15 MB rather than the 100 KB the rest of the API allows, because a whole thread transcript is sent in one request.
         * @summary Start markdown export
         * @param {ExportApiAiExportTextToDocxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiExportTextToDocx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-export-text-to-docx/
         * @throws {RequiredError}
         */
        aiExportTextToDocx(requestParameters: ExportApiAiExportTextToDocxRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiExportTextToDocx202Response> {
            return localVarFp.aiExportTextToDocx(requestParameters.aiExportTextToDocxRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiExportTextToDocx operation in ExportApi.
 * @export
 * @interface ExportApiAiExportTextToDocxRequest
 */
export interface ExportApiAiExportTextToDocxRequest {
    /**
     * 
     * @type {AiExportTextToDocxRequest}
     * @memberof ExportApiAiExportTextToDocx
     */
    readonly aiExportTextToDocxRequest: AiExportTextToDocxRequest
}

/**
 * ExportApi - object-oriented interface
 * @export
 * @class ExportApi
 * @extends {BaseAPI}
 */
export class ExportApi extends BaseAPI {
    /**
     * Queues a markdown export and answers 202 as soon as the job is accepted, without waiting for it. `title`, `content` and `folderId` are all required, and a `content` of only whitespace counts as missing even though it is not empty. `format` is optional and selects the output - `Docx` (the default), `Pdf`, or `Md`, which stores the markdown verbatim instead of converting it. The conversion runs in the AI worker, which saves the .docx into the target folder - an agent room resolves to its own result-storage subfolder - so there is nothing to poll here: completion arrives as the ordinary folder-modified socket event. This route accepts a body of up to 15 MB rather than the 100 KB the rest of the API allows, because a whole thread transcript is sent in one request.
     * @summary Start markdown export
     * @param {AIExportApiAiExportTextToDocxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExportApi
     */
    public aiExportTextToDocx(requestParameters: ExportApiAiExportTextToDocxRequest, options?: RawAxiosRequestConfig) {
        return ExportApiFp(this.configuration).aiExportTextToDocx(requestParameters.aiExportTextToDocxRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

