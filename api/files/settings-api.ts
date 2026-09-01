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
import type { AutoCleanUpDataWrapper } from '../../models';
// @ts-ignore
import type { AutoCleanupRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CheckDocServiceUrlRequestDto } from '../../models';
// @ts-ignore
import type { DefaultTemplateSettingsRequestDto } from '../../models';
// @ts-ignore
import type { DefaultTemplateSettingsResetRequestDto } from '../../models';
// @ts-ignore
import type { DefaultTemplateSettingsWrapper } from '../../models';
// @ts-ignore
import type { DisplayRequestDto } from '../../models';
// @ts-ignore
import type { DocServiceUrlWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { ExternalSharingSettingsRequestDto } from '../../models';
// @ts-ignore
import type { ExternalSharingSettingsWrapper } from '../../models';
// @ts-ignore
import type { FileShareResponseArrayWrapper } from '../../models';
// @ts-ignore
import type { FilesSettingsWrapper } from '../../models';
// @ts-ignore
import type { HideConfirmConvertRequestDto } from '../../models';
// @ts-ignore
import type { ICompressWrapper } from '../../models';
// @ts-ignore
import type { ModuleWrapper } from '../../models';
// @ts-ignore
import type { SettingsRequestDto } from '../../models';
/**
 * SettingsApi - axios parameter creator
 * @export
 */
export const SettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Changes the access to the third-party settings.
         * @summary Change the third-party settings access
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAccessToThirdparty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-access-to-thirdparty/
         */
        changeAccessToThirdparty: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thirdparty`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the trash bin auto-clearing setting.
         * @summary Update the trash bin auto-clearing setting
         * @param {AutoCleanupRequestDto} [autoCleanupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-automatically-clean-up/
         */
        changeAutomaticallyCleanUp: async (autoCleanupRequestDto?: AutoCleanupRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/autocleanup`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(autoCleanupRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the default access rights in the sharing settings.
         * @summary Change the default access rights
         * @param {Array<number>} [requestBody] Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDefaultAccessRights operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-default-access-rights/
         */
        changeDefaultAccessRights: async (requestBody?: Array<number>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/dafaultaccessrights`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Specifies whether to confirm the file deletion or not.
         * @summary Confirm the file deletion
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDeleteConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-delete-confirm/
         */
        changeDeleteConfirm: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/changedeleteconfrim`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the format of the downloaded archive from .zip to .tar.gz. This method uses the body parameters.
         * @summary Change the archive format (using body parameters)
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDownloadZip operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip/
         */
        changeDownloadZip: async (displayRequestDto?: DisplayRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/downloadtargz`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(displayRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the Access Control external sharing settings.
         * @summary Change the Access Control external sharing settings
         * @param {ExternalSharingSettingsRequestDto} [externalSharingSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeExternalSharingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-external-sharing-settings/
         */
        changeExternalSharingSettings: async (externalSharingSettingsRequestDto?: ExternalSharingSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/externalsharingsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(externalSharingSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks the document service location URL.
         * @summary Check the document service URL
         * @param {CheckDocServiceUrlRequestDto} [checkDocServiceUrlRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-doc-service-url/
         */
        checkDocServiceUrl: async (checkDocServiceUrlRequestDto?: CheckDocServiceUrlRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/docservice`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(checkDocServiceUrlRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Specifies whether to display a file extension or not.
         * @summary Display a file extension
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayFileExtension operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-file-extension/
         */
        displayFileExtension: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/displayfileextension`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Displays the Recent folder.
         * @summary Display the Recent folder
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-recent/
         */
        displayRecent: async (displayRequestDto?: DisplayRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/displayrecent`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(displayRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the ability to share a file externally.
         * @summary Change the external sharing ability
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShare operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share/
         */
        externalShare: async (displayRequestDto?: DisplayRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/external`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(displayRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the ability to share a file externally on social networks.
         * @summary Change the external sharing ability on social networks
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShareSocialMedia operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share-social-media/
         */
        externalShareSocialMedia: async (displayRequestDto?: DisplayRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/externalsocialmedia`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(displayRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Specifies if the file forcesaving is enabled or not.
         * @summary Change the forcesaving ability
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for forcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/forcesave/
         */
        forcesave: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/forcesave`;
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
         * Returns the trash bin auto-clearing setting.
         * @summary Get the trash bin auto-clearing setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-automatically-clean-up/
         */
        getAutomaticallyCleanUp: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/autocleanup`;
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
         * Returns the default template setting.
         * @summary Get the default template setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-templates/
         */
        getDefaultTemplates: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/defaulttemplate`;
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
         * Returns the URL address of the connected editors.
         * @summary Get the document service URL
         * @param {boolean} [version] Specifies whether to return the editor version or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-doc-service-url/
         */
        getDocServiceUrl: async (version?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/docservice`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
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
         * Returns the information about the Documents module.
         * @summary Get the Documents information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesModule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-module/
         */
        getFilesModule: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/info`;
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
         * Returns all the file settings.
         * @summary Get file settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-settings/
         */
        getFilesSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Hides the confirmation dialog when canceling operations.
         * @summary Hide confirmation dialog when canceling operations
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmCancelOperation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-cancel-operation/
         */
        hideConfirmCancelOperation: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/hideconfirmcanceloperation`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Hides the confirmation dialog for saving the file copy in the original format when converting a file.
         * @summary Hide the confirmation dialog when converting
         * @param {HideConfirmConvertRequestDto} [hideConfirmConvertRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmConvert operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-convert/
         */
        hideConfirmConvert: async (hideConfirmConvertRequestDto?: HideConfirmConvertRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/hideconfirmconvert`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(hideConfirmConvertRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Hides the confirmation dialog when changing the room lifetime settings.
         * @summary Hide confirmation dialog when changing room lifetime settings
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmRoomLifetime operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-room-lifetime/
         */
        hideConfirmRoomLifetime: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/hideconfirmroomlifetime`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Specifies whether to ask a user for a file name on creation or not.
         * @summary Ask a new file name
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for keepNewFileName operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/keep-new-file-name/
         */
        keepNewFileName: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/keepnewfilename`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Resets the default template setting.
         * @summary Reset the default template setting
         * @param {DefaultTemplateSettingsResetRequestDto} [defaultTemplateSettingsResetRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-default-template/
         */
        resetDefaultTemplate: async (defaultTemplateSettingsResetRequestDto?: DefaultTemplateSettingsResetRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/defaulttemplate`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(defaultTemplateSettingsResetRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the default template setting.
         * @summary Change the default template setting
         * @param {DefaultTemplateSettingsRequestDto} [defaultTemplateSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-template/
         */
        setDefaultTemplate: async (defaultTemplateSettingsRequestDto?: DefaultTemplateSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/defaulttemplate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(defaultTemplateSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the ability to open the document in the same browser tab.
         * @summary Open document in the same browser tab
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setOpenEditorInSameTab operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-open-editor-in-same-tab/
         */
        setOpenEditorInSameTab: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/openeditorinsametab`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the setting that allows the user to organize the grouping of rooms.
         * @summary Organize rooms grouping
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setOrganizeRoomsGrouping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-organize-rooms-grouping/
         */
        setOrganizeRoomsGrouping: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/organizegrouping`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Changes the ability to store the forcesaved file versions.
         * @summary Change the ability to store the forcesaved files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeForcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-forcesave/
         */
        storeForcesave: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/storeforcesave`;
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
         * Changes the ability to upload documents in the original formats as well.
         * @summary Change the ability to upload original formats
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeOriginal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-original/
         */
        storeOriginal: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/storeoriginal`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a file version if a file with such a name already exists.
         * @summary Update a file version if it exists
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileIfExist operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-if-exist/
         */
        updateFileIfExist: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/updateifexist`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Uploads a file to use as the default template setting.
         * @summary Upload a file as the default template setting
         * @param {string} fileExtension File extension of a template to replace
         * @param {File} file File to replace template with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-default-template/
         */
        uploadDefaultTemplate: async (fileExtension: string, file: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileExtension' is not null or undefined
            assertParamExists('uploadDefaultTemplate', 'fileExtension', fileExtension)
            // verify required parameter 'file' is not null or undefined
            assertParamExists('uploadDefaultTemplate', 'file', file)

            const localVarPath = `/api/2.0/files/settings/defaulttemplate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

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

            if (fileExtension !== undefined) {
                localVarQueryParameter['FileExtension'] = fileExtension;
            }


            if (file !== undefined) { 
                localVarFormParams.append('File', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsApi - functional programming interface
 * @export
 */
export const SettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Changes the access to the third-party settings.
         * @summary Change the third-party settings access
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAccessToThirdparty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-access-to-thirdparty/
         */
        async changeAccessToThirdparty(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeAccessToThirdparty(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.changeAccessToThirdparty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the trash bin auto-clearing setting.
         * @summary Update the trash bin auto-clearing setting
         * @param {AutoCleanupRequestDto} [autoCleanupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-automatically-clean-up/
         */
        async changeAutomaticallyCleanUp(autoCleanupRequestDto?: AutoCleanupRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AutoCleanUpDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeAutomaticallyCleanUp(autoCleanupRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.changeAutomaticallyCleanUp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the default access rights in the sharing settings.
         * @summary Change the default access rights
         * @param {Array<number>} [requestBody] Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDefaultAccessRights operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-default-access-rights/
         */
        async changeDefaultAccessRights(requestBody?: Array<number>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareResponseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDefaultAccessRights(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.changeDefaultAccessRights']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Specifies whether to confirm the file deletion or not.
         * @summary Confirm the file deletion
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDeleteConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-delete-confirm/
         */
        async changeDeleteConfirm(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDeleteConfirm(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.changeDeleteConfirm']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the format of the downloaded archive from .zip to .tar.gz. This method uses the body parameters.
         * @summary Change the archive format (using body parameters)
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDownloadZip operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip/
         */
        async changeDownloadZip(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ICompressWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDownloadZip(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.changeDownloadZip']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the Access Control external sharing settings.
         * @summary Change the Access Control external sharing settings
         * @param {ExternalSharingSettingsRequestDto} [externalSharingSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeExternalSharingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-external-sharing-settings/
         */
        async changeExternalSharingSettings(externalSharingSettingsRequestDto?: ExternalSharingSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalSharingSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeExternalSharingSettings(externalSharingSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.changeExternalSharingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks the document service location URL.
         * @summary Check the document service URL
         * @param {CheckDocServiceUrlRequestDto} [checkDocServiceUrlRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-doc-service-url/
         */
        async checkDocServiceUrl(checkDocServiceUrlRequestDto?: CheckDocServiceUrlRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocServiceUrlWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkDocServiceUrl(checkDocServiceUrlRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.checkDocServiceUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Specifies whether to display a file extension or not.
         * @summary Display a file extension
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayFileExtension operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-file-extension/
         */
        async displayFileExtension(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.displayFileExtension(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.displayFileExtension']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Displays the Recent folder.
         * @summary Display the Recent folder
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-recent/
         */
        async displayRecent(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.displayRecent(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.displayRecent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the ability to share a file externally.
         * @summary Change the external sharing ability
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShare operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share/
         */
        async externalShare(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.externalShare(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.externalShare']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the ability to share a file externally on social networks.
         * @summary Change the external sharing ability on social networks
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShareSocialMedia operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share-social-media/
         */
        async externalShareSocialMedia(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.externalShareSocialMedia(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.externalShareSocialMedia']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Specifies if the file forcesaving is enabled or not.
         * @summary Change the forcesaving ability
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for forcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/forcesave/
         */
        async forcesave(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.forcesave(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.forcesave']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the trash bin auto-clearing setting.
         * @summary Get the trash bin auto-clearing setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-automatically-clean-up/
         */
        async getAutomaticallyCleanUp(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AutoCleanUpDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAutomaticallyCleanUp(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getAutomaticallyCleanUp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the default template setting.
         * @summary Get the default template setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-templates/
         */
        async getDefaultTemplates(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultTemplateSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultTemplates(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getDefaultTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the URL address of the connected editors.
         * @summary Get the document service URL
         * @param {boolean} [version] Specifies whether to return the editor version or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-doc-service-url/
         */
        async getDocServiceUrl(version?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocServiceUrlWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDocServiceUrl(version, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getDocServiceUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the information about the Documents module.
         * @summary Get the Documents information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesModule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-module/
         */
        async getFilesModule(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModuleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilesModule(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getFilesModule']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns all the file settings.
         * @summary Get file settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-settings/
         */
        async getFilesSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FilesSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilesSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.getFilesSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Hides the confirmation dialog when canceling operations.
         * @summary Hide confirmation dialog when canceling operations
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmCancelOperation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-cancel-operation/
         */
        async hideConfirmCancelOperation(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hideConfirmCancelOperation(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.hideConfirmCancelOperation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Hides the confirmation dialog for saving the file copy in the original format when converting a file.
         * @summary Hide the confirmation dialog when converting
         * @param {HideConfirmConvertRequestDto} [hideConfirmConvertRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmConvert operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-convert/
         */
        async hideConfirmConvert(hideConfirmConvertRequestDto?: HideConfirmConvertRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hideConfirmConvert(hideConfirmConvertRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.hideConfirmConvert']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Hides the confirmation dialog when changing the room lifetime settings.
         * @summary Hide confirmation dialog when changing room lifetime settings
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmRoomLifetime operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-room-lifetime/
         */
        async hideConfirmRoomLifetime(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hideConfirmRoomLifetime(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.hideConfirmRoomLifetime']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Specifies whether to ask a user for a file name on creation or not.
         * @summary Ask a new file name
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for keepNewFileName operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/keep-new-file-name/
         */
        async keepNewFileName(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.keepNewFileName(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.keepNewFileName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resets the default template setting.
         * @summary Reset the default template setting
         * @param {DefaultTemplateSettingsResetRequestDto} [defaultTemplateSettingsResetRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-default-template/
         */
        async resetDefaultTemplate(defaultTemplateSettingsResetRequestDto?: DefaultTemplateSettingsResetRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultTemplateSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetDefaultTemplate(defaultTemplateSettingsResetRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.resetDefaultTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the default template setting.
         * @summary Change the default template setting
         * @param {DefaultTemplateSettingsRequestDto} [defaultTemplateSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-template/
         */
        async setDefaultTemplate(defaultTemplateSettingsRequestDto?: DefaultTemplateSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultTemplateSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setDefaultTemplate(defaultTemplateSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.setDefaultTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the ability to open the document in the same browser tab.
         * @summary Open document in the same browser tab
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setOpenEditorInSameTab operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-open-editor-in-same-tab/
         */
        async setOpenEditorInSameTab(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setOpenEditorInSameTab(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.setOpenEditorInSameTab']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the setting that allows the user to organize the grouping of rooms.
         * @summary Organize rooms grouping
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setOrganizeRoomsGrouping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-organize-rooms-grouping/
         */
        async setOrganizeRoomsGrouping(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setOrganizeRoomsGrouping(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.setOrganizeRoomsGrouping']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the ability to store the forcesaved file versions.
         * @summary Change the ability to store the forcesaved files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeForcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-forcesave/
         */
        async storeForcesave(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeForcesave(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.storeForcesave']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes the ability to upload documents in the original formats as well.
         * @summary Change the ability to upload original formats
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeOriginal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-original/
         */
        async storeOriginal(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeOriginal(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.storeOriginal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a file version if a file with such a name already exists.
         * @summary Update a file version if it exists
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileIfExist operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-if-exist/
         */
        async updateFileIfExist(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFileIfExist(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.updateFileIfExist']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Uploads a file to use as the default template setting.
         * @summary Upload a file as the default template setting
         * @param {string} fileExtension File extension of a template to replace
         * @param {File} file File to replace template with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-default-template/
         */
        async uploadDefaultTemplate(fileExtension: string, file: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultTemplateSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadDefaultTemplate(fileExtension, file, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsApi.uploadDefaultTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsApi - factory interface
 * @export
 */
export const SettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsApiFp(configuration)
    return {
        /**
         * Changes the access to the third-party settings.
         * @summary Change the third-party settings access
         * @param {SettingsApiChangeAccessToThirdpartyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeAccessToThirdparty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-access-to-thirdparty/
         * @throws {RequiredError}
         */
        changeAccessToThirdparty(requestParameters: SettingsApiChangeAccessToThirdpartyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.changeAccessToThirdparty(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the trash bin auto-clearing setting.
         * @summary Update the trash bin auto-clearing setting
         * @param {SettingsApiChangeAutomaticallyCleanUpRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-automatically-clean-up/
         * @throws {RequiredError}
         */
        changeAutomaticallyCleanUp(requestParameters: SettingsApiChangeAutomaticallyCleanUpRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AutoCleanUpDataWrapper> {
            return localVarFp.changeAutomaticallyCleanUp(requestParameters.autoCleanupRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the default access rights in the sharing settings.
         * @summary Change the default access rights
         * @param {SettingsApiChangeDefaultAccessRightsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeDefaultAccessRights operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-default-access-rights/
         * @throws {RequiredError}
         */
        changeDefaultAccessRights(requestParameters: SettingsApiChangeDefaultAccessRightsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileShareResponseArrayWrapper> {
            return localVarFp.changeDefaultAccessRights(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Specifies whether to confirm the file deletion or not.
         * @summary Confirm the file deletion
         * @param {SettingsApiChangeDeleteConfirmRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeDeleteConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-delete-confirm/
         * @throws {RequiredError}
         */
        changeDeleteConfirm(requestParameters: SettingsApiChangeDeleteConfirmRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.changeDeleteConfirm(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the format of the downloaded archive from .zip to .tar.gz. This method uses the body parameters.
         * @summary Change the archive format (using body parameters)
         * @param {SettingsApiChangeDownloadZipRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeDownloadZip operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip/
         * @throws {RequiredError}
         */
        changeDownloadZip(requestParameters: SettingsApiChangeDownloadZipRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ICompressWrapper> {
            return localVarFp.changeDownloadZip(requestParameters.displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the Access Control external sharing settings.
         * @summary Change the Access Control external sharing settings
         * @param {SettingsApiChangeExternalSharingSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeExternalSharingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-external-sharing-settings/
         * @throws {RequiredError}
         */
        changeExternalSharingSettings(requestParameters: SettingsApiChangeExternalSharingSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ExternalSharingSettingsWrapper> {
            return localVarFp.changeExternalSharingSettings(requestParameters.externalSharingSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks the document service location URL.
         * @summary Check the document service URL
         * @param {SettingsApiCheckDocServiceUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-doc-service-url/
         * @throws {RequiredError}
         */
        checkDocServiceUrl(requestParameters: SettingsApiCheckDocServiceUrlRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocServiceUrlWrapper> {
            return localVarFp.checkDocServiceUrl(requestParameters.checkDocServiceUrlRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Specifies whether to display a file extension or not.
         * @summary Display a file extension
         * @param {SettingsApiDisplayFileExtensionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for displayFileExtension operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-file-extension/
         * @throws {RequiredError}
         */
        displayFileExtension(requestParameters: SettingsApiDisplayFileExtensionRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.displayFileExtension(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Displays the Recent folder.
         * @summary Display the Recent folder
         * @param {SettingsApiDisplayRecentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for displayRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-recent/
         * @throws {RequiredError}
         */
        displayRecent(requestParameters: SettingsApiDisplayRecentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.displayRecent(requestParameters.displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the ability to share a file externally.
         * @summary Change the external sharing ability
         * @param {SettingsApiExternalShareRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for externalShare operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share/
         * @throws {RequiredError}
         */
        externalShare(requestParameters: SettingsApiExternalShareRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.externalShare(requestParameters.displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the ability to share a file externally on social networks.
         * @summary Change the external sharing ability on social networks
         * @param {SettingsApiExternalShareSocialMediaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for externalShareSocialMedia operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share-social-media/
         * @throws {RequiredError}
         */
        externalShareSocialMedia(requestParameters: SettingsApiExternalShareSocialMediaRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.externalShareSocialMedia(requestParameters.displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Specifies if the file forcesaving is enabled or not.
         * @summary Change the forcesaving ability
         * @param {*} [options] Override http request option.
         * REST API Reference for forcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/forcesave/
         * @throws {RequiredError}
         */
        forcesave(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.forcesave(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the trash bin auto-clearing setting.
         * @summary Get the trash bin auto-clearing setting
         * @param {*} [options] Override http request option.
         * REST API Reference for getAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-automatically-clean-up/
         * @throws {RequiredError}
         */
        getAutomaticallyCleanUp(options?: RawAxiosRequestConfig): AxiosPromise<AutoCleanUpDataWrapper> {
            return localVarFp.getAutomaticallyCleanUp(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the default template setting.
         * @summary Get the default template setting
         * @param {*} [options] Override http request option.
         * REST API Reference for getDefaultTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-templates/
         * @throws {RequiredError}
         */
        getDefaultTemplates(options?: RawAxiosRequestConfig): AxiosPromise<DefaultTemplateSettingsWrapper> {
            return localVarFp.getDefaultTemplates(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the URL address of the connected editors.
         * @summary Get the document service URL
         * @param {SettingsApiGetDocServiceUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-doc-service-url/
         * @throws {RequiredError}
         */
        getDocServiceUrl(requestParameters: SettingsApiGetDocServiceUrlRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocServiceUrlWrapper> {
            return localVarFp.getDocServiceUrl(requestParameters.version, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the information about the Documents module.
         * @summary Get the Documents information
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilesModule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-module/
         * @throws {RequiredError}
         */
        getFilesModule(options?: RawAxiosRequestConfig): AxiosPromise<ModuleWrapper> {
            return localVarFp.getFilesModule(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all the file settings.
         * @summary Get file settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilesSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-settings/
         * @throws {RequiredError}
         */
        getFilesSettings(options?: RawAxiosRequestConfig): AxiosPromise<FilesSettingsWrapper> {
            return localVarFp.getFilesSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Hides the confirmation dialog when canceling operations.
         * @summary Hide confirmation dialog when canceling operations
         * @param {SettingsApiHideConfirmCancelOperationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for hideConfirmCancelOperation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-cancel-operation/
         * @throws {RequiredError}
         */
        hideConfirmCancelOperation(requestParameters: SettingsApiHideConfirmCancelOperationRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.hideConfirmCancelOperation(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Hides the confirmation dialog for saving the file copy in the original format when converting a file.
         * @summary Hide the confirmation dialog when converting
         * @param {SettingsApiHideConfirmConvertRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for hideConfirmConvert operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-convert/
         * @throws {RequiredError}
         */
        hideConfirmConvert(requestParameters: SettingsApiHideConfirmConvertRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.hideConfirmConvert(requestParameters.hideConfirmConvertRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Hides the confirmation dialog when changing the room lifetime settings.
         * @summary Hide confirmation dialog when changing room lifetime settings
         * @param {SettingsApiHideConfirmRoomLifetimeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for hideConfirmRoomLifetime operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-room-lifetime/
         * @throws {RequiredError}
         */
        hideConfirmRoomLifetime(requestParameters: SettingsApiHideConfirmRoomLifetimeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.hideConfirmRoomLifetime(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Specifies whether to ask a user for a file name on creation or not.
         * @summary Ask a new file name
         * @param {SettingsApiKeepNewFileNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for keepNewFileName operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/keep-new-file-name/
         * @throws {RequiredError}
         */
        keepNewFileName(requestParameters: SettingsApiKeepNewFileNameRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.keepNewFileName(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the default template setting.
         * @summary Reset the default template setting
         * @param {SettingsApiResetDefaultTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for resetDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-default-template/
         * @throws {RequiredError}
         */
        resetDefaultTemplate(requestParameters: SettingsApiResetDefaultTemplateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DefaultTemplateSettingsWrapper> {
            return localVarFp.resetDefaultTemplate(requestParameters.defaultTemplateSettingsResetRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the default template setting.
         * @summary Change the default template setting
         * @param {SettingsApiSetDefaultTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-template/
         * @throws {RequiredError}
         */
        setDefaultTemplate(requestParameters: SettingsApiSetDefaultTemplateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DefaultTemplateSettingsWrapper> {
            return localVarFp.setDefaultTemplate(requestParameters.defaultTemplateSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the ability to open the document in the same browser tab.
         * @summary Open document in the same browser tab
         * @param {SettingsApiSetOpenEditorInSameTabRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setOpenEditorInSameTab operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-open-editor-in-same-tab/
         * @throws {RequiredError}
         */
        setOpenEditorInSameTab(requestParameters: SettingsApiSetOpenEditorInSameTabRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.setOpenEditorInSameTab(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the setting that allows the user to organize the grouping of rooms.
         * @summary Organize rooms grouping
         * @param {SettingsApiSetOrganizeRoomsGroupingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setOrganizeRoomsGrouping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-organize-rooms-grouping/
         * @throws {RequiredError}
         */
        setOrganizeRoomsGrouping(requestParameters: SettingsApiSetOrganizeRoomsGroupingRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.setOrganizeRoomsGrouping(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the ability to store the forcesaved file versions.
         * @summary Change the ability to store the forcesaved files
         * @param {*} [options] Override http request option.
         * REST API Reference for storeForcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-forcesave/
         * @throws {RequiredError}
         */
        storeForcesave(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.storeForcesave(options).then((request) => request(axios, basePath));
        },
        /**
         * Changes the ability to upload documents in the original formats as well.
         * @summary Change the ability to upload original formats
         * @param {SettingsApiStoreOriginalRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for storeOriginal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-original/
         * @throws {RequiredError}
         */
        storeOriginal(requestParameters: SettingsApiStoreOriginalRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.storeOriginal(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a file version if a file with such a name already exists.
         * @summary Update a file version if it exists
         * @param {SettingsApiUpdateFileIfExistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFileIfExist operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-if-exist/
         * @throws {RequiredError}
         */
        updateFileIfExist(requestParameters: SettingsApiUpdateFileIfExistRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updateFileIfExist(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a file to use as the default template setting.
         * @summary Upload a file as the default template setting
         * @param {SettingsApiUploadDefaultTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-default-template/
         * @throws {RequiredError}
         */
        uploadDefaultTemplate(requestParameters: SettingsApiUploadDefaultTemplateRequest, options?: RawAxiosRequestConfig): AxiosPromise<DefaultTemplateSettingsWrapper> {
            return localVarFp.uploadDefaultTemplate(requestParameters.fileExtension, requestParameters.file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for changeAccessToThirdparty operation in SettingsApi.
 * @export
 * @interface SettingsApiChangeAccessToThirdpartyRequest
 */
export interface SettingsApiChangeAccessToThirdpartyRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiChangeAccessToThirdparty
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for changeAutomaticallyCleanUp operation in SettingsApi.
 * @export
 * @interface SettingsApiChangeAutomaticallyCleanUpRequest
 */
export interface SettingsApiChangeAutomaticallyCleanUpRequest {
    /**
     * 
     * @type {AutoCleanupRequestDto}
     * @memberof SettingsApiChangeAutomaticallyCleanUp
     */
    readonly autoCleanupRequestDto?: AutoCleanupRequestDto
}

/**
 * Request parameters for changeDefaultAccessRights operation in SettingsApi.
 * @export
 * @interface SettingsApiChangeDefaultAccessRightsRequest
 */
export interface SettingsApiChangeDefaultAccessRightsRequest {
    /**
     * Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator).
     * @type {Array<number>}
     * @memberof SettingsApiChangeDefaultAccessRights
     */
    readonly requestBody?: Array<number>
}

/**
 * Request parameters for changeDeleteConfirm operation in SettingsApi.
 * @export
 * @interface SettingsApiChangeDeleteConfirmRequest
 */
export interface SettingsApiChangeDeleteConfirmRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiChangeDeleteConfirm
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for changeDownloadZip operation in SettingsApi.
 * @export
 * @interface SettingsApiChangeDownloadZipRequest
 */
export interface SettingsApiChangeDownloadZipRequest {
    /**
     * 
     * @type {DisplayRequestDto}
     * @memberof SettingsApiChangeDownloadZip
     */
    readonly displayRequestDto?: DisplayRequestDto
}

/**
 * Request parameters for changeExternalSharingSettings operation in SettingsApi.
 * @export
 * @interface SettingsApiChangeExternalSharingSettingsRequest
 */
export interface SettingsApiChangeExternalSharingSettingsRequest {
    /**
     * 
     * @type {ExternalSharingSettingsRequestDto}
     * @memberof SettingsApiChangeExternalSharingSettings
     */
    readonly externalSharingSettingsRequestDto?: ExternalSharingSettingsRequestDto
}

/**
 * Request parameters for checkDocServiceUrl operation in SettingsApi.
 * @export
 * @interface SettingsApiCheckDocServiceUrlRequest
 */
export interface SettingsApiCheckDocServiceUrlRequest {
    /**
     * 
     * @type {CheckDocServiceUrlRequestDto}
     * @memberof SettingsApiCheckDocServiceUrl
     */
    readonly checkDocServiceUrlRequestDto?: CheckDocServiceUrlRequestDto
}

/**
 * Request parameters for displayFileExtension operation in SettingsApi.
 * @export
 * @interface SettingsApiDisplayFileExtensionRequest
 */
export interface SettingsApiDisplayFileExtensionRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiDisplayFileExtension
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for displayRecent operation in SettingsApi.
 * @export
 * @interface SettingsApiDisplayRecentRequest
 */
export interface SettingsApiDisplayRecentRequest {
    /**
     * 
     * @type {DisplayRequestDto}
     * @memberof SettingsApiDisplayRecent
     */
    readonly displayRequestDto?: DisplayRequestDto
}

/**
 * Request parameters for externalShare operation in SettingsApi.
 * @export
 * @interface SettingsApiExternalShareRequest
 */
export interface SettingsApiExternalShareRequest {
    /**
     * 
     * @type {DisplayRequestDto}
     * @memberof SettingsApiExternalShare
     */
    readonly displayRequestDto?: DisplayRequestDto
}

/**
 * Request parameters for externalShareSocialMedia operation in SettingsApi.
 * @export
 * @interface SettingsApiExternalShareSocialMediaRequest
 */
export interface SettingsApiExternalShareSocialMediaRequest {
    /**
     * 
     * @type {DisplayRequestDto}
     * @memberof SettingsApiExternalShareSocialMedia
     */
    readonly displayRequestDto?: DisplayRequestDto
}

/**
 * Request parameters for getDocServiceUrl operation in SettingsApi.
 * @export
 * @interface SettingsApiGetDocServiceUrlRequest
 */
export interface SettingsApiGetDocServiceUrlRequest {
    /**
     * Specifies whether to return the editor version or not.
     * @type {boolean}
     * @memberof SettingsApiGetDocServiceUrl
     */
    readonly version?: boolean
}

/**
 * Request parameters for hideConfirmCancelOperation operation in SettingsApi.
 * @export
 * @interface SettingsApiHideConfirmCancelOperationRequest
 */
export interface SettingsApiHideConfirmCancelOperationRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiHideConfirmCancelOperation
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for hideConfirmConvert operation in SettingsApi.
 * @export
 * @interface SettingsApiHideConfirmConvertRequest
 */
export interface SettingsApiHideConfirmConvertRequest {
    /**
     * 
     * @type {HideConfirmConvertRequestDto}
     * @memberof SettingsApiHideConfirmConvert
     */
    readonly hideConfirmConvertRequestDto?: HideConfirmConvertRequestDto
}

/**
 * Request parameters for hideConfirmRoomLifetime operation in SettingsApi.
 * @export
 * @interface SettingsApiHideConfirmRoomLifetimeRequest
 */
export interface SettingsApiHideConfirmRoomLifetimeRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiHideConfirmRoomLifetime
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for keepNewFileName operation in SettingsApi.
 * @export
 * @interface SettingsApiKeepNewFileNameRequest
 */
export interface SettingsApiKeepNewFileNameRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiKeepNewFileName
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for resetDefaultTemplate operation in SettingsApi.
 * @export
 * @interface SettingsApiResetDefaultTemplateRequest
 */
export interface SettingsApiResetDefaultTemplateRequest {
    /**
     * 
     * @type {DefaultTemplateSettingsResetRequestDto}
     * @memberof SettingsApiResetDefaultTemplate
     */
    readonly defaultTemplateSettingsResetRequestDto?: DefaultTemplateSettingsResetRequestDto
}

/**
 * Request parameters for setDefaultTemplate operation in SettingsApi.
 * @export
 * @interface SettingsApiSetDefaultTemplateRequest
 */
export interface SettingsApiSetDefaultTemplateRequest {
    /**
     * 
     * @type {DefaultTemplateSettingsRequestDto}
     * @memberof SettingsApiSetDefaultTemplate
     */
    readonly defaultTemplateSettingsRequestDto?: DefaultTemplateSettingsRequestDto
}

/**
 * Request parameters for setOpenEditorInSameTab operation in SettingsApi.
 * @export
 * @interface SettingsApiSetOpenEditorInSameTabRequest
 */
export interface SettingsApiSetOpenEditorInSameTabRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiSetOpenEditorInSameTab
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for setOrganizeRoomsGrouping operation in SettingsApi.
 * @export
 * @interface SettingsApiSetOrganizeRoomsGroupingRequest
 */
export interface SettingsApiSetOrganizeRoomsGroupingRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiSetOrganizeRoomsGrouping
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for storeOriginal operation in SettingsApi.
 * @export
 * @interface SettingsApiStoreOriginalRequest
 */
export interface SettingsApiStoreOriginalRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiStoreOriginal
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for updateFileIfExist operation in SettingsApi.
 * @export
 * @interface SettingsApiUpdateFileIfExistRequest
 */
export interface SettingsApiUpdateFileIfExistRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof SettingsApiUpdateFileIfExist
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for uploadDefaultTemplate operation in SettingsApi.
 * @export
 * @interface SettingsApiUploadDefaultTemplateRequest
 */
export interface SettingsApiUploadDefaultTemplateRequest {
    /**
     * File extension of a template to replace
     * @type {string}
     * @memberof SettingsApiUploadDefaultTemplate
     */
    readonly fileExtension: string

    /**
     * File to replace template with
     * @type {File}
     * @memberof SettingsApiUploadDefaultTemplate
     */
    readonly file: File
}

/**
 * SettingsApi - object-oriented interface
 * @export
 * @class SettingsApi
 * @extends {BaseAPI}
 */
export class SettingsApi extends BaseAPI {
    /**
     * Changes the access to the third-party settings.
     * @summary Change the third-party settings access
     * @param {FilesSettingsApiChangeAccessToThirdpartyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public changeAccessToThirdparty(requestParameters: SettingsApiChangeAccessToThirdpartyRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).changeAccessToThirdparty(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the trash bin auto-clearing setting.
     * @summary Update the trash bin auto-clearing setting
     * @param {FilesSettingsApiChangeAutomaticallyCleanUpRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public changeAutomaticallyCleanUp(requestParameters: SettingsApiChangeAutomaticallyCleanUpRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).changeAutomaticallyCleanUp(requestParameters.autoCleanupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the default access rights in the sharing settings.
     * @summary Change the default access rights
     * @param {FilesSettingsApiChangeDefaultAccessRightsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public changeDefaultAccessRights(requestParameters: SettingsApiChangeDefaultAccessRightsRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).changeDefaultAccessRights(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Specifies whether to confirm the file deletion or not.
     * @summary Confirm the file deletion
     * @param {FilesSettingsApiChangeDeleteConfirmRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public changeDeleteConfirm(requestParameters: SettingsApiChangeDeleteConfirmRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).changeDeleteConfirm(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the format of the downloaded archive from .zip to .tar.gz. This method uses the body parameters.
     * @summary Change the archive format (using body parameters)
     * @param {FilesSettingsApiChangeDownloadZipRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public changeDownloadZip(requestParameters: SettingsApiChangeDownloadZipRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).changeDownloadZip(requestParameters.displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the Access Control external sharing settings.
     * @summary Change the Access Control external sharing settings
     * @param {FilesSettingsApiChangeExternalSharingSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public changeExternalSharingSettings(requestParameters: SettingsApiChangeExternalSharingSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).changeExternalSharingSettings(requestParameters.externalSharingSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks the document service location URL.
     * @summary Check the document service URL
     * @param {FilesSettingsApiCheckDocServiceUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public checkDocServiceUrl(requestParameters: SettingsApiCheckDocServiceUrlRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).checkDocServiceUrl(requestParameters.checkDocServiceUrlRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Specifies whether to display a file extension or not.
     * @summary Display a file extension
     * @param {FilesSettingsApiDisplayFileExtensionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public displayFileExtension(requestParameters: SettingsApiDisplayFileExtensionRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).displayFileExtension(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Displays the Recent folder.
     * @summary Display the Recent folder
     * @param {FilesSettingsApiDisplayRecentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public displayRecent(requestParameters: SettingsApiDisplayRecentRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).displayRecent(requestParameters.displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the ability to share a file externally.
     * @summary Change the external sharing ability
     * @param {FilesSettingsApiExternalShareRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public externalShare(requestParameters: SettingsApiExternalShareRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).externalShare(requestParameters.displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the ability to share a file externally on social networks.
     * @summary Change the external sharing ability on social networks
     * @param {FilesSettingsApiExternalShareSocialMediaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public externalShareSocialMedia(requestParameters: SettingsApiExternalShareSocialMediaRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).externalShareSocialMedia(requestParameters.displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Specifies if the file forcesaving is enabled or not.
     * @summary Change the forcesaving ability
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public forcesave(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).forcesave(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the trash bin auto-clearing setting.
     * @summary Get the trash bin auto-clearing setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getAutomaticallyCleanUp(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getAutomaticallyCleanUp(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the default template setting.
     * @summary Get the default template setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getDefaultTemplates(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getDefaultTemplates(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the URL address of the connected editors.
     * @summary Get the document service URL
     * @param {FilesSettingsApiGetDocServiceUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getDocServiceUrl(requestParameters: SettingsApiGetDocServiceUrlRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getDocServiceUrl(requestParameters.version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the information about the Documents module.
     * @summary Get the Documents information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getFilesModule(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getFilesModule(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all the file settings.
     * @summary Get file settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getFilesSettings(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).getFilesSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Hides the confirmation dialog when canceling operations.
     * @summary Hide confirmation dialog when canceling operations
     * @param {FilesSettingsApiHideConfirmCancelOperationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public hideConfirmCancelOperation(requestParameters: SettingsApiHideConfirmCancelOperationRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).hideConfirmCancelOperation(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Hides the confirmation dialog for saving the file copy in the original format when converting a file.
     * @summary Hide the confirmation dialog when converting
     * @param {FilesSettingsApiHideConfirmConvertRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public hideConfirmConvert(requestParameters: SettingsApiHideConfirmConvertRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).hideConfirmConvert(requestParameters.hideConfirmConvertRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Hides the confirmation dialog when changing the room lifetime settings.
     * @summary Hide confirmation dialog when changing room lifetime settings
     * @param {FilesSettingsApiHideConfirmRoomLifetimeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public hideConfirmRoomLifetime(requestParameters: SettingsApiHideConfirmRoomLifetimeRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).hideConfirmRoomLifetime(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Specifies whether to ask a user for a file name on creation or not.
     * @summary Ask a new file name
     * @param {FilesSettingsApiKeepNewFileNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public keepNewFileName(requestParameters: SettingsApiKeepNewFileNameRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).keepNewFileName(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the default template setting.
     * @summary Reset the default template setting
     * @param {FilesSettingsApiResetDefaultTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public resetDefaultTemplate(requestParameters: SettingsApiResetDefaultTemplateRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).resetDefaultTemplate(requestParameters.defaultTemplateSettingsResetRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the default template setting.
     * @summary Change the default template setting
     * @param {FilesSettingsApiSetDefaultTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public setDefaultTemplate(requestParameters: SettingsApiSetDefaultTemplateRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).setDefaultTemplate(requestParameters.defaultTemplateSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the ability to open the document in the same browser tab.
     * @summary Open document in the same browser tab
     * @param {FilesSettingsApiSetOpenEditorInSameTabRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public setOpenEditorInSameTab(requestParameters: SettingsApiSetOpenEditorInSameTabRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).setOpenEditorInSameTab(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the setting that allows the user to organize the grouping of rooms.
     * @summary Organize rooms grouping
     * @param {FilesSettingsApiSetOrganizeRoomsGroupingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public setOrganizeRoomsGrouping(requestParameters: SettingsApiSetOrganizeRoomsGroupingRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).setOrganizeRoomsGrouping(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the ability to store the forcesaved file versions.
     * @summary Change the ability to store the forcesaved files
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public storeForcesave(options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).storeForcesave(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes the ability to upload documents in the original formats as well.
     * @summary Change the ability to upload original formats
     * @param {FilesSettingsApiStoreOriginalRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public storeOriginal(requestParameters: SettingsApiStoreOriginalRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).storeOriginal(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a file version if a file with such a name already exists.
     * @summary Update a file version if it exists
     * @param {FilesSettingsApiUpdateFileIfExistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public updateFileIfExist(requestParameters: SettingsApiUpdateFileIfExistRequest = {}, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).updateFileIfExist(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a file to use as the default template setting.
     * @summary Upload a file as the default template setting
     * @param {FilesSettingsApiUploadDefaultTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public uploadDefaultTemplate(requestParameters: SettingsApiUploadDefaultTemplateRequest, options?: RawAxiosRequestConfig) {
        return SettingsApiFp(this.configuration).uploadDefaultTemplate(requestParameters.fileExtension, requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }
}

