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
import type { TenantBannerSettingsWrapper } from '../../models';
/**
 * BannersVisibilityApi - axios parameter creator
 * @export
 */
export const BannersVisibilityApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Returns the visibility settings of the promotional banners in the portal.
         * @summary Get the banners visibility
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantBannerSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-banner-settings/
         */
        getTenantBannerSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/banner`;
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
 * BannersVisibilityApi - functional programming interface
 * @export
 */
export const BannersVisibilityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BannersVisibilityApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the visibility settings of the promotional banners in the portal.
         * @summary Get the banners visibility
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantBannerSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-banner-settings/
         */
        async getTenantBannerSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantBannerSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantBannerSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BannersVisibilityApi.getTenantBannerSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BannersVisibilityApi - factory interface
 * @export
 */
export const BannersVisibilityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BannersVisibilityApiFp(configuration)
    return {
        /**
         * Returns the visibility settings of the promotional banners in the portal.
         * @summary Get the banners visibility
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantBannerSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-banner-settings/
         * @throws {RequiredError}
         */
        getTenantBannerSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantBannerSettingsWrapper> {
            return localVarFp.getTenantBannerSettings(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BannersVisibilityApi - object-oriented interface
 * @export
 * @class BannersVisibilityApi
 * @extends {BaseAPI}
 */
export class BannersVisibilityApi extends BaseAPI {
    /**
     * Returns the visibility settings of the promotional banners in the portal.
     * @summary Get the banners visibility
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BannersVisibilityApi
     */
    public getTenantBannerSettings(options?: RawAxiosRequestConfig) {
        return BannersVisibilityApiFp(this.configuration).getTenantBannerSettings(options).then((request) => request(this.axios, this.basePath));
    }
}

