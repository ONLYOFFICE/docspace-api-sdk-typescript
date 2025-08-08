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
import type { FireBaseUserWrapper } from '../../models';
// @ts-ignore
import type { FirebaseRequestsDto } from '../../models';
/**
 * FirebaseApi - axios parameter creator
 * @export
 */
export const FirebaseApiAxiosParamCreator = function (configuration?: Configuration) {
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
 * FirebaseApi - functional programming interface
 * @export
 */
export const FirebaseApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FirebaseApiAxiosParamCreator(configuration)
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
            const localVarOperationServerBasePath = operationServerMap['FirebaseApi.docRegisterPusnNotificationDevice']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['FirebaseApi.subscribeDocumentsPushNotification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FirebaseApi - factory interface
 * @export
 */
export const FirebaseApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FirebaseApiFp(configuration)
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
 * FirebaseApi - object-oriented interface
 * @export
 * @class FirebaseApi
 * @extends {BaseAPI}
 */
export class FirebaseApi extends BaseAPI {
    /**
     * Saves the Firebase device token specified in the request for the Documents application.
     * @summary Save the Documents Firebase device token
     * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FirebaseApi
     */
    public docRegisterPusnNotificationDevice(firebaseRequestsDto?: FirebaseRequestsDto, options?: RawAxiosRequestConfig) {
        return FirebaseApiFp(this.configuration).docRegisterPusnNotificationDevice(firebaseRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Subscribes to the Documents push notification.
     * @summary Subscribe to Documents push notification
     * @param {FirebaseRequestsDto} [firebaseRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FirebaseApi
     */
    public subscribeDocumentsPushNotification(firebaseRequestsDto?: FirebaseRequestsDto, options?: RawAxiosRequestConfig) {
        return FirebaseApiFp(this.configuration).subscribeDocumentsPushNotification(firebaseRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

