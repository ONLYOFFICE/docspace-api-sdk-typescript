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
import type { AdminMessageBaseSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { AdminMessageSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TurnOnAdminMessageSettingsRequestDto } from '../../models';
/**
 * MessagesApi - axios parameter creator
 * @export
 */
export const MessagesApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Displays the contact form on the Sign In page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.
         * @summary Enable the administrator message settings
         * @param {TurnOnAdminMessageSettingsRequestDto} [turnOnAdminMessageSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for enableAdminMessageSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-admin-message-settings/
         */
        enableAdminMessageSettings: async (turnOnAdminMessageSettingsRequestDto?: TurnOnAdminMessageSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/messagesettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(turnOnAdminMessageSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.
         * @summary Send a message to the administrator
         * @param {AdminMessageSettingsRequestsDto} [adminMessageSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendAdminMail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-admin-mail/
         */
        sendAdminMail: async (adminMessageSettingsRequestsDto?: AdminMessageSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/sendadmmail`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(adminMessageSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends an invitation email with a link to the DocSpace.
         * @summary Sends an invitation email
         * @param {AdminMessageBaseSettingsRequestsDto} [adminMessageBaseSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendJoinInviteMail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-join-invite-mail/
         */
        sendJoinInviteMail: async (adminMessageBaseSettingsRequestsDto?: AdminMessageBaseSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/sendjoininvite`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(adminMessageBaseSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MessagesApi - functional programming interface
 * @export
 */
export const MessagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MessagesApiAxiosParamCreator(configuration)
    return {
        /**
         * Displays the contact form on the Sign In page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.
         * @summary Enable the administrator message settings
         * @param {TurnOnAdminMessageSettingsRequestDto} [turnOnAdminMessageSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for enableAdminMessageSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-admin-message-settings/
         */
        async enableAdminMessageSettings(turnOnAdminMessageSettingsRequestDto?: TurnOnAdminMessageSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enableAdminMessageSettings(turnOnAdminMessageSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MessagesApi.enableAdminMessageSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.
         * @summary Send a message to the administrator
         * @param {AdminMessageSettingsRequestsDto} [adminMessageSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendAdminMail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-admin-mail/
         */
        async sendAdminMail(adminMessageSettingsRequestsDto?: AdminMessageSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendAdminMail(adminMessageSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MessagesApi.sendAdminMail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends an invitation email with a link to the DocSpace.
         * @summary Sends an invitation email
         * @param {AdminMessageBaseSettingsRequestsDto} [adminMessageBaseSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendJoinInviteMail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-join-invite-mail/
         */
        async sendJoinInviteMail(adminMessageBaseSettingsRequestsDto?: AdminMessageBaseSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendJoinInviteMail(adminMessageBaseSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MessagesApi.sendJoinInviteMail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MessagesApi - factory interface
 * @export
 */
export const MessagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MessagesApiFp(configuration)
    return {
        /**
         * Displays the contact form on the Sign In page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.
         * @summary Enable the administrator message settings
         * @param {TurnOnAdminMessageSettingsRequestDto} [turnOnAdminMessageSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for enableAdminMessageSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-admin-message-settings/
         * @throws {RequiredError}
         */
        enableAdminMessageSettings(turnOnAdminMessageSettingsRequestDto?: TurnOnAdminMessageSettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.enableAdminMessageSettings(turnOnAdminMessageSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.
         * @summary Send a message to the administrator
         * @param {AdminMessageSettingsRequestsDto} [adminMessageSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for sendAdminMail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-admin-mail/
         * @throws {RequiredError}
         */
        sendAdminMail(adminMessageSettingsRequestsDto?: AdminMessageSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendAdminMail(adminMessageSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends an invitation email with a link to the DocSpace.
         * @summary Sends an invitation email
         * @param {AdminMessageBaseSettingsRequestsDto} [adminMessageBaseSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for sendJoinInviteMail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-join-invite-mail/
         * @throws {RequiredError}
         */
        sendJoinInviteMail(adminMessageBaseSettingsRequestsDto?: AdminMessageBaseSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendJoinInviteMail(adminMessageBaseSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MessagesApi - object-oriented interface
 * @export
 * @class MessagesApi
 * @extends {BaseAPI}
 */
export class MessagesApi extends BaseAPI {
    /**
     * Displays the contact form on the Sign In page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.
     * @summary Enable the administrator message settings
     * @param {TurnOnAdminMessageSettingsRequestDto} [turnOnAdminMessageSettingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public enableAdminMessageSettings(turnOnAdminMessageSettingsRequestDto?: TurnOnAdminMessageSettingsRequestDto, options?: RawAxiosRequestConfig) {
        return MessagesApiFp(this.configuration).enableAdminMessageSettings(turnOnAdminMessageSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.
     * @summary Send a message to the administrator
     * @param {AdminMessageSettingsRequestsDto} [adminMessageSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public sendAdminMail(adminMessageSettingsRequestsDto?: AdminMessageSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return MessagesApiFp(this.configuration).sendAdminMail(adminMessageSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends an invitation email with a link to the DocSpace.
     * @summary Sends an invitation email
     * @param {AdminMessageBaseSettingsRequestsDto} [adminMessageBaseSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public sendJoinInviteMail(adminMessageBaseSettingsRequestsDto?: AdminMessageBaseSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return MessagesApiFp(this.configuration).sendJoinInviteMail(adminMessageBaseSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

