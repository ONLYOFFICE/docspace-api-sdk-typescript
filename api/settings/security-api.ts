/**
 *
 * (c) Copyright Ascensio System SIA 2026
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
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { EmployeeArrayWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
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
 * SecurityApi - axios parameter creator
 * @export
 */
export const SecurityApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
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
         * @param {string} productid The ID of the product extracted from the query parameters.
         * @param {string} userid The user ID extracted from the query parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-product-administrator/
         */
        getIsProductAdministrator: async (productid: string, userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productid' is not null or undefined
            assertParamExists('getIsProductAdministrator', 'productid', productid)
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getIsProductAdministrator', 'userid', userid)

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
                localVarQueryParameter['ids'] = ids;
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
 * SecurityApi - functional programming interface
 * @export
 */
export const SecurityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityApiAxiosParamCreator(configuration)
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
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getEnabledModules']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if the selected user is an administrator of a product with the ID specified in the request.
         * @summary Check a product administrator
         * @param {string} productid The ID of the product extracted from the query parameters.
         * @param {string} userid The user ID extracted from the query parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-product-administrator/
         */
        async getIsProductAdministrator(productid: string, userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductAdministratorWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsProductAdministrator(productid, userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getIsProductAdministrator']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getPasswordSettings']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getProductAdministrators']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getWebItemSecurityInfo']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.getWebItemSettingsSecurityInfo']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.setAccessToWebItems']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.setProductAdministrator']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.setWebItemSecurity']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SecurityApi.updatePasswordSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecurityApi - factory interface
 * @export
 */
export const SecurityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityApiFp(configuration)
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
         * @param {SecurityApiGetIsProductAdministratorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-product-administrator/
         * @throws {RequiredError}
         */
        getIsProductAdministrator(requestParameters: SecurityApiGetIsProductAdministratorRequest, options?: RawAxiosRequestConfig): AxiosPromise<ProductAdministratorWrapper> {
            return localVarFp.getIsProductAdministrator(requestParameters.productid, requestParameters.userid, options).then((request) => request(axios, basePath));
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
         * @param {SecurityApiGetProductAdministratorsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getProductAdministrators operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-product-administrators/
         * @throws {RequiredError}
         */
        getProductAdministrators(requestParameters: SecurityApiGetProductAdministratorsRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeArrayWrapper> {
            return localVarFp.getProductAdministrators(requestParameters.productid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the availability of the module with the ID specified in the request.
         * @summary Get the module availability
         * @param {SecurityApiGetWebItemSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebItemSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-security-info/
         * @throws {RequiredError}
         */
        getWebItemSecurityInfo(requestParameters: SecurityApiGetWebItemSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getWebItemSecurityInfo(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the security settings for the modules specified in the request.
         * @summary Get the security settings
         * @param {SecurityApiGetWebItemSettingsSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebItemSettingsSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-web-item-settings-security-info/
         * @throws {RequiredError}
         */
        getWebItemSettingsSecurityInfo(requestParameters: SecurityApiGetWebItemSettingsSecurityInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SecurityArrayWrapper> {
            return localVarFp.getWebItemSettingsSecurityInfo(requestParameters.ids, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the security settings to the modules with the IDs specified in the request.
         * @summary Set the security settings to modules
         * @param {SecurityApiSetAccessToWebItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setAccessToWebItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-access-to-web-items/
         * @throws {RequiredError}
         */
        setAccessToWebItems(requestParameters: SecurityApiSetAccessToWebItemsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SecurityArrayWrapper> {
            return localVarFp.setAccessToWebItems(requestParameters.webItemsSecurityRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the selected user as an administrator of a product with the ID specified in the request.
         * @summary Set a product administrator
         * @param {SecurityApiSetProductAdministratorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setProductAdministrator operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-product-administrator/
         * @throws {RequiredError}
         */
        setProductAdministrator(requestParameters: SecurityApiSetProductAdministratorRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ProductAdministratorWrapper> {
            return localVarFp.setProductAdministrator(requestParameters.securityRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the security settings to the module with the ID specified in the request.
         * @summary Set the module security settings
         * @param {SecurityApiSetWebItemSecurityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setWebItemSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-web-item-security/
         * @throws {RequiredError}
         */
        setWebItemSecurity(requestParameters: SecurityApiSetWebItemSecurityRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SecurityArrayWrapper> {
            return localVarFp.setWebItemSecurity(requestParameters.webItemSecurityRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the portal password settings.
         * @summary Set the password settings
         * @param {SecurityApiUpdatePasswordSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updatePasswordSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-password-settings/
         * @throws {RequiredError}
         */
        updatePasswordSettings(requestParameters: SecurityApiUpdatePasswordSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PasswordSettingsWrapper> {
            return localVarFp.updatePasswordSettings(requestParameters.passwordSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getIsProductAdministrator operation in SecurityApi.
 * @export
 * @interface SecurityApiGetIsProductAdministratorRequest
 */
export interface SecurityApiGetIsProductAdministratorRequest {
    /**
     * The ID of the product extracted from the query parameters.
     * @type {string}
     * @memberof SecurityApiGetIsProductAdministrator
     */
    readonly productid: string

    /**
     * The user ID extracted from the query parameters.
     * @type {string}
     * @memberof SecurityApiGetIsProductAdministrator
     */
    readonly userid: string
}

/**
 * Request parameters for getProductAdministrators operation in SecurityApi.
 * @export
 * @interface SecurityApiGetProductAdministratorsRequest
 */
export interface SecurityApiGetProductAdministratorsRequest {
    /**
     * The ID of the product extracted from the route parameters.
     * @type {string}
     * @memberof SecurityApiGetProductAdministrators
     */
    readonly productid: string
}

/**
 * Request parameters for getWebItemSecurityInfo operation in SecurityApi.
 * @export
 * @interface SecurityApiGetWebItemSecurityInfoRequest
 */
export interface SecurityApiGetWebItemSecurityInfoRequest {
    /**
     * The ID extracted from the route parameters.
     * @type {string}
     * @memberof SecurityApiGetWebItemSecurityInfo
     */
    readonly id: string
}

/**
 * Request parameters for getWebItemSettingsSecurityInfo operation in SecurityApi.
 * @export
 * @interface SecurityApiGetWebItemSettingsSecurityInfoRequest
 */
export interface SecurityApiGetWebItemSettingsSecurityInfoRequest {
    /**
     * The list of module identifiers for which to retrieve the security settings.
     * @type {Array<string>}
     * @memberof SecurityApiGetWebItemSettingsSecurityInfo
     */
    readonly ids?: Array<string>
}

/**
 * Request parameters for setAccessToWebItems operation in SecurityApi.
 * @export
 * @interface SecurityApiSetAccessToWebItemsRequest
 */
export interface SecurityApiSetAccessToWebItemsRequest {
    /**
     * 
     * @type {WebItemsSecurityRequestsDto}
     * @memberof SecurityApiSetAccessToWebItems
     */
    readonly webItemsSecurityRequestsDto?: WebItemsSecurityRequestsDto
}

/**
 * Request parameters for setProductAdministrator operation in SecurityApi.
 * @export
 * @interface SecurityApiSetProductAdministratorRequest
 */
export interface SecurityApiSetProductAdministratorRequest {
    /**
     * 
     * @type {SecurityRequestsDto}
     * @memberof SecurityApiSetProductAdministrator
     */
    readonly securityRequestsDto?: SecurityRequestsDto
}

/**
 * Request parameters for setWebItemSecurity operation in SecurityApi.
 * @export
 * @interface SecurityApiSetWebItemSecurityRequest
 */
export interface SecurityApiSetWebItemSecurityRequest {
    /**
     * 
     * @type {WebItemSecurityRequestsDto}
     * @memberof SecurityApiSetWebItemSecurity
     */
    readonly webItemSecurityRequestsDto?: WebItemSecurityRequestsDto
}

/**
 * Request parameters for updatePasswordSettings operation in SecurityApi.
 * @export
 * @interface SecurityApiUpdatePasswordSettingsRequest
 */
export interface SecurityApiUpdatePasswordSettingsRequest {
    /**
     * 
     * @type {PasswordSettingsRequestsDto}
     * @memberof SecurityApiUpdatePasswordSettings
     */
    readonly passwordSettingsRequestsDto?: PasswordSettingsRequestsDto
}

/**
 * SecurityApi - object-oriented interface
 * @export
 * @class SecurityApi
 * @extends {BaseAPI}
 */
export class SecurityApi extends BaseAPI {
    /**
     * Returns a list of all the enabled modules.
     * @summary Get the enabled modules
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getEnabledModules(options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getEnabledModules(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the selected user is an administrator of a product with the ID specified in the request.
     * @summary Check a product administrator
     * @param {SettingsSecurityApiGetIsProductAdministratorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getIsProductAdministrator(requestParameters: SecurityApiGetIsProductAdministratorRequest, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getIsProductAdministrator(requestParameters.productid, requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal password settings.
     * @summary Get the password settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getPasswordSettings(options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getPasswordSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the administrators of a product with the ID specified in the request.
     * @summary Get the product administrators
     * @param {SettingsSecurityApiGetProductAdministratorsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getProductAdministrators(requestParameters: SecurityApiGetProductAdministratorsRequest, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getProductAdministrators(requestParameters.productid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the availability of the module with the ID specified in the request.
     * @summary Get the module availability
     * @param {SettingsSecurityApiGetWebItemSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getWebItemSecurityInfo(requestParameters: SecurityApiGetWebItemSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getWebItemSecurityInfo(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the security settings for the modules specified in the request.
     * @summary Get the security settings
     * @param {SettingsSecurityApiGetWebItemSettingsSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public getWebItemSettingsSecurityInfo(requestParameters: SecurityApiGetWebItemSettingsSecurityInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).getWebItemSettingsSecurityInfo(requestParameters.ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the security settings to the modules with the IDs specified in the request.
     * @summary Set the security settings to modules
     * @param {SettingsSecurityApiSetAccessToWebItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public setAccessToWebItems(requestParameters: SecurityApiSetAccessToWebItemsRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).setAccessToWebItems(requestParameters.webItemsSecurityRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the selected user as an administrator of a product with the ID specified in the request.
     * @summary Set a product administrator
     * @param {SettingsSecurityApiSetProductAdministratorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public setProductAdministrator(requestParameters: SecurityApiSetProductAdministratorRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).setProductAdministrator(requestParameters.securityRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the security settings to the module with the ID specified in the request.
     * @summary Set the module security settings
     * @param {SettingsSecurityApiSetWebItemSecurityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public setWebItemSecurity(requestParameters: SecurityApiSetWebItemSecurityRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).setWebItemSecurity(requestParameters.webItemSecurityRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the portal password settings.
     * @summary Set the password settings
     * @param {SettingsSecurityApiUpdatePasswordSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public updatePasswordSettings(requestParameters: SecurityApiUpdatePasswordSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityApiFp(this.configuration).updatePasswordSettings(requestParameters.passwordSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

