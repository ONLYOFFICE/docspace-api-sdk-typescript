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
import type { AutoCleanUpDataWrapper } from '../../models';
// @ts-ignore
import type { AutoCleanupRequestDto } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CheckDocServiceUrlRequestDto } from '../../models';
// @ts-ignore
import type { DefaultTemplateSettingsRequestDto } from '../../models';
// @ts-ignore
import type { DefaultTemplateSettingsResetRequestDto } from '../../models';
// @ts-ignore
import type { DefaultTemplateSettingsWrapper } from '../../models';
// @ts-ignore
import type { DisplayRequestDto } from '../../models';
// @ts-ignore
import type { DocServiceUrlWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { ExternalSharingSettingsRequestDto } from '../../models';
// @ts-ignore
import type { ExternalSharingSettingsWrapper } from '../../models';
// @ts-ignore
import type { FileShareResponseArrayWrapper } from '../../models';
// @ts-ignore
import type { FilesSettingsWrapper } from '../../models';
// @ts-ignore
import type { HideConfirmConvertRequestDto } from '../../models';
// @ts-ignore
import type { ICompressWrapper } from '../../models';
// @ts-ignore
import type { ModuleWrapper } from '../../models';
// @ts-ignore
import type { SettingsRequestDto } from '../../models';
/**
 * FilesSettingsApi - axios parameter creator
 * @export
 */
export const FilesSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Turns the portal-wide permission to connect third-party storages such as Google Drive, Dropbox or Nextcloud on  or off, and returns the value that is now stored. Only the portal owner and a DocSpace administrator may  change it: a room administrator, a member or a guest is refused, and so is an unauthenticated caller. This is  a single setting for the whole portal rather than a preference of the caller, so it changes what every account  sees. While it is off, connecting an account through `POST api/2.0/files/thirdparty` is refused and the  contents of an already connected provider folder cannot be listed; the stored connections themselves survive  and work again once it is turned back on. The providers this portal can offer are listed by  `GET api/2.0/files/thirdparty/capabilities`. The same value is published as `enableThirdParty` by  `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from  the portal, not a success flag.
         * @summary Change the third-party settings access
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAccessToThirdparty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-access-to-thirdparty/
         */
        changeAccessToThirdparty: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/thirdparty`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Writes the trash auto-clearing setting of the calling account and returns the pair that is now stored. Both  fields are written together from the request, so a call that omits `gap` stores an interval outside the  published list rather than keeping the previous one - always send the interval, including when `set` is false.  While clearing is on, an item is removed from the caller\'s trash for good once it has been there longer than  the interval, and each trashed entry reports the moment it is due to disappear in its own `autoDelete` field;  switching clearing off stops that and leaves whatever is in the trash. The setting belongs to the calling  account alone: every authenticated role down to a guest may change its own, one member\'s choice never affects  another, and an unauthenticated caller is refused. Items already removed are not recoverable. Read the pair  back with `GET api/2.0/files/settings/autocleanup`.
         * @summary Update the trash bin auto-clearing setting
         * @param {AutoCleanupRequestDto} [autoCleanupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-automatically-clean-up/
         */
        changeAutomaticallyCleanUp: async (autoCleanupRequestDto?: AutoCleanupRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/autocleanup`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(autoCleanupRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores the access rights the sharing dialog offers the calling account by default, and returns the set that  was actually stored. The body is a bare array of access-right values, not an object. The portal normalises the  array instead of keeping it as sent: it keeps the fill-forms, custom-filter and review entries, then adds  read-and-write or comment - whichever is present, in that order - and stops there, and it falls back to read  alone when nothing else applies, so the response can be shorter than the request and its order can differ. An  empty array clears the setting, after which read alone is reported. A value outside the published list is  rejected as an invalid request. The set belongs to the calling account alone: every authenticated role down to  a guest may store its own, and an unauthenticated caller is refused. Nothing already shared is changed. The  stored set is published as `defaultSharingAccessRights` by `GET api/2.0/files/settings`.
         * @summary Change the default access rights
         * @param {Array<number>} [requestBody] The access rights the sharing dialog should offer by default. The array is the whole request body rather than  a field of an object, and the portal stores a normalised subset of it instead of the array as sent, so read  the answer to learn what was kept. An empty array clears the setting, after which the portal reports read  access alone. A value outside the published list is rejected as an invalid request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDefaultAccessRights operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-default-access-rights/
         */
        changeDefaultAccessRights: async (requestBody?: Array<number>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/dafaultaccessrights`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores whether the caller wants to be asked for confirmation before files and folders are deleted, and returns  the value that is now stored. The setting belongs to the calling account alone: every authenticated role down  to a guest may change its own copy, one member\'s choice never affects another, and an unauthenticated caller  is refused. It is a hint for the interface, not a server-side guard: the delete operations under  `api/2.0/files/fileops` remove whatever they are given regardless of this value, so a client that skips its  own prompt loses nothing but the prompt. Pass `set=true` to be asked again, `set=false` to delete without a  prompt. The same value is published as `confirmDelete` by `GET api/2.0/files/settings`, which is the only way  to read it back. Repeating the call with the same value writes it again and is safe. A new account starts with  the confirmation switched on, and the value says nothing about where deleted items land: they go to the trash  and are cleared from there according to `GET api/2.0/files/settings/autocleanup`.
         * @summary Ask for delete confirmation
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDeleteConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-delete-confirm/
         */
        changeDeleteConfirm: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/changedeleteconfrim`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Selects the archive format the portal packs the caller\'s multi-item downloads into: `set=true` switches to  `.tar.gz`, `set=false` back to `.zip`. The choice is stored for the calling account only, so every  authenticated role down to a guest may set its own, while an unauthenticated caller is refused. It takes  effect on the archives built by `PUT api/2.0/files/fileops/bulkdownload` and by the download links that  operation returns; archives already produced keep the format they were packed with. The returned archive  object carries no readable fields of its own, so it cannot be used to confirm the change: read `downloadTarGz`  from `GET api/2.0/files/settings` instead. Writing the same value again is safe and changes nothing else. A  new account starts on `.zip`. The format decides only how the archive is packed: which items go into it, and  the access needed to take them, are decided by the bulk-download operation itself, and a single file is  downloaded as it is whatever is stored here.
         * @summary Change the download archive format
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDownloadZip operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip/
         */
        changeDownloadZip: async (displayRequestDto?: DisplayRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/downloadtargz`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(displayRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Writes the portal\'s whole external-sharing policy in one request and returns the set that is now in force.  Only the portal owner and a DocSpace administrator may call it; everyone else is refused, including an  unauthenticated caller. Every field of the request is applied, so send the complete set rather than the field  being changed - an omitted boolean is read as false. The portal keeps the set consistent: with `externalShare`  false the default link type is forced to users of this portal only and sharing on social networks is turned  off, and the three restriction fields only matter while external sharing is off.  `blockExistingLinksOnRestrict` decides what happens to links that already exist, so it is the field that  changes access to data already shared. The new set is pushed to the connected clients of the portal as well,  and is published field by field by `GET api/2.0/files/settings`. Sending the same set again is safe.
         * @summary Configure external sharing
         * @param {ExternalSharingSettingsRequestDto} [externalSharingSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeExternalSharingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-external-sharing-settings/
         */
        changeExternalSharingSettings: async (externalSharingSettingsRequestDto?: ExternalSharingSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/externalsharingsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(externalSharingSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Writes the portal-wide ONLYOFFICE Docs connection settings - the public Document Server address, its address  inside the private network, the address it calls this portal back on, the request signature secret and header,  and SSL verification - then verifies them against the running Document Server before keeping them. Every  address is optional: an empty value drops the portal\'s own setting so that the deployment default takes over  again. An address gets `http://` prepended when it carries no scheme, while an absolute address with a query  string is rejected with 400, as is a signature secret sent without its header. Only the portal owner and a  DocSpace administrator may call this; a room administrator, a user and a guest are refused with 403. The call  is mutating and safe to repeat with the same body. Verification is live - the editor api script, the  healthcheck, a test conversion, the command service and the document builder are all exercised - and when it  fails the previous settings are restored in full and nothing is changed. The answer is what  `GET api/2.0/files/docservice` returns with no version requested, so `version` comes back empty and the  signature secret is not echoed back.
         * @summary Set the document service address
         * @param {CheckDocServiceUrlRequestDto} [checkDocServiceUrlRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-doc-service-url/
         */
        checkDocServiceUrl: async (checkDocServiceUrlRequestDto?: CheckDocServiceUrlRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/docservice`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(checkDocServiceUrlRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores whether file titles are shown to the caller with their extension, and returns the value that is now  stored. It is a preference of the calling account: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. Only the presentation changes - the titles kept by the portal  always include the extension, and the listing and file operations keep returning them in full, so a client  that trims the extension for display must add it back before it renames or searches for anything. Writing a  value that is already stored is accepted and leaves the setting untouched. The value is published as  `displayFileExtension` by `GET api/2.0/files/settings`, which is the only way to read it back. A new account  starts with extensions hidden. This governs display alone: which extensions may be uploaded, viewed or edited  at all is published by the same settings operation as separate format lists.
         * @summary Display a file extension
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayFileExtension operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-file-extension/
         */
        displayFileExtension: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/displayfileextension`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores whether the Recent section is offered to the calling account, and returns the value that is now  stored. The setting belongs to that account alone: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. Hiding the section removes it from the list of section roots  returned by `GET api/2.0/files/@root`, and the document editor stops offering the recent-files entry; the  section itself keeps being maintained, and `GET api/2.0/files/recent` still returns its contents. Pass  `set=true` to show it again. The same value is published as `recentSection` by `GET api/2.0/files/settings`,  which is the only way to read it back. Repeating the call with the same value writes it again and is safe. A  new account starts with the section shown. Hiding it neither clears the recent history nor stops it being  recorded, so showing the section again brings the same entries back.
         * @summary Show the Recent section
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-recent/
         */
        displayRecent: async (displayRequestDto?: DisplayRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/displayrecent`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(displayRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Turns external (public) links on or off for the whole portal and returns the value that is now stored. Only  the portal owner and a DocSpace administrator may change it: a room administrator, a member or a guest is  refused, and so is an unauthenticated caller. Turning it off also turns sharing on social networks off, so a  following read of `externalShareSocialMedia` reports false without a separate call. This operation sets one  flag; to write the whole external-sharing policy in one request - the default link type, the sections the  restriction applies to and whether existing links are blocked at once - use  `PUT api/2.0/files/settings/externalsharingsettings`. The value is published as `externalShare` by  `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from  the portal rather than a success flag. External links are allowed in a new portal. Turning them off does not  delete the links that already exist - whether those stop working at once is decided by the  `blockExistingLinksOnRestrict` field of the settings operation named above.
         * @summary Change the external sharing ability
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShare operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share/
         */
        externalShare: async (displayRequestDto?: DisplayRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/external`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(displayRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Turns the social-network sharing buttons on or off for the whole portal and returns the value that is now in  force. Only the portal owner and a DocSpace administrator may change it; a room administrator, a member or a  guest is refused, and so is an unauthenticated caller. The requested value is combined with the state of  external sharing itself: while that is off, enabling this setting has no effect and the response comes back  false, so turn external sharing on with `PUT api/2.0/files/settings/external` first and only then this one.  Turning external sharing off later switches this setting off again on its own. The value is published as  `externalShareSocialMedia` by `GET api/2.0/files/settings`. Sending the same value again is safe. Read the  response instead of assuming the requested value was stored. The setting governs the share-to-network buttons  offered next to an external link; it neither creates nor revokes links, and the links themselves keep working  either way.
         * @summary Change the external sharing ability on social networks
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShareSocialMedia operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share-social-media/
         */
        externalShareSocialMedia: async (displayRequestDto?: DisplayRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/externalsocialmedia`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(displayRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reports that forcesaving is on for this portal. The operation is a stub kept for compatibility: it takes no  request body, stores nothing and always answers true, so calling it neither turns forcesaving on nor off and  repeating it changes nothing. Forcesaving itself - the editor writing the document back to storage while the  session is still open - is on for every portal and cannot be switched off through the API. Any authenticated  role down to a guest may call it; an unauthenticated caller is refused. The same constant is published as  `forcesave` by `GET api/2.0/files/settings`, which is the cheaper way to read it together with the rest of the  settings. A companion stub, `PUT api/2.0/files/storeforcesave`, answers for the storing of forcesaved versions  in the same way. Nothing in this call reaches a document: to have the current state of an editing session  written to storage, drive the document through the editor operations of the file itself rather than through  this setting.
         * @summary Change the forcesaving ability
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for forcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/forcesave/
         */
        forcesave: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/forcesave`;
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
         * Returns the trash auto-clearing setting of the calling account: whether it is on, and after which interval an  item that sits in the trash is removed for good. The setting belongs to that account alone, so every  authenticated role down to a guest reads its own value and an unauthenticated caller is refused. The first  call for an account is not read-only: when nothing has been stored yet the portal writes the default -  clearing on, thirty days - and returns it, so the answer never comes back empty and a following call reports  the same pair. The interval is the age of an entry in the trash, not a schedule; each trashed entry also  reports the moment it is due to disappear in its own `autoDelete` field. Use  `PUT api/2.0/files/settings/autocleanup` to change the pair, or read it together with the rest of the  configuration from `GET api/2.0/files/settings`.
         * @summary Get the trash bin auto-clearing setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-automatically-clean-up/
         */
        getAutomaticallyCleanUp: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/autocleanup`;
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
         * Returns the blank document the portal creates for each format: one entry per extension the built-in template  set covers, with the file that has been chosen as the blank for it, if any. An entry whose `selectedFile` is  null means no custom template has been set and the built-in blank is used; the remaining fields - title, size,  modification moment and view address - are filled only for a custom one. The list is assembled from the  portal\'s built-in template set on every call, so an extension the set no longer covers disappears from it.  Entries come in the order the interface shows them: the text document, spreadsheet, presentation and PDF  formats first, the rest by extension. Reading the setting requires the portal settings permission, so only the  portal owner and a DocSpace administrator may call it. Use `PUT api/2.0/files/settings/defaulttemplate` to  choose an existing file and the matching POST to upload one.
         * @summary Get the default template setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-templates/
         */
        getDefaultTemplates: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/defaulttemplate`;
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
         * Reports where this portal expects ONLYOFFICE Docs to be: the public Document Server address, the URL of the  editor api script and of the preload page a client loads before opening a document, the address used inside  the private network, the address the Document Server calls this portal back on, the name of the request  signature header, whether SSL verification is on, and whether all of it is still at the deployment default.  The call is read-only and needs no authorization: an anonymous caller and every role from the portal owner  down to a guest read the same values. Pass `version=true` to have the editor version of the running Document  Server included in `version`; left out, `version` comes back empty and the portal answers without contacting  the Document Server at all. A version request never fails the call - when the Document Server does not answer,  a fallback version string is reported instead of an error, so the value is no proof that the server is  reachable. The signature secret is not part of the answer, only the header name it travels in. To change any  of these settings use `PUT api/2.0/files/docservice`.
         * @summary Get the document service address
         * @param {boolean} [version] Whether the running Document Server is asked for its editor version so that `version` can report it. Left off,  the portal answers from its own settings without contacting the Document Server and `version` comes back  empty.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-doc-service-url/
         */
        getDocServiceUrl: async (version?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/docservice`;
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

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
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
         * Returns the descriptor of the Documents module of this portal: its identifier, display title and description,  the address of its start page, the icon and image addresses, the address of its help section, and whether it  is the portal\'s primary module. It is meant for building navigation to the module, not for working with  documents: nothing about files, rooms or permissions comes back, and nothing is changed by the call. The  values follow the portal\'s own configuration and branding, so the title and the description arrive already  translated for the caller. Any authenticated role down to a guest may read it; an unauthenticated caller is  refused. The content is the same for everyone in the portal and changes only when the portal is reconfigured,  so it can be fetched once and cached rather than requested per screen. Only the Documents module is described  here; this document carries no listing of the other modules of the portal. The file-related configuration a  client needs alongside it - the format tables, the editor addresses and the upload limits - comes from  `GET api/2.0/files/settings`.
         * @summary Get the Documents module information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesModule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-module/
         */
        getFilesModule: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/info`;
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
         * Returns the whole Files configuration in one object: the caller\'s own preferences (trash auto-clearing,  default sharing rights, hidden confirmation dialogs, archive format, section visibility), the portal-wide  switches an administrator controls (third-party storages, external sharing), and the static tables a client  needs to work with documents - which extensions can be viewed, edited, converted or uploaded, the URL  templates for the viewer, editor and thumbnails, and the upload limits. This is the read side of the setting  operations in this section: each of those answers with the one value it wrote, and only the trash  auto-clearing and default-template settings have a GET of their own. Marked as allowing anonymous access  because the external-link pages read the extension tables before signing in, but a caller with neither a  session nor a valid link key is still rejected. The result is not filtered by role and is not paginated; fetch  it once per session rather than before each file action.
         * @summary Get file settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-settings/
         */
        getFilesSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings`;
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
         * Stores whether the caller is asked to confirm cancelling a running file operation, and returns the value that  is now stored. The setting belongs to the calling account alone: every authenticated role down to a guest may  change its own copy, and an unauthenticated caller is refused. Unlike the conversion prompt of  `PUT api/2.0/files/hideconfirmconvert`, this one works in both directions - `set=true` hides the confirmation,  `set=false` brings it back. It is a hint for the interface only: cancelling an operation through the API is  unaffected, and the operations themselves keep being reported by `GET api/2.0/files/fileops`. The value is  published as `hideConfirmCancelOperation` by `GET api/2.0/files/settings`, which is the only way to read it  back. Writing a value that is already stored is accepted and leaves the setting untouched. A new account  starts with the confirmation shown. The prompt it hides is the one raised when a running copy, move or  download is about to be abandoned, not the one raised before a deletion - that one is  `PUT api/2.0/files/changedeleteconfrim`.
         * @summary Hide confirmation dialog when canceling operations
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmCancelOperation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-cancel-operation/
         */
        hideConfirmCancelOperation: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/hideconfirmcanceloperation`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Hides one of the two prompts the interface shows around file conversion, for the calling account only. The  `save` field chooses which prompt, and is not the value being written: `save=true` hides the prompt that  offers to keep a copy in the original format when a file is converted, `save=false` hides the prompt that  offers to open the conversion result. Both flags are one-way - the operation can only hide a prompt, and there  is no API to show it again - so the answer is always true and repeating the call changes nothing. The two  flags are independent: hiding one leaves the other as it was. Every authenticated role down to a guest may set  its own, and an unauthenticated caller is refused. The stored flags are published as `hideConfirmConvertSave`  and `hideConfirmConvertOpen` by `GET api/2.0/files/settings`. Conversion itself is started by  `PUT api/2.0/files/file/{fileId}/checkconversion` and is not affected by either flag.
         * @summary Hide the confirmation dialog when converting
         * @param {HideConfirmConvertRequestDto} [hideConfirmConvertRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmConvert operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-convert/
         */
        hideConfirmConvert: async (hideConfirmConvertRequestDto?: HideConfirmConvertRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/hideconfirmconvert`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(hideConfirmConvertRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores whether the caller is warned before the lifetime settings of a room are changed, and returns the value  that is now stored. A room lifetime moves the files of the room to the trash once they reach the configured  age, which is why the interface confirms the change; this setting decides whether that confirmation is shown  to the calling account. It belongs to that account alone: every authenticated role down to a guest may change  its own copy, and an unauthenticated caller is refused. It works in both directions - `set=true` hides the  warning, `set=false` brings it back - and is a hint for the interface only, so changing a room lifetime  through `PUT api/2.0/files/rooms/{id}` is unaffected. The value is published as `hideConfirmRoomLifetime` by  `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the warning  shown, and writing a value that is already stored is accepted and leaves the setting untouched. Hiding the  warning does not shorten or extend any lifetime: what a room does with ageing files is decided by the room  itself.
         * @summary Hide confirmation dialog when changing room lifetime settings
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmRoomLifetime operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-room-lifetime/
         */
        hideConfirmRoomLifetime: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/hideconfirmroomlifetime`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores whether the caller wants new documents created with the default name instead of being asked for one,  and returns the value that is now stored. It is a preference of the calling account: every authenticated role  down to a guest may change its own copy, one member\'s choice never affects another, and an unauthenticated  caller is refused. The portal only keeps the value and reports it - the creation operations,  `POST api/2.0/files/{folderId}/file` among them, always use the title they are given, so this setting changes  what an interface asks for rather than what the server does. Writing a value that is already stored is  accepted and leaves the setting and the audit trail untouched. The value is published as `keepNewFileName` by  `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the prompt in  place. The title a created document actually gets, and how a clash with an existing title is resolved, are  decided by the creation request rather than here.
         * @summary Keep the default file name
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for keepNewFileName operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/keep-new-file-name/
         */
        keepNewFileName: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/keepnewfilename`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Drops the custom blank document configured for one extension and returns the full set of templates as it now  stands. New documents of that extension are created from the portal\'s built-in blank again, and the file that  served as the custom one is deleted from the template storage - the original the template was copied from is  untouched. The extension is named in the request body, and the entry for it comes back with `selectedFile`  null. Resetting an extension that has no custom blank is accepted and changes nothing, which makes a repeated  call safe; an extension the built-in template set does not cover is ignored in the same way. Requires the  portal settings permission, so only the portal owner and a DocSpace administrator may call it. To set a blank  instead of dropping it, use `PUT api/2.0/files/settings/defaulttemplate`. Documents already created from the  custom blank are left as they are - the reset only decides what the next new document of that extension starts  from. The set as it stands can also be read with `GET api/2.0/files/settings/defaulttemplate`.
         * @summary Reset the default template setting
         * @param {DefaultTemplateSettingsResetRequestDto} [defaultTemplateSettingsResetRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-default-template/
         */
        resetDefaultTemplate: async (defaultTemplateSettingsResetRequestDto?: DefaultTemplateSettingsResetRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/defaulttemplate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(defaultTemplateSettingsResetRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Makes an existing document the blank the portal creates for one extension, and returns the full set of  templates as it now stands. The file is copied into the portal\'s template storage, so later edits of the  original do not change the blank, and the file that served as the previous custom blank for that extension is  deleted. `selectedFile` takes the identifier of a file the caller may copy - a number for a document stored in  the portal, a string for one in a connected third-party storage - and its extension must be the one named in  `fileExtension`; a mismatch or an identifier of another kind answers 400, a file the caller may not copy  answers 403, and a file that is not there is answered as missing. An extension the built-in template set does  not cover is not an error: the call succeeds and changes nothing, so compare the answer with what was asked  for. Requires the portal settings permission.
         * @summary Change the default template setting
         * @param {DefaultTemplateSettingsRequestDto} [defaultTemplateSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-template/
         */
        setDefaultTemplate: async (defaultTemplateSettingsRequestDto?: DefaultTemplateSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/defaulttemplate`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(defaultTemplateSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores whether the caller wants documents opened in the current browser tab instead of a new one, and returns  the value that is now stored. It is a preference of the calling account: every authenticated role down to a  guest may change its own copy, and an unauthenticated caller is refused. The portal only keeps the value - the  editor addresses returned by the file operations are the same either way, so this setting changes how a client  opens them rather than what it receives. Writing a value that is already stored is accepted and leaves the  setting untouched. The value is published as `openEditorInSameTab` by `GET api/2.0/files/settings`, which is  the only way to read it back. A new account starts with documents opening in a new tab. Nothing about the  document changes with it: the editing session, the access rights that apply and the addresses handed out are  the same whichever tab a client uses.
         * @summary Open document in the same browser tab
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setOpenEditorInSameTab operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-open-editor-in-same-tab/
         */
        setOpenEditorInSameTab: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/openeditorinsametab`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores whether the caller sees rooms arranged by the groups they belong to instead of one flat list, and  returns the value that is now stored. It is a preference of the calling account: every authenticated role down  to a guest may change its own copy, and an unauthenticated caller is refused. The groups themselves are the  room groups managed under `api/2.0/files/group`, and they exist whether or not this setting is on - the portal  only records the preference, while `GET api/2.0/files/rooms` keeps returning the same rooms either way, so the  arrangement is done by the client. Writing a value that is already stored is accepted and leaves the setting  untouched. The value is published as `organizeRoomsGrouping` by `GET api/2.0/files/settings`, which is the  only way to read it back. A new account starts with the grouping on. Turning it off changes no group: the  groups, the rooms in them and who may see them stay exactly as they were, and are still read through the room  group operations.
         * @summary Organize rooms grouping
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setOrganizeRoomsGrouping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-organize-rooms-grouping/
         */
        setOrganizeRoomsGrouping: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/settings/organizegrouping`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Turns the quick action buttons shown next to a file name on or off, and answers with the value that was  sent. This is a preference of the calling account rather than a portal setting, so it changes what the  caller sees and nothing for anybody else; any authenticated role down to a guest may set it, while an  unauthenticated caller is refused. The value is written only when it differs from the one already stored,  and only then is the change recorded in the audit trail, so repeating the same call is harmless and leaves  no trace. An account that has never set it is treated as having the buttons on. The answer echoes the  request instead of re-reading what was stored, so read the setting back through  `GET api/2.0/files/settings`, which publishes it as `showQuickActions`.
         * @summary Display quick actions
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for showQuickActions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/show-quick-actions/
         */
        showQuickActions: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/showquickactions`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reports that forcesaved versions are not kept as separate file versions in this portal. The operation is a  stub kept for compatibility: it takes no request body, stores nothing and always answers false, so it neither  turns the behaviour on nor off and repeating it changes nothing. What it describes is what happens to the  intermediate saves the editor makes while a document is still open - they update the current version instead  of piling up as new ones in `GET api/2.0/files/file/{fileId}/history`. Any authenticated role down to a guest  may call it; an unauthenticated caller is refused. The same constant is published as `storeForcesave` by  `GET api/2.0/files/settings`, which is the cheaper way to read it. Its companion stub  `PUT api/2.0/files/forcesave` answers for forcesaving itself in the same way. Version history is not affected  by this call either: the versions a document really has are the ones the file history operation lists, and a  new one appears when the editing session is closed.
         * @summary Change the ability to store the forcesaved files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeForcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-forcesave/
         */
        storeForcesave: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/storeforcesave`;
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
         * Stores whether the caller\'s uploads keep the original file when the portal converts them into an editable  format, and returns the value that is now stored. With `set=true` the converted document is saved as a new  file next to the upload, so both the original and the converted copy stay in the folder; with `set=false` the  conversion replaces the uploaded file with a new version of it whenever the caller may edit that file. The  setting belongs to the calling account alone: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. It applies to conversion on upload and to  `PUT api/2.0/files/file/{fileId}/checkconversion`, not to files already stored. The value is published as  `storeOriginalFiles` by `GET api/2.0/files/settings`, which is the only way to read it back. The change is  recorded in the portal audit trail.
         * @summary Change the ability to upload original formats
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeOriginal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-original/
         */
        storeOriginal: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/storeoriginal`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Reports that uploading a file under a name that already exists does not update the existing file. The  operation is a stub kept for compatibility: the request body is read but ignored, nothing is stored, and the  answer is always false, so calling it changes no behaviour and repeating it changes nothing. What actually  decides the outcome of a name clash is the parameter of the upload itself - see the `createNewIfExist` and  conflict-resolution parameters of the operations under `api/2.0/files/{folderId}/upload` and of  `PUT api/2.0/files/fileops/copy`. Any authenticated role down to a guest may call it; an unauthenticated  caller is refused. Because the value is a constant, there is nothing to read back afterwards, and  `GET api/2.0/files/settings` does not publish it. To add a version to a document that is already stored,  address the file directly through the update operations under `api/2.0/files/file/{fileId}` instead of  uploading under the same name and relying on this setting.
         * @summary Update a file version if it exists
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileIfExist operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-if-exist/
         */
        updateFileIfExist: async (settingsRequestDto?: SettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/files/updateifexist`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Uploads a document and makes it the blank the portal creates for one extension, and returns the full set of  templates as it now stands. The request is multipart form data carrying the file, while the extension travels  in the `FileExtension` query parameter; the extension of the uploaded file name must be exactly that one, or  the call answers 403. A PDF is additionally checked to be a fillable form, and answers 403 as well when it is  not one. The upload is capped at 100 MB and a larger body answers 400 while it is still streaming in. The file  is stored in the portal\'s template storage and the file that served as the previous custom blank for that  extension is deleted; an extension the built-in template set does not cover leaves everything unchanged.  Requires the portal settings permission. Use `PUT api/2.0/files/settings/defaulttemplate` to reuse a document  that is already in the portal.
         * @summary Upload a file as the default template setting
         * @param {string} fileExtension The extension the uploaded blank is set for, written in lower case with the leading dot, and travelling in the  query string rather than in the form. It must match the extension of the uploaded file name. Only the  extensions the portal\'s built-in template set covers are accepted, and  `GET api/2.0/files/settings/defaulttemplate` returns exactly that list; an extension outside it leaves the  settings unchanged instead of failing.
         * @param {File} file The template document itself. Its file name must end with the extension named above, a PDF must be a fillable  form, and the body is capped at 100 MB - a larger one is refused while it is still streaming in.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-default-template/
         */
        uploadDefaultTemplate: async (fileExtension: string, file: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileExtension' is not null or undefined
            assertParamExists('uploadDefaultTemplate', 'fileExtension', fileExtension)
            // verify required parameter 'file' is not null or undefined
            assertParamExists('uploadDefaultTemplate', 'file', file)

            const localVarPath = `/api/2.0/files/settings/defaulttemplate`;
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

            if (fileExtension !== undefined) {
                localVarQueryParameter['FileExtension'] = fileExtension;
            }


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
 * FilesSettingsApi - functional programming interface
 * @export
 */
export const FilesSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Turns the portal-wide permission to connect third-party storages such as Google Drive, Dropbox or Nextcloud on  or off, and returns the value that is now stored. Only the portal owner and a DocSpace administrator may  change it: a room administrator, a member or a guest is refused, and so is an unauthenticated caller. This is  a single setting for the whole portal rather than a preference of the caller, so it changes what every account  sees. While it is off, connecting an account through `POST api/2.0/files/thirdparty` is refused and the  contents of an already connected provider folder cannot be listed; the stored connections themselves survive  and work again once it is turned back on. The providers this portal can offer are listed by  `GET api/2.0/files/thirdparty/capabilities`. The same value is published as `enableThirdParty` by  `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from  the portal, not a success flag.
         * @summary Change the third-party settings access
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAccessToThirdparty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-access-to-thirdparty/
         */
        async changeAccessToThirdparty(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeAccessToThirdparty(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeAccessToThirdparty']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Writes the trash auto-clearing setting of the calling account and returns the pair that is now stored. Both  fields are written together from the request, so a call that omits `gap` stores an interval outside the  published list rather than keeping the previous one - always send the interval, including when `set` is false.  While clearing is on, an item is removed from the caller\'s trash for good once it has been there longer than  the interval, and each trashed entry reports the moment it is due to disappear in its own `autoDelete` field;  switching clearing off stops that and leaves whatever is in the trash. The setting belongs to the calling  account alone: every authenticated role down to a guest may change its own, one member\'s choice never affects  another, and an unauthenticated caller is refused. Items already removed are not recoverable. Read the pair  back with `GET api/2.0/files/settings/autocleanup`.
         * @summary Update the trash bin auto-clearing setting
         * @param {AutoCleanupRequestDto} [autoCleanupRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-automatically-clean-up/
         */
        async changeAutomaticallyCleanUp(autoCleanupRequestDto?: AutoCleanupRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AutoCleanUpDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeAutomaticallyCleanUp(autoCleanupRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeAutomaticallyCleanUp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores the access rights the sharing dialog offers the calling account by default, and returns the set that  was actually stored. The body is a bare array of access-right values, not an object. The portal normalises the  array instead of keeping it as sent: it keeps the fill-forms, custom-filter and review entries, then adds  read-and-write or comment - whichever is present, in that order - and stops there, and it falls back to read  alone when nothing else applies, so the response can be shorter than the request and its order can differ. An  empty array clears the setting, after which read alone is reported. A value outside the published list is  rejected as an invalid request. The set belongs to the calling account alone: every authenticated role down to  a guest may store its own, and an unauthenticated caller is refused. Nothing already shared is changed. The  stored set is published as `defaultSharingAccessRights` by `GET api/2.0/files/settings`.
         * @summary Change the default access rights
         * @param {Array<number>} [requestBody] The access rights the sharing dialog should offer by default. The array is the whole request body rather than  a field of an object, and the portal stores a normalised subset of it instead of the array as sent, so read  the answer to learn what was kept. An empty array clears the setting, after which the portal reports read  access alone. A value outside the published list is rejected as an invalid request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDefaultAccessRights operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-default-access-rights/
         */
        async changeDefaultAccessRights(requestBody?: Array<number>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileShareResponseArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDefaultAccessRights(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeDefaultAccessRights']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores whether the caller wants to be asked for confirmation before files and folders are deleted, and returns  the value that is now stored. The setting belongs to the calling account alone: every authenticated role down  to a guest may change its own copy, one member\'s choice never affects another, and an unauthenticated caller  is refused. It is a hint for the interface, not a server-side guard: the delete operations under  `api/2.0/files/fileops` remove whatever they are given regardless of this value, so a client that skips its  own prompt loses nothing but the prompt. Pass `set=true` to be asked again, `set=false` to delete without a  prompt. The same value is published as `confirmDelete` by `GET api/2.0/files/settings`, which is the only way  to read it back. Repeating the call with the same value writes it again and is safe. A new account starts with  the confirmation switched on, and the value says nothing about where deleted items land: they go to the trash  and are cleared from there according to `GET api/2.0/files/settings/autocleanup`.
         * @summary Ask for delete confirmation
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDeleteConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-delete-confirm/
         */
        async changeDeleteConfirm(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDeleteConfirm(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeDeleteConfirm']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Selects the archive format the portal packs the caller\'s multi-item downloads into: `set=true` switches to  `.tar.gz`, `set=false` back to `.zip`. The choice is stored for the calling account only, so every  authenticated role down to a guest may set its own, while an unauthenticated caller is refused. It takes  effect on the archives built by `PUT api/2.0/files/fileops/bulkdownload` and by the download links that  operation returns; archives already produced keep the format they were packed with. The returned archive  object carries no readable fields of its own, so it cannot be used to confirm the change: read `downloadTarGz`  from `GET api/2.0/files/settings` instead. Writing the same value again is safe and changes nothing else. A  new account starts on `.zip`. The format decides only how the archive is packed: which items go into it, and  the access needed to take them, are decided by the bulk-download operation itself, and a single file is  downloaded as it is whatever is stored here.
         * @summary Change the download archive format
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeDownloadZip operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip/
         */
        async changeDownloadZip(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ICompressWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeDownloadZip(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeDownloadZip']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Writes the portal\'s whole external-sharing policy in one request and returns the set that is now in force.  Only the portal owner and a DocSpace administrator may call it; everyone else is refused, including an  unauthenticated caller. Every field of the request is applied, so send the complete set rather than the field  being changed - an omitted boolean is read as false. The portal keeps the set consistent: with `externalShare`  false the default link type is forced to users of this portal only and sharing on social networks is turned  off, and the three restriction fields only matter while external sharing is off.  `blockExistingLinksOnRestrict` decides what happens to links that already exist, so it is the field that  changes access to data already shared. The new set is pushed to the connected clients of the portal as well,  and is published field by field by `GET api/2.0/files/settings`. Sending the same set again is safe.
         * @summary Configure external sharing
         * @param {ExternalSharingSettingsRequestDto} [externalSharingSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for changeExternalSharingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-external-sharing-settings/
         */
        async changeExternalSharingSettings(externalSharingSettingsRequestDto?: ExternalSharingSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExternalSharingSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changeExternalSharingSettings(externalSharingSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.changeExternalSharingSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Writes the portal-wide ONLYOFFICE Docs connection settings - the public Document Server address, its address  inside the private network, the address it calls this portal back on, the request signature secret and header,  and SSL verification - then verifies them against the running Document Server before keeping them. Every  address is optional: an empty value drops the portal\'s own setting so that the deployment default takes over  again. An address gets `http://` prepended when it carries no scheme, while an absolute address with a query  string is rejected with 400, as is a signature secret sent without its header. Only the portal owner and a  DocSpace administrator may call this; a room administrator, a user and a guest are refused with 403. The call  is mutating and safe to repeat with the same body. Verification is live - the editor api script, the  healthcheck, a test conversion, the command service and the document builder are all exercised - and when it  fails the previous settings are restored in full and nothing is changed. The answer is what  `GET api/2.0/files/docservice` returns with no version requested, so `version` comes back empty and the  signature secret is not echoed back.
         * @summary Set the document service address
         * @param {CheckDocServiceUrlRequestDto} [checkDocServiceUrlRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for checkDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-doc-service-url/
         */
        async checkDocServiceUrl(checkDocServiceUrlRequestDto?: CheckDocServiceUrlRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocServiceUrlWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkDocServiceUrl(checkDocServiceUrlRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.checkDocServiceUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores whether file titles are shown to the caller with their extension, and returns the value that is now  stored. It is a preference of the calling account: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. Only the presentation changes - the titles kept by the portal  always include the extension, and the listing and file operations keep returning them in full, so a client  that trims the extension for display must add it back before it renames or searches for anything. Writing a  value that is already stored is accepted and leaves the setting untouched. The value is published as  `displayFileExtension` by `GET api/2.0/files/settings`, which is the only way to read it back. A new account  starts with extensions hidden. This governs display alone: which extensions may be uploaded, viewed or edited  at all is published by the same settings operation as separate format lists.
         * @summary Display a file extension
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayFileExtension operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-file-extension/
         */
        async displayFileExtension(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.displayFileExtension(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.displayFileExtension']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores whether the Recent section is offered to the calling account, and returns the value that is now  stored. The setting belongs to that account alone: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. Hiding the section removes it from the list of section roots  returned by `GET api/2.0/files/@root`, and the document editor stops offering the recent-files entry; the  section itself keeps being maintained, and `GET api/2.0/files/recent` still returns its contents. Pass  `set=true` to show it again. The same value is published as `recentSection` by `GET api/2.0/files/settings`,  which is the only way to read it back. Repeating the call with the same value writes it again and is safe. A  new account starts with the section shown. Hiding it neither clears the recent history nor stops it being  recorded, so showing the section again brings the same entries back.
         * @summary Show the Recent section
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for displayRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-recent/
         */
        async displayRecent(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.displayRecent(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.displayRecent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Turns external (public) links on or off for the whole portal and returns the value that is now stored. Only  the portal owner and a DocSpace administrator may change it: a room administrator, a member or a guest is  refused, and so is an unauthenticated caller. Turning it off also turns sharing on social networks off, so a  following read of `externalShareSocialMedia` reports false without a separate call. This operation sets one  flag; to write the whole external-sharing policy in one request - the default link type, the sections the  restriction applies to and whether existing links are blocked at once - use  `PUT api/2.0/files/settings/externalsharingsettings`. The value is published as `externalShare` by  `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from  the portal rather than a success flag. External links are allowed in a new portal. Turning them off does not  delete the links that already exist - whether those stop working at once is decided by the  `blockExistingLinksOnRestrict` field of the settings operation named above.
         * @summary Change the external sharing ability
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShare operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share/
         */
        async externalShare(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.externalShare(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.externalShare']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Turns the social-network sharing buttons on or off for the whole portal and returns the value that is now in  force. Only the portal owner and a DocSpace administrator may change it; a room administrator, a member or a  guest is refused, and so is an unauthenticated caller. The requested value is combined with the state of  external sharing itself: while that is off, enabling this setting has no effect and the response comes back  false, so turn external sharing on with `PUT api/2.0/files/settings/external` first and only then this one.  Turning external sharing off later switches this setting off again on its own. The value is published as  `externalShareSocialMedia` by `GET api/2.0/files/settings`. Sending the same value again is safe. Read the  response instead of assuming the requested value was stored. The setting governs the share-to-network buttons  offered next to an external link; it neither creates nor revokes links, and the links themselves keep working  either way.
         * @summary Change the external sharing ability on social networks
         * @param {DisplayRequestDto} [displayRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for externalShareSocialMedia operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share-social-media/
         */
        async externalShareSocialMedia(displayRequestDto?: DisplayRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.externalShareSocialMedia(displayRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.externalShareSocialMedia']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports that forcesaving is on for this portal. The operation is a stub kept for compatibility: it takes no  request body, stores nothing and always answers true, so calling it neither turns forcesaving on nor off and  repeating it changes nothing. Forcesaving itself - the editor writing the document back to storage while the  session is still open - is on for every portal and cannot be switched off through the API. Any authenticated  role down to a guest may call it; an unauthenticated caller is refused. The same constant is published as  `forcesave` by `GET api/2.0/files/settings`, which is the cheaper way to read it together with the rest of the  settings. A companion stub, `PUT api/2.0/files/storeforcesave`, answers for the storing of forcesaved versions  in the same way. Nothing in this call reaches a document: to have the current state of an editing session  written to storage, drive the document through the editor operations of the file itself rather than through  this setting.
         * @summary Change the forcesaving ability
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for forcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/forcesave/
         */
        async forcesave(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.forcesave(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.forcesave']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the trash auto-clearing setting of the calling account: whether it is on, and after which interval an  item that sits in the trash is removed for good. The setting belongs to that account alone, so every  authenticated role down to a guest reads its own value and an unauthenticated caller is refused. The first  call for an account is not read-only: when nothing has been stored yet the portal writes the default -  clearing on, thirty days - and returns it, so the answer never comes back empty and a following call reports  the same pair. The interval is the age of an entry in the trash, not a schedule; each trashed entry also  reports the moment it is due to disappear in its own `autoDelete` field. Use  `PUT api/2.0/files/settings/autocleanup` to change the pair, or read it together with the rest of the  configuration from `GET api/2.0/files/settings`.
         * @summary Get the trash bin auto-clearing setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-automatically-clean-up/
         */
        async getAutomaticallyCleanUp(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AutoCleanUpDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAutomaticallyCleanUp(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.getAutomaticallyCleanUp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the blank document the portal creates for each format: one entry per extension the built-in template  set covers, with the file that has been chosen as the blank for it, if any. An entry whose `selectedFile` is  null means no custom template has been set and the built-in blank is used; the remaining fields - title, size,  modification moment and view address - are filled only for a custom one. The list is assembled from the  portal\'s built-in template set on every call, so an extension the set no longer covers disappears from it.  Entries come in the order the interface shows them: the text document, spreadsheet, presentation and PDF  formats first, the rest by extension. Reading the setting requires the portal settings permission, so only the  portal owner and a DocSpace administrator may call it. Use `PUT api/2.0/files/settings/defaulttemplate` to  choose an existing file and the matching POST to upload one.
         * @summary Get the default template setting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDefaultTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-templates/
         */
        async getDefaultTemplates(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultTemplateSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultTemplates(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.getDefaultTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports where this portal expects ONLYOFFICE Docs to be: the public Document Server address, the URL of the  editor api script and of the preload page a client loads before opening a document, the address used inside  the private network, the address the Document Server calls this portal back on, the name of the request  signature header, whether SSL verification is on, and whether all of it is still at the deployment default.  The call is read-only and needs no authorization: an anonymous caller and every role from the portal owner  down to a guest read the same values. Pass `version=true` to have the editor version of the running Document  Server included in `version`; left out, `version` comes back empty and the portal answers without contacting  the Document Server at all. A version request never fails the call - when the Document Server does not answer,  a fallback version string is reported instead of an error, so the value is no proof that the server is  reachable. The signature secret is not part of the answer, only the header name it travels in. To change any  of these settings use `PUT api/2.0/files/docservice`.
         * @summary Get the document service address
         * @param {boolean} [version] Whether the running Document Server is asked for its editor version so that `version` can report it. Left off,  the portal answers from its own settings without contacting the Document Server and `version` comes back  empty.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-doc-service-url/
         */
        async getDocServiceUrl(version?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocServiceUrlWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDocServiceUrl(version, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.getDocServiceUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the descriptor of the Documents module of this portal: its identifier, display title and description,  the address of its start page, the icon and image addresses, the address of its help section, and whether it  is the portal\'s primary module. It is meant for building navigation to the module, not for working with  documents: nothing about files, rooms or permissions comes back, and nothing is changed by the call. The  values follow the portal\'s own configuration and branding, so the title and the description arrive already  translated for the caller. Any authenticated role down to a guest may read it; an unauthenticated caller is  refused. The content is the same for everyone in the portal and changes only when the portal is reconfigured,  so it can be fetched once and cached rather than requested per screen. Only the Documents module is described  here; this document carries no listing of the other modules of the portal. The file-related configuration a  client needs alongside it - the format tables, the editor addresses and the upload limits - comes from  `GET api/2.0/files/settings`.
         * @summary Get the Documents module information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesModule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-module/
         */
        async getFilesModule(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModuleWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilesModule(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.getFilesModule']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the whole Files configuration in one object: the caller\'s own preferences (trash auto-clearing,  default sharing rights, hidden confirmation dialogs, archive format, section visibility), the portal-wide  switches an administrator controls (third-party storages, external sharing), and the static tables a client  needs to work with documents - which extensions can be viewed, edited, converted or uploaded, the URL  templates for the viewer, editor and thumbnails, and the upload limits. This is the read side of the setting  operations in this section: each of those answers with the one value it wrote, and only the trash  auto-clearing and default-template settings have a GET of their own. Marked as allowing anonymous access  because the external-link pages read the extension tables before signing in, but a caller with neither a  session nor a valid link key is still rejected. The result is not filtered by role and is not paginated; fetch  it once per session rather than before each file action.
         * @summary Get file settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getFilesSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-settings/
         */
        async getFilesSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FilesSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFilesSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.getFilesSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores whether the caller is asked to confirm cancelling a running file operation, and returns the value that  is now stored. The setting belongs to the calling account alone: every authenticated role down to a guest may  change its own copy, and an unauthenticated caller is refused. Unlike the conversion prompt of  `PUT api/2.0/files/hideconfirmconvert`, this one works in both directions - `set=true` hides the confirmation,  `set=false` brings it back. It is a hint for the interface only: cancelling an operation through the API is  unaffected, and the operations themselves keep being reported by `GET api/2.0/files/fileops`. The value is  published as `hideConfirmCancelOperation` by `GET api/2.0/files/settings`, which is the only way to read it  back. Writing a value that is already stored is accepted and leaves the setting untouched. A new account  starts with the confirmation shown. The prompt it hides is the one raised when a running copy, move or  download is about to be abandoned, not the one raised before a deletion - that one is  `PUT api/2.0/files/changedeleteconfrim`.
         * @summary Hide confirmation dialog when canceling operations
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmCancelOperation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-cancel-operation/
         */
        async hideConfirmCancelOperation(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hideConfirmCancelOperation(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.hideConfirmCancelOperation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Hides one of the two prompts the interface shows around file conversion, for the calling account only. The  `save` field chooses which prompt, and is not the value being written: `save=true` hides the prompt that  offers to keep a copy in the original format when a file is converted, `save=false` hides the prompt that  offers to open the conversion result. Both flags are one-way - the operation can only hide a prompt, and there  is no API to show it again - so the answer is always true and repeating the call changes nothing. The two  flags are independent: hiding one leaves the other as it was. Every authenticated role down to a guest may set  its own, and an unauthenticated caller is refused. The stored flags are published as `hideConfirmConvertSave`  and `hideConfirmConvertOpen` by `GET api/2.0/files/settings`. Conversion itself is started by  `PUT api/2.0/files/file/{fileId}/checkconversion` and is not affected by either flag.
         * @summary Hide the confirmation dialog when converting
         * @param {HideConfirmConvertRequestDto} [hideConfirmConvertRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmConvert operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-convert/
         */
        async hideConfirmConvert(hideConfirmConvertRequestDto?: HideConfirmConvertRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hideConfirmConvert(hideConfirmConvertRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.hideConfirmConvert']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores whether the caller is warned before the lifetime settings of a room are changed, and returns the value  that is now stored. A room lifetime moves the files of the room to the trash once they reach the configured  age, which is why the interface confirms the change; this setting decides whether that confirmation is shown  to the calling account. It belongs to that account alone: every authenticated role down to a guest may change  its own copy, and an unauthenticated caller is refused. It works in both directions - `set=true` hides the  warning, `set=false` brings it back - and is a hint for the interface only, so changing a room lifetime  through `PUT api/2.0/files/rooms/{id}` is unaffected. The value is published as `hideConfirmRoomLifetime` by  `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the warning  shown, and writing a value that is already stored is accepted and leaves the setting untouched. Hiding the  warning does not shorten or extend any lifetime: what a room does with ageing files is decided by the room  itself.
         * @summary Hide confirmation dialog when changing room lifetime settings
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for hideConfirmRoomLifetime operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-room-lifetime/
         */
        async hideConfirmRoomLifetime(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hideConfirmRoomLifetime(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.hideConfirmRoomLifetime']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores whether the caller wants new documents created with the default name instead of being asked for one,  and returns the value that is now stored. It is a preference of the calling account: every authenticated role  down to a guest may change its own copy, one member\'s choice never affects another, and an unauthenticated  caller is refused. The portal only keeps the value and reports it - the creation operations,  `POST api/2.0/files/{folderId}/file` among them, always use the title they are given, so this setting changes  what an interface asks for rather than what the server does. Writing a value that is already stored is  accepted and leaves the setting and the audit trail untouched. The value is published as `keepNewFileName` by  `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the prompt in  place. The title a created document actually gets, and how a clash with an existing title is resolved, are  decided by the creation request rather than here.
         * @summary Keep the default file name
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for keepNewFileName operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/keep-new-file-name/
         */
        async keepNewFileName(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.keepNewFileName(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.keepNewFileName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Drops the custom blank document configured for one extension and returns the full set of templates as it now  stands. New documents of that extension are created from the portal\'s built-in blank again, and the file that  served as the custom one is deleted from the template storage - the original the template was copied from is  untouched. The extension is named in the request body, and the entry for it comes back with `selectedFile`  null. Resetting an extension that has no custom blank is accepted and changes nothing, which makes a repeated  call safe; an extension the built-in template set does not cover is ignored in the same way. Requires the  portal settings permission, so only the portal owner and a DocSpace administrator may call it. To set a blank  instead of dropping it, use `PUT api/2.0/files/settings/defaulttemplate`. Documents already created from the  custom blank are left as they are - the reset only decides what the next new document of that extension starts  from. The set as it stands can also be read with `GET api/2.0/files/settings/defaulttemplate`.
         * @summary Reset the default template setting
         * @param {DefaultTemplateSettingsResetRequestDto} [defaultTemplateSettingsResetRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for resetDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-default-template/
         */
        async resetDefaultTemplate(defaultTemplateSettingsResetRequestDto?: DefaultTemplateSettingsResetRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultTemplateSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetDefaultTemplate(defaultTemplateSettingsResetRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.resetDefaultTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Makes an existing document the blank the portal creates for one extension, and returns the full set of  templates as it now stands. The file is copied into the portal\'s template storage, so later edits of the  original do not change the blank, and the file that served as the previous custom blank for that extension is  deleted. `selectedFile` takes the identifier of a file the caller may copy - a number for a document stored in  the portal, a string for one in a connected third-party storage - and its extension must be the one named in  `fileExtension`; a mismatch or an identifier of another kind answers 400, a file the caller may not copy  answers 403, and a file that is not there is answered as missing. An extension the built-in template set does  not cover is not an error: the call succeeds and changes nothing, so compare the answer with what was asked  for. Requires the portal settings permission.
         * @summary Change the default template setting
         * @param {DefaultTemplateSettingsRequestDto} [defaultTemplateSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-template/
         */
        async setDefaultTemplate(defaultTemplateSettingsRequestDto?: DefaultTemplateSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultTemplateSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setDefaultTemplate(defaultTemplateSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.setDefaultTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores whether the caller wants documents opened in the current browser tab instead of a new one, and returns  the value that is now stored. It is a preference of the calling account: every authenticated role down to a  guest may change its own copy, and an unauthenticated caller is refused. The portal only keeps the value - the  editor addresses returned by the file operations are the same either way, so this setting changes how a client  opens them rather than what it receives. Writing a value that is already stored is accepted and leaves the  setting untouched. The value is published as `openEditorInSameTab` by `GET api/2.0/files/settings`, which is  the only way to read it back. A new account starts with documents opening in a new tab. Nothing about the  document changes with it: the editing session, the access rights that apply and the addresses handed out are  the same whichever tab a client uses.
         * @summary Open document in the same browser tab
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setOpenEditorInSameTab operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-open-editor-in-same-tab/
         */
        async setOpenEditorInSameTab(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setOpenEditorInSameTab(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.setOpenEditorInSameTab']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores whether the caller sees rooms arranged by the groups they belong to instead of one flat list, and  returns the value that is now stored. It is a preference of the calling account: every authenticated role down  to a guest may change its own copy, and an unauthenticated caller is refused. The groups themselves are the  room groups managed under `api/2.0/files/group`, and they exist whether or not this setting is on - the portal  only records the preference, while `GET api/2.0/files/rooms` keeps returning the same rooms either way, so the  arrangement is done by the client. Writing a value that is already stored is accepted and leaves the setting  untouched. The value is published as `organizeRoomsGrouping` by `GET api/2.0/files/settings`, which is the  only way to read it back. A new account starts with the grouping on. Turning it off changes no group: the  groups, the rooms in them and who may see them stay exactly as they were, and are still read through the room  group operations.
         * @summary Organize rooms grouping
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setOrganizeRoomsGrouping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-organize-rooms-grouping/
         */
        async setOrganizeRoomsGrouping(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setOrganizeRoomsGrouping(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.setOrganizeRoomsGrouping']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Turns the quick action buttons shown next to a file name on or off, and answers with the value that was  sent. This is a preference of the calling account rather than a portal setting, so it changes what the  caller sees and nothing for anybody else; any authenticated role down to a guest may set it, while an  unauthenticated caller is refused. The value is written only when it differs from the one already stored,  and only then is the change recorded in the audit trail, so repeating the same call is harmless and leaves  no trace. An account that has never set it is treated as having the buttons on. The answer echoes the  request instead of re-reading what was stored, so read the setting back through  `GET api/2.0/files/settings`, which publishes it as `showQuickActions`.
         * @summary Display quick actions
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for showQuickActions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/show-quick-actions/
         */
        async showQuickActions(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showQuickActions(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.showQuickActions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports that forcesaved versions are not kept as separate file versions in this portal. The operation is a  stub kept for compatibility: it takes no request body, stores nothing and always answers false, so it neither  turns the behaviour on nor off and repeating it changes nothing. What it describes is what happens to the  intermediate saves the editor makes while a document is still open - they update the current version instead  of piling up as new ones in `GET api/2.0/files/file/{fileId}/history`. Any authenticated role down to a guest  may call it; an unauthenticated caller is refused. The same constant is published as `storeForcesave` by  `GET api/2.0/files/settings`, which is the cheaper way to read it. Its companion stub  `PUT api/2.0/files/forcesave` answers for forcesaving itself in the same way. Version history is not affected  by this call either: the versions a document really has are the ones the file history operation lists, and a  new one appears when the editing session is closed.
         * @summary Change the ability to store the forcesaved files
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeForcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-forcesave/
         */
        async storeForcesave(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeForcesave(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.storeForcesave']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores whether the caller\'s uploads keep the original file when the portal converts them into an editable  format, and returns the value that is now stored. With `set=true` the converted document is saved as a new  file next to the upload, so both the original and the converted copy stay in the folder; with `set=false` the  conversion replaces the uploaded file with a new version of it whenever the caller may edit that file. The  setting belongs to the calling account alone: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. It applies to conversion on upload and to  `PUT api/2.0/files/file/{fileId}/checkconversion`, not to files already stored. The value is published as  `storeOriginalFiles` by `GET api/2.0/files/settings`, which is the only way to read it back. The change is  recorded in the portal audit trail.
         * @summary Change the ability to upload original formats
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for storeOriginal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-original/
         */
        async storeOriginal(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeOriginal(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.storeOriginal']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports that uploading a file under a name that already exists does not update the existing file. The  operation is a stub kept for compatibility: the request body is read but ignored, nothing is stored, and the  answer is always false, so calling it changes no behaviour and repeating it changes nothing. What actually  decides the outcome of a name clash is the parameter of the upload itself - see the `createNewIfExist` and  conflict-resolution parameters of the operations under `api/2.0/files/{folderId}/upload` and of  `PUT api/2.0/files/fileops/copy`. Any authenticated role down to a guest may call it; an unauthenticated  caller is refused. Because the value is a constant, there is nothing to read back afterwards, and  `GET api/2.0/files/settings` does not publish it. To add a version to a document that is already stored,  address the file directly through the update operations under `api/2.0/files/file/{fileId}` instead of  uploading under the same name and relying on this setting.
         * @summary Update a file version if it exists
         * @param {SettingsRequestDto} [settingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateFileIfExist operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-if-exist/
         */
        async updateFileIfExist(settingsRequestDto?: SettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFileIfExist(settingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.updateFileIfExist']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Uploads a document and makes it the blank the portal creates for one extension, and returns the full set of  templates as it now stands. The request is multipart form data carrying the file, while the extension travels  in the `FileExtension` query parameter; the extension of the uploaded file name must be exactly that one, or  the call answers 403. A PDF is additionally checked to be a fillable form, and answers 403 as well when it is  not one. The upload is capped at 100 MB and a larger body answers 400 while it is still streaming in. The file  is stored in the portal\'s template storage and the file that served as the previous custom blank for that  extension is deleted; an extension the built-in template set does not cover leaves everything unchanged.  Requires the portal settings permission. Use `PUT api/2.0/files/settings/defaulttemplate` to reuse a document  that is already in the portal.
         * @summary Upload a file as the default template setting
         * @param {string} fileExtension The extension the uploaded blank is set for, written in lower case with the leading dot, and travelling in the  query string rather than in the form. It must match the extension of the uploaded file name. Only the  extensions the portal\'s built-in template set covers are accepted, and  `GET api/2.0/files/settings/defaulttemplate` returns exactly that list; an extension outside it leaves the  settings unchanged instead of failing.
         * @param {File} file The template document itself. Its file name must end with the extension named above, a PDF must be a fillable  form, and the body is capped at 100 MB - a larger one is refused while it is still streaming in.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-default-template/
         */
        async uploadDefaultTemplate(fileExtension: string, file: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DefaultTemplateSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadDefaultTemplate(fileExtension, file, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FilesSettingsApi.uploadDefaultTemplate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FilesSettingsApi - factory interface
 * @export
 */
export const FilesSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesSettingsApiFp(configuration)
    return {
        /**
         * Turns the portal-wide permission to connect third-party storages such as Google Drive, Dropbox or Nextcloud on  or off, and returns the value that is now stored. Only the portal owner and a DocSpace administrator may  change it: a room administrator, a member or a guest is refused, and so is an unauthenticated caller. This is  a single setting for the whole portal rather than a preference of the caller, so it changes what every account  sees. While it is off, connecting an account through `POST api/2.0/files/thirdparty` is refused and the  contents of an already connected provider folder cannot be listed; the stored connections themselves survive  and work again once it is turned back on. The providers this portal can offer are listed by  `GET api/2.0/files/thirdparty/capabilities`. The same value is published as `enableThirdParty` by  `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from  the portal, not a success flag.
         * @summary Change the third-party settings access
         * @param {FilesSettingsApiChangeAccessToThirdpartyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeAccessToThirdparty operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-access-to-thirdparty/
         * @throws {RequiredError}
         */
        changeAccessToThirdparty(requestParameters: FilesSettingsApiChangeAccessToThirdpartyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.changeAccessToThirdparty(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Writes the trash auto-clearing setting of the calling account and returns the pair that is now stored. Both  fields are written together from the request, so a call that omits `gap` stores an interval outside the  published list rather than keeping the previous one - always send the interval, including when `set` is false.  While clearing is on, an item is removed from the caller\'s trash for good once it has been there longer than  the interval, and each trashed entry reports the moment it is due to disappear in its own `autoDelete` field;  switching clearing off stops that and leaves whatever is in the trash. The setting belongs to the calling  account alone: every authenticated role down to a guest may change its own, one member\'s choice never affects  another, and an unauthenticated caller is refused. Items already removed are not recoverable. Read the pair  back with `GET api/2.0/files/settings/autocleanup`.
         * @summary Update the trash bin auto-clearing setting
         * @param {FilesSettingsApiChangeAutomaticallyCleanUpRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-automatically-clean-up/
         * @throws {RequiredError}
         */
        changeAutomaticallyCleanUp(requestParameters: FilesSettingsApiChangeAutomaticallyCleanUpRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AutoCleanUpDataWrapper> {
            return localVarFp.changeAutomaticallyCleanUp(requestParameters.autoCleanupRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores the access rights the sharing dialog offers the calling account by default, and returns the set that  was actually stored. The body is a bare array of access-right values, not an object. The portal normalises the  array instead of keeping it as sent: it keeps the fill-forms, custom-filter and review entries, then adds  read-and-write or comment - whichever is present, in that order - and stops there, and it falls back to read  alone when nothing else applies, so the response can be shorter than the request and its order can differ. An  empty array clears the setting, after which read alone is reported. A value outside the published list is  rejected as an invalid request. The set belongs to the calling account alone: every authenticated role down to  a guest may store its own, and an unauthenticated caller is refused. Nothing already shared is changed. The  stored set is published as `defaultSharingAccessRights` by `GET api/2.0/files/settings`.
         * @summary Change the default access rights
         * @param {FilesSettingsApiChangeDefaultAccessRightsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeDefaultAccessRights operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-default-access-rights/
         * @throws {RequiredError}
         */
        changeDefaultAccessRights(requestParameters: FilesSettingsApiChangeDefaultAccessRightsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<FileShareResponseArrayWrapper> {
            return localVarFp.changeDefaultAccessRights(requestParameters.requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores whether the caller wants to be asked for confirmation before files and folders are deleted, and returns  the value that is now stored. The setting belongs to the calling account alone: every authenticated role down  to a guest may change its own copy, one member\'s choice never affects another, and an unauthenticated caller  is refused. It is a hint for the interface, not a server-side guard: the delete operations under  `api/2.0/files/fileops` remove whatever they are given regardless of this value, so a client that skips its  own prompt loses nothing but the prompt. Pass `set=true` to be asked again, `set=false` to delete without a  prompt. The same value is published as `confirmDelete` by `GET api/2.0/files/settings`, which is the only way  to read it back. Repeating the call with the same value writes it again and is safe. A new account starts with  the confirmation switched on, and the value says nothing about where deleted items land: they go to the trash  and are cleared from there according to `GET api/2.0/files/settings/autocleanup`.
         * @summary Ask for delete confirmation
         * @param {FilesSettingsApiChangeDeleteConfirmRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeDeleteConfirm operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-delete-confirm/
         * @throws {RequiredError}
         */
        changeDeleteConfirm(requestParameters: FilesSettingsApiChangeDeleteConfirmRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.changeDeleteConfirm(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Selects the archive format the portal packs the caller\'s multi-item downloads into: `set=true` switches to  `.tar.gz`, `set=false` back to `.zip`. The choice is stored for the calling account only, so every  authenticated role down to a guest may set its own, while an unauthenticated caller is refused. It takes  effect on the archives built by `PUT api/2.0/files/fileops/bulkdownload` and by the download links that  operation returns; archives already produced keep the format they were packed with. The returned archive  object carries no readable fields of its own, so it cannot be used to confirm the change: read `downloadTarGz`  from `GET api/2.0/files/settings` instead. Writing the same value again is safe and changes nothing else. A  new account starts on `.zip`. The format decides only how the archive is packed: which items go into it, and  the access needed to take them, are decided by the bulk-download operation itself, and a single file is  downloaded as it is whatever is stored here.
         * @summary Change the download archive format
         * @param {FilesSettingsApiChangeDownloadZipRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeDownloadZip operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-download-zip/
         * @throws {RequiredError}
         */
        changeDownloadZip(requestParameters: FilesSettingsApiChangeDownloadZipRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ICompressWrapper> {
            return localVarFp.changeDownloadZip(requestParameters.displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Writes the portal\'s whole external-sharing policy in one request and returns the set that is now in force.  Only the portal owner and a DocSpace administrator may call it; everyone else is refused, including an  unauthenticated caller. Every field of the request is applied, so send the complete set rather than the field  being changed - an omitted boolean is read as false. The portal keeps the set consistent: with `externalShare`  false the default link type is forced to users of this portal only and sharing on social networks is turned  off, and the three restriction fields only matter while external sharing is off.  `blockExistingLinksOnRestrict` decides what happens to links that already exist, so it is the field that  changes access to data already shared. The new set is pushed to the connected clients of the portal as well,  and is published field by field by `GET api/2.0/files/settings`. Sending the same set again is safe.
         * @summary Configure external sharing
         * @param {FilesSettingsApiChangeExternalSharingSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for changeExternalSharingSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/change-external-sharing-settings/
         * @throws {RequiredError}
         */
        changeExternalSharingSettings(requestParameters: FilesSettingsApiChangeExternalSharingSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ExternalSharingSettingsWrapper> {
            return localVarFp.changeExternalSharingSettings(requestParameters.externalSharingSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Writes the portal-wide ONLYOFFICE Docs connection settings - the public Document Server address, its address  inside the private network, the address it calls this portal back on, the request signature secret and header,  and SSL verification - then verifies them against the running Document Server before keeping them. Every  address is optional: an empty value drops the portal\'s own setting so that the deployment default takes over  again. An address gets `http://` prepended when it carries no scheme, while an absolute address with a query  string is rejected with 400, as is a signature secret sent without its header. Only the portal owner and a  DocSpace administrator may call this; a room administrator, a user and a guest are refused with 403. The call  is mutating and safe to repeat with the same body. Verification is live - the editor api script, the  healthcheck, a test conversion, the command service and the document builder are all exercised - and when it  fails the previous settings are restored in full and nothing is changed. The answer is what  `GET api/2.0/files/docservice` returns with no version requested, so `version` comes back empty and the  signature secret is not echoed back.
         * @summary Set the document service address
         * @param {FilesSettingsApiCheckDocServiceUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for checkDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/check-doc-service-url/
         * @throws {RequiredError}
         */
        checkDocServiceUrl(requestParameters: FilesSettingsApiCheckDocServiceUrlRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocServiceUrlWrapper> {
            return localVarFp.checkDocServiceUrl(requestParameters.checkDocServiceUrlRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores whether file titles are shown to the caller with their extension, and returns the value that is now  stored. It is a preference of the calling account: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. Only the presentation changes - the titles kept by the portal  always include the extension, and the listing and file operations keep returning them in full, so a client  that trims the extension for display must add it back before it renames or searches for anything. Writing a  value that is already stored is accepted and leaves the setting untouched. The value is published as  `displayFileExtension` by `GET api/2.0/files/settings`, which is the only way to read it back. A new account  starts with extensions hidden. This governs display alone: which extensions may be uploaded, viewed or edited  at all is published by the same settings operation as separate format lists.
         * @summary Display a file extension
         * @param {FilesSettingsApiDisplayFileExtensionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for displayFileExtension operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-file-extension/
         * @throws {RequiredError}
         */
        displayFileExtension(requestParameters: FilesSettingsApiDisplayFileExtensionRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.displayFileExtension(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores whether the Recent section is offered to the calling account, and returns the value that is now  stored. The setting belongs to that account alone: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. Hiding the section removes it from the list of section roots  returned by `GET api/2.0/files/@root`, and the document editor stops offering the recent-files entry; the  section itself keeps being maintained, and `GET api/2.0/files/recent` still returns its contents. Pass  `set=true` to show it again. The same value is published as `recentSection` by `GET api/2.0/files/settings`,  which is the only way to read it back. Repeating the call with the same value writes it again and is safe. A  new account starts with the section shown. Hiding it neither clears the recent history nor stops it being  recorded, so showing the section again brings the same entries back.
         * @summary Show the Recent section
         * @param {FilesSettingsApiDisplayRecentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for displayRecent operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/display-recent/
         * @throws {RequiredError}
         */
        displayRecent(requestParameters: FilesSettingsApiDisplayRecentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.displayRecent(requestParameters.displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Turns external (public) links on or off for the whole portal and returns the value that is now stored. Only  the portal owner and a DocSpace administrator may change it: a room administrator, a member or a guest is  refused, and so is an unauthenticated caller. Turning it off also turns sharing on social networks off, so a  following read of `externalShareSocialMedia` reports false without a separate call. This operation sets one  flag; to write the whole external-sharing policy in one request - the default link type, the sections the  restriction applies to and whether existing links are blocked at once - use  `PUT api/2.0/files/settings/externalsharingsettings`. The value is published as `externalShare` by  `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from  the portal rather than a success flag. External links are allowed in a new portal. Turning them off does not  delete the links that already exist - whether those stop working at once is decided by the  `blockExistingLinksOnRestrict` field of the settings operation named above.
         * @summary Change the external sharing ability
         * @param {FilesSettingsApiExternalShareRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for externalShare operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share/
         * @throws {RequiredError}
         */
        externalShare(requestParameters: FilesSettingsApiExternalShareRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.externalShare(requestParameters.displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Turns the social-network sharing buttons on or off for the whole portal and returns the value that is now in  force. Only the portal owner and a DocSpace administrator may change it; a room administrator, a member or a  guest is refused, and so is an unauthenticated caller. The requested value is combined with the state of  external sharing itself: while that is off, enabling this setting has no effect and the response comes back  false, so turn external sharing on with `PUT api/2.0/files/settings/external` first and only then this one.  Turning external sharing off later switches this setting off again on its own. The value is published as  `externalShareSocialMedia` by `GET api/2.0/files/settings`. Sending the same value again is safe. Read the  response instead of assuming the requested value was stored. The setting governs the share-to-network buttons  offered next to an external link; it neither creates nor revokes links, and the links themselves keep working  either way.
         * @summary Change the external sharing ability on social networks
         * @param {FilesSettingsApiExternalShareSocialMediaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for externalShareSocialMedia operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/external-share-social-media/
         * @throws {RequiredError}
         */
        externalShareSocialMedia(requestParameters: FilesSettingsApiExternalShareSocialMediaRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.externalShareSocialMedia(requestParameters.displayRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports that forcesaving is on for this portal. The operation is a stub kept for compatibility: it takes no  request body, stores nothing and always answers true, so calling it neither turns forcesaving on nor off and  repeating it changes nothing. Forcesaving itself - the editor writing the document back to storage while the  session is still open - is on for every portal and cannot be switched off through the API. Any authenticated  role down to a guest may call it; an unauthenticated caller is refused. The same constant is published as  `forcesave` by `GET api/2.0/files/settings`, which is the cheaper way to read it together with the rest of the  settings. A companion stub, `PUT api/2.0/files/storeforcesave`, answers for the storing of forcesaved versions  in the same way. Nothing in this call reaches a document: to have the current state of an editing session  written to storage, drive the document through the editor operations of the file itself rather than through  this setting.
         * @summary Change the forcesaving ability
         * @param {*} [options] Override http request option.
         * REST API Reference for forcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/forcesave/
         * @throws {RequiredError}
         */
        forcesave(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.forcesave(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the trash auto-clearing setting of the calling account: whether it is on, and after which interval an  item that sits in the trash is removed for good. The setting belongs to that account alone, so every  authenticated role down to a guest reads its own value and an unauthenticated caller is refused. The first  call for an account is not read-only: when nothing has been stored yet the portal writes the default -  clearing on, thirty days - and returns it, so the answer never comes back empty and a following call reports  the same pair. The interval is the age of an entry in the trash, not a schedule; each trashed entry also  reports the moment it is due to disappear in its own `autoDelete` field. Use  `PUT api/2.0/files/settings/autocleanup` to change the pair, or read it together with the rest of the  configuration from `GET api/2.0/files/settings`.
         * @summary Get the trash bin auto-clearing setting
         * @param {*} [options] Override http request option.
         * REST API Reference for getAutomaticallyCleanUp operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-automatically-clean-up/
         * @throws {RequiredError}
         */
        getAutomaticallyCleanUp(options?: RawAxiosRequestConfig): AxiosPromise<AutoCleanUpDataWrapper> {
            return localVarFp.getAutomaticallyCleanUp(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the blank document the portal creates for each format: one entry per extension the built-in template  set covers, with the file that has been chosen as the blank for it, if any. An entry whose `selectedFile` is  null means no custom template has been set and the built-in blank is used; the remaining fields - title, size,  modification moment and view address - are filled only for a custom one. The list is assembled from the  portal\'s built-in template set on every call, so an extension the set no longer covers disappears from it.  Entries come in the order the interface shows them: the text document, spreadsheet, presentation and PDF  formats first, the rest by extension. Reading the setting requires the portal settings permission, so only the  portal owner and a DocSpace administrator may call it. Use `PUT api/2.0/files/settings/defaulttemplate` to  choose an existing file and the matching POST to upload one.
         * @summary Get the default template setting
         * @param {*} [options] Override http request option.
         * REST API Reference for getDefaultTemplates operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-default-templates/
         * @throws {RequiredError}
         */
        getDefaultTemplates(options?: RawAxiosRequestConfig): AxiosPromise<DefaultTemplateSettingsWrapper> {
            return localVarFp.getDefaultTemplates(options).then((request) => request(axios, basePath));
        },
        /**
         * Reports where this portal expects ONLYOFFICE Docs to be: the public Document Server address, the URL of the  editor api script and of the preload page a client loads before opening a document, the address used inside  the private network, the address the Document Server calls this portal back on, the name of the request  signature header, whether SSL verification is on, and whether all of it is still at the deployment default.  The call is read-only and needs no authorization: an anonymous caller and every role from the portal owner  down to a guest read the same values. Pass `version=true` to have the editor version of the running Document  Server included in `version`; left out, `version` comes back empty and the portal answers without contacting  the Document Server at all. A version request never fails the call - when the Document Server does not answer,  a fallback version string is reported instead of an error, so the value is no proof that the server is  reachable. The signature secret is not part of the answer, only the header name it travels in. To change any  of these settings use `PUT api/2.0/files/docservice`.
         * @summary Get the document service address
         * @param {FilesSettingsApiGetDocServiceUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getDocServiceUrl operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-doc-service-url/
         * @throws {RequiredError}
         */
        getDocServiceUrl(requestParameters: FilesSettingsApiGetDocServiceUrlRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocServiceUrlWrapper> {
            return localVarFp.getDocServiceUrl(requestParameters.version, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the descriptor of the Documents module of this portal: its identifier, display title and description,  the address of its start page, the icon and image addresses, the address of its help section, and whether it  is the portal\'s primary module. It is meant for building navigation to the module, not for working with  documents: nothing about files, rooms or permissions comes back, and nothing is changed by the call. The  values follow the portal\'s own configuration and branding, so the title and the description arrive already  translated for the caller. Any authenticated role down to a guest may read it; an unauthenticated caller is  refused. The content is the same for everyone in the portal and changes only when the portal is reconfigured,  so it can be fetched once and cached rather than requested per screen. Only the Documents module is described  here; this document carries no listing of the other modules of the portal. The file-related configuration a  client needs alongside it - the format tables, the editor addresses and the upload limits - comes from  `GET api/2.0/files/settings`.
         * @summary Get the Documents module information
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilesModule operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-module/
         * @throws {RequiredError}
         */
        getFilesModule(options?: RawAxiosRequestConfig): AxiosPromise<ModuleWrapper> {
            return localVarFp.getFilesModule(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the whole Files configuration in one object: the caller\'s own preferences (trash auto-clearing,  default sharing rights, hidden confirmation dialogs, archive format, section visibility), the portal-wide  switches an administrator controls (third-party storages, external sharing), and the static tables a client  needs to work with documents - which extensions can be viewed, edited, converted or uploaded, the URL  templates for the viewer, editor and thumbnails, and the upload limits. This is the read side of the setting  operations in this section: each of those answers with the one value it wrote, and only the trash  auto-clearing and default-template settings have a GET of their own. Marked as allowing anonymous access  because the external-link pages read the extension tables before signing in, but a caller with neither a  session nor a valid link key is still rejected. The result is not filtered by role and is not paginated; fetch  it once per session rather than before each file action.
         * @summary Get file settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getFilesSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-files-settings/
         * @throws {RequiredError}
         */
        getFilesSettings(options?: RawAxiosRequestConfig): AxiosPromise<FilesSettingsWrapper> {
            return localVarFp.getFilesSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Stores whether the caller is asked to confirm cancelling a running file operation, and returns the value that  is now stored. The setting belongs to the calling account alone: every authenticated role down to a guest may  change its own copy, and an unauthenticated caller is refused. Unlike the conversion prompt of  `PUT api/2.0/files/hideconfirmconvert`, this one works in both directions - `set=true` hides the confirmation,  `set=false` brings it back. It is a hint for the interface only: cancelling an operation through the API is  unaffected, and the operations themselves keep being reported by `GET api/2.0/files/fileops`. The value is  published as `hideConfirmCancelOperation` by `GET api/2.0/files/settings`, which is the only way to read it  back. Writing a value that is already stored is accepted and leaves the setting untouched. A new account  starts with the confirmation shown. The prompt it hides is the one raised when a running copy, move or  download is about to be abandoned, not the one raised before a deletion - that one is  `PUT api/2.0/files/changedeleteconfrim`.
         * @summary Hide confirmation dialog when canceling operations
         * @param {FilesSettingsApiHideConfirmCancelOperationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for hideConfirmCancelOperation operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-cancel-operation/
         * @throws {RequiredError}
         */
        hideConfirmCancelOperation(requestParameters: FilesSettingsApiHideConfirmCancelOperationRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.hideConfirmCancelOperation(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Hides one of the two prompts the interface shows around file conversion, for the calling account only. The  `save` field chooses which prompt, and is not the value being written: `save=true` hides the prompt that  offers to keep a copy in the original format when a file is converted, `save=false` hides the prompt that  offers to open the conversion result. Both flags are one-way - the operation can only hide a prompt, and there  is no API to show it again - so the answer is always true and repeating the call changes nothing. The two  flags are independent: hiding one leaves the other as it was. Every authenticated role down to a guest may set  its own, and an unauthenticated caller is refused. The stored flags are published as `hideConfirmConvertSave`  and `hideConfirmConvertOpen` by `GET api/2.0/files/settings`. Conversion itself is started by  `PUT api/2.0/files/file/{fileId}/checkconversion` and is not affected by either flag.
         * @summary Hide the confirmation dialog when converting
         * @param {FilesSettingsApiHideConfirmConvertRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for hideConfirmConvert operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-convert/
         * @throws {RequiredError}
         */
        hideConfirmConvert(requestParameters: FilesSettingsApiHideConfirmConvertRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.hideConfirmConvert(requestParameters.hideConfirmConvertRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores whether the caller is warned before the lifetime settings of a room are changed, and returns the value  that is now stored. A room lifetime moves the files of the room to the trash once they reach the configured  age, which is why the interface confirms the change; this setting decides whether that confirmation is shown  to the calling account. It belongs to that account alone: every authenticated role down to a guest may change  its own copy, and an unauthenticated caller is refused. It works in both directions - `set=true` hides the  warning, `set=false` brings it back - and is a hint for the interface only, so changing a room lifetime  through `PUT api/2.0/files/rooms/{id}` is unaffected. The value is published as `hideConfirmRoomLifetime` by  `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the warning  shown, and writing a value that is already stored is accepted and leaves the setting untouched. Hiding the  warning does not shorten or extend any lifetime: what a room does with ageing files is decided by the room  itself.
         * @summary Hide confirmation dialog when changing room lifetime settings
         * @param {FilesSettingsApiHideConfirmRoomLifetimeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for hideConfirmRoomLifetime operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/hide-confirm-room-lifetime/
         * @throws {RequiredError}
         */
        hideConfirmRoomLifetime(requestParameters: FilesSettingsApiHideConfirmRoomLifetimeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.hideConfirmRoomLifetime(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores whether the caller wants new documents created with the default name instead of being asked for one,  and returns the value that is now stored. It is a preference of the calling account: every authenticated role  down to a guest may change its own copy, one member\'s choice never affects another, and an unauthenticated  caller is refused. The portal only keeps the value and reports it - the creation operations,  `POST api/2.0/files/{folderId}/file` among them, always use the title they are given, so this setting changes  what an interface asks for rather than what the server does. Writing a value that is already stored is  accepted and leaves the setting and the audit trail untouched. The value is published as `keepNewFileName` by  `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the prompt in  place. The title a created document actually gets, and how a clash with an existing title is resolved, are  decided by the creation request rather than here.
         * @summary Keep the default file name
         * @param {FilesSettingsApiKeepNewFileNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for keepNewFileName operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/keep-new-file-name/
         * @throws {RequiredError}
         */
        keepNewFileName(requestParameters: FilesSettingsApiKeepNewFileNameRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.keepNewFileName(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Drops the custom blank document configured for one extension and returns the full set of templates as it now  stands. New documents of that extension are created from the portal\'s built-in blank again, and the file that  served as the custom one is deleted from the template storage - the original the template was copied from is  untouched. The extension is named in the request body, and the entry for it comes back with `selectedFile`  null. Resetting an extension that has no custom blank is accepted and changes nothing, which makes a repeated  call safe; an extension the built-in template set does not cover is ignored in the same way. Requires the  portal settings permission, so only the portal owner and a DocSpace administrator may call it. To set a blank  instead of dropping it, use `PUT api/2.0/files/settings/defaulttemplate`. Documents already created from the  custom blank are left as they are - the reset only decides what the next new document of that extension starts  from. The set as it stands can also be read with `GET api/2.0/files/settings/defaulttemplate`.
         * @summary Reset the default template setting
         * @param {FilesSettingsApiResetDefaultTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for resetDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/reset-default-template/
         * @throws {RequiredError}
         */
        resetDefaultTemplate(requestParameters: FilesSettingsApiResetDefaultTemplateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DefaultTemplateSettingsWrapper> {
            return localVarFp.resetDefaultTemplate(requestParameters.defaultTemplateSettingsResetRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Makes an existing document the blank the portal creates for one extension, and returns the full set of  templates as it now stands. The file is copied into the portal\'s template storage, so later edits of the  original do not change the blank, and the file that served as the previous custom blank for that extension is  deleted. `selectedFile` takes the identifier of a file the caller may copy - a number for a document stored in  the portal, a string for one in a connected third-party storage - and its extension must be the one named in  `fileExtension`; a mismatch or an identifier of another kind answers 400, a file the caller may not copy  answers 403, and a file that is not there is answered as missing. An extension the built-in template set does  not cover is not an error: the call succeeds and changes nothing, so compare the answer with what was asked  for. Requires the portal settings permission.
         * @summary Change the default template setting
         * @param {FilesSettingsApiSetDefaultTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-default-template/
         * @throws {RequiredError}
         */
        setDefaultTemplate(requestParameters: FilesSettingsApiSetDefaultTemplateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DefaultTemplateSettingsWrapper> {
            return localVarFp.setDefaultTemplate(requestParameters.defaultTemplateSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores whether the caller wants documents opened in the current browser tab instead of a new one, and returns  the value that is now stored. It is a preference of the calling account: every authenticated role down to a  guest may change its own copy, and an unauthenticated caller is refused. The portal only keeps the value - the  editor addresses returned by the file operations are the same either way, so this setting changes how a client  opens them rather than what it receives. Writing a value that is already stored is accepted and leaves the  setting untouched. The value is published as `openEditorInSameTab` by `GET api/2.0/files/settings`, which is  the only way to read it back. A new account starts with documents opening in a new tab. Nothing about the  document changes with it: the editing session, the access rights that apply and the addresses handed out are  the same whichever tab a client uses.
         * @summary Open document in the same browser tab
         * @param {FilesSettingsApiSetOpenEditorInSameTabRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setOpenEditorInSameTab operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-open-editor-in-same-tab/
         * @throws {RequiredError}
         */
        setOpenEditorInSameTab(requestParameters: FilesSettingsApiSetOpenEditorInSameTabRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.setOpenEditorInSameTab(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores whether the caller sees rooms arranged by the groups they belong to instead of one flat list, and  returns the value that is now stored. It is a preference of the calling account: every authenticated role down  to a guest may change its own copy, and an unauthenticated caller is refused. The groups themselves are the  room groups managed under `api/2.0/files/group`, and they exist whether or not this setting is on - the portal  only records the preference, while `GET api/2.0/files/rooms` keeps returning the same rooms either way, so the  arrangement is done by the client. Writing a value that is already stored is accepted and leaves the setting  untouched. The value is published as `organizeRoomsGrouping` by `GET api/2.0/files/settings`, which is the  only way to read it back. A new account starts with the grouping on. Turning it off changes no group: the  groups, the rooms in them and who may see them stay exactly as they were, and are still read through the room  group operations.
         * @summary Organize rooms grouping
         * @param {FilesSettingsApiSetOrganizeRoomsGroupingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setOrganizeRoomsGrouping operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-organize-rooms-grouping/
         * @throws {RequiredError}
         */
        setOrganizeRoomsGrouping(requestParameters: FilesSettingsApiSetOrganizeRoomsGroupingRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.setOrganizeRoomsGrouping(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Turns the quick action buttons shown next to a file name on or off, and answers with the value that was  sent. This is a preference of the calling account rather than a portal setting, so it changes what the  caller sees and nothing for anybody else; any authenticated role down to a guest may set it, while an  unauthenticated caller is refused. The value is written only when it differs from the one already stored,  and only then is the change recorded in the audit trail, so repeating the same call is harmless and leaves  no trace. An account that has never set it is treated as having the buttons on. The answer echoes the  request instead of re-reading what was stored, so read the setting back through  `GET api/2.0/files/settings`, which publishes it as `showQuickActions`.
         * @summary Display quick actions
         * @param {FilesSettingsApiShowQuickActionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for showQuickActions operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/show-quick-actions/
         * @throws {RequiredError}
         */
        showQuickActions(requestParameters: FilesSettingsApiShowQuickActionsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.showQuickActions(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports that forcesaved versions are not kept as separate file versions in this portal. The operation is a  stub kept for compatibility: it takes no request body, stores nothing and always answers false, so it neither  turns the behaviour on nor off and repeating it changes nothing. What it describes is what happens to the  intermediate saves the editor makes while a document is still open - they update the current version instead  of piling up as new ones in `GET api/2.0/files/file/{fileId}/history`. Any authenticated role down to a guest  may call it; an unauthenticated caller is refused. The same constant is published as `storeForcesave` by  `GET api/2.0/files/settings`, which is the cheaper way to read it. Its companion stub  `PUT api/2.0/files/forcesave` answers for forcesaving itself in the same way. Version history is not affected  by this call either: the versions a document really has are the ones the file history operation lists, and a  new one appears when the editing session is closed.
         * @summary Change the ability to store the forcesaved files
         * @param {*} [options] Override http request option.
         * REST API Reference for storeForcesave operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-forcesave/
         * @throws {RequiredError}
         */
        storeForcesave(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.storeForcesave(options).then((request) => request(axios, basePath));
        },
        /**
         * Stores whether the caller\'s uploads keep the original file when the portal converts them into an editable  format, and returns the value that is now stored. With `set=true` the converted document is saved as a new  file next to the upload, so both the original and the converted copy stay in the folder; with `set=false` the  conversion replaces the uploaded file with a new version of it whenever the caller may edit that file. The  setting belongs to the calling account alone: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. It applies to conversion on upload and to  `PUT api/2.0/files/file/{fileId}/checkconversion`, not to files already stored. The value is published as  `storeOriginalFiles` by `GET api/2.0/files/settings`, which is the only way to read it back. The change is  recorded in the portal audit trail.
         * @summary Change the ability to upload original formats
         * @param {FilesSettingsApiStoreOriginalRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for storeOriginal operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/store-original/
         * @throws {RequiredError}
         */
        storeOriginal(requestParameters: FilesSettingsApiStoreOriginalRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.storeOriginal(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports that uploading a file under a name that already exists does not update the existing file. The  operation is a stub kept for compatibility: the request body is read but ignored, nothing is stored, and the  answer is always false, so calling it changes no behaviour and repeating it changes nothing. What actually  decides the outcome of a name clash is the parameter of the upload itself - see the `createNewIfExist` and  conflict-resolution parameters of the operations under `api/2.0/files/{folderId}/upload` and of  `PUT api/2.0/files/fileops/copy`. Any authenticated role down to a guest may call it; an unauthenticated  caller is refused. Because the value is a constant, there is nothing to read back afterwards, and  `GET api/2.0/files/settings` does not publish it. To add a version to a document that is already stored,  address the file directly through the update operations under `api/2.0/files/file/{fileId}` instead of  uploading under the same name and relying on this setting.
         * @summary Update a file version if it exists
         * @param {FilesSettingsApiUpdateFileIfExistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateFileIfExist operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-file-if-exist/
         * @throws {RequiredError}
         */
        updateFileIfExist(requestParameters: FilesSettingsApiUpdateFileIfExistRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.updateFileIfExist(requestParameters.settingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a document and makes it the blank the portal creates for one extension, and returns the full set of  templates as it now stands. The request is multipart form data carrying the file, while the extension travels  in the `FileExtension` query parameter; the extension of the uploaded file name must be exactly that one, or  the call answers 403. A PDF is additionally checked to be a fillable form, and answers 403 as well when it is  not one. The upload is capped at 100 MB and a larger body answers 400 while it is still streaming in. The file  is stored in the portal\'s template storage and the file that served as the previous custom blank for that  extension is deleted; an extension the built-in template set does not cover leaves everything unchanged.  Requires the portal settings permission. Use `PUT api/2.0/files/settings/defaulttemplate` to reuse a document  that is already in the portal.
         * @summary Upload a file as the default template setting
         * @param {FilesSettingsApiUploadDefaultTemplateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadDefaultTemplate operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-default-template/
         * @throws {RequiredError}
         */
        uploadDefaultTemplate(requestParameters: FilesSettingsApiUploadDefaultTemplateRequest, options?: RawAxiosRequestConfig): AxiosPromise<DefaultTemplateSettingsWrapper> {
            return localVarFp.uploadDefaultTemplate(requestParameters.fileExtension, requestParameters.file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for changeAccessToThirdparty operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiChangeAccessToThirdpartyRequest
 */
export interface FilesSettingsApiChangeAccessToThirdpartyRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiChangeAccessToThirdparty
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for changeAutomaticallyCleanUp operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiChangeAutomaticallyCleanUpRequest
 */
export interface FilesSettingsApiChangeAutomaticallyCleanUpRequest {
    /**
     * 
     * @type {AutoCleanupRequestDto}
     * @memberof FilesSettingsApiChangeAutomaticallyCleanUp
     */
    readonly autoCleanupRequestDto?: AutoCleanupRequestDto
}

/**
 * Request parameters for changeDefaultAccessRights operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiChangeDefaultAccessRightsRequest
 */
export interface FilesSettingsApiChangeDefaultAccessRightsRequest {
    /**
     * The access rights the sharing dialog should offer by default. The array is the whole request body rather than  a field of an object, and the portal stores a normalised subset of it instead of the array as sent, so read  the answer to learn what was kept. An empty array clears the setting, after which the portal reports read  access alone. A value outside the published list is rejected as an invalid request.
     * @type {Array<number>}
     * @memberof FilesSettingsApiChangeDefaultAccessRights
     */
    readonly requestBody?: Array<number>
}

/**
 * Request parameters for changeDeleteConfirm operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiChangeDeleteConfirmRequest
 */
export interface FilesSettingsApiChangeDeleteConfirmRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiChangeDeleteConfirm
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for changeDownloadZip operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiChangeDownloadZipRequest
 */
export interface FilesSettingsApiChangeDownloadZipRequest {
    /**
     * 
     * @type {DisplayRequestDto}
     * @memberof FilesSettingsApiChangeDownloadZip
     */
    readonly displayRequestDto?: DisplayRequestDto
}

/**
 * Request parameters for changeExternalSharingSettings operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiChangeExternalSharingSettingsRequest
 */
export interface FilesSettingsApiChangeExternalSharingSettingsRequest {
    /**
     * 
     * @type {ExternalSharingSettingsRequestDto}
     * @memberof FilesSettingsApiChangeExternalSharingSettings
     */
    readonly externalSharingSettingsRequestDto?: ExternalSharingSettingsRequestDto
}

/**
 * Request parameters for checkDocServiceUrl operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiCheckDocServiceUrlRequest
 */
export interface FilesSettingsApiCheckDocServiceUrlRequest {
    /**
     * 
     * @type {CheckDocServiceUrlRequestDto}
     * @memberof FilesSettingsApiCheckDocServiceUrl
     */
    readonly checkDocServiceUrlRequestDto?: CheckDocServiceUrlRequestDto
}

/**
 * Request parameters for displayFileExtension operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiDisplayFileExtensionRequest
 */
export interface FilesSettingsApiDisplayFileExtensionRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiDisplayFileExtension
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for displayRecent operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiDisplayRecentRequest
 */
export interface FilesSettingsApiDisplayRecentRequest {
    /**
     * 
     * @type {DisplayRequestDto}
     * @memberof FilesSettingsApiDisplayRecent
     */
    readonly displayRequestDto?: DisplayRequestDto
}

/**
 * Request parameters for externalShare operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiExternalShareRequest
 */
export interface FilesSettingsApiExternalShareRequest {
    /**
     * 
     * @type {DisplayRequestDto}
     * @memberof FilesSettingsApiExternalShare
     */
    readonly displayRequestDto?: DisplayRequestDto
}

/**
 * Request parameters for externalShareSocialMedia operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiExternalShareSocialMediaRequest
 */
export interface FilesSettingsApiExternalShareSocialMediaRequest {
    /**
     * 
     * @type {DisplayRequestDto}
     * @memberof FilesSettingsApiExternalShareSocialMedia
     */
    readonly displayRequestDto?: DisplayRequestDto
}

/**
 * Request parameters for getDocServiceUrl operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiGetDocServiceUrlRequest
 */
export interface FilesSettingsApiGetDocServiceUrlRequest {
    /**
     * Whether the running Document Server is asked for its editor version so that `version` can report it. Left off,  the portal answers from its own settings without contacting the Document Server and `version` comes back  empty.
     * @type {boolean}
     * @memberof FilesSettingsApiGetDocServiceUrl
     */
    readonly version?: boolean
}

/**
 * Request parameters for hideConfirmCancelOperation operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiHideConfirmCancelOperationRequest
 */
export interface FilesSettingsApiHideConfirmCancelOperationRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiHideConfirmCancelOperation
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for hideConfirmConvert operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiHideConfirmConvertRequest
 */
export interface FilesSettingsApiHideConfirmConvertRequest {
    /**
     * 
     * @type {HideConfirmConvertRequestDto}
     * @memberof FilesSettingsApiHideConfirmConvert
     */
    readonly hideConfirmConvertRequestDto?: HideConfirmConvertRequestDto
}

/**
 * Request parameters for hideConfirmRoomLifetime operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiHideConfirmRoomLifetimeRequest
 */
export interface FilesSettingsApiHideConfirmRoomLifetimeRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiHideConfirmRoomLifetime
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for keepNewFileName operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiKeepNewFileNameRequest
 */
export interface FilesSettingsApiKeepNewFileNameRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiKeepNewFileName
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for resetDefaultTemplate operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiResetDefaultTemplateRequest
 */
export interface FilesSettingsApiResetDefaultTemplateRequest {
    /**
     * 
     * @type {DefaultTemplateSettingsResetRequestDto}
     * @memberof FilesSettingsApiResetDefaultTemplate
     */
    readonly defaultTemplateSettingsResetRequestDto?: DefaultTemplateSettingsResetRequestDto
}

/**
 * Request parameters for setDefaultTemplate operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiSetDefaultTemplateRequest
 */
export interface FilesSettingsApiSetDefaultTemplateRequest {
    /**
     * 
     * @type {DefaultTemplateSettingsRequestDto}
     * @memberof FilesSettingsApiSetDefaultTemplate
     */
    readonly defaultTemplateSettingsRequestDto?: DefaultTemplateSettingsRequestDto
}

/**
 * Request parameters for setOpenEditorInSameTab operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiSetOpenEditorInSameTabRequest
 */
export interface FilesSettingsApiSetOpenEditorInSameTabRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiSetOpenEditorInSameTab
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for setOrganizeRoomsGrouping operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiSetOrganizeRoomsGroupingRequest
 */
export interface FilesSettingsApiSetOrganizeRoomsGroupingRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiSetOrganizeRoomsGrouping
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for showQuickActions operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiShowQuickActionsRequest
 */
export interface FilesSettingsApiShowQuickActionsRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiShowQuickActions
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for storeOriginal operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiStoreOriginalRequest
 */
export interface FilesSettingsApiStoreOriginalRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiStoreOriginal
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for updateFileIfExist operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiUpdateFileIfExistRequest
 */
export interface FilesSettingsApiUpdateFileIfExistRequest {
    /**
     * 
     * @type {SettingsRequestDto}
     * @memberof FilesSettingsApiUpdateFileIfExist
     */
    readonly settingsRequestDto?: SettingsRequestDto
}

/**
 * Request parameters for uploadDefaultTemplate operation in FilesSettingsApi.
 * @export
 * @interface FilesSettingsApiUploadDefaultTemplateRequest
 */
export interface FilesSettingsApiUploadDefaultTemplateRequest {
    /**
     * The extension the uploaded blank is set for, written in lower case with the leading dot, and travelling in the  query string rather than in the form. It must match the extension of the uploaded file name. Only the  extensions the portal\'s built-in template set covers are accepted, and  `GET api/2.0/files/settings/defaulttemplate` returns exactly that list; an extension outside it leaves the  settings unchanged instead of failing.
     * @type {string}
     * @memberof FilesSettingsApiUploadDefaultTemplate
     */
    readonly fileExtension: string

    /**
     * The template document itself. Its file name must end with the extension named above, a PDF must be a fillable  form, and the body is capped at 100 MB - a larger one is refused while it is still streaming in.
     * @type {File}
     * @memberof FilesSettingsApiUploadDefaultTemplate
     */
    readonly file: File
}

/**
 * FilesSettingsApi - object-oriented interface
 * @export
 * @class FilesSettingsApi
 * @extends {BaseAPI}
 */
export class FilesSettingsApi extends BaseAPI {
    /**
     * Turns the portal-wide permission to connect third-party storages such as Google Drive, Dropbox or Nextcloud on  or off, and returns the value that is now stored. Only the portal owner and a DocSpace administrator may  change it: a room administrator, a member or a guest is refused, and so is an unauthenticated caller. This is  a single setting for the whole portal rather than a preference of the caller, so it changes what every account  sees. While it is off, connecting an account through `POST api/2.0/files/thirdparty` is refused and the  contents of an already connected provider folder cannot be listed; the stored connections themselves survive  and work again once it is turned back on. The providers this portal can offer are listed by  `GET api/2.0/files/thirdparty/capabilities`. The same value is published as `enableThirdParty` by  `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from  the portal, not a success flag.
     * @summary Change the third-party settings access
     * @param {FilesSettingsApiChangeAccessToThirdpartyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeAccessToThirdparty(requestParameters: FilesSettingsApiChangeAccessToThirdpartyRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeAccessToThirdparty(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Writes the trash auto-clearing setting of the calling account and returns the pair that is now stored. Both  fields are written together from the request, so a call that omits `gap` stores an interval outside the  published list rather than keeping the previous one - always send the interval, including when `set` is false.  While clearing is on, an item is removed from the caller\'s trash for good once it has been there longer than  the interval, and each trashed entry reports the moment it is due to disappear in its own `autoDelete` field;  switching clearing off stops that and leaves whatever is in the trash. The setting belongs to the calling  account alone: every authenticated role down to a guest may change its own, one member\'s choice never affects  another, and an unauthenticated caller is refused. Items already removed are not recoverable. Read the pair  back with `GET api/2.0/files/settings/autocleanup`.
     * @summary Update the trash bin auto-clearing setting
     * @param {FilesSettingsApiChangeAutomaticallyCleanUpRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeAutomaticallyCleanUp(requestParameters: FilesSettingsApiChangeAutomaticallyCleanUpRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeAutomaticallyCleanUp(requestParameters.autoCleanupRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores the access rights the sharing dialog offers the calling account by default, and returns the set that  was actually stored. The body is a bare array of access-right values, not an object. The portal normalises the  array instead of keeping it as sent: it keeps the fill-forms, custom-filter and review entries, then adds  read-and-write or comment - whichever is present, in that order - and stops there, and it falls back to read  alone when nothing else applies, so the response can be shorter than the request and its order can differ. An  empty array clears the setting, after which read alone is reported. A value outside the published list is  rejected as an invalid request. The set belongs to the calling account alone: every authenticated role down to  a guest may store its own, and an unauthenticated caller is refused. Nothing already shared is changed. The  stored set is published as `defaultSharingAccessRights` by `GET api/2.0/files/settings`.
     * @summary Change the default access rights
     * @param {FilesSettingsApiChangeDefaultAccessRightsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeDefaultAccessRights(requestParameters: FilesSettingsApiChangeDefaultAccessRightsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeDefaultAccessRights(requestParameters.requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores whether the caller wants to be asked for confirmation before files and folders are deleted, and returns  the value that is now stored. The setting belongs to the calling account alone: every authenticated role down  to a guest may change its own copy, one member\'s choice never affects another, and an unauthenticated caller  is refused. It is a hint for the interface, not a server-side guard: the delete operations under  `api/2.0/files/fileops` remove whatever they are given regardless of this value, so a client that skips its  own prompt loses nothing but the prompt. Pass `set=true` to be asked again, `set=false` to delete without a  prompt. The same value is published as `confirmDelete` by `GET api/2.0/files/settings`, which is the only way  to read it back. Repeating the call with the same value writes it again and is safe. A new account starts with  the confirmation switched on, and the value says nothing about where deleted items land: they go to the trash  and are cleared from there according to `GET api/2.0/files/settings/autocleanup`.
     * @summary Ask for delete confirmation
     * @param {FilesSettingsApiChangeDeleteConfirmRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeDeleteConfirm(requestParameters: FilesSettingsApiChangeDeleteConfirmRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeDeleteConfirm(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Selects the archive format the portal packs the caller\'s multi-item downloads into: `set=true` switches to  `.tar.gz`, `set=false` back to `.zip`. The choice is stored for the calling account only, so every  authenticated role down to a guest may set its own, while an unauthenticated caller is refused. It takes  effect on the archives built by `PUT api/2.0/files/fileops/bulkdownload` and by the download links that  operation returns; archives already produced keep the format they were packed with. The returned archive  object carries no readable fields of its own, so it cannot be used to confirm the change: read `downloadTarGz`  from `GET api/2.0/files/settings` instead. Writing the same value again is safe and changes nothing else. A  new account starts on `.zip`. The format decides only how the archive is packed: which items go into it, and  the access needed to take them, are decided by the bulk-download operation itself, and a single file is  downloaded as it is whatever is stored here.
     * @summary Change the download archive format
     * @param {FilesSettingsApiChangeDownloadZipRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeDownloadZip(requestParameters: FilesSettingsApiChangeDownloadZipRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeDownloadZip(requestParameters.displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Writes the portal\'s whole external-sharing policy in one request and returns the set that is now in force.  Only the portal owner and a DocSpace administrator may call it; everyone else is refused, including an  unauthenticated caller. Every field of the request is applied, so send the complete set rather than the field  being changed - an omitted boolean is read as false. The portal keeps the set consistent: with `externalShare`  false the default link type is forced to users of this portal only and sharing on social networks is turned  off, and the three restriction fields only matter while external sharing is off.  `blockExistingLinksOnRestrict` decides what happens to links that already exist, so it is the field that  changes access to data already shared. The new set is pushed to the connected clients of the portal as well,  and is published field by field by `GET api/2.0/files/settings`. Sending the same set again is safe.
     * @summary Configure external sharing
     * @param {FilesSettingsApiChangeExternalSharingSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public changeExternalSharingSettings(requestParameters: FilesSettingsApiChangeExternalSharingSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).changeExternalSharingSettings(requestParameters.externalSharingSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Writes the portal-wide ONLYOFFICE Docs connection settings - the public Document Server address, its address  inside the private network, the address it calls this portal back on, the request signature secret and header,  and SSL verification - then verifies them against the running Document Server before keeping them. Every  address is optional: an empty value drops the portal\'s own setting so that the deployment default takes over  again. An address gets `http://` prepended when it carries no scheme, while an absolute address with a query  string is rejected with 400, as is a signature secret sent without its header. Only the portal owner and a  DocSpace administrator may call this; a room administrator, a user and a guest are refused with 403. The call  is mutating and safe to repeat with the same body. Verification is live - the editor api script, the  healthcheck, a test conversion, the command service and the document builder are all exercised - and when it  fails the previous settings are restored in full and nothing is changed. The answer is what  `GET api/2.0/files/docservice` returns with no version requested, so `version` comes back empty and the  signature secret is not echoed back.
     * @summary Set the document service address
     * @param {FilesSettingsApiCheckDocServiceUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public checkDocServiceUrl(requestParameters: FilesSettingsApiCheckDocServiceUrlRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).checkDocServiceUrl(requestParameters.checkDocServiceUrlRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores whether file titles are shown to the caller with their extension, and returns the value that is now  stored. It is a preference of the calling account: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. Only the presentation changes - the titles kept by the portal  always include the extension, and the listing and file operations keep returning them in full, so a client  that trims the extension for display must add it back before it renames or searches for anything. Writing a  value that is already stored is accepted and leaves the setting untouched. The value is published as  `displayFileExtension` by `GET api/2.0/files/settings`, which is the only way to read it back. A new account  starts with extensions hidden. This governs display alone: which extensions may be uploaded, viewed or edited  at all is published by the same settings operation as separate format lists.
     * @summary Display a file extension
     * @param {FilesSettingsApiDisplayFileExtensionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public displayFileExtension(requestParameters: FilesSettingsApiDisplayFileExtensionRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).displayFileExtension(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores whether the Recent section is offered to the calling account, and returns the value that is now  stored. The setting belongs to that account alone: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. Hiding the section removes it from the list of section roots  returned by `GET api/2.0/files/@root`, and the document editor stops offering the recent-files entry; the  section itself keeps being maintained, and `GET api/2.0/files/recent` still returns its contents. Pass  `set=true` to show it again. The same value is published as `recentSection` by `GET api/2.0/files/settings`,  which is the only way to read it back. Repeating the call with the same value writes it again and is safe. A  new account starts with the section shown. Hiding it neither clears the recent history nor stops it being  recorded, so showing the section again brings the same entries back.
     * @summary Show the Recent section
     * @param {FilesSettingsApiDisplayRecentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public displayRecent(requestParameters: FilesSettingsApiDisplayRecentRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).displayRecent(requestParameters.displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Turns external (public) links on or off for the whole portal and returns the value that is now stored. Only  the portal owner and a DocSpace administrator may change it: a room administrator, a member or a guest is  refused, and so is an unauthenticated caller. Turning it off also turns sharing on social networks off, so a  following read of `externalShareSocialMedia` reports false without a separate call. This operation sets one  flag; to write the whole external-sharing policy in one request - the default link type, the sections the  restriction applies to and whether existing links are blocked at once - use  `PUT api/2.0/files/settings/externalsharingsettings`. The value is published as `externalShare` by  `GET api/2.0/files/settings`. Sending the same value again is safe. The response is the value read back from  the portal rather than a success flag. External links are allowed in a new portal. Turning them off does not  delete the links that already exist - whether those stop working at once is decided by the  `blockExistingLinksOnRestrict` field of the settings operation named above.
     * @summary Change the external sharing ability
     * @param {FilesSettingsApiExternalShareRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public externalShare(requestParameters: FilesSettingsApiExternalShareRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).externalShare(requestParameters.displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Turns the social-network sharing buttons on or off for the whole portal and returns the value that is now in  force. Only the portal owner and a DocSpace administrator may change it; a room administrator, a member or a  guest is refused, and so is an unauthenticated caller. The requested value is combined with the state of  external sharing itself: while that is off, enabling this setting has no effect and the response comes back  false, so turn external sharing on with `PUT api/2.0/files/settings/external` first and only then this one.  Turning external sharing off later switches this setting off again on its own. The value is published as  `externalShareSocialMedia` by `GET api/2.0/files/settings`. Sending the same value again is safe. Read the  response instead of assuming the requested value was stored. The setting governs the share-to-network buttons  offered next to an external link; it neither creates nor revokes links, and the links themselves keep working  either way.
     * @summary Change the external sharing ability on social networks
     * @param {FilesSettingsApiExternalShareSocialMediaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public externalShareSocialMedia(requestParameters: FilesSettingsApiExternalShareSocialMediaRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).externalShareSocialMedia(requestParameters.displayRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports that forcesaving is on for this portal. The operation is a stub kept for compatibility: it takes no  request body, stores nothing and always answers true, so calling it neither turns forcesaving on nor off and  repeating it changes nothing. Forcesaving itself - the editor writing the document back to storage while the  session is still open - is on for every portal and cannot be switched off through the API. Any authenticated  role down to a guest may call it; an unauthenticated caller is refused. The same constant is published as  `forcesave` by `GET api/2.0/files/settings`, which is the cheaper way to read it together with the rest of the  settings. A companion stub, `PUT api/2.0/files/storeforcesave`, answers for the storing of forcesaved versions  in the same way. Nothing in this call reaches a document: to have the current state of an editing session  written to storage, drive the document through the editor operations of the file itself rather than through  this setting.
     * @summary Change the forcesaving ability
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public forcesave(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).forcesave(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the trash auto-clearing setting of the calling account: whether it is on, and after which interval an  item that sits in the trash is removed for good. The setting belongs to that account alone, so every  authenticated role down to a guest reads its own value and an unauthenticated caller is refused. The first  call for an account is not read-only: when nothing has been stored yet the portal writes the default -  clearing on, thirty days - and returns it, so the answer never comes back empty and a following call reports  the same pair. The interval is the age of an entry in the trash, not a schedule; each trashed entry also  reports the moment it is due to disappear in its own `autoDelete` field. Use  `PUT api/2.0/files/settings/autocleanup` to change the pair, or read it together with the rest of the  configuration from `GET api/2.0/files/settings`.
     * @summary Get the trash bin auto-clearing setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public getAutomaticallyCleanUp(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).getAutomaticallyCleanUp(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the blank document the portal creates for each format: one entry per extension the built-in template  set covers, with the file that has been chosen as the blank for it, if any. An entry whose `selectedFile` is  null means no custom template has been set and the built-in blank is used; the remaining fields - title, size,  modification moment and view address - are filled only for a custom one. The list is assembled from the  portal\'s built-in template set on every call, so an extension the set no longer covers disappears from it.  Entries come in the order the interface shows them: the text document, spreadsheet, presentation and PDF  formats first, the rest by extension. Reading the setting requires the portal settings permission, so only the  portal owner and a DocSpace administrator may call it. Use `PUT api/2.0/files/settings/defaulttemplate` to  choose an existing file and the matching POST to upload one.
     * @summary Get the default template setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public getDefaultTemplates(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).getDefaultTemplates(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports where this portal expects ONLYOFFICE Docs to be: the public Document Server address, the URL of the  editor api script and of the preload page a client loads before opening a document, the address used inside  the private network, the address the Document Server calls this portal back on, the name of the request  signature header, whether SSL verification is on, and whether all of it is still at the deployment default.  The call is read-only and needs no authorization: an anonymous caller and every role from the portal owner  down to a guest read the same values. Pass `version=true` to have the editor version of the running Document  Server included in `version`; left out, `version` comes back empty and the portal answers without contacting  the Document Server at all. A version request never fails the call - when the Document Server does not answer,  a fallback version string is reported instead of an error, so the value is no proof that the server is  reachable. The signature secret is not part of the answer, only the header name it travels in. To change any  of these settings use `PUT api/2.0/files/docservice`.
     * @summary Get the document service address
     * @param {FilesSettingsApiGetDocServiceUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public getDocServiceUrl(requestParameters: FilesSettingsApiGetDocServiceUrlRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).getDocServiceUrl(requestParameters.version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the descriptor of the Documents module of this portal: its identifier, display title and description,  the address of its start page, the icon and image addresses, the address of its help section, and whether it  is the portal\'s primary module. It is meant for building navigation to the module, not for working with  documents: nothing about files, rooms or permissions comes back, and nothing is changed by the call. The  values follow the portal\'s own configuration and branding, so the title and the description arrive already  translated for the caller. Any authenticated role down to a guest may read it; an unauthenticated caller is  refused. The content is the same for everyone in the portal and changes only when the portal is reconfigured,  so it can be fetched once and cached rather than requested per screen. Only the Documents module is described  here; this document carries no listing of the other modules of the portal. The file-related configuration a  client needs alongside it - the format tables, the editor addresses and the upload limits - comes from  `GET api/2.0/files/settings`.
     * @summary Get the Documents module information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public getFilesModule(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).getFilesModule(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the whole Files configuration in one object: the caller\'s own preferences (trash auto-clearing,  default sharing rights, hidden confirmation dialogs, archive format, section visibility), the portal-wide  switches an administrator controls (third-party storages, external sharing), and the static tables a client  needs to work with documents - which extensions can be viewed, edited, converted or uploaded, the URL  templates for the viewer, editor and thumbnails, and the upload limits. This is the read side of the setting  operations in this section: each of those answers with the one value it wrote, and only the trash  auto-clearing and default-template settings have a GET of their own. Marked as allowing anonymous access  because the external-link pages read the extension tables before signing in, but a caller with neither a  session nor a valid link key is still rejected. The result is not filtered by role and is not paginated; fetch  it once per session rather than before each file action.
     * @summary Get file settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public getFilesSettings(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).getFilesSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores whether the caller is asked to confirm cancelling a running file operation, and returns the value that  is now stored. The setting belongs to the calling account alone: every authenticated role down to a guest may  change its own copy, and an unauthenticated caller is refused. Unlike the conversion prompt of  `PUT api/2.0/files/hideconfirmconvert`, this one works in both directions - `set=true` hides the confirmation,  `set=false` brings it back. It is a hint for the interface only: cancelling an operation through the API is  unaffected, and the operations themselves keep being reported by `GET api/2.0/files/fileops`. The value is  published as `hideConfirmCancelOperation` by `GET api/2.0/files/settings`, which is the only way to read it  back. Writing a value that is already stored is accepted and leaves the setting untouched. A new account  starts with the confirmation shown. The prompt it hides is the one raised when a running copy, move or  download is about to be abandoned, not the one raised before a deletion - that one is  `PUT api/2.0/files/changedeleteconfrim`.
     * @summary Hide confirmation dialog when canceling operations
     * @param {FilesSettingsApiHideConfirmCancelOperationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public hideConfirmCancelOperation(requestParameters: FilesSettingsApiHideConfirmCancelOperationRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).hideConfirmCancelOperation(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Hides one of the two prompts the interface shows around file conversion, for the calling account only. The  `save` field chooses which prompt, and is not the value being written: `save=true` hides the prompt that  offers to keep a copy in the original format when a file is converted, `save=false` hides the prompt that  offers to open the conversion result. Both flags are one-way - the operation can only hide a prompt, and there  is no API to show it again - so the answer is always true and repeating the call changes nothing. The two  flags are independent: hiding one leaves the other as it was. Every authenticated role down to a guest may set  its own, and an unauthenticated caller is refused. The stored flags are published as `hideConfirmConvertSave`  and `hideConfirmConvertOpen` by `GET api/2.0/files/settings`. Conversion itself is started by  `PUT api/2.0/files/file/{fileId}/checkconversion` and is not affected by either flag.
     * @summary Hide the confirmation dialog when converting
     * @param {FilesSettingsApiHideConfirmConvertRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public hideConfirmConvert(requestParameters: FilesSettingsApiHideConfirmConvertRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).hideConfirmConvert(requestParameters.hideConfirmConvertRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores whether the caller is warned before the lifetime settings of a room are changed, and returns the value  that is now stored. A room lifetime moves the files of the room to the trash once they reach the configured  age, which is why the interface confirms the change; this setting decides whether that confirmation is shown  to the calling account. It belongs to that account alone: every authenticated role down to a guest may change  its own copy, and an unauthenticated caller is refused. It works in both directions - `set=true` hides the  warning, `set=false` brings it back - and is a hint for the interface only, so changing a room lifetime  through `PUT api/2.0/files/rooms/{id}` is unaffected. The value is published as `hideConfirmRoomLifetime` by  `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the warning  shown, and writing a value that is already stored is accepted and leaves the setting untouched. Hiding the  warning does not shorten or extend any lifetime: what a room does with ageing files is decided by the room  itself.
     * @summary Hide confirmation dialog when changing room lifetime settings
     * @param {FilesSettingsApiHideConfirmRoomLifetimeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public hideConfirmRoomLifetime(requestParameters: FilesSettingsApiHideConfirmRoomLifetimeRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).hideConfirmRoomLifetime(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores whether the caller wants new documents created with the default name instead of being asked for one,  and returns the value that is now stored. It is a preference of the calling account: every authenticated role  down to a guest may change its own copy, one member\'s choice never affects another, and an unauthenticated  caller is refused. The portal only keeps the value and reports it - the creation operations,  `POST api/2.0/files/{folderId}/file` among them, always use the title they are given, so this setting changes  what an interface asks for rather than what the server does. Writing a value that is already stored is  accepted and leaves the setting and the audit trail untouched. The value is published as `keepNewFileName` by  `GET api/2.0/files/settings`, which is the only way to read it back. A new account starts with the prompt in  place. The title a created document actually gets, and how a clash with an existing title is resolved, are  decided by the creation request rather than here.
     * @summary Keep the default file name
     * @param {FilesSettingsApiKeepNewFileNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public keepNewFileName(requestParameters: FilesSettingsApiKeepNewFileNameRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).keepNewFileName(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Drops the custom blank document configured for one extension and returns the full set of templates as it now  stands. New documents of that extension are created from the portal\'s built-in blank again, and the file that  served as the custom one is deleted from the template storage - the original the template was copied from is  untouched. The extension is named in the request body, and the entry for it comes back with `selectedFile`  null. Resetting an extension that has no custom blank is accepted and changes nothing, which makes a repeated  call safe; an extension the built-in template set does not cover is ignored in the same way. Requires the  portal settings permission, so only the portal owner and a DocSpace administrator may call it. To set a blank  instead of dropping it, use `PUT api/2.0/files/settings/defaulttemplate`. Documents already created from the  custom blank are left as they are - the reset only decides what the next new document of that extension starts  from. The set as it stands can also be read with `GET api/2.0/files/settings/defaulttemplate`.
     * @summary Reset the default template setting
     * @param {FilesSettingsApiResetDefaultTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public resetDefaultTemplate(requestParameters: FilesSettingsApiResetDefaultTemplateRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).resetDefaultTemplate(requestParameters.defaultTemplateSettingsResetRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Makes an existing document the blank the portal creates for one extension, and returns the full set of  templates as it now stands. The file is copied into the portal\'s template storage, so later edits of the  original do not change the blank, and the file that served as the previous custom blank for that extension is  deleted. `selectedFile` takes the identifier of a file the caller may copy - a number for a document stored in  the portal, a string for one in a connected third-party storage - and its extension must be the one named in  `fileExtension`; a mismatch or an identifier of another kind answers 400, a file the caller may not copy  answers 403, and a file that is not there is answered as missing. An extension the built-in template set does  not cover is not an error: the call succeeds and changes nothing, so compare the answer with what was asked  for. Requires the portal settings permission.
     * @summary Change the default template setting
     * @param {FilesSettingsApiSetDefaultTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public setDefaultTemplate(requestParameters: FilesSettingsApiSetDefaultTemplateRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).setDefaultTemplate(requestParameters.defaultTemplateSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores whether the caller wants documents opened in the current browser tab instead of a new one, and returns  the value that is now stored. It is a preference of the calling account: every authenticated role down to a  guest may change its own copy, and an unauthenticated caller is refused. The portal only keeps the value - the  editor addresses returned by the file operations are the same either way, so this setting changes how a client  opens them rather than what it receives. Writing a value that is already stored is accepted and leaves the  setting untouched. The value is published as `openEditorInSameTab` by `GET api/2.0/files/settings`, which is  the only way to read it back. A new account starts with documents opening in a new tab. Nothing about the  document changes with it: the editing session, the access rights that apply and the addresses handed out are  the same whichever tab a client uses.
     * @summary Open document in the same browser tab
     * @param {FilesSettingsApiSetOpenEditorInSameTabRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public setOpenEditorInSameTab(requestParameters: FilesSettingsApiSetOpenEditorInSameTabRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).setOpenEditorInSameTab(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores whether the caller sees rooms arranged by the groups they belong to instead of one flat list, and  returns the value that is now stored. It is a preference of the calling account: every authenticated role down  to a guest may change its own copy, and an unauthenticated caller is refused. The groups themselves are the  room groups managed under `api/2.0/files/group`, and they exist whether or not this setting is on - the portal  only records the preference, while `GET api/2.0/files/rooms` keeps returning the same rooms either way, so the  arrangement is done by the client. Writing a value that is already stored is accepted and leaves the setting  untouched. The value is published as `organizeRoomsGrouping` by `GET api/2.0/files/settings`, which is the  only way to read it back. A new account starts with the grouping on. Turning it off changes no group: the  groups, the rooms in them and who may see them stay exactly as they were, and are still read through the room  group operations.
     * @summary Organize rooms grouping
     * @param {FilesSettingsApiSetOrganizeRoomsGroupingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public setOrganizeRoomsGrouping(requestParameters: FilesSettingsApiSetOrganizeRoomsGroupingRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).setOrganizeRoomsGrouping(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Turns the quick action buttons shown next to a file name on or off, and answers with the value that was  sent. This is a preference of the calling account rather than a portal setting, so it changes what the  caller sees and nothing for anybody else; any authenticated role down to a guest may set it, while an  unauthenticated caller is refused. The value is written only when it differs from the one already stored,  and only then is the change recorded in the audit trail, so repeating the same call is harmless and leaves  no trace. An account that has never set it is treated as having the buttons on. The answer echoes the  request instead of re-reading what was stored, so read the setting back through  `GET api/2.0/files/settings`, which publishes it as `showQuickActions`.
     * @summary Display quick actions
     * @param {FilesSettingsApiShowQuickActionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public showQuickActions(requestParameters: FilesSettingsApiShowQuickActionsRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).showQuickActions(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports that forcesaved versions are not kept as separate file versions in this portal. The operation is a  stub kept for compatibility: it takes no request body, stores nothing and always answers false, so it neither  turns the behaviour on nor off and repeating it changes nothing. What it describes is what happens to the  intermediate saves the editor makes while a document is still open - they update the current version instead  of piling up as new ones in `GET api/2.0/files/file/{fileId}/history`. Any authenticated role down to a guest  may call it; an unauthenticated caller is refused. The same constant is published as `storeForcesave` by  `GET api/2.0/files/settings`, which is the cheaper way to read it. Its companion stub  `PUT api/2.0/files/forcesave` answers for forcesaving itself in the same way. Version history is not affected  by this call either: the versions a document really has are the ones the file history operation lists, and a  new one appears when the editing session is closed.
     * @summary Change the ability to store the forcesaved files
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public storeForcesave(options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).storeForcesave(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores whether the caller\'s uploads keep the original file when the portal converts them into an editable  format, and returns the value that is now stored. With `set=true` the converted document is saved as a new  file next to the upload, so both the original and the converted copy stay in the folder; with `set=false` the  conversion replaces the uploaded file with a new version of it whenever the caller may edit that file. The  setting belongs to the calling account alone: every authenticated role down to a guest may change its own  copy, and an unauthenticated caller is refused. It applies to conversion on upload and to  `PUT api/2.0/files/file/{fileId}/checkconversion`, not to files already stored. The value is published as  `storeOriginalFiles` by `GET api/2.0/files/settings`, which is the only way to read it back. The change is  recorded in the portal audit trail.
     * @summary Change the ability to upload original formats
     * @param {FilesSettingsApiStoreOriginalRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public storeOriginal(requestParameters: FilesSettingsApiStoreOriginalRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).storeOriginal(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports that uploading a file under a name that already exists does not update the existing file. The  operation is a stub kept for compatibility: the request body is read but ignored, nothing is stored, and the  answer is always false, so calling it changes no behaviour and repeating it changes nothing. What actually  decides the outcome of a name clash is the parameter of the upload itself - see the `createNewIfExist` and  conflict-resolution parameters of the operations under `api/2.0/files/{folderId}/upload` and of  `PUT api/2.0/files/fileops/copy`. Any authenticated role down to a guest may call it; an unauthenticated  caller is refused. Because the value is a constant, there is nothing to read back afterwards, and  `GET api/2.0/files/settings` does not publish it. To add a version to a document that is already stored,  address the file directly through the update operations under `api/2.0/files/file/{fileId}` instead of  uploading under the same name and relying on this setting.
     * @summary Update a file version if it exists
     * @param {FilesSettingsApiUpdateFileIfExistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public updateFileIfExist(requestParameters: FilesSettingsApiUpdateFileIfExistRequest = {}, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).updateFileIfExist(requestParameters.settingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a document and makes it the blank the portal creates for one extension, and returns the full set of  templates as it now stands. The request is multipart form data carrying the file, while the extension travels  in the `FileExtension` query parameter; the extension of the uploaded file name must be exactly that one, or  the call answers 403. A PDF is additionally checked to be a fillable form, and answers 403 as well when it is  not one. The upload is capped at 100 MB and a larger body answers 400 while it is still streaming in. The file  is stored in the portal\'s template storage and the file that served as the previous custom blank for that  extension is deleted; an extension the built-in template set does not cover leaves everything unchanged.  Requires the portal settings permission. Use `PUT api/2.0/files/settings/defaulttemplate` to reuse a document  that is already in the portal.
     * @summary Upload a file as the default template setting
     * @param {FilesSettingsApiUploadDefaultTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesSettingsApi
     */
    public uploadDefaultTemplate(requestParameters: FilesSettingsApiUploadDefaultTemplateRequest, options?: RawAxiosRequestConfig) {
        return FilesSettingsApiFp(this.configuration).uploadDefaultTemplate(requestParameters.fileExtension, requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }
}

