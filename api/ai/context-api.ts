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
import type { AiContextFolder } from '../../models';
// @ts-ignore
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiRoomSkill } from '../../models';
/**
 * ContextApi - axios parameter creator
 * @export
 */
export const ContextApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Lists the Instructions rooms the caller can connect to a chat as context, grouped under the account they belong to (`docspace` for this portal). Only a room the caller can read that holds at least one skill is listed: one without skills would connect nothing. An empty list means there is nothing to connect. At most 1000 Instructions rooms are read; any beyond them are left out without a signal. Read the skills of one room with `GET api/2.0/ai/context/get-room-skills`. This is a read-only operation.
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
         * Lists the Knowledge rooms the caller can connect to a chat as its knowledge base, grouped under the account they belong to (`docspace` for this portal). A connected Knowledge room limits the knowledge search of a round to it (`actionArgs.knowledgeRooms`). An empty list means there is none the caller can read. At most 1000 Knowledge rooms are listed; any beyond them are left out without a signal. This is a read-only operation.
         * @summary Get knowledge folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetKnowledgeFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-knowledge-folders/
         */
        aiContextGetKnowledgeFolders: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/context/get-knowledge-folders`;
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
         * Returns the Markdown file of one skill of an Instructions room as a JSON string. `roomId` and `skillId` are required, and the skill has to be one of that room\'s skills: the ID of any other file, readable or not, answers 404, as does a room that is not an Instructions room the caller can read. Only the first 256 KiB of the file are read, which covers the 64 K characters a chat passes to the model; a longer file comes back cut there without a signal. This is a read-only operation.
         * @summary Get room skill
         * @param {string} roomId The Instructions room identifier.
         * @param {string} skillId The skill identifier, as `GET api/2.0/ai/context/get-room-skills` lists it.
         * @param {string} [cloud] The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetRoomSkill operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skill/
         */
        aiContextGetRoomSkill: async (roomId: string, skillId: string, cloud?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Lists the skills of one Instructions room: the ID, name and description from the frontmatter of each skill file, not its body. `roomId` is required; `cloud` is accepted and not read. A room that is not an Instructions room the caller can read answers 404. Read the body of one skill with `GET api/2.0/ai/context/get-room-skill`. This is a read-only operation.
         * @summary Get room skills
         * @param {string} roomId The Instructions room identifier.
         * @param {string} [cloud] The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetRoomSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skills/
         */
        aiContextGetRoomSkills: async (roomId: string, cloud?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Lists the Instructions rooms the caller can connect to a chat as context, grouped under the account they belong to (`docspace` for this portal). Only a room the caller can read that holds at least one skill is listed: one without skills would connect nothing. An empty list means there is nothing to connect. At most 1000 Instructions rooms are read; any beyond them are left out without a signal. Read the skills of one room with `GET api/2.0/ai/context/get-room-skills`. This is a read-only operation.
         * @summary Get context folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetContextFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-context-folders/
         */
        async aiContextGetContextFolders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiContextFolder>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiContextGetContextFolders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContextApi.aiContextGetContextFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the Knowledge rooms the caller can connect to a chat as its knowledge base, grouped under the account they belong to (`docspace` for this portal). A connected Knowledge room limits the knowledge search of a round to it (`actionArgs.knowledgeRooms`). An empty list means there is none the caller can read. At most 1000 Knowledge rooms are listed; any beyond them are left out without a signal. This is a read-only operation.
         * @summary Get knowledge folders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetKnowledgeFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-knowledge-folders/
         */
        async aiContextGetKnowledgeFolders(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiContextFolder>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiContextGetKnowledgeFolders(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContextApi.aiContextGetKnowledgeFolders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the Markdown file of one skill of an Instructions room as a JSON string. `roomId` and `skillId` are required, and the skill has to be one of that room\'s skills: the ID of any other file, readable or not, answers 404, as does a room that is not an Instructions room the caller can read. Only the first 256 KiB of the file are read, which covers the 64 K characters a chat passes to the model; a longer file comes back cut there without a signal. This is a read-only operation.
         * @summary Get room skill
         * @param {string} roomId The Instructions room identifier.
         * @param {string} skillId The skill identifier, as `GET api/2.0/ai/context/get-room-skills` lists it.
         * @param {string} [cloud] The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetRoomSkill operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skill/
         */
        async aiContextGetRoomSkill(roomId: string, skillId: string, cloud?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiContextGetRoomSkill(roomId, skillId, cloud, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ContextApi.aiContextGetRoomSkill']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the skills of one Instructions room: the ID, name and description from the frontmatter of each skill file, not its body. `roomId` is required; `cloud` is accepted and not read. A room that is not an Instructions room the caller can read answers 404. Read the body of one skill with `GET api/2.0/ai/context/get-room-skill`. This is a read-only operation.
         * @summary Get room skills
         * @param {string} roomId The Instructions room identifier.
         * @param {string} [cloud] The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiContextGetRoomSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skills/
         */
        async aiContextGetRoomSkills(roomId: string, cloud?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AiRoomSkill>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiContextGetRoomSkills(roomId, cloud, options);
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
         * Lists the Instructions rooms the caller can connect to a chat as context, grouped under the account they belong to (`docspace` for this portal). Only a room the caller can read that holds at least one skill is listed: one without skills would connect nothing. An empty list means there is nothing to connect. At most 1000 Instructions rooms are read; any beyond them are left out without a signal. Read the skills of one room with `GET api/2.0/ai/context/get-room-skills`. This is a read-only operation.
         * @summary Get context folders
         * @param {*} [options] Override http request option.
         * REST API Reference for aiContextGetContextFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-context-folders/
         * @throws {RequiredError}
         */
        aiContextGetContextFolders(options?: RawAxiosRequestConfig): AxiosPromise<Array<AiContextFolder>> {
            return localVarFp.aiContextGetContextFolders(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the Knowledge rooms the caller can connect to a chat as its knowledge base, grouped under the account they belong to (`docspace` for this portal). A connected Knowledge room limits the knowledge search of a round to it (`actionArgs.knowledgeRooms`). An empty list means there is none the caller can read. At most 1000 Knowledge rooms are listed; any beyond them are left out without a signal. This is a read-only operation.
         * @summary Get knowledge folders
         * @param {*} [options] Override http request option.
         * REST API Reference for aiContextGetKnowledgeFolders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-knowledge-folders/
         * @throws {RequiredError}
         */
        aiContextGetKnowledgeFolders(options?: RawAxiosRequestConfig): AxiosPromise<Array<AiContextFolder>> {
            return localVarFp.aiContextGetKnowledgeFolders(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the Markdown file of one skill of an Instructions room as a JSON string. `roomId` and `skillId` are required, and the skill has to be one of that room\'s skills: the ID of any other file, readable or not, answers 404, as does a room that is not an Instructions room the caller can read. Only the first 256 KiB of the file are read, which covers the 64 K characters a chat passes to the model; a longer file comes back cut there without a signal. This is a read-only operation.
         * @summary Get room skill
         * @param {ContextApiAiContextGetRoomSkillRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiContextGetRoomSkill operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skill/
         * @throws {RequiredError}
         */
        aiContextGetRoomSkill(requestParameters: ContextApiAiContextGetRoomSkillRequest, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.aiContextGetRoomSkill(requestParameters.roomId, requestParameters.skillId, requestParameters.cloud, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the skills of one Instructions room: the ID, name and description from the frontmatter of each skill file, not its body. `roomId` is required; `cloud` is accepted and not read. A room that is not an Instructions room the caller can read answers 404. Read the body of one skill with `GET api/2.0/ai/context/get-room-skill`. This is a read-only operation.
         * @summary Get room skills
         * @param {ContextApiAiContextGetRoomSkillsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiContextGetRoomSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-context-get-room-skills/
         * @throws {RequiredError}
         */
        aiContextGetRoomSkills(requestParameters: ContextApiAiContextGetRoomSkillsRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<AiRoomSkill>> {
            return localVarFp.aiContextGetRoomSkills(requestParameters.roomId, requestParameters.cloud, options).then((request) => request(axios, basePath));
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
     * The Instructions room identifier.
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkill
     */
    readonly roomId: string

    /**
     * The skill identifier, as `GET api/2.0/ai/context/get-room-skills` lists it.
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkill
     */
    readonly skillId: string

    /**
     * The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it.
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkill
     */
    readonly cloud?: string
}

/**
 * Request parameters for aiContextGetRoomSkills operation in ContextApi.
 * @export
 * @interface ContextApiAiContextGetRoomSkillsRequest
 */
export interface ContextApiAiContextGetRoomSkillsRequest {
    /**
     * The Instructions room identifier.
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkills
     */
    readonly roomId: string

    /**
     * The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it.
     * @type {string}
     * @memberof ContextApiAiContextGetRoomSkills
     */
    readonly cloud?: string
}

/**
 * ContextApi - object-oriented interface
 * @export
 * @class ContextApi
 * @extends {BaseAPI}
 */
export class ContextApi extends BaseAPI {
    /**
     * Lists the Instructions rooms the caller can connect to a chat as context, grouped under the account they belong to (`docspace` for this portal). Only a room the caller can read that holds at least one skill is listed: one without skills would connect nothing. An empty list means there is nothing to connect. At most 1000 Instructions rooms are read; any beyond them are left out without a signal. Read the skills of one room with `GET api/2.0/ai/context/get-room-skills`. This is a read-only operation.
     * @summary Get context folders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContextApi
     */
    public aiContextGetContextFolders(options?: RawAxiosRequestConfig) {
        return ContextApiFp(this.configuration).aiContextGetContextFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the Knowledge rooms the caller can connect to a chat as its knowledge base, grouped under the account they belong to (`docspace` for this portal). A connected Knowledge room limits the knowledge search of a round to it (`actionArgs.knowledgeRooms`). An empty list means there is none the caller can read. At most 1000 Knowledge rooms are listed; any beyond them are left out without a signal. This is a read-only operation.
     * @summary Get knowledge folders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContextApi
     */
    public aiContextGetKnowledgeFolders(options?: RawAxiosRequestConfig) {
        return ContextApiFp(this.configuration).aiContextGetKnowledgeFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the Markdown file of one skill of an Instructions room as a JSON string. `roomId` and `skillId` are required, and the skill has to be one of that room\'s skills: the ID of any other file, readable or not, answers 404, as does a room that is not an Instructions room the caller can read. Only the first 256 KiB of the file are read, which covers the 64 K characters a chat passes to the model; a longer file comes back cut there without a signal. This is a read-only operation.
     * @summary Get room skill
     * @param {AIContextApiAiContextGetRoomSkillRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContextApi
     */
    public aiContextGetRoomSkill(requestParameters: ContextApiAiContextGetRoomSkillRequest, options?: RawAxiosRequestConfig) {
        return ContextApiFp(this.configuration).aiContextGetRoomSkill(requestParameters.roomId, requestParameters.skillId, requestParameters.cloud, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the skills of one Instructions room: the ID, name and description from the frontmatter of each skill file, not its body. `roomId` is required; `cloud` is accepted and not read. A room that is not an Instructions room the caller can read answers 404. Read the body of one skill with `GET api/2.0/ai/context/get-room-skill`. This is a read-only operation.
     * @summary Get room skills
     * @param {AIContextApiAiContextGetRoomSkillsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContextApi
     */
    public aiContextGetRoomSkills(requestParameters: ContextApiAiContextGetRoomSkillsRequest, options?: RawAxiosRequestConfig) {
        return ContextApiFp(this.configuration).aiContextGetRoomSkills(requestParameters.roomId, requestParameters.cloud, options).then((request) => request(this.axios, this.basePath));
    }
}

