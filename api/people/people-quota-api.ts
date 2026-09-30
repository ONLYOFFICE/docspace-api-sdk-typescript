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
import type { EmployeeFullArrayWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { UpdateMembersQuotaRequestDto } from '../../models';
/**
 * PeopleQuotaApi - axios parameter creator
 * @export
 */
export const PeopleQuotaApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Drops the personal storage limit of the listed accounts, so that each of them follows the portal default  again.  The caller needs the permission to edit the portal settings, which in practice means a DocSpace  administrator or the portal owner.  On a hosted portal the tariff has to include the storage statistics feature, otherwise the operation answers  402; a standalone installation has no such condition.  It takes only `userIds` - the `quota` field of the request body is not read here - and system accounts are  dropped from the list without an error.  The accounts are processed one by one and the answer holds the ones that were reached, each already showing  the portal default as its limit.  Nothing is deleted and no space is freed; only the limit that applies changes.  Use `PUT api/2.0/people/userquota` to give an account its own limit instead.
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
         * Gives the listed accounts their own storage limit, replacing the portal default for each of them.  The caller needs the permission to edit the portal settings, which in practice means a DocSpace  administrator or the portal owner.  `quota` is a whole number of bytes: a value of 0 or more becomes the personal limit, while any negative value  switches the personal limit off and hands the account back to the portal default.  The value has to fit the portal: a limit larger than the total storage the tariff allows, or larger than the  portal-wide quota on a standalone installation, is rejected with 400, and so is a value that is not a whole  number.  System accounts are dropped from the list without an error, the accounts are processed one by one, and the  answer holds the ones that were reached.  Setting a limit does not free any space and does not delete anything: an account already over its new limit  simply cannot add more.  Use `PUT api/2.0/people/resetquota` to return accounts to the portal default.
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
         * Drops the personal storage limit of the listed accounts, so that each of them follows the portal default  again.  The caller needs the permission to edit the portal settings, which in practice means a DocSpace  administrator or the portal owner.  On a hosted portal the tariff has to include the storage statistics feature, otherwise the operation answers  402; a standalone installation has no such condition.  It takes only `userIds` - the `quota` field of the request body is not read here - and system accounts are  dropped from the list without an error.  The accounts are processed one by one and the answer holds the ones that were reached, each already showing  the portal default as its limit.  Nothing is deleted and no space is freed; only the limit that applies changes.  Use `PUT api/2.0/people/userquota` to give an account its own limit instead.
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
         * Gives the listed accounts their own storage limit, replacing the portal default for each of them.  The caller needs the permission to edit the portal settings, which in practice means a DocSpace  administrator or the portal owner.  `quota` is a whole number of bytes: a value of 0 or more becomes the personal limit, while any negative value  switches the personal limit off and hands the account back to the portal default.  The value has to fit the portal: a limit larger than the total storage the tariff allows, or larger than the  portal-wide quota on a standalone installation, is rejected with 400, and so is a value that is not a whole  number.  System accounts are dropped from the list without an error, the accounts are processed one by one, and the  answer holds the ones that were reached.  Setting a limit does not free any space and does not delete anything: an account already over its new limit  simply cannot add more.  Use `PUT api/2.0/people/resetquota` to return accounts to the portal default.
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
         * Drops the personal storage limit of the listed accounts, so that each of them follows the portal default  again.  The caller needs the permission to edit the portal settings, which in practice means a DocSpace  administrator or the portal owner.  On a hosted portal the tariff has to include the storage statistics feature, otherwise the operation answers  402; a standalone installation has no such condition.  It takes only `userIds` - the `quota` field of the request body is not read here - and system accounts are  dropped from the list without an error.  The accounts are processed one by one and the answer holds the ones that were reached, each already showing  the portal default as its limit.  Nothing is deleted and no space is freed; only the limit that applies changes.  Use `PUT api/2.0/people/userquota` to give an account its own limit instead.
         * @summary Reset a user quota limit
         * @param {PeopleQuotaApiResetUsersQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for resetUsersQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-users-quota/
         * @throws {RequiredError}
         */
        resetUsersQuota(requestParameters: PeopleQuotaApiResetUsersQuotaRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.resetUsersQuota(requestParameters.updateMembersQuotaRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Gives the listed accounts their own storage limit, replacing the portal default for each of them.  The caller needs the permission to edit the portal settings, which in practice means a DocSpace  administrator or the portal owner.  `quota` is a whole number of bytes: a value of 0 or more becomes the personal limit, while any negative value  switches the personal limit off and hands the account back to the portal default.  The value has to fit the portal: a limit larger than the total storage the tariff allows, or larger than the  portal-wide quota on a standalone installation, is rejected with 400, and so is a value that is not a whole  number.  System accounts are dropped from the list without an error, the accounts are processed one by one, and the  answer holds the ones that were reached.  Setting a limit does not free any space and does not delete anything: an account already over its new limit  simply cannot add more.  Use `PUT api/2.0/people/resetquota` to return accounts to the portal default.
         * @summary Change a user quota limit
         * @param {PeopleQuotaApiUpdateUserQuotaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateUserQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-quota/
         * @throws {RequiredError}
         */
        updateUserQuota(requestParameters: PeopleQuotaApiUpdateUserQuotaRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.updateUserQuota(requestParameters.updateMembersQuotaRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for resetUsersQuota operation in PeopleQuotaApi.
 * @export
 * @interface PeopleQuotaApiResetUsersQuotaRequest
 */
export interface PeopleQuotaApiResetUsersQuotaRequest {
    /**
     * 
     * @type {UpdateMembersQuotaRequestDto}
     * @memberof PeopleQuotaApiResetUsersQuota
     */
    readonly updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto
}

/**
 * Request parameters for updateUserQuota operation in PeopleQuotaApi.
 * @export
 * @interface PeopleQuotaApiUpdateUserQuotaRequest
 */
export interface PeopleQuotaApiUpdateUserQuotaRequest {
    /**
     * 
     * @type {UpdateMembersQuotaRequestDto}
     * @memberof PeopleQuotaApiUpdateUserQuota
     */
    readonly updateMembersQuotaRequestDto?: UpdateMembersQuotaRequestDto
}

/**
 * PeopleQuotaApi - object-oriented interface
 * @export
 * @class PeopleQuotaApi
 * @extends {BaseAPI}
 */
export class PeopleQuotaApi extends BaseAPI {
    /**
     * Drops the personal storage limit of the listed accounts, so that each of them follows the portal default  again.  The caller needs the permission to edit the portal settings, which in practice means a DocSpace  administrator or the portal owner.  On a hosted portal the tariff has to include the storage statistics feature, otherwise the operation answers  402; a standalone installation has no such condition.  It takes only `userIds` - the `quota` field of the request body is not read here - and system accounts are  dropped from the list without an error.  The accounts are processed one by one and the answer holds the ones that were reached, each already showing  the portal default as its limit.  Nothing is deleted and no space is freed; only the limit that applies changes.  Use `PUT api/2.0/people/userquota` to give an account its own limit instead.
     * @summary Reset a user quota limit
     * @param {PeopleQuotaApiResetUsersQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleQuotaApi
     */
    public resetUsersQuota(requestParameters: PeopleQuotaApiResetUsersQuotaRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleQuotaApiFp(this.configuration).resetUsersQuota(requestParameters.updateMembersQuotaRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gives the listed accounts their own storage limit, replacing the portal default for each of them.  The caller needs the permission to edit the portal settings, which in practice means a DocSpace  administrator or the portal owner.  `quota` is a whole number of bytes: a value of 0 or more becomes the personal limit, while any negative value  switches the personal limit off and hands the account back to the portal default.  The value has to fit the portal: a limit larger than the total storage the tariff allows, or larger than the  portal-wide quota on a standalone installation, is rejected with 400, and so is a value that is not a whole  number.  System accounts are dropped from the list without an error, the accounts are processed one by one, and the  answer holds the ones that were reached.  Setting a limit does not free any space and does not delete anything: an account already over its new limit  simply cannot add more.  Use `PUT api/2.0/people/resetquota` to return accounts to the portal default.
     * @summary Change a user quota limit
     * @param {PeopleQuotaApiUpdateUserQuotaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleQuotaApi
     */
    public updateUserQuota(requestParameters: PeopleQuotaApiUpdateUserQuotaRequest = {}, options?: RawAxiosRequestConfig) {
        return PeopleQuotaApiFp(this.configuration).updateUserQuota(requestParameters.updateMembersQuotaRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

