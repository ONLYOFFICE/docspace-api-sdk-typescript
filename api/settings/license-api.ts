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
import type { StringWrapper } from '../../models';
/**
 * SettingsLicenseApi - axios parameter creator
 * @export
 */
export const SettingsLicenseApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Activates a license for the portal.
         * @summary Activate a license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for acceptLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/accept-license/
         */
        acceptLicense: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/license/accept`;
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
         * Requests a portal license if necessary.
         * @summary Request a license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsLicenseRequired operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-license-required/
         */
        getIsLicenseRequired: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/license/required`;
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
         * Refreshes the portal license.
         * @summary Refresh the license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for refreshLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/refresh-license/
         */
        refreshLicense: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/license/refresh`;
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
         * Uploads a portal license specified in the request.
         * @summary Upload a license
         * @param {Array<File>} files The list of license files to be uploaded.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-license/
         */
        uploadLicense: async (files: Array<File>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'files' is not null or undefined
            assertParamExists('uploadLicense', 'files', files)
            const localVarPath = `/api/2.0/settings/license`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

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

            if (files) {
                files.forEach((element) => {
                    localVarFormParams.append('Files', element as any);
                })
            }

    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsLicenseApi - functional programming interface
 * @export
 */
export const SettingsLicenseApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsLicenseApiAxiosParamCreator(configuration)
    return {
        /**
         * Activates a license for the portal.
         * @summary Activate a license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for acceptLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/accept-license/
         */
        async acceptLicense(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.acceptLicense(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsLicenseApi.acceptLicense']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Requests a portal license if necessary.
         * @summary Request a license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsLicenseRequired operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-license-required/
         */
        async getIsLicenseRequired(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsLicenseRequired(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsLicenseApi.getIsLicenseRequired']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Refreshes the portal license.
         * @summary Refresh the license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for refreshLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/refresh-license/
         */
        async refreshLicense(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refreshLicense(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsLicenseApi.refreshLicense']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Uploads a portal license specified in the request.
         * @summary Upload a license
         * @param {Array<File>} files The list of license files to be uploaded.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-license/
         */
        async uploadLicense(files: Array<File>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadLicense(files, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsLicenseApi.uploadLicense']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsLicenseApi - factory interface
 * @export
 */
export const SettingsLicenseApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsLicenseApiFp(configuration)
    return {
        /**
         * Activates a license for the portal.
         * @summary Activate a license
         * @param {*} [options] Override http request option.
         * REST API Reference for acceptLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/accept-license/
         * @throws {RequiredError}
         */
        acceptLicense(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.acceptLicense(options).then((request) => request(axios, basePath));
        },
        /**
         * Requests a portal license if necessary.
         * @summary Request a license
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsLicenseRequired operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-license-required/
         * @throws {RequiredError}
         */
        getIsLicenseRequired(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getIsLicenseRequired(options).then((request) => request(axios, basePath));
        },
        /**
         * Refreshes the portal license.
         * @summary Refresh the license
         * @param {*} [options] Override http request option.
         * REST API Reference for refreshLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/refresh-license/
         * @throws {RequiredError}
         */
        refreshLicense(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.refreshLicense(options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a portal license specified in the request.
         * @summary Upload a license
         * @param {Array<File>} files The list of license files to be uploaded.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-license/
         * @throws {RequiredError}
         */
        uploadLicense(files: Array<File>, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.uploadLicense(files, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsLicenseApi - object-oriented interface
 * @export
 * @class SettingsLicenseApi
 * @extends {BaseAPI}
 */
export class SettingsLicenseApi extends BaseAPI {
    /**
     * Activates a license for the portal.
     * @summary Activate a license
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsLicenseApi
     */
    public acceptLicense(options?: RawAxiosRequestConfig) {
        return SettingsLicenseApiFp(this.configuration).acceptLicense(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Requests a portal license if necessary.
     * @summary Request a license
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsLicenseApi
     */
    public getIsLicenseRequired(options?: RawAxiosRequestConfig) {
        return SettingsLicenseApiFp(this.configuration).getIsLicenseRequired(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Refreshes the portal license.
     * @summary Refresh the license
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsLicenseApi
     */
    public refreshLicense(options?: RawAxiosRequestConfig) {
        return SettingsLicenseApiFp(this.configuration).refreshLicense(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a portal license specified in the request.
     * @summary Upload a license
     * @param {Array<File>} files The list of license files to be uploaded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsLicenseApi
     */
    public uploadLicense(files: Array<File>, options?: RawAxiosRequestConfig) {
        return SettingsLicenseApiFp(this.configuration).uploadLicense(files, options).then((request) => request(this.axios, this.basePath));
    }
}

