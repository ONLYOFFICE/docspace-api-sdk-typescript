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
import type { AiAttachment } from '../../models';
// @ts-ignore
import type { AiAttachmentsLinkToMessageRequest } from '../../models';
// @ts-ignore
import type { AiAttachmentsSaveFileRequest } from '../../models';
// @ts-ignore
import type { AiAttachmentsSaveFilesManyRequest } from '../../models';
// @ts-ignore
import type { AiAttachmentsSaveImageRequest } from '../../models';
// @ts-ignore
import type { AiAttachmentsSaveImagesManyRequest } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiSuccessResponse } from '../../models';
/**
 * AttachmentsApi - axios parameter creator
 * @export
 */
export const AttachmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete/
         */
        aiAttachmentsDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiAttachmentsDelete', 'body', body)

            const localVarPath = `/api/2.0/ai/attachments/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * 
         * @summary Delete many
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsDeleteMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete-many/
         */
        aiAttachmentsDeleteMany: async (requestBody: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('aiAttachmentsDeleteMany', 'requestBody', requestBody)

            const localVarPath = `/api/2.0/ai/attachments/delete-many`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * 
         * @summary Get
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get/
         */
        aiAttachmentsGet: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('aiAttachmentsGet', 'body', body)

            const localVarPath = `/api/2.0/ai/attachments/get`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get many
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsGetMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get-many/
         */
        aiAttachmentsGetMany: async (requestBody: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('aiAttachmentsGetMany', 'requestBody', requestBody)

            const localVarPath = `/api/2.0/ai/attachments/get-many`;
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
         * 
         * @summary Link to message
         * @param {AiAttachmentsLinkToMessageRequest} aiAttachmentsLinkToMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsLinkToMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-link-to-message/
         */
        aiAttachmentsLinkToMessage: async (aiAttachmentsLinkToMessageRequest: AiAttachmentsLinkToMessageRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAttachmentsLinkToMessageRequest' is not null or undefined
            assertParamExists('aiAttachmentsLinkToMessage', 'aiAttachmentsLinkToMessageRequest', aiAttachmentsLinkToMessageRequest)

            const localVarPath = `/api/2.0/ai/attachments/link-to-message`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAttachmentsLinkToMessageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Save file
         * @param {AiAttachmentsSaveFileRequest} aiAttachmentsSaveFileRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsSaveFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-file/
         */
        aiAttachmentsSaveFile: async (aiAttachmentsSaveFileRequest: AiAttachmentsSaveFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAttachmentsSaveFileRequest' is not null or undefined
            assertParamExists('aiAttachmentsSaveFile', 'aiAttachmentsSaveFileRequest', aiAttachmentsSaveFileRequest)

            const localVarPath = `/api/2.0/ai/attachments/save-file`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAttachmentsSaveFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Save files many
         * @param {AiAttachmentsSaveFilesManyRequest} aiAttachmentsSaveFilesManyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsSaveFilesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-files-many/
         */
        aiAttachmentsSaveFilesMany: async (aiAttachmentsSaveFilesManyRequest: AiAttachmentsSaveFilesManyRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAttachmentsSaveFilesManyRequest' is not null or undefined
            assertParamExists('aiAttachmentsSaveFilesMany', 'aiAttachmentsSaveFilesManyRequest', aiAttachmentsSaveFilesManyRequest)

            const localVarPath = `/api/2.0/ai/attachments/save-files-many`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAttachmentsSaveFilesManyRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Save image
         * @param {AiAttachmentsSaveImageRequest} aiAttachmentsSaveImageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsSaveImage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-image/
         */
        aiAttachmentsSaveImage: async (aiAttachmentsSaveImageRequest: AiAttachmentsSaveImageRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAttachmentsSaveImageRequest' is not null or undefined
            assertParamExists('aiAttachmentsSaveImage', 'aiAttachmentsSaveImageRequest', aiAttachmentsSaveImageRequest)

            const localVarPath = `/api/2.0/ai/attachments/save-image`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAttachmentsSaveImageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Save images many
         * @param {AiAttachmentsSaveImagesManyRequest} aiAttachmentsSaveImagesManyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsSaveImagesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-images-many/
         */
        aiAttachmentsSaveImagesMany: async (aiAttachmentsSaveImagesManyRequest: AiAttachmentsSaveImagesManyRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiAttachmentsSaveImagesManyRequest' is not null or undefined
            assertParamExists('aiAttachmentsSaveImagesMany', 'aiAttachmentsSaveImagesManyRequest', aiAttachmentsSaveImagesManyRequest)

            const localVarPath = `/api/2.0/ai/attachments/save-images-many`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiAttachmentsSaveImagesManyRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AttachmentsApi - functional programming interface
 * @export
 */
export const AttachmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AttachmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete/
         */
        async aiAttachmentsDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAttachmentsDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.aiAttachmentsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete many
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsDeleteMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete-many/
         */
        async aiAttachmentsDeleteMany(requestBody: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAttachmentsDeleteMany(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.aiAttachmentsDeleteMany']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get/
         */
        async aiAttachmentsGet(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAttachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAttachmentsGet(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.aiAttachmentsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get many
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsGetMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get-many/
         */
        async aiAttachmentsGetMany(requestBody: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiAttachment | null>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAttachmentsGetMany(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.aiAttachmentsGetMany']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Link to message
         * @param {AiAttachmentsLinkToMessageRequest} aiAttachmentsLinkToMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsLinkToMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-link-to-message/
         */
        async aiAttachmentsLinkToMessage(aiAttachmentsLinkToMessageRequest: AiAttachmentsLinkToMessageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAttachmentsLinkToMessage(aiAttachmentsLinkToMessageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.aiAttachmentsLinkToMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Save file
         * @param {AiAttachmentsSaveFileRequest} aiAttachmentsSaveFileRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsSaveFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-file/
         */
        async aiAttachmentsSaveFile(aiAttachmentsSaveFileRequest: AiAttachmentsSaveFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAttachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAttachmentsSaveFile(aiAttachmentsSaveFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.aiAttachmentsSaveFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Save files many
         * @param {AiAttachmentsSaveFilesManyRequest} aiAttachmentsSaveFilesManyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsSaveFilesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-files-many/
         */
        async aiAttachmentsSaveFilesMany(aiAttachmentsSaveFilesManyRequest: AiAttachmentsSaveFilesManyRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiAttachment>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAttachmentsSaveFilesMany(aiAttachmentsSaveFilesManyRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.aiAttachmentsSaveFilesMany']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Save image
         * @param {AiAttachmentsSaveImageRequest} aiAttachmentsSaveImageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsSaveImage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-image/
         */
        async aiAttachmentsSaveImage(aiAttachmentsSaveImageRequest: AiAttachmentsSaveImageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiAttachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAttachmentsSaveImage(aiAttachmentsSaveImageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.aiAttachmentsSaveImage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Save images many
         * @param {AiAttachmentsSaveImagesManyRequest} aiAttachmentsSaveImagesManyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiAttachmentsSaveImagesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-images-many/
         */
        async aiAttachmentsSaveImagesMany(aiAttachmentsSaveImagesManyRequest: AiAttachmentsSaveImagesManyRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiAttachment>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiAttachmentsSaveImagesMany(aiAttachmentsSaveImagesManyRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.aiAttachmentsSaveImagesMany']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AttachmentsApi - factory interface
 * @export
 */
export const AttachmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AttachmentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete
         * @param {AttachmentsApiAiAttachmentsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAttachmentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete/
         * @throws {RequiredError}
         */
        aiAttachmentsDelete(requestParameters: AttachmentsApiAiAttachmentsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiAttachmentsDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete many
         * @param {AttachmentsApiAiAttachmentsDeleteManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAttachmentsDeleteMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-delete-many/
         * @throws {RequiredError}
         */
        aiAttachmentsDeleteMany(requestParameters: AttachmentsApiAiAttachmentsDeleteManyRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiAttachmentsDeleteMany(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get
         * @param {AttachmentsApiAiAttachmentsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAttachmentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get/
         * @throws {RequiredError}
         */
        aiAttachmentsGet(requestParameters: AttachmentsApiAiAttachmentsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiAttachment> {
            return localVarFp.aiAttachmentsGet(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get many
         * @param {AttachmentsApiAiAttachmentsGetManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAttachmentsGetMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-get-many/
         * @throws {RequiredError}
         */
        aiAttachmentsGetMany(requestParameters: AttachmentsApiAiAttachmentsGetManyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<AiAttachment | null>> {
            return localVarFp.aiAttachmentsGetMany(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Link to message
         * @param {AttachmentsApiAiAttachmentsLinkToMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAttachmentsLinkToMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-link-to-message/
         * @throws {RequiredError}
         */
        aiAttachmentsLinkToMessage(requestParameters: AttachmentsApiAiAttachmentsLinkToMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiAttachmentsLinkToMessage(requestParameters.aiAttachmentsLinkToMessageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Save file
         * @param {AttachmentsApiAiAttachmentsSaveFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAttachmentsSaveFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-file/
         * @throws {RequiredError}
         */
        aiAttachmentsSaveFile(requestParameters: AttachmentsApiAiAttachmentsSaveFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiAttachment> {
            return localVarFp.aiAttachmentsSaveFile(requestParameters.aiAttachmentsSaveFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Save files many
         * @param {AttachmentsApiAiAttachmentsSaveFilesManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAttachmentsSaveFilesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-files-many/
         * @throws {RequiredError}
         */
        aiAttachmentsSaveFilesMany(requestParameters: AttachmentsApiAiAttachmentsSaveFilesManyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<AiAttachment>> {
            return localVarFp.aiAttachmentsSaveFilesMany(requestParameters.aiAttachmentsSaveFilesManyRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Save image
         * @param {AttachmentsApiAiAttachmentsSaveImageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAttachmentsSaveImage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-image/
         * @throws {RequiredError}
         */
        aiAttachmentsSaveImage(requestParameters: AttachmentsApiAiAttachmentsSaveImageRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiAttachment> {
            return localVarFp.aiAttachmentsSaveImage(requestParameters.aiAttachmentsSaveImageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Save images many
         * @param {AttachmentsApiAiAttachmentsSaveImagesManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiAttachmentsSaveImagesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-attachments-save-images-many/
         * @throws {RequiredError}
         */
        aiAttachmentsSaveImagesMany(requestParameters: AttachmentsApiAiAttachmentsSaveImagesManyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<AiAttachment>> {
            return localVarFp.aiAttachmentsSaveImagesMany(requestParameters.aiAttachmentsSaveImagesManyRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiAttachmentsDelete operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiAiAttachmentsDeleteRequest
 */
export interface AttachmentsApiAiAttachmentsDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof AttachmentsApiAiAttachmentsDelete
     */
    readonly body: string
}

/**
 * Request parameters for aiAttachmentsDeleteMany operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiAiAttachmentsDeleteManyRequest
 */
export interface AttachmentsApiAiAttachmentsDeleteManyRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof AttachmentsApiAiAttachmentsDeleteMany
     */
    readonly requestBody: Array<string>
}

/**
 * Request parameters for aiAttachmentsGet operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiAiAttachmentsGetRequest
 */
export interface AttachmentsApiAiAttachmentsGetRequest {
    /**
     * 
     * @type {string}
     * @memberof AttachmentsApiAiAttachmentsGet
     */
    readonly body: string
}

/**
 * Request parameters for aiAttachmentsGetMany operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiAiAttachmentsGetManyRequest
 */
export interface AttachmentsApiAiAttachmentsGetManyRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof AttachmentsApiAiAttachmentsGetMany
     */
    readonly requestBody: Array<string>
}

/**
 * Request parameters for aiAttachmentsLinkToMessage operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiAiAttachmentsLinkToMessageRequest
 */
export interface AttachmentsApiAiAttachmentsLinkToMessageRequest {
    /**
     * 
     * @type {AiAttachmentsLinkToMessageRequest}
     * @memberof AttachmentsApiAiAttachmentsLinkToMessage
     */
    readonly aiAttachmentsLinkToMessageRequest: AiAttachmentsLinkToMessageRequest
}

/**
 * Request parameters for aiAttachmentsSaveFile operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiAiAttachmentsSaveFileRequest
 */
export interface AttachmentsApiAiAttachmentsSaveFileRequest {
    /**
     * 
     * @type {AiAttachmentsSaveFileRequest}
     * @memberof AttachmentsApiAiAttachmentsSaveFile
     */
    readonly aiAttachmentsSaveFileRequest: AiAttachmentsSaveFileRequest
}

/**
 * Request parameters for aiAttachmentsSaveFilesMany operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiAiAttachmentsSaveFilesManyRequest
 */
export interface AttachmentsApiAiAttachmentsSaveFilesManyRequest {
    /**
     * 
     * @type {AiAttachmentsSaveFilesManyRequest}
     * @memberof AttachmentsApiAiAttachmentsSaveFilesMany
     */
    readonly aiAttachmentsSaveFilesManyRequest: AiAttachmentsSaveFilesManyRequest
}

/**
 * Request parameters for aiAttachmentsSaveImage operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiAiAttachmentsSaveImageRequest
 */
export interface AttachmentsApiAiAttachmentsSaveImageRequest {
    /**
     * 
     * @type {AiAttachmentsSaveImageRequest}
     * @memberof AttachmentsApiAiAttachmentsSaveImage
     */
    readonly aiAttachmentsSaveImageRequest: AiAttachmentsSaveImageRequest
}

/**
 * Request parameters for aiAttachmentsSaveImagesMany operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiAiAttachmentsSaveImagesManyRequest
 */
export interface AttachmentsApiAiAttachmentsSaveImagesManyRequest {
    /**
     * 
     * @type {AiAttachmentsSaveImagesManyRequest}
     * @memberof AttachmentsApiAiAttachmentsSaveImagesMany
     */
    readonly aiAttachmentsSaveImagesManyRequest: AiAttachmentsSaveImagesManyRequest
}

/**
 * AttachmentsApi - object-oriented interface
 * @export
 * @class AttachmentsApi
 * @extends {BaseAPI}
 */
export class AttachmentsApi extends BaseAPI {
    /**
     * 
     * @summary Delete
     * @param {AIAttachmentsApiAiAttachmentsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public aiAttachmentsDelete(requestParameters: AttachmentsApiAiAttachmentsDeleteRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).aiAttachmentsDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete many
     * @param {AIAttachmentsApiAiAttachmentsDeleteManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public aiAttachmentsDeleteMany(requestParameters: AttachmentsApiAiAttachmentsDeleteManyRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).aiAttachmentsDeleteMany(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get
     * @param {AIAttachmentsApiAiAttachmentsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public aiAttachmentsGet(requestParameters: AttachmentsApiAiAttachmentsGetRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).aiAttachmentsGet(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get many
     * @param {AIAttachmentsApiAiAttachmentsGetManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public aiAttachmentsGetMany(requestParameters: AttachmentsApiAiAttachmentsGetManyRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).aiAttachmentsGetMany(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Link to message
     * @param {AIAttachmentsApiAiAttachmentsLinkToMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public aiAttachmentsLinkToMessage(requestParameters: AttachmentsApiAiAttachmentsLinkToMessageRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).aiAttachmentsLinkToMessage(requestParameters.aiAttachmentsLinkToMessageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Save file
     * @param {AIAttachmentsApiAiAttachmentsSaveFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public aiAttachmentsSaveFile(requestParameters: AttachmentsApiAiAttachmentsSaveFileRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).aiAttachmentsSaveFile(requestParameters.aiAttachmentsSaveFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Save files many
     * @param {AIAttachmentsApiAiAttachmentsSaveFilesManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public aiAttachmentsSaveFilesMany(requestParameters: AttachmentsApiAiAttachmentsSaveFilesManyRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).aiAttachmentsSaveFilesMany(requestParameters.aiAttachmentsSaveFilesManyRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Save image
     * @param {AIAttachmentsApiAiAttachmentsSaveImageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public aiAttachmentsSaveImage(requestParameters: AttachmentsApiAiAttachmentsSaveImageRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).aiAttachmentsSaveImage(requestParameters.aiAttachmentsSaveImageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Save images many
     * @param {AIAttachmentsApiAiAttachmentsSaveImagesManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public aiAttachmentsSaveImagesMany(requestParameters: AttachmentsApiAiAttachmentsSaveImagesManyRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).aiAttachmentsSaveImagesMany(requestParameters.aiAttachmentsSaveImagesManyRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

