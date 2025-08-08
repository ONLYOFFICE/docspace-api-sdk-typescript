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
import type { EmailMemberRequestDto } from '../../models';
// @ts-ignore
import type { EmployeeFullWrapper } from '../../models';
// @ts-ignore
import type { UpdateMembersRequestDto } from '../../models';
/**
 * GuestsApi - axios parameter creator
 * @export
 */
export const GuestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Approves a guest sharing link and returns the detailed information about a guest.
         * @summary Approve a guest sharing link
         * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for approveGuestShareLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/approve-guest-share-link/
         */
        approveGuestShareLink: async (emailMemberRequestDto?: EmailMemberRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/guests/share/approve`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(emailMemberRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes guests from the list and excludes them from rooms to which they were invited.
         * @summary Delete guests
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteGuests operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-guests/
         */
        deleteGuests: async (updateMembersRequestDto?: UpdateMembersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/guests`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateMembersRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GuestsApi - functional programming interface
 * @export
 */
export const GuestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GuestsApiAxiosParamCreator(configuration)
    return {
        /**
         * Approves a guest sharing link and returns the detailed information about a guest.
         * @summary Approve a guest sharing link
         * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for approveGuestShareLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/approve-guest-share-link/
         */
        async approveGuestShareLink(emailMemberRequestDto?: EmailMemberRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.approveGuestShareLink(emailMemberRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GuestsApi.approveGuestShareLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes guests from the list and excludes them from rooms to which they were invited.
         * @summary Delete guests
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteGuests operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-guests/
         */
        async deleteGuests(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteGuests(updateMembersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GuestsApi.deleteGuests']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * GuestsApi - factory interface
 * @export
 */
export const GuestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GuestsApiFp(configuration)
    return {
        /**
         * Approves a guest sharing link and returns the detailed information about a guest.
         * @summary Approve a guest sharing link
         * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for approveGuestShareLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/approve-guest-share-link/
         * @throws {RequiredError}
         */
        approveGuestShareLink(emailMemberRequestDto?: EmailMemberRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.approveGuestShareLink(emailMemberRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes guests from the list and excludes them from rooms to which they were invited.
         * @summary Delete guests
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteGuests operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-guests/
         * @throws {RequiredError}
         */
        deleteGuests(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteGuests(updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GuestsApi - object-oriented interface
 * @export
 * @class GuestsApi
 * @extends {BaseAPI}
 */
export class GuestsApi extends BaseAPI {
    /**
     * Approves a guest sharing link and returns the detailed information about a guest.
     * @summary Approve a guest sharing link
     * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuestsApi
     */
    public approveGuestShareLink(emailMemberRequestDto?: EmailMemberRequestDto, options?: RawAxiosRequestConfig) {
        return GuestsApiFp(this.configuration).approveGuestShareLink(emailMemberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes guests from the list and excludes them from rooms to which they were invited.
     * @summary Delete guests
     * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuestsApi
     */
    public deleteGuests(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig) {
        return GuestsApiFp(this.configuration).deleteGuests(updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

