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
import type { EmployeeType } from '../../models';
// @ts-ignore
import type { Int64Wrapper } from '../../models';
// @ts-ignore
import type { InvitationLinkCreateRequestDto } from '../../models';
// @ts-ignore
import type { InvitationLinkDeleteRequestDto } from '../../models';
// @ts-ignore
import type { InvitationLinkUpdateRequestDto } from '../../models';
// @ts-ignore
import type { InvitationLinkWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { UserInfoWrapper } from '../../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns an invitation link for joining the portal.
         * @summary Create an invitation link
         * @param {InvitationLinkCreateRequestDto} [invitationLinkCreateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-invitation-link/
         */
        createInvitationLink: async (invitationLinkCreateRequestDto?: InvitationLinkCreateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/users/invitationlink`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(invitationLinkCreateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Ensures that the current user has permission to delete the specified invitation link.  Throws security or not-found exceptions if required conditions are not met.
         * @summary Deletes an invitation link.
         * @param {InvitationLinkDeleteRequestDto} [invitationLinkDeleteRequestDto] The data transfer object containing the details of the invitation link to be deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-invitation-link/
         */
        deleteInvitationLink: async (invitationLinkDeleteRequestDto?: InvitationLinkDeleteRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/users/invitationlink`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(invitationLinkDeleteRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns an invitation link for joining the portal.
         * @summary Get an invitation link
         * @param {EmployeeType} employeeType The type of employee role for the invitation link (DocSpaceAdmin, RoomAdmin or User).
         * @param {*} [options] Override http request option.
         * @deprecated
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
         * Returns an invitation link for joining the portal.
         * @summary Get an invitation link
         * @param {EmployeeType} employeeType The type of employee role for the invitation link (DocSpaceAdmin, RoomAdmin or User).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getInvitationLinkByEmployeeType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link-by-employee-type/
         */
        getInvitationLinkByEmployeeType: async (employeeType: EmployeeType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'employeeType' is not null or undefined
            assertParamExists('getInvitationLinkByEmployeeType', 'employeeType', employeeType)

            const localVarPath = `/api/2.0/portal/users/invitationlink/{employeeType}`
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
         * @param {string} userid The user ID to receive the congratulatory message.
         * @param {string} key The template identifier or email configuration key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendCongratulations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/
         */
        sendCongratulations: async (userid: string, key: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('sendCongratulations', 'userid', userid)
            // verify required parameter 'key' is not null or undefined
            assertParamExists('sendCongratulations', 'key', key)

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
        /**
         * Returns an invitation link for joining the portal.
         * @summary Update an invitation link
         * @param {InvitationLinkUpdateRequestDto} [invitationLinkUpdateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-link/
         */
        updateInvitationLink: async (invitationLinkUpdateRequestDto?: InvitationLinkUpdateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/users/invitationlink`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(invitationLinkUpdateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns an invitation link for joining the portal.
         * @summary Create an invitation link
         * @param {InvitationLinkCreateRequestDto} [invitationLinkCreateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-invitation-link/
         */
        async createInvitationLink(invitationLinkCreateRequestDto?: InvitationLinkCreateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationLinkWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createInvitationLink(invitationLinkCreateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.createInvitationLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Ensures that the current user has permission to delete the specified invitation link.  Throws security or not-found exceptions if required conditions are not met.
         * @summary Deletes an invitation link.
         * @param {InvitationLinkDeleteRequestDto} [invitationLinkDeleteRequestDto] The data transfer object containing the details of the invitation link to be deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-invitation-link/
         */
        async deleteInvitationLink(invitationLinkDeleteRequestDto?: InvitationLinkDeleteRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteInvitationLink(invitationLinkDeleteRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.deleteInvitationLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns an invitation link for joining the portal.
         * @summary Get an invitation link
         * @param {EmployeeType} employeeType The type of employee role for the invitation link (DocSpaceAdmin, RoomAdmin or User).
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         * REST API Reference for getInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link/
         */
        async getInvitationLink(employeeType: EmployeeType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvitationLink(employeeType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getInvitationLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns an invitation link for joining the portal.
         * @summary Get an invitation link
         * @param {EmployeeType} employeeType The type of employee role for the invitation link (DocSpaceAdmin, RoomAdmin or User).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getInvitationLinkByEmployeeType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link-by-employee-type/
         */
        async getInvitationLinkByEmployeeType(employeeType: EmployeeType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationLinkWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvitationLinkByEmployeeType(employeeType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getInvitationLinkByEmployeeType']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getPortalUsersCount']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getUserById']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['UsersApi.markGiftMessageAsRead']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends congratulations to the user after registering a portal.
         * @summary Send congratulations
         * @param {string} userid The user ID to receive the congratulatory message.
         * @param {string} key The template identifier or email configuration key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendCongratulations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/
         */
        async sendCongratulations(userid: string, key: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendCongratulations(userid, key, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.sendCongratulations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns an invitation link for joining the portal.
         * @summary Update an invitation link
         * @param {InvitationLinkUpdateRequestDto} [invitationLinkUpdateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-link/
         */
        async updateInvitationLink(invitationLinkUpdateRequestDto?: InvitationLinkUpdateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitationLinkWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInvitationLink(invitationLinkUpdateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.updateInvitationLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Returns an invitation link for joining the portal.
         * @summary Create an invitation link
         * @param {UsersApiCreateInvitationLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-invitation-link/
         * @throws {RequiredError}
         */
        createInvitationLink(requestParameters: UsersApiCreateInvitationLinkRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<InvitationLinkWrapper> {
            return localVarFp.createInvitationLink(requestParameters.invitationLinkCreateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Ensures that the current user has permission to delete the specified invitation link.  Throws security or not-found exceptions if required conditions are not met.
         * @summary Deletes an invitation link.
         * @param {UsersApiDeleteInvitationLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-invitation-link/
         * @throws {RequiredError}
         */
        deleteInvitationLink(requestParameters: UsersApiDeleteInvitationLinkRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.deleteInvitationLink(requestParameters.invitationLinkDeleteRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an invitation link for joining the portal.
         * @summary Get an invitation link
         * @param {UsersApiGetInvitationLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * REST API Reference for getInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link/
         * @throws {RequiredError}
         */
        getInvitationLink(requestParameters: UsersApiGetInvitationLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getInvitationLink(requestParameters.employeeType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an invitation link for joining the portal.
         * @summary Get an invitation link
         * @param {UsersApiGetInvitationLinkByEmployeeTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getInvitationLinkByEmployeeType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-invitation-link-by-employee-type/
         * @throws {RequiredError}
         */
        getInvitationLinkByEmployeeType(requestParameters: UsersApiGetInvitationLinkByEmployeeTypeRequest, options?: RawAxiosRequestConfig): AxiosPromise<InvitationLinkWrapper> {
            return localVarFp.getInvitationLinkByEmployeeType(requestParameters.employeeType, options).then((request) => request(axios, basePath));
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
         * @param {UsersApiGetUserByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserById operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-by-id/
         * @throws {RequiredError}
         */
        getUserById(requestParameters: UsersApiGetUserByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserInfoWrapper> {
            return localVarFp.getUserById(requestParameters.userID, options).then((request) => request(axios, basePath));
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
         * @param {UsersApiSendCongratulationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendCongratulations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-congratulations/
         * @throws {RequiredError}
         */
        sendCongratulations(requestParameters: UsersApiSendCongratulationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendCongratulations(requestParameters.userid, requestParameters.key, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an invitation link for joining the portal.
         * @summary Update an invitation link
         * @param {UsersApiUpdateInvitationLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateInvitationLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-link/
         * @throws {RequiredError}
         */
        updateInvitationLink(requestParameters: UsersApiUpdateInvitationLinkRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<InvitationLinkWrapper> {
            return localVarFp.updateInvitationLink(requestParameters.invitationLinkUpdateRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createInvitationLink operation in UsersApi.
 * @export
 * @interface UsersApiCreateInvitationLinkRequest
 */
export interface UsersApiCreateInvitationLinkRequest {
    /**
     * 
     * @type {InvitationLinkCreateRequestDto}
     * @memberof UsersApiCreateInvitationLink
     */
    readonly invitationLinkCreateRequestDto?: InvitationLinkCreateRequestDto
}

/**
 * Request parameters for deleteInvitationLink operation in UsersApi.
 * @export
 * @interface UsersApiDeleteInvitationLinkRequest
 */
export interface UsersApiDeleteInvitationLinkRequest {
    /**
     * The data transfer object containing the details of the invitation link to be deleted.
     * @type {InvitationLinkDeleteRequestDto}
     * @memberof UsersApiDeleteInvitationLink
     */
    readonly invitationLinkDeleteRequestDto?: InvitationLinkDeleteRequestDto
}

/**
 * Request parameters for getInvitationLink operation in UsersApi.
 * @export
 * @interface UsersApiGetInvitationLinkRequest
 */
export interface UsersApiGetInvitationLinkRequest {
    /**
     * The type of employee role for the invitation link (DocSpaceAdmin, RoomAdmin or User).
     * @type {EmployeeType}
     * @memberof UsersApiGetInvitationLink
     */
    readonly employeeType: EmployeeType
}

/**
 * Request parameters for getInvitationLinkByEmployeeType operation in UsersApi.
 * @export
 * @interface UsersApiGetInvitationLinkByEmployeeTypeRequest
 */
export interface UsersApiGetInvitationLinkByEmployeeTypeRequest {
    /**
     * The type of employee role for the invitation link (DocSpaceAdmin, RoomAdmin or User).
     * @type {EmployeeType}
     * @memberof UsersApiGetInvitationLinkByEmployeeType
     */
    readonly employeeType: EmployeeType
}

/**
 * Request parameters for getUserById operation in UsersApi.
 * @export
 * @interface UsersApiGetUserByIdRequest
 */
export interface UsersApiGetUserByIdRequest {
    /**
     * The user ID extracted from the route parameters.
     * @type {string}
     * @memberof UsersApiGetUserById
     */
    readonly userID: string
}

/**
 * Request parameters for sendCongratulations operation in UsersApi.
 * @export
 * @interface UsersApiSendCongratulationsRequest
 */
export interface UsersApiSendCongratulationsRequest {
    /**
     * The user ID to receive the congratulatory message.
     * @type {string}
     * @memberof UsersApiSendCongratulations
     */
    readonly userid: string

    /**
     * The template identifier or email configuration key.
     * @type {string}
     * @memberof UsersApiSendCongratulations
     */
    readonly key: string
}

/**
 * Request parameters for updateInvitationLink operation in UsersApi.
 * @export
 * @interface UsersApiUpdateInvitationLinkRequest
 */
export interface UsersApiUpdateInvitationLinkRequest {
    /**
     * 
     * @type {InvitationLinkUpdateRequestDto}
     * @memberof UsersApiUpdateInvitationLink
     */
    readonly invitationLinkUpdateRequestDto?: InvitationLinkUpdateRequestDto
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Returns an invitation link for joining the portal.
     * @summary Create an invitation link
     * @param {PortalUsersApiCreateInvitationLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public createInvitationLink(requestParameters: UsersApiCreateInvitationLinkRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).createInvitationLink(requestParameters.invitationLinkCreateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Ensures that the current user has permission to delete the specified invitation link.  Throws security or not-found exceptions if required conditions are not met.
     * @summary Deletes an invitation link.
     * @param {PortalUsersApiDeleteInvitationLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteInvitationLink(requestParameters: UsersApiDeleteInvitationLinkRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).deleteInvitationLink(requestParameters.invitationLinkDeleteRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns an invitation link for joining the portal.
     * @summary Get an invitation link
     * @param {PortalUsersApiGetInvitationLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getInvitationLink(requestParameters: UsersApiGetInvitationLinkRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getInvitationLink(requestParameters.employeeType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns an invitation link for joining the portal.
     * @summary Get an invitation link
     * @param {PortalUsersApiGetInvitationLinkByEmployeeTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getInvitationLinkByEmployeeType(requestParameters: UsersApiGetInvitationLinkByEmployeeTypeRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getInvitationLinkByEmployeeType(requestParameters.employeeType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a number of portal users.
     * @summary Get a number of portal users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getPortalUsersCount(options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getPortalUsersCount(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a user with the ID specified in the request from the current portal.
     * @summary Get a user by ID
     * @param {PortalUsersApiGetUserByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserById(requestParameters: UsersApiGetUserByIdRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUserById(requestParameters.userID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Marks a gift message as read.
     * @summary Mark a gift message as read
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public markGiftMessageAsRead(options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).markGiftMessageAsRead(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends congratulations to the user after registering a portal.
     * @summary Send congratulations
     * @param {PortalUsersApiSendCongratulationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public sendCongratulations(requestParameters: UsersApiSendCongratulationsRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).sendCongratulations(requestParameters.userid, requestParameters.key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns an invitation link for joining the portal.
     * @summary Update an invitation link
     * @param {PortalUsersApiUpdateInvitationLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateInvitationLink(requestParameters: UsersApiUpdateInvitationLinkRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).updateInvitationLink(requestParameters.invitationLinkUpdateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

