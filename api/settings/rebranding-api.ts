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
import type { AdditionalWhiteLabelSettingsDtoWrapper } from '../../models';
// @ts-ignore
import type { AdditionalWhiteLabelSettingsResponseWrapper } from '../../models';
// @ts-ignore
import type { AdditionalWhiteLabelSettingsWrapper } from '../../models';
// @ts-ignore
import type { BooleanWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsArrayWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsDtoWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsResponseWrapper } from '../../models';
// @ts-ignore
import type { CompanyWhiteLabelSettingsWrapper } from '../../models';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { IsDefaultWhiteLabelLogosArrayWrapper } from '../../models';
// @ts-ignore
import type { IsDefaultWhiteLabelLogosWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { WhiteLabelItemArrayWrapper } from '../../models';
// @ts-ignore
import type { WhiteLabelRequestsDto } from '../../models';
/**
 * RebrandingApi - axios parameter creator
 * @export
 */
export const RebrandingApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Discards the resource flags stored for the installation and brings back the built-in set, so the sample  documents, the Help Center link, the Feedback and Support link, the user forum, the video guides and the  license agreements are offered as they are out of the box. Requires a DocSpace administrator and a server  installation with unrestricted space access; on a SaaS portal the call is refused. Unlike  `POST api/2.0/settings/rebranding/additional` it does not need a plan that includes branding, so an  installation whose subscription no longer covers it can still be reset. The call is destructive for the stored  flags, which have to be set again to come back, and it is idempotent. Instead of a flag it answers the set  that is now in effect, so no follow-up read is needed. The reset is installation-wide and reaches every  portal, and it leaves the visibility of the About page alone. The company details are reset separately by  `DELETE api/2.0/settings/rebranding/company`.
         * @summary Delete the additional white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-additional-white-label-settings/
         */
        deleteAdditionalWhiteLabelSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/additional`;
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
         * Discards the company details stored for the installation and brings back the built-in ONLYOFFICE name, site,  email, address and phone, so the About page and the notification letters print the original vendor again.  Requires a DocSpace administrator and a server installation with unrestricted space access; on a SaaS portal  the call is refused. Unlike `POST api/2.0/settings/rebranding/company` it does not need a plan that includes  branding, so an installation whose subscription no longer covers it can still be reset. The call is  destructive: the previous details are not kept anywhere and have to be entered again to come back. It is  idempotent, and instead of a flag it answers the details that are now in effect, so no follow-up read is  needed. The reset is installation-wide and reaches every portal. The help and support links are reset  separately by `DELETE api/2.0/settings/rebranding/additional`, and the logos and the wordmark of a single  portal by the restore operations under `api/2.0/settings/whitelabel`.
         * @summary Delete the company white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-company-white-label-settings/
         */
        deleteCompanyWhiteLabelSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/company`;
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
         * Returns which of the ONLYOFFICE help and community resources the interface may offer - the sample documents,  the Help Center link, the Feedback and Support link, the user forum, the video guides and the license  agreements - so a client can hide the entries that are switched off. Any authenticated user may call it; no  administrator permission is required, and a portal whose payment has lapsed is served as well. The call is  read-only and idempotent. Each flag is `true` when the entry may be shown and `false` when it must be hidden,  and `isDefault` tells whether the whole set is still the built-in one. The flags are installation-wide, so  every portal of a server installation reports the same ones. They say nothing about the caller\'s own  permissions, and the addresses behind the entries are not part of the answer. Change the flags with  `POST api/2.0/settings/rebranding/additional` and reset them with  `DELETE api/2.0/settings/rebranding/additional`.
         * @summary Get the additional white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-additional-white-label-settings/
         */
        getAdditionalWhiteLabelSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/additional`;
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
         * Returns the company details that the About page and the notification letters print as the vendor, in the form  the settings interface edits them. Any authenticated user may call it; no administrator permission is  required, and a portal whose payment has lapsed is served as well. The call is read-only and idempotent.  Alongside the stored fields the answer carries `isLicensor`, which tells whether these details belong to the  vendor of the product itself, and `isDefault`, which tells whether they are still the built-in ONLYOFFICE  ones. The values are installation-wide, so every portal of a server installation reports the same ones. The  response is revalidatable: it carries `Last-Modified`, and sending that value back in `If-Modified-Since`  yields an empty body while the details have not changed, which makes polling cheap. For the About page, where  the built-in vendor has to be shown next to a reseller, use `GET api/2.0/settings/companywhitelabel` instead.  Change the details with `POST api/2.0/settings/rebranding/company`.
         * @summary Get the company white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-company-white-label-settings/
         */
        getCompanyWhiteLabelSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/company`;
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
         * Reports whether branding may be configured for the current portal at all, which is the check to make before  offering the rebranding interface or calling any of the save operations under `api/2.0/settings/whitelabel`.  Requires a DocSpace administrator. The call is read-only and idempotent. The answer is `true` only when both  conditions hold: the branding section is not switched off in the installation configuration, and the portal\'s  current plan includes customization. It comes back as `false` on a plan without branding, which is exactly the  case in which `POST api/2.0/settings/whitelabel/logos/save`,  `POST api/2.0/settings/whitelabel/logos/savefromfiles` and `POST api/2.0/settings/whitelabel/logotext/save`  are refused as payment required. The restore operations do not depend on this flag and stay available, so a  portal that loses branding can still be reset to the built-in logos and wordmark. The flag says nothing about  the installation-wide default branding, which additionally needs a server installation with unrestricted space  access, and nothing about the company details and help links under `api/2.0/settings/rebranding`.
         * @summary Check the white label availability
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEnableWhitelabel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enable-whitelabel/
         */
        getEnableWhitelabel: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/enablewhitelabel`;
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
         * Reports whether the current portal still uses the built-in wordmark or one that was stored for it, which is  what an interface needs to decide whether a Restore action applies to the text. Requires a DocSpace  administrator. The call is read-only and idempotent. The answer has the same shape as one entry of  `GET api/2.0/settings/whitelabel/logos/isdefault`, with `name` fixed to `logotext` and `default` set to `true`  while no text has been stored and to `false` once one has. Because `GET api/2.0/settings/whitelabel/logotext`  falls back to `ONLYOFFICE` when nothing is stored, this operation is the only way to tell a portal that  deliberately kept the built-in wordmark from one that saved the very same text. Pass `isDefault=true` to  inspect the installation-wide default branding instead of this portal\'s. The flag turns back to `true` after  `PUT api/2.0/settings/whitelabel/logotext/restore`, and to `false` after  `POST api/2.0/settings/whitelabel/logotext/save`. Saving the built-in wordmark itself counts as clearing the  setting, so the flag stays `true` in that case as well.
         * @summary Check the default logo text
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logo-text/
         */
        getIsDefaultWhiteLabelLogoText: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logotext/isdefault`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Reports, slot by slot, whether the current portal still shows the built-in image or a logo that was uploaded  for it, which is what an interface needs to decide where a Restore action makes sense. Requires a DocSpace  administrator; the URLs themselves are public and come from `GET api/2.0/settings/whitelabel/logos`, which  needs no authentication. The call is read-only and idempotent. Every logo slot is returned, including the  notification logo that the public list leaves out, so the result has one entry more than that list. An entry  gives the stable slot name in `name` and `default` set to `true` while the slot has never been written, and to  `false` once an image has been stored for it, whether for the light or for the dark theme. A slot goes back to  `true` after `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to inspect the  installation-wide default branding instead of this portal\'s. The logo text is reported separately by  `GET api/2.0/settings/whitelabel/logotext/isdefault`.
         * @summary Check the default white label logos
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logos/
         */
        getIsDefaultWhiteLabelLogos: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos/isdefault`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Returns the licensor details - company name, site, support email, postal address and phone - that the About  page and the notification letters print as the vendor of the installation. Any authenticated user may call it,  as these details are shown in the interface to everyone; no administrator permission is required. The call is  read-only and idempotent. The list holds the details currently in effect as its first item; when they have  been replaced by a reseller and the replacement is not itself marked as the licensor, the built-in ONLYOFFICE  details are appended as a second item, so a caller can print both the reseller and the original vendor. A  single-item list therefore means that the current details are the only ones to show. The values are  installation-wide rather than per-portal, so every portal of a server installation reports the same ones. The  same data in the form the settings interface edits is served by `GET api/2.0/settings/rebranding/company`, and  it is written by `POST api/2.0/settings/rebranding/company`.
         * @summary Get the licensor data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLicensorData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-licensor-data/
         */
        getLicensorData: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/companywhitelabel`;
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
         * Returns the wordmark the current portal prints next to or instead of a logo image, as a bare string rather  than an object. Requires a DocSpace administrator, because this is the settings view of the value; the  branding a login page needs is served by `GET api/2.0/settings/whitelabel/logos`, which needs no  authentication. The call is read-only and idempotent. When nothing has been stored for the portal, the  built-in `ONLYOFFICE` is returned, so the answer is never empty and cannot be used to tell a custom text from  the default one - `GET api/2.0/settings/whitelabel/logotext/isdefault` answers that question. Pass  `isDefault=true` to read the installation-wide default wordmark instead of this portal\'s; without it the  portal\'s own value is returned even when the installation carries a different default. Change the text with  `POST api/2.0/settings/whitelabel/logotext/save` and clear it with  `PUT api/2.0/settings/whitelabel/logotext/restore`. The value is stored as it was typed, at most 40 characters  long, and is not translated for the caller\'s language, so the same wordmark is returned for every user of the  portal.
         * @summary Get the white label logo text
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logo-text/
         */
        getWhiteLabelLogoText: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logotext`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Lists the branding logo slots of the current portal together with the image URLs to render, which is what a  login page, an editor or a mail template needs before any user is known. No authentication is required, and  the portal is resolved from the address the request is made to. The call is read-only and idempotent. Each  item carries the slot as a number in `type`, its stable name in `name`, the size the image is fitted to in  `size` (`width` and `height` in pixels), and the URLs in `path`. When `isDark` is passed, only the matching  theme is filled in, `light` for `false` and `dark` for `true`; when it is omitted both are filled in and  `dark` comes back empty for the slots that have no separate dark image. The notification slot is not part of  this list, as it is derived from the login-page logo and used only in letters. Pass `isDefault=true` to read  the installation-wide default logos instead of this portal\'s. To learn which slots are still untouched use  `GET api/2.0/settings/whitelabel/logos/isdefault`.
         * @summary Get the white label logos
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logos/
         */
        getWhiteLabelLogos: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Clears the wordmark stored for the current portal, so the built-in `ONLYOFFICE` is printed again next to or  instead of the logo images. Requires a DocSpace administrator. Unlike  `POST api/2.0/settings/whitelabel/logotext/save` it does not need a plan that includes branding, so a portal  whose subscription no longer covers branding can still be reset. The call is destructive for the stored text,  which is not kept anywhere and has to be typed again to come back, and it is idempotent: `true` comes back  both when a text was cleared and when there was none. Logo images are left untouched and have their own  `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to reset the installation-wide default  wordmark instead of this portal\'s, which only a server installation allows. After the call  `GET api/2.0/settings/whitelabel/logotext` reports `ONLYOFFICE` and  `GET api/2.0/settings/whitelabel/logotext/isdefault` reports `default` as `true`. The wordmark is the only  setting this operation touches, so the company details and the help links of the installation are left as they  are.
         * @summary Restore the white label logo text
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logo-text/
         */
        restoreWhiteLabelLogoText: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logotext/restore`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Drops every logo uploaded for the current portal and brings back the built-in images, so the portal looks  unbranded again on the login page, in the left menu, in the editors and in letters. Requires a DocSpace  administrator. Unlike the two save operations it does not need a plan that includes branding, so a portal  whose subscription no longer covers it can still be reset. The call is destructive: the stored image files are  deleted and cannot be recovered from the portal, only re-uploaded with  `POST api/2.0/settings/whitelabel/logos/save`. It is idempotent and answers `true` both when logos were  removed and when there was nothing to remove. All slots are reset together; there is no way to restore a  single one. For this portal the picture kept for the older mail templates is reset along with the logos, while  the logo text is left as it is and has its own `PUT api/2.0/settings/whitelabel/logotext/restore`. Pass  `isDefault=true` to reset the installation-wide default branding instead, which only a server installation  allows. Confirm the result with `GET api/2.0/settings/whitelabel/logos/isdefault`.
         * @summary Restore the white label logos
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logos/
         */
        restoreWhiteLabelLogos: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos/restore`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
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
         * Stores which of the ONLYOFFICE help and community resources the interface offers: the sample documents, the  Help Center link, the Feedback and Support link, the user forum, the video guides and the license agreements.  The whole set is replaced by the `settings` object of the request, so send every flag, not only the changed  ones - a flag left out is stored as off. A request without that object is rejected as an invalid request.  Requires a DocSpace administrator, a server installation with unrestricted space access and a plan that  includes branding, which `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is  refused. The flags are installation-wide, so the change reaches every portal of that installation. The call is  mutating and idempotent, and answers `true`. Only the visibility of these entries is controlled here, not the  addresses behind them. Read the result back with `GET api/2.0/settings/rebranding/additional` and undo it with  `DELETE api/2.0/settings/rebranding/additional`.
         * @summary Save the additional white label settings
         * @param {AdditionalWhiteLabelSettingsWrapper} [additionalWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-additional-white-label-settings/
         */
        saveAdditionalWhiteLabelSettings: async (additionalWhiteLabelSettingsWrapper?: AdditionalWhiteLabelSettingsWrapper, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/additional`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(additionalWhiteLabelSettingsWrapper, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores the company details - name, site, support email, postal address and phone - that the About page and the  notification letters print as the vendor. The whole set is replaced by the `settings` object of the request,  so send every field, not only the changed ones; a request without that object, or with an email or a site that  is not a valid value, is rejected as an invalid request. Requires a DocSpace administrator, a server  installation with unrestricted space access and a plan that includes branding, which  `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is refused. The values are  installation-wide, so the change reaches every portal of that installation. Two fields are not taken from the  request: the licensor flag is always stored as `false`, and hiding the About page is silently kept off unless  the plan allows it. The call is mutating and idempotent, and answers `true`. Read the result back with  `GET api/2.0/settings/rebranding/company` and undo it with `DELETE api/2.0/settings/rebranding/company`.
         * @summary Save the company white label settings
         * @param {CompanyWhiteLabelSettingsWrapper} [companyWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-company-white-label-settings/
         */
        saveCompanyWhiteLabelSettings: async (companyWhiteLabelSettingsWrapper?: CompanyWhiteLabelSettingsWrapper, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/rebranding/company`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(companyWhiteLabelSettingsWrapper, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the wordmark that the portal prints next to or instead of a logo image, on the login page, in the editors  and in notification letters. Only `logoText` from the request body is used here, and it is limited to 40  characters; a longer value is rejected as an invalid request. Sending an empty or blank text, or exactly the  built-in `ONLYOFFICE`, clears the setting instead of storing it, which has the same effect as  `PUT api/2.0/settings/whitelabel/logotext/restore`. Requires a DocSpace administrator and a plan that includes  branding, which `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment  required. The call is mutating and idempotent: the previous text is overwritten and `true` comes back. Logo  images are not touched - they are saved by `POST api/2.0/settings/whitelabel/logos/save` - and the text is not  rendered into them. Pass `isDefault=true` to write the installation-wide default wordmark instead of this  portal\'s, which only a server installation allows. Read the stored value back with  `GET api/2.0/settings/whitelabel/logotext`.
         * @summary Save the white label logo text
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-logo-text/
         */
        saveWhiteLabelLogoText: async (isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logotext/save`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(whiteLabelRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the branding images of the current portal with the ones sent in the request, so that the logos on the  login page, in the left menu, in the editors and in letters come from this portal. Every entry of `logo` names  a logo slot in its `key` - the numeric type published by `GET api/2.0/settings/whitelabel/logos` - and carries  the light-theme and the dark-theme image in `light` and `dark`. An image is either a  `data:image/png;base64,...` payload (`png`, `jpg` and `svg` are accepted) or the name of a file already  uploaded to the temporary store; a slot left out of the request keeps its image. The dark image is stored only  for the slots that have a dark variant, that is `1`, `2`, `6`, `7` and `8`, and is ignored for the favicon and  the editor logos; saving slot `2` also rebuilds the notification logo `8` from it. Requires a DocSpace  administrator and a plan that includes branding, which `GET api/2.0/settings/enablewhitelabel` reports;  otherwise the call is refused as payment required. It answers `true` and is undone by  `PUT api/2.0/settings/whitelabel/logos/restore`. With `isDefault=true` it writes the installation-wide default  branding instead, which only a server installation allows. Uploaded files go to  `POST api/2.0/settings/whitelabel/logos/savefromfiles`.
         * @summary Save the white label logos
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings/
         */
        saveWhiteLabelSettings: async (isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos/save`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(whiteLabelRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replaces the branding images of the current portal with the files sent as `multipart/form-data`, which is the  way to upload image files directly instead of embedding them as base64 in  `POST api/2.0/settings/whitelabel/logos/save`. The form field names are not used: each file is routed by its  own name, which has to start with the numeric logo slot published by `GET api/2.0/settings/whitelabel/logos`  and end with the image extension, as in `2.png`; a name that also contains `dark`, as in `2.dark.png`, is  stored as the dark-theme image of that slot. Slots that get no file keep the image they have, and a dark file  is ignored for the favicon and the editor logos, which have no dark variant. A request that carries no file at  all is rejected. Requires a DocSpace administrator and a plan that includes branding, which  `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment required. It answers  `true`, overwrites in place and is undone by `PUT api/2.0/settings/whitelabel/logos/restore`. With  `isDefault=true` it writes the installation-wide default branding, which only a server installation allows.
         * @summary Save the logos from files
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelSettingsFromFiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings-from-files/
         */
        saveWhiteLabelSettingsFromFiles: async (isDark?: boolean, isDefault?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {

            const localVarPath = `/api/2.0/settings/whitelabel/logos/savefromfiles`;
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

            if (isDark !== undefined) {
                localVarQueryParameter['IsDark'] = isDark;
            }

            if (isDefault !== undefined) {
                localVarQueryParameter['IsDefault'] = isDefault;
            }


    
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
 * RebrandingApi - functional programming interface
 * @export
 */
export const RebrandingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RebrandingApiAxiosParamCreator(configuration)
    return {
        /**
         * Discards the resource flags stored for the installation and brings back the built-in set, so the sample  documents, the Help Center link, the Feedback and Support link, the user forum, the video guides and the  license agreements are offered as they are out of the box. Requires a DocSpace administrator and a server  installation with unrestricted space access; on a SaaS portal the call is refused. Unlike  `POST api/2.0/settings/rebranding/additional` it does not need a plan that includes branding, so an  installation whose subscription no longer covers it can still be reset. The call is destructive for the stored  flags, which have to be set again to come back, and it is idempotent. Instead of a flag it answers the set  that is now in effect, so no follow-up read is needed. The reset is installation-wide and reaches every  portal, and it leaves the visibility of the About page alone. The company details are reset separately by  `DELETE api/2.0/settings/rebranding/company`.
         * @summary Delete the additional white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-additional-white-label-settings/
         */
        async deleteAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdditionalWhiteLabelSettingsResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAdditionalWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.deleteAdditionalWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Discards the company details stored for the installation and brings back the built-in ONLYOFFICE name, site,  email, address and phone, so the About page and the notification letters print the original vendor again.  Requires a DocSpace administrator and a server installation with unrestricted space access; on a SaaS portal  the call is refused. Unlike `POST api/2.0/settings/rebranding/company` it does not need a plan that includes  branding, so an installation whose subscription no longer covers it can still be reset. The call is  destructive: the previous details are not kept anywhere and have to be entered again to come back. It is  idempotent, and instead of a flag it answers the details that are now in effect, so no follow-up read is  needed. The reset is installation-wide and reaches every portal. The help and support links are reset  separately by `DELETE api/2.0/settings/rebranding/additional`, and the logos and the wordmark of a single  portal by the restore operations under `api/2.0/settings/whitelabel`.
         * @summary Delete the company white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-company-white-label-settings/
         */
        async deleteCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyWhiteLabelSettingsResponseWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCompanyWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.deleteCompanyWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns which of the ONLYOFFICE help and community resources the interface may offer - the sample documents,  the Help Center link, the Feedback and Support link, the user forum, the video guides and the license  agreements - so a client can hide the entries that are switched off. Any authenticated user may call it; no  administrator permission is required, and a portal whose payment has lapsed is served as well. The call is  read-only and idempotent. Each flag is `true` when the entry may be shown and `false` when it must be hidden,  and `isDefault` tells whether the whole set is still the built-in one. The flags are installation-wide, so  every portal of a server installation reports the same ones. They say nothing about the caller\'s own  permissions, and the addresses behind the entries are not part of the answer. Change the flags with  `POST api/2.0/settings/rebranding/additional` and reset them with  `DELETE api/2.0/settings/rebranding/additional`.
         * @summary Get the additional white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-additional-white-label-settings/
         */
        async getAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdditionalWhiteLabelSettingsDtoWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAdditionalWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getAdditionalWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the company details that the About page and the notification letters print as the vendor, in the form  the settings interface edits them. Any authenticated user may call it; no administrator permission is  required, and a portal whose payment has lapsed is served as well. The call is read-only and idempotent.  Alongside the stored fields the answer carries `isLicensor`, which tells whether these details belong to the  vendor of the product itself, and `isDefault`, which tells whether they are still the built-in ONLYOFFICE  ones. The values are installation-wide, so every portal of a server installation reports the same ones. The  response is revalidatable: it carries `Last-Modified`, and sending that value back in `If-Modified-Since`  yields an empty body while the details have not changed, which makes polling cheap. For the About page, where  the built-in vendor has to be shown next to a reseller, use `GET api/2.0/settings/companywhitelabel` instead.  Change the details with `POST api/2.0/settings/rebranding/company`.
         * @summary Get the company white label settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-company-white-label-settings/
         */
        async getCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyWhiteLabelSettingsDtoWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompanyWhiteLabelSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getCompanyWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether branding may be configured for the current portal at all, which is the check to make before  offering the rebranding interface or calling any of the save operations under `api/2.0/settings/whitelabel`.  Requires a DocSpace administrator. The call is read-only and idempotent. The answer is `true` only when both  conditions hold: the branding section is not switched off in the installation configuration, and the portal\'s  current plan includes customization. It comes back as `false` on a plan without branding, which is exactly the  case in which `POST api/2.0/settings/whitelabel/logos/save`,  `POST api/2.0/settings/whitelabel/logos/savefromfiles` and `POST api/2.0/settings/whitelabel/logotext/save`  are refused as payment required. The restore operations do not depend on this flag and stay available, so a  portal that loses branding can still be reset to the built-in logos and wordmark. The flag says nothing about  the installation-wide default branding, which additionally needs a server installation with unrestricted space  access, and nothing about the company details and help links under `api/2.0/settings/rebranding`.
         * @summary Check the white label availability
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getEnableWhitelabel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enable-whitelabel/
         */
        async getEnableWhitelabel(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEnableWhitelabel(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getEnableWhitelabel']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports whether the current portal still uses the built-in wordmark or one that was stored for it, which is  what an interface needs to decide whether a Restore action applies to the text. Requires a DocSpace  administrator. The call is read-only and idempotent. The answer has the same shape as one entry of  `GET api/2.0/settings/whitelabel/logos/isdefault`, with `name` fixed to `logotext` and `default` set to `true`  while no text has been stored and to `false` once one has. Because `GET api/2.0/settings/whitelabel/logotext`  falls back to `ONLYOFFICE` when nothing is stored, this operation is the only way to tell a portal that  deliberately kept the built-in wordmark from one that saved the very same text. Pass `isDefault=true` to  inspect the installation-wide default branding instead of this portal\'s. The flag turns back to `true` after  `PUT api/2.0/settings/whitelabel/logotext/restore`, and to `false` after  `POST api/2.0/settings/whitelabel/logotext/save`. Saving the built-in wordmark itself counts as clearing the  setting, so the flag stays `true` in that case as well.
         * @summary Check the default logo text
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logo-text/
         */
        async getIsDefaultWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IsDefaultWhiteLabelLogosWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsDefaultWhiteLabelLogoText(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getIsDefaultWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Reports, slot by slot, whether the current portal still shows the built-in image or a logo that was uploaded  for it, which is what an interface needs to decide where a Restore action makes sense. Requires a DocSpace  administrator; the URLs themselves are public and come from `GET api/2.0/settings/whitelabel/logos`, which  needs no authentication. The call is read-only and idempotent. Every logo slot is returned, including the  notification logo that the public list leaves out, so the result has one entry more than that list. An entry  gives the stable slot name in `name` and `default` set to `true` while the slot has never been written, and to  `false` once an image has been stored for it, whether for the light or for the dark theme. A slot goes back to  `true` after `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to inspect the  installation-wide default branding instead of this portal\'s. The logo text is reported separately by  `GET api/2.0/settings/whitelabel/logotext/isdefault`.
         * @summary Check the default white label logos
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getIsDefaultWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logos/
         */
        async getIsDefaultWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IsDefaultWhiteLabelLogosArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIsDefaultWhiteLabelLogos(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getIsDefaultWhiteLabelLogos']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the licensor details - company name, site, support email, postal address and phone - that the About  page and the notification letters print as the vendor of the installation. Any authenticated user may call it,  as these details are shown in the interface to everyone; no administrator permission is required. The call is  read-only and idempotent. The list holds the details currently in effect as its first item; when they have  been replaced by a reseller and the replacement is not itself marked as the licensor, the built-in ONLYOFFICE  details are appended as a second item, so a caller can print both the reseller and the original vendor. A  single-item list therefore means that the current details are the only ones to show. The values are  installation-wide rather than per-portal, so every portal of a server installation reports the same ones. The  same data in the form the settings interface edits is served by `GET api/2.0/settings/rebranding/company`, and  it is written by `POST api/2.0/settings/rebranding/company`.
         * @summary Get the licensor data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getLicensorData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-licensor-data/
         */
        async getLicensorData(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyWhiteLabelSettingsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLicensorData(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getLicensorData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the wordmark the current portal prints next to or instead of a logo image, as a bare string rather  than an object. Requires a DocSpace administrator, because this is the settings view of the value; the  branding a login page needs is served by `GET api/2.0/settings/whitelabel/logos`, which needs no  authentication. The call is read-only and idempotent. When nothing has been stored for the portal, the  built-in `ONLYOFFICE` is returned, so the answer is never empty and cannot be used to tell a custom text from  the default one - `GET api/2.0/settings/whitelabel/logotext/isdefault` answers that question. Pass  `isDefault=true` to read the installation-wide default wordmark instead of this portal\'s; without it the  portal\'s own value is returned even when the installation carries a different default. Change the text with  `POST api/2.0/settings/whitelabel/logotext/save` and clear it with  `PUT api/2.0/settings/whitelabel/logotext/restore`. The value is stored as it was typed, at most 40 characters  long, and is not translated for the caller\'s language, so the same wordmark is returned for every user of the  portal.
         * @summary Get the white label logo text
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logo-text/
         */
        async getWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWhiteLabelLogoText(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists the branding logo slots of the current portal together with the image URLs to render, which is what a  login page, an editor or a mail template needs before any user is known. No authentication is required, and  the portal is resolved from the address the request is made to. The call is read-only and idempotent. Each  item carries the slot as a number in `type`, its stable name in `name`, the size the image is fitted to in  `size` (`width` and `height` in pixels), and the URLs in `path`. When `isDark` is passed, only the matching  theme is filled in, `light` for `false` and `dark` for `true`; when it is omitted both are filled in and  `dark` comes back empty for the slots that have no separate dark image. The notification slot is not part of  this list, as it is derived from the login-page logo and used only in letters. Pass `isDefault=true` to read  the installation-wide default logos instead of this portal\'s. To learn which slots are still untouched use  `GET api/2.0/settings/whitelabel/logos/isdefault`.
         * @summary Get the white label logos
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logos/
         */
        async getWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhiteLabelItemArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWhiteLabelLogos(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.getWhiteLabelLogos']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Clears the wordmark stored for the current portal, so the built-in `ONLYOFFICE` is printed again next to or  instead of the logo images. Requires a DocSpace administrator. Unlike  `POST api/2.0/settings/whitelabel/logotext/save` it does not need a plan that includes branding, so a portal  whose subscription no longer covers branding can still be reset. The call is destructive for the stored text,  which is not kept anywhere and has to be typed again to come back, and it is idempotent: `true` comes back  both when a text was cleared and when there was none. Logo images are left untouched and have their own  `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to reset the installation-wide default  wordmark instead of this portal\'s, which only a server installation allows. After the call  `GET api/2.0/settings/whitelabel/logotext` reports `ONLYOFFICE` and  `GET api/2.0/settings/whitelabel/logotext/isdefault` reports `default` as `true`. The wordmark is the only  setting this operation touches, so the company details and the help links of the installation are left as they  are.
         * @summary Restore the white label logo text
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logo-text/
         */
        async restoreWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restoreWhiteLabelLogoText(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.restoreWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Drops every logo uploaded for the current portal and brings back the built-in images, so the portal looks  unbranded again on the login page, in the left menu, in the editors and in letters. Requires a DocSpace  administrator. Unlike the two save operations it does not need a plan that includes branding, so a portal  whose subscription no longer covers it can still be reset. The call is destructive: the stored image files are  deleted and cannot be recovered from the portal, only re-uploaded with  `POST api/2.0/settings/whitelabel/logos/save`. It is idempotent and answers `true` both when logos were  removed and when there was nothing to remove. All slots are reset together; there is no way to restore a  single one. For this portal the picture kept for the older mail templates is reset along with the logos, while  the logo text is left as it is and has its own `PUT api/2.0/settings/whitelabel/logotext/restore`. Pass  `isDefault=true` to reset the installation-wide default branding instead, which only a server installation  allows. Confirm the result with `GET api/2.0/settings/whitelabel/logos/isdefault`.
         * @summary Restore the white label logos
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for restoreWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logos/
         */
        async restoreWhiteLabelLogos(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restoreWhiteLabelLogos(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.restoreWhiteLabelLogos']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores which of the ONLYOFFICE help and community resources the interface offers: the sample documents, the  Help Center link, the Feedback and Support link, the user forum, the video guides and the license agreements.  The whole set is replaced by the `settings` object of the request, so send every flag, not only the changed  ones - a flag left out is stored as off. A request without that object is rejected as an invalid request.  Requires a DocSpace administrator, a server installation with unrestricted space access and a plan that  includes branding, which `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is  refused. The flags are installation-wide, so the change reaches every portal of that installation. The call is  mutating and idempotent, and answers `true`. Only the visibility of these entries is controlled here, not the  addresses behind them. Read the result back with `GET api/2.0/settings/rebranding/additional` and undo it with  `DELETE api/2.0/settings/rebranding/additional`.
         * @summary Save the additional white label settings
         * @param {AdditionalWhiteLabelSettingsWrapper} [additionalWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-additional-white-label-settings/
         */
        async saveAdditionalWhiteLabelSettings(additionalWhiteLabelSettingsWrapper?: AdditionalWhiteLabelSettingsWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveAdditionalWhiteLabelSettings(additionalWhiteLabelSettingsWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveAdditionalWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stores the company details - name, site, support email, postal address and phone - that the About page and the  notification letters print as the vendor. The whole set is replaced by the `settings` object of the request,  so send every field, not only the changed ones; a request without that object, or with an email or a site that  is not a valid value, is rejected as an invalid request. Requires a DocSpace administrator, a server  installation with unrestricted space access and a plan that includes branding, which  `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is refused. The values are  installation-wide, so the change reaches every portal of that installation. Two fields are not taken from the  request: the licensor flag is always stored as `false`, and hiding the About page is silently kept off unless  the plan allows it. The call is mutating and idempotent, and answers `true`. Read the result back with  `GET api/2.0/settings/rebranding/company` and undo it with `DELETE api/2.0/settings/rebranding/company`.
         * @summary Save the company white label settings
         * @param {CompanyWhiteLabelSettingsWrapper} [companyWhiteLabelSettingsWrapper] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-company-white-label-settings/
         */
        async saveCompanyWhiteLabelSettings(companyWhiteLabelSettingsWrapper?: CompanyWhiteLabelSettingsWrapper, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveCompanyWhiteLabelSettings(companyWhiteLabelSettingsWrapper, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveCompanyWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the wordmark that the portal prints next to or instead of a logo image, on the login page, in the editors  and in notification letters. Only `logoText` from the request body is used here, and it is limited to 40  characters; a longer value is rejected as an invalid request. Sending an empty or blank text, or exactly the  built-in `ONLYOFFICE`, clears the setting instead of storing it, which has the same effect as  `PUT api/2.0/settings/whitelabel/logotext/restore`. Requires a DocSpace administrator and a plan that includes  branding, which `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment  required. The call is mutating and idempotent: the previous text is overwritten and `true` comes back. Logo  images are not touched - they are saved by `POST api/2.0/settings/whitelabel/logos/save` - and the text is not  rendered into them. Pass `isDefault=true` to write the installation-wide default wordmark instead of this  portal\'s, which only a server installation allows. Read the stored value back with  `GET api/2.0/settings/whitelabel/logotext`.
         * @summary Save the white label logo text
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-logo-text/
         */
        async saveWhiteLabelLogoText(isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveWhiteLabelLogoText(isDark, isDefault, whiteLabelRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveWhiteLabelLogoText']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the branding images of the current portal with the ones sent in the request, so that the logos on the  login page, in the left menu, in the editors and in letters come from this portal. Every entry of `logo` names  a logo slot in its `key` - the numeric type published by `GET api/2.0/settings/whitelabel/logos` - and carries  the light-theme and the dark-theme image in `light` and `dark`. An image is either a  `data:image/png;base64,...` payload (`png`, `jpg` and `svg` are accepted) or the name of a file already  uploaded to the temporary store; a slot left out of the request keeps its image. The dark image is stored only  for the slots that have a dark variant, that is `1`, `2`, `6`, `7` and `8`, and is ignored for the favicon and  the editor logos; saving slot `2` also rebuilds the notification logo `8` from it. Requires a DocSpace  administrator and a plan that includes branding, which `GET api/2.0/settings/enablewhitelabel` reports;  otherwise the call is refused as payment required. It answers `true` and is undone by  `PUT api/2.0/settings/whitelabel/logos/restore`. With `isDefault=true` it writes the installation-wide default  branding instead, which only a server installation allows. Uploaded files go to  `POST api/2.0/settings/whitelabel/logos/savefromfiles`.
         * @summary Save the white label logos
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {WhiteLabelRequestsDto} [whiteLabelRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings/
         */
        async saveWhiteLabelSettings(isDark?: boolean, isDefault?: boolean, whiteLabelRequestsDto?: WhiteLabelRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveWhiteLabelSettings(isDark, isDefault, whiteLabelRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveWhiteLabelSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replaces the branding images of the current portal with the files sent as `multipart/form-data`, which is the  way to upload image files directly instead of embedding them as base64 in  `POST api/2.0/settings/whitelabel/logos/save`. The form field names are not used: each file is routed by its  own name, which has to start with the numeric logo slot published by `GET api/2.0/settings/whitelabel/logos`  and end with the image extension, as in `2.png`; a name that also contains `dark`, as in `2.dark.png`, is  stored as the dark-theme image of that slot. Slots that get no file keep the image they have, and a dark file  is ignored for the favicon and the editor logos, which have no dark variant. A request that carries no file at  all is rejected. Requires a DocSpace administrator and a plan that includes branding, which  `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment required. It answers  `true`, overwrites in place and is undone by `PUT api/2.0/settings/whitelabel/logos/restore`. With  `isDefault=true` it writes the installation-wide default branding, which only a server installation allows.
         * @summary Save the logos from files
         * @param {boolean} [isDark] Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
         * @param {boolean} [isDefault] Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveWhiteLabelSettingsFromFiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings-from-files/
         */
        async saveWhiteLabelSettingsFromFiles(isDark?: boolean, isDefault?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveWhiteLabelSettingsFromFiles(isDark, isDefault, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RebrandingApi.saveWhiteLabelSettingsFromFiles']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RebrandingApi - factory interface
 * @export
 */
export const RebrandingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RebrandingApiFp(configuration)
    return {
        /**
         * Discards the resource flags stored for the installation and brings back the built-in set, so the sample  documents, the Help Center link, the Feedback and Support link, the user forum, the video guides and the  license agreements are offered as they are out of the box. Requires a DocSpace administrator and a server  installation with unrestricted space access; on a SaaS portal the call is refused. Unlike  `POST api/2.0/settings/rebranding/additional` it does not need a plan that includes branding, so an  installation whose subscription no longer covers it can still be reset. The call is destructive for the stored  flags, which have to be set again to come back, and it is idempotent. Instead of a flag it answers the set  that is now in effect, so no follow-up read is needed. The reset is installation-wide and reaches every  portal, and it leaves the visibility of the About page alone. The company details are reset separately by  `DELETE api/2.0/settings/rebranding/company`.
         * @summary Delete the additional white label settings
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-additional-white-label-settings/
         * @throws {RequiredError}
         */
        deleteAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<AdditionalWhiteLabelSettingsResponseWrapper> {
            return localVarFp.deleteAdditionalWhiteLabelSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Discards the company details stored for the installation and brings back the built-in ONLYOFFICE name, site,  email, address and phone, so the About page and the notification letters print the original vendor again.  Requires a DocSpace administrator and a server installation with unrestricted space access; on a SaaS portal  the call is refused. Unlike `POST api/2.0/settings/rebranding/company` it does not need a plan that includes  branding, so an installation whose subscription no longer covers it can still be reset. The call is  destructive: the previous details are not kept anywhere and have to be entered again to come back. It is  idempotent, and instead of a flag it answers the details that are now in effect, so no follow-up read is  needed. The reset is installation-wide and reaches every portal. The help and support links are reset  separately by `DELETE api/2.0/settings/rebranding/additional`, and the logos and the wordmark of a single  portal by the restore operations under `api/2.0/settings/whitelabel`.
         * @summary Delete the company white label settings
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-company-white-label-settings/
         * @throws {RequiredError}
         */
        deleteCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<CompanyWhiteLabelSettingsResponseWrapper> {
            return localVarFp.deleteCompanyWhiteLabelSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns which of the ONLYOFFICE help and community resources the interface may offer - the sample documents,  the Help Center link, the Feedback and Support link, the user forum, the video guides and the license  agreements - so a client can hide the entries that are switched off. Any authenticated user may call it; no  administrator permission is required, and a portal whose payment has lapsed is served as well. The call is  read-only and idempotent. Each flag is `true` when the entry may be shown and `false` when it must be hidden,  and `isDefault` tells whether the whole set is still the built-in one. The flags are installation-wide, so  every portal of a server installation reports the same ones. They say nothing about the caller\'s own  permissions, and the addresses behind the entries are not part of the answer. Change the flags with  `POST api/2.0/settings/rebranding/additional` and reset them with  `DELETE api/2.0/settings/rebranding/additional`.
         * @summary Get the additional white label settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-additional-white-label-settings/
         * @throws {RequiredError}
         */
        getAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<AdditionalWhiteLabelSettingsDtoWrapper> {
            return localVarFp.getAdditionalWhiteLabelSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the company details that the About page and the notification letters print as the vendor, in the form  the settings interface edits them. Any authenticated user may call it; no administrator permission is  required, and a portal whose payment has lapsed is served as well. The call is read-only and idempotent.  Alongside the stored fields the answer carries `isLicensor`, which tells whether these details belong to the  vendor of the product itself, and `isDefault`, which tells whether they are still the built-in ONLYOFFICE  ones. The values are installation-wide, so every portal of a server installation reports the same ones. The  response is revalidatable: it carries `Last-Modified`, and sending that value back in `If-Modified-Since`  yields an empty body while the details have not changed, which makes polling cheap. For the About page, where  the built-in vendor has to be shown next to a reseller, use `GET api/2.0/settings/companywhitelabel` instead.  Change the details with `POST api/2.0/settings/rebranding/company`.
         * @summary Get the company white label settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-company-white-label-settings/
         * @throws {RequiredError}
         */
        getCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig): AxiosPromise<CompanyWhiteLabelSettingsDtoWrapper> {
            return localVarFp.getCompanyWhiteLabelSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether branding may be configured for the current portal at all, which is the check to make before  offering the rebranding interface or calling any of the save operations under `api/2.0/settings/whitelabel`.  Requires a DocSpace administrator. The call is read-only and idempotent. The answer is `true` only when both  conditions hold: the branding section is not switched off in the installation configuration, and the portal\'s  current plan includes customization. It comes back as `false` on a plan without branding, which is exactly the  case in which `POST api/2.0/settings/whitelabel/logos/save`,  `POST api/2.0/settings/whitelabel/logos/savefromfiles` and `POST api/2.0/settings/whitelabel/logotext/save`  are refused as payment required. The restore operations do not depend on this flag and stay available, so a  portal that loses branding can still be reset to the built-in logos and wordmark. The flag says nothing about  the installation-wide default branding, which additionally needs a server installation with unrestricted space  access, and nothing about the company details and help links under `api/2.0/settings/rebranding`.
         * @summary Check the white label availability
         * @param {*} [options] Override http request option.
         * REST API Reference for getEnableWhitelabel operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-enable-whitelabel/
         * @throws {RequiredError}
         */
        getEnableWhitelabel(options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.getEnableWhitelabel(options).then((request) => request(axios, basePath));
        },
        /**
         * Reports whether the current portal still uses the built-in wordmark or one that was stored for it, which is  what an interface needs to decide whether a Restore action applies to the text. Requires a DocSpace  administrator. The call is read-only and idempotent. The answer has the same shape as one entry of  `GET api/2.0/settings/whitelabel/logos/isdefault`, with `name` fixed to `logotext` and `default` set to `true`  while no text has been stored and to `false` once one has. Because `GET api/2.0/settings/whitelabel/logotext`  falls back to `ONLYOFFICE` when nothing is stored, this operation is the only way to tell a portal that  deliberately kept the built-in wordmark from one that saved the very same text. Pass `isDefault=true` to  inspect the installation-wide default branding instead of this portal\'s. The flag turns back to `true` after  `PUT api/2.0/settings/whitelabel/logotext/restore`, and to `false` after  `POST api/2.0/settings/whitelabel/logotext/save`. Saving the built-in wordmark itself counts as clearing the  setting, so the flag stays `true` in that case as well.
         * @summary Check the default logo text
         * @param {RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsDefaultWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logo-text/
         * @throws {RequiredError}
         */
        getIsDefaultWhiteLabelLogoText(requestParameters: RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<IsDefaultWhiteLabelLogosWrapper> {
            return localVarFp.getIsDefaultWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Reports, slot by slot, whether the current portal still shows the built-in image or a logo that was uploaded  for it, which is what an interface needs to decide where a Restore action makes sense. Requires a DocSpace  administrator; the URLs themselves are public and come from `GET api/2.0/settings/whitelabel/logos`, which  needs no authentication. The call is read-only and idempotent. Every logo slot is returned, including the  notification logo that the public list leaves out, so the result has one entry more than that list. An entry  gives the stable slot name in `name` and `default` set to `true` while the slot has never been written, and to  `false` once an image has been stored for it, whether for the light or for the dark theme. A slot goes back to  `true` after `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to inspect the  installation-wide default branding instead of this portal\'s. The logo text is reported separately by  `GET api/2.0/settings/whitelabel/logotext/isdefault`.
         * @summary Check the default white label logos
         * @param {RebrandingApiGetIsDefaultWhiteLabelLogosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getIsDefaultWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-is-default-white-label-logos/
         * @throws {RequiredError}
         */
        getIsDefaultWhiteLabelLogos(requestParameters: RebrandingApiGetIsDefaultWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<IsDefaultWhiteLabelLogosArrayWrapper> {
            return localVarFp.getIsDefaultWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the licensor details - company name, site, support email, postal address and phone - that the About  page and the notification letters print as the vendor of the installation. Any authenticated user may call it,  as these details are shown in the interface to everyone; no administrator permission is required. The call is  read-only and idempotent. The list holds the details currently in effect as its first item; when they have  been replaced by a reseller and the replacement is not itself marked as the licensor, the built-in ONLYOFFICE  details are appended as a second item, so a caller can print both the reseller and the original vendor. A  single-item list therefore means that the current details are the only ones to show. The values are  installation-wide rather than per-portal, so every portal of a server installation reports the same ones. The  same data in the form the settings interface edits is served by `GET api/2.0/settings/rebranding/company`, and  it is written by `POST api/2.0/settings/rebranding/company`.
         * @summary Get the licensor data
         * @param {*} [options] Override http request option.
         * REST API Reference for getLicensorData operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-licensor-data/
         * @throws {RequiredError}
         */
        getLicensorData(options?: RawAxiosRequestConfig): AxiosPromise<CompanyWhiteLabelSettingsArrayWrapper> {
            return localVarFp.getLicensorData(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the wordmark the current portal prints next to or instead of a logo image, as a bare string rather  than an object. Requires a DocSpace administrator, because this is the settings view of the value; the  branding a login page needs is served by `GET api/2.0/settings/whitelabel/logos`, which needs no  authentication. The call is read-only and idempotent. When nothing has been stored for the portal, the  built-in `ONLYOFFICE` is returned, so the answer is never empty and cannot be used to tell a custom text from  the default one - `GET api/2.0/settings/whitelabel/logotext/isdefault` answers that question. Pass  `isDefault=true` to read the installation-wide default wordmark instead of this portal\'s; without it the  portal\'s own value is returned even when the installation carries a different default. Change the text with  `POST api/2.0/settings/whitelabel/logotext/save` and clear it with  `PUT api/2.0/settings/whitelabel/logotext/restore`. The value is stored as it was typed, at most 40 characters  long, and is not translated for the caller\'s language, so the same wordmark is returned for every user of the  portal.
         * @summary Get the white label logo text
         * @param {RebrandingApiGetWhiteLabelLogoTextRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logo-text/
         * @throws {RequiredError}
         */
        getWhiteLabelLogoText(requestParameters: RebrandingApiGetWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the branding logo slots of the current portal together with the image URLs to render, which is what a  login page, an editor or a mail template needs before any user is known. No authentication is required, and  the portal is resolved from the address the request is made to. The call is read-only and idempotent. Each  item carries the slot as a number in `type`, its stable name in `name`, the size the image is fitted to in  `size` (`width` and `height` in pixels), and the URLs in `path`. When `isDark` is passed, only the matching  theme is filled in, `light` for `false` and `dark` for `true`; when it is omitted both are filled in and  `dark` comes back empty for the slots that have no separate dark image. The notification slot is not part of  this list, as it is derived from the login-page logo and used only in letters. Pass `isDefault=true` to read  the installation-wide default logos instead of this portal\'s. To learn which slots are still untouched use  `GET api/2.0/settings/whitelabel/logos/isdefault`.
         * @summary Get the white label logos
         * @param {RebrandingApiGetWhiteLabelLogosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-white-label-logos/
         * @throws {RequiredError}
         */
        getWhiteLabelLogos(requestParameters: RebrandingApiGetWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<WhiteLabelItemArrayWrapper> {
            return localVarFp.getWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Clears the wordmark stored for the current portal, so the built-in `ONLYOFFICE` is printed again next to or  instead of the logo images. Requires a DocSpace administrator. Unlike  `POST api/2.0/settings/whitelabel/logotext/save` it does not need a plan that includes branding, so a portal  whose subscription no longer covers branding can still be reset. The call is destructive for the stored text,  which is not kept anywhere and has to be typed again to come back, and it is idempotent: `true` comes back  both when a text was cleared and when there was none. Logo images are left untouched and have their own  `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to reset the installation-wide default  wordmark instead of this portal\'s, which only a server installation allows. After the call  `GET api/2.0/settings/whitelabel/logotext` reports `ONLYOFFICE` and  `GET api/2.0/settings/whitelabel/logotext/isdefault` reports `default` as `true`. The wordmark is the only  setting this operation touches, so the company details and the help links of the installation are left as they  are.
         * @summary Restore the white label logo text
         * @param {RebrandingApiRestoreWhiteLabelLogoTextRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logo-text/
         * @throws {RequiredError}
         */
        restoreWhiteLabelLogoText(requestParameters: RebrandingApiRestoreWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.restoreWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Drops every logo uploaded for the current portal and brings back the built-in images, so the portal looks  unbranded again on the login page, in the left menu, in the editors and in letters. Requires a DocSpace  administrator. Unlike the two save operations it does not need a plan that includes branding, so a portal  whose subscription no longer covers it can still be reset. The call is destructive: the stored image files are  deleted and cannot be recovered from the portal, only re-uploaded with  `POST api/2.0/settings/whitelabel/logos/save`. It is idempotent and answers `true` both when logos were  removed and when there was nothing to remove. All slots are reset together; there is no way to restore a  single one. For this portal the picture kept for the older mail templates is reset along with the logos, while  the logo text is left as it is and has its own `PUT api/2.0/settings/whitelabel/logotext/restore`. Pass  `isDefault=true` to reset the installation-wide default branding instead, which only a server installation  allows. Confirm the result with `GET api/2.0/settings/whitelabel/logos/isdefault`.
         * @summary Restore the white label logos
         * @param {RebrandingApiRestoreWhiteLabelLogosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for restoreWhiteLabelLogos operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/restore-white-label-logos/
         * @throws {RequiredError}
         */
        restoreWhiteLabelLogos(requestParameters: RebrandingApiRestoreWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.restoreWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores which of the ONLYOFFICE help and community resources the interface offers: the sample documents, the  Help Center link, the Feedback and Support link, the user forum, the video guides and the license agreements.  The whole set is replaced by the `settings` object of the request, so send every flag, not only the changed  ones - a flag left out is stored as off. A request without that object is rejected as an invalid request.  Requires a DocSpace administrator, a server installation with unrestricted space access and a plan that  includes branding, which `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is  refused. The flags are installation-wide, so the change reaches every portal of that installation. The call is  mutating and idempotent, and answers `true`. Only the visibility of these entries is controlled here, not the  addresses behind them. Read the result back with `GET api/2.0/settings/rebranding/additional` and undo it with  `DELETE api/2.0/settings/rebranding/additional`.
         * @summary Save the additional white label settings
         * @param {RebrandingApiSaveAdditionalWhiteLabelSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveAdditionalWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-additional-white-label-settings/
         * @throws {RequiredError}
         */
        saveAdditionalWhiteLabelSettings(requestParameters: RebrandingApiSaveAdditionalWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveAdditionalWhiteLabelSettings(requestParameters.additionalWhiteLabelSettingsWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores the company details - name, site, support email, postal address and phone - that the About page and the  notification letters print as the vendor. The whole set is replaced by the `settings` object of the request,  so send every field, not only the changed ones; a request without that object, or with an email or a site that  is not a valid value, is rejected as an invalid request. Requires a DocSpace administrator, a server  installation with unrestricted space access and a plan that includes branding, which  `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is refused. The values are  installation-wide, so the change reaches every portal of that installation. Two fields are not taken from the  request: the licensor flag is always stored as `false`, and hiding the About page is silently kept off unless  the plan allows it. The call is mutating and idempotent, and answers `true`. Read the result back with  `GET api/2.0/settings/rebranding/company` and undo it with `DELETE api/2.0/settings/rebranding/company`.
         * @summary Save the company white label settings
         * @param {RebrandingApiSaveCompanyWhiteLabelSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveCompanyWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-company-white-label-settings/
         * @throws {RequiredError}
         */
        saveCompanyWhiteLabelSettings(requestParameters: RebrandingApiSaveCompanyWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveCompanyWhiteLabelSettings(requestParameters.companyWhiteLabelSettingsWrapper, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the wordmark that the portal prints next to or instead of a logo image, on the login page, in the editors  and in notification letters. Only `logoText` from the request body is used here, and it is limited to 40  characters; a longer value is rejected as an invalid request. Sending an empty or blank text, or exactly the  built-in `ONLYOFFICE`, clears the setting instead of storing it, which has the same effect as  `PUT api/2.0/settings/whitelabel/logotext/restore`. Requires a DocSpace administrator and a plan that includes  branding, which `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment  required. The call is mutating and idempotent: the previous text is overwritten and `true` comes back. Logo  images are not touched - they are saved by `POST api/2.0/settings/whitelabel/logos/save` - and the text is not  rendered into them. Pass `isDefault=true` to write the installation-wide default wordmark instead of this  portal\'s, which only a server installation allows. Read the stored value back with  `GET api/2.0/settings/whitelabel/logotext`.
         * @summary Save the white label logo text
         * @param {RebrandingApiSaveWhiteLabelLogoTextRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveWhiteLabelLogoText operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-logo-text/
         * @throws {RequiredError}
         */
        saveWhiteLabelLogoText(requestParameters: RebrandingApiSaveWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, requestParameters.whiteLabelRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the branding images of the current portal with the ones sent in the request, so that the logos on the  login page, in the left menu, in the editors and in letters come from this portal. Every entry of `logo` names  a logo slot in its `key` - the numeric type published by `GET api/2.0/settings/whitelabel/logos` - and carries  the light-theme and the dark-theme image in `light` and `dark`. An image is either a  `data:image/png;base64,...` payload (`png`, `jpg` and `svg` are accepted) or the name of a file already  uploaded to the temporary store; a slot left out of the request keeps its image. The dark image is stored only  for the slots that have a dark variant, that is `1`, `2`, `6`, `7` and `8`, and is ignored for the favicon and  the editor logos; saving slot `2` also rebuilds the notification logo `8` from it. Requires a DocSpace  administrator and a plan that includes branding, which `GET api/2.0/settings/enablewhitelabel` reports;  otherwise the call is refused as payment required. It answers `true` and is undone by  `PUT api/2.0/settings/whitelabel/logos/restore`. With `isDefault=true` it writes the installation-wide default  branding instead, which only a server installation allows. Uploaded files go to  `POST api/2.0/settings/whitelabel/logos/savefromfiles`.
         * @summary Save the white label logos
         * @param {RebrandingApiSaveWhiteLabelSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveWhiteLabelSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings/
         * @throws {RequiredError}
         */
        saveWhiteLabelSettings(requestParameters: RebrandingApiSaveWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveWhiteLabelSettings(requestParameters.isDark, requestParameters.isDefault, requestParameters.whiteLabelRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Replaces the branding images of the current portal with the files sent as `multipart/form-data`, which is the  way to upload image files directly instead of embedding them as base64 in  `POST api/2.0/settings/whitelabel/logos/save`. The form field names are not used: each file is routed by its  own name, which has to start with the numeric logo slot published by `GET api/2.0/settings/whitelabel/logos`  and end with the image extension, as in `2.png`; a name that also contains `dark`, as in `2.dark.png`, is  stored as the dark-theme image of that slot. Slots that get no file keep the image they have, and a dark file  is ignored for the favicon and the editor logos, which have no dark variant. A request that carries no file at  all is rejected. Requires a DocSpace administrator and a plan that includes branding, which  `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment required. It answers  `true`, overwrites in place and is undone by `PUT api/2.0/settings/whitelabel/logos/restore`. With  `isDefault=true` it writes the installation-wide default branding, which only a server installation allows.
         * @summary Save the logos from files
         * @param {RebrandingApiSaveWhiteLabelSettingsFromFilesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for saveWhiteLabelSettingsFromFiles operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-white-label-settings-from-files/
         * @throws {RequiredError}
         */
        saveWhiteLabelSettingsFromFiles(requestParameters: RebrandingApiSaveWhiteLabelSettingsFromFilesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BooleanWrapper> {
            return localVarFp.saveWhiteLabelSettingsFromFiles(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getIsDefaultWhiteLabelLogoText operation in RebrandingApi.
 * @export
 * @interface RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest
 */
export interface RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest {
    /**
     * Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
     * @type {boolean}
     * @memberof RebrandingApiGetIsDefaultWhiteLabelLogoText
     */
    readonly isDark?: boolean

    /**
     * Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
     * @type {boolean}
     * @memberof RebrandingApiGetIsDefaultWhiteLabelLogoText
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for getIsDefaultWhiteLabelLogos operation in RebrandingApi.
 * @export
 * @interface RebrandingApiGetIsDefaultWhiteLabelLogosRequest
 */
export interface RebrandingApiGetIsDefaultWhiteLabelLogosRequest {
    /**
     * Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
     * @type {boolean}
     * @memberof RebrandingApiGetIsDefaultWhiteLabelLogos
     */
    readonly isDark?: boolean

    /**
     * Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
     * @type {boolean}
     * @memberof RebrandingApiGetIsDefaultWhiteLabelLogos
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for getWhiteLabelLogoText operation in RebrandingApi.
 * @export
 * @interface RebrandingApiGetWhiteLabelLogoTextRequest
 */
export interface RebrandingApiGetWhiteLabelLogoTextRequest {
    /**
     * Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
     * @type {boolean}
     * @memberof RebrandingApiGetWhiteLabelLogoText
     */
    readonly isDark?: boolean

    /**
     * Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
     * @type {boolean}
     * @memberof RebrandingApiGetWhiteLabelLogoText
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for getWhiteLabelLogos operation in RebrandingApi.
 * @export
 * @interface RebrandingApiGetWhiteLabelLogosRequest
 */
export interface RebrandingApiGetWhiteLabelLogosRequest {
    /**
     * Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
     * @type {boolean}
     * @memberof RebrandingApiGetWhiteLabelLogos
     */
    readonly isDark?: boolean

    /**
     * Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
     * @type {boolean}
     * @memberof RebrandingApiGetWhiteLabelLogos
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for restoreWhiteLabelLogoText operation in RebrandingApi.
 * @export
 * @interface RebrandingApiRestoreWhiteLabelLogoTextRequest
 */
export interface RebrandingApiRestoreWhiteLabelLogoTextRequest {
    /**
     * Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
     * @type {boolean}
     * @memberof RebrandingApiRestoreWhiteLabelLogoText
     */
    readonly isDark?: boolean

    /**
     * Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
     * @type {boolean}
     * @memberof RebrandingApiRestoreWhiteLabelLogoText
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for restoreWhiteLabelLogos operation in RebrandingApi.
 * @export
 * @interface RebrandingApiRestoreWhiteLabelLogosRequest
 */
export interface RebrandingApiRestoreWhiteLabelLogosRequest {
    /**
     * Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
     * @type {boolean}
     * @memberof RebrandingApiRestoreWhiteLabelLogos
     */
    readonly isDark?: boolean

    /**
     * Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
     * @type {boolean}
     * @memberof RebrandingApiRestoreWhiteLabelLogos
     */
    readonly isDefault?: boolean
}

/**
 * Request parameters for saveAdditionalWhiteLabelSettings operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveAdditionalWhiteLabelSettingsRequest
 */
export interface RebrandingApiSaveAdditionalWhiteLabelSettingsRequest {
    /**
     * 
     * @type {AdditionalWhiteLabelSettingsWrapper}
     * @memberof RebrandingApiSaveAdditionalWhiteLabelSettings
     */
    readonly additionalWhiteLabelSettingsWrapper?: AdditionalWhiteLabelSettingsWrapper
}

/**
 * Request parameters for saveCompanyWhiteLabelSettings operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveCompanyWhiteLabelSettingsRequest
 */
export interface RebrandingApiSaveCompanyWhiteLabelSettingsRequest {
    /**
     * 
     * @type {CompanyWhiteLabelSettingsWrapper}
     * @memberof RebrandingApiSaveCompanyWhiteLabelSettings
     */
    readonly companyWhiteLabelSettingsWrapper?: CompanyWhiteLabelSettingsWrapper
}

/**
 * Request parameters for saveWhiteLabelLogoText operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveWhiteLabelLogoTextRequest
 */
export interface RebrandingApiSaveWhiteLabelLogoTextRequest {
    /**
     * Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelLogoText
     */
    readonly isDark?: boolean

    /**
     * Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelLogoText
     */
    readonly isDefault?: boolean

    /**
     * 
     * @type {WhiteLabelRequestsDto}
     * @memberof RebrandingApiSaveWhiteLabelLogoText
     */
    readonly whiteLabelRequestsDto?: WhiteLabelRequestsDto
}

/**
 * Request parameters for saveWhiteLabelSettings operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveWhiteLabelSettingsRequest
 */
export interface RebrandingApiSaveWhiteLabelSettingsRequest {
    /**
     * Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelSettings
     */
    readonly isDark?: boolean

    /**
     * Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelSettings
     */
    readonly isDefault?: boolean

    /**
     * 
     * @type {WhiteLabelRequestsDto}
     * @memberof RebrandingApiSaveWhiteLabelSettings
     */
    readonly whiteLabelRequestsDto?: WhiteLabelRequestsDto
}

/**
 * Request parameters for saveWhiteLabelSettingsFromFiles operation in RebrandingApi.
 * @export
 * @interface RebrandingApiSaveWhiteLabelSettingsFromFilesRequest
 */
export interface RebrandingApiSaveWhiteLabelSettingsFromFilesRequest {
    /**
     * Which theme the answer is filled in for: `true` fills the dark image only, `false` the light one only.  Omitting it fills both, leaving the dark one empty for the slots that have no separate dark image.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelSettingsFromFiles
     */
    readonly isDark?: boolean

    /**
     * Whether the installation-wide default branding is addressed instead of this portal own. Writing the default  branding is only allowed on a self-hosted installation; elsewhere it is refused with 403.
     * @type {boolean}
     * @memberof RebrandingApiSaveWhiteLabelSettingsFromFiles
     */
    readonly isDefault?: boolean
}

/**
 * RebrandingApi - object-oriented interface
 * @export
 * @class RebrandingApi
 * @extends {BaseAPI}
 */
export class RebrandingApi extends BaseAPI {
    /**
     * Discards the resource flags stored for the installation and brings back the built-in set, so the sample  documents, the Help Center link, the Feedback and Support link, the user forum, the video guides and the  license agreements are offered as they are out of the box. Requires a DocSpace administrator and a server  installation with unrestricted space access; on a SaaS portal the call is refused. Unlike  `POST api/2.0/settings/rebranding/additional` it does not need a plan that includes branding, so an  installation whose subscription no longer covers it can still be reset. The call is destructive for the stored  flags, which have to be set again to come back, and it is idempotent. Instead of a flag it answers the set  that is now in effect, so no follow-up read is needed. The reset is installation-wide and reaches every  portal, and it leaves the visibility of the About page alone. The company details are reset separately by  `DELETE api/2.0/settings/rebranding/company`.
     * @summary Delete the additional white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public deleteAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).deleteAdditionalWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Discards the company details stored for the installation and brings back the built-in ONLYOFFICE name, site,  email, address and phone, so the About page and the notification letters print the original vendor again.  Requires a DocSpace administrator and a server installation with unrestricted space access; on a SaaS portal  the call is refused. Unlike `POST api/2.0/settings/rebranding/company` it does not need a plan that includes  branding, so an installation whose subscription no longer covers it can still be reset. The call is  destructive: the previous details are not kept anywhere and have to be entered again to come back. It is  idempotent, and instead of a flag it answers the details that are now in effect, so no follow-up read is  needed. The reset is installation-wide and reaches every portal. The help and support links are reset  separately by `DELETE api/2.0/settings/rebranding/additional`, and the logos and the wordmark of a single  portal by the restore operations under `api/2.0/settings/whitelabel`.
     * @summary Delete the company white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public deleteCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).deleteCompanyWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns which of the ONLYOFFICE help and community resources the interface may offer - the sample documents,  the Help Center link, the Feedback and Support link, the user forum, the video guides and the license  agreements - so a client can hide the entries that are switched off. Any authenticated user may call it; no  administrator permission is required, and a portal whose payment has lapsed is served as well. The call is  read-only and idempotent. Each flag is `true` when the entry may be shown and `false` when it must be hidden,  and `isDefault` tells whether the whole set is still the built-in one. The flags are installation-wide, so  every portal of a server installation reports the same ones. They say nothing about the caller\'s own  permissions, and the addresses behind the entries are not part of the answer. Change the flags with  `POST api/2.0/settings/rebranding/additional` and reset them with  `DELETE api/2.0/settings/rebranding/additional`.
     * @summary Get the additional white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getAdditionalWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getAdditionalWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the company details that the About page and the notification letters print as the vendor, in the form  the settings interface edits them. Any authenticated user may call it; no administrator permission is  required, and a portal whose payment has lapsed is served as well. The call is read-only and idempotent.  Alongside the stored fields the answer carries `isLicensor`, which tells whether these details belong to the  vendor of the product itself, and `isDefault`, which tells whether they are still the built-in ONLYOFFICE  ones. The values are installation-wide, so every portal of a server installation reports the same ones. The  response is revalidatable: it carries `Last-Modified`, and sending that value back in `If-Modified-Since`  yields an empty body while the details have not changed, which makes polling cheap. For the About page, where  the built-in vendor has to be shown next to a reseller, use `GET api/2.0/settings/companywhitelabel` instead.  Change the details with `POST api/2.0/settings/rebranding/company`.
     * @summary Get the company white label settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getCompanyWhiteLabelSettings(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getCompanyWhiteLabelSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether branding may be configured for the current portal at all, which is the check to make before  offering the rebranding interface or calling any of the save operations under `api/2.0/settings/whitelabel`.  Requires a DocSpace administrator. The call is read-only and idempotent. The answer is `true` only when both  conditions hold: the branding section is not switched off in the installation configuration, and the portal\'s  current plan includes customization. It comes back as `false` on a plan without branding, which is exactly the  case in which `POST api/2.0/settings/whitelabel/logos/save`,  `POST api/2.0/settings/whitelabel/logos/savefromfiles` and `POST api/2.0/settings/whitelabel/logotext/save`  are refused as payment required. The restore operations do not depend on this flag and stay available, so a  portal that loses branding can still be reset to the built-in logos and wordmark. The flag says nothing about  the installation-wide default branding, which additionally needs a server installation with unrestricted space  access, and nothing about the company details and help links under `api/2.0/settings/rebranding`.
     * @summary Check the white label availability
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getEnableWhitelabel(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getEnableWhitelabel(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports whether the current portal still uses the built-in wordmark or one that was stored for it, which is  what an interface needs to decide whether a Restore action applies to the text. Requires a DocSpace  administrator. The call is read-only and idempotent. The answer has the same shape as one entry of  `GET api/2.0/settings/whitelabel/logos/isdefault`, with `name` fixed to `logotext` and `default` set to `true`  while no text has been stored and to `false` once one has. Because `GET api/2.0/settings/whitelabel/logotext`  falls back to `ONLYOFFICE` when nothing is stored, this operation is the only way to tell a portal that  deliberately kept the built-in wordmark from one that saved the very same text. Pass `isDefault=true` to  inspect the installation-wide default branding instead of this portal\'s. The flag turns back to `true` after  `PUT api/2.0/settings/whitelabel/logotext/restore`, and to `false` after  `POST api/2.0/settings/whitelabel/logotext/save`. Saving the built-in wordmark itself counts as clearing the  setting, so the flag stays `true` in that case as well.
     * @summary Check the default logo text
     * @param {SettingsRebrandingApiGetIsDefaultWhiteLabelLogoTextRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getIsDefaultWhiteLabelLogoText(requestParameters: RebrandingApiGetIsDefaultWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getIsDefaultWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Reports, slot by slot, whether the current portal still shows the built-in image or a logo that was uploaded  for it, which is what an interface needs to decide where a Restore action makes sense. Requires a DocSpace  administrator; the URLs themselves are public and come from `GET api/2.0/settings/whitelabel/logos`, which  needs no authentication. The call is read-only and idempotent. Every logo slot is returned, including the  notification logo that the public list leaves out, so the result has one entry more than that list. An entry  gives the stable slot name in `name` and `default` set to `true` while the slot has never been written, and to  `false` once an image has been stored for it, whether for the light or for the dark theme. A slot goes back to  `true` after `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to inspect the  installation-wide default branding instead of this portal\'s. The logo text is reported separately by  `GET api/2.0/settings/whitelabel/logotext/isdefault`.
     * @summary Check the default white label logos
     * @param {SettingsRebrandingApiGetIsDefaultWhiteLabelLogosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getIsDefaultWhiteLabelLogos(requestParameters: RebrandingApiGetIsDefaultWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getIsDefaultWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the licensor details - company name, site, support email, postal address and phone - that the About  page and the notification letters print as the vendor of the installation. Any authenticated user may call it,  as these details are shown in the interface to everyone; no administrator permission is required. The call is  read-only and idempotent. The list holds the details currently in effect as its first item; when they have  been replaced by a reseller and the replacement is not itself marked as the licensor, the built-in ONLYOFFICE  details are appended as a second item, so a caller can print both the reseller and the original vendor. A  single-item list therefore means that the current details are the only ones to show. The values are  installation-wide rather than per-portal, so every portal of a server installation reports the same ones. The  same data in the form the settings interface edits is served by `GET api/2.0/settings/rebranding/company`, and  it is written by `POST api/2.0/settings/rebranding/company`.
     * @summary Get the licensor data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getLicensorData(options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getLicensorData(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the wordmark the current portal prints next to or instead of a logo image, as a bare string rather  than an object. Requires a DocSpace administrator, because this is the settings view of the value; the  branding a login page needs is served by `GET api/2.0/settings/whitelabel/logos`, which needs no  authentication. The call is read-only and idempotent. When nothing has been stored for the portal, the  built-in `ONLYOFFICE` is returned, so the answer is never empty and cannot be used to tell a custom text from  the default one - `GET api/2.0/settings/whitelabel/logotext/isdefault` answers that question. Pass  `isDefault=true` to read the installation-wide default wordmark instead of this portal\'s; without it the  portal\'s own value is returned even when the installation carries a different default. Change the text with  `POST api/2.0/settings/whitelabel/logotext/save` and clear it with  `PUT api/2.0/settings/whitelabel/logotext/restore`. The value is stored as it was typed, at most 40 characters  long, and is not translated for the caller\'s language, so the same wordmark is returned for every user of the  portal.
     * @summary Get the white label logo text
     * @param {SettingsRebrandingApiGetWhiteLabelLogoTextRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getWhiteLabelLogoText(requestParameters: RebrandingApiGetWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists the branding logo slots of the current portal together with the image URLs to render, which is what a  login page, an editor or a mail template needs before any user is known. No authentication is required, and  the portal is resolved from the address the request is made to. The call is read-only and idempotent. Each  item carries the slot as a number in `type`, its stable name in `name`, the size the image is fitted to in  `size` (`width` and `height` in pixels), and the URLs in `path`. When `isDark` is passed, only the matching  theme is filled in, `light` for `false` and `dark` for `true`; when it is omitted both are filled in and  `dark` comes back empty for the slots that have no separate dark image. The notification slot is not part of  this list, as it is derived from the login-page logo and used only in letters. Pass `isDefault=true` to read  the installation-wide default logos instead of this portal\'s. To learn which slots are still untouched use  `GET api/2.0/settings/whitelabel/logos/isdefault`.
     * @summary Get the white label logos
     * @param {SettingsRebrandingApiGetWhiteLabelLogosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public getWhiteLabelLogos(requestParameters: RebrandingApiGetWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).getWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Clears the wordmark stored for the current portal, so the built-in `ONLYOFFICE` is printed again next to or  instead of the logo images. Requires a DocSpace administrator. Unlike  `POST api/2.0/settings/whitelabel/logotext/save` it does not need a plan that includes branding, so a portal  whose subscription no longer covers branding can still be reset. The call is destructive for the stored text,  which is not kept anywhere and has to be typed again to come back, and it is idempotent: `true` comes back  both when a text was cleared and when there was none. Logo images are left untouched and have their own  `PUT api/2.0/settings/whitelabel/logos/restore`. Pass `isDefault=true` to reset the installation-wide default  wordmark instead of this portal\'s, which only a server installation allows. After the call  `GET api/2.0/settings/whitelabel/logotext` reports `ONLYOFFICE` and  `GET api/2.0/settings/whitelabel/logotext/isdefault` reports `default` as `true`. The wordmark is the only  setting this operation touches, so the company details and the help links of the installation are left as they  are.
     * @summary Restore the white label logo text
     * @param {SettingsRebrandingApiRestoreWhiteLabelLogoTextRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public restoreWhiteLabelLogoText(requestParameters: RebrandingApiRestoreWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).restoreWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Drops every logo uploaded for the current portal and brings back the built-in images, so the portal looks  unbranded again on the login page, in the left menu, in the editors and in letters. Requires a DocSpace  administrator. Unlike the two save operations it does not need a plan that includes branding, so a portal  whose subscription no longer covers it can still be reset. The call is destructive: the stored image files are  deleted and cannot be recovered from the portal, only re-uploaded with  `POST api/2.0/settings/whitelabel/logos/save`. It is idempotent and answers `true` both when logos were  removed and when there was nothing to remove. All slots are reset together; there is no way to restore a  single one. For this portal the picture kept for the older mail templates is reset along with the logos, while  the logo text is left as it is and has its own `PUT api/2.0/settings/whitelabel/logotext/restore`. Pass  `isDefault=true` to reset the installation-wide default branding instead, which only a server installation  allows. Confirm the result with `GET api/2.0/settings/whitelabel/logos/isdefault`.
     * @summary Restore the white label logos
     * @param {SettingsRebrandingApiRestoreWhiteLabelLogosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public restoreWhiteLabelLogos(requestParameters: RebrandingApiRestoreWhiteLabelLogosRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).restoreWhiteLabelLogos(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores which of the ONLYOFFICE help and community resources the interface offers: the sample documents, the  Help Center link, the Feedback and Support link, the user forum, the video guides and the license agreements.  The whole set is replaced by the `settings` object of the request, so send every flag, not only the changed  ones - a flag left out is stored as off. A request without that object is rejected as an invalid request.  Requires a DocSpace administrator, a server installation with unrestricted space access and a plan that  includes branding, which `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is  refused. The flags are installation-wide, so the change reaches every portal of that installation. The call is  mutating and idempotent, and answers `true`. Only the visibility of these entries is controlled here, not the  addresses behind them. Read the result back with `GET api/2.0/settings/rebranding/additional` and undo it with  `DELETE api/2.0/settings/rebranding/additional`.
     * @summary Save the additional white label settings
     * @param {SettingsRebrandingApiSaveAdditionalWhiteLabelSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveAdditionalWhiteLabelSettings(requestParameters: RebrandingApiSaveAdditionalWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveAdditionalWhiteLabelSettings(requestParameters.additionalWhiteLabelSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores the company details - name, site, support email, postal address and phone - that the About page and the  notification letters print as the vendor. The whole set is replaced by the `settings` object of the request,  so send every field, not only the changed ones; a request without that object, or with an email or a site that  is not a valid value, is rejected as an invalid request. Requires a DocSpace administrator, a server  installation with unrestricted space access and a plan that includes branding, which  `GET api/2.0/settings/enablewhitelabel` reports; on a SaaS portal the call is refused. The values are  installation-wide, so the change reaches every portal of that installation. Two fields are not taken from the  request: the licensor flag is always stored as `false`, and hiding the About page is silently kept off unless  the plan allows it. The call is mutating and idempotent, and answers `true`. Read the result back with  `GET api/2.0/settings/rebranding/company` and undo it with `DELETE api/2.0/settings/rebranding/company`.
     * @summary Save the company white label settings
     * @param {SettingsRebrandingApiSaveCompanyWhiteLabelSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveCompanyWhiteLabelSettings(requestParameters: RebrandingApiSaveCompanyWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveCompanyWhiteLabelSettings(requestParameters.companyWhiteLabelSettingsWrapper, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the wordmark that the portal prints next to or instead of a logo image, on the login page, in the editors  and in notification letters. Only `logoText` from the request body is used here, and it is limited to 40  characters; a longer value is rejected as an invalid request. Sending an empty or blank text, or exactly the  built-in `ONLYOFFICE`, clears the setting instead of storing it, which has the same effect as  `PUT api/2.0/settings/whitelabel/logotext/restore`. Requires a DocSpace administrator and a plan that includes  branding, which `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment  required. The call is mutating and idempotent: the previous text is overwritten and `true` comes back. Logo  images are not touched - they are saved by `POST api/2.0/settings/whitelabel/logos/save` - and the text is not  rendered into them. Pass `isDefault=true` to write the installation-wide default wordmark instead of this  portal\'s, which only a server installation allows. Read the stored value back with  `GET api/2.0/settings/whitelabel/logotext`.
     * @summary Save the white label logo text
     * @param {SettingsRebrandingApiSaveWhiteLabelLogoTextRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveWhiteLabelLogoText(requestParameters: RebrandingApiSaveWhiteLabelLogoTextRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveWhiteLabelLogoText(requestParameters.isDark, requestParameters.isDefault, requestParameters.whiteLabelRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the branding images of the current portal with the ones sent in the request, so that the logos on the  login page, in the left menu, in the editors and in letters come from this portal. Every entry of `logo` names  a logo slot in its `key` - the numeric type published by `GET api/2.0/settings/whitelabel/logos` - and carries  the light-theme and the dark-theme image in `light` and `dark`. An image is either a  `data:image/png;base64,...` payload (`png`, `jpg` and `svg` are accepted) or the name of a file already  uploaded to the temporary store; a slot left out of the request keeps its image. The dark image is stored only  for the slots that have a dark variant, that is `1`, `2`, `6`, `7` and `8`, and is ignored for the favicon and  the editor logos; saving slot `2` also rebuilds the notification logo `8` from it. Requires a DocSpace  administrator and a plan that includes branding, which `GET api/2.0/settings/enablewhitelabel` reports;  otherwise the call is refused as payment required. It answers `true` and is undone by  `PUT api/2.0/settings/whitelabel/logos/restore`. With `isDefault=true` it writes the installation-wide default  branding instead, which only a server installation allows. Uploaded files go to  `POST api/2.0/settings/whitelabel/logos/savefromfiles`.
     * @summary Save the white label logos
     * @param {SettingsRebrandingApiSaveWhiteLabelSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveWhiteLabelSettings(requestParameters: RebrandingApiSaveWhiteLabelSettingsRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveWhiteLabelSettings(requestParameters.isDark, requestParameters.isDefault, requestParameters.whiteLabelRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replaces the branding images of the current portal with the files sent as `multipart/form-data`, which is the  way to upload image files directly instead of embedding them as base64 in  `POST api/2.0/settings/whitelabel/logos/save`. The form field names are not used: each file is routed by its  own name, which has to start with the numeric logo slot published by `GET api/2.0/settings/whitelabel/logos`  and end with the image extension, as in `2.png`; a name that also contains `dark`, as in `2.dark.png`, is  stored as the dark-theme image of that slot. Slots that get no file keep the image they have, and a dark file  is ignored for the favicon and the editor logos, which have no dark variant. A request that carries no file at  all is rejected. Requires a DocSpace administrator and a plan that includes branding, which  `GET api/2.0/settings/enablewhitelabel` reports; otherwise the call is refused as payment required. It answers  `true`, overwrites in place and is undone by `PUT api/2.0/settings/whitelabel/logos/restore`. With  `isDefault=true` it writes the installation-wide default branding, which only a server installation allows.
     * @summary Save the logos from files
     * @param {SettingsRebrandingApiSaveWhiteLabelSettingsFromFilesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RebrandingApi
     */
    public saveWhiteLabelSettingsFromFiles(requestParameters: RebrandingApiSaveWhiteLabelSettingsFromFilesRequest = {}, options?: RawAxiosRequestConfig) {
        return RebrandingApiFp(this.configuration).saveWhiteLabelSettingsFromFiles(requestParameters.isDark, requestParameters.isDefault, options).then((request) => request(this.axios, this.basePath));
    }
}

