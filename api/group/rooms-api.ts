// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

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
 * GroupRoomsApi - axios parameter creator
 * @export
 */
export const GroupRoomsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns groups with their sharing settings.
         * @summary Get groups with sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-shared/
         */
        getGroupsWithShared: async (id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getGroupsWithShared', 'id', id)
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
 * GroupRoomsApi - functional programming interface
 * @export
 */
export const GroupRoomsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupRoomsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns groups with their sharing settings.
         * @summary Get groups with sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsWithShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-shared/
         */
        async getGroupsWithShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsWithShared(id, excludeShared, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GroupRoomsApi.getGroupsWithShared']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * GroupRoomsApi - factory interface
 * @export
 */
export const GroupRoomsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupRoomsApiFp(configuration)
    return {
        /**
         * Returns groups with their sharing settings.
         * @summary Get groups with sharing settings
         * @param {number} id The group ID.
         * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
         * @param {number} [count] The number of groups to retrieve in the request.
         * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
         * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsWithShared operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-with-shared/
         * @throws {RequiredError}
         */
        getGroupsWithShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<GroupArrayWrapper> {
            return localVarFp.getGroupsWithShared(id, excludeShared, count, startIndex, filterValue, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupRoomsApi - object-oriented interface
 * @export
 * @class GroupRoomsApi
 * @extends {BaseAPI}
 */
export class GroupRoomsApi extends BaseAPI {
    /**
     * Returns groups with their sharing settings.
     * @summary Get groups with sharing settings
     * @param {number} id The group ID.
     * @param {boolean} [excludeShared] Specifies whether to exclude the group sharing settings from the response.
     * @param {number} [count] The number of groups to retrieve in the request.
     * @param {number} [startIndex] The starting index from which to begin retrieving groups with their sharing settings.
     * @param {string} [filterValue] The text used as a filter for retrieving groups with their sharing settings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupRoomsApi
     */
    public getGroupsWithShared(id: number, excludeShared?: boolean, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig) {
        return GroupRoomsApiFp(this.configuration).getGroupsWithShared(id, excludeShared, count, startIndex, filterValue, options).then((request) => request(this.axios, this.basePath));
    }
}

