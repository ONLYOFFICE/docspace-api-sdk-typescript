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
import type { EmployeeFullArrayWrapper } from '../../models';
// @ts-ignore
import type { EmployeeType } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { StartUpdateUserTypeDto } from '../../models';
// @ts-ignore
import type { TaskProgressResponseWrapper } from '../../models';
// @ts-ignore
import type { TerminateRequestDto } from '../../models';
// @ts-ignore
import type { UpdateMembersRequestDto } from '../../models';
/**
 * UserTypeApi - axios parameter creator
 * @export
 */
export const UserTypeApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the current state of the user type change queued for the user with the ID specified in the request.  A conversion must have been queued by `POST api/2.0/people/type` first: when nothing is queued for that user  the operation answers 200 with an empty body.  The caller needs the permission to add and remove users.  The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true,  reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/type/terminate` to cancel a conversion that is still running.
         * @summary Get the user type change progress
         * @param {string} userid The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the  same ID that was passed when the job was started.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserTypeUpdateProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-type-update-progress/
         */
        getUserTypeUpdateProgress: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getUserTypeUpdateProgress', 'userid', userid)

            const localVarPath = `/api/2.0/people/type/progress/{userid}`
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
        /**
         * Queues an asynchronous job that converts one account to `Guest` or `User` and, in the same job, hands the  rooms and the shared files of that account over to another administrator.  Only `Guest` and `User` are accepted here, because they are the types that cannot own rooms; for any other  type use `PUT api/2.0/people/type/{type}`, which converts immediately and transfers nothing.  The caller needs the permission to add and remove users of the requested type, has to be the portal owner to  convert a DocSpace administrator, and converting to `Guest` also requires the portal to allow inviting guests.  The account being converted has to be active and cannot be the caller, and the recipient - `reassignUserId`,  or the caller when it is omitted - has to be an active room admin or DocSpace admin other than that account.  The conversion does not finish within this call: poll `GET api/2.0/people/type/progress/{userid}` with the  converted user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/type/terminate`.  A failure inside the running job is reported in the `error` field of the progress, not as a status code here.
         * @summary Start updating user type
         * @param {StartUpdateUserTypeDto} [startUpdateUserTypeDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startUserTypeUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-user-type-update/
         */
        startUserTypeUpdate: async (startUpdateUserTypeDto?: StartUpdateUserTypeDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/type`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(startUpdateUserTypeDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Cancels the user type change queued for the user with the ID specified in the request.  The caller needs the permission to add and remove users.  The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and  repeating it on an already cancelled job changes nothing.  Cancelling removes the job from the queue and does not undo the type change or the transfers it has already  made, and a cancelled job cannot be resumed - start a new one through `POST api/2.0/people/type`.  The returned progress reports `status` as `Canceled` and `isCompleted` as true.
         * @summary Terminate updating user type
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateUserTypeUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-user-type-update/
         */
        terminateUserTypeUpdate: async (terminateRequestDto?: TerminateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/type/terminate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(terminateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the type of the existing portal users listed in `userIds` to the type given in the route, in one call.  The caller needs the permission to add and remove users of the requested type, cannot change their own type or  the type of the portal owner, and cannot use this operation at all while being a guest; changing somebody to  `Guest` additionally requires the portal to allow inviting guests.  Every listed account has to be visible to the caller and must not be disabled.  The change is applied immediately: each converted user gets a notification email and raises a `UserUpdated`  webhook, and the accounts are processed one by one, so a rejection in the middle leaves the users before it  already converted - re-read them before retrying.  The answer streams the converted users with their detailed information, in the order they were processed.  Converting somebody to a paid type takes a paid seat, so the operation answers 402 when the tariff or the  paid-user quota does not allow one more.  This operation only moves the type and leaves the rooms and the shared files of the account where they are -  to hand them over to another admin in the same step, use `POST api/2.0/people/type` instead.
         * @summary Change a user type
         * @param {EmployeeType} type The type to convert the listed accounts to, taken from the route: `User`, `Guest`, `RoomAdmin` or  `DocSpaceAdmin`. `RoomAdmin` and `DocSpaceAdmin` take a paid seat.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The accounts to convert. Only `userIds` is read by this operation; `resendAll` belongs to the invitation  operations and is ignored here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-type/
         */
        updateUserType: async (type: EmployeeType, updateMembersRequestDto: UpdateMembersRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('updateUserType', 'type', type)
            // verify required parameter 'updateMembersRequestDto' is not null or undefined
            assertParamExists('updateUserType', 'updateMembersRequestDto', updateMembersRequestDto)

            const localVarPath = `/api/2.0/people/type/{type}`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateMembersRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserTypeApi - functional programming interface
 * @export
 */
export const UserTypeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserTypeApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the current state of the user type change queued for the user with the ID specified in the request.  A conversion must have been queued by `POST api/2.0/people/type` first: when nothing is queued for that user  the operation answers 200 with an empty body.  The caller needs the permission to add and remove users.  The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true,  reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/type/terminate` to cancel a conversion that is still running.
         * @summary Get the user type change progress
         * @param {string} userid The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the  same ID that was passed when the job was started.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserTypeUpdateProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-type-update-progress/
         */
        async getUserTypeUpdateProgress(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserTypeUpdateProgress(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserTypeApi.getUserTypeUpdateProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues an asynchronous job that converts one account to `Guest` or `User` and, in the same job, hands the  rooms and the shared files of that account over to another administrator.  Only `Guest` and `User` are accepted here, because they are the types that cannot own rooms; for any other  type use `PUT api/2.0/people/type/{type}`, which converts immediately and transfers nothing.  The caller needs the permission to add and remove users of the requested type, has to be the portal owner to  convert a DocSpace administrator, and converting to `Guest` also requires the portal to allow inviting guests.  The account being converted has to be active and cannot be the caller, and the recipient - `reassignUserId`,  or the caller when it is omitted - has to be an active room admin or DocSpace admin other than that account.  The conversion does not finish within this call: poll `GET api/2.0/people/type/progress/{userid}` with the  converted user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/type/terminate`.  A failure inside the running job is reported in the `error` field of the progress, not as a status code here.
         * @summary Start updating user type
         * @param {StartUpdateUserTypeDto} [startUpdateUserTypeDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startUserTypeUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-user-type-update/
         */
        async startUserTypeUpdate(startUpdateUserTypeDto?: StartUpdateUserTypeDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startUserTypeUpdate(startUpdateUserTypeDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserTypeApi.startUserTypeUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Cancels the user type change queued for the user with the ID specified in the request.  The caller needs the permission to add and remove users.  The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and  repeating it on an already cancelled job changes nothing.  Cancelling removes the job from the queue and does not undo the type change or the transfers it has already  made, and a cancelled job cannot be resumed - start a new one through `POST api/2.0/people/type`.  The returned progress reports `status` as `Canceled` and `isCompleted` as true.
         * @summary Terminate updating user type
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateUserTypeUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-user-type-update/
         */
        async terminateUserTypeUpdate(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateUserTypeUpdate(terminateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserTypeApi.terminateUserTypeUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the type of the existing portal users listed in `userIds` to the type given in the route, in one call.  The caller needs the permission to add and remove users of the requested type, cannot change their own type or  the type of the portal owner, and cannot use this operation at all while being a guest; changing somebody to  `Guest` additionally requires the portal to allow inviting guests.  Every listed account has to be visible to the caller and must not be disabled.  The change is applied immediately: each converted user gets a notification email and raises a `UserUpdated`  webhook, and the accounts are processed one by one, so a rejection in the middle leaves the users before it  already converted - re-read them before retrying.  The answer streams the converted users with their detailed information, in the order they were processed.  Converting somebody to a paid type takes a paid seat, so the operation answers 402 when the tariff or the  paid-user quota does not allow one more.  This operation only moves the type and leaves the rooms and the shared files of the account where they are -  to hand them over to another admin in the same step, use `POST api/2.0/people/type` instead.
         * @summary Change a user type
         * @param {EmployeeType} type The type to convert the listed accounts to, taken from the route: `User`, `Guest`, `RoomAdmin` or  `DocSpaceAdmin`. `RoomAdmin` and `DocSpaceAdmin` take a paid seat.
         * @param {UpdateMembersRequestDto} updateMembersRequestDto The accounts to convert. Only `userIds` is read by this operation; `resendAll` belongs to the invitation  operations and is ignored here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateUserType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-type/
         */
        async updateUserType(type: EmployeeType, updateMembersRequestDto: UpdateMembersRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFullArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserType(type, updateMembersRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserTypeApi.updateUserType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserTypeApi - factory interface
 * @export
 */
export const UserTypeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserTypeApiFp(configuration)
    return {
        /**
         * Returns the current state of the user type change queued for the user with the ID specified in the request.  A conversion must have been queued by `POST api/2.0/people/type` first: when nothing is queued for that user  the operation answers 200 with an empty body.  The caller needs the permission to add and remove users.  The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true,  reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/type/terminate` to cancel a conversion that is still running.
         * @summary Get the user type change progress
         * @param {UserTypeApiGetUserTypeUpdateProgressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserTypeUpdateProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-type-update-progress/
         * @throws {RequiredError}
         */
        getUserTypeUpdateProgress(requestParameters: UserTypeApiGetUserTypeUpdateProgressRequest, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.getUserTypeUpdateProgress(requestParameters.userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues an asynchronous job that converts one account to `Guest` or `User` and, in the same job, hands the  rooms and the shared files of that account over to another administrator.  Only `Guest` and `User` are accepted here, because they are the types that cannot own rooms; for any other  type use `PUT api/2.0/people/type/{type}`, which converts immediately and transfers nothing.  The caller needs the permission to add and remove users of the requested type, has to be the portal owner to  convert a DocSpace administrator, and converting to `Guest` also requires the portal to allow inviting guests.  The account being converted has to be active and cannot be the caller, and the recipient - `reassignUserId`,  or the caller when it is omitted - has to be an active room admin or DocSpace admin other than that account.  The conversion does not finish within this call: poll `GET api/2.0/people/type/progress/{userid}` with the  converted user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/type/terminate`.  A failure inside the running job is reported in the `error` field of the progress, not as a status code here.
         * @summary Start updating user type
         * @param {UserTypeApiStartUserTypeUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startUserTypeUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-user-type-update/
         * @throws {RequiredError}
         */
        startUserTypeUpdate(requestParameters: UserTypeApiStartUserTypeUpdateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.startUserTypeUpdate(requestParameters.startUpdateUserTypeDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Cancels the user type change queued for the user with the ID specified in the request.  The caller needs the permission to add and remove users.  The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and  repeating it on an already cancelled job changes nothing.  Cancelling removes the job from the queue and does not undo the type change or the transfers it has already  made, and a cancelled job cannot be resumed - start a new one through `POST api/2.0/people/type`.  The returned progress reports `status` as `Canceled` and `isCompleted` as true.
         * @summary Terminate updating user type
         * @param {UserTypeApiTerminateUserTypeUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateUserTypeUpdate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-user-type-update/
         * @throws {RequiredError}
         */
        terminateUserTypeUpdate(requestParameters: UserTypeApiTerminateUserTypeUpdateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.terminateUserTypeUpdate(requestParameters.terminateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the type of the existing portal users listed in `userIds` to the type given in the route, in one call.  The caller needs the permission to add and remove users of the requested type, cannot change their own type or  the type of the portal owner, and cannot use this operation at all while being a guest; changing somebody to  `Guest` additionally requires the portal to allow inviting guests.  Every listed account has to be visible to the caller and must not be disabled.  The change is applied immediately: each converted user gets a notification email and raises a `UserUpdated`  webhook, and the accounts are processed one by one, so a rejection in the middle leaves the users before it  already converted - re-read them before retrying.  The answer streams the converted users with their detailed information, in the order they were processed.  Converting somebody to a paid type takes a paid seat, so the operation answers 402 when the tariff or the  paid-user quota does not allow one more.  This operation only moves the type and leaves the rooms and the shared files of the account where they are -  to hand them over to another admin in the same step, use `POST api/2.0/people/type` instead.
         * @summary Change a user type
         * @param {UserTypeApiUpdateUserTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateUserType operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-user-type/
         * @throws {RequiredError}
         */
        updateUserType(requestParameters: UserTypeApiUpdateUserTypeRequest, options?: RawAxiosRequestConfig): AxiosPromise<EmployeeFullArrayWrapper> {
            return localVarFp.updateUserType(requestParameters.type, requestParameters.updateMembersRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getUserTypeUpdateProgress operation in UserTypeApi.
 * @export
 * @interface UserTypeApiGetUserTypeUpdateProgressRequest
 */
export interface UserTypeApiGetUserTypeUpdateProgressRequest {
    /**
     * The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the  same ID that was passed when the job was started.
     * @type {string}
     * @memberof UserTypeApiGetUserTypeUpdateProgress
     */
    readonly userid: string
}

/**
 * Request parameters for startUserTypeUpdate operation in UserTypeApi.
 * @export
 * @interface UserTypeApiStartUserTypeUpdateRequest
 */
export interface UserTypeApiStartUserTypeUpdateRequest {
    /**
     * 
     * @type {StartUpdateUserTypeDto}
     * @memberof UserTypeApiStartUserTypeUpdate
     */
    readonly startUpdateUserTypeDto?: StartUpdateUserTypeDto
}

/**
 * Request parameters for terminateUserTypeUpdate operation in UserTypeApi.
 * @export
 * @interface UserTypeApiTerminateUserTypeUpdateRequest
 */
export interface UserTypeApiTerminateUserTypeUpdateRequest {
    /**
     * 
     * @type {TerminateRequestDto}
     * @memberof UserTypeApiTerminateUserTypeUpdate
     */
    readonly terminateRequestDto?: TerminateRequestDto
}

/**
 * Request parameters for updateUserType operation in UserTypeApi.
 * @export
 * @interface UserTypeApiUpdateUserTypeRequest
 */
export interface UserTypeApiUpdateUserTypeRequest {
    /**
     * The type to convert the listed accounts to, taken from the route: `User`, `Guest`, `RoomAdmin` or  `DocSpaceAdmin`. `RoomAdmin` and `DocSpaceAdmin` take a paid seat.
     * @type {EmployeeType}
     * @memberof UserTypeApiUpdateUserType
     */
    readonly type: EmployeeType

    /**
     * The accounts to convert. Only `userIds` is read by this operation; `resendAll` belongs to the invitation  operations and is ignored here.
     * @type {UpdateMembersRequestDto}
     * @memberof UserTypeApiUpdateUserType
     */
    readonly updateMembersRequestDto: UpdateMembersRequestDto
}

/**
 * UserTypeApi - object-oriented interface
 * @export
 * @class UserTypeApi
 * @extends {BaseAPI}
 */
export class UserTypeApi extends BaseAPI {
    /**
     * Returns the current state of the user type change queued for the user with the ID specified in the request.  A conversion must have been queued by `POST api/2.0/people/type` first: when nothing is queued for that user  the operation answers 200 with an empty body.  The caller needs the permission to add and remove users.  The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true,  reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/type/terminate` to cancel a conversion that is still running.
     * @summary Get the user type change progress
     * @param {PeopleUserTypeApiGetUserTypeUpdateProgressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTypeApi
     */
    public getUserTypeUpdateProgress(requestParameters: UserTypeApiGetUserTypeUpdateProgressRequest, options?: RawAxiosRequestConfig) {
        return UserTypeApiFp(this.configuration).getUserTypeUpdateProgress(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues an asynchronous job that converts one account to `Guest` or `User` and, in the same job, hands the  rooms and the shared files of that account over to another administrator.  Only `Guest` and `User` are accepted here, because they are the types that cannot own rooms; for any other  type use `PUT api/2.0/people/type/{type}`, which converts immediately and transfers nothing.  The caller needs the permission to add and remove users of the requested type, has to be the portal owner to  convert a DocSpace administrator, and converting to `Guest` also requires the portal to allow inviting guests.  The account being converted has to be active and cannot be the caller, and the recipient - `reassignUserId`,  or the caller when it is omitted - has to be an active room admin or DocSpace admin other than that account.  The conversion does not finish within this call: poll `GET api/2.0/people/type/progress/{userid}` with the  converted user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/type/terminate`.  A failure inside the running job is reported in the `error` field of the progress, not as a status code here.
     * @summary Start updating user type
     * @param {PeopleUserTypeApiStartUserTypeUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTypeApi
     */
    public startUserTypeUpdate(requestParameters: UserTypeApiStartUserTypeUpdateRequest = {}, options?: RawAxiosRequestConfig) {
        return UserTypeApiFp(this.configuration).startUserTypeUpdate(requestParameters.startUpdateUserTypeDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Cancels the user type change queued for the user with the ID specified in the request.  The caller needs the permission to add and remove users.  The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and  repeating it on an already cancelled job changes nothing.  Cancelling removes the job from the queue and does not undo the type change or the transfers it has already  made, and a cancelled job cannot be resumed - start a new one through `POST api/2.0/people/type`.  The returned progress reports `status` as `Canceled` and `isCompleted` as true.
     * @summary Terminate updating user type
     * @param {PeopleUserTypeApiTerminateUserTypeUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTypeApi
     */
    public terminateUserTypeUpdate(requestParameters: UserTypeApiTerminateUserTypeUpdateRequest = {}, options?: RawAxiosRequestConfig) {
        return UserTypeApiFp(this.configuration).terminateUserTypeUpdate(requestParameters.terminateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the type of the existing portal users listed in `userIds` to the type given in the route, in one call.  The caller needs the permission to add and remove users of the requested type, cannot change their own type or  the type of the portal owner, and cannot use this operation at all while being a guest; changing somebody to  `Guest` additionally requires the portal to allow inviting guests.  Every listed account has to be visible to the caller and must not be disabled.  The change is applied immediately: each converted user gets a notification email and raises a `UserUpdated`  webhook, and the accounts are processed one by one, so a rejection in the middle leaves the users before it  already converted - re-read them before retrying.  The answer streams the converted users with their detailed information, in the order they were processed.  Converting somebody to a paid type takes a paid seat, so the operation answers 402 when the tariff or the  paid-user quota does not allow one more.  This operation only moves the type and leaves the rooms and the shared files of the account where they are -  to hand them over to another admin in the same step, use `POST api/2.0/people/type` instead.
     * @summary Change a user type
     * @param {PeopleUserTypeApiUpdateUserTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserTypeApi
     */
    public updateUserType(requestParameters: UserTypeApiUpdateUserTypeRequest, options?: RawAxiosRequestConfig) {
        return UserTypeApiFp(this.configuration).updateUserType(requestParameters.type, requestParameters.updateMembersRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

