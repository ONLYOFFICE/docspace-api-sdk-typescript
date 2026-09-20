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
import type { AdminMessageBaseSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { AdminMessageSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
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
         * Switches on or off the contact form the sign-in page offers a visitor who cannot get into the portal, and  which delivers their message to the portal administrators. The caller needs the portal-settings right of a  DocSpace administrator - the portal owner and a DocSpace administrator qualify, any other member is refused.  Send the new state as `turnOn`: `true` publishes the form, `false` hides it. The change covers the whole  portal, applies to the next sign-in page without a restart, is recorded in the audit trail, and repeating the  call with the same value leaves the portal as it is. What comes back is a localized confirmation message  rather than the stored flag - read the flag as `enableAdmMess` from `GET api/2.0/settings`, which needs no  token. That flag is also forced on while the portal\'s payment has lapsed, so it can report `true` on a portal  where the form was switched off here. The form itself posts to `POST api/2.0/settings/sendadmmail` and this  setting gates nothing else: the notifications administrators receive as portal members are subscribed  separately with `POST api/2.0/settings/notification`.
         * @summary Enable or disable administrator messages
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
         * Sends a message from someone who cannot get into the portal to its administrators - the contact form the  sign-in page offers unauthenticated visitors. No token is needed. The form has to be published first with  `POST api/2.0/settings/messagesettings` unless the portal\'s payment has lapsed, otherwise nothing is sent;  `enableAdmMess` in `GET api/2.0/settings` reports whether the call is worth making. `email` is the address the  administrators answer to and has to be a real address, and `message` is reduced to plain text first, so a body  carrying nothing but markup counts as empty - either fault is refused with 400. When the caller is not signed  in and this installation has a CAPTCHA configured, `recaptchaResponse` has to carry a solved challenge of the  `recaptchaType` that `GET api/2.0/settings` publishes together with the site key, and a missing or stale  answer refuses the call. `culture` picks the language of the letter. Delivery is queued and reaches the  administrators subscribed to administrator notifications, so a confirmed call means accepted rather than read,  and the answer is a localized confirmation. Attempts are rate limited per address and per operation, and  further ones are refused with 429.
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Sends an invitation email with a join link to the address in the request - the self-registration the sign-in  page\'s register link performs. No token is needed. The portal has to publish a trusted-domain policy first,  saved with `POST api/2.0/settings/maildomainsettings`: without one there is nothing to join and every caller  alike is answered with 405 - the same condition `GET api/2.0/settings` reports as `enabledJoin`. `email` has  to be a real address written in ASCII rather than an internationalized one, must not already belong to a  portal member, and, when the policy names domains rather than accepting all of them, has to end with one of  them - each of those faults is refused with 400. `culture` picks the language of the letter. The invitation is  not an account: the invitee becomes a member only after following the link, and the role it grants, user or  room administrator, follows the trusted-domain settings and drops to user once the portal\'s paid places are  taken. Where the installation caps invitations, an accepted call spends one of those counted by  `invitationLimit`, and only about a dozen calls from one address in two minutes are accepted. What comes back  is a localized confirmation.
         * @summary Send an invitation email
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

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * Switches on or off the contact form the sign-in page offers a visitor who cannot get into the portal, and  which delivers their message to the portal administrators. The caller needs the portal-settings right of a  DocSpace administrator - the portal owner and a DocSpace administrator qualify, any other member is refused.  Send the new state as `turnOn`: `true` publishes the form, `false` hides it. The change covers the whole  portal, applies to the next sign-in page without a restart, is recorded in the audit trail, and repeating the  call with the same value leaves the portal as it is. What comes back is a localized confirmation message  rather than the stored flag - read the flag as `enableAdmMess` from `GET api/2.0/settings`, which needs no  token. That flag is also forced on while the portal\'s payment has lapsed, so it can report `true` on a portal  where the form was switched off here. The form itself posts to `POST api/2.0/settings/sendadmmail` and this  setting gates nothing else: the notifications administrators receive as portal members are subscribed  separately with `POST api/2.0/settings/notification`.
         * @summary Enable or disable administrator messages
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
         * Sends a message from someone who cannot get into the portal to its administrators - the contact form the  sign-in page offers unauthenticated visitors. No token is needed. The form has to be published first with  `POST api/2.0/settings/messagesettings` unless the portal\'s payment has lapsed, otherwise nothing is sent;  `enableAdmMess` in `GET api/2.0/settings` reports whether the call is worth making. `email` is the address the  administrators answer to and has to be a real address, and `message` is reduced to plain text first, so a body  carrying nothing but markup counts as empty - either fault is refused with 400. When the caller is not signed  in and this installation has a CAPTCHA configured, `recaptchaResponse` has to carry a solved challenge of the  `recaptchaType` that `GET api/2.0/settings` publishes together with the site key, and a missing or stale  answer refuses the call. `culture` picks the language of the letter. Delivery is queued and reaches the  administrators subscribed to administrator notifications, so a confirmed call means accepted rather than read,  and the answer is a localized confirmation. Attempts are rate limited per address and per operation, and  further ones are refused with 429.
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
         * Sends an invitation email with a join link to the address in the request - the self-registration the sign-in  page\'s register link performs. No token is needed. The portal has to publish a trusted-domain policy first,  saved with `POST api/2.0/settings/maildomainsettings`: without one there is nothing to join and every caller  alike is answered with 405 - the same condition `GET api/2.0/settings` reports as `enabledJoin`. `email` has  to be a real address written in ASCII rather than an internationalized one, must not already belong to a  portal member, and, when the policy names domains rather than accepting all of them, has to end with one of  them - each of those faults is refused with 400. `culture` picks the language of the letter. The invitation is  not an account: the invitee becomes a member only after following the link, and the role it grants, user or  room administrator, follows the trusted-domain settings and drops to user once the portal\'s paid places are  taken. Where the installation caps invitations, an accepted call spends one of those counted by  `invitationLimit`, and only about a dozen calls from one address in two minutes are accepted. What comes back  is a localized confirmation.
         * @summary Send an invitation email
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
         * Switches on or off the contact form the sign-in page offers a visitor who cannot get into the portal, and  which delivers their message to the portal administrators. The caller needs the portal-settings right of a  DocSpace administrator - the portal owner and a DocSpace administrator qualify, any other member is refused.  Send the new state as `turnOn`: `true` publishes the form, `false` hides it. The change covers the whole  portal, applies to the next sign-in page without a restart, is recorded in the audit trail, and repeating the  call with the same value leaves the portal as it is. What comes back is a localized confirmation message  rather than the stored flag - read the flag as `enableAdmMess` from `GET api/2.0/settings`, which needs no  token. That flag is also forced on while the portal\'s payment has lapsed, so it can report `true` on a portal  where the form was switched off here. The form itself posts to `POST api/2.0/settings/sendadmmail` and this  setting gates nothing else: the notifications administrators receive as portal members are subscribed  separately with `POST api/2.0/settings/notification`.
         * @summary Enable or disable administrator messages
         * @param {MessagesApiEnableAdminMessageSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for enableAdminMessageSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-admin-message-settings/
         * @throws {RequiredError}
         */
        enableAdminMessageSettings(requestParameters: MessagesApiEnableAdminMessageSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.enableAdminMessageSettings(requestParameters.turnOnAdminMessageSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a message from someone who cannot get into the portal to its administrators - the contact form the  sign-in page offers unauthenticated visitors. No token is needed. The form has to be published first with  `POST api/2.0/settings/messagesettings` unless the portal\'s payment has lapsed, otherwise nothing is sent;  `enableAdmMess` in `GET api/2.0/settings` reports whether the call is worth making. `email` is the address the  administrators answer to and has to be a real address, and `message` is reduced to plain text first, so a body  carrying nothing but markup counts as empty - either fault is refused with 400. When the caller is not signed  in and this installation has a CAPTCHA configured, `recaptchaResponse` has to carry a solved challenge of the  `recaptchaType` that `GET api/2.0/settings` publishes together with the site key, and a missing or stale  answer refuses the call. `culture` picks the language of the letter. Delivery is queued and reaches the  administrators subscribed to administrator notifications, so a confirmed call means accepted rather than read,  and the answer is a localized confirmation. Attempts are rate limited per address and per operation, and  further ones are refused with 429.
         * @summary Send a message to the administrator
         * @param {MessagesApiSendAdminMailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendAdminMail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-admin-mail/
         * @throws {RequiredError}
         */
        sendAdminMail(requestParameters: MessagesApiSendAdminMailRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendAdminMail(requestParameters.adminMessageSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends an invitation email with a join link to the address in the request - the self-registration the sign-in  page\'s register link performs. No token is needed. The portal has to publish a trusted-domain policy first,  saved with `POST api/2.0/settings/maildomainsettings`: without one there is nothing to join and every caller  alike is answered with 405 - the same condition `GET api/2.0/settings` reports as `enabledJoin`. `email` has  to be a real address written in ASCII rather than an internationalized one, must not already belong to a  portal member, and, when the policy names domains rather than accepting all of them, has to end with one of  them - each of those faults is refused with 400. `culture` picks the language of the letter. The invitation is  not an account: the invitee becomes a member only after following the link, and the role it grants, user or  room administrator, follows the trusted-domain settings and drops to user once the portal\'s paid places are  taken. Where the installation caps invitations, an accepted call spends one of those counted by  `invitationLimit`, and only about a dozen calls from one address in two minutes are accepted. What comes back  is a localized confirmation.
         * @summary Send an invitation email
         * @param {MessagesApiSendJoinInviteMailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendJoinInviteMail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-join-invite-mail/
         * @throws {RequiredError}
         */
        sendJoinInviteMail(requestParameters: MessagesApiSendJoinInviteMailRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendJoinInviteMail(requestParameters.adminMessageBaseSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for enableAdminMessageSettings operation in MessagesApi.
 * @export
 * @interface MessagesApiEnableAdminMessageSettingsRequest
 */
export interface MessagesApiEnableAdminMessageSettingsRequest {
    /**
     * 
     * @type {TurnOnAdminMessageSettingsRequestDto}
     * @memberof MessagesApiEnableAdminMessageSettings
     */
    readonly turnOnAdminMessageSettingsRequestDto?: TurnOnAdminMessageSettingsRequestDto
}

/**
 * Request parameters for sendAdminMail operation in MessagesApi.
 * @export
 * @interface MessagesApiSendAdminMailRequest
 */
export interface MessagesApiSendAdminMailRequest {
    /**
     * 
     * @type {AdminMessageSettingsRequestsDto}
     * @memberof MessagesApiSendAdminMail
     */
    readonly adminMessageSettingsRequestsDto?: AdminMessageSettingsRequestsDto
}

/**
 * Request parameters for sendJoinInviteMail operation in MessagesApi.
 * @export
 * @interface MessagesApiSendJoinInviteMailRequest
 */
export interface MessagesApiSendJoinInviteMailRequest {
    /**
     * 
     * @type {AdminMessageBaseSettingsRequestsDto}
     * @memberof MessagesApiSendJoinInviteMail
     */
    readonly adminMessageBaseSettingsRequestsDto?: AdminMessageBaseSettingsRequestsDto
}

/**
 * MessagesApi - object-oriented interface
 * @export
 * @class MessagesApi
 * @extends {BaseAPI}
 */
export class MessagesApi extends BaseAPI {
    /**
     * Switches on or off the contact form the sign-in page offers a visitor who cannot get into the portal, and  which delivers their message to the portal administrators. The caller needs the portal-settings right of a  DocSpace administrator - the portal owner and a DocSpace administrator qualify, any other member is refused.  Send the new state as `turnOn`: `true` publishes the form, `false` hides it. The change covers the whole  portal, applies to the next sign-in page without a restart, is recorded in the audit trail, and repeating the  call with the same value leaves the portal as it is. What comes back is a localized confirmation message  rather than the stored flag - read the flag as `enableAdmMess` from `GET api/2.0/settings`, which needs no  token. That flag is also forced on while the portal\'s payment has lapsed, so it can report `true` on a portal  where the form was switched off here. The form itself posts to `POST api/2.0/settings/sendadmmail` and this  setting gates nothing else: the notifications administrators receive as portal members are subscribed  separately with `POST api/2.0/settings/notification`.
     * @summary Enable or disable administrator messages
     * @param {SettingsMessagesApiEnableAdminMessageSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public enableAdminMessageSettings(requestParameters: MessagesApiEnableAdminMessageSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return MessagesApiFp(this.configuration).enableAdminMessageSettings(requestParameters.turnOnAdminMessageSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a message from someone who cannot get into the portal to its administrators - the contact form the  sign-in page offers unauthenticated visitors. No token is needed. The form has to be published first with  `POST api/2.0/settings/messagesettings` unless the portal\'s payment has lapsed, otherwise nothing is sent;  `enableAdmMess` in `GET api/2.0/settings` reports whether the call is worth making. `email` is the address the  administrators answer to and has to be a real address, and `message` is reduced to plain text first, so a body  carrying nothing but markup counts as empty - either fault is refused with 400. When the caller is not signed  in and this installation has a CAPTCHA configured, `recaptchaResponse` has to carry a solved challenge of the  `recaptchaType` that `GET api/2.0/settings` publishes together with the site key, and a missing or stale  answer refuses the call. `culture` picks the language of the letter. Delivery is queued and reaches the  administrators subscribed to administrator notifications, so a confirmed call means accepted rather than read,  and the answer is a localized confirmation. Attempts are rate limited per address and per operation, and  further ones are refused with 429.
     * @summary Send a message to the administrator
     * @param {SettingsMessagesApiSendAdminMailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public sendAdminMail(requestParameters: MessagesApiSendAdminMailRequest = {}, options?: RawAxiosRequestConfig) {
        return MessagesApiFp(this.configuration).sendAdminMail(requestParameters.adminMessageSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends an invitation email with a join link to the address in the request - the self-registration the sign-in  page\'s register link performs. No token is needed. The portal has to publish a trusted-domain policy first,  saved with `POST api/2.0/settings/maildomainsettings`: without one there is nothing to join and every caller  alike is answered with 405 - the same condition `GET api/2.0/settings` reports as `enabledJoin`. `email` has  to be a real address written in ASCII rather than an internationalized one, must not already belong to a  portal member, and, when the policy names domains rather than accepting all of them, has to end with one of  them - each of those faults is refused with 400. `culture` picks the language of the letter. The invitation is  not an account: the invitee becomes a member only after following the link, and the role it grants, user or  room administrator, follows the trusted-domain settings and drops to user once the portal\'s paid places are  taken. Where the installation caps invitations, an accepted call spends one of those counted by  `invitationLimit`, and only about a dozen calls from one address in two minutes are accepted. What comes back  is a localized confirmation.
     * @summary Send an invitation email
     * @param {SettingsMessagesApiSendJoinInviteMailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public sendJoinInviteMail(requestParameters: MessagesApiSendJoinInviteMailRequest = {}, options?: RawAxiosRequestConfig) {
        return MessagesApiFp(this.configuration).sendJoinInviteMail(requestParameters.adminMessageBaseSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

