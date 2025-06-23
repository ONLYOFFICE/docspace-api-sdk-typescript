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
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { SsoSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { SsoSettingsV2Wrapper } from '../../models';
/**
 * SettingsSSOApi - axios parameter creator
 * @export
 */
export const SettingsSSOApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the default portal SSO settings.
         * @summary Get the default SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-sso-settings-v2/
         */
        getDefaultSsoSettingsV2: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2/default`;
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
         * Returns the current portal SSO settings.
         * @summary Get the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2/
         */
        getSsoSettingsV2: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the SSO settings constants.
         * @summary Get the SSO settings constants
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2Constants operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2-constants/
         */
        getSsoSettingsV2Constants: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2/constants`;
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
         * Resets the SSO settings of the current portal.
         * @summary Reset the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-sso-settings-v2/
         */
        resetSsoSettingsV2: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the SSO settings for the current portal.
         * @summary Save the SSO settings
         * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-sso-settings-v2/
         */
        saveSsoSettingsV2: async (ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/ssov2`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ssoSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsSSOApi - functional programming interface
 * @export
 */
export const SettingsSSOApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsSSOApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the default portal SSO settings.
         * @summary Get the default SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-sso-settings-v2/
         */
        async getDefaultSsoSettingsV2(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultSsoSettingsV2(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSSOApi.getDefaultSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current portal SSO settings.
         * @summary Get the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2/
         */
        async getSsoSettingsV2(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSsoSettingsV2(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSSOApi.getSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the SSO settings constants.
         * @summary Get the SSO settings constants
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSsoSettingsV2Constants operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2-constants/
         */
        async getSsoSettingsV2Constants(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSsoSettingsV2Constants(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSSOApi.getSsoSettingsV2Constants']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the SSO settings of the current portal.
         * @summary Reset the SSO settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-sso-settings-v2/
         */
        async resetSsoSettingsV2(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetSsoSettingsV2(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSSOApi.resetSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the SSO settings for the current portal.
         * @summary Save the SSO settings
         * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-sso-settings-v2/
         */
        async saveSsoSettingsV2(ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SsoSettingsV2Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveSsoSettingsV2(ssoSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSSOApi.saveSsoSettingsV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsSSOApi - factory interface
 * @export
 */
export const SettingsSSOApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsSSOApiFp(configuration)
    return {
        /**
         * Returns the default portal SSO settings.
         * @summary Get the default SSO settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getDefaultSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-sso-settings-v2/
         * @throws {RequiredError}
         */
        getDefaultSsoSettingsV2(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.getDefaultSsoSettingsV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current portal SSO settings.
         * @summary Get the SSO settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2/
         * @throws {RequiredError}
         */
        getSsoSettingsV2(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.getSsoSettingsV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the SSO settings constants.
         * @summary Get the SSO settings constants
         * @param {*} [options] Override http request option.
         * REST API Reference for getSsoSettingsV2Constants operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-sso-settings-v2-constants/
         * @throws {RequiredError}
         */
        getSsoSettingsV2Constants(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getSsoSettingsV2Constants(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the SSO settings of the current portal.
         * @summary Reset the SSO settings
         * @param {*} [options] Override http request option.
         * REST API Reference for resetSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-sso-settings-v2/
         * @throws {RequiredError}
         */
        resetSsoSettingsV2(options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.resetSsoSettingsV2(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the SSO settings for the current portal.
         * @summary Save the SSO settings
         * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveSsoSettingsV2 operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-sso-settings-v2/
         * @throws {RequiredError}
         */
        saveSsoSettingsV2(ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<SsoSettingsV2Wrapper> {
            return localVarFp.saveSsoSettingsV2(ssoSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsSSOApi - object-oriented interface
 * @export
 * @class SettingsSSOApi
 * @extends {BaseAPI}
 */
export class SettingsSSOApi extends BaseAPI {
    /**
     * Returns the default portal SSO settings.
     * @summary Get the default SSO settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSSOApi
     */
    public getDefaultSsoSettingsV2(options?: RawAxiosRequestConfig) {
        return SettingsSSOApiFp(this.configuration).getDefaultSsoSettingsV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current portal SSO settings.
     * @summary Get the SSO settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSSOApi
     */
    public getSsoSettingsV2(options?: RawAxiosRequestConfig) {
        return SettingsSSOApiFp(this.configuration).getSsoSettingsV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the SSO settings constants.
     * @summary Get the SSO settings constants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSSOApi
     */
    public getSsoSettingsV2Constants(options?: RawAxiosRequestConfig) {
        return SettingsSSOApiFp(this.configuration).getSsoSettingsV2Constants(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the SSO settings of the current portal.
     * @summary Reset the SSO settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSSOApi
     */
    public resetSsoSettingsV2(options?: RawAxiosRequestConfig) {
        return SettingsSSOApiFp(this.configuration).resetSsoSettingsV2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the SSO settings for the current portal.
     * @summary Save the SSO settings
     * @param {SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSSOApi
     */
    public saveSsoSettingsV2(ssoSettingsRequestsDto?: SsoSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsSSOApiFp(this.configuration).saveSsoSettingsV2(ssoSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

