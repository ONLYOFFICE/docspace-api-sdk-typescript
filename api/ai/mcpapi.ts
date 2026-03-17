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
import type { AddMcpServerRequestBody } from '../../models';
// @ts-ignore
import type { AddRoomServersRequestBody } from '../../models';
// @ts-ignore
import type { ConnectServerRequestBody } from '../../models';
// @ts-ignore
import type { DeleteRoomServersRequestBody } from '../../models';
// @ts-ignore
import type { DeleteServersRequestBody } from '../../models';
// @ts-ignore
import type { McpServerArrayWrapper } from '../../models';
// @ts-ignore
import type { McpServerShortArrayWrapper } from '../../models';
// @ts-ignore
import type { McpServerShortWrapper } from '../../models';
// @ts-ignore
import type { McpServerStatusArrayWrapper } from '../../models';
// @ts-ignore
import type { McpServerStatusWrapper } from '../../models';
// @ts-ignore
import type { McpServerWrapper } from '../../models';
// @ts-ignore
import type { McpToolArrayWrapper } from '../../models';
// @ts-ignore
import type { SetMcpToolsRequestBody } from '../../models';
// @ts-ignore
import type { SetServerStatusRequestBody } from '../../models';
// @ts-ignore
import type { UpdateServerRequestBody } from '../../models';
/**
 * MCPApi - axios parameter creator
 * @export
 */
export const MCPApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Associates one or more MCP servers with a specific room, making them available for AI chat sessions  within that room. A maximum of 5 MCP servers can be assigned to a single room. If OAuth-based servers  are included, each room member will need to individually authorize their connection.  Requires room edit permissions.
         * @summary Assign MCP servers to a room
         * @param {number} roomId Identifier of the room to which MCP servers will be assigned.
         * @param {AddRoomServersRequestBody} addRoomServersRequestBody Server identifiers to assign.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addRoomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-servers/
         */
        addRoomServers: async (roomId: number, addRoomServersRequestBody: AddRoomServersRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('addRoomServers', 'roomId', roomId)
            // verify required parameter 'addRoomServersRequestBody' is not null or undefined
            assertParamExists('addRoomServers', 'addRoomServersRequestBody', addRoomServersRequestBody)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/servers`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(addRoomServersRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Registers a new custom MCP (Model Context Protocol) server for the current tenant.  The system validates the server name (only letters, numbers, underscores, and hyphens are allowed),  checks that it is not reserved or already taken, and then attempts to connect to the provided endpoint  to verify reachability and credentials before persisting the configuration.  Requires DocSpace administrator privileges.
         * @summary Register a custom MCP server
         * @param {AddMcpServerRequestBody} addMcpServerRequestBody MCP server registration parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-server/
         */
        addServer: async (addMcpServerRequestBody: AddMcpServerRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'addMcpServerRequestBody' is not null or undefined
            assertParamExists('addServer', 'addMcpServerRequestBody', addMcpServerRequestBody)

            const localVarPath = `/api/2.0/ai/servers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(addMcpServerRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Completes the OAuth authorization flow for an MCP server within a specific room on behalf of the  current user. The authorization code obtained from the OAuth provider must be passed in the request body.  Upon successful token exchange, the system verifies connectivity to the server and stores  the credentials for the current user. Requires room edit permissions.
         * @summary Connect an OAuth-based MCP server in a room
         * @param {number} roomId Identifier of the room containing the MCP server.
         * @param {string} serverId Unique identifier of the MCP server to connect.
         * @param {ConnectServerRequestBody} connectServerRequestBody The request body containing additional data necessary for connecting to the server,  such as authentication or operation-specific information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for connectServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/connect-server/
         */
        connectServer: async (roomId: number, serverId: string, connectServerRequestBody: ConnectServerRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('connectServer', 'roomId', roomId)
            // verify required parameter 'serverId' is not null or undefined
            assertParamExists('connectServer', 'serverId', serverId)
            // verify required parameter 'connectServerRequestBody' is not null or undefined
            assertParamExists('connectServer', 'connectServerRequestBody', connectServerRequestBody)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/servers/{serverId}/connect`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)))
                .replace(`{${"serverId"}}`, encodeURIComponent(String(serverId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(connectServerRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Detaches one or more MCP servers from the specified room. After removal, the servers will no longer  be available in AI chat sessions within this room. Existing connections and tool configurations for  the removed servers are also cleaned up. Requires room edit permissions.
         * @summary Remove MCP servers from a room
         * @param {number} roomId Identifier of the room from which MCP servers will be removed.
         * @param {DeleteRoomServersRequestBody} deleteRoomServersRequestBody Server identifiers to remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-servers/
         */
        deleteRoomServers: async (roomId: number, deleteRoomServersRequestBody: DeleteRoomServersRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('deleteRoomServers', 'roomId', roomId)
            // verify required parameter 'deleteRoomServersRequestBody' is not null or undefined
            assertParamExists('deleteRoomServers', 'deleteRoomServersRequestBody', deleteRoomServersRequestBody)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/servers`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteRoomServersRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Permanently removes one or more MCP servers from the current tenant by their IDs.  All room associations and connection data for the deleted servers are also cleaned up.  This action is irreversible. Requires DocSpace administrator privileges.
         * @summary Delete MCP servers
         * @param {DeleteServersRequestBody} deleteServersRequestBody Server identifiers to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-server/
         */
        deleteServer: async (deleteServersRequestBody: DeleteServersRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deleteServersRequestBody' is not null or undefined
            assertParamExists('deleteServer', 'deleteServersRequestBody', deleteServersRequestBody)

            const localVarPath = `/api/2.0/ai/servers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteServersRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Revokes the current user\'s OAuth connection to an MCP server within the specified room. After  disconnection, the server\'s tools will no longer be available to this user in AI chat sessions  until they re-authorize. Other room members\' connections are not affected.  Requires room edit permissions.
         * @summary Disconnect an MCP server in a room
         * @param {number} roomId Identifier of the room containing the MCP server.
         * @param {string} serverId Unique identifier of the MCP server to disconnect from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for disconnectServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/disconnect-server/
         */
        disconnectServer: async (roomId: number, serverId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('disconnectServer', 'roomId', roomId)
            // verify required parameter 'serverId' is not null or undefined
            assertParamExists('disconnectServer', 'serverId', serverId)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/servers/{serverId}/disconnect`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)))
                .replace(`{${"serverId"}}`, encodeURIComponent(String(serverId)));
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
         * Returns a paginated list of MCP servers that are currently active (enabled) and available for  assignment to rooms. Only servers in the enabled state are included. Each entry contains a compact  summary with the server name, type, icon, and status. Supports pagination via startIndex and count.  The total count of available servers is included in the response metadata.
         * @summary Get available MCP servers
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAvailableServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-available-servers/
         */
        getAvailableServers: async (startIndex?: number, count?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/servers/available`;
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
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
         * Returns the list of MCP servers currently assigned to the specified room along with their connection  statuses for the current user. For OAuth-based servers, the connection status reflects whether the  current user has completed authorization. Requires access to the room\'s AI chat.
         * @summary Get MCP servers assigned to a room
         * @param {number} roomId Identifier of the room whose assigned MCP servers are being retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-servers/
         */
        getRoomServers: async (roomId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('getRoomServers', 'roomId', roomId)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/servers`
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
         * Retrieves a summary view of a single MCP server by its unique identifier, including its name,  type, enabled state, and icon. This endpoint returns a compact representation without  sensitive details such as endpoint URL or authentication headers.  Requires DocSpace administrator privileges.
         * @summary Get an MCP server by ID
         * @param {string} id Unique identifier of the MCP server to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-server/
         */
        getServer: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getServer', 'id', id)

            const localVarPath = `/api/2.0/ai/servers/{id}`
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
         * Returns a paginated list of all MCP servers registered for the current tenant, including both  enabled and disabled servers. Each entry contains the full configuration (endpoint, headers,  icon, type, and status). Supports pagination via the startIndex and count query parameters.  The total number of servers is included in the response metadata.  Requires DocSpace administrator privileges.
         * @summary Get all MCP servers
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-servers/
         */
        getServers: async (startIndex?: number, count?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/ai/servers`;
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
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
         * Retrieves the full list of tools exposed by an MCP server within the context of a specific room,  along with each tool\'s enabled or disabled state. Disabled tools will not be invoked during  AI chat sessions in this room. Requires access to the room\'s AI chat.
         * @summary Get MCP server tools in a room
         * @param {number} roomId Identifier of the room containing the MCP server.
         * @param {string} serverId Unique identifier of the MCP server whose tools are being retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tools/
         */
        getTools: async (roomId: number, serverId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('getTools', 'roomId', roomId)
            // verify required parameter 'serverId' is not null or undefined
            assertParamExists('getTools', 'serverId', serverId)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/servers/{serverId}/tools`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)))
                .replace(`{${"serverId"}}`, encodeURIComponent(String(serverId)));
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
         * Toggles the enabled/disabled state of an MCP server. When a server is disabled, it becomes  unavailable for assignment to rooms and will not be used during AI chat sessions.  Enabling a previously disabled server restores its availability across the tenant.  Requires DocSpace administrator privileges.
         * @summary Enable or disable an MCP server
         * @param {string} id Unique identifier of the MCP server whose status is being changed.
         * @param {SetServerStatusRequestBody} setServerStatusRequestBody New status value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setServerStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-server-status/
         */
        setServerStatus: async (id: string, setServerStatusRequestBody: SetServerStatusRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setServerStatus', 'id', id)
            // verify required parameter 'setServerStatusRequestBody' is not null or undefined
            assertParamExists('setServerStatus', 'setServerStatusRequestBody', setServerStatusRequestBody)

            const localVarPath = `/api/2.0/ai/servers/{id}/status`
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
            localVarRequestOptions.data = serializeDataIfNeeded(setServerStatusRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the set of disabled tools for an MCP server within a specific room. Pass a list of tool names  that should be disabled — all other tools exposed by the server will remain enabled. This allows  room administrators to restrict which MCP capabilities are available during AI chat sessions.  Requires room edit permissions.
         * @summary Configure MCP server tools in a room
         * @param {number} roomId Identifier of the room containing the MCP server.
         * @param {string} serverId Unique identifier of the MCP server whose tools are being configured.
         * @param {SetMcpToolsRequestBody} setMcpToolsRequestBody Tool configuration parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tools/
         */
        setTools: async (roomId: number, serverId: string, setMcpToolsRequestBody: SetMcpToolsRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('setTools', 'roomId', roomId)
            // verify required parameter 'serverId' is not null or undefined
            assertParamExists('setTools', 'serverId', serverId)
            // verify required parameter 'setMcpToolsRequestBody' is not null or undefined
            assertParamExists('setTools', 'setMcpToolsRequestBody', setMcpToolsRequestBody)

            const localVarPath = `/api/2.0/ai/rooms/{roomId}/servers/{serverId}/tools`
                .replace(`{${"roomId"}}`, encodeURIComponent(String(roomId)))
                .replace(`{${"serverId"}}`, encodeURIComponent(String(serverId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(setMcpToolsRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the configuration of an existing custom MCP server identified by its unique ID.  Any combination of fields (name, description, endpoint, headers, icon) can be updated in a single request.  If the endpoint or headers are changed, the system re-validates connectivity by attempting to reach  the new endpoint before saving. Name uniqueness and format rules are enforced on every update.  Requires DocSpace administrator privileges.
         * @summary Update a custom MCP server
         * @param {string} id Unique identifier of the MCP server to update.
         * @param {UpdateServerRequestBody} updateServerRequestBody Updated server configuration fields.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-server/
         */
        updateServer: async (id: string, updateServerRequestBody: UpdateServerRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateServer', 'id', id)
            // verify required parameter 'updateServerRequestBody' is not null or undefined
            assertParamExists('updateServer', 'updateServerRequestBody', updateServerRequestBody)

            const localVarPath = `/api/2.0/ai/servers/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateServerRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MCPApi - functional programming interface
 * @export
 */
export const MCPApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MCPApiAxiosParamCreator(configuration)
    return {
        /**
         * Associates one or more MCP servers with a specific room, making them available for AI chat sessions  within that room. A maximum of 5 MCP servers can be assigned to a single room. If OAuth-based servers  are included, each room member will need to individually authorize their connection.  Requires room edit permissions.
         * @summary Assign MCP servers to a room
         * @param {number} roomId Identifier of the room to which MCP servers will be assigned.
         * @param {AddRoomServersRequestBody} addRoomServersRequestBody Server identifiers to assign.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addRoomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-servers/
         */
        async addRoomServers(roomId: number, addRoomServersRequestBody: AddRoomServersRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerStatusArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addRoomServers(roomId, addRoomServersRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.addRoomServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Registers a new custom MCP (Model Context Protocol) server for the current tenant.  The system validates the server name (only letters, numbers, underscores, and hyphens are allowed),  checks that it is not reserved or already taken, and then attempts to connect to the provided endpoint  to verify reachability and credentials before persisting the configuration.  Requires DocSpace administrator privileges.
         * @summary Register a custom MCP server
         * @param {AddMcpServerRequestBody} addMcpServerRequestBody MCP server registration parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for addServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-server/
         */
        async addServer(addMcpServerRequestBody: AddMcpServerRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addServer(addMcpServerRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.addServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Completes the OAuth authorization flow for an MCP server within a specific room on behalf of the  current user. The authorization code obtained from the OAuth provider must be passed in the request body.  Upon successful token exchange, the system verifies connectivity to the server and stores  the credentials for the current user. Requires room edit permissions.
         * @summary Connect an OAuth-based MCP server in a room
         * @param {number} roomId Identifier of the room containing the MCP server.
         * @param {string} serverId Unique identifier of the MCP server to connect.
         * @param {ConnectServerRequestBody} connectServerRequestBody The request body containing additional data necessary for connecting to the server,  such as authentication or operation-specific information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for connectServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/connect-server/
         */
        async connectServer(roomId: number, serverId: string, connectServerRequestBody: ConnectServerRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerStatusWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.connectServer(roomId, serverId, connectServerRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.connectServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Detaches one or more MCP servers from the specified room. After removal, the servers will no longer  be available in AI chat sessions within this room. Existing connections and tool configurations for  the removed servers are also cleaned up. Requires room edit permissions.
         * @summary Remove MCP servers from a room
         * @param {number} roomId Identifier of the room from which MCP servers will be removed.
         * @param {DeleteRoomServersRequestBody} deleteRoomServersRequestBody Server identifiers to remove.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteRoomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-servers/
         */
        async deleteRoomServers(roomId: number, deleteRoomServersRequestBody: DeleteRoomServersRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRoomServers(roomId, deleteRoomServersRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.deleteRoomServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Permanently removes one or more MCP servers from the current tenant by their IDs.  All room associations and connection data for the deleted servers are also cleaned up.  This action is irreversible. Requires DocSpace administrator privileges.
         * @summary Delete MCP servers
         * @param {DeleteServersRequestBody} deleteServersRequestBody Server identifiers to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-server/
         */
        async deleteServer(deleteServersRequestBody: DeleteServersRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteServer(deleteServersRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.deleteServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Revokes the current user\'s OAuth connection to an MCP server within the specified room. After  disconnection, the server\'s tools will no longer be available to this user in AI chat sessions  until they re-authorize. Other room members\' connections are not affected.  Requires room edit permissions.
         * @summary Disconnect an MCP server in a room
         * @param {number} roomId Identifier of the room containing the MCP server.
         * @param {string} serverId Unique identifier of the MCP server to disconnect from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for disconnectServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/disconnect-server/
         */
        async disconnectServer(roomId: number, serverId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerStatusWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.disconnectServer(roomId, serverId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.disconnectServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a paginated list of MCP servers that are currently active (enabled) and available for  assignment to rooms. Only servers in the enabled state are included. Each entry contains a compact  summary with the server name, type, icon, and status. Supports pagination via startIndex and count.  The total count of available servers is included in the response metadata.
         * @summary Get available MCP servers
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAvailableServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-available-servers/
         */
        async getAvailableServers(startIndex?: number, count?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerShortArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAvailableServers(startIndex, count, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.getAvailableServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the list of MCP servers currently assigned to the specified room along with their connection  statuses for the current user. For OAuth-based servers, the connection status reflects whether the  current user has completed authorization. Requires access to the room\'s AI chat.
         * @summary Get MCP servers assigned to a room
         * @param {number} roomId Identifier of the room whose assigned MCP servers are being retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getRoomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-servers/
         */
        async getRoomServers(roomId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerStatusArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoomServers(roomId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.getRoomServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a summary view of a single MCP server by its unique identifier, including its name,  type, enabled state, and icon. This endpoint returns a compact representation without  sensitive details such as endpoint URL or authentication headers.  Requires DocSpace administrator privileges.
         * @summary Get an MCP server by ID
         * @param {string} id Unique identifier of the MCP server to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-server/
         */
        async getServer(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerShortWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServer(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.getServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a paginated list of all MCP servers registered for the current tenant, including both  enabled and disabled servers. Each entry contains the full configuration (endpoint, headers,  icon, type, and status). Supports pagination via the startIndex and count query parameters.  The total number of servers is included in the response metadata.  Requires DocSpace administrator privileges.
         * @summary Get all MCP servers
         * @param {number} [startIndex] The number of items to skip before returning results (zero-based offset). Defaults to 0.
         * @param {number} [count] The maximum number of items to return per page. Defaults to 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-servers/
         */
        async getServers(startIndex?: number, count?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServers(startIndex, count, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.getServers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves the full list of tools exposed by an MCP server within the context of a specific room,  along with each tool\'s enabled or disabled state. Disabled tools will not be invoked during  AI chat sessions in this room. Requires access to the room\'s AI chat.
         * @summary Get MCP server tools in a room
         * @param {number} roomId Identifier of the room containing the MCP server.
         * @param {string} serverId Unique identifier of the MCP server whose tools are being retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tools/
         */
        async getTools(roomId: number, serverId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpToolArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTools(roomId, serverId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.getTools']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Toggles the enabled/disabled state of an MCP server. When a server is disabled, it becomes  unavailable for assignment to rooms and will not be used during AI chat sessions.  Enabling a previously disabled server restores its availability across the tenant.  Requires DocSpace administrator privileges.
         * @summary Enable or disable an MCP server
         * @param {string} id Unique identifier of the MCP server whose status is being changed.
         * @param {SetServerStatusRequestBody} setServerStatusRequestBody New status value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setServerStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-server-status/
         */
        async setServerStatus(id: string, setServerStatusRequestBody: SetServerStatusRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setServerStatus(id, setServerStatusRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.setServerStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the set of disabled tools for an MCP server within a specific room. Pass a list of tool names  that should be disabled — all other tools exposed by the server will remain enabled. This allows  room administrators to restrict which MCP capabilities are available during AI chat sessions.  Requires room edit permissions.
         * @summary Configure MCP server tools in a room
         * @param {number} roomId Identifier of the room containing the MCP server.
         * @param {string} serverId Unique identifier of the MCP server whose tools are being configured.
         * @param {SetMcpToolsRequestBody} setMcpToolsRequestBody Tool configuration parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tools/
         */
        async setTools(roomId: number, serverId: string, setMcpToolsRequestBody: SetMcpToolsRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpToolArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setTools(roomId, serverId, setMcpToolsRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.setTools']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the configuration of an existing custom MCP server identified by its unique ID.  Any combination of fields (name, description, endpoint, headers, icon) can be updated in a single request.  If the endpoint or headers are changed, the system re-validates connectivity by attempting to reach  the new endpoint before saving. Name uniqueness and format rules are enforced on every update.  Requires DocSpace administrator privileges.
         * @summary Update a custom MCP server
         * @param {string} id Unique identifier of the MCP server to update.
         * @param {UpdateServerRequestBody} updateServerRequestBody Updated server configuration fields.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-server/
         */
        async updateServer(id: string, updateServerRequestBody: UpdateServerRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<McpServerWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateServer(id, updateServerRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MCPApi.updateServer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MCPApi - factory interface
 * @export
 */
export const MCPApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MCPApiFp(configuration)
    return {
        /**
         * Associates one or more MCP servers with a specific room, making them available for AI chat sessions  within that room. A maximum of 5 MCP servers can be assigned to a single room. If OAuth-based servers  are included, each room member will need to individually authorize their connection.  Requires room edit permissions.
         * @summary Assign MCP servers to a room
         * @param {MCPApiAddRoomServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addRoomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-room-servers/
         * @throws {RequiredError}
         */
        addRoomServers(requestParameters: MCPApiAddRoomServersRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpServerStatusArrayWrapper> {
            return localVarFp.addRoomServers(requestParameters.roomId, requestParameters.addRoomServersRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Registers a new custom MCP (Model Context Protocol) server for the current tenant.  The system validates the server name (only letters, numbers, underscores, and hyphens are allowed),  checks that it is not reserved or already taken, and then attempts to connect to the provided endpoint  to verify reachability and credentials before persisting the configuration.  Requires DocSpace administrator privileges.
         * @summary Register a custom MCP server
         * @param {MCPApiAddServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for addServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/add-server/
         * @throws {RequiredError}
         */
        addServer(requestParameters: MCPApiAddServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpServerWrapper> {
            return localVarFp.addServer(requestParameters.addMcpServerRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Completes the OAuth authorization flow for an MCP server within a specific room on behalf of the  current user. The authorization code obtained from the OAuth provider must be passed in the request body.  Upon successful token exchange, the system verifies connectivity to the server and stores  the credentials for the current user. Requires room edit permissions.
         * @summary Connect an OAuth-based MCP server in a room
         * @param {MCPApiConnectServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for connectServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/connect-server/
         * @throws {RequiredError}
         */
        connectServer(requestParameters: MCPApiConnectServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpServerStatusWrapper> {
            return localVarFp.connectServer(requestParameters.roomId, requestParameters.serverId, requestParameters.connectServerRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Detaches one or more MCP servers from the specified room. After removal, the servers will no longer  be available in AI chat sessions within this room. Existing connections and tool configurations for  the removed servers are also cleaned up. Requires room edit permissions.
         * @summary Remove MCP servers from a room
         * @param {MCPApiDeleteRoomServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteRoomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-room-servers/
         * @throws {RequiredError}
         */
        deleteRoomServers(requestParameters: MCPApiDeleteRoomServersRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteRoomServers(requestParameters.roomId, requestParameters.deleteRoomServersRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Permanently removes one or more MCP servers from the current tenant by their IDs.  All room associations and connection data for the deleted servers are also cleaned up.  This action is irreversible. Requires DocSpace administrator privileges.
         * @summary Delete MCP servers
         * @param {MCPApiDeleteServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-server/
         * @throws {RequiredError}
         */
        deleteServer(requestParameters: MCPApiDeleteServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteServer(requestParameters.deleteServersRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Revokes the current user\'s OAuth connection to an MCP server within the specified room. After  disconnection, the server\'s tools will no longer be available to this user in AI chat sessions  until they re-authorize. Other room members\' connections are not affected.  Requires room edit permissions.
         * @summary Disconnect an MCP server in a room
         * @param {MCPApiDisconnectServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for disconnectServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/disconnect-server/
         * @throws {RequiredError}
         */
        disconnectServer(requestParameters: MCPApiDisconnectServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpServerStatusWrapper> {
            return localVarFp.disconnectServer(requestParameters.roomId, requestParameters.serverId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of MCP servers that are currently active (enabled) and available for  assignment to rooms. Only servers in the enabled state are included. Each entry contains a compact  summary with the server name, type, icon, and status. Supports pagination via startIndex and count.  The total count of available servers is included in the response metadata.
         * @summary Get available MCP servers
         * @param {MCPApiGetAvailableServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAvailableServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-available-servers/
         * @throws {RequiredError}
         */
        getAvailableServers(requestParameters: MCPApiGetAvailableServersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<McpServerShortArrayWrapper> {
            return localVarFp.getAvailableServers(requestParameters.startIndex, requestParameters.count, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the list of MCP servers currently assigned to the specified room along with their connection  statuses for the current user. For OAuth-based servers, the connection status reflects whether the  current user has completed authorization. Requires access to the room\'s AI chat.
         * @summary Get MCP servers assigned to a room
         * @param {MCPApiGetRoomServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getRoomServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-room-servers/
         * @throws {RequiredError}
         */
        getRoomServers(requestParameters: MCPApiGetRoomServersRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpServerStatusArrayWrapper> {
            return localVarFp.getRoomServers(requestParameters.roomId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a summary view of a single MCP server by its unique identifier, including its name,  type, enabled state, and icon. This endpoint returns a compact representation without  sensitive details such as endpoint URL or authentication headers.  Requires DocSpace administrator privileges.
         * @summary Get an MCP server by ID
         * @param {MCPApiGetServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-server/
         * @throws {RequiredError}
         */
        getServer(requestParameters: MCPApiGetServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpServerShortWrapper> {
            return localVarFp.getServer(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of all MCP servers registered for the current tenant, including both  enabled and disabled servers. Each entry contains the full configuration (endpoint, headers,  icon, type, and status). Supports pagination via the startIndex and count query parameters.  The total number of servers is included in the response metadata.  Requires DocSpace administrator privileges.
         * @summary Get all MCP servers
         * @param {MCPApiGetServersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getServers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-servers/
         * @throws {RequiredError}
         */
        getServers(requestParameters: MCPApiGetServersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<McpServerArrayWrapper> {
            return localVarFp.getServers(requestParameters.startIndex, requestParameters.count, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the full list of tools exposed by an MCP server within the context of a specific room,  along with each tool\'s enabled or disabled state. Disabled tools will not be invoked during  AI chat sessions in this room. Requires access to the room\'s AI chat.
         * @summary Get MCP server tools in a room
         * @param {MCPApiGetToolsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tools/
         * @throws {RequiredError}
         */
        getTools(requestParameters: MCPApiGetToolsRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpToolArrayWrapper> {
            return localVarFp.getTools(requestParameters.roomId, requestParameters.serverId, options).then((request) => request(axios, basePath));
        },
        /**
         * Toggles the enabled/disabled state of an MCP server. When a server is disabled, it becomes  unavailable for assignment to rooms and will not be used during AI chat sessions.  Enabling a previously disabled server restores its availability across the tenant.  Requires DocSpace administrator privileges.
         * @summary Enable or disable an MCP server
         * @param {MCPApiSetServerStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setServerStatus operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-server-status/
         * @throws {RequiredError}
         */
        setServerStatus(requestParameters: MCPApiSetServerStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpServerWrapper> {
            return localVarFp.setServerStatus(requestParameters.id, requestParameters.setServerStatusRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the set of disabled tools for an MCP server within a specific room. Pass a list of tool names  that should be disabled — all other tools exposed by the server will remain enabled. This allows  room administrators to restrict which MCP capabilities are available during AI chat sessions.  Requires room edit permissions.
         * @summary Configure MCP server tools in a room
         * @param {MCPApiSetToolsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setTools operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-tools/
         * @throws {RequiredError}
         */
        setTools(requestParameters: MCPApiSetToolsRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpToolArrayWrapper> {
            return localVarFp.setTools(requestParameters.roomId, requestParameters.serverId, requestParameters.setMcpToolsRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the configuration of an existing custom MCP server identified by its unique ID.  Any combination of fields (name, description, endpoint, headers, icon) can be updated in a single request.  If the endpoint or headers are changed, the system re-validates connectivity by attempting to reach  the new endpoint before saving. Name uniqueness and format rules are enforced on every update.  Requires DocSpace administrator privileges.
         * @summary Update a custom MCP server
         * @param {MCPApiUpdateServerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateServer operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-server/
         * @throws {RequiredError}
         */
        updateServer(requestParameters: MCPApiUpdateServerRequest, options?: RawAxiosRequestConfig): AxiosPromise<McpServerWrapper> {
            return localVarFp.updateServer(requestParameters.id, requestParameters.updateServerRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addRoomServers operation in MCPApi.
 * @export
 * @interface MCPApiAddRoomServersRequest
 */
export interface MCPApiAddRoomServersRequest {
    /**
     * Identifier of the room to which MCP servers will be assigned.
     * @type {number}
     * @memberof MCPApiAddRoomServers
     */
    readonly roomId: number

    /**
     * Server identifiers to assign.
     * @type {AddRoomServersRequestBody}
     * @memberof MCPApiAddRoomServers
     */
    readonly addRoomServersRequestBody: AddRoomServersRequestBody
}

/**
 * Request parameters for addServer operation in MCPApi.
 * @export
 * @interface MCPApiAddServerRequest
 */
export interface MCPApiAddServerRequest {
    /**
     * MCP server registration parameters.
     * @type {AddMcpServerRequestBody}
     * @memberof MCPApiAddServer
     */
    readonly addMcpServerRequestBody: AddMcpServerRequestBody
}

/**
 * Request parameters for connectServer operation in MCPApi.
 * @export
 * @interface MCPApiConnectServerRequest
 */
export interface MCPApiConnectServerRequest {
    /**
     * Identifier of the room containing the MCP server.
     * @type {number}
     * @memberof MCPApiConnectServer
     */
    readonly roomId: number

    /**
     * Unique identifier of the MCP server to connect.
     * @type {string}
     * @memberof MCPApiConnectServer
     */
    readonly serverId: string

    /**
     * The request body containing additional data necessary for connecting to the server,  such as authentication or operation-specific information.
     * @type {ConnectServerRequestBody}
     * @memberof MCPApiConnectServer
     */
    readonly connectServerRequestBody: ConnectServerRequestBody
}

/**
 * Request parameters for deleteRoomServers operation in MCPApi.
 * @export
 * @interface MCPApiDeleteRoomServersRequest
 */
export interface MCPApiDeleteRoomServersRequest {
    /**
     * Identifier of the room from which MCP servers will be removed.
     * @type {number}
     * @memberof MCPApiDeleteRoomServers
     */
    readonly roomId: number

    /**
     * Server identifiers to remove.
     * @type {DeleteRoomServersRequestBody}
     * @memberof MCPApiDeleteRoomServers
     */
    readonly deleteRoomServersRequestBody: DeleteRoomServersRequestBody
}

/**
 * Request parameters for deleteServer operation in MCPApi.
 * @export
 * @interface MCPApiDeleteServerRequest
 */
export interface MCPApiDeleteServerRequest {
    /**
     * Server identifiers to delete.
     * @type {DeleteServersRequestBody}
     * @memberof MCPApiDeleteServer
     */
    readonly deleteServersRequestBody: DeleteServersRequestBody
}

/**
 * Request parameters for disconnectServer operation in MCPApi.
 * @export
 * @interface MCPApiDisconnectServerRequest
 */
export interface MCPApiDisconnectServerRequest {
    /**
     * Identifier of the room containing the MCP server.
     * @type {number}
     * @memberof MCPApiDisconnectServer
     */
    readonly roomId: number

    /**
     * Unique identifier of the MCP server to disconnect from.
     * @type {string}
     * @memberof MCPApiDisconnectServer
     */
    readonly serverId: string
}

/**
 * Request parameters for getAvailableServers operation in MCPApi.
 * @export
 * @interface MCPApiGetAvailableServersRequest
 */
export interface MCPApiGetAvailableServersRequest {
    /**
     * The number of items to skip before returning results (zero-based offset). Defaults to 0.
     * @type {number}
     * @memberof MCPApiGetAvailableServers
     */
    readonly startIndex?: number

    /**
     * The maximum number of items to return per page. Defaults to 100.
     * @type {number}
     * @memberof MCPApiGetAvailableServers
     */
    readonly count?: number
}

/**
 * Request parameters for getRoomServers operation in MCPApi.
 * @export
 * @interface MCPApiGetRoomServersRequest
 */
export interface MCPApiGetRoomServersRequest {
    /**
     * Identifier of the room whose assigned MCP servers are being retrieved.
     * @type {number}
     * @memberof MCPApiGetRoomServers
     */
    readonly roomId: number
}

/**
 * Request parameters for getServer operation in MCPApi.
 * @export
 * @interface MCPApiGetServerRequest
 */
export interface MCPApiGetServerRequest {
    /**
     * Unique identifier of the MCP server to retrieve.
     * @type {string}
     * @memberof MCPApiGetServer
     */
    readonly id: string
}

/**
 * Request parameters for getServers operation in MCPApi.
 * @export
 * @interface MCPApiGetServersRequest
 */
export interface MCPApiGetServersRequest {
    /**
     * The number of items to skip before returning results (zero-based offset). Defaults to 0.
     * @type {number}
     * @memberof MCPApiGetServers
     */
    readonly startIndex?: number

    /**
     * The maximum number of items to return per page. Defaults to 100.
     * @type {number}
     * @memberof MCPApiGetServers
     */
    readonly count?: number
}

/**
 * Request parameters for getTools operation in MCPApi.
 * @export
 * @interface MCPApiGetToolsRequest
 */
export interface MCPApiGetToolsRequest {
    /**
     * Identifier of the room containing the MCP server.
     * @type {number}
     * @memberof MCPApiGetTools
     */
    readonly roomId: number

    /**
     * Unique identifier of the MCP server whose tools are being retrieved.
     * @type {string}
     * @memberof MCPApiGetTools
     */
    readonly serverId: string
}

/**
 * Request parameters for setServerStatus operation in MCPApi.
 * @export
 * @interface MCPApiSetServerStatusRequest
 */
export interface MCPApiSetServerStatusRequest {
    /**
     * Unique identifier of the MCP server whose status is being changed.
     * @type {string}
     * @memberof MCPApiSetServerStatus
     */
    readonly id: string

    /**
     * New status value.
     * @type {SetServerStatusRequestBody}
     * @memberof MCPApiSetServerStatus
     */
    readonly setServerStatusRequestBody: SetServerStatusRequestBody
}

/**
 * Request parameters for setTools operation in MCPApi.
 * @export
 * @interface MCPApiSetToolsRequest
 */
export interface MCPApiSetToolsRequest {
    /**
     * Identifier of the room containing the MCP server.
     * @type {number}
     * @memberof MCPApiSetTools
     */
    readonly roomId: number

    /**
     * Unique identifier of the MCP server whose tools are being configured.
     * @type {string}
     * @memberof MCPApiSetTools
     */
    readonly serverId: string

    /**
     * Tool configuration parameters.
     * @type {SetMcpToolsRequestBody}
     * @memberof MCPApiSetTools
     */
    readonly setMcpToolsRequestBody: SetMcpToolsRequestBody
}

/**
 * Request parameters for updateServer operation in MCPApi.
 * @export
 * @interface MCPApiUpdateServerRequest
 */
export interface MCPApiUpdateServerRequest {
    /**
     * Unique identifier of the MCP server to update.
     * @type {string}
     * @memberof MCPApiUpdateServer
     */
    readonly id: string

    /**
     * Updated server configuration fields.
     * @type {UpdateServerRequestBody}
     * @memberof MCPApiUpdateServer
     */
    readonly updateServerRequestBody: UpdateServerRequestBody
}

/**
 * MCPApi - object-oriented interface
 * @export
 * @class MCPApi
 * @extends {BaseAPI}
 */
export class MCPApi extends BaseAPI {
    /**
     * Associates one or more MCP servers with a specific room, making them available for AI chat sessions  within that room. A maximum of 5 MCP servers can be assigned to a single room. If OAuth-based servers  are included, each room member will need to individually authorize their connection.  Requires room edit permissions.
     * @summary Assign MCP servers to a room
     * @param {AIMCPApiAddRoomServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public addRoomServers(requestParameters: MCPApiAddRoomServersRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).addRoomServers(requestParameters.roomId, requestParameters.addRoomServersRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Registers a new custom MCP (Model Context Protocol) server for the current tenant.  The system validates the server name (only letters, numbers, underscores, and hyphens are allowed),  checks that it is not reserved or already taken, and then attempts to connect to the provided endpoint  to verify reachability and credentials before persisting the configuration.  Requires DocSpace administrator privileges.
     * @summary Register a custom MCP server
     * @param {AIMCPApiAddServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public addServer(requestParameters: MCPApiAddServerRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).addServer(requestParameters.addMcpServerRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Completes the OAuth authorization flow for an MCP server within a specific room on behalf of the  current user. The authorization code obtained from the OAuth provider must be passed in the request body.  Upon successful token exchange, the system verifies connectivity to the server and stores  the credentials for the current user. Requires room edit permissions.
     * @summary Connect an OAuth-based MCP server in a room
     * @param {AIMCPApiConnectServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public connectServer(requestParameters: MCPApiConnectServerRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).connectServer(requestParameters.roomId, requestParameters.serverId, requestParameters.connectServerRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Detaches one or more MCP servers from the specified room. After removal, the servers will no longer  be available in AI chat sessions within this room. Existing connections and tool configurations for  the removed servers are also cleaned up. Requires room edit permissions.
     * @summary Remove MCP servers from a room
     * @param {AIMCPApiDeleteRoomServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public deleteRoomServers(requestParameters: MCPApiDeleteRoomServersRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).deleteRoomServers(requestParameters.roomId, requestParameters.deleteRoomServersRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Permanently removes one or more MCP servers from the current tenant by their IDs.  All room associations and connection data for the deleted servers are also cleaned up.  This action is irreversible. Requires DocSpace administrator privileges.
     * @summary Delete MCP servers
     * @param {AIMCPApiDeleteServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public deleteServer(requestParameters: MCPApiDeleteServerRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).deleteServer(requestParameters.deleteServersRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Revokes the current user\'s OAuth connection to an MCP server within the specified room. After  disconnection, the server\'s tools will no longer be available to this user in AI chat sessions  until they re-authorize. Other room members\' connections are not affected.  Requires room edit permissions.
     * @summary Disconnect an MCP server in a room
     * @param {AIMCPApiDisconnectServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public disconnectServer(requestParameters: MCPApiDisconnectServerRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).disconnectServer(requestParameters.roomId, requestParameters.serverId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a paginated list of MCP servers that are currently active (enabled) and available for  assignment to rooms. Only servers in the enabled state are included. Each entry contains a compact  summary with the server name, type, icon, and status. Supports pagination via startIndex and count.  The total count of available servers is included in the response metadata.
     * @summary Get available MCP servers
     * @param {AIMCPApiGetAvailableServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public getAvailableServers(requestParameters: MCPApiGetAvailableServersRequest = {}, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).getAvailableServers(requestParameters.startIndex, requestParameters.count, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the list of MCP servers currently assigned to the specified room along with their connection  statuses for the current user. For OAuth-based servers, the connection status reflects whether the  current user has completed authorization. Requires access to the room\'s AI chat.
     * @summary Get MCP servers assigned to a room
     * @param {AIMCPApiGetRoomServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public getRoomServers(requestParameters: MCPApiGetRoomServersRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).getRoomServers(requestParameters.roomId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a summary view of a single MCP server by its unique identifier, including its name,  type, enabled state, and icon. This endpoint returns a compact representation without  sensitive details such as endpoint URL or authentication headers.  Requires DocSpace administrator privileges.
     * @summary Get an MCP server by ID
     * @param {AIMCPApiGetServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public getServer(requestParameters: MCPApiGetServerRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).getServer(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a paginated list of all MCP servers registered for the current tenant, including both  enabled and disabled servers. Each entry contains the full configuration (endpoint, headers,  icon, type, and status). Supports pagination via the startIndex and count query parameters.  The total number of servers is included in the response metadata.  Requires DocSpace administrator privileges.
     * @summary Get all MCP servers
     * @param {AIMCPApiGetServersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public getServers(requestParameters: MCPApiGetServersRequest = {}, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).getServers(requestParameters.startIndex, requestParameters.count, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the full list of tools exposed by an MCP server within the context of a specific room,  along with each tool\'s enabled or disabled state. Disabled tools will not be invoked during  AI chat sessions in this room. Requires access to the room\'s AI chat.
     * @summary Get MCP server tools in a room
     * @param {AIMCPApiGetToolsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public getTools(requestParameters: MCPApiGetToolsRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).getTools(requestParameters.roomId, requestParameters.serverId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Toggles the enabled/disabled state of an MCP server. When a server is disabled, it becomes  unavailable for assignment to rooms and will not be used during AI chat sessions.  Enabling a previously disabled server restores its availability across the tenant.  Requires DocSpace administrator privileges.
     * @summary Enable or disable an MCP server
     * @param {AIMCPApiSetServerStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public setServerStatus(requestParameters: MCPApiSetServerStatusRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).setServerStatus(requestParameters.id, requestParameters.setServerStatusRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the set of disabled tools for an MCP server within a specific room. Pass a list of tool names  that should be disabled — all other tools exposed by the server will remain enabled. This allows  room administrators to restrict which MCP capabilities are available during AI chat sessions.  Requires room edit permissions.
     * @summary Configure MCP server tools in a room
     * @param {AIMCPApiSetToolsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public setTools(requestParameters: MCPApiSetToolsRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).setTools(requestParameters.roomId, requestParameters.serverId, requestParameters.setMcpToolsRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the configuration of an existing custom MCP server identified by its unique ID.  Any combination of fields (name, description, endpoint, headers, icon) can be updated in a single request.  If the endpoint or headers are changed, the system re-validates connectivity by attempting to reach  the new endpoint before saving. Name uniqueness and format rules are enforced on every update.  Requires DocSpace administrator privileges.
     * @summary Update a custom MCP server
     * @param {AIMCPApiUpdateServerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MCPApi
     */
    public updateServer(requestParameters: MCPApiUpdateServerRequest, options?: RawAxiosRequestConfig) {
        return MCPApiFp(this.configuration).updateServer(requestParameters.id, requestParameters.updateServerRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}

