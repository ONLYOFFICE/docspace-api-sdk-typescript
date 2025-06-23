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
import type { FireBaseUserWrapper } from '../../models';
// @ts-ignore
import type { FirebaseRequestsDto } from '../../models';
/**
 * SecurityFirebaseApi - axios parameter creator
 * @export
 */
export const SecurityFirebaseApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Saves the Firebase device token specified in the request for the Documents application.
         * @summary Save the Documents Firebase device token
         * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for docRegisterPusnNotificationDevice operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/doc-register-pusn-notification-device/
         */
        docRegisterPusnNotificationDevice: async (firebaseRequestsDto?: FirebaseRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/push/docregisterdevice`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(firebaseRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Subscribes to the Documents push notification.
         * @summary Subscribe to Documents push notification
         * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for subscribeDocumentsPushNotification operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/subscribe-documents-push-notification/
         */
        subscribeDocumentsPushNotification: async (firebaseRequestsDto?: FirebaseRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/push/docsubscribe`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(firebaseRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SecurityFirebaseApi - functional programming interface
 * @export
 */
export const SecurityFirebaseApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityFirebaseApiAxiosParamCreator(configuration)
    return {
        /**
         * Saves the Firebase device token specified in the request for the Documents application.
         * @summary Save the Documents Firebase device token
         * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for docRegisterPusnNotificationDevice operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/doc-register-pusn-notification-device/
         */
        async docRegisterPusnNotificationDevice(firebaseRequestsDto?: FirebaseRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FireBaseUserWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.docRegisterPusnNotificationDevice(firebaseRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityFirebaseApi.docRegisterPusnNotificationDevice']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Subscribes to the Documents push notification.
         * @summary Subscribe to Documents push notification
         * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for subscribeDocumentsPushNotification operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/subscribe-documents-push-notification/
         */
        async subscribeDocumentsPushNotification(firebaseRequestsDto?: FirebaseRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FireBaseUserWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subscribeDocumentsPushNotification(firebaseRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityFirebaseApi.subscribeDocumentsPushNotification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecurityFirebaseApi - factory interface
 * @export
 */
export const SecurityFirebaseApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityFirebaseApiFp(configuration)
    return {
        /**
         * Saves the Firebase device token specified in the request for the Documents application.
         * @summary Save the Documents Firebase device token
         * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for docRegisterPusnNotificationDevice operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/doc-register-pusn-notification-device/
         * @throws {RequiredError}
         */
        docRegisterPusnNotificationDevice(firebaseRequestsDto?: FirebaseRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<FireBaseUserWrapper> {
            return localVarFp.docRegisterPusnNotificationDevice(firebaseRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Subscribes to the Documents push notification.
         * @summary Subscribe to Documents push notification
         * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for subscribeDocumentsPushNotification operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/subscribe-documents-push-notification/
         * @throws {RequiredError}
         */
        subscribeDocumentsPushNotification(firebaseRequestsDto?: FirebaseRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<FireBaseUserWrapper> {
            return localVarFp.subscribeDocumentsPushNotification(firebaseRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SecurityFirebaseApi - object-oriented interface
 * @export
 * @class SecurityFirebaseApi
 * @extends {BaseAPI}
 */
export class SecurityFirebaseApi extends BaseAPI {
    /**
     * Saves the Firebase device token specified in the request for the Documents application.
     * @summary Save the Documents Firebase device token
     * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityFirebaseApi
     */
    public docRegisterPusnNotificationDevice(firebaseRequestsDto?: FirebaseRequestsDto, options?: RawAxiosRequestConfig) {
        return SecurityFirebaseApiFp(this.configuration).docRegisterPusnNotificationDevice(firebaseRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Subscribes to the Documents push notification.
     * @summary Subscribe to Documents push notification
     * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityFirebaseApi
     */
    public subscribeDocumentsPushNotification(firebaseRequestsDto?: FirebaseRequestsDto, options?: RawAxiosRequestConfig) {
        return SecurityFirebaseApiFp(this.configuration).subscribeDocumentsPushNotification(firebaseRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

