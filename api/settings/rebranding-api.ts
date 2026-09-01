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
import type { AdditionalWhiteLabelSettingsDtoWrapper } from '../../models';
// @ts-ignore
import type { AdditionalWhiteLabelSettingsResponseWrapper } from '../../models';
// @ts-ignore
import type { AdditionalWhiteLabelSettingsWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsArrayWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsDtoWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsResponseWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { IsDefaultWhiteLabelLogosArrayWrapper } from '../../models';
// @ts-ignore
import type { IsDefaultWhiteLabelLogosWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { WhiteLabelItemArrayWrapper } from '../../models';
// @ts-ignore
import type { WhiteLabelRequestsDto } from '../../models';
/**
 * RebrandingApi - axios parameter creator
 * @export
 */
export const RebrandingApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Deletes the additional white label settings.
         * @summary Delete the additional white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-additional-white-label-settings/
         */
        deleteAdditionalWhiteLabelSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/additional`;
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
         * Deletes the company white label settings.
         * @summary Delete the company white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-company-white-label-settings/
         */
        deleteCompanyWhiteLabelSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/company`;
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
         * Returns the additional white label settings.
         * @summary Get the additional white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-additional-white-label-settings/
         */
        getAdditionalWhiteLabelSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/additional`;
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
         * Returns the company white label settings.
         * @summary Get the company white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-company-white-label-settings/
         */
        getCompanyWhiteLabelSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/company`;
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
         * Checks if the white label is enabled or not.
         * @summary Check the white label availability
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEnableWhitelabel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enable-whitelabel/
         */
        getEnableWhitelabel: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/enablewhitelabel`;
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
         * Specifies if the white label logo text is default or not.
         * @summary Check the default white label logo text
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logo-text/
         */
        getIsDefaultWhiteLabelLogoText: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logotext/isdefault`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Specifies if the white label logos are default or not.
         * @summary Check the default white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logos/
         */
        getIsDefaultWhiteLabelLogos: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos/isdefault`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Returns the licensor data.
         * @summary Get the licensor data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLicensorData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-licensor-data/
         */
        getLicensorData: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/companywhitelabel`;
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
         * Returns the white label logo text.
         * @summary Get the white label logo text
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logo-text/
         */
        getWhiteLabelLogoText: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logotext`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Returns the white label logos.
         * @summary Get the white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logos/
         */
        getWhiteLabelLogos: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Restores the white label logo text.
         * @summary Restore the white label logo text
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logo-text/
         */
        restoreWhiteLabelLogoText: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logotext/restore`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Restores the white label logos.
         * @summary Restore the white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logos/
         */
        restoreWhiteLabelLogos: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos/restore`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Saves the additional white label settings specified in the request.
         * @summary Save the additional white label settings
         * @param {AdditionalWhiteLabelSettingsWrapper} [additionalWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-additional-white-label-settings/
         */
        saveAdditionalWhiteLabelSettings: async (additionalWhiteLabelSettingsWrapper?: AdditionalWhiteLabelSettingsWrapper, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/additional`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(additionalWhiteLabelSettingsWrapper, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the company white label settings specified in the request.
         * @summary Save the company white label settings
         * @param {CompanyWhiteLabelSettingsWrapper} [companyWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-company-white-label-settings/
         */
        saveCompanyWhiteLabelSettings: async (companyWhiteLabelSettingsWrapper?: CompanyWhiteLabelSettingsWrapper, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/company`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(companyWhiteLabelSettingsWrapper, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the white label logo text specified in the request.
         * @summary Save the white label logo text settings
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-logo-text/
         */
        saveWhiteLabelLogoText: async (isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logotext/save`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(whiteLabelRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the white label logos specified in the request.
         * @summary Save the white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings/
         */
        saveWhiteLabelSettings: async (isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos/save`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(whiteLabelRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the white label logos from files.
         * @summary Save the white label logos from files
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelSettingsFromFiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings-from-files/
         */
        saveWhiteLabelSettingsFromFiles: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos/savefromfiles`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
            }


    
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
 * RebrandingApi - functional programming interface
 * @export
 */
export const RebrandingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RebrandingApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes the additional white label settings.
         * @summary Delete the additional white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-additional-white-label-settings/
         */
        async deleteAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdditionalWhiteLabelSettingsResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAdditionalWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.deleteAdditionalWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the company white label settings.
         * @summary Delete the company white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-company-white-label-settings/
         */
        async deleteCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyWhiteLabelSettingsResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCompanyWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.deleteCompanyWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the additional white label settings.
         * @summary Get the additional white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-additional-white-label-settings/
         */
        async getAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdditionalWhiteLabelSettingsDtoWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAdditionalWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getAdditionalWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the company white label settings.
         * @summary Get the company white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-company-white-label-settings/
         */
        async getCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyWhiteLabelSettingsDtoWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompanyWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getCompanyWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if the white label is enabled or not.
         * @summary Check the white label availability
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEnableWhitelabel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enable-whitelabel/
         */
        async getEnableWhitelabel(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEnableWhitelabel(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getEnableWhitelabel']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Specifies if the white label logo text is default or not.
         * @summary Check the default white label logo text
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logo-text/
         */
        async getIsDefaultWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IsDefaultWhiteLabelLogosWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsDefaultWhiteLabelLogoText(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getIsDefaultWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Specifies if the white label logos are default or not.
         * @summary Check the default white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logos/
         */
        async getIsDefaultWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IsDefaultWhiteLabelLogosArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsDefaultWhiteLabelLogos(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getIsDefaultWhiteLabelLogos']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the licensor data.
         * @summary Get the licensor data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLicensorData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-licensor-data/
         */
        async getLicensorData(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyWhiteLabelSettingsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLicensorData(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getLicensorData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the white label logo text.
         * @summary Get the white label logo text
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logo-text/
         */
        async getWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWhiteLabelLogoText(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the white label logos.
         * @summary Get the white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logos/
         */
        async getWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhiteLabelItemArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWhiteLabelLogos(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getWhiteLabelLogos']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Restores the white label logo text.
         * @summary Restore the white label logo text
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logo-text/
         */
        async restoreWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restoreWhiteLabelLogoText(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.restoreWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Restores the white label logos.
         * @summary Restore the white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logos/
         */
        async restoreWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restoreWhiteLabelLogos(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.restoreWhiteLabelLogos']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the additional white label settings specified in the request.
         * @summary Save the additional white label settings
         * @param {AdditionalWhiteLabelSettingsWrapper} [additionalWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-additional-white-label-settings/
         */
        async saveAdditionalWhiteLabelSettings(additionalWhiteLabelSettingsWrapper?: AdditionalWhiteLabelSettingsWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveAdditionalWhiteLabelSettings(additionalWhiteLabelSettingsWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveAdditionalWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the company white label settings specified in the request.
         * @summary Save the company white label settings
         * @param {CompanyWhiteLabelSettingsWrapper} [companyWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-company-white-label-settings/
         */
        async saveCompanyWhiteLabelSettings(companyWhiteLabelSettingsWrapper?: CompanyWhiteLabelSettingsWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveCompanyWhiteLabelSettings(companyWhiteLabelSettingsWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveCompanyWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the white label logo text specified in the request.
         * @summary Save the white label logo text settings
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-logo-text/
         */
        async saveWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveWhiteLabelLogoText(isDark, isDefault, whiteLabelRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the white label logos specified in the request.
         * @summary Save the white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings/
         */
        async saveWhiteLabelSettings(isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveWhiteLabelSettings(isDark, isDefault, whiteLabelRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the white label logos from files.
         * @summary Save the white label logos from files
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelSettingsFromFiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings-from-files/
         */
        async saveWhiteLabelSettingsFromFiles(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveWhiteLabelSettingsFromFiles(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveWhiteLabelSettingsFromFiles']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RebrandingApi - factory interface
 * @export
 */
export const RebrandingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RebrandingApiFp(configuration)
    return {
        /**
         * Deletes the additional white label settings.
         * @summary Delete the additional white label settings
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-additional-white-label-settings/
         * @throws {RequiredError}
         */
        deleteAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<AdditionalWhiteLabelSettingsResponseWrapper> {
            return localVarFp.deleteAdditionalWhiteLabelSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the company white label settings.
         * @summary Delete the company white label settings
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-company-white-label-settings/
         * @throws {RequiredError}
         */
        deleteCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<CompanyWhiteLabelSettingsResponseWrapper> {
            return localVarFp.deleteCompanyWhiteLabelSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the additional white label settings.
         * @summary Get the additional white label settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-additional-white-label-settings/
         * @throws {RequiredError}
         */
        getAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<AdditionalWhiteLabelSettingsDtoWrapper> {
            return localVarFp.getAdditionalWhiteLabelSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the company white label settings.
         * @summary Get the company white label settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-company-white-label-settings/
         * @throws {RequiredError}
         */
        getCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<CompanyWhiteLabelSettingsDtoWrapper> {
            return localVarFp.getCompanyWhiteLabelSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if the white label is enabled or not.
         * @summary Check the white label availability
         * @param {*} [options] Override http request option.
         * REST API Reference for getEnableWhitelabel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enable-whitelabel/
         * @throws {RequiredError}
         */
        getEnableWhitelabel(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getEnableWhitelabel(options).then((request) => request(axios, basePath));
        },
        /**
         * Specifies if the white label logo text is default or not.
         * @summary Check the default white label logo text
         * @param {RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsDefaultWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logo-text/
         * @throws {RequiredError}
         */
        getIsDefaultWhiteLabelLogoText(requestParameters: RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<IsDefaultWhiteLabelLogosWrapper> {
            return localVarFp.getIsDefaultWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Specifies if the white label logos are default or not.
         * @summary Check the default white label logos
         * @param {RebrandingApiGetIsDefaultWhiteLabelLogosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsDefaultWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logos/
         * @throws {RequiredError}
         */
        getIsDefaultWhiteLabelLogos(requestParameters: RebrandingApiGetIsDefaultWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<IsDefaultWhiteLabelLogosArrayWrapper> {
            return localVarFp.getIsDefaultWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the licensor data.
         * @summary Get the licensor data
         * @param {*} [options] Override http request option.
         * REST API Reference for getLicensorData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-licensor-data/
         * @throws {RequiredError}
         */
        getLicensorData(options?: RawAxiosRequestConfig): AxiosPromise<CompanyWhiteLabelSettingsArrayWrapper> {
            return localVarFp.getLicensorData(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the white label logo text.
         * @summary Get the white label logo text
         * @param {RebrandingApiGetWhiteLabelLogoTextRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logo-text/
         * @throws {RequiredError}
         */
        getWhiteLabelLogoText(requestParameters: RebrandingApiGetWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the white label logos.
         * @summary Get the white label logos
         * @param {RebrandingApiGetWhiteLabelLogosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logos/
         * @throws {RequiredError}
         */
        getWhiteLabelLogos(requestParameters: RebrandingApiGetWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WhiteLabelItemArrayWrapper> {
            return localVarFp.getWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Restores the white label logo text.
         * @summary Restore the white label logo text
         * @param {RebrandingApiRestoreWhiteLabelLogoTextRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logo-text/
         * @throws {RequiredError}
         */
        restoreWhiteLabelLogoText(requestParameters: RebrandingApiRestoreWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.restoreWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Restores the white label logos.
         * @summary Restore the white label logos
         * @param {RebrandingApiRestoreWhiteLabelLogosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logos/
         * @throws {RequiredError}
         */
        restoreWhiteLabelLogos(requestParameters: RebrandingApiRestoreWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.restoreWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the additional white label settings specified in the request.
         * @summary Save the additional white label settings
         * @param {RebrandingApiSaveAdditionalWhiteLabelSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-additional-white-label-settings/
         * @throws {RequiredError}
         */
        saveAdditionalWhiteLabelSettings(requestParameters: RebrandingApiSaveAdditionalWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveAdditionalWhiteLabelSettings(requestParameters.additionalWhiteLabelSettingsWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the company white label settings specified in the request.
         * @summary Save the company white label settings
         * @param {RebrandingApiSaveCompanyWhiteLabelSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-company-white-label-settings/
         * @throws {RequiredError}
         */
        saveCompanyWhiteLabelSettings(requestParameters: RebrandingApiSaveCompanyWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveCompanyWhiteLabelSettings(requestParameters.companyWhiteLabelSettingsWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the white label logo text specified in the request.
         * @summary Save the white label logo text settings
         * @param {RebrandingApiSaveWhiteLabelLogoTextRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-logo-text/
         * @throws {RequiredError}
         */
        saveWhiteLabelLogoText(requestParameters: RebrandingApiSaveWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, requestParameters.whiteLabelRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the white label logos specified in the request.
         * @summary Save the white label logos
         * @param {RebrandingApiSaveWhiteLabelSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings/
         * @throws {RequiredError}
         */
        saveWhiteLabelSettings(requestParameters: RebrandingApiSaveWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveWhiteLabelSettings(requestParameters.isDark, requestParameters.isDefault, requestParameters.whiteLabelRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the white label logos from files.
         * @summary Save the white label logos from files
         * @param {RebrandingApiSaveWhiteLabelSettingsFromFilesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveWhiteLabelSettingsFromFiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings-from-files/
         * @throws {RequiredError}
         */
        saveWhiteLabelSettingsFromFiles(requestParameters: RebrandingApiSaveWhiteLabelSettingsFromFilesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveWhiteLabelSettingsFromFiles(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getIsDefaultWhiteLabelLogoText operation in RebrandingApi.
 * @export
 * @interface RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest
 */
export interface RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest {
    /**
     * Specifies if the white label logo is for the dark theme or not.
     * @type {boolean}
     * @memberof RebrandingApiGetIsDefaultWhiteLabelLogoText
     */
    readonly isDark?: boolean

    /**
     * Specifies if the logo is for a default tenant or not.
     * @type {boolean}
     * @memberof RebrandingApiGetIsDefaultWhiteLabelLogoText
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for getIsDefaultWhiteLabelLogos operation in RebrandingApi.
 * @export
 * @interface RebrandingApiGetIsDefaultWhiteLabelLogosRequest
 */
export interface RebrandingApiGetIsDefaultWhiteLabelLogosRequest {
    /**
     * Specifies if the white label logo is for the dark theme or not.
     * @type {boolean}
     * @memberof RebrandingApiGetIsDefaultWhiteLabelLogos
     */
    readonly isDark?: boolean

    /**
     * Specifies if the logo is for a default tenant or not.
     * @type {boolean}
     * @memberof RebrandingApiGetIsDefaultWhiteLabelLogos
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for getWhiteLabelLogoText operation in RebrandingApi.
 * @export
 * @interface RebrandingApiGetWhiteLabelLogoTextRequest
 */
export interface RebrandingApiGetWhiteLabelLogoTextRequest {
    /**
     * Specifies if the white label logo is for the dark theme or not.
     * @type {boolean}
     * @memberof RebrandingApiGetWhiteLabelLogoText
     */
    readonly isDark?: boolean

    /**
     * Specifies if the logo is for a default tenant or not.
     * @type {boolean}
     * @memberof RebrandingApiGetWhiteLabelLogoText
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for getWhiteLabelLogos operation in RebrandingApi.
 * @export
 * @interface RebrandingApiGetWhiteLabelLogosRequest
 */
export interface RebrandingApiGetWhiteLabelLogosRequest {
    /**
     * Specifies if the white label logo is for the dark theme or not.
     * @type {boolean}
     * @memberof RebrandingApiGetWhiteLabelLogos
     */
    readonly isDark?: boolean

    /**
     * Specifies if the logo is for a default tenant or not.
     * @type {boolean}
     * @memberof RebrandingApiGetWhiteLabelLogos
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for restoreWhiteLabelLogoText operation in RebrandingApi.
 * @export
 * @interface RebrandingApiRestoreWhiteLabelLogoTextRequest
 */
export interface RebrandingApiRestoreWhiteLabelLogoTextRequest {
    /**
     * Specifies if the white label logo is for the dark theme or not.
     * @type {boolean}
     * @memberof RebrandingApiRestoreWhiteLabelLogoText
     */
    readonly isDark?: boolean

    /**
     * Specifies if the logo is for a default tenant or not.
     * @type {boolean}
     * @memberof RebrandingApiRestoreWhiteLabelLogoText
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for restoreWhiteLabelLogos operation in RebrandingApi.
 * @export
 * @interface RebrandingApiRestoreWhiteLabelLogosRequest
 */
export interface RebrandingApiRestoreWhiteLabelLogosRequest {
    /**
     * Specifies if the white label logo is for the dark theme or not.
     * @type {boolean}
     * @memberof RebrandingApiRestoreWhiteLabelLogos
     */
    readonly isDark?: boolean

    /**
     * Specifies if the logo is for a default tenant or not.
     * @type {boolean}
     * @memberof RebrandingApiRestoreWhiteLabelLogos
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for saveAdditionalWhiteLabelSettings operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveAdditionalWhiteLabelSettingsRequest
 */
export interface RebrandingApiSaveAdditionalWhiteLabelSettingsRequest {
    /**
     * 
     * @type {AdditionalWhiteLabelSettingsWrapper}
     * @memberof RebrandingApiSaveAdditionalWhiteLabelSettings
     */
    readonly additionalWhiteLabelSettingsWrapper?: AdditionalWhiteLabelSettingsWrapper
}

/**
 * Request parameters for saveCompanyWhiteLabelSettings operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveCompanyWhiteLabelSettingsRequest
 */
export interface RebrandingApiSaveCompanyWhiteLabelSettingsRequest {
    /**
     * 
     * @type {CompanyWhiteLabelSettingsWrapper}
     * @memberof RebrandingApiSaveCompanyWhiteLabelSettings
     */
    readonly companyWhiteLabelSettingsWrapper?: CompanyWhiteLabelSettingsWrapper
}

/**
 * Request parameters for saveWhiteLabelLogoText operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveWhiteLabelLogoTextRequest
 */
export interface RebrandingApiSaveWhiteLabelLogoTextRequest {
    /**
     * Specifies if the white label logo is for the dark theme or not.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelLogoText
     */
    readonly isDark?: boolean

    /**
     * Specifies if the logo is for a default tenant or not.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelLogoText
     */
    readonly isDefault?: boolean

    /**
     * 
     * @type {WhiteLabelRequestsDto}
     * @memberof RebrandingApiSaveWhiteLabelLogoText
     */
    readonly whiteLabelRequestsDto?: WhiteLabelRequestsDto
}

/**
 * Request parameters for saveWhiteLabelSettings operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveWhiteLabelSettingsRequest
 */
export interface RebrandingApiSaveWhiteLabelSettingsRequest {
    /**
     * Specifies if the white label logo is for the dark theme or not.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelSettings
     */
    readonly isDark?: boolean

    /**
     * Specifies if the logo is for a default tenant or not.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelSettings
     */
    readonly isDefault?: boolean

    /**
     * 
     * @type {WhiteLabelRequestsDto}
     * @memberof RebrandingApiSaveWhiteLabelSettings
     */
    readonly whiteLabelRequestsDto?: WhiteLabelRequestsDto
}

/**
 * Request parameters for saveWhiteLabelSettingsFromFiles operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveWhiteLabelSettingsFromFilesRequest
 */
export interface RebrandingApiSaveWhiteLabelSettingsFromFilesRequest {
    /**
     * Specifies if the white label logo is for the dark theme or not.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelSettingsFromFiles
     */
    readonly isDark?: boolean

    /**
     * Specifies if the logo is for a default tenant or not.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelSettingsFromFiles
     */
    readonly isDefault?: boolean
}

/**
 * RebrandingApi - object-oriented interface
 * @export
 * @class RebrandingApi
 * @extends {BaseAPI}
 */
export class RebrandingApi extends BaseAPI {
    /**
     * Deletes the additional white label settings.
     * @summary Delete the additional white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public deleteAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).deleteAdditionalWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the company white label settings.
     * @summary Delete the company white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public deleteCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).deleteCompanyWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the additional white label settings.
     * @summary Get the additional white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getAdditionalWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the company white label settings.
     * @summary Get the company white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getCompanyWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the white label is enabled or not.
     * @summary Check the white label availability
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getEnableWhitelabel(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getEnableWhitelabel(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Specifies if the white label logo text is default or not.
     * @summary Check the default white label logo text
     * @param {SettingsRebrandingApiGetIsDefaultWhiteLabelLogoTextRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getIsDefaultWhiteLabelLogoText(requestParameters: RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getIsDefaultWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Specifies if the white label logos are default or not.
     * @summary Check the default white label logos
     * @param {SettingsRebrandingApiGetIsDefaultWhiteLabelLogosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getIsDefaultWhiteLabelLogos(requestParameters: RebrandingApiGetIsDefaultWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getIsDefaultWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the licensor data.
     * @summary Get the licensor data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getLicensorData(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getLicensorData(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the white label logo text.
     * @summary Get the white label logo text
     * @param {SettingsRebrandingApiGetWhiteLabelLogoTextRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getWhiteLabelLogoText(requestParameters: RebrandingApiGetWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the white label logos.
     * @summary Get the white label logos
     * @param {SettingsRebrandingApiGetWhiteLabelLogosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getWhiteLabelLogos(requestParameters: RebrandingApiGetWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Restores the white label logo text.
     * @summary Restore the white label logo text
     * @param {SettingsRebrandingApiRestoreWhiteLabelLogoTextRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public restoreWhiteLabelLogoText(requestParameters: RebrandingApiRestoreWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).restoreWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Restores the white label logos.
     * @summary Restore the white label logos
     * @param {SettingsRebrandingApiRestoreWhiteLabelLogosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public restoreWhiteLabelLogos(requestParameters: RebrandingApiRestoreWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).restoreWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the additional white label settings specified in the request.
     * @summary Save the additional white label settings
     * @param {SettingsRebrandingApiSaveAdditionalWhiteLabelSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveAdditionalWhiteLabelSettings(requestParameters: RebrandingApiSaveAdditionalWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveAdditionalWhiteLabelSettings(requestParameters.additionalWhiteLabelSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the company white label settings specified in the request.
     * @summary Save the company white label settings
     * @param {SettingsRebrandingApiSaveCompanyWhiteLabelSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveCompanyWhiteLabelSettings(requestParameters: RebrandingApiSaveCompanyWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveCompanyWhiteLabelSettings(requestParameters.companyWhiteLabelSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the white label logo text specified in the request.
     * @summary Save the white label logo text settings
     * @param {SettingsRebrandingApiSaveWhiteLabelLogoTextRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveWhiteLabelLogoText(requestParameters: RebrandingApiSaveWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, requestParameters.whiteLabelRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the white label logos specified in the request.
     * @summary Save the white label logos
     * @param {SettingsRebrandingApiSaveWhiteLabelSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveWhiteLabelSettings(requestParameters: RebrandingApiSaveWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveWhiteLabelSettings(requestParameters.isDark, requestParameters.isDefault, requestParameters.whiteLabelRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the white label logos from files.
     * @summary Save the white label logos from files
     * @param {SettingsRebrandingApiSaveWhiteLabelSettingsFromFilesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveWhiteLabelSettingsFromFiles(requestParameters: RebrandingApiSaveWhiteLabelSettingsFromFilesRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveWhiteLabelSettingsFromFiles(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }
}

