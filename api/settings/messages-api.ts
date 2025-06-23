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
import type { AdminMessageBaseSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { AdminMessageSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TurnOnAdminMessageSettingsRequestDto } from '../../models';
/**
 * SettingsMessagesApi - axios parameter creator
 * @export
 */
export const SettingsMessagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Displays the contact form on the \"Sign In\" page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.
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
 * SettingsMessagesApi - functional programming interface
 * @export
 */
export const SettingsMessagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsMessagesApiAxiosParamCreator(configuration)
    return {
        /**
         * Displays the contact form on the \"Sign In\" page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.
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
            const localVarOperationServerBasePath = operationServerMap['SettingsMessagesApi.enableAdminMessageSettings']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsMessagesApi.sendAdminMail']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['SettingsMessagesApi.sendJoinInviteMail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsMessagesApi - factory interface
 * @export
 */
export const SettingsMessagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsMessagesApiFp(configuration)
    return {
        /**
         * Displays the contact form on the \"Sign In\" page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.
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
 * SettingsMessagesApi - object-oriented interface
 * @export
 * @class SettingsMessagesApi
 * @extends {BaseAPI}
 */
export class SettingsMessagesApi extends BaseAPI {
    /**
     * Displays the contact form on the \"Sign In\" page, allowing users to send a message to the DocSpace administrator in case they encounter any issues while accessing DocSpace.
     * @summary Enable the administrator message settings
     * @param {TurnOnAdminMessageSettingsRequestDto} [turnOnAdminMessageSettingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsMessagesApi
     */
    public enableAdminMessageSettings(turnOnAdminMessageSettingsRequestDto?: TurnOnAdminMessageSettingsRequestDto, options?: RawAxiosRequestConfig) {
        return SettingsMessagesApiFp(this.configuration).enableAdminMessageSettings(turnOnAdminMessageSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a message to the administrator email when unauthorized users encounter issues accessing DocSpace.
     * @summary Send a message to the administrator
     * @param {AdminMessageSettingsRequestsDto} [adminMessageSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsMessagesApi
     */
    public sendAdminMail(adminMessageSettingsRequestsDto?: AdminMessageSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsMessagesApiFp(this.configuration).sendAdminMail(adminMessageSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends an invitation email with a link to the DocSpace.
     * @summary Sends an invitation email
     * @param {AdminMessageBaseSettingsRequestsDto} [adminMessageBaseSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsMessagesApi
     */
    public sendJoinInviteMail(adminMessageBaseSettingsRequestsDto?: AdminMessageBaseSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsMessagesApiFp(this.configuration).sendJoinInviteMail(adminMessageBaseSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

