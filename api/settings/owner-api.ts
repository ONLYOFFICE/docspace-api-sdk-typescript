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
import type { OwnerChangeInstructionsWrapper } from '../../models';
// @ts-ignore
import type { OwnerIdSettingsRequestDto } from '../../models';
/**
 * OwnerApi - axios parameter creator
 * @export
 */
export const OwnerApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Starts handing this portal over to another of its members: the confirmation letter goes to the current owner\'s  address, and nothing changes until the link in it is used. The owner\'s own email address has to be confirmed  first, otherwise the call is answered with 400; `GET api/2.0/people/@self` reports it as `activationStatus`.  The caller needs the portal-settings right of a DocSpace administrator, so a room administrator, an ordinary  member or a guest is refused with 403, as is naming a guest in `ownerId`. Only the portal owner can actually  start a transfer: an administrator who is not the owner, or a named user who is inactive or unknown here, gets  200 with `status` 0 and a localized refusal instead of an error, so read `status` and not the HTTP code. A  started transfer answers `status` 1 and a `message` carrying the owner\'s address inside an HTML `mailto:`  anchor rather than as plain text. Ownership itself does not move here; every call issues a fresh link usable  for a limited period, seven days by default, and the attempt is recorded in the audit trail. Complete the  transfer with `PUT api/2.0/settings/owner`; changing what a member may do is `PUT api/2.0/people/type/{type}`.
         * @summary Start the portal owner change
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendOwnerChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-owner-change-instructions/
         */
        sendOwnerChangeInstructions: async (ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/owner`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ownerIdSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Completes the portal owner change that `POST api/2.0/settings/owner` started, making the user named in  `ownerId` the owner of this portal. Authorization comes from the confirmation link in that letter, not from an  ordinary session: pass the link\'s `type`, `key`, `uid` and `encemail` parameters in the `confirm` request  header, and check with `POST api/2.0/authentication/confirm` that it is still usable, because it expires after  a limited period, seven days by default. A caller without such a link is refused whatever role it holds, and  so is a link whose address is no longer the owner\'s, which is what replaying a used link looks like. The named  user has to be an active member of the portal and must not be a guest. The call is mutating: a named user who  is not a DocSpace administrator yet is promoted to one first, and a promotion needing a paid seat the portal  lacks is refused before ownership moves. The previous owner keeps their account and role but loses the owner\'s  rights, and the change reaches the audit trail. The answer carries no payload: read the new `ownerId` from  `GET api/2.0/settings`, which needs no token. Only the new owner can start another transfer.
         * @summary Confirm the portal owner change
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePortalOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-portal-owner/
         */
        updatePortalOwner: async (ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/owner`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(ownerIdSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OwnerApi - functional programming interface
 * @export
 */
export const OwnerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OwnerApiAxiosParamCreator(configuration)
    return {
        /**
         * Starts handing this portal over to another of its members: the confirmation letter goes to the current owner\'s  address, and nothing changes until the link in it is used. The owner\'s own email address has to be confirmed  first, otherwise the call is answered with 400; `GET api/2.0/people/@self` reports it as `activationStatus`.  The caller needs the portal-settings right of a DocSpace administrator, so a room administrator, an ordinary  member or a guest is refused with 403, as is naming a guest in `ownerId`. Only the portal owner can actually  start a transfer: an administrator who is not the owner, or a named user who is inactive or unknown here, gets  200 with `status` 0 and a localized refusal instead of an error, so read `status` and not the HTTP code. A  started transfer answers `status` 1 and a `message` carrying the owner\'s address inside an HTML `mailto:`  anchor rather than as plain text. Ownership itself does not move here; every call issues a fresh link usable  for a limited period, seven days by default, and the attempt is recorded in the audit trail. Complete the  transfer with `PUT api/2.0/settings/owner`; changing what a member may do is `PUT api/2.0/people/type/{type}`.
         * @summary Start the portal owner change
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendOwnerChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-owner-change-instructions/
         */
        async sendOwnerChangeInstructions(ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OwnerChangeInstructionsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendOwnerChangeInstructions(ownerIdSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OwnerApi.sendOwnerChangeInstructions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Completes the portal owner change that `POST api/2.0/settings/owner` started, making the user named in  `ownerId` the owner of this portal. Authorization comes from the confirmation link in that letter, not from an  ordinary session: pass the link\'s `type`, `key`, `uid` and `encemail` parameters in the `confirm` request  header, and check with `POST api/2.0/authentication/confirm` that it is still usable, because it expires after  a limited period, seven days by default. A caller without such a link is refused whatever role it holds, and  so is a link whose address is no longer the owner\'s, which is what replaying a used link looks like. The named  user has to be an active member of the portal and must not be a guest. The call is mutating: a named user who  is not a DocSpace administrator yet is promoted to one first, and a promotion needing a paid seat the portal  lacks is refused before ownership moves. The previous owner keeps their account and role but loses the owner\'s  rights, and the change reaches the audit trail. The answer carries no payload: read the new `ownerId` from  `GET api/2.0/settings`, which needs no token. Only the new owner can start another transfer.
         * @summary Confirm the portal owner change
         * @param {OwnerIdSettingsRequestDto} [ownerIdSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updatePortalOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-portal-owner/
         */
        async updatePortalOwner(ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePortalOwner(ownerIdSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OwnerApi.updatePortalOwner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OwnerApi - factory interface
 * @export
 */
export const OwnerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OwnerApiFp(configuration)
    return {
        /**
         * Starts handing this portal over to another of its members: the confirmation letter goes to the current owner\'s  address, and nothing changes until the link in it is used. The owner\'s own email address has to be confirmed  first, otherwise the call is answered with 400; `GET api/2.0/people/@self` reports it as `activationStatus`.  The caller needs the portal-settings right of a DocSpace administrator, so a room administrator, an ordinary  member or a guest is refused with 403, as is naming a guest in `ownerId`. Only the portal owner can actually  start a transfer: an administrator who is not the owner, or a named user who is inactive or unknown here, gets  200 with `status` 0 and a localized refusal instead of an error, so read `status` and not the HTTP code. A  started transfer answers `status` 1 and a `message` carrying the owner\'s address inside an HTML `mailto:`  anchor rather than as plain text. Ownership itself does not move here; every call issues a fresh link usable  for a limited period, seven days by default, and the attempt is recorded in the audit trail. Complete the  transfer with `PUT api/2.0/settings/owner`; changing what a member may do is `PUT api/2.0/people/type/{type}`.
         * @summary Start the portal owner change
         * @param {OwnerApiSendOwnerChangeInstructionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendOwnerChangeInstructions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-owner-change-instructions/
         * @throws {RequiredError}
         */
        sendOwnerChangeInstructions(requestParameters: OwnerApiSendOwnerChangeInstructionsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<OwnerChangeInstructionsWrapper> {
            return localVarFp.sendOwnerChangeInstructions(requestParameters.ownerIdSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Completes the portal owner change that `POST api/2.0/settings/owner` started, making the user named in  `ownerId` the owner of this portal. Authorization comes from the confirmation link in that letter, not from an  ordinary session: pass the link\'s `type`, `key`, `uid` and `encemail` parameters in the `confirm` request  header, and check with `POST api/2.0/authentication/confirm` that it is still usable, because it expires after  a limited period, seven days by default. A caller without such a link is refused whatever role it holds, and  so is a link whose address is no longer the owner\'s, which is what replaying a used link looks like. The named  user has to be an active member of the portal and must not be a guest. The call is mutating: a named user who  is not a DocSpace administrator yet is promoted to one first, and a promotion needing a paid seat the portal  lacks is refused before ownership moves. The previous owner keeps their account and role but loses the owner\'s  rights, and the change reaches the audit trail. The answer carries no payload: read the new `ownerId` from  `GET api/2.0/settings`, which needs no token. Only the new owner can start another transfer.
         * @summary Confirm the portal owner change
         * @param {OwnerApiUpdatePortalOwnerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updatePortalOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-portal-owner/
         * @throws {RequiredError}
         */
        updatePortalOwner(requestParameters: OwnerApiUpdatePortalOwnerRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updatePortalOwner(requestParameters.ownerIdSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for sendOwnerChangeInstructions operation in OwnerApi.
 * @export
 * @interface OwnerApiSendOwnerChangeInstructionsRequest
 */
export interface OwnerApiSendOwnerChangeInstructionsRequest {
    /**
     * 
     * @type {OwnerIdSettingsRequestDto}
     * @memberof OwnerApiSendOwnerChangeInstructions
     */
    readonly ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto
}

/**
 * Request parameters for updatePortalOwner operation in OwnerApi.
 * @export
 * @interface OwnerApiUpdatePortalOwnerRequest
 */
export interface OwnerApiUpdatePortalOwnerRequest {
    /**
     * 
     * @type {OwnerIdSettingsRequestDto}
     * @memberof OwnerApiUpdatePortalOwner
     */
    readonly ownerIdSettingsRequestDto?: OwnerIdSettingsRequestDto
}

/**
 * OwnerApi - object-oriented interface
 * @export
 * @class OwnerApi
 * @extends {BaseAPI}
 */
export class OwnerApi extends BaseAPI {
    /**
     * Starts handing this portal over to another of its members: the confirmation letter goes to the current owner\'s  address, and nothing changes until the link in it is used. The owner\'s own email address has to be confirmed  first, otherwise the call is answered with 400; `GET api/2.0/people/@self` reports it as `activationStatus`.  The caller needs the portal-settings right of a DocSpace administrator, so a room administrator, an ordinary  member or a guest is refused with 403, as is naming a guest in `ownerId`. Only the portal owner can actually  start a transfer: an administrator who is not the owner, or a named user who is inactive or unknown here, gets  200 with `status` 0 and a localized refusal instead of an error, so read `status` and not the HTTP code. A  started transfer answers `status` 1 and a `message` carrying the owner\'s address inside an HTML `mailto:`  anchor rather than as plain text. Ownership itself does not move here; every call issues a fresh link usable  for a limited period, seven days by default, and the attempt is recorded in the audit trail. Complete the  transfer with `PUT api/2.0/settings/owner`; changing what a member may do is `PUT api/2.0/people/type/{type}`.
     * @summary Start the portal owner change
     * @param {SettingsOwnerApiSendOwnerChangeInstructionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OwnerApi
     */
    public sendOwnerChangeInstructions(requestParameters: OwnerApiSendOwnerChangeInstructionsRequest = {}, options?: RawAxiosRequestConfig) {
        return OwnerApiFp(this.configuration).sendOwnerChangeInstructions(requestParameters.ownerIdSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Completes the portal owner change that `POST api/2.0/settings/owner` started, making the user named in  `ownerId` the owner of this portal. Authorization comes from the confirmation link in that letter, not from an  ordinary session: pass the link\'s `type`, `key`, `uid` and `encemail` parameters in the `confirm` request  header, and check with `POST api/2.0/authentication/confirm` that it is still usable, because it expires after  a limited period, seven days by default. A caller without such a link is refused whatever role it holds, and  so is a link whose address is no longer the owner\'s, which is what replaying a used link looks like. The named  user has to be an active member of the portal and must not be a guest. The call is mutating: a named user who  is not a DocSpace administrator yet is promoted to one first, and a promotion needing a paid seat the portal  lacks is refused before ownership moves. The previous owner keeps their account and role but loses the owner\'s  rights, and the change reaches the audit trail. The answer carries no payload: read the new `ownerId` from  `GET api/2.0/settings`, which needs no token. Only the new owner can start another transfer.
     * @summary Confirm the portal owner change
     * @param {SettingsOwnerApiUpdatePortalOwnerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OwnerApi
     */
    public updatePortalOwner(requestParameters: OwnerApiUpdatePortalOwnerRequest = {}, options?: RawAxiosRequestConfig) {
        return OwnerApiFp(this.configuration).updatePortalOwner(requestParameters.ownerIdSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

