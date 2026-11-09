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
import type { AiMetaGenerate402Response } from '../../models';
// @ts-ignore
import type { AiSkillsGenerate200Response } from '../../models';
// @ts-ignore
import type { AiSkillsGenerateRequest } from '../../models';
/**
 * SkillsApi - axios parameter creator
 * @export
 */
export const SkillsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Writes the text of one skill from a title and the caller\'s description of the skill they need, for an Instructions room, without saving it: the caller shows the text for review and saves the version the user accepts as `<name>.md` through `POST api/2.0/files/{folderId}/insert`, where the Files service validates the frontmatter. `destId` is the integer id of the Instructions room, checked before the model runs: the caller has to be able to create files in it, and any other folder answers 400. `title` becomes the skill\'s `name`: it is lower-cased and every run of characters other than letters and digits is folded into one hyphen, so `Sales report` becomes `sales-report`. `description` is a specification of the skill, passed to the model as data, never as an instruction. The model bound to the `Chat` action - the `Default` slot when that action has no profile of its own - runs once, without tools, and writes the description and the body; the frontmatter is then rebuilt here, with the description flattened to one line, stripped of tags and cut to 1 024 characters, so the text as returned always passes the Files service\'s skill validation. The answer carries the skill\'s name and the whole file, frontmatter included.
         * @summary Generate a skill
         * @param {AiSkillsGenerateRequest} aiSkillsGenerateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSkillsGenerate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-skills-generate/
         */
        aiSkillsGenerate: async (aiSkillsGenerateRequest: AiSkillsGenerateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiSkillsGenerateRequest' is not null or undefined
            assertParamExists('aiSkillsGenerate', 'aiSkillsGenerateRequest', aiSkillsGenerateRequest)

            const localVarPath = `/api/2.0/ai/skills/generate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(aiSkillsGenerateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SkillsApi - functional programming interface
 * @export
 */
export const SkillsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SkillsApiAxiosParamCreator(configuration)
    return {
        /**
         * Writes the text of one skill from a title and the caller\'s description of the skill they need, for an Instructions room, without saving it: the caller shows the text for review and saves the version the user accepts as `<name>.md` through `POST api/2.0/files/{folderId}/insert`, where the Files service validates the frontmatter. `destId` is the integer id of the Instructions room, checked before the model runs: the caller has to be able to create files in it, and any other folder answers 400. `title` becomes the skill\'s `name`: it is lower-cased and every run of characters other than letters and digits is folded into one hyphen, so `Sales report` becomes `sales-report`. `description` is a specification of the skill, passed to the model as data, never as an instruction. The model bound to the `Chat` action - the `Default` slot when that action has no profile of its own - runs once, without tools, and writes the description and the body; the frontmatter is then rebuilt here, with the description flattened to one line, stripped of tags and cut to 1 024 characters, so the text as returned always passes the Files service\'s skill validation. The answer carries the skill\'s name and the whole file, frontmatter included.
         * @summary Generate a skill
         * @param {AiSkillsGenerateRequest} aiSkillsGenerateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for aiSkillsGenerate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-skills-generate/
         */
        async aiSkillsGenerate(aiSkillsGenerateRequest: AiSkillsGenerateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AiSkillsGenerate200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aiSkillsGenerate(aiSkillsGenerateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SkillsApi.aiSkillsGenerate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SkillsApi - factory interface
 * @export
 */
export const SkillsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SkillsApiFp(configuration)
    return {
        /**
         * Writes the text of one skill from a title and the caller\'s description of the skill they need, for an Instructions room, without saving it: the caller shows the text for review and saves the version the user accepts as `<name>.md` through `POST api/2.0/files/{folderId}/insert`, where the Files service validates the frontmatter. `destId` is the integer id of the Instructions room, checked before the model runs: the caller has to be able to create files in it, and any other folder answers 400. `title` becomes the skill\'s `name`: it is lower-cased and every run of characters other than letters and digits is folded into one hyphen, so `Sales report` becomes `sales-report`. `description` is a specification of the skill, passed to the model as data, never as an instruction. The model bound to the `Chat` action - the `Default` slot when that action has no profile of its own - runs once, without tools, and writes the description and the body; the frontmatter is then rebuilt here, with the description flattened to one line, stripped of tags and cut to 1 024 characters, so the text as returned always passes the Files service\'s skill validation. The answer carries the skill\'s name and the whole file, frontmatter included.
         * @summary Generate a skill
         * @param {SkillsApiAiSkillsGenerateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for aiSkillsGenerate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-skills-generate/
         * @throws {RequiredError}
         */
        aiSkillsGenerate(requestParameters: SkillsApiAiSkillsGenerateRequest, options?: RawAxiosRequestConfig): AxiosPromise<AiSkillsGenerate200Response> {
            return localVarFp.aiSkillsGenerate(requestParameters.aiSkillsGenerateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for aiSkillsGenerate operation in SkillsApi.
 * @export
 * @interface SkillsApiAiSkillsGenerateRequest
 */
export interface SkillsApiAiSkillsGenerateRequest {
    /**
     * 
     * @type {AiSkillsGenerateRequest}
     * @memberof SkillsApiAiSkillsGenerate
     */
    readonly aiSkillsGenerateRequest: AiSkillsGenerateRequest
}

/**
 * SkillsApi - object-oriented interface
 * @export
 * @class SkillsApi
 * @extends {BaseAPI}
 */
export class SkillsApi extends BaseAPI {
    /**
     * Writes the text of one skill from a title and the caller\'s description of the skill they need, for an Instructions room, without saving it: the caller shows the text for review and saves the version the user accepts as `<name>.md` through `POST api/2.0/files/{folderId}/insert`, where the Files service validates the frontmatter. `destId` is the integer id of the Instructions room, checked before the model runs: the caller has to be able to create files in it, and any other folder answers 400. `title` becomes the skill\'s `name`: it is lower-cased and every run of characters other than letters and digits is folded into one hyphen, so `Sales report` becomes `sales-report`. `description` is a specification of the skill, passed to the model as data, never as an instruction. The model bound to the `Chat` action - the `Default` slot when that action has no profile of its own - runs once, without tools, and writes the description and the body; the frontmatter is then rebuilt here, with the description flattened to one line, stripped of tags and cut to 1 024 characters, so the text as returned always passes the Files service\'s skill validation. The answer carries the skill\'s name and the whole file, frontmatter included.
     * @summary Generate a skill
     * @param {AISkillsApiAiSkillsGenerateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SkillsApi
     */
    public aiSkillsGenerate(requestParameters: SkillsApiAiSkillsGenerateRequest, options?: RawAxiosRequestConfig) {
        return SkillsApiFp(this.configuration).aiSkillsGenerate(requestParameters.aiSkillsGenerateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

