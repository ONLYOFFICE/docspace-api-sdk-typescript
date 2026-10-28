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
import type { EncryptionKeyArrayWrapper } from '../../models';
// @ts-ignore
import type { EncryptionKeyRequestDto } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
/**
 * PrivacyRoomApi - axios parameter creator
 * @export
 */
export const PrivacyRoomApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Removes one encryption key pair from the calling user\'s own key set and answers 204 with no body. The pair is  named by the `id` of an entry of `GET api/2.0/privacyroom/keys`; the caller\'s other pairs stay as they are.  The call is destructive and cannot be repeated: the key material is gone for good, a second delete of the same  `id`, like an `id` that was never stored, is answered with 404, and there is no parameter for another user\'s  keys, so an authenticated member only ever deletes their own while a guest is refused. Deleting the last key  the caller holds locks them out of the private rooms they belong to, their own rooms included: the rooms and  their content survive untouched and stay listed as private, but `GET api/2.0/privacyroom/{roomId}/access` then  refuses the caller until a new key is stored with `POST api/2.0/privacyroom/keys`. Before DocSpace 4.0 the  call answered 200 with the caller\'s remaining keys, so a client that read that list has to call  `GET api/2.0/privacyroom/keys` instead.
         * @summary Delete an encryption key
         * @param {string} id The pair to delete, taken from the `id` of an entry of `GET api/2.0/privacyroom/keys`. Only the caller\'s own  pairs can be named here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/
         */
        deleteKeys: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteKeys', 'id', id)

            const localVarPath = `/api/2.0/privacyroom/keys/{id}`
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
         * Returns every encryption key pair the calling user holds, the encrypted private half included, which is the  material a client needs in order to decrypt content in a private room. The set is personal and there is no  parameter for another user\'s keys: an authenticated caller reads only their own, and a guest, who cannot own  key material at all, always reads an empty set. The call is read-only. An empty answer, whether an empty list  or none at all, means no key has been created yet, and until `POST api/2.0/privacyroom/keys` creates one the  user cannot be invited to a private room. Each entry carries the pair\'s `id`, its owner in `userId`, the  moment the material was stored in `date`, the public half, the private half encrypted with the user\'s  password, and the portal-wide crypto engine in `cryptoEngineId`. For the keys that open a whole private room  use `GET api/2.0/privacyroom/{roomId}/access`, and for the keys a single file is shared with use  `GET api/2.0/files/file/{fileId}/publickeys`; this operation is about the caller alone.
         * @summary Get own encryption keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys/
         */
        getUserKeys: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/privacyroom/keys`;
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
         * Returns the encryption keys that give access to a private room: one entry per key held by each of its members,  which is what a client needs in order to encrypt a file key for everyone allowed to open the room\'s content.  Only the caller\'s own entries carry `privateKeyEnc`; another member\'s entry carries the public half alone, and  an entry with no public half is not reported as access at all. The room has to be a private one, a room  created without private mode holds no access keys and the call is refused, and it has to still exist: an  unknown room, or one already moved to Trash, is reported as missing, while an archived private room still  answers. Access follows room membership and not portal role: any member from read access upwards receives the  full set, whereas a DocSpace administrator who is not a member is refused, and so is a caller holding no key  of their own, the room creator included once they delete their last key. The call is read-only. For the keys  of a single file use `GET api/2.0/files/file/{fileId}/publickeys`.
         * @summary Get private room access keys
         * @param {number} roomId The private room whose access keys are read. Take it from the `id` of the room returned by  `POST api/2.0/files/rooms` or listed by `GET api/2.0/files/rooms`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeysForRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-for-room/
         */
        getUserKeysForRoom: async (roomId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('getUserKeysForRoom', 'roomId', roomId)

            const localVarPath = `/api/2.0/privacyroom/{roomId}/access`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)));
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
         * Rotates one encryption key pair of the calling user: the entry whose `id` matches is overwritten with the  submitted `publicKey` and `privateKeyEnc`, and the caller\'s other pairs are left untouched. The pair has to  exist already, an `id` that is not in the caller\'s set is answered with 404, and a first key is created with  `POST api/2.0/privacyroom/keys`. This is a full replacement rather than a merge: both halves are mandatory,  and a request that omits or blanks one of them is rejected as invalid with the stored pair surviving  unchanged, so a rotation that means to keep the private half has to send it again. Omitting `id` targets the  all-zero pair, the one a client that never sets an id keeps rotating. Every authenticated member rotates their  own keys and only their own, and a guest is refused. The call is mutating, and repeating it with the same body  leaves the same state. It answers with every key the caller holds afterwards, and from then on  `GET api/2.0/privacyroom/{roomId}/access` reports the new public half for this member.
         * @summary Rotate an encryption key
         * @param {EncryptionKeyRequestDto} [encryptionKeyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for replaceKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/replace-key/
         */
        replaceKey: async (encryptionKeyRequestDto?: EncryptionKeyRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/privacyroom/keys`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(encryptionKeyRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores a new encryption key pair for the calling user and answers with that user\'s whole key set. The material  is end-to-end: `publicKey` is the half other members use to encrypt file keys for this user, while  `privateKeyEnc` arrives already encrypted with the user\'s own password, so the portal keeps it as opaque text.  A member must hold at least one key before they can be invited to a private room, which makes this the first  call of the private-room flow. Every authenticated member manages their own keys and only their own, there is  no parameter for somebody else\'s, and a guest is refused, which is also why a guest cannot become a member of  a private room. The call is mutating and is not safe to repeat: `id` names the pair inside the caller\'s set  and an `id` that is already stored is answered with 409, while a request that omits or blanks either half is  rejected as invalid and stores nothing. A successful call answers 201 with every key the caller now holds. To  change the material of an existing pair use `PUT api/2.0/privacyroom/keys`.
         * @summary Create an encryption key
         * @param {EncryptionKeyRequestDto} [encryptionKeyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-keys/
         */
        setKeys: async (encryptionKeyRequestDto?: EncryptionKeyRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/privacyroom/keys`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(encryptionKeyRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PrivacyRoomApi - functional programming interface
 * @export
 */
export const PrivacyRoomApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PrivacyRoomApiAxiosParamCreator(configuration)
    return {
        /**
         * Removes one encryption key pair from the calling user\'s own key set and answers 204 with no body. The pair is  named by the `id` of an entry of `GET api/2.0/privacyroom/keys`; the caller\'s other pairs stay as they are.  The call is destructive and cannot be repeated: the key material is gone for good, a second delete of the same  `id`, like an `id` that was never stored, is answered with 404, and there is no parameter for another user\'s  keys, so an authenticated member only ever deletes their own while a guest is refused. Deleting the last key  the caller holds locks them out of the private rooms they belong to, their own rooms included: the rooms and  their content survive untouched and stay listed as private, but `GET api/2.0/privacyroom/{roomId}/access` then  refuses the caller until a new key is stored with `POST api/2.0/privacyroom/keys`. Before DocSpace 4.0 the  call answered 200 with the caller\'s remaining keys, so a client that read that list has to call  `GET api/2.0/privacyroom/keys` instead.
         * @summary Delete an encryption key
         * @param {string} id The pair to delete, taken from the `id` of an entry of `GET api/2.0/privacyroom/keys`. Only the caller\'s own  pairs can be named here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/
         */
        async deleteKeys(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteKeys(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.deleteKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns every encryption key pair the calling user holds, the encrypted private half included, which is the  material a client needs in order to decrypt content in a private room. The set is personal and there is no  parameter for another user\'s keys: an authenticated caller reads only their own, and a guest, who cannot own  key material at all, always reads an empty set. The call is read-only. An empty answer, whether an empty list  or none at all, means no key has been created yet, and until `POST api/2.0/privacyroom/keys` creates one the  user cannot be invited to a private room. Each entry carries the pair\'s `id`, its owner in `userId`, the  moment the material was stored in `date`, the public half, the private half encrypted with the user\'s  password, and the portal-wide crypto engine in `cryptoEngineId`. For the keys that open a whole private room  use `GET api/2.0/privacyroom/{roomId}/access`, and for the keys a single file is shared with use  `GET api/2.0/files/file/{fileId}/publickeys`; this operation is about the caller alone.
         * @summary Get own encryption keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys/
         */
        async getUserKeys(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserKeys(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.getUserKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the encryption keys that give access to a private room: one entry per key held by each of its members,  which is what a client needs in order to encrypt a file key for everyone allowed to open the room\'s content.  Only the caller\'s own entries carry `privateKeyEnc`; another member\'s entry carries the public half alone, and  an entry with no public half is not reported as access at all. The room has to be a private one, a room  created without private mode holds no access keys and the call is refused, and it has to still exist: an  unknown room, or one already moved to Trash, is reported as missing, while an archived private room still  answers. Access follows room membership and not portal role: any member from read access upwards receives the  full set, whereas a DocSpace administrator who is not a member is refused, and so is a caller holding no key  of their own, the room creator included once they delete their last key. The call is read-only. For the keys  of a single file use `GET api/2.0/files/file/{fileId}/publickeys`.
         * @summary Get private room access keys
         * @param {number} roomId The private room whose access keys are read. Take it from the `id` of the room returned by  `POST api/2.0/files/rooms` or listed by `GET api/2.0/files/rooms`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getUserKeysForRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-for-room/
         */
        async getUserKeysForRoom(roomId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserKeysForRoom(roomId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.getUserKeysForRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Rotates one encryption key pair of the calling user: the entry whose `id` matches is overwritten with the  submitted `publicKey` and `privateKeyEnc`, and the caller\'s other pairs are left untouched. The pair has to  exist already, an `id` that is not in the caller\'s set is answered with 404, and a first key is created with  `POST api/2.0/privacyroom/keys`. This is a full replacement rather than a merge: both halves are mandatory,  and a request that omits or blanks one of them is rejected as invalid with the stored pair surviving  unchanged, so a rotation that means to keep the private half has to send it again. Omitting `id` targets the  all-zero pair, the one a client that never sets an id keeps rotating. Every authenticated member rotates their  own keys and only their own, and a guest is refused. The call is mutating, and repeating it with the same body  leaves the same state. It answers with every key the caller holds afterwards, and from then on  `GET api/2.0/privacyroom/{roomId}/access` reports the new public half for this member.
         * @summary Rotate an encryption key
         * @param {EncryptionKeyRequestDto} [encryptionKeyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for replaceKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/replace-key/
         */
        async replaceKey(encryptionKeyRequestDto?: EncryptionKeyRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.replaceKey(encryptionKeyRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.replaceKey']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores a new encryption key pair for the calling user and answers with that user\'s whole key set. The material  is end-to-end: `publicKey` is the half other members use to encrypt file keys for this user, while  `privateKeyEnc` arrives already encrypted with the user\'s own password, so the portal keeps it as opaque text.  A member must hold at least one key before they can be invited to a private room, which makes this the first  call of the private-room flow. Every authenticated member manages their own keys and only their own, there is  no parameter for somebody else\'s, and a guest is refused, which is also why a guest cannot become a member of  a private room. The call is mutating and is not safe to repeat: `id` names the pair inside the caller\'s set  and an `id` that is already stored is answered with 409, while a request that omits or blanks either half is  rejected as invalid and stores nothing. A successful call answers 201 with every key the caller now holds. To  change the material of an existing pair use `PUT api/2.0/privacyroom/keys`.
         * @summary Create an encryption key
         * @param {EncryptionKeyRequestDto} [encryptionKeyRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-keys/
         */
        async setKeys(encryptionKeyRequestDto?: EncryptionKeyRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setKeys(encryptionKeyRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PrivacyRoomApi.setKeys']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PrivacyRoomApi - factory interface
 * @export
 */
export const PrivacyRoomApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PrivacyRoomApiFp(configuration)
    return {
        /**
         * Removes one encryption key pair from the calling user\'s own key set and answers 204 with no body. The pair is  named by the `id` of an entry of `GET api/2.0/privacyroom/keys`; the caller\'s other pairs stay as they are.  The call is destructive and cannot be repeated: the key material is gone for good, a second delete of the same  `id`, like an `id` that was never stored, is answered with 404, and there is no parameter for another user\'s  keys, so an authenticated member only ever deletes their own while a guest is refused. Deleting the last key  the caller holds locks them out of the private rooms they belong to, their own rooms included: the rooms and  their content survive untouched and stay listed as private, but `GET api/2.0/privacyroom/{roomId}/access` then  refuses the caller until a new key is stored with `POST api/2.0/privacyroom/keys`. Before DocSpace 4.0 the  call answered 200 with the caller\'s remaining keys, so a client that read that list has to call  `GET api/2.0/privacyroom/keys` instead.
         * @summary Delete an encryption key
         * @param {PrivacyRoomApiDeleteKeysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-keys/
         * @throws {RequiredError}
         */
        deleteKeys(requestParameters: PrivacyRoomApiDeleteKeysRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteKeys(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns every encryption key pair the calling user holds, the encrypted private half included, which is the  material a client needs in order to decrypt content in a private room. The set is personal and there is no  parameter for another user\'s keys: an authenticated caller reads only their own, and a guest, who cannot own  key material at all, always reads an empty set. The call is read-only. An empty answer, whether an empty list  or none at all, means no key has been created yet, and until `POST api/2.0/privacyroom/keys` creates one the  user cannot be invited to a private room. Each entry carries the pair\'s `id`, its owner in `userId`, the  moment the material was stored in `date`, the public half, the private half encrypted with the user\'s  password, and the portal-wide crypto engine in `cryptoEngineId`. For the keys that open a whole private room  use `GET api/2.0/privacyroom/{roomId}/access`, and for the keys a single file is shared with use  `GET api/2.0/files/file/{fileId}/publickeys`; this operation is about the caller alone.
         * @summary Get own encryption keys
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys/
         * @throws {RequiredError}
         */
        getUserKeys(options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.getUserKeys(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the encryption keys that give access to a private room: one entry per key held by each of its members,  which is what a client needs in order to encrypt a file key for everyone allowed to open the room\'s content.  Only the caller\'s own entries carry `privateKeyEnc`; another member\'s entry carries the public half alone, and  an entry with no public half is not reported as access at all. The room has to be a private one, a room  created without private mode holds no access keys and the call is refused, and it has to still exist: an  unknown room, or one already moved to Trash, is reported as missing, while an archived private room still  answers. Access follows room membership and not portal role: any member from read access upwards receives the  full set, whereas a DocSpace administrator who is not a member is refused, and so is a caller holding no key  of their own, the room creator included once they delete their last key. The call is read-only. For the keys  of a single file use `GET api/2.0/files/file/{fileId}/publickeys`.
         * @summary Get private room access keys
         * @param {PrivacyRoomApiGetUserKeysForRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getUserKeysForRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-user-keys-for-room/
         * @throws {RequiredError}
         */
        getUserKeysForRoom(requestParameters: PrivacyRoomApiGetUserKeysForRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.getUserKeysForRoom(requestParameters.roomId, options).then((request) => request(axios, basePath));
        },
        /**
         * Rotates one encryption key pair of the calling user: the entry whose `id` matches is overwritten with the  submitted `publicKey` and `privateKeyEnc`, and the caller\'s other pairs are left untouched. The pair has to  exist already, an `id` that is not in the caller\'s set is answered with 404, and a first key is created with  `POST api/2.0/privacyroom/keys`. This is a full replacement rather than a merge: both halves are mandatory,  and a request that omits or blanks one of them is rejected as invalid with the stored pair surviving  unchanged, so a rotation that means to keep the private half has to send it again. Omitting `id` targets the  all-zero pair, the one a client that never sets an id keeps rotating. Every authenticated member rotates their  own keys and only their own, and a guest is refused. The call is mutating, and repeating it with the same body  leaves the same state. It answers with every key the caller holds afterwards, and from then on  `GET api/2.0/privacyroom/{roomId}/access` reports the new public half for this member.
         * @summary Rotate an encryption key
         * @param {PrivacyRoomApiReplaceKeyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for replaceKey operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/replace-key/
         * @throws {RequiredError}
         */
        replaceKey(requestParameters: PrivacyRoomApiReplaceKeyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.replaceKey(requestParameters.encryptionKeyRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores a new encryption key pair for the calling user and answers with that user\'s whole key set. The material  is end-to-end: `publicKey` is the half other members use to encrypt file keys for this user, while  `privateKeyEnc` arrives already encrypted with the user\'s own password, so the portal keeps it as opaque text.  A member must hold at least one key before they can be invited to a private room, which makes this the first  call of the private-room flow. Every authenticated member manages their own keys and only their own, there is  no parameter for somebody else\'s, and a guest is refused, which is also why a guest cannot become a member of  a private room. The call is mutating and is not safe to repeat: `id` names the pair inside the caller\'s set  and an `id` that is already stored is answered with 409, while a request that omits or blanks either half is  rejected as invalid and stores nothing. A successful call answers 201 with every key the caller now holds. To  change the material of an existing pair use `PUT api/2.0/privacyroom/keys`.
         * @summary Create an encryption key
         * @param {PrivacyRoomApiSetKeysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setKeys operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-keys/
         * @throws {RequiredError}
         */
        setKeys(requestParameters: PrivacyRoomApiSetKeysRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.setKeys(requestParameters.encryptionKeyRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteKeys operation in PrivacyRoomApi.
 * @export
 * @interface PrivacyRoomApiDeleteKeysRequest
 */
export interface PrivacyRoomApiDeleteKeysRequest {
    /**
     * The pair to delete, taken from the `id` of an entry of `GET api/2.0/privacyroom/keys`. Only the caller\'s own  pairs can be named here.
     * @type {string}
     * @memberof PrivacyRoomApiDeleteKeys
     */
    readonly id: string
}

/**
 * Request parameters for getUserKeysForRoom operation in PrivacyRoomApi.
 * @export
 * @interface PrivacyRoomApiGetUserKeysForRoomRequest
 */
export interface PrivacyRoomApiGetUserKeysForRoomRequest {
    /**
     * The private room whose access keys are read. Take it from the `id` of the room returned by  `POST api/2.0/files/rooms` or listed by `GET api/2.0/files/rooms`.
     * @type {number}
     * @memberof PrivacyRoomApiGetUserKeysForRoom
     */
    readonly roomId: number
}

/**
 * Request parameters for replaceKey operation in PrivacyRoomApi.
 * @export
 * @interface PrivacyRoomApiReplaceKeyRequest
 */
export interface PrivacyRoomApiReplaceKeyRequest {
    /**
     * 
     * @type {EncryptionKeyRequestDto}
     * @memberof PrivacyRoomApiReplaceKey
     */
    readonly encryptionKeyRequestDto?: EncryptionKeyRequestDto
}

/**
 * Request parameters for setKeys operation in PrivacyRoomApi.
 * @export
 * @interface PrivacyRoomApiSetKeysRequest
 */
export interface PrivacyRoomApiSetKeysRequest {
    /**
     * 
     * @type {EncryptionKeyRequestDto}
     * @memberof PrivacyRoomApiSetKeys
     */
    readonly encryptionKeyRequestDto?: EncryptionKeyRequestDto
}

/**
 * PrivacyRoomApi - object-oriented interface
 * @export
 * @class PrivacyRoomApi
 * @extends {BaseAPI}
 */
export class PrivacyRoomApi extends BaseAPI {
    /**
     * Removes one encryption key pair from the calling user\'s own key set and answers 204 with no body. The pair is  named by the `id` of an entry of `GET api/2.0/privacyroom/keys`; the caller\'s other pairs stay as they are.  The call is destructive and cannot be repeated: the key material is gone for good, a second delete of the same  `id`, like an `id` that was never stored, is answered with 404, and there is no parameter for another user\'s  keys, so an authenticated member only ever deletes their own while a guest is refused. Deleting the last key  the caller holds locks them out of the private rooms they belong to, their own rooms included: the rooms and  their content survive untouched and stay listed as private, but `GET api/2.0/privacyroom/{roomId}/access` then  refuses the caller until a new key is stored with `POST api/2.0/privacyroom/keys`. Before DocSpace 4.0 the  call answered 200 with the caller\'s remaining keys, so a client that read that list has to call  `GET api/2.0/privacyroom/keys` instead.
     * @summary Delete an encryption key
     * @param {RoomsPrivacyRoomApiDeleteKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public deleteKeys(requestParameters: PrivacyRoomApiDeleteKeysRequest, options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).deleteKeys(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns every encryption key pair the calling user holds, the encrypted private half included, which is the  material a client needs in order to decrypt content in a private room. The set is personal and there is no  parameter for another user\'s keys: an authenticated caller reads only their own, and a guest, who cannot own  key material at all, always reads an empty set. The call is read-only. An empty answer, whether an empty list  or none at all, means no key has been created yet, and until `POST api/2.0/privacyroom/keys` creates one the  user cannot be invited to a private room. Each entry carries the pair\'s `id`, its owner in `userId`, the  moment the material was stored in `date`, the public half, the private half encrypted with the user\'s  password, and the portal-wide crypto engine in `cryptoEngineId`. For the keys that open a whole private room  use `GET api/2.0/privacyroom/{roomId}/access`, and for the keys a single file is shared with use  `GET api/2.0/files/file/{fileId}/publickeys`; this operation is about the caller alone.
     * @summary Get own encryption keys
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public getUserKeys(options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).getUserKeys(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the encryption keys that give access to a private room: one entry per key held by each of its members,  which is what a client needs in order to encrypt a file key for everyone allowed to open the room\'s content.  Only the caller\'s own entries carry `privateKeyEnc`; another member\'s entry carries the public half alone, and  an entry with no public half is not reported as access at all. The room has to be a private one, a room  created without private mode holds no access keys and the call is refused, and it has to still exist: an  unknown room, or one already moved to Trash, is reported as missing, while an archived private room still  answers. Access follows room membership and not portal role: any member from read access upwards receives the  full set, whereas a DocSpace administrator who is not a member is refused, and so is a caller holding no key  of their own, the room creator included once they delete their last key. The call is read-only. For the keys  of a single file use `GET api/2.0/files/file/{fileId}/publickeys`.
     * @summary Get private room access keys
     * @param {RoomsPrivacyRoomApiGetUserKeysForRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public getUserKeysForRoom(requestParameters: PrivacyRoomApiGetUserKeysForRoomRequest, options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).getUserKeysForRoom(requestParameters.roomId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Rotates one encryption key pair of the calling user: the entry whose `id` matches is overwritten with the  submitted `publicKey` and `privateKeyEnc`, and the caller\'s other pairs are left untouched. The pair has to  exist already, an `id` that is not in the caller\'s set is answered with 404, and a first key is created with  `POST api/2.0/privacyroom/keys`. This is a full replacement rather than a merge: both halves are mandatory,  and a request that omits or blanks one of them is rejected as invalid with the stored pair surviving  unchanged, so a rotation that means to keep the private half has to send it again. Omitting `id` targets the  all-zero pair, the one a client that never sets an id keeps rotating. Every authenticated member rotates their  own keys and only their own, and a guest is refused. The call is mutating, and repeating it with the same body  leaves the same state. It answers with every key the caller holds afterwards, and from then on  `GET api/2.0/privacyroom/{roomId}/access` reports the new public half for this member.
     * @summary Rotate an encryption key
     * @param {RoomsPrivacyRoomApiReplaceKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public replaceKey(requestParameters: PrivacyRoomApiReplaceKeyRequest = {}, options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).replaceKey(requestParameters.encryptionKeyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores a new encryption key pair for the calling user and answers with that user\'s whole key set. The material  is end-to-end: `publicKey` is the half other members use to encrypt file keys for this user, while  `privateKeyEnc` arrives already encrypted with the user\'s own password, so the portal keeps it as opaque text.  A member must hold at least one key before they can be invited to a private room, which makes this the first  call of the private-room flow. Every authenticated member manages their own keys and only their own, there is  no parameter for somebody else\'s, and a guest is refused, which is also why a guest cannot become a member of  a private room. The call is mutating and is not safe to repeat: `id` names the pair inside the caller\'s set  and an `id` that is already stored is answered with 409, while a request that omits or blanks either half is  rejected as invalid and stores nothing. A successful call answers 201 with every key the caller now holds. To  change the material of an existing pair use `PUT api/2.0/privacyroom/keys`.
     * @summary Create an encryption key
     * @param {RoomsPrivacyRoomApiSetKeysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrivacyRoomApi
     */
    public setKeys(requestParameters: PrivacyRoomApiSetKeysRequest = {}, options?: RawAxiosRequestConfig) {
        return PrivacyRoomApiFp(this.configuration).setKeys(requestParameters.encryptionKeyRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

