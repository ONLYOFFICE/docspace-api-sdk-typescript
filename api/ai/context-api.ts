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
 * ContextApi - axios parameter creator
 * @export
 */
export const ContextApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * 
         * @summary Get context folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetContextFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-context-folders/
         */
        aiContextGetContextFolders: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/context/get-context-folders`;
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
        /**
         * 
         * @summary Get room skill
         * @param {string} cloud 
         * @param {string} roomId 
         * @param {string} skillId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetRoomSkill operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skill/
         */
        aiContextGetRoomSkill: async (cloud: string, roomId: string, skillId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cloud' is not null or undefined
            assertParamExists('aiContextGetRoomSkill', 'cloud', cloud)
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('aiContextGetRoomSkill', 'roomId', roomId)
            // verify required parameter 'skillId' is not null or undefined
            assertParamExists('aiContextGetRoomSkill', 'skillId', skillId)

            const localVarPath = `/api/2.0/ai/context/get-room-skill`;
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

            if (cloud !== undefined) {
                localVarQueryParameter['cloud'] = cloud;
            }

            if (roomId !== undefined) {
                localVarQueryParameter['roomId'] = roomId;
            }

            if (skillId !== undefined) {
                localVarQueryParameter['skillId'] = skillId;
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
         * 
         * @summary Get room skills
         * @param {string} cloud 
         * @param {string} roomId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetRoomSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skills/
         */
        aiContextGetRoomSkills: async (cloud: string, roomId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cloud' is not null or undefined
            assertParamExists('aiContextGetRoomSkills', 'cloud', cloud)
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('aiContextGetRoomSkills', 'roomId', roomId)

            const localVarPath = `/api/2.0/ai/context/get-room-skills`;
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

            if (cloud !== undefined) {
                localVarQueryParameter['cloud'] = cloud;
            }

            if (roomId !== undefined) {
                localVarQueryParameter['roomId'] = roomId;
            }


    
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
 * ContextApi - functional programming interface
 * @export
 */
export const ContextApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContextApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get context folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetContextFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-context-folders/
         */
        async aiContextGetContextFolders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiContextGetContextFolders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContextApi.aiContextGetContextFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get room skill
         * @param {string} cloud 
         * @param {string} roomId 
         * @param {string} skillId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetRoomSkill operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skill/
         */
        async aiContextGetRoomSkill(cloud: string, roomId: string, skillId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiContextGetRoomSkill(cloud, roomId, skillId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContextApi.aiContextGetRoomSkill']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get room skills
         * @param {string} cloud 
         * @param {string} roomId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetRoomSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skills/
         */
        async aiContextGetRoomSkills(cloud: string, roomId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiContextGetRoomSkills(cloud, roomId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContextApi.aiContextGetRoomSkills']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ContextApi - factory interface
 * @export
 */
export const ContextApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContextApiFp(configuration)
    return {
        /**
         * 
         * @summary Get context folders
         * @param {*} [options] Override http request option.
         * REST API Reference for aiContextGetContextFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-context-folders/
         * @throws {RequiredError}
         */
        aiContextGetContextFolders(options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiContextGetContextFolders(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get room skill
         * @param {ContextApiAiContextGetRoomSkillRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiContextGetRoomSkill operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skill/
         * @throws {RequiredError}
         */
        aiContextGetRoomSkill(requestParameters: ContextApiAiContextGetRoomSkillRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiContextGetRoomSkill(requestParameters.cloud, requestParameters.roomId, requestParameters.skillId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get room skills
         * @param {ContextApiAiContextGetRoomSkillsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiContextGetRoomSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skills/
         * @throws {RequiredError}
         */
        aiContextGetRoomSkills(requestParameters: ContextApiAiContextGetRoomSkillsRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSuccessResponse> {
            return localVarFp.aiContextGetRoomSkills(requestParameters.cloud, requestParameters.roomId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiContextGetRoomSkill operation in ContextApi.
 * @export
 * @interface ContextApiAiContextGetRoomSkillRequest
 */
export interface ContextApiAiContextGetRoomSkillRequest {
    /**
     * 
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkill
     */
    readonly cloud: string

    /**
     * 
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkill
     */
    readonly roomId: string

    /**
     * 
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkill
     */
    readonly skillId: string
}

/**
 * Request parameters for aiContextGetRoomSkills operation in ContextApi.
 * @export
 * @interface ContextApiAiContextGetRoomSkillsRequest
 */
export interface ContextApiAiContextGetRoomSkillsRequest {
    /**
     * 
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkills
     */
    readonly cloud: string

    /**
     * 
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkills
     */
    readonly roomId: string
}

/**
 * ContextApi - object-oriented interface
 * @export
 * @class ContextApi
 * @extends {BaseAPI}
 */
export class ContextApi extends BaseAPI {
    /**
     * 
     * @summary Get context folders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContextApi
     */
    public aiContextGetContextFolders(options?: RawAxiosRequestConfig) {
        return ContextApiFp(this.configuration).aiContextGetContextFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get room skill
     * @param {AIContextApiAiContextGetRoomSkillRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContextApi
     */
    public aiContextGetRoomSkill(requestParameters: ContextApiAiContextGetRoomSkillRequest, options?: RawAxiosRequestConfig) {
        return ContextApiFp(this.configuration).aiContextGetRoomSkill(requestParameters.cloud, requestParameters.roomId, requestParameters.skillId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get room skills
     * @param {AIContextApiAiContextGetRoomSkillsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContextApi
     */
    public aiContextGetRoomSkills(requestParameters: ContextApiAiContextGetRoomSkillsRequest, options?: RawAxiosRequestConfig) {
        return ContextApiFp(this.configuration).aiContextGetRoomSkills(requestParameters.cloud, requestParameters.roomId, options).then((request) => request(this.axios, this.basePath));
    }
}

