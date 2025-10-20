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
import type { BackupDto } from '../../models';
// @ts-ignore
import type { BackupHistoryRecordArrayWrapper } from '../../models';
// @ts-ignore
import type { BackupProgressWrapper } from '../../models';
// @ts-ignore
import type { BackupRestoreDto } from '../../models';
// @ts-ignore
import type { BackupScheduleDto } from '../../models';
// @ts-ignore
import type { BackupServiceStateWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { Int32Wrapper } from '../../models';
// @ts-ignore
import type { ScheduleWrapper } from '../../models';
/**
 * BackupApi - axios parameter creator
 * @export
 */
export const BackupApiAxiosParamCreator = function (configuration?: Configuration) {
    
    return {
        /**
         * Creates the backup schedule of the current portal with the parameters specified in the request.
         * @summary Create the backup schedule
         * @param {BackupScheduleDto} [backupScheduleDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-backup-schedule/
         */
        createBackupSchedule: async (backupScheduleDto?: BackupScheduleDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/createbackupschedule`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(backupScheduleDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the backup with the ID specified in the request.
         * @summary Delete the backup
         * @param {string} id The backup ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup/
         */
        deleteBackup: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteBackup', 'id', id)
            const localVarPath = `/api/2.0/backup/deletebackup/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the backup history from the current portal.
         * @summary Delete the backup history
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteBackupHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-history/
         */
        deleteBackupHistory: async (dump?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/deletebackuphistory`;
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

            if (dump !== undefined) {
                localVarQueryParameter['Dump'] = dump;
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
         * Deletes the backup schedule of the current portal.
         * @summary Delete the backup schedule
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-schedule/
         */
        deleteBackupSchedule: async (dump?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/deletebackupschedule`;
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

            if (dump !== undefined) {
                localVarQueryParameter['Dump'] = dump;
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
         * Returns the history of the started backup.
         * @summary Get the backup history
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-history/
         */
        getBackupHistory: async (dump?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/getbackuphistory`;
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

            if (dump !== undefined) {
                localVarQueryParameter['Dump'] = dump;
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
         * Returns the progress of the started backup.
         * @summary Get the backup progress
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-progress/
         */
        getBackupProgress: async (dump?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/getbackupprogress`;
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

            if (dump !== undefined) {
                localVarQueryParameter['Dump'] = dump;
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
         * Returns the backup schedule of the current portal.
         * @summary Get the backup schedule
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-schedule/
         */
        getBackupSchedule: async (dump?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/getbackupschedule`;
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

            if (dump !== undefined) {
                localVarQueryParameter['Dump'] = dump;
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
         * Returns the number of backups for a period of time. The default is one month.
         * @summary Get the number of backups
         * @param {string} [from] The from date.
         * @param {string} [to] The to date.
         * @param {boolean} [paid] Specifies if the backups are paid or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupsCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-count/
         */
        getBackupsCount: async (from?: string, to?: string, paid?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/getbackupscount`;
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

            if (from !== undefined) {
                localVarQueryParameter['from'] = (from as any instanceof Date) ?
                    (from as any).toISOString() :
                    from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = (to as any instanceof Date) ?
                    (to as any).toISOString() :
                    to;
            }

            if (paid !== undefined) {
                localVarQueryParameter['paid'] = paid;
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
         * Returns the backup service state.
         * @summary Get the backup service state
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupsServiceState operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-service-state/
         */
        getBackupsServiceState: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/getservicestate`;
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
         * Returns the progress of the started restoring process.
         * @summary Get the restoring progress
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRestoreProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restore-progress/
         */
        getRestoreProgress: async (dump?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/getrestoreprogress`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (dump !== undefined) {
                localVarQueryParameter['Dump'] = dump;
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
         * Starts the backup of the current portal with the parameters specified in the request.
         * @summary Start the backup
         * @param {BackupDto} [backupDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup/
         */
        startBackup: async (backupDto?: BackupDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/startbackup`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(backupDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts the data restoring process of the current portal with the parameters specified in the request.
         * @summary Start the restoring process
         * @param {BackupRestoreDto} [backupRestoreDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startBackupRestore operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup-restore/
         */
        startBackupRestore: async (backupRestoreDto?: BackupRestoreDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/backup/startrestore`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(backupRestoreDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BackupApi - functional programming interface
 * @export
 */
export const BackupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BackupApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates the backup schedule of the current portal with the parameters specified in the request.
         * @summary Create the backup schedule
         * @param {BackupScheduleDto} [backupScheduleDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-backup-schedule/
         */
        async createBackupSchedule(backupScheduleDto?: BackupScheduleDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createBackupSchedule(backupScheduleDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.createBackupSchedule']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the backup with the ID specified in the request.
         * @summary Delete the backup
         * @param {string} id The backup ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup/
         */
        async deleteBackup(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBackup(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.deleteBackup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the backup history from the current portal.
         * @summary Delete the backup history
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteBackupHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-history/
         */
        async deleteBackupHistory(dump?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBackupHistory(dump, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.deleteBackupHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the backup schedule of the current portal.
         * @summary Delete the backup schedule
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-schedule/
         */
        async deleteBackupSchedule(dump?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBackupSchedule(dump, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.deleteBackupSchedule']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the history of the started backup.
         * @summary Get the backup history
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-history/
         */
        async getBackupHistory(dump?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackupHistoryRecordArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackupHistory(dump, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.getBackupHistory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the progress of the started backup.
         * @summary Get the backup progress
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-progress/
         */
        async getBackupProgress(dump?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackupProgressWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackupProgress(dump, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.getBackupProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the backup schedule of the current portal.
         * @summary Get the backup schedule
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-schedule/
         */
        async getBackupSchedule(dump?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScheduleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackupSchedule(dump, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.getBackupSchedule']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the number of backups for a period of time. The default is one month.
         * @summary Get the number of backups
         * @param {string} [from] The from date.
         * @param {string} [to] The to date.
         * @param {boolean} [paid] Specifies if the backups are paid or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupsCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-count/
         */
        async getBackupsCount(from?: string, to?: string, paid?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Int32Wrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackupsCount(from, to, paid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.getBackupsCount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the backup service state.
         * @summary Get the backup service state
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupsServiceState operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-service-state/
         */
        async getBackupsServiceState(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackupServiceStateWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackupsServiceState(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.getBackupsServiceState']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the progress of the started restoring process.
         * @summary Get the restoring progress
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRestoreProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restore-progress/
         */
        async getRestoreProgress(dump?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackupProgressWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRestoreProgress(dump, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.getRestoreProgress']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the backup of the current portal with the parameters specified in the request.
         * @summary Start the backup
         * @param {BackupDto} [backupDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup/
         */
        async startBackup(backupDto?: BackupDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackupProgressWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startBackup(backupDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.startBackup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the data restoring process of the current portal with the parameters specified in the request.
         * @summary Start the restoring process
         * @param {BackupRestoreDto} [backupRestoreDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startBackupRestore operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup-restore/
         */
        async startBackupRestore(backupRestoreDto?: BackupRestoreDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackupProgressWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startBackupRestore(backupRestoreDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.startBackupRestore']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BackupApi - factory interface
 * @export
 */
export const BackupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BackupApiFp(configuration)
    return {
        /**
         * Creates the backup schedule of the current portal with the parameters specified in the request.
         * @summary Create the backup schedule
         * @param {BackupScheduleDto} [backupScheduleDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-backup-schedule/
         * @throws {RequiredError}
         */
        createBackupSchedule(backupScheduleDto?: BackupScheduleDto, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.createBackupSchedule(backupScheduleDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the backup with the ID specified in the request.
         * @summary Delete the backup
         * @param {string} id The backup ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup/
         * @throws {RequiredError}
         */
        deleteBackup(id: string, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteBackup(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the backup history from the current portal.
         * @summary Delete the backup history
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteBackupHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-history/
         * @throws {RequiredError}
         */
        deleteBackupHistory(dump?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteBackupHistory(dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the backup schedule of the current portal.
         * @summary Delete the backup schedule
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-schedule/
         * @throws {RequiredError}
         */
        deleteBackupSchedule(dump?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteBackupSchedule(dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the history of the started backup.
         * @summary Get the backup history
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-history/
         * @throws {RequiredError}
         */
        getBackupHistory(dump?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<BackupHistoryRecordArrayWrapper> {
            return localVarFp.getBackupHistory(dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the progress of the started backup.
         * @summary Get the backup progress
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-progress/
         * @throws {RequiredError}
         */
        getBackupProgress(dump?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<BackupProgressWrapper> {
            return localVarFp.getBackupProgress(dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the backup schedule of the current portal.
         * @summary Get the backup schedule
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-schedule/
         * @throws {RequiredError}
         */
        getBackupSchedule(dump?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<ScheduleWrapper> {
            return localVarFp.getBackupSchedule(dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the number of backups for a period of time. The default is one month.
         * @summary Get the number of backups
         * @param {string} [from] The from date.
         * @param {string} [to] The to date.
         * @param {boolean} [paid] Specifies if the backups are paid or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupsCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-count/
         * @throws {RequiredError}
         */
        getBackupsCount(from?: string, to?: string, paid?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<Int32Wrapper> {
            return localVarFp.getBackupsCount(from, to, paid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the backup service state.
         * @summary Get the backup service state
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupsServiceState operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-service-state/
         * @throws {RequiredError}
         */
        getBackupsServiceState(options?: RawAxiosRequestConfig): AxiosPromise<BackupServiceStateWrapper> {
            return localVarFp.getBackupsServiceState(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the progress of the started restoring process.
         * @summary Get the restoring progress
         * @param {boolean} [dump] Specifies if a dump will be created or not.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRestoreProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restore-progress/
         * @throws {RequiredError}
         */
        getRestoreProgress(dump?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<BackupProgressWrapper> {
            return localVarFp.getRestoreProgress(dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the backup of the current portal with the parameters specified in the request.
         * @summary Start the backup
         * @param {BackupDto} [backupDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for startBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup/
         * @throws {RequiredError}
         */
        startBackup(backupDto?: BackupDto, options?: RawAxiosRequestConfig): AxiosPromise<BackupProgressWrapper> {
            return localVarFp.startBackup(backupDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the data restoring process of the current portal with the parameters specified in the request.
         * @summary Start the restoring process
         * @param {BackupRestoreDto} [backupRestoreDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for startBackupRestore operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup-restore/
         * @throws {RequiredError}
         */
        startBackupRestore(backupRestoreDto?: BackupRestoreDto, options?: RawAxiosRequestConfig): AxiosPromise<BackupProgressWrapper> {
            return localVarFp.startBackupRestore(backupRestoreDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BackupApi - object-oriented interface
 * @export
 * @class BackupApi
 * @extends {BaseAPI}
 */
export class BackupApi extends BaseAPI {
    /**
     * Creates the backup schedule of the current portal with the parameters specified in the request.
     * @summary Create the backup schedule
     * @param {BackupScheduleDto} [backupScheduleDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public createBackupSchedule(backupScheduleDto?: BackupScheduleDto, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).createBackupSchedule(backupScheduleDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the backup with the ID specified in the request.
     * @summary Delete the backup
     * @param {string} id The backup ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public deleteBackup(id: string, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).deleteBackup(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the backup history from the current portal.
     * @summary Delete the backup history
     * @param {boolean} [dump] Specifies if a dump will be created or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public deleteBackupHistory(dump?: boolean, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).deleteBackupHistory(dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the backup schedule of the current portal.
     * @summary Delete the backup schedule
     * @param {boolean} [dump] Specifies if a dump will be created or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public deleteBackupSchedule(dump?: boolean, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).deleteBackupSchedule(dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the history of the started backup.
     * @summary Get the backup history
     * @param {boolean} [dump] Specifies if a dump will be created or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupHistory(dump?: boolean, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupHistory(dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the progress of the started backup.
     * @summary Get the backup progress
     * @param {boolean} [dump] Specifies if a dump will be created or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupProgress(dump?: boolean, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupProgress(dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the backup schedule of the current portal.
     * @summary Get the backup schedule
     * @param {boolean} [dump] Specifies if a dump will be created or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupSchedule(dump?: boolean, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupSchedule(dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the number of backups for a period of time. The default is one month.
     * @summary Get the number of backups
     * @param {string} [from] The from date.
     * @param {string} [to] The to date.
     * @param {boolean} [paid] Specifies if the backups are paid or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupsCount(from?: string, to?: string, paid?: boolean, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupsCount(from, to, paid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the backup service state.
     * @summary Get the backup service state
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupsServiceState(options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupsServiceState(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the progress of the started restoring process.
     * @summary Get the restoring progress
     * @param {boolean} [dump] Specifies if a dump will be created or not.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getRestoreProgress(dump?: boolean, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getRestoreProgress(dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the backup of the current portal with the parameters specified in the request.
     * @summary Start the backup
     * @param {BackupDto} [backupDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public startBackup(backupDto?: BackupDto, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).startBackup(backupDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the data restoring process of the current portal with the parameters specified in the request.
     * @summary Start the restoring process
     * @param {BackupRestoreDto} [backupRestoreDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public startBackupRestore(backupRestoreDto?: BackupRestoreDto, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).startBackupRestore(backupRestoreDto, options).then((request) => request(this.axios, this.basePath));
    }
}

