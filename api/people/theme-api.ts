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
import type { DarkThemeSettingsRequestDto } from '../../models';
// @ts-ignore
import type { DarkThemeSettingsWrapper } from '../../models';
/**
 * PeopleThemeApi - axios parameter creator
 * @export
 */
export const PeopleThemeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Changes the current portal theme.
         * @summary Change the portal theme
         * @param {DarkThemeSettingsRequestDto} [darkThemeSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changePortalTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-portal-theme/
         */
        changePortalTheme: async (darkThemeSettingsRequestDto?: DarkThemeSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/theme`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(darkThemeSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a theme which is set to the current portal.
         * @summary Get the portal theme
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-theme/
         */
        getPortalTheme: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/theme`;
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
 * PeopleThemeApi - functional programming interface
 * @export
 */
export const PeopleThemeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeopleThemeApiAxiosParamCreator(configuration)
    return {
        /**
         * Changes the current portal theme.
         * @summary Change the portal theme
         * @param {DarkThemeSettingsRequestDto} [darkThemeSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changePortalTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-portal-theme/
         */
        async changePortalTheme(darkThemeSettingsRequestDto?: DarkThemeSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DarkThemeSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changePortalTheme(darkThemeSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThemeApi.changePortalTheme']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a theme which is set to the current portal.
         * @summary Get the portal theme
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-theme/
         */
        async getPortalTheme(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DarkThemeSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalTheme(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThemeApi.getPortalTheme']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PeopleThemeApi - factory interface
 * @export
 */
export const PeopleThemeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeopleThemeApiFp(configuration)
    return {
        /**
         * Changes the current portal theme.
         * @summary Change the portal theme
         * @param {DarkThemeSettingsRequestDto} [darkThemeSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for changePortalTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-portal-theme/
         * @throws {RequiredError}
         */
        changePortalTheme(darkThemeSettingsRequestDto?: DarkThemeSettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<DarkThemeSettingsWrapper> {
            return localVarFp.changePortalTheme(darkThemeSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a theme which is set to the current portal.
         * @summary Get the portal theme
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-theme/
         * @throws {RequiredError}
         */
        getPortalTheme(options?: RawAxiosRequestConfig): AxiosPromise<DarkThemeSettingsWrapper> {
            return localVarFp.getPortalTheme(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PeopleThemeApi - object-oriented interface
 * @export
 * @class PeopleThemeApi
 * @extends {BaseAPI}
 */
export class PeopleThemeApi extends BaseAPI {
    /**
     * Changes the current portal theme.
     * @summary Change the portal theme
     * @param {DarkThemeSettingsRequestDto} [darkThemeSettingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThemeApi
     */
    public changePortalTheme(darkThemeSettingsRequestDto?: DarkThemeSettingsRequestDto, options?: RawAxiosRequestConfig) {
        return PeopleThemeApiFp(this.configuration).changePortalTheme(darkThemeSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a theme which is set to the current portal.
     * @summary Get the portal theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThemeApi
     */
    public getPortalTheme(options?: RawAxiosRequestConfig) {
        return PeopleThemeApiFp(this.configuration).getPortalTheme(options).then((request) => request(this.axios, this.basePath));
    }
}

