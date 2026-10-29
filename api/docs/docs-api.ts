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
import type { ConvertFileRequestDto } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { FileOperationWrapper } from '../../models';
// @ts-ignore
import type { FileWrapper } from '../../models';
// @ts-ignore
import type { RunBuilderScriptRequestDto } from '../../models';
/**
 * DocsApi - axios parameter creator
 * @export
 */
export const DocsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Converts a portal file into another format and saves the result as a new file, answering with that file. The  caller needs read access to a source that may be copied and the right to create files in `folderId`; without  `folderId` the result goes to the My documents section of the caller, so a guest, who has none, has to pass  it. A file in a private room or in a room with a watermark is not converted, as it would leave the room without  its protection, and no result is saved into such a room. `outputtype` is the only parameter a plain  conversion needs; the other fields are passed to the document service under its own names, while the source  format, name and cache key are taken from the file. The call is mutating and not idempotent: the source is kept,  and each call adds another file under a free name. It answers once the conversion is done, so a large file keeps  the request open. Only files stored in the portal itself are accepted. To convert while copying into another  folder, a third-party one included, use `POST api/2.0/files/file/{fileId}/copyas`; to convert into the portal\'s  own editable format beside the source, use `PUT api/2.0/files/file/{fileId}/checkconversion`. A missing or  unsupported `outputtype` is refused with 400, and so is a source the document service rejects: a wrong or  missing `password`, or a file too large to convert; retrying the same request will not help. Missing access or a  protected room is refused with 403 and an unknown file or folder with 404, both before any conversion starts. A  result that does not fit the storage quota of the portal, the room or the caller is refused with 402. A  conversion the document service fails is answered with 502: the service may be down or the file damaged; a retry  helps only in the first case.  Raises the `file.created` webhook.
         * @summary Convert a file
         * @param {ConvertFileRequestDto} [convertFileRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for convertFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/convert-file/
         */
        convertFile: async (convertFileRequestDto?: ConvertFileRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/docs/converter`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(convertFileRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues a background run of a document builder script and answers with the operation just started. The script  names portal files by identifier - `builder.OpenFile(1234)` - where the document builder documentation writes  an address; only portal files can be opened, and none from a private room or a room with a watermark, nor is a  result saved into such a room. A script may call OpenFile and SaveFile at most 20 times each, counting every  call written in it. The caller needs edit access to every file the script opens, which may also be copied, and  to each file `outputs` replaces, which must not be locked or open in an editor, and the right to create files in  each folder a result is saved into. Each file the script saves goes where `outputs` says, keyed by the name  given to SaveFile: `fileId` stores it as a new version of that file, `folderId` as a new file there; an unlisted  file goes to `folderId` or to the folder of the opened file. Each entry of `outputs` names exactly one of  `fileId` and `folderId`; `title` goes only with `folderId`, since a replaced file keeps its title, and a result  stored over `fileId` has to be in that file\'s format. The call is not idempotent: each call is a new run. Poll  `GET api/2.0/files/fileops` with the returned `id` until the operation reports `finished`: `files` then lists  the saved files, a replaced one with its new version, including those saved before a failure, and `error` the  reason a failed build gave. A build that has not finished after 10 minutes is given up and reported as failed. A  caller runs one script at a time: a new request while an earlier one is queued or running is refused with 403,  so wait for `finished` before starting the next. For a plain format change use `POST api/2.0/docs/converter`.  What can be refused in advance fails at once with 400, 403 or 404.  Raises the `file.created` and `file.updated` webhooks for each file the queued script saves: `file.created` for a new file, `file.updated` for an existing one.
         * @summary Run a document builder script
         * @param {RunBuilderScriptRequestDto} [runBuilderScriptRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for runBuilderScript operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/run-builder-script/
         */
        runBuilderScript: async (runBuilderScriptRequestDto?: RunBuilderScriptRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/docs/builder`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(runBuilderScriptRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocsApi - functional programming interface
 * @export
 */
export const DocsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DocsApiAxiosParamCreator(configuration)
    return {
        /**
         * Converts a portal file into another format and saves the result as a new file, answering with that file. The  caller needs read access to a source that may be copied and the right to create files in `folderId`; without  `folderId` the result goes to the My documents section of the caller, so a guest, who has none, has to pass  it. A file in a private room or in a room with a watermark is not converted, as it would leave the room without  its protection, and no result is saved into such a room. `outputtype` is the only parameter a plain  conversion needs; the other fields are passed to the document service under its own names, while the source  format, name and cache key are taken from the file. The call is mutating and not idempotent: the source is kept,  and each call adds another file under a free name. It answers once the conversion is done, so a large file keeps  the request open. Only files stored in the portal itself are accepted. To convert while copying into another  folder, a third-party one included, use `POST api/2.0/files/file/{fileId}/copyas`; to convert into the portal\'s  own editable format beside the source, use `PUT api/2.0/files/file/{fileId}/checkconversion`. A missing or  unsupported `outputtype` is refused with 400, and so is a source the document service rejects: a wrong or  missing `password`, or a file too large to convert; retrying the same request will not help. Missing access or a  protected room is refused with 403 and an unknown file or folder with 404, both before any conversion starts. A  result that does not fit the storage quota of the portal, the room or the caller is refused with 402. A  conversion the document service fails is answered with 502: the service may be down or the file damaged; a retry  helps only in the first case.  Raises the `file.created` webhook.
         * @summary Convert a file
         * @param {ConvertFileRequestDto} [convertFileRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for convertFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/convert-file/
         */
        async convertFile(convertFileRequestDto?: ConvertFileRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.convertFile(convertFileRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsApi.convertFile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background run of a document builder script and answers with the operation just started. The script  names portal files by identifier - `builder.OpenFile(1234)` - where the document builder documentation writes  an address; only portal files can be opened, and none from a private room or a room with a watermark, nor is a  result saved into such a room. A script may call OpenFile and SaveFile at most 20 times each, counting every  call written in it. The caller needs edit access to every file the script opens, which may also be copied, and  to each file `outputs` replaces, which must not be locked or open in an editor, and the right to create files in  each folder a result is saved into. Each file the script saves goes where `outputs` says, keyed by the name  given to SaveFile: `fileId` stores it as a new version of that file, `folderId` as a new file there; an unlisted  file goes to `folderId` or to the folder of the opened file. Each entry of `outputs` names exactly one of  `fileId` and `folderId`; `title` goes only with `folderId`, since a replaced file keeps its title, and a result  stored over `fileId` has to be in that file\'s format. The call is not idempotent: each call is a new run. Poll  `GET api/2.0/files/fileops` with the returned `id` until the operation reports `finished`: `files` then lists  the saved files, a replaced one with its new version, including those saved before a failure, and `error` the  reason a failed build gave. A build that has not finished after 10 minutes is given up and reported as failed. A  caller runs one script at a time: a new request while an earlier one is queued or running is refused with 403,  so wait for `finished` before starting the next. For a plain format change use `POST api/2.0/docs/converter`.  What can be refused in advance fails at once with 400, 403 or 404.  Raises the `file.created` and `file.updated` webhooks for each file the queued script saves: `file.created` for a new file, `file.updated` for an existing one.
         * @summary Run a document builder script
         * @param {RunBuilderScriptRequestDto} [runBuilderScriptRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for runBuilderScript operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/run-builder-script/
         */
        async runBuilderScript(runBuilderScriptRequestDto?: RunBuilderScriptRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.runBuilderScript(runBuilderScriptRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DocsApi.runBuilderScript']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DocsApi - factory interface
 * @export
 */
export const DocsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocsApiFp(configuration)
    return {
        /**
         * Converts a portal file into another format and saves the result as a new file, answering with that file. The  caller needs read access to a source that may be copied and the right to create files in `folderId`; without  `folderId` the result goes to the My documents section of the caller, so a guest, who has none, has to pass  it. A file in a private room or in a room with a watermark is not converted, as it would leave the room without  its protection, and no result is saved into such a room. `outputtype` is the only parameter a plain  conversion needs; the other fields are passed to the document service under its own names, while the source  format, name and cache key are taken from the file. The call is mutating and not idempotent: the source is kept,  and each call adds another file under a free name. It answers once the conversion is done, so a large file keeps  the request open. Only files stored in the portal itself are accepted. To convert while copying into another  folder, a third-party one included, use `POST api/2.0/files/file/{fileId}/copyas`; to convert into the portal\'s  own editable format beside the source, use `PUT api/2.0/files/file/{fileId}/checkconversion`. A missing or  unsupported `outputtype` is refused with 400, and so is a source the document service rejects: a wrong or  missing `password`, or a file too large to convert; retrying the same request will not help. Missing access or a  protected room is refused with 403 and an unknown file or folder with 404, both before any conversion starts. A  result that does not fit the storage quota of the portal, the room or the caller is refused with 402. A  conversion the document service fails is answered with 502: the service may be down or the file damaged; a retry  helps only in the first case.  Raises the `file.created` webhook.
         * @summary Convert a file
         * @param {DocsApiConvertFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for convertFile operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/convert-file/
         * @throws {RequiredError}
         */
        convertFile(requestParameters: DocsApiConvertFileRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileWrapper> {
            return localVarFp.convertFile(requestParameters.convertFileRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background run of a document builder script and answers with the operation just started. The script  names portal files by identifier - `builder.OpenFile(1234)` - where the document builder documentation writes  an address; only portal files can be opened, and none from a private room or a room with a watermark, nor is a  result saved into such a room. A script may call OpenFile and SaveFile at most 20 times each, counting every  call written in it. The caller needs edit access to every file the script opens, which may also be copied, and  to each file `outputs` replaces, which must not be locked or open in an editor, and the right to create files in  each folder a result is saved into. Each file the script saves goes where `outputs` says, keyed by the name  given to SaveFile: `fileId` stores it as a new version of that file, `folderId` as a new file there; an unlisted  file goes to `folderId` or to the folder of the opened file. Each entry of `outputs` names exactly one of  `fileId` and `folderId`; `title` goes only with `folderId`, since a replaced file keeps its title, and a result  stored over `fileId` has to be in that file\'s format. The call is not idempotent: each call is a new run. Poll  `GET api/2.0/files/fileops` with the returned `id` until the operation reports `finished`: `files` then lists  the saved files, a replaced one with its new version, including those saved before a failure, and `error` the  reason a failed build gave. A build that has not finished after 10 minutes is given up and reported as failed. A  caller runs one script at a time: a new request while an earlier one is queued or running is refused with 403,  so wait for `finished` before starting the next. For a plain format change use `POST api/2.0/docs/converter`.  What can be refused in advance fails at once with 400, 403 or 404.  Raises the `file.created` and `file.updated` webhooks for each file the queued script saves: `file.created` for a new file, `file.updated` for an existing one.
         * @summary Run a document builder script
         * @param {DocsApiRunBuilderScriptRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for runBuilderScript operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/run-builder-script/
         * @throws {RequiredError}
         */
        runBuilderScript(requestParameters: DocsApiRunBuilderScriptRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.runBuilderScript(requestParameters.runBuilderScriptRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for convertFile operation in DocsApi.
 * @export
 * @interface DocsApiConvertFileRequest
 */
export interface DocsApiConvertFileRequest {
    /**
     * 
     * @type {ConvertFileRequestDto}
     * @memberof DocsApiConvertFile
     */
    readonly convertFileRequestDto?: ConvertFileRequestDto
}

/**
 * Request parameters for runBuilderScript operation in DocsApi.
 * @export
 * @interface DocsApiRunBuilderScriptRequest
 */
export interface DocsApiRunBuilderScriptRequest {
    /**
     * 
     * @type {RunBuilderScriptRequestDto}
     * @memberof DocsApiRunBuilderScript
     */
    readonly runBuilderScriptRequestDto?: RunBuilderScriptRequestDto
}

/**
 * DocsApi - object-oriented interface
 * @export
 * @class DocsApi
 * @extends {BaseAPI}
 */
export class DocsApi extends BaseAPI {
    /**
     * Converts a portal file into another format and saves the result as a new file, answering with that file. The  caller needs read access to a source that may be copied and the right to create files in `folderId`; without  `folderId` the result goes to the My documents section of the caller, so a guest, who has none, has to pass  it. A file in a private room or in a room with a watermark is not converted, as it would leave the room without  its protection, and no result is saved into such a room. `outputtype` is the only parameter a plain  conversion needs; the other fields are passed to the document service under its own names, while the source  format, name and cache key are taken from the file. The call is mutating and not idempotent: the source is kept,  and each call adds another file under a free name. It answers once the conversion is done, so a large file keeps  the request open. Only files stored in the portal itself are accepted. To convert while copying into another  folder, a third-party one included, use `POST api/2.0/files/file/{fileId}/copyas`; to convert into the portal\'s  own editable format beside the source, use `PUT api/2.0/files/file/{fileId}/checkconversion`. A missing or  unsupported `outputtype` is refused with 400, and so is a source the document service rejects: a wrong or  missing `password`, or a file too large to convert; retrying the same request will not help. Missing access or a  protected room is refused with 403 and an unknown file or folder with 404, both before any conversion starts. A  result that does not fit the storage quota of the portal, the room or the caller is refused with 402. A  conversion the document service fails is answered with 502: the service may be down or the file damaged; a retry  helps only in the first case.  Raises the `file.created` webhook.
     * @summary Convert a file
     * @param {DocsApiConvertFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApi
     */
    public convertFile(requestParameters: DocsApiConvertFileRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsApiFp(this.configuration).convertFile(requestParameters.convertFileRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background run of a document builder script and answers with the operation just started. The script  names portal files by identifier - `builder.OpenFile(1234)` - where the document builder documentation writes  an address; only portal files can be opened, and none from a private room or a room with a watermark, nor is a  result saved into such a room. A script may call OpenFile and SaveFile at most 20 times each, counting every  call written in it. The caller needs edit access to every file the script opens, which may also be copied, and  to each file `outputs` replaces, which must not be locked or open in an editor, and the right to create files in  each folder a result is saved into. Each file the script saves goes where `outputs` says, keyed by the name  given to SaveFile: `fileId` stores it as a new version of that file, `folderId` as a new file there; an unlisted  file goes to `folderId` or to the folder of the opened file. Each entry of `outputs` names exactly one of  `fileId` and `folderId`; `title` goes only with `folderId`, since a replaced file keeps its title, and a result  stored over `fileId` has to be in that file\'s format. The call is not idempotent: each call is a new run. Poll  `GET api/2.0/files/fileops` with the returned `id` until the operation reports `finished`: `files` then lists  the saved files, a replaced one with its new version, including those saved before a failure, and `error` the  reason a failed build gave. A build that has not finished after 10 minutes is given up and reported as failed. A  caller runs one script at a time: a new request while an earlier one is queued or running is refused with 403,  so wait for `finished` before starting the next. For a plain format change use `POST api/2.0/docs/converter`.  What can be refused in advance fails at once with 400, 403 or 404.  Raises the `file.created` and `file.updated` webhooks for each file the queued script saves: `file.created` for a new file, `file.updated` for an existing one.
     * @summary Run a document builder script
     * @param {DocsApiRunBuilderScriptRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocsApi
     */
    public runBuilderScript(requestParameters: DocsApiRunBuilderScriptRequest = {}, options?: RawAxiosRequestConfig) {
        return DocsApiFp(this.configuration).runBuilderScript(requestParameters.runBuilderScriptRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

