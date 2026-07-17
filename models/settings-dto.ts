/* tslint:disable */
/* eslint-disable */
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

// May contain unused imports in some cases
// @ts-ignore
import type { CultureSpecificExternalResources } from './culture-specific-external-resources';
// May contain unused imports in some cases
// @ts-ignore
import type { DeepLinkDto } from './deep-link-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FirebaseDto } from './firebase-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FolderType } from './folder-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FormGalleryDto } from './form-gallery-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { PasswordHasher } from './password-hasher';
// May contain unused imports in some cases
// @ts-ignore
import type { PluginsDto } from './plugins-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { RecaptchaType } from './recaptcha-type';
// May contain unused imports in some cases
// @ts-ignore
import type { TenantDomainValidator } from './tenant-domain-validator';
// May contain unused imports in some cases
// @ts-ignore
import type { TenantStatus } from './tenant-status';
// May contain unused imports in some cases
// @ts-ignore
import type { TenantTrustedDomainsType } from './tenant-trusted-domains-type';

/**
 * The settings information.
 */
export interface SettingsDto {
    /**
     * The time zone.
     */
    'timezone'?: string | null;
    /**
     * The list of the trusted domains.
     */
    'trustedDomains'?: Array<string> | null;
    'trustedDomainsType'?: TenantTrustedDomainsType;
    /**
     * The language.
     */
    'culture': string | null;
    /**
     * The UTC offset in the TimeSpan format.
     */
    'utcOffset'?: string;
    /**
     * The UTC offset in hours.
     */
    'utcHoursOffset'?: number;
    /**
     * The greeting settings.
     */
    'greetingSettings'?: string | null;
    /**
     * The owner ID.
     */
    'ownerId'?: string;
    /**
     * The team template ID.
     */
    'nameSchemaId'?: string | null;
    /**
     * Specifies if a user can join the portal or not.
     */
    'enabledJoin'?: boolean | null;
    /**
     * Specifies if a user can send a message to the administrator when accessing the DocSpace portal or not.
     */
    'enableAdmMess'?: boolean | null;
    /**
     * Specifies if a user can connect third-party providers to the portal or not.
     */
    'thirdpartyEnable'?: boolean | null;
    /**
     * Specifies if this portal is a DocSpace portal or not.
     */
    'docSpace'?: boolean;
    /**
     * Indicates whether the system is running in standalone mode.
     */
    'standalone'?: boolean;
    /**
     * Specifies if this portal is the AMI instance or not.
     */
    'isAmi'?: boolean;
    /**
     * The base domain.
     */
    'baseDomain': string | null;
    /**
     * The wizard token.
     */
    'wizardToken'?: string | null;
    'passwordHash'?: PasswordHasher;
    'firebase'?: FirebaseDto;
    /**
     * The portal version.
     */
    'version'?: string | null;
    'recaptchaType'?: RecaptchaType;
    /**
     * The ReCAPTCHA public key.
     */
    'recaptchaPublicKey'?: string | null;
    /**
     * Specifies if the debug information will be sent or not.
     */
    'debugInfo'?: boolean;
    /**
     * The socket URL.
     */
    'socketUrl'?: string | null;
    'tenantStatus'?: TenantStatus;
    /**
     * The tenant alias.
     */
    'tenantAlias'?: string | null;
    /**
     * Specifies whether to display the About portal section.
     */
    'displayAbout'?: boolean;
    'domainValidator'?: TenantDomainValidator;
    /**
     * The Zendesk key.
     */
    'zendeskKey'?: string | null;
    /**
     * The tag manager ID.
     */
    'tagManagerId'?: string | null;
    /**
     * Specifies whether the cookie settings are enabled.
     */
    'cookieSettingsEnabled': boolean;
    /**
     * Specifies whether the access to the space management is limited or not.
     */
    'limitedAccessSpace'?: boolean;
    /**
     * Specifies whether the access to the Developer Tools is limited for users or not.
     */
    'limitedAccessDevToolsForUsers'?: boolean;
    /**
     * Specifies whether to display the promotional banners.
     */
    'displayBanners'?: boolean;
    /**
     * Specifies whether AI functionality (chat, agents, vectorization) is enabled for the current tenant.  When `false`, all AI features are disabled and the AI Agents folder is hidden.
     */
    'aiEnabled'?: boolean;
    /**
     * The user name validation regex.
     */
    'userNameRegex'?: string | null;
    /**
     * The maximum number of invitations to the portal.
     */
    'invitationLimit'?: number | null;
    'plugins'?: PluginsDto;
    'deepLink': DeepLinkDto;
    'formGallery'?: FormGalleryDto;
    /**
     * The maximum image upload size.
     */
    'maxImageUploadSize'?: number;
    /**
     * The white label logo text.
     */
    'logoText'?: string | null;
    'externalResources'?: CultureSpecificExternalResources;
    'defaultFolderType'?: FolderType;
    /**
     * Specifies if an external database is connected for storing form results.
     */
    'externalDbEnabled'?: boolean;
}



