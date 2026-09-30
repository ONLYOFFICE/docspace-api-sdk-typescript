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
         * Registers one mobile device of the calling user for the push notifications of the Documents application, by  storing the Firebase token that device was issued together with the initial `isSubscribed` state. The token is  handed out by Firebase to the mobile client, so obtain it there before calling: nothing here checks it, and it  is kept as an opaque string of up to 255 characters. Every signed-in member registers its own devices,  whatever its role - owner, administrator, user or guest - and a registration is bound to the caller and the  current portal, so another member\'s devices cannot be touched. The call is safe to repeat, but it is not an  update: a token already registered comes back as it stands and `isSubscribed` from the request is ignored, so  switch an existing registration on or off with `PUT api/2.0/settings/push/docsubscribe` instead. What comes  back is the stored registration, with `application` always `doc` and `isSubscribed` as stored. Only a  subscribed device is sent the room activity messages, such as an invitation to a room, a role change, an  archived room or a new document in a room, and only while the installation itself is configured with Firebase  credentials.
         * @summary Register a push device
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
         * Switches the push notifications of the Documents application on or off for one already registered device of  the calling user: send that device\'s Firebase token together with `isSubscribed` true to let the messages  through or false to stop them. The device has to be registered first with  `POST api/2.0/settings/push/docregisterdevice`, and only the subscription state is written - the token is  matched, never changed. Every signed-in member manages its own devices, whatever its role - owner,  administrator, user or guest - and a token that belongs to another member or to another portal is not matched  at all, so nothing of theirs can be switched. Repeating the call with the same pair leaves the registration as  it is. What comes back is the updated registration, while an empty response means no registration of the  caller carries that token and nothing was stored - register the device and call again. A device switched off  keeps its token stored but is left out of the delivery, and the other devices of the same member are  unaffected. Which kinds of notification the account receives at all is a separate setting, read with  `GET api/2.0/settings/notification/{type}`.
         * @summary Set push subscription
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
         * Registers one mobile device of the calling user for the push notifications of the Documents application, by  storing the Firebase token that device was issued together with the initial `isSubscribed` state. The token is  handed out by Firebase to the mobile client, so obtain it there before calling: nothing here checks it, and it  is kept as an opaque string of up to 255 characters. Every signed-in member registers its own devices,  whatever its role - owner, administrator, user or guest - and a registration is bound to the caller and the  current portal, so another member\'s devices cannot be touched. The call is safe to repeat, but it is not an  update: a token already registered comes back as it stands and `isSubscribed` from the request is ignored, so  switch an existing registration on or off with `PUT api/2.0/settings/push/docsubscribe` instead. What comes  back is the stored registration, with `application` always `doc` and `isSubscribed` as stored. Only a  subscribed device is sent the room activity messages, such as an invitation to a room, a role change, an  archived room or a new document in a room, and only while the installation itself is configured with Firebase  credentials.
         * @summary Register a push device
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
         * Switches the push notifications of the Documents application on or off for one already registered device of  the calling user: send that device\'s Firebase token together with `isSubscribed` true to let the messages  through or false to stop them. The device has to be registered first with  `POST api/2.0/settings/push/docregisterdevice`, and only the subscription state is written - the token is  matched, never changed. Every signed-in member manages its own devices, whatever its role - owner,  administrator, user or guest - and a token that belongs to another member or to another portal is not matched  at all, so nothing of theirs can be switched. Repeating the call with the same pair leaves the registration as  it is. What comes back is the updated registration, while an empty response means no registration of the  caller carries that token and nothing was stored - register the device and call again. A device switched off  keeps its token stored but is left out of the delivery, and the other devices of the same member are  unaffected. Which kinds of notification the account receives at all is a separate setting, read with  `GET api/2.0/settings/notification/{type}`.
         * @summary Set push subscription
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
         * Registers one mobile device of the calling user for the push notifications of the Documents application, by  storing the Firebase token that device was issued together with the initial `isSubscribed` state. The token is  handed out by Firebase to the mobile client, so obtain it there before calling: nothing here checks it, and it  is kept as an opaque string of up to 255 characters. Every signed-in member registers its own devices,  whatever its role - owner, administrator, user or guest - and a registration is bound to the caller and the  current portal, so another member\'s devices cannot be touched. The call is safe to repeat, but it is not an  update: a token already registered comes back as it stands and `isSubscribed` from the request is ignored, so  switch an existing registration on or off with `PUT api/2.0/settings/push/docsubscribe` instead. What comes  back is the stored registration, with `application` always `doc` and `isSubscribed` as stored. Only a  subscribed device is sent the room activity messages, such as an invitation to a room, a role change, an  archived room or a new document in a room, and only while the installation itself is configured with Firebase  credentials.
         * @summary Register a push device
         * @param {FirebaseApiDocRegisterPusnNotificationDeviceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for docRegisterPusnNotificationDevice operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/doc-register-pusn-notification-device/
         * @throws {RequiredError}
         */
        docRegisterPusnNotificationDevice(requestParameters: FirebaseApiDocRegisterPusnNotificationDeviceRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FireBaseUserWrapper> {
            return localVarFp.docRegisterPusnNotificationDevice(requestParameters.firebaseRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches the push notifications of the Documents application on or off for one already registered device of  the calling user: send that device\'s Firebase token together with `isSubscribed` true to let the messages  through or false to stop them. The device has to be registered first with  `POST api/2.0/settings/push/docregisterdevice`, and only the subscription state is written - the token is  matched, never changed. Every signed-in member manages its own devices, whatever its role - owner,  administrator, user or guest - and a token that belongs to another member or to another portal is not matched  at all, so nothing of theirs can be switched. Repeating the call with the same pair leaves the registration as  it is. What comes back is the updated registration, while an empty response means no registration of the  caller carries that token and nothing was stored - register the device and call again. A device switched off  keeps its token stored but is left out of the delivery, and the other devices of the same member are  unaffected. Which kinds of notification the account receives at all is a separate setting, read with  `GET api/2.0/settings/notification/{type}`.
         * @summary Set push subscription
         * @param {FirebaseApiSubscribeDocumentsPushNotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for subscribeDocumentsPushNotification operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/subscribe-documents-push-notification/
         * @throws {RequiredError}
         */
        subscribeDocumentsPushNotification(requestParameters: FirebaseApiSubscribeDocumentsPushNotificationRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FireBaseUserWrapper> {
            return localVarFp.subscribeDocumentsPushNotification(requestParameters.firebaseRequestsDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for docRegisterPusnNotificationDevice operation in FirebaseApi.
 * @export
 * @interface FirebaseApiDocRegisterPusnNotificationDeviceRequest
 */
export interface FirebaseApiDocRegisterPusnNotificationDeviceRequest {
    /**
     * 
     * @type {FirebaseRequestsDto}
     * @memberof FirebaseApiDocRegisterPusnNotificationDevice
     */
    readonly firebaseRequestsDto?: FirebaseRequestsDto
}

/**
 * Request parameters for subscribeDocumentsPushNotification operation in FirebaseApi.
 * @export
 * @interface FirebaseApiSubscribeDocumentsPushNotificationRequest
 */
export interface FirebaseApiSubscribeDocumentsPushNotificationRequest {
    /**
     * 
     * @type {FirebaseRequestsDto}
     * @memberof FirebaseApiSubscribeDocumentsPushNotification
     */
    readonly firebaseRequestsDto?: FirebaseRequestsDto
}

/**
 * FirebaseApi - object-oriented interface
 * @export
 * @class FirebaseApi
 * @extends {BaseAPI}
 */
export class FirebaseApi extends BaseAPI {
    /**
     * Registers one mobile device of the calling user for the push notifications of the Documents application, by  storing the Firebase token that device was issued together with the initial `isSubscribed` state. The token is  handed out by Firebase to the mobile client, so obtain it there before calling: nothing here checks it, and it  is kept as an opaque string of up to 255 characters. Every signed-in member registers its own devices,  whatever its role - owner, administrator, user or guest - and a registration is bound to the caller and the  current portal, so another member\'s devices cannot be touched. The call is safe to repeat, but it is not an  update: a token already registered comes back as it stands and `isSubscribed` from the request is ignored, so  switch an existing registration on or off with `PUT api/2.0/settings/push/docsubscribe` instead. What comes  back is the stored registration, with `application` always `doc` and `isSubscribed` as stored. Only a  subscribed device is sent the room activity messages, such as an invitation to a room, a role change, an  archived room or a new document in a room, and only while the installation itself is configured with Firebase  credentials.
     * @summary Register a push device
     * @param {SecurityFirebaseApiDocRegisterPusnNotificationDeviceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FirebaseApi
     */
    public docRegisterPusnNotificationDevice(requestParameters: FirebaseApiDocRegisterPusnNotificationDeviceRequest = {}, options?: RawAxiosRequestConfig) {
        return FirebaseApiFp(this.configuration).docRegisterPusnNotificationDevice(requestParameters.firebaseRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches the push notifications of the Documents application on or off for one already registered device of  the calling user: send that device\'s Firebase token together with `isSubscribed` true to let the messages  through or false to stop them. The device has to be registered first with  `POST api/2.0/settings/push/docregisterdevice`, and only the subscription state is written - the token is  matched, never changed. Every signed-in member manages its own devices, whatever its role - owner,  administrator, user or guest - and a token that belongs to another member or to another portal is not matched  at all, so nothing of theirs can be switched. Repeating the call with the same pair leaves the registration as  it is. What comes back is the updated registration, while an empty response means no registration of the  caller carries that token and nothing was stored - register the device and call again. A device switched off  keeps its token stored but is left out of the delivery, and the other devices of the same member are  unaffected. Which kinds of notification the account receives at all is a separate setting, read with  `GET api/2.0/settings/notification/{type}`.
     * @summary Set push subscription
     * @param {SecurityFirebaseApiSubscribeDocumentsPushNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FirebaseApi
     */
    public subscribeDocumentsPushNotification(requestParameters: FirebaseApiSubscribeDocumentsPushNotificationRequest = {}, options?: RawAxiosRequestConfig) {
        return FirebaseApiFp(this.configuration).subscribeDocumentsPushNotification(requestParameters.firebaseRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }
}

