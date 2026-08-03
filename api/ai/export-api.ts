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
import type { AiExportTextToDocx200Response } from '../../models';
// @ts-ignore
import type { AiExportTextToDocxRequest } from '../../models';
/**
 * ExportApi - axios parameter creator
 * @export
 */
export const ExportApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Start markdown → docx export
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
         * 
         * @summary Start markdown → docx export
         * @param {AiExportTextToDocxRequest} aiExportTextToDocxRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiExportTextToDocx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-export-text-to-docx/
         */
        async aiExportTextToDocx(aiExportTextToDocxRequest: AiExportTextToDocxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiExportTextToDocx200Response>> {
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
         * 
         * @summary Start markdown → docx export
         * @param {ExportApiAiExportTextToDocxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiExportTextToDocx operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-export-text-to-docx/
         * @throws {RequiredError}
         */
        aiExportTextToDocx(requestParameters: ExportApiAiExportTextToDocxRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiExportTextToDocx200Response> {
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
     * 
     * @summary Start markdown → docx export
     * @param {AIExportApiAiExportTextToDocxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExportApi
     */
    public aiExportTextToDocx(requestParameters: ExportApiAiExportTextToDocxRequest, options?: RawAxiosRequestConfig) {
        return ExportApiFp(this.configuration).aiExportTextToDocx(requestParameters.aiExportTextToDocxRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

