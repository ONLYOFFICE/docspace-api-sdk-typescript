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
import type { AceShortWrapperArrayWrapper } from '../../models';
// @ts-ignore
import type { BaseBatchRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { ChangeOwnerRequestDto } from '../../models';
// @ts-ignore
import type { EncryptionKeyArrayWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { ExternalShareRequestParam } from '../../models';
// @ts-ignore
import type { ExternalShareWrapper } from '../../models';
// @ts-ignore
import type { FileEntryBaseArrayWrapper } from '../../models';
// @ts-ignore
import type { FileShareArrayWrapper } from '../../models';
// @ts-ignore
import type { GroupMemberSecurityRequestArrayWrapper } from '../../models';
// @ts-ignore
import type { MentionMessageWrapper } from '../../models';
// @ts-ignore
import type { MentionWrapperArrayWrapper } from '../../models';
// @ts-ignore
import type { SecurityInfoRequestDto } from '../../models';
// @ts-ignore
import type { SecurityInfoSimpleRequestDto } from '../../models';
/**
 * SharingApi - axios parameter creator
 * @export
 */
export const SharingApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Submits the password of a protected external share link and answers with the same resolved link data as  `GET api/2.0/files/share/{key}`, so this operation is called only after that one reported that a password is  required. The token in the path is the `requestToken` of the link, and the password is the one chosen by the  member who shared the entry. The call needs no authentication; a signed-in caller that may already read the  room is let through by the resolve operation itself and does not need the password at all. A correct password  is remembered for the caller, so later requests with the same token resolve without repeating it, and a wrong  one is reported in the `status` field as an invalid password rather than as an HTTP error, while the  remembered password is dropped. Attempts are counted per link and per calling address: once the portal\'s limit  is reached, further attempts are rejected until the block expires, which makes the operation unsuitable for  trying passwords in a loop. Nothing about the entry is changed by the call itself.
         * @summary Unlock a password-protected link
         * @param {string} key The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link  operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that  carries the link\'s own identifier, so it cannot be assembled by hand.
         * @param {ExternalShareRequestParam} externalShareRequestParam The body of the request, holding the password to check.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         */
        applyExternalSharePassword: async (key: string, externalShareRequestParam: ExternalShareRequestParam, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('applyExternalSharePassword', 'key', key)
            // verify required parameter 'externalShareRequestParam' is not null or undefined
            assertParamExists('applyExternalSharePassword', 'externalShareRequestParam', externalShareRequestParam)

            const localVarPath = `/api/2.0/files/share/{key}/password`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(externalShareRequestParam, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Hands the ownership of the listed rooms and files over to a single account, and returns the entries as they  look afterwards. Among folders only rooms are accepted - take their identifiers from  `GET api/2.0/files/rooms`; a plain folder is refused. A file is accepted only while it lies in the portal\'s  common section, so a file kept inside a room or in a personal section is refused as well, and so is a file  that is locked or currently open in the editor. The new owner has to be an active account that is allowed to  manage rooms, and a private room additionally requires that this account has already set up its encryption  keys; a deactivated account, a guest or a plain member is rejected. The caller must be the creator of every  listed room, or a portal administrator. The call mutates the entries one at a time and stops at the first item  it may not touch, leaving the entries already processed changed, so a partial answer is possible; an item  whose owner is already the target account is returned untouched, which makes a repeat safe. The previous owner  keeps access to a transferred room as its manager, while a transferred file is saved as a new version authored  by the new owner. An entry that lives on a connected third-party account is quietly left out.
         * @summary Change the room or file owner
         * @param {ChangeOwnerRequestDto} [changeOwnerRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeFileOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/
         */
        changeFileOwner: async (changeOwnerRequestDto?: ChangeOwnerRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/owner`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(changeOwnerRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Answers with the encryption keys that open one file kept in a private room: one entry per member who holds  rights on the file and has published keys, each carrying that member\'s public key, and the caller\'s own entry  carrying the encrypted private half as well. The private half of another member is never handed out. A member  who has not published keys yet is left out of the answer altogether, which is how a client tells that this  member cannot open the file until keys are published through `POST api/2.0/privacyroom/keys`; a member who  holds the file only through a group is not reported either, because group entries are skipped. The file has to  lie in a private room or in the encrypted section - a file kept anywhere else carries no keys and is rejected  as an unsupported request. The caller needs read access to the file and is answered with 403 otherwise, and a  file that does not exist is answered as missing. The call is read-only, and the answer changes as soon as a  member publishes or rotates keys, so read it again rather than caching it for a later session.
         * @summary Get file encryption keys
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEncryptionAccess operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-access/
         */
        getEncryptionAccess: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getEncryptionAccess', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/publickeys`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
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
         * Resolves the token of an external share link into the room or file it points at, and reports the outcome of  validating the link. The token is the `requestToken` of a link returned by the link operations of an entry,  such as `GET api/2.0/files/file/{id}/link` or `GET api/2.0/files/rooms/{id}/link`. The call needs no  authentication and answers a refused link in the `status` field rather than with an HTTP error, so that field  has to be read before anything else: a token that matches no link, and a link whose entry has been archived or  moved to the trash, both resolve as invalid; a link past its expiration date resolves as expired; a  password-protected link resolves as requiring a password, which is then submitted through  `POST api/2.0/files/share/{key}/password`; and a public link resolves as denied when the portal forbids  sharing with people outside it. The call is not read-only: for a signed-in caller the first successful  resolution puts the entry into the account\'s own lists, and for a visitor without an account it opens an  anonymous session that later requests with the same token reuse. Pass `fileId` or `folderId` to have an entry  inside the link\'s target echoed back.
         * @summary Resolve an external share link
         * @param {string} key The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link  operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that  carries the link\'s own identifier, so it cannot be assembled by hand.
         * @param {string} [fileId] A file inside the room the link points at, echoed back in the answer\'s entity fields so a client can show what  was opened. The value is ignored when the file does not sit under the link\'s target, and passing it together  with a folder has no effect - the file wins.
         * @param {string} [folderId] A folder inside the room the link points at, echoed back in the answer\'s entity fields. It is ignored when the  folder does not sit under the link\'s target, and when a file is passed as well.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         */
        getExternalShareData: async (key: string, fileId?: string, folderId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getExternalShareData', 'key', key)

            const localVarPath = `/api/2.0/files/share/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cookieAuth required

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (fileId !== undefined) {
                localVarQueryParameter['fileId'] = fileId;
            }

            if (folderId !== undefined) {
                localVarQueryParameter['folderId'] = folderId;
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
         * Lists the accounts and groups that hold rights on one file, one entry per subject, with the level each of them  has, whether the caller may still change that level, and which of them owns the file. The owner comes first,  then room managers, groups, ordinary members, guests, and last the accounts that have not accepted their  invitation yet, each of those ranked by access level and by name. External links are left out and are listed  by `GET api/2.0/files/file/{id}/links` instead, while a PDF form kept in a form-filling room also reports the  link of that room, because the form is filled out through it. `startIndex` and `count` page through the  subjects, and their total number is reported in the response headers rather than in the body. Listing takes  the right to change the sharing of the file, which its creator, the manager of its room and a portal  administrator acting as room manager have, while inside a public room reading the file is enough; a member who  may read but not share is answered with an empty list although the header still counts the subjects, and a  caller with no access, a guest included, is refused. A file that does not exist, or was deleted permanently,  is answered as missing. The call is read-only; for several entries at once use `POST api/2.0/files/share`.
         * @summary Get file sharing rights
         * @param {number} id The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-security-info/
         */
        getFileSecurityInfo: async (id: number | string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFileSecurityInfo', 'id', id)

            const localVarPath = `/api/2.0/files/file/{id}/share`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Lists the accounts and groups that hold rights on one folder or room, one entry per subject, with the level  each of them has, whether the caller may still change that level, and which of them owns the entry. The owner  comes first, then room managers, groups, ordinary members, guests, and last the accounts that have not  accepted their invitation yet, each of those ranked by access level and by name. External links are left out  and are listed by `GET api/2.0/files/folder/{id}/links` instead. `startIndex` and `count` page through the  subjects, and their total number is reported in the response headers rather than in the body. For a room, and  for a folder inside a public room, read access is enough; any other folder is listed only to a caller who may  change its sharing, which the manager of its room and a portal administrator acting as room manager may, and a  member who may only read such a folder is answered with an empty list although the header still counts the  subjects. A caller with no access, a guest included, is refused, and a folder that does not exist is answered  as missing. The call is read-only. For a room prefer `GET api/2.0/files/rooms/{id}/share`, which filters the  same subjects by kind and by name.
         * @summary Get folder sharing rights
         * @param {number} id The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this folder that return a list; an operation  that answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-security-info/
         */
        getFolderSecurityInfo: async (id: number | string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFolderSecurityInfo', 'id', id)

            const localVarPath = `/api/2.0/files/folder/{id}/share`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Lists the members of one portal group together with the access each of them has on a file that group was  granted rights to: `groupAccess` is the level the group itself carries, `userAccess` is the level set on that  member alone, `overridden` says which of the two applies, `owner` marks the member who created the file, and  `canEditAccess` says whether the caller may still change that member\'s level. Take the group identifier from  the group entries of `GET api/2.0/files/file/{id}/share`. `startIndex` and `count` page through the members,  `filterValue` keeps only those whose first name, last name or email contains the value - the comparison is  made in lower case, so an uppercase value matches nothing - and the number of members is reported in the  response headers. Members come back ordered by first name. A group that holds no rights on this file, a file  the caller cannot read and a file that does not exist are all answered with an empty list rather than an  error, so an empty answer does not mean that the group has no members. A guest is refused. The call is  read-only.
         * @summary Get file access of group members
         * @param {number} fileId The file whose access is being read. A file stored on the portal is numbered, while a file in a connected  third-party account is named by an opaque string.
         * @param {string} groupId The group whose members are listed. Take it from the entries of `GET api/2.0/files/file/{id}/share` that stand  for a group; a group that holds no rights on this file is answered with an empty list.
         * @param {number} [count] How many members at most to answer with.
         * @param {number} [startIndex] How many members to skip before answering, used together with `count` to page through a large group.
         * @param {string} [filterValue] Keeps only the members whose first name, last name or email contains this value. The value is matched in lower  case, so an uppercase one finds nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsMembersWithFileSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-file-security/
         */
        getGroupsMembersWithFileSecurity: async (fileId: number | string, groupId: string, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getGroupsMembersWithFileSecurity', 'fileId', fileId)
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getGroupsMembersWithFileSecurity', 'groupId', groupId)

            const localVarPath = `/api/2.0/files/file/{fileId}/group/{groupId}/share`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
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
         * Lists the members of one portal group together with the access each of them has on a folder or room that group  was granted rights to: `groupAccess` is the level the group itself carries, `userAccess` is the level set on  that member alone, `overridden` says which of the two applies, `owner` marks the member who created the entry,  and `canEditAccess` says whether the caller may still change that member\'s level. Take the group identifier  from the group entries of `GET api/2.0/files/folder/{id}/share`. `startIndex` and `count` page through the  members, `filterValue` keeps only those whose first name, last name or email contains the value - the  comparison is made in lower case, so an uppercase value matches nothing - and the number of members is  reported in the response headers. Members come back ordered by first name. A group that holds no rights on  this folder, a folder the caller cannot read and a folder that does not exist are all answered with an empty  list rather than an error, so an empty answer does not mean that the group has no members. A guest is refused.  The call is read-only.
         * @summary Get folder access of group members
         * @param {number} folderId The folder or room whose access is being read. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
         * @param {string} groupId The group whose members are listed. Take it from the entries of `GET api/2.0/files/folder/{id}/share` that  stand for a group; a group that holds no rights on this folder is answered with an empty list.
         * @param {number} [count] How many members at most to answer with.
         * @param {number} [startIndex] How many members to skip before answering, used together with `count` to page through a large group.
         * @param {string} [filterValue] Keeps only the members whose first name, last name or email contains this value. The value is matched in lower  case, so an uppercase one finds nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsMembersWithFolderSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-folder-security/
         */
        getGroupsMembersWithFolderSecurity: async (folderId: number | string, groupId: string, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'folderId' is not null or undefined
            assertParamExists('getGroupsMembersWithFolderSecurity', 'folderId', folderId)
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getGroupsMembersWithFolderSecurity', 'groupId', groupId)

            const localVarPath = `/api/2.0/files/folder/{folderId}/group/{groupId}/share`
                .replace(`{${"folderId"}}`, encodeURIComponent(String(folderId)))
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
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
         * Returns who has access to the files and folders listed in the request, merged into one list of subjects, and  is the batch counterpart of `GET api/2.0/files/file/{id}/share` and `GET api/2.0/files/rooms/{id}/share`.  Identifiers come from any listing operation, such as `GET api/2.0/files/{folderId}`. The caller needs read  access to every listed entry: a single entry it cannot read makes the whole call fail instead of dropping that  entry, so the list has to be filtered beforehand. Identifiers that match nothing are skipped without an error,  and an empty list of identifiers gives an empty answer. The call is read-only. Each account or group appears  once: the caller\'s own record comes first, the owner\'s record second, and the rest are ordered by display  name. When the same subject holds different rights on the listed entries, its access is reported as the  `Varies` value instead of a real level, which means the entries have to be inspected one by one to see the  difference. Records that describe external links are included only for a caller that is allowed to read the  links of the entry.
         * @summary Get sharing rights in batch
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-security-info/
         */
        getSecurityInfo: async (baseBatchRequestDto?: BaseBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/share`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(baseBatchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists the portal members who can read the file, which is what an editor client offers when somebody types a  mention. The set holds the readers of the file plus everyone who reads it by role rather than by share - the  portal owner, the DocSpace administrators and the author of the file - while the caller themselves, the  subjects standing behind external links and deactivated accounts are left out. It is ordered by display name  as the portal renders it. A guest receives a single entry, the owner of the file, because a guest is not a  portal member and may not learn who else works on the document. The caller needs read access to the file, and  an unknown file id is reported as missing. The call only reads. A caller who reached the file through an  external link instead of an account is answered with nothing at all. For the users to offer when protecting a  document use `GET api/2.0/files/file/{fileId}/protectusers`.
         * @summary Get users to mention in a file
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSharedUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/
         */
        getSharedUsers: async (fileId: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getSharedUsers', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/sharedusers`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
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
         * Revokes the access of every account and group on the files and folders listed in the request, and clears the  entries from the caller\'s own favorites, recent and unread marks. The owner\'s own record is kept, since  removing it would take the entry away from the account that owns it, and external links survive untouched -  remove those through the link operations of the entry. The caller must be allowed to change the access of each  entry, which means the creator of the room, a portal administrator, or a member with the rights to manage it;  a caller whose only access came through an external link may use this call to drop the entry from its own  list, while a directly invited member or an unrelated account is refused. The answer is always `true` and  identifiers that match nothing are skipped silently, so a successful answer is not proof that anything was  revoked - read the rights back with `POST api/2.0/files/share`. The call is destructive and safe to repeat. To  take the rights of one account away instead of all of them, call `PUT api/2.0/files/share` with that account\'s  access set to `None`.
         * @summary Remove sharing rights in batch
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-security-info/
         */
        removeSecurityInfo: async (baseBatchRequestDto?: BaseBatchRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/share`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(baseBatchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Emails the people named in `emails` that they were mentioned in a file, with a link that opens the file at the  place the mention sits when `actionLink` carries the anchor the editor produced. Only addresses that belong to  portal accounts are notified: an address that belongs to nobody is skipped, and the note is cut to its first  200 characters in the mail, while a `message` longer than the field allows is refused with 400. The answer is  usually empty: the access list of the file comes back when the file is encrypted, or when one of the addresses  belongs to nobody and the caller may share the file - that is then the cue to invite that person with  `PUT api/2.0/files/file/{id}/share`. The caller needs comment rights, which the creator of the file, the  manager of its room and a member invited to comment, review or edit have, while a guest or a member without  access is refused with 403; a file that does not exist answers with 404 and a file in the trash is refused.  The operation is rate-limited and answers 429 once the caller sends too many notifications. A delivery failure  is swallowed, so 200 does not prove that the mail left the portal.
         * @summary Notify mentioned users
         * @param {number} fileId The file the mention was made in. A file stored on the portal is numbered, while a file in a connected  third-party account is named by an opaque string.
         * @param {MentionMessageWrapper} [mentionMessageWrapper] The notification to send.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendEditorNotify operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/
         */
        sendEditorNotify: async (fileId: number | string, mentionMessageWrapper?: MentionMessageWrapper, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('sendEditorNotify', 'fileId', fileId)

            const localVarPath = `/api/2.0/files/file/{fileId}/sendeditornotify`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(mentionMessageWrapper, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Grants, changes or withdraws the rights of the listed accounts and groups on one file, and answers with the  rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get,  and the level that denies everything takes the access away instead; an empty `share` changes nothing and is  answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to  another member, is dropped without an error, so compare the answer with what was sent. With `notify` set, each  account named is emailed about the access it received and `sharingMessage` is put into that mail with its  markup stripped, while a message longer than the field allows is rejected as an invalid request. The caller  has to be allowed to change the sharing of the file, which its creator, the manager of the room it lies in and  a portal administrator acting as room manager are; anyone else, a guest and a member with read access  included, is refused. The call is mutating and safe to repeat. For several files and folders in one request  use `PUT api/2.0/files/share`.
         * @summary Share a file
         * @param {number} id The file whose sharing is being changed. A file stored on the portal is numbered, while a file in a connected  third-party account is named by an opaque string.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The rights to apply to the file, and whether to announce them by mail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/
         */
        setFileSecurityInfo: async (id: number | string, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setFileSecurityInfo', 'id', id)
            // verify required parameter 'securityInfoSimpleRequestDto' is not null or undefined
            assertParamExists('setFileSecurityInfo', 'securityInfoSimpleRequestDto', securityInfoSimpleRequestDto)

            const localVarPath = `/api/2.0/files/file/{id}/share`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(securityInfoSimpleRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Grants, changes or withdraws the rights of the listed accounts and groups on one folder, and answers with the  rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get,  and the level that denies everything takes the access away instead; an empty `share` changes nothing and is  answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to  another member, is dropped without an error. With `notify` set, each account named is emailed about the access  it received and `sharingMessage` is put into that mail with its markup stripped, while a message longer than  the field allows is rejected as an invalid request. The caller has to be allowed to change the sharing of the  folder, which the manager of the room it belongs to and a portal administrator acting as room manager are;  anyone else, a guest and a member with read access included, is refused. The call is mutating and safe to  repeat. For a room use `PUT api/2.0/files/rooms/{id}/share`, which invites people by email as well.
         * @summary Share a folder
         * @param {number} id The folder whose sharing is being changed. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The rights to apply to the folder, and whether to announce them by mail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/
         */
        setFolderSecurityInfo: async (id: number | string, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setFolderSecurityInfo', 'id', id)
            // verify required parameter 'securityInfoSimpleRequestDto' is not null or undefined
            assertParamExists('setFolderSecurityInfo', 'securityInfoSimpleRequestDto', securityInfoSimpleRequestDto)

            const localVarPath = `/api/2.0/files/folder/{id}/share`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(securityInfoSimpleRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Grants, changes or withdraws the access of the listed accounts and groups on every file and folder named in  the request at once, and returns the resulting rights. Entry identifiers come from a listing operation, and  the accounts and groups come from the portal\'s own account and group lists; an access of `None` withdraws the  rights instead of granting them. The caller must be allowed to change the access of every listed entry - the  creator of the room, a member with the rights to manage it, or a portal administrator - and a read-only member  or a guest is refused even when the payload changes nothing. A subject the caller is not allowed to share  with, such as a guest that belongs to another member, is skipped without an error, and an empty `share`  collection makes the call do nothing and answer with an empty list. Repeating the same request leaves the same  rights in place. The answer holds one record per listed subject for each entry that was actually processed, so  it is shorter than the request when something was skipped and worth comparing against it. For a single room  prefer `PUT api/2.0/files/rooms/{id}/share`, which also invites members by email.
         * @summary Set sharing rights in batch
         * @param {SecurityInfoRequestDto} [securityInfoRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-security-info/
         */
        setSecurityInfo: async (securityInfoRequestDto?: SecurityInfoRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/share`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(securityInfoRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SharingApi - functional programming interface
 * @export
 */
export const SharingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SharingApiAxiosParamCreator(configuration)
    return {
        /**
         * Submits the password of a protected external share link and answers with the same resolved link data as  `GET api/2.0/files/share/{key}`, so this operation is called only after that one reported that a password is  required. The token in the path is the `requestToken` of the link, and the password is the one chosen by the  member who shared the entry. The call needs no authentication; a signed-in caller that may already read the  room is let through by the resolve operation itself and does not need the password at all. A correct password  is remembered for the caller, so later requests with the same token resolve without repeating it, and a wrong  one is reported in the `status` field as an invalid password rather than as an HTTP error, while the  remembered password is dropped. Attempts are counted per link and per calling address: once the portal\'s limit  is reached, further attempts are rejected until the block expires, which makes the operation unsuitable for  trying passwords in a loop. Nothing about the entry is changed by the call itself.
         * @summary Unlock a password-protected link
         * @param {string} key The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link  operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that  carries the link\'s own identifier, so it cannot be assembled by hand.
         * @param {ExternalShareRequestParam} externalShareRequestParam The body of the request, holding the password to check.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         */
        async applyExternalSharePassword(key: string, externalShareRequestParam: ExternalShareRequestParam, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.applyExternalSharePassword(key, externalShareRequestParam, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.applyExternalSharePassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Hands the ownership of the listed rooms and files over to a single account, and returns the entries as they  look afterwards. Among folders only rooms are accepted - take their identifiers from  `GET api/2.0/files/rooms`; a plain folder is refused. A file is accepted only while it lies in the portal\'s  common section, so a file kept inside a room or in a personal section is refused as well, and so is a file  that is locked or currently open in the editor. The new owner has to be an active account that is allowed to  manage rooms, and a private room additionally requires that this account has already set up its encryption  keys; a deactivated account, a guest or a plain member is rejected. The caller must be the creator of every  listed room, or a portal administrator. The call mutates the entries one at a time and stops at the first item  it may not touch, leaving the entries already processed changed, so a partial answer is possible; an item  whose owner is already the target account is returned untouched, which makes a repeat safe. The previous owner  keeps access to a transferred room as its manager, while a transferred file is saved as a new version authored  by the new owner. An entry that lives on a connected third-party account is quietly left out.
         * @summary Change the room or file owner
         * @param {ChangeOwnerRequestDto} [changeOwnerRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeFileOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/
         */
        async changeFileOwner(changeOwnerRequestDto?: ChangeOwnerRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeFileOwner(changeOwnerRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.changeFileOwner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Answers with the encryption keys that open one file kept in a private room: one entry per member who holds  rights on the file and has published keys, each carrying that member\'s public key, and the caller\'s own entry  carrying the encrypted private half as well. The private half of another member is never handed out. A member  who has not published keys yet is left out of the answer altogether, which is how a client tells that this  member cannot open the file until keys are published through `POST api/2.0/privacyroom/keys`; a member who  holds the file only through a group is not reported either, because group entries are skipped. The file has to  lie in a private room or in the encrypted section - a file kept anywhere else carries no keys and is rejected  as an unsupported request. The caller needs read access to the file and is answered with 403 otherwise, and a  file that does not exist is answered as missing. The call is read-only, and the answer changes as soon as a  member publishes or rotates keys, so read it again rather than caching it for a later session.
         * @summary Get file encryption keys
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEncryptionAccess operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-access/
         */
        async getEncryptionAccess(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncryptionKeyArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEncryptionAccess(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getEncryptionAccess']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resolves the token of an external share link into the room or file it points at, and reports the outcome of  validating the link. The token is the `requestToken` of a link returned by the link operations of an entry,  such as `GET api/2.0/files/file/{id}/link` or `GET api/2.0/files/rooms/{id}/link`. The call needs no  authentication and answers a refused link in the `status` field rather than with an HTTP error, so that field  has to be read before anything else: a token that matches no link, and a link whose entry has been archived or  moved to the trash, both resolve as invalid; a link past its expiration date resolves as expired; a  password-protected link resolves as requiring a password, which is then submitted through  `POST api/2.0/files/share/{key}/password`; and a public link resolves as denied when the portal forbids  sharing with people outside it. The call is not read-only: for a signed-in caller the first successful  resolution puts the entry into the account\'s own lists, and for a visitor without an account it opens an  anonymous session that later requests with the same token reuse. Pass `fileId` or `folderId` to have an entry  inside the link\'s target echoed back.
         * @summary Resolve an external share link
         * @param {string} key The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link  operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that  carries the link\'s own identifier, so it cannot be assembled by hand.
         * @param {string} [fileId] A file inside the room the link points at, echoed back in the answer\'s entity fields so a client can show what  was opened. The value is ignored when the file does not sit under the link\'s target, and passing it together  with a folder has no effect - the file wins.
         * @param {string} [folderId] A folder inside the room the link points at, echoed back in the answer\'s entity fields. It is ignored when the  folder does not sit under the link\'s target, and when a file is passed as well.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         */
        async getExternalShareData(key: string, fileId?: string, folderId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExternalShareData(key, fileId, folderId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getExternalShareData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the accounts and groups that hold rights on one file, one entry per subject, with the level each of them  has, whether the caller may still change that level, and which of them owns the file. The owner comes first,  then room managers, groups, ordinary members, guests, and last the accounts that have not accepted their  invitation yet, each of those ranked by access level and by name. External links are left out and are listed  by `GET api/2.0/files/file/{id}/links` instead, while a PDF form kept in a form-filling room also reports the  link of that room, because the form is filled out through it. `startIndex` and `count` page through the  subjects, and their total number is reported in the response headers rather than in the body. Listing takes  the right to change the sharing of the file, which its creator, the manager of its room and a portal  administrator acting as room manager have, while inside a public room reading the file is enough; a member who  may read but not share is answered with an empty list although the header still counts the subjects, and a  caller with no access, a guest included, is refused. A file that does not exist, or was deleted permanently,  is answered as missing. The call is read-only; for several entries at once use `POST api/2.0/files/share`.
         * @summary Get file sharing rights
         * @param {number} id The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-security-info/
         */
        async getFileSecurityInfo(id: number | string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileSecurityInfo(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getFileSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the accounts and groups that hold rights on one folder or room, one entry per subject, with the level  each of them has, whether the caller may still change that level, and which of them owns the entry. The owner  comes first, then room managers, groups, ordinary members, guests, and last the accounts that have not  accepted their invitation yet, each of those ranked by access level and by name. External links are left out  and are listed by `GET api/2.0/files/folder/{id}/links` instead. `startIndex` and `count` page through the  subjects, and their total number is reported in the response headers rather than in the body. For a room, and  for a folder inside a public room, read access is enough; any other folder is listed only to a caller who may  change its sharing, which the manager of its room and a portal administrator acting as room manager may, and a  member who may only read such a folder is answered with an empty list although the header still counts the  subjects. A caller with no access, a guest included, is refused, and a folder that does not exist is answered  as missing. The call is read-only. For a room prefer `GET api/2.0/files/rooms/{id}/share`, which filters the  same subjects by kind and by name.
         * @summary Get folder sharing rights
         * @param {number} id The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
         * @param {number} [count] How many entries at most to answer with, in the operations of this folder that return a list; an operation  that answers with a single object is not affected by it.
         * @param {number} [startIndex] How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-security-info/
         */
        async getFolderSecurityInfo(id: number | string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFolderSecurityInfo(id, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getFolderSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the members of one portal group together with the access each of them has on a file that group was  granted rights to: `groupAccess` is the level the group itself carries, `userAccess` is the level set on that  member alone, `overridden` says which of the two applies, `owner` marks the member who created the file, and  `canEditAccess` says whether the caller may still change that member\'s level. Take the group identifier from  the group entries of `GET api/2.0/files/file/{id}/share`. `startIndex` and `count` page through the members,  `filterValue` keeps only those whose first name, last name or email contains the value - the comparison is  made in lower case, so an uppercase value matches nothing - and the number of members is reported in the  response headers. Members come back ordered by first name. A group that holds no rights on this file, a file  the caller cannot read and a file that does not exist are all answered with an empty list rather than an  error, so an empty answer does not mean that the group has no members. A guest is refused. The call is  read-only.
         * @summary Get file access of group members
         * @param {number} fileId The file whose access is being read. A file stored on the portal is numbered, while a file in a connected  third-party account is named by an opaque string.
         * @param {string} groupId The group whose members are listed. Take it from the entries of `GET api/2.0/files/file/{id}/share` that stand  for a group; a group that holds no rights on this file is answered with an empty list.
         * @param {number} [count] How many members at most to answer with.
         * @param {number} [startIndex] How many members to skip before answering, used together with `count` to page through a large group.
         * @param {string} [filterValue] Keeps only the members whose first name, last name or email contains this value. The value is matched in lower  case, so an uppercase one finds nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsMembersWithFileSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-file-security/
         */
        async getGroupsMembersWithFileSecurity(fileId: number | string, groupId: string, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupMemberSecurityRequestArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsMembersWithFileSecurity(fileId, groupId, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getGroupsMembersWithFileSecurity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the members of one portal group together with the access each of them has on a folder or room that group  was granted rights to: `groupAccess` is the level the group itself carries, `userAccess` is the level set on  that member alone, `overridden` says which of the two applies, `owner` marks the member who created the entry,  and `canEditAccess` says whether the caller may still change that member\'s level. Take the group identifier  from the group entries of `GET api/2.0/files/folder/{id}/share`. `startIndex` and `count` page through the  members, `filterValue` keeps only those whose first name, last name or email contains the value - the  comparison is made in lower case, so an uppercase value matches nothing - and the number of members is  reported in the response headers. Members come back ordered by first name. A group that holds no rights on  this folder, a folder the caller cannot read and a folder that does not exist are all answered with an empty  list rather than an error, so an empty answer does not mean that the group has no members. A guest is refused.  The call is read-only.
         * @summary Get folder access of group members
         * @param {number} folderId The folder or room whose access is being read. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
         * @param {string} groupId The group whose members are listed. Take it from the entries of `GET api/2.0/files/folder/{id}/share` that  stand for a group; a group that holds no rights on this folder is answered with an empty list.
         * @param {number} [count] How many members at most to answer with.
         * @param {number} [startIndex] How many members to skip before answering, used together with `count` to page through a large group.
         * @param {string} [filterValue] Keeps only the members whose first name, last name or email contains this value. The value is matched in lower  case, so an uppercase one finds nothing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getGroupsMembersWithFolderSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-folder-security/
         */
        async getGroupsMembersWithFolderSecurity(folderId: number | string, groupId: string, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupMemberSecurityRequestArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupsMembersWithFolderSecurity(folderId, groupId, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getGroupsMembersWithFolderSecurity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns who has access to the files and folders listed in the request, merged into one list of subjects, and  is the batch counterpart of `GET api/2.0/files/file/{id}/share` and `GET api/2.0/files/rooms/{id}/share`.  Identifiers come from any listing operation, such as `GET api/2.0/files/{folderId}`. The caller needs read  access to every listed entry: a single entry it cannot read makes the whole call fail instead of dropping that  entry, so the list has to be filtered beforehand. Identifiers that match nothing are skipped without an error,  and an empty list of identifiers gives an empty answer. The call is read-only. Each account or group appears  once: the caller\'s own record comes first, the owner\'s record second, and the rest are ordered by display  name. When the same subject holds different rights on the listed entries, its access is reported as the  `Varies` value instead of a real level, which means the entries have to be inspected one by one to see the  difference. Records that describe external links are included only for a caller that is allowed to read the  links of the entry.
         * @summary Get sharing rights in batch
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-security-info/
         */
        async getSecurityInfo(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSecurityInfo(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the portal members who can read the file, which is what an editor client offers when somebody types a  mention. The set holds the readers of the file plus everyone who reads it by role rather than by share - the  portal owner, the DocSpace administrators and the author of the file - while the caller themselves, the  subjects standing behind external links and deactivated accounts are left out. It is ordered by display name  as the portal renders it. A guest receives a single entry, the owner of the file, because a guest is not a  portal member and may not learn who else works on the document. The caller needs read access to the file, and  an unknown file id is reported as missing. The call only reads. A caller who reached the file through an  external link instead of an account is answered with nothing at all. For the users to offer when protecting a  document use `GET api/2.0/files/file/{fileId}/protectusers`.
         * @summary Get users to mention in a file
         * @param {number} fileId The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSharedUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/
         */
        async getSharedUsers(fileId: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MentionWrapperArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSharedUsers(fileId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.getSharedUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Revokes the access of every account and group on the files and folders listed in the request, and clears the  entries from the caller\'s own favorites, recent and unread marks. The owner\'s own record is kept, since  removing it would take the entry away from the account that owns it, and external links survive untouched -  remove those through the link operations of the entry. The caller must be allowed to change the access of each  entry, which means the creator of the room, a portal administrator, or a member with the rights to manage it;  a caller whose only access came through an external link may use this call to drop the entry from its own  list, while a directly invited member or an unrelated account is refused. The answer is always `true` and  identifiers that match nothing are skipped silently, so a successful answer is not proof that anything was  revoked - read the rights back with `POST api/2.0/files/share`. The call is destructive and safe to repeat. To  take the rights of one account away instead of all of them, call `PUT api/2.0/files/share` with that account\'s  access set to `None`.
         * @summary Remove sharing rights in batch
         * @param {BaseBatchRequestDto} [baseBatchRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-security-info/
         */
        async removeSecurityInfo(baseBatchRequestDto?: BaseBatchRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeSecurityInfo(baseBatchRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.removeSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Emails the people named in `emails` that they were mentioned in a file, with a link that opens the file at the  place the mention sits when `actionLink` carries the anchor the editor produced. Only addresses that belong to  portal accounts are notified: an address that belongs to nobody is skipped, and the note is cut to its first  200 characters in the mail, while a `message` longer than the field allows is refused with 400. The answer is  usually empty: the access list of the file comes back when the file is encrypted, or when one of the addresses  belongs to nobody and the caller may share the file - that is then the cue to invite that person with  `PUT api/2.0/files/file/{id}/share`. The caller needs comment rights, which the creator of the file, the  manager of its room and a member invited to comment, review or edit have, while a guest or a member without  access is refused with 403; a file that does not exist answers with 404 and a file in the trash is refused.  The operation is rate-limited and answers 429 once the caller sends too many notifications. A delivery failure  is swallowed, so 200 does not prove that the mail left the portal.
         * @summary Notify mentioned users
         * @param {number} fileId The file the mention was made in. A file stored on the portal is numbered, while a file in a connected  third-party account is named by an opaque string.
         * @param {MentionMessageWrapper} [mentionMessageWrapper] The notification to send.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for sendEditorNotify operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/
         */
        async sendEditorNotify(fileId: number | string, mentionMessageWrapper?: MentionMessageWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AceShortWrapperArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendEditorNotify(fileId, mentionMessageWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.sendEditorNotify']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Grants, changes or withdraws the rights of the listed accounts and groups on one file, and answers with the  rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get,  and the level that denies everything takes the access away instead; an empty `share` changes nothing and is  answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to  another member, is dropped without an error, so compare the answer with what was sent. With `notify` set, each  account named is emailed about the access it received and `sharingMessage` is put into that mail with its  markup stripped, while a message longer than the field allows is rejected as an invalid request. The caller  has to be allowed to change the sharing of the file, which its creator, the manager of the room it lies in and  a portal administrator acting as room manager are; anyone else, a guest and a member with read access  included, is refused. The call is mutating and safe to repeat. For several files and folders in one request  use `PUT api/2.0/files/share`.
         * @summary Share a file
         * @param {number} id The file whose sharing is being changed. A file stored on the portal is numbered, while a file in a connected  third-party account is named by an opaque string.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The rights to apply to the file, and whether to announce them by mail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/
         */
        async setFileSecurityInfo(id: number | string, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFileSecurityInfo(id, securityInfoSimpleRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.setFileSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Grants, changes or withdraws the rights of the listed accounts and groups on one folder, and answers with the  rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get,  and the level that denies everything takes the access away instead; an empty `share` changes nothing and is  answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to  another member, is dropped without an error. With `notify` set, each account named is emailed about the access  it received and `sharingMessage` is put into that mail with its markup stripped, while a message longer than  the field allows is rejected as an invalid request. The caller has to be allowed to change the sharing of the  folder, which the manager of the room it belongs to and a portal administrator acting as room manager are;  anyone else, a guest and a member with read access included, is refused. The call is mutating and safe to  repeat. For a room use `PUT api/2.0/files/rooms/{id}/share`, which invites people by email as well.
         * @summary Share a folder
         * @param {number} id The folder whose sharing is being changed. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
         * @param {SecurityInfoSimpleRequestDto} securityInfoSimpleRequestDto The rights to apply to the folder, and whether to announce them by mail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/
         */
        async setFolderSecurityInfo(id: number | string, securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setFolderSecurityInfo(id, securityInfoSimpleRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.setFolderSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Grants, changes or withdraws the access of the listed accounts and groups on every file and folder named in  the request at once, and returns the resulting rights. Entry identifiers come from a listing operation, and  the accounts and groups come from the portal\'s own account and group lists; an access of `None` withdraws the  rights instead of granting them. The caller must be allowed to change the access of every listed entry - the  creator of the room, a member with the rights to manage it, or a portal administrator - and a read-only member  or a guest is refused even when the payload changes nothing. A subject the caller is not allowed to share  with, such as a guest that belongs to another member, is skipped without an error, and an empty `share`  collection makes the call do nothing and answer with an empty list. Repeating the same request leaves the same  rights in place. The answer holds one record per listed subject for each entry that was actually processed, so  it is shorter than the request when something was skipped and worth comparing against it. For a single room  prefer `PUT api/2.0/files/rooms/{id}/share`, which also invites members by email.
         * @summary Set sharing rights in batch
         * @param {SecurityInfoRequestDto} [securityInfoRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-security-info/
         */
        async setSecurityInfo(securityInfoRequestDto?: SecurityInfoRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setSecurityInfo(securityInfoRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SharingApi.setSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SharingApi - factory interface
 * @export
 */
export const SharingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SharingApiFp(configuration)
    return {
        /**
         * Submits the password of a protected external share link and answers with the same resolved link data as  `GET api/2.0/files/share/{key}`, so this operation is called only after that one reported that a password is  required. The token in the path is the `requestToken` of the link, and the password is the one chosen by the  member who shared the entry. The call needs no authentication; a signed-in caller that may already read the  room is let through by the resolve operation itself and does not need the password at all. A correct password  is remembered for the caller, so later requests with the same token resolve without repeating it, and a wrong  one is reported in the `status` field as an invalid password rather than as an HTTP error, while the  remembered password is dropped. Attempts are counted per link and per calling address: once the portal\'s limit  is reached, further attempts are rejected until the block expires, which makes the operation unsuitable for  trying passwords in a loop. Nothing about the entry is changed by the call itself.
         * @summary Unlock a password-protected link
         * @param {SharingApiApplyExternalSharePasswordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for applyExternalSharePassword operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/apply-external-share-password/
         * @throws {RequiredError}
         */
        applyExternalSharePassword(requestParameters: SharingApiApplyExternalSharePasswordRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExternalShareWrapper> {
            return localVarFp.applyExternalSharePassword(requestParameters.key, requestParameters.externalShareRequestParam, options).then((request) => request(axios, basePath));
        },
        /**
         * Hands the ownership of the listed rooms and files over to a single account, and returns the entries as they  look afterwards. Among folders only rooms are accepted - take their identifiers from  `GET api/2.0/files/rooms`; a plain folder is refused. A file is accepted only while it lies in the portal\'s  common section, so a file kept inside a room or in a personal section is refused as well, and so is a file  that is locked or currently open in the editor. The new owner has to be an active account that is allowed to  manage rooms, and a private room additionally requires that this account has already set up its encryption  keys; a deactivated account, a guest or a plain member is rejected. The caller must be the creator of every  listed room, or a portal administrator. The call mutates the entries one at a time and stops at the first item  it may not touch, leaving the entries already processed changed, so a partial answer is possible; an item  whose owner is already the target account is returned untouched, which makes a repeat safe. The previous owner  keeps access to a transferred room as its manager, while a transferred file is saved as a new version authored  by the new owner. An entry that lives on a connected third-party account is quietly left out.
         * @summary Change the room or file owner
         * @param {SharingApiChangeFileOwnerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeFileOwner operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-file-owner/
         * @throws {RequiredError}
         */
        changeFileOwner(requestParameters: SharingApiChangeFileOwnerRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileEntryBaseArrayWrapper> {
            return localVarFp.changeFileOwner(requestParameters.changeOwnerRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Answers with the encryption keys that open one file kept in a private room: one entry per member who holds  rights on the file and has published keys, each carrying that member\'s public key, and the caller\'s own entry  carrying the encrypted private half as well. The private half of another member is never handed out. A member  who has not published keys yet is left out of the answer altogether, which is how a client tells that this  member cannot open the file until keys are published through `POST api/2.0/privacyroom/keys`; a member who  holds the file only through a group is not reported either, because group entries are skipped. The file has to  lie in a private room or in the encrypted section - a file kept anywhere else carries no keys and is rejected  as an unsupported request. The caller needs read access to the file and is answered with 403 otherwise, and a  file that does not exist is answered as missing. The call is read-only, and the answer changes as soon as a  member publishes or rotates keys, so read it again rather than caching it for a later session.
         * @summary Get file encryption keys
         * @param {SharingApiGetEncryptionAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getEncryptionAccess operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-encryption-access/
         * @throws {RequiredError}
         */
        getEncryptionAccess(requestParameters: SharingApiGetEncryptionAccessRequest, options?: RawAxiosRequestConfig): AxiosPromise<EncryptionKeyArrayWrapper> {
            return localVarFp.getEncryptionAccess(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Resolves the token of an external share link into the room or file it points at, and reports the outcome of  validating the link. The token is the `requestToken` of a link returned by the link operations of an entry,  such as `GET api/2.0/files/file/{id}/link` or `GET api/2.0/files/rooms/{id}/link`. The call needs no  authentication and answers a refused link in the `status` field rather than with an HTTP error, so that field  has to be read before anything else: a token that matches no link, and a link whose entry has been archived or  moved to the trash, both resolve as invalid; a link past its expiration date resolves as expired; a  password-protected link resolves as requiring a password, which is then submitted through  `POST api/2.0/files/share/{key}/password`; and a public link resolves as denied when the portal forbids  sharing with people outside it. The call is not read-only: for a signed-in caller the first successful  resolution puts the entry into the account\'s own lists, and for a visitor without an account it opens an  anonymous session that later requests with the same token reuse. Pass `fileId` or `folderId` to have an entry  inside the link\'s target echoed back.
         * @summary Resolve an external share link
         * @param {SharingApiGetExternalShareDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getExternalShareData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-share-data/
         * @throws {RequiredError}
         */
        getExternalShareData(requestParameters: SharingApiGetExternalShareDataRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExternalShareWrapper> {
            return localVarFp.getExternalShareData(requestParameters.key, requestParameters.fileId, requestParameters.folderId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the accounts and groups that hold rights on one file, one entry per subject, with the level each of them  has, whether the caller may still change that level, and which of them owns the file. The owner comes first,  then room managers, groups, ordinary members, guests, and last the accounts that have not accepted their  invitation yet, each of those ranked by access level and by name. External links are left out and are listed  by `GET api/2.0/files/file/{id}/links` instead, while a PDF form kept in a form-filling room also reports the  link of that room, because the form is filled out through it. `startIndex` and `count` page through the  subjects, and their total number is reported in the response headers rather than in the body. Listing takes  the right to change the sharing of the file, which its creator, the manager of its room and a portal  administrator acting as room manager have, while inside a public room reading the file is enough; a member who  may read but not share is answered with an empty list although the header still counts the subjects, and a  caller with no access, a guest included, is refused. A file that does not exist, or was deleted permanently,  is answered as missing. The call is read-only; for several entries at once use `POST api/2.0/files/share`.
         * @summary Get file sharing rights
         * @param {SharingApiGetFileSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-file-security-info/
         * @throws {RequiredError}
         */
        getFileSecurityInfo(requestParameters: SharingApiGetFileSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFileSecurityInfo(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the accounts and groups that hold rights on one folder or room, one entry per subject, with the level  each of them has, whether the caller may still change that level, and which of them owns the entry. The owner  comes first, then room managers, groups, ordinary members, guests, and last the accounts that have not  accepted their invitation yet, each of those ranked by access level and by name. External links are left out  and are listed by `GET api/2.0/files/folder/{id}/links` instead. `startIndex` and `count` page through the  subjects, and their total number is reported in the response headers rather than in the body. For a room, and  for a folder inside a public room, read access is enough; any other folder is listed only to a caller who may  change its sharing, which the manager of its room and a portal administrator acting as room manager may, and a  member who may only read such a folder is answered with an empty list although the header still counts the  subjects. A caller with no access, a guest included, is refused, and a folder that does not exist is answered  as missing. The call is read-only. For a room prefer `GET api/2.0/files/rooms/{id}/share`, which filters the  same subjects by kind and by name.
         * @summary Get folder sharing rights
         * @param {SharingApiGetFolderSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-folder-security-info/
         * @throws {RequiredError}
         */
        getFolderSecurityInfo(requestParameters: SharingApiGetFolderSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getFolderSecurityInfo(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the members of one portal group together with the access each of them has on a file that group was  granted rights to: `groupAccess` is the level the group itself carries, `userAccess` is the level set on that  member alone, `overridden` says which of the two applies, `owner` marks the member who created the file, and  `canEditAccess` says whether the caller may still change that member\'s level. Take the group identifier from  the group entries of `GET api/2.0/files/file/{id}/share`. `startIndex` and `count` page through the members,  `filterValue` keeps only those whose first name, last name or email contains the value - the comparison is  made in lower case, so an uppercase value matches nothing - and the number of members is reported in the  response headers. Members come back ordered by first name. A group that holds no rights on this file, a file  the caller cannot read and a file that does not exist are all answered with an empty list rather than an  error, so an empty answer does not mean that the group has no members. A guest is refused. The call is  read-only.
         * @summary Get file access of group members
         * @param {SharingApiGetGroupsMembersWithFileSecurityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsMembersWithFileSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-file-security/
         * @throws {RequiredError}
         */
        getGroupsMembersWithFileSecurity(requestParameters: SharingApiGetGroupsMembersWithFileSecurityRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupMemberSecurityRequestArrayWrapper> {
            return localVarFp.getGroupsMembersWithFileSecurity(requestParameters.fileId, requestParameters.groupId, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the members of one portal group together with the access each of them has on a folder or room that group  was granted rights to: `groupAccess` is the level the group itself carries, `userAccess` is the level set on  that member alone, `overridden` says which of the two applies, `owner` marks the member who created the entry,  and `canEditAccess` says whether the caller may still change that member\'s level. Take the group identifier  from the group entries of `GET api/2.0/files/folder/{id}/share`. `startIndex` and `count` page through the  members, `filterValue` keeps only those whose first name, last name or email contains the value - the  comparison is made in lower case, so an uppercase value matches nothing - and the number of members is  reported in the response headers. Members come back ordered by first name. A group that holds no rights on  this folder, a folder the caller cannot read and a folder that does not exist are all answered with an empty  list rather than an error, so an empty answer does not mean that the group has no members. A guest is refused.  The call is read-only.
         * @summary Get folder access of group members
         * @param {SharingApiGetGroupsMembersWithFolderSecurityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getGroupsMembersWithFolderSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-groups-members-with-folder-security/
         * @throws {RequiredError}
         */
        getGroupsMembersWithFolderSecurity(requestParameters: SharingApiGetGroupsMembersWithFolderSecurityRequest, options?: RawAxiosRequestConfig): AxiosPromise<GroupMemberSecurityRequestArrayWrapper> {
            return localVarFp.getGroupsMembersWithFolderSecurity(requestParameters.folderId, requestParameters.groupId, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns who has access to the files and folders listed in the request, merged into one list of subjects, and  is the batch counterpart of `GET api/2.0/files/file/{id}/share` and `GET api/2.0/files/rooms/{id}/share`.  Identifiers come from any listing operation, such as `GET api/2.0/files/{folderId}`. The caller needs read  access to every listed entry: a single entry it cannot read makes the whole call fail instead of dropping that  entry, so the list has to be filtered beforehand. Identifiers that match nothing are skipped without an error,  and an empty list of identifiers gives an empty answer. The call is read-only. Each account or group appears  once: the caller\'s own record comes first, the owner\'s record second, and the rest are ordered by display  name. When the same subject holds different rights on the listed entries, its access is reported as the  `Varies` value instead of a real level, which means the entries have to be inspected one by one to see the  difference. Records that describe external links are included only for a caller that is allowed to read the  links of the entry.
         * @summary Get sharing rights in batch
         * @param {SharingApiGetSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-security-info/
         * @throws {RequiredError}
         */
        getSecurityInfo(requestParameters: SharingApiGetSecurityInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getSecurityInfo(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the portal members who can read the file, which is what an editor client offers when somebody types a  mention. The set holds the readers of the file plus everyone who reads it by role rather than by share - the  portal owner, the DocSpace administrators and the author of the file - while the caller themselves, the  subjects standing behind external links and deactivated accounts are left out. It is ordered by display name  as the portal renders it. A guest receives a single entry, the owner of the file, because a guest is not a  portal member and may not learn who else works on the document. The caller needs read access to the file, and  an unknown file id is reported as missing. The call only reads. A caller who reached the file through an  external link instead of an account is answered with nothing at all. For the users to offer when protecting a  document use `GET api/2.0/files/file/{fileId}/protectusers`.
         * @summary Get users to mention in a file
         * @param {SharingApiGetSharedUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getSharedUsers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-shared-users/
         * @throws {RequiredError}
         */
        getSharedUsers(requestParameters: SharingApiGetSharedUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<MentionWrapperArrayWrapper> {
            return localVarFp.getSharedUsers(requestParameters.fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Revokes the access of every account and group on the files and folders listed in the request, and clears the  entries from the caller\'s own favorites, recent and unread marks. The owner\'s own record is kept, since  removing it would take the entry away from the account that owns it, and external links survive untouched -  remove those through the link operations of the entry. The caller must be allowed to change the access of each  entry, which means the creator of the room, a portal administrator, or a member with the rights to manage it;  a caller whose only access came through an external link may use this call to drop the entry from its own  list, while a directly invited member or an unrelated account is refused. The answer is always `true` and  identifiers that match nothing are skipped silently, so a successful answer is not proof that anything was  revoked - read the rights back with `POST api/2.0/files/share`. The call is destructive and safe to repeat. To  take the rights of one account away instead of all of them, call `PUT api/2.0/files/share` with that account\'s  access set to `None`.
         * @summary Remove sharing rights in batch
         * @param {SharingApiRemoveSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for removeSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-security-info/
         * @throws {RequiredError}
         */
        removeSecurityInfo(requestParameters: SharingApiRemoveSecurityInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.removeSecurityInfo(requestParameters.baseBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Emails the people named in `emails` that they were mentioned in a file, with a link that opens the file at the  place the mention sits when `actionLink` carries the anchor the editor produced. Only addresses that belong to  portal accounts are notified: an address that belongs to nobody is skipped, and the note is cut to its first  200 characters in the mail, while a `message` longer than the field allows is refused with 400. The answer is  usually empty: the access list of the file comes back when the file is encrypted, or when one of the addresses  belongs to nobody and the caller may share the file - that is then the cue to invite that person with  `PUT api/2.0/files/file/{id}/share`. The caller needs comment rights, which the creator of the file, the  manager of its room and a member invited to comment, review or edit have, while a guest or a member without  access is refused with 403; a file that does not exist answers with 404 and a file in the trash is refused.  The operation is rate-limited and answers 429 once the caller sends too many notifications. A delivery failure  is swallowed, so 200 does not prove that the mail left the portal.
         * @summary Notify mentioned users
         * @param {SharingApiSendEditorNotifyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for sendEditorNotify operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/send-editor-notify/
         * @throws {RequiredError}
         */
        sendEditorNotify(requestParameters: SharingApiSendEditorNotifyRequest, options?: RawAxiosRequestConfig): AxiosPromise<AceShortWrapperArrayWrapper> {
            return localVarFp.sendEditorNotify(requestParameters.fileId, requestParameters.mentionMessageWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Grants, changes or withdraws the rights of the listed accounts and groups on one file, and answers with the  rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get,  and the level that denies everything takes the access away instead; an empty `share` changes nothing and is  answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to  another member, is dropped without an error, so compare the answer with what was sent. With `notify` set, each  account named is emailed about the access it received and `sharingMessage` is put into that mail with its  markup stripped, while a message longer than the field allows is rejected as an invalid request. The caller  has to be allowed to change the sharing of the file, which its creator, the manager of the room it lies in and  a portal administrator acting as room manager are; anyone else, a guest and a member with read access  included, is refused. The call is mutating and safe to repeat. For several files and folders in one request  use `PUT api/2.0/files/share`.
         * @summary Share a file
         * @param {SharingApiSetFileSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFileSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-file-security-info/
         * @throws {RequiredError}
         */
        setFileSecurityInfo(requestParameters: SharingApiSetFileSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.setFileSecurityInfo(requestParameters.id, requestParameters.securityInfoSimpleRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Grants, changes or withdraws the rights of the listed accounts and groups on one folder, and answers with the  rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get,  and the level that denies everything takes the access away instead; an empty `share` changes nothing and is  answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to  another member, is dropped without an error. With `notify` set, each account named is emailed about the access  it received and `sharingMessage` is put into that mail with its markup stripped, while a message longer than  the field allows is rejected as an invalid request. The caller has to be allowed to change the sharing of the  folder, which the manager of the room it belongs to and a portal administrator acting as room manager are;  anyone else, a guest and a member with read access included, is refused. The call is mutating and safe to  repeat. For a room use `PUT api/2.0/files/rooms/{id}/share`, which invites people by email as well.
         * @summary Share a folder
         * @param {SharingApiSetFolderSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setFolderSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-folder-security-info/
         * @throws {RequiredError}
         */
        setFolderSecurityInfo(requestParameters: SharingApiSetFolderSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.setFolderSecurityInfo(requestParameters.id, requestParameters.securityInfoSimpleRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Grants, changes or withdraws the access of the listed accounts and groups on every file and folder named in  the request at once, and returns the resulting rights. Entry identifiers come from a listing operation, and  the accounts and groups come from the portal\'s own account and group lists; an access of `None` withdraws the  rights instead of granting them. The caller must be allowed to change the access of every listed entry - the  creator of the room, a member with the rights to manage it, or a portal administrator - and a read-only member  or a guest is refused even when the payload changes nothing. A subject the caller is not allowed to share  with, such as a guest that belongs to another member, is skipped without an error, and an empty `share`  collection makes the call do nothing and answer with an empty list. Repeating the same request leaves the same  rights in place. The answer holds one record per listed subject for each entry that was actually processed, so  it is shorter than the request when something was skipped and worth comparing against it. For a single room  prefer `PUT api/2.0/files/rooms/{id}/share`, which also invites members by email.
         * @summary Set sharing rights in batch
         * @param {SharingApiSetSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-security-info/
         * @throws {RequiredError}
         */
        setSecurityInfo(requestParameters: SharingApiSetSecurityInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.setSecurityInfo(requestParameters.securityInfoRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for applyExternalSharePassword operation in SharingApi.
 * @export
 * @interface SharingApiApplyExternalSharePasswordRequest
 */
export interface SharingApiApplyExternalSharePasswordRequest {
    /**
     * The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link  operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that  carries the link\'s own identifier, so it cannot be assembled by hand.
     * @type {string}
     * @memberof SharingApiApplyExternalSharePassword
     */
    readonly key: string

    /**
     * The body of the request, holding the password to check.
     * @type {ExternalShareRequestParam}
     * @memberof SharingApiApplyExternalSharePassword
     */
    readonly externalShareRequestParam: ExternalShareRequestParam
}

/**
 * Request parameters for changeFileOwner operation in SharingApi.
 * @export
 * @interface SharingApiChangeFileOwnerRequest
 */
export interface SharingApiChangeFileOwnerRequest {
    /**
     * 
     * @type {ChangeOwnerRequestDto}
     * @memberof SharingApiChangeFileOwner
     */
    readonly changeOwnerRequestDto?: ChangeOwnerRequestDto
}

/**
 * Request parameters for getEncryptionAccess operation in SharingApi.
 * @export
 * @interface SharingApiGetEncryptionAccessRequest
 */
export interface SharingApiGetEncryptionAccessRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof SharingApiGetEncryptionAccess
     */
    readonly fileId: number | string
}

/**
 * Request parameters for getExternalShareData operation in SharingApi.
 * @export
 * @interface SharingApiGetExternalShareDataRequest
 */
export interface SharingApiGetExternalShareDataRequest {
    /**
     * The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link  operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that  carries the link\'s own identifier, so it cannot be assembled by hand.
     * @type {string}
     * @memberof SharingApiGetExternalShareData
     */
    readonly key: string

    /**
     * A file inside the room the link points at, echoed back in the answer\'s entity fields so a client can show what  was opened. The value is ignored when the file does not sit under the link\'s target, and passing it together  with a folder has no effect - the file wins.
     * @type {string}
     * @memberof SharingApiGetExternalShareData
     */
    readonly fileId?: string

    /**
     * A folder inside the room the link points at, echoed back in the answer\'s entity fields. It is ignored when the  folder does not sit under the link\'s target, and when a file is passed as well.
     * @type {string}
     * @memberof SharingApiGetExternalShareData
     */
    readonly folderId?: string
}

/**
 * Request parameters for getFileSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiGetFileSecurityInfoRequest
 */
export interface SharingApiGetFileSecurityInfoRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof SharingApiGetFileSecurityInfo
     */
    readonly id: number | string

    /**
     * How many entries at most to answer with, in the operations of this file that return a list; an operation that  answers with a single object is not affected by it.
     * @type {number}
     * @memberof SharingApiGetFileSecurityInfo
     */
    readonly count?: number

    /**
     * How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
     * @type {number}
     * @memberof SharingApiGetFileSecurityInfo
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getFolderSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiGetFolderSecurityInfoRequest
 */
export interface SharingApiGetFolderSecurityInfoRequest {
    /**
     * The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof SharingApiGetFolderSecurityInfo
     */
    readonly id: number | string

    /**
     * How many entries at most to answer with, in the operations of this folder that return a list; an operation  that answers with a single object is not affected by it.
     * @type {number}
     * @memberof SharingApiGetFolderSecurityInfo
     */
    readonly count?: number

    /**
     * How many entries of such a list to skip before answering, used together with `count` to walk through it page  by page.
     * @type {number}
     * @memberof SharingApiGetFolderSecurityInfo
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getGroupsMembersWithFileSecurity operation in SharingApi.
 * @export
 * @interface SharingApiGetGroupsMembersWithFileSecurityRequest
 */
export interface SharingApiGetGroupsMembersWithFileSecurityRequest {
    /**
     * The file whose access is being read. A file stored on the portal is numbered, while a file in a connected  third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly fileId: number | string

    /**
     * The group whose members are listed. Take it from the entries of `GET api/2.0/files/file/{id}/share` that stand  for a group; a group that holds no rights on this file is answered with an empty list.
     * @type {string}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly groupId: string

    /**
     * How many members at most to answer with.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly count?: number

    /**
     * How many members to skip before answering, used together with `count` to page through a large group.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly startIndex?: number

    /**
     * Keeps only the members whose first name, last name or email contains this value. The value is matched in lower  case, so an uppercase one finds nothing.
     * @type {string}
     * @memberof SharingApiGetGroupsMembersWithFileSecurity
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getGroupsMembersWithFolderSecurity operation in SharingApi.
 * @export
 * @interface SharingApiGetGroupsMembersWithFolderSecurityRequest
 */
export interface SharingApiGetGroupsMembersWithFolderSecurityRequest {
    /**
     * The folder or room whose access is being read. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly folderId: number | string

    /**
     * The group whose members are listed. Take it from the entries of `GET api/2.0/files/folder/{id}/share` that  stand for a group; a group that holds no rights on this folder is answered with an empty list.
     * @type {string}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly groupId: string

    /**
     * How many members at most to answer with.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly count?: number

    /**
     * How many members to skip before answering, used together with `count` to page through a large group.
     * @type {number}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly startIndex?: number

    /**
     * Keeps only the members whose first name, last name or email contains this value. The value is matched in lower  case, so an uppercase one finds nothing.
     * @type {string}
     * @memberof SharingApiGetGroupsMembersWithFolderSecurity
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiGetSecurityInfoRequest
 */
export interface SharingApiGetSecurityInfoRequest {
    /**
     * 
     * @type {BaseBatchRequestDto}
     * @memberof SharingApiGetSecurityInfo
     */
    readonly baseBatchRequestDto?: BaseBatchRequestDto
}

/**
 * Request parameters for getSharedUsers operation in SharingApi.
 * @export
 * @interface SharingApiGetSharedUsersRequest
 */
export interface SharingApiGetSharedUsersRequest {
    /**
     * The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a  file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque  string.
     * @type {number | string}
     * @memberof SharingApiGetSharedUsers
     */
    readonly fileId: number | string
}

/**
 * Request parameters for removeSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiRemoveSecurityInfoRequest
 */
export interface SharingApiRemoveSecurityInfoRequest {
    /**
     * 
     * @type {BaseBatchRequestDto}
     * @memberof SharingApiRemoveSecurityInfo
     */
    readonly baseBatchRequestDto?: BaseBatchRequestDto
}

/**
 * Request parameters for sendEditorNotify operation in SharingApi.
 * @export
 * @interface SharingApiSendEditorNotifyRequest
 */
export interface SharingApiSendEditorNotifyRequest {
    /**
     * The file the mention was made in. A file stored on the portal is numbered, while a file in a connected  third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof SharingApiSendEditorNotify
     */
    readonly fileId: number | string

    /**
     * The notification to send.
     * @type {MentionMessageWrapper}
     * @memberof SharingApiSendEditorNotify
     */
    readonly mentionMessageWrapper?: MentionMessageWrapper
}

/**
 * Request parameters for setFileSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiSetFileSecurityInfoRequest
 */
export interface SharingApiSetFileSecurityInfoRequest {
    /**
     * The file whose sharing is being changed. A file stored on the portal is numbered, while a file in a connected  third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof SharingApiSetFileSecurityInfo
     */
    readonly id: number | string

    /**
     * The rights to apply to the file, and whether to announce them by mail.
     * @type {SecurityInfoSimpleRequestDto}
     * @memberof SharingApiSetFileSecurityInfo
     */
    readonly securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto
}

/**
 * Request parameters for setFolderSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiSetFolderSecurityInfoRequest
 */
export interface SharingApiSetFolderSecurityInfoRequest {
    /**
     * The folder whose sharing is being changed. A folder stored on the portal is numbered, while a folder in a  connected third-party account is named by an opaque string.
     * @type {number | string}
     * @memberof SharingApiSetFolderSecurityInfo
     */
    readonly id: number | string

    /**
     * The rights to apply to the folder, and whether to announce them by mail.
     * @type {SecurityInfoSimpleRequestDto}
     * @memberof SharingApiSetFolderSecurityInfo
     */
    readonly securityInfoSimpleRequestDto: SecurityInfoSimpleRequestDto
}

/**
 * Request parameters for setSecurityInfo operation in SharingApi.
 * @export
 * @interface SharingApiSetSecurityInfoRequest
 */
export interface SharingApiSetSecurityInfoRequest {
    /**
     * 
     * @type {SecurityInfoRequestDto}
     * @memberof SharingApiSetSecurityInfo
     */
    readonly securityInfoRequestDto?: SecurityInfoRequestDto
}

/**
 * SharingApi - object-oriented interface
 * @export
 * @class SharingApi
 * @extends {BaseAPI}
 */
export class SharingApi extends BaseAPI {
    /**
     * Submits the password of a protected external share link and answers with the same resolved link data as  `GET api/2.0/files/share/{key}`, so this operation is called only after that one reported that a password is  required. The token in the path is the `requestToken` of the link, and the password is the one chosen by the  member who shared the entry. The call needs no authentication; a signed-in caller that may already read the  room is let through by the resolve operation itself and does not need the password at all. A correct password  is remembered for the caller, so later requests with the same token resolve without repeating it, and a wrong  one is reported in the `status` field as an invalid password rather than as an HTTP error, while the  remembered password is dropped. Attempts are counted per link and per calling address: once the portal\'s limit  is reached, further attempts are rejected until the block expires, which makes the operation unsuitable for  trying passwords in a loop. Nothing about the entry is changed by the call itself.
     * @summary Unlock a password-protected link
     * @param {FilesSharingApiApplyExternalSharePasswordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public applyExternalSharePassword(requestParameters: SharingApiApplyExternalSharePasswordRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).applyExternalSharePassword(requestParameters.key, requestParameters.externalShareRequestParam, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Hands the ownership of the listed rooms and files over to a single account, and returns the entries as they  look afterwards. Among folders only rooms are accepted - take their identifiers from  `GET api/2.0/files/rooms`; a plain folder is refused. A file is accepted only while it lies in the portal\'s  common section, so a file kept inside a room or in a personal section is refused as well, and so is a file  that is locked or currently open in the editor. The new owner has to be an active account that is allowed to  manage rooms, and a private room additionally requires that this account has already set up its encryption  keys; a deactivated account, a guest or a plain member is rejected. The caller must be the creator of every  listed room, or a portal administrator. The call mutates the entries one at a time and stops at the first item  it may not touch, leaving the entries already processed changed, so a partial answer is possible; an item  whose owner is already the target account is returned untouched, which makes a repeat safe. The previous owner  keeps access to a transferred room as its manager, while a transferred file is saved as a new version authored  by the new owner. An entry that lives on a connected third-party account is quietly left out.
     * @summary Change the room or file owner
     * @param {FilesSharingApiChangeFileOwnerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public changeFileOwner(requestParameters: SharingApiChangeFileOwnerRequest = {}, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).changeFileOwner(requestParameters.changeOwnerRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Answers with the encryption keys that open one file kept in a private room: one entry per member who holds  rights on the file and has published keys, each carrying that member\'s public key, and the caller\'s own entry  carrying the encrypted private half as well. The private half of another member is never handed out. A member  who has not published keys yet is left out of the answer altogether, which is how a client tells that this  member cannot open the file until keys are published through `POST api/2.0/privacyroom/keys`; a member who  holds the file only through a group is not reported either, because group entries are skipped. The file has to  lie in a private room or in the encrypted section - a file kept anywhere else carries no keys and is rejected  as an unsupported request. The caller needs read access to the file and is answered with 403 otherwise, and a  file that does not exist is answered as missing. The call is read-only, and the answer changes as soon as a  member publishes or rotates keys, so read it again rather than caching it for a later session.
     * @summary Get file encryption keys
     * @param {FilesSharingApiGetEncryptionAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getEncryptionAccess(requestParameters: SharingApiGetEncryptionAccessRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getEncryptionAccess(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resolves the token of an external share link into the room or file it points at, and reports the outcome of  validating the link. The token is the `requestToken` of a link returned by the link operations of an entry,  such as `GET api/2.0/files/file/{id}/link` or `GET api/2.0/files/rooms/{id}/link`. The call needs no  authentication and answers a refused link in the `status` field rather than with an HTTP error, so that field  has to be read before anything else: a token that matches no link, and a link whose entry has been archived or  moved to the trash, both resolve as invalid; a link past its expiration date resolves as expired; a  password-protected link resolves as requiring a password, which is then submitted through  `POST api/2.0/files/share/{key}/password`; and a public link resolves as denied when the portal forbids  sharing with people outside it. The call is not read-only: for a signed-in caller the first successful  resolution puts the entry into the account\'s own lists, and for a visitor without an account it opens an  anonymous session that later requests with the same token reuse. Pass `fileId` or `folderId` to have an entry  inside the link\'s target echoed back.
     * @summary Resolve an external share link
     * @param {FilesSharingApiGetExternalShareDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getExternalShareData(requestParameters: SharingApiGetExternalShareDataRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getExternalShareData(requestParameters.key, requestParameters.fileId, requestParameters.folderId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the accounts and groups that hold rights on one file, one entry per subject, with the level each of them  has, whether the caller may still change that level, and which of them owns the file. The owner comes first,  then room managers, groups, ordinary members, guests, and last the accounts that have not accepted their  invitation yet, each of those ranked by access level and by name. External links are left out and are listed  by `GET api/2.0/files/file/{id}/links` instead, while a PDF form kept in a form-filling room also reports the  link of that room, because the form is filled out through it. `startIndex` and `count` page through the  subjects, and their total number is reported in the response headers rather than in the body. Listing takes  the right to change the sharing of the file, which its creator, the manager of its room and a portal  administrator acting as room manager have, while inside a public room reading the file is enough; a member who  may read but not share is answered with an empty list although the header still counts the subjects, and a  caller with no access, a guest included, is refused. A file that does not exist, or was deleted permanently,  is answered as missing. The call is read-only; for several entries at once use `POST api/2.0/files/share`.
     * @summary Get file sharing rights
     * @param {FilesSharingApiGetFileSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getFileSecurityInfo(requestParameters: SharingApiGetFileSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getFileSecurityInfo(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the accounts and groups that hold rights on one folder or room, one entry per subject, with the level  each of them has, whether the caller may still change that level, and which of them owns the entry. The owner  comes first, then room managers, groups, ordinary members, guests, and last the accounts that have not  accepted their invitation yet, each of those ranked by access level and by name. External links are left out  and are listed by `GET api/2.0/files/folder/{id}/links` instead. `startIndex` and `count` page through the  subjects, and their total number is reported in the response headers rather than in the body. For a room, and  for a folder inside a public room, read access is enough; any other folder is listed only to a caller who may  change its sharing, which the manager of its room and a portal administrator acting as room manager may, and a  member who may only read such a folder is answered with an empty list although the header still counts the  subjects. A caller with no access, a guest included, is refused, and a folder that does not exist is answered  as missing. The call is read-only. For a room prefer `GET api/2.0/files/rooms/{id}/share`, which filters the  same subjects by kind and by name.
     * @summary Get folder sharing rights
     * @param {FilesSharingApiGetFolderSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getFolderSecurityInfo(requestParameters: SharingApiGetFolderSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getFolderSecurityInfo(requestParameters.id, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the members of one portal group together with the access each of them has on a file that group was  granted rights to: `groupAccess` is the level the group itself carries, `userAccess` is the level set on that  member alone, `overridden` says which of the two applies, `owner` marks the member who created the file, and  `canEditAccess` says whether the caller may still change that member\'s level. Take the group identifier from  the group entries of `GET api/2.0/files/file/{id}/share`. `startIndex` and `count` page through the members,  `filterValue` keeps only those whose first name, last name or email contains the value - the comparison is  made in lower case, so an uppercase value matches nothing - and the number of members is reported in the  response headers. Members come back ordered by first name. A group that holds no rights on this file, a file  the caller cannot read and a file that does not exist are all answered with an empty list rather than an  error, so an empty answer does not mean that the group has no members. A guest is refused. The call is  read-only.
     * @summary Get file access of group members
     * @param {FilesSharingApiGetGroupsMembersWithFileSecurityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getGroupsMembersWithFileSecurity(requestParameters: SharingApiGetGroupsMembersWithFileSecurityRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getGroupsMembersWithFileSecurity(requestParameters.fileId, requestParameters.groupId, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the members of one portal group together with the access each of them has on a folder or room that group  was granted rights to: `groupAccess` is the level the group itself carries, `userAccess` is the level set on  that member alone, `overridden` says which of the two applies, `owner` marks the member who created the entry,  and `canEditAccess` says whether the caller may still change that member\'s level. Take the group identifier  from the group entries of `GET api/2.0/files/folder/{id}/share`. `startIndex` and `count` page through the  members, `filterValue` keeps only those whose first name, last name or email contains the value - the  comparison is made in lower case, so an uppercase value matches nothing - and the number of members is  reported in the response headers. Members come back ordered by first name. A group that holds no rights on  this folder, a folder the caller cannot read and a folder that does not exist are all answered with an empty  list rather than an error, so an empty answer does not mean that the group has no members. A guest is refused.  The call is read-only.
     * @summary Get folder access of group members
     * @param {FilesSharingApiGetGroupsMembersWithFolderSecurityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getGroupsMembersWithFolderSecurity(requestParameters: SharingApiGetGroupsMembersWithFolderSecurityRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getGroupsMembersWithFolderSecurity(requestParameters.folderId, requestParameters.groupId, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns who has access to the files and folders listed in the request, merged into one list of subjects, and  is the batch counterpart of `GET api/2.0/files/file/{id}/share` and `GET api/2.0/files/rooms/{id}/share`.  Identifiers come from any listing operation, such as `GET api/2.0/files/{folderId}`. The caller needs read  access to every listed entry: a single entry it cannot read makes the whole call fail instead of dropping that  entry, so the list has to be filtered beforehand. Identifiers that match nothing are skipped without an error,  and an empty list of identifiers gives an empty answer. The call is read-only. Each account or group appears  once: the caller\'s own record comes first, the owner\'s record second, and the rest are ordered by display  name. When the same subject holds different rights on the listed entries, its access is reported as the  `Varies` value instead of a real level, which means the entries have to be inspected one by one to see the  difference. Records that describe external links are included only for a caller that is allowed to read the  links of the entry.
     * @summary Get sharing rights in batch
     * @param {FilesSharingApiGetSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getSecurityInfo(requestParameters: SharingApiGetSecurityInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getSecurityInfo(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the portal members who can read the file, which is what an editor client offers when somebody types a  mention. The set holds the readers of the file plus everyone who reads it by role rather than by share - the  portal owner, the DocSpace administrators and the author of the file - while the caller themselves, the  subjects standing behind external links and deactivated accounts are left out. It is ordered by display name  as the portal renders it. A guest receives a single entry, the owner of the file, because a guest is not a  portal member and may not learn who else works on the document. The caller needs read access to the file, and  an unknown file id is reported as missing. The call only reads. A caller who reached the file through an  external link instead of an account is answered with nothing at all. For the users to offer when protecting a  document use `GET api/2.0/files/file/{fileId}/protectusers`.
     * @summary Get users to mention in a file
     * @param {FilesSharingApiGetSharedUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public getSharedUsers(requestParameters: SharingApiGetSharedUsersRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).getSharedUsers(requestParameters.fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Revokes the access of every account and group on the files and folders listed in the request, and clears the  entries from the caller\'s own favorites, recent and unread marks. The owner\'s own record is kept, since  removing it would take the entry away from the account that owns it, and external links survive untouched -  remove those through the link operations of the entry. The caller must be allowed to change the access of each  entry, which means the creator of the room, a portal administrator, or a member with the rights to manage it;  a caller whose only access came through an external link may use this call to drop the entry from its own  list, while a directly invited member or an unrelated account is refused. The answer is always `true` and  identifiers that match nothing are skipped silently, so a successful answer is not proof that anything was  revoked - read the rights back with `POST api/2.0/files/share`. The call is destructive and safe to repeat. To  take the rights of one account away instead of all of them, call `PUT api/2.0/files/share` with that account\'s  access set to `None`.
     * @summary Remove sharing rights in batch
     * @param {FilesSharingApiRemoveSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public removeSecurityInfo(requestParameters: SharingApiRemoveSecurityInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).removeSecurityInfo(requestParameters.baseBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Emails the people named in `emails` that they were mentioned in a file, with a link that opens the file at the  place the mention sits when `actionLink` carries the anchor the editor produced. Only addresses that belong to  portal accounts are notified: an address that belongs to nobody is skipped, and the note is cut to its first  200 characters in the mail, while a `message` longer than the field allows is refused with 400. The answer is  usually empty: the access list of the file comes back when the file is encrypted, or when one of the addresses  belongs to nobody and the caller may share the file - that is then the cue to invite that person with  `PUT api/2.0/files/file/{id}/share`. The caller needs comment rights, which the creator of the file, the  manager of its room and a member invited to comment, review or edit have, while a guest or a member without  access is refused with 403; a file that does not exist answers with 404 and a file in the trash is refused.  The operation is rate-limited and answers 429 once the caller sends too many notifications. A delivery failure  is swallowed, so 200 does not prove that the mail left the portal.
     * @summary Notify mentioned users
     * @param {FilesSharingApiSendEditorNotifyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public sendEditorNotify(requestParameters: SharingApiSendEditorNotifyRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).sendEditorNotify(requestParameters.fileId, requestParameters.mentionMessageWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Grants, changes or withdraws the rights of the listed accounts and groups on one file, and answers with the  rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get,  and the level that denies everything takes the access away instead; an empty `share` changes nothing and is  answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to  another member, is dropped without an error, so compare the answer with what was sent. With `notify` set, each  account named is emailed about the access it received and `sharingMessage` is put into that mail with its  markup stripped, while a message longer than the field allows is rejected as an invalid request. The caller  has to be allowed to change the sharing of the file, which its creator, the manager of the room it lies in and  a portal administrator acting as room manager are; anyone else, a guest and a member with read access  included, is refused. The call is mutating and safe to repeat. For several files and folders in one request  use `PUT api/2.0/files/share`.
     * @summary Share a file
     * @param {FilesSharingApiSetFileSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public setFileSecurityInfo(requestParameters: SharingApiSetFileSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).setFileSecurityInfo(requestParameters.id, requestParameters.securityInfoSimpleRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Grants, changes or withdraws the rights of the listed accounts and groups on one folder, and answers with the  rights those subjects hold afterwards. Every element of `share` names a subject and the level it is to get,  and the level that denies everything takes the access away instead; an empty `share` changes nothing and is  answered with an empty list. A subject the caller is not allowed to share with, such as a guest who belongs to  another member, is dropped without an error. With `notify` set, each account named is emailed about the access  it received and `sharingMessage` is put into that mail with its markup stripped, while a message longer than  the field allows is rejected as an invalid request. The caller has to be allowed to change the sharing of the  folder, which the manager of the room it belongs to and a portal administrator acting as room manager are;  anyone else, a guest and a member with read access included, is refused. The call is mutating and safe to  repeat. For a room use `PUT api/2.0/files/rooms/{id}/share`, which invites people by email as well.
     * @summary Share a folder
     * @param {FilesSharingApiSetFolderSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public setFolderSecurityInfo(requestParameters: SharingApiSetFolderSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).setFolderSecurityInfo(requestParameters.id, requestParameters.securityInfoSimpleRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Grants, changes or withdraws the access of the listed accounts and groups on every file and folder named in  the request at once, and returns the resulting rights. Entry identifiers come from a listing operation, and  the accounts and groups come from the portal\'s own account and group lists; an access of `None` withdraws the  rights instead of granting them. The caller must be allowed to change the access of every listed entry - the  creator of the room, a member with the rights to manage it, or a portal administrator - and a read-only member  or a guest is refused even when the payload changes nothing. A subject the caller is not allowed to share  with, such as a guest that belongs to another member, is skipped without an error, and an empty `share`  collection makes the call do nothing and answer with an empty list. Repeating the same request leaves the same  rights in place. The answer holds one record per listed subject for each entry that was actually processed, so  it is shorter than the request when something was skipped and worth comparing against it. For a single room  prefer `PUT api/2.0/files/rooms/{id}/share`, which also invites members by email.
     * @summary Set sharing rights in batch
     * @param {FilesSharingApiSetSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharingApi
     */
    public setSecurityInfo(requestParameters: SharingApiSetSecurityInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return SharingApiFp(this.configuration).setSecurityInfo(requestParameters.securityInfoRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

