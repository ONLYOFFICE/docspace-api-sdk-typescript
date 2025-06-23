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
import type { AccountInfoArrayWrapper } from '../../models';
// @ts-ignore
import type { LinkAccountRequestDto } from '../../models';
// @ts-ignore
import type { SignupAccountRequestDto } from '../../models';
/**
 * PeopleThirdPartyAccountsApi - axios parameter creator
 * @export
 */
export const PeopleThirdPartyAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of the available third-party accounts.
         * @summary Get third-party accounts
         * @param {boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
         * @param {boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
         * @param {string} [clientCallback] The method that is called after authentication.
         * @param {string} [fromOnly] The provider name if a response is required only from this provider.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyAuthProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-auth-providers/
         */
        getThirdPartyAuthProviders: async (inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/thirdparty/providers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (inviteView !== undefined) {
                localVarQueryParameter['inviteView'] = inviteView;
            }

            if (settingsView !== undefined) {
                localVarQueryParameter['settingsView'] = settingsView;
            }

            if (clientCallback !== undefined) {
                localVarQueryParameter['clientCallback'] = clientCallback;
            }

            if (fromOnly !== undefined) {
                localVarQueryParameter['fromOnly'] = fromOnly;
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
         * Links a third-party account specified in the request to the user profile.
         * @summary Link a third-pary account
         * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for linkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-third-party-account/
         */
        linkThirdPartyAccount: async (linkAccountRequestDto?: LinkAccountRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/thirdparty/linkaccount`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(linkAccountRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a third-party account with the parameters specified in the request.
         * @summary Create a third-pary account
         * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for signupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/signup-third-party-account/
         */
        signupThirdPartyAccount: async (signupAccountRequestDto?: SignupAccountRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/thirdparty/signup`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(signupAccountRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unlinks a third-party account specified in the request from the user profile.
         * @summary Unlink a third-pary account
         * @param {string} [provider] The provider name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-third-party-account/
         */
        unlinkThirdPartyAccount: async (provider?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/people/thirdparty/unlinkaccount`;
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

            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
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
 * PeopleThirdPartyAccountsApi - functional programming interface
 * @export
 */
export const PeopleThirdPartyAccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeopleThirdPartyAccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of the available third-party accounts.
         * @summary Get third-party accounts
         * @param {boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
         * @param {boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
         * @param {string} [clientCallback] The method that is called after authentication.
         * @param {string} [fromOnly] The provider name if a response is required only from this provider.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getThirdPartyAuthProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-auth-providers/
         */
        async getThirdPartyAuthProviders(inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountInfoArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getThirdPartyAuthProviders(inviteView, settingsView, clientCallback, fromOnly, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThirdPartyAccountsApi.getThirdPartyAuthProviders']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Links a third-party account specified in the request to the user profile.
         * @summary Link a third-pary account
         * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for linkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-third-party-account/
         */
        async linkThirdPartyAccount(linkAccountRequestDto?: LinkAccountRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.linkThirdPartyAccount(linkAccountRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThirdPartyAccountsApi.linkThirdPartyAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a third-party account with the parameters specified in the request.
         * @summary Create a third-pary account
         * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for signupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/signup-third-party-account/
         */
        async signupThirdPartyAccount(signupAccountRequestDto?: SignupAccountRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signupThirdPartyAccount(signupAccountRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThirdPartyAccountsApi.signupThirdPartyAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Unlinks a third-party account specified in the request from the user profile.
         * @summary Unlink a third-pary account
         * @param {string} [provider] The provider name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unlinkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-third-party-account/
         */
        async unlinkThirdPartyAccount(provider?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlinkThirdPartyAccount(provider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PeopleThirdPartyAccountsApi.unlinkThirdPartyAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PeopleThirdPartyAccountsApi - factory interface
 * @export
 */
export const PeopleThirdPartyAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeopleThirdPartyAccountsApiFp(configuration)
    return {
        /**
         * Returns a list of the available third-party accounts.
         * @summary Get third-party accounts
         * @param {boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
         * @param {boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
         * @param {string} [clientCallback] The method that is called after authentication.
         * @param {string} [fromOnly] The provider name if a response is required only from this provider.
         * @param {*} [options] Override http request option.
         * REST API Reference for getThirdPartyAuthProviders operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-third-party-auth-providers/
         * @throws {RequiredError}
         */
        getThirdPartyAuthProviders(inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options?: RawAxiosRequestConfig): AxiosPromise<AccountInfoArrayWrapper> {
            return localVarFp.getThirdPartyAuthProviders(inviteView, settingsView, clientCallback, fromOnly, options).then((request) => request(axios, basePath));
        },
        /**
         * Links a third-party account specified in the request to the user profile.
         * @summary Link a third-pary account
         * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for linkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/link-third-party-account/
         * @throws {RequiredError}
         */
        linkThirdPartyAccount(linkAccountRequestDto?: LinkAccountRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.linkThirdPartyAccount(linkAccountRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a third-party account with the parameters specified in the request.
         * @summary Create a third-pary account
         * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for signupThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/signup-third-party-account/
         * @throws {RequiredError}
         */
        signupThirdPartyAccount(signupAccountRequestDto?: SignupAccountRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.signupThirdPartyAccount(signupAccountRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Unlinks a third-party account specified in the request from the user profile.
         * @summary Unlink a third-pary account
         * @param {string} [provider] The provider name.
         * @param {*} [options] Override http request option.
         * REST API Reference for unlinkThirdPartyAccount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unlink-third-party-account/
         * @throws {RequiredError}
         */
        unlinkThirdPartyAccount(provider?: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unlinkThirdPartyAccount(provider, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PeopleThirdPartyAccountsApi - object-oriented interface
 * @export
 * @class PeopleThirdPartyAccountsApi
 * @extends {BaseAPI}
 */
export class PeopleThirdPartyAccountsApi extends BaseAPI {
    /**
     * Returns a list of the available third-party accounts.
     * @summary Get third-party accounts
     * @param {boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
     * @param {boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
     * @param {string} [clientCallback] The method that is called after authentication.
     * @param {string} [fromOnly] The provider name if a response is required only from this provider.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThirdPartyAccountsApi
     */
    public getThirdPartyAuthProviders(inviteView?: boolean, settingsView?: boolean, clientCallback?: string, fromOnly?: string, options?: RawAxiosRequestConfig) {
        return PeopleThirdPartyAccountsApiFp(this.configuration).getThirdPartyAuthProviders(inviteView, settingsView, clientCallback, fromOnly, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Links a third-party account specified in the request to the user profile.
     * @summary Link a third-pary account
     * @param {LinkAccountRequestDto} [linkAccountRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThirdPartyAccountsApi
     */
    public linkThirdPartyAccount(linkAccountRequestDto?: LinkAccountRequestDto, options?: RawAxiosRequestConfig) {
        return PeopleThirdPartyAccountsApiFp(this.configuration).linkThirdPartyAccount(linkAccountRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a third-party account with the parameters specified in the request.
     * @summary Create a third-pary account
     * @param {SignupAccountRequestDto} [signupAccountRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThirdPartyAccountsApi
     */
    public signupThirdPartyAccount(signupAccountRequestDto?: SignupAccountRequestDto, options?: RawAxiosRequestConfig) {
        return PeopleThirdPartyAccountsApiFp(this.configuration).signupThirdPartyAccount(signupAccountRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unlinks a third-party account specified in the request from the user profile.
     * @summary Unlink a third-pary account
     * @param {string} [provider] The provider name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleThirdPartyAccountsApi
     */
    public unlinkThirdPartyAccount(provider?: string, options?: RawAxiosRequestConfig) {
        return PeopleThirdPartyAccountsApiFp(this.configuration).unlinkThirdPartyAccount(provider, options).then((request) => request(this.axios, this.basePath));
    }
}

