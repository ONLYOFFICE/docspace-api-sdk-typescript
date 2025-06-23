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
import type { TenantDevToolsAccessSettingsDto } from '../../models';
// @ts-ignore
import type { TenantDevToolsAccessSettingsWrapper } from '../../models';
/**
 * SecurityAccessToDevToolsApi - axios parameter creator
 * @export
 */
export const SecurityAccessToDevToolsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sets the Developer Tools access settings for the portal.
         * @summary Set the Developer Tools access settings
         * @param {TenantDevToolsAccessSettingsDto} [tenantDevToolsAccessSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantDevToolsAccessSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-dev-tools-access-settings/
         */
        setTenantDevToolsAccessSettings: async (tenantDevToolsAccessSettingsDto?: TenantDevToolsAccessSettingsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/devtoolsaccess`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantDevToolsAccessSettingsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SecurityAccessToDevToolsApi - functional programming interface
 * @export
 */
export const SecurityAccessToDevToolsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityAccessToDevToolsApiAxiosParamCreator(configuration)
    return {
        /**
         * Sets the Developer Tools access settings for the portal.
         * @summary Set the Developer Tools access settings
         * @param {TenantDevToolsAccessSettingsDto} [tenantDevToolsAccessSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTenantDevToolsAccessSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-dev-tools-access-settings/
         */
        async setTenantDevToolsAccessSettings(tenantDevToolsAccessSettingsDto?: TenantDevToolsAccessSettingsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantDevToolsAccessSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setTenantDevToolsAccessSettings(tenantDevToolsAccessSettingsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityAccessToDevToolsApi.setTenantDevToolsAccessSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecurityAccessToDevToolsApi - factory interface
 * @export
 */
export const SecurityAccessToDevToolsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityAccessToDevToolsApiFp(configuration)
    return {
        /**
         * Sets the Developer Tools access settings for the portal.
         * @summary Set the Developer Tools access settings
         * @param {TenantDevToolsAccessSettingsDto} [tenantDevToolsAccessSettingsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setTenantDevToolsAccessSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tenant-dev-tools-access-settings/
         * @throws {RequiredError}
         */
        setTenantDevToolsAccessSettings(tenantDevToolsAccessSettingsDto?: TenantDevToolsAccessSettingsDto, options?: RawAxiosRequestConfig): AxiosPromise<TenantDevToolsAccessSettingsWrapper> {
            return localVarFp.setTenantDevToolsAccessSettings(tenantDevToolsAccessSettingsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SecurityAccessToDevToolsApi - object-oriented interface
 * @export
 * @class SecurityAccessToDevToolsApi
 * @extends {BaseAPI}
 */
export class SecurityAccessToDevToolsApi extends BaseAPI {
    /**
     * Sets the Developer Tools access settings for the portal.
     * @summary Set the Developer Tools access settings
     * @param {TenantDevToolsAccessSettingsDto} [tenantDevToolsAccessSettingsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityAccessToDevToolsApi
     */
    public setTenantDevToolsAccessSettings(tenantDevToolsAccessSettingsDto?: TenantDevToolsAccessSettingsDto, options?: RawAxiosRequestConfig) {
        return SecurityAccessToDevToolsApiFp(this.configuration).setTenantDevToolsAccessSettings(tenantDevToolsAccessSettingsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

