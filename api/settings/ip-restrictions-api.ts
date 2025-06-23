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
import type { IPRestrictionArrayWrapper } from '../../models';
// @ts-ignore
import type { IPRestrictionsSettingsWrapper } from '../../models';
// @ts-ignore
import type { IpRestrictionsDto } from '../../models';
// @ts-ignore
import type { IpRestrictionsWrapper } from '../../models';
/**
 * SettingsIPRestrictionsApi - axios parameter creator
 * @export
 */
export const SettingsIPRestrictionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the IP portal restrictions.
         * @summary Get the IP portal restrictions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ip-restrictions/
         */
        getIpRestrictions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/iprestrictions`;
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
         * Returns the IP restriction settings.
         * @summary Get the IP restriction settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for readIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/read-ip-restrictions-settings/
         */
        readIpRestrictionsSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/iprestrictions/settings`;
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
         * Updates the IP restrictions with the parameters specified in the request.
         * @summary Update the IP restrictions
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ip-restrictions/
         */
        saveIpRestrictions: async (ipRestrictionsDto?: IpRestrictionsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/iprestrictions`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ipRestrictionsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the IP restriction settings with the parameters specified in the request.
         * @summary Update the IP restriction settings
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-ip-restrictions-settings/
         */
        updateIpRestrictionsSettings: async (ipRestrictionsDto?: IpRestrictionsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/iprestrictions/settings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ipRestrictionsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsIPRestrictionsApi - functional programming interface
 * @export
 */
export const SettingsIPRestrictionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsIPRestrictionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the IP portal restrictions.
         * @summary Get the IP portal restrictions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ip-restrictions/
         */
        async getIpRestrictions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IPRestrictionArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIpRestrictions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsIPRestrictionsApi.getIpRestrictions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the IP restriction settings.
         * @summary Get the IP restriction settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for readIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/read-ip-restrictions-settings/
         */
        async readIpRestrictionsSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IPRestrictionsSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.readIpRestrictionsSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsIPRestrictionsApi.readIpRestrictionsSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the IP restrictions with the parameters specified in the request.
         * @summary Update the IP restrictions
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ip-restrictions/
         */
        async saveIpRestrictions(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IpRestrictionsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveIpRestrictions(ipRestrictionsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsIPRestrictionsApi.saveIpRestrictions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the IP restriction settings with the parameters specified in the request.
         * @summary Update the IP restriction settings
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-ip-restrictions-settings/
         */
        async updateIpRestrictionsSettings(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IpRestrictionsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateIpRestrictionsSettings(ipRestrictionsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsIPRestrictionsApi.updateIpRestrictionsSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsIPRestrictionsApi - factory interface
 * @export
 */
export const SettingsIPRestrictionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsIPRestrictionsApiFp(configuration)
    return {
        /**
         * Returns the IP portal restrictions.
         * @summary Get the IP portal restrictions
         * @param {*} [options] Override http request option.
         * REST API Reference for getIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-ip-restrictions/
         * @throws {RequiredError}
         */
        getIpRestrictions(options?: RawAxiosRequestConfig): AxiosPromise<IPRestrictionArrayWrapper> {
            return localVarFp.getIpRestrictions(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the IP restriction settings.
         * @summary Get the IP restriction settings
         * @param {*} [options] Override http request option.
         * REST API Reference for readIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/read-ip-restrictions-settings/
         * @throws {RequiredError}
         */
        readIpRestrictionsSettings(options?: RawAxiosRequestConfig): AxiosPromise<IPRestrictionsSettingsWrapper> {
            return localVarFp.readIpRestrictionsSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the IP restrictions with the parameters specified in the request.
         * @summary Update the IP restrictions
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveIpRestrictions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-ip-restrictions/
         * @throws {RequiredError}
         */
        saveIpRestrictions(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig): AxiosPromise<IpRestrictionsWrapper> {
            return localVarFp.saveIpRestrictions(ipRestrictionsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the IP restriction settings with the parameters specified in the request.
         * @summary Update the IP restriction settings
         * @param {IpRestrictionsDto} [ipRestrictionsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateIpRestrictionsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-ip-restrictions-settings/
         * @throws {RequiredError}
         */
        updateIpRestrictionsSettings(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig): AxiosPromise<IpRestrictionsWrapper> {
            return localVarFp.updateIpRestrictionsSettings(ipRestrictionsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsIPRestrictionsApi - object-oriented interface
 * @export
 * @class SettingsIPRestrictionsApi
 * @extends {BaseAPI}
 */
export class SettingsIPRestrictionsApi extends BaseAPI {
    /**
     * Returns the IP portal restrictions.
     * @summary Get the IP portal restrictions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsIPRestrictionsApi
     */
    public getIpRestrictions(options?: RawAxiosRequestConfig) {
        return SettingsIPRestrictionsApiFp(this.configuration).getIpRestrictions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the IP restriction settings.
     * @summary Get the IP restriction settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsIPRestrictionsApi
     */
    public readIpRestrictionsSettings(options?: RawAxiosRequestConfig) {
        return SettingsIPRestrictionsApiFp(this.configuration).readIpRestrictionsSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the IP restrictions with the parameters specified in the request.
     * @summary Update the IP restrictions
     * @param {IpRestrictionsDto} [ipRestrictionsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsIPRestrictionsApi
     */
    public saveIpRestrictions(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig) {
        return SettingsIPRestrictionsApiFp(this.configuration).saveIpRestrictions(ipRestrictionsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the IP restriction settings with the parameters specified in the request.
     * @summary Update the IP restriction settings
     * @param {IpRestrictionsDto} [ipRestrictionsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsIPRestrictionsApi
     */
    public updateIpRestrictionsSettings(ipRestrictionsDto?: IpRestrictionsDto, options?: RawAxiosRequestConfig) {
        return SettingsIPRestrictionsApiFp(this.configuration).updateIpRestrictionsSettings(ipRestrictionsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

