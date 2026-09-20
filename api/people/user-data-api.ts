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
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { EmployeeType } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { StartReassignRequestDto } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TaskProgressResponseWrapper } from '../../models';
// @ts-ignore
import type { TerminateRequestDto } from '../../models';
/**
 * UserDataApi - axios parameter creator
 * @export
 */
export const UserDataApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Returns the current state of the personal folder deletion queued for the authenticated account.  The job must have been queued by `POST api/2.0/people/delete/personal/start` first: when nothing is queued for  the caller the operation answers 200 with an empty body.  It takes no parameters and reports on the caller only, so an administrator cannot watch the folder deletion of  another user through it.  The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true, and  read `error` for the message left by a failed job.  A queued personal folder deletion cannot be cancelled, so the only outcome to wait for is its completion.
         * @summary Get the personal folder deletion progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDeletePersonalFolderProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-delete-personal-folder-progress/
         */
        getDeletePersonalFolderProgress: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/delete/personal/progress`;
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
         * Returns the current state of the data reassignment queued for the user with the ID specified in the request.  A reassignment must have been queued by `POST api/2.0/people/reassign/start` first: when nothing is queued for  that user the operation answers 200 with an empty body.  The caller needs the permission to edit users, and only the portal owner may track a reassignment whose source  user is a DocSpace administrator.  The call is read-only and is the polling operation of the reassignment flow - repeat it until `isCompleted` is  true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/reassign/terminate` to cancel a job that is still running.
         * @summary Get the reassignment progress
         * @param {string} userid The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the  same ID that was passed when the job was started.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReassignProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reassign-progress/
         */
        getReassignProgress: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getReassignProgress', 'userid', userid)

            const localVarPath = `/api/2.0/people/reassign/progress/{userid}`
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
         * Returns the current state of the data deletion queued for the user with the ID specified in the request.  A deletion must have been queued by `POST api/2.0/people/remove/start` first: when nothing is queued for that  user the operation answers 200 with an empty body.  The caller needs the permission to edit users.  The call is read-only and is the polling operation of the deletion flow - repeat it until `isCompleted` is  true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/remove/terminate` to cancel a job that is still running.
         * @summary Get the deletion progress
         * @param {string} userid The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the  same ID that was passed when the job was started.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRemoveProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-remove-progress/
         */
        getRemoveProgress: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getRemoveProgress', 'userid', userid)

            const localVarPath = `/api/2.0/people/remove/progress/{userid}`
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
         * Reports whether the rooms and the shared files of a user have to be reassigned before that user can be removed  or changed to the type passed in `type`.  Call it before `DELETE api/2.0/people/{userid}` or before a type change to find out whether  `POST api/2.0/people/reassign/start` has to run first.  The caller needs the permission to add and remove users of the requested type, and must be the portal owner  when the checked user is a DocSpace administrator.  The call is read-only and answers true when the user owns at least one room, or - when `type` is `Guest` -  when the user still has shared files.  A false answer means the user can be removed or converted without a reassignment.
         * @summary Check data for reassignment need
         * @param {string} [userId] The ID of the user whose rooms and shared files are checked.
         * @param {EmployeeType} [type] The type the user is about to be changed to, which decides what counts as data that has to be reassigned:  `RoomAdmin`, `DocSpaceAdmin` and `User` are checked for owned rooms only, while `Guest` is also checked for  files that are still shared. The default is `All`, which checks owned rooms only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for necessaryReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/necessary-reassign/
         */
        necessaryReassign: async (userId?: string, type?: EmployeeType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/reassign/necessary`;
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

            if (userId !== undefined) {
                localVarQueryParameter['UserId'] = userId;
            }

            if (type !== undefined) {
                localVarQueryParameter['Type'] = type;
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
         * Emails the caller a confirmation link that lets them delete their own profile, and is the first step of the  self-service profile removal.  It acts on the authenticated account only and takes no parameters, so it cannot be used to remove somebody  else - an administrator removes another user through `DELETE api/2.0/people/{userid}`.  The caller has to be a regular portal account: the portal owner and an account imported from LDAP are  rejected, because neither can delete itself.  The call sends mail and does not change the profile; the deletion happens later, when the caller follows the  emailed link and the client calls `DELETE api/2.0/people/@self` with the confirmation token from it.  The answer is a ready-to-display message naming the address the link was sent to, and the address is wrapped  in bold HTML markup, so strip the markup before showing it outside a web page.  Repeated calls are throttled, and each one sends a new link.
         * @summary Send the deletion instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendInstructionsToDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-instructions-to-delete/
         */
        sendInstructionsToDelete: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/self/delete`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues an asynchronous job that empties the personal folder of the authenticated account.  The operation takes no parameters and always acts on the caller, so it cannot be used to empty the folder of  another user.  Only an account whose type is `Guest` may call it; every other type is rejected, because only a guest has a  personal folder that can be emptied this way.  The job does not finish within this call: poll `GET api/2.0/people/delete/personal/progress` until  `isCompleted` is true.  The job deletes the files permanently and cannot be undone or cancelled - there is no terminate operation for  this flow, unlike the user data deletion.
         * @summary Delete the personal folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startDeletePersonalFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-delete-personal-folder/
         */
        startDeletePersonalFolder: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/delete/personal/start`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues an asynchronous job that transfers the rooms and the shared files owned by one portal user to another.  The source user must already have the `Terminated` status - disable the account through  `PUT api/2.0/people/status/{status}` before calling this - and the destination user must be an active room  admin or DocSpace admin, so a guest, a system account or a disabled account is rejected.  The caller needs the permission to edit users, cannot reassign their own data, and must be the portal owner to  reassign the data of another DocSpace administrator or of a People module administrator.  The transfer does not finish within this call: poll `GET api/2.0/people/reassign/progress/{userid}` with the  source user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/reassign/terminate`.  Pass `deleteProfile` as true to delete the source profile once the transfer succeeds, otherwise the emptied  profile is kept.  Use `GET api/2.0/people/reassign/necessary` first to find out whether the user owns anything that has to be  reassigned at all.
         * @summary Start the data reassignment
         * @param {StartReassignRequestDto} [startReassignRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-reassign/
         */
        startReassign: async (startReassignRequestDto?: StartReassignRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/reassign/start`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(startReassignRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues an asynchronous job that erases the data of the user with the ID specified in the request.  The account must already have the `Terminated` status - disable it through  `PUT api/2.0/people/status/{status}` first - and it cannot be the portal owner or the caller.  The caller needs the permission to edit users, has to be a DocSpace admin to erase the data of a room admin,  and has to be the portal owner to erase the data of another DocSpace admin.  The erasure does not finish within this call: poll `GET api/2.0/people/remove/progress/{userid}` with the same  user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/remove/terminate`.  This operation destroys the data and cannot be undone; to keep the rooms and the shared files of the account  instead, transfer them first through `POST api/2.0/people/reassign/start`.  An unknown ID and a rejected precondition both answer 400 and name the ID they rejected.
         * @summary Start the data deletion
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-remove/
         */
        startRemove: async (terminateRequestDto?: TerminateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/remove/start`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(terminateRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Cancels the data reassignment queued for the user with the ID specified in the request.  The caller needs the permission to edit users, and only the portal owner may cancel a reassignment whose  source user is a DocSpace administrator.  The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and  repeating it on an already cancelled job changes nothing.  Cancelling removes the job from the queue and does not undo the transfers it has already made, and a cancelled  job cannot be resumed - start a new one through `POST api/2.0/people/reassign/start`.  The returned progress reports `status` as `Canceled` and `isCompleted` as true.
         * @summary Terminate the data reassignment
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-reassign/
         */
        terminateReassign: async (terminateRequestDto?: TerminateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/reassign/terminate`;
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
         * Cancels the data deletion queued for the user with the ID specified in the request.  The caller needs the permission to edit users.  The operation is idempotent and returns no body: it drops the job from the queue, and doing so when nothing is  queued, or when the job has already finished, changes nothing and still answers 200.  Cancelling does not restore the data the job has already erased, and a cancelled job cannot be resumed - start  a new one through `POST api/2.0/people/remove/start`.  To find out whether the job is still running, read  `GET api/2.0/people/remove/progress/{userid}` before and after this call.
         * @summary Terminate the data deletion
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-remove/
         */
        terminateRemove: async (terminateRequestDto?: TerminateRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/people/remove/terminate`;
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
    }
};

/**
 * UserDataApi - functional programming interface
 * @export
 */
export const UserDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the current state of the personal folder deletion queued for the authenticated account.  The job must have been queued by `POST api/2.0/people/delete/personal/start` first: when nothing is queued for  the caller the operation answers 200 with an empty body.  It takes no parameters and reports on the caller only, so an administrator cannot watch the folder deletion of  another user through it.  The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true, and  read `error` for the message left by a failed job.  A queued personal folder deletion cannot be cancelled, so the only outcome to wait for is its completion.
         * @summary Get the personal folder deletion progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDeletePersonalFolderProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-delete-personal-folder-progress/
         */
        async getDeletePersonalFolderProgress(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeletePersonalFolderProgress(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.getDeletePersonalFolderProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current state of the data reassignment queued for the user with the ID specified in the request.  A reassignment must have been queued by `POST api/2.0/people/reassign/start` first: when nothing is queued for  that user the operation answers 200 with an empty body.  The caller needs the permission to edit users, and only the portal owner may track a reassignment whose source  user is a DocSpace administrator.  The call is read-only and is the polling operation of the reassignment flow - repeat it until `isCompleted` is  true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/reassign/terminate` to cancel a job that is still running.
         * @summary Get the reassignment progress
         * @param {string} userid The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the  same ID that was passed when the job was started.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getReassignProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reassign-progress/
         */
        async getReassignProgress(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReassignProgress(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.getReassignProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the current state of the data deletion queued for the user with the ID specified in the request.  A deletion must have been queued by `POST api/2.0/people/remove/start` first: when nothing is queued for that  user the operation answers 200 with an empty body.  The caller needs the permission to edit users.  The call is read-only and is the polling operation of the deletion flow - repeat it until `isCompleted` is  true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/remove/terminate` to cancel a job that is still running.
         * @summary Get the deletion progress
         * @param {string} userid The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the  same ID that was passed when the job was started.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRemoveProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-remove-progress/
         */
        async getRemoveProgress(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRemoveProgress(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.getRemoveProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether the rooms and the shared files of a user have to be reassigned before that user can be removed  or changed to the type passed in `type`.  Call it before `DELETE api/2.0/people/{userid}` or before a type change to find out whether  `POST api/2.0/people/reassign/start` has to run first.  The caller needs the permission to add and remove users of the requested type, and must be the portal owner  when the checked user is a DocSpace administrator.  The call is read-only and answers true when the user owns at least one room, or - when `type` is `Guest` -  when the user still has shared files.  A false answer means the user can be removed or converted without a reassignment.
         * @summary Check data for reassignment need
         * @param {string} [userId] The ID of the user whose rooms and shared files are checked.
         * @param {EmployeeType} [type] The type the user is about to be changed to, which decides what counts as data that has to be reassigned:  `RoomAdmin`, `DocSpaceAdmin` and `User` are checked for owned rooms only, while `Guest` is also checked for  files that are still shared. The default is `All`, which checks owned rooms only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for necessaryReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/necessary-reassign/
         */
        async necessaryReassign(userId?: string, type?: EmployeeType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.necessaryReassign(userId, type, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.necessaryReassign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Emails the caller a confirmation link that lets them delete their own profile, and is the first step of the  self-service profile removal.  It acts on the authenticated account only and takes no parameters, so it cannot be used to remove somebody  else - an administrator removes another user through `DELETE api/2.0/people/{userid}`.  The caller has to be a regular portal account: the portal owner and an account imported from LDAP are  rejected, because neither can delete itself.  The call sends mail and does not change the profile; the deletion happens later, when the caller follows the  emailed link and the client calls `DELETE api/2.0/people/@self` with the confirmation token from it.  The answer is a ready-to-display message naming the address the link was sent to, and the address is wrapped  in bold HTML markup, so strip the markup before showing it outside a web page.  Repeated calls are throttled, and each one sends a new link.
         * @summary Send the deletion instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendInstructionsToDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-instructions-to-delete/
         */
        async sendInstructionsToDelete(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendInstructionsToDelete(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.sendInstructionsToDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues an asynchronous job that empties the personal folder of the authenticated account.  The operation takes no parameters and always acts on the caller, so it cannot be used to empty the folder of  another user.  Only an account whose type is `Guest` may call it; every other type is rejected, because only a guest has a  personal folder that can be emptied this way.  The job does not finish within this call: poll `GET api/2.0/people/delete/personal/progress` until  `isCompleted` is true.  The job deletes the files permanently and cannot be undone or cancelled - there is no terminate operation for  this flow, unlike the user data deletion.
         * @summary Delete the personal folder
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startDeletePersonalFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-delete-personal-folder/
         */
        async startDeletePersonalFolder(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startDeletePersonalFolder(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.startDeletePersonalFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues an asynchronous job that transfers the rooms and the shared files owned by one portal user to another.  The source user must already have the `Terminated` status - disable the account through  `PUT api/2.0/people/status/{status}` before calling this - and the destination user must be an active room  admin or DocSpace admin, so a guest, a system account or a disabled account is rejected.  The caller needs the permission to edit users, cannot reassign their own data, and must be the portal owner to  reassign the data of another DocSpace administrator or of a People module administrator.  The transfer does not finish within this call: poll `GET api/2.0/people/reassign/progress/{userid}` with the  source user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/reassign/terminate`.  Pass `deleteProfile` as true to delete the source profile once the transfer succeeds, otherwise the emptied  profile is kept.  Use `GET api/2.0/people/reassign/necessary` first to find out whether the user owns anything that has to be  reassigned at all.
         * @summary Start the data reassignment
         * @param {StartReassignRequestDto} [startReassignRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-reassign/
         */
        async startReassign(startReassignRequestDto?: StartReassignRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startReassign(startReassignRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.startReassign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues an asynchronous job that erases the data of the user with the ID specified in the request.  The account must already have the `Terminated` status - disable it through  `PUT api/2.0/people/status/{status}` first - and it cannot be the portal owner or the caller.  The caller needs the permission to edit users, has to be a DocSpace admin to erase the data of a room admin,  and has to be the portal owner to erase the data of another DocSpace admin.  The erasure does not finish within this call: poll `GET api/2.0/people/remove/progress/{userid}` with the same  user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/remove/terminate`.  This operation destroys the data and cannot be undone; to keep the rooms and the shared files of the account  instead, transfer them first through `POST api/2.0/people/reassign/start`.  An unknown ID and a rejected precondition both answer 400 and name the ID they rejected.
         * @summary Start the data deletion
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-remove/
         */
        async startRemove(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startRemove(terminateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.startRemove']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Cancels the data reassignment queued for the user with the ID specified in the request.  The caller needs the permission to edit users, and only the portal owner may cancel a reassignment whose  source user is a DocSpace administrator.  The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and  repeating it on an already cancelled job changes nothing.  Cancelling removes the job from the queue and does not undo the transfers it has already made, and a cancelled  job cannot be resumed - start a new one through `POST api/2.0/people/reassign/start`.  The returned progress reports `status` as `Canceled` and `isCompleted` as true.
         * @summary Terminate the data reassignment
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-reassign/
         */
        async terminateReassign(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskProgressResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateReassign(terminateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.terminateReassign']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Cancels the data deletion queued for the user with the ID specified in the request.  The caller needs the permission to edit users.  The operation is idempotent and returns no body: it drops the job from the queue, and doing so when nothing is  queued, or when the job has already finished, changes nothing and still answers 200.  Cancelling does not restore the data the job has already erased, and a cancelled job cannot be resumed - start  a new one through `POST api/2.0/people/remove/start`.  To find out whether the job is still running, read  `GET api/2.0/people/remove/progress/{userid}` before and after this call.
         * @summary Terminate the data deletion
         * @param {TerminateRequestDto} [terminateRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-remove/
         */
        async terminateRemove(terminateRequestDto?: TerminateRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateRemove(terminateRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.terminateRemove']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserDataApi - factory interface
 * @export
 */
export const UserDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserDataApiFp(configuration)
    return {
        /**
         * Returns the current state of the personal folder deletion queued for the authenticated account.  The job must have been queued by `POST api/2.0/people/delete/personal/start` first: when nothing is queued for  the caller the operation answers 200 with an empty body.  It takes no parameters and reports on the caller only, so an administrator cannot watch the folder deletion of  another user through it.  The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true, and  read `error` for the message left by a failed job.  A queued personal folder deletion cannot be cancelled, so the only outcome to wait for is its completion.
         * @summary Get the personal folder deletion progress
         * @param {*} [options] Override http request option.
         * REST API Reference for getDeletePersonalFolderProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-delete-personal-folder-progress/
         * @throws {RequiredError}
         */
        getDeletePersonalFolderProgress(options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.getDeletePersonalFolderProgress(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current state of the data reassignment queued for the user with the ID specified in the request.  A reassignment must have been queued by `POST api/2.0/people/reassign/start` first: when nothing is queued for  that user the operation answers 200 with an empty body.  The caller needs the permission to edit users, and only the portal owner may track a reassignment whose source  user is a DocSpace administrator.  The call is read-only and is the polling operation of the reassignment flow - repeat it until `isCompleted` is  true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/reassign/terminate` to cancel a job that is still running.
         * @summary Get the reassignment progress
         * @param {UserDataApiGetReassignProgressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getReassignProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-reassign-progress/
         * @throws {RequiredError}
         */
        getReassignProgress(requestParameters: UserDataApiGetReassignProgressRequest, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.getReassignProgress(requestParameters.userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current state of the data deletion queued for the user with the ID specified in the request.  A deletion must have been queued by `POST api/2.0/people/remove/start` first: when nothing is queued for that  user the operation answers 200 with an empty body.  The caller needs the permission to edit users.  The call is read-only and is the polling operation of the deletion flow - repeat it until `isCompleted` is  true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/remove/terminate` to cancel a job that is still running.
         * @summary Get the deletion progress
         * @param {UserDataApiGetRemoveProgressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRemoveProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-remove-progress/
         * @throws {RequiredError}
         */
        getRemoveProgress(requestParameters: UserDataApiGetRemoveProgressRequest, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.getRemoveProgress(requestParameters.userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether the rooms and the shared files of a user have to be reassigned before that user can be removed  or changed to the type passed in `type`.  Call it before `DELETE api/2.0/people/{userid}` or before a type change to find out whether  `POST api/2.0/people/reassign/start` has to run first.  The caller needs the permission to add and remove users of the requested type, and must be the portal owner  when the checked user is a DocSpace administrator.  The call is read-only and answers true when the user owns at least one room, or - when `type` is `Guest` -  when the user still has shared files.  A false answer means the user can be removed or converted without a reassignment.
         * @summary Check data for reassignment need
         * @param {UserDataApiNecessaryReassignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for necessaryReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/necessary-reassign/
         * @throws {RequiredError}
         */
        necessaryReassign(requestParameters: UserDataApiNecessaryReassignRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.necessaryReassign(requestParameters.userId, requestParameters.type, options).then((request) => request(axios, basePath));
        },
        /**
         * Emails the caller a confirmation link that lets them delete their own profile, and is the first step of the  self-service profile removal.  It acts on the authenticated account only and takes no parameters, so it cannot be used to remove somebody  else - an administrator removes another user through `DELETE api/2.0/people/{userid}`.  The caller has to be a regular portal account: the portal owner and an account imported from LDAP are  rejected, because neither can delete itself.  The call sends mail and does not change the profile; the deletion happens later, when the caller follows the  emailed link and the client calls `DELETE api/2.0/people/@self` with the confirmation token from it.  The answer is a ready-to-display message naming the address the link was sent to, and the address is wrapped  in bold HTML markup, so strip the markup before showing it outside a web page.  Repeated calls are throttled, and each one sends a new link.
         * @summary Send the deletion instructions
         * @param {*} [options] Override http request option.
         * REST API Reference for sendInstructionsToDelete operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-instructions-to-delete/
         * @throws {RequiredError}
         */
        sendInstructionsToDelete(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.sendInstructionsToDelete(options).then((request) => request(axios, basePath));
        },
        /**
         * Queues an asynchronous job that empties the personal folder of the authenticated account.  The operation takes no parameters and always acts on the caller, so it cannot be used to empty the folder of  another user.  Only an account whose type is `Guest` may call it; every other type is rejected, because only a guest has a  personal folder that can be emptied this way.  The job does not finish within this call: poll `GET api/2.0/people/delete/personal/progress` until  `isCompleted` is true.  The job deletes the files permanently and cannot be undone or cancelled - there is no terminate operation for  this flow, unlike the user data deletion.
         * @summary Delete the personal folder
         * @param {*} [options] Override http request option.
         * REST API Reference for startDeletePersonalFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-delete-personal-folder/
         * @throws {RequiredError}
         */
        startDeletePersonalFolder(options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.startDeletePersonalFolder(options).then((request) => request(axios, basePath));
        },
        /**
         * Queues an asynchronous job that transfers the rooms and the shared files owned by one portal user to another.  The source user must already have the `Terminated` status - disable the account through  `PUT api/2.0/people/status/{status}` before calling this - and the destination user must be an active room  admin or DocSpace admin, so a guest, a system account or a disabled account is rejected.  The caller needs the permission to edit users, cannot reassign their own data, and must be the portal owner to  reassign the data of another DocSpace administrator or of a People module administrator.  The transfer does not finish within this call: poll `GET api/2.0/people/reassign/progress/{userid}` with the  source user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/reassign/terminate`.  Pass `deleteProfile` as true to delete the source profile once the transfer succeeds, otherwise the emptied  profile is kept.  Use `GET api/2.0/people/reassign/necessary` first to find out whether the user owns anything that has to be  reassigned at all.
         * @summary Start the data reassignment
         * @param {UserDataApiStartReassignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-reassign/
         * @throws {RequiredError}
         */
        startReassign(requestParameters: UserDataApiStartReassignRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.startReassign(requestParameters.startReassignRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues an asynchronous job that erases the data of the user with the ID specified in the request.  The account must already have the `Terminated` status - disable it through  `PUT api/2.0/people/status/{status}` first - and it cannot be the portal owner or the caller.  The caller needs the permission to edit users, has to be a DocSpace admin to erase the data of a room admin,  and has to be the portal owner to erase the data of another DocSpace admin.  The erasure does not finish within this call: poll `GET api/2.0/people/remove/progress/{userid}` with the same  user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/remove/terminate`.  This operation destroys the data and cannot be undone; to keep the rooms and the shared files of the account  instead, transfer them first through `POST api/2.0/people/reassign/start`.  An unknown ID and a rejected precondition both answer 400 and name the ID they rejected.
         * @summary Start the data deletion
         * @param {UserDataApiStartRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-remove/
         * @throws {RequiredError}
         */
        startRemove(requestParameters: UserDataApiStartRemoveRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.startRemove(requestParameters.terminateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Cancels the data reassignment queued for the user with the ID specified in the request.  The caller needs the permission to edit users, and only the portal owner may cancel a reassignment whose  source user is a DocSpace administrator.  The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and  repeating it on an already cancelled job changes nothing.  Cancelling removes the job from the queue and does not undo the transfers it has already made, and a cancelled  job cannot be resumed - start a new one through `POST api/2.0/people/reassign/start`.  The returned progress reports `status` as `Canceled` and `isCompleted` as true.
         * @summary Terminate the data reassignment
         * @param {UserDataApiTerminateReassignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateReassign operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-reassign/
         * @throws {RequiredError}
         */
        terminateReassign(requestParameters: UserDataApiTerminateReassignRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TaskProgressResponseWrapper> {
            return localVarFp.terminateReassign(requestParameters.terminateRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Cancels the data deletion queued for the user with the ID specified in the request.  The caller needs the permission to edit users.  The operation is idempotent and returns no body: it drops the job from the queue, and doing so when nothing is  queued, or when the job has already finished, changes nothing and still answers 200.  Cancelling does not restore the data the job has already erased, and a cancelled job cannot be resumed - start  a new one through `POST api/2.0/people/remove/start`.  To find out whether the job is still running, read  `GET api/2.0/people/remove/progress/{userid}` before and after this call.
         * @summary Terminate the data deletion
         * @param {UserDataApiTerminateRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateRemove operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-remove/
         * @throws {RequiredError}
         */
        terminateRemove(requestParameters: UserDataApiTerminateRemoveRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateRemove(requestParameters.terminateRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getReassignProgress operation in UserDataApi.
 * @export
 * @interface UserDataApiGetReassignProgressRequest
 */
export interface UserDataApiGetReassignProgressRequest {
    /**
     * The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the  same ID that was passed when the job was started.
     * @type {string}
     * @memberof UserDataApiGetReassignProgress
     */
    readonly userid: string
}

/**
 * Request parameters for getRemoveProgress operation in UserDataApi.
 * @export
 * @interface UserDataApiGetRemoveProgressRequest
 */
export interface UserDataApiGetRemoveProgressRequest {
    /**
     * The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the  same ID that was passed when the job was started.
     * @type {string}
     * @memberof UserDataApiGetRemoveProgress
     */
    readonly userid: string
}

/**
 * Request parameters for necessaryReassign operation in UserDataApi.
 * @export
 * @interface UserDataApiNecessaryReassignRequest
 */
export interface UserDataApiNecessaryReassignRequest {
    /**
     * The ID of the user whose rooms and shared files are checked.
     * @type {string}
     * @memberof UserDataApiNecessaryReassign
     */
    readonly userId?: string

    /**
     * The type the user is about to be changed to, which decides what counts as data that has to be reassigned:  `RoomAdmin`, `DocSpaceAdmin` and `User` are checked for owned rooms only, while `Guest` is also checked for  files that are still shared. The default is `All`, which checks owned rooms only.
     * @type {EmployeeType}
     * @memberof UserDataApiNecessaryReassign
     */
    readonly type?: EmployeeType
}

/**
 * Request parameters for startReassign operation in UserDataApi.
 * @export
 * @interface UserDataApiStartReassignRequest
 */
export interface UserDataApiStartReassignRequest {
    /**
     * 
     * @type {StartReassignRequestDto}
     * @memberof UserDataApiStartReassign
     */
    readonly startReassignRequestDto?: StartReassignRequestDto
}

/**
 * Request parameters for startRemove operation in UserDataApi.
 * @export
 * @interface UserDataApiStartRemoveRequest
 */
export interface UserDataApiStartRemoveRequest {
    /**
     * 
     * @type {TerminateRequestDto}
     * @memberof UserDataApiStartRemove
     */
    readonly terminateRequestDto?: TerminateRequestDto
}

/**
 * Request parameters for terminateReassign operation in UserDataApi.
 * @export
 * @interface UserDataApiTerminateReassignRequest
 */
export interface UserDataApiTerminateReassignRequest {
    /**
     * 
     * @type {TerminateRequestDto}
     * @memberof UserDataApiTerminateReassign
     */
    readonly terminateRequestDto?: TerminateRequestDto
}

/**
 * Request parameters for terminateRemove operation in UserDataApi.
 * @export
 * @interface UserDataApiTerminateRemoveRequest
 */
export interface UserDataApiTerminateRemoveRequest {
    /**
     * 
     * @type {TerminateRequestDto}
     * @memberof UserDataApiTerminateRemove
     */
    readonly terminateRequestDto?: TerminateRequestDto
}

/**
 * UserDataApi - object-oriented interface
 * @export
 * @class UserDataApi
 * @extends {BaseAPI}
 */
export class UserDataApi extends BaseAPI {
    /**
     * Returns the current state of the personal folder deletion queued for the authenticated account.  The job must have been queued by `POST api/2.0/people/delete/personal/start` first: when nothing is queued for  the caller the operation answers 200 with an empty body.  It takes no parameters and reports on the caller only, so an administrator cannot watch the folder deletion of  another user through it.  The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true, and  read `error` for the message left by a failed job.  A queued personal folder deletion cannot be cancelled, so the only outcome to wait for is its completion.
     * @summary Get the personal folder deletion progress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public getDeletePersonalFolderProgress(options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).getDeletePersonalFolderProgress(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current state of the data reassignment queued for the user with the ID specified in the request.  A reassignment must have been queued by `POST api/2.0/people/reassign/start` first: when nothing is queued for  that user the operation answers 200 with an empty body.  The caller needs the permission to edit users, and only the portal owner may track a reassignment whose source  user is a DocSpace administrator.  The call is read-only and is the polling operation of the reassignment flow - repeat it until `isCompleted` is  true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/reassign/terminate` to cancel a job that is still running.
     * @summary Get the reassignment progress
     * @param {PeopleUserDataApiGetReassignProgressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public getReassignProgress(requestParameters: UserDataApiGetReassignProgressRequest, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).getReassignProgress(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current state of the data deletion queued for the user with the ID specified in the request.  A deletion must have been queued by `POST api/2.0/people/remove/start` first: when nothing is queued for that  user the operation answers 200 with an empty body.  The caller needs the permission to edit users.  The call is read-only and is the polling operation of the deletion flow - repeat it until `isCompleted` is  true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job.  Use `PUT api/2.0/people/remove/terminate` to cancel a job that is still running.
     * @summary Get the deletion progress
     * @param {PeopleUserDataApiGetRemoveProgressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public getRemoveProgress(requestParameters: UserDataApiGetRemoveProgressRequest, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).getRemoveProgress(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether the rooms and the shared files of a user have to be reassigned before that user can be removed  or changed to the type passed in `type`.  Call it before `DELETE api/2.0/people/{userid}` or before a type change to find out whether  `POST api/2.0/people/reassign/start` has to run first.  The caller needs the permission to add and remove users of the requested type, and must be the portal owner  when the checked user is a DocSpace administrator.  The call is read-only and answers true when the user owns at least one room, or - when `type` is `Guest` -  when the user still has shared files.  A false answer means the user can be removed or converted without a reassignment.
     * @summary Check data for reassignment need
     * @param {PeopleUserDataApiNecessaryReassignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public necessaryReassign(requestParameters: UserDataApiNecessaryReassignRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).necessaryReassign(requestParameters.userId, requestParameters.type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Emails the caller a confirmation link that lets them delete their own profile, and is the first step of the  self-service profile removal.  It acts on the authenticated account only and takes no parameters, so it cannot be used to remove somebody  else - an administrator removes another user through `DELETE api/2.0/people/{userid}`.  The caller has to be a regular portal account: the portal owner and an account imported from LDAP are  rejected, because neither can delete itself.  The call sends mail and does not change the profile; the deletion happens later, when the caller follows the  emailed link and the client calls `DELETE api/2.0/people/@self` with the confirmation token from it.  The answer is a ready-to-display message naming the address the link was sent to, and the address is wrapped  in bold HTML markup, so strip the markup before showing it outside a web page.  Repeated calls are throttled, and each one sends a new link.
     * @summary Send the deletion instructions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public sendInstructionsToDelete(options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).sendInstructionsToDelete(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues an asynchronous job that empties the personal folder of the authenticated account.  The operation takes no parameters and always acts on the caller, so it cannot be used to empty the folder of  another user.  Only an account whose type is `Guest` may call it; every other type is rejected, because only a guest has a  personal folder that can be emptied this way.  The job does not finish within this call: poll `GET api/2.0/people/delete/personal/progress` until  `isCompleted` is true.  The job deletes the files permanently and cannot be undone or cancelled - there is no terminate operation for  this flow, unlike the user data deletion.
     * @summary Delete the personal folder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public startDeletePersonalFolder(options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).startDeletePersonalFolder(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues an asynchronous job that transfers the rooms and the shared files owned by one portal user to another.  The source user must already have the `Terminated` status - disable the account through  `PUT api/2.0/people/status/{status}` before calling this - and the destination user must be an active room  admin or DocSpace admin, so a guest, a system account or a disabled account is rejected.  The caller needs the permission to edit users, cannot reassign their own data, and must be the portal owner to  reassign the data of another DocSpace administrator or of a People module administrator.  The transfer does not finish within this call: poll `GET api/2.0/people/reassign/progress/{userid}` with the  source user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/reassign/terminate`.  Pass `deleteProfile` as true to delete the source profile once the transfer succeeds, otherwise the emptied  profile is kept.  Use `GET api/2.0/people/reassign/necessary` first to find out whether the user owns anything that has to be  reassigned at all.
     * @summary Start the data reassignment
     * @param {PeopleUserDataApiStartReassignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public startReassign(requestParameters: UserDataApiStartReassignRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).startReassign(requestParameters.startReassignRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues an asynchronous job that erases the data of the user with the ID specified in the request.  The account must already have the `Terminated` status - disable it through  `PUT api/2.0/people/status/{status}` first - and it cannot be the portal owner or the caller.  The caller needs the permission to edit users, has to be a DocSpace admin to erase the data of a room admin,  and has to be the portal owner to erase the data of another DocSpace admin.  The erasure does not finish within this call: poll `GET api/2.0/people/remove/progress/{userid}` with the same  user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/remove/terminate`.  This operation destroys the data and cannot be undone; to keep the rooms and the shared files of the account  instead, transfer them first through `POST api/2.0/people/reassign/start`.  An unknown ID and a rejected precondition both answer 400 and name the ID they rejected.
     * @summary Start the data deletion
     * @param {PeopleUserDataApiStartRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public startRemove(requestParameters: UserDataApiStartRemoveRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).startRemove(requestParameters.terminateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Cancels the data reassignment queued for the user with the ID specified in the request.  The caller needs the permission to edit users, and only the portal owner may cancel a reassignment whose  source user is a DocSpace administrator.  The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and  repeating it on an already cancelled job changes nothing.  Cancelling removes the job from the queue and does not undo the transfers it has already made, and a cancelled  job cannot be resumed - start a new one through `POST api/2.0/people/reassign/start`.  The returned progress reports `status` as `Canceled` and `isCompleted` as true.
     * @summary Terminate the data reassignment
     * @param {PeopleUserDataApiTerminateReassignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public terminateReassign(requestParameters: UserDataApiTerminateReassignRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).terminateReassign(requestParameters.terminateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Cancels the data deletion queued for the user with the ID specified in the request.  The caller needs the permission to edit users.  The operation is idempotent and returns no body: it drops the job from the queue, and doing so when nothing is  queued, or when the job has already finished, changes nothing and still answers 200.  Cancelling does not restore the data the job has already erased, and a cancelled job cannot be resumed - start  a new one through `POST api/2.0/people/remove/start`.  To find out whether the job is still running, read  `GET api/2.0/people/remove/progress/{userid}` before and after this call.
     * @summary Terminate the data deletion
     * @param {PeopleUserDataApiTerminateRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     */
    public terminateRemove(requestParameters: UserDataApiTerminateRemoveRequest = {}, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).terminateRemove(requestParameters.terminateRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

