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
import type { BackupsCountResultWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
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
         * Drops the backup job of the current portal from the queue, which cancels it if it is still running.  The caller needs the portal settings permission. It answers false, not an error, when there is nothing  to cancel, so the result says whether a job was actually dropped rather than whether the call  succeeded.  This affects backup jobs only: a restoring job cannot be cancelled through the API. The cancelled job  leaves the queue, so a following `GET api/2.0/backup/getbackupprogress` reports no job at all rather  than a job with the `Canceled` status.
         * @summary Cancel the running backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for cancelBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/cancel-backup/
         */
        cancelBackup: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/backup/cancelbackup`;
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
         * Sets the backup schedule of the current portal. A portal keeps at most one schedule, so this replaces  the existing one rather than adding a second, and `dump` writes the schedule of the whole server  instead, which requires the space access permission and works on a standalone installation only.  Scheduled backups have to be allowed by the pricing plan of a portal that is not a standalone  installation.  `cronParams` is a period plus a time rather than a cron string: `hour` is the hour of the day from 0  to 23, and `day` has to be given for `EveryWeek`, where it is the day of the week from 1 to 7 with  Sunday as 1, and for `EveryMonth`, where it is the day of the month from 1 to 31. It is left out for  `EveryDay`, and because an omitted `day` is stored as 0, which neither period accepts, a weekly or  monthly schedule sent without it fails instead of falling back to a default.  `backupsStored` is the number of scheduled copies to keep, from 1 to 30, and it defaults to 1. Older  copies are removed by a background cleaner, and only the ones this schedule created: archives made by  `POST api/2.0/backup/startbackup` are not counted and not removed. A portal whose subscription stops  covering backups has its schedule deleted by the scheduler, not suspended, and its administrators are  notified that the scheduled backup failed.  The keys expected in `storageParams` are the same as for `POST api/2.0/backup/startbackup`, except  that they are sent as an array of key and value pairs here and returned as an object by  `GET api/2.0/backup/getbackupschedule`.
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
         * Deletes one backup: first its history record, then the archive in the storage the record points at.  The ID is the one listed by `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the  backup was started with.  Deleting a backup of the whole server rather than of one portal additionally requires the space  access permission. A record that belongs to another portal is left untouched and the call still  answers true, so the result confirms that the request was accepted rather than that anything was  deleted - check with `GET api/2.0/backup/getbackuphistory` if it matters.  The record is removed before the archive, so when the storage can no longer be reached the archive  stays behind with nothing pointing at it.
         * @summary Delete the backup
         * @param {string} id The ID of the backup to delete, taken from the route. It is the `id` of a record listed by  `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the backup was started with.
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
         * Deletes every backup of the current portal, both the history records and the archives themselves, and  leaves the backup schedule alone. `dump` clears the backups of the whole server instead and requires  the space access permission.  The records are walked one by one and a failure on any of them is swallowed, so the result is always  true even when some archives could not be deleted: it does not mean the history is now empty. Call  `GET api/2.0/backup/getbackuphistory` afterwards to see what is left.  Each record is removed before its archive, so an archive whose deletion fails stays in the storage  with nothing pointing at it.
         * @summary Delete the backup history
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Deletes the backup schedule of the current portal, which stops the scheduled backups; `dump` deletes  the schedule of the whole server instead and requires the space access permission. The archives the  schedule has already produced are kept and stay listed by  `GET api/2.0/backup/getbackuphistory` - delete them through  `DELETE api/2.0/backup/deletebackup/{id}` if they are no longer wanted.  The result is always true, including when there was no schedule to delete, so it confirms that the  portal now has none rather than that anything was removed. The deletion is written to the audit trail  either way.
         * @summary Delete the backup schedule
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Lists the backups of the current portal whose archive is still present in the storage it was written  to. The records come back in no particular order, so sort them by `createdOn` if the newest one is  wanted. `dump` lists the backups of the whole server instead and requires the space access  permission.  Despite being a read operation, this prunes the history as it goes: a record whose archive is no  longer in its storage is deleted outright, so the list can shrink between two calls without anybody  deleting anything. A record whose storage can no longer be reached at all - a disconnected  third-party account, for instance - is neither returned nor deleted, so it stays invisible while  still occupying the history.  The `id` of a record is the same value as the `taskId` that  `POST api/2.0/backup/startbackup` returned for it, and it is what  `DELETE api/2.0/backup/deletebackup/{id}` and the `backupId` of  `POST api/2.0/backup/startrestore` expect.
         * @summary Get the backup history
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Reports the state of the backup job of the current portal, and is the operation to poll after  `POST api/2.0/backup/startbackup`. The queue holds one job per portal, so no job ID is passed in;  `dump` asks for the state of the server-wide job instead and requires the space access permission.  When there is no such job - none was ever started, or the finished one has already been dropped from  the queue - the call still answers 200, but the body carries no `response` member at all, so a client  has to treat the payload as optional rather than expect an empty object.  While the job runs, `isCompleted` is false, `error` and `link` are empty strings and `progress` grows  from 0 to 100. Once it stops, `isCompleted` turns true and `status` says how it ended: a non-empty  `error` is the only report of a failure, `warning` is set when the archive was written but some files  could not be read or when the job was cancelled, and `link` becomes the download link to the stored  archive.
         * @summary Get the backup progress
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Returns the backup schedule of the current portal. A portal keeps at most one schedule, so no ID is  passed in, and when none is set the call still answers 200 with a body that carries no `response`  member at all. `dump` asks for the schedule of the whole server instead of the one of this portal and  requires the space access permission.  The answer cannot be sent back unchanged: `storageParams` is returned as an object keyed by parameter  name, while `POST api/2.0/backup/createbackupschedule` expects an array of key and value pairs. For  every storage type except `ThirdPartyConsumer` the `folderId` key of the answer is built from the  stored base path rather than read back from the saved parameters, and a schedule that keeps an  unlimited number of copies reports `backupsStored` as null instead of 0.
         * @summary Get the backup schedule
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Counts the backups of the current portal that were created within a period, and `paid` chooses which  kind is counted: false, the default, counts the ones covered by the free monthly allowance, and true  counts the ones charged to the portal wallet.  The period defaults to the current calendar month - `from` becomes the first day of the month at  00:00 UTC and `to` becomes the moment of the call. Both bounds are UTC and inclusive, and a `from`  later than `to` is rejected. Called with no parameters at all, this returns exactly the figure the  free monthly allowance is measured against.  The count is over history records rather than over stored archives, so it includes backups that have  already been deleted; use `GET api/2.0/backup/getbackuphistory` to see what can still be restored.
         * @summary Get the number of backups
         * @param {string} [from] The start of the period, in UTC and inclusive. It defaults to the first day of the current calendar  month at 00:00 UTC, and it has to be no later than `to`.
         * @param {string} [to] The end of the period, in UTC and inclusive. It defaults to the moment of the call.
         * @param {boolean} [paid] Counts the backups charged to the portal wallet when true, and the ones covered by the free monthly  allowance when false, which is the default. It is read only by  `GET api/2.0/backup/getbackupscount` and is ignored by  `GET api/2.0/backup/getbackupscountbypaid`, which always reports both.
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
         * Counts the backups of the current portal created within a period and splits the result into the ones  covered by the free monthly allowance and the ones charged to the portal wallet, which saves calling  `GET api/2.0/backup/getbackupscount` twice.  The `paid` query parameter is accepted but not read here: the answer always carries both figures. The  period behaves as it does for `GET api/2.0/backup/getbackupscount` - it defaults to the current  calendar month, both bounds are UTC and inclusive, and a `from` later than `to` is rejected.  The counts are over history records rather than over stored archives, so they include backups that  have already been deleted.
         * @summary Get free and paid backup counts
         * @param {string} [from] The start of the period, in UTC and inclusive. It defaults to the first day of the current calendar  month at 00:00 UTC, and it has to be no later than `to`.
         * @param {string} [to] The end of the period, in UTC and inclusive. It defaults to the moment of the call.
         * @param {boolean} [paid] Counts the backups charged to the portal wallet when true, and the ones covered by the free monthly  allowance when false, which is the default. It is read only by  `GET api/2.0/backup/getbackupscount` and is ignored by  `GET api/2.0/backup/getbackupscountbypaid`, which always reports both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupsCounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-counts/
         */
        getBackupsCounts: async (from?: string, to?: string, paid?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/backup/getbackupscountbypaid`;
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
         * Reports whether the paid backup service is switched on for the current portal. This is a wallet  setting of the portal, not the health of the backup service or of the worker that runs the jobs, so a  false answer does not mean backups are unavailable and a true one does not mean they are working.  While it is on, backups beyond the free monthly allowance are charged to the portal wallet. While it  is off and that allowance is used up, `POST api/2.0/backup/startbackup` and  `POST api/2.0/backup/createbackupschedule` answer 402.  Starting a backup once the allowance is used up switches the service on by itself, as soon as a  billing session opens for the portal, so this flag can change without anybody editing the portal  settings.
         * @summary Check whether backups are enabled
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
         * Reports the state of the restoring job, and is the operation to poll after  `POST api/2.0/backup/startrestore`. It is the only operation of this service that needs no  authorization and the only one that stays reachable while the portal is being restored, which is  exactly the state a client polls it in - every other operation of the service answers 403 then.  `dump` is read as three states rather than as a flag: omit it to get whichever restoring job concerns  this portal, including a server-wide one, pass false to get the job of this portal only, and pass true  to get the server-wide job; on a portal that is not a standalone installation the value is forced to  false. When there is no matching job the call still answers 200, but the body carries no `response`  member at all.  `isCompleted` is the field to poll, a non-empty `error` is the only report of a failure, and neither  `link` nor `warning` is ever filled in for a restoring job.
         * @summary Get the restoring progress
         * @param {boolean} [dump] Which restoring job to look for, read as three states rather than as a flag: leave it out for  whichever job concerns this portal, including a server-wide one, send false for the job of this  portal alone, and send true for the server-wide job. On a portal that is not a standalone  installation the value is forced to false.
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
         * Queues a backup of the current portal and returns straight away: the archive itself is written by the  separate backup worker service, which picks the job up from an integration event, so the response  reports a progress of 0 and the `Created` status, and its `taskId` is the handle to poll with  `GET api/2.0/backup/getbackupprogress`. The caller needs the portal settings permission, and  `dump` - a backup of the whole server instead of this one portal - additionally requires the space  access permission and is rejected outside a standalone installation.  The keys expected in `storageParams` depend on `storageType`: `Documents` takes an integer `folderId`,  `ThridpartyDocuments` takes a provider-specific non-integer `folderId`, `Local` takes `filePath` and  works on a standalone installation only, `ThirdPartyConsumer` takes `module` together with the settings  of that consumer, and `DataStore` takes no keys at all; the `subdir` key is added by the operation  itself and must not be sent.  A portal that has already used up the free backups of the current calendar month is charged through the  paid backup service instead, and the call is rejected with 402 when that service is not available to it.
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
         * Queues the restoring of the current portal from a backup and returns straight away: the work itself is  done by the separate backup worker service, which picks the job up from an integration event, so the  response reports a progress of 0 and the `Created` status, and the returned `taskId` is the handle to  poll with `GET api/2.0/backup/getrestoreprogress` - the one operation of this service that stays  reachable while the portal is being restored, because every other one answers 403 in that state.  The source is given either by `backupId`, which is the ID of a record from  `GET api/2.0/backup/getbackuphistory`, or, when `backupId` is not a GUID, by the `filePath` key of  `storageParams` together with the matching `storageType`; an all-zero GUID is parsed as a GUID and  therefore reaches neither branch.  The caller needs the portal settings permission, restoring has to be allowed by the pricing plan of a  portal that is not a standalone installation, and `dump` - restoring the whole server rather than this  one portal - additionally requires the space access permission.
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
         * Drops the backup job of the current portal from the queue, which cancels it if it is still running.  The caller needs the portal settings permission. It answers false, not an error, when there is nothing  to cancel, so the result says whether a job was actually dropped rather than whether the call  succeeded.  This affects backup jobs only: a restoring job cannot be cancelled through the API. The cancelled job  leaves the queue, so a following `GET api/2.0/backup/getbackupprogress` reports no job at all rather  than a job with the `Canceled` status.
         * @summary Cancel the running backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for cancelBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/cancel-backup/
         */
        async cancelBackup(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelBackup(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.cancelBackup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the backup schedule of the current portal. A portal keeps at most one schedule, so this replaces  the existing one rather than adding a second, and `dump` writes the schedule of the whole server  instead, which requires the space access permission and works on a standalone installation only.  Scheduled backups have to be allowed by the pricing plan of a portal that is not a standalone  installation.  `cronParams` is a period plus a time rather than a cron string: `hour` is the hour of the day from 0  to 23, and `day` has to be given for `EveryWeek`, where it is the day of the week from 1 to 7 with  Sunday as 1, and for `EveryMonth`, where it is the day of the month from 1 to 31. It is left out for  `EveryDay`, and because an omitted `day` is stored as 0, which neither period accepts, a weekly or  monthly schedule sent without it fails instead of falling back to a default.  `backupsStored` is the number of scheduled copies to keep, from 1 to 30, and it defaults to 1. Older  copies are removed by a background cleaner, and only the ones this schedule created: archives made by  `POST api/2.0/backup/startbackup` are not counted and not removed. A portal whose subscription stops  covering backups has its schedule deleted by the scheduler, not suspended, and its administrators are  notified that the scheduled backup failed.  The keys expected in `storageParams` are the same as for `POST api/2.0/backup/startbackup`, except  that they are sent as an array of key and value pairs here and returned as an object by  `GET api/2.0/backup/getbackupschedule`.
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
         * Deletes one backup: first its history record, then the archive in the storage the record points at.  The ID is the one listed by `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the  backup was started with.  Deleting a backup of the whole server rather than of one portal additionally requires the space  access permission. A record that belongs to another portal is left untouched and the call still  answers true, so the result confirms that the request was accepted rather than that anything was  deleted - check with `GET api/2.0/backup/getbackuphistory` if it matters.  The record is removed before the archive, so when the storage can no longer be reached the archive  stays behind with nothing pointing at it.
         * @summary Delete the backup
         * @param {string} id The ID of the backup to delete, taken from the route. It is the `id` of a record listed by  `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the backup was started with.
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
         * Deletes every backup of the current portal, both the history records and the archives themselves, and  leaves the backup schedule alone. `dump` clears the backups of the whole server instead and requires  the space access permission.  The records are walked one by one and a failure on any of them is swallowed, so the result is always  true even when some archives could not be deleted: it does not mean the history is now empty. Call  `GET api/2.0/backup/getbackuphistory` afterwards to see what is left.  Each record is removed before its archive, so an archive whose deletion fails stays in the storage  with nothing pointing at it.
         * @summary Delete the backup history
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Deletes the backup schedule of the current portal, which stops the scheduled backups; `dump` deletes  the schedule of the whole server instead and requires the space access permission. The archives the  schedule has already produced are kept and stay listed by  `GET api/2.0/backup/getbackuphistory` - delete them through  `DELETE api/2.0/backup/deletebackup/{id}` if they are no longer wanted.  The result is always true, including when there was no schedule to delete, so it confirms that the  portal now has none rather than that anything was removed. The deletion is written to the audit trail  either way.
         * @summary Delete the backup schedule
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Lists the backups of the current portal whose archive is still present in the storage it was written  to. The records come back in no particular order, so sort them by `createdOn` if the newest one is  wanted. `dump` lists the backups of the whole server instead and requires the space access  permission.  Despite being a read operation, this prunes the history as it goes: a record whose archive is no  longer in its storage is deleted outright, so the list can shrink between two calls without anybody  deleting anything. A record whose storage can no longer be reached at all - a disconnected  third-party account, for instance - is neither returned nor deleted, so it stays invisible while  still occupying the history.  The `id` of a record is the same value as the `taskId` that  `POST api/2.0/backup/startbackup` returned for it, and it is what  `DELETE api/2.0/backup/deletebackup/{id}` and the `backupId` of  `POST api/2.0/backup/startrestore` expect.
         * @summary Get the backup history
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Reports the state of the backup job of the current portal, and is the operation to poll after  `POST api/2.0/backup/startbackup`. The queue holds one job per portal, so no job ID is passed in;  `dump` asks for the state of the server-wide job instead and requires the space access permission.  When there is no such job - none was ever started, or the finished one has already been dropped from  the queue - the call still answers 200, but the body carries no `response` member at all, so a client  has to treat the payload as optional rather than expect an empty object.  While the job runs, `isCompleted` is false, `error` and `link` are empty strings and `progress` grows  from 0 to 100. Once it stops, `isCompleted` turns true and `status` says how it ended: a non-empty  `error` is the only report of a failure, `warning` is set when the archive was written but some files  could not be read or when the job was cancelled, and `link` becomes the download link to the stored  archive.
         * @summary Get the backup progress
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Returns the backup schedule of the current portal. A portal keeps at most one schedule, so no ID is  passed in, and when none is set the call still answers 200 with a body that carries no `response`  member at all. `dump` asks for the schedule of the whole server instead of the one of this portal and  requires the space access permission.  The answer cannot be sent back unchanged: `storageParams` is returned as an object keyed by parameter  name, while `POST api/2.0/backup/createbackupschedule` expects an array of key and value pairs. For  every storage type except `ThirdPartyConsumer` the `folderId` key of the answer is built from the  stored base path rather than read back from the saved parameters, and a schedule that keeps an  unlimited number of copies reports `backupsStored` as null instead of 0.
         * @summary Get the backup schedule
         * @param {boolean} [dump] Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
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
         * Counts the backups of the current portal that were created within a period, and `paid` chooses which  kind is counted: false, the default, counts the ones covered by the free monthly allowance, and true  counts the ones charged to the portal wallet.  The period defaults to the current calendar month - `from` becomes the first day of the month at  00:00 UTC and `to` becomes the moment of the call. Both bounds are UTC and inclusive, and a `from`  later than `to` is rejected. Called with no parameters at all, this returns exactly the figure the  free monthly allowance is measured against.  The count is over history records rather than over stored archives, so it includes backups that have  already been deleted; use `GET api/2.0/backup/getbackuphistory` to see what can still be restored.
         * @summary Get the number of backups
         * @param {string} [from] The start of the period, in UTC and inclusive. It defaults to the first day of the current calendar  month at 00:00 UTC, and it has to be no later than `to`.
         * @param {string} [to] The end of the period, in UTC and inclusive. It defaults to the moment of the call.
         * @param {boolean} [paid] Counts the backups charged to the portal wallet when true, and the ones covered by the free monthly  allowance when false, which is the default. It is read only by  `GET api/2.0/backup/getbackupscount` and is ignored by  `GET api/2.0/backup/getbackupscountbypaid`, which always reports both.
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
         * Counts the backups of the current portal created within a period and splits the result into the ones  covered by the free monthly allowance and the ones charged to the portal wallet, which saves calling  `GET api/2.0/backup/getbackupscount` twice.  The `paid` query parameter is accepted but not read here: the answer always carries both figures. The  period behaves as it does for `GET api/2.0/backup/getbackupscount` - it defaults to the current  calendar month, both bounds are UTC and inclusive, and a `from` later than `to` is rejected.  The counts are over history records rather than over stored archives, so they include backups that  have already been deleted.
         * @summary Get free and paid backup counts
         * @param {string} [from] The start of the period, in UTC and inclusive. It defaults to the first day of the current calendar  month at 00:00 UTC, and it has to be no later than `to`.
         * @param {string} [to] The end of the period, in UTC and inclusive. It defaults to the moment of the call.
         * @param {boolean} [paid] Counts the backups charged to the portal wallet when true, and the ones covered by the free monthly  allowance when false, which is the default. It is read only by  `GET api/2.0/backup/getbackupscount` and is ignored by  `GET api/2.0/backup/getbackupscountbypaid`, which always reports both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getBackupsCounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-counts/
         */
        async getBackupsCounts(from?: string, to?: string, paid?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackupsCountResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackupsCounts(from, to, paid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BackupApi.getBackupsCounts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether the paid backup service is switched on for the current portal. This is a wallet  setting of the portal, not the health of the backup service or of the worker that runs the jobs, so a  false answer does not mean backups are unavailable and a true one does not mean they are working.  While it is on, backups beyond the free monthly allowance are charged to the portal wallet. While it  is off and that allowance is used up, `POST api/2.0/backup/startbackup` and  `POST api/2.0/backup/createbackupschedule` answer 402.  Starting a backup once the allowance is used up switches the service on by itself, as soon as a  billing session opens for the portal, so this flag can change without anybody editing the portal  settings.
         * @summary Check whether backups are enabled
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
         * Reports the state of the restoring job, and is the operation to poll after  `POST api/2.0/backup/startrestore`. It is the only operation of this service that needs no  authorization and the only one that stays reachable while the portal is being restored, which is  exactly the state a client polls it in - every other operation of the service answers 403 then.  `dump` is read as three states rather than as a flag: omit it to get whichever restoring job concerns  this portal, including a server-wide one, pass false to get the job of this portal only, and pass true  to get the server-wide job; on a portal that is not a standalone installation the value is forced to  false. When there is no matching job the call still answers 200, but the body carries no `response`  member at all.  `isCompleted` is the field to poll, a non-empty `error` is the only report of a failure, and neither  `link` nor `warning` is ever filled in for a restoring job.
         * @summary Get the restoring progress
         * @param {boolean} [dump] Which restoring job to look for, read as three states rather than as a flag: leave it out for  whichever job concerns this portal, including a server-wide one, send false for the job of this  portal alone, and send true for the server-wide job. On a portal that is not a standalone  installation the value is forced to false.
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
         * Queues a backup of the current portal and returns straight away: the archive itself is written by the  separate backup worker service, which picks the job up from an integration event, so the response  reports a progress of 0 and the `Created` status, and its `taskId` is the handle to poll with  `GET api/2.0/backup/getbackupprogress`. The caller needs the portal settings permission, and  `dump` - a backup of the whole server instead of this one portal - additionally requires the space  access permission and is rejected outside a standalone installation.  The keys expected in `storageParams` depend on `storageType`: `Documents` takes an integer `folderId`,  `ThridpartyDocuments` takes a provider-specific non-integer `folderId`, `Local` takes `filePath` and  works on a standalone installation only, `ThirdPartyConsumer` takes `module` together with the settings  of that consumer, and `DataStore` takes no keys at all; the `subdir` key is added by the operation  itself and must not be sent.  A portal that has already used up the free backups of the current calendar month is charged through the  paid backup service instead, and the call is rejected with 402 when that service is not available to it.
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
         * Queues the restoring of the current portal from a backup and returns straight away: the work itself is  done by the separate backup worker service, which picks the job up from an integration event, so the  response reports a progress of 0 and the `Created` status, and the returned `taskId` is the handle to  poll with `GET api/2.0/backup/getrestoreprogress` - the one operation of this service that stays  reachable while the portal is being restored, because every other one answers 403 in that state.  The source is given either by `backupId`, which is the ID of a record from  `GET api/2.0/backup/getbackuphistory`, or, when `backupId` is not a GUID, by the `filePath` key of  `storageParams` together with the matching `storageType`; an all-zero GUID is parsed as a GUID and  therefore reaches neither branch.  The caller needs the portal settings permission, restoring has to be allowed by the pricing plan of a  portal that is not a standalone installation, and `dump` - restoring the whole server rather than this  one portal - additionally requires the space access permission.
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
         * Drops the backup job of the current portal from the queue, which cancels it if it is still running.  The caller needs the portal settings permission. It answers false, not an error, when there is nothing  to cancel, so the result says whether a job was actually dropped rather than whether the call  succeeded.  This affects backup jobs only: a restoring job cannot be cancelled through the API. The cancelled job  leaves the queue, so a following `GET api/2.0/backup/getbackupprogress` reports no job at all rather  than a job with the `Canceled` status.
         * @summary Cancel the running backup
         * @param {*} [options] Override http request option.
         * REST API Reference for cancelBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/cancel-backup/
         * @throws {RequiredError}
         */
        cancelBackup(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.cancelBackup(options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the backup schedule of the current portal. A portal keeps at most one schedule, so this replaces  the existing one rather than adding a second, and `dump` writes the schedule of the whole server  instead, which requires the space access permission and works on a standalone installation only.  Scheduled backups have to be allowed by the pricing plan of a portal that is not a standalone  installation.  `cronParams` is a period plus a time rather than a cron string: `hour` is the hour of the day from 0  to 23, and `day` has to be given for `EveryWeek`, where it is the day of the week from 1 to 7 with  Sunday as 1, and for `EveryMonth`, where it is the day of the month from 1 to 31. It is left out for  `EveryDay`, and because an omitted `day` is stored as 0, which neither period accepts, a weekly or  monthly schedule sent without it fails instead of falling back to a default.  `backupsStored` is the number of scheduled copies to keep, from 1 to 30, and it defaults to 1. Older  copies are removed by a background cleaner, and only the ones this schedule created: archives made by  `POST api/2.0/backup/startbackup` are not counted and not removed. A portal whose subscription stops  covering backups has its schedule deleted by the scheduler, not suspended, and its administrators are  notified that the scheduled backup failed.  The keys expected in `storageParams` are the same as for `POST api/2.0/backup/startbackup`, except  that they are sent as an array of key and value pairs here and returned as an object by  `GET api/2.0/backup/getbackupschedule`.
         * @summary Create the backup schedule
         * @param {BackupApiCreateBackupScheduleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-backup-schedule/
         * @throws {RequiredError}
         */
        createBackupSchedule(requestParameters: BackupApiCreateBackupScheduleRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.createBackupSchedule(requestParameters.backupScheduleDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes one backup: first its history record, then the archive in the storage the record points at.  The ID is the one listed by `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the  backup was started with.  Deleting a backup of the whole server rather than of one portal additionally requires the space  access permission. A record that belongs to another portal is left untouched and the call still  answers true, so the result confirms that the request was accepted rather than that anything was  deleted - check with `GET api/2.0/backup/getbackuphistory` if it matters.  The record is removed before the archive, so when the storage can no longer be reached the archive  stays behind with nothing pointing at it.
         * @summary Delete the backup
         * @param {BackupApiDeleteBackupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup/
         * @throws {RequiredError}
         */
        deleteBackup(requestParameters: BackupApiDeleteBackupRequest, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteBackup(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes every backup of the current portal, both the history records and the archives themselves, and  leaves the backup schedule alone. `dump` clears the backups of the whole server instead and requires  the space access permission.  The records are walked one by one and a failure on any of them is swallowed, so the result is always  true even when some archives could not be deleted: it does not mean the history is now empty. Call  `GET api/2.0/backup/getbackuphistory` afterwards to see what is left.  Each record is removed before its archive, so an archive whose deletion fails stays in the storage  with nothing pointing at it.
         * @summary Delete the backup history
         * @param {BackupApiDeleteBackupHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteBackupHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-history/
         * @throws {RequiredError}
         */
        deleteBackupHistory(requestParameters: BackupApiDeleteBackupHistoryRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteBackupHistory(requestParameters.dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the backup schedule of the current portal, which stops the scheduled backups; `dump` deletes  the schedule of the whole server instead and requires the space access permission. The archives the  schedule has already produced are kept and stay listed by  `GET api/2.0/backup/getbackuphistory` - delete them through  `DELETE api/2.0/backup/deletebackup/{id}` if they are no longer wanted.  The result is always true, including when there was no schedule to delete, so it confirms that the  portal now has none rather than that anything was removed. The deletion is written to the audit trail  either way.
         * @summary Delete the backup schedule
         * @param {BackupApiDeleteBackupScheduleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-backup-schedule/
         * @throws {RequiredError}
         */
        deleteBackupSchedule(requestParameters: BackupApiDeleteBackupScheduleRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.deleteBackupSchedule(requestParameters.dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the backups of the current portal whose archive is still present in the storage it was written  to. The records come back in no particular order, so sort them by `createdOn` if the newest one is  wanted. `dump` lists the backups of the whole server instead and requires the space access  permission.  Despite being a read operation, this prunes the history as it goes: a record whose archive is no  longer in its storage is deleted outright, so the list can shrink between two calls without anybody  deleting anything. A record whose storage can no longer be reached at all - a disconnected  third-party account, for instance - is neither returned nor deleted, so it stays invisible while  still occupying the history.  The `id` of a record is the same value as the `taskId` that  `POST api/2.0/backup/startbackup` returned for it, and it is what  `DELETE api/2.0/backup/deletebackup/{id}` and the `backupId` of  `POST api/2.0/backup/startrestore` expect.
         * @summary Get the backup history
         * @param {BackupApiGetBackupHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupHistory operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-history/
         * @throws {RequiredError}
         */
        getBackupHistory(requestParameters: BackupApiGetBackupHistoryRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BackupHistoryRecordArrayWrapper> {
            return localVarFp.getBackupHistory(requestParameters.dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports the state of the backup job of the current portal, and is the operation to poll after  `POST api/2.0/backup/startbackup`. The queue holds one job per portal, so no job ID is passed in;  `dump` asks for the state of the server-wide job instead and requires the space access permission.  When there is no such job - none was ever started, or the finished one has already been dropped from  the queue - the call still answers 200, but the body carries no `response` member at all, so a client  has to treat the payload as optional rather than expect an empty object.  While the job runs, `isCompleted` is false, `error` and `link` are empty strings and `progress` grows  from 0 to 100. Once it stops, `isCompleted` turns true and `status` says how it ended: a non-empty  `error` is the only report of a failure, `warning` is set when the archive was written but some files  could not be read or when the job was cancelled, and `link` becomes the download link to the stored  archive.
         * @summary Get the backup progress
         * @param {BackupApiGetBackupProgressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-progress/
         * @throws {RequiredError}
         */
        getBackupProgress(requestParameters: BackupApiGetBackupProgressRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BackupProgressWrapper> {
            return localVarFp.getBackupProgress(requestParameters.dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the backup schedule of the current portal. A portal keeps at most one schedule, so no ID is  passed in, and when none is set the call still answers 200 with a body that carries no `response`  member at all. `dump` asks for the schedule of the whole server instead of the one of this portal and  requires the space access permission.  The answer cannot be sent back unchanged: `storageParams` is returned as an object keyed by parameter  name, while `POST api/2.0/backup/createbackupschedule` expects an array of key and value pairs. For  every storage type except `ThirdPartyConsumer` the `folderId` key of the answer is built from the  stored base path rather than read back from the saved parameters, and a schedule that keeps an  unlimited number of copies reports `backupsStored` as null instead of 0.
         * @summary Get the backup schedule
         * @param {BackupApiGetBackupScheduleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupSchedule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backup-schedule/
         * @throws {RequiredError}
         */
        getBackupSchedule(requestParameters: BackupApiGetBackupScheduleRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ScheduleWrapper> {
            return localVarFp.getBackupSchedule(requestParameters.dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Counts the backups of the current portal that were created within a period, and `paid` chooses which  kind is counted: false, the default, counts the ones covered by the free monthly allowance, and true  counts the ones charged to the portal wallet.  The period defaults to the current calendar month - `from` becomes the first day of the month at  00:00 UTC and `to` becomes the moment of the call. Both bounds are UTC and inclusive, and a `from`  later than `to` is rejected. Called with no parameters at all, this returns exactly the figure the  free monthly allowance is measured against.  The count is over history records rather than over stored archives, so it includes backups that have  already been deleted; use `GET api/2.0/backup/getbackuphistory` to see what can still be restored.
         * @summary Get the number of backups
         * @param {BackupApiGetBackupsCountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupsCount operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-count/
         * @throws {RequiredError}
         */
        getBackupsCount(requestParameters: BackupApiGetBackupsCountRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Int32Wrapper> {
            return localVarFp.getBackupsCount(requestParameters.from, requestParameters.to, requestParameters.paid, options).then((request) => request(axios, basePath));
        },
        /**
         * Counts the backups of the current portal created within a period and splits the result into the ones  covered by the free monthly allowance and the ones charged to the portal wallet, which saves calling  `GET api/2.0/backup/getbackupscount` twice.  The `paid` query parameter is accepted but not read here: the answer always carries both figures. The  period behaves as it does for `GET api/2.0/backup/getbackupscount` - it defaults to the current  calendar month, both bounds are UTC and inclusive, and a `from` later than `to` is rejected.  The counts are over history records rather than over stored archives, so they include backups that  have already been deleted.
         * @summary Get free and paid backup counts
         * @param {BackupApiGetBackupsCountsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupsCounts operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-counts/
         * @throws {RequiredError}
         */
        getBackupsCounts(requestParameters: BackupApiGetBackupsCountsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BackupsCountResultWrapper> {
            return localVarFp.getBackupsCounts(requestParameters.from, requestParameters.to, requestParameters.paid, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether the paid backup service is switched on for the current portal. This is a wallet  setting of the portal, not the health of the backup service or of the worker that runs the jobs, so a  false answer does not mean backups are unavailable and a true one does not mean they are working.  While it is on, backups beyond the free monthly allowance are charged to the portal wallet. While it  is off and that allowance is used up, `POST api/2.0/backup/startbackup` and  `POST api/2.0/backup/createbackupschedule` answer 402.  Starting a backup once the allowance is used up switches the service on by itself, as soon as a  billing session opens for the portal, so this flag can change without anybody editing the portal  settings.
         * @summary Check whether backups are enabled
         * @param {*} [options] Override http request option.
         * REST API Reference for getBackupsServiceState operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-backups-service-state/
         * @throws {RequiredError}
         */
        getBackupsServiceState(options?: RawAxiosRequestConfig): AxiosPromise<BackupServiceStateWrapper> {
            return localVarFp.getBackupsServiceState(options).then((request) => request(axios, basePath));
        },
        /**
         * Reports the state of the restoring job, and is the operation to poll after  `POST api/2.0/backup/startrestore`. It is the only operation of this service that needs no  authorization and the only one that stays reachable while the portal is being restored, which is  exactly the state a client polls it in - every other operation of the service answers 403 then.  `dump` is read as three states rather than as a flag: omit it to get whichever restoring job concerns  this portal, including a server-wide one, pass false to get the job of this portal only, and pass true  to get the server-wide job; on a portal that is not a standalone installation the value is forced to  false. When there is no matching job the call still answers 200, but the body carries no `response`  member at all.  `isCompleted` is the field to poll, a non-empty `error` is the only report of a failure, and neither  `link` nor `warning` is ever filled in for a restoring job.
         * @summary Get the restoring progress
         * @param {BackupApiGetRestoreProgressRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRestoreProgress operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-restore-progress/
         * @throws {RequiredError}
         */
        getRestoreProgress(requestParameters: BackupApiGetRestoreProgressRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BackupProgressWrapper> {
            return localVarFp.getRestoreProgress(requestParameters.dump, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a backup of the current portal and returns straight away: the archive itself is written by the  separate backup worker service, which picks the job up from an integration event, so the response  reports a progress of 0 and the `Created` status, and its `taskId` is the handle to poll with  `GET api/2.0/backup/getbackupprogress`. The caller needs the portal settings permission, and  `dump` - a backup of the whole server instead of this one portal - additionally requires the space  access permission and is rejected outside a standalone installation.  The keys expected in `storageParams` depend on `storageType`: `Documents` takes an integer `folderId`,  `ThridpartyDocuments` takes a provider-specific non-integer `folderId`, `Local` takes `filePath` and  works on a standalone installation only, `ThirdPartyConsumer` takes `module` together with the settings  of that consumer, and `DataStore` takes no keys at all; the `subdir` key is added by the operation  itself and must not be sent.  A portal that has already used up the free backups of the current calendar month is charged through the  paid backup service instead, and the call is rejected with 402 when that service is not available to it.
         * @summary Start the backup
         * @param {BackupApiStartBackupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startBackup operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup/
         * @throws {RequiredError}
         */
        startBackup(requestParameters: BackupApiStartBackupRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BackupProgressWrapper> {
            return localVarFp.startBackup(requestParameters.backupDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues the restoring of the current portal from a backup and returns straight away: the work itself is  done by the separate backup worker service, which picks the job up from an integration event, so the  response reports a progress of 0 and the `Created` status, and the returned `taskId` is the handle to  poll with `GET api/2.0/backup/getrestoreprogress` - the one operation of this service that stays  reachable while the portal is being restored, because every other one answers 403 in that state.  The source is given either by `backupId`, which is the ID of a record from  `GET api/2.0/backup/getbackuphistory`, or, when `backupId` is not a GUID, by the `filePath` key of  `storageParams` together with the matching `storageType`; an all-zero GUID is parsed as a GUID and  therefore reaches neither branch.  The caller needs the portal settings permission, restoring has to be allowed by the pricing plan of a  portal that is not a standalone installation, and `dump` - restoring the whole server rather than this  one portal - additionally requires the space access permission.
         * @summary Start the restoring process
         * @param {BackupApiStartBackupRestoreRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startBackupRestore operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-backup-restore/
         * @throws {RequiredError}
         */
        startBackupRestore(requestParameters: BackupApiStartBackupRestoreRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BackupProgressWrapper> {
            return localVarFp.startBackupRestore(requestParameters.backupRestoreDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createBackupSchedule operation in BackupApi.
 * @export
 * @interface BackupApiCreateBackupScheduleRequest
 */
export interface BackupApiCreateBackupScheduleRequest {
    /**
     * 
     * @type {BackupScheduleDto}
     * @memberof BackupApiCreateBackupSchedule
     */
    readonly backupScheduleDto?: BackupScheduleDto
}

/**
 * Request parameters for deleteBackup operation in BackupApi.
 * @export
 * @interface BackupApiDeleteBackupRequest
 */
export interface BackupApiDeleteBackupRequest {
    /**
     * The ID of the backup to delete, taken from the route. It is the `id` of a record listed by  `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the backup was started with.
     * @type {string}
     * @memberof BackupApiDeleteBackup
     */
    readonly id: string
}

/**
 * Request parameters for deleteBackupHistory operation in BackupApi.
 * @export
 * @interface BackupApiDeleteBackupHistoryRequest
 */
export interface BackupApiDeleteBackupHistoryRequest {
    /**
     * Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
     * @type {boolean}
     * @memberof BackupApiDeleteBackupHistory
     */
    readonly dump?: boolean
}

/**
 * Request parameters for deleteBackupSchedule operation in BackupApi.
 * @export
 * @interface BackupApiDeleteBackupScheduleRequest
 */
export interface BackupApiDeleteBackupScheduleRequest {
    /**
     * Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
     * @type {boolean}
     * @memberof BackupApiDeleteBackupSchedule
     */
    readonly dump?: boolean
}

/**
 * Request parameters for getBackupHistory operation in BackupApi.
 * @export
 * @interface BackupApiGetBackupHistoryRequest
 */
export interface BackupApiGetBackupHistoryRequest {
    /**
     * Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
     * @type {boolean}
     * @memberof BackupApiGetBackupHistory
     */
    readonly dump?: boolean
}

/**
 * Request parameters for getBackupProgress operation in BackupApi.
 * @export
 * @interface BackupApiGetBackupProgressRequest
 */
export interface BackupApiGetBackupProgressRequest {
    /**
     * Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
     * @type {boolean}
     * @memberof BackupApiGetBackupProgress
     */
    readonly dump?: boolean
}

/**
 * Request parameters for getBackupSchedule operation in BackupApi.
 * @export
 * @interface BackupApiGetBackupScheduleRequest
 */
export interface BackupApiGetBackupScheduleRequest {
    /**
     * Applies the operation to the whole server rather than to the current portal, which requires the space  access permission and works on a standalone installation only. Server-wide backups and schedules are  kept apart from the ones of a portal, so the two values address different data.
     * @type {boolean}
     * @memberof BackupApiGetBackupSchedule
     */
    readonly dump?: boolean
}

/**
 * Request parameters for getBackupsCount operation in BackupApi.
 * @export
 * @interface BackupApiGetBackupsCountRequest
 */
export interface BackupApiGetBackupsCountRequest {
    /**
     * The start of the period, in UTC and inclusive. It defaults to the first day of the current calendar  month at 00:00 UTC, and it has to be no later than `to`.
     * @type {string}
     * @memberof BackupApiGetBackupsCount
     */
    readonly from?: string

    /**
     * The end of the period, in UTC and inclusive. It defaults to the moment of the call.
     * @type {string}
     * @memberof BackupApiGetBackupsCount
     */
    readonly to?: string

    /**
     * Counts the backups charged to the portal wallet when true, and the ones covered by the free monthly  allowance when false, which is the default. It is read only by  `GET api/2.0/backup/getbackupscount` and is ignored by  `GET api/2.0/backup/getbackupscountbypaid`, which always reports both.
     * @type {boolean}
     * @memberof BackupApiGetBackupsCount
     */
    readonly paid?: boolean
}

/**
 * Request parameters for getBackupsCounts operation in BackupApi.
 * @export
 * @interface BackupApiGetBackupsCountsRequest
 */
export interface BackupApiGetBackupsCountsRequest {
    /**
     * The start of the period, in UTC and inclusive. It defaults to the first day of the current calendar  month at 00:00 UTC, and it has to be no later than `to`.
     * @type {string}
     * @memberof BackupApiGetBackupsCounts
     */
    readonly from?: string

    /**
     * The end of the period, in UTC and inclusive. It defaults to the moment of the call.
     * @type {string}
     * @memberof BackupApiGetBackupsCounts
     */
    readonly to?: string

    /**
     * Counts the backups charged to the portal wallet when true, and the ones covered by the free monthly  allowance when false, which is the default. It is read only by  `GET api/2.0/backup/getbackupscount` and is ignored by  `GET api/2.0/backup/getbackupscountbypaid`, which always reports both.
     * @type {boolean}
     * @memberof BackupApiGetBackupsCounts
     */
    readonly paid?: boolean
}

/**
 * Request parameters for getRestoreProgress operation in BackupApi.
 * @export
 * @interface BackupApiGetRestoreProgressRequest
 */
export interface BackupApiGetRestoreProgressRequest {
    /**
     * Which restoring job to look for, read as three states rather than as a flag: leave it out for  whichever job concerns this portal, including a server-wide one, send false for the job of this  portal alone, and send true for the server-wide job. On a portal that is not a standalone  installation the value is forced to false.
     * @type {boolean}
     * @memberof BackupApiGetRestoreProgress
     */
    readonly dump?: boolean
}

/**
 * Request parameters for startBackup operation in BackupApi.
 * @export
 * @interface BackupApiStartBackupRequest
 */
export interface BackupApiStartBackupRequest {
    /**
     * 
     * @type {BackupDto}
     * @memberof BackupApiStartBackup
     */
    readonly backupDto?: BackupDto
}

/**
 * Request parameters for startBackupRestore operation in BackupApi.
 * @export
 * @interface BackupApiStartBackupRestoreRequest
 */
export interface BackupApiStartBackupRestoreRequest {
    /**
     * 
     * @type {BackupRestoreDto}
     * @memberof BackupApiStartBackupRestore
     */
    readonly backupRestoreDto?: BackupRestoreDto
}

/**
 * BackupApi - object-oriented interface
 * @export
 * @class BackupApi
 * @extends {BaseAPI}
 */
export class BackupApi extends BaseAPI {
    /**
     * Drops the backup job of the current portal from the queue, which cancels it if it is still running.  The caller needs the portal settings permission. It answers false, not an error, when there is nothing  to cancel, so the result says whether a job was actually dropped rather than whether the call  succeeded.  This affects backup jobs only: a restoring job cannot be cancelled through the API. The cancelled job  leaves the queue, so a following `GET api/2.0/backup/getbackupprogress` reports no job at all rather  than a job with the `Canceled` status.
     * @summary Cancel the running backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public cancelBackup(options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).cancelBackup(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the backup schedule of the current portal. A portal keeps at most one schedule, so this replaces  the existing one rather than adding a second, and `dump` writes the schedule of the whole server  instead, which requires the space access permission and works on a standalone installation only.  Scheduled backups have to be allowed by the pricing plan of a portal that is not a standalone  installation.  `cronParams` is a period plus a time rather than a cron string: `hour` is the hour of the day from 0  to 23, and `day` has to be given for `EveryWeek`, where it is the day of the week from 1 to 7 with  Sunday as 1, and for `EveryMonth`, where it is the day of the month from 1 to 31. It is left out for  `EveryDay`, and because an omitted `day` is stored as 0, which neither period accepts, a weekly or  monthly schedule sent without it fails instead of falling back to a default.  `backupsStored` is the number of scheduled copies to keep, from 1 to 30, and it defaults to 1. Older  copies are removed by a background cleaner, and only the ones this schedule created: archives made by  `POST api/2.0/backup/startbackup` are not counted and not removed. A portal whose subscription stops  covering backups has its schedule deleted by the scheduler, not suspended, and its administrators are  notified that the scheduled backup failed.  The keys expected in `storageParams` are the same as for `POST api/2.0/backup/startbackup`, except  that they are sent as an array of key and value pairs here and returned as an object by  `GET api/2.0/backup/getbackupschedule`.
     * @summary Create the backup schedule
     * @param {BackupApiCreateBackupScheduleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public createBackupSchedule(requestParameters: BackupApiCreateBackupScheduleRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).createBackupSchedule(requestParameters.backupScheduleDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes one backup: first its history record, then the archive in the storage the record points at.  The ID is the one listed by `GET api/2.0/backup/getbackuphistory`, which is also the `taskId` the  backup was started with.  Deleting a backup of the whole server rather than of one portal additionally requires the space  access permission. A record that belongs to another portal is left untouched and the call still  answers true, so the result confirms that the request was accepted rather than that anything was  deleted - check with `GET api/2.0/backup/getbackuphistory` if it matters.  The record is removed before the archive, so when the storage can no longer be reached the archive  stays behind with nothing pointing at it.
     * @summary Delete the backup
     * @param {BackupApiDeleteBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public deleteBackup(requestParameters: BackupApiDeleteBackupRequest, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).deleteBackup(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes every backup of the current portal, both the history records and the archives themselves, and  leaves the backup schedule alone. `dump` clears the backups of the whole server instead and requires  the space access permission.  The records are walked one by one and a failure on any of them is swallowed, so the result is always  true even when some archives could not be deleted: it does not mean the history is now empty. Call  `GET api/2.0/backup/getbackuphistory` afterwards to see what is left.  Each record is removed before its archive, so an archive whose deletion fails stays in the storage  with nothing pointing at it.
     * @summary Delete the backup history
     * @param {BackupApiDeleteBackupHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public deleteBackupHistory(requestParameters: BackupApiDeleteBackupHistoryRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).deleteBackupHistory(requestParameters.dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the backup schedule of the current portal, which stops the scheduled backups; `dump` deletes  the schedule of the whole server instead and requires the space access permission. The archives the  schedule has already produced are kept and stay listed by  `GET api/2.0/backup/getbackuphistory` - delete them through  `DELETE api/2.0/backup/deletebackup/{id}` if they are no longer wanted.  The result is always true, including when there was no schedule to delete, so it confirms that the  portal now has none rather than that anything was removed. The deletion is written to the audit trail  either way.
     * @summary Delete the backup schedule
     * @param {BackupApiDeleteBackupScheduleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public deleteBackupSchedule(requestParameters: BackupApiDeleteBackupScheduleRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).deleteBackupSchedule(requestParameters.dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the backups of the current portal whose archive is still present in the storage it was written  to. The records come back in no particular order, so sort them by `createdOn` if the newest one is  wanted. `dump` lists the backups of the whole server instead and requires the space access  permission.  Despite being a read operation, this prunes the history as it goes: a record whose archive is no  longer in its storage is deleted outright, so the list can shrink between two calls without anybody  deleting anything. A record whose storage can no longer be reached at all - a disconnected  third-party account, for instance - is neither returned nor deleted, so it stays invisible while  still occupying the history.  The `id` of a record is the same value as the `taskId` that  `POST api/2.0/backup/startbackup` returned for it, and it is what  `DELETE api/2.0/backup/deletebackup/{id}` and the `backupId` of  `POST api/2.0/backup/startrestore` expect.
     * @summary Get the backup history
     * @param {BackupApiGetBackupHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupHistory(requestParameters: BackupApiGetBackupHistoryRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupHistory(requestParameters.dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports the state of the backup job of the current portal, and is the operation to poll after  `POST api/2.0/backup/startbackup`. The queue holds one job per portal, so no job ID is passed in;  `dump` asks for the state of the server-wide job instead and requires the space access permission.  When there is no such job - none was ever started, or the finished one has already been dropped from  the queue - the call still answers 200, but the body carries no `response` member at all, so a client  has to treat the payload as optional rather than expect an empty object.  While the job runs, `isCompleted` is false, `error` and `link` are empty strings and `progress` grows  from 0 to 100. Once it stops, `isCompleted` turns true and `status` says how it ended: a non-empty  `error` is the only report of a failure, `warning` is set when the archive was written but some files  could not be read or when the job was cancelled, and `link` becomes the download link to the stored  archive.
     * @summary Get the backup progress
     * @param {BackupApiGetBackupProgressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupProgress(requestParameters: BackupApiGetBackupProgressRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupProgress(requestParameters.dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the backup schedule of the current portal. A portal keeps at most one schedule, so no ID is  passed in, and when none is set the call still answers 200 with a body that carries no `response`  member at all. `dump` asks for the schedule of the whole server instead of the one of this portal and  requires the space access permission.  The answer cannot be sent back unchanged: `storageParams` is returned as an object keyed by parameter  name, while `POST api/2.0/backup/createbackupschedule` expects an array of key and value pairs. For  every storage type except `ThirdPartyConsumer` the `folderId` key of the answer is built from the  stored base path rather than read back from the saved parameters, and a schedule that keeps an  unlimited number of copies reports `backupsStored` as null instead of 0.
     * @summary Get the backup schedule
     * @param {BackupApiGetBackupScheduleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupSchedule(requestParameters: BackupApiGetBackupScheduleRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupSchedule(requestParameters.dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Counts the backups of the current portal that were created within a period, and `paid` chooses which  kind is counted: false, the default, counts the ones covered by the free monthly allowance, and true  counts the ones charged to the portal wallet.  The period defaults to the current calendar month - `from` becomes the first day of the month at  00:00 UTC and `to` becomes the moment of the call. Both bounds are UTC and inclusive, and a `from`  later than `to` is rejected. Called with no parameters at all, this returns exactly the figure the  free monthly allowance is measured against.  The count is over history records rather than over stored archives, so it includes backups that have  already been deleted; use `GET api/2.0/backup/getbackuphistory` to see what can still be restored.
     * @summary Get the number of backups
     * @param {BackupApiGetBackupsCountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupsCount(requestParameters: BackupApiGetBackupsCountRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupsCount(requestParameters.from, requestParameters.to, requestParameters.paid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Counts the backups of the current portal created within a period and splits the result into the ones  covered by the free monthly allowance and the ones charged to the portal wallet, which saves calling  `GET api/2.0/backup/getbackupscount` twice.  The `paid` query parameter is accepted but not read here: the answer always carries both figures. The  period behaves as it does for `GET api/2.0/backup/getbackupscount` - it defaults to the current  calendar month, both bounds are UTC and inclusive, and a `from` later than `to` is rejected.  The counts are over history records rather than over stored archives, so they include backups that  have already been deleted.
     * @summary Get free and paid backup counts
     * @param {BackupApiGetBackupsCountsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupsCounts(requestParameters: BackupApiGetBackupsCountsRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupsCounts(requestParameters.from, requestParameters.to, requestParameters.paid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether the paid backup service is switched on for the current portal. This is a wallet  setting of the portal, not the health of the backup service or of the worker that runs the jobs, so a  false answer does not mean backups are unavailable and a true one does not mean they are working.  While it is on, backups beyond the free monthly allowance are charged to the portal wallet. While it  is off and that allowance is used up, `POST api/2.0/backup/startbackup` and  `POST api/2.0/backup/createbackupschedule` answer 402.  Starting a backup once the allowance is used up switches the service on by itself, as soon as a  billing session opens for the portal, so this flag can change without anybody editing the portal  settings.
     * @summary Check whether backups are enabled
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getBackupsServiceState(options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getBackupsServiceState(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports the state of the restoring job, and is the operation to poll after  `POST api/2.0/backup/startrestore`. It is the only operation of this service that needs no  authorization and the only one that stays reachable while the portal is being restored, which is  exactly the state a client polls it in - every other operation of the service answers 403 then.  `dump` is read as three states rather than as a flag: omit it to get whichever restoring job concerns  this portal, including a server-wide one, pass false to get the job of this portal only, and pass true  to get the server-wide job; on a portal that is not a standalone installation the value is forced to  false. When there is no matching job the call still answers 200, but the body carries no `response`  member at all.  `isCompleted` is the field to poll, a non-empty `error` is the only report of a failure, and neither  `link` nor `warning` is ever filled in for a restoring job.
     * @summary Get the restoring progress
     * @param {BackupApiGetRestoreProgressRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public getRestoreProgress(requestParameters: BackupApiGetRestoreProgressRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).getRestoreProgress(requestParameters.dump, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a backup of the current portal and returns straight away: the archive itself is written by the  separate backup worker service, which picks the job up from an integration event, so the response  reports a progress of 0 and the `Created` status, and its `taskId` is the handle to poll with  `GET api/2.0/backup/getbackupprogress`. The caller needs the portal settings permission, and  `dump` - a backup of the whole server instead of this one portal - additionally requires the space  access permission and is rejected outside a standalone installation.  The keys expected in `storageParams` depend on `storageType`: `Documents` takes an integer `folderId`,  `ThridpartyDocuments` takes a provider-specific non-integer `folderId`, `Local` takes `filePath` and  works on a standalone installation only, `ThirdPartyConsumer` takes `module` together with the settings  of that consumer, and `DataStore` takes no keys at all; the `subdir` key is added by the operation  itself and must not be sent.  A portal that has already used up the free backups of the current calendar month is charged through the  paid backup service instead, and the call is rejected with 402 when that service is not available to it.
     * @summary Start the backup
     * @param {BackupApiStartBackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public startBackup(requestParameters: BackupApiStartBackupRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).startBackup(requestParameters.backupDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues the restoring of the current portal from a backup and returns straight away: the work itself is  done by the separate backup worker service, which picks the job up from an integration event, so the  response reports a progress of 0 and the `Created` status, and the returned `taskId` is the handle to  poll with `GET api/2.0/backup/getrestoreprogress` - the one operation of this service that stays  reachable while the portal is being restored, because every other one answers 403 in that state.  The source is given either by `backupId`, which is the ID of a record from  `GET api/2.0/backup/getbackuphistory`, or, when `backupId` is not a GUID, by the `filePath` key of  `storageParams` together with the matching `storageType`; an all-zero GUID is parsed as a GUID and  therefore reaches neither branch.  The caller needs the portal settings permission, restoring has to be allowed by the pricing plan of a  portal that is not a standalone installation, and `dump` - restoring the whole server rather than this  one portal - additionally requires the space access permission.
     * @summary Start the restoring process
     * @param {BackupApiStartBackupRestoreRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BackupApi
     */
    public startBackupRestore(requestParameters: BackupApiStartBackupRestoreRequest = {}, options?: RawAxiosRequestConfig) {
        return BackupApiFp(this.configuration).startBackupRestore(requestParameters.backupRestoreDto, options).then((request) => request(this.axios, this.basePath));
    }
}

