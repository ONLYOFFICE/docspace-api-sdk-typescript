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
import type { TenantBannerSettingsDto } from '../../models';
// @ts-ignore
import type { TenantBannerSettingsWrapper } from '../../models';
/**
 * SecurityBannersVisibilityApi - axios parameter creator
 * @export
 */
export const SecurityBannersVisibilityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sets the promotional banners visibility settings settings for the portal.
         * @summary Set the promotional banners visibility settings
         * @param {TenantBannerSettingsDto} [tenantBannerSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantBannerSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-banner-settings/
         */
        setTenantBannerSettings: async (tenantBannerSettingsDto?: TenantBannerSettingsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/banner`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantBannerSettingsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SecurityBannersVisibilityApi - functional programming interface
 * @export
 */
export const SecurityBannersVisibilityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityBannersVisibilityApiAxiosParamCreator(configuration)
    return {
        /**
         * Sets the promotional banners visibility settings settings for the portal.
         * @summary Set the promotional banners visibility settings
         * @param {TenantBannerSettingsDto} [tenantBannerSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantBannerSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-banner-settings/
         */
        async setTenantBannerSettings(tenantBannerSettingsDto?: TenantBannerSettingsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantBannerSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setTenantBannerSettings(tenantBannerSettingsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityBannersVisibilityApi.setTenantBannerSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecurityBannersVisibilityApi - factory interface
 * @export
 */
export const SecurityBannersVisibilityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityBannersVisibilityApiFp(configuration)
    return {
        /**
         * Sets the promotional banners visibility settings settings for the portal.
         * @summary Set the promotional banners visibility settings
         * @param {TenantBannerSettingsDto} [tenantBannerSettingsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setTenantBannerSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-banner-settings/
         * @throws {RequiredError}
         */
        setTenantBannerSettings(tenantBannerSettingsDto?: TenantBannerSettingsDto, options?: RawAxiosRequestConfig): AxiosPromise<TenantBannerSettingsWrapper> {
            return localVarFp.setTenantBannerSettings(tenantBannerSettingsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SecurityBannersVisibilityApi - object-oriented interface
 * @export
 * @class SecurityBannersVisibilityApi
 * @extends {BaseAPI}
 */
export class SecurityBannersVisibilityApi extends BaseAPI {
    /**
     * Sets the promotional banners visibility settings settings for the portal.
     * @summary Set the promotional banners visibility settings
     * @param {TenantBannerSettingsDto} [tenantBannerSettingsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityBannersVisibilityApi
     */
    public setTenantBannerSettings(tenantBannerSettingsDto?: TenantBannerSettingsDto, options?: RawAxiosRequestConfig) {
        return SecurityBannersVisibilityApiFp(this.configuration).setTenantBannerSettings(tenantBannerSettingsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

