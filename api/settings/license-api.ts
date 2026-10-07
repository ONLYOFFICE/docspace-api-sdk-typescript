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
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
/**
 * LicenseApi - axios parameter creator
 * @export
 */
export const LicenseApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Activates the license staged by `POST api/2.0/settings/license` on this self-hosted Enterprise installation:  it records that the license was accepted, promotes the staged file to the active one and rewrites the  portal-wide quota and tariff from it. Upload a file first: with nothing staged and no license on disk there is  nothing to activate. The caller only has to be signed in, and the activation is recorded in the audit trail.  Repeating the call is safe: the acceptance stamp is written only once and the same license is simply applied  again. Read the outcome from the body rather than the status code - an empty string means the license is now  active, and any other string is a message explaining why it is not: no license key was found, the key is not  correct, the installed edition does not match the license type, or the license is expired or too small for the  current user count. The acceptance stamp survives a failed activation, so a corrected file needs nothing  extra. An installation with no license path configured answers that its pricing plan does not support the  option and changes nothing. The operation stays reachable while the portal is unpaid.
         * @summary Activate a license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for acceptLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/accept-license/
         */
        acceptLicense: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/license/accept`;
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
         * Reports whether this installation still has to be given a license file before it can be used, which is the  question the setup wizard asks before offering its license upload step. No authentication is needed, so it can  be called on a portal nobody has signed in to yet, and the call is read-only. The answer is `true` only for a  self-hosted Enterprise build whose license file is not on disk yet; an open-source or SaaS portal, a portal  configured to let anyone in without an account, an installation whose configuration hides the pricing section,  and one that takes its setup from cloud-image metadata all answer `false`. A `false` answer therefore does not  mean the portal is licensed - it also covers every build that needs no license at all. Nothing here describes  a license already in place, neither its due date nor whether the editing service still accepts it, and the  answer turns to `false` only once a staged file has been activated by `POST api/2.0/settings/license/accept`,  not when it is uploaded. The operation stays reachable while the portal is unpaid.
         * @summary Check if a license is required
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsLicenseRequired operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-license-required/
         */
        getIsLicenseRequired: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/license/required`;
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
         * Re-reads the license file of this self-hosted Enterprise installation and rewrites the portal-wide quota and  tariff from it, so a file replaced on disk or a renewal issued by the vendor takes effect without a restart. A  license staged by `POST api/2.0/settings/license` is promoted to the active one here as well, but the usual  first-time order is upload and then `POST api/2.0/settings/license/accept`; this operation is for later  refreshes. The caller only has to be signed in - no administrator right is checked. Despite the `GET`, the  call rewrites stored data, and it is idempotent: repeating it applies the same license again. The editing  service is asked to confirm the license as part of the check, and the license it reports must match the file.  The answer is `true` when the license was applied and `false` on an installation with no license path  configured at all, such as a SaaS or open-source portal, where nothing is read and nothing changes. A missing  or unreadable file, a mismatched customer or edition, and an editing service that rejects the license all fail  the call instead of answering `false`. The operation stays reachable while the portal is unpaid.
         * @summary Refresh the license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for refreshLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/refresh-license/
         */
        refreshLicense: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/license/refresh`;
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
         * Takes the license file of this self-hosted Enterprise installation as `multipart/form-data` and stages it for  activation; only the first entry of `Files` is read and the rest are ignored. The file is validated but not  put in force here - follow with `POST api/2.0/settings/license/accept` to activate it, and until then the  portal keeps the license it already had. The caller must be a DocSpace administrator, or hold a wizard or  administrator confirmation link while the setup wizard is still unfinished; after the wizard is complete such  a link alone is refused. An earlier staged file is overwritten, so the upload can be repeated safely. The  answer is a localized sentence, not a structured result: `Uploaded successfully` on its own, or the same words  plus the date since when support and updates are not covered, because a file already past its due date is  still accepted. A request carrying no file, and a license whose start date has not arrived yet, are rejected  as invalid; a file that cannot be read as a license, carries no customer id or signature, or was issued for  the other edition fails the call. Whether the editing service accepts it is only checked at activation.
         * @summary Upload a license
         * @param {Array<File>} files The license file, sent as `multipart/form-data`. Only the first entry is read and the rest are ignored, and a  request carrying none is refused with 400. A file that cannot be read as a license, that carries no customer  id or signature, or that was issued for the other edition fails the call; one whose start date has not  arrived yet is refused, while one already past its due date is still accepted. Staging only stores the file -  `POST api/2.0/settings/license/accept` puts it in force - and a file staged earlier is overwritten.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-license/
         */
        uploadLicense: async (files: Array<File>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'files' is not null or undefined
            assertParamExists('uploadLicense', 'files', files)

            const localVarPath = `/api/2.0/settings/license`;
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

            if (files) {
                files.forEach((element) => {
                    localVarFormParams.append('files', element as any);
                })
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
 * LicenseApi - functional programming interface
 * @export
 */
export const LicenseApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LicenseApiAxiosParamCreator(configuration)
    return {
        /**
         * Activates the license staged by `POST api/2.0/settings/license` on this self-hosted Enterprise installation:  it records that the license was accepted, promotes the staged file to the active one and rewrites the  portal-wide quota and tariff from it. Upload a file first: with nothing staged and no license on disk there is  nothing to activate. The caller only has to be signed in, and the activation is recorded in the audit trail.  Repeating the call is safe: the acceptance stamp is written only once and the same license is simply applied  again. Read the outcome from the body rather than the status code - an empty string means the license is now  active, and any other string is a message explaining why it is not: no license key was found, the key is not  correct, the installed edition does not match the license type, or the license is expired or too small for the  current user count. The acceptance stamp survives a failed activation, so a corrected file needs nothing  extra. An installation with no license path configured answers that its pricing plan does not support the  option and changes nothing. The operation stays reachable while the portal is unpaid.
         * @summary Activate a license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for acceptLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/accept-license/
         */
        async acceptLicense(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.acceptLicense(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicenseApi.acceptLicense']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether this installation still has to be given a license file before it can be used, which is the  question the setup wizard asks before offering its license upload step. No authentication is needed, so it can  be called on a portal nobody has signed in to yet, and the call is read-only. The answer is `true` only for a  self-hosted Enterprise build whose license file is not on disk yet; an open-source or SaaS portal, a portal  configured to let anyone in without an account, an installation whose configuration hides the pricing section,  and one that takes its setup from cloud-image metadata all answer `false`. A `false` answer therefore does not  mean the portal is licensed - it also covers every build that needs no license at all. Nothing here describes  a license already in place, neither its due date nor whether the editing service still accepts it, and the  answer turns to `false` only once a staged file has been activated by `POST api/2.0/settings/license/accept`,  not when it is uploaded. The operation stays reachable while the portal is unpaid.
         * @summary Check if a license is required
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsLicenseRequired operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-license-required/
         */
        async getIsLicenseRequired(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsLicenseRequired(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicenseApi.getIsLicenseRequired']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Re-reads the license file of this self-hosted Enterprise installation and rewrites the portal-wide quota and  tariff from it, so a file replaced on disk or a renewal issued by the vendor takes effect without a restart. A  license staged by `POST api/2.0/settings/license` is promoted to the active one here as well, but the usual  first-time order is upload and then `POST api/2.0/settings/license/accept`; this operation is for later  refreshes. The caller only has to be signed in - no administrator right is checked. Despite the `GET`, the  call rewrites stored data, and it is idempotent: repeating it applies the same license again. The editing  service is asked to confirm the license as part of the check, and the license it reports must match the file.  The answer is `true` when the license was applied and `false` on an installation with no license path  configured at all, such as a SaaS or open-source portal, where nothing is read and nothing changes. A missing  or unreadable file, a mismatched customer or edition, and an editing service that rejects the license all fail  the call instead of answering `false`. The operation stays reachable while the portal is unpaid.
         * @summary Refresh the license
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for refreshLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/refresh-license/
         */
        async refreshLicense(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refreshLicense(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicenseApi.refreshLicense']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Takes the license file of this self-hosted Enterprise installation as `multipart/form-data` and stages it for  activation; only the first entry of `Files` is read and the rest are ignored. The file is validated but not  put in force here - follow with `POST api/2.0/settings/license/accept` to activate it, and until then the  portal keeps the license it already had. The caller must be a DocSpace administrator, or hold a wizard or  administrator confirmation link while the setup wizard is still unfinished; after the wizard is complete such  a link alone is refused. An earlier staged file is overwritten, so the upload can be repeated safely. The  answer is a localized sentence, not a structured result: `Uploaded successfully` on its own, or the same words  plus the date since when support and updates are not covered, because a file already past its due date is  still accepted. A request carrying no file, and a license whose start date has not arrived yet, are rejected  as invalid; a file that cannot be read as a license, carries no customer id or signature, or was issued for  the other edition fails the call. Whether the editing service accepts it is only checked at activation.
         * @summary Upload a license
         * @param {Array<File>} files The license file, sent as `multipart/form-data`. Only the first entry is read and the rest are ignored, and a  request carrying none is refused with 400. A file that cannot be read as a license, that carries no customer  id or signature, or that was issued for the other edition fails the call; one whose start date has not  arrived yet is refused, while one already past its due date is still accepted. Staging only stores the file -  `POST api/2.0/settings/license/accept` puts it in force - and a file staged earlier is overwritten.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-license/
         */
        async uploadLicense(files: Array<File>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadLicense(files, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LicenseApi.uploadLicense']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LicenseApi - factory interface
 * @export
 */
export const LicenseApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LicenseApiFp(configuration)
    return {
        /**
         * Activates the license staged by `POST api/2.0/settings/license` on this self-hosted Enterprise installation:  it records that the license was accepted, promotes the staged file to the active one and rewrites the  portal-wide quota and tariff from it. Upload a file first: with nothing staged and no license on disk there is  nothing to activate. The caller only has to be signed in, and the activation is recorded in the audit trail.  Repeating the call is safe: the acceptance stamp is written only once and the same license is simply applied  again. Read the outcome from the body rather than the status code - an empty string means the license is now  active, and any other string is a message explaining why it is not: no license key was found, the key is not  correct, the installed edition does not match the license type, or the license is expired or too small for the  current user count. The acceptance stamp survives a failed activation, so a corrected file needs nothing  extra. An installation with no license path configured answers that its pricing plan does not support the  option and changes nothing. The operation stays reachable while the portal is unpaid.
         * @summary Activate a license
         * @param {*} [options] Override http request option.
         * REST API Reference for acceptLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/accept-license/
         * @throws {RequiredError}
         */
        acceptLicense(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.acceptLicense(options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether this installation still has to be given a license file before it can be used, which is the  question the setup wizard asks before offering its license upload step. No authentication is needed, so it can  be called on a portal nobody has signed in to yet, and the call is read-only. The answer is `true` only for a  self-hosted Enterprise build whose license file is not on disk yet; an open-source or SaaS portal, a portal  configured to let anyone in without an account, an installation whose configuration hides the pricing section,  and one that takes its setup from cloud-image metadata all answer `false`. A `false` answer therefore does not  mean the portal is licensed - it also covers every build that needs no license at all. Nothing here describes  a license already in place, neither its due date nor whether the editing service still accepts it, and the  answer turns to `false` only once a staged file has been activated by `POST api/2.0/settings/license/accept`,  not when it is uploaded. The operation stays reachable while the portal is unpaid.
         * @summary Check if a license is required
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsLicenseRequired operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-license-required/
         * @throws {RequiredError}
         */
        getIsLicenseRequired(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getIsLicenseRequired(options).then((request) => request(axios, basePath));
        },
        /**
         * Re-reads the license file of this self-hosted Enterprise installation and rewrites the portal-wide quota and  tariff from it, so a file replaced on disk or a renewal issued by the vendor takes effect without a restart. A  license staged by `POST api/2.0/settings/license` is promoted to the active one here as well, but the usual  first-time order is upload and then `POST api/2.0/settings/license/accept`; this operation is for later  refreshes. The caller only has to be signed in - no administrator right is checked. Despite the `GET`, the  call rewrites stored data, and it is idempotent: repeating it applies the same license again. The editing  service is asked to confirm the license as part of the check, and the license it reports must match the file.  The answer is `true` when the license was applied and `false` on an installation with no license path  configured at all, such as a SaaS or open-source portal, where nothing is read and nothing changes. A missing  or unreadable file, a mismatched customer or edition, and an editing service that rejects the license all fail  the call instead of answering `false`. The operation stays reachable while the portal is unpaid.
         * @summary Refresh the license
         * @param {*} [options] Override http request option.
         * REST API Reference for refreshLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/refresh-license/
         * @throws {RequiredError}
         */
        refreshLicense(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.refreshLicense(options).then((request) => request(axios, basePath));
        },
        /**
         * Takes the license file of this self-hosted Enterprise installation as `multipart/form-data` and stages it for  activation; only the first entry of `Files` is read and the rest are ignored. The file is validated but not  put in force here - follow with `POST api/2.0/settings/license/accept` to activate it, and until then the  portal keeps the license it already had. The caller must be a DocSpace administrator, or hold a wizard or  administrator confirmation link while the setup wizard is still unfinished; after the wizard is complete such  a link alone is refused. An earlier staged file is overwritten, so the upload can be repeated safely. The  answer is a localized sentence, not a structured result: `Uploaded successfully` on its own, or the same words  plus the date since when support and updates are not covered, because a file already past its due date is  still accepted. A request carrying no file, and a license whose start date has not arrived yet, are rejected  as invalid; a file that cannot be read as a license, carries no customer id or signature, or was issued for  the other edition fails the call. Whether the editing service accepts it is only checked at activation.
         * @summary Upload a license
         * @param {LicenseApiUploadLicenseRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadLicense operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-license/
         * @throws {RequiredError}
         */
        uploadLicense(requestParameters: LicenseApiUploadLicenseRequest, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.uploadLicense(requestParameters.files, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for uploadLicense operation in LicenseApi.
 * @export
 * @interface LicenseApiUploadLicenseRequest
 */
export interface LicenseApiUploadLicenseRequest {
    /**
     * The license file, sent as `multipart/form-data`. Only the first entry is read and the rest are ignored, and a  request carrying none is refused with 400. A file that cannot be read as a license, that carries no customer  id or signature, or that was issued for the other edition fails the call; one whose start date has not  arrived yet is refused, while one already past its due date is still accepted. Staging only stores the file -  `POST api/2.0/settings/license/accept` puts it in force - and a file staged earlier is overwritten.
     * @type {Array<File>}
     * @memberof LicenseApiUploadLicense
     */
    readonly files: Array<File>
}

/**
 * LicenseApi - object-oriented interface
 * @export
 * @class LicenseApi
 * @extends {BaseAPI}
 */
export class LicenseApi extends BaseAPI {
    /**
     * Activates the license staged by `POST api/2.0/settings/license` on this self-hosted Enterprise installation:  it records that the license was accepted, promotes the staged file to the active one and rewrites the  portal-wide quota and tariff from it. Upload a file first: with nothing staged and no license on disk there is  nothing to activate. The caller only has to be signed in, and the activation is recorded in the audit trail.  Repeating the call is safe: the acceptance stamp is written only once and the same license is simply applied  again. Read the outcome from the body rather than the status code - an empty string means the license is now  active, and any other string is a message explaining why it is not: no license key was found, the key is not  correct, the installed edition does not match the license type, or the license is expired or too small for the  current user count. The acceptance stamp survives a failed activation, so a corrected file needs nothing  extra. An installation with no license path configured answers that its pricing plan does not support the  option and changes nothing. The operation stays reachable while the portal is unpaid.
     * @summary Activate a license
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicenseApi
     */
    public acceptLicense(options?: RawAxiosRequestConfig) {
        return LicenseApiFp(this.configuration).acceptLicense(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether this installation still has to be given a license file before it can be used, which is the  question the setup wizard asks before offering its license upload step. No authentication is needed, so it can  be called on a portal nobody has signed in to yet, and the call is read-only. The answer is `true` only for a  self-hosted Enterprise build whose license file is not on disk yet; an open-source or SaaS portal, a portal  configured to let anyone in without an account, an installation whose configuration hides the pricing section,  and one that takes its setup from cloud-image metadata all answer `false`. A `false` answer therefore does not  mean the portal is licensed - it also covers every build that needs no license at all. Nothing here describes  a license already in place, neither its due date nor whether the editing service still accepts it, and the  answer turns to `false` only once a staged file has been activated by `POST api/2.0/settings/license/accept`,  not when it is uploaded. The operation stays reachable while the portal is unpaid.
     * @summary Check if a license is required
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicenseApi
     */
    public getIsLicenseRequired(options?: RawAxiosRequestConfig) {
        return LicenseApiFp(this.configuration).getIsLicenseRequired(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Re-reads the license file of this self-hosted Enterprise installation and rewrites the portal-wide quota and  tariff from it, so a file replaced on disk or a renewal issued by the vendor takes effect without a restart. A  license staged by `POST api/2.0/settings/license` is promoted to the active one here as well, but the usual  first-time order is upload and then `POST api/2.0/settings/license/accept`; this operation is for later  refreshes. The caller only has to be signed in - no administrator right is checked. Despite the `GET`, the  call rewrites stored data, and it is idempotent: repeating it applies the same license again. The editing  service is asked to confirm the license as part of the check, and the license it reports must match the file.  The answer is `true` when the license was applied and `false` on an installation with no license path  configured at all, such as a SaaS or open-source portal, where nothing is read and nothing changes. A missing  or unreadable file, a mismatched customer or edition, and an editing service that rejects the license all fail  the call instead of answering `false`. The operation stays reachable while the portal is unpaid.
     * @summary Refresh the license
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicenseApi
     */
    public refreshLicense(options?: RawAxiosRequestConfig) {
        return LicenseApiFp(this.configuration).refreshLicense(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Takes the license file of this self-hosted Enterprise installation as `multipart/form-data` and stages it for  activation; only the first entry of `Files` is read and the rest are ignored. The file is validated but not  put in force here - follow with `POST api/2.0/settings/license/accept` to activate it, and until then the  portal keeps the license it already had. The caller must be a DocSpace administrator, or hold a wizard or  administrator confirmation link while the setup wizard is still unfinished; after the wizard is complete such  a link alone is refused. An earlier staged file is overwritten, so the upload can be repeated safely. The  answer is a localized sentence, not a structured result: `Uploaded successfully` on its own, or the same words  plus the date since when support and updates are not covered, because a file already past its due date is  still accepted. A request carrying no file, and a license whose start date has not arrived yet, are rejected  as invalid; a file that cannot be read as a license, carries no customer id or signature, or was issued for  the other edition fails the call. Whether the editing service accepts it is only checked at activation.
     * @summary Upload a license
     * @param {SettingsLicenseApiUploadLicenseRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LicenseApi
     */
    public uploadLicense(requestParameters: LicenseApiUploadLicenseRequest, options?: RawAxiosRequestConfig) {
        return LicenseApiFp(this.configuration).uploadLicense(requestParameters.files, options).then((request) => request(this.axios, this.basePath));
    }
}

