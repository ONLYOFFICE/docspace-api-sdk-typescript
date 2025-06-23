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
import type { AuthRequestsDto } from '../../models';
// @ts-ignore
import type { AuthenticationTokenWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ConfirmWrapper } from '../../models';
// @ts-ignore
import type { EmailValidationKeyModel } from '../../models';
// @ts-ignore
import type { MobileRequestsDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Authenticates the current user by SMS, authenticator app, or without two-factor authentication.
         * @summary Authenticate a user
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authenticateMe operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me/
         */
        authenticateMe: async (authRequestsDto?: AuthRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/authentication`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(authRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Authenticates the current user by SMS or two-factor authentication code.
         * @summary Authenticate a user by code
         * @param {string} code 
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authenticateMeFromBodyWithCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me-from-body-with-code/
         */
        authenticateMeFromBodyWithCode: async (code: string, authRequestsDto?: AuthRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('authenticateMeFromBodyWithCode', 'code', code)
            const localVarPath = `/api/2.0/authentication/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(authRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Opens a confirmation email URL to validate a certain action (employee invitation, portal removal, phone activation, etc.).
         * @summary Open confirmation email URL
         * @param {EmailValidationKeyModel} [emailValidationKeyModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-confirm/
         */
        checkConfirm: async (emailValidationKeyModel?: EmailValidationKeyModel, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/authentication/confirm`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(emailValidationKeyModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks if the current user is authenticated or not.
         * @summary Check authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsAuthentificated operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-authentificated/
         */
        getIsAuthentificated: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/authentication`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Logs out of the current user account.
         * @summary Log out
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logout operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/logout/
         */
        logout: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/authentication/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets a mobile phone for the current user.
         * @summary Set a mobile phone
         * @param {MobileRequestsDto} [mobileRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveMobilePhone operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mobile-phone/
         */
        saveMobilePhone: async (mobileRequestsDto?: MobileRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/authentication/setphone`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(mobileRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends SMS with an authentication code.
         * @summary Send SMS code
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendSmsCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-sms-code/
         */
        sendSmsCode: async (authRequestsDto?: AuthRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/authentication/sendsms`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(authRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * Authenticates the current user by SMS, authenticator app, or without two-factor authentication.
         * @summary Authenticate a user
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authenticateMe operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me/
         */
        async authenticateMe(authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationTokenWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authenticateMe(authRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.authenticateMe']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Authenticates the current user by SMS or two-factor authentication code.
         * @summary Authenticate a user by code
         * @param {string} code 
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for authenticateMeFromBodyWithCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me-from-body-with-code/
         */
        async authenticateMeFromBodyWithCode(code: string, authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationTokenWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authenticateMeFromBodyWithCode(code, authRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.authenticateMeFromBodyWithCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Opens a confirmation email URL to validate a certain action (employee invitation, portal removal, phone activation, etc.).
         * @summary Open confirmation email URL
         * @param {EmailValidationKeyModel} [emailValidationKeyModel] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-confirm/
         */
        async checkConfirm(emailValidationKeyModel?: EmailValidationKeyModel, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfirmWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkConfirm(emailValidationKeyModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.checkConfirm']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if the current user is authenticated or not.
         * @summary Check authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsAuthentificated operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-authentificated/
         */
        async getIsAuthentificated(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsAuthentificated(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.getIsAuthentificated']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Logs out of the current user account.
         * @summary Log out
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for logout operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/logout/
         */
        async logout(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.logout']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets a mobile phone for the current user.
         * @summary Set a mobile phone
         * @param {MobileRequestsDto} [mobileRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveMobilePhone operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mobile-phone/
         */
        async saveMobilePhone(mobileRequestsDto?: MobileRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationTokenWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveMobilePhone(mobileRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.saveMobilePhone']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends SMS with an authentication code.
         * @summary Send SMS code
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendSmsCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-sms-code/
         */
        async sendSmsCode(authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationTokenWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendSmsCode(authRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.sendSmsCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * Authenticates the current user by SMS, authenticator app, or without two-factor authentication.
         * @summary Authenticate a user
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for authenticateMe operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me/
         * @throws {RequiredError}
         */
        authenticateMe(authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationTokenWrapper> {
            return localVarFp.authenticateMe(authRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Authenticates the current user by SMS or two-factor authentication code.
         * @summary Authenticate a user by code
         * @param {string} code 
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for authenticateMeFromBodyWithCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/authenticate-me-from-body-with-code/
         * @throws {RequiredError}
         */
        authenticateMeFromBodyWithCode(code: string, authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationTokenWrapper> {
            return localVarFp.authenticateMeFromBodyWithCode(code, authRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Opens a confirmation email URL to validate a certain action (employee invitation, portal removal, phone activation, etc.).
         * @summary Open confirmation email URL
         * @param {EmailValidationKeyModel} [emailValidationKeyModel] 
         * @param {*} [options] Override http request option.
         * REST API Reference for checkConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-confirm/
         * @throws {RequiredError}
         */
        checkConfirm(emailValidationKeyModel?: EmailValidationKeyModel, options?: RawAxiosRequestConfig): AxiosPromise<ConfirmWrapper> {
            return localVarFp.checkConfirm(emailValidationKeyModel, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if the current user is authenticated or not.
         * @summary Check authentication
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsAuthentificated operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-authentificated/
         * @throws {RequiredError}
         */
        getIsAuthentificated(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getIsAuthentificated(options).then((request) => request(axios, basePath));
        },
        /**
         * Logs out of the current user account.
         * @summary Log out
         * @param {*} [options] Override http request option.
         * REST API Reference for logout operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/logout/
         * @throws {RequiredError}
         */
        logout(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.logout(options).then((request) => request(axios, basePath));
        },
        /**
         * Sets a mobile phone for the current user.
         * @summary Set a mobile phone
         * @param {MobileRequestsDto} [mobileRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveMobilePhone operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mobile-phone/
         * @throws {RequiredError}
         */
        saveMobilePhone(mobileRequestsDto?: MobileRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationTokenWrapper> {
            return localVarFp.saveMobilePhone(mobileRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends SMS with an authentication code.
         * @summary Send SMS code
         * @param {AuthRequestsDto} [authRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for sendSmsCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-sms-code/
         * @throws {RequiredError}
         */
        sendSmsCode(authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationTokenWrapper> {
            return localVarFp.sendSmsCode(authRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * Authenticates the current user by SMS, authenticator app, or without two-factor authentication.
     * @summary Authenticate a user
     * @param {AuthRequestsDto} [authRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public authenticateMe(authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).authenticateMe(authRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Authenticates the current user by SMS or two-factor authentication code.
     * @summary Authenticate a user by code
     * @param {string} code 
     * @param {AuthRequestsDto} [authRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public authenticateMeFromBodyWithCode(code: string, authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).authenticateMeFromBodyWithCode(code, authRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Opens a confirmation email URL to validate a certain action (employee invitation, portal removal, phone activation, etc.).
     * @summary Open confirmation email URL
     * @param {EmailValidationKeyModel} [emailValidationKeyModel] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public checkConfirm(emailValidationKeyModel?: EmailValidationKeyModel, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).checkConfirm(emailValidationKeyModel, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if the current user is authenticated or not.
     * @summary Check authentication
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public getIsAuthentificated(options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).getIsAuthentificated(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logs out of the current user account.
     * @summary Log out
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public logout(options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).logout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets a mobile phone for the current user.
     * @summary Set a mobile phone
     * @param {MobileRequestsDto} [mobileRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public saveMobilePhone(mobileRequestsDto?: MobileRequestsDto, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).saveMobilePhone(mobileRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends SMS with an authentication code.
     * @summary Send SMS code
     * @param {AuthRequestsDto} [authRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public sendSmsCode(authRequestsDto?: AuthRequestsDto, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).sendSmsCode(authRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

