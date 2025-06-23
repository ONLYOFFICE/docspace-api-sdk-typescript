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
         * Cancels the migration.
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
         * Clears the migration.
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
         * Finishes the migration process.
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
         * Returns the migration logs.
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
         * Returns the migration status.
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
         * Returns a list of available migrations.
         * @summary Get migrations
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
         * Starts the migration process.
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
         * Uploads and initializes a migration with a migrator name specified in the request.
         * @summary Upload and initialize migration
         * @param {string} migratorName The migrator name extracted from the route parameters.
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
         * Cancels the migration.
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
         * Clears the migration.
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
         * Finishes the migration process.
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
         * Returns the migration logs.
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
         * Returns the migration status.
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
         * Returns a list of available migrations.
         * @summary Get migrations
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
         * Starts the migration process.
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
         * Uploads and initializes a migration with a migrator name specified in the request.
         * @summary Upload and initialize migration
         * @param {string} migratorName The migrator name extracted from the route parameters.
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
         * Cancels the migration.
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
         * Clears the migration.
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
         * Finishes the migration process.
         * @summary Finish migration
         * @param {FinishDto} [finishDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for finishMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/finish-migration/
         * @throws {RequiredError}
         */
        finishMigration(finishDto?: FinishDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.finishMigration(finishDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the migration logs.
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
         * Returns the migration status.
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
         * Returns a list of available migrations.
         * @summary Get migrations
         * @param {*} [options] Override http request option.
         * REST API Reference for listMigrations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/list-migrations/
         * @throws {RequiredError}
         */
        listMigrations(options?: RawAxiosRequestConfig): AxiosPromise<STRINGArrayWrapper> {
            return localVarFp.listMigrations(options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the migration process.
         * @summary Start migration
         * @param {MigrationApiInfo} [migrationApiInfo] 
         * @param {*} [options] Override http request option.
         * REST API Reference for startMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-migration/
         * @throws {RequiredError}
         */
        startMigration(migrationApiInfo?: MigrationApiInfo, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.startMigration(migrationApiInfo, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads and initializes a migration with a migrator name specified in the request.
         * @summary Upload and initialize migration
         * @param {string} migratorName The migrator name extracted from the route parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadAndInitializeMigration operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-and-initialize-migration/
         * @throws {RequiredError}
         */
        uploadAndInitializeMigration(migratorName: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.uploadAndInitializeMigration(migratorName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MigrationApi - object-oriented interface
 * @export
 * @class MigrationApi
 * @extends {BaseAPI}
 */
export class MigrationApi extends BaseAPI {
    /**
     * Cancels the migration.
     * @summary Cancel migration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public cancelMigration(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).cancelMigration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Clears the migration.
     * @summary Clear migration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public clearMigration(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).clearMigration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes the migration process.
     * @summary Finish migration
     * @param {FinishDto} [finishDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public finishMigration(finishDto?: FinishDto, options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).finishMigration(finishDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the migration logs.
     * @summary Get migration logs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public getMigrationLogs(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).getMigrationLogs(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the migration status.
     * @summary Get migration status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public getMigrationStatus(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).getMigrationStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of available migrations.
     * @summary Get migrations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public listMigrations(options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).listMigrations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the migration process.
     * @summary Start migration
     * @param {MigrationApiInfo} [migrationApiInfo] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public startMigration(migrationApiInfo?: MigrationApiInfo, options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).startMigration(migrationApiInfo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads and initializes a migration with a migrator name specified in the request.
     * @summary Upload and initialize migration
     * @param {string} migratorName The migrator name extracted from the route parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApi
     */
    public uploadAndInitializeMigration(migratorName: string, options?: RawAxiosRequestConfig) {
        return MigrationApiFp(this.configuration).uploadAndInitializeMigration(migratorName, options).then((request) => request(this.axios, this.basePath));
    }
}

