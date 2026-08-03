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
import type { NewAiAttachment } from '../../models';
// @ts-ignore
import type { NewAiAttachmentsLinkToMessageRequest } from '../../models';
// @ts-ignore
import type { NewAiAttachmentsSaveFileRequest } from '../../models';
// @ts-ignore
import type { NewAiAttachmentsSaveFilesManyRequest } from '../../models';
// @ts-ignore
import type { NewAiAttachmentsSaveImageRequest } from '../../models';
// @ts-ignore
import type { NewAiAttachmentsSaveImagesManyRequest } from '../../models';
// @ts-ignore
import type { NewAiErrorResponse } from '../../models';
// @ts-ignore
import type { NewAiSuccessResponse } from '../../models';
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
         * REST API Reference for newAiAttachmentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-delete/
         */
        newAiAttachmentsDelete: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiAttachmentsDelete', 'body', body)

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
         * REST API Reference for newAiAttachmentsDeleteMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-delete-many/
         */
        newAiAttachmentsDeleteMany: async (requestBody: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('newAiAttachmentsDeleteMany', 'requestBody', requestBody)

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
         * REST API Reference for newAiAttachmentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-get/
         */
        newAiAttachmentsGet: async (body: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('newAiAttachmentsGet', 'body', body)

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
         * REST API Reference for newAiAttachmentsGetMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-get-many/
         */
        newAiAttachmentsGetMany: async (requestBody: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('newAiAttachmentsGetMany', 'requestBody', requestBody)

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
         * @param {NewAiAttachmentsLinkToMessageRequest} newAiAttachmentsLinkToMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsLinkToMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-link-to-message/
         */
        newAiAttachmentsLinkToMessage: async (newAiAttachmentsLinkToMessageRequest: NewAiAttachmentsLinkToMessageRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAttachmentsLinkToMessageRequest' is not null or undefined
            assertParamExists('newAiAttachmentsLinkToMessage', 'newAiAttachmentsLinkToMessageRequest', newAiAttachmentsLinkToMessageRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAttachmentsLinkToMessageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Save file
         * @param {NewAiAttachmentsSaveFileRequest} newAiAttachmentsSaveFileRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsSaveFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-file/
         */
        newAiAttachmentsSaveFile: async (newAiAttachmentsSaveFileRequest: NewAiAttachmentsSaveFileRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAttachmentsSaveFileRequest' is not null or undefined
            assertParamExists('newAiAttachmentsSaveFile', 'newAiAttachmentsSaveFileRequest', newAiAttachmentsSaveFileRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAttachmentsSaveFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Save files many
         * @param {NewAiAttachmentsSaveFilesManyRequest} newAiAttachmentsSaveFilesManyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsSaveFilesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-files-many/
         */
        newAiAttachmentsSaveFilesMany: async (newAiAttachmentsSaveFilesManyRequest: NewAiAttachmentsSaveFilesManyRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAttachmentsSaveFilesManyRequest' is not null or undefined
            assertParamExists('newAiAttachmentsSaveFilesMany', 'newAiAttachmentsSaveFilesManyRequest', newAiAttachmentsSaveFilesManyRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAttachmentsSaveFilesManyRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Save image
         * @param {NewAiAttachmentsSaveImageRequest} newAiAttachmentsSaveImageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsSaveImage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-image/
         */
        newAiAttachmentsSaveImage: async (newAiAttachmentsSaveImageRequest: NewAiAttachmentsSaveImageRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAttachmentsSaveImageRequest' is not null or undefined
            assertParamExists('newAiAttachmentsSaveImage', 'newAiAttachmentsSaveImageRequest', newAiAttachmentsSaveImageRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAttachmentsSaveImageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Save images many
         * @param {NewAiAttachmentsSaveImagesManyRequest} newAiAttachmentsSaveImagesManyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsSaveImagesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-images-many/
         */
        newAiAttachmentsSaveImagesMany: async (newAiAttachmentsSaveImagesManyRequest: NewAiAttachmentsSaveImagesManyRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newAiAttachmentsSaveImagesManyRequest' is not null or undefined
            assertParamExists('newAiAttachmentsSaveImagesMany', 'newAiAttachmentsSaveImagesManyRequest', newAiAttachmentsSaveImagesManyRequest)

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
            localVarRequestOptions.data = serializeDataIfNeeded(newAiAttachmentsSaveImagesManyRequest, localVarRequestOptions, configuration)

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
         * REST API Reference for newAiAttachmentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-delete/
         */
        async newAiAttachmentsDelete(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAttachmentsDelete(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.newAiAttachmentsDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete many
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsDeleteMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-delete-many/
         */
        async newAiAttachmentsDeleteMany(requestBody: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAttachmentsDeleteMany(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.newAiAttachmentsDeleteMany']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-get/
         */
        async newAiAttachmentsGet(body: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiAttachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAttachmentsGet(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.newAiAttachmentsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get many
         * @param {Array<string>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsGetMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-get-many/
         */
        async newAiAttachmentsGetMany(requestBody: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiAttachment | null>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAttachmentsGetMany(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.newAiAttachmentsGetMany']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Link to message
         * @param {NewAiAttachmentsLinkToMessageRequest} newAiAttachmentsLinkToMessageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsLinkToMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-link-to-message/
         */
        async newAiAttachmentsLinkToMessage(newAiAttachmentsLinkToMessageRequest: NewAiAttachmentsLinkToMessageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAttachmentsLinkToMessage(newAiAttachmentsLinkToMessageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.newAiAttachmentsLinkToMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Save file
         * @param {NewAiAttachmentsSaveFileRequest} newAiAttachmentsSaveFileRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsSaveFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-file/
         */
        async newAiAttachmentsSaveFile(newAiAttachmentsSaveFileRequest: NewAiAttachmentsSaveFileRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiAttachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAttachmentsSaveFile(newAiAttachmentsSaveFileRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.newAiAttachmentsSaveFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Save files many
         * @param {NewAiAttachmentsSaveFilesManyRequest} newAiAttachmentsSaveFilesManyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsSaveFilesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-files-many/
         */
        async newAiAttachmentsSaveFilesMany(newAiAttachmentsSaveFilesManyRequest: NewAiAttachmentsSaveFilesManyRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiAttachment>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAttachmentsSaveFilesMany(newAiAttachmentsSaveFilesManyRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.newAiAttachmentsSaveFilesMany']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Save image
         * @param {NewAiAttachmentsSaveImageRequest} newAiAttachmentsSaveImageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsSaveImage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-image/
         */
        async newAiAttachmentsSaveImage(newAiAttachmentsSaveImageRequest: NewAiAttachmentsSaveImageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewAiAttachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAttachmentsSaveImage(newAiAttachmentsSaveImageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.newAiAttachmentsSaveImage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Save images many
         * @param {NewAiAttachmentsSaveImagesManyRequest} newAiAttachmentsSaveImagesManyRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for newAiAttachmentsSaveImagesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-images-many/
         */
        async newAiAttachmentsSaveImagesMany(newAiAttachmentsSaveImagesManyRequest: NewAiAttachmentsSaveImagesManyRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NewAiAttachment>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.newAiAttachmentsSaveImagesMany(newAiAttachmentsSaveImagesManyRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.newAiAttachmentsSaveImagesMany']?.[localVarOperationServerIndex]?.url;
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
         * @param {AttachmentsApiNewAiAttachmentsDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAttachmentsDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-delete/
         * @throws {RequiredError}
         */
        newAiAttachmentsDelete(requestParameters: AttachmentsApiNewAiAttachmentsDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiAttachmentsDelete(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete many
         * @param {AttachmentsApiNewAiAttachmentsDeleteManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAttachmentsDeleteMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-delete-many/
         * @throws {RequiredError}
         */
        newAiAttachmentsDeleteMany(requestParameters: AttachmentsApiNewAiAttachmentsDeleteManyRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiAttachmentsDeleteMany(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get
         * @param {AttachmentsApiNewAiAttachmentsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAttachmentsGet operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-get/
         * @throws {RequiredError}
         */
        newAiAttachmentsGet(requestParameters: AttachmentsApiNewAiAttachmentsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiAttachment> {
            return localVarFp.newAiAttachmentsGet(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get many
         * @param {AttachmentsApiNewAiAttachmentsGetManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAttachmentsGetMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-get-many/
         * @throws {RequiredError}
         */
        newAiAttachmentsGetMany(requestParameters: AttachmentsApiNewAiAttachmentsGetManyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiAttachment | null>> {
            return localVarFp.newAiAttachmentsGetMany(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Link to message
         * @param {AttachmentsApiNewAiAttachmentsLinkToMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAttachmentsLinkToMessage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-link-to-message/
         * @throws {RequiredError}
         */
        newAiAttachmentsLinkToMessage(requestParameters: AttachmentsApiNewAiAttachmentsLinkToMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiSuccessResponse> {
            return localVarFp.newAiAttachmentsLinkToMessage(requestParameters.newAiAttachmentsLinkToMessageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Save file
         * @param {AttachmentsApiNewAiAttachmentsSaveFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAttachmentsSaveFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-file/
         * @throws {RequiredError}
         */
        newAiAttachmentsSaveFile(requestParameters: AttachmentsApiNewAiAttachmentsSaveFileRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiAttachment> {
            return localVarFp.newAiAttachmentsSaveFile(requestParameters.newAiAttachmentsSaveFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Save files many
         * @param {AttachmentsApiNewAiAttachmentsSaveFilesManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAttachmentsSaveFilesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-files-many/
         * @throws {RequiredError}
         */
        newAiAttachmentsSaveFilesMany(requestParameters: AttachmentsApiNewAiAttachmentsSaveFilesManyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiAttachment>> {
            return localVarFp.newAiAttachmentsSaveFilesMany(requestParameters.newAiAttachmentsSaveFilesManyRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Save image
         * @param {AttachmentsApiNewAiAttachmentsSaveImageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAttachmentsSaveImage operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-image/
         * @throws {RequiredError}
         */
        newAiAttachmentsSaveImage(requestParameters: AttachmentsApiNewAiAttachmentsSaveImageRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewAiAttachment> {
            return localVarFp.newAiAttachmentsSaveImage(requestParameters.newAiAttachmentsSaveImageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Save images many
         * @param {AttachmentsApiNewAiAttachmentsSaveImagesManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for newAiAttachmentsSaveImagesMany operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/new-ai-attachments-save-images-many/
         * @throws {RequiredError}
         */
        newAiAttachmentsSaveImagesMany(requestParameters: AttachmentsApiNewAiAttachmentsSaveImagesManyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<NewAiAttachment>> {
            return localVarFp.newAiAttachmentsSaveImagesMany(requestParameters.newAiAttachmentsSaveImagesManyRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for newAiAttachmentsDelete operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiNewAiAttachmentsDeleteRequest
 */
export interface AttachmentsApiNewAiAttachmentsDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof AttachmentsApiNewAiAttachmentsDelete
     */
    readonly body: string
}

/**
 * Request parameters for newAiAttachmentsDeleteMany operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiNewAiAttachmentsDeleteManyRequest
 */
export interface AttachmentsApiNewAiAttachmentsDeleteManyRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof AttachmentsApiNewAiAttachmentsDeleteMany
     */
    readonly requestBody: Array<string>
}

/**
 * Request parameters for newAiAttachmentsGet operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiNewAiAttachmentsGetRequest
 */
export interface AttachmentsApiNewAiAttachmentsGetRequest {
    /**
     * 
     * @type {string}
     * @memberof AttachmentsApiNewAiAttachmentsGet
     */
    readonly body: string
}

/**
 * Request parameters for newAiAttachmentsGetMany operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiNewAiAttachmentsGetManyRequest
 */
export interface AttachmentsApiNewAiAttachmentsGetManyRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof AttachmentsApiNewAiAttachmentsGetMany
     */
    readonly requestBody: Array<string>
}

/**
 * Request parameters for newAiAttachmentsLinkToMessage operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiNewAiAttachmentsLinkToMessageRequest
 */
export interface AttachmentsApiNewAiAttachmentsLinkToMessageRequest {
    /**
     * 
     * @type {NewAiAttachmentsLinkToMessageRequest}
     * @memberof AttachmentsApiNewAiAttachmentsLinkToMessage
     */
    readonly newAiAttachmentsLinkToMessageRequest: NewAiAttachmentsLinkToMessageRequest
}

/**
 * Request parameters for newAiAttachmentsSaveFile operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiNewAiAttachmentsSaveFileRequest
 */
export interface AttachmentsApiNewAiAttachmentsSaveFileRequest {
    /**
     * 
     * @type {NewAiAttachmentsSaveFileRequest}
     * @memberof AttachmentsApiNewAiAttachmentsSaveFile
     */
    readonly newAiAttachmentsSaveFileRequest: NewAiAttachmentsSaveFileRequest
}

/**
 * Request parameters for newAiAttachmentsSaveFilesMany operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiNewAiAttachmentsSaveFilesManyRequest
 */
export interface AttachmentsApiNewAiAttachmentsSaveFilesManyRequest {
    /**
     * 
     * @type {NewAiAttachmentsSaveFilesManyRequest}
     * @memberof AttachmentsApiNewAiAttachmentsSaveFilesMany
     */
    readonly newAiAttachmentsSaveFilesManyRequest: NewAiAttachmentsSaveFilesManyRequest
}

/**
 * Request parameters for newAiAttachmentsSaveImage operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiNewAiAttachmentsSaveImageRequest
 */
export interface AttachmentsApiNewAiAttachmentsSaveImageRequest {
    /**
     * 
     * @type {NewAiAttachmentsSaveImageRequest}
     * @memberof AttachmentsApiNewAiAttachmentsSaveImage
     */
    readonly newAiAttachmentsSaveImageRequest: NewAiAttachmentsSaveImageRequest
}

/**
 * Request parameters for newAiAttachmentsSaveImagesMany operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiNewAiAttachmentsSaveImagesManyRequest
 */
export interface AttachmentsApiNewAiAttachmentsSaveImagesManyRequest {
    /**
     * 
     * @type {NewAiAttachmentsSaveImagesManyRequest}
     * @memberof AttachmentsApiNewAiAttachmentsSaveImagesMany
     */
    readonly newAiAttachmentsSaveImagesManyRequest: NewAiAttachmentsSaveImagesManyRequest
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
     * @param {NewAIAttachmentsApiNewAiAttachmentsDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public newAiAttachmentsDelete(requestParameters: AttachmentsApiNewAiAttachmentsDeleteRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).newAiAttachmentsDelete(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete many
     * @param {NewAIAttachmentsApiNewAiAttachmentsDeleteManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public newAiAttachmentsDeleteMany(requestParameters: AttachmentsApiNewAiAttachmentsDeleteManyRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).newAiAttachmentsDeleteMany(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get
     * @param {NewAIAttachmentsApiNewAiAttachmentsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public newAiAttachmentsGet(requestParameters: AttachmentsApiNewAiAttachmentsGetRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).newAiAttachmentsGet(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get many
     * @param {NewAIAttachmentsApiNewAiAttachmentsGetManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public newAiAttachmentsGetMany(requestParameters: AttachmentsApiNewAiAttachmentsGetManyRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).newAiAttachmentsGetMany(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Link to message
     * @param {NewAIAttachmentsApiNewAiAttachmentsLinkToMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public newAiAttachmentsLinkToMessage(requestParameters: AttachmentsApiNewAiAttachmentsLinkToMessageRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).newAiAttachmentsLinkToMessage(requestParameters.newAiAttachmentsLinkToMessageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Save file
     * @param {NewAIAttachmentsApiNewAiAttachmentsSaveFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public newAiAttachmentsSaveFile(requestParameters: AttachmentsApiNewAiAttachmentsSaveFileRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).newAiAttachmentsSaveFile(requestParameters.newAiAttachmentsSaveFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Save files many
     * @param {NewAIAttachmentsApiNewAiAttachmentsSaveFilesManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public newAiAttachmentsSaveFilesMany(requestParameters: AttachmentsApiNewAiAttachmentsSaveFilesManyRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).newAiAttachmentsSaveFilesMany(requestParameters.newAiAttachmentsSaveFilesManyRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Save image
     * @param {NewAIAttachmentsApiNewAiAttachmentsSaveImageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public newAiAttachmentsSaveImage(requestParameters: AttachmentsApiNewAiAttachmentsSaveImageRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).newAiAttachmentsSaveImage(requestParameters.newAiAttachmentsSaveImageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Save images many
     * @param {NewAIAttachmentsApiNewAiAttachmentsSaveImagesManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public newAiAttachmentsSaveImagesMany(requestParameters: AttachmentsApiNewAiAttachmentsSaveImagesManyRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).newAiAttachmentsSaveImagesMany(requestParameters.newAiAttachmentsSaveImagesManyRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

