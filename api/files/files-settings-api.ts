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
import type { AutoCleanUpDataWrapper } from '../../models';
// @ts-ignore
import type { AutoCleanupRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CheckDocServiceUrlRequestDto } from '../../models';
// @ts-ignore
import type { DisplayRequestDto } from '../../models';
// @ts-ignore
import type { DocServiceUrlWrapper } from '../../models';
// @ts-ignore
import type { FileShareArrayWrapper } from '../../models';
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
 * FilesSettingsApi - axios parameter creator
 * @export
 */
export const FilesSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * 
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
         * 
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
         * 
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
         * 
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
         * 
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDownloadZipFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip-from-body/
         */
        changeDownloadZipFromBody: async (displayRequestDto?: DisplayRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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
         * 
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
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
         * 
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
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
         * 
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
         * 
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
         * 
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
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for isAvailablePrivacyRoomSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-available-privacy-room-settings/
         */
        isAvailablePrivacyRoomSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/files/@privacy/available`;
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
         * 
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
         * 
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
         * 
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
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
         * 
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
    }
};

/**
 * FilesSettingsApi - functional programming interface
 * @export
 */
export const FilesSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAccessToThirdparty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-access-to-thirdparty/
         */
        async changeAccessToThirdparty(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeAccessToThirdparty(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeAccessToThirdparty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {AutoCleanupRequestDto} [autoCleanupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-automatically-clean-up/
         */
        async changeAutomaticallyCleanUp(autoCleanupRequestDto?: AutoCleanupRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AutoCleanUpDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeAutomaticallyCleanUp(autoCleanupRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeAutomaticallyCleanUp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {Array<number>} [requestBody] Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDefaultAccessRights operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-default-access-rights/
         */
        async changeDefaultAccessRights(requestBody?: Array<number>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDefaultAccessRights(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeDefaultAccessRights']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDeleteConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-delete-confirm/
         */
        async changeDeleteConfirm(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDeleteConfirm(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeDeleteConfirm']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDownloadZipFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip-from-body/
         */
        async changeDownloadZipFromBody(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ICompressWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDownloadZipFromBody(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeDownloadZipFromBody']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {CheckDocServiceUrlRequestDto} [checkDocServiceUrlRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-doc-service-url/
         */
        async checkDocServiceUrl(checkDocServiceUrlRequestDto?: CheckDocServiceUrlRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocServiceUrlWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkDocServiceUrl(checkDocServiceUrlRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.checkDocServiceUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayFileExtension operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-file-extension/
         */
        async displayFileExtension(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.displayFileExtension(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.displayFileExtension']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-recent/
         */
        async displayRecent(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.displayRecent(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.displayRecent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShare operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share/
         */
        async externalShare(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.externalShare(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.externalShare']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShareSocialMedia operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share-social-media/
         */
        async externalShareSocialMedia(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.externalShareSocialMedia(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.externalShareSocialMedia']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for forcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/forcesave/
         */
        async forcesave(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.forcesave(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.forcesave']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-automatically-clean-up/
         */
        async getAutomaticallyCleanUp(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AutoCleanUpDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAutomaticallyCleanUp(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.getAutomaticallyCleanUp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {boolean} [version] Specifies whether to return the editor version or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-doc-service-url/
         */
        async getDocServiceUrl(version?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocServiceUrlWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDocServiceUrl(version, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.getDocServiceUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesModule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-module/
         */
        async getFilesModule(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModuleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilesModule(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.getFilesModule']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-settings/
         */
        async getFilesSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FilesSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilesSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.getFilesSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmCancelOperation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-cancel-operation/
         */
        async hideConfirmCancelOperation(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hideConfirmCancelOperation(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.hideConfirmCancelOperation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {HideConfirmConvertRequestDto} [hideConfirmConvertRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmConvert operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-convert/
         */
        async hideConfirmConvert(hideConfirmConvertRequestDto?: HideConfirmConvertRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModuleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hideConfirmConvert(hideConfirmConvertRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.hideConfirmConvert']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmRoomLifetime operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-room-lifetime/
         */
        async hideConfirmRoomLifetime(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hideConfirmRoomLifetime(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.hideConfirmRoomLifetime']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for isAvailablePrivacyRoomSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-available-privacy-room-settings/
         */
        async isAvailablePrivacyRoomSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.isAvailablePrivacyRoomSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.isAvailablePrivacyRoomSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for keepNewFileName operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/keep-new-file-name/
         */
        async keepNewFileName(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.keepNewFileName(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.keepNewFileName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setOpenEditorInSameTab operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-open-editor-in-same-tab/
         */
        async setOpenEditorInSameTab(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setOpenEditorInSameTab(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.setOpenEditorInSameTab']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeForcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-forcesave/
         */
        async storeForcesave(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeForcesave(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.storeForcesave']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeOriginal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-original/
         */
        async storeOriginal(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeOriginal(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.storeOriginal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileIfExist operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-if-exist/
         */
        async updateFileIfExist(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFileIfExist(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.updateFileIfExist']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FilesSettingsApi - factory interface
 * @export
 */
export const FilesSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesSettingsApiFp(configuration)
    return {
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for changeAccessToThirdparty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-access-to-thirdparty/
         * @throws {RequiredError}
         */
        changeAccessToThirdparty(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.changeAccessToThirdparty(settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AutoCleanupRequestDto} [autoCleanupRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for changeAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-automatically-clean-up/
         * @throws {RequiredError}
         */
        changeAutomaticallyCleanUp(autoCleanupRequestDto?: AutoCleanupRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<AutoCleanUpDataWrapper> {
            return localVarFp.changeAutomaticallyCleanUp(autoCleanupRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {Array<number>} [requestBody] Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator).
         * @param {*} [options] Override http request option.
         * REST API Reference for changeDefaultAccessRights operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-default-access-rights/
         * @throws {RequiredError}
         */
        changeDefaultAccessRights(requestBody?: Array<number>, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.changeDefaultAccessRights(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for changeDeleteConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-delete-confirm/
         * @throws {RequiredError}
         */
        changeDeleteConfirm(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.changeDeleteConfirm(settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for changeDownloadZipFromBody operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip-from-body/
         * @throws {RequiredError}
         */
        changeDownloadZipFromBody(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<ICompressWrapper> {
            return localVarFp.changeDownloadZipFromBody(displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CheckDocServiceUrlRequestDto} [checkDocServiceUrlRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for checkDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-doc-service-url/
         * @throws {RequiredError}
         */
        checkDocServiceUrl(checkDocServiceUrlRequestDto?: CheckDocServiceUrlRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<DocServiceUrlWrapper> {
            return localVarFp.checkDocServiceUrl(checkDocServiceUrlRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for displayFileExtension operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-file-extension/
         * @throws {RequiredError}
         */
        displayFileExtension(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.displayFileExtension(settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for displayRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-recent/
         * @throws {RequiredError}
         */
        displayRecent(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.displayRecent(displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for externalShare operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share/
         * @throws {RequiredError}
         */
        externalShare(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.externalShare(displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for externalShareSocialMedia operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share-social-media/
         * @throws {RequiredError}
         */
        externalShareSocialMedia(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.externalShareSocialMedia(displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for forcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/forcesave/
         * @throws {RequiredError}
         */
        forcesave(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.forcesave(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for getAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-automatically-clean-up/
         * @throws {RequiredError}
         */
        getAutomaticallyCleanUp(options?: RawAxiosRequestConfig): AxiosPromise<AutoCleanUpDataWrapper> {
            return localVarFp.getAutomaticallyCleanUp(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {boolean} [version] Specifies whether to return the editor version or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-doc-service-url/
         * @throws {RequiredError}
         */
        getDocServiceUrl(version?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<DocServiceUrlWrapper> {
            return localVarFp.getDocServiceUrl(version, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilesModule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-module/
         * @throws {RequiredError}
         */
        getFilesModule(options?: RawAxiosRequestConfig): AxiosPromise<ModuleWrapper> {
            return localVarFp.getFilesModule(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilesSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-settings/
         * @throws {RequiredError}
         */
        getFilesSettings(options?: RawAxiosRequestConfig): AxiosPromise<FilesSettingsWrapper> {
            return localVarFp.getFilesSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for hideConfirmCancelOperation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-cancel-operation/
         * @throws {RequiredError}
         */
        hideConfirmCancelOperation(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.hideConfirmCancelOperation(settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {HideConfirmConvertRequestDto} [hideConfirmConvertRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for hideConfirmConvert operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-convert/
         * @throws {RequiredError}
         */
        hideConfirmConvert(hideConfirmConvertRequestDto?: HideConfirmConvertRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<ModuleWrapper> {
            return localVarFp.hideConfirmConvert(hideConfirmConvertRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for hideConfirmRoomLifetime operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-room-lifetime/
         * @throws {RequiredError}
         */
        hideConfirmRoomLifetime(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.hideConfirmRoomLifetime(settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for isAvailablePrivacyRoomSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/is-available-privacy-room-settings/
         * @throws {RequiredError}
         */
        isAvailablePrivacyRoomSettings(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.isAvailablePrivacyRoomSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for keepNewFileName operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/keep-new-file-name/
         * @throws {RequiredError}
         */
        keepNewFileName(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.keepNewFileName(settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setOpenEditorInSameTab operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-open-editor-in-same-tab/
         * @throws {RequiredError}
         */
        setOpenEditorInSameTab(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.setOpenEditorInSameTab(settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * REST API Reference for storeForcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-forcesave/
         * @throws {RequiredError}
         */
        storeForcesave(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.storeForcesave(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for storeOriginal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-original/
         * @throws {RequiredError}
         */
        storeOriginal(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.storeOriginal(settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFileIfExist operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-if-exist/
         * @throws {RequiredError}
         */
        updateFileIfExist(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updateFileIfExist(settingsRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FilesSettingsApi - object-oriented interface
 * @export
 * @class FilesSettingsApi
 * @extends {BaseAPI}
 */
export class FilesSettingsApi extends BaseAPI {
    /**
     * 
     * @param {SettingsRequestDto} [settingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeAccessToThirdparty(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeAccessToThirdparty(settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AutoCleanupRequestDto} [autoCleanupRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeAutomaticallyCleanUp(autoCleanupRequestDto?: AutoCleanupRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeAutomaticallyCleanUp(autoCleanupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {Array<number>} [requestBody] Sharing rights (None, ReadWrite, Read, Restrict, Varies, Review, Comment, FillForms, CustomFilter, RoomAdmin, Editing, Collaborator).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeDefaultAccessRights(requestBody?: Array<number>, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeDefaultAccessRights(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SettingsRequestDto} [settingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeDeleteConfirm(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeDeleteConfirm(settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {DisplayRequestDto} [displayRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeDownloadZipFromBody(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeDownloadZipFromBody(displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CheckDocServiceUrlRequestDto} [checkDocServiceUrlRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public checkDocServiceUrl(checkDocServiceUrlRequestDto?: CheckDocServiceUrlRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).checkDocServiceUrl(checkDocServiceUrlRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SettingsRequestDto} [settingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public displayFileExtension(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).displayFileExtension(settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {DisplayRequestDto} [displayRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public displayRecent(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).displayRecent(displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {DisplayRequestDto} [displayRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public externalShare(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).externalShare(displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {DisplayRequestDto} [displayRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public externalShareSocialMedia(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).externalShareSocialMedia(displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public forcesave(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).forcesave(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public getAutomaticallyCleanUp(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).getAutomaticallyCleanUp(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {boolean} [version] Specifies whether to return the editor version or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public getDocServiceUrl(version?: boolean, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).getDocServiceUrl(version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public getFilesModule(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).getFilesModule(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public getFilesSettings(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).getFilesSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SettingsRequestDto} [settingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public hideConfirmCancelOperation(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).hideConfirmCancelOperation(settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {HideConfirmConvertRequestDto} [hideConfirmConvertRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public hideConfirmConvert(hideConfirmConvertRequestDto?: HideConfirmConvertRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).hideConfirmConvert(hideConfirmConvertRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SettingsRequestDto} [settingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public hideConfirmRoomLifetime(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).hideConfirmRoomLifetime(settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public isAvailablePrivacyRoomSettings(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).isAvailablePrivacyRoomSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SettingsRequestDto} [settingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public keepNewFileName(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).keepNewFileName(settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SettingsRequestDto} [settingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public setOpenEditorInSameTab(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).setOpenEditorInSameTab(settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public storeForcesave(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).storeForcesave(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SettingsRequestDto} [settingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public storeOriginal(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).storeOriginal(settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SettingsRequestDto} [settingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public updateFileIfExist(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).updateFileIfExist(settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

