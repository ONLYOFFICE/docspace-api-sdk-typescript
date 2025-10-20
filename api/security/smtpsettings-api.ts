/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { SmtpOperationStatusRequestsWrapper } from '../../models';
// @ts-ignore
import type { SmtpSettingsDto } from '../../models';
// @ts-ignore
import type { SmtpSettingsWrapper } from '../../models';
/**
 * SMTPSettingsApi - axios parameter creator
 * @export
 */
export const SMTPSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Returns the status of the SMTP testing process.
         * @summary Get the SMTP testing process status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSmtpOperationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-smtp-operation-status/
         */
        getSmtpOperationStatus: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp/test/status`;
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
         * Returns the current portal SMTP settings.
         * @summary Get the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-smtp-settings/
         */
        getSmtpSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp`;
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
         * Resets the SMTP settings of the current portal.
         * @summary Reset the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-smtp-settings/
         */
        resetSmtpSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp`;
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
         * Saves the SMTP settings for the current portal.
         * @summary Save the SMTP settings
         * @param {SmtpSettingsDto} [smtpSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-smtp-settings/
         */
        saveSmtpSettings: async (smtpSettingsDto?: SmtpSettingsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(smtpSettingsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Tests the SMTP settings for the current portal (sends test message to the user email).
         * @summary Test the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for testSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/test-smtp-settings/
         */
        testSmtpSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/smtpsettings/smtp/test`;
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
 * SMTPSettingsApi - functional programming interface
 * @export
 */
export const SMTPSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SMTPSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the status of the SMTP testing process.
         * @summary Get the SMTP testing process status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSmtpOperationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-smtp-operation-status/
         */
        async getSmtpOperationStatus(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpOperationStatusRequestsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSmtpOperationStatus(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SMTPSettingsApi.getSmtpOperationStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current portal SMTP settings.
         * @summary Get the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-smtp-settings/
         */
        async getSmtpSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSmtpSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SMTPSettingsApi.getSmtpSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the SMTP settings of the current portal.
         * @summary Reset the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-smtp-settings/
         */
        async resetSmtpSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetSmtpSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SMTPSettingsApi.resetSmtpSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the SMTP settings for the current portal.
         * @summary Save the SMTP settings
         * @param {SmtpSettingsDto} [smtpSettingsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-smtp-settings/
         */
        async saveSmtpSettings(smtpSettingsDto?: SmtpSettingsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveSmtpSettings(smtpSettingsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SMTPSettingsApi.saveSmtpSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Tests the SMTP settings for the current portal (sends test message to the user email).
         * @summary Test the SMTP settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for testSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/test-smtp-settings/
         */
        async testSmtpSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmtpOperationStatusRequestsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testSmtpSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SMTPSettingsApi.testSmtpSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SMTPSettingsApi - factory interface
 * @export
 */
export const SMTPSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SMTPSettingsApiFp(configuration)
    return {
        /**
         * Returns the status of the SMTP testing process.
         * @summary Get the SMTP testing process status
         * @param {*} [options] Override http request option.
         * REST API Reference for getSmtpOperationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-smtp-operation-status/
         * @throws {RequiredError}
         */
        getSmtpOperationStatus(options?: RawAxiosRequestConfig): AxiosPromise<SmtpOperationStatusRequestsWrapper> {
            return localVarFp.getSmtpOperationStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current portal SMTP settings.
         * @summary Get the SMTP settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-smtp-settings/
         * @throws {RequiredError}
         */
        getSmtpSettings(options?: RawAxiosRequestConfig): AxiosPromise<SmtpSettingsWrapper> {
            return localVarFp.getSmtpSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the SMTP settings of the current portal.
         * @summary Reset the SMTP settings
         * @param {*} [options] Override http request option.
         * REST API Reference for resetSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-smtp-settings/
         * @throws {RequiredError}
         */
        resetSmtpSettings(options?: RawAxiosRequestConfig): AxiosPromise<SmtpSettingsWrapper> {
            return localVarFp.resetSmtpSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the SMTP settings for the current portal.
         * @summary Save the SMTP settings
         * @param {SmtpSettingsDto} [smtpSettingsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-smtp-settings/
         * @throws {RequiredError}
         */
        saveSmtpSettings(smtpSettingsDto?: SmtpSettingsDto, options?: RawAxiosRequestConfig): AxiosPromise<SmtpSettingsWrapper> {
            return localVarFp.saveSmtpSettings(smtpSettingsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Tests the SMTP settings for the current portal (sends test message to the user email).
         * @summary Test the SMTP settings
         * @param {*} [options] Override http request option.
         * REST API Reference for testSmtpSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/test-smtp-settings/
         * @throws {RequiredError}
         */
        testSmtpSettings(options?: RawAxiosRequestConfig): AxiosPromise<SmtpOperationStatusRequestsWrapper> {
            return localVarFp.testSmtpSettings(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SMTPSettingsApi - object-oriented interface
 * @export
 * @class SMTPSettingsApi
 * @extends {BaseAPI}
 */
export class SMTPSettingsApi extends BaseAPI {
    /**
     * Returns the status of the SMTP testing process.
     * @summary Get the SMTP testing process status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SMTPSettingsApi
     */
    public getSmtpOperationStatus(options?: RawAxiosRequestConfig) {
        return SMTPSettingsApiFp(this.configuration).getSmtpOperationStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current portal SMTP settings.
     * @summary Get the SMTP settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SMTPSettingsApi
     */
    public getSmtpSettings(options?: RawAxiosRequestConfig) {
        return SMTPSettingsApiFp(this.configuration).getSmtpSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the SMTP settings of the current portal.
     * @summary Reset the SMTP settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SMTPSettingsApi
     */
    public resetSmtpSettings(options?: RawAxiosRequestConfig) {
        return SMTPSettingsApiFp(this.configuration).resetSmtpSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the SMTP settings for the current portal.
     * @summary Save the SMTP settings
     * @param {SmtpSettingsDto} [smtpSettingsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SMTPSettingsApi
     */
    public saveSmtpSettings(smtpSettingsDto?: SmtpSettingsDto, options?: RawAxiosRequestConfig) {
        return SMTPSettingsApiFp(this.configuration).saveSmtpSettings(smtpSettingsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Tests the SMTP settings for the current portal (sends test message to the user email).
     * @summary Test the SMTP settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SMTPSettingsApi
     */
    public testSmtpSettings(options?: RawAxiosRequestConfig) {
        return SMTPSettingsApiFp(this.configuration).testSmtpSettings(options).then((request) => request(this.axios, this.basePath));
    }
}

