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
import type { EmployeeFullArrayWrapper } from '../../models';
// @ts-ignore
import type { UpdateMembersQuotaRequestDto } from '../../models';
/**
 * PeopleQuotaApi - axios parameter creator
 * @export
 */
export const PeopleQuotaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Resets a quota limit of users with the IDs specified in the request.
         * @summary Reset a user quota limit
         * @param {UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetUsersQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-users-quota/
         */
        resetUsersQuota: async (updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/resetquota`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMembersQuotaRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes a quota limit for the users with the IDs specified in the request.
         * @summary Change a user quota limit
         * @param {UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-quota/
         */
        updateUserQuota: async (updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/userquota`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMembersQuotaRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PeopleQuotaApi - functional programming interface
 * @export
 */
export const PeopleQuotaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeopleQuotaApiAxiosParamCreator(configuration)
    return {
        /**
         * Resets a quota limit of users with the IDs specified in the request.
         * @summary Reset a user quota limit
         * @param {UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetUsersQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-users-quota/
         */
        async resetUsersQuota(updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetUsersQuota(updateMembersQuotaRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleQuotaApi.resetUsersQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes a quota limit for the users with the IDs specified in the request.
         * @summary Change a user quota limit
         * @param {UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-quota/
         */
        async updateUserQuota(updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserQuota(updateMembersQuotaRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleQuotaApi.updateUserQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PeopleQuotaApi - factory interface
 * @export
 */
export const PeopleQuotaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeopleQuotaApiFp(configuration)
    return {
        /**
         * Resets a quota limit of users with the IDs specified in the request.
         * @summary Reset a user quota limit
         * @param {UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for resetUsersQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-users-quota/
         * @throws {RequiredError}
         */
        resetUsersQuota(updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.resetUsersQuota(updateMembersQuotaRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes a quota limit for the users with the IDs specified in the request.
         * @summary Change a user quota limit
         * @param {UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateUserQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-quota/
         * @throws {RequiredError}
         */
        updateUserQuota(updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.updateUserQuota(updateMembersQuotaRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PeopleQuotaApi - object-oriented interface
 * @export
 * @class PeopleQuotaApi
 * @extends {BaseAPI}
 */
export class PeopleQuotaApi extends BaseAPI {
    /**
     * Resets a quota limit of users with the IDs specified in the request.
     * @summary Reset a user quota limit
     * @param {UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleQuotaApi
     */
    public resetUsersQuota(updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto, options?: RawAxiosRequestConfig) {
        return PeopleQuotaApiFp(this.configuration).resetUsersQuota(updateMembersQuotaRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes a quota limit for the users with the IDs specified in the request.
     * @summary Change a user quota limit
     * @param {UpdateMembersQuotaRequestDto} [updateMembersQuotaRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleQuotaApi
     */
    public updateUserQuota(updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto, options?: RawAxiosRequestConfig) {
        return PeopleQuotaApiFp(this.configuration).updateUserQuota(updateMembersQuotaRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

