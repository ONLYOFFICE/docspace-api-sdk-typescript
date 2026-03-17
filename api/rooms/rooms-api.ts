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
import type { FileOperationWrapper } from '../../models';
// @ts-ignore
import type { FileShareArrayWrapper } from '../../models';
// @ts-ignore
import type { FileShareWrapper } from '../../models';
// @ts-ignore
import type { FolderContentIntegerWrapper } from '../../models';
// @ts-ignore
import type { FolderIntegerWrapper } from '../../models';
// @ts-ignore
import type { FolderStringWrapper } from '../../models';
// @ts-ignore
import type { KeyValuePairStringStringValues } from '../../models';
// @ts-ignore
import type { LinkType } from '../../models';
// @ts-ignore
import type { LogoRequest } from '../../models';
// @ts-ignore
import type { NewItemsFileEntryBaseArrayWrapper } from '../../models';
// @ts-ignore
import type { NewItemsRoomNewItemsArrayWrapper } from '../../models';
// @ts-ignore
import type { ObjectArrayWrapper } from '../../models';
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
import type { RoomSecurityWrapper } from '../../models';
// @ts-ignore
import type { RoomTemplateDto } from '../../models';
// @ts-ignore
import type { RoomTemplateStatusWrapper } from '../../models';
// @ts-ignore
import type { RoomType } from '../../models';
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
import type { SubjectFilter } from '../../models';
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
         * Adds the tags to a room with the ID specified in the request.
         * @summary Add the room tags
         * @param {number} id The room Id.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for managing tags.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-tags/
         */
        addRoomTags: async (id: number, batchTagsRequestDto?: BatchTagsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Moves a room with the ID specified in the request to the Archive section.
         * @summary Archive a room
         * @param {number} id The room ID.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for archiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/archive-room/
         */
        archiveRoom: async (id: number, archiveRoomRequest?: ArchiveRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Changes a cover of a room with the ID specified in the request.
         * @summary Change the room cover
         * @param {number} id The room ID.
         * @param {CoverRequestDto} coverRequestDto The request parameters to change the room cover.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeRoomCover operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/
         */
        changeRoomCover: async (id: number, coverRequestDto: CoverRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Creates a room in the Rooms section.
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
         * Creates a room in the Rooms section based on the template.
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
         * Creates a logo for a room with the ID specified in the request.
         * @summary Create a room logo
         * @param {number} id The room ID.
         * @param {LogoRequest} logoRequest The logo request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/
         */
        createRoomLogo: async (id: number, logoRequest: LogoRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Creates a custom room tag with the parameters specified in the request.
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
         * Starts creating the room template.
         * @summary Start creating room template
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
         * Creates a room in the Rooms section stored in a third-party storage.
         * @summary Create a third-party room
         * @param {string} id The ID of the folder in the third-party storage in which the contents of the room will be stored.
         * @param {CreateThirdPartyRoom} createThirdPartyRoom The third-party room information.
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
         * Deletes a bunch of custom tags specified in the request.
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
         * Removes a room with the ID specified in the request.
         * @summary Remove a room
         * @param {number} id The room ID.
         * @param {DeleteRoomRequest} deleteRoomRequest The parameters for deleting a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room/
         */
        deleteRoom: async (id: number, deleteRoomRequest: DeleteRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Removes a logo from a room with the ID specified in the request.
         * @summary Remove a room logo
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-logo/
         */
        deleteRoomLogo: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Removes the tags from a room with the ID specified in the request.
         * @summary Remove the room tags
         * @param {number} id The room Id.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for managing tags.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-tags/
         */
        deleteRoomTags: async (id: number, batchTagsRequestDto?: BatchTagsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns a list of all the new items from a room with the ID specified in the request.
         * @summary Get the new room items
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNewRoomItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-room-items/
         */
        getNewRoomItems: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the public settings of the room template with the ID specified in the request.
         * @summary Get public settings
         * @param {number} id The room template ID.
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
         * Returns a list of all covers.
         * @summary Get covers
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
         * Returns the progress of creating a room from the template.
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
         * Returns the room index export.
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
         * Returns the room information.
         * @summary Get room information
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-info/
         */
        getRoomInfo: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the links of the room with the ID specified in the request.
         * @summary Get the room links
         * @param {number} id The room ID.
         * @param {LinkType} [type] The link type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-links/
         */
        getRoomLinks: async (id: number, type?: LinkType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns the access rights of a room with the ID specified in the request.
         * @summary Get the room access rights
         * @param {number} id The room ID.
         * @param {ShareFilterType} [filterType] The filter type of the access rights.
         * @param {number} [count] The number of items to be retrieved or processed.
         * @param {number} [startIndex] The starting index of the items to retrieve in a paginated request.
         * @param {string} [filterValue] The text filter value used for filtering room security information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-security-info/
         */
        getRoomSecurityInfo: async (id: number, filterType?: ShareFilterType, count?: number, startIndex?: number, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Returns a list of custom tags.
         * @summary Get the room tags
         * @param {number} [count] Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set.
         * @param {number} [startIndex] Represents the starting index from which the tags\&#39; information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins.
         * @param {string} [filterValue] Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information.
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
         * Returns the progress status of the room template creation process.
         * @summary Get status of room template creation
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
         * Returns the contents of the Rooms section by the parameters specified in the request.
         * @summary Get rooms
         * @param {Array<RoomType>} [type] The filter by room type.
         * @param {string} [subjectId] The filter by user ID.
         * @param {SearchArea} [searchArea] The room search area (Active, Archive, Any, Recent by links).
         * @param {boolean} [withoutTags] Specifies whether to search by tags or not.
         * @param {string} [tags] The tags in the serialized format.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ProviderFilter} [provider] The filter by provider name (None, Box, DropBox, GoogleDrive, kDrive, OneDrive, SharePoint, WebDav, Yandex, Storage).
         * @param {SubjectFilter} [subjectFilter] The filter by user (Owner - 0, Member - 1).
         * @param {QuotaFilter} [quotaFilter] The filter by quota (All - 0, Default - 1, Custom - 2).
         * @param {StorageFilter} [storageFilter] The filter by storage (None - 0, Internal - 1, ThirdParty - 2).
         * @param {number} [count] Specifies the maximum number of items to retrieve.
         * @param {number} [startIndex] The index from which to start retrieving the room content.
         * @param {string} [sortBy] Specifies the field by which the room content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text filter value used to refine search or query operations.
         * @param {number} [groupId] The group ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/
         */
        getRoomsFolder: async (type?: Array<RoomType>, subjectId?: string, searchArea?: SearchArea, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, provider?: ProviderFilter, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, storageFilter?: StorageFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, groupId?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (subjectFilter !== undefined) {
                localVarQueryParameter['subjectFilter'] = subjectFilter;
            }

            if (quotaFilter !== undefined) {
                localVarQueryParameter['quotaFilter'] = quotaFilter;
            }

            if (storageFilter !== undefined) {
                localVarQueryParameter['storageFilter'] = storageFilter;
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
         * Returns the room new items.
         * @summary Get the room new items
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
         * Returns the primary external link of the room with the ID specified in the request.
         * @summary Get the room primary external link
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-primary-external-link/
         */
        getRoomsPrimaryExternalLink: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Checks if a specific custom tag has linked items.
         * @summary Has tag links
         * @param {string} tagName2 
         * @param {string} [tagName] Represents the name of a tag
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
         * Pins a room with the ID specified in the request to the top of the list.
         * @summary Pin a room
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for pinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/pin-room/
         */
        pinRoom: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Reorders the room with ID specified in the request.
         * @summary Reorder the room
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for reorderRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reorder-room/
         */
        reorderRoom: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Resends the email invitations to a room with the ID specified in the request to the selected users.
         * @summary Resend the room invitations
         * @param {number} id The room ID.
         * @param {UserInvitation} userInvitation The user invitation parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resendEmailInvitations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-email-invitations/
         */
        resendEmailInvitations: async (id: number, userInvitation: UserInvitation, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Sets the public settings for the room template with the ID specified in the request.
         * @summary Set public settings
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
         * Sets the room external or invitation link with the ID specified in the request.
         * @summary Set the room external or invitation link
         * @param {number} id The room ID.
         * @param {RoomLinkRequest} roomLinkRequest The room link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-link/
         */
        setRoomLink: async (id: number, roomLinkRequest: RoomLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Sets the access rights to the room with the ID specified in the request.
         * @summary Set the room access rights
         * @param {number} id The room ID.
         * @param {RoomInvitationRequest} roomInvitationRequest The room invitation request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-security/
         */
        setRoomSecurity: async (id: number, roomInvitationRequest: RoomInvitationRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Starts the index export of a room with the ID specified in the request.
         * @summary Start the room index export
         * @param {number} id The room ID.
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
         * Terminates the room index export.
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
         * Moves a room with the ID specified in the request from the Archive section to the Rooms section.
         * @summary Unarchive a room
         * @param {number} id The room ID.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unarchiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unarchive-room/
         */
        unarchiveRoom: async (id: number, archiveRoomRequest?: ArchiveRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Unpins a room with the ID specified in the request from the top of the list.
         * @summary Unpin a room
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unpinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unpin-room/
         */
        unpinRoom: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Updates a room with the ID specified in the request.
         * @summary Update a room
         * @param {number} id The room ID.
         * @param {UpdateRoomRequest} updateRoomRequest The request parameters for updating a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/
         */
        updateRoom: async (id: number, updateRoomRequest: UpdateRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Updates the name of a custom tag.
         * @summary Update tag
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
         * Uploads a temporary image to create a room logo.
         * @summary Upload a room logo image
         * @param {Array<KeyValuePairStringStringValues>} [formCollection] The image data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-room-logo/
         */
        uploadRoomLogo: async (formCollection?: Array<KeyValuePairStringStringValues>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

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

            if (formCollection) {
                formCollection.forEach((element) => {
                    localVarFormParams.append('FormCollection', element as any);
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
 * RoomsApi - functional programming interface
 * @export
 */
export const RoomsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RoomsApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds the tags to a room with the ID specified in the request.
         * @summary Add the room tags
         * @param {number} id The room Id.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for managing tags.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-tags/
         */
        async addRoomTags(id: number, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addRoomTags(id, batchTagsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.addRoomTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Moves a room with the ID specified in the request to the Archive section.
         * @summary Archive a room
         * @param {number} id The room ID.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for archiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/archive-room/
         */
        async archiveRoom(id: number, archiveRoomRequest?: ArchiveRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.archiveRoom(id, archiveRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.archiveRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes a cover of a room with the ID specified in the request.
         * @summary Change the room cover
         * @param {number} id The room ID.
         * @param {CoverRequestDto} coverRequestDto The request parameters to change the room cover.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeRoomCover operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/
         */
        async changeRoomCover(id: number, coverRequestDto: CoverRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeRoomCover(id, coverRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.changeRoomCover']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a room in the Rooms section.
         * @summary Create a room
         * @param {CreateRoomRequestDto} [createRoomRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room/
         */
        async createRoom(createRoomRequestDto?: CreateRoomRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoom(createRoomRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.createRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a room in the Rooms section based on the template.
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
         * Creates a logo for a room with the ID specified in the request.
         * @summary Create a room logo
         * @param {number} id The room ID.
         * @param {LogoRequest} logoRequest The logo request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/
         */
        async createRoomLogo(id: number, logoRequest: LogoRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomLogo(id, logoRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.createRoomLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a custom room tag with the parameters specified in the request.
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
         * Starts creating the room template.
         * @summary Start creating room template
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
         * Creates a room in the Rooms section stored in a third-party storage.
         * @summary Create a third-party room
         * @param {string} id The ID of the folder in the third-party storage in which the contents of the room will be stored.
         * @param {CreateThirdPartyRoom} createThirdPartyRoom The third-party room information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-third-party/
         */
        async createRoomThirdParty(id: string, createThirdPartyRoom: CreateThirdPartyRoom, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomThirdParty(id, createThirdPartyRoom, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.createRoomThirdParty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a bunch of custom tags specified in the request.
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
         * Removes a room with the ID specified in the request.
         * @summary Remove a room
         * @param {number} id The room ID.
         * @param {DeleteRoomRequest} deleteRoomRequest The parameters for deleting a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room/
         */
        async deleteRoom(id: number, deleteRoomRequest: DeleteRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoom(id, deleteRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.deleteRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes a logo from a room with the ID specified in the request.
         * @summary Remove a room logo
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-logo/
         */
        async deleteRoomLogo(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoomLogo(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.deleteRoomLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes the tags from a room with the ID specified in the request.
         * @summary Remove the room tags
         * @param {number} id The room Id.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for managing tags.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-tags/
         */
        async deleteRoomTags(id: number, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoomTags(id, batchTagsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.deleteRoomTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the new items from a room with the ID specified in the request.
         * @summary Get the new room items
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNewRoomItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-room-items/
         */
        async getNewRoomItems(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewItemsFileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNewRoomItems(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getNewRoomItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the public settings of the room template with the ID specified in the request.
         * @summary Get public settings
         * @param {number} id The room template ID.
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
         * Returns a list of all covers.
         * @summary Get covers
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
         * Returns the progress of creating a room from the template.
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
         * Returns the room index export.
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
         * Returns the room information.
         * @summary Get room information
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-info/
         */
        async getRoomInfo(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomInfo(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the links of the room with the ID specified in the request.
         * @summary Get the room links
         * @param {number} id The room ID.
         * @param {LinkType} [type] The link type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-links/
         */
        async getRoomLinks(id: number, type?: LinkType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomLinks(id, type, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomLinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the access rights of a room with the ID specified in the request.
         * @summary Get the room access rights
         * @param {number} id The room ID.
         * @param {ShareFilterType} [filterType] The filter type of the access rights.
         * @param {number} [count] The number of items to be retrieved or processed.
         * @param {number} [startIndex] The starting index of the items to retrieve in a paginated request.
         * @param {string} [filterValue] The text filter value used for filtering room security information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-security-info/
         */
        async getRoomSecurityInfo(id: number, filterType?: ShareFilterType, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomSecurityInfo(id, filterType, count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of custom tags.
         * @summary Get the room tags
         * @param {number} [count] Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set.
         * @param {number} [startIndex] Represents the starting index from which the tags\&#39; information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins.
         * @param {string} [filterValue] Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomTagsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-tags-info/
         */
        async getRoomTagsInfo(count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomTagsInfo(count, startIndex, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomTagsInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the progress status of the room template creation process.
         * @summary Get status of room template creation
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
         * Returns the contents of the Rooms section by the parameters specified in the request.
         * @summary Get rooms
         * @param {Array<RoomType>} [type] The filter by room type.
         * @param {string} [subjectId] The filter by user ID.
         * @param {SearchArea} [searchArea] The room search area (Active, Archive, Any, Recent by links).
         * @param {boolean} [withoutTags] Specifies whether to search by tags or not.
         * @param {string} [tags] The tags in the serialized format.
         * @param {boolean} [excludeSubject] Specifies whether to exclude search by user or group ID.
         * @param {ProviderFilter} [provider] The filter by provider name (None, Box, DropBox, GoogleDrive, kDrive, OneDrive, SharePoint, WebDav, Yandex, Storage).
         * @param {SubjectFilter} [subjectFilter] The filter by user (Owner - 0, Member - 1).
         * @param {QuotaFilter} [quotaFilter] The filter by quota (All - 0, Default - 1, Custom - 2).
         * @param {StorageFilter} [storageFilter] The filter by storage (None - 0, Internal - 1, ThirdParty - 2).
         * @param {number} [count] Specifies the maximum number of items to retrieve.
         * @param {number} [startIndex] The index from which to start retrieving the room content.
         * @param {string} [sortBy] Specifies the field by which the room content should be sorted.
         * @param {SortOrder} [sortOrder] The order in which the results are sorted.
         * @param {string} [filterValue] The text filter value used to refine search or query operations.
         * @param {number} [groupId] The group ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/
         */
        async getRoomsFolder(type?: Array<RoomType>, subjectId?: string, searchArea?: SearchArea, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, provider?: ProviderFilter, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, storageFilter?: StorageFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, groupId?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomsFolder(type, subjectId, searchArea, withoutTags, tags, excludeSubject, provider, subjectFilter, quotaFilter, storageFilter, count, startIndex, sortBy, sortOrder, filterValue, groupId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomsFolder']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the room new items.
         * @summary Get the room new items
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
         * Returns the primary external link of the room with the ID specified in the request.
         * @summary Get the room primary external link
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-primary-external-link/
         */
        async getRoomsPrimaryExternalLink(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomsPrimaryExternalLink(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.getRoomsPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Checks if a specific custom tag has linked items.
         * @summary Has tag links
         * @param {string} tagName2 
         * @param {string} [tagName] Represents the name of a tag
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
         * Pins a room with the ID specified in the request to the top of the list.
         * @summary Pin a room
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for pinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/pin-room/
         */
        async pinRoom(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pinRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.pinRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reorders the room with ID specified in the request.
         * @summary Reorder the room
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for reorderRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reorder-room/
         */
        async reorderRoom(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reorderRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.reorderRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resends the email invitations to a room with the ID specified in the request to the selected users.
         * @summary Resend the room invitations
         * @param {number} id The room ID.
         * @param {UserInvitation} userInvitation The user invitation parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resendEmailInvitations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-email-invitations/
         */
        async resendEmailInvitations(id: number, userInvitation: UserInvitation, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendEmailInvitations(id, userInvitation, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.resendEmailInvitations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the public settings for the room template with the ID specified in the request.
         * @summary Set public settings
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
         * Sets the room external or invitation link with the ID specified in the request.
         * @summary Set the room external or invitation link
         * @param {number} id The room ID.
         * @param {RoomLinkRequest} roomLinkRequest The room link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-link/
         */
        async setRoomLink(id: number, roomLinkRequest: RoomLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRoomLink(id, roomLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.setRoomLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the access rights to the room with the ID specified in the request.
         * @summary Set the room access rights
         * @param {number} id The room ID.
         * @param {RoomInvitationRequest} roomInvitationRequest The room invitation request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-security/
         */
        async setRoomSecurity(id: number, roomInvitationRequest: RoomInvitationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomSecurityWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRoomSecurity(id, roomInvitationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.setRoomSecurity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the index export of a room with the ID specified in the request.
         * @summary Start the room index export
         * @param {number} id The room ID.
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
         * Terminates the room index export.
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
         * Moves a room with the ID specified in the request from the Archive section to the Rooms section.
         * @summary Unarchive a room
         * @param {number} id The room ID.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unarchiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unarchive-room/
         */
        async unarchiveRoom(id: number, archiveRoomRequest?: ArchiveRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unarchiveRoom(id, archiveRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.unarchiveRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Unpins a room with the ID specified in the request from the top of the list.
         * @summary Unpin a room
         * @param {number} id The room ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unpinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unpin-room/
         */
        async unpinRoom(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unpinRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.unpinRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a room with the ID specified in the request.
         * @summary Update a room
         * @param {number} id The room ID.
         * @param {UpdateRoomRequest} updateRoomRequest The request parameters for updating a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/
         */
        async updateRoom(id: number, updateRoomRequest: UpdateRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRoom(id, updateRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsApi.updateRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the name of a custom tag.
         * @summary Update tag
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
         * Uploads a temporary image to create a room logo.
         * @summary Upload a room logo image
         * @param {Array<KeyValuePairStringStringValues>} [formCollection] The image data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-room-logo/
         */
        async uploadRoomLogo(formCollection?: Array<KeyValuePairStringStringValues>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadRoomLogo(formCollection, options);
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
         * Adds the tags to a room with the ID specified in the request.
         * @summary Add the room tags
         * @param {RoomsApiAddRoomTagsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-tags/
         * @throws {RequiredError}
         */
        addRoomTags(requestParameters: RoomsApiAddRoomTagsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.addRoomTags(requestParameters.id, requestParameters.batchTagsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Moves a room with the ID specified in the request to the Archive section.
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
         * Changes a cover of a room with the ID specified in the request.
         * @summary Change the room cover
         * @param {RoomsApiChangeRoomCoverRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeRoomCover operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/
         * @throws {RequiredError}
         */
        changeRoomCover(requestParameters: RoomsApiChangeRoomCoverRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.changeRoomCover(requestParameters.id, requestParameters.coverRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a room in the Rooms section.
         * @summary Create a room
         * @param {RoomsApiCreateRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room/
         * @throws {RequiredError}
         */
        createRoom(requestParameters: RoomsApiCreateRoomRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.createRoom(requestParameters.createRoomRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a room in the Rooms section based on the template.
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
         * Creates a logo for a room with the ID specified in the request.
         * @summary Create a room logo
         * @param {RoomsApiCreateRoomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/
         * @throws {RequiredError}
         */
        createRoomLogo(requestParameters: RoomsApiCreateRoomLogoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.createRoomLogo(requestParameters.id, requestParameters.logoRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a custom room tag with the parameters specified in the request.
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
         * Starts creating the room template.
         * @summary Start creating room template
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
         * Creates a room in the Rooms section stored in a third-party storage.
         * @summary Create a third-party room
         * @param {RoomsApiCreateRoomThirdPartyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-third-party/
         * @throws {RequiredError}
         */
        createRoomThirdParty(requestParameters: RoomsApiCreateRoomThirdPartyRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderStringWrapper> {
            return localVarFp.createRoomThirdParty(requestParameters.id, requestParameters.createThirdPartyRoom, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a bunch of custom tags specified in the request.
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
         * Removes a room with the ID specified in the request.
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
         * Removes a logo from a room with the ID specified in the request.
         * @summary Remove a room logo
         * @param {RoomsApiDeleteRoomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-logo/
         * @throws {RequiredError}
         */
        deleteRoomLogo(requestParameters: RoomsApiDeleteRoomLogoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.deleteRoomLogo(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the tags from a room with the ID specified in the request.
         * @summary Remove the room tags
         * @param {RoomsApiDeleteRoomTagsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-tags/
         * @throws {RequiredError}
         */
        deleteRoomTags(requestParameters: RoomsApiDeleteRoomTagsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.deleteRoomTags(requestParameters.id, requestParameters.batchTagsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the new items from a room with the ID specified in the request.
         * @summary Get the new room items
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
         * Returns the public settings of the room template with the ID specified in the request.
         * @summary Get public settings
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
         * Returns a list of all covers.
         * @summary Get covers
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomCovers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-covers/
         * @throws {RequiredError}
         */
        getRoomCovers(options?: RawAxiosRequestConfig): AxiosPromise<CoversResultArrayWrapper> {
            return localVarFp.getRoomCovers(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the progress of creating a room from the template.
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
         * Returns the room index export.
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
         * Returns the room information.
         * @summary Get room information
         * @param {RoomsApiGetRoomInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-info/
         * @throws {RequiredError}
         */
        getRoomInfo(requestParameters: RoomsApiGetRoomInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.getRoomInfo(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the links of the room with the ID specified in the request.
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
         * Returns the access rights of a room with the ID specified in the request.
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
         * Returns a list of custom tags.
         * @summary Get the room tags
         * @param {RoomsApiGetRoomTagsInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomTagsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-tags-info/
         * @throws {RequiredError}
         */
        getRoomTagsInfo(requestParameters: RoomsApiGetRoomTagsInfoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.getRoomTagsInfo(requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the progress status of the room template creation process.
         * @summary Get status of room template creation
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomTemplateCreatingStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-template-creating-status/
         * @throws {RequiredError}
         */
        getRoomTemplateCreatingStatus(options?: RawAxiosRequestConfig): AxiosPromise<RoomTemplateStatusWrapper> {
            return localVarFp.getRoomTemplateCreatingStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the contents of the Rooms section by the parameters specified in the request.
         * @summary Get rooms
         * @param {RoomsApiGetRoomsFolderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/
         * @throws {RequiredError}
         */
        getRoomsFolder(requestParameters: RoomsApiGetRoomsFolderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getRoomsFolder(requestParameters.type, requestParameters.subjectId, requestParameters.searchArea, requestParameters.withoutTags, requestParameters.tags, requestParameters.excludeSubject, requestParameters.provider, requestParameters.subjectFilter, requestParameters.quotaFilter, requestParameters.storageFilter, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, requestParameters.groupId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the room new items.
         * @summary Get the room new items
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomsNewItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-new-items/
         * @throws {RequiredError}
         */
        getRoomsNewItems(options?: RawAxiosRequestConfig): AxiosPromise<NewItemsRoomNewItemsArrayWrapper> {
            return localVarFp.getRoomsNewItems(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the primary external link of the room with the ID specified in the request.
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
         * Checks if a specific custom tag has linked items.
         * @summary Has tag links
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
         * Pins a room with the ID specified in the request to the top of the list.
         * @summary Pin a room
         * @param {RoomsApiPinRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for pinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/pin-room/
         * @throws {RequiredError}
         */
        pinRoom(requestParameters: RoomsApiPinRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.pinRoom(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Reorders the room with ID specified in the request.
         * @summary Reorder the room
         * @param {RoomsApiReorderRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for reorderRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reorder-room/
         * @throws {RequiredError}
         */
        reorderRoom(requestParameters: RoomsApiReorderRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.reorderRoom(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Resends the email invitations to a room with the ID specified in the request to the selected users.
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
         * Sets the public settings for the room template with the ID specified in the request.
         * @summary Set public settings
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
         * Sets the room external or invitation link with the ID specified in the request.
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
         * Sets the access rights to the room with the ID specified in the request.
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
         * Starts the index export of a room with the ID specified in the request.
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
         * Terminates the room index export.
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
         * Moves a room with the ID specified in the request from the Archive section to the Rooms section.
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
         * Unpins a room with the ID specified in the request from the top of the list.
         * @summary Unpin a room
         * @param {RoomsApiUnpinRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for unpinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unpin-room/
         * @throws {RequiredError}
         */
        unpinRoom(requestParameters: RoomsApiUnpinRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.unpinRoom(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a room with the ID specified in the request.
         * @summary Update a room
         * @param {RoomsApiUpdateRoomRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/
         * @throws {RequiredError}
         */
        updateRoom(requestParameters: RoomsApiUpdateRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.updateRoom(requestParameters.id, requestParameters.updateRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the name of a custom tag.
         * @summary Update tag
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
         * Uploads a temporary image to create a room logo.
         * @summary Upload a room logo image
         * @param {RoomsApiUploadRoomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-room-logo/
         * @throws {RequiredError}
         */
        uploadRoomLogo(requestParameters: RoomsApiUploadRoomLogoRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<UploadResultWrapper> {
            return localVarFp.uploadRoomLogo(requestParameters.formCollection, options).then((request) => request(axios, basePath));
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
     * The room Id.
     * @type {number}
     * @memberof RoomsApiAddRoomTags
     */
    readonly id: number

    /**
     * The parameters for managing tags.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiArchiveRoom
     */
    readonly id: number

    /**
     * The parameters for archiving a room.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiChangeRoomCover
     */
    readonly id: number

    /**
     * The request parameters to change the room cover.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiCreateRoomLogo
     */
    readonly id: number

    /**
     * The logo request parameters.
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
     * The ID of the folder in the third-party storage in which the contents of the room will be stored.
     * @type {string}
     * @memberof RoomsApiCreateRoomThirdParty
     */
    readonly id: string

    /**
     * The third-party room information.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiDeleteRoom
     */
    readonly id: number

    /**
     * The parameters for deleting a room.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiDeleteRoomLogo
     */
    readonly id: number
}

/**
 * Request parameters for deleteRoomTags operation in RoomsApi.
 * @export
 * @interface RoomsApiDeleteRoomTagsRequest
 */
export interface RoomsApiDeleteRoomTagsRequest {
    /**
     * The room Id.
     * @type {number}
     * @memberof RoomsApiDeleteRoomTags
     */
    readonly id: number

    /**
     * The parameters for managing tags.
     * @type {BatchTagsRequestDto}
     * @memberof RoomsApiDeleteRoomTags
     */
    readonly batchTagsRequestDto?: BatchTagsRequestDto
}

/**
 * Request parameters for getNewRoomItems operation in RoomsApi.
 * @export
 * @interface RoomsApiGetNewRoomItemsRequest
 */
export interface RoomsApiGetNewRoomItemsRequest {
    /**
     * The room ID.
     * @type {number}
     * @memberof RoomsApiGetNewRoomItems
     */
    readonly id: number
}

/**
 * Request parameters for getPublicSettings operation in RoomsApi.
 * @export
 * @interface RoomsApiGetPublicSettingsRequest
 */
export interface RoomsApiGetPublicSettingsRequest {
    /**
     * The room template ID.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiGetRoomInfo
     */
    readonly id: number
}

/**
 * Request parameters for getRoomLinks operation in RoomsApi.
 * @export
 * @interface RoomsApiGetRoomLinksRequest
 */
export interface RoomsApiGetRoomLinksRequest {
    /**
     * The room ID.
     * @type {number}
     * @memberof RoomsApiGetRoomLinks
     */
    readonly id: number

    /**
     * The link type.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiGetRoomSecurityInfo
     */
    readonly id: number

    /**
     * The filter type of the access rights.
     * @type {ShareFilterType}
     * @memberof RoomsApiGetRoomSecurityInfo
     */
    readonly filterType?: ShareFilterType

    /**
     * The number of items to be retrieved or processed.
     * @type {number}
     * @memberof RoomsApiGetRoomSecurityInfo
     */
    readonly count?: number

    /**
     * The starting index of the items to retrieve in a paginated request.
     * @type {number}
     * @memberof RoomsApiGetRoomSecurityInfo
     */
    readonly startIndex?: number

    /**
     * The text filter value used for filtering room security information.
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
     * Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set.
     * @type {number}
     * @memberof RoomsApiGetRoomTagsInfo
     */
    readonly count?: number

    /**
     * Represents the starting index from which the tags\&#39; information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins.
     * @type {number}
     * @memberof RoomsApiGetRoomTagsInfo
     */
    readonly startIndex?: number

    /**
     * Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information.
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
     * The filter by room type.
     * @type {Array<RoomType>}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly type?: Array<RoomType>

    /**
     * The filter by user ID.
     * @type {string}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly subjectId?: string

    /**
     * The room search area (Active, Archive, Any, Recent by links).
     * @type {SearchArea}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly searchArea?: SearchArea

    /**
     * Specifies whether to search by tags or not.
     * @type {boolean}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly withoutTags?: boolean

    /**
     * The tags in the serialized format.
     * @type {string}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly tags?: string

    /**
     * Specifies whether to exclude search by user or group ID.
     * @type {boolean}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly excludeSubject?: boolean

    /**
     * The filter by provider name (None, Box, DropBox, GoogleDrive, kDrive, OneDrive, SharePoint, WebDav, Yandex, Storage).
     * @type {ProviderFilter}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly provider?: ProviderFilter

    /**
     * The filter by user (Owner - 0, Member - 1).
     * @type {SubjectFilter}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly subjectFilter?: SubjectFilter

    /**
     * The filter by quota (All - 0, Default - 1, Custom - 2).
     * @type {QuotaFilter}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly quotaFilter?: QuotaFilter

    /**
     * The filter by storage (None - 0, Internal - 1, ThirdParty - 2).
     * @type {StorageFilter}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly storageFilter?: StorageFilter

    /**
     * Specifies the maximum number of items to retrieve.
     * @type {number}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly count?: number

    /**
     * The index from which to start retrieving the room content.
     * @type {number}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly startIndex?: number

    /**
     * Specifies the field by which the room content should be sorted.
     * @type {string}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly sortBy?: string

    /**
     * The order in which the results are sorted.
     * @type {SortOrder}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly sortOrder?: SortOrder

    /**
     * The text filter value used to refine search or query operations.
     * @type {string}
     * @memberof RoomsApiGetRoomsFolder
     */
    readonly filterValue?: string

    /**
     * The group ID
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiGetRoomsPrimaryExternalLink
     */
    readonly id: number
}

/**
 * Request parameters for hasTagLinks operation in RoomsApi.
 * @export
 * @interface RoomsApiHasTagLinksRequest
 */
export interface RoomsApiHasTagLinksRequest {
    /**
     * 
     * @type {string}
     * @memberof RoomsApiHasTagLinks
     */
    readonly tagName2: string

    /**
     * Represents the name of a tag
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiPinRoom
     */
    readonly id: number
}

/**
 * Request parameters for reorderRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiReorderRoomRequest
 */
export interface RoomsApiReorderRoomRequest {
    /**
     * The room ID.
     * @type {number}
     * @memberof RoomsApiReorderRoom
     */
    readonly id: number
}

/**
 * Request parameters for resendEmailInvitations operation in RoomsApi.
 * @export
 * @interface RoomsApiResendEmailInvitationsRequest
 */
export interface RoomsApiResendEmailInvitationsRequest {
    /**
     * The room ID.
     * @type {number}
     * @memberof RoomsApiResendEmailInvitations
     */
    readonly id: number

    /**
     * The user invitation parameters.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiSetRoomLink
     */
    readonly id: number

    /**
     * The room link parameters.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiSetRoomSecurity
     */
    readonly id: number

    /**
     * The room invitation request.
     * @type {RoomInvitationRequest}
     * @memberof RoomsApiSetRoomSecurity
     */
    readonly roomInvitationRequest: RoomInvitationRequest
}

/**
 * Request parameters for startRoomIndexExport operation in RoomsApi.
 * @export
 * @interface RoomsApiStartRoomIndexExportRequest
 */
export interface RoomsApiStartRoomIndexExportRequest {
    /**
     * The room ID.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiUnarchiveRoom
     */
    readonly id: number

    /**
     * The parameters for archiving a room.
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
     * The room ID.
     * @type {number}
     * @memberof RoomsApiUnpinRoom
     */
    readonly id: number
}

/**
 * Request parameters for updateRoom operation in RoomsApi.
 * @export
 * @interface RoomsApiUpdateRoomRequest
 */
export interface RoomsApiUpdateRoomRequest {
    /**
     * The room ID.
     * @type {number}
     * @memberof RoomsApiUpdateRoom
     */
    readonly id: number

    /**
     * The request parameters for updating a room.
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
     * @type {Array<KeyValuePairStringStringValues>}
     * @memberof RoomsApiUploadRoomLogo
     */
    readonly formCollection?: Array<KeyValuePairStringStringValues>
}

/**
 * RoomsApi - object-oriented interface
 * @export
 * @class RoomsApi
 * @extends {BaseAPI}
 */
export class RoomsApi extends BaseAPI {
    /**
     * Adds the tags to a room with the ID specified in the request.
     * @summary Add the room tags
     * @param {RoomsApiAddRoomTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public addRoomTags(requestParameters: RoomsApiAddRoomTagsRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).addRoomTags(requestParameters.id, requestParameters.batchTagsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves a room with the ID specified in the request to the Archive section.
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
     * Changes a cover of a room with the ID specified in the request.
     * @summary Change the room cover
     * @param {RoomsApiChangeRoomCoverRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public changeRoomCover(requestParameters: RoomsApiChangeRoomCoverRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).changeRoomCover(requestParameters.id, requestParameters.coverRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a room in the Rooms section.
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
     * Creates a room in the Rooms section based on the template.
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
     * Creates a logo for a room with the ID specified in the request.
     * @summary Create a room logo
     * @param {RoomsApiCreateRoomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createRoomLogo(requestParameters: RoomsApiCreateRoomLogoRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).createRoomLogo(requestParameters.id, requestParameters.logoRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a custom room tag with the parameters specified in the request.
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
     * Starts creating the room template.
     * @summary Start creating room template
     * @param {RoomsApiCreateRoomTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createRoomTemplate(requestParameters: RoomsApiCreateRoomTemplateRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).createRoomTemplate(requestParameters.roomTemplateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a room in the Rooms section stored in a third-party storage.
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
     * Deletes a bunch of custom tags specified in the request.
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
     * Removes a room with the ID specified in the request.
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
     * Removes a logo from a room with the ID specified in the request.
     * @summary Remove a room logo
     * @param {RoomsApiDeleteRoomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public deleteRoomLogo(requestParameters: RoomsApiDeleteRoomLogoRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).deleteRoomLogo(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the tags from a room with the ID specified in the request.
     * @summary Remove the room tags
     * @param {RoomsApiDeleteRoomTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public deleteRoomTags(requestParameters: RoomsApiDeleteRoomTagsRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).deleteRoomTags(requestParameters.id, requestParameters.batchTagsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the new items from a room with the ID specified in the request.
     * @summary Get the new room items
     * @param {RoomsApiGetNewRoomItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getNewRoomItems(requestParameters: RoomsApiGetNewRoomItemsRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getNewRoomItems(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the public settings of the room template with the ID specified in the request.
     * @summary Get public settings
     * @param {RoomsApiGetPublicSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getPublicSettings(requestParameters: RoomsApiGetPublicSettingsRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getPublicSettings(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all covers.
     * @summary Get covers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomCovers(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomCovers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the progress of creating a room from the template.
     * @summary Get the room creation progress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomCreatingStatus(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomCreatingStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the room index export.
     * @summary Get the room index export
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomIndexExport(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomIndexExport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the room information.
     * @summary Get room information
     * @param {RoomsApiGetRoomInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomInfo(requestParameters: RoomsApiGetRoomInfoRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomInfo(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the links of the room with the ID specified in the request.
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
     * Returns the access rights of a room with the ID specified in the request.
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
     * Returns a list of custom tags.
     * @summary Get the room tags
     * @param {RoomsApiGetRoomTagsInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomTagsInfo(requestParameters: RoomsApiGetRoomTagsInfoRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomTagsInfo(requestParameters.count, requestParameters.startIndex, requestParameters.filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the progress status of the room template creation process.
     * @summary Get status of room template creation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomTemplateCreatingStatus(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomTemplateCreatingStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the contents of the Rooms section by the parameters specified in the request.
     * @summary Get rooms
     * @param {RoomsApiGetRoomsFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomsFolder(requestParameters: RoomsApiGetRoomsFolderRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomsFolder(requestParameters.type, requestParameters.subjectId, requestParameters.searchArea, requestParameters.withoutTags, requestParameters.tags, requestParameters.excludeSubject, requestParameters.provider, requestParameters.subjectFilter, requestParameters.quotaFilter, requestParameters.storageFilter, requestParameters.count, requestParameters.startIndex, requestParameters.sortBy, requestParameters.sortOrder, requestParameters.filterValue, requestParameters.groupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the room new items.
     * @summary Get the room new items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getRoomsNewItems(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getRoomsNewItems(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the primary external link of the room with the ID specified in the request.
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
     * Checks if a specific custom tag has linked items.
     * @summary Has tag links
     * @param {RoomsApiHasTagLinksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public hasTagLinks(requestParameters: RoomsApiHasTagLinksRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).hasTagLinks(requestParameters.tagName2, requestParameters.tagName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Pins a room with the ID specified in the request to the top of the list.
     * @summary Pin a room
     * @param {RoomsApiPinRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public pinRoom(requestParameters: RoomsApiPinRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).pinRoom(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reorders the room with ID specified in the request.
     * @summary Reorder the room
     * @param {RoomsApiReorderRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public reorderRoom(requestParameters: RoomsApiReorderRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).reorderRoom(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resends the email invitations to a room with the ID specified in the request to the selected users.
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
     * Sets the public settings for the room template with the ID specified in the request.
     * @summary Set public settings
     * @param {RoomsApiSetPublicSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public setPublicSettings(requestParameters: RoomsApiSetPublicSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).setPublicSettings(requestParameters.setPublicDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the room external or invitation link with the ID specified in the request.
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
     * Sets the access rights to the room with the ID specified in the request.
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
     * Starts the index export of a room with the ID specified in the request.
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
     * Terminates the room index export.
     * @summary Terminate the room index export
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public terminateRoomIndexExport(options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).terminateRoomIndexExport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves a room with the ID specified in the request from the Archive section to the Rooms section.
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
     * Unpins a room with the ID specified in the request from the top of the list.
     * @summary Unpin a room
     * @param {RoomsApiUnpinRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public unpinRoom(requestParameters: RoomsApiUnpinRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).unpinRoom(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a room with the ID specified in the request.
     * @summary Update a room
     * @param {RoomsApiUpdateRoomRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public updateRoom(requestParameters: RoomsApiUpdateRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).updateRoom(requestParameters.id, requestParameters.updateRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the name of a custom tag.
     * @summary Update tag
     * @param {RoomsApiUpdateRoomTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public updateRoomTag(requestParameters: RoomsApiUpdateRoomTagRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).updateRoomTag(requestParameters.updateTagRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a temporary image to create a room logo.
     * @summary Upload a room logo image
     * @param {RoomsApiUploadRoomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public uploadRoomLogo(requestParameters: RoomsApiUploadRoomLogoRequest = {}, options?: RawAxiosRequestConfig) {
        return RoomsApiFp(this.configuration).uploadRoomLogo(requestParameters.formCollection, options).then((request) => request(this.axios, this.basePath));
    }
}

