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
import type { IconRequest } from '../../models';
// @ts-ignore
import type { RoomGroupArrayWrapper } from '../../models';
// @ts-ignore
import type { RoomGroupRequestDto } from '../../models';
// @ts-ignore
import type { RoomGroupWrapper } from '../../models';
// @ts-ignore
import type { UpdateRoomGroupRequest } from '../../models';
/**
 * FilesApi - axios parameter creator
 * @export
 */
export const FilesApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Creates a new room group with the specified name, icon, and list of rooms.
         * @summary Add a new room group
         * @param {RoomGroupRequestDto} [roomGroupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-group/
         */
        addRoomGroup: async (roomGroupRequestDto?: RoomGroupRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/group`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(roomGroupRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the icon of an existing room group.
         * @summary Change group icon
         * @param {number} id Group id
         * @param {IconRequest} [iconRequest] Icon update data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeRoomGroupIcon operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-group-icon/
         */
        changeRoomGroupIcon: async (id: number, iconRequest?: IconRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('changeRoomGroupIcon', 'id', id)

            const localVarPath = `/api/2.0/files/group/{id}/icon`
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
            localVarRequestOptions.data = serializeDataIfNeeded(iconRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the specified room group.
         * @summary Delete group
         * @param {number} id The group unique identifier.
         * @param {boolean} [includeMembers] Whether to include group members.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-group/
         */
        deleteRoomGroup: async (id: number, includeMembers?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRoomGroup', 'id', id)

            const localVarPath = `/api/2.0/files/group/{id}`
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

            if (includeMembers !== undefined) {
                localVarQueryParameter['includeMembers'] = includeMembers;
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
         * Returns detailed information about a room group.
         * @summary Get room group info
         * @param {number} id The group unique identifier.
         * @param {boolean} [includeMembers] Whether to include group members.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomGroupInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-group-info/
         */
        getRoomGroupInfo: async (id: number, includeMembers?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRoomGroupInfo', 'id', id)

            const localVarPath = `/api/2.0/files/group/{id}`
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

            if (includeMembers !== undefined) {
                localVarQueryParameter['includeMembers'] = includeMembers;
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
         * Returns a list of all room groups for the current user.
         * @summary List room groups
         * @param {number} id The group unique identifier.
         * @param {boolean} [includeMembers] Whether to include group members.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-groups/
         */
        getRoomGroups: async (id: number, includeMembers?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRoomGroups', 'id', id)

            const localVarPath = `/api/2.0/files/group`
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

            if (includeMembers !== undefined) {
                localVarQueryParameter['includeMembers'] = includeMembers;
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
         * Updates room group properties and adds or removes rooms.
         * @summary Update room group
         * @param {number} id The group ID.
         * @param {UpdateRoomGroupRequest} updateRoomGroupRequest The request for updating a group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room-group/
         */
        updateRoomGroup: async (id: number, updateRoomGroupRequest: UpdateRoomGroupRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRoomGroup', 'id', id)
            // verify required parameter 'updateRoomGroupRequest' is not null or undefined
            assertParamExists('updateRoomGroup', 'updateRoomGroupRequest', updateRoomGroupRequest)

            const localVarPath = `/api/2.0/files/group/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FilesApi - functional programming interface
 * @export
 */
export const FilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new room group with the specified name, icon, and list of rooms.
         * @summary Add a new room group
         * @param {RoomGroupRequestDto} [roomGroupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-group/
         */
        async addRoomGroup(roomGroupRequestDto?: RoomGroupRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomGroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addRoomGroup(roomGroupRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.addRoomGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the icon of an existing room group.
         * @summary Change group icon
         * @param {number} id Group id
         * @param {IconRequest} [iconRequest] Icon update data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeRoomGroupIcon operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-group-icon/
         */
        async changeRoomGroupIcon(id: number, iconRequest?: IconRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomGroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeRoomGroupIcon(id, iconRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.changeRoomGroupIcon']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the specified room group.
         * @summary Delete group
         * @param {number} id The group unique identifier.
         * @param {boolean} [includeMembers] Whether to include group members.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-group/
         */
        async deleteRoomGroup(id: number, includeMembers?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoomGroup(id, includeMembers, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.deleteRoomGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns detailed information about a room group.
         * @summary Get room group info
         * @param {number} id The group unique identifier.
         * @param {boolean} [includeMembers] Whether to include group members.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomGroupInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-group-info/
         */
        async getRoomGroupInfo(id: number, includeMembers?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomGroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomGroupInfo(id, includeMembers, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getRoomGroupInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all room groups for the current user.
         * @summary List room groups
         * @param {number} id The group unique identifier.
         * @param {boolean} [includeMembers] Whether to include group members.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-groups/
         */
        async getRoomGroups(id: number, includeMembers?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomGroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomGroups(id, includeMembers, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.getRoomGroups']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates room group properties and adds or removes rooms.
         * @summary Update room group
         * @param {number} id The group ID.
         * @param {UpdateRoomGroupRequest} updateRoomGroupRequest The request for updating a group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room-group/
         */
        async updateRoomGroup(id: number, updateRoomGroupRequest: UpdateRoomGroupRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomGroupWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRoomGroup(id, updateRoomGroupRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesApi.updateRoomGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FilesApi - factory interface
 * @export
 */
export const FilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesApiFp(configuration)
    return {
        /**
         * Creates a new room group with the specified name, icon, and list of rooms.
         * @summary Add a new room group
         * @param {RoomGroupRequestDto} [roomGroupRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for addRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-group/
         * @throws {RequiredError}
         */
        addRoomGroup(roomGroupRequestDto?: RoomGroupRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupWrapper> {
            return localVarFp.addRoomGroup(roomGroupRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the icon of an existing room group.
         * @summary Change group icon
         * @param {number} id Group id
         * @param {IconRequest} [iconRequest] Icon update data.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeRoomGroupIcon operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-group-icon/
         * @throws {RequiredError}
         */
        changeRoomGroupIcon(id: number, iconRequest?: IconRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupWrapper> {
            return localVarFp.changeRoomGroupIcon(id, iconRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified room group.
         * @summary Delete group
         * @param {number} id The group unique identifier.
         * @param {boolean} [includeMembers] Whether to include group members.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-group/
         * @throws {RequiredError}
         */
        deleteRoomGroup(id: number, includeMembers?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteRoomGroup(id, includeMembers, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns detailed information about a room group.
         * @summary Get room group info
         * @param {number} id The group unique identifier.
         * @param {boolean} [includeMembers] Whether to include group members.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomGroupInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-group-info/
         * @throws {RequiredError}
         */
        getRoomGroupInfo(id: number, includeMembers?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupWrapper> {
            return localVarFp.getRoomGroupInfo(id, includeMembers, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all room groups for the current user.
         * @summary List room groups
         * @param {number} id The group unique identifier.
         * @param {boolean} [includeMembers] Whether to include group members.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-groups/
         * @throws {RequiredError}
         */
        getRoomGroups(id: number, includeMembers?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupArrayWrapper> {
            return localVarFp.getRoomGroups(id, includeMembers, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates room group properties and adds or removes rooms.
         * @summary Update room group
         * @param {number} id The group ID.
         * @param {UpdateRoomGroupRequest} updateRoomGroupRequest The request for updating a group.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room-group/
         * @throws {RequiredError}
         */
        updateRoomGroup(id: number, updateRoomGroupRequest: UpdateRoomGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupWrapper> {
            return localVarFp.updateRoomGroup(id, updateRoomGroupRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
export class FilesApi extends BaseAPI {
    /**
     * Creates a new room group with the specified name, icon, and list of rooms.
     * @summary Add a new room group
     * @param {RoomGroupRequestDto} [roomGroupRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public addRoomGroup(roomGroupRequestDto?: RoomGroupRequestDto, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).addRoomGroup(roomGroupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the icon of an existing room group.
     * @summary Change group icon
     * @param {number} id Group id
     * @param {IconRequest} [iconRequest] Icon update data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public changeRoomGroupIcon(id: number, iconRequest?: IconRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).changeRoomGroupIcon(id, iconRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified room group.
     * @summary Delete group
     * @param {number} id The group unique identifier.
     * @param {boolean} [includeMembers] Whether to include group members.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteRoomGroup(id: number, includeMembers?: boolean, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).deleteRoomGroup(id, includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns detailed information about a room group.
     * @summary Get room group info
     * @param {number} id The group unique identifier.
     * @param {boolean} [includeMembers] Whether to include group members.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getRoomGroupInfo(id: number, includeMembers?: boolean, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getRoomGroupInfo(id, includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all room groups for the current user.
     * @summary List room groups
     * @param {number} id The group unique identifier.
     * @param {boolean} [includeMembers] Whether to include group members.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getRoomGroups(id: number, includeMembers?: boolean, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).getRoomGroups(id, includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates room group properties and adds or removes rooms.
     * @summary Update room group
     * @param {number} id The group ID.
     * @param {UpdateRoomGroupRequest} updateRoomGroupRequest The request for updating a group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public updateRoomGroup(id: number, updateRoomGroupRequest: UpdateRoomGroupRequest, options?: RawAxiosRequestConfig) {
        return FilesApiFp(this.configuration).updateRoomGroup(id, updateRoomGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

