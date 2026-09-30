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
import type { LoginProvider } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * ThirdPartyApi - axios parameter creator
 * @export
 */
export const ThirdPartyApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Builds and returns, as a string, the OAuth 2.0 consent URL of one external provider - the address a client  opens in a browser so that the user can grant this portal access to their account. The provider\'s client id,  secret and redirect URI have to be saved for the portal first with `POST api/2.0/settings/authservice`;  without them the URL has no `client_id` and the provider refuses it. Any signed-in portal user may call it,  and the call is read-only and safe to repeat. The URL carries `response_type=code`, the portal\'s `client_id`,  the provider\'s `redirect_uri`, the scope the portal needs (Drive with offline access for Google, `signature`  for DocuSign) and a `state` pointing back at this portal\'s `thirdparty/{provider}/code` page, where the code  arrives in the URL fragment as `#code=...`, or `#error/...` when the user declines. Only Google `1`, Dropbox  `2`, Docusign `3`, Box `4`, OneDrive `5`, Wordpress `10` and Github `13` produce a URL; any other value is  answered with 200 and no URL instead of an error. With `desktop=true`, the whole query string is copied into  `state` and comes back on the callback. The code is not exchanged here: pass it on as `token` to  `POST api/2.0/files/thirdparty` to connect the account.
         * @summary Get provider consent URL
         * @param {LoginProvider} provider The provider whose consent screen is wanted. Only Google, Dropbox, Docusign, Box, OneDrive, Wordpress and  Github produce a URL; any other provider is answered with 200 and no URL rather than an error. The provider  credentials have to be saved with `POST api/2.0/settings/authservice` first, or the URL comes back without a  client identifier and the provider refuses it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-code/
         */
        getThirdPartyCode: async (provider: LoginProvider, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'provider' is not null or undefined
            assertParamExists('getThirdPartyCode', 'provider', provider)

            const localVarPath = `/api/2.0/thirdparty/{provider}`
                .replace(`{${"provider"}}`, encodeURIComponent(String(provider)));
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
 * ThirdPartyApi - functional programming interface
 * @export
 */
export const ThirdPartyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ThirdPartyApiAxiosParamCreator(configuration)
    return {
        /**
         * Builds and returns, as a string, the OAuth 2.0 consent URL of one external provider - the address a client  opens in a browser so that the user can grant this portal access to their account. The provider\'s client id,  secret and redirect URI have to be saved for the portal first with `POST api/2.0/settings/authservice`;  without them the URL has no `client_id` and the provider refuses it. Any signed-in portal user may call it,  and the call is read-only and safe to repeat. The URL carries `response_type=code`, the portal\'s `client_id`,  the provider\'s `redirect_uri`, the scope the portal needs (Drive with offline access for Google, `signature`  for DocuSign) and a `state` pointing back at this portal\'s `thirdparty/{provider}/code` page, where the code  arrives in the URL fragment as `#code=...`, or `#error/...` when the user declines. Only Google `1`, Dropbox  `2`, Docusign `3`, Box `4`, OneDrive `5`, Wordpress `10` and Github `13` produce a URL; any other value is  answered with 200 and no URL instead of an error. With `desktop=true`, the whole query string is copied into  `state` and comes back on the callback. The code is not exchanged here: pass it on as `token` to  `POST api/2.0/files/thirdparty` to connect the account.
         * @summary Get provider consent URL
         * @param {LoginProvider} provider The provider whose consent screen is wanted. Only Google, Dropbox, Docusign, Box, OneDrive, Wordpress and  Github produce a URL; any other provider is answered with 200 and no URL rather than an error. The provider  credentials have to be saved with `POST api/2.0/settings/authservice` first, or the URL comes back without a  client identifier and the provider refuses it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-code/
         */
        async getThirdPartyCode(provider: LoginProvider, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getThirdPartyCode(provider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ThirdPartyApi.getThirdPartyCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ThirdPartyApi - factory interface
 * @export
 */
export const ThirdPartyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ThirdPartyApiFp(configuration)
    return {
        /**
         * Builds and returns, as a string, the OAuth 2.0 consent URL of one external provider - the address a client  opens in a browser so that the user can grant this portal access to their account. The provider\'s client id,  secret and redirect URI have to be saved for the portal first with `POST api/2.0/settings/authservice`;  without them the URL has no `client_id` and the provider refuses it. Any signed-in portal user may call it,  and the call is read-only and safe to repeat. The URL carries `response_type=code`, the portal\'s `client_id`,  the provider\'s `redirect_uri`, the scope the portal needs (Drive with offline access for Google, `signature`  for DocuSign) and a `state` pointing back at this portal\'s `thirdparty/{provider}/code` page, where the code  arrives in the URL fragment as `#code=...`, or `#error/...` when the user declines. Only Google `1`, Dropbox  `2`, Docusign `3`, Box `4`, OneDrive `5`, Wordpress `10` and Github `13` produce a URL; any other value is  answered with 200 and no URL instead of an error. With `desktop=true`, the whole query string is copied into  `state` and comes back on the callback. The code is not exchanged here: pass it on as `token` to  `POST api/2.0/files/thirdparty` to connect the account.
         * @summary Get provider consent URL
         * @param {ThirdPartyApiGetThirdPartyCodeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getThirdPartyCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-code/
         * @throws {RequiredError}
         */
        getThirdPartyCode(requestParameters: ThirdPartyApiGetThirdPartyCodeRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getThirdPartyCode(requestParameters.provider, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getThirdPartyCode operation in ThirdPartyApi.
 * @export
 * @interface ThirdPartyApiGetThirdPartyCodeRequest
 */
export interface ThirdPartyApiGetThirdPartyCodeRequest {
    /**
     * The provider whose consent screen is wanted. Only Google, Dropbox, Docusign, Box, OneDrive, Wordpress and  Github produce a URL; any other provider is answered with 200 and no URL rather than an error. The provider  credentials have to be saved with `POST api/2.0/settings/authservice` first, or the URL comes back without a  client identifier and the provider refuses it.
     * @type {LoginProvider}
     * @memberof ThirdPartyApiGetThirdPartyCode
     */
    readonly provider: LoginProvider
}

/**
 * ThirdPartyApi - object-oriented interface
 * @export
 * @class ThirdPartyApi
 * @extends {BaseAPI}
 */
export class ThirdPartyApi extends BaseAPI {
    /**
     * Builds and returns, as a string, the OAuth 2.0 consent URL of one external provider - the address a client  opens in a browser so that the user can grant this portal access to their account. The provider\'s client id,  secret and redirect URI have to be saved for the portal first with `POST api/2.0/settings/authservice`;  without them the URL has no `client_id` and the provider refuses it. Any signed-in portal user may call it,  and the call is read-only and safe to repeat. The URL carries `response_type=code`, the portal\'s `client_id`,  the provider\'s `redirect_uri`, the scope the portal needs (Drive with offline access for Google, `signature`  for DocuSign) and a `state` pointing back at this portal\'s `thirdparty/{provider}/code` page, where the code  arrives in the URL fragment as `#code=...`, or `#error/...` when the user declines. Only Google `1`, Dropbox  `2`, Docusign `3`, Box `4`, OneDrive `5`, Wordpress `10` and Github `13` produce a URL; any other value is  answered with 200 and no URL instead of an error. With `desktop=true`, the whole query string is copied into  `state` and comes back on the callback. The code is not exchanged here: pass it on as `token` to  `POST api/2.0/files/thirdparty` to connect the account.
     * @summary Get provider consent URL
     * @param {ThirdPartyApiGetThirdPartyCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyApi
     */
    public getThirdPartyCode(requestParameters: ThirdPartyApiGetThirdPartyCodeRequest, options?: RawAxiosRequestConfig) {
        return ThirdPartyApiFp(this.configuration).getThirdPartyCode(requestParameters.provider, options).then((request) => request(this.axios, this.basePath));
    }
}

