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
import type { AdditionalWhiteLabelSettingsWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsArrayWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsWrapper } from '../../models';
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
 * SettingsRebrandingApi - axios parameter creator
 * @export
 */
export const SettingsRebrandingApiAxiosParamCreator = function (configuration?: Configuration) {
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
         * Specifies if the white label logo text are default or not.
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
 * SettingsRebrandingApi - functional programming interface
 * @export
 */
export const SettingsRebrandingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsRebrandingApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes the additional white label settings.
         * @summary Delete the additional white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-additional-white-label-settings/
         */
        async deleteAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdditionalWhiteLabelSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAdditionalWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.deleteAdditionalWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
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
        async deleteCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyWhiteLabelSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCompanyWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.deleteCompanyWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
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
        async getAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdditionalWhiteLabelSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAdditionalWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.getAdditionalWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
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
        async getCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyWhiteLabelSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompanyWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.getCompanyWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.getEnableWhitelabel']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Specifies if the white label logo text are default or not.
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.getIsDefaultWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.getIsDefaultWhiteLabelLogos']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.getLicensorData']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.getWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.getWhiteLabelLogos']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.restoreWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.restoreWhiteLabelLogos']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.saveAdditionalWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.saveCompanyWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.saveWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.saveWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsRebrandingApi.saveWhiteLabelSettingsFromFiles']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsRebrandingApi - factory interface
 * @export
 */
export const SettingsRebrandingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsRebrandingApiFp(configuration)
    return {
        /**
         * Deletes the additional white label settings.
         * @summary Delete the additional white label settings
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-additional-white-label-settings/
         * @throws {RequiredError}
         */
        deleteAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<AdditionalWhiteLabelSettingsWrapper> {
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
        deleteCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<CompanyWhiteLabelSettingsWrapper> {
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
        getAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<AdditionalWhiteLabelSettingsWrapper> {
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
        getCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<CompanyWhiteLabelSettingsWrapper> {
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
         * Specifies if the white label logo text are default or not.
         * @summary Check the default white label logo text
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsDefaultWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logo-text/
         * @throws {RequiredError}
         */
        getIsDefaultWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<IsDefaultWhiteLabelLogosWrapper> {
            return localVarFp.getIsDefaultWhiteLabelLogoText(isDark, isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Specifies if the white label logos are default or not.
         * @summary Check the default white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsDefaultWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logos/
         * @throws {RequiredError}
         */
        getIsDefaultWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<IsDefaultWhiteLabelLogosArrayWrapper> {
            return localVarFp.getIsDefaultWhiteLabelLogos(isDark, isDefault, options).then((request) => request(axios, basePath));
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
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logo-text/
         * @throws {RequiredError}
         */
        getWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getWhiteLabelLogoText(isDark, isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the white label logos.
         * @summary Get the white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logos/
         * @throws {RequiredError}
         */
        getWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<WhiteLabelItemArrayWrapper> {
            return localVarFp.getWhiteLabelLogos(isDark, isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Restores the white label logo text.
         * @summary Restore the white label logo text
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logo-text/
         * @throws {RequiredError}
         */
        restoreWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.restoreWhiteLabelLogoText(isDark, isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Restores the white label logos.
         * @summary Restore the white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logos/
         * @throws {RequiredError}
         */
        restoreWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.restoreWhiteLabelLogos(isDark, isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the additional white label settings specified in the request.
         * @summary Save the additional white label settings
         * @param {AdditionalWhiteLabelSettingsWrapper} [additionalWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-additional-white-label-settings/
         * @throws {RequiredError}
         */
        saveAdditionalWhiteLabelSettings(additionalWhiteLabelSettingsWrapper?: AdditionalWhiteLabelSettingsWrapper, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveAdditionalWhiteLabelSettings(additionalWhiteLabelSettingsWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the company white label settings specified in the request.
         * @summary Save the company white label settings
         * @param {CompanyWhiteLabelSettingsWrapper} [companyWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-company-white-label-settings/
         * @throws {RequiredError}
         */
        saveCompanyWhiteLabelSettings(companyWhiteLabelSettingsWrapper?: CompanyWhiteLabelSettingsWrapper, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveCompanyWhiteLabelSettings(companyWhiteLabelSettingsWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the white label logo text specified in the request.
         * @summary Save the white label logo text settings
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-logo-text/
         * @throws {RequiredError}
         */
        saveWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveWhiteLabelLogoText(isDark, isDefault, whiteLabelRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the white label logos specified in the request.
         * @summary Save the white label logos
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings/
         * @throws {RequiredError}
         */
        saveWhiteLabelSettings(isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveWhiteLabelSettings(isDark, isDefault, whiteLabelRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the white label logos from files.
         * @summary Save the white label logos from files
         * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
         * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveWhiteLabelSettingsFromFiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings-from-files/
         * @throws {RequiredError}
         */
        saveWhiteLabelSettingsFromFiles(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveWhiteLabelSettingsFromFiles(isDark, isDefault, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsRebrandingApi - object-oriented interface
 * @export
 * @class SettingsRebrandingApi
 * @extends {BaseAPI}
 */
export class SettingsRebrandingApi extends BaseAPI {
    /**
     * Deletes the additional white label settings.
     * @summary Delete the additional white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public deleteAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).deleteAdditionalWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the company white label settings.
     * @summary Delete the company white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public deleteCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).deleteCompanyWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the additional white label settings.
     * @summary Get the additional white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public getAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).getAdditionalWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the company white label settings.
     * @summary Get the company white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public getCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).getCompanyWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the white label is enabled or not.
     * @summary Check the white label availability
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public getEnableWhitelabel(options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).getEnableWhitelabel(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Specifies if the white label logo text are default or not.
     * @summary Check the default white label logo text
     * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public getIsDefaultWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).getIsDefaultWhiteLabelLogoText(isDark, isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Specifies if the white label logos are default or not.
     * @summary Check the default white label logos
     * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public getIsDefaultWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).getIsDefaultWhiteLabelLogos(isDark, isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the licensor data.
     * @summary Get the licensor data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public getLicensorData(options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).getLicensorData(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the white label logo text.
     * @summary Get the white label logo text
     * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public getWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).getWhiteLabelLogoText(isDark, isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the white label logos.
     * @summary Get the white label logos
     * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public getWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).getWhiteLabelLogos(isDark, isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Restores the white label logo text.
     * @summary Restore the white label logo text
     * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public restoreWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).restoreWhiteLabelLogoText(isDark, isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Restores the white label logos.
     * @summary Restore the white label logos
     * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public restoreWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).restoreWhiteLabelLogos(isDark, isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the additional white label settings specified in the request.
     * @summary Save the additional white label settings
     * @param {AdditionalWhiteLabelSettingsWrapper} [additionalWhiteLabelSettingsWrapper] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public saveAdditionalWhiteLabelSettings(additionalWhiteLabelSettingsWrapper?: AdditionalWhiteLabelSettingsWrapper, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).saveAdditionalWhiteLabelSettings(additionalWhiteLabelSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the company white label settings specified in the request.
     * @summary Save the company white label settings
     * @param {CompanyWhiteLabelSettingsWrapper} [companyWhiteLabelSettingsWrapper] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public saveCompanyWhiteLabelSettings(companyWhiteLabelSettingsWrapper?: CompanyWhiteLabelSettingsWrapper, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).saveCompanyWhiteLabelSettings(companyWhiteLabelSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the white label logo text specified in the request.
     * @summary Save the white label logo text settings
     * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public saveWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).saveWhiteLabelLogoText(isDark, isDefault, whiteLabelRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the white label logos specified in the request.
     * @summary Save the white label logos
     * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public saveWhiteLabelSettings(isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).saveWhiteLabelSettings(isDark, isDefault, whiteLabelRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the white label logos from files.
     * @summary Save the white label logos from files
     * @param {boolean} [isDark] Specifies if the white label logo is for the dark theme or not.
     * @param {boolean} [isDefault] Specifies if the logo is for a default tenant or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsRebrandingApi
     */
    public saveWhiteLabelSettingsFromFiles(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsRebrandingApiFp(this.configuration).saveWhiteLabelSettingsFromFiles(isDark, isDefault, options).then((request) => request(this.axios, this.basePath));
    }
}

