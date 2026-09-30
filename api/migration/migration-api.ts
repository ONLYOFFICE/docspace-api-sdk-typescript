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
import type { FinishDto } from '../../models';
// @ts-ignore
import type { MigrationApiInfo } from '../../models';
// @ts-ignore
import type { MigrationStatusWrapper } from '../../models';
// @ts-ignore
import type { STRINGArrayWrapper } from '../../models';
/**
 * MigrationApi - axios parameter creator
 * @export
 */
export const MigrationApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Stops the parse pass queued for this portal and deletes the backup uploaded for it - the way back from a wrong  archive or a wrong migrator name. Nothing has to be called first and a DocSpace administrator is required; the  request is only queued, so the parse ends shortly after the call returns and  `GET api/2.0/migration/status` stops reporting it. The call is destructive for the uploaded data: the whole  upload folder is removed and the backup has to be sent to `migrationFileUpload.ashx` again before a new parse.  It is idempotent - cancelling when nothing is running still answers 200 - and it undoes nothing that was  already written to the portal. Only the parse stage is stopped, the job whose `parseResult.operation` is  `parse`: an import started by `POST api/2.0/migration/migrate` keeps running, and a finished import is  discarded with `POST api/2.0/migration/clear` instead.
         * @summary Cancel migration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for cancelMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/cancel-migration/
         */
        cancelMigration: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/migration/cancel`;
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
         * Discards a finished import and deletes the data uploaded for it, freeing the portal for the next one. Call it  once `GET api/2.0/migration/status` reports `isCompleted` for a job whose `parseResult.operation` is  `migration`; a DocSpace administrator is required. Only the queued job and the temporary upload folder go -  the users, groups and files already imported stay in the portal - so the call destroys migration data alone,  and it is idempotent: clearing twice, or with nothing to clear, still answers 200. Like the other write  operations here it is only queued, and once it has run `GET api/2.0/migration/status` returns an empty result  and `GET api/2.0/migration/logs` answers 404, so download the log before calling it. A parse that is still  running is not affected - stop that with `POST api/2.0/migration/cancel` - and  `POST api/2.0/migration/finish` performs the same clean-up itself, which makes this call unnecessary after it.
         * @summary Clear migration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for clearMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/clear-migration/
         */
        clearMigration: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/migration/clear`;
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
         * Closes a completed import: it can send every user the import created the activation email they need before  they can sign in, and it then discards the job and the data uploaded for it. Call it once  `GET api/2.0/migration/status` reports `isCompleted` for the import; a DocSpace administrator is required, and  with `isSendWelcomeEmail` set to true the job must still be in the queue, so do not clear it first. That flag  decides what happens to the imported people: true mails the activation link to each of them who has not  activated their account yet and skips the ones that are already active, false ends the import quietly and  leaves inviting them for later. The call writes to the portal and is not idempotent - the emails go out again  on every call - while its second half repeats what `POST api/2.0/migration/clear` does, removing the finished  job and the uploaded backup and leaving everything already imported in place. It answers with an empty body,  after which `GET api/2.0/migration/status` returns an empty result and `GET api/2.0/migration/logs` answers  404, so download the log first.
         * @summary Finish migration
         * @param {FinishDto} [finishDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for finishMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finish-migration/
         */
        finishMigration: async (finishDto?: FinishDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/migration/finish`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(finishDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Downloads the log of the parse or import the portal currently holds - the step-by-step record behind the  numbers and the single error message of `GET api/2.0/migration/status`, and the place where the reason for a  skipped user or file is written. The portal has to hold such a job, started by  `POST api/2.0/migration/init/{migratorName}` or `POST api/2.0/migration/migrate` and not yet removed by  `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish`, otherwise the call answers 404; a DocSpace  administrator is required and the call is read-only and idempotent. The body is not JSON: it is  `text/plain; charset=UTF-8` sent as an attachment named `migration.log`, one line per step with the progress  it reported. Each job writes its own log, so this always returns the log of the job that  `GET api/2.0/migration/status` describes, and while that job runs the file keeps growing - a call made early  returns only the part written so far and may be repeated later for the rest.
         * @summary Get migration logs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMigrationLogs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-migration-logs/
         */
        getMigrationLogs: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/migration/logs`;
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
         * Returns how far the parse or the import queued for this portal has got and, once it stopped, what it produced  - the one place where every other operation in this group reports what it did. Any of them may be polled from  here as soon as it returns; a DocSpace administrator is required and the call is read-only and idempotent.  `progress` is the share of the job that is done, from 0 to 100, and `isCompleted` turns true when the job  stopped whether it succeeded or not, so read `error` as well: it stays empty while nothing went wrong and  otherwise holds the message that ended the job. `parseResult` carries what the migrator has read so far -  after a parse pass the users, groups and unreadable archives to edit and post to  `POST api/2.0/migration/migrate`, and during an import also `successedUsers` and `failedUsers` - and its  `operation` field, `parse` or `migration`, tells the two stages apart. The result is empty with status 200  when the portal has no job at all, because none was ever started or because  `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish` has removed the last one; an empty answer is  therefore not an error. Line-by-line detail behind the numbers is in `GET api/2.0/migration/logs`.
         * @summary Get migration status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMigrationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-migration-status/
         */
        getMigrationStatus: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/migration/status`;
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
         * Lists the source products this installation can import a portal from, as the migrator names every other  operation in this group expects. Nothing has to be called first, a DocSpace administrator is required as  everywhere here, and the call is read-only and idempotent. The answer is a plain list of names such as  `GoogleWorkspace`, `Nextcloud` or `Workspace`, never localized and ordered as the migrators are registered;  pass one of them as `migratorName` to `POST api/2.0/migration/init/{migratorName}`, where the match ignores  case. The list depends on the installation rather than on the portal, so it does not change while the portal  runs, and a name that is not in it is not rejected by the operation that takes it - the queued job ends with  the failure reported in `error` of `GET api/2.0/migration/status`.
         * @summary Get available migrators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for listMigrations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/list-migrations/
         */
        listMigrations: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/migration/list`;
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
         * Starts the import itself: the users, the groups and the files selected in the request body are created on this  portal from the backup that the parse pass has read. Run `POST api/2.0/migration/init/{migratorName}` first  and wait for `isCompleted` in `GET api/2.0/migration/status`, then send `parseResult` from that answer back  here with `shouldImport` set on the users and groups to take and the `import...Files` flags set for the  content to copy. A DocSpace administrator is required, and importing a user as `DocSpaceAdmin` additionally  requires the caller to be the portal owner unless a user with that email is an administrator of this portal  already, otherwise the whole call is rejected with 403 before anything is imported. The job is queued and the  call answers with an empty body at once: watch `progress`, `successedUsers`, `failedUsers` and `error` in  `GET api/2.0/migration/status` and read what each step did from `GET api/2.0/migration/logs`. The import  writes to the portal and cannot be undone, and a repeat is no help: a call made while the job runs is ignored,  and once the job has ended the uploaded backup is deleted, so a new call has nothing to read until the archive  is uploaded and parsed again. When the import is done, close it with `POST api/2.0/migration/finish`, which can  also mail the imported users their activation link.
         * @summary Start migration
         * @param {MigrationApiInfo} [migrationApiInfo] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-migration/
         */
        startMigration: async (migrationApiInfo?: MigrationApiInfo, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/migration/migrate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(migrationApiInfo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues a pass that reads the backup already uploaded for this portal with the migrator named in the path and  reports what it holds - the users, the users that carry no email address, the users that exist on this portal  already, the groups and the archives it could not open - so that the caller can choose what to import. Upload  the backup first: `migrationFileUpload.ashx?Init=true` opens a new upload folder and drops the previous one,  then every part of the archive is posted to the same handler with `Name` set to its file name; take  `migratorName` from `GET api/2.0/migration/list`. A DocSpace administrator is required. The call only queues  the job and answers at once with an empty body: poll `GET api/2.0/migration/status` until `isCompleted` is  true, then read what was found from `parseResult` and any failure from `error`. Nothing is imported here and  the portal is not changed - the parse result is the body to edit and send to  `POST api/2.0/migration/migrate`. A portal runs one job at a time, so a call made while another parse or  import is still running is ignored instead of reported, and a backup bigger than the portal\'s total storage  quota ends the job with an error rather than failing this call.
         * @summary Parse migration archive
         * @param {string} migratorName The migrator that knows the format of the uploaded backup. It has to be one of the names  `GET api/2.0/migration/list` reports for this installation, spelled exactly as listed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadAndInitializeMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-and-initialize-migration/
         */
        uploadAndInitializeMigration: async (migratorName: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'migratorName' is not null or undefined
            assertParamExists('uploadAndInitializeMigration', 'migratorName', migratorName)

            const localVarPath = `/api/2.0/migration/init/{migratorName}`
                .replace(`{${"migratorName"}}`, encodeURIComponent(String(migratorName)));
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
    }
};

/**
 * MigrationApi - functional programming interface
 * @export
 */
export const MigrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MigrationApiAxiosParamCreator(configuration)
    return {
        /**
         * Stops the parse pass queued for this portal and deletes the backup uploaded for it - the way back from a wrong  archive or a wrong migrator name. Nothing has to be called first and a DocSpace administrator is required; the  request is only queued, so the parse ends shortly after the call returns and  `GET api/2.0/migration/status` stops reporting it. The call is destructive for the uploaded data: the whole  upload folder is removed and the backup has to be sent to `migrationFileUpload.ashx` again before a new parse.  It is idempotent - cancelling when nothing is running still answers 200 - and it undoes nothing that was  already written to the portal. Only the parse stage is stopped, the job whose `parseResult.operation` is  `parse`: an import started by `POST api/2.0/migration/migrate` keeps running, and a finished import is  discarded with `POST api/2.0/migration/clear` instead.
         * @summary Cancel migration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for cancelMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/cancel-migration/
         */
        async cancelMigration(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelMigration(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationApi.cancelMigration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Discards a finished import and deletes the data uploaded for it, freeing the portal for the next one. Call it  once `GET api/2.0/migration/status` reports `isCompleted` for a job whose `parseResult.operation` is  `migration`; a DocSpace administrator is required. Only the queued job and the temporary upload folder go -  the users, groups and files already imported stay in the portal - so the call destroys migration data alone,  and it is idempotent: clearing twice, or with nothing to clear, still answers 200. Like the other write  operations here it is only queued, and once it has run `GET api/2.0/migration/status` returns an empty result  and `GET api/2.0/migration/logs` answers 404, so download the log before calling it. A parse that is still  running is not affected - stop that with `POST api/2.0/migration/cancel` - and  `POST api/2.0/migration/finish` performs the same clean-up itself, which makes this call unnecessary after it.
         * @summary Clear migration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for clearMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/clear-migration/
         */
        async clearMigration(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.clearMigration(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationApi.clearMigration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Closes a completed import: it can send every user the import created the activation email they need before  they can sign in, and it then discards the job and the data uploaded for it. Call it once  `GET api/2.0/migration/status` reports `isCompleted` for the import; a DocSpace administrator is required, and  with `isSendWelcomeEmail` set to true the job must still be in the queue, so do not clear it first. That flag  decides what happens to the imported people: true mails the activation link to each of them who has not  activated their account yet and skips the ones that are already active, false ends the import quietly and  leaves inviting them for later. The call writes to the portal and is not idempotent - the emails go out again  on every call - while its second half repeats what `POST api/2.0/migration/clear` does, removing the finished  job and the uploaded backup and leaving everything already imported in place. It answers with an empty body,  after which `GET api/2.0/migration/status` returns an empty result and `GET api/2.0/migration/logs` answers  404, so download the log first.
         * @summary Finish migration
         * @param {FinishDto} [finishDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for finishMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finish-migration/
         */
        async finishMigration(finishDto?: FinishDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.finishMigration(finishDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationApi.finishMigration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Downloads the log of the parse or import the portal currently holds - the step-by-step record behind the  numbers and the single error message of `GET api/2.0/migration/status`, and the place where the reason for a  skipped user or file is written. The portal has to hold such a job, started by  `POST api/2.0/migration/init/{migratorName}` or `POST api/2.0/migration/migrate` and not yet removed by  `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish`, otherwise the call answers 404; a DocSpace  administrator is required and the call is read-only and idempotent. The body is not JSON: it is  `text/plain; charset=UTF-8` sent as an attachment named `migration.log`, one line per step with the progress  it reported. Each job writes its own log, so this always returns the log of the job that  `GET api/2.0/migration/status` describes, and while that job runs the file keeps growing - a call made early  returns only the part written so far and may be repeated later for the rest.
         * @summary Get migration logs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMigrationLogs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-migration-logs/
         */
        async getMigrationLogs(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMigrationLogs(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationApi.getMigrationLogs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns how far the parse or the import queued for this portal has got and, once it stopped, what it produced  - the one place where every other operation in this group reports what it did. Any of them may be polled from  here as soon as it returns; a DocSpace administrator is required and the call is read-only and idempotent.  `progress` is the share of the job that is done, from 0 to 100, and `isCompleted` turns true when the job  stopped whether it succeeded or not, so read `error` as well: it stays empty while nothing went wrong and  otherwise holds the message that ended the job. `parseResult` carries what the migrator has read so far -  after a parse pass the users, groups and unreadable archives to edit and post to  `POST api/2.0/migration/migrate`, and during an import also `successedUsers` and `failedUsers` - and its  `operation` field, `parse` or `migration`, tells the two stages apart. The result is empty with status 200  when the portal has no job at all, because none was ever started or because  `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish` has removed the last one; an empty answer is  therefore not an error. Line-by-line detail behind the numbers is in `GET api/2.0/migration/logs`.
         * @summary Get migration status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMigrationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-migration-status/
         */
        async getMigrationStatus(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MigrationStatusWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMigrationStatus(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationApi.getMigrationStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the source products this installation can import a portal from, as the migrator names every other  operation in this group expects. Nothing has to be called first, a DocSpace administrator is required as  everywhere here, and the call is read-only and idempotent. The answer is a plain list of names such as  `GoogleWorkspace`, `Nextcloud` or `Workspace`, never localized and ordered as the migrators are registered;  pass one of them as `migratorName` to `POST api/2.0/migration/init/{migratorName}`, where the match ignores  case. The list depends on the installation rather than on the portal, so it does not change while the portal  runs, and a name that is not in it is not rejected by the operation that takes it - the queued job ends with  the failure reported in `error` of `GET api/2.0/migration/status`.
         * @summary Get available migrators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for listMigrations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/list-migrations/
         */
        async listMigrations(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<STRINGArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMigrations(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationApi.listMigrations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the import itself: the users, the groups and the files selected in the request body are created on this  portal from the backup that the parse pass has read. Run `POST api/2.0/migration/init/{migratorName}` first  and wait for `isCompleted` in `GET api/2.0/migration/status`, then send `parseResult` from that answer back  here with `shouldImport` set on the users and groups to take and the `import...Files` flags set for the  content to copy. A DocSpace administrator is required, and importing a user as `DocSpaceAdmin` additionally  requires the caller to be the portal owner unless a user with that email is an administrator of this portal  already, otherwise the whole call is rejected with 403 before anything is imported. The job is queued and the  call answers with an empty body at once: watch `progress`, `successedUsers`, `failedUsers` and `error` in  `GET api/2.0/migration/status` and read what each step did from `GET api/2.0/migration/logs`. The import  writes to the portal and cannot be undone, and a repeat is no help: a call made while the job runs is ignored,  and once the job has ended the uploaded backup is deleted, so a new call has nothing to read until the archive  is uploaded and parsed again. When the import is done, close it with `POST api/2.0/migration/finish`, which can  also mail the imported users their activation link.
         * @summary Start migration
         * @param {MigrationApiInfo} [migrationApiInfo] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-migration/
         */
        async startMigration(migrationApiInfo?: MigrationApiInfo, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startMigration(migrationApiInfo, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationApi.startMigration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a pass that reads the backup already uploaded for this portal with the migrator named in the path and  reports what it holds - the users, the users that carry no email address, the users that exist on this portal  already, the groups and the archives it could not open - so that the caller can choose what to import. Upload  the backup first: `migrationFileUpload.ashx?Init=true` opens a new upload folder and drops the previous one,  then every part of the archive is posted to the same handler with `Name` set to its file name; take  `migratorName` from `GET api/2.0/migration/list`. A DocSpace administrator is required. The call only queues  the job and answers at once with an empty body: poll `GET api/2.0/migration/status` until `isCompleted` is  true, then read what was found from `parseResult` and any failure from `error`. Nothing is imported here and  the portal is not changed - the parse result is the body to edit and send to  `POST api/2.0/migration/migrate`. A portal runs one job at a time, so a call made while another parse or  import is still running is ignored instead of reported, and a backup bigger than the portal\'s total storage  quota ends the job with an error rather than failing this call.
         * @summary Parse migration archive
         * @param {string} migratorName The migrator that knows the format of the uploaded backup. It has to be one of the names  `GET api/2.0/migration/list` reports for this installation, spelled exactly as listed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadAndInitializeMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-and-initialize-migration/
         */
        async uploadAndInitializeMigration(migratorName: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadAndInitializeMigration(migratorName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationApi.uploadAndInitializeMigration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MigrationApi - factory interface
 * @export
 */
export const MigrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MigrationApiFp(configuration)
    return {
        /**
         * Stops the parse pass queued for this portal and deletes the backup uploaded for it - the way back from a wrong  archive or a wrong migrator name. Nothing has to be called first and a DocSpace administrator is required; the  request is only queued, so the parse ends shortly after the call returns and  `GET api/2.0/migration/status` stops reporting it. The call is destructive for the uploaded data: the whole  upload folder is removed and the backup has to be sent to `migrationFileUpload.ashx` again before a new parse.  It is idempotent - cancelling when nothing is running still answers 200 - and it undoes nothing that was  already written to the portal. Only the parse stage is stopped, the job whose `parseResult.operation` is  `parse`: an import started by `POST api/2.0/migration/migrate` keeps running, and a finished import is  discarded with `POST api/2.0/migration/clear` instead.
         * @summary Cancel migration
         * @param {*} [options] Override http request option.
         * REST API Reference for cancelMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/cancel-migration/
         * @throws {RequiredError}
         */
        cancelMigration(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.cancelMigration(options).then((request) => request(axios, basePath));
        },
        /**
         * Discards a finished import and deletes the data uploaded for it, freeing the portal for the next one. Call it  once `GET api/2.0/migration/status` reports `isCompleted` for a job whose `parseResult.operation` is  `migration`; a DocSpace administrator is required. Only the queued job and the temporary upload folder go -  the users, groups and files already imported stay in the portal - so the call destroys migration data alone,  and it is idempotent: clearing twice, or with nothing to clear, still answers 200. Like the other write  operations here it is only queued, and once it has run `GET api/2.0/migration/status` returns an empty result  and `GET api/2.0/migration/logs` answers 404, so download the log before calling it. A parse that is still  running is not affected - stop that with `POST api/2.0/migration/cancel` - and  `POST api/2.0/migration/finish` performs the same clean-up itself, which makes this call unnecessary after it.
         * @summary Clear migration
         * @param {*} [options] Override http request option.
         * REST API Reference for clearMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/clear-migration/
         * @throws {RequiredError}
         */
        clearMigration(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.clearMigration(options).then((request) => request(axios, basePath));
        },
        /**
         * Closes a completed import: it can send every user the import created the activation email they need before  they can sign in, and it then discards the job and the data uploaded for it. Call it once  `GET api/2.0/migration/status` reports `isCompleted` for the import; a DocSpace administrator is required, and  with `isSendWelcomeEmail` set to true the job must still be in the queue, so do not clear it first. That flag  decides what happens to the imported people: true mails the activation link to each of them who has not  activated their account yet and skips the ones that are already active, false ends the import quietly and  leaves inviting them for later. The call writes to the portal and is not idempotent - the emails go out again  on every call - while its second half repeats what `POST api/2.0/migration/clear` does, removing the finished  job and the uploaded backup and leaving everything already imported in place. It answers with an empty body,  after which `GET api/2.0/migration/status` returns an empty result and `GET api/2.0/migration/logs` answers  404, so download the log first.
         * @summary Finish migration
         * @param {MigrationApiFinishMigrationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for finishMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finish-migration/
         * @throws {RequiredError}
         */
        finishMigration(requestParameters: MigrationApiFinishMigrationRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.finishMigration(requestParameters.finishDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Downloads the log of the parse or import the portal currently holds - the step-by-step record behind the  numbers and the single error message of `GET api/2.0/migration/status`, and the place where the reason for a  skipped user or file is written. The portal has to hold such a job, started by  `POST api/2.0/migration/init/{migratorName}` or `POST api/2.0/migration/migrate` and not yet removed by  `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish`, otherwise the call answers 404; a DocSpace  administrator is required and the call is read-only and idempotent. The body is not JSON: it is  `text/plain; charset=UTF-8` sent as an attachment named `migration.log`, one line per step with the progress  it reported. Each job writes its own log, so this always returns the log of the job that  `GET api/2.0/migration/status` describes, and while that job runs the file keeps growing - a call made early  returns only the part written so far and may be repeated later for the rest.
         * @summary Get migration logs
         * @param {*} [options] Override http request option.
         * REST API Reference for getMigrationLogs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-migration-logs/
         * @throws {RequiredError}
         */
        getMigrationLogs(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getMigrationLogs(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns how far the parse or the import queued for this portal has got and, once it stopped, what it produced  - the one place where every other operation in this group reports what it did. Any of them may be polled from  here as soon as it returns; a DocSpace administrator is required and the call is read-only and idempotent.  `progress` is the share of the job that is done, from 0 to 100, and `isCompleted` turns true when the job  stopped whether it succeeded or not, so read `error` as well: it stays empty while nothing went wrong and  otherwise holds the message that ended the job. `parseResult` carries what the migrator has read so far -  after a parse pass the users, groups and unreadable archives to edit and post to  `POST api/2.0/migration/migrate`, and during an import also `successedUsers` and `failedUsers` - and its  `operation` field, `parse` or `migration`, tells the two stages apart. The result is empty with status 200  when the portal has no job at all, because none was ever started or because  `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish` has removed the last one; an empty answer is  therefore not an error. Line-by-line detail behind the numbers is in `GET api/2.0/migration/logs`.
         * @summary Get migration status
         * @param {*} [options] Override http request option.
         * REST API Reference for getMigrationStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-migration-status/
         * @throws {RequiredError}
         */
        getMigrationStatus(options?: RawAxiosRequestConfig): AxiosPromise<MigrationStatusWrapper> {
            return localVarFp.getMigrationStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the source products this installation can import a portal from, as the migrator names every other  operation in this group expects. Nothing has to be called first, a DocSpace administrator is required as  everywhere here, and the call is read-only and idempotent. The answer is a plain list of names such as  `GoogleWorkspace`, `Nextcloud` or `Workspace`, never localized and ordered as the migrators are registered;  pass one of them as `migratorName` to `POST api/2.0/migration/init/{migratorName}`, where the match ignores  case. The list depends on the installation rather than on the portal, so it does not change while the portal  runs, and a name that is not in it is not rejected by the operation that takes it - the queued job ends with  the failure reported in `error` of `GET api/2.0/migration/status`.
         * @summary Get available migrators
         * @param {*} [options] Override http request option.
         * REST API Reference for listMigrations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/list-migrations/
         * @throws {RequiredError}
         */
        listMigrations(options?: RawAxiosRequestConfig): AxiosPromise<STRINGArrayWrapper> {
            return localVarFp.listMigrations(options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the import itself: the users, the groups and the files selected in the request body are created on this  portal from the backup that the parse pass has read. Run `POST api/2.0/migration/init/{migratorName}` first  and wait for `isCompleted` in `GET api/2.0/migration/status`, then send `parseResult` from that answer back  here with `shouldImport` set on the users and groups to take and the `import...Files` flags set for the  content to copy. A DocSpace administrator is required, and importing a user as `DocSpaceAdmin` additionally  requires the caller to be the portal owner unless a user with that email is an administrator of this portal  already, otherwise the whole call is rejected with 403 before anything is imported. The job is queued and the  call answers with an empty body at once: watch `progress`, `successedUsers`, `failedUsers` and `error` in  `GET api/2.0/migration/status` and read what each step did from `GET api/2.0/migration/logs`. The import  writes to the portal and cannot be undone, and a repeat is no help: a call made while the job runs is ignored,  and once the job has ended the uploaded backup is deleted, so a new call has nothing to read until the archive  is uploaded and parsed again. When the import is done, close it with `POST api/2.0/migration/finish`, which can  also mail the imported users their activation link.
         * @summary Start migration
         * @param {MigrationApiStartMigrationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-migration/
         * @throws {RequiredError}
         */
        startMigration(requestParameters: MigrationApiStartMigrationRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.startMigration(requestParameters.migrationApiInfo, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a pass that reads the backup already uploaded for this portal with the migrator named in the path and  reports what it holds - the users, the users that carry no email address, the users that exist on this portal  already, the groups and the archives it could not open - so that the caller can choose what to import. Upload  the backup first: `migrationFileUpload.ashx?Init=true` opens a new upload folder and drops the previous one,  then every part of the archive is posted to the same handler with `Name` set to its file name; take  `migratorName` from `GET api/2.0/migration/list`. A DocSpace administrator is required. The call only queues  the job and answers at once with an empty body: poll `GET api/2.0/migration/status` until `isCompleted` is  true, then read what was found from `parseResult` and any failure from `error`. Nothing is imported here and  the portal is not changed - the parse result is the body to edit and send to  `POST api/2.0/migration/migrate`. A portal runs one job at a time, so a call made while another parse or  import is still running is ignored instead of reported, and a backup bigger than the portal\'s total storage  quota ends the job with an error rather than failing this call.
         * @summary Parse migration archive
         * @param {MigrationApiUploadAndInitializeMigrationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadAndInitializeMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-and-initialize-migration/
         * @throws {RequiredError}
         */
        uploadAndInitializeMigration(requestParameters: MigrationApiUploadAndInitializeMigrationRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.uploadAndInitializeMigration(requestParameters.migratorName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for finishMigration operation in MigrationApi.
 * @export
 * @interface MigrationApiFinishMigrationRequest
 */
export interface MigrationApiFinishMigrationRequest {
    /**
     * 
     * @type {FinishDto}
     * @memberof MigrationApiFinishMigration
     */
    readonly finishDto?: FinishDto
}

/**
 * Request parameters for startMigration operation in MigrationApi.
 * @export
 * @interface MigrationApiStartMigrationRequest
 */
export interface MigrationApiStartMigrationRequest {
    /**
     * 
     * @type {MigrationApiInfo}
     * @memberof MigrationApiStartMigration
     */
    readonly migrationApiInfo?: MigrationApiInfo
}

/**
 * Request parameters for uploadAndInitializeMigration operation in MigrationApi.
 * @export
 * @interface MigrationApiUploadAndInitializeMigrationRequest
 */
export interface MigrationApiUploadAndInitializeMigrationRequest {
    /**
     * The migrator that knows the format of the uploaded backup. It has to be one of the names  `GET api/2.0/migration/list` reports for this installation, spelled exactly as listed.
     * @type {string}
     * @memberof MigrationApiUploadAndInitializeMigration
     */
    readonly migratorName: string
}

/**
 * MigrationApi - object-oriented interface
 * @export
 * @class MigrationApi
 * @extends {BaseAPI}
 */
export class MigrationApi extends BaseAPI {
    /**
     * Stops the parse pass queued for this portal and deletes the backup uploaded for it - the way back from a wrong  archive or a wrong migrator name. Nothing has to be called first and a DocSpace administrator is required; the  request is only queued, so the parse ends shortly after the call returns and  `GET api/2.0/migration/status` stops reporting it. The call is destructive for the uploaded data: the whole  upload folder is removed and the backup has to be sent to `migrationFileUpload.ashx` again before a new parse.  It is idempotent - cancelling when nothing is running still answers 200 - and it undoes nothing that was  already written to the portal. Only the parse stage is stopped, the job whose `parseResult.operation` is  `parse`: an import started by `POST api/2.0/migration/migrate` keeps running, and a finished import is  discarded with `POST api/2.0/migration/clear` instead.
     * @summary Cancel migration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public cancelMigration(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).cancelMigration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Discards a finished import and deletes the data uploaded for it, freeing the portal for the next one. Call it  once `GET api/2.0/migration/status` reports `isCompleted` for a job whose `parseResult.operation` is  `migration`; a DocSpace administrator is required. Only the queued job and the temporary upload folder go -  the users, groups and files already imported stay in the portal - so the call destroys migration data alone,  and it is idempotent: clearing twice, or with nothing to clear, still answers 200. Like the other write  operations here it is only queued, and once it has run `GET api/2.0/migration/status` returns an empty result  and `GET api/2.0/migration/logs` answers 404, so download the log before calling it. A parse that is still  running is not affected - stop that with `POST api/2.0/migration/cancel` - and  `POST api/2.0/migration/finish` performs the same clean-up itself, which makes this call unnecessary after it.
     * @summary Clear migration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public clearMigration(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).clearMigration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Closes a completed import: it can send every user the import created the activation email they need before  they can sign in, and it then discards the job and the data uploaded for it. Call it once  `GET api/2.0/migration/status` reports `isCompleted` for the import; a DocSpace administrator is required, and  with `isSendWelcomeEmail` set to true the job must still be in the queue, so do not clear it first. That flag  decides what happens to the imported people: true mails the activation link to each of them who has not  activated their account yet and skips the ones that are already active, false ends the import quietly and  leaves inviting them for later. The call writes to the portal and is not idempotent - the emails go out again  on every call - while its second half repeats what `POST api/2.0/migration/clear` does, removing the finished  job and the uploaded backup and leaving everything already imported in place. It answers with an empty body,  after which `GET api/2.0/migration/status` returns an empty result and `GET api/2.0/migration/logs` answers  404, so download the log first.
     * @summary Finish migration
     * @param {MigrationApiFinishMigrationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public finishMigration(requestParameters: MigrationApiFinishMigrationRequest = {}, options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).finishMigration(requestParameters.finishDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Downloads the log of the parse or import the portal currently holds - the step-by-step record behind the  numbers and the single error message of `GET api/2.0/migration/status`, and the place where the reason for a  skipped user or file is written. The portal has to hold such a job, started by  `POST api/2.0/migration/init/{migratorName}` or `POST api/2.0/migration/migrate` and not yet removed by  `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish`, otherwise the call answers 404; a DocSpace  administrator is required and the call is read-only and idempotent. The body is not JSON: it is  `text/plain; charset=UTF-8` sent as an attachment named `migration.log`, one line per step with the progress  it reported. Each job writes its own log, so this always returns the log of the job that  `GET api/2.0/migration/status` describes, and while that job runs the file keeps growing - a call made early  returns only the part written so far and may be repeated later for the rest.
     * @summary Get migration logs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public getMigrationLogs(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).getMigrationLogs(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns how far the parse or the import queued for this portal has got and, once it stopped, what it produced  - the one place where every other operation in this group reports what it did. Any of them may be polled from  here as soon as it returns; a DocSpace administrator is required and the call is read-only and idempotent.  `progress` is the share of the job that is done, from 0 to 100, and `isCompleted` turns true when the job  stopped whether it succeeded or not, so read `error` as well: it stays empty while nothing went wrong and  otherwise holds the message that ended the job. `parseResult` carries what the migrator has read so far -  after a parse pass the users, groups and unreadable archives to edit and post to  `POST api/2.0/migration/migrate`, and during an import also `successedUsers` and `failedUsers` - and its  `operation` field, `parse` or `migration`, tells the two stages apart. The result is empty with status 200  when the portal has no job at all, because none was ever started or because  `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish` has removed the last one; an empty answer is  therefore not an error. Line-by-line detail behind the numbers is in `GET api/2.0/migration/logs`.
     * @summary Get migration status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public getMigrationStatus(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).getMigrationStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the source products this installation can import a portal from, as the migrator names every other  operation in this group expects. Nothing has to be called first, a DocSpace administrator is required as  everywhere here, and the call is read-only and idempotent. The answer is a plain list of names such as  `GoogleWorkspace`, `Nextcloud` or `Workspace`, never localized and ordered as the migrators are registered;  pass one of them as `migratorName` to `POST api/2.0/migration/init/{migratorName}`, where the match ignores  case. The list depends on the installation rather than on the portal, so it does not change while the portal  runs, and a name that is not in it is not rejected by the operation that takes it - the queued job ends with  the failure reported in `error` of `GET api/2.0/migration/status`.
     * @summary Get available migrators
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public listMigrations(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).listMigrations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the import itself: the users, the groups and the files selected in the request body are created on this  portal from the backup that the parse pass has read. Run `POST api/2.0/migration/init/{migratorName}` first  and wait for `isCompleted` in `GET api/2.0/migration/status`, then send `parseResult` from that answer back  here with `shouldImport` set on the users and groups to take and the `import...Files` flags set for the  content to copy. A DocSpace administrator is required, and importing a user as `DocSpaceAdmin` additionally  requires the caller to be the portal owner unless a user with that email is an administrator of this portal  already, otherwise the whole call is rejected with 403 before anything is imported. The job is queued and the  call answers with an empty body at once: watch `progress`, `successedUsers`, `failedUsers` and `error` in  `GET api/2.0/migration/status` and read what each step did from `GET api/2.0/migration/logs`. The import  writes to the portal and cannot be undone, and a repeat is no help: a call made while the job runs is ignored,  and once the job has ended the uploaded backup is deleted, so a new call has nothing to read until the archive  is uploaded and parsed again. When the import is done, close it with `POST api/2.0/migration/finish`, which can  also mail the imported users their activation link.
     * @summary Start migration
     * @param {MigrationApiStartMigrationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public startMigration(requestParameters: MigrationApiStartMigrationRequest = {}, options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).startMigration(requestParameters.migrationApiInfo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a pass that reads the backup already uploaded for this portal with the migrator named in the path and  reports what it holds - the users, the users that carry no email address, the users that exist on this portal  already, the groups and the archives it could not open - so that the caller can choose what to import. Upload  the backup first: `migrationFileUpload.ashx?Init=true` opens a new upload folder and drops the previous one,  then every part of the archive is posted to the same handler with `Name` set to its file name; take  `migratorName` from `GET api/2.0/migration/list`. A DocSpace administrator is required. The call only queues  the job and answers at once with an empty body: poll `GET api/2.0/migration/status` until `isCompleted` is  true, then read what was found from `parseResult` and any failure from `error`. Nothing is imported here and  the portal is not changed - the parse result is the body to edit and send to  `POST api/2.0/migration/migrate`. A portal runs one job at a time, so a call made while another parse or  import is still running is ignored instead of reported, and a backup bigger than the portal\'s total storage  quota ends the job with an error rather than failing this call.
     * @summary Parse migration archive
     * @param {MigrationApiUploadAndInitializeMigrationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public uploadAndInitializeMigration(requestParameters: MigrationApiUploadAndInitializeMigrationRequest, options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).uploadAndInitializeMigration(requestParameters.migratorName, options).then((request) => request(this.axios, this.basePath));
    }
}

