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
import type { FolderArrayWrapper } from '../../models';
// @ts-ignore
import type { UpdateRoomsQuotaRequestDto } from '../../models';
// @ts-ignore
import type { UpdateRoomsRoomIdsRequestDto } from '../../models';
/**
 * QuotaApi - axios parameter creator
 * @export
 */
export const QuotaApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns every listed room to the default room quota of the portal and streams the updated rooms back in the  order they were given. This is not the same as removing the limit: the room stops carrying its own value and  starts following the portal default, which a portal administrator can change at any time. The per-room quota  feature has to be on, the caller must be a manager of each listed room, and an archived room or a room in the  trash is refused. The list is not transactional, so rooms processed before a failing one keep the default and  the rest keep what they had. Only numeric room ids are processed, which means ids of rooms stored in a  connected third-party account are silently skipped. Use `PUT api/2.0/files/rooms/roomquota` to set an explicit  value, and a quota of -1 in `PUT api/2.0/files/rooms/{id}` to leave the room with no custom limit at all.
         * @summary Reset the room quota limit
         * @param {UpdateRoomsRoomIdsRequestDto} [updateRoomsRoomIdsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetRoomQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-room-quota/
         */
        resetRoomQuota: async (updateRoomsRoomIdsRequestDto?: UpdateRoomsRoomIdsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms/resetquota`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomsRoomIdsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the same custom storage limit, in bytes, on every listed room and streams the updated rooms back in the  order they were given. The per-room quota feature has to be on for the portal, and the value must stay within  the portal own limit, otherwise the call is refused before anything is written. The caller must be a manager  of each listed room, and an archived room or a room in the trash is refused. The list is not transactional:  rooms processed before the offending one keep their new limit, so a failed call has to be checked room by  room. Only numeric room ids are processed, which means ids of rooms stored in a connected third-party account  are silently skipped. A room whose limit already equals the requested value is left untouched and still  returned. To go back to the portal default use `PUT api/2.0/files/rooms/resetquota`, and to drop the custom  limit entirely send a quota of -1 to `PUT api/2.0/files/rooms/{id}`.
         * @summary Change the room quota limit
         * @param {UpdateRoomsQuotaRequestDto} [updateRoomsQuotaRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoomsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-rooms-quota/
         */
        updateRoomsQuota: async (updateRoomsQuotaRequestDto?: UpdateRoomsQuotaRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms/roomquota`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomsQuotaRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * QuotaApi - functional programming interface
 * @export
 */
export const QuotaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QuotaApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns every listed room to the default room quota of the portal and streams the updated rooms back in the  order they were given. This is not the same as removing the limit: the room stops carrying its own value and  starts following the portal default, which a portal administrator can change at any time. The per-room quota  feature has to be on, the caller must be a manager of each listed room, and an archived room or a room in the  trash is refused. The list is not transactional, so rooms processed before a failing one keep the default and  the rest keep what they had. Only numeric room ids are processed, which means ids of rooms stored in a  connected third-party account are silently skipped. Use `PUT api/2.0/files/rooms/roomquota` to set an explicit  value, and a quota of -1 in `PUT api/2.0/files/rooms/{id}` to leave the room with no custom limit at all.
         * @summary Reset the room quota limit
         * @param {UpdateRoomsRoomIdsRequestDto} [updateRoomsRoomIdsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetRoomQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-room-quota/
         */
        async resetRoomQuota(updateRoomsRoomIdsRequestDto?: UpdateRoomsRoomIdsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetRoomQuota(updateRoomsRoomIdsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['QuotaApi.resetRoomQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the same custom storage limit, in bytes, on every listed room and streams the updated rooms back in the  order they were given. The per-room quota feature has to be on for the portal, and the value must stay within  the portal own limit, otherwise the call is refused before anything is written. The caller must be a manager  of each listed room, and an archived room or a room in the trash is refused. The list is not transactional:  rooms processed before the offending one keep their new limit, so a failed call has to be checked room by  room. Only numeric room ids are processed, which means ids of rooms stored in a connected third-party account  are silently skipped. A room whose limit already equals the requested value is left untouched and still  returned. To go back to the portal default use `PUT api/2.0/files/rooms/resetquota`, and to drop the custom  limit entirely send a quota of -1 to `PUT api/2.0/files/rooms/{id}`.
         * @summary Change the room quota limit
         * @param {UpdateRoomsQuotaRequestDto} [updateRoomsQuotaRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoomsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-rooms-quota/
         */
        async updateRoomsQuota(updateRoomsQuotaRequestDto?: UpdateRoomsQuotaRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRoomsQuota(updateRoomsQuotaRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['QuotaApi.updateRoomsQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * QuotaApi - factory interface
 * @export
 */
export const QuotaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QuotaApiFp(configuration)
    return {
        /**
         * Returns every listed room to the default room quota of the portal and streams the updated rooms back in the  order they were given. This is not the same as removing the limit: the room stops carrying its own value and  starts following the portal default, which a portal administrator can change at any time. The per-room quota  feature has to be on, the caller must be a manager of each listed room, and an archived room or a room in the  trash is refused. The list is not transactional, so rooms processed before a failing one keep the default and  the rest keep what they had. Only numeric room ids are processed, which means ids of rooms stored in a  connected third-party account are silently skipped. Use `PUT api/2.0/files/rooms/roomquota` to set an explicit  value, and a quota of -1 in `PUT api/2.0/files/rooms/{id}` to leave the room with no custom limit at all.
         * @summary Reset the room quota limit
         * @param {QuotaApiResetRoomQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for resetRoomQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-room-quota/
         * @throws {RequiredError}
         */
        resetRoomQuota(requestParameters: QuotaApiResetRoomQuotaRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderArrayWrapper> {
            return localVarFp.resetRoomQuota(requestParameters.updateRoomsRoomIdsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the same custom storage limit, in bytes, on every listed room and streams the updated rooms back in the  order they were given. The per-room quota feature has to be on for the portal, and the value must stay within  the portal own limit, otherwise the call is refused before anything is written. The caller must be a manager  of each listed room, and an archived room or a room in the trash is refused. The list is not transactional:  rooms processed before the offending one keep their new limit, so a failed call has to be checked room by  room. Only numeric room ids are processed, which means ids of rooms stored in a connected third-party account  are silently skipped. A room whose limit already equals the requested value is left untouched and still  returned. To go back to the portal default use `PUT api/2.0/files/rooms/resetquota`, and to drop the custom  limit entirely send a quota of -1 to `PUT api/2.0/files/rooms/{id}`.
         * @summary Change the room quota limit
         * @param {QuotaApiUpdateRoomsQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateRoomsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-rooms-quota/
         * @throws {RequiredError}
         */
        updateRoomsQuota(requestParameters: QuotaApiUpdateRoomsQuotaRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderArrayWrapper> {
            return localVarFp.updateRoomsQuota(requestParameters.updateRoomsQuotaRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for resetRoomQuota operation in QuotaApi.
 * @export
 * @interface QuotaApiResetRoomQuotaRequest
 */
export interface QuotaApiResetRoomQuotaRequest {
    /**
     * 
     * @type {UpdateRoomsRoomIdsRequestDto}
     * @memberof QuotaApiResetRoomQuota
     */
    readonly updateRoomsRoomIdsRequestDto?: UpdateRoomsRoomIdsRequestDto
}

/**
 * Request parameters for updateRoomsQuota operation in QuotaApi.
 * @export
 * @interface QuotaApiUpdateRoomsQuotaRequest
 */
export interface QuotaApiUpdateRoomsQuotaRequest {
    /**
     * 
     * @type {UpdateRoomsQuotaRequestDto}
     * @memberof QuotaApiUpdateRoomsQuota
     */
    readonly updateRoomsQuotaRequestDto?: UpdateRoomsQuotaRequestDto
}

/**
 * QuotaApi - object-oriented interface
 * @export
 * @class QuotaApi
 * @extends {BaseAPI}
 */
export class QuotaApi extends BaseAPI {
    /**
     * Returns every listed room to the default room quota of the portal and streams the updated rooms back in the  order they were given. This is not the same as removing the limit: the room stops carrying its own value and  starts following the portal default, which a portal administrator can change at any time. The per-room quota  feature has to be on, the caller must be a manager of each listed room, and an archived room or a room in the  trash is refused. The list is not transactional, so rooms processed before a failing one keep the default and  the rest keep what they had. Only numeric room ids are processed, which means ids of rooms stored in a  connected third-party account are silently skipped. Use `PUT api/2.0/files/rooms/roomquota` to set an explicit  value, and a quota of -1 in `PUT api/2.0/files/rooms/{id}` to leave the room with no custom limit at all.
     * @summary Reset the room quota limit
     * @param {FilesQuotaApiResetRoomQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuotaApi
     */
    public resetRoomQuota(requestParameters: QuotaApiResetRoomQuotaRequest = {}, options?: RawAxiosRequestConfig) {
        return QuotaApiFp(this.configuration).resetRoomQuota(requestParameters.updateRoomsRoomIdsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the same custom storage limit, in bytes, on every listed room and streams the updated rooms back in the  order they were given. The per-room quota feature has to be on for the portal, and the value must stay within  the portal own limit, otherwise the call is refused before anything is written. The caller must be a manager  of each listed room, and an archived room or a room in the trash is refused. The list is not transactional:  rooms processed before the offending one keep their new limit, so a failed call has to be checked room by  room. Only numeric room ids are processed, which means ids of rooms stored in a connected third-party account  are silently skipped. A room whose limit already equals the requested value is left untouched and still  returned. To go back to the portal default use `PUT api/2.0/files/rooms/resetquota`, and to drop the custom  limit entirely send a quota of -1 to `PUT api/2.0/files/rooms/{id}`.
     * @summary Change the room quota limit
     * @param {FilesQuotaApiUpdateRoomsQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuotaApi
     */
    public updateRoomsQuota(requestParameters: QuotaApiUpdateRoomsQuotaRequest = {}, options?: RawAxiosRequestConfig) {
        return QuotaApiFp(this.configuration).updateRoomsQuota(requestParameters.updateRoomsQuotaRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

