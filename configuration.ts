/* tslint:disable */
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
interface AWSv4Configuration {
  options?: {
    region?: string
    service?: string
  }
  credentials?: {
    accessKeyId?: string
    secretAccessKey?: string,
    sessionToken?: string
  }
}

export interface ConfigurationParameters {
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    username?: string;
    password?: string;
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    awsv4?: AWSv4Configuration;
    basePath?: string;
    serverIndex?: number;
    baseOptions?: any;
    formDataCtor?: new () => any;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     */
    apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
    /**
     * parameter for basic security
     */
    username?: string;
    /**
     * parameter for basic security
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
     * parameter for aws4 signature security
     * @param {Object} AWS4Signature - AWS4 Signature security
     * @param {string} options.region - aws region
     * @param {string} options.service - name of the service.
     * @param {string} credentials.accessKeyId - aws access key id
     * @param {string} credentials.secretAccessKey - aws access key
     * @param {string} credentials.sessionToken - aws session token
     * @memberof Configuration
     */
    awsv4?: AWSv4Configuration;
    /**
     * override base path
     */
    basePath?: string;
    /**
     * override server index
     */
    serverIndex?: number;
    /**
     * base options for axios calls
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;

    constructor(param: ConfigurationParameters = {}) {
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.awsv4 = param.awsv4;
        this.basePath = param.basePath;
        this.serverIndex = param.serverIndex;
        this.baseOptions = {
            ...param.baseOptions,
            headers: {
                ...param.baseOptions?.headers,
            },
        };
        this.formDataCtor = param.formDataCtor;
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
