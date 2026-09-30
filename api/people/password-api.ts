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
import type { ChangePasswordRequest } from '../../models';
// @ts-ignore
import type { EmailMemberRequestDto } from '../../models';
// @ts-ignore
import type { EmployeeFullWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * PasswordApi - axios parameter creator
 * @export
 */
export const PasswordApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Sets a new password on an account, which is the step that completes a password change or a password  recovery.  The request has to carry the confirmation token from the emailed link rather than an ordinary session, and an  expired or already used token is answered with 401.  The account has to exist and be `Active`, so the password of a disabled account or of an open invitation  cannot be set, and only the portal owner may set the owner\'s own password.  Send either `passwordHash`, which is taken as it is, or a plain `password`, which is checked against the  portal password policy; sending neither, or a password the policy rejects, answers 400.  The change ends every other session of that account and emails it a notice that the password was changed.  The answer is the profile, which does not carry the password in any form.  To have the recovery link sent in the first place, use `POST api/2.0/people/password`.
         * @summary Change a user password
         * @param {string} userid The ID of the account whose password is set, taken from the route. It has to match the account the  confirmation token was issued for, and the account has to be active.
         * @param {ChangePasswordRequest} changePasswordRequest The new password, sent either in plain text or already hashed. Exactly one of the two fields is needed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-password/
         */
        changeUserPassword: async (userid: string, changePasswordRequest: ChangePasswordRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('changeUserPassword', 'userid', userid)
            // verify required parameter 'changePasswordRequest' is not null or undefined
            assertParamExists('changeUserPassword', 'changePasswordRequest', changePasswordRequest)

            const localVarPath = `/api/2.0/people/{userid}/password`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(changePasswordRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Emails a password recovery link to an address, and is the entry point of the recovery flow rather than the  operation that changes anything.  It needs no authentication, which is how a person who cannot sign in uses it; when the portal has a CAPTCHA  configured, an unauthenticated request has to pass it and answers 403 if it does not.  An unauthenticated caller always gets the same success message, whether or not the address belongs to an  account, so the answer cannot be used to find out which addresses are registered.  An authenticated caller does get told: a failure is answered with 403, and asking for somebody else requires  DocSpace administrator rights, while the owner\'s password can be asked for by the owner alone and another  administrator\'s only by the owner.  The link that is sent leads to `PUT api/2.0/people/{userid}/password`, which is where the new password is  set; no password is ever sent by email despite the wording of the message.  Repeated calls are throttled.
         * @summary Remind a user password
         * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-user-password/
         */
        sendUserPassword: async (emailMemberRequestDto?: EmailMemberRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/password`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(emailMemberRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PasswordApi - functional programming interface
 * @export
 */
export const PasswordApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PasswordApiAxiosParamCreator(configuration)
    return {
        /**
         * Sets a new password on an account, which is the step that completes a password change or a password  recovery.  The request has to carry the confirmation token from the emailed link rather than an ordinary session, and an  expired or already used token is answered with 401.  The account has to exist and be `Active`, so the password of a disabled account or of an open invitation  cannot be set, and only the portal owner may set the owner\'s own password.  Send either `passwordHash`, which is taken as it is, or a plain `password`, which is checked against the  portal password policy; sending neither, or a password the policy rejects, answers 400.  The change ends every other session of that account and emails it a notice that the password was changed.  The answer is the profile, which does not carry the password in any form.  To have the recovery link sent in the first place, use `POST api/2.0/people/password`.
         * @summary Change a user password
         * @param {string} userid The ID of the account whose password is set, taken from the route. It has to match the account the  confirmation token was issued for, and the account has to be active.
         * @param {ChangePasswordRequest} changePasswordRequest The new password, sent either in plain text or already hashed. Exactly one of the two fields is needed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-password/
         */
        async changeUserPassword(userid: string, changePasswordRequest: ChangePasswordRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeUserPassword(userid, changePasswordRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PasswordApi.changeUserPassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Emails a password recovery link to an address, and is the entry point of the recovery flow rather than the  operation that changes anything.  It needs no authentication, which is how a person who cannot sign in uses it; when the portal has a CAPTCHA  configured, an unauthenticated request has to pass it and answers 403 if it does not.  An unauthenticated caller always gets the same success message, whether or not the address belongs to an  account, so the answer cannot be used to find out which addresses are registered.  An authenticated caller does get told: a failure is answered with 403, and asking for somebody else requires  DocSpace administrator rights, while the owner\'s password can be asked for by the owner alone and another  administrator\'s only by the owner.  The link that is sent leads to `PUT api/2.0/people/{userid}/password`, which is where the new password is  set; no password is ever sent by email despite the wording of the message.  Repeated calls are throttled.
         * @summary Remind a user password
         * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-user-password/
         */
        async sendUserPassword(emailMemberRequestDto?: EmailMemberRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendUserPassword(emailMemberRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PasswordApi.sendUserPassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PasswordApi - factory interface
 * @export
 */
export const PasswordApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PasswordApiFp(configuration)
    return {
        /**
         * Sets a new password on an account, which is the step that completes a password change or a password  recovery.  The request has to carry the confirmation token from the emailed link rather than an ordinary session, and an  expired or already used token is answered with 401.  The account has to exist and be `Active`, so the password of a disabled account or of an open invitation  cannot be set, and only the portal owner may set the owner\'s own password.  Send either `passwordHash`, which is taken as it is, or a plain `password`, which is checked against the  portal password policy; sending neither, or a password the policy rejects, answers 400.  The change ends every other session of that account and emails it a notice that the password was changed.  The answer is the profile, which does not carry the password in any form.  To have the recovery link sent in the first place, use `POST api/2.0/people/password`.
         * @summary Change a user password
         * @param {PasswordApiChangeUserPasswordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-password/
         * @throws {RequiredError}
         */
        changeUserPassword(requestParameters: PasswordApiChangeUserPasswordRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.changeUserPassword(requestParameters.userid, requestParameters.changePasswordRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Emails a password recovery link to an address, and is the entry point of the recovery flow rather than the  operation that changes anything.  It needs no authentication, which is how a person who cannot sign in uses it; when the portal has a CAPTCHA  configured, an unauthenticated request has to pass it and answers 403 if it does not.  An unauthenticated caller always gets the same success message, whether or not the address belongs to an  account, so the answer cannot be used to find out which addresses are registered.  An authenticated caller does get told: a failure is answered with 403, and asking for somebody else requires  DocSpace administrator rights, while the owner\'s password can be asked for by the owner alone and another  administrator\'s only by the owner.  The link that is sent leads to `PUT api/2.0/people/{userid}/password`, which is where the new password is  set; no password is ever sent by email despite the wording of the message.  Repeated calls are throttled.
         * @summary Remind a user password
         * @param {PasswordApiSendUserPasswordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-user-password/
         * @throws {RequiredError}
         */
        sendUserPassword(requestParameters: PasswordApiSendUserPasswordRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendUserPassword(requestParameters.emailMemberRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for changeUserPassword operation in PasswordApi.
 * @export
 * @interface PasswordApiChangeUserPasswordRequest
 */
export interface PasswordApiChangeUserPasswordRequest {
    /**
     * The ID of the account whose password is set, taken from the route. It has to match the account the  confirmation token was issued for, and the account has to be active.
     * @type {string}
     * @memberof PasswordApiChangeUserPassword
     */
    readonly userid: string

    /**
     * The new password, sent either in plain text or already hashed. Exactly one of the two fields is needed.
     * @type {ChangePasswordRequest}
     * @memberof PasswordApiChangeUserPassword
     */
    readonly changePasswordRequest: ChangePasswordRequest
}

/**
 * Request parameters for sendUserPassword operation in PasswordApi.
 * @export
 * @interface PasswordApiSendUserPasswordRequest
 */
export interface PasswordApiSendUserPasswordRequest {
    /**
     * 
     * @type {EmailMemberRequestDto}
     * @memberof PasswordApiSendUserPassword
     */
    readonly emailMemberRequestDto?: EmailMemberRequestDto
}

/**
 * PasswordApi - object-oriented interface
 * @export
 * @class PasswordApi
 * @extends {BaseAPI}
 */
export class PasswordApi extends BaseAPI {
    /**
     * Sets a new password on an account, which is the step that completes a password change or a password  recovery.  The request has to carry the confirmation token from the emailed link rather than an ordinary session, and an  expired or already used token is answered with 401.  The account has to exist and be `Active`, so the password of a disabled account or of an open invitation  cannot be set, and only the portal owner may set the owner\'s own password.  Send either `passwordHash`, which is taken as it is, or a plain `password`, which is checked against the  portal password policy; sending neither, or a password the policy rejects, answers 400.  The change ends every other session of that account and emails it a notice that the password was changed.  The answer is the profile, which does not carry the password in any form.  To have the recovery link sent in the first place, use `POST api/2.0/people/password`.
     * @summary Change a user password
     * @param {PeoplePasswordApiChangeUserPasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PasswordApi
     */
    public changeUserPassword(requestParameters: PasswordApiChangeUserPasswordRequest, options?: RawAxiosRequestConfig) {
        return PasswordApiFp(this.configuration).changeUserPassword(requestParameters.userid, requestParameters.changePasswordRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Emails a password recovery link to an address, and is the entry point of the recovery flow rather than the  operation that changes anything.  It needs no authentication, which is how a person who cannot sign in uses it; when the portal has a CAPTCHA  configured, an unauthenticated request has to pass it and answers 403 if it does not.  An unauthenticated caller always gets the same success message, whether or not the address belongs to an  account, so the answer cannot be used to find out which addresses are registered.  An authenticated caller does get told: a failure is answered with 403, and asking for somebody else requires  DocSpace administrator rights, while the owner\'s password can be asked for by the owner alone and another  administrator\'s only by the owner.  The link that is sent leads to `PUT api/2.0/people/{userid}/password`, which is where the new password is  set; no password is ever sent by email despite the wording of the message.  Repeated calls are throttled.
     * @summary Remind a user password
     * @param {PeoplePasswordApiSendUserPasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PasswordApi
     */
    public sendUserPassword(requestParameters: PasswordApiSendUserPasswordRequest = {}, options?: RawAxiosRequestConfig) {
        return PasswordApiFp(this.configuration).sendUserPassword(requestParameters.emailMemberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

