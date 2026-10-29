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
import type { AiErrorResponse } from '../../models';
// @ts-ignore
import type { AiMetaFill200Response } from '../../models';
// @ts-ignore
import type { AiMetaFillRequest } from '../../models';
// @ts-ignore
import type { AiMetaGenerate200Response } from '../../models';
// @ts-ignore
import type { AiMetaGenerate402Response } from '../../models';
// @ts-ignore
import type { AiMetaGenerateRequest } from '../../models';
/**
 * MetadataApi - axios parameter creator
 * @export
 */
export const MetadataApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Fills the metadata of one file from its text and writes the result. `kind` names the entry\'s table and `id` its integer identifier; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note for the model on what to pay attention to, passed as a hint, never as an instruction; `overwrite` (default false) also replaces the fields that already carry a value, otherwise only the empty ones are filled and the rest are reported as `already_set`; `dryRun` (default true) resolves the values but writes nothing, so the caller shows them for confirmation and saves the accepted ones itself; only an explicit `dryRun: false` writes, and it is meant for a caller that has already collected the user\'s confirmation. The fields are the entry\'s own: every field of the visible templates it carries, assigned or inherited through a cascade - a hidden template is skipped as the UI and the search skip it - and its existing custom fields - no field is created here, use `POST api/2.0/ai/meta/generate` and the Files metadata API for that. The text is the file itself, converted to plain text under the caller\'s rights and cut to the same budgets as the generate route. The model bound to `GenerateMeta` (`Default` when that slot is empty) runs once, without tools, and is told to answer null for a value the text does not state. Each value is then checked the way the client\'s info panel checks a typed value - an integer for a number, a calendar date for a date, one of the field\'s own options for a choice - and the ones that pass are written with `PUT api/2.0/files/metadata/{kind}/{id}/values` and `.../customFields`, so the caller needs the rights those routes need; a write the portal refuses is reported per field as `write_failed`, and the call fails with the portal\'s status only when nothing was written at all. The answer carries `dryRun` as it was applied, the entry\'s metadata after the write (or as it stands, with `dryRun`), the values written or proposed, the fields left empty with the reason for each, and the documents that were read.
         * @summary Fill metadata values
         * @param {AiMetaFillRequest} aiMetaFillRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiMetaFill operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-meta-fill/
         */
        aiMetaFill: async (aiMetaFillRequest: AiMetaFillRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiMetaFillRequest' is not null or undefined
            assertParamExists('aiMetaFill', 'aiMetaFillRequest', aiMetaFillRequest)

            const localVarPath = `/api/2.0/ai/meta/fill`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiMetaFillRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reads one file as text and asks the model bound to the `GenerateMeta` action - the `Default` slot when that action has no profile of its own - which custom metadata fields describe it, and what their values are. `kind` names the entry\'s table and `id` its integer identifier, the same way as `POST api/2.0/ai/meta/fill`; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note on the kind of fields the caller is interested in, which is passed to the model as a hint, never as an instruction. The text is the file itself, converted to plain text through the portal\'s own conversion (word-processing and presentation formats, pdf included, to txt; spreadsheets to csv), under the caller\'s rights, so a file the caller cannot read is skipped as `forbidden` rather than failing the call. Each document is cut at 40 000 characters and the whole set at 240 000, which `sources[].truncated` reports. The model runs once, without tools, and the answer is validated: field names are trimmed, deduplicated regardless of case and capped at 50, the portal\'s own limit for custom fields on one entry; each field carries the value the text supports as a string, or `null` when the text does not state one, since a custom field on the portal is text and cannot be saved empty. Nothing is written: the caller decides which fields to create and saves them through the Files metadata API.
         * @summary Generate metadata fields
         * @param {AiMetaGenerateRequest} aiMetaGenerateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiMetaGenerate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-meta-generate/
         */
        aiMetaGenerate: async (aiMetaGenerateRequest: AiMetaGenerateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiMetaGenerateRequest' is not null or undefined
            assertParamExists('aiMetaGenerate', 'aiMetaGenerateRequest', aiMetaGenerateRequest)

            const localVarPath = `/api/2.0/ai/meta/generate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aiMetaGenerateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetadataApi - functional programming interface
 * @export
 */
export const MetadataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetadataApiAxiosParamCreator(configuration)
    return {
        /**
         * Fills the metadata of one file from its text and writes the result. `kind` names the entry\'s table and `id` its integer identifier; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note for the model on what to pay attention to, passed as a hint, never as an instruction; `overwrite` (default false) also replaces the fields that already carry a value, otherwise only the empty ones are filled and the rest are reported as `already_set`; `dryRun` (default true) resolves the values but writes nothing, so the caller shows them for confirmation and saves the accepted ones itself; only an explicit `dryRun: false` writes, and it is meant for a caller that has already collected the user\'s confirmation. The fields are the entry\'s own: every field of the visible templates it carries, assigned or inherited through a cascade - a hidden template is skipped as the UI and the search skip it - and its existing custom fields - no field is created here, use `POST api/2.0/ai/meta/generate` and the Files metadata API for that. The text is the file itself, converted to plain text under the caller\'s rights and cut to the same budgets as the generate route. The model bound to `GenerateMeta` (`Default` when that slot is empty) runs once, without tools, and is told to answer null for a value the text does not state. Each value is then checked the way the client\'s info panel checks a typed value - an integer for a number, a calendar date for a date, one of the field\'s own options for a choice - and the ones that pass are written with `PUT api/2.0/files/metadata/{kind}/{id}/values` and `.../customFields`, so the caller needs the rights those routes need; a write the portal refuses is reported per field as `write_failed`, and the call fails with the portal\'s status only when nothing was written at all. The answer carries `dryRun` as it was applied, the entry\'s metadata after the write (or as it stands, with `dryRun`), the values written or proposed, the fields left empty with the reason for each, and the documents that were read.
         * @summary Fill metadata values
         * @param {AiMetaFillRequest} aiMetaFillRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiMetaFill operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-meta-fill/
         */
        async aiMetaFill(aiMetaFillRequest: AiMetaFillRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiMetaFill200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiMetaFill(aiMetaFillRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.aiMetaFill']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reads one file as text and asks the model bound to the `GenerateMeta` action - the `Default` slot when that action has no profile of its own - which custom metadata fields describe it, and what their values are. `kind` names the entry\'s table and `id` its integer identifier, the same way as `POST api/2.0/ai/meta/fill`; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note on the kind of fields the caller is interested in, which is passed to the model as a hint, never as an instruction. The text is the file itself, converted to plain text through the portal\'s own conversion (word-processing and presentation formats, pdf included, to txt; spreadsheets to csv), under the caller\'s rights, so a file the caller cannot read is skipped as `forbidden` rather than failing the call. Each document is cut at 40 000 characters and the whole set at 240 000, which `sources[].truncated` reports. The model runs once, without tools, and the answer is validated: field names are trimmed, deduplicated regardless of case and capped at 50, the portal\'s own limit for custom fields on one entry; each field carries the value the text supports as a string, or `null` when the text does not state one, since a custom field on the portal is text and cannot be saved empty. Nothing is written: the caller decides which fields to create and saves them through the Files metadata API.
         * @summary Generate metadata fields
         * @param {AiMetaGenerateRequest} aiMetaGenerateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiMetaGenerate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-meta-generate/
         */
        async aiMetaGenerate(aiMetaGenerateRequest: AiMetaGenerateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiMetaGenerate200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiMetaGenerate(aiMetaGenerateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetadataApi.aiMetaGenerate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MetadataApi - factory interface
 * @export
 */
export const MetadataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetadataApiFp(configuration)
    return {
        /**
         * Fills the metadata of one file from its text and writes the result. `kind` names the entry\'s table and `id` its integer identifier; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note for the model on what to pay attention to, passed as a hint, never as an instruction; `overwrite` (default false) also replaces the fields that already carry a value, otherwise only the empty ones are filled and the rest are reported as `already_set`; `dryRun` (default true) resolves the values but writes nothing, so the caller shows them for confirmation and saves the accepted ones itself; only an explicit `dryRun: false` writes, and it is meant for a caller that has already collected the user\'s confirmation. The fields are the entry\'s own: every field of the visible templates it carries, assigned or inherited through a cascade - a hidden template is skipped as the UI and the search skip it - and its existing custom fields - no field is created here, use `POST api/2.0/ai/meta/generate` and the Files metadata API for that. The text is the file itself, converted to plain text under the caller\'s rights and cut to the same budgets as the generate route. The model bound to `GenerateMeta` (`Default` when that slot is empty) runs once, without tools, and is told to answer null for a value the text does not state. Each value is then checked the way the client\'s info panel checks a typed value - an integer for a number, a calendar date for a date, one of the field\'s own options for a choice - and the ones that pass are written with `PUT api/2.0/files/metadata/{kind}/{id}/values` and `.../customFields`, so the caller needs the rights those routes need; a write the portal refuses is reported per field as `write_failed`, and the call fails with the portal\'s status only when nothing was written at all. The answer carries `dryRun` as it was applied, the entry\'s metadata after the write (or as it stands, with `dryRun`), the values written or proposed, the fields left empty with the reason for each, and the documents that were read.
         * @summary Fill metadata values
         * @param {MetadataApiAiMetaFillRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiMetaFill operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-meta-fill/
         * @throws {RequiredError}
         */
        aiMetaFill(requestParameters: MetadataApiAiMetaFillRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiMetaFill200Response> {
            return localVarFp.aiMetaFill(requestParameters.aiMetaFillRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Reads one file as text and asks the model bound to the `GenerateMeta` action - the `Default` slot when that action has no profile of its own - which custom metadata fields describe it, and what their values are. `kind` names the entry\'s table and `id` its integer identifier, the same way as `POST api/2.0/ai/meta/fill`; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note on the kind of fields the caller is interested in, which is passed to the model as a hint, never as an instruction. The text is the file itself, converted to plain text through the portal\'s own conversion (word-processing and presentation formats, pdf included, to txt; spreadsheets to csv), under the caller\'s rights, so a file the caller cannot read is skipped as `forbidden` rather than failing the call. Each document is cut at 40 000 characters and the whole set at 240 000, which `sources[].truncated` reports. The model runs once, without tools, and the answer is validated: field names are trimmed, deduplicated regardless of case and capped at 50, the portal\'s own limit for custom fields on one entry; each field carries the value the text supports as a string, or `null` when the text does not state one, since a custom field on the portal is text and cannot be saved empty. Nothing is written: the caller decides which fields to create and saves them through the Files metadata API.
         * @summary Generate metadata fields
         * @param {MetadataApiAiMetaGenerateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiMetaGenerate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-meta-generate/
         * @throws {RequiredError}
         */
        aiMetaGenerate(requestParameters: MetadataApiAiMetaGenerateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiMetaGenerate200Response> {
            return localVarFp.aiMetaGenerate(requestParameters.aiMetaGenerateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiMetaFill operation in MetadataApi.
 * @export
 * @interface MetadataApiAiMetaFillRequest
 */
export interface MetadataApiAiMetaFillRequest {
    /**
     * 
     * @type {AiMetaFillRequest}
     * @memberof MetadataApiAiMetaFill
     */
    readonly aiMetaFillRequest: AiMetaFillRequest
}

/**
 * Request parameters for aiMetaGenerate operation in MetadataApi.
 * @export
 * @interface MetadataApiAiMetaGenerateRequest
 */
export interface MetadataApiAiMetaGenerateRequest {
    /**
     * 
     * @type {AiMetaGenerateRequest}
     * @memberof MetadataApiAiMetaGenerate
     */
    readonly aiMetaGenerateRequest: AiMetaGenerateRequest
}

/**
 * MetadataApi - object-oriented interface
 * @export
 * @class MetadataApi
 * @extends {BaseAPI}
 */
export class MetadataApi extends BaseAPI {
    /**
     * Fills the metadata of one file from its text and writes the result. `kind` names the entry\'s table and `id` its integer identifier; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note for the model on what to pay attention to, passed as a hint, never as an instruction; `overwrite` (default false) also replaces the fields that already carry a value, otherwise only the empty ones are filled and the rest are reported as `already_set`; `dryRun` (default true) resolves the values but writes nothing, so the caller shows them for confirmation and saves the accepted ones itself; only an explicit `dryRun: false` writes, and it is meant for a caller that has already collected the user\'s confirmation. The fields are the entry\'s own: every field of the visible templates it carries, assigned or inherited through a cascade - a hidden template is skipped as the UI and the search skip it - and its existing custom fields - no field is created here, use `POST api/2.0/ai/meta/generate` and the Files metadata API for that. The text is the file itself, converted to plain text under the caller\'s rights and cut to the same budgets as the generate route. The model bound to `GenerateMeta` (`Default` when that slot is empty) runs once, without tools, and is told to answer null for a value the text does not state. Each value is then checked the way the client\'s info panel checks a typed value - an integer for a number, a calendar date for a date, one of the field\'s own options for a choice - and the ones that pass are written with `PUT api/2.0/files/metadata/{kind}/{id}/values` and `.../customFields`, so the caller needs the rights those routes need; a write the portal refuses is reported per field as `write_failed`, and the call fails with the portal\'s status only when nothing was written at all. The answer carries `dryRun` as it was applied, the entry\'s metadata after the write (or as it stands, with `dryRun`), the values written or proposed, the fields left empty with the reason for each, and the documents that were read.
     * @summary Fill metadata values
     * @param {AIMetadataApiAiMetaFillRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public aiMetaFill(requestParameters: MetadataApiAiMetaFillRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).aiMetaFill(requestParameters.aiMetaFillRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reads one file as text and asks the model bound to the `GenerateMeta` action - the `Default` slot when that action has no profile of its own - which custom metadata fields describe it, and what their values are. `kind` names the entry\'s table and `id` its integer identifier, the same way as `POST api/2.0/ai/meta/fill`; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note on the kind of fields the caller is interested in, which is passed to the model as a hint, never as an instruction. The text is the file itself, converted to plain text through the portal\'s own conversion (word-processing and presentation formats, pdf included, to txt; spreadsheets to csv), under the caller\'s rights, so a file the caller cannot read is skipped as `forbidden` rather than failing the call. Each document is cut at 40 000 characters and the whole set at 240 000, which `sources[].truncated` reports. The model runs once, without tools, and the answer is validated: field names are trimmed, deduplicated regardless of case and capped at 50, the portal\'s own limit for custom fields on one entry; each field carries the value the text supports as a string, or `null` when the text does not state one, since a custom field on the portal is text and cannot be saved empty. Nothing is written: the caller decides which fields to create and saves them through the Files metadata API.
     * @summary Generate metadata fields
     * @param {AIMetadataApiAiMetaGenerateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    public aiMetaGenerate(requestParameters: MetadataApiAiMetaGenerateRequest, options?: RawAxiosRequestConfig) {
        return MetadataApiFp(this.configuration).aiMetaGenerate(requestParameters.aiMetaGenerateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

