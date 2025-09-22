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
 * @export
 * @interface SettingsDto
 */
export interface SettingsDto {
    /**
     * The time zone.
     * @type {string}
     * @memberof SettingsDto
     */
    'timezone'?: string | null;
    /**
     * The list of the trusted domains.
     * @type {Array<string>}
     * @memberof SettingsDto
     */
    'trustedDomains'?: Array<string> | null;
    /**
     * 
     * @type {TenantTrustedDomainsType}
     * @memberof SettingsDto
     */
    'trustedDomainsType'?: TenantTrustedDomainsType;
    /**
     * The language.
     * @type {string}
     * @memberof SettingsDto
     */
    'culture': string | null;
    /**
     * The UTC offset in the TimeSpan format.
     * @type {string}
     * @memberof SettingsDto
     */
    'utcOffset'?: string;
    /**
     * The UTC offset in hours.
     * @type {number}
     * @memberof SettingsDto
     */
    'utcHoursOffset'?: number;
    /**
     * The greeting settings.
     * @type {string}
     * @memberof SettingsDto
     */
    'greetingSettings'?: string | null;
    /**
     * The owner ID.
     * @type {string}
     * @memberof SettingsDto
     */
    'ownerId'?: string;
    /**
     * The team template ID.
     * @type {string}
     * @memberof SettingsDto
     */
    'nameSchemaId'?: string | null;
    /**
     * Specifies if a user can join the portal or not.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'enabledJoin'?: boolean | null;
    /**
     * Specifies if a user can send a message to the administrator when accessing the DocSpace portal or not.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'enableAdmMess'?: boolean | null;
    /**
     * Specifies if a user can connect third-party providers to the portal or not.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'thirdpartyEnable'?: boolean | null;
    /**
     * Specifies if this portal is a DocSpace portal or not.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'docSpace'?: boolean;
    /**
     * Indicates whether the system is running in standalone mode.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'standalone'?: boolean;
    /**
     * Specifies if this portal is the AMI instance or not.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'isAmi'?: boolean;
    /**
     * The base domain.
     * @type {string}
     * @memberof SettingsDto
     */
    'baseDomain'?: string | null;
    /**
     * The wizard token.
     * @type {string}
     * @memberof SettingsDto
     */
    'wizardToken'?: string | null;
    /**
     * 
     * @type {PasswordHasher}
     * @memberof SettingsDto
     */
    'passwordHash'?: PasswordHasher;
    /**
     * 
     * @type {FirebaseDto}
     * @memberof SettingsDto
     */
    'firebase'?: FirebaseDto;
    /**
     * The portal version.
     * @type {string}
     * @memberof SettingsDto
     */
    'version'?: string | null;
    /**
     * 
     * @type {RecaptchaType}
     * @memberof SettingsDto
     */
    'recaptchaType'?: RecaptchaType;
    /**
     * The ReCAPTCHA public key.
     * @type {string}
     * @memberof SettingsDto
     */
    'recaptchaPublicKey'?: string | null;
    /**
     * Specifies if the debug information will be sent or not.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'debugInfo'?: boolean;
    /**
     * The socket URL.
     * @type {string}
     * @memberof SettingsDto
     */
    'socketUrl'?: string | null;
    /**
     * 
     * @type {TenantStatus}
     * @memberof SettingsDto
     */
    'tenantStatus'?: TenantStatus;
    /**
     * The tenant alias.
     * @type {string}
     * @memberof SettingsDto
     */
    'tenantAlias'?: string | null;
    /**
     * Specifies whether to display the About portal section.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'displayAbout'?: boolean;
    /**
     * 
     * @type {TenantDomainValidator}
     * @memberof SettingsDto
     */
    'domainValidator'?: TenantDomainValidator;
    /**
     * The Zendesk key.
     * @type {string}
     * @memberof SettingsDto
     */
    'zendeskKey'?: string | null;
    /**
     * The tag manager ID.
     * @type {string}
     * @memberof SettingsDto
     */
    'tagManagerId'?: string | null;
    /**
     * Specifies whether the cookie settings are enabled.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'cookieSettingsEnabled'?: boolean;
    /**
     * Specifies whether the access to the space management is limited or not.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'limitedAccessSpace'?: boolean;
    /**
     * Specifies whether the access to the Developer Tools is limited for users or not.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'limitedAccessDevToolsForUsers'?: boolean;
    /**
     * Specifies whether to display the promotional banners.
     * @type {boolean}
     * @memberof SettingsDto
     */
    'displayBanners'?: boolean;
    /**
     * The user name validation regex.
     * @type {string}
     * @memberof SettingsDto
     */
    'userNameRegex'?: string | null;
    /**
     * The maximum number of invitations to the portal.
     * @type {number}
     * @memberof SettingsDto
     */
    'invitationLimit'?: number | null;
    /**
     * 
     * @type {PluginsDto}
     * @memberof SettingsDto
     */
    'plugins'?: PluginsDto;
    /**
     * 
     * @type {DeepLinkDto}
     * @memberof SettingsDto
     */
    'deepLink'?: DeepLinkDto;
    /**
     * 
     * @type {FormGalleryDto}
     * @memberof SettingsDto
     */
    'formGallery'?: FormGalleryDto;
    /**
     * The maximum image upload size.
     * @type {number}
     * @memberof SettingsDto
     */
    'maxImageUploadSize'?: number;
    /**
     * The white label logo text.
     * @type {string}
     * @memberof SettingsDto
     */
    'logoText'?: string | null;
    /**
     * 
     * @type {CultureSpecificExternalResources}
     * @memberof SettingsDto
     */
    'externalResources'?: CultureSpecificExternalResources;
}



