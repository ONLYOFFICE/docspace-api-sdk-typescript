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
import type { LoginProvider } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
/**
 * ThirdPartyApi - axios parameter creator
 * @export
 */
export const ThirdPartyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a request to get the confirmation code from URL.   **Note**: List of providers: Google, Dropbox, Docusign, Box, OneDrive, Wordpress.
         * @summary Get the code request
         * @param {LoginProvider} provider The identity provider used for authentication.
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
         * Returns a request to get the confirmation code from URL.   **Note**: List of providers: Google, Dropbox, Docusign, Box, OneDrive, Wordpress.
         * @summary Get the code request
         * @param {LoginProvider} provider The identity provider used for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-code/
         */
        async getThirdPartyCode(provider: LoginProvider, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
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
         * Returns a request to get the confirmation code from URL.   **Note**: List of providers: Google, Dropbox, Docusign, Box, OneDrive, Wordpress.
         * @summary Get the code request
         * @param {LoginProvider} provider The identity provider used for authentication.
         * @param {*} [options] Override http request option.
         * REST API Reference for getThirdPartyCode operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-code/
         * @throws {RequiredError}
         */
        getThirdPartyCode(provider: LoginProvider, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getThirdPartyCode(provider, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ThirdPartyApi - object-oriented interface
 * @export
 * @class ThirdPartyApi
 * @extends {BaseAPI}
 */
export class ThirdPartyApi extends BaseAPI {
    /**
     * Returns a request to get the confirmation code from URL.   **Note**: List of providers: Google, Dropbox, Docusign, Box, OneDrive, Wordpress.
     * @summary Get the code request
     * @param {LoginProvider} provider The identity provider used for authentication.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyApi
     */
    public getThirdPartyCode(provider: LoginProvider, options?: RawAxiosRequestConfig) {
        return ThirdPartyApiFp(this.configuration).getThirdPartyCode(provider, options).then((request) => request(this.axios, this.basePath));
    }
}

