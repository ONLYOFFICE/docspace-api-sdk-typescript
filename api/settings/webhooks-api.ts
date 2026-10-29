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
import type { CreateWebhooksConfigRequestDto } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { UpdateWebhooksConfigRequestDto } from '../../models';
// @ts-ignore
import type { WebhookGroupStatus } from '../../models';
// @ts-ignore
import type { WebhookRetryRequestDto } from '../../models';
// @ts-ignore
import type { WebhookTrigger } from '../../models';
// @ts-ignore
import type { WebhookTriggerArrayWrapper } from '../../models';
// @ts-ignore
import type { WebhooksConfigWithStatusArrayWrapper } from '../../models';
// @ts-ignore
import type { WebhooksConfigWrapper } from '../../models';
// @ts-ignore
import type { WebhooksLogArrayWrapper } from '../../models';
// @ts-ignore
import type { WebhooksLogWrapper } from '../../models';
/**
 * WebhooksApi - axios parameter creator
 * @export
 */
export const WebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    let fields: string | undefined;
    
    return {
        withFields: (f: string) => {
            fields = f;
        },
        /**
         * Creates a webhook subscription for the current portal: a target URL that the portal calls with a signed JSON  payload whenever one of the subscribed events happens. The target is checked before anything is stored: an  absolute `http` or `https` address outside the installation\'s own network that answers a HEAD request with a  success code, redirects not followed. `secretKey` is mandatory, has to satisfy the password rules of `GET  api/2.0/settings/security/password`, signs the payloads and never appears in a response. `triggers` is a bitmask  of the subscribed events, 0 standing for every event the creator\'s role may receive; a flag the caller\'s role may not use is rejected, so take  the allowed set from `GET api/2.0/settings/webhook/triggers`. `ssl` demands an `https` target with a valid  certificate, `false` leaves the certificate unchecked, and left out it is `true` for an `https` target and  `false` for an `http` one.  `targetId` limits the events to one entity, for user or group events a user or group the creator may see. A  subscription fires only while it is enabled, for events its creator may see and their current role may  subscribe to. Any role except `Guest` may create one, and each call adds another subscription.
         * @summary Create a webhook
         * @param {CreateWebhooksConfigRequestDto} [createWebhooksConfigRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-webhook/
         */
        createWebhook: async (createWebhooksConfigRequestDto?: CreateWebhooksConfigRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/webhook`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createWebhooksConfigRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Switches one webhook subscription on or off, leaving the rest of its parameters as they are. Only `id` and  `enabled` are read from the body: `name` and `uri` must be present because the schema requires them, but their  values are ignored here, as are `secretKey`, `ssl`, `triggers` and `targetId` when sent - change any of them  with `PUT api/2.0/settings/webhook` instead. Switching a subscription on re-checks what is already stored: the  saved URL is probed with a HEAD request, the saved secret is checked against the current password rules, and the saved triggers against the current role of the  subscription\'s creator. The call is refused with 400 when any of these fails, so a subscription whose target has  gone away cannot be switched on until it is updated. Switching one off is not validated. While a subscription is  off its events are dropped rather than queued. A `DocSpaceAdmin` may switch any subscription in the portal,  anyone else only their own, and a `Guest` is refused. The response carries the subscription in its new state,  and repeating the call changes nothing further.
         * @summary Switch a webhook on or off
         * @param {UpdateWebhooksConfigRequestDto} [updateWebhooksConfigRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for enableWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-webhook/
         */
        enableWebhook: async (updateWebhooksConfigRequestDto?: UpdateWebhooksConfigRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/webhook/enable`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateWebhooksConfigRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the webhook subscriptions of the current portal, each together with the outcome of its most recent  delivery. The portal owner and a `DocSpaceAdmin` see every subscription in the portal, while a `RoomAdmin` or  a `User` sees only the ones they created themselves, so the same call answers differently depending on who  asks. A `Guest` may not use webhooks at all and is refused, and so is any non-admin caller while the portal  keeps the developer tools restricted, which `GET api/2.0/settings/devtoolsaccess` reports. Every entry pairs  the stored configuration with `status`, the HTTP status code the target answered on the last attempt, where 0  means nothing has been delivered yet, while the secret key is not part of the response. The list is neither  paginated nor ordered, and an empty list simply means no subscription exists for the caller. Nothing is  written and the call is safe to repeat. Create a subscription with `POST api/2.0/settings/webhook`, and  inspect single deliveries with `GET api/2.0/settings/webhooks/log`.
         * @summary Get the portal webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-webhooks/
         */
        getTenantWebhooks: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/webhook`;
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
         * Returns the catalogue of events a webhook subscription can listen to, in the order the portal presents them:  user events, then group, file, folder, room, form and agent ones. Each entry carries the event name as it  appears in a payload, such as `file.created`, the bit value to put into the `triggers` bitmask of a  subscription, and `available`, telling whether the caller\'s own role may subscribe to that event at all: a  `User` cannot subscribe to the creation of users, groups or rooms, for instance, while a `RoomAdmin` can. Add  the bit values of the wanted events together to build `triggers`; the entry named `*` has the value 0 and  stands for every event the subscription creator\'s current role may subscribe to, so it is used on its own  rather than added. Events unavailable to the caller are listed all the same, but passing one to `POST  api/2.0/settings/webhook` or `PUT api/2.0/settings/webhook` is rejected as an invalid request. This is fixed  reference data: the same for every portal, not paginated, changing only with the product version, and readable  by any authenticated caller, a `Guest` included. Nothing is written.
         * @summary Get the webhook triggers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebhookTriggers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhook-triggers/
         */
        getWebhookTriggers: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/webhook/triggers`;
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
         * Returns the delivery log of the portal webhooks, one record per delivery of an event, updated in place by its  automatic retries: the trigger, the request and response headers and bodies, the HTTP `status` of the latest  attempt, 0 while no answer has come back, and the `delivery` moment, empty until an attempt succeeds. `attempts`  counts the tries so far and `nextAttemptOn` is set while another one is due. A manual retry adds a record of its  own, with a new `id`, the same `eventId` and the member in `retriedBy`. Records come newest first, paged with  `startIndex` and `count`, at most 100 at a time, with the number of matches as `total`. Filters combine with  AND: `deliveryFrom` and `deliveryTo` bound the delivery moment, `hookUri` matches the subscription URL exactly,  `configId` picks one subscription, `groupStatus` keeps the status classes it names (0 means no filter), and  `trigger` one event type (0 means all). `eventId` keeps every record of one event; the `id` of a record a manual  retry returned keeps that record alone. `userId` filters by the creator of the subscription and is forced to the  caller for anyone but a `DocSpaceAdmin`. A `Guest` is refused. Nothing is written.
         * @summary Get the webhook delivery log
         * @param {string} [deliveryFrom] The earliest delivery moment a record may carry. Records of attempts still on their way have no delivery  moment yet and fall outside any bound set here.
         * @param {string} [deliveryTo] The latest delivery moment a record may carry. All the filters combine with AND, so it narrows whatever the  other ones already kept.
         * @param {string} [hookUri] The subscription target address, matched in full rather than as a prefix. Filtering by `configId` is the  reliable way to pick one subscription, since several may share an address.
         * @param {number} [configId] The subscription whose deliveries are kept, by the `id` that `GET api/2.0/settings/webhook` reports.
         * @param {number} [eventId] One event, by the `eventId` of its delivery records, which is also the `event.id` the receiver got.
         * @param {WebhookGroupStatus} [groupStatus] The classes of answered status to keep, as a bitmask; 0 keeps every record whatever the target answered.
         * @param {string} [userId] The member whose subscriptions the records belong to, by portal user ID - who created the subscription, not  who caused the event. For a caller who is not a DocSpace administrator it is overwritten with the caller own  ID, so such a caller never sees another member deliveries whatever is sent here.
         * @param {WebhookTrigger} [trigger] The single event kind to keep; 0 keeps every kind. It names one trigger rather than a mask of several, unlike  the `triggers` a subscription is created with.
         * @param {number} [count] How many records one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them; the number of records matching the filter comes back as `total` beside the page.
         * @param {number} [startIndex] How many matching records to skip before the page begins, counting from the newest. Advance it by `count` to  walk back through the log.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebhooksLogs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhooks-logs/
         */
        getWebhooksLogs: async (deliveryFrom?: string, deliveryTo?: string, hookUri?: string, configId?: number, eventId?: number, groupStatus?: WebhookGroupStatus, userId?: string, trigger?: WebhookTrigger, count?: number, startIndex?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/webhooks/log`;
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

            if (deliveryFrom !== undefined) {
                localVarQueryParameter['deliveryFrom'] = (deliveryFrom as any instanceof Date) ?
                    (deliveryFrom as any).toISOString() :
                    deliveryFrom;
            }

            if (deliveryTo !== undefined) {
                localVarQueryParameter['deliveryTo'] = (deliveryTo as any instanceof Date) ?
                    (deliveryTo as any).toISOString() :
                    deliveryTo;
            }

            if (hookUri !== undefined) {
                localVarQueryParameter['hookUri'] = hookUri;
            }

            if (configId !== undefined) {
                localVarQueryParameter['configId'] = configId;
            }

            if (eventId !== undefined) {
                localVarQueryParameter['eventId'] = eventId;
            }

            if (groupStatus !== undefined) {
                localVarQueryParameter['groupStatus'] = groupStatus;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (trigger !== undefined) {
                localVarQueryParameter['trigger'] = trigger;
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
         * Removes one webhook subscription from the current portal for good, addressed by `id` in the path. Deliveries  stop with it: matching events are no longer queued, and there is no undo, so a subscription dropped by mistake  has to be created again with `POST api/2.0/settings/webhook`, which gives it a new identifier and needs a new  secret key. To pause deliveries without losing the configuration, switch the subscription off with  `PUT api/2.0/settings/webhook/enable` instead. A `DocSpaceAdmin` may remove any subscription in the portal,  anyone else only the ones they created, and a `Guest` may not use webhooks at all. The response repeats the  subscription as it was just before the removal, so the caller can record what disappeared, again without the  secret key. An identifier that no longer exists gives 404, which is what a second removal of the same  subscription answers as well, so a repeated call is harmless but reports the state truthfully rather than  pretending to succeed.
         * @summary Remove a webhook
         * @param {number} id The identifier of the object the operation acts on, as the listing operation of that kind of object reports  it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of  another shape does not match the route at all and is answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-webhook/
         */
        removeWebhook: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeWebhook', 'id', id)

            const localVarPath = `/api/2.0/settings/webhook/{id}`
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
         * Sends one past webhook delivery again to its subscription. The `id` in the path is that of a delivery record  from `GET api/2.0/settings/webhooks/log`, not of a subscription. A `DocSpaceAdmin` may retry any delivery in the  portal, anyone else only deliveries of the subscriptions they created, and a `Guest` is refused. The work is  asynchronous: a new delivery record is queued and returned with its own `id`, the `eventId` of the retried one  and the caller in `retriedBy`; the retried record keeps its outcome, and automatic retries still due for the  event stop. The receiver gets the same `event.id` and `x-docspace-event-id` header in a body serialized and  signed anew. To learn the outcome, read the log with `eventId` set to the returned `id` until `nextAttemptOn` is  empty: `delivery` is then set on success and empty when the portal gave up after its automatic retries (on the  default schedule, six more tries over about 18 hours). An `id` of 0 gives 400 and an unknown one 404. 409 means  nothing was queued: a delivery of the event is being sent right now, the subscription is disabled, or the record  predates the current delivery format. Rate limited with 429.
         * @summary Retry a webhook delivery
         * @param {number} id The identifier of the object the operation acts on, as the listing operation of that kind of object reports  it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of  another shape does not match the route at all and is answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for retryWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhook/
         */
        retryWebhook: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('retryWebhook', 'id', id)

            const localVarPath = `/api/2.0/settings/webhook/{id}/retry`
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
         * Sends a batch of past webhook deliveries again. `ids` holds identifiers of delivery records from `GET  api/2.0/settings/webhooks/log`; for each one a new delivery record of the same event is queued, with its own  `id`, the retried record\'s `eventId` and the caller in `retriedBy`, and the response lists those new records.  Each event is retried once per call, so a second identifier of the same event is passed over. Records that do  not exist, records of another member\'s subscription when the caller is not a `DocSpaceAdmin`, and records  that cannot be queued now (an event being sent right now, a disabled subscription, a record older than the  current delivery format) are skipped in silence, so compare the response with `ids`; an empty `ids` queues  nothing. A `Guest` is refused. Each receiver gets the same `event.id` and `x-docspace-event-id` header in a  body serialized and signed anew. The work is asynchronous: read the log with `eventId` for each returned  identifier until `nextAttemptOn` is empty; a set `delivery` then means success, an empty one that the portal  gave up. At most 100 identifiers per call, rate limited with 429. `PUT api/2.0/settings/webhook/{id}/retry`  reports why a single record was not queued.
         * @summary Retry webhook deliveries
         * @param {WebhookRetryRequestDto} [webhookRetryRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for retryWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhooks/
         */
        retryWebhooks: async (webhookRetryRequestDto?: WebhookRetryRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/webhook/retry`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webhookRetryRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the stored parameters of one webhook subscription, addressed by `id` in the body rather than in the  path. Every field of the request overwrites the stored one, so a payload that leaves out `enabled`, `triggers`  or `targetId` resets them to off, the catch-all `0` and no target: read the current values with `GET  api/2.0/settings/webhook` first and send back whatever should stay. `secretKey` and `ssl` are the exceptions:  an empty `secretKey` keeps the existing secret, a new one having to satisfy the portal password rules, and a  left-out `ssl` keeps the stored setting, so pass it explicitly when moving the target between `http` and  `https`. A `DocSpaceAdmin`  may update any subscription in the portal, anyone else only their own, and a `Guest` is refused. Once the body  passes the schema checks (a missing `name` or `uri` gives 400 first), an unknown `id` gives 404 and another  member\'s subscription 403 before the target, the secret and the triggers are checked. The payload is then validated  as on creation, except that trigger flags are checked against the role of the subscription\'s creator rather than  the caller\'s. Sending the same payload twice leaves the same state. Use `PUT api/2.0/settings/webhook/enable` to  switch a subscription on or off without touching anything else.
         * @summary Update a webhook
         * @param {UpdateWebhooksConfigRequestDto} [updateWebhooksConfigRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-webhook/
         */
        updateWebhook: async (updateWebhooksConfigRequestDto?: UpdateWebhooksConfigRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/webhook`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateWebhooksConfigRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhooksApi - functional programming interface
 * @export
 */
export const WebhooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a webhook subscription for the current portal: a target URL that the portal calls with a signed JSON  payload whenever one of the subscribed events happens. The target is checked before anything is stored: an  absolute `http` or `https` address outside the installation\'s own network that answers a HEAD request with a  success code, redirects not followed. `secretKey` is mandatory, has to satisfy the password rules of `GET  api/2.0/settings/security/password`, signs the payloads and never appears in a response. `triggers` is a bitmask  of the subscribed events, 0 standing for every event the creator\'s role may receive; a flag the caller\'s role may not use is rejected, so take  the allowed set from `GET api/2.0/settings/webhook/triggers`. `ssl` demands an `https` target with a valid  certificate, `false` leaves the certificate unchecked, and left out it is `true` for an `https` target and  `false` for an `http` one.  `targetId` limits the events to one entity, for user or group events a user or group the creator may see. A  subscription fires only while it is enabled, for events its creator may see and their current role may  subscribe to. Any role except `Guest` may create one, and each call adds another subscription.
         * @summary Create a webhook
         * @param {CreateWebhooksConfigRequestDto} [createWebhooksConfigRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-webhook/
         */
        async createWebhook(createWebhooksConfigRequestDto?: CreateWebhooksConfigRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWebhook(createWebhooksConfigRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.createWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Switches one webhook subscription on or off, leaving the rest of its parameters as they are. Only `id` and  `enabled` are read from the body: `name` and `uri` must be present because the schema requires them, but their  values are ignored here, as are `secretKey`, `ssl`, `triggers` and `targetId` when sent - change any of them  with `PUT api/2.0/settings/webhook` instead. Switching a subscription on re-checks what is already stored: the  saved URL is probed with a HEAD request, the saved secret is checked against the current password rules, and the saved triggers against the current role of the  subscription\'s creator. The call is refused with 400 when any of these fails, so a subscription whose target has  gone away cannot be switched on until it is updated. Switching one off is not validated. While a subscription is  off its events are dropped rather than queued. A `DocSpaceAdmin` may switch any subscription in the portal,  anyone else only their own, and a `Guest` is refused. The response carries the subscription in its new state,  and repeating the call changes nothing further.
         * @summary Switch a webhook on or off
         * @param {UpdateWebhooksConfigRequestDto} [updateWebhooksConfigRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for enableWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-webhook/
         */
        async enableWebhook(updateWebhooksConfigRequestDto?: UpdateWebhooksConfigRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enableWebhook(updateWebhooksConfigRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.enableWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the webhook subscriptions of the current portal, each together with the outcome of its most recent  delivery. The portal owner and a `DocSpaceAdmin` see every subscription in the portal, while a `RoomAdmin` or  a `User` sees only the ones they created themselves, so the same call answers differently depending on who  asks. A `Guest` may not use webhooks at all and is refused, and so is any non-admin caller while the portal  keeps the developer tools restricted, which `GET api/2.0/settings/devtoolsaccess` reports. Every entry pairs  the stored configuration with `status`, the HTTP status code the target answered on the last attempt, where 0  means nothing has been delivered yet, while the secret key is not part of the response. The list is neither  paginated nor ordered, and an empty list simply means no subscription exists for the caller. Nothing is  written and the call is safe to repeat. Create a subscription with `POST api/2.0/settings/webhook`, and  inspect single deliveries with `GET api/2.0/settings/webhooks/log`.
         * @summary Get the portal webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-webhooks/
         */
        async getTenantWebhooks(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWithStatusArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantWebhooks(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.getTenantWebhooks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the catalogue of events a webhook subscription can listen to, in the order the portal presents them:  user events, then group, file, folder, room, form and agent ones. Each entry carries the event name as it  appears in a payload, such as `file.created`, the bit value to put into the `triggers` bitmask of a  subscription, and `available`, telling whether the caller\'s own role may subscribe to that event at all: a  `User` cannot subscribe to the creation of users, groups or rooms, for instance, while a `RoomAdmin` can. Add  the bit values of the wanted events together to build `triggers`; the entry named `*` has the value 0 and  stands for every event the subscription creator\'s current role may subscribe to, so it is used on its own  rather than added. Events unavailable to the caller are listed all the same, but passing one to `POST  api/2.0/settings/webhook` or `PUT api/2.0/settings/webhook` is rejected as an invalid request. This is fixed  reference data: the same for every portal, not paginated, changing only with the product version, and readable  by any authenticated caller, a `Guest` included. Nothing is written.
         * @summary Get the webhook triggers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebhookTriggers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhook-triggers/
         */
        async getWebhookTriggers(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookTriggerArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebhookTriggers(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.getWebhookTriggers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the delivery log of the portal webhooks, one record per delivery of an event, updated in place by its  automatic retries: the trigger, the request and response headers and bodies, the HTTP `status` of the latest  attempt, 0 while no answer has come back, and the `delivery` moment, empty until an attempt succeeds. `attempts`  counts the tries so far and `nextAttemptOn` is set while another one is due. A manual retry adds a record of its  own, with a new `id`, the same `eventId` and the member in `retriedBy`. Records come newest first, paged with  `startIndex` and `count`, at most 100 at a time, with the number of matches as `total`. Filters combine with  AND: `deliveryFrom` and `deliveryTo` bound the delivery moment, `hookUri` matches the subscription URL exactly,  `configId` picks one subscription, `groupStatus` keeps the status classes it names (0 means no filter), and  `trigger` one event type (0 means all). `eventId` keeps every record of one event; the `id` of a record a manual  retry returned keeps that record alone. `userId` filters by the creator of the subscription and is forced to the  caller for anyone but a `DocSpaceAdmin`. A `Guest` is refused. Nothing is written.
         * @summary Get the webhook delivery log
         * @param {string} [deliveryFrom] The earliest delivery moment a record may carry. Records of attempts still on their way have no delivery  moment yet and fall outside any bound set here.
         * @param {string} [deliveryTo] The latest delivery moment a record may carry. All the filters combine with AND, so it narrows whatever the  other ones already kept.
         * @param {string} [hookUri] The subscription target address, matched in full rather than as a prefix. Filtering by `configId` is the  reliable way to pick one subscription, since several may share an address.
         * @param {number} [configId] The subscription whose deliveries are kept, by the `id` that `GET api/2.0/settings/webhook` reports.
         * @param {number} [eventId] One event, by the `eventId` of its delivery records, which is also the `event.id` the receiver got.
         * @param {WebhookGroupStatus} [groupStatus] The classes of answered status to keep, as a bitmask; 0 keeps every record whatever the target answered.
         * @param {string} [userId] The member whose subscriptions the records belong to, by portal user ID - who created the subscription, not  who caused the event. For a caller who is not a DocSpace administrator it is overwritten with the caller own  ID, so such a caller never sees another member deliveries whatever is sent here.
         * @param {WebhookTrigger} [trigger] The single event kind to keep; 0 keeps every kind. It names one trigger rather than a mask of several, unlike  the `triggers` a subscription is created with.
         * @param {number} [count] How many records one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them; the number of records matching the filter comes back as `total` beside the page.
         * @param {number} [startIndex] How many matching records to skip before the page begins, counting from the newest. Advance it by `count` to  walk back through the log.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWebhooksLogs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhooks-logs/
         */
        async getWebhooksLogs(deliveryFrom?: string, deliveryTo?: string, hookUri?: string, configId?: number, eventId?: number, groupStatus?: WebhookGroupStatus, userId?: string, trigger?: WebhookTrigger, count?: number, startIndex?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksLogArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWebhooksLogs(deliveryFrom, deliveryTo, hookUri, configId, eventId, groupStatus, userId, trigger, count, startIndex, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.getWebhooksLogs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes one webhook subscription from the current portal for good, addressed by `id` in the path. Deliveries  stop with it: matching events are no longer queued, and there is no undo, so a subscription dropped by mistake  has to be created again with `POST api/2.0/settings/webhook`, which gives it a new identifier and needs a new  secret key. To pause deliveries without losing the configuration, switch the subscription off with  `PUT api/2.0/settings/webhook/enable` instead. A `DocSpaceAdmin` may remove any subscription in the portal,  anyone else only the ones they created, and a `Guest` may not use webhooks at all. The response repeats the  subscription as it was just before the removal, so the caller can record what disappeared, again without the  secret key. An identifier that no longer exists gives 404, which is what a second removal of the same  subscription answers as well, so a repeated call is harmless but reports the state truthfully rather than  pretending to succeed.
         * @summary Remove a webhook
         * @param {number} id The identifier of the object the operation acts on, as the listing operation of that kind of object reports  it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of  another shape does not match the route at all and is answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for removeWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-webhook/
         */
        async removeWebhook(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeWebhook(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.removeWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends one past webhook delivery again to its subscription. The `id` in the path is that of a delivery record  from `GET api/2.0/settings/webhooks/log`, not of a subscription. A `DocSpaceAdmin` may retry any delivery in the  portal, anyone else only deliveries of the subscriptions they created, and a `Guest` is refused. The work is  asynchronous: a new delivery record is queued and returned with its own `id`, the `eventId` of the retried one  and the caller in `retriedBy`; the retried record keeps its outcome, and automatic retries still due for the  event stop. The receiver gets the same `event.id` and `x-docspace-event-id` header in a body serialized and  signed anew. To learn the outcome, read the log with `eventId` set to the returned `id` until `nextAttemptOn` is  empty: `delivery` is then set on success and empty when the portal gave up after its automatic retries (on the  default schedule, six more tries over about 18 hours). An `id` of 0 gives 400 and an unknown one 404. 409 means  nothing was queued: a delivery of the event is being sent right now, the subscription is disabled, or the record  predates the current delivery format. Rate limited with 429.
         * @summary Retry a webhook delivery
         * @param {number} id The identifier of the object the operation acts on, as the listing operation of that kind of object reports  it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of  another shape does not match the route at all and is answered as not found.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for retryWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhook/
         */
        async retryWebhook(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksLogWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retryWebhook(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.retryWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sends a batch of past webhook deliveries again. `ids` holds identifiers of delivery records from `GET  api/2.0/settings/webhooks/log`; for each one a new delivery record of the same event is queued, with its own  `id`, the retried record\'s `eventId` and the caller in `retriedBy`, and the response lists those new records.  Each event is retried once per call, so a second identifier of the same event is passed over. Records that do  not exist, records of another member\'s subscription when the caller is not a `DocSpaceAdmin`, and records  that cannot be queued now (an event being sent right now, a disabled subscription, a record older than the  current delivery format) are skipped in silence, so compare the response with `ids`; an empty `ids` queues  nothing. A `Guest` is refused. Each receiver gets the same `event.id` and `x-docspace-event-id` header in a  body serialized and signed anew. The work is asynchronous: read the log with `eventId` for each returned  identifier until `nextAttemptOn` is empty; a set `delivery` then means success, an empty one that the portal  gave up. At most 100 identifiers per call, rate limited with 429. `PUT api/2.0/settings/webhook/{id}/retry`  reports why a single record was not queued.
         * @summary Retry webhook deliveries
         * @param {WebhookRetryRequestDto} [webhookRetryRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for retryWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhooks/
         */
        async retryWebhooks(webhookRetryRequestDto?: WebhookRetryRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksLogArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retryWebhooks(webhookRetryRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.retryWebhooks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the stored parameters of one webhook subscription, addressed by `id` in the body rather than in the  path. Every field of the request overwrites the stored one, so a payload that leaves out `enabled`, `triggers`  or `targetId` resets them to off, the catch-all `0` and no target: read the current values with `GET  api/2.0/settings/webhook` first and send back whatever should stay. `secretKey` and `ssl` are the exceptions:  an empty `secretKey` keeps the existing secret, a new one having to satisfy the portal password rules, and a  left-out `ssl` keeps the stored setting, so pass it explicitly when moving the target between `http` and  `https`. A `DocSpaceAdmin`  may update any subscription in the portal, anyone else only their own, and a `Guest` is refused. Once the body  passes the schema checks (a missing `name` or `uri` gives 400 first), an unknown `id` gives 404 and another  member\'s subscription 403 before the target, the secret and the triggers are checked. The payload is then validated  as on creation, except that trigger flags are checked against the role of the subscription\'s creator rather than  the caller\'s. Sending the same payload twice leaves the same state. Use `PUT api/2.0/settings/webhook/enable` to  switch a subscription on or off without touching anything else.
         * @summary Update a webhook
         * @param {UpdateWebhooksConfigRequestDto} [updateWebhooksConfigRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-webhook/
         */
        async updateWebhook(updateWebhooksConfigRequestDto?: UpdateWebhooksConfigRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksConfigWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhook(updateWebhooksConfigRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhooksApi.updateWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WebhooksApi - factory interface
 * @export
 */
export const WebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhooksApiFp(configuration)
    return {
        /**
         * Creates a webhook subscription for the current portal: a target URL that the portal calls with a signed JSON  payload whenever one of the subscribed events happens. The target is checked before anything is stored: an  absolute `http` or `https` address outside the installation\'s own network that answers a HEAD request with a  success code, redirects not followed. `secretKey` is mandatory, has to satisfy the password rules of `GET  api/2.0/settings/security/password`, signs the payloads and never appears in a response. `triggers` is a bitmask  of the subscribed events, 0 standing for every event the creator\'s role may receive; a flag the caller\'s role may not use is rejected, so take  the allowed set from `GET api/2.0/settings/webhook/triggers`. `ssl` demands an `https` target with a valid  certificate, `false` leaves the certificate unchecked, and left out it is `true` for an `https` target and  `false` for an `http` one.  `targetId` limits the events to one entity, for user or group events a user or group the creator may see. A  subscription fires only while it is enabled, for events its creator may see and their current role may  subscribe to. Any role except `Guest` may create one, and each call adds another subscription.
         * @summary Create a webhook
         * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-webhook/
         * @throws {RequiredError}
         */
        createWebhook(requestParameters: WebhooksApiCreateWebhookRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWrapper> {
            return localVarFp.createWebhook(requestParameters.createWebhooksConfigRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches one webhook subscription on or off, leaving the rest of its parameters as they are. Only `id` and  `enabled` are read from the body: `name` and `uri` must be present because the schema requires them, but their  values are ignored here, as are `secretKey`, `ssl`, `triggers` and `targetId` when sent - change any of them  with `PUT api/2.0/settings/webhook` instead. Switching a subscription on re-checks what is already stored: the  saved URL is probed with a HEAD request, the saved secret is checked against the current password rules, and the saved triggers against the current role of the  subscription\'s creator. The call is refused with 400 when any of these fails, so a subscription whose target has  gone away cannot be switched on until it is updated. Switching one off is not validated. While a subscription is  off its events are dropped rather than queued. A `DocSpaceAdmin` may switch any subscription in the portal,  anyone else only their own, and a `Guest` is refused. The response carries the subscription in its new state,  and repeating the call changes nothing further.
         * @summary Switch a webhook on or off
         * @param {WebhooksApiEnableWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for enableWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/enable-webhook/
         * @throws {RequiredError}
         */
        enableWebhook(requestParameters: WebhooksApiEnableWebhookRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWrapper> {
            return localVarFp.enableWebhook(requestParameters.updateWebhooksConfigRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the webhook subscriptions of the current portal, each together with the outcome of its most recent  delivery. The portal owner and a `DocSpaceAdmin` see every subscription in the portal, while a `RoomAdmin` or  a `User` sees only the ones they created themselves, so the same call answers differently depending on who  asks. A `Guest` may not use webhooks at all and is refused, and so is any non-admin caller while the portal  keeps the developer tools restricted, which `GET api/2.0/settings/devtoolsaccess` reports. Every entry pairs  the stored configuration with `status`, the HTTP status code the target answered on the last attempt, where 0  means nothing has been delivered yet, while the secret key is not part of the response. The list is neither  paginated nor ordered, and an empty list simply means no subscription exists for the caller. Nothing is  written and the call is safe to repeat. Create a subscription with `POST api/2.0/settings/webhook`, and  inspect single deliveries with `GET api/2.0/settings/webhooks/log`.
         * @summary Get the portal webhooks
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-webhooks/
         * @throws {RequiredError}
         */
        getTenantWebhooks(options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWithStatusArrayWrapper> {
            return localVarFp.getTenantWebhooks(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the catalogue of events a webhook subscription can listen to, in the order the portal presents them:  user events, then group, file, folder, room, form and agent ones. Each entry carries the event name as it  appears in a payload, such as `file.created`, the bit value to put into the `triggers` bitmask of a  subscription, and `available`, telling whether the caller\'s own role may subscribe to that event at all: a  `User` cannot subscribe to the creation of users, groups or rooms, for instance, while a `RoomAdmin` can. Add  the bit values of the wanted events together to build `triggers`; the entry named `*` has the value 0 and  stands for every event the subscription creator\'s current role may subscribe to, so it is used on its own  rather than added. Events unavailable to the caller are listed all the same, but passing one to `POST  api/2.0/settings/webhook` or `PUT api/2.0/settings/webhook` is rejected as an invalid request. This is fixed  reference data: the same for every portal, not paginated, changing only with the product version, and readable  by any authenticated caller, a `Guest` included. Nothing is written.
         * @summary Get the webhook triggers
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebhookTriggers operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhook-triggers/
         * @throws {RequiredError}
         */
        getWebhookTriggers(options?: RawAxiosRequestConfig): AxiosPromise<WebhookTriggerArrayWrapper> {
            return localVarFp.getWebhookTriggers(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the delivery log of the portal webhooks, one record per delivery of an event, updated in place by its  automatic retries: the trigger, the request and response headers and bodies, the HTTP `status` of the latest  attempt, 0 while no answer has come back, and the `delivery` moment, empty until an attempt succeeds. `attempts`  counts the tries so far and `nextAttemptOn` is set while another one is due. A manual retry adds a record of its  own, with a new `id`, the same `eventId` and the member in `retriedBy`. Records come newest first, paged with  `startIndex` and `count`, at most 100 at a time, with the number of matches as `total`. Filters combine with  AND: `deliveryFrom` and `deliveryTo` bound the delivery moment, `hookUri` matches the subscription URL exactly,  `configId` picks one subscription, `groupStatus` keeps the status classes it names (0 means no filter), and  `trigger` one event type (0 means all). `eventId` keeps every record of one event; the `id` of a record a manual  retry returned keeps that record alone. `userId` filters by the creator of the subscription and is forced to the  caller for anyone but a `DocSpaceAdmin`. A `Guest` is refused. Nothing is written.
         * @summary Get the webhook delivery log
         * @param {WebhooksApiGetWebhooksLogsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWebhooksLogs operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-webhooks-logs/
         * @throws {RequiredError}
         */
        getWebhooksLogs(requestParameters: WebhooksApiGetWebhooksLogsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksLogArrayWrapper> {
            return localVarFp.getWebhooksLogs(requestParameters.deliveryFrom, requestParameters.deliveryTo, requestParameters.hookUri, requestParameters.configId, requestParameters.eventId, requestParameters.groupStatus, requestParameters.userId, requestParameters.trigger, requestParameters.count, requestParameters.startIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes one webhook subscription from the current portal for good, addressed by `id` in the path. Deliveries  stop with it: matching events are no longer queued, and there is no undo, so a subscription dropped by mistake  has to be created again with `POST api/2.0/settings/webhook`, which gives it a new identifier and needs a new  secret key. To pause deliveries without losing the configuration, switch the subscription off with  `PUT api/2.0/settings/webhook/enable` instead. A `DocSpaceAdmin` may remove any subscription in the portal,  anyone else only the ones they created, and a `Guest` may not use webhooks at all. The response repeats the  subscription as it was just before the removal, so the caller can record what disappeared, again without the  secret key. An identifier that no longer exists gives 404, which is what a second removal of the same  subscription answers as well, so a repeated call is harmless but reports the state truthfully rather than  pretending to succeed.
         * @summary Remove a webhook
         * @param {WebhooksApiRemoveWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for removeWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/remove-webhook/
         * @throws {RequiredError}
         */
        removeWebhook(requestParameters: WebhooksApiRemoveWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWrapper> {
            return localVarFp.removeWebhook(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends one past webhook delivery again to its subscription. The `id` in the path is that of a delivery record  from `GET api/2.0/settings/webhooks/log`, not of a subscription. A `DocSpaceAdmin` may retry any delivery in the  portal, anyone else only deliveries of the subscriptions they created, and a `Guest` is refused. The work is  asynchronous: a new delivery record is queued and returned with its own `id`, the `eventId` of the retried one  and the caller in `retriedBy`; the retried record keeps its outcome, and automatic retries still due for the  event stop. The receiver gets the same `event.id` and `x-docspace-event-id` header in a body serialized and  signed anew. To learn the outcome, read the log with `eventId` set to the returned `id` until `nextAttemptOn` is  empty: `delivery` is then set on success and empty when the portal gave up after its automatic retries (on the  default schedule, six more tries over about 18 hours). An `id` of 0 gives 400 and an unknown one 404. 409 means  nothing was queued: a delivery of the event is being sent right now, the subscription is disabled, or the record  predates the current delivery format. Rate limited with 429.
         * @summary Retry a webhook delivery
         * @param {WebhooksApiRetryWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for retryWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhook/
         * @throws {RequiredError}
         */
        retryWebhook(requestParameters: WebhooksApiRetryWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksLogWrapper> {
            return localVarFp.retryWebhook(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends a batch of past webhook deliveries again. `ids` holds identifiers of delivery records from `GET  api/2.0/settings/webhooks/log`; for each one a new delivery record of the same event is queued, with its own  `id`, the retried record\'s `eventId` and the caller in `retriedBy`, and the response lists those new records.  Each event is retried once per call, so a second identifier of the same event is passed over. Records that do  not exist, records of another member\'s subscription when the caller is not a `DocSpaceAdmin`, and records  that cannot be queued now (an event being sent right now, a disabled subscription, a record older than the  current delivery format) are skipped in silence, so compare the response with `ids`; an empty `ids` queues  nothing. A `Guest` is refused. Each receiver gets the same `event.id` and `x-docspace-event-id` header in a  body serialized and signed anew. The work is asynchronous: read the log with `eventId` for each returned  identifier until `nextAttemptOn` is empty; a set `delivery` then means success, an empty one that the portal  gave up. At most 100 identifiers per call, rate limited with 429. `PUT api/2.0/settings/webhook/{id}/retry`  reports why a single record was not queued.
         * @summary Retry webhook deliveries
         * @param {WebhooksApiRetryWebhooksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for retryWebhooks operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/retry-webhooks/
         * @throws {RequiredError}
         */
        retryWebhooks(requestParameters: WebhooksApiRetryWebhooksRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksLogArrayWrapper> {
            return localVarFp.retryWebhooks(requestParameters.webhookRetryRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the stored parameters of one webhook subscription, addressed by `id` in the body rather than in the  path. Every field of the request overwrites the stored one, so a payload that leaves out `enabled`, `triggers`  or `targetId` resets them to off, the catch-all `0` and no target: read the current values with `GET  api/2.0/settings/webhook` first and send back whatever should stay. `secretKey` and `ssl` are the exceptions:  an empty `secretKey` keeps the existing secret, a new one having to satisfy the portal password rules, and a  left-out `ssl` keeps the stored setting, so pass it explicitly when moving the target between `http` and  `https`. A `DocSpaceAdmin`  may update any subscription in the portal, anyone else only their own, and a `Guest` is refused. Once the body  passes the schema checks (a missing `name` or `uri` gives 400 first), an unknown `id` gives 404 and another  member\'s subscription 403 before the target, the secret and the triggers are checked. The payload is then validated  as on creation, except that trigger flags are checked against the role of the subscription\'s creator rather than  the caller\'s. Sending the same payload twice leaves the same state. Use `PUT api/2.0/settings/webhook/enable` to  switch a subscription on or off without touching anything else.
         * @summary Update a webhook
         * @param {WebhooksApiUpdateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateWebhook operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-webhook/
         * @throws {RequiredError}
         */
        updateWebhook(requestParameters: WebhooksApiUpdateWebhookRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WebhooksConfigWrapper> {
            return localVarFp.updateWebhook(requestParameters.updateWebhooksConfigRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiCreateWebhookRequest
 */
export interface WebhooksApiCreateWebhookRequest {
    /**
     * 
     * @type {CreateWebhooksConfigRequestDto}
     * @memberof WebhooksApiCreateWebhook
     */
    readonly createWebhooksConfigRequestDto?: CreateWebhooksConfigRequestDto
}

/**
 * Request parameters for enableWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiEnableWebhookRequest
 */
export interface WebhooksApiEnableWebhookRequest {
    /**
     * 
     * @type {UpdateWebhooksConfigRequestDto}
     * @memberof WebhooksApiEnableWebhook
     */
    readonly updateWebhooksConfigRequestDto?: UpdateWebhooksConfigRequestDto
}

/**
 * Request parameters for getWebhooksLogs operation in WebhooksApi.
 * @export
 * @interface WebhooksApiGetWebhooksLogsRequest
 */
export interface WebhooksApiGetWebhooksLogsRequest {
    /**
     * The earliest delivery moment a record may carry. Records of attempts still on their way have no delivery  moment yet and fall outside any bound set here.
     * @type {string}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly deliveryFrom?: string

    /**
     * The latest delivery moment a record may carry. All the filters combine with AND, so it narrows whatever the  other ones already kept.
     * @type {string}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly deliveryTo?: string

    /**
     * The subscription target address, matched in full rather than as a prefix. Filtering by `configId` is the  reliable way to pick one subscription, since several may share an address.
     * @type {string}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly hookUri?: string

    /**
     * The subscription whose deliveries are kept, by the `id` that `GET api/2.0/settings/webhook` reports.
     * @type {number}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly configId?: number

    /**
     * One event, by the `eventId` of its delivery records, which is also the `event.id` the receiver got.
     * @type {number}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly eventId?: number

    /**
     * The classes of answered status to keep, as a bitmask; 0 keeps every record whatever the target answered.
     * @type {WebhookGroupStatus}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly groupStatus?: WebhookGroupStatus

    /**
     * The member whose subscriptions the records belong to, by portal user ID - who created the subscription, not  who caused the event. For a caller who is not a DocSpace administrator it is overwritten with the caller own  ID, so such a caller never sees another member deliveries whatever is sent here.
     * @type {string}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly userId?: string

    /**
     * The single event kind to keep; 0 keeps every kind. It names one trigger rather than a mask of several, unlike  the `triggers` a subscription is created with.
     * @type {WebhookTrigger}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly trigger?: WebhookTrigger

    /**
     * How many records one page may hold. The maximum is also the default, so a client that wants shorter pages has  to ask for them; the number of records matching the filter comes back as `total` beside the page.
     * @type {number}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly count?: number

    /**
     * How many matching records to skip before the page begins, counting from the newest. Advance it by `count` to  walk back through the log.
     * @type {number}
     * @memberof WebhooksApiGetWebhooksLogs
     */
    readonly startIndex?: number
}

/**
 * Request parameters for removeWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiRemoveWebhookRequest
 */
export interface WebhooksApiRemoveWebhookRequest {
    /**
     * The identifier of the object the operation acts on, as the listing operation of that kind of object reports  it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of  another shape does not match the route at all and is answered as not found.
     * @type {number}
     * @memberof WebhooksApiRemoveWebhook
     */
    readonly id: number
}

/**
 * Request parameters for retryWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiRetryWebhookRequest
 */
export interface WebhooksApiRetryWebhookRequest {
    /**
     * The identifier of the object the operation acts on, as the listing operation of that kind of object reports  it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of  another shape does not match the route at all and is answered as not found.
     * @type {number}
     * @memberof WebhooksApiRetryWebhook
     */
    readonly id: number
}

/**
 * Request parameters for retryWebhooks operation in WebhooksApi.
 * @export
 * @interface WebhooksApiRetryWebhooksRequest
 */
export interface WebhooksApiRetryWebhooksRequest {
    /**
     * 
     * @type {WebhookRetryRequestDto}
     * @memberof WebhooksApiRetryWebhooks
     */
    readonly webhookRetryRequestDto?: WebhookRetryRequestDto
}

/**
 * Request parameters for updateWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiUpdateWebhookRequest
 */
export interface WebhooksApiUpdateWebhookRequest {
    /**
     * 
     * @type {UpdateWebhooksConfigRequestDto}
     * @memberof WebhooksApiUpdateWebhook
     */
    readonly updateWebhooksConfigRequestDto?: UpdateWebhooksConfigRequestDto
}

/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
export class WebhooksApi extends BaseAPI {
    /**
     * Creates a webhook subscription for the current portal: a target URL that the portal calls with a signed JSON  payload whenever one of the subscribed events happens. The target is checked before anything is stored: an  absolute `http` or `https` address outside the installation\'s own network that answers a HEAD request with a  success code, redirects not followed. `secretKey` is mandatory, has to satisfy the password rules of `GET  api/2.0/settings/security/password`, signs the payloads and never appears in a response. `triggers` is a bitmask  of the subscribed events, 0 standing for every event the creator\'s role may receive; a flag the caller\'s role may not use is rejected, so take  the allowed set from `GET api/2.0/settings/webhook/triggers`. `ssl` demands an `https` target with a valid  certificate, `false` leaves the certificate unchecked, and left out it is `true` for an `https` target and  `false` for an `http` one.  `targetId` limits the events to one entity, for user or group events a user or group the creator may see. A  subscription fires only while it is enabled, for events its creator may see and their current role may  subscribe to. Any role except `Guest` may create one, and each call adds another subscription.
     * @summary Create a webhook
     * @param {SettingsWebhooksApiCreateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public createWebhook(requestParameters: WebhooksApiCreateWebhookRequest = {}, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).createWebhook(requestParameters.createWebhooksConfigRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches one webhook subscription on or off, leaving the rest of its parameters as they are. Only `id` and  `enabled` are read from the body: `name` and `uri` must be present because the schema requires them, but their  values are ignored here, as are `secretKey`, `ssl`, `triggers` and `targetId` when sent - change any of them  with `PUT api/2.0/settings/webhook` instead. Switching a subscription on re-checks what is already stored: the  saved URL is probed with a HEAD request, the saved secret is checked against the current password rules, and the saved triggers against the current role of the  subscription\'s creator. The call is refused with 400 when any of these fails, so a subscription whose target has  gone away cannot be switched on until it is updated. Switching one off is not validated. While a subscription is  off its events are dropped rather than queued. A `DocSpaceAdmin` may switch any subscription in the portal,  anyone else only their own, and a `Guest` is refused. The response carries the subscription in its new state,  and repeating the call changes nothing further.
     * @summary Switch a webhook on or off
     * @param {SettingsWebhooksApiEnableWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public enableWebhook(requestParameters: WebhooksApiEnableWebhookRequest = {}, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).enableWebhook(requestParameters.updateWebhooksConfigRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the webhook subscriptions of the current portal, each together with the outcome of its most recent  delivery. The portal owner and a `DocSpaceAdmin` see every subscription in the portal, while a `RoomAdmin` or  a `User` sees only the ones they created themselves, so the same call answers differently depending on who  asks. A `Guest` may not use webhooks at all and is refused, and so is any non-admin caller while the portal  keeps the developer tools restricted, which `GET api/2.0/settings/devtoolsaccess` reports. Every entry pairs  the stored configuration with `status`, the HTTP status code the target answered on the last attempt, where 0  means nothing has been delivered yet, while the secret key is not part of the response. The list is neither  paginated nor ordered, and an empty list simply means no subscription exists for the caller. Nothing is  written and the call is safe to repeat. Create a subscription with `POST api/2.0/settings/webhook`, and  inspect single deliveries with `GET api/2.0/settings/webhooks/log`.
     * @summary Get the portal webhooks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public getTenantWebhooks(options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).getTenantWebhooks(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the catalogue of events a webhook subscription can listen to, in the order the portal presents them:  user events, then group, file, folder, room, form and agent ones. Each entry carries the event name as it  appears in a payload, such as `file.created`, the bit value to put into the `triggers` bitmask of a  subscription, and `available`, telling whether the caller\'s own role may subscribe to that event at all: a  `User` cannot subscribe to the creation of users, groups or rooms, for instance, while a `RoomAdmin` can. Add  the bit values of the wanted events together to build `triggers`; the entry named `*` has the value 0 and  stands for every event the subscription creator\'s current role may subscribe to, so it is used on its own  rather than added. Events unavailable to the caller are listed all the same, but passing one to `POST  api/2.0/settings/webhook` or `PUT api/2.0/settings/webhook` is rejected as an invalid request. This is fixed  reference data: the same for every portal, not paginated, changing only with the product version, and readable  by any authenticated caller, a `Guest` included. Nothing is written.
     * @summary Get the webhook triggers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public getWebhookTriggers(options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).getWebhookTriggers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the delivery log of the portal webhooks, one record per delivery of an event, updated in place by its  automatic retries: the trigger, the request and response headers and bodies, the HTTP `status` of the latest  attempt, 0 while no answer has come back, and the `delivery` moment, empty until an attempt succeeds. `attempts`  counts the tries so far and `nextAttemptOn` is set while another one is due. A manual retry adds a record of its  own, with a new `id`, the same `eventId` and the member in `retriedBy`. Records come newest first, paged with  `startIndex` and `count`, at most 100 at a time, with the number of matches as `total`. Filters combine with  AND: `deliveryFrom` and `deliveryTo` bound the delivery moment, `hookUri` matches the subscription URL exactly,  `configId` picks one subscription, `groupStatus` keeps the status classes it names (0 means no filter), and  `trigger` one event type (0 means all). `eventId` keeps every record of one event; the `id` of a record a manual  retry returned keeps that record alone. `userId` filters by the creator of the subscription and is forced to the  caller for anyone but a `DocSpaceAdmin`. A `Guest` is refused. Nothing is written.
     * @summary Get the webhook delivery log
     * @param {SettingsWebhooksApiGetWebhooksLogsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public getWebhooksLogs(requestParameters: WebhooksApiGetWebhooksLogsRequest = {}, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).getWebhooksLogs(requestParameters.deliveryFrom, requestParameters.deliveryTo, requestParameters.hookUri, requestParameters.configId, requestParameters.eventId, requestParameters.groupStatus, requestParameters.userId, requestParameters.trigger, requestParameters.count, requestParameters.startIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes one webhook subscription from the current portal for good, addressed by `id` in the path. Deliveries  stop with it: matching events are no longer queued, and there is no undo, so a subscription dropped by mistake  has to be created again with `POST api/2.0/settings/webhook`, which gives it a new identifier and needs a new  secret key. To pause deliveries without losing the configuration, switch the subscription off with  `PUT api/2.0/settings/webhook/enable` instead. A `DocSpaceAdmin` may remove any subscription in the portal,  anyone else only the ones they created, and a `Guest` may not use webhooks at all. The response repeats the  subscription as it was just before the removal, so the caller can record what disappeared, again without the  secret key. An identifier that no longer exists gives 404, which is what a second removal of the same  subscription answers as well, so a repeated call is harmless but reports the state truthfully rather than  pretending to succeed.
     * @summary Remove a webhook
     * @param {SettingsWebhooksApiRemoveWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public removeWebhook(requestParameters: WebhooksApiRemoveWebhookRequest, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).removeWebhook(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends one past webhook delivery again to its subscription. The `id` in the path is that of a delivery record  from `GET api/2.0/settings/webhooks/log`, not of a subscription. A `DocSpaceAdmin` may retry any delivery in the  portal, anyone else only deliveries of the subscriptions they created, and a `Guest` is refused. The work is  asynchronous: a new delivery record is queued and returned with its own `id`, the `eventId` of the retried one  and the caller in `retriedBy`; the retried record keeps its outcome, and automatic retries still due for the  event stop. The receiver gets the same `event.id` and `x-docspace-event-id` header in a body serialized and  signed anew. To learn the outcome, read the log with `eventId` set to the returned `id` until `nextAttemptOn` is  empty: `delivery` is then set on success and empty when the portal gave up after its automatic retries (on the  default schedule, six more tries over about 18 hours). An `id` of 0 gives 400 and an unknown one 404. 409 means  nothing was queued: a delivery of the event is being sent right now, the subscription is disabled, or the record  predates the current delivery format. Rate limited with 429.
     * @summary Retry a webhook delivery
     * @param {SettingsWebhooksApiRetryWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public retryWebhook(requestParameters: WebhooksApiRetryWebhookRequest, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).retryWebhook(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends a batch of past webhook deliveries again. `ids` holds identifiers of delivery records from `GET  api/2.0/settings/webhooks/log`; for each one a new delivery record of the same event is queued, with its own  `id`, the retried record\'s `eventId` and the caller in `retriedBy`, and the response lists those new records.  Each event is retried once per call, so a second identifier of the same event is passed over. Records that do  not exist, records of another member\'s subscription when the caller is not a `DocSpaceAdmin`, and records  that cannot be queued now (an event being sent right now, a disabled subscription, a record older than the  current delivery format) are skipped in silence, so compare the response with `ids`; an empty `ids` queues  nothing. A `Guest` is refused. Each receiver gets the same `event.id` and `x-docspace-event-id` header in a  body serialized and signed anew. The work is asynchronous: read the log with `eventId` for each returned  identifier until `nextAttemptOn` is empty; a set `delivery` then means success, an empty one that the portal  gave up. At most 100 identifiers per call, rate limited with 429. `PUT api/2.0/settings/webhook/{id}/retry`  reports why a single record was not queued.
     * @summary Retry webhook deliveries
     * @param {SettingsWebhooksApiRetryWebhooksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public retryWebhooks(requestParameters: WebhooksApiRetryWebhooksRequest = {}, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).retryWebhooks(requestParameters.webhookRetryRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the stored parameters of one webhook subscription, addressed by `id` in the body rather than in the  path. Every field of the request overwrites the stored one, so a payload that leaves out `enabled`, `triggers`  or `targetId` resets them to off, the catch-all `0` and no target: read the current values with `GET  api/2.0/settings/webhook` first and send back whatever should stay. `secretKey` and `ssl` are the exceptions:  an empty `secretKey` keeps the existing secret, a new one having to satisfy the portal password rules, and a  left-out `ssl` keeps the stored setting, so pass it explicitly when moving the target between `http` and  `https`. A `DocSpaceAdmin`  may update any subscription in the portal, anyone else only their own, and a `Guest` is refused. Once the body  passes the schema checks (a missing `name` or `uri` gives 400 first), an unknown `id` gives 404 and another  member\'s subscription 403 before the target, the secret and the triggers are checked. The payload is then validated  as on creation, except that trigger flags are checked against the role of the subscription\'s creator rather than  the caller\'s. Sending the same payload twice leaves the same state. Use `PUT api/2.0/settings/webhook/enable` to  switch a subscription on or off without touching anything else.
     * @summary Update a webhook
     * @param {SettingsWebhooksApiUpdateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    public updateWebhook(requestParameters: WebhooksApiUpdateWebhookRequest = {}, options?: RawAxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).updateWebhook(requestParameters.updateWebhooksConfigRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

