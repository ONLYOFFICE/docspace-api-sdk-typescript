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
import type { ContactsRequest } from '../../models';
// @ts-ignore
import type { EmployeeFullWrapper } from '../../models';
/**
 * PeopleContactsApi - axios parameter creator
 * @export
 */
export const PeopleContactsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes the contacts of the user with the ID specified in the request from the portal.
         * @summary Delete user contacts
         * @param {string} userid The user ID.
         * @param {ContactsRequest} [contactsRequest] The contacts request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteMemberContacts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member-contacts/
         */
        deleteMemberContacts: async (userid: string, contactsRequest?: ContactsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('deleteMemberContacts', 'userid', userid)
            const localVarPath = `/api/2.0/people/{userid}/contacts`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(contactsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the contacts of the user with the ID specified in the request replacing the current portal data with the new data.
         * @summary Set user contacts
         * @param {string} userid The user ID.
         * @param {ContactsRequest} [contactsRequest] The contacts request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setMemberContacts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-member-contacts/
         */
        setMemberContacts: async (userid: string, contactsRequest?: ContactsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('setMemberContacts', 'userid', userid)
            const localVarPath = `/api/2.0/people/{userid}/contacts`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(contactsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the contact information of the user with the ID specified in the request merging the new data into the current portal data.
         * @summary Update user contacts
         * @param {string} userid The user ID.
         * @param {ContactsRequest} [contactsRequest] The contacts request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateMemberContacts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-contacts/
         */
        updateMemberContacts: async (userid: string, contactsRequest?: ContactsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('updateMemberContacts', 'userid', userid)
            const localVarPath = `/api/2.0/people/{userid}/contacts`
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
            localVarRequestOptions.data = serializeDataIfNeeded(contactsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PeopleContactsApi - functional programming interface
 * @export
 */
export const PeopleContactsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeopleContactsApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes the contacts of the user with the ID specified in the request from the portal.
         * @summary Delete user contacts
         * @param {string} userid The user ID.
         * @param {ContactsRequest} [contactsRequest] The contacts request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteMemberContacts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member-contacts/
         */
        async deleteMemberContacts(userid: string, contactsRequest?: ContactsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMemberContacts(userid, contactsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleContactsApi.deleteMemberContacts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the contacts of the user with the ID specified in the request replacing the current portal data with the new data.
         * @summary Set user contacts
         * @param {string} userid The user ID.
         * @param {ContactsRequest} [contactsRequest] The contacts request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setMemberContacts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-member-contacts/
         */
        async setMemberContacts(userid: string, contactsRequest?: ContactsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setMemberContacts(userid, contactsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleContactsApi.setMemberContacts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the contact information of the user with the ID specified in the request merging the new data into the current portal data.
         * @summary Update user contacts
         * @param {string} userid The user ID.
         * @param {ContactsRequest} [contactsRequest] The contacts request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateMemberContacts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-contacts/
         */
        async updateMemberContacts(userid: string, contactsRequest?: ContactsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMemberContacts(userid, contactsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleContactsApi.updateMemberContacts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PeopleContactsApi - factory interface
 * @export
 */
export const PeopleContactsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeopleContactsApiFp(configuration)
    return {
        /**
         * Deletes the contacts of the user with the ID specified in the request from the portal.
         * @summary Delete user contacts
         * @param {string} userid The user ID.
         * @param {ContactsRequest} [contactsRequest] The contacts request.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteMemberContacts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member-contacts/
         * @throws {RequiredError}
         */
        deleteMemberContacts(userid: string, contactsRequest?: ContactsRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.deleteMemberContacts(userid, contactsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the contacts of the user with the ID specified in the request replacing the current portal data with the new data.
         * @summary Set user contacts
         * @param {string} userid The user ID.
         * @param {ContactsRequest} [contactsRequest] The contacts request.
         * @param {*} [options] Override http request option.
         * REST API Reference for setMemberContacts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-member-contacts/
         * @throws {RequiredError}
         */
        setMemberContacts(userid: string, contactsRequest?: ContactsRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.setMemberContacts(userid, contactsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the contact information of the user with the ID specified in the request merging the new data into the current portal data.
         * @summary Update user contacts
         * @param {string} userid The user ID.
         * @param {ContactsRequest} [contactsRequest] The contacts request.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateMemberContacts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-contacts/
         * @throws {RequiredError}
         */
        updateMemberContacts(userid: string, contactsRequest?: ContactsRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.updateMemberContacts(userid, contactsRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PeopleContactsApi - object-oriented interface
 * @export
 * @class PeopleContactsApi
 * @extends {BaseAPI}
 */
export class PeopleContactsApi extends BaseAPI {
    /**
     * Deletes the contacts of the user with the ID specified in the request from the portal.
     * @summary Delete user contacts
     * @param {string} userid The user ID.
     * @param {ContactsRequest} [contactsRequest] The contacts request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleContactsApi
     */
    public deleteMemberContacts(userid: string, contactsRequest?: ContactsRequest, options?: RawAxiosRequestConfig) {
        return PeopleContactsApiFp(this.configuration).deleteMemberContacts(userid, contactsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the contacts of the user with the ID specified in the request replacing the current portal data with the new data.
     * @summary Set user contacts
     * @param {string} userid The user ID.
     * @param {ContactsRequest} [contactsRequest] The contacts request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleContactsApi
     */
    public setMemberContacts(userid: string, contactsRequest?: ContactsRequest, options?: RawAxiosRequestConfig) {
        return PeopleContactsApiFp(this.configuration).setMemberContacts(userid, contactsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the contact information of the user with the ID specified in the request merging the new data into the current portal data.
     * @summary Update user contacts
     * @param {string} userid The user ID.
     * @param {ContactsRequest} [contactsRequest] The contacts request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleContactsApi
     */
    public updateMemberContacts(userid: string, contactsRequest?: ContactsRequest, options?: RawAxiosRequestConfig) {
        return PeopleContactsApiFp(this.configuration).updateMemberContacts(userid, contactsRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

