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
import type { NotificationSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { NotificationSettingsWrapper } from '../../models';
// @ts-ignore
import type { NotificationType } from '../../models';
// @ts-ignore
import type { RoomsNotificationSettingsWrapper } from '../../models';
// @ts-ignore
import type { RoomsNotificationsSettingsRequestDto } from '../../models';
/**
 * SettingsNotificationsApi - axios parameter creator
 * @export
 */
export const SettingsNotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Checks if the notification type specified in the request is enabled or not.
         * @summary Check notification availability
         * @param {NotificationType} type The type of notification to query, specified in the route.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNotificationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-notification-settings/
         */
        getNotificationSettings: async (type: NotificationType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('getNotificationSettings', 'type', type)
            const localVarPath = `/api/2.0/settings/notification/{type}`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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
        /**
         * Returns a list of rooms with the disabled notifications.
         * @summary Get room notification settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsNotificationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-notification-settings/
         */
        getRoomsNotificationSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/notification/rooms`;
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
        /**
         * Enables the notification type specified in the request.
         * @summary Enable notifications
         * @param {NotificationSettingsRequestsDto} [notificationSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setNotificationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-notification-settings/
         */
        setNotificationSettings: async (notificationSettingsRequestsDto?: NotificationSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/notification`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(notificationSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets a notification status for a room with the ID specified in the request.
         * @summary Set room notification status
         * @param {RoomsNotificationsSettingsRequestDto} [roomsNotificationsSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomsNotificationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-rooms-notification-status/
         */
        setRoomsNotificationStatus: async (roomsNotificationsSettingsRequestDto?: RoomsNotificationsSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/notification/rooms`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(roomsNotificationsSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsNotificationsApi - functional programming interface
 * @export
 */
export const SettingsNotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsNotificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Checks if the notification type specified in the request is enabled or not.
         * @summary Check notification availability
         * @param {NotificationType} type The type of notification to query, specified in the route.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNotificationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-notification-settings/
         */
        async getNotificationSettings(type: NotificationType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotificationSettings(type, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsNotificationsApi.getNotificationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of rooms with the disabled notifications.
         * @summary Get room notification settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsNotificationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-notification-settings/
         */
        async getRoomsNotificationSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomsNotificationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomsNotificationSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsNotificationsApi.getRoomsNotificationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Enables the notification type specified in the request.
         * @summary Enable notifications
         * @param {NotificationSettingsRequestsDto} [notificationSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setNotificationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-notification-settings/
         */
        async setNotificationSettings(notificationSettingsRequestsDto?: NotificationSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setNotificationSettings(notificationSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsNotificationsApi.setNotificationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets a notification status for a room with the ID specified in the request.
         * @summary Set room notification status
         * @param {RoomsNotificationsSettingsRequestDto} [roomsNotificationsSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomsNotificationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-rooms-notification-status/
         */
        async setRoomsNotificationStatus(roomsNotificationsSettingsRequestDto?: RoomsNotificationsSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomsNotificationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRoomsNotificationStatus(roomsNotificationsSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsNotificationsApi.setRoomsNotificationStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsNotificationsApi - factory interface
 * @export
 */
export const SettingsNotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsNotificationsApiFp(configuration)
    return {
        /**
         * Checks if the notification type specified in the request is enabled or not.
         * @summary Check notification availability
         * @param {NotificationType} type The type of notification to query, specified in the route.
         * @param {*} [options] Override http request option.
         * REST API Reference for getNotificationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-notification-settings/
         * @throws {RequiredError}
         */
        getNotificationSettings(type: NotificationType, options?: RawAxiosRequestConfig): AxiosPromise<NotificationSettingsWrapper> {
            return localVarFp.getNotificationSettings(type, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of rooms with the disabled notifications.
         * @summary Get room notification settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomsNotificationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-notification-settings/
         * @throws {RequiredError}
         */
        getRoomsNotificationSettings(options?: RawAxiosRequestConfig): AxiosPromise<RoomsNotificationSettingsWrapper> {
            return localVarFp.getRoomsNotificationSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Enables the notification type specified in the request.
         * @summary Enable notifications
         * @param {NotificationSettingsRequestsDto} [notificationSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setNotificationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-notification-settings/
         * @throws {RequiredError}
         */
        setNotificationSettings(notificationSettingsRequestsDto?: NotificationSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<NotificationSettingsWrapper> {
            return localVarFp.setNotificationSettings(notificationSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets a notification status for a room with the ID specified in the request.
         * @summary Set room notification status
         * @param {RoomsNotificationsSettingsRequestDto} [roomsNotificationsSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setRoomsNotificationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-rooms-notification-status/
         * @throws {RequiredError}
         */
        setRoomsNotificationStatus(roomsNotificationsSettingsRequestDto?: RoomsNotificationsSettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<RoomsNotificationSettingsWrapper> {
            return localVarFp.setRoomsNotificationStatus(roomsNotificationsSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsNotificationsApi - object-oriented interface
 * @export
 * @class SettingsNotificationsApi
 * @extends {BaseAPI}
 */
export class SettingsNotificationsApi extends BaseAPI {
    /**
     * Checks if the notification type specified in the request is enabled or not.
     * @summary Check notification availability
     * @param {NotificationType} type The type of notification to query, specified in the route.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsNotificationsApi
     */
    public getNotificationSettings(type: NotificationType, options?: RawAxiosRequestConfig) {
        return SettingsNotificationsApiFp(this.configuration).getNotificationSettings(type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of rooms with the disabled notifications.
     * @summary Get room notification settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsNotificationsApi
     */
    public getRoomsNotificationSettings(options?: RawAxiosRequestConfig) {
        return SettingsNotificationsApiFp(this.configuration).getRoomsNotificationSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Enables the notification type specified in the request.
     * @summary Enable notifications
     * @param {NotificationSettingsRequestsDto} [notificationSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsNotificationsApi
     */
    public setNotificationSettings(notificationSettingsRequestsDto?: NotificationSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsNotificationsApiFp(this.configuration).setNotificationSettings(notificationSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets a notification status for a room with the ID specified in the request.
     * @summary Set room notification status
     * @param {RoomsNotificationsSettingsRequestDto} [roomsNotificationsSettingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsNotificationsApi
     */
    public setRoomsNotificationStatus(roomsNotificationsSettingsRequestDto?: RoomsNotificationsSettingsRequestDto, options?: RawAxiosRequestConfig) {
        return SettingsNotificationsApiFp(this.configuration).setRoomsNotificationStatus(roomsNotificationsSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

