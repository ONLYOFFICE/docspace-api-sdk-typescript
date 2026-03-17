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
 * GroupsApi - axios parameter creator
 * @export
 */
export const GroupsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
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
 * GroupsApi - functional programming interface
 * @export
 */
export const GroupsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsApiAxiosParamCreator(configuration)
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
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.addRoomGroup']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.changeRoomGroupIcon']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.deleteRoomGroup']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.getRoomGroupInfo']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.getRoomGroups']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.updateRoomGroup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * GroupsApi - factory interface
 * @export
 */
export const GroupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsApiFp(configuration)
    return {
        /**
         * Creates a new room group with the specified name, icon, and list of rooms.
         * @summary Add a new room group
         * @param {GroupsApiAddRoomGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-group/
         * @throws {RequiredError}
         */
        addRoomGroup(requestParameters: GroupsApiAddRoomGroupRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupWrapper> {
            return localVarFp.addRoomGroup(requestParameters.roomGroupRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the icon of an existing room group.
         * @summary Change group icon
         * @param {GroupsApiChangeRoomGroupIconRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeRoomGroupIcon operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-group-icon/
         * @throws {RequiredError}
         */
        changeRoomGroupIcon(requestParameters: GroupsApiChangeRoomGroupIconRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupWrapper> {
            return localVarFp.changeRoomGroupIcon(requestParameters.id, requestParameters.iconRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified room group.
         * @summary Delete group
         * @param {GroupsApiDeleteRoomGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-group/
         * @throws {RequiredError}
         */
        deleteRoomGroup(requestParameters: GroupsApiDeleteRoomGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteRoomGroup(requestParameters.id, requestParameters.includeMembers, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns detailed information about a room group.
         * @summary Get room group info
         * @param {GroupsApiGetRoomGroupInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomGroupInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-group-info/
         * @throws {RequiredError}
         */
        getRoomGroupInfo(requestParameters: GroupsApiGetRoomGroupInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupWrapper> {
            return localVarFp.getRoomGroupInfo(requestParameters.id, requestParameters.includeMembers, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all room groups for the current user.
         * @summary List room groups
         * @param {GroupsApiGetRoomGroupsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-groups/
         * @throws {RequiredError}
         */
        getRoomGroups(requestParameters: GroupsApiGetRoomGroupsRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupArrayWrapper> {
            return localVarFp.getRoomGroups(requestParameters.id, requestParameters.includeMembers, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates room group properties and adds or removes rooms.
         * @summary Update room group
         * @param {GroupsApiUpdateRoomGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateRoomGroup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room-group/
         * @throws {RequiredError}
         */
        updateRoomGroup(requestParameters: GroupsApiUpdateRoomGroupRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupWrapper> {
            return localVarFp.updateRoomGroup(requestParameters.id, requestParameters.updateRoomGroupRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addRoomGroup operation in GroupsApi.
 * @export
 * @interface GroupsApiAddRoomGroupRequest
 */
export interface GroupsApiAddRoomGroupRequest {
    /**
     * 
     * @type {RoomGroupRequestDto}
     * @memberof GroupsApiAddRoomGroup
     */
    readonly roomGroupRequestDto?: RoomGroupRequestDto
}

/**
 * Request parameters for changeRoomGroupIcon operation in GroupsApi.
 * @export
 * @interface GroupsApiChangeRoomGroupIconRequest
 */
export interface GroupsApiChangeRoomGroupIconRequest {
    /**
     * Group id
     * @type {number}
     * @memberof GroupsApiChangeRoomGroupIcon
     */
    readonly id: number

    /**
     * Icon update data.
     * @type {IconRequest}
     * @memberof GroupsApiChangeRoomGroupIcon
     */
    readonly iconRequest?: IconRequest
}

/**
 * Request parameters for deleteRoomGroup operation in GroupsApi.
 * @export
 * @interface GroupsApiDeleteRoomGroupRequest
 */
export interface GroupsApiDeleteRoomGroupRequest {
    /**
     * The group unique identifier.
     * @type {number}
     * @memberof GroupsApiDeleteRoomGroup
     */
    readonly id: number

    /**
     * Whether to include group members.
     * @type {boolean}
     * @memberof GroupsApiDeleteRoomGroup
     */
    readonly includeMembers?: boolean
}

/**
 * Request parameters for getRoomGroupInfo operation in GroupsApi.
 * @export
 * @interface GroupsApiGetRoomGroupInfoRequest
 */
export interface GroupsApiGetRoomGroupInfoRequest {
    /**
     * The group unique identifier.
     * @type {number}
     * @memberof GroupsApiGetRoomGroupInfo
     */
    readonly id: number

    /**
     * Whether to include group members.
     * @type {boolean}
     * @memberof GroupsApiGetRoomGroupInfo
     */
    readonly includeMembers?: boolean
}

/**
 * Request parameters for getRoomGroups operation in GroupsApi.
 * @export
 * @interface GroupsApiGetRoomGroupsRequest
 */
export interface GroupsApiGetRoomGroupsRequest {
    /**
     * The group unique identifier.
     * @type {number}
     * @memberof GroupsApiGetRoomGroups
     */
    readonly id: number

    /**
     * Whether to include group members.
     * @type {boolean}
     * @memberof GroupsApiGetRoomGroups
     */
    readonly includeMembers?: boolean
}

/**
 * Request parameters for updateRoomGroup operation in GroupsApi.
 * @export
 * @interface GroupsApiUpdateRoomGroupRequest
 */
export interface GroupsApiUpdateRoomGroupRequest {
    /**
     * The group ID.
     * @type {number}
     * @memberof GroupsApiUpdateRoomGroup
     */
    readonly id: number

    /**
     * The request for updating a group.
     * @type {UpdateRoomGroupRequest}
     * @memberof GroupsApiUpdateRoomGroup
     */
    readonly updateRoomGroupRequest: UpdateRoomGroupRequest
}

/**
 * GroupsApi - object-oriented interface
 * @export
 * @class GroupsApi
 * @extends {BaseAPI}
 */
export class GroupsApi extends BaseAPI {
    /**
     * Creates a new room group with the specified name, icon, and list of rooms.
     * @summary Add a new room group
     * @param {RoomsGroupsApiAddRoomGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public addRoomGroup(requestParameters: GroupsApiAddRoomGroupRequest = {}, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).addRoomGroup(requestParameters.roomGroupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the icon of an existing room group.
     * @summary Change group icon
     * @param {RoomsGroupsApiChangeRoomGroupIconRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public changeRoomGroupIcon(requestParameters: GroupsApiChangeRoomGroupIconRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).changeRoomGroupIcon(requestParameters.id, requestParameters.iconRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified room group.
     * @summary Delete group
     * @param {RoomsGroupsApiDeleteRoomGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public deleteRoomGroup(requestParameters: GroupsApiDeleteRoomGroupRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).deleteRoomGroup(requestParameters.id, requestParameters.includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns detailed information about a room group.
     * @summary Get room group info
     * @param {RoomsGroupsApiGetRoomGroupInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public getRoomGroupInfo(requestParameters: GroupsApiGetRoomGroupInfoRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).getRoomGroupInfo(requestParameters.id, requestParameters.includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all room groups for the current user.
     * @summary List room groups
     * @param {RoomsGroupsApiGetRoomGroupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public getRoomGroups(requestParameters: GroupsApiGetRoomGroupsRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).getRoomGroups(requestParameters.id, requestParameters.includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates room group properties and adds or removes rooms.
     * @summary Update room group
     * @param {RoomsGroupsApiUpdateRoomGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public updateRoomGroup(requestParameters: GroupsApiUpdateRoomGroupRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).updateRoomGroup(requestParameters.id, requestParameters.updateRoomGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

