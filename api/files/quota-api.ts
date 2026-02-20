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
import type { FolderIntegerArrayWrapper } from '../../models';
// @ts-ignore
import type { UpdateRoomsQuotaRequestDtoInteger } from '../../models';
// @ts-ignore
import type { UpdateRoomsRoomIdsRequestDtoInteger } from '../../models';
/**
 * QuotaApi - axios parameter creator
 * @export
 */
export const QuotaApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Resets the quota limit for the rooms with the IDs specified in the request.
         * @summary Reset the room quota limit
         * @param {UpdateRoomsRoomIdsRequestDtoInteger} [updateRoomsRoomIdsRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetRoomQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-room-quota/
         */
        resetRoomQuota: async (updateRoomsRoomIdsRequestDtoInteger?: UpdateRoomsRoomIdsRequestDtoInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomsRoomIdsRequestDtoInteger, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the quota limit for the rooms with the IDs specified in the request.
         * @summary Change the room quota limit
         * @param {UpdateRoomsQuotaRequestDtoInteger} [updateRoomsQuotaRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoomsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-rooms-quota/
         */
        updateRoomsQuota: async (updateRoomsQuotaRequestDtoInteger?: UpdateRoomsQuotaRequestDtoInteger, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomsQuotaRequestDtoInteger, localVarRequestOptions, configuration)

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
         * Resets the quota limit for the rooms with the IDs specified in the request.
         * @summary Reset the room quota limit
         * @param {UpdateRoomsRoomIdsRequestDtoInteger} [updateRoomsRoomIdsRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetRoomQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-room-quota/
         */
        async resetRoomQuota(updateRoomsRoomIdsRequestDtoInteger?: UpdateRoomsRoomIdsRequestDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetRoomQuota(updateRoomsRoomIdsRequestDtoInteger, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['QuotaApi.resetRoomQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the quota limit for the rooms with the IDs specified in the request.
         * @summary Change the room quota limit
         * @param {UpdateRoomsQuotaRequestDtoInteger} [updateRoomsQuotaRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoomsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-rooms-quota/
         */
        async updateRoomsQuota(updateRoomsQuotaRequestDtoInteger?: UpdateRoomsQuotaRequestDtoInteger, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRoomsQuota(updateRoomsQuotaRequestDtoInteger, options);
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
         * Resets the quota limit for the rooms with the IDs specified in the request.
         * @summary Reset the room quota limit
         * @param {UpdateRoomsRoomIdsRequestDtoInteger} [updateRoomsRoomIdsRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * REST API Reference for resetRoomQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-room-quota/
         * @throws {RequiredError}
         */
        resetRoomQuota(updateRoomsRoomIdsRequestDtoInteger?: UpdateRoomsRoomIdsRequestDtoInteger, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerArrayWrapper> {
            return localVarFp.resetRoomQuota(updateRoomsRoomIdsRequestDtoInteger, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the quota limit for the rooms with the IDs specified in the request.
         * @summary Change the room quota limit
         * @param {UpdateRoomsQuotaRequestDtoInteger} [updateRoomsQuotaRequestDtoInteger] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateRoomsQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-rooms-quota/
         * @throws {RequiredError}
         */
        updateRoomsQuota(updateRoomsQuotaRequestDtoInteger?: UpdateRoomsQuotaRequestDtoInteger, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerArrayWrapper> {
            return localVarFp.updateRoomsQuota(updateRoomsQuotaRequestDtoInteger, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * QuotaApi - object-oriented interface
 * @export
 * @class QuotaApi
 * @extends {BaseAPI}
 */
export class QuotaApi extends BaseAPI {
    /**
     * Resets the quota limit for the rooms with the IDs specified in the request.
     * @summary Reset the room quota limit
     * @param {UpdateRoomsRoomIdsRequestDtoInteger} [updateRoomsRoomIdsRequestDtoInteger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuotaApi
     */
    public resetRoomQuota(updateRoomsRoomIdsRequestDtoInteger?: UpdateRoomsRoomIdsRequestDtoInteger, options?: RawAxiosRequestConfig) {
        return QuotaApiFp(this.configuration).resetRoomQuota(updateRoomsRoomIdsRequestDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the quota limit for the rooms with the IDs specified in the request.
     * @summary Change the room quota limit
     * @param {UpdateRoomsQuotaRequestDtoInteger} [updateRoomsQuotaRequestDtoInteger] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuotaApi
     */
    public updateRoomsQuota(updateRoomsQuotaRequestDtoInteger?: UpdateRoomsQuotaRequestDtoInteger, options?: RawAxiosRequestConfig) {
        return QuotaApiFp(this.configuration).updateRoomsQuota(updateRoomsQuotaRequestDtoInteger, options).then((request) => request(this.axios, this.basePath));
    }
}

