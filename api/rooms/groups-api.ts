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
import type { ErrorApiResponse } from '../../models';
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
         * Creates a room group, a personal collection that gathers rooms the caller already works with under one name  and icon; it belongs to the account that created it and is never shown to other members of the portal. Pass  the group name, the identifier of one of the built-in covers offered by `GET api/2.0/files/rooms/covers`, and  a list of at least one room - a number for a room stored in the portal, a string for a room on a connected  third-party account. Any role may create its own group, a guest included: what is checked is read access to  each listed room, not the role of the caller. Repeated identifiers are collapsed, and a value that is not a  room identifier at all is rejected as an invalid request. When none of the listed rooms can be read the group  is not created; when only some of them can, the group is created with those rooms and the call is still  reported as failed, so re-read `GET api/2.0/files/group` before retrying. A room may sit in several groups,  and two groups of the same account may carry the same name. The answer is the stored group with its rooms.
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
         * Replaces the icon of one of the caller\'s own room groups and returns the whole group, its name and its rooms  left as they were. Send the identifier of one of the built-in covers offered by  `GET api/2.0/files/rooms/covers`; an empty string strips the icon, after which the group comes back with an  empty `icon`, and any other value - including a word that merely reads like one, such as `none` - is rejected  as an invalid request. An uploaded image cannot be used here, unlike the logo of a room. Leaving `icon` out of  the body or sending it as null is accepted and changes nothing, whereas a request that carries no body at all,  or a body that is not JSON, is refused. Setting the icon the group already has is accepted as well, so  retrying the call is safe. Any role may re-icon its own group, and a group belonging to another account is  answered as missing rather than refused, exactly as reading it would be.
         * @summary Change room group icon
         * @param {number} id The room group to re-icon, identified by the value `GET api/2.0/files/group` reports for it. A group of  another account cannot be addressed and reads as missing.
         * @param {IconRequest} [iconRequest] The icon to give the group. A body that leaves the icon out is accepted and changes nothing.
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
         * Deletes one of the caller\'s own room groups. Only the collection goes away: the rooms it gathered, their  content and the shares on them are left exactly as they were, and a room that was in no other group simply  stops being grouped. Deleting a group of another account is refused, and an identifier that names nothing -  because it never existed, or because the group has already been deleted - is answered as missing, so repeating  the call after a successful delete does not report success a second time. The operation is destructive and  cannot be undone: there is no trash for groups, and rebuilding one means calling `POST api/2.0/files/group`  again with the same name, icon and rooms, which gives it a new identifier. Nothing is returned in the body.  The `includeMembers` parameter is accepted here because the route shares its contract with  `GET api/2.0/files/group/{id}`, and has no effect on what is deleted. Read the group first when the rooms it  gathers still have to be recorded somewhere.
         * @summary Delete a room group
         * @param {number} id The room group to act on, identified by the value `GET api/2.0/files/group` reports for it. A group of another  account cannot be addressed and reads as missing.
         * @param {boolean} [includeMembers] Whether the rooms of the group are listed in the answer: true fills the `rooms` array, false leaves it out and  reports only how many there are in `totalRooms`.
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
         * Returns one room group of the calling account together with the rooms it gathers. Groups are personal: an  identifier that belongs to another member is answered the same way as one that was never created or has  already been deleted, and a portal administrator is no exception to that rule. Take the identifier from  `GET api/2.0/files/group`, which lists the groups the caller owns. Set `includeMembers` to false to get the  group without the `rooms` array, which is the cheaper form when only the name, the icon and the number of  rooms are needed; `totalRooms` is filled either way. A room moved to the archive is left out of both `rooms`  and `totalRooms` while its membership survives, so taking the room out of the archive brings it back into the  group. Rooms stored in the portal are listed before rooms on connected third-party accounts. The call is  read-only and changes nothing about the group or the rooms it refers to.
         * @summary Get room group info
         * @param {number} id The room group to act on, identified by the value `GET api/2.0/files/group` reports for it. A group of another  account cannot be addressed and reads as missing.
         * @param {boolean} [includeMembers] Whether the rooms of the group are listed in the answer: true fills the `rooms` array, false leaves it out and  reports only how many there are in `totalRooms`.
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
         * Returns every room group of the calling account, each with the rooms it gathers. Only groups the caller  created are listed: groups of other members never appear here, and an account that has never made one gets an  empty array back. Set `includeMembers` to false to leave the `rooms` array out of every entry and keep the  name, the icon and `totalRooms` alone, which is the cheaper form when the list is only being shown as a menu.  Archived rooms are skipped in both the `rooms` array and the `totalRooms` count, and reappear once the room is  taken out of the archive. The listing is neither paged nor filtered - it always carries the whole set - and  the order of the entries is not contractual, so sort them on the client when the order matters. The call is  read-only. Use `GET api/2.0/files/group/{id}` when the identifier of a single group is already known, and  `POST api/2.0/files/group` to add one.
         * @summary List room groups
         * @param {boolean} [includeMembers] Whether the rooms of each group are listed in the answer: true fills the `rooms` array of every entry, false  leaves it out and reports only how many there are in `totalRooms`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-groups/
         */
        getRoomGroups: async (includeMembers?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/group`;
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
         * Applies changes to one of the caller\'s own room groups: a new name, rooms to attach, rooms to detach, or any  combination of the three in a single call. A body that carries none of the three (`{}`) is accepted and  changes nothing, while a body that names them and leaves every one of them empty asks for an update that  cannot be performed and is rejected as an invalid request. `roomsToAdd` is resolved the way creation resolves  its list: every identifier has to name a room the caller can read, repeats and rooms already in the group are  collapsed, and when only part of the list resolves the rest is still attached and the call is reported as  failed. `roomsToRemove` works the other way round - a room already in the group is always detached, even when  the caller has since lost access to it, whereas an identifier that is not in the group is resolved first and  refused when it names nothing. The steps are applied in order and are not rolled back when a later one fails.  A group of another account is answered as missing. The answer is the group as stored after the call.
         * @summary Update room group
         * @param {number} id The room group to change, identified by the value `GET api/2.0/files/group` reports for it. A group of another  account cannot be addressed and reads as missing.
         * @param {UpdateRoomGroupRequest} updateRoomGroupRequest The changes to apply. Carrying none of them leaves the group as it is, and each of them may be sent on its own  or together with the others.
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
         * Creates a room group, a personal collection that gathers rooms the caller already works with under one name  and icon; it belongs to the account that created it and is never shown to other members of the portal. Pass  the group name, the identifier of one of the built-in covers offered by `GET api/2.0/files/rooms/covers`, and  a list of at least one room - a number for a room stored in the portal, a string for a room on a connected  third-party account. Any role may create its own group, a guest included: what is checked is read access to  each listed room, not the role of the caller. Repeated identifiers are collapsed, and a value that is not a  room identifier at all is rejected as an invalid request. When none of the listed rooms can be read the group  is not created; when only some of them can, the group is created with those rooms and the call is still  reported as failed, so re-read `GET api/2.0/files/group` before retrying. A room may sit in several groups,  and two groups of the same account may carry the same name. The answer is the stored group with its rooms.
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
         * Replaces the icon of one of the caller\'s own room groups and returns the whole group, its name and its rooms  left as they were. Send the identifier of one of the built-in covers offered by  `GET api/2.0/files/rooms/covers`; an empty string strips the icon, after which the group comes back with an  empty `icon`, and any other value - including a word that merely reads like one, such as `none` - is rejected  as an invalid request. An uploaded image cannot be used here, unlike the logo of a room. Leaving `icon` out of  the body or sending it as null is accepted and changes nothing, whereas a request that carries no body at all,  or a body that is not JSON, is refused. Setting the icon the group already has is accepted as well, so  retrying the call is safe. Any role may re-icon its own group, and a group belonging to another account is  answered as missing rather than refused, exactly as reading it would be.
         * @summary Change room group icon
         * @param {number} id The room group to re-icon, identified by the value `GET api/2.0/files/group` reports for it. A group of  another account cannot be addressed and reads as missing.
         * @param {IconRequest} [iconRequest] The icon to give the group. A body that leaves the icon out is accepted and changes nothing.
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
         * Deletes one of the caller\'s own room groups. Only the collection goes away: the rooms it gathered, their  content and the shares on them are left exactly as they were, and a room that was in no other group simply  stops being grouped. Deleting a group of another account is refused, and an identifier that names nothing -  because it never existed, or because the group has already been deleted - is answered as missing, so repeating  the call after a successful delete does not report success a second time. The operation is destructive and  cannot be undone: there is no trash for groups, and rebuilding one means calling `POST api/2.0/files/group`  again with the same name, icon and rooms, which gives it a new identifier. Nothing is returned in the body.  The `includeMembers` parameter is accepted here because the route shares its contract with  `GET api/2.0/files/group/{id}`, and has no effect on what is deleted. Read the group first when the rooms it  gathers still have to be recorded somewhere.
         * @summary Delete a room group
         * @param {number} id The room group to act on, identified by the value `GET api/2.0/files/group` reports for it. A group of another  account cannot be addressed and reads as missing.
         * @param {boolean} [includeMembers] Whether the rooms of the group are listed in the answer: true fills the `rooms` array, false leaves it out and  reports only how many there are in `totalRooms`.
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
         * Returns one room group of the calling account together with the rooms it gathers. Groups are personal: an  identifier that belongs to another member is answered the same way as one that was never created or has  already been deleted, and a portal administrator is no exception to that rule. Take the identifier from  `GET api/2.0/files/group`, which lists the groups the caller owns. Set `includeMembers` to false to get the  group without the `rooms` array, which is the cheaper form when only the name, the icon and the number of  rooms are needed; `totalRooms` is filled either way. A room moved to the archive is left out of both `rooms`  and `totalRooms` while its membership survives, so taking the room out of the archive brings it back into the  group. Rooms stored in the portal are listed before rooms on connected third-party accounts. The call is  read-only and changes nothing about the group or the rooms it refers to.
         * @summary Get room group info
         * @param {number} id The room group to act on, identified by the value `GET api/2.0/files/group` reports for it. A group of another  account cannot be addressed and reads as missing.
         * @param {boolean} [includeMembers] Whether the rooms of the group are listed in the answer: true fills the `rooms` array, false leaves it out and  reports only how many there are in `totalRooms`.
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
         * Returns every room group of the calling account, each with the rooms it gathers. Only groups the caller  created are listed: groups of other members never appear here, and an account that has never made one gets an  empty array back. Set `includeMembers` to false to leave the `rooms` array out of every entry and keep the  name, the icon and `totalRooms` alone, which is the cheaper form when the list is only being shown as a menu.  Archived rooms are skipped in both the `rooms` array and the `totalRooms` count, and reappear once the room is  taken out of the archive. The listing is neither paged nor filtered - it always carries the whole set - and  the order of the entries is not contractual, so sort them on the client when the order matters. The call is  read-only. Use `GET api/2.0/files/group/{id}` when the identifier of a single group is already known, and  `POST api/2.0/files/group` to add one.
         * @summary List room groups
         * @param {boolean} [includeMembers] Whether the rooms of each group are listed in the answer: true fills the `rooms` array of every entry, false  leaves it out and reports only how many there are in `totalRooms`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-groups/
         */
        async getRoomGroups(includeMembers?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomGroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomGroups(includeMembers, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupsApi.getRoomGroups']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Applies changes to one of the caller\'s own room groups: a new name, rooms to attach, rooms to detach, or any  combination of the three in a single call. A body that carries none of the three (`{}`) is accepted and  changes nothing, while a body that names them and leaves every one of them empty asks for an update that  cannot be performed and is rejected as an invalid request. `roomsToAdd` is resolved the way creation resolves  its list: every identifier has to name a room the caller can read, repeats and rooms already in the group are  collapsed, and when only part of the list resolves the rest is still attached and the call is reported as  failed. `roomsToRemove` works the other way round - a room already in the group is always detached, even when  the caller has since lost access to it, whereas an identifier that is not in the group is resolved first and  refused when it names nothing. The steps are applied in order and are not rolled back when a later one fails.  A group of another account is answered as missing. The answer is the group as stored after the call.
         * @summary Update room group
         * @param {number} id The room group to change, identified by the value `GET api/2.0/files/group` reports for it. A group of another  account cannot be addressed and reads as missing.
         * @param {UpdateRoomGroupRequest} updateRoomGroupRequest The changes to apply. Carrying none of them leaves the group as it is, and each of them may be sent on its own  or together with the others.
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
         * Creates a room group, a personal collection that gathers rooms the caller already works with under one name  and icon; it belongs to the account that created it and is never shown to other members of the portal. Pass  the group name, the identifier of one of the built-in covers offered by `GET api/2.0/files/rooms/covers`, and  a list of at least one room - a number for a room stored in the portal, a string for a room on a connected  third-party account. Any role may create its own group, a guest included: what is checked is read access to  each listed room, not the role of the caller. Repeated identifiers are collapsed, and a value that is not a  room identifier at all is rejected as an invalid request. When none of the listed rooms can be read the group  is not created; when only some of them can, the group is created with those rooms and the call is still  reported as failed, so re-read `GET api/2.0/files/group` before retrying. A room may sit in several groups,  and two groups of the same account may carry the same name. The answer is the stored group with its rooms.
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
         * Replaces the icon of one of the caller\'s own room groups and returns the whole group, its name and its rooms  left as they were. Send the identifier of one of the built-in covers offered by  `GET api/2.0/files/rooms/covers`; an empty string strips the icon, after which the group comes back with an  empty `icon`, and any other value - including a word that merely reads like one, such as `none` - is rejected  as an invalid request. An uploaded image cannot be used here, unlike the logo of a room. Leaving `icon` out of  the body or sending it as null is accepted and changes nothing, whereas a request that carries no body at all,  or a body that is not JSON, is refused. Setting the icon the group already has is accepted as well, so  retrying the call is safe. Any role may re-icon its own group, and a group belonging to another account is  answered as missing rather than refused, exactly as reading it would be.
         * @summary Change room group icon
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
         * Deletes one of the caller\'s own room groups. Only the collection goes away: the rooms it gathered, their  content and the shares on them are left exactly as they were, and a room that was in no other group simply  stops being grouped. Deleting a group of another account is refused, and an identifier that names nothing -  because it never existed, or because the group has already been deleted - is answered as missing, so repeating  the call after a successful delete does not report success a second time. The operation is destructive and  cannot be undone: there is no trash for groups, and rebuilding one means calling `POST api/2.0/files/group`  again with the same name, icon and rooms, which gives it a new identifier. Nothing is returned in the body.  The `includeMembers` parameter is accepted here because the route shares its contract with  `GET api/2.0/files/group/{id}`, and has no effect on what is deleted. Read the group first when the rooms it  gathers still have to be recorded somewhere.
         * @summary Delete a room group
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
         * Returns one room group of the calling account together with the rooms it gathers. Groups are personal: an  identifier that belongs to another member is answered the same way as one that was never created or has  already been deleted, and a portal administrator is no exception to that rule. Take the identifier from  `GET api/2.0/files/group`, which lists the groups the caller owns. Set `includeMembers` to false to get the  group without the `rooms` array, which is the cheaper form when only the name, the icon and the number of  rooms are needed; `totalRooms` is filled either way. A room moved to the archive is left out of both `rooms`  and `totalRooms` while its membership survives, so taking the room out of the archive brings it back into the  group. Rooms stored in the portal are listed before rooms on connected third-party accounts. The call is  read-only and changes nothing about the group or the rooms it refers to.
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
         * Returns every room group of the calling account, each with the rooms it gathers. Only groups the caller  created are listed: groups of other members never appear here, and an account that has never made one gets an  empty array back. Set `includeMembers` to false to leave the `rooms` array out of every entry and keep the  name, the icon and `totalRooms` alone, which is the cheaper form when the list is only being shown as a menu.  Archived rooms are skipped in both the `rooms` array and the `totalRooms` count, and reappear once the room is  taken out of the archive. The listing is neither paged nor filtered - it always carries the whole set - and  the order of the entries is not contractual, so sort them on the client when the order matters. The call is  read-only. Use `GET api/2.0/files/group/{id}` when the identifier of a single group is already known, and  `POST api/2.0/files/group` to add one.
         * @summary List room groups
         * @param {GroupsApiGetRoomGroupsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomGroups operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-groups/
         * @throws {RequiredError}
         */
        getRoomGroups(requestParameters: GroupsApiGetRoomGroupsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RoomGroupArrayWrapper> {
            return localVarFp.getRoomGroups(requestParameters.includeMembers, options).then((request) => request(axios, basePath));
        },
        /**
         * Applies changes to one of the caller\'s own room groups: a new name, rooms to attach, rooms to detach, or any  combination of the three in a single call. A body that carries none of the three (`{}`) is accepted and  changes nothing, while a body that names them and leaves every one of them empty asks for an update that  cannot be performed and is rejected as an invalid request. `roomsToAdd` is resolved the way creation resolves  its list: every identifier has to name a room the caller can read, repeats and rooms already in the group are  collapsed, and when only part of the list resolves the rest is still attached and the call is reported as  failed. `roomsToRemove` works the other way round - a room already in the group is always detached, even when  the caller has since lost access to it, whereas an identifier that is not in the group is resolved first and  refused when it names nothing. The steps are applied in order and are not rolled back when a later one fails.  A group of another account is answered as missing. The answer is the group as stored after the call.
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
     * The room group to re-icon, identified by the value `GET api/2.0/files/group` reports for it. A group of  another account cannot be addressed and reads as missing.
     * @type {number}
     * @memberof GroupsApiChangeRoomGroupIcon
     */
    readonly id: number

    /**
     * The icon to give the group. A body that leaves the icon out is accepted and changes nothing.
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
     * The room group to act on, identified by the value `GET api/2.0/files/group` reports for it. A group of another  account cannot be addressed and reads as missing.
     * @type {number}
     * @memberof GroupsApiDeleteRoomGroup
     */
    readonly id: number

    /**
     * Whether the rooms of the group are listed in the answer: true fills the `rooms` array, false leaves it out and  reports only how many there are in `totalRooms`.
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
     * The room group to act on, identified by the value `GET api/2.0/files/group` reports for it. A group of another  account cannot be addressed and reads as missing.
     * @type {number}
     * @memberof GroupsApiGetRoomGroupInfo
     */
    readonly id: number

    /**
     * Whether the rooms of the group are listed in the answer: true fills the `rooms` array, false leaves it out and  reports only how many there are in `totalRooms`.
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
     * Whether the rooms of each group are listed in the answer: true fills the `rooms` array of every entry, false  leaves it out and reports only how many there are in `totalRooms`.
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
     * The room group to change, identified by the value `GET api/2.0/files/group` reports for it. A group of another  account cannot be addressed and reads as missing.
     * @type {number}
     * @memberof GroupsApiUpdateRoomGroup
     */
    readonly id: number

    /**
     * The changes to apply. Carrying none of them leaves the group as it is, and each of them may be sent on its own  or together with the others.
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
     * Creates a room group, a personal collection that gathers rooms the caller already works with under one name  and icon; it belongs to the account that created it and is never shown to other members of the portal. Pass  the group name, the identifier of one of the built-in covers offered by `GET api/2.0/files/rooms/covers`, and  a list of at least one room - a number for a room stored in the portal, a string for a room on a connected  third-party account. Any role may create its own group, a guest included: what is checked is read access to  each listed room, not the role of the caller. Repeated identifiers are collapsed, and a value that is not a  room identifier at all is rejected as an invalid request. When none of the listed rooms can be read the group  is not created; when only some of them can, the group is created with those rooms and the call is still  reported as failed, so re-read `GET api/2.0/files/group` before retrying. A room may sit in several groups,  and two groups of the same account may carry the same name. The answer is the stored group with its rooms.
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
     * Replaces the icon of one of the caller\'s own room groups and returns the whole group, its name and its rooms  left as they were. Send the identifier of one of the built-in covers offered by  `GET api/2.0/files/rooms/covers`; an empty string strips the icon, after which the group comes back with an  empty `icon`, and any other value - including a word that merely reads like one, such as `none` - is rejected  as an invalid request. An uploaded image cannot be used here, unlike the logo of a room. Leaving `icon` out of  the body or sending it as null is accepted and changes nothing, whereas a request that carries no body at all,  or a body that is not JSON, is refused. Setting the icon the group already has is accepted as well, so  retrying the call is safe. Any role may re-icon its own group, and a group belonging to another account is  answered as missing rather than refused, exactly as reading it would be.
     * @summary Change room group icon
     * @param {RoomsGroupsApiChangeRoomGroupIconRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public changeRoomGroupIcon(requestParameters: GroupsApiChangeRoomGroupIconRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).changeRoomGroupIcon(requestParameters.id, requestParameters.iconRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes one of the caller\'s own room groups. Only the collection goes away: the rooms it gathered, their  content and the shares on them are left exactly as they were, and a room that was in no other group simply  stops being grouped. Deleting a group of another account is refused, and an identifier that names nothing -  because it never existed, or because the group has already been deleted - is answered as missing, so repeating  the call after a successful delete does not report success a second time. The operation is destructive and  cannot be undone: there is no trash for groups, and rebuilding one means calling `POST api/2.0/files/group`  again with the same name, icon and rooms, which gives it a new identifier. Nothing is returned in the body.  The `includeMembers` parameter is accepted here because the route shares its contract with  `GET api/2.0/files/group/{id}`, and has no effect on what is deleted. Read the group first when the rooms it  gathers still have to be recorded somewhere.
     * @summary Delete a room group
     * @param {RoomsGroupsApiDeleteRoomGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public deleteRoomGroup(requestParameters: GroupsApiDeleteRoomGroupRequest, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).deleteRoomGroup(requestParameters.id, requestParameters.includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one room group of the calling account together with the rooms it gathers. Groups are personal: an  identifier that belongs to another member is answered the same way as one that was never created or has  already been deleted, and a portal administrator is no exception to that rule. Take the identifier from  `GET api/2.0/files/group`, which lists the groups the caller owns. Set `includeMembers` to false to get the  group without the `rooms` array, which is the cheaper form when only the name, the icon and the number of  rooms are needed; `totalRooms` is filled either way. A room moved to the archive is left out of both `rooms`  and `totalRooms` while its membership survives, so taking the room out of the archive brings it back into the  group. Rooms stored in the portal are listed before rooms on connected third-party accounts. The call is  read-only and changes nothing about the group or the rooms it refers to.
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
     * Returns every room group of the calling account, each with the rooms it gathers. Only groups the caller  created are listed: groups of other members never appear here, and an account that has never made one gets an  empty array back. Set `includeMembers` to false to leave the `rooms` array out of every entry and keep the  name, the icon and `totalRooms` alone, which is the cheaper form when the list is only being shown as a menu.  Archived rooms are skipped in both the `rooms` array and the `totalRooms` count, and reappear once the room is  taken out of the archive. The listing is neither paged nor filtered - it always carries the whole set - and  the order of the entries is not contractual, so sort them on the client when the order matters. The call is  read-only. Use `GET api/2.0/files/group/{id}` when the identifier of a single group is already known, and  `POST api/2.0/files/group` to add one.
     * @summary List room groups
     * @param {RoomsGroupsApiGetRoomGroupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public getRoomGroups(requestParameters: GroupsApiGetRoomGroupsRequest = {}, options?: RawAxiosRequestConfig) {
        return GroupsApiFp(this.configuration).getRoomGroups(requestParameters.includeMembers, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Applies changes to one of the caller\'s own room groups: a new name, rooms to attach, rooms to detach, or any  combination of the three in a single call. A body that carries none of the three (`{}`) is accepted and  changes nothing, while a body that names them and leaves every one of them empty asks for an update that  cannot be performed and is rejected as an invalid request. `roomsToAdd` is resolved the way creation resolves  its list: every identifier has to name a room the caller can read, repeats and rooms already in the group are  collapsed, and when only part of the list resolves the rest is still attached and the call is reported as  failed. `roomsToRemove` works the other way round - a room already in the group is always detached, even when  the caller has since lost access to it, whereas an identifier that is not in the group is resolved first and  refused when it names nothing. The steps are applied in order and are not rolled back when a later one fails.  A group of another account is answered as missing. The answer is the group as stored after the call.
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

