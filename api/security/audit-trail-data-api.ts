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
import type { ActionType } from '../../models';
// @ts-ignore
import type { AuditEventArrayWrapper } from '../../models';
// @ts-ignore
import type { AuditReportFormat } from '../../models';
// @ts-ignore
import type { AuditTrailProductArrayWrapper } from '../../models';
// @ts-ignore
import type { AuditTrailTypesWrapper } from '../../models';
// @ts-ignore
import type { DocumentBuilderTaskWrapper } from '../../models';
// @ts-ignore
import type { EntryType } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { LocationType } from '../../models';
// @ts-ignore
import type { MessageAction } from '../../models';
// @ts-ignore
import type { ProductType } from '../../models';
// @ts-ignore
import type { TenantAuditSettingsRequestDto } from '../../models';
// @ts-ignore
import type { TenantAuditSettingsWrapper } from '../../models';
/**
 * AuditTrailDataApi - axios parameter creator
 * @export
 */
export const AuditTrailDataApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Queues a report of the portal\'s audit trail and returns the state of the background job that builds it. By  default the report covers the period reaching from now back by the audit trail lifetime that  `GET api/2.0/security/audit/settings/lifetime` reports; `from` and `to` narrow it, a `from` older than that  window is moved up to its start, a `to` in the future is moved back to now, and a period that ends before it  starts is answered with 400. No other filter of `GET api/2.0/security/audit/events/filter` applies here. The  caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. The file is not ready when the response arrives - poll  `GET api/2.0/security/audit/events/report` until `isCompleted` is true, then take `resultFileUrl`, and treat a  non-empty `error` as a failed build. The finished file is saved to the caller\'s My documents section, as an XLSX  workbook by default or as CSV when `format=Csv`, and `resultFileId` identifies it in either format;  `resultFileUrl` opens it in the editor, except for a CSV file too large for the editor, which it downloads  instead. An XLSX report keeps only the most recent events, at most 200,000 by default and fewer when the events  are long, and its header says how many were left out; `format=Csv` exports every event of the period. One job  runs per caller and kind: calling again while the previous one is still building returns that job instead of  starting a second, and `DELETE api/2.0/security/audit/events/report` cancels it.
         * @summary Start audit trail report
         * @param {AuditReportFormat} [format] The format the report file is written in: a spreadsheet workbook, which is the default, or a comma-separated  text file.
         * @param {string} [from] The earliest moment a reported event may have been recorded at, read as a UTC instant.
         * @param {string} [to] The latest moment a reported event may have been recorded at, read as a UTC instant in the same way as `from`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/
         */
        createAuditTrailReport: async (format?: AuditReportFormat, from?: string, to?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/report`;
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

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = (from as any instanceof Date) ?
                    (from as any).toISOString() :
                    from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = (to as any instanceof Date) ?
                    (to as any).toISOString() :
                    to;
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
         * Returns the portal\'s audit events that match the filters in the query - by the user who acted, the module the  action belongs to, the action and its type, the entity type and target, and the period - and is the operation  behind the audit trail page. The caller needs the portal-settings right of a DocSpace administrator plus the  audit option of the portal\'s pricing plan; when that option is missing the filters are silently ignored and  the answer is the same twenty most recent events that `GET api/2.0/security/audit/events/last` returns, and  when the login history and audit trail section is disabled altogether the call is answered with 402. Take the  values accepted by `action`, `actionType`, `moduleType` and `entryType` from  `GET api/2.0/security/audit/types`, and the tree they belong to from `GET api/2.0/security/audit/mappers`. A  non-default `action` matches only that action and, combined with `target`, only its exact value; it also  stops `moduleType` and `actionType` from narrowing the result, so combine `target` with `entryType` instead of  `action` when filtering by target without pinning a single action. `from` and `to` are read as UTC instants  while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it, and the filters  are applied before the page window, so a full page means there may be more matching events beyond it. The  operation is read-only.
         * @summary Get filtered audit events
         * @param {string} [userId] The user who performed the action, given by portal user ID. Leave it at the empty GUID to keep the events of  every user.
         * @param {LocationType} [moduleType] The module the recorded action belongs to, spelled as `GET api/2.0/security/audit/types` lists it under  `moduleTypes`. `GET api/2.0/security/audit/mappers` shows which module records which action. The default  value keeps every module.
         * @param {ActionType} [actionType] The kind of change the action made, spelled as `GET api/2.0/security/audit/types` lists it under  `actionTypes`. The default value keeps every kind.
         * @param {MessageAction} [action] The exact action recorded, spelled as the `messageAction` of `GET api/2.0/security/audit/mappers`. Naming  one narrows the answer to that single action and overrides `moduleType` and `actionType`, which stop  narrowing anything once it is set.
         * @param {EntryType} [entryType] The kind of object the action was performed on, spelled as `GET api/2.0/security/audit/types` lists it under  `entryTypes`. Pair it with `target` to filter by object without pinning a single action.
         * @param {string} [target] The object the action was performed on, as the audit trail recorded it - a file name, a user account, a room  title. It is matched in full and exactly as stored, so it narrows the answer only when `action` or  `entryType` is set as well.
         * @param {string} [from] The earliest moment an event may have been recorded at, read as a UTC instant. The `date` of the events that  come back is in the portal time zone instead, so the two do not line up on a portal that is not on UTC.
         * @param {string} [to] The latest moment an event may have been recorded at, read as a UTC instant in the same way as `from`.
         * @param {number} [count] How many events one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them; a full page means there may be further matches beyond it.
         * @param {number} [startIndex] How many matching events to skip before the page begins, counting from the newest. Advance it by `count` to  walk backwards through the trail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/
         */
        getAuditEventsByFilter: async (userId?: string, moduleType?: LocationType, actionType?: ActionType, action?: MessageAction, entryType?: EntryType, target?: string, from?: string, to?: string, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/filter`;
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

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (moduleType !== undefined) {
                localVarQueryParameter['moduleType'] = moduleType;
            }

            if (actionType !== undefined) {
                localVarQueryParameter['actionType'] = actionType;
            }

            if (action !== undefined) {
                localVarQueryParameter['action'] = action;
            }

            if (entryType !== undefined) {
                localVarQueryParameter['entryType'] = entryType;
            }

            if (target !== undefined) {
                localVarQueryParameter['target'] = target;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = (from as any instanceof Date) ?
                    (from as any).toISOString() :
                    from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = (to as any instanceof Date) ?
                    (to as any).toISOString() :
                    to;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
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
         * Returns how long this portal keeps its two security logs: `loginHistoryLifeTime` for login events and  `auditTrailLifeTime` for audit events, both counted in days, together with `lastModified`, the moment the pair  was last saved. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud  installation the login history and audit trail section must be enabled for the portal, otherwise the call is  answered with 402; the audit option of the pricing plan is not required to read the values. Both numbers lie  between 1 and 180 days, and a portal that never changed them reports the default of 180. They define the  window the rest of the audit operations work in: `GET api/2.0/security/audit/events/last` looks exactly this  far back, and the reports started by `POST api/2.0/security/audit/login/report` and  `POST api/2.0/security/audit/events/report` cover exactly this period. The operation is read-only; change the  values with `POST api/2.0/security/audit/settings/lifetime`.
         * @summary Get audit lifetime settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-settings/
         */
        getAuditSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/settings/lifetime`;
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
         * Returns the audit vocabulary as the tree it really is: every product, the modules inside it, and for each  module the actions it can record together with the type of change and the entity each of them applies to. Pass  `productType` to keep a single product and `moduleType` to keep a single module inside the products that  remain; omit both to get the whole tree. The caller needs the portal-settings right of a DocSpace  administrator; the audit option of the pricing plan is not required, and the call is read-only and safe to  repeat. Each action carries `messageAction`, the name to send as the `action` filter of  `GET api/2.0/security/audit/events/filter`, next to `actionType` and `entity`, the values its `actionType` and  `entryType` filters accept - this is where a caller learns which action belongs to which module instead of  guessing. A filter that matches nothing yields an empty list rather than an error. Use  `GET api/2.0/security/audit/types` for the flat lists of the same names.
         * @summary Get audit trail mappers
         * @param {ProductType} [productType] The product to keep, spelled as `GET api/2.0/security/audit/types` lists it under `productTypes`. Omitting  it keeps every product; a value no product matches yields an empty list rather than an error.
         * @param {LocationType} [moduleType] The module to keep inside the products that survive `productType`, spelled as  `GET api/2.0/security/audit/types` lists it under `moduleTypes`. Omitting it keeps every module of those  products.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailMappers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/
         */
        getAuditTrailMappers: async (productType?: ProductType, moduleType?: LocationType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/mappers`;
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

            if (productType !== undefined) {
                localVarQueryParameter['productType'] = productType;
            }

            if (moduleType !== undefined) {
                localVarQueryParameter['moduleType'] = moduleType;
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
         * Returns the state of the audit trail report the calling user has started, and is the operation to poll after  `POST api/2.0/security/audit/events/report`. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with 402. Jobs  are kept per user and per report kind: this operation never shows another administrator\'s report, nor the login  history report, which has its own status at `GET api/2.0/security/audit/login/report`. The answer is empty when  no report of this kind is known for the caller; otherwise `percentage` grows towards 100, `isCompleted` turns  true when the build has ended, `error` carries the failure message when it ended badly, and `resultFileId`,  `resultFileName` and `resultFileUrl` point at the file saved to the caller\'s My documents section. The operation  is read-only and safe to poll every few seconds; a finished job is dropped as soon as the next report of this  kind is started.
         * @summary Get audit trail report status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-report/
         */
        getAuditTrailReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/report`;
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
         * Returns the vocabularies the audit filters are built from: `actions` lists every action the portal can record,  `actionTypes` the kinds of change they stand for, `productTypes` the products they belong to, `moduleTypes`  the locations inside those products, and `entryTypes` the kinds of entity an action can be applied to. The  caller needs the portal-settings right of a DocSpace administrator; the audit option of the pricing plan is  not required, so the lists can be read on any portal. The operation is read-only, takes no parameters and  depends on nothing else. Every value is the name to send in the matching query parameter of  `GET api/2.0/security/audit/events/filter` or `GET api/2.0/security/audit/login/filter`, so read this  operation once and reuse the answer instead of guessing spellings. The response is an untyped object holding  those five arrays of names, and it changes only with the portal version. Use  `GET api/2.0/security/audit/mappers` when the relations between products, modules and actions are needed  rather than the flat lists.
         * @summary Get audit trail types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailTypes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-types/
         */
        getAuditTrailTypes: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/types`;
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
         * Returns the twenty most recent audit events of the portal - the creations, changes, deletions, sharing and  settings updates its members made - as the short summary a settings page shows before anyone asks for the full  trail. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the  login history and audit trail section must be enabled for the portal, otherwise the call is answered with 402.  The operation is read-only and takes no parameters: it looks back exactly as far as the audit trail lifetime  that `GET api/2.0/security/audit/settings/lifetime` reports, returns at most twenty events ordered newest  first, and cannot be filtered. `date` is given in the portal time zone, `actionText` is the readable sentence  describing the event with every substituted value shortened to fifty characters here, and `target` names the  entity the action was applied to. An empty list means nothing was recorded inside that period. Use  `GET api/2.0/security/audit/events/filter` to filter by user, module, action or period.
         * @summary Get recent audit events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLastAuditEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-audit-events/
         */
        getLastAuditEvents: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/last`;
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
         * Sets how long this portal keeps its login history and its audit trail, in days, and returns the pair as it was  stored. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the  portal\'s pricing plan, otherwise the call is answered with 402. Send both numbers inside `settings`: each has  to be between 1 and 180 days, and a value outside that range is refused with 400 without either number being  saved, so read the current pair from `GET api/2.0/security/audit/settings/lifetime` and resend the one that  should stay as it is. The call replaces the stored settings rather than merging them, is idempotent, and takes  effect at once: the period covered by `GET api/2.0/security/audit/events/last` and by both audit reports  shrinks or grows with it, and events older than the new lifetime stop being reported. The change is itself  recorded in the audit trail.
         * @summary Set audit lifetime settings
         * @param {TenantAuditSettingsRequestDto} [tenantAuditSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-audit-settings/
         */
        setAuditSettings: async (tenantAuditSettingsRequestDto?: TenantAuditSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/settings/lifetime`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantAuditSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Cancels the audit trail report the calling user has running and drops it from the build queue. The caller  needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that  builds the report, so a successful answer means the request was accepted rather than that the job has already  stopped: poll `GET api/2.0/security/audit/events/report` to watch it disappear. The operation returns no  content and touches only the caller\'s own audit trail report - the login history report is cancelled by  `DELETE api/2.0/security/audit/login/report`, and no report of another user can be reached from here. It is  idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing  leaves nothing in My documents, and a report cancelled by mistake has to be built again with  `POST api/2.0/security/audit/events/report`.
         * @summary Terminate audit trail report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-audit-trail-report/
         */
        terminateAuditTrailReport: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/security/audit/events/report`;
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
    }
};

/**
 * AuditTrailDataApi - functional programming interface
 * @export
 */
export const AuditTrailDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuditTrailDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Queues a report of the portal\'s audit trail and returns the state of the background job that builds it. By  default the report covers the period reaching from now back by the audit trail lifetime that  `GET api/2.0/security/audit/settings/lifetime` reports; `from` and `to` narrow it, a `from` older than that  window is moved up to its start, a `to` in the future is moved back to now, and a period that ends before it  starts is answered with 400. No other filter of `GET api/2.0/security/audit/events/filter` applies here. The  caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. The file is not ready when the response arrives - poll  `GET api/2.0/security/audit/events/report` until `isCompleted` is true, then take `resultFileUrl`, and treat a  non-empty `error` as a failed build. The finished file is saved to the caller\'s My documents section, as an XLSX  workbook by default or as CSV when `format=Csv`, and `resultFileId` identifies it in either format;  `resultFileUrl` opens it in the editor, except for a CSV file too large for the editor, which it downloads  instead. An XLSX report keeps only the most recent events, at most 200,000 by default and fewer when the events  are long, and its header says how many were left out; `format=Csv` exports every event of the period. One job  runs per caller and kind: calling again while the previous one is still building returns that job instead of  starting a second, and `DELETE api/2.0/security/audit/events/report` cancels it.
         * @summary Start audit trail report
         * @param {AuditReportFormat} [format] The format the report file is written in: a spreadsheet workbook, which is the default, or a comma-separated  text file.
         * @param {string} [from] The earliest moment a reported event may have been recorded at, read as a UTC instant.
         * @param {string} [to] The latest moment a reported event may have been recorded at, read as a UTC instant in the same way as `from`.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/
         */
        async createAuditTrailReport(format?: AuditReportFormat, from?: string, to?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAuditTrailReport(format, from, to, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.createAuditTrailReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal\'s audit events that match the filters in the query - by the user who acted, the module the  action belongs to, the action and its type, the entity type and target, and the period - and is the operation  behind the audit trail page. The caller needs the portal-settings right of a DocSpace administrator plus the  audit option of the portal\'s pricing plan; when that option is missing the filters are silently ignored and  the answer is the same twenty most recent events that `GET api/2.0/security/audit/events/last` returns, and  when the login history and audit trail section is disabled altogether the call is answered with 402. Take the  values accepted by `action`, `actionType`, `moduleType` and `entryType` from  `GET api/2.0/security/audit/types`, and the tree they belong to from `GET api/2.0/security/audit/mappers`. A  non-default `action` matches only that action and, combined with `target`, only its exact value; it also  stops `moduleType` and `actionType` from narrowing the result, so combine `target` with `entryType` instead of  `action` when filtering by target without pinning a single action. `from` and `to` are read as UTC instants  while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it, and the filters  are applied before the page window, so a full page means there may be more matching events beyond it. The  operation is read-only.
         * @summary Get filtered audit events
         * @param {string} [userId] The user who performed the action, given by portal user ID. Leave it at the empty GUID to keep the events of  every user.
         * @param {LocationType} [moduleType] The module the recorded action belongs to, spelled as `GET api/2.0/security/audit/types` lists it under  `moduleTypes`. `GET api/2.0/security/audit/mappers` shows which module records which action. The default  value keeps every module.
         * @param {ActionType} [actionType] The kind of change the action made, spelled as `GET api/2.0/security/audit/types` lists it under  `actionTypes`. The default value keeps every kind.
         * @param {MessageAction} [action] The exact action recorded, spelled as the `messageAction` of `GET api/2.0/security/audit/mappers`. Naming  one narrows the answer to that single action and overrides `moduleType` and `actionType`, which stop  narrowing anything once it is set.
         * @param {EntryType} [entryType] The kind of object the action was performed on, spelled as `GET api/2.0/security/audit/types` lists it under  `entryTypes`. Pair it with `target` to filter by object without pinning a single action.
         * @param {string} [target] The object the action was performed on, as the audit trail recorded it - a file name, a user account, a room  title. It is matched in full and exactly as stored, so it narrows the answer only when `action` or  `entryType` is set as well.
         * @param {string} [from] The earliest moment an event may have been recorded at, read as a UTC instant. The `date` of the events that  come back is in the portal time zone instead, so the two do not line up on a portal that is not on UTC.
         * @param {string} [to] The latest moment an event may have been recorded at, read as a UTC instant in the same way as `from`.
         * @param {number} [count] How many events one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them; a full page means there may be further matches beyond it.
         * @param {number} [startIndex] How many matching events to skip before the page begins, counting from the newest. Advance it by `count` to  walk backwards through the trail.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/
         */
        async getAuditEventsByFilter(userId?: string, moduleType?: LocationType, actionType?: ActionType, action?: MessageAction, entryType?: EntryType, target?: string, from?: string, to?: string, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditEventArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditEventsByFilter(userId, moduleType, actionType, action, entryType, target, from, to, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditEventsByFilter']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns how long this portal keeps its two security logs: `loginHistoryLifeTime` for login events and  `auditTrailLifeTime` for audit events, both counted in days, together with `lastModified`, the moment the pair  was last saved. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud  installation the login history and audit trail section must be enabled for the portal, otherwise the call is  answered with 402; the audit option of the pricing plan is not required to read the values. Both numbers lie  between 1 and 180 days, and a portal that never changed them reports the default of 180. They define the  window the rest of the audit operations work in: `GET api/2.0/security/audit/events/last` looks exactly this  far back, and the reports started by `POST api/2.0/security/audit/login/report` and  `POST api/2.0/security/audit/events/report` cover exactly this period. The operation is read-only; change the  values with `POST api/2.0/security/audit/settings/lifetime`.
         * @summary Get audit lifetime settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-settings/
         */
        async getAuditSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantAuditSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the audit vocabulary as the tree it really is: every product, the modules inside it, and for each  module the actions it can record together with the type of change and the entity each of them applies to. Pass  `productType` to keep a single product and `moduleType` to keep a single module inside the products that  remain; omit both to get the whole tree. The caller needs the portal-settings right of a DocSpace  administrator; the audit option of the pricing plan is not required, and the call is read-only and safe to  repeat. Each action carries `messageAction`, the name to send as the `action` filter of  `GET api/2.0/security/audit/events/filter`, next to `actionType` and `entity`, the values its `actionType` and  `entryType` filters accept - this is where a caller learns which action belongs to which module instead of  guessing. A filter that matches nothing yields an empty list rather than an error. Use  `GET api/2.0/security/audit/types` for the flat lists of the same names.
         * @summary Get audit trail mappers
         * @param {ProductType} [productType] The product to keep, spelled as `GET api/2.0/security/audit/types` lists it under `productTypes`. Omitting  it keeps every product; a value no product matches yields an empty list rather than an error.
         * @param {LocationType} [moduleType] The module to keep inside the products that survive `productType`, spelled as  `GET api/2.0/security/audit/types` lists it under `moduleTypes`. Omitting it keeps every module of those  products.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailMappers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/
         */
        async getAuditTrailMappers(productType?: ProductType, moduleType?: LocationType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditTrailProductArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditTrailMappers(productType, moduleType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditTrailMappers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the state of the audit trail report the calling user has started, and is the operation to poll after  `POST api/2.0/security/audit/events/report`. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with 402. Jobs  are kept per user and per report kind: this operation never shows another administrator\'s report, nor the login  history report, which has its own status at `GET api/2.0/security/audit/login/report`. The answer is empty when  no report of this kind is known for the caller; otherwise `percentage` grows towards 100, `isCompleted` turns  true when the build has ended, `error` carries the failure message when it ended badly, and `resultFileId`,  `resultFileName` and `resultFileUrl` point at the file saved to the caller\'s My documents section. The operation  is read-only and safe to poll every few seconds; a finished job is dropped as soon as the next report of this  kind is started.
         * @summary Get audit trail report status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-report/
         */
        async getAuditTrailReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentBuilderTaskWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditTrailReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditTrailReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the vocabularies the audit filters are built from: `actions` lists every action the portal can record,  `actionTypes` the kinds of change they stand for, `productTypes` the products they belong to, `moduleTypes`  the locations inside those products, and `entryTypes` the kinds of entity an action can be applied to. The  caller needs the portal-settings right of a DocSpace administrator; the audit option of the pricing plan is  not required, so the lists can be read on any portal. The operation is read-only, takes no parameters and  depends on nothing else. Every value is the name to send in the matching query parameter of  `GET api/2.0/security/audit/events/filter` or `GET api/2.0/security/audit/login/filter`, so read this  operation once and reuse the answer instead of guessing spellings. The response is an untyped object holding  those five arrays of names, and it changes only with the portal version. Use  `GET api/2.0/security/audit/mappers` when the relations between products, modules and actions are needed  rather than the flat lists.
         * @summary Get audit trail types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAuditTrailTypes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-types/
         */
        async getAuditTrailTypes(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditTrailTypesWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuditTrailTypes(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getAuditTrailTypes']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the twenty most recent audit events of the portal - the creations, changes, deletions, sharing and  settings updates its members made - as the short summary a settings page shows before anyone asks for the full  trail. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the  login history and audit trail section must be enabled for the portal, otherwise the call is answered with 402.  The operation is read-only and takes no parameters: it looks back exactly as far as the audit trail lifetime  that `GET api/2.0/security/audit/settings/lifetime` reports, returns at most twenty events ordered newest  first, and cannot be filtered. `date` is given in the portal time zone, `actionText` is the readable sentence  describing the event with every substituted value shortened to fifty characters here, and `target` names the  entity the action was applied to. An empty list means nothing was recorded inside that period. Use  `GET api/2.0/security/audit/events/filter` to filter by user, module, action or period.
         * @summary Get recent audit events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLastAuditEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-audit-events/
         */
        async getLastAuditEvents(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditEventArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLastAuditEvents(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.getLastAuditEvents']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets how long this portal keeps its login history and its audit trail, in days, and returns the pair as it was  stored. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the  portal\'s pricing plan, otherwise the call is answered with 402. Send both numbers inside `settings`: each has  to be between 1 and 180 days, and a value outside that range is refused with 400 without either number being  saved, so read the current pair from `GET api/2.0/security/audit/settings/lifetime` and resend the one that  should stay as it is. The call replaces the stored settings rather than merging them, is idempotent, and takes  effect at once: the period covered by `GET api/2.0/security/audit/events/last` and by both audit reports  shrinks or grows with it, and events older than the new lifetime stop being reported. The change is itself  recorded in the audit trail.
         * @summary Set audit lifetime settings
         * @param {TenantAuditSettingsRequestDto} [tenantAuditSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for setAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-audit-settings/
         */
        async setAuditSettings(tenantAuditSettingsRequestDto?: TenantAuditSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantAuditSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setAuditSettings(tenantAuditSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.setAuditSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Cancels the audit trail report the calling user has running and drops it from the build queue. The caller  needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that  builds the report, so a successful answer means the request was accepted rather than that the job has already  stopped: poll `GET api/2.0/security/audit/events/report` to watch it disappear. The operation returns no  content and touches only the caller\'s own audit trail report - the login history report is cancelled by  `DELETE api/2.0/security/audit/login/report`, and no report of another user can be reached from here. It is  idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing  leaves nothing in My documents, and a report cancelled by mistake has to be built again with  `POST api/2.0/security/audit/events/report`.
         * @summary Terminate audit trail report
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for terminateAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-audit-trail-report/
         */
        async terminateAuditTrailReport(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.terminateAuditTrailReport(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuditTrailDataApi.terminateAuditTrailReport']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuditTrailDataApi - factory interface
 * @export
 */
export const AuditTrailDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuditTrailDataApiFp(configuration)
    return {
        /**
         * Queues a report of the portal\'s audit trail and returns the state of the background job that builds it. By  default the report covers the period reaching from now back by the audit trail lifetime that  `GET api/2.0/security/audit/settings/lifetime` reports; `from` and `to` narrow it, a `from` older than that  window is moved up to its start, a `to` in the future is moved back to now, and a period that ends before it  starts is answered with 400. No other filter of `GET api/2.0/security/audit/events/filter` applies here. The  caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. The file is not ready when the response arrives - poll  `GET api/2.0/security/audit/events/report` until `isCompleted` is true, then take `resultFileUrl`, and treat a  non-empty `error` as a failed build. The finished file is saved to the caller\'s My documents section, as an XLSX  workbook by default or as CSV when `format=Csv`, and `resultFileId` identifies it in either format;  `resultFileUrl` opens it in the editor, except for a CSV file too large for the editor, which it downloads  instead. An XLSX report keeps only the most recent events, at most 200,000 by default and fewer when the events  are long, and its header says how many were left out; `format=Csv` exports every event of the period. One job  runs per caller and kind: calling again while the previous one is still building returns that job instead of  starting a second, and `DELETE api/2.0/security/audit/events/report` cancels it.
         * @summary Start audit trail report
         * @param {AuditTrailDataApiCreateAuditTrailReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-audit-trail-report/
         * @throws {RequiredError}
         */
        createAuditTrailReport(requestParameters: AuditTrailDataApiCreateAuditTrailReportRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.createAuditTrailReport(requestParameters.format, requestParameters.from, requestParameters.to, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal\'s audit events that match the filters in the query - by the user who acted, the module the  action belongs to, the action and its type, the entity type and target, and the period - and is the operation  behind the audit trail page. The caller needs the portal-settings right of a DocSpace administrator plus the  audit option of the portal\'s pricing plan; when that option is missing the filters are silently ignored and  the answer is the same twenty most recent events that `GET api/2.0/security/audit/events/last` returns, and  when the login history and audit trail section is disabled altogether the call is answered with 402. Take the  values accepted by `action`, `actionType`, `moduleType` and `entryType` from  `GET api/2.0/security/audit/types`, and the tree they belong to from `GET api/2.0/security/audit/mappers`. A  non-default `action` matches only that action and, combined with `target`, only its exact value; it also  stops `moduleType` and `actionType` from narrowing the result, so combine `target` with `entryType` instead of  `action` when filtering by target without pinning a single action. `from` and `to` are read as UTC instants  while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it, and the filters  are applied before the page window, so a full page means there may be more matching events beyond it. The  operation is read-only.
         * @summary Get filtered audit events
         * @param {AuditTrailDataApiGetAuditEventsByFilterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditEventsByFilter operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-events-by-filter/
         * @throws {RequiredError}
         */
        getAuditEventsByFilter(requestParameters: AuditTrailDataApiGetAuditEventsByFilterRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AuditEventArrayWrapper> {
            return localVarFp.getAuditEventsByFilter(requestParameters.userId, requestParameters.moduleType, requestParameters.actionType, requestParameters.action, requestParameters.entryType, requestParameters.target, requestParameters.from, requestParameters.to, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns how long this portal keeps its two security logs: `loginHistoryLifeTime` for login events and  `auditTrailLifeTime` for audit events, both counted in days, together with `lastModified`, the moment the pair  was last saved. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud  installation the login history and audit trail section must be enabled for the portal, otherwise the call is  answered with 402; the audit option of the pricing plan is not required to read the values. Both numbers lie  between 1 and 180 days, and a portal that never changed them reports the default of 180. They define the  window the rest of the audit operations work in: `GET api/2.0/security/audit/events/last` looks exactly this  far back, and the reports started by `POST api/2.0/security/audit/login/report` and  `POST api/2.0/security/audit/events/report` cover exactly this period. The operation is read-only; change the  values with `POST api/2.0/security/audit/settings/lifetime`.
         * @summary Get audit lifetime settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-settings/
         * @throws {RequiredError}
         */
        getAuditSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantAuditSettingsWrapper> {
            return localVarFp.getAuditSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the audit vocabulary as the tree it really is: every product, the modules inside it, and for each  module the actions it can record together with the type of change and the entity each of them applies to. Pass  `productType` to keep a single product and `moduleType` to keep a single module inside the products that  remain; omit both to get the whole tree. The caller needs the portal-settings right of a DocSpace  administrator; the audit option of the pricing plan is not required, and the call is read-only and safe to  repeat. Each action carries `messageAction`, the name to send as the `action` filter of  `GET api/2.0/security/audit/events/filter`, next to `actionType` and `entity`, the values its `actionType` and  `entryType` filters accept - this is where a caller learns which action belongs to which module instead of  guessing. A filter that matches nothing yields an empty list rather than an error. Use  `GET api/2.0/security/audit/types` for the flat lists of the same names.
         * @summary Get audit trail mappers
         * @param {AuditTrailDataApiGetAuditTrailMappersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditTrailMappers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-mappers/
         * @throws {RequiredError}
         */
        getAuditTrailMappers(requestParameters: AuditTrailDataApiGetAuditTrailMappersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AuditTrailProductArrayWrapper> {
            return localVarFp.getAuditTrailMappers(requestParameters.productType, requestParameters.moduleType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the state of the audit trail report the calling user has started, and is the operation to poll after  `POST api/2.0/security/audit/events/report`. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with 402. Jobs  are kept per user and per report kind: this operation never shows another administrator\'s report, nor the login  history report, which has its own status at `GET api/2.0/security/audit/login/report`. The answer is empty when  no report of this kind is known for the caller; otherwise `percentage` grows towards 100, `isCompleted` turns  true when the build has ended, `error` carries the failure message when it ended badly, and `resultFileId`,  `resultFileName` and `resultFileUrl` point at the file saved to the caller\'s My documents section. The operation  is read-only and safe to poll every few seconds; a finished job is dropped as soon as the next report of this  kind is started.
         * @summary Get audit trail report status
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-report/
         * @throws {RequiredError}
         */
        getAuditTrailReport(options?: RawAxiosRequestConfig): AxiosPromise<DocumentBuilderTaskWrapper> {
            return localVarFp.getAuditTrailReport(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the vocabularies the audit filters are built from: `actions` lists every action the portal can record,  `actionTypes` the kinds of change they stand for, `productTypes` the products they belong to, `moduleTypes`  the locations inside those products, and `entryTypes` the kinds of entity an action can be applied to. The  caller needs the portal-settings right of a DocSpace administrator; the audit option of the pricing plan is  not required, so the lists can be read on any portal. The operation is read-only, takes no parameters and  depends on nothing else. Every value is the name to send in the matching query parameter of  `GET api/2.0/security/audit/events/filter` or `GET api/2.0/security/audit/login/filter`, so read this  operation once and reuse the answer instead of guessing spellings. The response is an untyped object holding  those five arrays of names, and it changes only with the portal version. Use  `GET api/2.0/security/audit/mappers` when the relations between products, modules and actions are needed  rather than the flat lists.
         * @summary Get audit trail types
         * @param {*} [options] Override http request option.
         * REST API Reference for getAuditTrailTypes operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-audit-trail-types/
         * @throws {RequiredError}
         */
        getAuditTrailTypes(options?: RawAxiosRequestConfig): AxiosPromise<AuditTrailTypesWrapper> {
            return localVarFp.getAuditTrailTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the twenty most recent audit events of the portal - the creations, changes, deletions, sharing and  settings updates its members made - as the short summary a settings page shows before anyone asks for the full  trail. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the  login history and audit trail section must be enabled for the portal, otherwise the call is answered with 402.  The operation is read-only and takes no parameters: it looks back exactly as far as the audit trail lifetime  that `GET api/2.0/security/audit/settings/lifetime` reports, returns at most twenty events ordered newest  first, and cannot be filtered. `date` is given in the portal time zone, `actionText` is the readable sentence  describing the event with every substituted value shortened to fifty characters here, and `target` names the  entity the action was applied to. An empty list means nothing was recorded inside that period. Use  `GET api/2.0/security/audit/events/filter` to filter by user, module, action or period.
         * @summary Get recent audit events
         * @param {*} [options] Override http request option.
         * REST API Reference for getLastAuditEvents operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-last-audit-events/
         * @throws {RequiredError}
         */
        getLastAuditEvents(options?: RawAxiosRequestConfig): AxiosPromise<AuditEventArrayWrapper> {
            return localVarFp.getLastAuditEvents(options).then((request) => request(axios, basePath));
        },
        /**
         * Sets how long this portal keeps its login history and its audit trail, in days, and returns the pair as it was  stored. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the  portal\'s pricing plan, otherwise the call is answered with 402. Send both numbers inside `settings`: each has  to be between 1 and 180 days, and a value outside that range is refused with 400 without either number being  saved, so read the current pair from `GET api/2.0/security/audit/settings/lifetime` and resend the one that  should stay as it is. The call replaces the stored settings rather than merging them, is idempotent, and takes  effect at once: the period covered by `GET api/2.0/security/audit/events/last` and by both audit reports  shrinks or grows with it, and events older than the new lifetime stop being reported. The change is itself  recorded in the audit trail.
         * @summary Set audit lifetime settings
         * @param {AuditTrailDataApiSetAuditSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for setAuditSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/set-audit-settings/
         * @throws {RequiredError}
         */
        setAuditSettings(requestParameters: AuditTrailDataApiSetAuditSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TenantAuditSettingsWrapper> {
            return localVarFp.setAuditSettings(requestParameters.tenantAuditSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Cancels the audit trail report the calling user has running and drops it from the build queue. The caller  needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that  builds the report, so a successful answer means the request was accepted rather than that the job has already  stopped: poll `GET api/2.0/security/audit/events/report` to watch it disappear. The operation returns no  content and touches only the caller\'s own audit trail report - the login history report is cancelled by  `DELETE api/2.0/security/audit/login/report`, and no report of another user can be reached from here. It is  idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing  leaves nothing in My documents, and a report cancelled by mistake has to be built again with  `POST api/2.0/security/audit/events/report`.
         * @summary Terminate audit trail report
         * @param {*} [options] Override http request option.
         * REST API Reference for terminateAuditTrailReport operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/terminate-audit-trail-report/
         * @throws {RequiredError}
         */
        terminateAuditTrailReport(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.terminateAuditTrailReport(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAuditTrailReport operation in AuditTrailDataApi.
 * @export
 * @interface AuditTrailDataApiCreateAuditTrailReportRequest
 */
export interface AuditTrailDataApiCreateAuditTrailReportRequest {
    /**
     * The format the report file is written in: a spreadsheet workbook, which is the default, or a comma-separated  text file.
     * @type {AuditReportFormat}
     * @memberof AuditTrailDataApiCreateAuditTrailReport
     */
    readonly format?: AuditReportFormat

    /**
     * The earliest moment a reported event may have been recorded at, read as a UTC instant.
     * @type {string}
     * @memberof AuditTrailDataApiCreateAuditTrailReport
     */
    readonly from?: string

    /**
     * The latest moment a reported event may have been recorded at, read as a UTC instant in the same way as `from`.
     * @type {string}
     * @memberof AuditTrailDataApiCreateAuditTrailReport
     */
    readonly to?: string
}

/**
 * Request parameters for getAuditEventsByFilter operation in AuditTrailDataApi.
 * @export
 * @interface AuditTrailDataApiGetAuditEventsByFilterRequest
 */
export interface AuditTrailDataApiGetAuditEventsByFilterRequest {
    /**
     * The user who performed the action, given by portal user ID. Leave it at the empty GUID to keep the events of  every user.
     * @type {string}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly userId?: string

    /**
     * The module the recorded action belongs to, spelled as `GET api/2.0/security/audit/types` lists it under  `moduleTypes`. `GET api/2.0/security/audit/mappers` shows which module records which action. The default  value keeps every module.
     * @type {LocationType}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly moduleType?: LocationType

    /**
     * The kind of change the action made, spelled as `GET api/2.0/security/audit/types` lists it under  `actionTypes`. The default value keeps every kind.
     * @type {ActionType}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly actionType?: ActionType

    /**
     * The exact action recorded, spelled as the `messageAction` of `GET api/2.0/security/audit/mappers`. Naming  one narrows the answer to that single action and overrides `moduleType` and `actionType`, which stop  narrowing anything once it is set.
     * @type {MessageAction}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly action?: MessageAction

    /**
     * The kind of object the action was performed on, spelled as `GET api/2.0/security/audit/types` lists it under  `entryTypes`. Pair it with `target` to filter by object without pinning a single action.
     * @type {EntryType}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly entryType?: EntryType

    /**
     * The object the action was performed on, as the audit trail recorded it - a file name, a user account, a room  title. It is matched in full and exactly as stored, so it narrows the answer only when `action` or  `entryType` is set as well.
     * @type {string}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly target?: string

    /**
     * The earliest moment an event may have been recorded at, read as a UTC instant. The `date` of the events that  come back is in the portal time zone instead, so the two do not line up on a portal that is not on UTC.
     * @type {string}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly from?: string

    /**
     * The latest moment an event may have been recorded at, read as a UTC instant in the same way as `from`.
     * @type {string}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly to?: string

    /**
     * How many events one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them; a full page means there may be further matches beyond it.
     * @type {number}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly count?: number

    /**
     * How many matching events to skip before the page begins, counting from the newest. Advance it by `count` to  walk backwards through the trail.
     * @type {number}
     * @memberof AuditTrailDataApiGetAuditEventsByFilter
     */
    readonly startIndex?: number
}

/**
 * Request parameters for getAuditTrailMappers operation in AuditTrailDataApi.
 * @export
 * @interface AuditTrailDataApiGetAuditTrailMappersRequest
 */
export interface AuditTrailDataApiGetAuditTrailMappersRequest {
    /**
     * The product to keep, spelled as `GET api/2.0/security/audit/types` lists it under `productTypes`. Omitting  it keeps every product; a value no product matches yields an empty list rather than an error.
     * @type {ProductType}
     * @memberof AuditTrailDataApiGetAuditTrailMappers
     */
    readonly productType?: ProductType

    /**
     * The module to keep inside the products that survive `productType`, spelled as  `GET api/2.0/security/audit/types` lists it under `moduleTypes`. Omitting it keeps every module of those  products.
     * @type {LocationType}
     * @memberof AuditTrailDataApiGetAuditTrailMappers
     */
    readonly moduleType?: LocationType
}

/**
 * Request parameters for setAuditSettings operation in AuditTrailDataApi.
 * @export
 * @interface AuditTrailDataApiSetAuditSettingsRequest
 */
export interface AuditTrailDataApiSetAuditSettingsRequest {
    /**
     * 
     * @type {TenantAuditSettingsRequestDto}
     * @memberof AuditTrailDataApiSetAuditSettings
     */
    readonly tenantAuditSettingsRequestDto?: TenantAuditSettingsRequestDto
}

/**
 * AuditTrailDataApi - object-oriented interface
 * @export
 * @class AuditTrailDataApi
 * @extends {BaseAPI}
 */
export class AuditTrailDataApi extends BaseAPI {
    /**
     * Queues a report of the portal\'s audit trail and returns the state of the background job that builds it. By  default the report covers the period reaching from now back by the audit trail lifetime that  `GET api/2.0/security/audit/settings/lifetime` reports; `from` and `to` narrow it, a `from` older than that  window is moved up to its start, a `to` in the future is moved back to now, and a period that ends before it  starts is answered with 400. No other filter of `GET api/2.0/security/audit/events/filter` applies here. The  caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. The file is not ready when the response arrives - poll  `GET api/2.0/security/audit/events/report` until `isCompleted` is true, then take `resultFileUrl`, and treat a  non-empty `error` as a failed build. The finished file is saved to the caller\'s My documents section, as an XLSX  workbook by default or as CSV when `format=Csv`, and `resultFileId` identifies it in either format;  `resultFileUrl` opens it in the editor, except for a CSV file too large for the editor, which it downloads  instead. An XLSX report keeps only the most recent events, at most 200,000 by default and fewer when the events  are long, and its header says how many were left out; `format=Csv` exports every event of the period. One job  runs per caller and kind: calling again while the previous one is still building returns that job instead of  starting a second, and `DELETE api/2.0/security/audit/events/report` cancels it.
     * @summary Start audit trail report
     * @param {SecurityAuditTrailDataApiCreateAuditTrailReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public createAuditTrailReport(requestParameters: AuditTrailDataApiCreateAuditTrailReportRequest = {}, options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).createAuditTrailReport(requestParameters.format, requestParameters.from, requestParameters.to, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal\'s audit events that match the filters in the query - by the user who acted, the module the  action belongs to, the action and its type, the entity type and target, and the period - and is the operation  behind the audit trail page. The caller needs the portal-settings right of a DocSpace administrator plus the  audit option of the portal\'s pricing plan; when that option is missing the filters are silently ignored and  the answer is the same twenty most recent events that `GET api/2.0/security/audit/events/last` returns, and  when the login history and audit trail section is disabled altogether the call is answered with 402. Take the  values accepted by `action`, `actionType`, `moduleType` and `entryType` from  `GET api/2.0/security/audit/types`, and the tree they belong to from `GET api/2.0/security/audit/mappers`. A  non-default `action` matches only that action and, combined with `target`, only its exact value; it also  stops `moduleType` and `actionType` from narrowing the result, so combine `target` with `entryType` instead of  `action` when filtering by target without pinning a single action. `from` and `to` are read as UTC instants  while `date` comes back in the portal time zone, `count` defaults to 100 and cannot exceed it, and the filters  are applied before the page window, so a full page means there may be more matching events beyond it. The  operation is read-only.
     * @summary Get filtered audit events
     * @param {SecurityAuditTrailDataApiGetAuditEventsByFilterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditEventsByFilter(requestParameters: AuditTrailDataApiGetAuditEventsByFilterRequest = {}, options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditEventsByFilter(requestParameters.userId, requestParameters.moduleType, requestParameters.actionType, requestParameters.action, requestParameters.entryType, requestParameters.target, requestParameters.from, requestParameters.to, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns how long this portal keeps its two security logs: `loginHistoryLifeTime` for login events and  `auditTrailLifeTime` for audit events, both counted in days, together with `lastModified`, the moment the pair  was last saved. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud  installation the login history and audit trail section must be enabled for the portal, otherwise the call is  answered with 402; the audit option of the pricing plan is not required to read the values. Both numbers lie  between 1 and 180 days, and a portal that never changed them reports the default of 180. They define the  window the rest of the audit operations work in: `GET api/2.0/security/audit/events/last` looks exactly this  far back, and the reports started by `POST api/2.0/security/audit/login/report` and  `POST api/2.0/security/audit/events/report` cover exactly this period. The operation is read-only; change the  values with `POST api/2.0/security/audit/settings/lifetime`.
     * @summary Get audit lifetime settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditSettings(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the audit vocabulary as the tree it really is: every product, the modules inside it, and for each  module the actions it can record together with the type of change and the entity each of them applies to. Pass  `productType` to keep a single product and `moduleType` to keep a single module inside the products that  remain; omit both to get the whole tree. The caller needs the portal-settings right of a DocSpace  administrator; the audit option of the pricing plan is not required, and the call is read-only and safe to  repeat. Each action carries `messageAction`, the name to send as the `action` filter of  `GET api/2.0/security/audit/events/filter`, next to `actionType` and `entity`, the values its `actionType` and  `entryType` filters accept - this is where a caller learns which action belongs to which module instead of  guessing. A filter that matches nothing yields an empty list rather than an error. Use  `GET api/2.0/security/audit/types` for the flat lists of the same names.
     * @summary Get audit trail mappers
     * @param {SecurityAuditTrailDataApiGetAuditTrailMappersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditTrailMappers(requestParameters: AuditTrailDataApiGetAuditTrailMappersRequest = {}, options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditTrailMappers(requestParameters.productType, requestParameters.moduleType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the state of the audit trail report the calling user has started, and is the operation to poll after  `POST api/2.0/security/audit/events/report`. The caller needs the portal-settings right of a DocSpace  administrator plus the audit option of the portal\'s pricing plan, otherwise the call is answered with 402. Jobs  are kept per user and per report kind: this operation never shows another administrator\'s report, nor the login  history report, which has its own status at `GET api/2.0/security/audit/login/report`. The answer is empty when  no report of this kind is known for the caller; otherwise `percentage` grows towards 100, `isCompleted` turns  true when the build has ended, `error` carries the failure message when it ended badly, and `resultFileId`,  `resultFileName` and `resultFileUrl` point at the file saved to the caller\'s My documents section. The operation  is read-only and safe to poll every few seconds; a finished job is dropped as soon as the next report of this  kind is started.
     * @summary Get audit trail report status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditTrailReport(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditTrailReport(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the vocabularies the audit filters are built from: `actions` lists every action the portal can record,  `actionTypes` the kinds of change they stand for, `productTypes` the products they belong to, `moduleTypes`  the locations inside those products, and `entryTypes` the kinds of entity an action can be applied to. The  caller needs the portal-settings right of a DocSpace administrator; the audit option of the pricing plan is  not required, so the lists can be read on any portal. The operation is read-only, takes no parameters and  depends on nothing else. Every value is the name to send in the matching query parameter of  `GET api/2.0/security/audit/events/filter` or `GET api/2.0/security/audit/login/filter`, so read this  operation once and reuse the answer instead of guessing spellings. The response is an untyped object holding  those five arrays of names, and it changes only with the portal version. Use  `GET api/2.0/security/audit/mappers` when the relations between products, modules and actions are needed  rather than the flat lists.
     * @summary Get audit trail types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getAuditTrailTypes(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getAuditTrailTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the twenty most recent audit events of the portal - the creations, changes, deletions, sharing and  settings updates its members made - as the short summary a settings page shows before anyone asks for the full  trail. The caller needs the portal-settings right of a DocSpace administrator, and in a cloud installation the  login history and audit trail section must be enabled for the portal, otherwise the call is answered with 402.  The operation is read-only and takes no parameters: it looks back exactly as far as the audit trail lifetime  that `GET api/2.0/security/audit/settings/lifetime` reports, returns at most twenty events ordered newest  first, and cannot be filtered. `date` is given in the portal time zone, `actionText` is the readable sentence  describing the event with every substituted value shortened to fifty characters here, and `target` names the  entity the action was applied to. An empty list means nothing was recorded inside that period. Use  `GET api/2.0/security/audit/events/filter` to filter by user, module, action or period.
     * @summary Get recent audit events
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public getLastAuditEvents(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).getLastAuditEvents(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets how long this portal keeps its login history and its audit trail, in days, and returns the pair as it was  stored. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the  portal\'s pricing plan, otherwise the call is answered with 402. Send both numbers inside `settings`: each has  to be between 1 and 180 days, and a value outside that range is refused with 400 without either number being  saved, so read the current pair from `GET api/2.0/security/audit/settings/lifetime` and resend the one that  should stay as it is. The call replaces the stored settings rather than merging them, is idempotent, and takes  effect at once: the period covered by `GET api/2.0/security/audit/events/last` and by both audit reports  shrinks or grows with it, and events older than the new lifetime stop being reported. The change is itself  recorded in the audit trail.
     * @summary Set audit lifetime settings
     * @param {SecurityAuditTrailDataApiSetAuditSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public setAuditSettings(requestParameters: AuditTrailDataApiSetAuditSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).setAuditSettings(requestParameters.tenantAuditSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Cancels the audit trail report the calling user has running and drops it from the build queue. The caller  needs the portal-settings right of a DocSpace administrator plus the audit option of the portal\'s pricing  plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that  builds the report, so a successful answer means the request was accepted rather than that the job has already  stopped: poll `GET api/2.0/security/audit/events/report` to watch it disappear. The operation returns no  content and touches only the caller\'s own audit trail report - the login history report is cancelled by  `DELETE api/2.0/security/audit/login/report`, and no report of another user can be reached from here. It is  idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing  leaves nothing in My documents, and a report cancelled by mistake has to be built again with  `POST api/2.0/security/audit/events/report`.
     * @summary Terminate audit trail report
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditTrailDataApi
     */
    public terminateAuditTrailReport(options?: RawAxiosRequestConfig) {
        return AuditTrailDataApiFp(this.configuration).terminateAuditTrailReport(options).then((request) => request(this.axios, this.basePath));
    }
}

