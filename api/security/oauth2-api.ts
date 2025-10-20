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
import type { StringWrapper } from '../../models';
/**
 * OAuth2Api - axios parameter creator
 * @export
 */
export const OAuth2ApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Generates a JWT token for communication between login (client) and identity services.
         * @summary Generate JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for generateJwtToken operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-jwt-token/
         */
        generateJwtToken: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/security/oauth2/token`;
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
 * OAuth2Api - functional programming interface
 * @export
 */
export const OAuth2ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OAuth2ApiAxiosParamCreator(configuration)
    return {
        /**
         * Generates a JWT token for communication between login (client) and identity services.
         * @summary Generate JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for generateJwtToken operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-jwt-token/
         */
        async generateJwtToken(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateJwtToken(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OAuth2Api.generateJwtToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OAuth2Api - factory interface
 * @export
 */
export const OAuth2ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OAuth2ApiFp(configuration)
    return {
        /**
         * Generates a JWT token for communication between login (client) and identity services.
         * @summary Generate JWT token
         * @param {*} [options] Override http request option.
         * REST API Reference for generateJwtToken operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/generate-jwt-token/
         * @throws {RequiredError}
         */
        generateJwtToken(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.generateJwtToken(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OAuth2Api - object-oriented interface
 * @export
 * @class OAuth2Api
 * @extends {BaseAPI}
 */
export class OAuth2Api extends BaseAPI {
    /**
     * Generates a JWT token for communication between login (client) and identity services.
     * @summary Generate JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuth2Api
     */
    public generateJwtToken(options?: RawAxiosRequestConfig) {
        return OAuth2ApiFp(this.configuration).generateJwtToken(options).then((request) => request(this.axios, this.basePath));
    }
}

