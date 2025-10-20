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
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TelegramStatusWrapper } from '../../models';
/**
 * TelegramApi - axios parameter creator
 * @export
 */
export const TelegramApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Checks if the current user is connected to the Telegram Bot or not.
         * @summary Check the Telegram connection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkTelegram operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-telegram/
         */
        checkTelegram: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/telegram/check`;
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
         * Returns a link that will connect the Telegram Bot to your account.
         * @summary Get the Telegram link
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for linkTelegram operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-telegram/
         */
        linkTelegram: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/telegram/link`;
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
         * Unlinks the Telegram Bot from your account.
         * @summary Unlink Telegram
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkTelegram operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-telegram/
         */
        unlinkTelegram: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/telegram/link`;
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
    }
};

/**
 * TelegramApi - functional programming interface
 * @export
 */
export const TelegramApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TelegramApiAxiosParamCreator(configuration)
    return {
        /**
         * Checks if the current user is connected to the Telegram Bot or not.
         * @summary Check the Telegram connection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkTelegram operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-telegram/
         */
        async checkTelegram(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TelegramStatusWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkTelegram(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TelegramApi.checkTelegram']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a link that will connect the Telegram Bot to your account.
         * @summary Get the Telegram link
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for linkTelegram operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-telegram/
         */
        async linkTelegram(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.linkTelegram(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TelegramApi.linkTelegram']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Unlinks the Telegram Bot from your account.
         * @summary Unlink Telegram
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkTelegram operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-telegram/
         */
        async unlinkTelegram(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkTelegram(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TelegramApi.unlinkTelegram']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TelegramApi - factory interface
 * @export
 */
export const TelegramApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TelegramApiFp(configuration)
    return {
        /**
         * Checks if the current user is connected to the Telegram Bot or not.
         * @summary Check the Telegram connection
         * @param {*} [options] Override http request option.
         * REST API Reference for checkTelegram operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-telegram/
         * @throws {RequiredError}
         */
        checkTelegram(options?: RawAxiosRequestConfig): AxiosPromise<TelegramStatusWrapper> {
            return localVarFp.checkTelegram(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a link that will connect the Telegram Bot to your account.
         * @summary Get the Telegram link
         * @param {*} [options] Override http request option.
         * REST API Reference for linkTelegram operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-telegram/
         * @throws {RequiredError}
         */
        linkTelegram(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.linkTelegram(options).then((request) => request(axios, basePath));
        },
        /**
         * Unlinks the Telegram Bot from your account.
         * @summary Unlink Telegram
         * @param {*} [options] Override http request option.
         * REST API Reference for unlinkTelegram operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-telegram/
         * @throws {RequiredError}
         */
        unlinkTelegram(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.unlinkTelegram(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TelegramApi - object-oriented interface
 * @export
 * @class TelegramApi
 * @extends {BaseAPI}
 */
export class TelegramApi extends BaseAPI {
    /**
     * Checks if the current user is connected to the Telegram Bot or not.
     * @summary Check the Telegram connection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TelegramApi
     */
    public checkTelegram(options?: RawAxiosRequestConfig) {
        return TelegramApiFp(this.configuration).checkTelegram(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a link that will connect the Telegram Bot to your account.
     * @summary Get the Telegram link
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TelegramApi
     */
    public linkTelegram(options?: RawAxiosRequestConfig) {
        return TelegramApiFp(this.configuration).linkTelegram(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unlinks the Telegram Bot from your account.
     * @summary Unlink Telegram
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TelegramApi
     */
    public unlinkTelegram(options?: RawAxiosRequestConfig) {
        return TelegramApiFp(this.configuration).unlinkTelegram(options).then((request) => request(this.axios, this.basePath));
    }
}

