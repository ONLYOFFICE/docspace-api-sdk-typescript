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
import type { OwnerChangeInstructionsWrapper } from '../../models';
// @ts-ignore
import type { OwnerIdSettingsRequestDto } from '../../models';
/**
 * SettingsOwnerApi - axios parameter creator
 * @export
 */
export const SettingsOwnerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sends the instructions to change the DocSpace owner.
         * @summary Send the owner change instructions
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendOwnerChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-owner-change-instructions/
         */
        sendOwnerChangeInstructions: async (ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/owner`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ownerIdSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the current portal owner with a new one specified in the request.
         * @summary Update the portal owner
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePortalOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-portal-owner/
         */
        updatePortalOwner: async (ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/owner`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ownerIdSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsOwnerApi - functional programming interface
 * @export
 */
export const SettingsOwnerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsOwnerApiAxiosParamCreator(configuration)
    return {
        /**
         * Sends the instructions to change the DocSpace owner.
         * @summary Send the owner change instructions
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendOwnerChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-owner-change-instructions/
         */
        async sendOwnerChangeInstructions(ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OwnerChangeInstructionsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendOwnerChangeInstructions(ownerIdSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsOwnerApi.sendOwnerChangeInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the current portal owner with a new one specified in the request.
         * @summary Update the portal owner
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePortalOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-portal-owner/
         */
        async updatePortalOwner(ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePortalOwner(ownerIdSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsOwnerApi.updatePortalOwner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsOwnerApi - factory interface
 * @export
 */
export const SettingsOwnerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsOwnerApiFp(configuration)
    return {
        /**
         * Sends the instructions to change the DocSpace owner.
         * @summary Send the owner change instructions
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for sendOwnerChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-owner-change-instructions/
         * @throws {RequiredError}
         */
        sendOwnerChangeInstructions(ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<OwnerChangeInstructionsWrapper> {
            return localVarFp.sendOwnerChangeInstructions(ownerIdSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the current portal owner with a new one specified in the request.
         * @summary Update the portal owner
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updatePortalOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-portal-owner/
         * @throws {RequiredError}
         */
        updatePortalOwner(ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updatePortalOwner(ownerIdSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsOwnerApi - object-oriented interface
 * @export
 * @class SettingsOwnerApi
 * @extends {BaseAPI}
 */
export class SettingsOwnerApi extends BaseAPI {
    /**
     * Sends the instructions to change the DocSpace owner.
     * @summary Send the owner change instructions
     * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsOwnerApi
     */
    public sendOwnerChangeInstructions(ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options?: RawAxiosRequestConfig) {
        return SettingsOwnerApiFp(this.configuration).sendOwnerChangeInstructions(ownerIdSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the current portal owner with a new one specified in the request.
     * @summary Update the portal owner
     * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsOwnerApi
     */
    public updatePortalOwner(ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options?: RawAxiosRequestConfig) {
        return SettingsOwnerApiFp(this.configuration).updatePortalOwner(ownerIdSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

