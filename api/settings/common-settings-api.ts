// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { CustomColorThemesSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { CustomColorThemesSettingsWrapper } from '../../models';
// @ts-ignore
import type { DeepLinkConfigurationRequestsDto } from '../../models';
// @ts-ignore
import type { DnsSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { EmailActivationSettings } from '../../models';
// @ts-ignore
import type { EmailActivationSettingsWrapper } from '../../models';
// @ts-ignore
import type { MailDomainSettingsRequestsDto } from '../../models';
// @ts-ignore
import type { ObjectWrapper } from '../../models';
// @ts-ignore
import type { PaymentSettingsWrapper } from '../../models';
// @ts-ignore
import type { STRINGArrayWrapper } from '../../models';
// @ts-ignore
import type { SettingsWrapper } from '../../models';
// @ts-ignore
import type { StringWrapper } from '../../models';
// @ts-ignore
import type { TenantDeepLinkSettingsWrapper } from '../../models';
// @ts-ignore
import type { TenantUserInvitationSettingsRequestDto } from '../../models';
// @ts-ignore
import type { TenantUserInvitationSettingsWrapper } from '../../models';
// @ts-ignore
import type { TimezonesRequestsArrayWrapper } from '../../models';
// @ts-ignore
import type { WizardRequestsDto } from '../../models';
// @ts-ignore
import type { WizardSettingsWrapper } from '../../models';
/**
 * SettingsCommonSettingsApi - axios parameter creator
 * @export
 */
export const SettingsCommonSettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Closes the administrator helper notification.
         * @summary Close the admin helper
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for closeAdminHelper operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/close-admin-helper/
         */
        closeAdminHelper: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/closeadminhelper`;
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
         * Completes the Wizard settings.
         * @summary Complete the Wizard settings
         * @param {WizardRequestsDto} [wizardRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for completeWizard operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/complete-wizard/
         */
        completeWizard: async (wizardRequestsDto?: WizardRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/wizard/complete`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(wizardRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the deep link configuration settings for the portal.
         * @summary Configure the deep link settings
         * @param {DeepLinkConfigurationRequestsDto} [deepLinkConfigurationRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for configureDeepLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-deep-link/
         */
        configureDeepLink: async (deepLinkConfigurationRequestsDto?: DeepLinkConfigurationRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/deeplink`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(deepLinkConfigurationRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the portal color theme with the ID specified in the request.
         * @summary Delete a color theme
         * @param {number} [id] The ID of the portal theme to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deletePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal-color-theme/
         */
        deletePortalColorTheme: async (id?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/colortheme`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
         * Returns the deep link settings.
         * @summary Get the deep link settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDeepLinkSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deep-link-settings/
         */
        getDeepLinkSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/deeplink`;
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
         * Returns the portal payment settings.
         * @summary Get the payment settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-settings/
         */
        getPaymentSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/payment`;
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
         * Returns the portal color theme.
         * @summary Get a color theme
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-color-theme/
         */
        getPortalColorTheme: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/colortheme`;
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
         * Returns the portal hostname.
         * @summary Get hostname
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalHostname operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-hostname/
         */
        getPortalHostname: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/machine`;
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
         * Returns the portal logo image URL.
         * @summary Get a portal logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-logo/
         */
        getPortalLogo: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/logo`;
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
         * Returns a list of all the available portal settings with the current values for each parameter.
         * @summary Get the portal settings
         * @param {boolean} [withpassword] Specifies whether to include the password hashing configuration in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-settings/
         */
        getPortalSettings: async (withpassword?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (withpassword !== undefined) {
                localVarQueryParameter['withpassword'] = withpassword;
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
         * Returns the socket settings.
         * @summary Get the socket settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSocketSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-socket-settings/
         */
        getSocketSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/socket`;
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
         * Returns a list of all the available portal languages in the format of a two-letter or four-letter language code (e.g. \"de\", \"en-US\", etc.).
         * @summary Get supported languages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSupportedCultures operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-supported-cultures/
         */
        getSupportedCultures: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/cultures`;
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
         * Returns the portal user invitation settings.
         * @summary Get the user invitation settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantUserInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-user-invitation-settings/
         */
        getTenantUserInvitationSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/invitationsettings`;
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
         * Returns a list of all the available portal time zones.
         * @summary Get time zones
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTimeZones operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-time-zones/
         */
        getTimeZones: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/timezones`;
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
         * Saves the DNS settings specified in the request to the current portal.
         * @summary Save the DNS settings
         * @param {DnsSettingsRequestsDto} [dnsSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveDnsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-dns-settings/
         */
        saveDnsSettings: async (dnsSettingsRequestsDto?: DnsSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/dns`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(dnsSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the mail domain settings specified in the request to the portal.
         * @summary Save the mail domain settings
         * @param {MailDomainSettingsRequestsDto} [mailDomainSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveMailDomainSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mail-domain-settings/
         */
        saveMailDomainSettings: async (mailDomainSettingsRequestsDto?: MailDomainSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/maildomainsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(mailDomainSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Saves the portal color theme specified in the request.
         * @summary Save a color theme
         * @param {CustomColorThemesSettingsRequestsDto} [customColorThemesSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for savePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-portal-color-theme/
         */
        savePortalColorTheme: async (customColorThemesSettingsRequestsDto?: CustomColorThemesSettingsRequestsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/colortheme`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(customColorThemesSettingsRequestsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the email activation settings.
         * @summary Update the email activation settings
         * @param {EmailActivationSettings} [emailActivationSettings] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateEmailActivationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-email-activation-settings/
         */
        updateEmailActivationSettings: async (emailActivationSettings?: EmailActivationSettings, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/emailactivation`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(emailActivationSettings, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates the portal user invitation settings.
         * @summary Update user invitation settings
         * @param {TenantUserInvitationSettingsRequestDto} [tenantUserInvitationSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-settings/
         */
        updateInvitationSettings: async (tenantUserInvitationSettingsRequestDto?: TenantUserInvitationSettingsRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/2.0/settings/invitationsettings`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tenantUserInvitationSettingsRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsCommonSettingsApi - functional programming interface
 * @export
 */
export const SettingsCommonSettingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingsCommonSettingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Closes the administrator helper notification.
         * @summary Close the admin helper
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for closeAdminHelper operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/close-admin-helper/
         */
        async closeAdminHelper(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.closeAdminHelper(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.closeAdminHelper']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Completes the Wizard settings.
         * @summary Complete the Wizard settings
         * @param {WizardRequestsDto} [wizardRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for completeWizard operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/complete-wizard/
         */
        async completeWizard(wizardRequestsDto?: WizardRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WizardSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.completeWizard(wizardRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.completeWizard']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the deep link configuration settings for the portal.
         * @summary Configure the deep link settings
         * @param {DeepLinkConfigurationRequestsDto} [deepLinkConfigurationRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for configureDeepLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-deep-link/
         */
        async configureDeepLink(deepLinkConfigurationRequestsDto?: DeepLinkConfigurationRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantDeepLinkSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.configureDeepLink(deepLinkConfigurationRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.configureDeepLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Deletes the portal color theme with the ID specified in the request.
         * @summary Delete a color theme
         * @param {number} [id] The ID of the portal theme to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deletePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal-color-theme/
         */
        async deletePortalColorTheme(id?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomColorThemesSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePortalColorTheme(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.deletePortalColorTheme']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the deep link settings.
         * @summary Get the deep link settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getDeepLinkSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deep-link-settings/
         */
        async getDeepLinkSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantDeepLinkSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDeepLinkSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getDeepLinkSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal payment settings.
         * @summary Get the payment settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPaymentSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-settings/
         */
        async getPaymentSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPaymentSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getPaymentSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal color theme.
         * @summary Get a color theme
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-color-theme/
         */
        async getPortalColorTheme(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomColorThemesSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalColorTheme(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getPortalColorTheme']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal hostname.
         * @summary Get hostname
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalHostname operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-hostname/
         */
        async getPortalHostname(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalHostname(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getPortalHostname']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal logo image URL.
         * @summary Get a portal logo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-logo/
         */
        async getPortalLogo(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalLogo(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getPortalLogo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the available portal settings with the current values for each parameter.
         * @summary Get the portal settings
         * @param {boolean} [withpassword] Specifies whether to include the password hashing configuration in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getPortalSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-settings/
         */
        async getPortalSettings(withpassword?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPortalSettings(withpassword, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getPortalSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the socket settings.
         * @summary Get the socket settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSocketSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-socket-settings/
         */
        async getSocketSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSocketSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getSocketSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the available portal languages in the format of a two-letter or four-letter language code (e.g. \"de\", \"en-US\", etc.).
         * @summary Get supported languages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getSupportedCultures operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-supported-cultures/
         */
        async getSupportedCultures(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<STRINGArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSupportedCultures(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getSupportedCultures']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the portal user invitation settings.
         * @summary Get the user invitation settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTenantUserInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-user-invitation-settings/
         */
        async getTenantUserInvitationSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantUserInvitationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTenantUserInvitationSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getTenantUserInvitationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the available portal time zones.
         * @summary Get time zones
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getTimeZones operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-time-zones/
         */
        async getTimeZones(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimezonesRequestsArrayWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTimeZones(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.getTimeZones']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the DNS settings specified in the request to the current portal.
         * @summary Save the DNS settings
         * @param {DnsSettingsRequestsDto} [dnsSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveDnsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-dns-settings/
         */
        async saveDnsSettings(dnsSettingsRequestsDto?: DnsSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveDnsSettings(dnsSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.saveDnsSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the mail domain settings specified in the request to the portal.
         * @summary Save the mail domain settings
         * @param {MailDomainSettingsRequestsDto} [mailDomainSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for saveMailDomainSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mail-domain-settings/
         */
        async saveMailDomainSettings(mailDomainSettingsRequestsDto?: MailDomainSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveMailDomainSettings(mailDomainSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.saveMailDomainSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Saves the portal color theme specified in the request.
         * @summary Save a color theme
         * @param {CustomColorThemesSettingsRequestsDto} [customColorThemesSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for savePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-portal-color-theme/
         */
        async savePortalColorTheme(customColorThemesSettingsRequestsDto?: CustomColorThemesSettingsRequestsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomColorThemesSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.savePortalColorTheme(customColorThemesSettingsRequestsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.savePortalColorTheme']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the email activation settings.
         * @summary Update the email activation settings
         * @param {EmailActivationSettings} [emailActivationSettings] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateEmailActivationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-email-activation-settings/
         */
        async updateEmailActivationSettings(emailActivationSettings?: EmailActivationSettings, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmailActivationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEmailActivationSettings(emailActivationSettings, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.updateEmailActivationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the portal user invitation settings.
         * @summary Update user invitation settings
         * @param {TenantUserInvitationSettingsRequestDto} [tenantUserInvitationSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-settings/
         */
        async updateInvitationSettings(tenantUserInvitationSettingsRequestDto?: TenantUserInvitationSettingsRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TenantUserInvitationSettingsWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInvitationSettings(tenantUserInvitationSettingsRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SettingsCommonSettingsApi.updateInvitationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SettingsCommonSettingsApi - factory interface
 * @export
 */
export const SettingsCommonSettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingsCommonSettingsApiFp(configuration)
    return {
        /**
         * Closes the administrator helper notification.
         * @summary Close the admin helper
         * @param {*} [options] Override http request option.
         * REST API Reference for closeAdminHelper operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/close-admin-helper/
         * @throws {RequiredError}
         */
        closeAdminHelper(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.closeAdminHelper(options).then((request) => request(axios, basePath));
        },
        /**
         * Completes the Wizard settings.
         * @summary Complete the Wizard settings
         * @param {WizardRequestsDto} [wizardRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for completeWizard operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/complete-wizard/
         * @throws {RequiredError}
         */
        completeWizard(wizardRequestsDto?: WizardRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<WizardSettingsWrapper> {
            return localVarFp.completeWizard(wizardRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the deep link configuration settings for the portal.
         * @summary Configure the deep link settings
         * @param {DeepLinkConfigurationRequestsDto} [deepLinkConfigurationRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for configureDeepLink operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/configure-deep-link/
         * @throws {RequiredError}
         */
        configureDeepLink(deepLinkConfigurationRequestsDto?: DeepLinkConfigurationRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<TenantDeepLinkSettingsWrapper> {
            return localVarFp.configureDeepLink(deepLinkConfigurationRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the portal color theme with the ID specified in the request.
         * @summary Delete a color theme
         * @param {number} [id] The ID of the portal theme to delete.
         * @param {*} [options] Override http request option.
         * REST API Reference for deletePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-portal-color-theme/
         * @throws {RequiredError}
         */
        deletePortalColorTheme(id?: number, options?: RawAxiosRequestConfig): AxiosPromise<CustomColorThemesSettingsWrapper> {
            return localVarFp.deletePortalColorTheme(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the deep link settings.
         * @summary Get the deep link settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getDeepLinkSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-deep-link-settings/
         * @throws {RequiredError}
         */
        getDeepLinkSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantDeepLinkSettingsWrapper> {
            return localVarFp.getDeepLinkSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal payment settings.
         * @summary Get the payment settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getPaymentSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-payment-settings/
         * @throws {RequiredError}
         */
        getPaymentSettings(options?: RawAxiosRequestConfig): AxiosPromise<PaymentSettingsWrapper> {
            return localVarFp.getPaymentSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal color theme.
         * @summary Get a color theme
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-color-theme/
         * @throws {RequiredError}
         */
        getPortalColorTheme(options?: RawAxiosRequestConfig): AxiosPromise<CustomColorThemesSettingsWrapper> {
            return localVarFp.getPortalColorTheme(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal hostname.
         * @summary Get hostname
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalHostname operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-hostname/
         * @throws {RequiredError}
         */
        getPortalHostname(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getPortalHostname(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal logo image URL.
         * @summary Get a portal logo
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalLogo operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-logo/
         * @throws {RequiredError}
         */
        getPortalLogo(options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.getPortalLogo(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the available portal settings with the current values for each parameter.
         * @summary Get the portal settings
         * @param {boolean} [withpassword] Specifies whether to include the password hashing configuration in the response.
         * @param {*} [options] Override http request option.
         * REST API Reference for getPortalSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-portal-settings/
         * @throws {RequiredError}
         */
        getPortalSettings(withpassword?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<SettingsWrapper> {
            return localVarFp.getPortalSettings(withpassword, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the socket settings.
         * @summary Get the socket settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getSocketSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-socket-settings/
         * @throws {RequiredError}
         */
        getSocketSettings(options?: RawAxiosRequestConfig): AxiosPromise<ObjectWrapper> {
            return localVarFp.getSocketSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the available portal languages in the format of a two-letter or four-letter language code (e.g. \"de\", \"en-US\", etc.).
         * @summary Get supported languages
         * @param {*} [options] Override http request option.
         * REST API Reference for getSupportedCultures operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-supported-cultures/
         * @throws {RequiredError}
         */
        getSupportedCultures(options?: RawAxiosRequestConfig): AxiosPromise<STRINGArrayWrapper> {
            return localVarFp.getSupportedCultures(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the portal user invitation settings.
         * @summary Get the user invitation settings
         * @param {*} [options] Override http request option.
         * REST API Reference for getTenantUserInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-tenant-user-invitation-settings/
         * @throws {RequiredError}
         */
        getTenantUserInvitationSettings(options?: RawAxiosRequestConfig): AxiosPromise<TenantUserInvitationSettingsWrapper> {
            return localVarFp.getTenantUserInvitationSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the available portal time zones.
         * @summary Get time zones
         * @param {*} [options] Override http request option.
         * REST API Reference for getTimeZones operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-time-zones/
         * @throws {RequiredError}
         */
        getTimeZones(options?: RawAxiosRequestConfig): AxiosPromise<TimezonesRequestsArrayWrapper> {
            return localVarFp.getTimeZones(options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the DNS settings specified in the request to the current portal.
         * @summary Save the DNS settings
         * @param {DnsSettingsRequestsDto} [dnsSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveDnsSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-dns-settings/
         * @throws {RequiredError}
         */
        saveDnsSettings(dnsSettingsRequestsDto?: DnsSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.saveDnsSettings(dnsSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the mail domain settings specified in the request to the portal.
         * @summary Save the mail domain settings
         * @param {MailDomainSettingsRequestsDto} [mailDomainSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for saveMailDomainSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-mail-domain-settings/
         * @throws {RequiredError}
         */
        saveMailDomainSettings(mailDomainSettingsRequestsDto?: MailDomainSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<StringWrapper> {
            return localVarFp.saveMailDomainSettings(mailDomainSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves the portal color theme specified in the request.
         * @summary Save a color theme
         * @param {CustomColorThemesSettingsRequestsDto} [customColorThemesSettingsRequestsDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for savePortalColorTheme operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/save-portal-color-theme/
         * @throws {RequiredError}
         */
        savePortalColorTheme(customColorThemesSettingsRequestsDto?: CustomColorThemesSettingsRequestsDto, options?: RawAxiosRequestConfig): AxiosPromise<CustomColorThemesSettingsWrapper> {
            return localVarFp.savePortalColorTheme(customColorThemesSettingsRequestsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the email activation settings.
         * @summary Update the email activation settings
         * @param {EmailActivationSettings} [emailActivationSettings] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateEmailActivationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-email-activation-settings/
         * @throws {RequiredError}
         */
        updateEmailActivationSettings(emailActivationSettings?: EmailActivationSettings, options?: RawAxiosRequestConfig): AxiosPromise<EmailActivationSettingsWrapper> {
            return localVarFp.updateEmailActivationSettings(emailActivationSettings, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the portal user invitation settings.
         * @summary Update user invitation settings
         * @param {TenantUserInvitationSettingsRequestDto} [tenantUserInvitationSettingsRequestDto] 
         * @param {*} [options] Override http request option.
         * REST API Reference for updateInvitationSettings operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-invitation-settings/
         * @throws {RequiredError}
         */
        updateInvitationSettings(tenantUserInvitationSettingsRequestDto?: TenantUserInvitationSettingsRequestDto, options?: RawAxiosRequestConfig): AxiosPromise<TenantUserInvitationSettingsWrapper> {
            return localVarFp.updateInvitationSettings(tenantUserInvitationSettingsRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsCommonSettingsApi - object-oriented interface
 * @export
 * @class SettingsCommonSettingsApi
 * @extends {BaseAPI}
 */
export class SettingsCommonSettingsApi extends BaseAPI {
    /**
     * Closes the administrator helper notification.
     * @summary Close the admin helper
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public closeAdminHelper(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).closeAdminHelper(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Completes the Wizard settings.
     * @summary Complete the Wizard settings
     * @param {WizardRequestsDto} [wizardRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public completeWizard(wizardRequestsDto?: WizardRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).completeWizard(wizardRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the deep link configuration settings for the portal.
     * @summary Configure the deep link settings
     * @param {DeepLinkConfigurationRequestsDto} [deepLinkConfigurationRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public configureDeepLink(deepLinkConfigurationRequestsDto?: DeepLinkConfigurationRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).configureDeepLink(deepLinkConfigurationRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the portal color theme with the ID specified in the request.
     * @summary Delete a color theme
     * @param {number} [id] The ID of the portal theme to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public deletePortalColorTheme(id?: number, options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).deletePortalColorTheme(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the deep link settings.
     * @summary Get the deep link settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getDeepLinkSettings(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getDeepLinkSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal payment settings.
     * @summary Get the payment settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getPaymentSettings(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getPaymentSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal color theme.
     * @summary Get a color theme
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getPortalColorTheme(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getPortalColorTheme(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal hostname.
     * @summary Get hostname
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getPortalHostname(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getPortalHostname(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal logo image URL.
     * @summary Get a portal logo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getPortalLogo(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getPortalLogo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the available portal settings with the current values for each parameter.
     * @summary Get the portal settings
     * @param {boolean} [withpassword] Specifies whether to include the password hashing configuration in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getPortalSettings(withpassword?: boolean, options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getPortalSettings(withpassword, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the socket settings.
     * @summary Get the socket settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getSocketSettings(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getSocketSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the available portal languages in the format of a two-letter or four-letter language code (e.g. \"de\", \"en-US\", etc.).
     * @summary Get supported languages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getSupportedCultures(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getSupportedCultures(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the portal user invitation settings.
     * @summary Get the user invitation settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getTenantUserInvitationSettings(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getTenantUserInvitationSettings(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the available portal time zones.
     * @summary Get time zones
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public getTimeZones(options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).getTimeZones(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the DNS settings specified in the request to the current portal.
     * @summary Save the DNS settings
     * @param {DnsSettingsRequestsDto} [dnsSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public saveDnsSettings(dnsSettingsRequestsDto?: DnsSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).saveDnsSettings(dnsSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the mail domain settings specified in the request to the portal.
     * @summary Save the mail domain settings
     * @param {MailDomainSettingsRequestsDto} [mailDomainSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public saveMailDomainSettings(mailDomainSettingsRequestsDto?: MailDomainSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).saveMailDomainSettings(mailDomainSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves the portal color theme specified in the request.
     * @summary Save a color theme
     * @param {CustomColorThemesSettingsRequestsDto} [customColorThemesSettingsRequestsDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public savePortalColorTheme(customColorThemesSettingsRequestsDto?: CustomColorThemesSettingsRequestsDto, options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).savePortalColorTheme(customColorThemesSettingsRequestsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the email activation settings.
     * @summary Update the email activation settings
     * @param {EmailActivationSettings} [emailActivationSettings] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public updateEmailActivationSettings(emailActivationSettings?: EmailActivationSettings, options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).updateEmailActivationSettings(emailActivationSettings, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the portal user invitation settings.
     * @summary Update user invitation settings
     * @param {TenantUserInvitationSettingsRequestDto} [tenantUserInvitationSettingsRequestDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsCommonSettingsApi
     */
    public updateInvitationSettings(tenantUserInvitationSettingsRequestDto?: TenantUserInvitationSettingsRequestDto, options?: RawAxiosRequestConfig) {
        return SettingsCommonSettingsApiFp(this.configuration).updateInvitationSettings(tenantUserInvitationSettingsRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

