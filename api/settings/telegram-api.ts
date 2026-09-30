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
import type { ErrorApiResponse } from '../../models';
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
         * Reports whether the current user\'s account is linked to the portal\'s Telegram bot, and under which Telegram  username. The bot keys must be configured for the portal beforehand with `POST api/2.0/settings/authservice`;  until a bot is configured, linking cannot be completed and the status never reaches the linked state. Any  authenticated user may call it, and only for their own account: there is no way to read another member\'s  Telegram status. This is a read-only, idempotent call. The returned `status` is published as a number, where  `0` means the account is not linked, `1` means it is linked, and `2` means a registration link has been issued  and the portal is still waiting for the user to open it in Telegram. The `username` field is filled in only in  state `1` and comes back empty in the other two. Start or resume linking with  `GET api/2.0/settings/telegram/link`, and drop an established link with  `DELETE api/2.0/settings/telegram/link`.
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
         * Returns the personal `t.me` deep link that connects the current user\'s account to the portal\'s Telegram bot,  so that notifications can be delivered to that user in Telegram. The bot keys must be configured for the  portal beforehand with `POST api/2.0/settings/authservice`; without a configured bot name the response comes  back empty. Any authenticated user may call it, and the link always belongs to the caller\'s own account. The  call mutates state: unless the user still has an outstanding registration token it issues a fresh one, so  calling it twice in a row hands back the same link instead of invalidating the first. That token is  short-lived (20 minutes with the default configuration), and once it has expired the operation has to be  called again for a new link. Linking itself is completed in Telegram, not here, so poll  `GET api/2.0/settings/telegram/check` until its `status` becomes `1`. Remove an established link with  `DELETE api/2.0/settings/telegram/link`.
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
         * Removes the link between the current user\'s account and the portal\'s Telegram bot, so that this user stops  receiving notifications in Telegram. Any authenticated user may call it, and only for their own account: one  member cannot unlink another. Nothing has to be linked beforehand, and the call is destructive but idempotent,  returning `true` both when a link was removed and when there was none to remove, so a retry after a timeout is  safe. Only the portal-side link is dropped: the chat itself stays in the user\'s Telegram, and the portal\'s bot  configuration is untouched, so the other members keep their own links. Re-linking is not automatic, request a  new link with `GET api/2.0/settings/telegram/link` and confirm the result with  `GET api/2.0/settings/telegram/check`. Delivery over the other notification channels is unaffected; the  channels enabled for the portal are listed by `GET api/2.0/settings/notification/channels`.
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
         * Reports whether the current user\'s account is linked to the portal\'s Telegram bot, and under which Telegram  username. The bot keys must be configured for the portal beforehand with `POST api/2.0/settings/authservice`;  until a bot is configured, linking cannot be completed and the status never reaches the linked state. Any  authenticated user may call it, and only for their own account: there is no way to read another member\'s  Telegram status. This is a read-only, idempotent call. The returned `status` is published as a number, where  `0` means the account is not linked, `1` means it is linked, and `2` means a registration link has been issued  and the portal is still waiting for the user to open it in Telegram. The `username` field is filled in only in  state `1` and comes back empty in the other two. Start or resume linking with  `GET api/2.0/settings/telegram/link`, and drop an established link with  `DELETE api/2.0/settings/telegram/link`.
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
         * Returns the personal `t.me` deep link that connects the current user\'s account to the portal\'s Telegram bot,  so that notifications can be delivered to that user in Telegram. The bot keys must be configured for the  portal beforehand with `POST api/2.0/settings/authservice`; without a configured bot name the response comes  back empty. Any authenticated user may call it, and the link always belongs to the caller\'s own account. The  call mutates state: unless the user still has an outstanding registration token it issues a fresh one, so  calling it twice in a row hands back the same link instead of invalidating the first. That token is  short-lived (20 minutes with the default configuration), and once it has expired the operation has to be  called again for a new link. Linking itself is completed in Telegram, not here, so poll  `GET api/2.0/settings/telegram/check` until its `status` becomes `1`. Remove an established link with  `DELETE api/2.0/settings/telegram/link`.
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
         * Removes the link between the current user\'s account and the portal\'s Telegram bot, so that this user stops  receiving notifications in Telegram. Any authenticated user may call it, and only for their own account: one  member cannot unlink another. Nothing has to be linked beforehand, and the call is destructive but idempotent,  returning `true` both when a link was removed and when there was none to remove, so a retry after a timeout is  safe. Only the portal-side link is dropped: the chat itself stays in the user\'s Telegram, and the portal\'s bot  configuration is untouched, so the other members keep their own links. Re-linking is not automatic, request a  new link with `GET api/2.0/settings/telegram/link` and confirm the result with  `GET api/2.0/settings/telegram/check`. Delivery over the other notification channels is unaffected; the  channels enabled for the portal are listed by `GET api/2.0/settings/notification/channels`.
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
         * Reports whether the current user\'s account is linked to the portal\'s Telegram bot, and under which Telegram  username. The bot keys must be configured for the portal beforehand with `POST api/2.0/settings/authservice`;  until a bot is configured, linking cannot be completed and the status never reaches the linked state. Any  authenticated user may call it, and only for their own account: there is no way to read another member\'s  Telegram status. This is a read-only, idempotent call. The returned `status` is published as a number, where  `0` means the account is not linked, `1` means it is linked, and `2` means a registration link has been issued  and the portal is still waiting for the user to open it in Telegram. The `username` field is filled in only in  state `1` and comes back empty in the other two. Start or resume linking with  `GET api/2.0/settings/telegram/link`, and drop an established link with  `DELETE api/2.0/settings/telegram/link`.
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
         * Returns the personal `t.me` deep link that connects the current user\'s account to the portal\'s Telegram bot,  so that notifications can be delivered to that user in Telegram. The bot keys must be configured for the  portal beforehand with `POST api/2.0/settings/authservice`; without a configured bot name the response comes  back empty. Any authenticated user may call it, and the link always belongs to the caller\'s own account. The  call mutates state: unless the user still has an outstanding registration token it issues a fresh one, so  calling it twice in a row hands back the same link instead of invalidating the first. That token is  short-lived (20 minutes with the default configuration), and once it has expired the operation has to be  called again for a new link. Linking itself is completed in Telegram, not here, so poll  `GET api/2.0/settings/telegram/check` until its `status` becomes `1`. Remove an established link with  `DELETE api/2.0/settings/telegram/link`.
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
         * Removes the link between the current user\'s account and the portal\'s Telegram bot, so that this user stops  receiving notifications in Telegram. Any authenticated user may call it, and only for their own account: one  member cannot unlink another. Nothing has to be linked beforehand, and the call is destructive but idempotent,  returning `true` both when a link was removed and when there was none to remove, so a retry after a timeout is  safe. Only the portal-side link is dropped: the chat itself stays in the user\'s Telegram, and the portal\'s bot  configuration is untouched, so the other members keep their own links. Re-linking is not automatic, request a  new link with `GET api/2.0/settings/telegram/link` and confirm the result with  `GET api/2.0/settings/telegram/check`. Delivery over the other notification channels is unaffected; the  channels enabled for the portal are listed by `GET api/2.0/settings/notification/channels`.
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
     * Reports whether the current user\'s account is linked to the portal\'s Telegram bot, and under which Telegram  username. The bot keys must be configured for the portal beforehand with `POST api/2.0/settings/authservice`;  until a bot is configured, linking cannot be completed and the status never reaches the linked state. Any  authenticated user may call it, and only for their own account: there is no way to read another member\'s  Telegram status. This is a read-only, idempotent call. The returned `status` is published as a number, where  `0` means the account is not linked, `1` means it is linked, and `2` means a registration link has been issued  and the portal is still waiting for the user to open it in Telegram. The `username` field is filled in only in  state `1` and comes back empty in the other two. Start or resume linking with  `GET api/2.0/settings/telegram/link`, and drop an established link with  `DELETE api/2.0/settings/telegram/link`.
     * @summary Check the Telegram connection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TelegramApi
     */
    public checkTelegram(options?: RawAxiosRequestConfig) {
        return TelegramApiFp(this.configuration).checkTelegram(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the personal `t.me` deep link that connects the current user\'s account to the portal\'s Telegram bot,  so that notifications can be delivered to that user in Telegram. The bot keys must be configured for the  portal beforehand with `POST api/2.0/settings/authservice`; without a configured bot name the response comes  back empty. Any authenticated user may call it, and the link always belongs to the caller\'s own account. The  call mutates state: unless the user still has an outstanding registration token it issues a fresh one, so  calling it twice in a row hands back the same link instead of invalidating the first. That token is  short-lived (20 minutes with the default configuration), and once it has expired the operation has to be  called again for a new link. Linking itself is completed in Telegram, not here, so poll  `GET api/2.0/settings/telegram/check` until its `status` becomes `1`. Remove an established link with  `DELETE api/2.0/settings/telegram/link`.
     * @summary Get the Telegram link
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TelegramApi
     */
    public linkTelegram(options?: RawAxiosRequestConfig) {
        return TelegramApiFp(this.configuration).linkTelegram(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the link between the current user\'s account and the portal\'s Telegram bot, so that this user stops  receiving notifications in Telegram. Any authenticated user may call it, and only for their own account: one  member cannot unlink another. Nothing has to be linked beforehand, and the call is destructive but idempotent,  returning `true` both when a link was removed and when there was none to remove, so a retry after a timeout is  safe. Only the portal-side link is dropped: the chat itself stays in the user\'s Telegram, and the portal\'s bot  configuration is untouched, so the other members keep their own links. Re-linking is not automatic, request a  new link with `GET api/2.0/settings/telegram/link` and confirm the result with  `GET api/2.0/settings/telegram/check`. Delivery over the other notification channels is unaffected; the  channels enabled for the portal are listed by `GET api/2.0/settings/notification/channels`.
     * @summary Unlink Telegram
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TelegramApi
     */
    public unlinkTelegram(options?: RawAxiosRequestConfig) {
        return TelegramApiFp(this.configuration).unlinkTelegram(options).then((request) => request(this.axios, this.basePath));
    }
}

