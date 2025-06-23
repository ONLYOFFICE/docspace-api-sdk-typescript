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
import type { EmployeeType } from '../../models';
// @ts-ignore
import type { Int64Wrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { UserInfoWrapper } from '../../models';
/**
 * PortalUsersApi - axios parameter creator
 * @export
 */
export const PortalUsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns an invitation link for joining the portal.
         * @summary Get an invitation link
         * @param {EmployeeType} employeeType The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link/
         */
        getInvitationLink: async (employeeType: EmployeeType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'employeeType' is not null or undefined
            assertParamExists('getInvitationLink', 'employeeType', employeeType)
            const localVarPath = `/api/2.0/portal/users/invite/{employeeType}`
                .replace(`{${"employeeType"}}`, encodeURIComponent(String(employeeType)));
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
         * Returns a number of portal users.
         * @summary Get a number of portal users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalUsersCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-users-count/
         */
        getPortalUsersCount: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/userscount`;
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
         * Returns a user with the ID specified in the request from the current portal.
         * @summary Get a user by ID
         * @param {string} userID The user ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-by-id/
         */
        getUserById: async (userID: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userID' is not null or undefined
            assertParamExists('getUserById', 'userID', userID)
            const localVarPath = `/api/2.0/portal/users/{userID}`
                .replace(`{${"userID"}}`, encodeURIComponent(String(userID)));
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
         * Marks a gift message as read.
         * @summary Mark a gift message as read
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for markGiftMessageAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-gift-message-as-read/
         */
        markGiftMessageAsRead: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/present/mark`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends congratulations to the user after registering a portal.
         * @summary Send congratulations
         * @param {string} [userid] The user ID to receive the congratulatory message.
         * @param {string} [key] The template identifier or email configuration key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendCongratulations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/
         */
        sendCongratulations: async (userid?: string, key?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/portal/sendcongratulations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userid !== undefined) {
                localVarQueryParameter['Userid'] = userid;
            }

            if (key !== undefined) {
                localVarQueryParameter['Key'] = key;
            }


    
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
 * PortalUsersApi - functional programming interface
 * @export
 */
export const PortalUsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PortalUsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns an invitation link for joining the portal.
         * @summary Get an invitation link
         * @param {EmployeeType} employeeType The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link/
         */
        async getInvitationLink(employeeType: EmployeeType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvitationLink(employeeType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalUsersApi.getInvitationLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a number of portal users.
         * @summary Get a number of portal users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalUsersCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-users-count/
         */
        async getPortalUsersCount(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Int64Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalUsersCount(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalUsersApi.getPortalUsersCount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a user with the ID specified in the request from the current portal.
         * @summary Get a user by ID
         * @param {string} userID The user ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-by-id/
         */
        async getUserById(userID: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserInfoWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserById(userID, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalUsersApi.getUserById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Marks a gift message as read.
         * @summary Mark a gift message as read
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for markGiftMessageAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-gift-message-as-read/
         */
        async markGiftMessageAsRead(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.markGiftMessageAsRead(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalUsersApi.markGiftMessageAsRead']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends congratulations to the user after registering a portal.
         * @summary Send congratulations
         * @param {string} [userid] The user ID to receive the congratulatory message.
         * @param {string} [key] The template identifier or email configuration key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendCongratulations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/
         */
        async sendCongratulations(userid?: string, key?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendCongratulations(userid, key, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalUsersApi.sendCongratulations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PortalUsersApi - factory interface
 * @export
 */
export const PortalUsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PortalUsersApiFp(configuration)
    return {
        /**
         * Returns an invitation link for joining the portal.
         * @summary Get an invitation link
         * @param {EmployeeType} employeeType The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User).
         * @param {*} [options] Override http request option.
         * REST API Reference for getInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link/
         * @throws {RequiredError}
         */
        getInvitationLink(employeeType: EmployeeType, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getInvitationLink(employeeType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a number of portal users.
         * @summary Get a number of portal users
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalUsersCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-users-count/
         * @throws {RequiredError}
         */
        getPortalUsersCount(options?: RawAxiosRequestConfig): AxiosPromise<Int64Wrapper> {
            return localVarFp.getPortalUsersCount(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a user with the ID specified in the request from the current portal.
         * @summary Get a user by ID
         * @param {string} userID The user ID extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-by-id/
         * @throws {RequiredError}
         */
        getUserById(userID: string, options?: RawAxiosRequestConfig): AxiosPromise<UserInfoWrapper> {
            return localVarFp.getUserById(userID, options).then((request) => request(axios, basePath));
        },
        /**
         * Marks a gift message as read.
         * @summary Mark a gift message as read
         * @param {*} [options] Override http request option.
         * REST API Reference for markGiftMessageAsRead operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/mark-gift-message-as-read/
         * @throws {RequiredError}
         */
        markGiftMessageAsRead(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.markGiftMessageAsRead(options).then((request) => request(axios, basePath));
        },
        /**
         * Sends congratulations to the user after registering a portal.
         * @summary Send congratulations
         * @param {string} [userid] The user ID to receive the congratulatory message.
         * @param {string} [key] The template identifier or email configuration key.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendCongratulations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/
         * @throws {RequiredError}
         */
        sendCongratulations(userid?: string, key?: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendCongratulations(userid, key, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PortalUsersApi - object-oriented interface
 * @export
 * @class PortalUsersApi
 * @extends {BaseAPI}
 */
export class PortalUsersApi extends BaseAPI {
    /**
     * Returns an invitation link for joining the portal.
     * @summary Get an invitation link
     * @param {EmployeeType} employeeType The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalUsersApi
     */
    public getInvitationLink(employeeType: EmployeeType, options?: RawAxiosRequestConfig) {
        return PortalUsersApiFp(this.configuration).getInvitationLink(employeeType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a number of portal users.
     * @summary Get a number of portal users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalUsersApi
     */
    public getPortalUsersCount(options?: RawAxiosRequestConfig) {
        return PortalUsersApiFp(this.configuration).getPortalUsersCount(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a user with the ID specified in the request from the current portal.
     * @summary Get a user by ID
     * @param {string} userID The user ID extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalUsersApi
     */
    public getUserById(userID: string, options?: RawAxiosRequestConfig) {
        return PortalUsersApiFp(this.configuration).getUserById(userID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks a gift message as read.
     * @summary Mark a gift message as read
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalUsersApi
     */
    public markGiftMessageAsRead(options?: RawAxiosRequestConfig) {
        return PortalUsersApiFp(this.configuration).markGiftMessageAsRead(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends congratulations to the user after registering a portal.
     * @summary Send congratulations
     * @param {string} [userid] The user ID to receive the congratulatory message.
     * @param {string} [key] The template identifier or email configuration key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalUsersApi
     */
    public sendCongratulations(userid?: string, key?: string, options?: RawAxiosRequestConfig) {
        return PortalUsersApiFp(this.configuration).sendCongratulations(userid, key, options).then((request) => request(this.axios, this.basePath));
    }
}

