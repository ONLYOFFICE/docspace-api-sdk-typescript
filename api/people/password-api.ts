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
import type { EmailMemberRequestDto } from '../../models';
// @ts-ignore
import type { EmployeeFullWrapper } from '../../models';
// @ts-ignore
import type { MemberBaseRequestDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * PasswordApi - axios parameter creator
 * @export
 */
export const PasswordApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sets a new password to the user with the ID specified in the request.
         * @summary Change a user password
         * @param {string} userid The user ID.
         * @param {MemberBaseRequestDto} memberBaseRequestDto The request parameters for the user generic information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-password/
         */
        changeUserPassword: async (userid: string, memberBaseRequestDto: MemberBaseRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('changeUserPassword', 'userid', userid)
            // verify required parameter 'memberBaseRequestDto' is not null or undefined
            assertParamExists('changeUserPassword', 'memberBaseRequestDto', memberBaseRequestDto)
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
            localVarRequestOptions.data = serializeDataIfNeeded(memberBaseRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reminds a password to the user using the email address specified in the request.
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
         * Sets a new password to the user with the ID specified in the request.
         * @summary Change a user password
         * @param {string} userid The user ID.
         * @param {MemberBaseRequestDto} memberBaseRequestDto The request parameters for the user generic information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-password/
         */
        async changeUserPassword(userid: string, memberBaseRequestDto: MemberBaseRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeUserPassword(userid, memberBaseRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PasswordApi.changeUserPassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reminds a password to the user using the email address specified in the request.
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
         * Sets a new password to the user with the ID specified in the request.
         * @summary Change a user password
         * @param {string} userid The user ID.
         * @param {MemberBaseRequestDto} memberBaseRequestDto The request parameters for the user generic information.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-password/
         * @throws {RequiredError}
         */
        changeUserPassword(userid: string, memberBaseRequestDto: MemberBaseRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.changeUserPassword(userid, memberBaseRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Reminds a password to the user using the email address specified in the request.
         * @summary Remind a user password
         * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for sendUserPassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-user-password/
         * @throws {RequiredError}
         */
        sendUserPassword(emailMemberRequestDto?: EmailMemberRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendUserPassword(emailMemberRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PasswordApi - object-oriented interface
 * @export
 * @class PasswordApi
 * @extends {BaseAPI}
 */
export class PasswordApi extends BaseAPI {
    /**
     * Sets a new password to the user with the ID specified in the request.
     * @summary Change a user password
     * @param {string} userid The user ID.
     * @param {MemberBaseRequestDto} memberBaseRequestDto The request parameters for the user generic information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PasswordApi
     */
    public changeUserPassword(userid: string, memberBaseRequestDto: MemberBaseRequestDto, options?: RawAxiosRequestConfig) {
        return PasswordApiFp(this.configuration).changeUserPassword(userid, memberBaseRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reminds a password to the user using the email address specified in the request.
     * @summary Remind a user password
     * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PasswordApi
     */
    public sendUserPassword(emailMemberRequestDto?: EmailMemberRequestDto, options?: RawAxiosRequestConfig) {
        return PasswordApiFp(this.configuration).sendUserPassword(emailMemberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

