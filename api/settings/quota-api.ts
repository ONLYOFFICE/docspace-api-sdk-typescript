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
import type { QuotaSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { TenantQuotaSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { TenantQuotaSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantRoomQuotaSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantUserQuotaSettingsWrapper } from '../../models';
/**
 * SettingsQuotaApi - axios parameter creator
 * @export
 */
export const SettingsQuotaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the user quota settings.
         * @summary Get the user quota settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-quota-settings/
         */
        getUserQuotaSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/userquotasettings`;
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
         * Saves the room quota settings specified in the request to the current portal.
         * @summary Save the room quota settings
         * @param {QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveRoomQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-room-quota-settings/
         */
        saveRoomQuotaSettings: async (quotaSettingsRequestsDto?: QuotaSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/roomquotasettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(quotaSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the tenant quota settings specified in the request to the current portal.
         * @summary Save the tenant quota settings
         * @param {TenantQuotaSettingsRequestsDto} [tenantQuotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-quota-settings/
         */
        setTenantQuotaSettings: async (tenantQuotaSettingsRequestsDto?: TenantQuotaSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tenantquotasettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantQuotaSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsQuotaApi - functional programming interface
 * @export
 */
export const SettingsQuotaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsQuotaApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the user quota settings.
         * @summary Get the user quota settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-quota-settings/
         */
        async getUserQuotaSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantUserQuotaSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserQuotaSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsQuotaApi.getUserQuotaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the room quota settings specified in the request to the current portal.
         * @summary Save the room quota settings
         * @param {QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveRoomQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-room-quota-settings/
         */
        async saveRoomQuotaSettings(quotaSettingsRequestsDto?: QuotaSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantRoomQuotaSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveRoomQuotaSettings(quotaSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsQuotaApi.saveRoomQuotaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the tenant quota settings specified in the request to the current portal.
         * @summary Save the tenant quota settings
         * @param {TenantQuotaSettingsRequestsDto} [tenantQuotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-quota-settings/
         */
        async setTenantQuotaSettings(tenantQuotaSettingsRequestsDto?: TenantQuotaSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantQuotaSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setTenantQuotaSettings(tenantQuotaSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsQuotaApi.setTenantQuotaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsQuotaApi - factory interface
 * @export
 */
export const SettingsQuotaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsQuotaApiFp(configuration)
    return {
        /**
         * Returns the user quota settings.
         * @summary Get the user quota settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-quota-settings/
         * @throws {RequiredError}
         */
        getUserQuotaSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantUserQuotaSettingsWrapper> {
            return localVarFp.getUserQuotaSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the room quota settings specified in the request to the current portal.
         * @summary Save the room quota settings
         * @param {QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveRoomQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-room-quota-settings/
         * @throws {RequiredError}
         */
        saveRoomQuotaSettings(quotaSettingsRequestsDto?: QuotaSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<TenantRoomQuotaSettingsWrapper> {
            return localVarFp.saveRoomQuotaSettings(quotaSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the tenant quota settings specified in the request to the current portal.
         * @summary Save the tenant quota settings
         * @param {TenantQuotaSettingsRequestsDto} [tenantQuotaSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setTenantQuotaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-quota-settings/
         * @throws {RequiredError}
         */
        setTenantQuotaSettings(tenantQuotaSettingsRequestsDto?: TenantQuotaSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<TenantQuotaSettingsWrapper> {
            return localVarFp.setTenantQuotaSettings(tenantQuotaSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsQuotaApi - object-oriented interface
 * @export
 * @class SettingsQuotaApi
 * @extends {BaseAPI}
 */
export class SettingsQuotaApi extends BaseAPI {
    /**
     * Returns the user quota settings.
     * @summary Get the user quota settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsQuotaApi
     */
    public getUserQuotaSettings(options?: RawAxiosRequestConfig) {
        return SettingsQuotaApiFp(this.configuration).getUserQuotaSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the room quota settings specified in the request to the current portal.
     * @summary Save the room quota settings
     * @param {QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsQuotaApi
     */
    public saveRoomQuotaSettings(quotaSettingsRequestsDto?: QuotaSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsQuotaApiFp(this.configuration).saveRoomQuotaSettings(quotaSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the tenant quota settings specified in the request to the current portal.
     * @summary Save the tenant quota settings
     * @param {TenantQuotaSettingsRequestsDto} [tenantQuotaSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsQuotaApi
     */
    public setTenantQuotaSettings(tenantQuotaSettingsRequestsDto?: TenantQuotaSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsQuotaApiFp(this.configuration).setTenantQuotaSettings(tenantQuotaSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

