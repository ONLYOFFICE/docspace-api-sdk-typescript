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
import type { ObjectArrayWrapper } from '../../models';
// @ts-ignore
import type { SetupCodeWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TfaRequestsDto } from '../../models';
// @ts-ignore
import type { TfaSettingsArrayWrapper } from '../../models';
// @ts-ignore
import type { TfaValidateRequestsDto } from '../../models';
/**
 * SettingsTFASettingsApi - axios parameter creator
 * @export
 */
export const SettingsTFASettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the two-factor authentication application codes.
         * @summary Get the TFA codes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-app-codes/
         */
        getTfaAppCodes: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tfaappcodes`;
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
         * Returns the confirmation email URL for authorization via SMS or TFA application.
         * @summary Get confirmation email
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaConfirmUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-confirm-url/
         */
        getTfaConfirmUrl: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tfaapp/confirm`;
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
         * Returns the current two-factor authentication settings.
         * @summary Get the TFA settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-settings/
         */
        getTfaSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tfaapp`;
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
         * Generates the setup TFA code for the current user.
         * @summary Generate setup code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for tfaAppGenerateSetupCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-app-generate-setup-code/
         */
        tfaAppGenerateSetupCode: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tfaapp/setup`;
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
         * Validates the two-factor authentication code specified in the request.
         * @summary Validate the TFA code
         * @param {TfaValidateRequestsDto} [tfaValidateRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for tfaValidateAuthCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-validate-auth-code/
         */
        tfaValidateAuthCode: async (tfaValidateRequestsDto?: TfaValidateRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tfaapp/validate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tfaValidateRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unlinks the current two-factor authentication application from the user account specified in the request.
         * @summary Unlink the TFA application
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkTfaApp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-tfa-app/
         */
        unlinkTfaApp: async (tfaRequestsDto?: TfaRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tfaappnewapp`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tfaRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Requests the new backup codes for the two-factor authentication application.
         * @summary Update the TFA codes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-app-codes/
         */
        updateTfaAppCodes: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tfaappnewcodes`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the two-factor authentication settings with the parameters specified in the request.
         * @summary Update the TFA settings
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings/
         */
        updateTfaSettings: async (tfaRequestsDto?: TfaRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tfaapp`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tfaRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the confirmation email URL for updating TFA settings.
         * @summary Get confirmation email for updating TFA settings
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaSettingsLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings-link/
         */
        updateTfaSettingsLink: async (tfaRequestsDto?: TfaRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/tfaappwithlink`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tfaRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsTFASettingsApi - functional programming interface
 * @export
 */
export const SettingsTFASettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsTFASettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the two-factor authentication application codes.
         * @summary Get the TFA codes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-app-codes/
         */
        async getTfaAppCodes(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTfaAppCodes(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsTFASettingsApi.getTfaAppCodes']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the confirmation email URL for authorization via SMS or TFA application.
         * @summary Get confirmation email
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaConfirmUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-confirm-url/
         */
        async getTfaConfirmUrl(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTfaConfirmUrl(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsTFASettingsApi.getTfaConfirmUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current two-factor authentication settings.
         * @summary Get the TFA settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-settings/
         */
        async getTfaSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TfaSettingsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTfaSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsTFASettingsApi.getTfaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Generates the setup TFA code for the current user.
         * @summary Generate setup code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for tfaAppGenerateSetupCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-app-generate-setup-code/
         */
        async tfaAppGenerateSetupCode(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SetupCodeWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tfaAppGenerateSetupCode(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsTFASettingsApi.tfaAppGenerateSetupCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Validates the two-factor authentication code specified in the request.
         * @summary Validate the TFA code
         * @param {TfaValidateRequestsDto} [tfaValidateRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for tfaValidateAuthCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-validate-auth-code/
         */
        async tfaValidateAuthCode(tfaValidateRequestsDto?: TfaValidateRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tfaValidateAuthCode(tfaValidateRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsTFASettingsApi.tfaValidateAuthCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Unlinks the current two-factor authentication application from the user account specified in the request.
         * @summary Unlink the TFA application
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkTfaApp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-tfa-app/
         */
        async unlinkTfaApp(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkTfaApp(tfaRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsTFASettingsApi.unlinkTfaApp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Requests the new backup codes for the two-factor authentication application.
         * @summary Update the TFA codes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-app-codes/
         */
        async updateTfaAppCodes(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTfaAppCodes(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsTFASettingsApi.updateTfaAppCodes']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the two-factor authentication settings with the parameters specified in the request.
         * @summary Update the TFA settings
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings/
         */
        async updateTfaSettings(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTfaSettings(tfaRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsTFASettingsApi.updateTfaSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the confirmation email URL for updating TFA settings.
         * @summary Get confirmation email for updating TFA settings
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateTfaSettingsLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings-link/
         */
        async updateTfaSettingsLink(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTfaSettingsLink(tfaRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsTFASettingsApi.updateTfaSettingsLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsTFASettingsApi - factory interface
 * @export
 */
export const SettingsTFASettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsTFASettingsApiFp(configuration)
    return {
        /**
         * Returns the two-factor authentication application codes.
         * @summary Get the TFA codes
         * @param {*} [options] Override http request option.
         * REST API Reference for getTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-app-codes/
         * @throws {RequiredError}
         */
        getTfaAppCodes(options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.getTfaAppCodes(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the confirmation email URL for authorization via SMS or TFA application.
         * @summary Get confirmation email
         * @param {*} [options] Override http request option.
         * REST API Reference for getTfaConfirmUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-confirm-url/
         * @throws {RequiredError}
         */
        getTfaConfirmUrl(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getTfaConfirmUrl(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current two-factor authentication settings.
         * @summary Get the TFA settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tfa-settings/
         * @throws {RequiredError}
         */
        getTfaSettings(options?: RawAxiosRequestConfig): AxiosPromise<TfaSettingsArrayWrapper> {
            return localVarFp.getTfaSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Generates the setup TFA code for the current user.
         * @summary Generate setup code
         * @param {*} [options] Override http request option.
         * REST API Reference for tfaAppGenerateSetupCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-app-generate-setup-code/
         * @throws {RequiredError}
         */
        tfaAppGenerateSetupCode(options?: RawAxiosRequestConfig): AxiosPromise<SetupCodeWrapper> {
            return localVarFp.tfaAppGenerateSetupCode(options).then((request) => request(axios, basePath));
        },
        /**
         * Validates the two-factor authentication code specified in the request.
         * @summary Validate the TFA code
         * @param {TfaValidateRequestsDto} [tfaValidateRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for tfaValidateAuthCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/tfa-validate-auth-code/
         * @throws {RequiredError}
         */
        tfaValidateAuthCode(tfaValidateRequestsDto?: TfaValidateRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.tfaValidateAuthCode(tfaValidateRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Unlinks the current two-factor authentication application from the user account specified in the request.
         * @summary Unlink the TFA application
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for unlinkTfaApp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-tfa-app/
         * @throws {RequiredError}
         */
        unlinkTfaApp(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.unlinkTfaApp(tfaRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Requests the new backup codes for the two-factor authentication application.
         * @summary Update the TFA codes
         * @param {*} [options] Override http request option.
         * REST API Reference for updateTfaAppCodes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-app-codes/
         * @throws {RequiredError}
         */
        updateTfaAppCodes(options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.updateTfaAppCodes(options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the two-factor authentication settings with the parameters specified in the request.
         * @summary Update the TFA settings
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateTfaSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings/
         * @throws {RequiredError}
         */
        updateTfaSettings(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updateTfaSettings(tfaRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the confirmation email URL for updating TFA settings.
         * @summary Get confirmation email for updating TFA settings
         * @param {TfaRequestsDto} [tfaRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateTfaSettingsLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-tfa-settings-link/
         * @throws {RequiredError}
         */
        updateTfaSettingsLink(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.updateTfaSettingsLink(tfaRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsTFASettingsApi - object-oriented interface
 * @export
 * @class SettingsTFASettingsApi
 * @extends {BaseAPI}
 */
export class SettingsTFASettingsApi extends BaseAPI {
    /**
     * Returns the two-factor authentication application codes.
     * @summary Get the TFA codes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsTFASettingsApi
     */
    public getTfaAppCodes(options?: RawAxiosRequestConfig) {
        return SettingsTFASettingsApiFp(this.configuration).getTfaAppCodes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the confirmation email URL for authorization via SMS or TFA application.
     * @summary Get confirmation email
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsTFASettingsApi
     */
    public getTfaConfirmUrl(options?: RawAxiosRequestConfig) {
        return SettingsTFASettingsApiFp(this.configuration).getTfaConfirmUrl(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current two-factor authentication settings.
     * @summary Get the TFA settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsTFASettingsApi
     */
    public getTfaSettings(options?: RawAxiosRequestConfig) {
        return SettingsTFASettingsApiFp(this.configuration).getTfaSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generates the setup TFA code for the current user.
     * @summary Generate setup code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsTFASettingsApi
     */
    public tfaAppGenerateSetupCode(options?: RawAxiosRequestConfig) {
        return SettingsTFASettingsApiFp(this.configuration).tfaAppGenerateSetupCode(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Validates the two-factor authentication code specified in the request.
     * @summary Validate the TFA code
     * @param {TfaValidateRequestsDto} [tfaValidateRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsTFASettingsApi
     */
    public tfaValidateAuthCode(tfaValidateRequestsDto?: TfaValidateRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsTFASettingsApiFp(this.configuration).tfaValidateAuthCode(tfaValidateRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unlinks the current two-factor authentication application from the user account specified in the request.
     * @summary Unlink the TFA application
     * @param {TfaRequestsDto} [tfaRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsTFASettingsApi
     */
    public unlinkTfaApp(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsTFASettingsApiFp(this.configuration).unlinkTfaApp(tfaRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Requests the new backup codes for the two-factor authentication application.
     * @summary Update the TFA codes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsTFASettingsApi
     */
    public updateTfaAppCodes(options?: RawAxiosRequestConfig) {
        return SettingsTFASettingsApiFp(this.configuration).updateTfaAppCodes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the two-factor authentication settings with the parameters specified in the request.
     * @summary Update the TFA settings
     * @param {TfaRequestsDto} [tfaRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsTFASettingsApi
     */
    public updateTfaSettings(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsTFASettingsApiFp(this.configuration).updateTfaSettings(tfaRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the confirmation email URL for updating TFA settings.
     * @summary Get confirmation email for updating TFA settings
     * @param {TfaRequestsDto} [tfaRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsTFASettingsApi
     */
    public updateTfaSettingsLink(tfaRequestsDto?: TfaRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsTFASettingsApiFp(this.configuration).updateTfaSettingsLink(tfaRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

