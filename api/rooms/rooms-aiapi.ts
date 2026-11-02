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
import type { AiProjectModelWrapper } from '../../models';
// @ts-ignore
import type { AiProjectSourcesWrapper } from '../../models';
// @ts-ignore
import type { AiSkillsWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { LinkAiProjectSourcesRequest } from '../../models';
// @ts-ignore
import type { UnlinkAiProjectSourcesRequest } from '../../models';
// @ts-ignore
import type { UpdateAiProjectModelRequest } from '../../models';
/**
 * RoomsAIApi - axios parameter creator
 * @export
 */
export const RoomsAIApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the AI model selected for the chat of an AI project, as the ID of an AI model profile. Any project member with read access may call it. The call is read-only. The result holds only the project\'s own choice: `profileId` is null when nobody has selected a model for the project yet, or when the selected profile has been removed from the portal since. In both cases the portal-wide model is used instead, which this operation does not return. To change the model, use `PUT api/2.0/files/rooms/{id}/model`.
         * @summary Get the AI project model
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProjectModel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-project-model/
         */
        getProjectModel: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectModel', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/model`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the Instructions and Knowledge rooms linked to an AI project as its sources.
         * @summary Get the AI project sources
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProjectSources operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-project-sources/
         */
        getProjectSources: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProjectSources', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/sources`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the skills of an Instructions room, or of the Instructions rooms linked to an AI project.
         * @summary Get the skills of an AI room
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-skills/
         */
        getRoomSkills: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRoomSkills', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/skills`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the skills of several Instructions rooms. Rooms the caller cannot read are left out.
         * @summary Get the skills of Instructions rooms
         * @param {Set<number>} [roomIds] IDs of the Instructions rooms, one `roomIds` query item per room; 1 to 20 items.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-skills/
         */
        getRoomsSkills: async (roomIds?: Set<number>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms/skills`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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

            if (roomIds) {
                localVarQueryParameter['roomIds'] = Array.from(roomIds);
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
         * Links Instructions and Knowledge rooms to an AI project as its sources, which gives every project member read access to them. The caller must manage the project and each listed room; rooms that are already linked are skipped.
         * @summary Link sources to an AI project
         * @param {number} id ID of the project.
         * @param {LinkAiProjectSourcesRequest} linkAiProjectSourcesRequest The rooms to link.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for linkProjectSources operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-project-sources/
         */
        linkProjectSources: async (id: number, linkAiProjectSourcesRequest: LinkAiProjectSourcesRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('linkProjectSources', 'id', id)
            // verify required parameter 'linkAiProjectSourcesRequest' is not null or undefined
            assertParamExists('linkProjectSources', 'linkAiProjectSourcesRequest', linkAiProjectSourcesRequest)

            const localVarPath = `/api/2.0/files/rooms/{id}/sources`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(linkAiProjectSourcesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Selects the AI model that answers in the chat of an AI project, replacing the previous choice, and returns the model now selected. Take `profileId` from the profiles that `GET api/2.0/ai/profiles/list` returns. The caller must be able to edit the project; reading it is not enough. The change applies to every member of the project, is recorded in the audit trail and notifies the project\'s open clients. Repeating the call with the same profile changes nothing. A model can only be replaced by another one: there is no operation that clears the selection and returns the project to the portal-wide model. The profile must exist on the portal and be able to chat; a profile known to serve only other kinds of tasks, such as image generation, is refused with 400.
         * @summary Set the AI project model
         * @param {number} id ID of the project.
         * @param {UpdateAiProjectModelRequest} updateAiProjectModelRequest The model to set.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setProjectModel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-project-model/
         */
        setProjectModel: async (id: number, updateAiProjectModelRequest: UpdateAiProjectModelRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setProjectModel', 'id', id)
            // verify required parameter 'updateAiProjectModelRequest' is not null or undefined
            assertParamExists('setProjectModel', 'updateAiProjectModelRequest', updateAiProjectModelRequest)

            const localVarPath = `/api/2.0/files/rooms/{id}/model`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateAiProjectModelRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unlinks Instructions and Knowledge rooms from an AI project; project members lose the access the link gave them. The caller must manage the project, rights on the rooms are not checked; the rooms themselves are not changed.
         * @summary Unlink sources from an AI project
         * @param {number} id ID of the project.
         * @param {UnlinkAiProjectSourcesRequest} unlinkAiProjectSourcesRequest The rooms to unlink.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkProjectSources operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-project-sources/
         */
        unlinkProjectSources: async (id: number, unlinkAiProjectSourcesRequest: UnlinkAiProjectSourcesRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('unlinkProjectSources', 'id', id)
            // verify required parameter 'unlinkAiProjectSourcesRequest' is not null or undefined
            assertParamExists('unlinkProjectSources', 'unlinkAiProjectSourcesRequest', unlinkAiProjectSourcesRequest)

            const localVarPath = `/api/2.0/files/rooms/{id}/sources`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(unlinkAiProjectSourcesRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RoomsAIApi - functional programming interface
 * @export
 */
export const RoomsAIApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RoomsAIApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the AI model selected for the chat of an AI project, as the ID of an AI model profile. Any project member with read access may call it. The call is read-only. The result holds only the project\'s own choice: `profileId` is null when nobody has selected a model for the project yet, or when the selected profile has been removed from the portal since. In both cases the portal-wide model is used instead, which this operation does not return. To change the model, use `PUT api/2.0/files/rooms/{id}/model`.
         * @summary Get the AI project model
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProjectModel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-project-model/
         */
        async getProjectModel(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProjectModelWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectModel(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsAIApi.getProjectModel']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the Instructions and Knowledge rooms linked to an AI project as its sources.
         * @summary Get the AI project sources
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProjectSources operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-project-sources/
         */
        async getProjectSources(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProjectSourcesWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectSources(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsAIApi.getProjectSources']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the skills of an Instructions room, or of the Instructions rooms linked to an AI project.
         * @summary Get the skills of an AI room
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-skills/
         */
        async getRoomSkills(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSkillsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomSkills(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsAIApi.getRoomSkills']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the skills of several Instructions rooms. Rooms the caller cannot read are left out.
         * @summary Get the skills of Instructions rooms
         * @param {Set<number>} [roomIds] IDs of the Instructions rooms, one `roomIds` query item per room; 1 to 20 items.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-skills/
         */
        async getRoomsSkills(roomIds?: Set<number>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSkillsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomsSkills(roomIds, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsAIApi.getRoomsSkills']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Links Instructions and Knowledge rooms to an AI project as its sources, which gives every project member read access to them. The caller must manage the project and each listed room; rooms that are already linked are skipped.
         * @summary Link sources to an AI project
         * @param {number} id ID of the project.
         * @param {LinkAiProjectSourcesRequest} linkAiProjectSourcesRequest The rooms to link.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for linkProjectSources operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-project-sources/
         */
        async linkProjectSources(id: number, linkAiProjectSourcesRequest: LinkAiProjectSourcesRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.linkProjectSources(id, linkAiProjectSourcesRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsAIApi.linkProjectSources']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Selects the AI model that answers in the chat of an AI project, replacing the previous choice, and returns the model now selected. Take `profileId` from the profiles that `GET api/2.0/ai/profiles/list` returns. The caller must be able to edit the project; reading it is not enough. The change applies to every member of the project, is recorded in the audit trail and notifies the project\'s open clients. Repeating the call with the same profile changes nothing. A model can only be replaced by another one: there is no operation that clears the selection and returns the project to the portal-wide model. The profile must exist on the portal and be able to chat; a profile known to serve only other kinds of tasks, such as image generation, is refused with 400.
         * @summary Set the AI project model
         * @param {number} id ID of the project.
         * @param {UpdateAiProjectModelRequest} updateAiProjectModelRequest The model to set.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setProjectModel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-project-model/
         */
        async setProjectModel(id: number, updateAiProjectModelRequest: UpdateAiProjectModelRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiProjectModelWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setProjectModel(id, updateAiProjectModelRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsAIApi.setProjectModel']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Unlinks Instructions and Knowledge rooms from an AI project; project members lose the access the link gave them. The caller must manage the project, rights on the rooms are not checked; the rooms themselves are not changed.
         * @summary Unlink sources from an AI project
         * @param {number} id ID of the project.
         * @param {UnlinkAiProjectSourcesRequest} unlinkAiProjectSourcesRequest The rooms to unlink.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkProjectSources operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-project-sources/
         */
        async unlinkProjectSources(id: number, unlinkAiProjectSourcesRequest: UnlinkAiProjectSourcesRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkProjectSources(id, unlinkAiProjectSourcesRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsAIApi.unlinkProjectSources']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RoomsAIApi - factory interface
 * @export
 */
export const RoomsAIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RoomsAIApiFp(configuration)
    return {
        /**
         * Returns the AI model selected for the chat of an AI project, as the ID of an AI model profile. Any project member with read access may call it. The call is read-only. The result holds only the project\'s own choice: `profileId` is null when nobody has selected a model for the project yet, or when the selected profile has been removed from the portal since. In both cases the portal-wide model is used instead, which this operation does not return. To change the model, use `PUT api/2.0/files/rooms/{id}/model`.
         * @summary Get the AI project model
         * @param {RoomsAIApiGetProjectModelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProjectModel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-project-model/
         * @throws {RequiredError}
         */
        getProjectModel(requestParameters: RoomsAIApiGetProjectModelRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiProjectModelWrapper> {
            return localVarFp.getProjectModel(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the Instructions and Knowledge rooms linked to an AI project as its sources.
         * @summary Get the AI project sources
         * @param {RoomsAIApiGetProjectSourcesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProjectSources operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-project-sources/
         * @throws {RequiredError}
         */
        getProjectSources(requestParameters: RoomsAIApiGetProjectSourcesRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiProjectSourcesWrapper> {
            return localVarFp.getProjectSources(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the skills of an Instructions room, or of the Instructions rooms linked to an AI project.
         * @summary Get the skills of an AI room
         * @param {RoomsAIApiGetRoomSkillsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-skills/
         * @throws {RequiredError}
         */
        getRoomSkills(requestParameters: RoomsAIApiGetRoomSkillsRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSkillsWrapper> {
            return localVarFp.getRoomSkills(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the skills of several Instructions rooms. Rooms the caller cannot read are left out.
         * @summary Get the skills of Instructions rooms
         * @param {RoomsAIApiGetRoomsSkillsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomsSkills operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-skills/
         * @throws {RequiredError}
         */
        getRoomsSkills(requestParameters: RoomsAIApiGetRoomsSkillsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AiSkillsWrapper> {
            return localVarFp.getRoomsSkills(requestParameters.roomIds, options).then((request) => request(axios, basePath));
        },
        /**
         * Links Instructions and Knowledge rooms to an AI project as its sources, which gives every project member read access to them. The caller must manage the project and each listed room; rooms that are already linked are skipped.
         * @summary Link sources to an AI project
         * @param {RoomsAIApiLinkProjectSourcesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for linkProjectSources operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-project-sources/
         * @throws {RequiredError}
         */
        linkProjectSources(requestParameters: RoomsAIApiLinkProjectSourcesRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.linkProjectSources(requestParameters.id, requestParameters.linkAiProjectSourcesRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Selects the AI model that answers in the chat of an AI project, replacing the previous choice, and returns the model now selected. Take `profileId` from the profiles that `GET api/2.0/ai/profiles/list` returns. The caller must be able to edit the project; reading it is not enough. The change applies to every member of the project, is recorded in the audit trail and notifies the project\'s open clients. Repeating the call with the same profile changes nothing. A model can only be replaced by another one: there is no operation that clears the selection and returns the project to the portal-wide model. The profile must exist on the portal and be able to chat; a profile known to serve only other kinds of tasks, such as image generation, is refused with 400.
         * @summary Set the AI project model
         * @param {RoomsAIApiSetProjectModelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setProjectModel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-project-model/
         * @throws {RequiredError}
         */
        setProjectModel(requestParameters: RoomsAIApiSetProjectModelRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiProjectModelWrapper> {
            return localVarFp.setProjectModel(requestParameters.id, requestParameters.updateAiProjectModelRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Unlinks Instructions and Knowledge rooms from an AI project; project members lose the access the link gave them. The caller must manage the project, rights on the rooms are not checked; the rooms themselves are not changed.
         * @summary Unlink sources from an AI project
         * @param {RoomsAIApiUnlinkProjectSourcesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for unlinkProjectSources operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-project-sources/
         * @throws {RequiredError}
         */
        unlinkProjectSources(requestParameters: RoomsAIApiUnlinkProjectSourcesRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unlinkProjectSources(requestParameters.id, requestParameters.unlinkAiProjectSourcesRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getProjectModel operation in RoomsAIApi.
 * @export
 * @interface RoomsAIApiGetProjectModelRequest
 */
export interface RoomsAIApiGetProjectModelRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number}
     * @memberof RoomsAIApiGetProjectModel
     */
    readonly id: number
}

/**
 * Request parameters for getProjectSources operation in RoomsAIApi.
 * @export
 * @interface RoomsAIApiGetProjectSourcesRequest
 */
export interface RoomsAIApiGetProjectSourcesRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number}
     * @memberof RoomsAIApiGetProjectSources
     */
    readonly id: number
}

/**
 * Request parameters for getRoomSkills operation in RoomsAIApi.
 * @export
 * @interface RoomsAIApiGetRoomSkillsRequest
 */
export interface RoomsAIApiGetRoomSkillsRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number}
     * @memberof RoomsAIApiGetRoomSkills
     */
    readonly id: number
}

/**
 * Request parameters for getRoomsSkills operation in RoomsAIApi.
 * @export
 * @interface RoomsAIApiGetRoomsSkillsRequest
 */
export interface RoomsAIApiGetRoomsSkillsRequest {
    /**
     * IDs of the Instructions rooms, one `roomIds` query item per room; 1 to 20 items.
     * @type {Set<number>}
     * @memberof RoomsAIApiGetRoomsSkills
     */
    readonly roomIds?: Set<number>
}

/**
 * Request parameters for linkProjectSources operation in RoomsAIApi.
 * @export
 * @interface RoomsAIApiLinkProjectSourcesRequest
 */
export interface RoomsAIApiLinkProjectSourcesRequest {
    /**
     * ID of the project.
     * @type {number}
     * @memberof RoomsAIApiLinkProjectSources
     */
    readonly id: number

    /**
     * The rooms to link.
     * @type {LinkAiProjectSourcesRequest}
     * @memberof RoomsAIApiLinkProjectSources
     */
    readonly linkAiProjectSourcesRequest: LinkAiProjectSourcesRequest
}

/**
 * Request parameters for setProjectModel operation in RoomsAIApi.
 * @export
 * @interface RoomsAIApiSetProjectModelRequest
 */
export interface RoomsAIApiSetProjectModelRequest {
    /**
     * ID of the project.
     * @type {number}
     * @memberof RoomsAIApiSetProjectModel
     */
    readonly id: number

    /**
     * The model to set.
     * @type {UpdateAiProjectModelRequest}
     * @memberof RoomsAIApiSetProjectModel
     */
    readonly updateAiProjectModelRequest: UpdateAiProjectModelRequest
}

/**
 * Request parameters for unlinkProjectSources operation in RoomsAIApi.
 * @export
 * @interface RoomsAIApiUnlinkProjectSourcesRequest
 */
export interface RoomsAIApiUnlinkProjectSourcesRequest {
    /**
     * ID of the project.
     * @type {number}
     * @memberof RoomsAIApiUnlinkProjectSources
     */
    readonly id: number

    /**
     * The rooms to unlink.
     * @type {UnlinkAiProjectSourcesRequest}
     * @memberof RoomsAIApiUnlinkProjectSources
     */
    readonly unlinkAiProjectSourcesRequest: UnlinkAiProjectSourcesRequest
}

/**
 * RoomsAIApi - object-oriented interface
 * @export
 * @class RoomsAIApi
 * @extends {BaseAPI}
 */
export class RoomsAIApi extends BaseAPI {
    /**
     * Returns the AI model selected for the chat of an AI project, as the ID of an AI model profile. Any project member with read access may call it. The call is read-only. The result holds only the project\'s own choice: `profileId` is null when nobody has selected a model for the project yet, or when the selected profile has been removed from the portal since. In both cases the portal-wide model is used instead, which this operation does not return. To change the model, use `PUT api/2.0/files/rooms/{id}/model`.
     * @summary Get the AI project model
     * @param {RoomsAIApiGetProjectModelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsAIApi
     */
    public getProjectModel(requestParameters: RoomsAIApiGetProjectModelRequest, options?: RawAxiosRequestConfig) {
        return RoomsAIApiFp(this.configuration).getProjectModel(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the Instructions and Knowledge rooms linked to an AI project as its sources.
     * @summary Get the AI project sources
     * @param {RoomsAIApiGetProjectSourcesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsAIApi
     */
    public getProjectSources(requestParameters: RoomsAIApiGetProjectSourcesRequest, options?: RawAxiosRequestConfig) {
        return RoomsAIApiFp(this.configuration).getProjectSources(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the skills of an Instructions room, or of the Instructions rooms linked to an AI project.
     * @summary Get the skills of an AI room
     * @param {RoomsAIApiGetRoomSkillsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsAIApi
     */
    public getRoomSkills(requestParameters: RoomsAIApiGetRoomSkillsRequest, options?: RawAxiosRequestConfig) {
        return RoomsAIApiFp(this.configuration).getRoomSkills(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the skills of several Instructions rooms. Rooms the caller cannot read are left out.
     * @summary Get the skills of Instructions rooms
     * @param {RoomsAIApiGetRoomsSkillsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsAIApi
     */
    public getRoomsSkills(requestParameters: RoomsAIApiGetRoomsSkillsRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsAIApiFp(this.configuration).getRoomsSkills(requestParameters.roomIds, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Links Instructions and Knowledge rooms to an AI project as its sources, which gives every project member read access to them. The caller must manage the project and each listed room; rooms that are already linked are skipped.
     * @summary Link sources to an AI project
     * @param {RoomsAIApiLinkProjectSourcesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsAIApi
     */
    public linkProjectSources(requestParameters: RoomsAIApiLinkProjectSourcesRequest, options?: RawAxiosRequestConfig) {
        return RoomsAIApiFp(this.configuration).linkProjectSources(requestParameters.id, requestParameters.linkAiProjectSourcesRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Selects the AI model that answers in the chat of an AI project, replacing the previous choice, and returns the model now selected. Take `profileId` from the profiles that `GET api/2.0/ai/profiles/list` returns. The caller must be able to edit the project; reading it is not enough. The change applies to every member of the project, is recorded in the audit trail and notifies the project\'s open clients. Repeating the call with the same profile changes nothing. A model can only be replaced by another one: there is no operation that clears the selection and returns the project to the portal-wide model. The profile must exist on the portal and be able to chat; a profile known to serve only other kinds of tasks, such as image generation, is refused with 400.
     * @summary Set the AI project model
     * @param {RoomsAIApiSetProjectModelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsAIApi
     */
    public setProjectModel(requestParameters: RoomsAIApiSetProjectModelRequest, options?: RawAxiosRequestConfig) {
        return RoomsAIApiFp(this.configuration).setProjectModel(requestParameters.id, requestParameters.updateAiProjectModelRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unlinks Instructions and Knowledge rooms from an AI project; project members lose the access the link gave them. The caller must manage the project, rights on the rooms are not checked; the rooms themselves are not changed.
     * @summary Unlink sources from an AI project
     * @param {RoomsAIApiUnlinkProjectSourcesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsAIApi
     */
    public unlinkProjectSources(requestParameters: RoomsAIApiUnlinkProjectSourcesRequest, options?: RawAxiosRequestConfig) {
        return RoomsAIApiFp(this.configuration).unlinkProjectSources(requestParameters.id, requestParameters.unlinkAiProjectSourcesRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

