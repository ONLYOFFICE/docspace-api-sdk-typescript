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
import type { DoubleWrapper } from '../../models';
// @ts-ignore
import type { TariffWrapper } from '../../models';
// @ts-ignore
import type { TenantQuotaWrapper } from '../../models';
/**
 * PortalQuotaApi - axios parameter creator
 * @export
 */
export const PortalQuotaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the current portal quota.
         * @summary Get a portal quota
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-quota/
         */
        getPortalQuota: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/quota`;
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
        /**
         * Returns the current portal tariff.
         * @summary Get a portal tariff
         * @param {boolean} [refresh] The value indicating whether the current portal tariff information should be refreshed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalTariff operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-tariff/
         */
        getPortalTariff: async (refresh?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/tariff`;
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

            if (refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
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
         * Returns the used space of the current portal.
         * @summary Get the portal used space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-used-space/
         */
        getPortalUsedSpace: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/usedspace`;
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
        /**
         * Returns the recommended quota for the current portal.
         * @summary Get the recommended quota
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRightQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-right-quota/
         */
        getRightQuota: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/quota/right`;
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
 * PortalQuotaApi - functional programming interface
 * @export
 */
export const PortalQuotaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PortalQuotaApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the current portal quota.
         * @summary Get a portal quota
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-quota/
         */
        async getPortalQuota(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantQuotaWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalQuota(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalQuotaApi.getPortalQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current portal tariff.
         * @summary Get a portal tariff
         * @param {boolean} [refresh] The value indicating whether the current portal tariff information should be refreshed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalTariff operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-tariff/
         */
        async getPortalTariff(refresh?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TariffWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalTariff(refresh, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalQuotaApi.getPortalTariff']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the used space of the current portal.
         * @summary Get the portal used space
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-used-space/
         */
        async getPortalUsedSpace(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DoubleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalUsedSpace(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalQuotaApi.getPortalUsedSpace']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the recommended quota for the current portal.
         * @summary Get the recommended quota
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRightQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-right-quota/
         */
        async getRightQuota(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantQuotaWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRightQuota(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalQuotaApi.getRightQuota']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PortalQuotaApi - factory interface
 * @export
 */
export const PortalQuotaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PortalQuotaApiFp(configuration)
    return {
        /**
         * Returns the current portal quota.
         * @summary Get a portal quota
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-quota/
         * @throws {RequiredError}
         */
        getPortalQuota(options?: RawAxiosRequestConfig): AxiosPromise<TenantQuotaWrapper> {
            return localVarFp.getPortalQuota(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current portal tariff.
         * @summary Get a portal tariff
         * @param {boolean} [refresh] The value indicating whether the current portal tariff information should be refreshed.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalTariff operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-tariff/
         * @throws {RequiredError}
         */
        getPortalTariff(refresh?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<TariffWrapper> {
            return localVarFp.getPortalTariff(refresh, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the used space of the current portal.
         * @summary Get the portal used space
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalUsedSpace operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-used-space/
         * @throws {RequiredError}
         */
        getPortalUsedSpace(options?: RawAxiosRequestConfig): AxiosPromise<DoubleWrapper> {
            return localVarFp.getPortalUsedSpace(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the recommended quota for the current portal.
         * @summary Get the recommended quota
         * @param {*} [options] Override http request option.
         * REST API Reference for getRightQuota operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-right-quota/
         * @throws {RequiredError}
         */
        getRightQuota(options?: RawAxiosRequestConfig): AxiosPromise<TenantQuotaWrapper> {
            return localVarFp.getRightQuota(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PortalQuotaApi - object-oriented interface
 * @export
 * @class PortalQuotaApi
 * @extends {BaseAPI}
 */
export class PortalQuotaApi extends BaseAPI {
    /**
     * Returns the current portal quota.
     * @summary Get a portal quota
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalQuotaApi
     */
    public getPortalQuota(options?: RawAxiosRequestConfig) {
        return PortalQuotaApiFp(this.configuration).getPortalQuota(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current portal tariff.
     * @summary Get a portal tariff
     * @param {boolean} [refresh] The value indicating whether the current portal tariff information should be refreshed.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalQuotaApi
     */
    public getPortalTariff(refresh?: boolean, options?: RawAxiosRequestConfig) {
        return PortalQuotaApiFp(this.configuration).getPortalTariff(refresh, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the used space of the current portal.
     * @summary Get the portal used space
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalQuotaApi
     */
    public getPortalUsedSpace(options?: RawAxiosRequestConfig) {
        return PortalQuotaApiFp(this.configuration).getPortalUsedSpace(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the recommended quota for the current portal.
     * @summary Get the recommended quota
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalQuotaApi
     */
    public getRightQuota(options?: RawAxiosRequestConfig) {
        return PortalQuotaApiFp(this.configuration).getRightQuota(options).then((request) => request(this.axios, this.basePath));
    }
}

