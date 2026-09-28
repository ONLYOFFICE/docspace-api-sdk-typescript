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
import type { GroupArrayWrapper } from '../../models';
/**
 * SearchApi - axios parameter creator
 * @export
 */
export const SearchApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the groups that can be given access to the file with the ID given in the route, and reports for each  of them whether it already has access to that file.  The caller has to be allowed to manage the access of that file, and the ID has to belong to an existing file,  so the operation answers 403 for a file the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the file yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/file/{id}/search`.
         * @summary Search groups for a file
         * @param {number} id The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage.
         * @param {boolean} [excludeShared] Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
         * @param {string} [filterValue] The text to match against the group name. Omit it to get every group the caller may grant access to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-files-shared/
         */
        getGroupsWithFilesShared: async (id: number | string, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the groups that can be given access to the folder with the ID given in the route, and reports for  each of them whether it already has access to that folder.  The caller has to be allowed to manage the access of that folder, and the ID has to belong to an existing  folder, so the operation answers 403 for a folder the caller cannot share and 404 for an ID that matches  nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the folder yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/folder/{id}/search`.
         * @summary Search groups for a folder
         * @param {number} id The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage.
         * @param {boolean} [excludeShared] Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
         * @param {string} [filterValue] The text to match against the group name. Omit it to get every group the caller may grant access to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-folders-shared/
         */
        getGroupsWithFoldersShared: async (id: number | string, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the groups that can be given access to the room with the ID given in the route, and reports for each  of them whether it already has access to that room.  The caller has to be allowed to manage the access of that room, and the ID has to belong to an existing room,  so the operation answers 403 for a room the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the room yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/room/{id}/search`.
         * @summary Search groups for a room
         * @param {number} id The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage.
         * @param {boolean} [excludeShared] Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
         * @param {string} [filterValue] The text to match against the group name. Omit it to get every group the caller may grant access to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-rooms-shared/
         */
        getGroupsWithRoomsShared: async (id: number | string, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the groups that can be given access to the file with the ID given in the route, and reports for each  of them whether it already has access to that file.  The caller has to be allowed to manage the access of that file, and the ID has to belong to an existing file,  so the operation answers 403 for a file the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the file yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/file/{id}/search`.
         * @summary Search groups for a file
         * @param {number} id The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage.
         * @param {boolean} [excludeShared] Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
         * @param {string} [filterValue] The text to match against the group name. Omit it to get every group the caller may grant access to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-files-shared/
         */
        async getGroupsWithFilesShared(id: number | string, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsWithFilesShared(id, excludeShared, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchApi.getGroupsWithFilesShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the groups that can be given access to the folder with the ID given in the route, and reports for  each of them whether it already has access to that folder.  The caller has to be allowed to manage the access of that folder, and the ID has to belong to an existing  folder, so the operation answers 403 for a folder the caller cannot share and 404 for an ID that matches  nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the folder yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/folder/{id}/search`.
         * @summary Search groups for a folder
         * @param {number} id The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage.
         * @param {boolean} [excludeShared] Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
         * @param {string} [filterValue] The text to match against the group name. Omit it to get every group the caller may grant access to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-folders-shared/
         */
        async getGroupsWithFoldersShared(id: number | string, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsWithFoldersShared(id, excludeShared, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SearchApi.getGroupsWithFoldersShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the groups that can be given access to the room with the ID given in the route, and reports for each  of them whether it already has access to that room.  The caller has to be allowed to manage the access of that room, and the ID has to belong to an existing room,  so the operation answers 403 for a room the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the room yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/room/{id}/search`.
         * @summary Search groups for a room
         * @param {number} id The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage.
         * @param {boolean} [excludeShared] Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart.
         * @param {number} [count] The size of the page. It defaults to 100, which is also the largest value the operation accepts.
         * @param {number} [startIndex] The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
         * @param {string} [filterValue] The text to match against the group name. Omit it to get every group the caller may grant access to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-rooms-shared/
         */
        async getGroupsWithRoomsShared(id: number | string, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupArrayWrapper>> {
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
         * Returns the groups that can be given access to the file with the ID given in the route, and reports for each  of them whether it already has access to that file.  The caller has to be allowed to manage the access of that file, and the ID has to belong to an existing file,  so the operation answers 403 for a file the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the file yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/file/{id}/search`.
         * @summary Search groups for a file
         * @param {SearchApiGetGroupsWithFilesSharedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsWithFilesShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-files-shared/
         * @throws {RequiredError}
         */
        getGroupsWithFilesShared(requestParameters: SearchApiGetGroupsWithFilesSharedRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroupsWithFilesShared(requestParameters.id, requestParameters.excludeShared, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the groups that can be given access to the folder with the ID given in the route, and reports for  each of them whether it already has access to that folder.  The caller has to be allowed to manage the access of that folder, and the ID has to belong to an existing  folder, so the operation answers 403 for a folder the caller cannot share and 404 for an ID that matches  nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the folder yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/folder/{id}/search`.
         * @summary Search groups for a folder
         * @param {SearchApiGetGroupsWithFoldersSharedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsWithFoldersShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-folders-shared/
         * @throws {RequiredError}
         */
        getGroupsWithFoldersShared(requestParameters: SearchApiGetGroupsWithFoldersSharedRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroupsWithFoldersShared(requestParameters.id, requestParameters.excludeShared, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the groups that can be given access to the room with the ID given in the route, and reports for each  of them whether it already has access to that room.  The caller has to be allowed to manage the access of that room, and the ID has to belong to an existing room,  so the operation answers 403 for a room the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the room yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/room/{id}/search`.
         * @summary Search groups for a room
         * @param {SearchApiGetGroupsWithRoomsSharedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsWithRoomsShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-rooms-shared/
         * @throws {RequiredError}
         */
        getGroupsWithRoomsShared(requestParameters: SearchApiGetGroupsWithRoomsSharedRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroupsWithRoomsShared(requestParameters.id, requestParameters.excludeShared, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getGroupsWithFilesShared operation in SearchApi.
 * @export
 * @interface SearchApiGetGroupsWithFilesSharedRequest
 */
export interface SearchApiGetGroupsWithFilesSharedRequest {
    /**
     * The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage.
     * @type {number | string}
     * @memberof SearchApiGetGroupsWithFilesShared
     */
    readonly id: number | string

    /**
     * Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart.
     * @type {boolean}
     * @memberof SearchApiGetGroupsWithFilesShared
     */
    readonly excludeShared?: boolean

    /**
     * The size of the page. It defaults to 100, which is also the largest value the operation accepts.
     * @type {number}
     * @memberof SearchApiGetGroupsWithFilesShared
     */
    readonly count?: number

    /**
     * The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
     * @type {number}
     * @memberof SearchApiGetGroupsWithFilesShared
     */
    readonly startIndex?: number

    /**
     * The text to match against the group name. Omit it to get every group the caller may grant access to.
     * @type {string}
     * @memberof SearchApiGetGroupsWithFilesShared
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getGroupsWithFoldersShared operation in SearchApi.
 * @export
 * @interface SearchApiGetGroupsWithFoldersSharedRequest
 */
export interface SearchApiGetGroupsWithFoldersSharedRequest {
    /**
     * The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage.
     * @type {number | string}
     * @memberof SearchApiGetGroupsWithFoldersShared
     */
    readonly id: number | string

    /**
     * Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart.
     * @type {boolean}
     * @memberof SearchApiGetGroupsWithFoldersShared
     */
    readonly excludeShared?: boolean

    /**
     * The size of the page. It defaults to 100, which is also the largest value the operation accepts.
     * @type {number}
     * @memberof SearchApiGetGroupsWithFoldersShared
     */
    readonly count?: number

    /**
     * The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
     * @type {number}
     * @memberof SearchApiGetGroupsWithFoldersShared
     */
    readonly startIndex?: number

    /**
     * The text to match against the group name. Omit it to get every group the caller may grant access to.
     * @type {string}
     * @memberof SearchApiGetGroupsWithFoldersShared
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getGroupsWithRoomsShared operation in SearchApi.
 * @export
 * @interface SearchApiGetGroupsWithRoomsSharedRequest
 */
export interface SearchApiGetGroupsWithRoomsSharedRequest {
    /**
     * The ID of the room, folder or file whose access the search is run against, taken from the route. It is an  integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected  third-party storage.
     * @type {number | string}
     * @memberof SearchApiGetGroupsWithRoomsShared
     */
    readonly id: number | string

    /**
     * Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting  access. Every returned entry then has `shared` set to false; without the flag every matching group comes back  and `shared` tells them apart.
     * @type {boolean}
     * @memberof SearchApiGetGroupsWithRoomsShared
     */
    readonly excludeShared?: boolean

    /**
     * The size of the page. It defaults to 100, which is also the largest value the operation accepts.
     * @type {number}
     * @memberof SearchApiGetGroupsWithRoomsShared
     */
    readonly count?: number

    /**
     * The number of matching groups to skip before the page starts. It defaults to 0, and the total number of  matches is reported in the total count of the response.
     * @type {number}
     * @memberof SearchApiGetGroupsWithRoomsShared
     */
    readonly startIndex?: number

    /**
     * The text to match against the group name. Omit it to get every group the caller may grant access to.
     * @type {string}
     * @memberof SearchApiGetGroupsWithRoomsShared
     */
    readonly filterValue?: string
}

/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export class SearchApi extends BaseAPI {
    /**
     * Returns the groups that can be given access to the file with the ID given in the route, and reports for each  of them whether it already has access to that file.  The caller has to be allowed to manage the access of that file, and the ID has to belong to an existing file,  so the operation answers 403 for a file the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the file yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/file/{id}/search`.
     * @summary Search groups for a file
     * @param {GroupSearchApiGetGroupsWithFilesSharedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public getGroupsWithFilesShared(requestParameters: SearchApiGetGroupsWithFilesSharedRequest, options?: RawAxiosRequestConfig) {
        return SearchApiFp(this.configuration).getGroupsWithFilesShared(requestParameters.id, requestParameters.excludeShared, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the groups that can be given access to the folder with the ID given in the route, and reports for  each of them whether it already has access to that folder.  The caller has to be allowed to manage the access of that folder, and the ID has to belong to an existing  folder, so the operation answers 403 for a folder the caller cannot share and 404 for an ID that matches  nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the folder yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/folder/{id}/search`.
     * @summary Search groups for a folder
     * @param {GroupSearchApiGetGroupsWithFoldersSharedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public getGroupsWithFoldersShared(requestParameters: SearchApiGetGroupsWithFoldersSharedRequest, options?: RawAxiosRequestConfig) {
        return SearchApiFp(this.configuration).getGroupsWithFoldersShared(requestParameters.id, requestParameters.excludeShared, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the groups that can be given access to the room with the ID given in the route, and reports for each  of them whether it already has access to that room.  The caller has to be allowed to manage the access of that room, and the ID has to belong to an existing room,  so the operation answers 403 for a room the caller cannot share and 404 for an ID that matches nothing.  The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty  returns every group instead of nothing, and a value narrows the result by group name.  The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the  response.  Pass `excludeShared` to keep only the groups that have no access to the room yet, which is the set to offer  when adding new ones; without it every matching group comes back and `shared` tells them apart.  To search users and groups together, use `GET api/2.0/accounts/room/{id}/search`.
     * @summary Search groups for a room
     * @param {GroupSearchApiGetGroupsWithRoomsSharedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public getGroupsWithRoomsShared(requestParameters: SearchApiGetGroupsWithRoomsSharedRequest, options?: RawAxiosRequestConfig) {
        return SearchApiFp(this.configuration).getGroupsWithRoomsShared(requestParameters.id, requestParameters.excludeShared, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }
}

