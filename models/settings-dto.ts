/* tslint:disable */
/* eslint-disable */
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
    'timezone'?: string;
    /**
     * The list of the trusted domains.
     */
    'trustedDomains'?: Array<string>;
    'trustedDomainsType'?: TenantTrustedDomainsType;
    /**
     * The language.
     */
    'culture': string;
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
    'greetingSettings'?: string;
    /**
     * The owner ID.
     */
    'ownerId'?: string;
    /**
     * The team template ID.
     */
    'nameSchemaId'?: string;
    /**
     * Specifies if a user can join the portal or not.
     */
    'enabledJoin'?: boolean;
    /**
     * Specifies if a user can send a message to the administrator when accessing the DocSpace portal or not.
     */
    'enableAdmMess'?: boolean;
    /**
     * Specifies if a user can connect third-party providers to the portal or not.
     */
    'thirdpartyEnable'?: boolean;
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
    'baseDomain': string;
    /**
     * The wizard token.
     */
    'wizardToken'?: string;
    'passwordHash'?: PasswordHasher;
    'firebase'?: FirebaseDto;
    /**
     * The portal version.
     */
    'version'?: string;
    'recaptchaType'?: RecaptchaType;
    /**
     * The ReCAPTCHA public key.
     */
    'recaptchaPublicKey'?: string;
    /**
     * Specifies if the debug information will be sent or not.
     */
    'debugInfo'?: boolean;
    /**
     * The socket URL.
     */
    'socketUrl'?: string;
    'tenantStatus'?: TenantStatus;
    /**
     * The tenant alias.
     */
    'tenantAlias'?: string;
    /**
     * Specifies whether to display the About portal section.
     */
    'displayAbout'?: boolean;
    'domainValidator'?: TenantDomainValidator;
    /**
     * The Zendesk key.
     */
    'zendeskKey'?: string;
    /**
     * The tag manager ID.
     */
    'tagManagerId'?: string;
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
     * The user name validation regex.
     */
    'userNameRegex'?: string;
    /**
     * The maximum number of invitations to the portal.
     */
    'invitationLimit'?: number;
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
    'logoText'?: string;
    'externalResources'?: CultureSpecificExternalResources;
    'defaultFolderType'?: FolderType;
}



