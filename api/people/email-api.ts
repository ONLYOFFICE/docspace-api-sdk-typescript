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
import type { ChangeEmailRequest } from '../../models';
// @ts-ignore
import type { EmployeeFullWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { UpdateMemberRequestDto } from '../../models';
/**
 * EmailApi - axios parameter creator
 * @export
 */
export const EmailApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Sets a new email to the user with the ID specified in the request.
         * @summary Change a user email
         * @param {string} userid The user ID.
         * @param {ChangeEmailRequest} changeEmailRequest The request parameters for updating a user email.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeUserEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-email/
         */
        changeUserEmail: async (userid: string, changeEmailRequest: ChangeEmailRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('changeUserEmail', 'userid', userid)
            // verify required parameter 'changeEmailRequest' is not null or undefined
            assertParamExists('changeUserEmail', 'changeEmailRequest', changeEmailRequest)

            const localVarPath = `/api/2.0/people/{userid}/email`
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
            localVarRequestOptions.data = serializeDataIfNeeded(changeEmailRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends a message to the user email with the instructions to change the email address connected to the portal.
         * @summary Send instructions to change email
         * @param {UpdateMemberRequestDto} [updateMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendEmailChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-email-change-instructions/
         */
        sendEmailChangeInstructions: async (updateMemberRequestDto?: UpdateMemberRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/email`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMemberRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmailApi - functional programming interface
 * @export
 */
export const EmailApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmailApiAxiosParamCreator(configuration)
    return {
        /**
         * Sets a new email to the user with the ID specified in the request.
         * @summary Change a user email
         * @param {string} userid The user ID.
         * @param {ChangeEmailRequest} changeEmailRequest The request parameters for updating a user email.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeUserEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-email/
         */
        async changeUserEmail(userid: string, changeEmailRequest: ChangeEmailRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeUserEmail(userid, changeEmailRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmailApi.changeUserEmail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends a message to the user email with the instructions to change the email address connected to the portal.
         * @summary Send instructions to change email
         * @param {UpdateMemberRequestDto} [updateMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendEmailChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-email-change-instructions/
         */
        async sendEmailChangeInstructions(updateMemberRequestDto?: UpdateMemberRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendEmailChangeInstructions(updateMemberRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmailApi.sendEmailChangeInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EmailApi - factory interface
 * @export
 */
export const EmailApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmailApiFp(configuration)
    return {
        /**
         * Sets a new email to the user with the ID specified in the request.
         * @summary Change a user email
         * @param {string} userid The user ID.
         * @param {ChangeEmailRequest} changeEmailRequest The request parameters for updating a user email.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeUserEmail operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-user-email/
         * @throws {RequiredError}
         */
        changeUserEmail(userid: string, changeEmailRequest: ChangeEmailRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.changeUserEmail(userid, changeEmailRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a message to the user email with the instructions to change the email address connected to the portal.
         * @summary Send instructions to change email
         * @param {UpdateMemberRequestDto} [updateMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for sendEmailChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-email-change-instructions/
         * @throws {RequiredError}
         */
        sendEmailChangeInstructions(updateMemberRequestDto?: UpdateMemberRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendEmailChangeInstructions(updateMemberRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmailApi - object-oriented interface
 * @export
 * @class EmailApi
 * @extends {BaseAPI}
 */
export class EmailApi extends BaseAPI {
    /**
     * Sets a new email to the user with the ID specified in the request.
     * @summary Change a user email
     * @param {string} userid The user ID.
     * @param {ChangeEmailRequest} changeEmailRequest The request parameters for updating a user email.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public changeUserEmail(userid: string, changeEmailRequest: ChangeEmailRequest, options?: RawAxiosRequestConfig) {
        return EmailApiFp(this.configuration).changeUserEmail(userid, changeEmailRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a message to the user email with the instructions to change the email address connected to the portal.
     * @summary Send instructions to change email
     * @param {UpdateMemberRequestDto} [updateMemberRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailApi
     */
    public sendEmailChangeInstructions(updateMemberRequestDto?: UpdateMemberRequestDto, options?: RawAxiosRequestConfig) {
        return EmailApiFp(this.configuration).sendEmailChangeInstructions(updateMemberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

