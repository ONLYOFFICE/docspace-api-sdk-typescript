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
import type { EmailMemberRequestDto } from '../../models';
// @ts-ignore
import type { EmployeeFullWrapper } from '../../models';
// @ts-ignore
import type { UpdateMembersRequestDto } from '../../models';
/**
 * PeopleGuestsApi - axios parameter creator
 * @export
 */
export const PeopleGuestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Approves a guest sharing link and returns the detailed information about a guest.
         * @summary Approve a guest sharing link
         * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for approveGuestShareLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/approve-guest-share-link/
         */
        approveGuestShareLink: async (emailMemberRequestDto?: EmailMemberRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/guests/share/approve`;
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
        /**
         * Deletes guests from the list and excludes them from rooms to which they were invited.
         * @summary Delete guests
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteGuests operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-guests/
         */
        deleteGuests: async (updateMembersRequestDto?: UpdateMembersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/guests`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMembersRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PeopleGuestsApi - functional programming interface
 * @export
 */
export const PeopleGuestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeopleGuestsApiAxiosParamCreator(configuration)
    return {
        /**
         * Approves a guest sharing link and returns the detailed information about a guest.
         * @summary Approve a guest sharing link
         * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for approveGuestShareLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/approve-guest-share-link/
         */
        async approveGuestShareLink(emailMemberRequestDto?: EmailMemberRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.approveGuestShareLink(emailMemberRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleGuestsApi.approveGuestShareLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes guests from the list and excludes them from rooms to which they were invited.
         * @summary Delete guests
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteGuests operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-guests/
         */
        async deleteGuests(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteGuests(updateMembersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleGuestsApi.deleteGuests']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PeopleGuestsApi - factory interface
 * @export
 */
export const PeopleGuestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeopleGuestsApiFp(configuration)
    return {
        /**
         * Approves a guest sharing link and returns the detailed information about a guest.
         * @summary Approve a guest sharing link
         * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for approveGuestShareLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/approve-guest-share-link/
         * @throws {RequiredError}
         */
        approveGuestShareLink(emailMemberRequestDto?: EmailMemberRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.approveGuestShareLink(emailMemberRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes guests from the list and excludes them from rooms to which they were invited.
         * @summary Delete guests
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteGuests operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-guests/
         * @throws {RequiredError}
         */
        deleteGuests(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteGuests(updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PeopleGuestsApi - object-oriented interface
 * @export
 * @class PeopleGuestsApi
 * @extends {BaseAPI}
 */
export class PeopleGuestsApi extends BaseAPI {
    /**
     * Approves a guest sharing link and returns the detailed information about a guest.
     * @summary Approve a guest sharing link
     * @param {EmailMemberRequestDto} [emailMemberRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleGuestsApi
     */
    public approveGuestShareLink(emailMemberRequestDto?: EmailMemberRequestDto, options?: RawAxiosRequestConfig) {
        return PeopleGuestsApiFp(this.configuration).approveGuestShareLink(emailMemberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes guests from the list and excludes them from rooms to which they were invited.
     * @summary Delete guests
     * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleGuestsApi
     */
    public deleteGuests(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig) {
        return PeopleGuestsApiFp(this.configuration).deleteGuests(updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

