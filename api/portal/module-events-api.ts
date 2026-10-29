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
import type { SendModuleEventRequest } from '../../models';
/**
 * ModuleEventsApi - axios parameter creator
 * @export
 */
export const ModuleEventsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Delivers one event from an integration module to the browsers of the portal named by the request host, over  the socket connection every open DocSpace page already keeps. No user session is needed: the caller  identifies itself with the module key in the `X-Module-Key` header, which the installation administrator  issues and allows for a list of portals. Set exactly one addressee - `user`, the e-mail of a portal user,  reaches only that user\'s open sessions without any subscription, and `room` reaches everyone in the portal  subscribed to `plugin-{module}-{room}`. Browsers receive `plugin:{module}:{event}` with `{ message }`, the  module name taken from the key, never from the body. The call only hands the event over: nothing is stored,  a user with no open session never sees it, and a repeated call delivers it again. Keep `message` a signal to  re-read, such as an unread count. The body is limited to 64 KB. A missing or unknown key fails with 401, a  portal the key is not allowed for with 403, an unknown or inactive user with 404, and invalid names or not  exactly one addressee with 400.
         * @summary Send a module event
         * @param {string} [xModuleKey] The secret key the installation administrator issued to the module. It is not a user or portal credential:  the module the event belongs to is the one this key is configured for, so the key is the module\'s identity.
         * @param {SendModuleEventRequest} [sendModuleEventRequest] The event to deliver.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendModuleEvent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-module-event/
         */
        sendModuleEvent: async (xModuleKey?: string, sendModuleEventRequest?: SendModuleEventRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/portal/moduleevents`;
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

            if (xModuleKey != null) {
                localVarHeaderParameter['x-Module-Key'] = String(xModuleKey);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(sendModuleEventRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ModuleEventsApi - functional programming interface
 * @export
 */
export const ModuleEventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ModuleEventsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delivers one event from an integration module to the browsers of the portal named by the request host, over  the socket connection every open DocSpace page already keeps. No user session is needed: the caller  identifies itself with the module key in the `X-Module-Key` header, which the installation administrator  issues and allows for a list of portals. Set exactly one addressee - `user`, the e-mail of a portal user,  reaches only that user\'s open sessions without any subscription, and `room` reaches everyone in the portal  subscribed to `plugin-{module}-{room}`. Browsers receive `plugin:{module}:{event}` with `{ message }`, the  module name taken from the key, never from the body. The call only hands the event over: nothing is stored,  a user with no open session never sees it, and a repeated call delivers it again. Keep `message` a signal to  re-read, such as an unread count. The body is limited to 64 KB. A missing or unknown key fails with 401, a  portal the key is not allowed for with 403, an unknown or inactive user with 404, and invalid names or not  exactly one addressee with 400.
         * @summary Send a module event
         * @param {string} [xModuleKey] The secret key the installation administrator issued to the module. It is not a user or portal credential:  the module the event belongs to is the one this key is configured for, so the key is the module\'s identity.
         * @param {SendModuleEventRequest} [sendModuleEventRequest] The event to deliver.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendModuleEvent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-module-event/
         */
        async sendModuleEvent(xModuleKey?: string, sendModuleEventRequest?: SendModuleEventRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendModuleEvent(xModuleKey, sendModuleEventRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ModuleEventsApi.sendModuleEvent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ModuleEventsApi - factory interface
 * @export
 */
export const ModuleEventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ModuleEventsApiFp(configuration)
    return {
        /**
         * Delivers one event from an integration module to the browsers of the portal named by the request host, over  the socket connection every open DocSpace page already keeps. No user session is needed: the caller  identifies itself with the module key in the `X-Module-Key` header, which the installation administrator  issues and allows for a list of portals. Set exactly one addressee - `user`, the e-mail of a portal user,  reaches only that user\'s open sessions without any subscription, and `room` reaches everyone in the portal  subscribed to `plugin-{module}-{room}`. Browsers receive `plugin:{module}:{event}` with `{ message }`, the  module name taken from the key, never from the body. The call only hands the event over: nothing is stored,  a user with no open session never sees it, and a repeated call delivers it again. Keep `message` a signal to  re-read, such as an unread count. The body is limited to 64 KB. A missing or unknown key fails with 401, a  portal the key is not allowed for with 403, an unknown or inactive user with 404, and invalid names or not  exactly one addressee with 400.
         * @summary Send a module event
         * @param {ModuleEventsApiSendModuleEventRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendModuleEvent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-module-event/
         * @throws {RequiredError}
         */
        sendModuleEvent(requestParameters: ModuleEventsApiSendModuleEventRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.sendModuleEvent(requestParameters.xModuleKey, requestParameters.sendModuleEventRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for sendModuleEvent operation in ModuleEventsApi.
 * @export
 * @interface ModuleEventsApiSendModuleEventRequest
 */
export interface ModuleEventsApiSendModuleEventRequest {
    /**
     * The secret key the installation administrator issued to the module. It is not a user or portal credential:  the module the event belongs to is the one this key is configured for, so the key is the module\'s identity.
     * @type {string}
     * @memberof ModuleEventsApiSendModuleEvent
     */
    readonly xModuleKey?: string

    /**
     * The event to deliver.
     * @type {SendModuleEventRequest}
     * @memberof ModuleEventsApiSendModuleEvent
     */
    readonly sendModuleEventRequest?: SendModuleEventRequest
}

/**
 * ModuleEventsApi - object-oriented interface
 * @export
 * @class ModuleEventsApi
 * @extends {BaseAPI}
 */
export class ModuleEventsApi extends BaseAPI {
    /**
     * Delivers one event from an integration module to the browsers of the portal named by the request host, over  the socket connection every open DocSpace page already keeps. No user session is needed: the caller  identifies itself with the module key in the `X-Module-Key` header, which the installation administrator  issues and allows for a list of portals. Set exactly one addressee - `user`, the e-mail of a portal user,  reaches only that user\'s open sessions without any subscription, and `room` reaches everyone in the portal  subscribed to `plugin-{module}-{room}`. Browsers receive `plugin:{module}:{event}` with `{ message }`, the  module name taken from the key, never from the body. The call only hands the event over: nothing is stored,  a user with no open session never sees it, and a repeated call delivers it again. Keep `message` a signal to  re-read, such as an unread count. The body is limited to 64 KB. A missing or unknown key fails with 401, a  portal the key is not allowed for with 403, an unknown or inactive user with 404, and invalid names or not  exactly one addressee with 400.
     * @summary Send a module event
     * @param {PortalModuleEventsApiSendModuleEventRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModuleEventsApi
     */
    public sendModuleEvent(requestParameters: ModuleEventsApiSendModuleEventRequest = {}, options?: RawAxiosRequestConfig) {
        return ModuleEventsApiFp(this.configuration).sendModuleEvent(requestParameters.xModuleKey, requestParameters.sendModuleEventRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

