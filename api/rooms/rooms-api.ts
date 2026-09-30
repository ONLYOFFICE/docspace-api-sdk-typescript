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
import type { ArchiveRoomRequest } from '../../models';
// @ts-ignore
import type { BatchTagsRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CoverRequestDto } from '../../models';
// @ts-ignore
import type { CoversResultArrayWrapper } from '../../models';
// @ts-ignore
import type { CreateRoomFromTemplateDto } from '../../models';
// @ts-ignore
import type { CreateRoomRequestDto } from '../../models';
// @ts-ignore
import type { CreateTagRequestDto } from '../../models';
// @ts-ignore
import type { CreateThirdPartyRoom } from '../../models';
// @ts-ignore
import type { DeleteRoomRequest } from '../../models';
// @ts-ignore
import type { DocumentBuilderTaskWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { ExternalDbSyncTaskWrapper } from '../../models';
// @ts-ignore
import type { FileOperationWrapper } from '../../models';
// @ts-ignore
import type { FileShareArrayWrapper } from '../../models';
// @ts-ignore
import type { FileShareWrapper } from '../../models';
// @ts-ignore
import type { FolderContentWrapper } from '../../models';
// @ts-ignore
import type { FolderWrapper } from '../../models';
// @ts-ignore
import type { LinkType } from '../../models';
// @ts-ignore
import type { LogoRequest } from '../../models';
// @ts-ignore
import type { NewItemsFileEntryBaseArrayWrapper } from '../../models';
// @ts-ignore
import type { NewItemsRoomNewItemsArrayWrapper } from '../../models';
// @ts-ignore
import type { ProviderFilter } from '../../models';
// @ts-ignore
import type { QuotaFilter } from '../../models';
// @ts-ignore
import type { RoomFromTemplateStatusWrapper } from '../../models';
// @ts-ignore
import type { RoomInvitationRequest } from '../../models';
// @ts-ignore
import type { RoomLinkRequest } from '../../models';
// @ts-ignore
import type { RoomPrivacyFilter } from '../../models';
// @ts-ignore
import type { RoomSecurityWrapper } from '../../models';
// @ts-ignore
import type { RoomTemplateDto } from '../../models';
// @ts-ignore
import type { RoomTemplateStatusWrapper } from '../../models';
// @ts-ignore
import type { RoomType } from '../../models';
// @ts-ignore
import type { STRINGArrayWrapper } from '../../models';
// @ts-ignore
import type { SearchArea } from '../../models';
// @ts-ignore
import type { SetPublicDto } from '../../models';
// @ts-ignore
import type { ShareFilterType } from '../../models';
// @ts-ignore
import type { SortOrder } from '../../models';
// @ts-ignore
import type { StorageFilter } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { ThirdPartyFolderWrapper } from '../../models';
// @ts-ignore
import type { UpdateRoomRequest } from '../../models';
// @ts-ignore
import type { UpdateTagRequestDto } from '../../models';
// @ts-ignore
import type { UploadResultWrapper } from '../../models';
// @ts-ignore
import type { UserInvitation } from '../../models';
/**
 * RoomsApi - axios parameter creator
 * @export
 */
export const RoomsApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Attaches the named tags to a room and returns the room with its whole tag set. Tags are portal-wide labels  shared by every room, and a name that the catalogue does not hold yet is created there by this call, so  attaching is also the short way of adding a tag to the portal. Names already attached to the room are kept as  they are, and repeating the call changes nothing, which makes it safe to retry. An empty list is accepted and  does nothing, while a blank or overlong name is rejected as an invalid request. The caller must be a manager  of the room or an administrator of the portal, and a room in the Archive section is refused with 403. A tag  has no identifier of its own and is addressed by name, so `GET api/2.0/files/tags` is what shows which names  already exist. Use `DELETE api/2.0/files/rooms/{id}/tags` to detach them again, which leaves the tags  themselves in the catalogue.
         * @summary Attach tags to a room
         * @param {number | string} id The room whose tags are changed, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The names to attach or to detach.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-tags/
         */
        addRoomTags: async (id: number | string, batchTagsRequestDto?: BatchTagsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('addRoomTags', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/tags`
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
            localVarRequestOptions.data = serializeDataIfNeeded(batchTagsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues a background job that moves one room from the Rooms section to the Archive section, and returns the  operation record of that job. An archived room stays readable to its members and becomes read only: files  cannot be created, renamed or edited in it, and its settings, tags, logo and links can no longer be changed,  which is why many other room operations answer an archived room with a refusal. The caller must be a manager  of the room; administrators of the portal cannot archive a room they were not invited to, and a room template  cannot be archived at all and is answered as missing. The room is not archived when the response arrives: poll  `GET api/2.0/files/fileops` until `finished` is true. Archiving an already archived room is harmless.  `deleteAfter` decides only how long the finished record survives, not what happens to the room. Use  `PUT api/2.0/files/rooms/{id}/unarchive` to bring the room back.
         * @summary Archive a room
         * @param {number | string} id The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The body of the request. It carries only the lifetime of the job record, so an empty object is a normal  request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for archiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/archive-room/
         */
        archiveRoom: async (id: number | string, archiveRoomRequest?: ArchiveRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('archiveRoom', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/archive`
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
            localVarRequestOptions.data = serializeDataIfNeeded(archiveRoomRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the cover picture and the background colour a room is shown with, and returns the whole room afterwards.  `cover` accepts only an identifier listed by `GET api/2.0/files/rooms/covers`, and `color` only six  hexadecimal digits with no leading number sign, so anything else is rejected as an invalid request. Either  field may be sent on its own, an empty `cover` clears the picture, an empty `color` restores the default one,  and an empty body leaves the room untouched. The cover is what the room shows while it has no uploaded logo:  setting a logo with `POST api/2.0/files/rooms/{id}/logo` hides the cover without erasing it, and deleting that  logo brings it back. The caller must be a manager of the room, an archived room is refused with 403, and an  unknown or deleted room is answered with 404. Repeating the same request is harmless, and the cover survives  archiving and unarchiving.
         * @summary Change the room cover
         * @param {number | string} id The room to change, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {CoverRequestDto} coverRequestDto The cover and the colour to apply. Either half may be sent on its own, and an empty object leaves the room as  it is.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeRoomCover operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/
         */
        changeRoomCover: async (id: number | string, coverRequestDto: CoverRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('changeRoomCover', 'id', id)
            // verify required parameter 'coverRequestDto' is not null or undefined
            assertParamExists('changeRoomCover', 'coverRequestDto', coverRequestDto)

            const localVarPath = `/api/2.0/files/rooms/{id}/cover`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(coverRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a room in the portal Rooms section and returns it. `roomType` decides which sharing links, member  roles and form features the room offers, and it cannot be changed afterwards, so a room of the wrong kind has  to be recreated. The caller must be the portal owner, a portal administrator or a room administrator; a user  or a guest is refused, and so is a public room while the portal forbids external sharing. `title` is required  and must not be blank: characters a folder name cannot hold are replaced with underscores and the rest is  truncated, so the stored title can differ from the one sent and two rooms can share it. `quota` is accepted  only while the per-room quota feature is on and must stay within the portal quota, `cover` only for an id  returned by `GET api/2.0/files/rooms/covers`, and `color` as six hexadecimal digits with no leading number  sign. Tag names the portal does not know yet are added to the tag catalogue. `share` is not implemented and  any non-empty value is rejected, so invite members afterwards with `PUT api/2.0/files/rooms/{id}/share`.  Passing the portal room limit ends the call as a billing refusal and creates nothing.
         * @summary Create a room
         * @param {CreateRoomRequestDto} [createRoomRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room/
         */
        createRoom: async (createRoomRequestDto?: CreateRoomRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createRoomRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts a background job that copies a room template into a new room of the Rooms section, and answers with the  same progress record that `GET api/2.0/files/rooms/fromtemplate/status` returns. The caller must be able to  read the template and to create rooms at all, so a user or a guest is refused, and the checks run before the  job is queued. The room does not exist when the response arrives: poll the status operation until  `isCompleted` is true, then take `roomId` from it, and treat a non-empty `error` as a failed job. Only one  such job is kept per account, and a finished one is discarded when the next is started, so a second creation  loses the record of the first. Anything not sent is inherited from the template, and `copyLogo` keeps the  template logo and makes `logo` pointless. `quota` is accepted only while the per-room quota feature is on, and  a template of a public room cannot be instantiated while the portal forbids external sharing. A template that  does not exist or cannot be read is answered as missing.
         * @summary Create a room from the template
         * @param {CreateRoomFromTemplateDto} [createRoomFromTemplateDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomFromTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-from-template/
         */
        createRoomFromTemplate: async (createRoomFromTemplateDto?: CreateRoomFromTemplateDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms/fromtemplate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createRoomFromTemplateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Turns an image already uploaded to the portal into the logo of a room and returns the room with the addresses  of the four logo sizes. This is the second half of a two-step flow: upload the picture with  `POST api/2.0/files/logos` first and pass the path it returns as `tmpFile`, because the image itself is never  sent here. The temporary file belongs to the account that uploaded it and is consumed by this call, so it  cannot be reused for a second room and a path somebody else uploaded is refused. `x`, `y`, `width` and  `height` crop the picture; sending a position without a size is rejected as an invalid request, while a size  without a position is accepted. An empty `tmpFile` leaves the room as it is. A logo replaces the cover in the  interface without erasing it, and removing the logo brings the cover back. The caller must be a manager of the  room, an archived room is refused, and an unknown room is answered with 404.
         * @summary Set the room logo
         * @param {number | string} id The room the logo is set on.
         * @param {LogoRequest} logoRequest The uploaded picture and the piece of it to use.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/
         */
        createRoomLogo: async (id: number | string, logoRequest: LogoRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createRoomLogo', 'id', id)
            // verify required parameter 'logoRequest' is not null or undefined
            assertParamExists('createRoomLogo', 'logoRequest', logoRequest)

            const localVarPath = `/api/2.0/files/rooms/{id}/logo`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(logoRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds a custom tag to the portal-wide catalog of room tags and answers with the stored name. Tags are shared by  the whole portal instead of belonging to the caller: once the tag exists, every room manager can attach it to  their own rooms with `PUT api/2.0/files/rooms/{id}/tags`, and that call also creates a tag it does not find.  Creating a name that is already in the catalog returns the existing tag unchanged rather than a duplicate or  an error, so repeating the call after a timeout is safe. A blank name, or one longer than the published limit,  is rejected as an invalid request. Only a room manager or a portal administrator may create a tag, and a user  or a guest is refused. The answer is the name as stored, and that name is the value to send in the `tags`  filter of `GET api/2.0/files/rooms` and in the room tag calls. The catalog itself is read with  `GET api/2.0/files/tags`.
         * @summary Create a room tag
         * @param {CreateTagRequestDto} [createTagRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-tag/
         */
        createRoomTag: async (createTagRequestDto?: CreateTagRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/tags`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createTagRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues a background job that turns an existing room into a reusable room template, and returns the state of  that job right away. The template lands in the portal\'s Templates section, inherits the source room\'s type,  privacy, indexing, storage limit, lifetime, download and watermark settings, and receives copies of the room\'s  files together with its ordinary subfolders and everything inside them; the service subfolders a room keeps  for its own workflows are left out. The caller needs room-manager rights on the source room, and the room must  not be archived: a room that cannot be found under Rooms is answered as missing, and every other refusal comes  back as a rejection. The template is not ready when the response arrives, so poll  `GET api/2.0/files/roomtemplate/status` until `isCompleted` is true, then read `templateId`; a non-empty  `error` there means the job failed and the half-built template was removed. Only one template creation is  tracked per caller, and starting another replaces the previous record. Setting `public` to true discards  `share` and `groups` and shares the finished template with everyone instead, while `copyLogo` reuses the  source room\'s own picture and makes `logo` irrelevant.
         * @summary Create a room template
         * @param {RoomTemplateDto} [roomTemplateDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-template/
         */
        createRoomTemplate: async (roomTemplateDto?: RoomTemplateDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/roomtemplate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(roomTemplateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Turns a folder of a connected third-party storage account into a room of the `Rooms` section, so that the  files of the room keep living in that storage instead of the portal. Connect the account first with  `POST api/2.0/files/thirdparty` and take the path parameter from a folder listing of that account: it is the  identifier of a folder in the storage, not of a room. One connected account can back one room only, so a  second call over the same account is refused, and so is an account that was not connected for room storage.  The caller needs the right to create rooms, which a portal user and a guest do not have; a public room is  refused while the administrator restricts external access, and reaching the room limit of the tariff is  refused too. With `createAsNewFolder` the room is a new subfolder named after `title`, otherwise the folder  from the path becomes the room itself and `indexing`, `denyDownload`, `tags` and `logo` are then dropped. The  answer is the new room, whose identifiers are strings; a public or a form-filling room already has its primary  link, readable with `GET api/2.0/files/rooms/{id}/link`.
         * @summary Create a third-party room
         * @param {string} id The identifier of the folder in the connected third-party storage that becomes the room, or receives it as a  subfolder. Folder identifiers of a connected account are strings and are returned by the folder listings of  that account.
         * @param {CreateThirdPartyRoom} createThirdPartyRoom The settings of the room to be created out of the folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-third-party/
         */
        createRoomThirdParty: async (id: string, createThirdPartyRoom: CreateThirdPartyRoom, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createRoomThirdParty', 'id', id)
            // verify required parameter 'createThirdPartyRoom' is not null or undefined
            assertParamExists('createRoomThirdParty', 'createThirdPartyRoom', createThirdPartyRoom)

            const localVarPath = `/api/2.0/files/rooms/thirdparty/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(createThirdPartyRoom, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes custom room tags from the portal catalog by name and detaches them from every room that carries them;  the rooms themselves and their content are untouched, and only the tag disappears from their tag lists. Only a  portal administrator may call it, and a room manager who is allowed to create tags is refused. The names are  matched exactly as they are stored: names that are not in the catalog are skipped in silence and an empty list  is accepted as a no-op, so a successful answer does not prove that anything was deleted; check a name with  `GET api/2.0/files/tags/{tagName}/haslinks` first when that matters. The call cannot be undone: creating the  name again with `POST api/2.0/files/tags` brings back the tag but not its links, which have to be attached to  each room once more. The answer carries no body. To take a tag off one room and leave it in the catalog for  the others, use `DELETE api/2.0/files/rooms/{id}/tags` instead.
         * @summary Delete the custom room tags
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteCustomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-custom-tags/
         */
        deleteCustomTags: async (batchTagsRequestDto?: BatchTagsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/tags`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(batchTagsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues a background job that deletes one room with everything inside it, and returns the operation record of  that job. Deleting a room is destructive and has no trash step: the room and its files are gone once the job  finishes, unlike a file or a folder, which is moved to the trash first. The right to delete is checked before  the job is queued, so a caller who may not delete the room is refused straight away and an unknown room is  answered as missing; the same checks run again when the job starts, which is why the `error` of the finished  operation still has to be read. Poll `GET api/2.0/files/fileops` until `finished` is true, or read the  returned record again by its `id`. The record is kept until it is read once, so one poll after completion  still sees it. `deleteAfter` in the body is required by the contract but has no effect on the job. An archived  room is deleted the same way, and a second delete of the same id reports that the room is missing.
         * @summary Remove a room
         * @param {number | string} id The room to delete, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {DeleteRoomRequest} deleteRoomRequest The body of the request. It is required even though the deletion does not depend on what it holds.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room/
         */
        deleteRoom: async (id: number | string, deleteRoomRequest: DeleteRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRoom', 'id', id)
            // verify required parameter 'deleteRoomRequest' is not null or undefined
            assertParamExists('deleteRoom', 'deleteRoomRequest', deleteRoomRequest)

            const localVarPath = `/api/2.0/files/rooms/{id}`
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deleteRoomRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes the uploaded logo of a room and returns the room with empty logo addresses. What the room falls back  to is its cover and colour, which the logo only hid: if a cover was set before the logo, it is shown again,  and `POST api/2.0/files/rooms/{id}/cover` is what changes it. Nothing else about the room is touched, so  membership, tags, links and settings are preserved. A room that has no logo is accepted and answered with 200,  and repeating the call is therefore harmless. The caller must be a manager of the room; a member invited even  with editing rights is refused, and so is a room in the Archive section. A room that does not exist or was  deleted is answered as missing. After the logo is removed a new one can be set again through  `POST api/2.0/files/logos` followed by `POST api/2.0/files/rooms/{id}/logo`.
         * @summary Remove a room logo
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-logo/
         */
        deleteRoomLogo: async (id: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRoomLogo', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/logo`
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
         * Detaches the named tags from a room and returns the room with its remaining tag set. Only the link between the  room and the tag is removed: the tag stays in the portal catalogue and keeps working for every other room, and  `DELETE api/2.0/files/tags` is what removes it from the portal itself. Names that are not in the catalogue, or  not attached to this room, are skipped without an error, so a successful answer does not prove that anything  was detached; compare the returned tag set instead. An empty list is accepted and does nothing, while a null  entry in the list is rejected as an invalid request. The caller must be a manager of the room or an  administrator of the portal, and a room in the Archive section is refused with 403. A tag that loses its last  room stays in the catalogue, and only deleting that room takes the tag with it.
         * @summary Detach tags from a room
         * @param {number | string} id The room whose tags are changed, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The names to attach or to detach.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-tags/
         */
        deleteRoomTags: async (id: number | string, batchTagsRequestDto?: BatchTagsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRoomTags', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/tags`
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(batchTagsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the record of the external database export job of a form filling room, or an empty body when the room  has no job at all. The room must be a form filling room and the caller must be able to edit it, otherwise the  call is refused; an unknown room is answered with 404. This is the polling target of  `POST api/2.0/files/rooms/{id}/externaldbsync`: repeat it until `isCompleted` is true, and then read `forms`,  which lists one entry per original form with its own `success` and `error` and is empty while the job is still  running. `percentage` advances as forms are processed, `status` distinguishes a job that is queued, running,  finished or failed, and `error` carries the message of a job that stopped as a whole. The record belongs to  the room rather than to the account that started the job, so any member who can edit the room sees the same  answer. The call changes nothing and is safe to repeat.
         * @summary Get external DB sync status
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getExternalDbSyncStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-db-sync-status/
         */
        getExternalDbSyncStatus: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getExternalDbSyncStatus', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/externaldbsync`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns what is new for the calling account in one room, grouped by the day the entry was last changed, with  the newest day first and the entries inside a day ordered from the most recent. Only files are reported: a  folder somebody else created is not an entry of its own, while a file created inside it is, however deep it  lies. What the caller changed is never new for the caller, and a file that was deleted afterwards disappears  from the answer. Reading this list leaves the badges alone, which is what makes it the operation to call  before `GET api/2.0/files/rooms/{id}`, since opening the room clears them. An empty array therefore means that  there is nothing new, not that the badges were already read. The caller needs access to the room; somebody who  is not a member is refused, and an unknown or deleted room is answered as missing. Use  `GET api/2.0/files/rooms/news` for the same report across every room at once.
         * @summary Get new items in a room
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNewRoomItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-room-items/
         */
        getNewRoomItems: async (id: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getNewRoomItems', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/news`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reports whether the room template addressed by `id` is shared with everyone or is reachable only by the  accounts it was explicitly shared with. True means the Everyone group holds read access, so any member allowed  to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; false means only  the owner and the named recipients can. The identifier has to belong to a room template — take it from  `templateId` of `GET api/2.0/files/roomtemplate/status`, or from the folder list of `GET api/2.0/files/rooms`  called with `searchArea` set to 4 — while an ordinary room, a deleted template or an unknown value is answered  as missing. The caller needs read access to the template, so somebody else\'s private template is refused even  for a portal administrator, and members who cannot reach the Templates section at all are refused whatever the  template\'s state. The call only reads state; use `PUT api/2.0/files/roomtemplate/public` to change it.
         * @summary Get room template public access
         * @param {number} id The identifier of the room template. Take it from `templateId` of `GET api/2.0/files/roomtemplate/status`, or  from the folder list of `GET api/2.0/files/rooms` called with `searchArea` set to 4; an identifier of an  ordinary room is not accepted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPublicSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-settings/
         */
        getPublicSettings: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPublicSettings', 'id', id)

            const localVarPath = `/api/2.0/files/roomtemplate/{id}/public`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the gallery of cover pictures a room can be given: every entry pairs the identifier to send to  `POST api/2.0/files/rooms/{id}/cover` with the drawing itself as inline vector markup ready to be rendered.  The gallery is built into the product rather than stored per portal, so it is the same for every account and  every room, does not depend on what rooms exist, and its identifiers do not change with the language of the  request. The identifiers are unique and stable, which makes them safe to keep in a client, while the drawings  behind them may change between product versions. Any account of the portal may read the gallery, but a guest  is refused. The list is the only source of valid cover identifiers: a value that is not in it is rejected  wherever a cover is set, including room creation and room update. The call changes nothing and is safe to  repeat.
         * @summary Get room cover gallery
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomCovers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-covers/
         */
        getRoomCovers: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms/covers`;
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
         * Returns the progress of the room-from-template job started by the calling account with  `POST api/2.0/files/rooms/fromtemplate`. The record is private to the account that started the job: jobs of  other members are never reported, and only one record is kept per account. The body is empty when the account  has no such record, and it is also empty when the job queue cannot be read, so an empty answer is not proof  that nothing was started. `progress` is a percentage, `isCompleted` marks the end of the job whether it  succeeded or failed, `error` carries the failure message and is empty on success, and `roomId` is meaningful  only once the room exists. The record survives the end of the job and is dropped when the next creation  starts, so polling after completion keeps returning the same answer. Poll this operation until `isCompleted`  is true and then read the room itself with `GET api/2.0/files/rooms/{id}`. The call changes nothing and is  safe to repeat.
         * @summary Get the room creation progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomCreatingStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-creating-status/
         */
        getRoomCreatingStatus: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms/fromtemplate/status`;
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
         * Returns the state of the index export of the calling account, the job started by  `POST api/2.0/files/rooms/{id}/indexexport`. The record is not addressed by room: there is at most one per  account, and the answer describes the latest export whichever room it was started for. When the account has  never started one, or its record was cancelled, the body is null rather than an error, so null is the normal  way of saying that there is nothing to report. While the job runs, `percentage` moves in coarse steps instead  of smoothly, which makes it a rough hint rather than a measure of the remaining time; `isCompleted` is the  field to wait on, and it is also set for a job that failed or was cancelled, so read `status` to tell the  outcomes apart and `error` for the message. After a successful build, `resultFileId`, `resultFileName` and  `resultFileUrl` point to the spreadsheet saved in the My documents section of the caller. The record survives  completion and is replaced only by the next export.
         * @summary Get the room index export
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-index-export/
         */
        getRoomIndexExport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms/indexexport`;
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
         * Returns one room with its type, title, tags, logo, cover, colour, quota and virtual data room settings,  together with the access level the caller has in it. Reading the room is not a side-effect-free call: it  clears the caller new-item badges for that room, and `newForMe` comes back as 0, so read  `GET api/2.0/files/rooms/{id}/news` first when the new items matter. The caller needs read access to the room;  portal administrators can read a room they were never invited to, while a member without access is refused.  The operation also answers an anonymous caller, but only in the context of a valid external share link of that  room, and a plain anonymous request is rejected as unauthenticated. A room that never existed, was deleted, or  lives in a section the caller cannot see is answered as missing. Archived rooms are returned as well and are  recognised by their root section rather than by a separate flag. Use `GET api/2.0/files/rooms` to search and  page through rooms instead of guessing ids.
         * @summary Get room information
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-info/
         */
        getRoomInfo: async (id: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRoomInfo', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the sharing links of a room, with the invitation and the external links mixed together unless `type`  narrows it to one kind. Each entry carries the link address, its title, access level, expiration, the flag  that marks the primary external link of the room and, for invitation links, how many times it may still be  used. Public and form filling rooms come with an external link created for them, so an empty answer there  means that the link was revoked rather than that the room is private; rooms of the other kinds start with no  links at all and only gain one when somebody creates it, which for a collaboration room and a virtual data  room can be an invitation link alone. The caller needs access to the room and the right to see its links: a  member invited without that right gets an empty list rather than an error, while somebody who is not in the  room at all is refused. Paging parameters are not honoured here: the first hundred links are returned and the  reported count is the number of entries actually sent.
         * @summary Get the room links
         * @param {number | string} id The room whose links are listed, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {LinkType} [type] Narrows the answer to one kind of link: invitation links, which turn whoever opens them into a member, or  external links, which open the room without an account. Leaving it out returns both kinds together.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-links/
         */
        getRoomLinks: async (id: number | string, type?: LinkType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRoomLinks', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/links`
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

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * Returns one page of the access list of a room: the owner first, then the managers, the groups, the ordinary  members, the guests and finally the invitations nobody has accepted yet, with the total in the response  headers. `filterType` selects what is listed and defaults to accounts and groups, which leaves the sharing  links of the room out; those are read with `GET api/2.0/files/rooms/{id}/links`. `filterValue` matches the  displayed name of the subject, and an invitation that is still pending is listed under the email address it  was sent to. Paging is done with `count` and `startIndex`, and the order is stable between calls. Any member  who can read the room sees the accounts and the groups, so the list is not limited to the managers, and portal  administrators can read the list of a room they were never invited to; somebody who is not in the room at all  is refused. Asking for the link entries instead needs the right to see the links of the room, and a member  without it gets an empty page rather than an error.
         * @summary Get the room access rights
         * @param {number | string} id The room whose access list is read, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {ShareFilterType} [filterType] What kind of access entries to list. The default covers accounts and groups and leaves the sharing links of  the room out; those are read with `GET api/2.0/files/rooms/{id}/links`.
         * @param {number} [count] How many entries to return in one answer. The total number of matching entries comes back in the response  headers, so it is what tells the caller whether another page is needed.
         * @param {number} [startIndex] How many matching entries to skip before the page starts. Together with the page size it walks the list, which  is ordered by role and then by name and is therefore stable between calls.
         * @param {string} [filterValue] Keeps only the entries whose displayed name contains this text. An invitation that has not been accepted yet  is listed under the email address it was sent to, so that is what has to be searched for.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-security-info/
         */
        getRoomSecurityInfo: async (id: number | string, filterType?: ShareFilterType, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRoomSecurityInfo', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/share`
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

            if (filterType !== undefined) {
                localVarQueryParameter['filterType'] = filterType;
            }

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
         * Returns the custom room tags available to the caller as a flat array of names, not of objects. What the array  holds depends on the account: a portal administrator gets the whole catalog, including tags that no room uses  yet, while every other account gets only the tags attached to rooms it can see, with duplicates removed. An  empty answer therefore means that this caller sees no tagged room, not that the portal has no tags.  `filterValue` keeps the names that contain the given text, ignoring case, while `count` and `startIndex` page  the result; no total is returned, so a page shorter than `count` is the signal that the list is exhausted. The  names are exactly the values accepted by the `tags` filter of `GET api/2.0/files/rooms` and by the room tag  calls, which makes this the call to fill a tag picker with. Add a tag with `POST api/2.0/files/tags` and check  whether one is still in use with `GET api/2.0/files/tags/{tagName}/haslinks`.
         * @summary Get available room tags
         * @param {number} [count] How many tag names one page may carry. The answer reports no total, so a page shorter than this is the sign  that the list is exhausted.
         * @param {number} [startIndex] How many tag names to skip before the page begins. Raise it by the number of names already received to read  the next page.
         * @param {string} [filterValue] Keeps only the tag names that contain this text, ignoring case. It is a substring match, so a fragment from  the middle of a name is enough.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomTagsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-tags-info/
         */
        getRoomTagsInfo: async (count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/tags`;
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


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * Reports the state of the room template creation the caller started with `POST api/2.0/files/roomtemplate`. The  record is private to the account that started the job: work started by another member is never reported, and a  caller who has started none gets an empty response instead of an object. Poll until `isCompleted` turns true,  then take the identifier of the finished template from `templateId`; a non-empty `error` means the job failed  and no template was kept. Treat `isCompleted` as the completion signal rather than `progress`, which the  background job only sets to 100 once the work is over. The record outlives the job, so a finished operation  can be read again and keeps returning the same identifier until the caller starts another template creation,  which replaces it. The call only reads state and needs no access to the source room or to the template, but it  does require an authenticated caller.
         * @summary Get room template creation status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomTemplateCreatingStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-template-creating-status/
         */
        getRoomTemplateCreatingStatus: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/roomtemplate/status`;
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
         * Lists the rooms of one section of the portal: the active rooms by default, or the archive, the form-filling  section or the room templates, chosen with `searchArea`. The rooms arrive in `folders` while `files` stays  empty, `current` describes the section itself, and `total` counts every room that matched the filters before  paging. A caller sees only the rooms they created or were invited to, while a portal administrator sees all of  them, so an empty answer means nothing is visible to this account rather than nothing exists. The remaining  parameters narrow the same set, by room type, title, tags, member, owner, storage, quota and privacy, and they  combine with each other. Sorting is not free of side effects: a `sortBy` value is also stored as this  account\'s default order for later listings, and omitting it reuses the stored order. Page the result with  `count` and `startIndex`. Read a single room with `GET api/2.0/files/rooms/{id}`, and create one with  `POST api/2.0/files/rooms`.
         * @summary Get rooms
         * @param {Array<RoomType>} [type] Keeps only the rooms of the listed kinds. Repeat the parameter to pass more than one value; they are combined  with OR, and omitting it returns the rooms of every kind.
         * @param {string} [subjectId] Keeps only the rooms this account or group has access to, which is how the rooms of one member are listed. The  identifier comes from the portal people and group listings, and the exclude flag turns the filter into its  opposite.
         * @param {string} [subjectOwnerId] Keeps only the rooms created by this account, regardless of who else was invited to them. The identifier comes  from the portal people listing, and the exclude flag turns the filter into its opposite.
         * @param {SearchArea} [searchArea] The section to list. Every section is a separate root and a room belongs to exactly one of them at a time, so  archiving a room moves it out of the active section. The default is the active section, which leaves the  form-filling rooms to their own value.
         * @param {boolean} [withoutTags] When true, keeps only the rooms that carry no tag at all, which is the complement of the tag filter. When  false or omitted, tags play no part in the selection.
         * @param {string} [tags] A JSON array of tag names serialized into a single query value, for example [Important,Legal]. A room  matches when it carries any one of them. Take the names from `GET api/2.0/files/tags`; a name that is not in  the catalog simply matches nothing.
         * @param {boolean} [excludeSubject] Inverts the two subject filters: when true, the rooms of the named account are the ones left out of the answer  instead of the only ones kept. It does nothing on its own.
         * @param {ProviderFilter} [provider] Keeps only the rooms whose content lives in the named third-party service, for portals where rooms may be  connected to external storage. The default keeps rooms of every origin.
         * @param {QuotaFilter} [quotaFilter] Splits the rooms by whether a storage quota was set on the room itself or it follows the portal default, which  is how rooms with a custom limit are found.
         * @param {StorageFilter} [storageFilter] Splits the rooms by where their content is stored, in the portal itself or in a connected third-party account.  It is the coarse form of the provider filter.
         * @param {RoomPrivacyFilter} [privacyFilter] Splits the rooms by whether they are private, that is encrypted rooms whose content the portal cannot read.  Omitting it returns both kinds.
         * @param {number} [count] How many rooms one page may carry. Ask for the next page by raising the start index by the number of rooms  already received.
         * @param {number} [startIndex] How many matching rooms to skip before the page begins. Page through the answer until the skip plus the rooms  received reaches the total it reports.
         * @param {string} [sortBy] The field to order the rooms by, named as in the file listings: `AZ` for the title, `DateAndTime` for the last  change, `DateAndTimeCreation`, `Author`, `Size`, `Type`, `RoomType`, `Tags`, `UsedSpace`, `LastOpened`. The  name is matched ignoring case, an unknown one is rejected rather than ignored, and the accepted one also  becomes this account\'s stored order.
         * @param {SortOrder} [sortOrder] The direction of the order chosen by the sort field. It has no effect when no sort field is given and the  stored order of the account is used.
         * @param {string} [filterValue] Keeps only the rooms whose title contains this text, ignoring case. It is a substring match over the title  alone: room content and tags are not searched.
         * @param {number} [groupId] Keeps only the rooms that belong to this room group. The identifier comes from `GET api/2.0/files/group`; the  groups of portal members are a different concept and their identifiers do not match here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/
         */
        getRoomsFolder: async (type?: Array<RoomType>, subjectId?: string, subjectOwnerId?: string, searchArea?: SearchArea, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, provider?: ProviderFilter, quotaFilter?: QuotaFilter, storageFilter?: StorageFilter, privacyFilter?: RoomPrivacyFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, groupId?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms`;
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

            if (type) {
                localVarQueryParameter['type'] = type;
            }

            if (subjectId !== undefined) {
                localVarQueryParameter['subjectId'] = subjectId;
            }

            if (subjectOwnerId !== undefined) {
                localVarQueryParameter['subjectOwnerId'] = subjectOwnerId;
            }

            if (searchArea !== undefined) {
                localVarQueryParameter['searchArea'] = searchArea;
            }

            if (withoutTags !== undefined) {
                localVarQueryParameter['withoutTags'] = withoutTags;
            }

            if (tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            if (excludeSubject !== undefined) {
                localVarQueryParameter['excludeSubject'] = excludeSubject;
            }

            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }

            if (quotaFilter !== undefined) {
                localVarQueryParameter['quotaFilter'] = quotaFilter;
            }

            if (storageFilter !== undefined) {
                localVarQueryParameter['storageFilter'] = storageFilter;
            }

            if (privacyFilter !== undefined) {
                localVarQueryParameter['privacyFilter'] = privacyFilter;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['groupId'] = groupId;
            }


    
            if(fields !== undefined) {
                localVarHeaderParameter['fields'] = fields;
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
         * Collects everything that is marked as new for the caller across the active rooms into one answer, grouped  first by the day an entry changed and then by the room it belongs to. An entry becomes new when somebody else  creates or changes it in a room the caller has already opened, so the caller\'s own work never shows up here,  and neither does anything from a room they have never visited. Only files are listed: a new subfolder is not  an item, although files created inside it are, at any depth. The days come newest first, and inside a day the  rooms and their files follow the same order by change time. The archive is out of scope, only rooms of the  active section are covered. Reading the list clears nothing: the marks stay until the room itself is opened  with `GET api/2.0/files/rooms/{id}`. An empty array means that this account has nothing new. For one room, use  `GET api/2.0/files/rooms/{id}/news`.
         * @summary Get new items in all rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsNewItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-new-items/
         */
        getRoomsNewItems: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms/news`;
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
         * Returns the primary external link of a room, which is the one address meant to be handed out to people outside  the portal. A public room and a form filling room get such a link when they are created, and asking for it  again returns the same link rather than a new one, so the answer is stable. In a room that has no primary link  yet this call creates one instead of reporting nothing, which needs the right to manage the links of the room:  a member invited with a lower level is refused with 403, and so is anybody who is not in the room at all. A  link that was explicitly revoked stays revoked and is reported as missing rather than recreated, and an  unknown room is answered with 404 as well. An archived public room still reports its link. The answer is the  same entry that `GET api/2.0/files/rooms/{id}/links` returns with the primary flag set, including the request  token that has to travel with the address.
         * @summary Get the room primary external link
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-primary-external-link/
         */
        getRoomsPrimaryExternalLink: async (id: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRoomsPrimaryExternalLink', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/link`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reports whether any room still carries the named tag, which is the check to run before the tag is deleted from  the catalog. Only a portal administrator may call it, and every other account is refused. The name is matched  exactly against the catalog, and a name that is not in it is answered with 404. That also tells the two ways a  tag stops being used apart: taking the tag off the last room that carried it leaves the tag in the catalog and  turns the answer to false, while deleting that last room removes the tag itself, after which the call answers  404. A true answer means at least one room, active or archived, still references the tag, so deleting it with  `DELETE api/2.0/files/tags` would strip it from those rooms. The handler reads the tag name from the query  string, so the value has to be sent twice: in the path segment and as the `tagName` query parameter.
         * @summary Check room tag usage
         * @param {string} tagName2 The tag being checked. Send the same value as the `tagName` query parameter, which is the one the handler reads.
         * @param {string} [tagName] The tag to check, spelled exactly as it is stored in the catalog. This query value is the one the handler  reads, so the path segment of the same name has to repeat it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hasTagLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/has-tag-links/
         */
        hasTagLinks: async (tagName2: string, tagName?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagName2' is not null or undefined
            assertParamExists('hasTagLinks', 'tagName2', tagName2)

            const localVarPath = `/api/2.0/files/tags/{tagName}/haslinks`
                .replace(`{${"tagName"}}`, encodeURIComponent(String(tagName2)));
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

            if (tagName !== undefined) {
                localVarQueryParameter['tagName'] = tagName;
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
         * Pins a room to the top of the room list of the calling account and returns the room with the pinned flag set.  Pinning is personal: it changes the order only for the caller, is invisible to the other members of the room,  and does not survive a trip through the Archive section, so an unarchived room has to be pinned again. Pinned  rooms stay above the unpinned ones whatever sorting or filter the listing uses, and their own order between  each other is stable. An account may keep only a limited number of pinned rooms at a time, ten on a portal  with the default configuration, and AI rooms are counted separately against their own allowance; a request  over the limit is refused until something is unpinned with `PUT api/2.0/files/rooms/{id}/unpin`. Pinning a  room that is already pinned changes nothing and is safe to repeat. Anybody who can read the room may pin it,  including guests and portal administrators who were never invited, while somebody who is not in the room is  refused, an archived room is rejected and an unknown room is answered as missing.
         * @summary Pin a room
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for pinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/pin-room/
         */
        pinRoom: async (id: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('pinRoom', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/pin`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Renumbers the manual order of the items lying directly in a room so that they run from one upwards with no  gaps and no duplicates, and returns the room. The order of the items relative to each other is preserved: only  the numbers are compacted, and nothing is moved, renamed, duplicated or deleted. Files and folders share one  sequence. Nested folders keep their own numbering and are not touched, so each level is compacted on its own.  The operation is meant for a room with indexing turned on, where the manual order is what listings follow; a  room without indexing accepts it and simply has nothing that depends on the result. Running it twice changes  nothing the second time, and an already dense sequence is left as it is, which makes the call safe to retry.  The caller must be a manager of the room; a member invited with any other level is refused, an archived room  is rejected, and an unknown or deleted room is answered as missing.
         * @summary Reorder room contents
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for reorderRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reorder-room/
         */
        reorderRoom: async (id: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('reorderRoom', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/reorder`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends the room invitation email again to members who were invited but have not joined yet. `resendAll` covers  every pending invitation of the room and makes `usersIds` irrelevant, while an explicit list without that flag  is limited to the named accounts. An account that has already accepted the invitation, is not a member of the  room, or is invisible to the caller is skipped without an error, and a request that names nobody and does not  set the flag does nothing, so a successful answer never proves that a message went out. Nothing about the room  or its membership changes, and the operation can be repeated. The caller must be a manager of the room, an  archived room is refused, a room template is answered as missing, and a malformed account id is rejected as an  invalid request. The call is rate limited, so a client that loops over members should send one batch instead.  The response carries no body.
         * @summary Resend the room invitations
         * @param {number | string} id The room whose invitations are resent, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {UserInvitation} userInvitation Which pending invitations to send again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resendEmailInvitations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-email-invitations/
         */
        resendEmailInvitations: async (id: number | string, userInvitation: UserInvitation, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('resendEmailInvitations', 'id', id)
            // verify required parameter 'userInvitation' is not null or undefined
            assertParamExists('resendEmailInvitations', 'userInvitation', userInvitation)

            const localVarPath = `/api/2.0/files/rooms/{id}/resend`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(userInvitation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Switches the room template named by `id` between shared with everyone and private, rewriting its whole  recipient list in the process. With `public` true the Everyone group is granted read access, so every member  allowed to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; with  false that access is taken away. In both cases every other account and group the template was shared with —  including the addresses passed as `share` when it was created — loses access, so this is not a way to add a  single recipient to an existing list. Only the account that owns the template may call it: a portal  administrator who does not own it is refused, and so is a member invited to the source room. The identifier  has to resolve to a room template; an ordinary room or an unknown value is answered as missing, and an  identifier below 1 is rejected as an invalid request. Repeating the call with the same value changes nothing,  and nothing is returned; read the current state with `GET api/2.0/files/roomtemplate/{id}/public`.
         * @summary Set room template public access
         * @param {SetPublicDto} [setPublicDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setPublicSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-public-settings/
         */
        setPublicSettings: async (setPublicDto?: SetPublicDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/roomtemplate/public`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(setPublicDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates, updates or deletes one sharing link of a room and returns it. `linkType` chooses the kind: an  invitation link makes whoever opens it a member with the given access level, while an external link opens the  room without an account. Omitting `linkId` creates a link, passing the id of an existing one updates it, and  an unknown id is created with that id; the kind of an existing link cannot be changed afterwards. An access  level of 0 deletes the link, and deleting the primary external link of a public or form filling room  immediately replaces it with a fresh one, so such a room is never left without one. A room keeps at most one  invitation link, and a second one is refused; form filling rooms take no invitation links, and collaboration,  form filling and virtual data rooms take no external links. An expiration date in the past is dropped silently  for an external link and rejected for an invitation link. `password`, `denyDownload` and `internal` apply to  external links only.
         * @summary Set the room external or invitation link
         * @param {number | string} id The room the link belongs to, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {RoomLinkRequest} roomLinkRequest The link to create, change or revoke.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-link/
         */
        setRoomLink: async (id: number | string, roomLinkRequest: RoomLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setRoomLink', 'id', id)
            // verify required parameter 'roomLinkRequest' is not null or undefined
            assertParamExists('setRoomLink', 'roomLinkRequest', roomLinkRequest)

            const localVarPath = `/api/2.0/files/rooms/{id}/links`
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
            localVarRequestOptions.data = serializeDataIfNeeded(roomLinkRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds, changes and removes room members in one batch, and returns the resulting access list of the named  subjects. Each entry names either an account or a group of the portal, or the email address of somebody who  has no account yet, together with the access level to grant; an access of 0 removes the subject from the room.  An entry without an access level is ignored, the same subject listed twice keeps the last level, and an empty  list is accepted and changes nothing. The caller must be a manager of the room, so an invitation sent by a  user or a guest is refused, and an account that is a portal user or a guest cannot be made a room manager.  Inviting by email also needs the portal to allow guest invitations. A subject the caller is not allowed to see  is dropped without an error, which is why the answer has to be compared with the request. Removing a member  who still holds a form role is refused through `error` unless `force` is set. `notify` sends the invitation  email with the optional `message`.
         * @summary Set the room access rights
         * @param {number | string} id The room whose membership changes, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {RoomInvitationRequest} roomInvitationRequest The membership changes to apply, together with how the people concerned are notified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-security/
         */
        setRoomSecurity: async (id: number | string, roomInvitationRequest: RoomInvitationRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setRoomSecurity', 'id', id)
            // verify required parameter 'roomInvitationRequest' is not null or undefined
            assertParamExists('setRoomSecurity', 'roomInvitationRequest', roomInvitationRequest)

            const localVarPath = `/api/2.0/files/rooms/{id}/share`
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
            localVarRequestOptions.data = serializeDataIfNeeded(roomInvitationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Queues a background job that re-exports the collected data of every original form of a form filling room into  the external database configured for the portal, and returns the job record. The room must be a form filling  room and the caller must be able to edit it, otherwise the call is refused with 403; an unknown room is  answered with 404. The export is not done when the response arrives: poll  `GET api/2.0/files/rooms/{id}/externaldbsync` until `isCompleted` is true, then read `forms` for the per-form  outcome, which stays empty while the job is running. Starting the job again while it is still running returns  the same record instead of a second job, so a retry is safe; a finished job is replaced by the new one. One  job is kept per room. A form whose data cannot be exported does not stop the others: it comes back in `forms`  with `success` false and its own `error`. When the portal has no external database configured the call fails  and nothing is queued.
         * @summary Start external DB sync
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startExternalDbSync operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-external-db-sync/
         */
        startExternalDbSync: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('startExternalDbSync', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/externaldbsync`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Queues a background job that builds the index of a virtual data room as a spreadsheet, and answers with the  job record to poll. The room has to be a virtual data room with indexing switched on, and the caller has to be  its manager or a portal administrator; any other kind of room, a room template, and a member invited with a  lower access level are refused, while an unknown room is answered as missing. There is one job per account:  starting an export while an earlier one is still running answers with that earlier record instead of queuing a  second job, and a finished record is replaced by the new one. Poll `GET api/2.0/files/rooms/indexexport` until  `isCompleted` is true, then read `status` to tell a completed job from a failed or cancelled one, and take  `resultFileId` and `resultFileUrl` from the same record. The report is saved as a spreadsheet in the My  documents section of the caller, not in the room. Cancel a running job with  `DELETE api/2.0/files/rooms/indexexport`.
         * @summary Start the room index export
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-room-index-export/
         */
        startRoomIndexExport: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('startRoomIndexExport', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/indexexport`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Cancels the room index export of the calling account and drops its job record. No room is named because there  is at most one export per account, so the call always acts on the caller\'s own job and never on somebody  else\'s: an account with nothing running gets a successful answer that changes nothing, which makes the call  safe to repeat and makes it useless as a way of stopping an export somebody else started. Afterwards  `GET api/2.0/files/rooms/indexexport` answers with an empty body until a new export is started with  `POST api/2.0/files/rooms/{id}/indexexport`. The cancellation is asynchronous: the background job stops at its  next checkpoint, so one that is already saving the file may still finish, and a report that was written before  the cancellation stays in the My documents section of the caller and has to be deleted as an ordinary file.  The answer carries no body and says nothing about whether an export was running.
         * @summary Terminate the room index export
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-room-index-export/
         */
        terminateRoomIndexExport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/rooms/indexexport`;
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
         * Queues a background job that moves one room from the Archive section back to the Rooms section, and returns  the operation record of that job. The room becomes writable again with the membership, tags, logo and links it  had before, while the pinned state of its members is not restored and has to be set again with  `PUT api/2.0/files/rooms/{id}/pin`. The caller must be a manager of the room; a member who was only invited to  it is refused, a room template is answered as missing, and a room that was never archived simply stays where  it is. The room is not moved when the response arrives: poll `GET api/2.0/files/fileops` until `finished` is  true, and expect a room that is still archived until then. `deleteAfter` decides only how long the finished  record survives. Calling the operation twice in a row does not corrupt the room, and a deleted or unknown room  id is reported as missing.
         * @summary Unarchive a room
         * @param {number | string} id The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The body of the request. It carries only the lifetime of the job record, so an empty object is a normal  request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unarchiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unarchive-room/
         */
        unarchiveRoom: async (id: number | string, archiveRoomRequest?: ArchiveRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('unarchiveRoom', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/unarchive`
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
            localVarRequestOptions.data = serializeDataIfNeeded(archiveRoomRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a room from the pinned group of the calling account and returns the room with the pinned flag cleared.  Only the personal ordering of the caller changes: the room itself, its members, their roles and its contents  are left exactly as they were, and the room stays in the list, simply among the unpinned ones. Unpinning frees  one of the pin slots of the account, which AI rooms count separately, so it is the way out of a refused  `PUT api/2.0/files/rooms/{id}/pin`. Unpinning a room that was never pinned is accepted and changes nothing, so  the call can be repeated safely and its answer does not prove that anything was pinned before. Anybody who can  read the room may unpin it, while somebody who is not in the room at all is refused and an unknown or deleted  room is answered as missing. An archived room cannot be unpinned.
         * @summary Unpin a room
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unpinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unpin-room/
         */
        unpinRoom: async (id: number | string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('unpinRoom', 'id', id)

            const localVarPath = `/api/2.0/files/rooms/{id}/unpin`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Applies a partial change to one room and returns the whole room as it is after it. Only the fields present in  the body are touched, an empty body changes nothing, and a property the body does not define is rejected as an  invalid request instead of being ignored. The caller must be a manager of this room: portal administrators do  not get in without an invitation, and an archived room is refused. `title` is trimmed, sanitised the way a  room title is sanitised at creation, and a blank value is treated as no change. `tags` replaces the whole tag  set and an empty array clears it, an empty `color` restores the default and an empty `cover` removes the  cover. A `quota` of -1 switches the room back to no custom limit, any other negative value restores the portal  default, and a positive one is accepted only while the per-room quota feature is on. Turning `indexing` on  renumbers the room contents. `chatSettings` belongs to an AI room and is rejected anywhere else. Use  `POST api/2.0/files/rooms/{id}/logo` for logo cropping.
         * @summary Update a room
         * @param {number | string} id The room to update, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {UpdateRoomRequest} updateRoomRequest The fields to change. Only the properties present in the object are applied, and a property that the object  does not define is rejected instead of being ignored.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/
         */
        updateRoom: async (id: number | string, updateRoomRequest: UpdateRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRoom', 'id', id)
            // verify required parameter 'updateRoomRequest' is not null or undefined
            assertParamExists('updateRoom', 'updateRoomRequest', updateRoomRequest)

            const localVarPath = `/api/2.0/files/rooms/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Renames a custom room tag in the portal catalog. The rename follows the tag everywhere it is used: every room  that carries it keeps it and shows the new name, so nothing has to be re-attached afterwards. Only a portal  administrator may rename a tag, and a room manager who is allowed to create tags is still refused here. The  old name is matched exactly as it is stored rather than searched for, and a name that is not in the catalog is  answered as missing. A new name that another tag already occupies is rejected as an invalid request, because  tag names are unique across the portal; both names must be non-blank and within the published length limit.  The answer is the new name. Stored queries are not updated for the caller: a `tags` filter of  `GET api/2.0/files/rooms` that still names the old value stops matching anything. The catalog is read with  `GET api/2.0/files/tags`.
         * @summary Rename a room tag
         * @param {UpdateTagRequestDto} [updateTagRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoomTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room-tag/
         */
        updateRoomTag: async (updateTagRequestDto?: UpdateTagRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/tags`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateTagRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores an image in temporary storage and answers with the path to it, which is the first half of setting a  room logo. No room changes here: pass the returned path as `tmpFile` to `POST api/2.0/files/rooms/{id}/logo`,  together with the crop rectangle, to make the image the logo of a room. The image travels as multipart form  data, and the first file part of the request is the one that is used while any other part is ignored. It is  re-encoded to PNG and scaled down to fit 1280 by 1280 pixels, so a larger picture is accepted and shrunk,  while a part that is not a readable image, or one over the portal limit for uploaded images, is refused with  400. Only a room manager or a portal administrator may upload, and everyone else gets 403. Every call produces  a new path, and an image that is never used stays in temporary storage until it is cleaned up, so uploading  twice is harmless.
         * @summary Upload a room logo image
         * @param {File} [file] The image data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-room-logo/
         */
        uploadRoomLogo: async (file?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/logos`;
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


            if (file !== undefined) { 
                localVarFormParams.append('File', file as any);
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
 * RoomsApi - functional programming interface
 * @export
 */
export const RoomsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RoomsApiAxiosParamCreator(configuration)
    return {
        /**
         * Attaches the named tags to a room and returns the room with its whole tag set. Tags are portal-wide labels  shared by every room, and a name that the catalogue does not hold yet is created there by this call, so  attaching is also the short way of adding a tag to the portal. Names already attached to the room are kept as  they are, and repeating the call changes nothing, which makes it safe to retry. An empty list is accepted and  does nothing, while a blank or overlong name is rejected as an invalid request. The caller must be a manager  of the room or an administrator of the portal, and a room in the Archive section is refused with 403. A tag  has no identifier of its own and is addressed by name, so `GET api/2.0/files/tags` is what shows which names  already exist. Use `DELETE api/2.0/files/rooms/{id}/tags` to detach them again, which leaves the tags  themselves in the catalogue.
         * @summary Attach tags to a room
         * @param {number | string} id The room whose tags are changed, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The names to attach or to detach.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-tags/
         */
        async addRoomTags(id: number | string, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addRoomTags(id, batchTagsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.addRoomTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that moves one room from the Rooms section to the Archive section, and returns the  operation record of that job. An archived room stays readable to its members and becomes read only: files  cannot be created, renamed or edited in it, and its settings, tags, logo and links can no longer be changed,  which is why many other room operations answer an archived room with a refusal. The caller must be a manager  of the room; administrators of the portal cannot archive a room they were not invited to, and a room template  cannot be archived at all and is answered as missing. The room is not archived when the response arrives: poll  `GET api/2.0/files/fileops` until `finished` is true. Archiving an already archived room is harmless.  `deleteAfter` decides only how long the finished record survives, not what happens to the room. Use  `PUT api/2.0/files/rooms/{id}/unarchive` to bring the room back.
         * @summary Archive a room
         * @param {number | string} id The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The body of the request. It carries only the lifetime of the job record, so an empty object is a normal  request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for archiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/archive-room/
         */
        async archiveRoom(id: number | string, archiveRoomRequest?: ArchiveRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.archiveRoom(id, archiveRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.archiveRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the cover picture and the background colour a room is shown with, and returns the whole room afterwards.  `cover` accepts only an identifier listed by `GET api/2.0/files/rooms/covers`, and `color` only six  hexadecimal digits with no leading number sign, so anything else is rejected as an invalid request. Either  field may be sent on its own, an empty `cover` clears the picture, an empty `color` restores the default one,  and an empty body leaves the room untouched. The cover is what the room shows while it has no uploaded logo:  setting a logo with `POST api/2.0/files/rooms/{id}/logo` hides the cover without erasing it, and deleting that  logo brings it back. The caller must be a manager of the room, an archived room is refused with 403, and an  unknown or deleted room is answered with 404. Repeating the same request is harmless, and the cover survives  archiving and unarchiving.
         * @summary Change the room cover
         * @param {number | string} id The room to change, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {CoverRequestDto} coverRequestDto The cover and the colour to apply. Either half may be sent on its own, and an empty object leaves the room as  it is.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeRoomCover operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/
         */
        async changeRoomCover(id: number | string, coverRequestDto: CoverRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeRoomCover(id, coverRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.changeRoomCover']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a room in the portal Rooms section and returns it. `roomType` decides which sharing links, member  roles and form features the room offers, and it cannot be changed afterwards, so a room of the wrong kind has  to be recreated. The caller must be the portal owner, a portal administrator or a room administrator; a user  or a guest is refused, and so is a public room while the portal forbids external sharing. `title` is required  and must not be blank: characters a folder name cannot hold are replaced with underscores and the rest is  truncated, so the stored title can differ from the one sent and two rooms can share it. `quota` is accepted  only while the per-room quota feature is on and must stay within the portal quota, `cover` only for an id  returned by `GET api/2.0/files/rooms/covers`, and `color` as six hexadecimal digits with no leading number  sign. Tag names the portal does not know yet are added to the tag catalogue. `share` is not implemented and  any non-empty value is rejected, so invite members afterwards with `PUT api/2.0/files/rooms/{id}/share`.  Passing the portal room limit ends the call as a billing refusal and creates nothing.
         * @summary Create a room
         * @param {CreateRoomRequestDto} [createRoomRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room/
         */
        async createRoom(createRoomRequestDto?: CreateRoomRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoom(createRoomRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.createRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts a background job that copies a room template into a new room of the Rooms section, and answers with the  same progress record that `GET api/2.0/files/rooms/fromtemplate/status` returns. The caller must be able to  read the template and to create rooms at all, so a user or a guest is refused, and the checks run before the  job is queued. The room does not exist when the response arrives: poll the status operation until  `isCompleted` is true, then take `roomId` from it, and treat a non-empty `error` as a failed job. Only one  such job is kept per account, and a finished one is discarded when the next is started, so a second creation  loses the record of the first. Anything not sent is inherited from the template, and `copyLogo` keeps the  template logo and makes `logo` pointless. `quota` is accepted only while the per-room quota feature is on, and  a template of a public room cannot be instantiated while the portal forbids external sharing. A template that  does not exist or cannot be read is answered as missing.
         * @summary Create a room from the template
         * @param {CreateRoomFromTemplateDto} [createRoomFromTemplateDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomFromTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-from-template/
         */
        async createRoomFromTemplate(createRoomFromTemplateDto?: CreateRoomFromTemplateDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomFromTemplateStatusWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomFromTemplate(createRoomFromTemplateDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.createRoomFromTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Turns an image already uploaded to the portal into the logo of a room and returns the room with the addresses  of the four logo sizes. This is the second half of a two-step flow: upload the picture with  `POST api/2.0/files/logos` first and pass the path it returns as `tmpFile`, because the image itself is never  sent here. The temporary file belongs to the account that uploaded it and is consumed by this call, so it  cannot be reused for a second room and a path somebody else uploaded is refused. `x`, `y`, `width` and  `height` crop the picture; sending a position without a size is rejected as an invalid request, while a size  without a position is accepted. An empty `tmpFile` leaves the room as it is. A logo replaces the cover in the  interface without erasing it, and removing the logo brings the cover back. The caller must be a manager of the  room, an archived room is refused, and an unknown room is answered with 404.
         * @summary Set the room logo
         * @param {number | string} id The room the logo is set on.
         * @param {LogoRequest} logoRequest The uploaded picture and the piece of it to use.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/
         */
        async createRoomLogo(id: number | string, logoRequest: LogoRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomLogo(id, logoRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.createRoomLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds a custom tag to the portal-wide catalog of room tags and answers with the stored name. Tags are shared by  the whole portal instead of belonging to the caller: once the tag exists, every room manager can attach it to  their own rooms with `PUT api/2.0/files/rooms/{id}/tags`, and that call also creates a tag it does not find.  Creating a name that is already in the catalog returns the existing tag unchanged rather than a duplicate or  an error, so repeating the call after a timeout is safe. A blank name, or one longer than the published limit,  is rejected as an invalid request. Only a room manager or a portal administrator may create a tag, and a user  or a guest is refused. The answer is the name as stored, and that name is the value to send in the `tags`  filter of `GET api/2.0/files/rooms` and in the room tag calls. The catalog itself is read with  `GET api/2.0/files/tags`.
         * @summary Create a room tag
         * @param {CreateTagRequestDto} [createTagRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-tag/
         */
        async createRoomTag(createTagRequestDto?: CreateTagRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomTag(createTagRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.createRoomTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that turns an existing room into a reusable room template, and returns the state of  that job right away. The template lands in the portal\'s Templates section, inherits the source room\'s type,  privacy, indexing, storage limit, lifetime, download and watermark settings, and receives copies of the room\'s  files together with its ordinary subfolders and everything inside them; the service subfolders a room keeps  for its own workflows are left out. The caller needs room-manager rights on the source room, and the room must  not be archived: a room that cannot be found under Rooms is answered as missing, and every other refusal comes  back as a rejection. The template is not ready when the response arrives, so poll  `GET api/2.0/files/roomtemplate/status` until `isCompleted` is true, then read `templateId`; a non-empty  `error` there means the job failed and the half-built template was removed. Only one template creation is  tracked per caller, and starting another replaces the previous record. Setting `public` to true discards  `share` and `groups` and shares the finished template with everyone instead, while `copyLogo` reuses the  source room\'s own picture and makes `logo` irrelevant.
         * @summary Create a room template
         * @param {RoomTemplateDto} [roomTemplateDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-template/
         */
        async createRoomTemplate(roomTemplateDto?: RoomTemplateDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomTemplateStatusWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomTemplate(roomTemplateDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.createRoomTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Turns a folder of a connected third-party storage account into a room of the `Rooms` section, so that the  files of the room keep living in that storage instead of the portal. Connect the account first with  `POST api/2.0/files/thirdparty` and take the path parameter from a folder listing of that account: it is the  identifier of a folder in the storage, not of a room. One connected account can back one room only, so a  second call over the same account is refused, and so is an account that was not connected for room storage.  The caller needs the right to create rooms, which a portal user and a guest do not have; a public room is  refused while the administrator restricts external access, and reaching the room limit of the tariff is  refused too. With `createAsNewFolder` the room is a new subfolder named after `title`, otherwise the folder  from the path becomes the room itself and `indexing`, `denyDownload`, `tags` and `logo` are then dropped. The  answer is the new room, whose identifiers are strings; a public or a form-filling room already has its primary  link, readable with `GET api/2.0/files/rooms/{id}/link`.
         * @summary Create a third-party room
         * @param {string} id The identifier of the folder in the connected third-party storage that becomes the room, or receives it as a  subfolder. Folder identifiers of a connected account are strings and are returned by the folder listings of  that account.
         * @param {CreateThirdPartyRoom} createThirdPartyRoom The settings of the room to be created out of the folder.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-third-party/
         */
        async createRoomThirdParty(id: string, createThirdPartyRoom: CreateThirdPartyRoom, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomThirdParty(id, createThirdPartyRoom, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.createRoomThirdParty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes custom room tags from the portal catalog by name and detaches them from every room that carries them;  the rooms themselves and their content are untouched, and only the tag disappears from their tag lists. Only a  portal administrator may call it, and a room manager who is allowed to create tags is refused. The names are  matched exactly as they are stored: names that are not in the catalog are skipped in silence and an empty list  is accepted as a no-op, so a successful answer does not prove that anything was deleted; check a name with  `GET api/2.0/files/tags/{tagName}/haslinks` first when that matters. The call cannot be undone: creating the  name again with `POST api/2.0/files/tags` brings back the tag but not its links, which have to be attached to  each room once more. The answer carries no body. To take a tag off one room and leave it in the catalog for  the others, use `DELETE api/2.0/files/rooms/{id}/tags` instead.
         * @summary Delete the custom room tags
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteCustomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-custom-tags/
         */
        async deleteCustomTags(batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomTags(batchTagsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.deleteCustomTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that deletes one room with everything inside it, and returns the operation record of  that job. Deleting a room is destructive and has no trash step: the room and its files are gone once the job  finishes, unlike a file or a folder, which is moved to the trash first. The right to delete is checked before  the job is queued, so a caller who may not delete the room is refused straight away and an unknown room is  answered as missing; the same checks run again when the job starts, which is why the `error` of the finished  operation still has to be read. Poll `GET api/2.0/files/fileops` until `finished` is true, or read the  returned record again by its `id`. The record is kept until it is read once, so one poll after completion  still sees it. `deleteAfter` in the body is required by the contract but has no effect on the job. An archived  room is deleted the same way, and a second delete of the same id reports that the room is missing.
         * @summary Remove a room
         * @param {number | string} id The room to delete, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {DeleteRoomRequest} deleteRoomRequest The body of the request. It is required even though the deletion does not depend on what it holds.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room/
         */
        async deleteRoom(id: number | string, deleteRoomRequest: DeleteRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoom(id, deleteRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.deleteRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes the uploaded logo of a room and returns the room with empty logo addresses. What the room falls back  to is its cover and colour, which the logo only hid: if a cover was set before the logo, it is shown again,  and `POST api/2.0/files/rooms/{id}/cover` is what changes it. Nothing else about the room is touched, so  membership, tags, links and settings are preserved. A room that has no logo is accepted and answered with 200,  and repeating the call is therefore harmless. The caller must be a manager of the room; a member invited even  with editing rights is refused, and so is a room in the Archive section. A room that does not exist or was  deleted is answered as missing. After the logo is removed a new one can be set again through  `POST api/2.0/files/logos` followed by `POST api/2.0/files/rooms/{id}/logo`.
         * @summary Remove a room logo
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-logo/
         */
        async deleteRoomLogo(id: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoomLogo(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.deleteRoomLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Detaches the named tags from a room and returns the room with its remaining tag set. Only the link between the  room and the tag is removed: the tag stays in the portal catalogue and keeps working for every other room, and  `DELETE api/2.0/files/tags` is what removes it from the portal itself. Names that are not in the catalogue, or  not attached to this room, are skipped without an error, so a successful answer does not prove that anything  was detached; compare the returned tag set instead. An empty list is accepted and does nothing, while a null  entry in the list is rejected as an invalid request. The caller must be a manager of the room or an  administrator of the portal, and a room in the Archive section is refused with 403. A tag that loses its last  room stays in the catalogue, and only deleting that room takes the tag with it.
         * @summary Detach tags from a room
         * @param {number | string} id The room whose tags are changed, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The names to attach or to detach.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-tags/
         */
        async deleteRoomTags(id: number | string, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoomTags(id, batchTagsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.deleteRoomTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the record of the external database export job of a form filling room, or an empty body when the room  has no job at all. The room must be a form filling room and the caller must be able to edit it, otherwise the  call is refused; an unknown room is answered with 404. This is the polling target of  `POST api/2.0/files/rooms/{id}/externaldbsync`: repeat it until `isCompleted` is true, and then read `forms`,  which lists one entry per original form with its own `success` and `error` and is empty while the job is still  running. `percentage` advances as forms are processed, `status` distinguishes a job that is queued, running,  finished or failed, and `error` carries the message of a job that stopped as a whole. The record belongs to  the room rather than to the account that started the job, so any member who can edit the room sees the same  answer. The call changes nothing and is safe to repeat.
         * @summary Get external DB sync status
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getExternalDbSyncStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-db-sync-status/
         */
        async getExternalDbSyncStatus(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalDbSyncTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExternalDbSyncStatus(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getExternalDbSyncStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns what is new for the calling account in one room, grouped by the day the entry was last changed, with  the newest day first and the entries inside a day ordered from the most recent. Only files are reported: a  folder somebody else created is not an entry of its own, while a file created inside it is, however deep it  lies. What the caller changed is never new for the caller, and a file that was deleted afterwards disappears  from the answer. Reading this list leaves the badges alone, which is what makes it the operation to call  before `GET api/2.0/files/rooms/{id}`, since opening the room clears them. An empty array therefore means that  there is nothing new, not that the badges were already read. The caller needs access to the room; somebody who  is not a member is refused, and an unknown or deleted room is answered as missing. Use  `GET api/2.0/files/rooms/news` for the same report across every room at once.
         * @summary Get new items in a room
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNewRoomItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-room-items/
         */
        async getNewRoomItems(id: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewItemsFileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNewRoomItems(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getNewRoomItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether the room template addressed by `id` is shared with everyone or is reachable only by the  accounts it was explicitly shared with. True means the Everyone group holds read access, so any member allowed  to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; false means only  the owner and the named recipients can. The identifier has to belong to a room template — take it from  `templateId` of `GET api/2.0/files/roomtemplate/status`, or from the folder list of `GET api/2.0/files/rooms`  called with `searchArea` set to 4 — while an ordinary room, a deleted template or an unknown value is answered  as missing. The caller needs read access to the template, so somebody else\'s private template is refused even  for a portal administrator, and members who cannot reach the Templates section at all are refused whatever the  template\'s state. The call only reads state; use `PUT api/2.0/files/roomtemplate/public` to change it.
         * @summary Get room template public access
         * @param {number} id The identifier of the room template. Take it from `templateId` of `GET api/2.0/files/roomtemplate/status`, or  from the folder list of `GET api/2.0/files/rooms` called with `searchArea` set to 4; an identifier of an  ordinary room is not accepted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPublicSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-settings/
         */
        async getPublicSettings(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPublicSettings(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getPublicSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the gallery of cover pictures a room can be given: every entry pairs the identifier to send to  `POST api/2.0/files/rooms/{id}/cover` with the drawing itself as inline vector markup ready to be rendered.  The gallery is built into the product rather than stored per portal, so it is the same for every account and  every room, does not depend on what rooms exist, and its identifiers do not change with the language of the  request. The identifiers are unique and stable, which makes them safe to keep in a client, while the drawings  behind them may change between product versions. Any account of the portal may read the gallery, but a guest  is refused. The list is the only source of valid cover identifiers: a value that is not in it is rejected  wherever a cover is set, including room creation and room update. The call changes nothing and is safe to  repeat.
         * @summary Get room cover gallery
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomCovers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-covers/
         */
        async getRoomCovers(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CoversResultArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomCovers(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomCovers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the progress of the room-from-template job started by the calling account with  `POST api/2.0/files/rooms/fromtemplate`. The record is private to the account that started the job: jobs of  other members are never reported, and only one record is kept per account. The body is empty when the account  has no such record, and it is also empty when the job queue cannot be read, so an empty answer is not proof  that nothing was started. `progress` is a percentage, `isCompleted` marks the end of the job whether it  succeeded or failed, `error` carries the failure message and is empty on success, and `roomId` is meaningful  only once the room exists. The record survives the end of the job and is dropped when the next creation  starts, so polling after completion keeps returning the same answer. Poll this operation until `isCompleted`  is true and then read the room itself with `GET api/2.0/files/rooms/{id}`. The call changes nothing and is  safe to repeat.
         * @summary Get the room creation progress
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomCreatingStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-creating-status/
         */
        async getRoomCreatingStatus(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomFromTemplateStatusWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomCreatingStatus(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomCreatingStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the state of the index export of the calling account, the job started by  `POST api/2.0/files/rooms/{id}/indexexport`. The record is not addressed by room: there is at most one per  account, and the answer describes the latest export whichever room it was started for. When the account has  never started one, or its record was cancelled, the body is null rather than an error, so null is the normal  way of saying that there is nothing to report. While the job runs, `percentage` moves in coarse steps instead  of smoothly, which makes it a rough hint rather than a measure of the remaining time; `isCompleted` is the  field to wait on, and it is also set for a job that failed or was cancelled, so read `status` to tell the  outcomes apart and `error` for the message. After a successful build, `resultFileId`, `resultFileName` and  `resultFileUrl` point to the spreadsheet saved in the My documents section of the caller. The record survives  completion and is replaced only by the next export.
         * @summary Get the room index export
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-index-export/
         */
        async getRoomIndexExport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomIndexExport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomIndexExport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one room with its type, title, tags, logo, cover, colour, quota and virtual data room settings,  together with the access level the caller has in it. Reading the room is not a side-effect-free call: it  clears the caller new-item badges for that room, and `newForMe` comes back as 0, so read  `GET api/2.0/files/rooms/{id}/news` first when the new items matter. The caller needs read access to the room;  portal administrators can read a room they were never invited to, while a member without access is refused.  The operation also answers an anonymous caller, but only in the context of a valid external share link of that  room, and a plain anonymous request is rejected as unauthenticated. A room that never existed, was deleted, or  lives in a section the caller cannot see is answered as missing. Archived rooms are returned as well and are  recognised by their root section rather than by a separate flag. Use `GET api/2.0/files/rooms` to search and  page through rooms instead of guessing ids.
         * @summary Get room information
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-info/
         */
        async getRoomInfo(id: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomInfo(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the sharing links of a room, with the invitation and the external links mixed together unless `type`  narrows it to one kind. Each entry carries the link address, its title, access level, expiration, the flag  that marks the primary external link of the room and, for invitation links, how many times it may still be  used. Public and form filling rooms come with an external link created for them, so an empty answer there  means that the link was revoked rather than that the room is private; rooms of the other kinds start with no  links at all and only gain one when somebody creates it, which for a collaboration room and a virtual data  room can be an invitation link alone. The caller needs access to the room and the right to see its links: a  member invited without that right gets an empty list rather than an error, while somebody who is not in the  room at all is refused. Paging parameters are not honoured here: the first hundred links are returned and the  reported count is the number of entries actually sent.
         * @summary Get the room links
         * @param {number | string} id The room whose links are listed, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {LinkType} [type] Narrows the answer to one kind of link: invitation links, which turn whoever opens them into a member, or  external links, which open the room without an account. Leaving it out returns both kinds together.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-links/
         */
        async getRoomLinks(id: number | string, type?: LinkType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomLinks(id, type, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomLinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns one page of the access list of a room: the owner first, then the managers, the groups, the ordinary  members, the guests and finally the invitations nobody has accepted yet, with the total in the response  headers. `filterType` selects what is listed and defaults to accounts and groups, which leaves the sharing  links of the room out; those are read with `GET api/2.0/files/rooms/{id}/links`. `filterValue` matches the  displayed name of the subject, and an invitation that is still pending is listed under the email address it  was sent to. Paging is done with `count` and `startIndex`, and the order is stable between calls. Any member  who can read the room sees the accounts and the groups, so the list is not limited to the managers, and portal  administrators can read the list of a room they were never invited to; somebody who is not in the room at all  is refused. Asking for the link entries instead needs the right to see the links of the room, and a member  without it gets an empty page rather than an error.
         * @summary Get the room access rights
         * @param {number | string} id The room whose access list is read, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {ShareFilterType} [filterType] What kind of access entries to list. The default covers accounts and groups and leaves the sharing links of  the room out; those are read with `GET api/2.0/files/rooms/{id}/links`.
         * @param {number} [count] How many entries to return in one answer. The total number of matching entries comes back in the response  headers, so it is what tells the caller whether another page is needed.
         * @param {number} [startIndex] How many matching entries to skip before the page starts. Together with the page size it walks the list, which  is ordered by role and then by name and is therefore stable between calls.
         * @param {string} [filterValue] Keeps only the entries whose displayed name contains this text. An invitation that has not been accepted yet  is listed under the email address it was sent to, so that is what has to be searched for.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-security-info/
         */
        async getRoomSecurityInfo(id: number | string, filterType?: ShareFilterType, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomSecurityInfo(id, filterType, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the custom room tags available to the caller as a flat array of names, not of objects. What the array  holds depends on the account: a portal administrator gets the whole catalog, including tags that no room uses  yet, while every other account gets only the tags attached to rooms it can see, with duplicates removed. An  empty answer therefore means that this caller sees no tagged room, not that the portal has no tags.  `filterValue` keeps the names that contain the given text, ignoring case, while `count` and `startIndex` page  the result; no total is returned, so a page shorter than `count` is the signal that the list is exhausted. The  names are exactly the values accepted by the `tags` filter of `GET api/2.0/files/rooms` and by the room tag  calls, which makes this the call to fill a tag picker with. Add a tag with `POST api/2.0/files/tags` and check  whether one is still in use with `GET api/2.0/files/tags/{tagName}/haslinks`.
         * @summary Get available room tags
         * @param {number} [count] How many tag names one page may carry. The answer reports no total, so a page shorter than this is the sign  that the list is exhausted.
         * @param {number} [startIndex] How many tag names to skip before the page begins. Raise it by the number of names already received to read  the next page.
         * @param {string} [filterValue] Keeps only the tag names that contain this text, ignoring case. It is a substring match, so a fragment from  the middle of a name is enough.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomTagsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-tags-info/
         */
        async getRoomTagsInfo(count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<STRINGArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomTagsInfo(count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomTagsInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports the state of the room template creation the caller started with `POST api/2.0/files/roomtemplate`. The  record is private to the account that started the job: work started by another member is never reported, and a  caller who has started none gets an empty response instead of an object. Poll until `isCompleted` turns true,  then take the identifier of the finished template from `templateId`; a non-empty `error` means the job failed  and no template was kept. Treat `isCompleted` as the completion signal rather than `progress`, which the  background job only sets to 100 once the work is over. The record outlives the job, so a finished operation  can be read again and keeps returning the same identifier until the caller starts another template creation,  which replaces it. The call only reads state and needs no access to the source room or to the template, but it  does require an authenticated caller.
         * @summary Get room template creation status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomTemplateCreatingStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-template-creating-status/
         */
        async getRoomTemplateCreatingStatus(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomTemplateStatusWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomTemplateCreatingStatus(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomTemplateCreatingStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the rooms of one section of the portal: the active rooms by default, or the archive, the form-filling  section or the room templates, chosen with `searchArea`. The rooms arrive in `folders` while `files` stays  empty, `current` describes the section itself, and `total` counts every room that matched the filters before  paging. A caller sees only the rooms they created or were invited to, while a portal administrator sees all of  them, so an empty answer means nothing is visible to this account rather than nothing exists. The remaining  parameters narrow the same set, by room type, title, tags, member, owner, storage, quota and privacy, and they  combine with each other. Sorting is not free of side effects: a `sortBy` value is also stored as this  account\'s default order for later listings, and omitting it reuses the stored order. Page the result with  `count` and `startIndex`. Read a single room with `GET api/2.0/files/rooms/{id}`, and create one with  `POST api/2.0/files/rooms`.
         * @summary Get rooms
         * @param {Array<RoomType>} [type] Keeps only the rooms of the listed kinds. Repeat the parameter to pass more than one value; they are combined  with OR, and omitting it returns the rooms of every kind.
         * @param {string} [subjectId] Keeps only the rooms this account or group has access to, which is how the rooms of one member are listed. The  identifier comes from the portal people and group listings, and the exclude flag turns the filter into its  opposite.
         * @param {string} [subjectOwnerId] Keeps only the rooms created by this account, regardless of who else was invited to them. The identifier comes  from the portal people listing, and the exclude flag turns the filter into its opposite.
         * @param {SearchArea} [searchArea] The section to list. Every section is a separate root and a room belongs to exactly one of them at a time, so  archiving a room moves it out of the active section. The default is the active section, which leaves the  form-filling rooms to their own value.
         * @param {boolean} [withoutTags] When true, keeps only the rooms that carry no tag at all, which is the complement of the tag filter. When  false or omitted, tags play no part in the selection.
         * @param {string} [tags] A JSON array of tag names serialized into a single query value, for example [Important,Legal]. A room  matches when it carries any one of them. Take the names from `GET api/2.0/files/tags`; a name that is not in  the catalog simply matches nothing.
         * @param {boolean} [excludeSubject] Inverts the two subject filters: when true, the rooms of the named account are the ones left out of the answer  instead of the only ones kept. It does nothing on its own.
         * @param {ProviderFilter} [provider] Keeps only the rooms whose content lives in the named third-party service, for portals where rooms may be  connected to external storage. The default keeps rooms of every origin.
         * @param {QuotaFilter} [quotaFilter] Splits the rooms by whether a storage quota was set on the room itself or it follows the portal default, which  is how rooms with a custom limit are found.
         * @param {StorageFilter} [storageFilter] Splits the rooms by where their content is stored, in the portal itself or in a connected third-party account.  It is the coarse form of the provider filter.
         * @param {RoomPrivacyFilter} [privacyFilter] Splits the rooms by whether they are private, that is encrypted rooms whose content the portal cannot read.  Omitting it returns both kinds.
         * @param {number} [count] How many rooms one page may carry. Ask for the next page by raising the start index by the number of rooms  already received.
         * @param {number} [startIndex] How many matching rooms to skip before the page begins. Page through the answer until the skip plus the rooms  received reaches the total it reports.
         * @param {string} [sortBy] The field to order the rooms by, named as in the file listings: `AZ` for the title, `DateAndTime` for the last  change, `DateAndTimeCreation`, `Author`, `Size`, `Type`, `RoomType`, `Tags`, `UsedSpace`, `LastOpened`. The  name is matched ignoring case, an unknown one is rejected rather than ignored, and the accepted one also  becomes this account\'s stored order.
         * @param {SortOrder} [sortOrder] The direction of the order chosen by the sort field. It has no effect when no sort field is given and the  stored order of the account is used.
         * @param {string} [filterValue] Keeps only the rooms whose title contains this text, ignoring case. It is a substring match over the title  alone: room content and tags are not searched.
         * @param {number} [groupId] Keeps only the rooms that belong to this room group. The identifier comes from `GET api/2.0/files/group`; the  groups of portal members are a different concept and their identifiers do not match here.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/
         */
        async getRoomsFolder(type?: Array<RoomType>, subjectId?: string, subjectOwnerId?: string, searchArea?: SearchArea, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, provider?: ProviderFilter, quotaFilter?: QuotaFilter, storageFilter?: StorageFilter, privacyFilter?: RoomPrivacyFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, groupId?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomsFolder(type, subjectId, subjectOwnerId, searchArea, withoutTags, tags, excludeSubject, provider, quotaFilter, storageFilter, privacyFilter, count, startIndex, sortBy, sortOrder, filterValue, groupId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomsFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Collects everything that is marked as new for the caller across the active rooms into one answer, grouped  first by the day an entry changed and then by the room it belongs to. An entry becomes new when somebody else  creates or changes it in a room the caller has already opened, so the caller\'s own work never shows up here,  and neither does anything from a room they have never visited. Only files are listed: a new subfolder is not  an item, although files created inside it are, at any depth. The days come newest first, and inside a day the  rooms and their files follow the same order by change time. The archive is out of scope, only rooms of the  active section are covered. Reading the list clears nothing: the marks stay until the room itself is opened  with `GET api/2.0/files/rooms/{id}`. An empty array means that this account has nothing new. For one room, use  `GET api/2.0/files/rooms/{id}/news`.
         * @summary Get new items in all rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsNewItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-new-items/
         */
        async getRoomsNewItems(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewItemsRoomNewItemsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomsNewItems(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomsNewItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the primary external link of a room, which is the one address meant to be handed out to people outside  the portal. A public room and a form filling room get such a link when they are created, and asking for it  again returns the same link rather than a new one, so the answer is stable. In a room that has no primary link  yet this call creates one instead of reporting nothing, which needs the right to manage the links of the room:  a member invited with a lower level is refused with 403, and so is anybody who is not in the room at all. A  link that was explicitly revoked stays revoked and is reported as missing rather than recreated, and an  unknown room is answered with 404 as well. An archived public room still reports its link. The answer is the  same entry that `GET api/2.0/files/rooms/{id}/links` returns with the primary flag set, including the request  token that has to travel with the address.
         * @summary Get the room primary external link
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-primary-external-link/
         */
        async getRoomsPrimaryExternalLink(id: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomsPrimaryExternalLink(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomsPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether any room still carries the named tag, which is the check to run before the tag is deleted from  the catalog. Only a portal administrator may call it, and every other account is refused. The name is matched  exactly against the catalog, and a name that is not in it is answered with 404. That also tells the two ways a  tag stops being used apart: taking the tag off the last room that carried it leaves the tag in the catalog and  turns the answer to false, while deleting that last room removes the tag itself, after which the call answers  404. A true answer means at least one room, active or archived, still references the tag, so deleting it with  `DELETE api/2.0/files/tags` would strip it from those rooms. The handler reads the tag name from the query  string, so the value has to be sent twice: in the path segment and as the `tagName` query parameter.
         * @summary Check room tag usage
         * @param {string} tagName2 The tag being checked. Send the same value as the `tagName` query parameter, which is the one the handler reads.
         * @param {string} [tagName] The tag to check, spelled exactly as it is stored in the catalog. This query value is the one the handler  reads, so the path segment of the same name has to repeat it.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hasTagLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/has-tag-links/
         */
        async hasTagLinks(tagName2: string, tagName?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hasTagLinks(tagName2, tagName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.hasTagLinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Pins a room to the top of the room list of the calling account and returns the room with the pinned flag set.  Pinning is personal: it changes the order only for the caller, is invisible to the other members of the room,  and does not survive a trip through the Archive section, so an unarchived room has to be pinned again. Pinned  rooms stay above the unpinned ones whatever sorting or filter the listing uses, and their own order between  each other is stable. An account may keep only a limited number of pinned rooms at a time, ten on a portal  with the default configuration, and AI rooms are counted separately against their own allowance; a request  over the limit is refused until something is unpinned with `PUT api/2.0/files/rooms/{id}/unpin`. Pinning a  room that is already pinned changes nothing and is safe to repeat. Anybody who can read the room may pin it,  including guests and portal administrators who were never invited, while somebody who is not in the room is  refused, an archived room is rejected and an unknown room is answered as missing.
         * @summary Pin a room
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for pinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/pin-room/
         */
        async pinRoom(id: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pinRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.pinRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Renumbers the manual order of the items lying directly in a room so that they run from one upwards with no  gaps and no duplicates, and returns the room. The order of the items relative to each other is preserved: only  the numbers are compacted, and nothing is moved, renamed, duplicated or deleted. Files and folders share one  sequence. Nested folders keep their own numbering and are not touched, so each level is compacted on its own.  The operation is meant for a room with indexing turned on, where the manual order is what listings follow; a  room without indexing accepts it and simply has nothing that depends on the result. Running it twice changes  nothing the second time, and an already dense sequence is left as it is, which makes the call safe to retry.  The caller must be a manager of the room; a member invited with any other level is refused, an archived room  is rejected, and an unknown or deleted room is answered as missing.
         * @summary Reorder room contents
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for reorderRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reorder-room/
         */
        async reorderRoom(id: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reorderRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.reorderRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends the room invitation email again to members who were invited but have not joined yet. `resendAll` covers  every pending invitation of the room and makes `usersIds` irrelevant, while an explicit list without that flag  is limited to the named accounts. An account that has already accepted the invitation, is not a member of the  room, or is invisible to the caller is skipped without an error, and a request that names nobody and does not  set the flag does nothing, so a successful answer never proves that a message went out. Nothing about the room  or its membership changes, and the operation can be repeated. The caller must be a manager of the room, an  archived room is refused, a room template is answered as missing, and a malformed account id is rejected as an  invalid request. The call is rate limited, so a client that loops over members should send one batch instead.  The response carries no body.
         * @summary Resend the room invitations
         * @param {number | string} id The room whose invitations are resent, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {UserInvitation} userInvitation Which pending invitations to send again.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resendEmailInvitations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-email-invitations/
         */
        async resendEmailInvitations(id: number | string, userInvitation: UserInvitation, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendEmailInvitations(id, userInvitation, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.resendEmailInvitations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Switches the room template named by `id` between shared with everyone and private, rewriting its whole  recipient list in the process. With `public` true the Everyone group is granted read access, so every member  allowed to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; with  false that access is taken away. In both cases every other account and group the template was shared with —  including the addresses passed as `share` when it was created — loses access, so this is not a way to add a  single recipient to an existing list. Only the account that owns the template may call it: a portal  administrator who does not own it is refused, and so is a member invited to the source room. The identifier  has to resolve to a room template; an ordinary room or an unknown value is answered as missing, and an  identifier below 1 is rejected as an invalid request. Repeating the call with the same value changes nothing,  and nothing is returned; read the current state with `GET api/2.0/files/roomtemplate/{id}/public`.
         * @summary Set room template public access
         * @param {SetPublicDto} [setPublicDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setPublicSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-public-settings/
         */
        async setPublicSettings(setPublicDto?: SetPublicDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setPublicSettings(setPublicDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.setPublicSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates, updates or deletes one sharing link of a room and returns it. `linkType` chooses the kind: an  invitation link makes whoever opens it a member with the given access level, while an external link opens the  room without an account. Omitting `linkId` creates a link, passing the id of an existing one updates it, and  an unknown id is created with that id; the kind of an existing link cannot be changed afterwards. An access  level of 0 deletes the link, and deleting the primary external link of a public or form filling room  immediately replaces it with a fresh one, so such a room is never left without one. A room keeps at most one  invitation link, and a second one is refused; form filling rooms take no invitation links, and collaboration,  form filling and virtual data rooms take no external links. An expiration date in the past is dropped silently  for an external link and rejected for an invitation link. `password`, `denyDownload` and `internal` apply to  external links only.
         * @summary Set the room external or invitation link
         * @param {number | string} id The room the link belongs to, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {RoomLinkRequest} roomLinkRequest The link to create, change or revoke.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-link/
         */
        async setRoomLink(id: number | string, roomLinkRequest: RoomLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRoomLink(id, roomLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.setRoomLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds, changes and removes room members in one batch, and returns the resulting access list of the named  subjects. Each entry names either an account or a group of the portal, or the email address of somebody who  has no account yet, together with the access level to grant; an access of 0 removes the subject from the room.  An entry without an access level is ignored, the same subject listed twice keeps the last level, and an empty  list is accepted and changes nothing. The caller must be a manager of the room, so an invitation sent by a  user or a guest is refused, and an account that is a portal user or a guest cannot be made a room manager.  Inviting by email also needs the portal to allow guest invitations. A subject the caller is not allowed to see  is dropped without an error, which is why the answer has to be compared with the request. Removing a member  who still holds a form role is refused through `error` unless `force` is set. `notify` sends the invitation  email with the optional `message`.
         * @summary Set the room access rights
         * @param {number | string} id The room whose membership changes, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {RoomInvitationRequest} roomInvitationRequest The membership changes to apply, together with how the people concerned are notified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-security/
         */
        async setRoomSecurity(id: number | string, roomInvitationRequest: RoomInvitationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomSecurityWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRoomSecurity(id, roomInvitationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.setRoomSecurity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that re-exports the collected data of every original form of a form filling room into  the external database configured for the portal, and returns the job record. The room must be a form filling  room and the caller must be able to edit it, otherwise the call is refused with 403; an unknown room is  answered with 404. The export is not done when the response arrives: poll  `GET api/2.0/files/rooms/{id}/externaldbsync` until `isCompleted` is true, then read `forms` for the per-form  outcome, which stays empty while the job is running. Starting the job again while it is still running returns  the same record instead of a second job, so a retry is safe; a finished job is replaced by the new one. One  job is kept per room. A form whose data cannot be exported does not stop the others: it comes back in `forms`  with `success` false and its own `error`. When the portal has no external database configured the call fails  and nothing is queued.
         * @summary Start external DB sync
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startExternalDbSync operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-external-db-sync/
         */
        async startExternalDbSync(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalDbSyncTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startExternalDbSync(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.startExternalDbSync']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that builds the index of a virtual data room as a spreadsheet, and answers with the  job record to poll. The room has to be a virtual data room with indexing switched on, and the caller has to be  its manager or a portal administrator; any other kind of room, a room template, and a member invited with a  lower access level are refused, while an unknown room is answered as missing. There is one job per account:  starting an export while an earlier one is still running answers with that earlier record instead of queuing a  second job, and a finished record is replaced by the new one. Poll `GET api/2.0/files/rooms/indexexport` until  `isCompleted` is true, then read `status` to tell a completed job from a failed or cancelled one, and take  `resultFileId` and `resultFileUrl` from the same record. The report is saved as a spreadsheet in the My  documents section of the caller, not in the room. Cancel a running job with  `DELETE api/2.0/files/rooms/indexexport`.
         * @summary Start the room index export
         * @param {number} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-room-index-export/
         */
        async startRoomIndexExport(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startRoomIndexExport(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.startRoomIndexExport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Cancels the room index export of the calling account and drops its job record. No room is named because there  is at most one export per account, so the call always acts on the caller\'s own job and never on somebody  else\'s: an account with nothing running gets a successful answer that changes nothing, which makes the call  safe to repeat and makes it useless as a way of stopping an export somebody else started. Afterwards  `GET api/2.0/files/rooms/indexexport` answers with an empty body until a new export is started with  `POST api/2.0/files/rooms/{id}/indexexport`. The cancellation is asynchronous: the background job stops at its  next checkpoint, so one that is already saving the file may still finish, and a report that was written before  the cancellation stays in the My documents section of the caller and has to be deleted as an ordinary file.  The answer carries no body and says nothing about whether an export was running.
         * @summary Terminate the room index export
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-room-index-export/
         */
        async terminateRoomIndexExport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateRoomIndexExport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.terminateRoomIndexExport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Queues a background job that moves one room from the Archive section back to the Rooms section, and returns  the operation record of that job. The room becomes writable again with the membership, tags, logo and links it  had before, while the pinned state of its members is not restored and has to be set again with  `PUT api/2.0/files/rooms/{id}/pin`. The caller must be a manager of the room; a member who was only invited to  it is refused, a room template is answered as missing, and a room that was never archived simply stays where  it is. The room is not moved when the response arrives: poll `GET api/2.0/files/fileops` until `finished` is  true, and expect a room that is still archived until then. `deleteAfter` decides only how long the finished  record survives. Calling the operation twice in a row does not corrupt the room, and a deleted or unknown room  id is reported as missing.
         * @summary Unarchive a room
         * @param {number | string} id The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The body of the request. It carries only the lifetime of the job record, so an empty object is a normal  request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unarchiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unarchive-room/
         */
        async unarchiveRoom(id: number | string, archiveRoomRequest?: ArchiveRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unarchiveRoom(id, archiveRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.unarchiveRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes a room from the pinned group of the calling account and returns the room with the pinned flag cleared.  Only the personal ordering of the caller changes: the room itself, its members, their roles and its contents  are left exactly as they were, and the room stays in the list, simply among the unpinned ones. Unpinning frees  one of the pin slots of the account, which AI rooms count separately, so it is the way out of a refused  `PUT api/2.0/files/rooms/{id}/pin`. Unpinning a room that was never pinned is accepted and changes nothing, so  the call can be repeated safely and its answer does not prove that anything was pinned before. Anybody who can  read the room may unpin it, while somebody who is not in the room at all is refused and an unknown or deleted  room is answered as missing. An archived room cannot be unpinned.
         * @summary Unpin a room
         * @param {number | string} id The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unpinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unpin-room/
         */
        async unpinRoom(id: number | string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unpinRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.unpinRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Applies a partial change to one room and returns the whole room as it is after it. Only the fields present in  the body are touched, an empty body changes nothing, and a property the body does not define is rejected as an  invalid request instead of being ignored. The caller must be a manager of this room: portal administrators do  not get in without an invitation, and an archived room is refused. `title` is trimmed, sanitised the way a  room title is sanitised at creation, and a blank value is treated as no change. `tags` replaces the whole tag  set and an empty array clears it, an empty `color` restores the default and an empty `cover` removes the  cover. A `quota` of -1 switches the room back to no custom limit, any other negative value restores the portal  default, and a positive one is accepted only while the per-room quota feature is on. Turning `indexing` on  renumbers the room contents. `chatSettings` belongs to an AI room and is rejected anywhere else. Use  `POST api/2.0/files/rooms/{id}/logo` for logo cropping.
         * @summary Update a room
         * @param {number | string} id The room to update, named by the identifier that `GET api/2.0/files/rooms` reports for it.
         * @param {UpdateRoomRequest} updateRoomRequest The fields to change. Only the properties present in the object are applied, and a property that the object  does not define is rejected instead of being ignored.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/
         */
        async updateRoom(id: number | string, updateRoomRequest: UpdateRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRoom(id, updateRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.updateRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Renames a custom room tag in the portal catalog. The rename follows the tag everywhere it is used: every room  that carries it keeps it and shows the new name, so nothing has to be re-attached afterwards. Only a portal  administrator may rename a tag, and a room manager who is allowed to create tags is still refused here. The  old name is matched exactly as it is stored rather than searched for, and a name that is not in the catalog is  answered as missing. A new name that another tag already occupies is rejected as an invalid request, because  tag names are unique across the portal; both names must be non-blank and within the published length limit.  The answer is the new name. Stored queries are not updated for the caller: a `tags` filter of  `GET api/2.0/files/rooms` that still names the old value stops matching anything. The catalog is read with  `GET api/2.0/files/tags`.
         * @summary Rename a room tag
         * @param {UpdateTagRequestDto} [updateTagRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoomTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room-tag/
         */
        async updateRoomTag(updateTagRequestDto?: UpdateTagRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRoomTag(updateTagRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.updateRoomTag']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores an image in temporary storage and answers with the path to it, which is the first half of setting a  room logo. No room changes here: pass the returned path as `tmpFile` to `POST api/2.0/files/rooms/{id}/logo`,  together with the crop rectangle, to make the image the logo of a room. The image travels as multipart form  data, and the first file part of the request is the one that is used while any other part is ignored. It is  re-encoded to PNG and scaled down to fit 1280 by 1280 pixels, so a larger picture is accepted and shrunk,  while a part that is not a readable image, or one over the portal limit for uploaded images, is refused with  400. Only a room manager or a portal administrator may upload, and everyone else gets 403. Every call produces  a new path, and an image that is never used stays in temporary storage until it is cleaned up, so uploading  twice is harmless.
         * @summary Upload a room logo image
         * @param {File} [file] The image data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-room-logo/
         */
        async uploadRoomLogo(file?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadRoomLogo(file, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.uploadRoomLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RoomsApi - factory interface
 * @export
 */
export const RoomsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RoomsApiFp(configuration)
    return {
        /**
         * Attaches the named tags to a room and returns the room with its whole tag set. Tags are portal-wide labels  shared by every room, and a name that the catalogue does not hold yet is created there by this call, so  attaching is also the short way of adding a tag to the portal. Names already attached to the room are kept as  they are, and repeating the call changes nothing, which makes it safe to retry. An empty list is accepted and  does nothing, while a blank or overlong name is rejected as an invalid request. The caller must be a manager  of the room or an administrator of the portal, and a room in the Archive section is refused with 403. A tag  has no identifier of its own and is addressed by name, so `GET api/2.0/files/tags` is what shows which names  already exist. Use `DELETE api/2.0/files/rooms/{id}/tags` to detach them again, which leaves the tags  themselves in the catalogue.
         * @summary Attach tags to a room
         * @param {RoomsApiAddRoomTagsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-tags/
         * @throws {RequiredError}
         */
        addRoomTags(requestParameters: RoomsApiAddRoomTagsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.addRoomTags(requestParameters.id, requestParameters.batchTagsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background job that moves one room from the Rooms section to the Archive section, and returns the  operation record of that job. An archived room stays readable to its members and becomes read only: files  cannot be created, renamed or edited in it, and its settings, tags, logo and links can no longer be changed,  which is why many other room operations answer an archived room with a refusal. The caller must be a manager  of the room; administrators of the portal cannot archive a room they were not invited to, and a room template  cannot be archived at all and is answered as missing. The room is not archived when the response arrives: poll  `GET api/2.0/files/fileops` until `finished` is true. Archiving an already archived room is harmless.  `deleteAfter` decides only how long the finished record survives, not what happens to the room. Use  `PUT api/2.0/files/rooms/{id}/unarchive` to bring the room back.
         * @summary Archive a room
         * @param {RoomsApiArchiveRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for archiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/archive-room/
         * @throws {RequiredError}
         */
        archiveRoom(requestParameters: RoomsApiArchiveRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.archiveRoom(requestParameters.id, requestParameters.archiveRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the cover picture and the background colour a room is shown with, and returns the whole room afterwards.  `cover` accepts only an identifier listed by `GET api/2.0/files/rooms/covers`, and `color` only six  hexadecimal digits with no leading number sign, so anything else is rejected as an invalid request. Either  field may be sent on its own, an empty `cover` clears the picture, an empty `color` restores the default one,  and an empty body leaves the room untouched. The cover is what the room shows while it has no uploaded logo:  setting a logo with `POST api/2.0/files/rooms/{id}/logo` hides the cover without erasing it, and deleting that  logo brings it back. The caller must be a manager of the room, an archived room is refused with 403, and an  unknown or deleted room is answered with 404. Repeating the same request is harmless, and the cover survives  archiving and unarchiving.
         * @summary Change the room cover
         * @param {RoomsApiChangeRoomCoverRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeRoomCover operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/
         * @throws {RequiredError}
         */
        changeRoomCover(requestParameters: RoomsApiChangeRoomCoverRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.changeRoomCover(requestParameters.id, requestParameters.coverRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a room in the portal Rooms section and returns it. `roomType` decides which sharing links, member  roles and form features the room offers, and it cannot be changed afterwards, so a room of the wrong kind has  to be recreated. The caller must be the portal owner, a portal administrator or a room administrator; a user  or a guest is refused, and so is a public room while the portal forbids external sharing. `title` is required  and must not be blank: characters a folder name cannot hold are replaced with underscores and the rest is  truncated, so the stored title can differ from the one sent and two rooms can share it. `quota` is accepted  only while the per-room quota feature is on and must stay within the portal quota, `cover` only for an id  returned by `GET api/2.0/files/rooms/covers`, and `color` as six hexadecimal digits with no leading number  sign. Tag names the portal does not know yet are added to the tag catalogue. `share` is not implemented and  any non-empty value is rejected, so invite members afterwards with `PUT api/2.0/files/rooms/{id}/share`.  Passing the portal room limit ends the call as a billing refusal and creates nothing.
         * @summary Create a room
         * @param {RoomsApiCreateRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room/
         * @throws {RequiredError}
         */
        createRoom(requestParameters: RoomsApiCreateRoomRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper> {
            return localVarFp.createRoom(requestParameters.createRoomRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts a background job that copies a room template into a new room of the Rooms section, and answers with the  same progress record that `GET api/2.0/files/rooms/fromtemplate/status` returns. The caller must be able to  read the template and to create rooms at all, so a user or a guest is refused, and the checks run before the  job is queued. The room does not exist when the response arrives: poll the status operation until  `isCompleted` is true, then take `roomId` from it, and treat a non-empty `error` as a failed job. Only one  such job is kept per account, and a finished one is discarded when the next is started, so a second creation  loses the record of the first. Anything not sent is inherited from the template, and `copyLogo` keeps the  template logo and makes `logo` pointless. `quota` is accepted only while the per-room quota feature is on, and  a template of a public room cannot be instantiated while the portal forbids external sharing. A template that  does not exist or cannot be read is answered as missing.
         * @summary Create a room from the template
         * @param {RoomsApiCreateRoomFromTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomFromTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-from-template/
         * @throws {RequiredError}
         */
        createRoomFromTemplate(requestParameters: RoomsApiCreateRoomFromTemplateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RoomFromTemplateStatusWrapper> {
            return localVarFp.createRoomFromTemplate(requestParameters.createRoomFromTemplateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Turns an image already uploaded to the portal into the logo of a room and returns the room with the addresses  of the four logo sizes. This is the second half of a two-step flow: upload the picture with  `POST api/2.0/files/logos` first and pass the path it returns as `tmpFile`, because the image itself is never  sent here. The temporary file belongs to the account that uploaded it and is consumed by this call, so it  cannot be reused for a second room and a path somebody else uploaded is refused. `x`, `y`, `width` and  `height` crop the picture; sending a position without a size is rejected as an invalid request, while a size  without a position is accepted. An empty `tmpFile` leaves the room as it is. A logo replaces the cover in the  interface without erasing it, and removing the logo brings the cover back. The caller must be a manager of the  room, an archived room is refused, and an unknown room is answered with 404.
         * @summary Set the room logo
         * @param {RoomsApiCreateRoomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/
         * @throws {RequiredError}
         */
        createRoomLogo(requestParameters: RoomsApiCreateRoomLogoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.createRoomLogo(requestParameters.id, requestParameters.logoRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds a custom tag to the portal-wide catalog of room tags and answers with the stored name. Tags are shared by  the whole portal instead of belonging to the caller: once the tag exists, every room manager can attach it to  their own rooms with `PUT api/2.0/files/rooms/{id}/tags`, and that call also creates a tag it does not find.  Creating a name that is already in the catalog returns the existing tag unchanged rather than a duplicate or  an error, so repeating the call after a timeout is safe. A blank name, or one longer than the published limit,  is rejected as an invalid request. Only a room manager or a portal administrator may create a tag, and a user  or a guest is refused. The answer is the name as stored, and that name is the value to send in the `tags`  filter of `GET api/2.0/files/rooms` and in the room tag calls. The catalog itself is read with  `GET api/2.0/files/tags`.
         * @summary Create a room tag
         * @param {RoomsApiCreateRoomTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-tag/
         * @throws {RequiredError}
         */
        createRoomTag(requestParameters: RoomsApiCreateRoomTagRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.createRoomTag(requestParameters.createTagRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background job that turns an existing room into a reusable room template, and returns the state of  that job right away. The template lands in the portal\'s Templates section, inherits the source room\'s type,  privacy, indexing, storage limit, lifetime, download and watermark settings, and receives copies of the room\'s  files together with its ordinary subfolders and everything inside them; the service subfolders a room keeps  for its own workflows are left out. The caller needs room-manager rights on the source room, and the room must  not be archived: a room that cannot be found under Rooms is answered as missing, and every other refusal comes  back as a rejection. The template is not ready when the response arrives, so poll  `GET api/2.0/files/roomtemplate/status` until `isCompleted` is true, then read `templateId`; a non-empty  `error` there means the job failed and the half-built template was removed. Only one template creation is  tracked per caller, and starting another replaces the previous record. Setting `public` to true discards  `share` and `groups` and shares the finished template with everyone instead, while `copyLogo` reuses the  source room\'s own picture and makes `logo` irrelevant.
         * @summary Create a room template
         * @param {RoomsApiCreateRoomTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-template/
         * @throws {RequiredError}
         */
        createRoomTemplate(requestParameters: RoomsApiCreateRoomTemplateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RoomTemplateStatusWrapper> {
            return localVarFp.createRoomTemplate(requestParameters.roomTemplateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Turns a folder of a connected third-party storage account into a room of the `Rooms` section, so that the  files of the room keep living in that storage instead of the portal. Connect the account first with  `POST api/2.0/files/thirdparty` and take the path parameter from a folder listing of that account: it is the  identifier of a folder in the storage, not of a room. One connected account can back one room only, so a  second call over the same account is refused, and so is an account that was not connected for room storage.  The caller needs the right to create rooms, which a portal user and a guest do not have; a public room is  refused while the administrator restricts external access, and reaching the room limit of the tariff is  refused too. With `createAsNewFolder` the room is a new subfolder named after `title`, otherwise the folder  from the path becomes the room itself and `indexing`, `denyDownload`, `tags` and `logo` are then dropped. The  answer is the new room, whose identifiers are strings; a public or a form-filling room already has its primary  link, readable with `GET api/2.0/files/rooms/{id}/link`.
         * @summary Create a third-party room
         * @param {RoomsApiCreateRoomThirdPartyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-third-party/
         * @throws {RequiredError}
         */
        createRoomThirdParty(requestParameters: RoomsApiCreateRoomThirdPartyRequest, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper> {
            return localVarFp.createRoomThirdParty(requestParameters.id, requestParameters.createThirdPartyRoom, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes custom room tags from the portal catalog by name and detaches them from every room that carries them;  the rooms themselves and their content are untouched, and only the tag disappears from their tag lists. Only a  portal administrator may call it, and a room manager who is allowed to create tags is refused. The names are  matched exactly as they are stored: names that are not in the catalog are skipped in silence and an empty list  is accepted as a no-op, so a successful answer does not prove that anything was deleted; check a name with  `GET api/2.0/files/tags/{tagName}/haslinks` first when that matters. The call cannot be undone: creating the  name again with `POST api/2.0/files/tags` brings back the tag but not its links, which have to be attached to  each room once more. The answer carries no body. To take a tag off one room and leave it in the catalog for  the others, use `DELETE api/2.0/files/rooms/{id}/tags` instead.
         * @summary Delete the custom room tags
         * @param {RoomsApiDeleteCustomTagsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteCustomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-custom-tags/
         * @throws {RequiredError}
         */
        deleteCustomTags(requestParameters: RoomsApiDeleteCustomTagsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteCustomTags(requestParameters.batchTagsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background job that deletes one room with everything inside it, and returns the operation record of  that job. Deleting a room is destructive and has no trash step: the room and its files are gone once the job  finishes, unlike a file or a folder, which is moved to the trash first. The right to delete is checked before  the job is queued, so a caller who may not delete the room is refused straight away and an unknown room is  answered as missing; the same checks run again when the job starts, which is why the `error` of the finished  operation still has to be read. Poll `GET api/2.0/files/fileops` until `finished` is true, or read the  returned record again by its `id`. The record is kept until it is read once, so one poll after completion  still sees it. `deleteAfter` in the body is required by the contract but has no effect on the job. An archived  room is deleted the same way, and a second delete of the same id reports that the room is missing.
         * @summary Remove a room
         * @param {RoomsApiDeleteRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room/
         * @throws {RequiredError}
         */
        deleteRoom(requestParameters: RoomsApiDeleteRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.deleteRoom(requestParameters.id, requestParameters.deleteRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the uploaded logo of a room and returns the room with empty logo addresses. What the room falls back  to is its cover and colour, which the logo only hid: if a cover was set before the logo, it is shown again,  and `POST api/2.0/files/rooms/{id}/cover` is what changes it. Nothing else about the room is touched, so  membership, tags, links and settings are preserved. A room that has no logo is accepted and answered with 200,  and repeating the call is therefore harmless. The caller must be a manager of the room; a member invited even  with editing rights is refused, and so is a room in the Archive section. A room that does not exist or was  deleted is answered as missing. After the logo is removed a new one can be set again through  `POST api/2.0/files/logos` followed by `POST api/2.0/files/rooms/{id}/logo`.
         * @summary Remove a room logo
         * @param {RoomsApiDeleteRoomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-logo/
         * @throws {RequiredError}
         */
        deleteRoomLogo(requestParameters: RoomsApiDeleteRoomLogoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.deleteRoomLogo(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Detaches the named tags from a room and returns the room with its remaining tag set. Only the link between the  room and the tag is removed: the tag stays in the portal catalogue and keeps working for every other room, and  `DELETE api/2.0/files/tags` is what removes it from the portal itself. Names that are not in the catalogue, or  not attached to this room, are skipped without an error, so a successful answer does not prove that anything  was detached; compare the returned tag set instead. An empty list is accepted and does nothing, while a null  entry in the list is rejected as an invalid request. The caller must be a manager of the room or an  administrator of the portal, and a room in the Archive section is refused with 403. A tag that loses its last  room stays in the catalogue, and only deleting that room takes the tag with it.
         * @summary Detach tags from a room
         * @param {RoomsApiDeleteRoomTagsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-tags/
         * @throws {RequiredError}
         */
        deleteRoomTags(requestParameters: RoomsApiDeleteRoomTagsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.deleteRoomTags(requestParameters.id, requestParameters.batchTagsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the record of the external database export job of a form filling room, or an empty body when the room  has no job at all. The room must be a form filling room and the caller must be able to edit it, otherwise the  call is refused; an unknown room is answered with 404. This is the polling target of  `POST api/2.0/files/rooms/{id}/externaldbsync`: repeat it until `isCompleted` is true, and then read `forms`,  which lists one entry per original form with its own `success` and `error` and is empty while the job is still  running. `percentage` advances as forms are processed, `status` distinguishes a job that is queued, running,  finished or failed, and `error` carries the message of a job that stopped as a whole. The record belongs to  the room rather than to the account that started the job, so any member who can edit the room sees the same  answer. The call changes nothing and is safe to repeat.
         * @summary Get external DB sync status
         * @param {RoomsApiGetExternalDbSyncStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getExternalDbSyncStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-external-db-sync-status/
         * @throws {RequiredError}
         */
        getExternalDbSyncStatus(requestParameters: RoomsApiGetExternalDbSyncStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExternalDbSyncTaskWrapper> {
            return localVarFp.getExternalDbSyncStatus(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns what is new for the calling account in one room, grouped by the day the entry was last changed, with  the newest day first and the entries inside a day ordered from the most recent. Only files are reported: a  folder somebody else created is not an entry of its own, while a file created inside it is, however deep it  lies. What the caller changed is never new for the caller, and a file that was deleted afterwards disappears  from the answer. Reading this list leaves the badges alone, which is what makes it the operation to call  before `GET api/2.0/files/rooms/{id}`, since opening the room clears them. An empty array therefore means that  there is nothing new, not that the badges were already read. The caller needs access to the room; somebody who  is not a member is refused, and an unknown or deleted room is answered as missing. Use  `GET api/2.0/files/rooms/news` for the same report across every room at once.
         * @summary Get new items in a room
         * @param {RoomsApiGetNewRoomItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getNewRoomItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-room-items/
         * @throws {RequiredError}
         */
        getNewRoomItems(requestParameters: RoomsApiGetNewRoomItemsRequest, options?: RawAxiosRequestConfig): AxiosPromise<NewItemsFileEntryBaseArrayWrapper> {
            return localVarFp.getNewRoomItems(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether the room template addressed by `id` is shared with everyone or is reachable only by the  accounts it was explicitly shared with. True means the Everyone group holds read access, so any member allowed  to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; false means only  the owner and the named recipients can. The identifier has to belong to a room template — take it from  `templateId` of `GET api/2.0/files/roomtemplate/status`, or from the folder list of `GET api/2.0/files/rooms`  called with `searchArea` set to 4 — while an ordinary room, a deleted template or an unknown value is answered  as missing. The caller needs read access to the template, so somebody else\'s private template is refused even  for a portal administrator, and members who cannot reach the Templates section at all are refused whatever the  template\'s state. The call only reads state; use `PUT api/2.0/files/roomtemplate/public` to change it.
         * @summary Get room template public access
         * @param {RoomsApiGetPublicSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPublicSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-settings/
         * @throws {RequiredError}
         */
        getPublicSettings(requestParameters: RoomsApiGetPublicSettingsRequest, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getPublicSettings(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the gallery of cover pictures a room can be given: every entry pairs the identifier to send to  `POST api/2.0/files/rooms/{id}/cover` with the drawing itself as inline vector markup ready to be rendered.  The gallery is built into the product rather than stored per portal, so it is the same for every account and  every room, does not depend on what rooms exist, and its identifiers do not change with the language of the  request. The identifiers are unique and stable, which makes them safe to keep in a client, while the drawings  behind them may change between product versions. Any account of the portal may read the gallery, but a guest  is refused. The list is the only source of valid cover identifiers: a value that is not in it is rejected  wherever a cover is set, including room creation and room update. The call changes nothing and is safe to  repeat.
         * @summary Get room cover gallery
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomCovers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-covers/
         * @throws {RequiredError}
         */
        getRoomCovers(options?: RawAxiosRequestConfig): AxiosPromise<CoversResultArrayWrapper> {
            return localVarFp.getRoomCovers(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the progress of the room-from-template job started by the calling account with  `POST api/2.0/files/rooms/fromtemplate`. The record is private to the account that started the job: jobs of  other members are never reported, and only one record is kept per account. The body is empty when the account  has no such record, and it is also empty when the job queue cannot be read, so an empty answer is not proof  that nothing was started. `progress` is a percentage, `isCompleted` marks the end of the job whether it  succeeded or failed, `error` carries the failure message and is empty on success, and `roomId` is meaningful  only once the room exists. The record survives the end of the job and is dropped when the next creation  starts, so polling after completion keeps returning the same answer. Poll this operation until `isCompleted`  is true and then read the room itself with `GET api/2.0/files/rooms/{id}`. The call changes nothing and is  safe to repeat.
         * @summary Get the room creation progress
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomCreatingStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-creating-status/
         * @throws {RequiredError}
         */
        getRoomCreatingStatus(options?: RawAxiosRequestConfig): AxiosPromise<RoomFromTemplateStatusWrapper> {
            return localVarFp.getRoomCreatingStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the state of the index export of the calling account, the job started by  `POST api/2.0/files/rooms/{id}/indexexport`. The record is not addressed by room: there is at most one per  account, and the answer describes the latest export whichever room it was started for. When the account has  never started one, or its record was cancelled, the body is null rather than an error, so null is the normal  way of saying that there is nothing to report. While the job runs, `percentage` moves in coarse steps instead  of smoothly, which makes it a rough hint rather than a measure of the remaining time; `isCompleted` is the  field to wait on, and it is also set for a job that failed or was cancelled, so read `status` to tell the  outcomes apart and `error` for the message. After a successful build, `resultFileId`, `resultFileName` and  `resultFileUrl` point to the spreadsheet saved in the My documents section of the caller. The record survives  completion and is replaced only by the next export.
         * @summary Get the room index export
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-index-export/
         * @throws {RequiredError}
         */
        getRoomIndexExport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getRoomIndexExport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one room with its type, title, tags, logo, cover, colour, quota and virtual data room settings,  together with the access level the caller has in it. Reading the room is not a side-effect-free call: it  clears the caller new-item badges for that room, and `newForMe` comes back as 0, so read  `GET api/2.0/files/rooms/{id}/news` first when the new items matter. The caller needs read access to the room;  portal administrators can read a room they were never invited to, while a member without access is refused.  The operation also answers an anonymous caller, but only in the context of a valid external share link of that  room, and a plain anonymous request is rejected as unauthenticated. A room that never existed, was deleted, or  lives in a section the caller cannot see is answered as missing. Archived rooms are returned as well and are  recognised by their root section rather than by a separate flag. Use `GET api/2.0/files/rooms` to search and  page through rooms instead of guessing ids.
         * @summary Get room information
         * @param {RoomsApiGetRoomInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-info/
         * @throws {RequiredError}
         */
        getRoomInfo(requestParameters: RoomsApiGetRoomInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.getRoomInfo(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the sharing links of a room, with the invitation and the external links mixed together unless `type`  narrows it to one kind. Each entry carries the link address, its title, access level, expiration, the flag  that marks the primary external link of the room and, for invitation links, how many times it may still be  used. Public and form filling rooms come with an external link created for them, so an empty answer there  means that the link was revoked rather than that the room is private; rooms of the other kinds start with no  links at all and only gain one when somebody creates it, which for a collaboration room and a virtual data  room can be an invitation link alone. The caller needs access to the room and the right to see its links: a  member invited without that right gets an empty list rather than an error, while somebody who is not in the  room at all is refused. Paging parameters are not honoured here: the first hundred links are returned and the  reported count is the number of entries actually sent.
         * @summary Get the room links
         * @param {RoomsApiGetRoomLinksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-links/
         * @throws {RequiredError}
         */
        getRoomLinks(requestParameters: RoomsApiGetRoomLinksRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getRoomLinks(requestParameters.id, requestParameters.type, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns one page of the access list of a room: the owner first, then the managers, the groups, the ordinary  members, the guests and finally the invitations nobody has accepted yet, with the total in the response  headers. `filterType` selects what is listed and defaults to accounts and groups, which leaves the sharing  links of the room out; those are read with `GET api/2.0/files/rooms/{id}/links`. `filterValue` matches the  displayed name of the subject, and an invitation that is still pending is listed under the email address it  was sent to. Paging is done with `count` and `startIndex`, and the order is stable between calls. Any member  who can read the room sees the accounts and the groups, so the list is not limited to the managers, and portal  administrators can read the list of a room they were never invited to; somebody who is not in the room at all  is refused. Asking for the link entries instead needs the right to see the links of the room, and a member  without it gets an empty page rather than an error.
         * @summary Get the room access rights
         * @param {RoomsApiGetRoomSecurityInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-security-info/
         * @throws {RequiredError}
         */
        getRoomSecurityInfo(requestParameters: RoomsApiGetRoomSecurityInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getRoomSecurityInfo(requestParameters.id, requestParameters.filterType, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the custom room tags available to the caller as a flat array of names, not of objects. What the array  holds depends on the account: a portal administrator gets the whole catalog, including tags that no room uses  yet, while every other account gets only the tags attached to rooms it can see, with duplicates removed. An  empty answer therefore means that this caller sees no tagged room, not that the portal has no tags.  `filterValue` keeps the names that contain the given text, ignoring case, while `count` and `startIndex` page  the result; no total is returned, so a page shorter than `count` is the signal that the list is exhausted. The  names are exactly the values accepted by the `tags` filter of `GET api/2.0/files/rooms` and by the room tag  calls, which makes this the call to fill a tag picker with. Add a tag with `POST api/2.0/files/tags` and check  whether one is still in use with `GET api/2.0/files/tags/{tagName}/haslinks`.
         * @summary Get available room tags
         * @param {RoomsApiGetRoomTagsInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomTagsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-tags-info/
         * @throws {RequiredError}
         */
        getRoomTagsInfo(requestParameters: RoomsApiGetRoomTagsInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<STRINGArrayWrapper> {
            return localVarFp.getRoomTagsInfo(requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports the state of the room template creation the caller started with `POST api/2.0/files/roomtemplate`. The  record is private to the account that started the job: work started by another member is never reported, and a  caller who has started none gets an empty response instead of an object. Poll until `isCompleted` turns true,  then take the identifier of the finished template from `templateId`; a non-empty `error` means the job failed  and no template was kept. Treat `isCompleted` as the completion signal rather than `progress`, which the  background job only sets to 100 once the work is over. The record outlives the job, so a finished operation  can be read again and keeps returning the same identifier until the caller starts another template creation,  which replaces it. The call only reads state and needs no access to the source room or to the template, but it  does require an authenticated caller.
         * @summary Get room template creation status
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomTemplateCreatingStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-template-creating-status/
         * @throws {RequiredError}
         */
        getRoomTemplateCreatingStatus(options?: RawAxiosRequestConfig): AxiosPromise<RoomTemplateStatusWrapper> {
            return localVarFp.getRoomTemplateCreatingStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the rooms of one section of the portal: the active rooms by default, or the archive, the form-filling  section or the room templates, chosen with `searchArea`. The rooms arrive in `folders` while `files` stays  empty, `current` describes the section itself, and `total` counts every room that matched the filters before  paging. A caller sees only the rooms they created or were invited to, while a portal administrator sees all of  them, so an empty answer means nothing is visible to this account rather than nothing exists. The remaining  parameters narrow the same set, by room type, title, tags, member, owner, storage, quota and privacy, and they  combine with each other. Sorting is not free of side effects: a `sortBy` value is also stored as this  account\'s default order for later listings, and omitting it reuses the stored order. Page the result with  `count` and `startIndex`. Read a single room with `GET api/2.0/files/rooms/{id}`, and create one with  `POST api/2.0/files/rooms`.
         * @summary Get rooms
         * @param {RoomsApiGetRoomsFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/
         * @throws {RequiredError}
         */
        getRoomsFolder(requestParameters: RoomsApiGetRoomsFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentWrapper> {
            return localVarFp.getRoomsFolder(requestParameters.type, requestParameters.subjectId, requestParameters.subjectOwnerId, requestParameters.searchArea, requestParameters.withoutTags, requestParameters.tags, requestParameters.excludeSubject, requestParameters.provider, requestParameters.quotaFilter, requestParameters.storageFilter, requestParameters.privacyFilter, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, requestParameters.groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * Collects everything that is marked as new for the caller across the active rooms into one answer, grouped  first by the day an entry changed and then by the room it belongs to. An entry becomes new when somebody else  creates or changes it in a room the caller has already opened, so the caller\'s own work never shows up here,  and neither does anything from a room they have never visited. Only files are listed: a new subfolder is not  an item, although files created inside it are, at any depth. The days come newest first, and inside a day the  rooms and their files follow the same order by change time. The archive is out of scope, only rooms of the  active section are covered. Reading the list clears nothing: the marks stay until the room itself is opened  with `GET api/2.0/files/rooms/{id}`. An empty array means that this account has nothing new. For one room, use  `GET api/2.0/files/rooms/{id}/news`.
         * @summary Get new items in all rooms
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomsNewItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-new-items/
         * @throws {RequiredError}
         */
        getRoomsNewItems(options?: RawAxiosRequestConfig): AxiosPromise<NewItemsRoomNewItemsArrayWrapper> {
            return localVarFp.getRoomsNewItems(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the primary external link of a room, which is the one address meant to be handed out to people outside  the portal. A public room and a form filling room get such a link when they are created, and asking for it  again returns the same link rather than a new one, so the answer is stable. In a room that has no primary link  yet this call creates one instead of reporting nothing, which needs the right to manage the links of the room:  a member invited with a lower level is refused with 403, and so is anybody who is not in the room at all. A  link that was explicitly revoked stays revoked and is reported as missing rather than recreated, and an  unknown room is answered with 404 as well. An archived public room still reports its link. The answer is the  same entry that `GET api/2.0/files/rooms/{id}/links` returns with the primary flag set, including the request  token that has to travel with the address.
         * @summary Get the room primary external link
         * @param {RoomsApiGetRoomsPrimaryExternalLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomsPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-primary-external-link/
         * @throws {RequiredError}
         */
        getRoomsPrimaryExternalLink(requestParameters: RoomsApiGetRoomsPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.getRoomsPrimaryExternalLink(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether any room still carries the named tag, which is the check to run before the tag is deleted from  the catalog. Only a portal administrator may call it, and every other account is refused. The name is matched  exactly against the catalog, and a name that is not in it is answered with 404. That also tells the two ways a  tag stops being used apart: taking the tag off the last room that carried it leaves the tag in the catalog and  turns the answer to false, while deleting that last room removes the tag itself, after which the call answers  404. A true answer means at least one room, active or archived, still references the tag, so deleting it with  `DELETE api/2.0/files/tags` would strip it from those rooms. The handler reads the tag name from the query  string, so the value has to be sent twice: in the path segment and as the `tagName` query parameter.
         * @summary Check room tag usage
         * @param {RoomsApiHasTagLinksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for hasTagLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/has-tag-links/
         * @throws {RequiredError}
         */
        hasTagLinks(requestParameters: RoomsApiHasTagLinksRequest, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.hasTagLinks(requestParameters.tagName2, requestParameters.tagName, options).then((request) => request(axios, basePath));
        },
        /**
         * Pins a room to the top of the room list of the calling account and returns the room with the pinned flag set.  Pinning is personal: it changes the order only for the caller, is invisible to the other members of the room,  and does not survive a trip through the Archive section, so an unarchived room has to be pinned again. Pinned  rooms stay above the unpinned ones whatever sorting or filter the listing uses, and their own order between  each other is stable. An account may keep only a limited number of pinned rooms at a time, ten on a portal  with the default configuration, and AI rooms are counted separately against their own allowance; a request  over the limit is refused until something is unpinned with `PUT api/2.0/files/rooms/{id}/unpin`. Pinning a  room that is already pinned changes nothing and is safe to repeat. Anybody who can read the room may pin it,  including guests and portal administrators who were never invited, while somebody who is not in the room is  refused, an archived room is rejected and an unknown room is answered as missing.
         * @summary Pin a room
         * @param {RoomsApiPinRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for pinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/pin-room/
         * @throws {RequiredError}
         */
        pinRoom(requestParameters: RoomsApiPinRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.pinRoom(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Renumbers the manual order of the items lying directly in a room so that they run from one upwards with no  gaps and no duplicates, and returns the room. The order of the items relative to each other is preserved: only  the numbers are compacted, and nothing is moved, renamed, duplicated or deleted. Files and folders share one  sequence. Nested folders keep their own numbering and are not touched, so each level is compacted on its own.  The operation is meant for a room with indexing turned on, where the manual order is what listings follow; a  room without indexing accepts it and simply has nothing that depends on the result. Running it twice changes  nothing the second time, and an already dense sequence is left as it is, which makes the call safe to retry.  The caller must be a manager of the room; a member invited with any other level is refused, an archived room  is rejected, and an unknown or deleted room is answered as missing.
         * @summary Reorder room contents
         * @param {RoomsApiReorderRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for reorderRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reorder-room/
         * @throws {RequiredError}
         */
        reorderRoom(requestParameters: RoomsApiReorderRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.reorderRoom(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends the room invitation email again to members who were invited but have not joined yet. `resendAll` covers  every pending invitation of the room and makes `usersIds` irrelevant, while an explicit list without that flag  is limited to the named accounts. An account that has already accepted the invitation, is not a member of the  room, or is invisible to the caller is skipped without an error, and a request that names nobody and does not  set the flag does nothing, so a successful answer never proves that a message went out. Nothing about the room  or its membership changes, and the operation can be repeated. The caller must be a manager of the room, an  archived room is refused, a room template is answered as missing, and a malformed account id is rejected as an  invalid request. The call is rate limited, so a client that loops over members should send one batch instead.  The response carries no body.
         * @summary Resend the room invitations
         * @param {RoomsApiResendEmailInvitationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for resendEmailInvitations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-email-invitations/
         * @throws {RequiredError}
         */
        resendEmailInvitations(requestParameters: RoomsApiResendEmailInvitationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.resendEmailInvitations(requestParameters.id, requestParameters.userInvitation, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches the room template named by `id` between shared with everyone and private, rewriting its whole  recipient list in the process. With `public` true the Everyone group is granted read access, so every member  allowed to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; with  false that access is taken away. In both cases every other account and group the template was shared with —  including the addresses passed as `share` when it was created — loses access, so this is not a way to add a  single recipient to an existing list. Only the account that owns the template may call it: a portal  administrator who does not own it is refused, and so is a member invited to the source room. The identifier  has to resolve to a room template; an ordinary room or an unknown value is answered as missing, and an  identifier below 1 is rejected as an invalid request. Repeating the call with the same value changes nothing,  and nothing is returned; read the current state with `GET api/2.0/files/roomtemplate/{id}/public`.
         * @summary Set room template public access
         * @param {RoomsApiSetPublicSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setPublicSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-public-settings/
         * @throws {RequiredError}
         */
        setPublicSettings(requestParameters: RoomsApiSetPublicSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.setPublicSettings(requestParameters.setPublicDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates, updates or deletes one sharing link of a room and returns it. `linkType` chooses the kind: an  invitation link makes whoever opens it a member with the given access level, while an external link opens the  room without an account. Omitting `linkId` creates a link, passing the id of an existing one updates it, and  an unknown id is created with that id; the kind of an existing link cannot be changed afterwards. An access  level of 0 deletes the link, and deleting the primary external link of a public or form filling room  immediately replaces it with a fresh one, so such a room is never left without one. A room keeps at most one  invitation link, and a second one is refused; form filling rooms take no invitation links, and collaboration,  form filling and virtual data rooms take no external links. An expiration date in the past is dropped silently  for an external link and rejected for an invitation link. `password`, `denyDownload` and `internal` apply to  external links only.
         * @summary Set the room external or invitation link
         * @param {RoomsApiSetRoomLinkRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setRoomLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-link/
         * @throws {RequiredError}
         */
        setRoomLink(requestParameters: RoomsApiSetRoomLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.setRoomLink(requestParameters.id, requestParameters.roomLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds, changes and removes room members in one batch, and returns the resulting access list of the named  subjects. Each entry names either an account or a group of the portal, or the email address of somebody who  has no account yet, together with the access level to grant; an access of 0 removes the subject from the room.  An entry without an access level is ignored, the same subject listed twice keeps the last level, and an empty  list is accepted and changes nothing. The caller must be a manager of the room, so an invitation sent by a  user or a guest is refused, and an account that is a portal user or a guest cannot be made a room manager.  Inviting by email also needs the portal to allow guest invitations. A subject the caller is not allowed to see  is dropped without an error, which is why the answer has to be compared with the request. Removing a member  who still holds a form role is refused through `error` unless `force` is set. `notify` sends the invitation  email with the optional `message`.
         * @summary Set the room access rights
         * @param {RoomsApiSetRoomSecurityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setRoomSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-security/
         * @throws {RequiredError}
         */
        setRoomSecurity(requestParameters: RoomsApiSetRoomSecurityRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomSecurityWrapper> {
            return localVarFp.setRoomSecurity(requestParameters.id, requestParameters.roomInvitationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background job that re-exports the collected data of every original form of a form filling room into  the external database configured for the portal, and returns the job record. The room must be a form filling  room and the caller must be able to edit it, otherwise the call is refused with 403; an unknown room is  answered with 404. The export is not done when the response arrives: poll  `GET api/2.0/files/rooms/{id}/externaldbsync` until `isCompleted` is true, then read `forms` for the per-form  outcome, which stays empty while the job is running. Starting the job again while it is still running returns  the same record instead of a second job, so a retry is safe; a finished job is replaced by the new one. One  job is kept per room. A form whose data cannot be exported does not stop the others: it comes back in `forms`  with `success` false and its own `error`. When the portal has no external database configured the call fails  and nothing is queued.
         * @summary Start external DB sync
         * @param {RoomsApiStartExternalDbSyncRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startExternalDbSync operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-external-db-sync/
         * @throws {RequiredError}
         */
        startExternalDbSync(requestParameters: RoomsApiStartExternalDbSyncRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExternalDbSyncTaskWrapper> {
            return localVarFp.startExternalDbSync(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background job that builds the index of a virtual data room as a spreadsheet, and answers with the  job record to poll. The room has to be a virtual data room with indexing switched on, and the caller has to be  its manager or a portal administrator; any other kind of room, a room template, and a member invited with a  lower access level are refused, while an unknown room is answered as missing. There is one job per account:  starting an export while an earlier one is still running answers with that earlier record instead of queuing a  second job, and a finished record is replaced by the new one. Poll `GET api/2.0/files/rooms/indexexport` until  `isCompleted` is true, then read `status` to tell a completed job from a failed or cancelled one, and take  `resultFileId` and `resultFileUrl` from the same record. The report is saved as a spreadsheet in the My  documents section of the caller, not in the room. Cancel a running job with  `DELETE api/2.0/files/rooms/indexexport`.
         * @summary Start the room index export
         * @param {RoomsApiStartRoomIndexExportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for startRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-room-index-export/
         * @throws {RequiredError}
         */
        startRoomIndexExport(requestParameters: RoomsApiStartRoomIndexExportRequest, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.startRoomIndexExport(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Cancels the room index export of the calling account and drops its job record. No room is named because there  is at most one export per account, so the call always acts on the caller\'s own job and never on somebody  else\'s: an account with nothing running gets a successful answer that changes nothing, which makes the call  safe to repeat and makes it useless as a way of stopping an export somebody else started. Afterwards  `GET api/2.0/files/rooms/indexexport` answers with an empty body until a new export is started with  `POST api/2.0/files/rooms/{id}/indexexport`. The cancellation is asynchronous: the background job stops at its  next checkpoint, so one that is already saving the file may still finish, and a report that was written before  the cancellation stays in the My documents section of the caller and has to be deleted as an ordinary file.  The answer carries no body and says nothing about whether an export was running.
         * @summary Terminate the room index export
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-room-index-export/
         * @throws {RequiredError}
         */
        terminateRoomIndexExport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateRoomIndexExport(options).then((request) => request(axios, basePath));
        },
        /**
         * Queues a background job that moves one room from the Archive section back to the Rooms section, and returns  the operation record of that job. The room becomes writable again with the membership, tags, logo and links it  had before, while the pinned state of its members is not restored and has to be set again with  `PUT api/2.0/files/rooms/{id}/pin`. The caller must be a manager of the room; a member who was only invited to  it is refused, a room template is answered as missing, and a room that was never archived simply stays where  it is. The room is not moved when the response arrives: poll `GET api/2.0/files/fileops` until `finished` is  true, and expect a room that is still archived until then. `deleteAfter` decides only how long the finished  record survives. Calling the operation twice in a row does not corrupt the room, and a deleted or unknown room  id is reported as missing.
         * @summary Unarchive a room
         * @param {RoomsApiUnarchiveRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for unarchiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unarchive-room/
         * @throws {RequiredError}
         */
        unarchiveRoom(requestParameters: RoomsApiUnarchiveRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.unarchiveRoom(requestParameters.id, requestParameters.archiveRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a room from the pinned group of the calling account and returns the room with the pinned flag cleared.  Only the personal ordering of the caller changes: the room itself, its members, their roles and its contents  are left exactly as they were, and the room stays in the list, simply among the unpinned ones. Unpinning frees  one of the pin slots of the account, which AI rooms count separately, so it is the way out of a refused  `PUT api/2.0/files/rooms/{id}/pin`. Unpinning a room that was never pinned is accepted and changes nothing, so  the call can be repeated safely and its answer does not prove that anything was pinned before. Anybody who can  read the room may unpin it, while somebody who is not in the room at all is refused and an unknown or deleted  room is answered as missing. An archived room cannot be unpinned.
         * @summary Unpin a room
         * @param {RoomsApiUnpinRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for unpinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unpin-room/
         * @throws {RequiredError}
         */
        unpinRoom(requestParameters: RoomsApiUnpinRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.unpinRoom(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Applies a partial change to one room and returns the whole room as it is after it. Only the fields present in  the body are touched, an empty body changes nothing, and a property the body does not define is rejected as an  invalid request instead of being ignored. The caller must be a manager of this room: portal administrators do  not get in without an invitation, and an archived room is refused. `title` is trimmed, sanitised the way a  room title is sanitised at creation, and a blank value is treated as no change. `tags` replaces the whole tag  set and an empty array clears it, an empty `color` restores the default and an empty `cover` removes the  cover. A `quota` of -1 switches the room back to no custom limit, any other negative value restores the portal  default, and a positive one is accepted only while the per-room quota feature is on. Turning `indexing` on  renumbers the room contents. `chatSettings` belongs to an AI room and is rejected anywhere else. Use  `POST api/2.0/files/rooms/{id}/logo` for logo cropping.
         * @summary Update a room
         * @param {RoomsApiUpdateRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/
         * @throws {RequiredError}
         */
        updateRoom(requestParameters: RoomsApiUpdateRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper> {
            return localVarFp.updateRoom(requestParameters.id, requestParameters.updateRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Renames a custom room tag in the portal catalog. The rename follows the tag everywhere it is used: every room  that carries it keeps it and shows the new name, so nothing has to be re-attached afterwards. Only a portal  administrator may rename a tag, and a room manager who is allowed to create tags is still refused here. The  old name is matched exactly as it is stored rather than searched for, and a name that is not in the catalog is  answered as missing. A new name that another tag already occupies is rejected as an invalid request, because  tag names are unique across the portal; both names must be non-blank and within the published length limit.  The answer is the new name. Stored queries are not updated for the caller: a `tags` filter of  `GET api/2.0/files/rooms` that still names the old value stops matching anything. The catalog is read with  `GET api/2.0/files/tags`.
         * @summary Rename a room tag
         * @param {RoomsApiUpdateRoomTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateRoomTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room-tag/
         * @throws {RequiredError}
         */
        updateRoomTag(requestParameters: RoomsApiUpdateRoomTagRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.updateRoomTag(requestParameters.updateTagRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores an image in temporary storage and answers with the path to it, which is the first half of setting a  room logo. No room changes here: pass the returned path as `tmpFile` to `POST api/2.0/files/rooms/{id}/logo`,  together with the crop rectangle, to make the image the logo of a room. The image travels as multipart form  data, and the first file part of the request is the one that is used while any other part is ignored. It is  re-encoded to PNG and scaled down to fit 1280 by 1280 pixels, so a larger picture is accepted and shrunk,  while a part that is not a readable image, or one over the portal limit for uploaded images, is refused with  400. Only a room manager or a portal administrator may upload, and everyone else gets 403. Every call produces  a new path, and an image that is never used stays in temporary storage until it is cleaned up, so uploading  twice is harmless.
         * @summary Upload a room logo image
         * @param {RoomsApiUploadRoomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-room-logo/
         * @throws {RequiredError}
         */
        uploadRoomLogo(requestParameters: RoomsApiUploadRoomLogoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<UploadResultWrapper> {
            return localVarFp.uploadRoomLogo(requestParameters.file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addRoomTags operation in RoomsApi.
 * @export
 * @interface RoomsApiAddRoomTagsRequest
 */
export interface RoomsApiAddRoomTagsRequest {
    /**
     * The room whose tags are changed, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiAddRoomTags
     */
    readonly id: number | string

    /**
     * The names to attach or to detach.
     * @type {BatchTagsRequestDto}
     * @memberof RoomsApiAddRoomTags
     */
    readonly batchTagsRequestDto?: BatchTagsRequestDto
}

/**
 * Request parameters for archiveRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiArchiveRoomRequest
 */
export interface RoomsApiArchiveRoomRequest {
    /**
     * The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiArchiveRoom
     */
    readonly id: number | string

    /**
     * The body of the request. It carries only the lifetime of the job record, so an empty object is a normal  request.
     * @type {ArchiveRoomRequest}
     * @memberof RoomsApiArchiveRoom
     */
    readonly archiveRoomRequest?: ArchiveRoomRequest
}

/**
 * Request parameters for changeRoomCover operation in RoomsApi.
 * @export
 * @interface RoomsApiChangeRoomCoverRequest
 */
export interface RoomsApiChangeRoomCoverRequest {
    /**
     * The room to change, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiChangeRoomCover
     */
    readonly id: number | string

    /**
     * The cover and the colour to apply. Either half may be sent on its own, and an empty object leaves the room as  it is.
     * @type {CoverRequestDto}
     * @memberof RoomsApiChangeRoomCover
     */
    readonly coverRequestDto: CoverRequestDto
}

/**
 * Request parameters for createRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiCreateRoomRequest
 */
export interface RoomsApiCreateRoomRequest {
    /**
     * 
     * @type {CreateRoomRequestDto}
     * @memberof RoomsApiCreateRoom
     */
    readonly createRoomRequestDto?: CreateRoomRequestDto
}

/**
 * Request parameters for createRoomFromTemplate operation in RoomsApi.
 * @export
 * @interface RoomsApiCreateRoomFromTemplateRequest
 */
export interface RoomsApiCreateRoomFromTemplateRequest {
    /**
     * 
     * @type {CreateRoomFromTemplateDto}
     * @memberof RoomsApiCreateRoomFromTemplate
     */
    readonly createRoomFromTemplateDto?: CreateRoomFromTemplateDto
}

/**
 * Request parameters for createRoomLogo operation in RoomsApi.
 * @export
 * @interface RoomsApiCreateRoomLogoRequest
 */
export interface RoomsApiCreateRoomLogoRequest {
    /**
     * The room the logo is set on.
     * @type {number | string}
     * @memberof RoomsApiCreateRoomLogo
     */
    readonly id: number | string

    /**
     * The uploaded picture and the piece of it to use.
     * @type {LogoRequest}
     * @memberof RoomsApiCreateRoomLogo
     */
    readonly logoRequest: LogoRequest
}

/**
 * Request parameters for createRoomTag operation in RoomsApi.
 * @export
 * @interface RoomsApiCreateRoomTagRequest
 */
export interface RoomsApiCreateRoomTagRequest {
    /**
     * 
     * @type {CreateTagRequestDto}
     * @memberof RoomsApiCreateRoomTag
     */
    readonly createTagRequestDto?: CreateTagRequestDto
}

/**
 * Request parameters for createRoomTemplate operation in RoomsApi.
 * @export
 * @interface RoomsApiCreateRoomTemplateRequest
 */
export interface RoomsApiCreateRoomTemplateRequest {
    /**
     * 
     * @type {RoomTemplateDto}
     * @memberof RoomsApiCreateRoomTemplate
     */
    readonly roomTemplateDto?: RoomTemplateDto
}

/**
 * Request parameters for createRoomThirdParty operation in RoomsApi.
 * @export
 * @interface RoomsApiCreateRoomThirdPartyRequest
 */
export interface RoomsApiCreateRoomThirdPartyRequest {
    /**
     * The identifier of the folder in the connected third-party storage that becomes the room, or receives it as a  subfolder. Folder identifiers of a connected account are strings and are returned by the folder listings of  that account.
     * @type {string}
     * @memberof RoomsApiCreateRoomThirdParty
     */
    readonly id: string

    /**
     * The settings of the room to be created out of the folder.
     * @type {CreateThirdPartyRoom}
     * @memberof RoomsApiCreateRoomThirdParty
     */
    readonly createThirdPartyRoom: CreateThirdPartyRoom
}

/**
 * Request parameters for deleteCustomTags operation in RoomsApi.
 * @export
 * @interface RoomsApiDeleteCustomTagsRequest
 */
export interface RoomsApiDeleteCustomTagsRequest {
    /**
     * 
     * @type {BatchTagsRequestDto}
     * @memberof RoomsApiDeleteCustomTags
     */
    readonly batchTagsRequestDto?: BatchTagsRequestDto
}

/**
 * Request parameters for deleteRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiDeleteRoomRequest
 */
export interface RoomsApiDeleteRoomRequest {
    /**
     * The room to delete, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiDeleteRoom
     */
    readonly id: number | string

    /**
     * The body of the request. It is required even though the deletion does not depend on what it holds.
     * @type {DeleteRoomRequest}
     * @memberof RoomsApiDeleteRoom
     */
    readonly deleteRoomRequest: DeleteRoomRequest
}

/**
 * Request parameters for deleteRoomLogo operation in RoomsApi.
 * @export
 * @interface RoomsApiDeleteRoomLogoRequest
 */
export interface RoomsApiDeleteRoomLogoRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number | string}
     * @memberof RoomsApiDeleteRoomLogo
     */
    readonly id: number | string
}

/**
 * Request parameters for deleteRoomTags operation in RoomsApi.
 * @export
 * @interface RoomsApiDeleteRoomTagsRequest
 */
export interface RoomsApiDeleteRoomTagsRequest {
    /**
     * The room whose tags are changed, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiDeleteRoomTags
     */
    readonly id: number | string

    /**
     * The names to attach or to detach.
     * @type {BatchTagsRequestDto}
     * @memberof RoomsApiDeleteRoomTags
     */
    readonly batchTagsRequestDto?: BatchTagsRequestDto
}

/**
 * Request parameters for getExternalDbSyncStatus operation in RoomsApi.
 * @export
 * @interface RoomsApiGetExternalDbSyncStatusRequest
 */
export interface RoomsApiGetExternalDbSyncStatusRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number}
     * @memberof RoomsApiGetExternalDbSyncStatus
     */
    readonly id: number
}

/**
 * Request parameters for getNewRoomItems operation in RoomsApi.
 * @export
 * @interface RoomsApiGetNewRoomItemsRequest
 */
export interface RoomsApiGetNewRoomItemsRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number | string}
     * @memberof RoomsApiGetNewRoomItems
     */
    readonly id: number | string
}

/**
 * Request parameters for getPublicSettings operation in RoomsApi.
 * @export
 * @interface RoomsApiGetPublicSettingsRequest
 */
export interface RoomsApiGetPublicSettingsRequest {
    /**
     * The identifier of the room template. Take it from `templateId` of `GET api/2.0/files/roomtemplate/status`, or  from the folder list of `GET api/2.0/files/rooms` called with `searchArea` set to 4; an identifier of an  ordinary room is not accepted.
     * @type {number}
     * @memberof RoomsApiGetPublicSettings
     */
    readonly id: number
}

/**
 * Request parameters for getRoomInfo operation in RoomsApi.
 * @export
 * @interface RoomsApiGetRoomInfoRequest
 */
export interface RoomsApiGetRoomInfoRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number | string}
     * @memberof RoomsApiGetRoomInfo
     */
    readonly id: number | string
}

/**
 * Request parameters for getRoomLinks operation in RoomsApi.
 * @export
 * @interface RoomsApiGetRoomLinksRequest
 */
export interface RoomsApiGetRoomLinksRequest {
    /**
     * The room whose links are listed, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiGetRoomLinks
     */
    readonly id: number | string

    /**
     * Narrows the answer to one kind of link: invitation links, which turn whoever opens them into a member, or  external links, which open the room without an account. Leaving it out returns both kinds together.
     * @type {LinkType}
     * @memberof RoomsApiGetRoomLinks
     */
    readonly type?: LinkType
}

/**
 * Request parameters for getRoomSecurityInfo operation in RoomsApi.
 * @export
 * @interface RoomsApiGetRoomSecurityInfoRequest
 */
export interface RoomsApiGetRoomSecurityInfoRequest {
    /**
     * The room whose access list is read, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiGetRoomSecurityInfo
     */
    readonly id: number | string

    /**
     * What kind of access entries to list. The default covers accounts and groups and leaves the sharing links of  the room out; those are read with `GET api/2.0/files/rooms/{id}/links`.
     * @type {ShareFilterType}
     * @memberof RoomsApiGetRoomSecurityInfo
     */
    readonly filterType?: ShareFilterType

    /**
     * How many entries to return in one answer. The total number of matching entries comes back in the response  headers, so it is what tells the caller whether another page is needed.
     * @type {number}
     * @memberof RoomsApiGetRoomSecurityInfo
     */
    readonly count?: number

    /**
     * How many matching entries to skip before the page starts. Together with the page size it walks the list, which  is ordered by role and then by name and is therefore stable between calls.
     * @type {number}
     * @memberof RoomsApiGetRoomSecurityInfo
     */
    readonly startIndex?: number

    /**
     * Keeps only the entries whose displayed name contains this text. An invitation that has not been accepted yet  is listed under the email address it was sent to, so that is what has to be searched for.
     * @type {string}
     * @memberof RoomsApiGetRoomSecurityInfo
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getRoomTagsInfo operation in RoomsApi.
 * @export
 * @interface RoomsApiGetRoomTagsInfoRequest
 */
export interface RoomsApiGetRoomTagsInfoRequest {
    /**
     * How many tag names one page may carry. The answer reports no total, so a page shorter than this is the sign  that the list is exhausted.
     * @type {number}
     * @memberof RoomsApiGetRoomTagsInfo
     */
    readonly count?: number

    /**
     * How many tag names to skip before the page begins. Raise it by the number of names already received to read  the next page.
     * @type {number}
     * @memberof RoomsApiGetRoomTagsInfo
     */
    readonly startIndex?: number

    /**
     * Keeps only the tag names that contain this text, ignoring case. It is a substring match, so a fragment from  the middle of a name is enough.
     * @type {string}
     * @memberof RoomsApiGetRoomTagsInfo
     */
    readonly filterValue?: string
}

/**
 * Request parameters for getRoomsFolder operation in RoomsApi.
 * @export
 * @interface RoomsApiGetRoomsFolderRequest
 */
export interface RoomsApiGetRoomsFolderRequest {
    /**
     * Keeps only the rooms of the listed kinds. Repeat the parameter to pass more than one value; they are combined  with OR, and omitting it returns the rooms of every kind.
     * @type {Array<RoomType>}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly type?: Array<RoomType>

    /**
     * Keeps only the rooms this account or group has access to, which is how the rooms of one member are listed. The  identifier comes from the portal people and group listings, and the exclude flag turns the filter into its  opposite.
     * @type {string}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly subjectId?: string

    /**
     * Keeps only the rooms created by this account, regardless of who else was invited to them. The identifier comes  from the portal people listing, and the exclude flag turns the filter into its opposite.
     * @type {string}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly subjectOwnerId?: string

    /**
     * The section to list. Every section is a separate root and a room belongs to exactly one of them at a time, so  archiving a room moves it out of the active section. The default is the active section, which leaves the  form-filling rooms to their own value.
     * @type {SearchArea}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly searchArea?: SearchArea

    /**
     * When true, keeps only the rooms that carry no tag at all, which is the complement of the tag filter. When  false or omitted, tags play no part in the selection.
     * @type {boolean}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly withoutTags?: boolean

    /**
     * A JSON array of tag names serialized into a single query value, for example [Important,Legal]. A room  matches when it carries any one of them. Take the names from `GET api/2.0/files/tags`; a name that is not in  the catalog simply matches nothing.
     * @type {string}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly tags?: string

    /**
     * Inverts the two subject filters: when true, the rooms of the named account are the ones left out of the answer  instead of the only ones kept. It does nothing on its own.
     * @type {boolean}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly excludeSubject?: boolean

    /**
     * Keeps only the rooms whose content lives in the named third-party service, for portals where rooms may be  connected to external storage. The default keeps rooms of every origin.
     * @type {ProviderFilter}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly provider?: ProviderFilter

    /**
     * Splits the rooms by whether a storage quota was set on the room itself or it follows the portal default, which  is how rooms with a custom limit are found.
     * @type {QuotaFilter}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly quotaFilter?: QuotaFilter

    /**
     * Splits the rooms by where their content is stored, in the portal itself or in a connected third-party account.  It is the coarse form of the provider filter.
     * @type {StorageFilter}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly storageFilter?: StorageFilter

    /**
     * Splits the rooms by whether they are private, that is encrypted rooms whose content the portal cannot read.  Omitting it returns both kinds.
     * @type {RoomPrivacyFilter}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly privacyFilter?: RoomPrivacyFilter

    /**
     * How many rooms one page may carry. Ask for the next page by raising the start index by the number of rooms  already received.
     * @type {number}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly count?: number

    /**
     * How many matching rooms to skip before the page begins. Page through the answer until the skip plus the rooms  received reaches the total it reports.
     * @type {number}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly startIndex?: number

    /**
     * The field to order the rooms by, named as in the file listings: `AZ` for the title, `DateAndTime` for the last  change, `DateAndTimeCreation`, `Author`, `Size`, `Type`, `RoomType`, `Tags`, `UsedSpace`, `LastOpened`. The  name is matched ignoring case, an unknown one is rejected rather than ignored, and the accepted one also  becomes this account\'s stored order.
     * @type {string}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly sortBy?: string

    /**
     * The direction of the order chosen by the sort field. It has no effect when no sort field is given and the  stored order of the account is used.
     * @type {SortOrder}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * Keeps only the rooms whose title contains this text, ignoring case. It is a substring match over the title  alone: room content and tags are not searched.
     * @type {string}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly filterValue?: string

    /**
     * Keeps only the rooms that belong to this room group. The identifier comes from `GET api/2.0/files/group`; the  groups of portal members are a different concept and their identifiers do not match here.
     * @type {number}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly groupId?: number
}

/**
 * Request parameters for getRoomsPrimaryExternalLink operation in RoomsApi.
 * @export
 * @interface RoomsApiGetRoomsPrimaryExternalLinkRequest
 */
export interface RoomsApiGetRoomsPrimaryExternalLinkRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number | string}
     * @memberof RoomsApiGetRoomsPrimaryExternalLink
     */
    readonly id: number | string
}

/**
 * Request parameters for hasTagLinks operation in RoomsApi.
 * @export
 * @interface RoomsApiHasTagLinksRequest
 */
export interface RoomsApiHasTagLinksRequest {
    /**
     * The tag being checked. Send the same value as the `tagName` query parameter, which is the one the handler reads.
     * @type {string}
     * @memberof RoomsApiHasTagLinks
     */
    readonly tagName2: string

    /**
     * The tag to check, spelled exactly as it is stored in the catalog. This query value is the one the handler  reads, so the path segment of the same name has to repeat it.
     * @type {string}
     * @memberof RoomsApiHasTagLinks
     */
    readonly tagName?: string
}

/**
 * Request parameters for pinRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiPinRoomRequest
 */
export interface RoomsApiPinRoomRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number | string}
     * @memberof RoomsApiPinRoom
     */
    readonly id: number | string
}

/**
 * Request parameters for reorderRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiReorderRoomRequest
 */
export interface RoomsApiReorderRoomRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number | string}
     * @memberof RoomsApiReorderRoom
     */
    readonly id: number | string
}

/**
 * Request parameters for resendEmailInvitations operation in RoomsApi.
 * @export
 * @interface RoomsApiResendEmailInvitationsRequest
 */
export interface RoomsApiResendEmailInvitationsRequest {
    /**
     * The room whose invitations are resent, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiResendEmailInvitations
     */
    readonly id: number | string

    /**
     * Which pending invitations to send again.
     * @type {UserInvitation}
     * @memberof RoomsApiResendEmailInvitations
     */
    readonly userInvitation: UserInvitation
}

/**
 * Request parameters for setPublicSettings operation in RoomsApi.
 * @export
 * @interface RoomsApiSetPublicSettingsRequest
 */
export interface RoomsApiSetPublicSettingsRequest {
    /**
     * 
     * @type {SetPublicDto}
     * @memberof RoomsApiSetPublicSettings
     */
    readonly setPublicDto?: SetPublicDto
}

/**
 * Request parameters for setRoomLink operation in RoomsApi.
 * @export
 * @interface RoomsApiSetRoomLinkRequest
 */
export interface RoomsApiSetRoomLinkRequest {
    /**
     * The room the link belongs to, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiSetRoomLink
     */
    readonly id: number | string

    /**
     * The link to create, change or revoke.
     * @type {RoomLinkRequest}
     * @memberof RoomsApiSetRoomLink
     */
    readonly roomLinkRequest: RoomLinkRequest
}

/**
 * Request parameters for setRoomSecurity operation in RoomsApi.
 * @export
 * @interface RoomsApiSetRoomSecurityRequest
 */
export interface RoomsApiSetRoomSecurityRequest {
    /**
     * The room whose membership changes, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiSetRoomSecurity
     */
    readonly id: number | string

    /**
     * The membership changes to apply, together with how the people concerned are notified.
     * @type {RoomInvitationRequest}
     * @memberof RoomsApiSetRoomSecurity
     */
    readonly roomInvitationRequest: RoomInvitationRequest
}

/**
 * Request parameters for startExternalDbSync operation in RoomsApi.
 * @export
 * @interface RoomsApiStartExternalDbSyncRequest
 */
export interface RoomsApiStartExternalDbSyncRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number}
     * @memberof RoomsApiStartExternalDbSync
     */
    readonly id: number
}

/**
 * Request parameters for startRoomIndexExport operation in RoomsApi.
 * @export
 * @interface RoomsApiStartRoomIndexExportRequest
 */
export interface RoomsApiStartRoomIndexExportRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number}
     * @memberof RoomsApiStartRoomIndexExport
     */
    readonly id: number
}

/**
 * Request parameters for unarchiveRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiUnarchiveRoomRequest
 */
export interface RoomsApiUnarchiveRoomRequest {
    /**
     * The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiUnarchiveRoom
     */
    readonly id: number | string

    /**
     * The body of the request. It carries only the lifetime of the job record, so an empty object is a normal  request.
     * @type {ArchiveRoomRequest}
     * @memberof RoomsApiUnarchiveRoom
     */
    readonly archiveRoomRequest?: ArchiveRoomRequest
}

/**
 * Request parameters for unpinRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiUnpinRoomRequest
 */
export interface RoomsApiUnpinRoomRequest {
    /**
     * The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the  portal itself use whole numbers, while a room backed by a connected third-party account uses the string form  of the same listing.
     * @type {number | string}
     * @memberof RoomsApiUnpinRoom
     */
    readonly id: number | string
}

/**
 * Request parameters for updateRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiUpdateRoomRequest
 */
export interface RoomsApiUpdateRoomRequest {
    /**
     * The room to update, named by the identifier that `GET api/2.0/files/rooms` reports for it.
     * @type {number | string}
     * @memberof RoomsApiUpdateRoom
     */
    readonly id: number | string

    /**
     * The fields to change. Only the properties present in the object are applied, and a property that the object  does not define is rejected instead of being ignored.
     * @type {UpdateRoomRequest}
     * @memberof RoomsApiUpdateRoom
     */
    readonly updateRoomRequest: UpdateRoomRequest
}

/**
 * Request parameters for updateRoomTag operation in RoomsApi.
 * @export
 * @interface RoomsApiUpdateRoomTagRequest
 */
export interface RoomsApiUpdateRoomTagRequest {
    /**
     * 
     * @type {UpdateTagRequestDto}
     * @memberof RoomsApiUpdateRoomTag
     */
    readonly updateTagRequestDto?: UpdateTagRequestDto
}

/**
 * Request parameters for uploadRoomLogo operation in RoomsApi.
 * @export
 * @interface RoomsApiUploadRoomLogoRequest
 */
export interface RoomsApiUploadRoomLogoRequest {
    /**
     * The image data.
     * @type {File}
     * @memberof RoomsApiUploadRoomLogo
     */
    readonly file?: File
}

/**
 * RoomsApi - object-oriented interface
 * @export
 * @class RoomsApi
 * @extends {BaseAPI}
 */
export class RoomsApi extends BaseAPI {
    /**
     * Attaches the named tags to a room and returns the room with its whole tag set. Tags are portal-wide labels  shared by every room, and a name that the catalogue does not hold yet is created there by this call, so  attaching is also the short way of adding a tag to the portal. Names already attached to the room are kept as  they are, and repeating the call changes nothing, which makes it safe to retry. An empty list is accepted and  does nothing, while a blank or overlong name is rejected as an invalid request. The caller must be a manager  of the room or an administrator of the portal, and a room in the Archive section is refused with 403. A tag  has no identifier of its own and is addressed by name, so `GET api/2.0/files/tags` is what shows which names  already exist. Use `DELETE api/2.0/files/rooms/{id}/tags` to detach them again, which leaves the tags  themselves in the catalogue.
     * @summary Attach tags to a room
     * @param {RoomsApiAddRoomTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public addRoomTags(requestParameters: RoomsApiAddRoomTagsRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Attach tags to a room (third-party storage)
     * @param {RoomsApiAddRoomTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public addRoomTags(requestParameters: RoomsApiAddRoomTagsRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public addRoomTags(requestParameters: RoomsApiAddRoomTagsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public addRoomTags(requestParameters: RoomsApiAddRoomTagsRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).addRoomTags(requestParameters.id, requestParameters.batchTagsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that moves one room from the Rooms section to the Archive section, and returns the  operation record of that job. An archived room stays readable to its members and becomes read only: files  cannot be created, renamed or edited in it, and its settings, tags, logo and links can no longer be changed,  which is why many other room operations answer an archived room with a refusal. The caller must be a manager  of the room; administrators of the portal cannot archive a room they were not invited to, and a room template  cannot be archived at all and is answered as missing. The room is not archived when the response arrives: poll  `GET api/2.0/files/fileops` until `finished` is true. Archiving an already archived room is harmless.  `deleteAfter` decides only how long the finished record survives, not what happens to the room. Use  `PUT api/2.0/files/rooms/{id}/unarchive` to bring the room back.
     * @summary Archive a room
     * @param {RoomsApiArchiveRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public archiveRoom(requestParameters: RoomsApiArchiveRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).archiveRoom(requestParameters.id, requestParameters.archiveRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the cover picture and the background colour a room is shown with, and returns the whole room afterwards.  `cover` accepts only an identifier listed by `GET api/2.0/files/rooms/covers`, and `color` only six  hexadecimal digits with no leading number sign, so anything else is rejected as an invalid request. Either  field may be sent on its own, an empty `cover` clears the picture, an empty `color` restores the default one,  and an empty body leaves the room untouched. The cover is what the room shows while it has no uploaded logo:  setting a logo with `POST api/2.0/files/rooms/{id}/logo` hides the cover without erasing it, and deleting that  logo brings it back. The caller must be a manager of the room, an archived room is refused with 403, and an  unknown or deleted room is answered with 404. Repeating the same request is harmless, and the cover survives  archiving and unarchiving.
     * @summary Change the room cover
     * @param {RoomsApiChangeRoomCoverRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public changeRoomCover(requestParameters: RoomsApiChangeRoomCoverRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Change the room cover (third-party storage)
     * @param {RoomsApiChangeRoomCoverRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public changeRoomCover(requestParameters: RoomsApiChangeRoomCoverRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public changeRoomCover(requestParameters: RoomsApiChangeRoomCoverRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public changeRoomCover(requestParameters: RoomsApiChangeRoomCoverRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).changeRoomCover(requestParameters.id, requestParameters.coverRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a room in the portal Rooms section and returns it. `roomType` decides which sharing links, member  roles and form features the room offers, and it cannot be changed afterwards, so a room of the wrong kind has  to be recreated. The caller must be the portal owner, a portal administrator or a room administrator; a user  or a guest is refused, and so is a public room while the portal forbids external sharing. `title` is required  and must not be blank: characters a folder name cannot hold are replaced with underscores and the rest is  truncated, so the stored title can differ from the one sent and two rooms can share it. `quota` is accepted  only while the per-room quota feature is on and must stay within the portal quota, `cover` only for an id  returned by `GET api/2.0/files/rooms/covers`, and `color` as six hexadecimal digits with no leading number  sign. Tag names the portal does not know yet are added to the tag catalogue. `share` is not implemented and  any non-empty value is rejected, so invite members afterwards with `PUT api/2.0/files/rooms/{id}/share`.  Passing the portal room limit ends the call as a billing refusal and creates nothing.
     * @summary Create a room
     * @param {RoomsApiCreateRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createRoom(requestParameters: RoomsApiCreateRoomRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).createRoom(requestParameters.createRoomRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts a background job that copies a room template into a new room of the Rooms section, and answers with the  same progress record that `GET api/2.0/files/rooms/fromtemplate/status` returns. The caller must be able to  read the template and to create rooms at all, so a user or a guest is refused, and the checks run before the  job is queued. The room does not exist when the response arrives: poll the status operation until  `isCompleted` is true, then take `roomId` from it, and treat a non-empty `error` as a failed job. Only one  such job is kept per account, and a finished one is discarded when the next is started, so a second creation  loses the record of the first. Anything not sent is inherited from the template, and `copyLogo` keeps the  template logo and makes `logo` pointless. `quota` is accepted only while the per-room quota feature is on, and  a template of a public room cannot be instantiated while the portal forbids external sharing. A template that  does not exist or cannot be read is answered as missing.
     * @summary Create a room from the template
     * @param {RoomsApiCreateRoomFromTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createRoomFromTemplate(requestParameters: RoomsApiCreateRoomFromTemplateRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).createRoomFromTemplate(requestParameters.createRoomFromTemplateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Turns an image already uploaded to the portal into the logo of a room and returns the room with the addresses  of the four logo sizes. This is the second half of a two-step flow: upload the picture with  `POST api/2.0/files/logos` first and pass the path it returns as `tmpFile`, because the image itself is never  sent here. The temporary file belongs to the account that uploaded it and is consumed by this call, so it  cannot be reused for a second room and a path somebody else uploaded is refused. `x`, `y`, `width` and  `height` crop the picture; sending a position without a size is rejected as an invalid request, while a size  without a position is accepted. An empty `tmpFile` leaves the room as it is. A logo replaces the cover in the  interface without erasing it, and removing the logo brings the cover back. The caller must be a manager of the  room, an archived room is refused, and an unknown room is answered with 404.
     * @summary Set the room logo
     * @param {RoomsApiCreateRoomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createRoomLogo(requestParameters: RoomsApiCreateRoomLogoRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Set the room logo (third-party storage)
     * @param {RoomsApiCreateRoomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createRoomLogo(requestParameters: RoomsApiCreateRoomLogoRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public createRoomLogo(requestParameters: RoomsApiCreateRoomLogoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public createRoomLogo(requestParameters: RoomsApiCreateRoomLogoRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).createRoomLogo(requestParameters.id, requestParameters.logoRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds a custom tag to the portal-wide catalog of room tags and answers with the stored name. Tags are shared by  the whole portal instead of belonging to the caller: once the tag exists, every room manager can attach it to  their own rooms with `PUT api/2.0/files/rooms/{id}/tags`, and that call also creates a tag it does not find.  Creating a name that is already in the catalog returns the existing tag unchanged rather than a duplicate or  an error, so repeating the call after a timeout is safe. A blank name, or one longer than the published limit,  is rejected as an invalid request. Only a room manager or a portal administrator may create a tag, and a user  or a guest is refused. The answer is the name as stored, and that name is the value to send in the `tags`  filter of `GET api/2.0/files/rooms` and in the room tag calls. The catalog itself is read with  `GET api/2.0/files/tags`.
     * @summary Create a room tag
     * @param {RoomsApiCreateRoomTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createRoomTag(requestParameters: RoomsApiCreateRoomTagRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).createRoomTag(requestParameters.createTagRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that turns an existing room into a reusable room template, and returns the state of  that job right away. The template lands in the portal\'s Templates section, inherits the source room\'s type,  privacy, indexing, storage limit, lifetime, download and watermark settings, and receives copies of the room\'s  files together with its ordinary subfolders and everything inside them; the service subfolders a room keeps  for its own workflows are left out. The caller needs room-manager rights on the source room, and the room must  not be archived: a room that cannot be found under Rooms is answered as missing, and every other refusal comes  back as a rejection. The template is not ready when the response arrives, so poll  `GET api/2.0/files/roomtemplate/status` until `isCompleted` is true, then read `templateId`; a non-empty  `error` there means the job failed and the half-built template was removed. Only one template creation is  tracked per caller, and starting another replaces the previous record. Setting `public` to true discards  `share` and `groups` and shares the finished template with everyone instead, while `copyLogo` reuses the  source room\'s own picture and makes `logo` irrelevant.
     * @summary Create a room template
     * @param {RoomsApiCreateRoomTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createRoomTemplate(requestParameters: RoomsApiCreateRoomTemplateRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).createRoomTemplate(requestParameters.roomTemplateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Turns a folder of a connected third-party storage account into a room of the `Rooms` section, so that the  files of the room keep living in that storage instead of the portal. Connect the account first with  `POST api/2.0/files/thirdparty` and take the path parameter from a folder listing of that account: it is the  identifier of a folder in the storage, not of a room. One connected account can back one room only, so a  second call over the same account is refused, and so is an account that was not connected for room storage.  The caller needs the right to create rooms, which a portal user and a guest do not have; a public room is  refused while the administrator restricts external access, and reaching the room limit of the tariff is  refused too. With `createAsNewFolder` the room is a new subfolder named after `title`, otherwise the folder  from the path becomes the room itself and `indexing`, `denyDownload`, `tags` and `logo` are then dropped. The  answer is the new room, whose identifiers are strings; a public or a form-filling room already has its primary  link, readable with `GET api/2.0/files/rooms/{id}/link`.
     * @summary Create a third-party room
     * @param {RoomsApiCreateRoomThirdPartyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createRoomThirdParty(requestParameters: RoomsApiCreateRoomThirdPartyRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).createRoomThirdParty(requestParameters.id, requestParameters.createThirdPartyRoom, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes custom room tags from the portal catalog by name and detaches them from every room that carries them;  the rooms themselves and their content are untouched, and only the tag disappears from their tag lists. Only a  portal administrator may call it, and a room manager who is allowed to create tags is refused. The names are  matched exactly as they are stored: names that are not in the catalog are skipped in silence and an empty list  is accepted as a no-op, so a successful answer does not prove that anything was deleted; check a name with  `GET api/2.0/files/tags/{tagName}/haslinks` first when that matters. The call cannot be undone: creating the  name again with `POST api/2.0/files/tags` brings back the tag but not its links, which have to be attached to  each room once more. The answer carries no body. To take a tag off one room and leave it in the catalog for  the others, use `DELETE api/2.0/files/rooms/{id}/tags` instead.
     * @summary Delete the custom room tags
     * @param {RoomsApiDeleteCustomTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public deleteCustomTags(requestParameters: RoomsApiDeleteCustomTagsRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).deleteCustomTags(requestParameters.batchTagsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that deletes one room with everything inside it, and returns the operation record of  that job. Deleting a room is destructive and has no trash step: the room and its files are gone once the job  finishes, unlike a file or a folder, which is moved to the trash first. The right to delete is checked before  the job is queued, so a caller who may not delete the room is refused straight away and an unknown room is  answered as missing; the same checks run again when the job starts, which is why the `error` of the finished  operation still has to be read. Poll `GET api/2.0/files/fileops` until `finished` is true, or read the  returned record again by its `id`. The record is kept until it is read once, so one poll after completion  still sees it. `deleteAfter` in the body is required by the contract but has no effect on the job. An archived  room is deleted the same way, and a second delete of the same id reports that the room is missing.
     * @summary Remove a room
     * @param {RoomsApiDeleteRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public deleteRoom(requestParameters: RoomsApiDeleteRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).deleteRoom(requestParameters.id, requestParameters.deleteRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the uploaded logo of a room and returns the room with empty logo addresses. What the room falls back  to is its cover and colour, which the logo only hid: if a cover was set before the logo, it is shown again,  and `POST api/2.0/files/rooms/{id}/cover` is what changes it. Nothing else about the room is touched, so  membership, tags, links and settings are preserved. A room that has no logo is accepted and answered with 200,  and repeating the call is therefore harmless. The caller must be a manager of the room; a member invited even  with editing rights is refused, and so is a room in the Archive section. A room that does not exist or was  deleted is answered as missing. After the logo is removed a new one can be set again through  `POST api/2.0/files/logos` followed by `POST api/2.0/files/rooms/{id}/logo`.
     * @summary Remove a room logo
     * @param {RoomsApiDeleteRoomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public deleteRoomLogo(requestParameters: RoomsApiDeleteRoomLogoRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Remove a room logo (third-party storage)
     * @param {RoomsApiDeleteRoomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public deleteRoomLogo(requestParameters: RoomsApiDeleteRoomLogoRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public deleteRoomLogo(requestParameters: RoomsApiDeleteRoomLogoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public deleteRoomLogo(requestParameters: RoomsApiDeleteRoomLogoRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).deleteRoomLogo(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Detaches the named tags from a room and returns the room with its remaining tag set. Only the link between the  room and the tag is removed: the tag stays in the portal catalogue and keeps working for every other room, and  `DELETE api/2.0/files/tags` is what removes it from the portal itself. Names that are not in the catalogue, or  not attached to this room, are skipped without an error, so a successful answer does not prove that anything  was detached; compare the returned tag set instead. An empty list is accepted and does nothing, while a null  entry in the list is rejected as an invalid request. The caller must be a manager of the room or an  administrator of the portal, and a room in the Archive section is refused with 403. A tag that loses its last  room stays in the catalogue, and only deleting that room takes the tag with it.
     * @summary Detach tags from a room
     * @param {RoomsApiDeleteRoomTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public deleteRoomTags(requestParameters: RoomsApiDeleteRoomTagsRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Detach tags from a room (third-party storage)
     * @param {RoomsApiDeleteRoomTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public deleteRoomTags(requestParameters: RoomsApiDeleteRoomTagsRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public deleteRoomTags(requestParameters: RoomsApiDeleteRoomTagsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public deleteRoomTags(requestParameters: RoomsApiDeleteRoomTagsRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).deleteRoomTags(requestParameters.id, requestParameters.batchTagsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the record of the external database export job of a form filling room, or an empty body when the room  has no job at all. The room must be a form filling room and the caller must be able to edit it, otherwise the  call is refused; an unknown room is answered with 404. This is the polling target of  `POST api/2.0/files/rooms/{id}/externaldbsync`: repeat it until `isCompleted` is true, and then read `forms`,  which lists one entry per original form with its own `success` and `error` and is empty while the job is still  running. `percentage` advances as forms are processed, `status` distinguishes a job that is queued, running,  finished or failed, and `error` carries the message of a job that stopped as a whole. The record belongs to  the room rather than to the account that started the job, so any member who can edit the room sees the same  answer. The call changes nothing and is safe to repeat.
     * @summary Get external DB sync status
     * @param {RoomsApiGetExternalDbSyncStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getExternalDbSyncStatus(requestParameters: RoomsApiGetExternalDbSyncStatusRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getExternalDbSyncStatus(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns what is new for the calling account in one room, grouped by the day the entry was last changed, with  the newest day first and the entries inside a day ordered from the most recent. Only files are reported: a  folder somebody else created is not an entry of its own, while a file created inside it is, however deep it  lies. What the caller changed is never new for the caller, and a file that was deleted afterwards disappears  from the answer. Reading this list leaves the badges alone, which is what makes it the operation to call  before `GET api/2.0/files/rooms/{id}`, since opening the room clears them. An empty array therefore means that  there is nothing new, not that the badges were already read. The caller needs access to the room; somebody who  is not a member is refused, and an unknown or deleted room is answered as missing. Use  `GET api/2.0/files/rooms/news` for the same report across every room at once.
     * @summary Get new items in a room
     * @param {RoomsApiGetNewRoomItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getNewRoomItems(requestParameters: RoomsApiGetNewRoomItemsRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getNewRoomItems(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether the room template addressed by `id` is shared with everyone or is reachable only by the  accounts it was explicitly shared with. True means the Everyone group holds read access, so any member allowed  to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; false means only  the owner and the named recipients can. The identifier has to belong to a room template — take it from  `templateId` of `GET api/2.0/files/roomtemplate/status`, or from the folder list of `GET api/2.0/files/rooms`  called with `searchArea` set to 4 — while an ordinary room, a deleted template or an unknown value is answered  as missing. The caller needs read access to the template, so somebody else\'s private template is refused even  for a portal administrator, and members who cannot reach the Templates section at all are refused whatever the  template\'s state. The call only reads state; use `PUT api/2.0/files/roomtemplate/public` to change it.
     * @summary Get room template public access
     * @param {RoomsApiGetPublicSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getPublicSettings(requestParameters: RoomsApiGetPublicSettingsRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getPublicSettings(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the gallery of cover pictures a room can be given: every entry pairs the identifier to send to  `POST api/2.0/files/rooms/{id}/cover` with the drawing itself as inline vector markup ready to be rendered.  The gallery is built into the product rather than stored per portal, so it is the same for every account and  every room, does not depend on what rooms exist, and its identifiers do not change with the language of the  request. The identifiers are unique and stable, which makes them safe to keep in a client, while the drawings  behind them may change between product versions. Any account of the portal may read the gallery, but a guest  is refused. The list is the only source of valid cover identifiers: a value that is not in it is rejected  wherever a cover is set, including room creation and room update. The call changes nothing and is safe to  repeat.
     * @summary Get room cover gallery
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomCovers(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomCovers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the progress of the room-from-template job started by the calling account with  `POST api/2.0/files/rooms/fromtemplate`. The record is private to the account that started the job: jobs of  other members are never reported, and only one record is kept per account. The body is empty when the account  has no such record, and it is also empty when the job queue cannot be read, so an empty answer is not proof  that nothing was started. `progress` is a percentage, `isCompleted` marks the end of the job whether it  succeeded or failed, `error` carries the failure message and is empty on success, and `roomId` is meaningful  only once the room exists. The record survives the end of the job and is dropped when the next creation  starts, so polling after completion keeps returning the same answer. Poll this operation until `isCompleted`  is true and then read the room itself with `GET api/2.0/files/rooms/{id}`. The call changes nothing and is  safe to repeat.
     * @summary Get the room creation progress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomCreatingStatus(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomCreatingStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the state of the index export of the calling account, the job started by  `POST api/2.0/files/rooms/{id}/indexexport`. The record is not addressed by room: there is at most one per  account, and the answer describes the latest export whichever room it was started for. When the account has  never started one, or its record was cancelled, the body is null rather than an error, so null is the normal  way of saying that there is nothing to report. While the job runs, `percentage` moves in coarse steps instead  of smoothly, which makes it a rough hint rather than a measure of the remaining time; `isCompleted` is the  field to wait on, and it is also set for a job that failed or was cancelled, so read `status` to tell the  outcomes apart and `error` for the message. After a successful build, `resultFileId`, `resultFileName` and  `resultFileUrl` point to the spreadsheet saved in the My documents section of the caller. The record survives  completion and is replaced only by the next export.
     * @summary Get the room index export
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomIndexExport(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomIndexExport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one room with its type, title, tags, logo, cover, colour, quota and virtual data room settings,  together with the access level the caller has in it. Reading the room is not a side-effect-free call: it  clears the caller new-item badges for that room, and `newForMe` comes back as 0, so read  `GET api/2.0/files/rooms/{id}/news` first when the new items matter. The caller needs read access to the room;  portal administrators can read a room they were never invited to, while a member without access is refused.  The operation also answers an anonymous caller, but only in the context of a valid external share link of that  room, and a plain anonymous request is rejected as unauthenticated. A room that never existed, was deleted, or  lives in a section the caller cannot see is answered as missing. Archived rooms are returned as well and are  recognised by their root section rather than by a separate flag. Use `GET api/2.0/files/rooms` to search and  page through rooms instead of guessing ids.
     * @summary Get room information
     * @param {RoomsApiGetRoomInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomInfo(requestParameters: RoomsApiGetRoomInfoRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Get room information (third-party storage)
     * @param {RoomsApiGetRoomInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomInfo(requestParameters: RoomsApiGetRoomInfoRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public getRoomInfo(requestParameters: RoomsApiGetRoomInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public getRoomInfo(requestParameters: RoomsApiGetRoomInfoRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomInfo(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the sharing links of a room, with the invitation and the external links mixed together unless `type`  narrows it to one kind. Each entry carries the link address, its title, access level, expiration, the flag  that marks the primary external link of the room and, for invitation links, how many times it may still be  used. Public and form filling rooms come with an external link created for them, so an empty answer there  means that the link was revoked rather than that the room is private; rooms of the other kinds start with no  links at all and only gain one when somebody creates it, which for a collaboration room and a virtual data  room can be an invitation link alone. The caller needs access to the room and the right to see its links: a  member invited without that right gets an empty list rather than an error, while somebody who is not in the  room at all is refused. Paging parameters are not honoured here: the first hundred links are returned and the  reported count is the number of entries actually sent.
     * @summary Get the room links
     * @param {RoomsApiGetRoomLinksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomLinks(requestParameters: RoomsApiGetRoomLinksRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomLinks(requestParameters.id, requestParameters.type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns one page of the access list of a room: the owner first, then the managers, the groups, the ordinary  members, the guests and finally the invitations nobody has accepted yet, with the total in the response  headers. `filterType` selects what is listed and defaults to accounts and groups, which leaves the sharing  links of the room out; those are read with `GET api/2.0/files/rooms/{id}/links`. `filterValue` matches the  displayed name of the subject, and an invitation that is still pending is listed under the email address it  was sent to. Paging is done with `count` and `startIndex`, and the order is stable between calls. Any member  who can read the room sees the accounts and the groups, so the list is not limited to the managers, and portal  administrators can read the list of a room they were never invited to; somebody who is not in the room at all  is refused. Asking for the link entries instead needs the right to see the links of the room, and a member  without it gets an empty page rather than an error.
     * @summary Get the room access rights
     * @param {RoomsApiGetRoomSecurityInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomSecurityInfo(requestParameters: RoomsApiGetRoomSecurityInfoRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomSecurityInfo(requestParameters.id, requestParameters.filterType, requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the custom room tags available to the caller as a flat array of names, not of objects. What the array  holds depends on the account: a portal administrator gets the whole catalog, including tags that no room uses  yet, while every other account gets only the tags attached to rooms it can see, with duplicates removed. An  empty answer therefore means that this caller sees no tagged room, not that the portal has no tags.  `filterValue` keeps the names that contain the given text, ignoring case, while `count` and `startIndex` page  the result; no total is returned, so a page shorter than `count` is the signal that the list is exhausted. The  names are exactly the values accepted by the `tags` filter of `GET api/2.0/files/rooms` and by the room tag  calls, which makes this the call to fill a tag picker with. Add a tag with `POST api/2.0/files/tags` and check  whether one is still in use with `GET api/2.0/files/tags/{tagName}/haslinks`.
     * @summary Get available room tags
     * @param {RoomsApiGetRoomTagsInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomTagsInfo(requestParameters: RoomsApiGetRoomTagsInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomTagsInfo(requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports the state of the room template creation the caller started with `POST api/2.0/files/roomtemplate`. The  record is private to the account that started the job: work started by another member is never reported, and a  caller who has started none gets an empty response instead of an object. Poll until `isCompleted` turns true,  then take the identifier of the finished template from `templateId`; a non-empty `error` means the job failed  and no template was kept. Treat `isCompleted` as the completion signal rather than `progress`, which the  background job only sets to 100 once the work is over. The record outlives the job, so a finished operation  can be read again and keeps returning the same identifier until the caller starts another template creation,  which replaces it. The call only reads state and needs no access to the source room or to the template, but it  does require an authenticated caller.
     * @summary Get room template creation status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomTemplateCreatingStatus(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomTemplateCreatingStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the rooms of one section of the portal: the active rooms by default, or the archive, the form-filling  section or the room templates, chosen with `searchArea`. The rooms arrive in `folders` while `files` stays  empty, `current` describes the section itself, and `total` counts every room that matched the filters before  paging. A caller sees only the rooms they created or were invited to, while a portal administrator sees all of  them, so an empty answer means nothing is visible to this account rather than nothing exists. The remaining  parameters narrow the same set, by room type, title, tags, member, owner, storage, quota and privacy, and they  combine with each other. Sorting is not free of side effects: a `sortBy` value is also stored as this  account\'s default order for later listings, and omitting it reuses the stored order. Page the result with  `count` and `startIndex`. Read a single room with `GET api/2.0/files/rooms/{id}`, and create one with  `POST api/2.0/files/rooms`.
     * @summary Get rooms
     * @param {RoomsApiGetRoomsFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomsFolder(requestParameters: RoomsApiGetRoomsFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomsFolder(requestParameters.type, requestParameters.subjectId, requestParameters.subjectOwnerId, requestParameters.searchArea, requestParameters.withoutTags, requestParameters.tags, requestParameters.excludeSubject, requestParameters.provider, requestParameters.quotaFilter, requestParameters.storageFilter, requestParameters.privacyFilter, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, requestParameters.groupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Collects everything that is marked as new for the caller across the active rooms into one answer, grouped  first by the day an entry changed and then by the room it belongs to. An entry becomes new when somebody else  creates or changes it in a room the caller has already opened, so the caller\'s own work never shows up here,  and neither does anything from a room they have never visited. Only files are listed: a new subfolder is not  an item, although files created inside it are, at any depth. The days come newest first, and inside a day the  rooms and their files follow the same order by change time. The archive is out of scope, only rooms of the  active section are covered. Reading the list clears nothing: the marks stay until the room itself is opened  with `GET api/2.0/files/rooms/{id}`. An empty array means that this account has nothing new. For one room, use  `GET api/2.0/files/rooms/{id}/news`.
     * @summary Get new items in all rooms
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomsNewItems(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomsNewItems(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the primary external link of a room, which is the one address meant to be handed out to people outside  the portal. A public room and a form filling room get such a link when they are created, and asking for it  again returns the same link rather than a new one, so the answer is stable. In a room that has no primary link  yet this call creates one instead of reporting nothing, which needs the right to manage the links of the room:  a member invited with a lower level is refused with 403, and so is anybody who is not in the room at all. A  link that was explicitly revoked stays revoked and is reported as missing rather than recreated, and an  unknown room is answered with 404 as well. An archived public room still reports its link. The answer is the  same entry that `GET api/2.0/files/rooms/{id}/links` returns with the primary flag set, including the request  token that has to travel with the address.
     * @summary Get the room primary external link
     * @param {RoomsApiGetRoomsPrimaryExternalLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomsPrimaryExternalLink(requestParameters: RoomsApiGetRoomsPrimaryExternalLinkRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomsPrimaryExternalLink(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether any room still carries the named tag, which is the check to run before the tag is deleted from  the catalog. Only a portal administrator may call it, and every other account is refused. The name is matched  exactly against the catalog, and a name that is not in it is answered with 404. That also tells the two ways a  tag stops being used apart: taking the tag off the last room that carried it leaves the tag in the catalog and  turns the answer to false, while deleting that last room removes the tag itself, after which the call answers  404. A true answer means at least one room, active or archived, still references the tag, so deleting it with  `DELETE api/2.0/files/tags` would strip it from those rooms. The handler reads the tag name from the query  string, so the value has to be sent twice: in the path segment and as the `tagName` query parameter.
     * @summary Check room tag usage
     * @param {RoomsApiHasTagLinksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public hasTagLinks(requestParameters: RoomsApiHasTagLinksRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).hasTagLinks(requestParameters.tagName2, requestParameters.tagName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Pins a room to the top of the room list of the calling account and returns the room with the pinned flag set.  Pinning is personal: it changes the order only for the caller, is invisible to the other members of the room,  and does not survive a trip through the Archive section, so an unarchived room has to be pinned again. Pinned  rooms stay above the unpinned ones whatever sorting or filter the listing uses, and their own order between  each other is stable. An account may keep only a limited number of pinned rooms at a time, ten on a portal  with the default configuration, and AI rooms are counted separately against their own allowance; a request  over the limit is refused until something is unpinned with `PUT api/2.0/files/rooms/{id}/unpin`. Pinning a  room that is already pinned changes nothing and is safe to repeat. Anybody who can read the room may pin it,  including guests and portal administrators who were never invited, while somebody who is not in the room is  refused, an archived room is rejected and an unknown room is answered as missing.
     * @summary Pin a room
     * @param {RoomsApiPinRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public pinRoom(requestParameters: RoomsApiPinRoomRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Pin a room (third-party storage)
     * @param {RoomsApiPinRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public pinRoom(requestParameters: RoomsApiPinRoomRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public pinRoom(requestParameters: RoomsApiPinRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public pinRoom(requestParameters: RoomsApiPinRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).pinRoom(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Renumbers the manual order of the items lying directly in a room so that they run from one upwards with no  gaps and no duplicates, and returns the room. The order of the items relative to each other is preserved: only  the numbers are compacted, and nothing is moved, renamed, duplicated or deleted. Files and folders share one  sequence. Nested folders keep their own numbering and are not touched, so each level is compacted on its own.  The operation is meant for a room with indexing turned on, where the manual order is what listings follow; a  room without indexing accepts it and simply has nothing that depends on the result. Running it twice changes  nothing the second time, and an already dense sequence is left as it is, which makes the call safe to retry.  The caller must be a manager of the room; a member invited with any other level is refused, an archived room  is rejected, and an unknown or deleted room is answered as missing.
     * @summary Reorder room contents
     * @param {RoomsApiReorderRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public reorderRoom(requestParameters: RoomsApiReorderRoomRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Reorder room contents (third-party storage)
     * @param {RoomsApiReorderRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public reorderRoom(requestParameters: RoomsApiReorderRoomRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public reorderRoom(requestParameters: RoomsApiReorderRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public reorderRoom(requestParameters: RoomsApiReorderRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).reorderRoom(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends the room invitation email again to members who were invited but have not joined yet. `resendAll` covers  every pending invitation of the room and makes `usersIds` irrelevant, while an explicit list without that flag  is limited to the named accounts. An account that has already accepted the invitation, is not a member of the  room, or is invisible to the caller is skipped without an error, and a request that names nobody and does not  set the flag does nothing, so a successful answer never proves that a message went out. Nothing about the room  or its membership changes, and the operation can be repeated. The caller must be a manager of the room, an  archived room is refused, a room template is answered as missing, and a malformed account id is rejected as an  invalid request. The call is rate limited, so a client that loops over members should send one batch instead.  The response carries no body.
     * @summary Resend the room invitations
     * @param {RoomsApiResendEmailInvitationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public resendEmailInvitations(requestParameters: RoomsApiResendEmailInvitationsRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).resendEmailInvitations(requestParameters.id, requestParameters.userInvitation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches the room template named by `id` between shared with everyone and private, rewriting its whole  recipient list in the process. With `public` true the Everyone group is granted read access, so every member  allowed to create rooms can build one from the template with `POST api/2.0/files/rooms/fromtemplate`; with  false that access is taken away. In both cases every other account and group the template was shared with —  including the addresses passed as `share` when it was created — loses access, so this is not a way to add a  single recipient to an existing list. Only the account that owns the template may call it: a portal  administrator who does not own it is refused, and so is a member invited to the source room. The identifier  has to resolve to a room template; an ordinary room or an unknown value is answered as missing, and an  identifier below 1 is rejected as an invalid request. Repeating the call with the same value changes nothing,  and nothing is returned; read the current state with `GET api/2.0/files/roomtemplate/{id}/public`.
     * @summary Set room template public access
     * @param {RoomsApiSetPublicSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public setPublicSettings(requestParameters: RoomsApiSetPublicSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).setPublicSettings(requestParameters.setPublicDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates, updates or deletes one sharing link of a room and returns it. `linkType` chooses the kind: an  invitation link makes whoever opens it a member with the given access level, while an external link opens the  room without an account. Omitting `linkId` creates a link, passing the id of an existing one updates it, and  an unknown id is created with that id; the kind of an existing link cannot be changed afterwards. An access  level of 0 deletes the link, and deleting the primary external link of a public or form filling room  immediately replaces it with a fresh one, so such a room is never left without one. A room keeps at most one  invitation link, and a second one is refused; form filling rooms take no invitation links, and collaboration,  form filling and virtual data rooms take no external links. An expiration date in the past is dropped silently  for an external link and rejected for an invitation link. `password`, `denyDownload` and `internal` apply to  external links only.
     * @summary Set the room external or invitation link
     * @param {RoomsApiSetRoomLinkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public setRoomLink(requestParameters: RoomsApiSetRoomLinkRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).setRoomLink(requestParameters.id, requestParameters.roomLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds, changes and removes room members in one batch, and returns the resulting access list of the named  subjects. Each entry names either an account or a group of the portal, or the email address of somebody who  has no account yet, together with the access level to grant; an access of 0 removes the subject from the room.  An entry without an access level is ignored, the same subject listed twice keeps the last level, and an empty  list is accepted and changes nothing. The caller must be a manager of the room, so an invitation sent by a  user or a guest is refused, and an account that is a portal user or a guest cannot be made a room manager.  Inviting by email also needs the portal to allow guest invitations. A subject the caller is not allowed to see  is dropped without an error, which is why the answer has to be compared with the request. Removing a member  who still holds a form role is refused through `error` unless `force` is set. `notify` sends the invitation  email with the optional `message`.
     * @summary Set the room access rights
     * @param {RoomsApiSetRoomSecurityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public setRoomSecurity(requestParameters: RoomsApiSetRoomSecurityRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).setRoomSecurity(requestParameters.id, requestParameters.roomInvitationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that re-exports the collected data of every original form of a form filling room into  the external database configured for the portal, and returns the job record. The room must be a form filling  room and the caller must be able to edit it, otherwise the call is refused with 403; an unknown room is  answered with 404. The export is not done when the response arrives: poll  `GET api/2.0/files/rooms/{id}/externaldbsync` until `isCompleted` is true, then read `forms` for the per-form  outcome, which stays empty while the job is running. Starting the job again while it is still running returns  the same record instead of a second job, so a retry is safe; a finished job is replaced by the new one. One  job is kept per room. A form whose data cannot be exported does not stop the others: it comes back in `forms`  with `success` false and its own `error`. When the portal has no external database configured the call fails  and nothing is queued.
     * @summary Start external DB sync
     * @param {RoomsApiStartExternalDbSyncRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public startExternalDbSync(requestParameters: RoomsApiStartExternalDbSyncRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).startExternalDbSync(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that builds the index of a virtual data room as a spreadsheet, and answers with the  job record to poll. The room has to be a virtual data room with indexing switched on, and the caller has to be  its manager or a portal administrator; any other kind of room, a room template, and a member invited with a  lower access level are refused, while an unknown room is answered as missing. There is one job per account:  starting an export while an earlier one is still running answers with that earlier record instead of queuing a  second job, and a finished record is replaced by the new one. Poll `GET api/2.0/files/rooms/indexexport` until  `isCompleted` is true, then read `status` to tell a completed job from a failed or cancelled one, and take  `resultFileId` and `resultFileUrl` from the same record. The report is saved as a spreadsheet in the My  documents section of the caller, not in the room. Cancel a running job with  `DELETE api/2.0/files/rooms/indexexport`.
     * @summary Start the room index export
     * @param {RoomsApiStartRoomIndexExportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public startRoomIndexExport(requestParameters: RoomsApiStartRoomIndexExportRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).startRoomIndexExport(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Cancels the room index export of the calling account and drops its job record. No room is named because there  is at most one export per account, so the call always acts on the caller\'s own job and never on somebody  else\'s: an account with nothing running gets a successful answer that changes nothing, which makes the call  safe to repeat and makes it useless as a way of stopping an export somebody else started. Afterwards  `GET api/2.0/files/rooms/indexexport` answers with an empty body until a new export is started with  `POST api/2.0/files/rooms/{id}/indexexport`. The cancellation is asynchronous: the background job stops at its  next checkpoint, so one that is already saving the file may still finish, and a report that was written before  the cancellation stays in the My documents section of the caller and has to be deleted as an ordinary file.  The answer carries no body and says nothing about whether an export was running.
     * @summary Terminate the room index export
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public terminateRoomIndexExport(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).terminateRoomIndexExport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Queues a background job that moves one room from the Archive section back to the Rooms section, and returns  the operation record of that job. The room becomes writable again with the membership, tags, logo and links it  had before, while the pinned state of its members is not restored and has to be set again with  `PUT api/2.0/files/rooms/{id}/pin`. The caller must be a manager of the room; a member who was only invited to  it is refused, a room template is answered as missing, and a room that was never archived simply stays where  it is. The room is not moved when the response arrives: poll `GET api/2.0/files/fileops` until `finished` is  true, and expect a room that is still archived until then. `deleteAfter` decides only how long the finished  record survives. Calling the operation twice in a row does not corrupt the room, and a deleted or unknown room  id is reported as missing.
     * @summary Unarchive a room
     * @param {RoomsApiUnarchiveRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public unarchiveRoom(requestParameters: RoomsApiUnarchiveRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).unarchiveRoom(requestParameters.id, requestParameters.archiveRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a room from the pinned group of the calling account and returns the room with the pinned flag cleared.  Only the personal ordering of the caller changes: the room itself, its members, their roles and its contents  are left exactly as they were, and the room stays in the list, simply among the unpinned ones. Unpinning frees  one of the pin slots of the account, which AI rooms count separately, so it is the way out of a refused  `PUT api/2.0/files/rooms/{id}/pin`. Unpinning a room that was never pinned is accepted and changes nothing, so  the call can be repeated safely and its answer does not prove that anything was pinned before. Anybody who can  read the room may unpin it, while somebody who is not in the room at all is refused and an unknown or deleted  room is answered as missing. An archived room cannot be unpinned.
     * @summary Unpin a room
     * @param {RoomsApiUnpinRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public unpinRoom(requestParameters: RoomsApiUnpinRoomRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Unpin a room (third-party storage)
     * @param {RoomsApiUnpinRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public unpinRoom(requestParameters: RoomsApiUnpinRoomRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public unpinRoom(requestParameters: RoomsApiUnpinRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public unpinRoom(requestParameters: RoomsApiUnpinRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).unpinRoom(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Applies a partial change to one room and returns the whole room as it is after it. Only the fields present in  the body are touched, an empty body changes nothing, and a property the body does not define is rejected as an  invalid request instead of being ignored. The caller must be a manager of this room: portal administrators do  not get in without an invitation, and an archived room is refused. `title` is trimmed, sanitised the way a  room title is sanitised at creation, and a blank value is treated as no change. `tags` replaces the whole tag  set and an empty array clears it, an empty `color` restores the default and an empty `cover` removes the  cover. A `quota` of -1 switches the room back to no custom limit, any other negative value restores the portal  default, and a positive one is accepted only while the per-room quota feature is on. Turning `indexing` on  renumbers the room contents. `chatSettings` belongs to an AI room and is rejected anywhere else. Use  `POST api/2.0/files/rooms/{id}/logo` for logo cropping.
     * @summary Update a room
     * @param {RoomsApiUpdateRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public updateRoom(requestParameters: RoomsApiUpdateRoomRequest & { id: number }, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper>;
    /**
     * The same operation for an entry in a connected third-party storage: the identifier is a string such as `sbox-42`, and the answer carries string identifiers as well.
     * @summary Update a room (third-party storage)
     * @param {RoomsApiUpdateRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public updateRoom(requestParameters: RoomsApiUpdateRoomRequest & { id: string }, options?: RawAxiosRequestConfig): AxiosPromise<ThirdPartyFolderWrapper>;
    public updateRoom(requestParameters: RoomsApiUpdateRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderWrapper | ThirdPartyFolderWrapper>;
    public updateRoom(requestParameters: RoomsApiUpdateRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).updateRoom(requestParameters.id, requestParameters.updateRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Renames a custom room tag in the portal catalog. The rename follows the tag everywhere it is used: every room  that carries it keeps it and shows the new name, so nothing has to be re-attached afterwards. Only a portal  administrator may rename a tag, and a room manager who is allowed to create tags is still refused here. The  old name is matched exactly as it is stored rather than searched for, and a name that is not in the catalog is  answered as missing. A new name that another tag already occupies is rejected as an invalid request, because  tag names are unique across the portal; both names must be non-blank and within the published length limit.  The answer is the new name. Stored queries are not updated for the caller: a `tags` filter of  `GET api/2.0/files/rooms` that still names the old value stops matching anything. The catalog is read with  `GET api/2.0/files/tags`.
     * @summary Rename a room tag
     * @param {RoomsApiUpdateRoomTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public updateRoomTag(requestParameters: RoomsApiUpdateRoomTagRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).updateRoomTag(requestParameters.updateTagRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores an image in temporary storage and answers with the path to it, which is the first half of setting a  room logo. No room changes here: pass the returned path as `tmpFile` to `POST api/2.0/files/rooms/{id}/logo`,  together with the crop rectangle, to make the image the logo of a room. The image travels as multipart form  data, and the first file part of the request is the one that is used while any other part is ignored. It is  re-encoded to PNG and scaled down to fit 1280 by 1280 pixels, so a larger picture is accepted and shrunk,  while a part that is not a readable image, or one over the portal limit for uploaded images, is refused with  400. Only a room manager or a portal administrator may upload, and everyone else gets 403. Every call produces  a new path, and an image that is never used stays in temporary storage until it is cleaned up, so uploading  twice is harmless.
     * @summary Upload a room logo image
     * @param {RoomsApiUploadRoomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public uploadRoomLogo(requestParameters: RoomsApiUploadRoomLogoRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).uploadRoomLogo(requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }
}

