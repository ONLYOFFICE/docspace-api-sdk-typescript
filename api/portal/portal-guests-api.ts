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
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * PortalGuestsApi - axios parameter creator
 * @export
 */
export const PortalGuestsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Builds a link that lets another member of the portal take over the caller\'s guest, so that the guest becomes  visible to them as well.  The account in the route has to exist and be a guest - any other type is rejected with 400 - and the caller  has to be able to see it and must not be a guest itself.  The call is read-only: it only mints the link and changes nothing, and it can be repeated as often as needed.  The answer is a shortened confirmation URL as plain text; hand it to the person who should get the guest, and  their client completes the hand-over with `POST api/2.0/people/guests/share/approve`.  The link carries a confirmation token and therefore expires, so mint it when it is about to be used rather  than storing it.
         * @summary Get a guest sharing link
         * @param {string} userid The ID of the guest to be handed over, taken from the route. The account has to exist, has to be a guest, and  has to be one the caller can see.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGuestSharingLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-guest-sharing-link/
         */
        getGuestSharingLink: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getGuestSharingLink', 'userid', userid)

            const localVarPath = `/api/2.0/people/guests/{userid}/share`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
    }
};

/**
 * PortalGuestsApi - functional programming interface
 * @export
 */
export const PortalGuestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PortalGuestsApiAxiosParamCreator(configuration)
    return {
        /**
         * Builds a link that lets another member of the portal take over the caller\'s guest, so that the guest becomes  visible to them as well.  The account in the route has to exist and be a guest - any other type is rejected with 400 - and the caller  has to be able to see it and must not be a guest itself.  The call is read-only: it only mints the link and changes nothing, and it can be repeated as often as needed.  The answer is a shortened confirmation URL as plain text; hand it to the person who should get the guest, and  their client completes the hand-over with `POST api/2.0/people/guests/share/approve`.  The link carries a confirmation token and therefore expires, so mint it when it is about to be used rather  than storing it.
         * @summary Get a guest sharing link
         * @param {string} userid The ID of the guest to be handed over, taken from the route. The account has to exist, has to be a guest, and  has to be one the caller can see.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGuestSharingLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-guest-sharing-link/
         */
        async getGuestSharingLink(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGuestSharingLink(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortalGuestsApi.getGuestSharingLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PortalGuestsApi - factory interface
 * @export
 */
export const PortalGuestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PortalGuestsApiFp(configuration)
    return {
        /**
         * Builds a link that lets another member of the portal take over the caller\'s guest, so that the guest becomes  visible to them as well.  The account in the route has to exist and be a guest - any other type is rejected with 400 - and the caller  has to be able to see it and must not be a guest itself.  The call is read-only: it only mints the link and changes nothing, and it can be repeated as often as needed.  The answer is a shortened confirmation URL as plain text; hand it to the person who should get the guest, and  their client completes the hand-over with `POST api/2.0/people/guests/share/approve`.  The link carries a confirmation token and therefore expires, so mint it when it is about to be used rather  than storing it.
         * @summary Get a guest sharing link
         * @param {PortalGuestsApiGetGuestSharingLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGuestSharingLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-guest-sharing-link/
         * @throws {RequiredError}
         */
        getGuestSharingLink(requestParameters: PortalGuestsApiGetGuestSharingLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getGuestSharingLink(requestParameters.userid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getGuestSharingLink operation in PortalGuestsApi.
 * @export
 * @interface PortalGuestsApiGetGuestSharingLinkRequest
 */
export interface PortalGuestsApiGetGuestSharingLinkRequest {
    /**
     * The ID of the guest to be handed over, taken from the route. The account has to exist, has to be a guest, and  has to be one the caller can see.
     * @type {string}
     * @memberof PortalGuestsApiGetGuestSharingLink
     */
    readonly userid: string
}

/**
 * PortalGuestsApi - object-oriented interface
 * @export
 * @class PortalGuestsApi
 * @extends {BaseAPI}
 */
export class PortalGuestsApi extends BaseAPI {
    /**
     * Builds a link that lets another member of the portal take over the caller\'s guest, so that the guest becomes  visible to them as well.  The account in the route has to exist and be a guest - any other type is rejected with 400 - and the caller  has to be able to see it and must not be a guest itself.  The call is read-only: it only mints the link and changes nothing, and it can be repeated as often as needed.  The answer is a shortened confirmation URL as plain text; hand it to the person who should get the guest, and  their client completes the hand-over with `POST api/2.0/people/guests/share/approve`.  The link carries a confirmation token and therefore expires, so mint it when it is about to be used rather  than storing it.
     * @summary Get a guest sharing link
     * @param {PortalGuestsApiGetGuestSharingLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortalGuestsApi
     */
    public getGuestSharingLink(requestParameters: PortalGuestsApiGetGuestSharingLinkRequest, options?: RawAxiosRequestConfig) {
        return PortalGuestsApiFp(this.configuration).getGuestSharingLink(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }
}

