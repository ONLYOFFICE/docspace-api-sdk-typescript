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
import type { GroupArrayWrapper } from '../../models';
/**
 * SearchApi - axios parameter creator
 * @export
 */
export const SearchApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Returns groups with their sharing settings for a file with the ID specified in request.
         * @summary Get groups with file sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-files-shared/
         */
        getGroupsWithFilesShared: async (id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getGroupsWithFilesShared', 'id', id)
            const localVarPath = `/api/2.0/group/file/{id}`
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

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
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
         * Returns groups with their sharing settings in a folder with the ID specified in request.
         * @summary Get groups with folder sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-folders-shared/
         */
        getGroupsWithFoldersShared: async (id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getGroupsWithFoldersShared', 'id', id)
            const localVarPath = `/api/2.0/group/folder/{id}`
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

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
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
         * Returns groups with their sharing settings in a room with the ID specified in request.
         * @summary Get groups with room sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-rooms-shared/
         */
        getGroupsWithRoomsShared: async (id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getGroupsWithRoomsShared', 'id', id)
            const localVarPath = `/api/2.0/group/room/{id}`
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

            if (excludeShared !== undefined) {
                localVarQueryParameter['excludeShared'] = excludeShared;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
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
 * SearchApi - functional programming interface
 * @export
 */
export const SearchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SearchApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns groups with their sharing settings for a file with the ID specified in request.
         * @summary Get groups with file sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-files-shared/
         */
        async getGroupsWithFilesShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsWithFilesShared(id, excludeShared, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchApi.getGroupsWithFilesShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns groups with their sharing settings in a folder with the ID specified in request.
         * @summary Get groups with folder sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-folders-shared/
         */
        async getGroupsWithFoldersShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsWithFoldersShared(id, excludeShared, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchApi.getGroupsWithFoldersShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns groups with their sharing settings in a room with the ID specified in request.
         * @summary Get groups with room sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-rooms-shared/
         */
        async getGroupsWithRoomsShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsWithRoomsShared(id, excludeShared, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchApi.getGroupsWithRoomsShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SearchApi - factory interface
 * @export
 */
export const SearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SearchApiFp(configuration)
    return {
        /**
         * Returns groups with their sharing settings for a file with the ID specified in request.
         * @summary Get groups with file sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-files-shared/
         * @throws {RequiredError}
         */
        getGroupsWithFilesShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroupsWithFilesShared(id, excludeShared, count, startIndex, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns groups with their sharing settings in a folder with the ID specified in request.
         * @summary Get groups with folder sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-folders-shared/
         * @throws {RequiredError}
         */
        getGroupsWithFoldersShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroupsWithFoldersShared(id, excludeShared, count, startIndex, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns groups with their sharing settings in a room with the ID specified in request.
         * @summary Get groups with room sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-rooms-shared/
         * @throws {RequiredError}
         */
        getGroupsWithRoomsShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroupsWithRoomsShared(id, excludeShared, count, startIndex, filterValue, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export class SearchApi extends BaseAPI {
    /**
     * Returns groups with their sharing settings for a file with the ID specified in request.
     * @summary Get groups with file sharing settings
     * @param {number} id The group ID.
     * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
     * @param {number} [count] The number of groups to retrieve in the request.
     * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
     * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public getGroupsWithFilesShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig) {
        return SearchApiFp(this.configuration).getGroupsWithFilesShared(id, excludeShared, count, startIndex, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns groups with their sharing settings in a folder with the ID specified in request.
     * @summary Get groups with folder sharing settings
     * @param {number} id The group ID.
     * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
     * @param {number} [count] The number of groups to retrieve in the request.
     * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
     * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public getGroupsWithFoldersShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig) {
        return SearchApiFp(this.configuration).getGroupsWithFoldersShared(id, excludeShared, count, startIndex, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns groups with their sharing settings in a room with the ID specified in request.
     * @summary Get groups with room sharing settings
     * @param {number} id The group ID.
     * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
     * @param {number} [count] The number of groups to retrieve in the request.
     * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
     * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public getGroupsWithRoomsShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig) {
        return SearchApiFp(this.configuration).getGroupsWithRoomsShared(id, excludeShared, count, startIndex, filterValue, options).then((request) => request(this.axios, this.basePath));
    }
}

