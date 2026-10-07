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
import type { EmailMemberRequestDto } from '../../models';
// @ts-ignore
import type { EmployeeFullWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { UpdateMembersRequestDto } from '../../models';
/**
 * GuestsApi - axios parameter creator
 * @export
 */
export const GuestsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Accepts a guest that another member shared, which links that guest to the calling account and makes it  visible in the caller\'s list of guests.  Everything the operation needs comes from the confirmation token of the link produced by  `GET api/2.0/people/guests/{userId}/share`: the request body is not read at all, so there is nothing to fill  in, and an expired or already used token is answered with 401.  The caller has to be a room admin or a DocSpace admin; a member or a guest gets 403.  The account the token names has to exist and still be a guest, otherwise the operation answers 404 or 400.  The call is idempotent: a guest that is already linked to the caller is simply returned again.  The answer is the full profile of the guest.
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
         * Removes the listed guests from the caller\'s own list of guests and withdraws the access the caller had  granted them.  It does not delete the accounts: each guest keeps its profile and any access other members gave it, and only  the link to the caller and the caller\'s own shares disappear.  The caller has to be a room admin or a DocSpace admin, and every listed account has to exist, be an active  guest and be one of the caller\'s own guests - a single entry that is not rejects the whole call with 403 and  changes nothing.  The call returns no body; read `GET api/2.0/people/filter` with `area` set to `Guests` to see what is left.  To delete a guest account for good, disable it and then use `DELETE api/2.0/people/{userId}`.
         * @summary Remove guest relations
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
 * GuestsApi - functional programming interface
 * @export
 */
export const GuestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GuestsApiAxiosParamCreator(configuration)
    return {
        /**
         * Accepts a guest that another member shared, which links that guest to the calling account and makes it  visible in the caller\'s list of guests.  Everything the operation needs comes from the confirmation token of the link produced by  `GET api/2.0/people/guests/{userId}/share`: the request body is not read at all, so there is nothing to fill  in, and an expired or already used token is answered with 401.  The caller has to be a room admin or a DocSpace admin; a member or a guest gets 403.  The account the token names has to exist and still be a guest, otherwise the operation answers 404 or 400.  The call is idempotent: a guest that is already linked to the caller is simply returned again.  The answer is the full profile of the guest.
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
            const localVarOperationServerBasePath = operationServerMap['GuestsApi.approveGuestShareLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes the listed guests from the caller\'s own list of guests and withdraws the access the caller had  granted them.  It does not delete the accounts: each guest keeps its profile and any access other members gave it, and only  the link to the caller and the caller\'s own shares disappear.  The caller has to be a room admin or a DocSpace admin, and every listed account has to exist, be an active  guest and be one of the caller\'s own guests - a single entry that is not rejects the whole call with 403 and  changes nothing.  The call returns no body; read `GET api/2.0/people/filter` with `area` set to `Guests` to see what is left.  To delete a guest account for good, disable it and then use `DELETE api/2.0/people/{userId}`.
         * @summary Remove guest relations
         * @param {UpdateMembersRequestDto} [updateMembersRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteGuests operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-guests/
         */
        async deleteGuests(updateMembersRequestDto?: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteGuests(updateMembersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['GuestsApi.deleteGuests']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * GuestsApi - factory interface
 * @export
 */
export const GuestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GuestsApiFp(configuration)
    return {
        /**
         * Accepts a guest that another member shared, which links that guest to the calling account and makes it  visible in the caller\'s list of guests.  Everything the operation needs comes from the confirmation token of the link produced by  `GET api/2.0/people/guests/{userId}/share`: the request body is not read at all, so there is nothing to fill  in, and an expired or already used token is answered with 401.  The caller has to be a room admin or a DocSpace admin; a member or a guest gets 403.  The account the token names has to exist and still be a guest, otherwise the operation answers 404 or 400.  The call is idempotent: a guest that is already linked to the caller is simply returned again.  The answer is the full profile of the guest.
         * @summary Approve a guest sharing link
         * @param {GuestsApiApproveGuestShareLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for approveGuestShareLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/approve-guest-share-link/
         * @throws {RequiredError}
         */
        approveGuestShareLink(requestParameters: GuestsApiApproveGuestShareLinkRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullWrapper> {
            return localVarFp.approveGuestShareLink(requestParameters.emailMemberRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the listed guests from the caller\'s own list of guests and withdraws the access the caller had  granted them.  It does not delete the accounts: each guest keeps its profile and any access other members gave it, and only  the link to the caller and the caller\'s own shares disappear.  The caller has to be a room admin or a DocSpace admin, and every listed account has to exist, be an active  guest and be one of the caller\'s own guests - a single entry that is not rejects the whole call with 403 and  changes nothing.  The call returns no body; read `GET api/2.0/people/filter` with `area` set to `Guests` to see what is left.  To delete a guest account for good, disable it and then use `DELETE api/2.0/people/{userId}`.
         * @summary Remove guest relations
         * @param {GuestsApiDeleteGuestsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteGuests operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-guests/
         * @throws {RequiredError}
         */
        deleteGuests(requestParameters: GuestsApiDeleteGuestsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteGuests(requestParameters.updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for approveGuestShareLink operation in GuestsApi.
 * @export
 * @interface GuestsApiApproveGuestShareLinkRequest
 */
export interface GuestsApiApproveGuestShareLinkRequest {
    /**
     * 
     * @type {EmailMemberRequestDto}
     * @memberof GuestsApiApproveGuestShareLink
     */
    readonly emailMemberRequestDto?: EmailMemberRequestDto
}

/**
 * Request parameters for deleteGuests operation in GuestsApi.
 * @export
 * @interface GuestsApiDeleteGuestsRequest
 */
export interface GuestsApiDeleteGuestsRequest {
    /**
     * 
     * @type {UpdateMembersRequestDto}
     * @memberof GuestsApiDeleteGuests
     */
    readonly updateMembersRequestDto?: UpdateMembersRequestDto
}

/**
 * GuestsApi - object-oriented interface
 * @export
 * @class GuestsApi
 * @extends {BaseAPI}
 */
export class GuestsApi extends BaseAPI {
    /**
     * Accepts a guest that another member shared, which links that guest to the calling account and makes it  visible in the caller\'s list of guests.  Everything the operation needs comes from the confirmation token of the link produced by  `GET api/2.0/people/guests/{userId}/share`: the request body is not read at all, so there is nothing to fill  in, and an expired or already used token is answered with 401.  The caller has to be a room admin or a DocSpace admin; a member or a guest gets 403.  The account the token names has to exist and still be a guest, otherwise the operation answers 404 or 400.  The call is idempotent: a guest that is already linked to the caller is simply returned again.  The answer is the full profile of the guest.
     * @summary Approve a guest sharing link
     * @param {PeopleGuestsApiApproveGuestShareLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuestsApi
     */
    public approveGuestShareLink(requestParameters: GuestsApiApproveGuestShareLinkRequest = {}, options?: RawAxiosRequestConfig) {
        return GuestsApiFp(this.configuration).approveGuestShareLink(requestParameters.emailMemberRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the listed guests from the caller\'s own list of guests and withdraws the access the caller had  granted them.  It does not delete the accounts: each guest keeps its profile and any access other members gave it, and only  the link to the caller and the caller\'s own shares disappear.  The caller has to be a room admin or a DocSpace admin, and every listed account has to exist, be an active  guest and be one of the caller\'s own guests - a single entry that is not rejects the whole call with 403 and  changes nothing.  The call returns no body; read `GET api/2.0/people/filter` with `area` set to `Guests` to see what is left.  To delete a guest account for good, disable it and then use `DELETE api/2.0/people/{userId}`.
     * @summary Remove guest relations
     * @param {PeopleGuestsApiDeleteGuestsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuestsApi
     */
    public deleteGuests(requestParameters: GuestsApiDeleteGuestsRequest = {}, options?: RawAxiosRequestConfig) {
        return GuestsApiFp(this.configuration).deleteGuests(requestParameters.updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

