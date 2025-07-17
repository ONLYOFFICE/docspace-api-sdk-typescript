# SettingsDto

The settings information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timezone** | **string** | The time zone. | [optional] [default to undefined]
**trustedDomains** | **Array&lt;string&gt;** | The list of the trusted domains. | [optional] [default to undefined]
**trustedDomainsType** | [**TenantTrustedDomainsType**](TenantTrustedDomainsType.md) |  | [optional] [default to undefined]
**culture** | **string** | The language. | [optional] [default to undefined]
**utcOffset** | **string** | The UTC offset in the TimeSpan format. | [optional] [default to undefined]
**utcHoursOffset** | **number** | The UTC offset in hours. | [optional] [default to undefined]
**greetingSettings** | **string** | The greeting settings. | [optional] [default to undefined]
**ownerId** | **string** | The owner ID. | [optional] [default to undefined]
**nameSchemaId** | **string** | The team template ID. | [optional] [default to undefined]
**enabledJoin** | **boolean** | Specifies if a user can join the portal or not. | [optional] [default to undefined]
**enableAdmMess** | **boolean** | Specifies if a user can send a message to the administrator when accessing the DocSpace portal or not. | [optional] [default to undefined]
**thirdpartyEnable** | **boolean** | Specifies if a user can connect third-party providers to the portal or not. | [optional] [default to undefined]
**docSpace** | **boolean** | Specifies if this portal is a DocSpace portal or not. | [optional] [default to undefined]
**standalone** | **boolean** | Indicates whether the system is running in standalone mode. | [optional] [default to undefined]
**isAmi** | **boolean** | Specifies if this portal is the AMI instance or not. | [optional] [default to undefined]
**baseDomain** | **string** | The base domain. | [optional] [default to undefined]
**wizardToken** | **string** | The wizard token. | [optional] [default to undefined]
**passwordHash** | [**PasswordHasher**](PasswordHasher.md) |  | [optional] [default to undefined]
**firebase** | [**FirebaseDto**](FirebaseDto.md) |  | [optional] [default to undefined]
**version** | **string** | The portal version. | [optional] [default to undefined]
**recaptchaType** | [**RecaptchaType**](RecaptchaType.md) |  | [optional] [default to undefined]
**recaptchaPublicKey** | **string** | The ReCAPTCHA public key. | [optional] [default to undefined]
**debugInfo** | **boolean** | Specifies if the debug information will be sent or not. | [optional] [default to undefined]
**socketUrl** | **string** | The socket URL. | [optional] [default to undefined]
**tenantStatus** | [**TenantStatus**](TenantStatus.md) |  | [optional] [default to undefined]
**tenantAlias** | **string** | The tenant alias. | [optional] [default to undefined]
**displayAbout** | **boolean** | Specifies whether to display the \&quot;About\&quot; portal section. | [optional] [default to undefined]
**domainValidator** | [**TenantDomainValidator**](TenantDomainValidator.md) |  | [optional] [default to undefined]
**zendeskKey** | **string** | The Zendesk key. | [optional] [default to undefined]
**tagManagerId** | **string** | The tag manager ID. | [optional] [default to undefined]
**cookieSettingsEnabled** | **boolean** | Specifies whether the cookie settings are enabled. | [optional] [default to undefined]
**limitedAccessSpace** | **boolean** | Specifies whether the access to the space management is limited or not. | [optional] [default to undefined]
**limitedAccessDevToolsForUsers** | **boolean** | Specifies whether the access to the Developer Tools is limited for users or not. | [optional] [default to undefined]
**displayBanners** | **boolean** | Specifies whether to display the promotional banners. | [optional] [default to undefined]
**userNameRegex** | **string** | The user name validation regex. | [optional] [default to undefined]
**invitationLimit** | **number** | The maximum number of invitations to the portal. | [optional] [default to undefined]
**plugins** | [**PluginsDto**](PluginsDto.md) |  | [optional] [default to undefined]
**deepLink** | [**DeepLinkDto**](DeepLinkDto.md) |  | [optional] [default to undefined]
**formGallery** | [**FormGalleryDto**](FormGalleryDto.md) |  | [optional] [default to undefined]
**maxImageUploadSize** | **number** | The maximum image upload size. | [optional] [default to undefined]
**logoText** | **string** | The white label logo text. | [optional] [default to undefined]
**externalResources** | [**CultureSpecificExternalResources**](CultureSpecificExternalResources.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SettingsDto } from '@onlyoffice/docspace-api-typescript';

const instance: SettingsDto = {
    timezone,
    trustedDomains,
    trustedDomainsType,
    culture,
    utcOffset,
    utcHoursOffset,
    greetingSettings,
    ownerId,
    nameSchemaId,
    enabledJoin,
    enableAdmMess,
    thirdpartyEnable,
    docSpace,
    standalone,
    isAmi,
    baseDomain,
    wizardToken,
    passwordHash,
    firebase,
    version,
    recaptchaType,
    recaptchaPublicKey,
    debugInfo,
    socketUrl,
    tenantStatus,
    tenantAlias,
    displayAbout,
    domainValidator,
    zendeskKey,
    tagManagerId,
    cookieSettingsEnabled,
    limitedAccessSpace,
    limitedAccessDevToolsForUsers,
    displayBanners,
    userNameRegex,
    invitationLimit,
    plugins,
    deepLink,
    formGallery,
    maxImageUploadSize,
    logoText,
    externalResources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
