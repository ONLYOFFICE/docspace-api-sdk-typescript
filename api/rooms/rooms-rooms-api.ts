/**
 *
 * (c) Copyright Ascensio System SIA 2025
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
import type { ObjectWrapper } from '../../models';
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
import type { SubjectFilter } from '../../models';
// @ts-ignore
import type { UpdateRoomRequest } from '../../models';
// @ts-ignore
import type { UploadResultWrapper } from '../../models';
// @ts-ignore
import type { UserInvitation } from '../../models';
/**
 * RoomsRoomsApi - axios parameter creator
 * @export
 */
export const RoomsRoomsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds the tags to a room with the ID specified in the request.
         * @summary Add the room tags
         * @param {number} id The room Id.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
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
         * Moves a room with the ID specified in the request to the \"Archive\" section.
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
         * @param {CoverRequestDto} [coverRequestDto] The request parameters to change the room cover.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeRoomCover operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/
         */
        changeRoomCover: async (id: number, coverRequestDto?: CoverRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('changeRoomCover', 'id', id)
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
         * Creates a room in the \"Rooms\" section.
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
         * Creates a room in the \"Rooms\" section based on the template.
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
         * @param {LogoRequest} [logoRequest] The logo request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/
         */
        createRoomLogo: async (id: number, logoRequest?: LogoRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createRoomLogo', 'id', id)
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
         * Creates a custom tag with the parameters specified in the request.
         * @summary Create a tag
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
         * Creates a room in the \"Rooms\" section stored in a third-party storage.
         * @summary Create a third-party room
         * @param {string} id The ID of the folder in the third-party storage in which the contents of the room will be stored.
         * @param {CreateThirdPartyRoom} [createThirdPartyRoom] The third-party room information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-third-party/
         */
        createRoomThirdParty: async (id: string, createThirdPartyRoom?: CreateThirdPartyRoom, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createRoomThirdParty', 'id', id)
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
         * @summary Delete tags
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
         * @param {DeleteRoomRequest} [deleteRoomRequest] The parameters for deleting a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room/
         */
        deleteRoom: async (id: number, deleteRoomRequest?: DeleteRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRoom', 'id', id)
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
         * @param {number} id The room ID of the request.
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
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
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
         * @param {number} id The room ID of the request.
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
         * @param {number} id The room ID of the request.
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
         * @summary Get tags
         * @param {number} [count] Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set.
         * @param {number} [startIndex] Represents the starting index from which the tags\&#39; information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins.
         * @param {string} [filterValue] Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information.
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomTagsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-tags-info/
         */
        getRoomTagsInfo: async (count?: number, startIndex?: number, filterValue?: string, fields?: string | null, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
         * Returns the contents of the \"Rooms\" section by the parameters specified in the request.
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
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/
         */
        getRoomsFolder: async (type?: Array<RoomType>, subjectId?: string, searchArea?: SearchArea, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, provider?: ProviderFilter, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, storageFilter?: StorageFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, fields?: string | null, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
                localVarQueryParameter['type'] = type.join(COLLECTION_FORMATS.csv);
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

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
         * @param {number} id The room ID of the request.
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
         * Pins a room with the ID specified in the request to the top of the list.
         * @summary Pin a room
         * @param {number} id The room ID of the request.
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
         * @param {number} id The room ID of the request.
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
         * @param {UserInvitation} [userInvitation] The user invitation parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resendEmailInvitations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-email-invitations/
         */
        resendEmailInvitations: async (id: number, userInvitation?: UserInvitation, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('resendEmailInvitations', 'id', id)
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
         * @param {RoomLinkRequest} [roomLinkRequest] The room link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-link/
         */
        setRoomLink: async (id: number, roomLinkRequest?: RoomLinkRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setRoomLink', 'id', id)
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
         * @param {RoomInvitationRequest} [roomInvitationRequest] The room invitation request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-security/
         */
        setRoomSecurity: async (id: number, roomInvitationRequest?: RoomInvitationRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setRoomSecurity', 'id', id)
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
         * @param {number} id The room ID of the request.
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
         * Moves a room with the ID specified in the request from the \"Archive\" section to the \"Rooms\" section.
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
         * @param {number} id The room ID of the request.
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
         * @param {UpdateRoomRequest} [updateRoomRequest] The request parameters for updating a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/
         */
        updateRoom: async (id: number, updateRoomRequest?: UpdateRoomRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRoom', 'id', id)
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
 * RoomsRoomsApi - functional programming interface
 * @export
 */
export const RoomsRoomsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RoomsRoomsApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds the tags to a room with the ID specified in the request.
         * @summary Add the room tags
         * @param {number} id The room Id.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-tags/
         */
        async addRoomTags(id: number, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addRoomTags(id, batchTagsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.addRoomTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Moves a room with the ID specified in the request to the \"Archive\" section.
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.archiveRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Changes a cover of a room with the ID specified in the request.
         * @summary Change the room cover
         * @param {number} id The room ID.
         * @param {CoverRequestDto} [coverRequestDto] The request parameters to change the room cover.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeRoomCover operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/
         */
        async changeRoomCover(id: number, coverRequestDto?: CoverRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeRoomCover(id, coverRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.changeRoomCover']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a room in the \"Rooms\" section.
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.createRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a room in the \"Rooms\" section based on the template.
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.createRoomFromTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a logo for a room with the ID specified in the request.
         * @summary Create a room logo
         * @param {number} id The room ID.
         * @param {LogoRequest} [logoRequest] The logo request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/
         */
        async createRoomLogo(id: number, logoRequest?: LogoRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomLogo(id, logoRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.createRoomLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a custom tag with the parameters specified in the request.
         * @summary Create a tag
         * @param {CreateTagRequestDto} [createTagRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-tag/
         */
        async createRoomTag(createTagRequestDto?: CreateTagRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomTag(createTagRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.createRoomTag']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.createRoomTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a room in the \"Rooms\" section stored in a third-party storage.
         * @summary Create a third-party room
         * @param {string} id The ID of the folder in the third-party storage in which the contents of the room will be stored.
         * @param {CreateThirdPartyRoom} [createThirdPartyRoom] The third-party room information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createRoomThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-third-party/
         */
        async createRoomThirdParty(id: string, createThirdPartyRoom?: CreateThirdPartyRoom, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderStringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoomThirdParty(id, createThirdPartyRoom, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.createRoomThirdParty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes a bunch of custom tags specified in the request.
         * @summary Delete tags
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteCustomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-custom-tags/
         */
        async deleteCustomTags(batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomTags(batchTagsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.deleteCustomTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes a room with the ID specified in the request.
         * @summary Remove a room
         * @param {number} id The room ID.
         * @param {DeleteRoomRequest} [deleteRoomRequest] The parameters for deleting a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room/
         */
        async deleteRoom(id: number, deleteRoomRequest?: DeleteRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileOperationWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoom(id, deleteRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.deleteRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes a logo from a room with the ID specified in the request.
         * @summary Remove a room logo
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-logo/
         */
        async deleteRoomLogo(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoomLogo(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.deleteRoomLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes the tags from a room with the ID specified in the request.
         * @summary Remove the room tags
         * @param {number} id The room Id.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-tags/
         */
        async deleteRoomTags(id: number, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoomTags(id, batchTagsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.deleteRoomTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the new items from a room with the ID specified in the request.
         * @summary Get the new room items
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getNewRoomItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-room-items/
         */
        async getNewRoomItems(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NewItemsFileEntryBaseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNewRoomItems(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getNewRoomItems']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getPublicSettings']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomCovers']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomCreatingStatus']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomIndexExport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the room information.
         * @summary Get room information
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-info/
         */
        async getRoomInfo(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomInfo(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomInfo']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomLinks']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomSecurityInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of custom tags.
         * @summary Get tags
         * @param {number} [count] Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set.
         * @param {number} [startIndex] Represents the starting index from which the tags\&#39; information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins.
         * @param {string} [filterValue] Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information.
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomTagsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-tags-info/
         */
        async getRoomTagsInfo(count?: number, startIndex?: number, filterValue?: string, fields?: string | null, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomTagsInfo(count, startIndex, filterValue, fields, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomTagsInfo']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomTemplateCreatingStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the contents of the \"Rooms\" section by the parameters specified in the request.
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
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/
         */
        async getRoomsFolder(type?: Array<RoomType>, subjectId?: string, searchArea?: SearchArea, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, provider?: ProviderFilter, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, storageFilter?: StorageFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, fields?: string | null, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderContentIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomsFolder(type, subjectId, searchArea, withoutTags, tags, excludeSubject, provider, subjectFilter, quotaFilter, storageFilter, count, startIndex, sortBy, sortOrder, filterValue, fields, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomsFolder']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomsNewItems']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the primary external link of the room with the ID specified in the request.
         * @summary Get the room primary external link
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomsPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-primary-external-link/
         */
        async getRoomsPrimaryExternalLink(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomsPrimaryExternalLink(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.getRoomsPrimaryExternalLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Pins a room with the ID specified in the request to the top of the list.
         * @summary Pin a room
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for pinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/pin-room/
         */
        async pinRoom(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pinRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.pinRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reorders the room with ID specified in the request.
         * @summary Reorder the room
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for reorderRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reorder-room/
         */
        async reorderRoom(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reorderRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.reorderRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Resends the email invitations to a room with the ID specified in the request to the selected users.
         * @summary Resend the room invitations
         * @param {number} id The room ID.
         * @param {UserInvitation} [userInvitation] The user invitation parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resendEmailInvitations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-email-invitations/
         */
        async resendEmailInvitations(id: number, userInvitation?: UserInvitation, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendEmailInvitations(id, userInvitation, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.resendEmailInvitations']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.setPublicSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the room external or invitation link with the ID specified in the request.
         * @summary Set the room external or invitation link
         * @param {number} id The room ID.
         * @param {RoomLinkRequest} [roomLinkRequest] The room link parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-link/
         */
        async setRoomLink(id: number, roomLinkRequest?: RoomLinkRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRoomLink(id, roomLinkRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.setRoomLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the access rights to the room with the ID specified in the request.
         * @summary Set the room access rights
         * @param {number} id The room ID.
         * @param {RoomInvitationRequest} [roomInvitationRequest] The room invitation request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setRoomSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-security/
         */
        async setRoomSecurity(id: number, roomInvitationRequest?: RoomInvitationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomSecurityWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setRoomSecurity(id, roomInvitationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.setRoomSecurity']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Starts the index export of a room with the ID specified in the request.
         * @summary Start the room index export
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for startRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-room-index-export/
         */
        async startRoomIndexExport(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startRoomIndexExport(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.startRoomIndexExport']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.terminateRoomIndexExport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Moves a room with the ID specified in the request from the \"Archive\" section to the \"Rooms\" section.
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.unarchiveRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Unpins a room with the ID specified in the request from the top of the list.
         * @summary Unpin a room
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for unpinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unpin-room/
         */
        async unpinRoom(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unpinRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.unpinRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates a room with the ID specified in the request.
         * @summary Update a room
         * @param {number} id The room ID.
         * @param {UpdateRoomRequest} [updateRoomRequest] The request parameters for updating a room.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/
         */
        async updateRoom(id: number, updateRoomRequest?: UpdateRoomRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FolderIntegerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRoom(id, updateRoomRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.updateRoom']?.[localVarOperationServerIndex]?.url;
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
            const localVarOperationServerBasePath = operationServerMap['RoomsRoomsApi.uploadRoomLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RoomsRoomsApi - factory interface
 * @export
 */
export const RoomsRoomsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RoomsRoomsApiFp(configuration)
    return {
        /**
         * Adds the tags to a room with the ID specified in the request.
         * @summary Add the room tags
         * @param {number} id The room Id.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
         * @param {*} [options] Override http request option.
         * REST API Reference for addRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-tags/
         * @throws {RequiredError}
         */
        addRoomTags(id: number, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.addRoomTags(id, batchTagsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Moves a room with the ID specified in the request to the \"Archive\" section.
         * @summary Archive a room
         * @param {number} id The room ID.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
         * @param {*} [options] Override http request option.
         * REST API Reference for archiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/archive-room/
         * @throws {RequiredError}
         */
        archiveRoom(id: number, archiveRoomRequest?: ArchiveRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.archiveRoom(id, archiveRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Changes a cover of a room with the ID specified in the request.
         * @summary Change the room cover
         * @param {number} id The room ID.
         * @param {CoverRequestDto} [coverRequestDto] The request parameters to change the room cover.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeRoomCover operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-room-cover/
         * @throws {RequiredError}
         */
        changeRoomCover(id: number, coverRequestDto?: CoverRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.changeRoomCover(id, coverRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a room in the \"Rooms\" section.
         * @summary Create a room
         * @param {CreateRoomRequestDto} [createRoomRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room/
         * @throws {RequiredError}
         */
        createRoom(createRoomRequestDto?: CreateRoomRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.createRoom(createRoomRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a room in the \"Rooms\" section based on the template.
         * @summary Create a room from the template
         * @param {CreateRoomFromTemplateDto} [createRoomFromTemplateDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomFromTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-from-template/
         * @throws {RequiredError}
         */
        createRoomFromTemplate(createRoomFromTemplateDto?: CreateRoomFromTemplateDto, options?: RawAxiosRequestConfig): AxiosPromise<RoomFromTemplateStatusWrapper> {
            return localVarFp.createRoomFromTemplate(createRoomFromTemplateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a logo for a room with the ID specified in the request.
         * @summary Create a room logo
         * @param {number} id The room ID.
         * @param {LogoRequest} [logoRequest] The logo request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-logo/
         * @throws {RequiredError}
         */
        createRoomLogo(id: number, logoRequest?: LogoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.createRoomLogo(id, logoRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a custom tag with the parameters specified in the request.
         * @summary Create a tag
         * @param {CreateTagRequestDto} [createTagRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomTag operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-tag/
         * @throws {RequiredError}
         */
        createRoomTag(createTagRequestDto?: CreateTagRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.createRoomTag(createTagRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts creating the room template.
         * @summary Start creating room template
         * @param {RoomTemplateDto} [roomTemplateDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-template/
         * @throws {RequiredError}
         */
        createRoomTemplate(roomTemplateDto?: RoomTemplateDto, options?: RawAxiosRequestConfig): AxiosPromise<RoomTemplateStatusWrapper> {
            return localVarFp.createRoomTemplate(roomTemplateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a room in the \"Rooms\" section stored in a third-party storage.
         * @summary Create a third-party room
         * @param {string} id The ID of the folder in the third-party storage in which the contents of the room will be stored.
         * @param {CreateThirdPartyRoom} [createThirdPartyRoom] The third-party room information.
         * @param {*} [options] Override http request option.
         * REST API Reference for createRoomThirdParty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-room-third-party/
         * @throws {RequiredError}
         */
        createRoomThirdParty(id: string, createThirdPartyRoom?: CreateThirdPartyRoom, options?: RawAxiosRequestConfig): AxiosPromise<FolderStringWrapper> {
            return localVarFp.createRoomThirdParty(id, createThirdPartyRoom, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a bunch of custom tags specified in the request.
         * @summary Delete tags
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteCustomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-custom-tags/
         * @throws {RequiredError}
         */
        deleteCustomTags(batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteCustomTags(batchTagsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a room with the ID specified in the request.
         * @summary Remove a room
         * @param {number} id The room ID.
         * @param {DeleteRoomRequest} [deleteRoomRequest] The parameters for deleting a room.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room/
         * @throws {RequiredError}
         */
        deleteRoom(id: number, deleteRoomRequest?: DeleteRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.deleteRoom(id, deleteRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a logo from a room with the ID specified in the request.
         * @summary Remove a room logo
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-logo/
         * @throws {RequiredError}
         */
        deleteRoomLogo(id: number, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.deleteRoomLogo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the tags from a room with the ID specified in the request.
         * @summary Remove the room tags
         * @param {number} id The room Id.
         * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoomTags operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-tags/
         * @throws {RequiredError}
         */
        deleteRoomTags(id: number, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.deleteRoomTags(id, batchTagsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the new items from a room with the ID specified in the request.
         * @summary Get the new room items
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getNewRoomItems operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-new-room-items/
         * @throws {RequiredError}
         */
        getNewRoomItems(id: number, options?: RawAxiosRequestConfig): AxiosPromise<NewItemsFileEntryBaseArrayWrapper> {
            return localVarFp.getNewRoomItems(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the public settings of the room template with the ID specified in the request.
         * @summary Get public settings
         * @param {number} id The room template ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPublicSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-public-settings/
         * @throws {RequiredError}
         */
        getPublicSettings(id: number, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getPublicSettings(id, options).then((request) => request(axios, basePath));
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
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-info/
         * @throws {RequiredError}
         */
        getRoomInfo(id: number, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.getRoomInfo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the links of the room with the ID specified in the request.
         * @summary Get the room links
         * @param {number} id The room ID.
         * @param {LinkType} [type] The link type.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomLinks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-links/
         * @throws {RequiredError}
         */
        getRoomLinks(id: number, type?: LinkType, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getRoomLinks(id, type, options).then((request) => request(axios, basePath));
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
         * REST API Reference for getRoomSecurityInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-security-info/
         * @throws {RequiredError}
         */
        getRoomSecurityInfo(id: number, filterType?: ShareFilterType, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<FileShareArrayWrapper> {
            return localVarFp.getRoomSecurityInfo(id, filterType, count, startIndex, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of custom tags.
         * @summary Get tags
         * @param {number} [count] Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set.
         * @param {number} [startIndex] Represents the starting index from which the tags\&#39; information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins.
         * @param {string} [filterValue] Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information.
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomTagsInfo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-tags-info/
         * @throws {RequiredError}
         */
        getRoomTagsInfo(count?: number, startIndex?: number, filterValue?: string, fields?: string | null, options?: RawAxiosRequestConfig): AxiosPromise<ObjectArrayWrapper> {
            return localVarFp.getRoomTagsInfo(count, startIndex, filterValue, fields, options).then((request) => request(axios, basePath));
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
         * Returns the contents of the \"Rooms\" section by the parameters specified in the request.
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
         * @param {string | null} [fields] Comma-separated list of fields to include in the response
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomsFolder operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-folder/
         * @throws {RequiredError}
         */
        getRoomsFolder(type?: Array<RoomType>, subjectId?: string, searchArea?: SearchArea, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, provider?: ProviderFilter, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, storageFilter?: StorageFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, fields?: string | null, options?: RawAxiosRequestConfig): AxiosPromise<FolderContentIntegerWrapper> {
            return localVarFp.getRoomsFolder(type, subjectId, searchArea, withoutTags, tags, excludeSubject, provider, subjectFilter, quotaFilter, storageFilter, count, startIndex, sortBy, sortOrder, filterValue, fields, options).then((request) => request(axios, basePath));
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
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomsPrimaryExternalLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-rooms-primary-external-link/
         * @throws {RequiredError}
         */
        getRoomsPrimaryExternalLink(id: number, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.getRoomsPrimaryExternalLink(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Pins a room with the ID specified in the request to the top of the list.
         * @summary Pin a room
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for pinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/pin-room/
         * @throws {RequiredError}
         */
        pinRoom(id: number, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.pinRoom(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Reorders the room with ID specified in the request.
         * @summary Reorder the room
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for reorderRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reorder-room/
         * @throws {RequiredError}
         */
        reorderRoom(id: number, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.reorderRoom(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Resends the email invitations to a room with the ID specified in the request to the selected users.
         * @summary Resend the room invitations
         * @param {number} id The room ID.
         * @param {UserInvitation} [userInvitation] The user invitation parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for resendEmailInvitations operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/resend-email-invitations/
         * @throws {RequiredError}
         */
        resendEmailInvitations(id: number, userInvitation?: UserInvitation, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.resendEmailInvitations(id, userInvitation, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the public settings for the room template with the ID specified in the request.
         * @summary Set public settings
         * @param {SetPublicDto} [setPublicDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for setPublicSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-public-settings/
         * @throws {RequiredError}
         */
        setPublicSettings(setPublicDto?: SetPublicDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.setPublicSettings(setPublicDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the room external or invitation link with the ID specified in the request.
         * @summary Set the room external or invitation link
         * @param {number} id The room ID.
         * @param {RoomLinkRequest} [roomLinkRequest] The room link parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setRoomLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-link/
         * @throws {RequiredError}
         */
        setRoomLink(id: number, roomLinkRequest?: RoomLinkRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileShareWrapper> {
            return localVarFp.setRoomLink(id, roomLinkRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the access rights to the room with the ID specified in the request.
         * @summary Set the room access rights
         * @param {number} id The room ID.
         * @param {RoomInvitationRequest} [roomInvitationRequest] The room invitation request.
         * @param {*} [options] Override http request option.
         * REST API Reference for setRoomSecurity operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-room-security/
         * @throws {RequiredError}
         */
        setRoomSecurity(id: number, roomInvitationRequest?: RoomInvitationRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomSecurityWrapper> {
            return localVarFp.setRoomSecurity(id, roomInvitationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts the index export of a room with the ID specified in the request.
         * @summary Start the room index export
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for startRoomIndexExport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/start-room-index-export/
         * @throws {RequiredError}
         */
        startRoomIndexExport(id: number, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.startRoomIndexExport(id, options).then((request) => request(axios, basePath));
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
         * Moves a room with the ID specified in the request from the \"Archive\" section to the \"Rooms\" section.
         * @summary Unarchive a room
         * @param {number} id The room ID.
         * @param {ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
         * @param {*} [options] Override http request option.
         * REST API Reference for unarchiveRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unarchive-room/
         * @throws {RequiredError}
         */
        unarchiveRoom(id: number, archiveRoomRequest?: ArchiveRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileOperationWrapper> {
            return localVarFp.unarchiveRoom(id, archiveRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Unpins a room with the ID specified in the request from the top of the list.
         * @summary Unpin a room
         * @param {number} id The room ID of the request.
         * @param {*} [options] Override http request option.
         * REST API Reference for unpinRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/unpin-room/
         * @throws {RequiredError}
         */
        unpinRoom(id: number, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.unpinRoom(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a room with the ID specified in the request.
         * @summary Update a room
         * @param {number} id The room ID.
         * @param {UpdateRoomRequest} [updateRoomRequest] The request parameters for updating a room.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateRoom operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-room/
         * @throws {RequiredError}
         */
        updateRoom(id: number, updateRoomRequest?: UpdateRoomRequest, options?: RawAxiosRequestConfig): AxiosPromise<FolderIntegerWrapper> {
            return localVarFp.updateRoom(id, updateRoomRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a temporary image to create a room logo.
         * @summary Upload a room logo image
         * @param {Array<KeyValuePairStringStringValues>} [formCollection] The image data.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadRoomLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-room-logo/
         * @throws {RequiredError}
         */
        uploadRoomLogo(formCollection?: Array<KeyValuePairStringStringValues>, options?: RawAxiosRequestConfig): AxiosPromise<UploadResultWrapper> {
            return localVarFp.uploadRoomLogo(formCollection, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RoomsRoomsApi - object-oriented interface
 * @export
 * @class RoomsRoomsApi
 * @extends {BaseAPI}
 */
export class RoomsRoomsApi extends BaseAPI {
    /**
     * Adds the tags to a room with the ID specified in the request.
     * @summary Add the room tags
     * @param {number} id The room Id.
     * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public addRoomTags(id: number, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).addRoomTags(id, batchTagsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves a room with the ID specified in the request to the \"Archive\" section.
     * @summary Archive a room
     * @param {number} id The room ID.
     * @param {ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public archiveRoom(id: number, archiveRoomRequest?: ArchiveRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).archiveRoom(id, archiveRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Changes a cover of a room with the ID specified in the request.
     * @summary Change the room cover
     * @param {number} id The room ID.
     * @param {CoverRequestDto} [coverRequestDto] The request parameters to change the room cover.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public changeRoomCover(id: number, coverRequestDto?: CoverRequestDto, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).changeRoomCover(id, coverRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a room in the \"Rooms\" section.
     * @summary Create a room
     * @param {CreateRoomRequestDto} [createRoomRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public createRoom(createRoomRequestDto?: CreateRoomRequestDto, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).createRoom(createRoomRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a room in the \"Rooms\" section based on the template.
     * @summary Create a room from the template
     * @param {CreateRoomFromTemplateDto} [createRoomFromTemplateDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public createRoomFromTemplate(createRoomFromTemplateDto?: CreateRoomFromTemplateDto, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).createRoomFromTemplate(createRoomFromTemplateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a logo for a room with the ID specified in the request.
     * @summary Create a room logo
     * @param {number} id The room ID.
     * @param {LogoRequest} [logoRequest] The logo request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public createRoomLogo(id: number, logoRequest?: LogoRequest, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).createRoomLogo(id, logoRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a custom tag with the parameters specified in the request.
     * @summary Create a tag
     * @param {CreateTagRequestDto} [createTagRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public createRoomTag(createTagRequestDto?: CreateTagRequestDto, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).createRoomTag(createTagRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts creating the room template.
     * @summary Start creating room template
     * @param {RoomTemplateDto} [roomTemplateDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public createRoomTemplate(roomTemplateDto?: RoomTemplateDto, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).createRoomTemplate(roomTemplateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a room in the \"Rooms\" section stored in a third-party storage.
     * @summary Create a third-party room
     * @param {string} id The ID of the folder in the third-party storage in which the contents of the room will be stored.
     * @param {CreateThirdPartyRoom} [createThirdPartyRoom] The third-party room information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public createRoomThirdParty(id: string, createThirdPartyRoom?: CreateThirdPartyRoom, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).createRoomThirdParty(id, createThirdPartyRoom, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a bunch of custom tags specified in the request.
     * @summary Delete tags
     * @param {BatchTagsRequestDto} [batchTagsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public deleteCustomTags(batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).deleteCustomTags(batchTagsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a room with the ID specified in the request.
     * @summary Remove a room
     * @param {number} id The room ID.
     * @param {DeleteRoomRequest} [deleteRoomRequest] The parameters for deleting a room.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public deleteRoom(id: number, deleteRoomRequest?: DeleteRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).deleteRoom(id, deleteRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a logo from a room with the ID specified in the request.
     * @summary Remove a room logo
     * @param {number} id The room ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public deleteRoomLogo(id: number, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).deleteRoomLogo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the tags from a room with the ID specified in the request.
     * @summary Remove the room tags
     * @param {number} id The room Id.
     * @param {BatchTagsRequestDto} [batchTagsRequestDto] The parameters for adding tags.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public deleteRoomTags(id: number, batchTagsRequestDto?: BatchTagsRequestDto, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).deleteRoomTags(id, batchTagsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the new items from a room with the ID specified in the request.
     * @summary Get the new room items
     * @param {number} id The room ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getNewRoomItems(id: number, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getNewRoomItems(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the public settings of the room template with the ID specified in the request.
     * @summary Get public settings
     * @param {number} id The room template ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getPublicSettings(id: number, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getPublicSettings(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all covers.
     * @summary Get covers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomCovers(options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomCovers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the progress of creating a room from the template.
     * @summary Get the room creation progress
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomCreatingStatus(options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomCreatingStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the room index export.
     * @summary Get the room index export
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomIndexExport(options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomIndexExport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the room information.
     * @summary Get room information
     * @param {number} id The room ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomInfo(id: number, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomInfo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the links of the room with the ID specified in the request.
     * @summary Get the room links
     * @param {number} id The room ID.
     * @param {LinkType} [type] The link type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomLinks(id: number, type?: LinkType, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomLinks(id, type, options).then((request) => request(this.axios, this.basePath));
    }

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
     * @memberof RoomsRoomsApi
     */
    public getRoomSecurityInfo(id: number, filterType?: ShareFilterType, count?: number, startIndex?: number, filterValue?: string, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomSecurityInfo(id, filterType, count, startIndex, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of custom tags.
     * @summary Get tags
     * @param {number} [count] Gets or sets the number of tag results to retrieve.  This property specifies the maximum amount of tag data to be included in the result set.
     * @param {number} [startIndex] Represents the starting index from which the tags\&#39; information will be retrieved.  This property is used to define the offset for pagination when retrieving a list of tags. It determines  the point in the data set from which the retrieval begins.
     * @param {string} [filterValue] Gets or sets the text value used for searching tags.  This property is typically used as a filter value when retrieving tag information.
     * @param {string | null} [fields] Comma-separated list of fields to include in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomTagsInfo(count?: number, startIndex?: number, filterValue?: string, fields?: string | null, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomTagsInfo(count, startIndex, filterValue, fields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the progress status of the room template creation process.
     * @summary Get status of room template creation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomTemplateCreatingStatus(options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomTemplateCreatingStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the contents of the \"Rooms\" section by the parameters specified in the request.
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
     * @param {string | null} [fields] Comma-separated list of fields to include in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomsFolder(type?: Array<RoomType>, subjectId?: string, searchArea?: SearchArea, withoutTags?: boolean, tags?: string, excludeSubject?: boolean, provider?: ProviderFilter, subjectFilter?: SubjectFilter, quotaFilter?: QuotaFilter, storageFilter?: StorageFilter, count?: number, startIndex?: number, sortBy?: string, sortOrder?: SortOrder, filterValue?: string, fields?: string | null, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomsFolder(type, subjectId, searchArea, withoutTags, tags, excludeSubject, provider, subjectFilter, quotaFilter, storageFilter, count, startIndex, sortBy, sortOrder, filterValue, fields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the room new items.
     * @summary Get the room new items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomsNewItems(options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomsNewItems(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the primary external link of the room with the ID specified in the request.
     * @summary Get the room primary external link
     * @param {number} id The room ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public getRoomsPrimaryExternalLink(id: number, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).getRoomsPrimaryExternalLink(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Pins a room with the ID specified in the request to the top of the list.
     * @summary Pin a room
     * @param {number} id The room ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public pinRoom(id: number, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).pinRoom(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reorders the room with ID specified in the request.
     * @summary Reorder the room
     * @param {number} id The room ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public reorderRoom(id: number, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).reorderRoom(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resends the email invitations to a room with the ID specified in the request to the selected users.
     * @summary Resend the room invitations
     * @param {number} id The room ID.
     * @param {UserInvitation} [userInvitation] The user invitation parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public resendEmailInvitations(id: number, userInvitation?: UserInvitation, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).resendEmailInvitations(id, userInvitation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the public settings for the room template with the ID specified in the request.
     * @summary Set public settings
     * @param {SetPublicDto} [setPublicDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public setPublicSettings(setPublicDto?: SetPublicDto, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).setPublicSettings(setPublicDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the room external or invitation link with the ID specified in the request.
     * @summary Set the room external or invitation link
     * @param {number} id The room ID.
     * @param {RoomLinkRequest} [roomLinkRequest] The room link parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public setRoomLink(id: number, roomLinkRequest?: RoomLinkRequest, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).setRoomLink(id, roomLinkRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the access rights to the room with the ID specified in the request.
     * @summary Set the room access rights
     * @param {number} id The room ID.
     * @param {RoomInvitationRequest} [roomInvitationRequest] The room invitation request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public setRoomSecurity(id: number, roomInvitationRequest?: RoomInvitationRequest, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).setRoomSecurity(id, roomInvitationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts the index export of a room with the ID specified in the request.
     * @summary Start the room index export
     * @param {number} id The room ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public startRoomIndexExport(id: number, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).startRoomIndexExport(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Terminates the room index export.
     * @summary Terminate the room index export
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public terminateRoomIndexExport(options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).terminateRoomIndexExport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moves a room with the ID specified in the request from the \"Archive\" section to the \"Rooms\" section.
     * @summary Unarchive a room
     * @param {number} id The room ID.
     * @param {ArchiveRoomRequest} [archiveRoomRequest] The parameters for archiving a room.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public unarchiveRoom(id: number, archiveRoomRequest?: ArchiveRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).unarchiveRoom(id, archiveRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unpins a room with the ID specified in the request from the top of the list.
     * @summary Unpin a room
     * @param {number} id The room ID of the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public unpinRoom(id: number, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).unpinRoom(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a room with the ID specified in the request.
     * @summary Update a room
     * @param {number} id The room ID.
     * @param {UpdateRoomRequest} [updateRoomRequest] The request parameters for updating a room.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public updateRoom(id: number, updateRoomRequest?: UpdateRoomRequest, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).updateRoom(id, updateRoomRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a temporary image to create a room logo.
     * @summary Upload a room logo image
     * @param {Array<KeyValuePairStringStringValues>} [formCollection] The image data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsRoomsApi
     */
    public uploadRoomLogo(formCollection?: Array<KeyValuePairStringStringValues>, options?: RawAxiosRequestConfig) {
        return RoomsRoomsApiFp(this.configuration).uploadRoomLogo(formCollection, options).then((request) => request(this.axios, this.basePath));
    }
}

