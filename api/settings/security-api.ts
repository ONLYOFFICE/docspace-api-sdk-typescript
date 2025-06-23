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
import type { EmployeeArrayWrapper } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { PasswordSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { PasswordSettingsWrapper } from '../../models';
// @ts-ignore
import type { ProductAdministratorWrapper } from '../../models';
// @ts-ignore
import type { SecurityArrayWrapper } from '../../models';
// @ts-ignore
import type { SecurityRequestsDto } from '../../models';
// @ts-ignore
import type { WebItemSecurityRequestsDto } from '../../models';
// @ts-ignore
import type { WebItemsSecurityRequestsDto } from '../../models';
/**
 * SettingsSecurityApi - axios parameter creator
 * @export
 */
export const SettingsSecurityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of all the enabled modules.
         * @summary Get the enabled modules
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEnabledModules operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enabled-modules/
         */
        getEnabledModules: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security/modules`;
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
         * Checks if the selected user is an administrator of a product with the ID specified in the request.
         * @summary Check a product administrator
         * @param {string} [productid] The ID of the product extracted from the query parameters.
         * @param {string} [userid] The user ID extracted from the query parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-product-administrator/
         */
        getIsProductAdministrator: async (productid?: string, userid?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security/administrator`;
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

            if (productid !== undefined) {
                localVarQueryParameter['productid'] = productid;
            }

            if (userid !== undefined) {
                localVarQueryParameter['userid'] = userid;
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
         * Returns the portal password settings.
         * @summary Get the password settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-password-settings/
         */
        getPasswordSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security/password`;
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
         * Returns a list of all the administrators of a product with the ID specified in the request.
         * @summary Get the product administrators
         * @param {string} productid The ID of the product extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProductAdministrators operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-product-administrators/
         */
        getProductAdministrators: async (productid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productid' is not null or undefined
            assertParamExists('getProductAdministrators', 'productid', productid)
            const localVarPath = `/api/2.0/settings/security/administrator/{productid}`
                .replace(`{${"productid"}}`, encodeURIComponent(String(productid)));
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
         * Returns the availability of the module with the ID specified in the request.
         * @summary Get the module availability
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebItemSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-security-info/
         */
        getWebItemSecurityInfo: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getWebItemSecurityInfo', 'id', id)
            const localVarPath = `/api/2.0/settings/security/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Returns the security settings for the modules specified in the request.
         * @summary Get the security settings
         * @param {Array<string>} [ids] The list of module identifiers for which to retrieve the security settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebItemSettingsSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-settings-security-info/
         */
        getWebItemSettingsSecurityInfo: async (ids?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security`;
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

            if (ids) {
                localVarQueryParameter['ids'] = ids.join(COLLECTION_FORMATS.csv);
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
         * Sets the security settings to the modules with the IDs specified in the request.
         * @summary Set the security settings to modules
         * @param {WebItemsSecurityRequestsDto} [webItemsSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setAccessToWebItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-access-to-web-items/
         */
        setAccessToWebItems: async (webItemsSecurityRequestsDto?: WebItemsSecurityRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security/access`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webItemsSecurityRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the selected user as an administrator of a product with the ID specified in the request.
         * @summary Set a product administrator
         * @param {SecurityRequestsDto} [securityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-product-administrator/
         */
        setProductAdministrator: async (securityRequestsDto?: SecurityRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security/administrator`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(securityRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the security settings to the module with the ID specified in the request.
         * @summary Set the module security settings
         * @param {WebItemSecurityRequestsDto} [webItemSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setWebItemSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-item-security/
         */
        setWebItemSecurity: async (webItemSecurityRequestsDto?: WebItemSecurityRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webItemSecurityRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the portal password settings.
         * @summary Set the password settings
         * @param {PasswordSettingsRequestsDto} [passwordSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-password-settings/
         */
        updatePasswordSettings: async (passwordSettingsRequestsDto?: PasswordSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/security/password`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(passwordSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsSecurityApi - functional programming interface
 * @export
 */
export const SettingsSecurityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsSecurityApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of all the enabled modules.
         * @summary Get the enabled modules
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEnabledModules operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enabled-modules/
         */
        async getEnabledModules(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEnabledModules(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.getEnabledModules']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if the selected user is an administrator of a product with the ID specified in the request.
         * @summary Check a product administrator
         * @param {string} [productid] The ID of the product extracted from the query parameters.
         * @param {string} [userid] The user ID extracted from the query parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-product-administrator/
         */
        async getIsProductAdministrator(productid?: string, userid?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductAdministratorWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsProductAdministrator(productid, userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.getIsProductAdministrator']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal password settings.
         * @summary Get the password settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-password-settings/
         */
        async getPasswordSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PasswordSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPasswordSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.getPasswordSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the administrators of a product with the ID specified in the request.
         * @summary Get the product administrators
         * @param {string} productid The ID of the product extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getProductAdministrators operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-product-administrators/
         */
        async getProductAdministrators(productid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductAdministrators(productid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.getProductAdministrators']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the availability of the module with the ID specified in the request.
         * @summary Get the module availability
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebItemSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-security-info/
         */
        async getWebItemSecurityInfo(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebItemSecurityInfo(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.getWebItemSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the security settings for the modules specified in the request.
         * @summary Get the security settings
         * @param {Array<string>} [ids] The list of module identifiers for which to retrieve the security settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebItemSettingsSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-settings-security-info/
         */
        async getWebItemSettingsSecurityInfo(ids?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SecurityArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebItemSettingsSecurityInfo(ids, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.getWebItemSettingsSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the security settings to the modules with the IDs specified in the request.
         * @summary Set the security settings to modules
         * @param {WebItemsSecurityRequestsDto} [webItemsSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setAccessToWebItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-access-to-web-items/
         */
        async setAccessToWebItems(webItemsSecurityRequestsDto?: WebItemsSecurityRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SecurityArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setAccessToWebItems(webItemsSecurityRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.setAccessToWebItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the selected user as an administrator of a product with the ID specified in the request.
         * @summary Set a product administrator
         * @param {SecurityRequestsDto} [securityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-product-administrator/
         */
        async setProductAdministrator(securityRequestsDto?: SecurityRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductAdministratorWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setProductAdministrator(securityRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.setProductAdministrator']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the security settings to the module with the ID specified in the request.
         * @summary Set the module security settings
         * @param {WebItemSecurityRequestsDto} [webItemSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setWebItemSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-item-security/
         */
        async setWebItemSecurity(webItemSecurityRequestsDto?: WebItemSecurityRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SecurityArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setWebItemSecurity(webItemSecurityRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.setWebItemSecurity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the portal password settings.
         * @summary Set the password settings
         * @param {PasswordSettingsRequestsDto} [passwordSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-password-settings/
         */
        async updatePasswordSettings(passwordSettingsRequestsDto?: PasswordSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PasswordSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePasswordSettings(passwordSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsSecurityApi.updatePasswordSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsSecurityApi - factory interface
 * @export
 */
export const SettingsSecurityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsSecurityApiFp(configuration)
    return {
        /**
         * Returns a list of all the enabled modules.
         * @summary Get the enabled modules
         * @param {*} [options] Override http request option.
         * REST API Reference for getEnabledModules operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enabled-modules/
         * @throws {RequiredError}
         */
        getEnabledModules(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getEnabledModules(options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if the selected user is an administrator of a product with the ID specified in the request.
         * @summary Check a product administrator
         * @param {string} [productid] The ID of the product extracted from the query parameters.
         * @param {string} [userid] The user ID extracted from the query parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-product-administrator/
         * @throws {RequiredError}
         */
        getIsProductAdministrator(productid?: string, userid?: string, options?: RawAxiosRequestConfig): AxiosPromise<ProductAdministratorWrapper> {
            return localVarFp.getIsProductAdministrator(productid, userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal password settings.
         * @summary Get the password settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getPasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-password-settings/
         * @throws {RequiredError}
         */
        getPasswordSettings(options?: RawAxiosRequestConfig): AxiosPromise<PasswordSettingsWrapper> {
            return localVarFp.getPasswordSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the administrators of a product with the ID specified in the request.
         * @summary Get the product administrators
         * @param {string} productid The ID of the product extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProductAdministrators operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-product-administrators/
         * @throws {RequiredError}
         */
        getProductAdministrators(productid: string, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeArrayWrapper> {
            return localVarFp.getProductAdministrators(productid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the availability of the module with the ID specified in the request.
         * @summary Get the module availability
         * @param {string} id The ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebItemSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-security-info/
         * @throws {RequiredError}
         */
        getWebItemSecurityInfo(id: string, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getWebItemSecurityInfo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the security settings for the modules specified in the request.
         * @summary Get the security settings
         * @param {Array<string>} [ids] The list of module identifiers for which to retrieve the security settings.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebItemSettingsSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-settings-security-info/
         * @throws {RequiredError}
         */
        getWebItemSettingsSecurityInfo(ids?: Array<string>, options?: RawAxiosRequestConfig): AxiosPromise<SecurityArrayWrapper> {
            return localVarFp.getWebItemSettingsSecurityInfo(ids, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the security settings to the modules with the IDs specified in the request.
         * @summary Set the security settings to modules
         * @param {WebItemsSecurityRequestsDto} [webItemsSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setAccessToWebItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-access-to-web-items/
         * @throws {RequiredError}
         */
        setAccessToWebItems(webItemsSecurityRequestsDto?: WebItemsSecurityRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<SecurityArrayWrapper> {
            return localVarFp.setAccessToWebItems(webItemsSecurityRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the selected user as an administrator of a product with the ID specified in the request.
         * @summary Set a product administrator
         * @param {SecurityRequestsDto} [securityRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-product-administrator/
         * @throws {RequiredError}
         */
        setProductAdministrator(securityRequestsDto?: SecurityRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<ProductAdministratorWrapper> {
            return localVarFp.setProductAdministrator(securityRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the security settings to the module with the ID specified in the request.
         * @summary Set the module security settings
         * @param {WebItemSecurityRequestsDto} [webItemSecurityRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setWebItemSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-item-security/
         * @throws {RequiredError}
         */
        setWebItemSecurity(webItemSecurityRequestsDto?: WebItemSecurityRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<SecurityArrayWrapper> {
            return localVarFp.setWebItemSecurity(webItemSecurityRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the portal password settings.
         * @summary Set the password settings
         * @param {PasswordSettingsRequestsDto} [passwordSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updatePasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-password-settings/
         * @throws {RequiredError}
         */
        updatePasswordSettings(passwordSettingsRequestsDto?: PasswordSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<PasswordSettingsWrapper> {
            return localVarFp.updatePasswordSettings(passwordSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsSecurityApi - object-oriented interface
 * @export
 * @class SettingsSecurityApi
 * @extends {BaseAPI}
 */
export class SettingsSecurityApi extends BaseAPI {
    /**
     * Returns a list of all the enabled modules.
     * @summary Get the enabled modules
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public getEnabledModules(options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).getEnabledModules(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the selected user is an administrator of a product with the ID specified in the request.
     * @summary Check a product administrator
     * @param {string} [productid] The ID of the product extracted from the query parameters.
     * @param {string} [userid] The user ID extracted from the query parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public getIsProductAdministrator(productid?: string, userid?: string, options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).getIsProductAdministrator(productid, userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal password settings.
     * @summary Get the password settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public getPasswordSettings(options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).getPasswordSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the administrators of a product with the ID specified in the request.
     * @summary Get the product administrators
     * @param {string} productid The ID of the product extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public getProductAdministrators(productid: string, options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).getProductAdministrators(productid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the availability of the module with the ID specified in the request.
     * @summary Get the module availability
     * @param {string} id The ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public getWebItemSecurityInfo(id: string, options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).getWebItemSecurityInfo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the security settings for the modules specified in the request.
     * @summary Get the security settings
     * @param {Array<string>} [ids] The list of module identifiers for which to retrieve the security settings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public getWebItemSettingsSecurityInfo(ids?: Array<string>, options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).getWebItemSettingsSecurityInfo(ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the security settings to the modules with the IDs specified in the request.
     * @summary Set the security settings to modules
     * @param {WebItemsSecurityRequestsDto} [webItemsSecurityRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public setAccessToWebItems(webItemsSecurityRequestsDto?: WebItemsSecurityRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).setAccessToWebItems(webItemsSecurityRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the selected user as an administrator of a product with the ID specified in the request.
     * @summary Set a product administrator
     * @param {SecurityRequestsDto} [securityRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public setProductAdministrator(securityRequestsDto?: SecurityRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).setProductAdministrator(securityRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the security settings to the module with the ID specified in the request.
     * @summary Set the module security settings
     * @param {WebItemSecurityRequestsDto} [webItemSecurityRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public setWebItemSecurity(webItemSecurityRequestsDto?: WebItemSecurityRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).setWebItemSecurity(webItemSecurityRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the portal password settings.
     * @summary Set the password settings
     * @param {PasswordSettingsRequestsDto} [passwordSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsSecurityApi
     */
    public updatePasswordSettings(passwordSettingsRequestsDto?: PasswordSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsSecurityApiFp(this.configuration).updatePasswordSettings(passwordSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

