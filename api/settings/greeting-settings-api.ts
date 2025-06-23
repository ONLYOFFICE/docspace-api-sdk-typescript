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
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { GreetingSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * SettingsGreetingSettingsApi - axios parameter creator
 * @export
 */
export const SettingsGreetingSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the greeting settings for the current portal.
         * @summary Get greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-greeting-settings/
         */
        getGreetingSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/greetingsettings`;
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
         * Checks if the greeting settings of the current portal are set to default or not.
         * @summary Check the default greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-greeting-settings/
         */
        getIsDefaultGreetingSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/greetingsettings/isdefault`;
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
         * Restores the current portal greeting settings.
         * @summary Restore the greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-greeting-settings/
         */
        restoreGreetingSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/greetingsettings/restore`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the greeting settings specified in the request to the current portal.
         * @summary Save the greeting settings
         * @param {GreetingSettingsRequestsDto} [greetingSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-greeting-settings/
         */
        saveGreetingSettings: async (greetingSettingsRequestsDto?: GreetingSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/greetingsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(greetingSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsGreetingSettingsApi - functional programming interface
 * @export
 */
export const SettingsGreetingSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsGreetingSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the greeting settings for the current portal.
         * @summary Get greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-greeting-settings/
         */
        async getGreetingSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGreetingSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsGreetingSettingsApi.getGreetingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if the greeting settings of the current portal are set to default or not.
         * @summary Check the default greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-greeting-settings/
         */
        async getIsDefaultGreetingSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsDefaultGreetingSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsGreetingSettingsApi.getIsDefaultGreetingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Restores the current portal greeting settings.
         * @summary Restore the greeting settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-greeting-settings/
         */
        async restoreGreetingSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restoreGreetingSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsGreetingSettingsApi.restoreGreetingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the greeting settings specified in the request to the current portal.
         * @summary Save the greeting settings
         * @param {GreetingSettingsRequestsDto} [greetingSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-greeting-settings/
         */
        async saveGreetingSettings(greetingSettingsRequestsDto?: GreetingSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveGreetingSettings(greetingSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsGreetingSettingsApi.saveGreetingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsGreetingSettingsApi - factory interface
 * @export
 */
export const SettingsGreetingSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsGreetingSettingsApiFp(configuration)
    return {
        /**
         * Returns the greeting settings for the current portal.
         * @summary Get greeting settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-greeting-settings/
         * @throws {RequiredError}
         */
        getGreetingSettings(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getGreetingSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if the greeting settings of the current portal are set to default or not.
         * @summary Check the default greeting settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsDefaultGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-greeting-settings/
         * @throws {RequiredError}
         */
        getIsDefaultGreetingSettings(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getIsDefaultGreetingSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Restores the current portal greeting settings.
         * @summary Restore the greeting settings
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-greeting-settings/
         * @throws {RequiredError}
         */
        restoreGreetingSettings(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.restoreGreetingSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the greeting settings specified in the request to the current portal.
         * @summary Save the greeting settings
         * @param {GreetingSettingsRequestsDto} [greetingSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveGreetingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-greeting-settings/
         * @throws {RequiredError}
         */
        saveGreetingSettings(greetingSettingsRequestsDto?: GreetingSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.saveGreetingSettings(greetingSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsGreetingSettingsApi - object-oriented interface
 * @export
 * @class SettingsGreetingSettingsApi
 * @extends {BaseAPI}
 */
export class SettingsGreetingSettingsApi extends BaseAPI {
    /**
     * Returns the greeting settings for the current portal.
     * @summary Get greeting settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsGreetingSettingsApi
     */
    public getGreetingSettings(options?: RawAxiosRequestConfig) {
        return SettingsGreetingSettingsApiFp(this.configuration).getGreetingSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the greeting settings of the current portal are set to default or not.
     * @summary Check the default greeting settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsGreetingSettingsApi
     */
    public getIsDefaultGreetingSettings(options?: RawAxiosRequestConfig) {
        return SettingsGreetingSettingsApiFp(this.configuration).getIsDefaultGreetingSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Restores the current portal greeting settings.
     * @summary Restore the greeting settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsGreetingSettingsApi
     */
    public restoreGreetingSettings(options?: RawAxiosRequestConfig) {
        return SettingsGreetingSettingsApiFp(this.configuration).restoreGreetingSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the greeting settings specified in the request to the current portal.
     * @summary Save the greeting settings
     * @param {GreetingSettingsRequestsDto} [greetingSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsGreetingSettingsApi
     */
    public saveGreetingSettings(greetingSettingsRequestsDto?: GreetingSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsGreetingSettingsApiFp(this.configuration).saveGreetingSettings(greetingSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

