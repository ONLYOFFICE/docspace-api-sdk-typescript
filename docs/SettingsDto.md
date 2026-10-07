# SettingsDto

The general configuration of the current portal, as the client shell needs it before and after sign-in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timezone** | **string** | The portal time zone as an IANA identifier, which is the zone every date this API returns in portal time  is expressed in. Filled in for a signed-in caller only. | [optional] [default to undefined]
**trustedDomains** | **Array&lt;string&gt;** | The mail domains a new member may register or be invited from without confirming the address. It is filled  in for a signed-in caller, and for an anonymous one only while `enabledJoin` is `true`; it is empty  whenever `trustedDomainsType` is not `Custom`. | [optional] [default to undefined]
**trustedDomainsType** | [**TenantTrustedDomainsType**](TenantTrustedDomainsType.md) | How the mail domains above are applied: no domain trusted, every domain trusted, or only the listed ones.  Filled in under the same conditions as `trustedDomains`. | [optional] [default to undefined]
**culture** | **string** | The default language of the portal as a culture name, which is what unauthenticated pages are rendered in.  A signed-in member may have a language of their own, and that one is not reported here. | [default to undefined]
**utcOffset** | **string** | The portal\'s offset from UTC as a time span, positive east of UTC. Filled in for a signed-in caller only,  and taken at the moment of the call, so it already reflects daylight saving time. | [optional] [default to undefined]
**utcHoursOffset** | **number** | The same offset in hours, fractional for a zone that is not on a whole hour. It is there so a client does  not have to parse `utcOffset`. | [optional] [default to undefined]
**greetingSettings** | **string** | The portal title shown on the login page and in letters. It falls back to the product name in the portal  language while the portal has been given no title of its own. | [optional] [default to undefined]
**ownerId** | **string** | The portal owner, the one account that cannot be removed or demoted. Filled in for a signed-in caller  only, and the empty GUID for an anonymous one. | [optional] [default to undefined]
**nameSchemaId** | **string** | The naming scheme the portal uses for its own vocabulary - what a member, a group or a room is called in  the interface. `GET api/2.0/settings/customschemas/{id}` spells that vocabulary out. Filled in for a  signed-in caller only. | [optional] [default to undefined]
**enabledJoin** | **boolean** | Whether someone who is not invited may still register, which is the case when the portal trusts every mail  domain or a list of them. It is computed for an anonymous caller only and left out entirely for a  signed-in one, so a missing value is not a `false`. | [optional] [default to undefined]
**enableAdmMess** | **boolean** | Whether the login page may offer the form for writing to the portal administrators. It is also `true`  while the portal\'s payment has lapsed, whatever the setting says, so it can be set on a portal where an  administrator switched the form off. | [optional] [default to undefined]
**thirdpartyEnable** | **boolean** | Whether the login page may offer sign-in through an external identity provider. It is computed for an  anonymous caller only; `GET api/2.0/capabilities` reports the same thing with the list of providers. | [optional] [default to undefined]
**docSpace** | **boolean** | Always `true` in this product. It exists so a client that also talks to older ONLYOFFICE portals can tell  them apart, and is not a feature switch. | [optional] [default to undefined]
**standalone** | **boolean** | Whether this is a server installation someone administers themselves rather than a portal in the cloud.  Several fields below and a number of operations behave differently in the two, so a client that has to  branch on the deployment reads it here. | [optional] [default to undefined]
**isAmi** | **boolean** | Whether the installation runs from an Amazon machine image, which is a server installation that can read  its own instance metadata. It is `false` on every cloud portal. | [optional] [default to undefined]
**baseDomain** | **string** | The domain new portals of this installation are created under, which is what a portal name is checked  against and appended to. It is empty on an installation that serves a single portal on a fixed address. | [default to undefined]
**wizardToken** | **string** | The token that authorizes the first-run setup wizard. It is handed out to anonymous callers only, and only  while the wizard has not been completed; once it has, the field stays empty for good. | [optional] [default to undefined]
**passwordHash** | [**PasswordHashSettingsDto**](PasswordHashSettingsDto.md) | The parameters for hashing a password in the client before it is sent - the salt, the iteration count and  the hash size. It is filled in for an anonymous caller and, for a signed-in one, only when  `withPassword=true` is asked for. Hash with exactly these parameters and send the result as  `passwordHash`, since the portal cannot reproduce the hash from a different set. | [optional] [default to undefined]
**firebase** | [**FirebaseDto**](FirebaseDto.md) | The Firebase project a mobile or web client sends push registrations to. Filled in for a signed-in caller  only, and its own fields are empty strings on an installation that configures no Firebase project. | [optional] [default to undefined]
**version** | **string** | The product version of the portal, empty when the installation does not publish one. It is the version of  the server, not of this API, whose own version is fixed at 2.0. | [optional] [default to undefined]
**recaptchaType** | [**RecaptchaType**](RecaptchaType.md) | Which CAPTCHA the login form has to render, decided by the installation\'s configuration. Computed for an  anonymous caller only. | [optional] [default to undefined]
**recaptchaPublicKey** | **string** | The site key for the CAPTCHA named by `recaptchaType`, safe to embed in a page. It is empty when the  installation configures no CAPTCHA, in which case the login form asks for none. | [optional] [default to undefined]
**debugInfo** | **boolean** | Whether the client may collect and send diagnostic information. Filled in for a signed-in caller only, and  `false` unless the installation switched it on. | [optional] [default to undefined]
**socketUrl** | **string** | The address of the socket service that pushes live updates to a client. It is filled in for a signed-in  caller and for an anonymous one who arrives with an external sharing link, and is empty when the  installation runs no socket service - a client then has to poll. | [optional] [default to undefined]
**tenantStatus** | [**TenantStatus**](TenantStatus.md) | The lifecycle state of the portal. Anything other than active means most operations are refused for the  moment, because the portal is being transferred, restored, encrypted or removed. | [optional] [default to undefined]
**tenantAlias** | **string** | The portal\'s own name within the installation, which together with `baseDomain` forms the address it is  reached at. `PUT api/2.0/portal/portalrename` changes it. | [optional] [default to undefined]
**displayAbout** | **boolean** | Whether the interface may show the About page. A cloud portal always may; a server installation may unless  its plan includes branding and the vendor details hide the page. | [optional] [default to undefined]
**domainValidator** | [**DomainNameRulesDto**](DomainNameRulesDto.md) | The rules a portal name is checked against - its length limits and the pattern it has to match - so a  client can validate a rename before sending it. Filled in for a signed-in caller only. | [optional] [default to undefined]
**zendeskKey** | **string** | The key that lets the client open the vendor\'s support chat, empty when the installation configures none.  Filled in for a signed-in caller only. | [optional] [default to undefined]
**tagManagerId** | **string** | The Google Tag Manager container the client should load, empty when the installation configures none.  Filled in for a signed-in caller only. | [optional] [default to undefined]
**cookieSettingsEnabled** | **boolean** | Whether the portal limits how long an authentication session stays valid. The limit itself is read with  `GET api/2.0/settings/cookiesettings`; while this is `false` a session is honoured for a year. | [default to undefined]
**limitedAccessSpace** | **boolean** | Whether the space-management section is restricted to the portal owner. Filled in for a signed-in caller  only. | [optional] [default to undefined]
**limitedAccessDevToolsForUsers** | **boolean** | Whether the Developer Tools section is hidden from members who are not administrators. Filled in for a  signed-in caller only. | [optional] [default to undefined]
**displayBanners** | **boolean** | Whether the interface may show the vendor\'s promotional banners. A cloud portal always reports `true`; on  a server installation it follows the banner setting. Filled in for a signed-in caller only. | [optional] [default to undefined]
**aiEnabled** | **boolean** | Whether the AI features - chat, agents and vectorisation - may be used on this portal. While it is  `false` the AI Agents folder is hidden and the AI operations are refused. Filled in for a signed-in caller  only. | [optional] [default to undefined]
**walletLowBalance** | **boolean** | Whether the portal wallet has already dropped below its low-balance threshold, so a client can warn about  AI operations being cut off. It is reported to DocSpace administrators only and left empty for everyone  else, which is not the same as a healthy balance. | [optional] [default to undefined]
**userNameRegex** | **string** | The pattern a member\'s first and last name has to match, so a client can validate a name before sending  it. It is a .NET regular expression and is applied to each name part separately. | [optional] [default to undefined]
**invitationLimit** | **number** | How many invitations the portal may still send in the current window. Filled in for a signed-in caller  only, and set to the maximum value of a 32-bit integer on an installation that limits nothing. | [optional] [default to undefined]
**plugins** | [**PluginsDto**](PluginsDto.md) | What the installation allows to be done with web plugins. Filled in for a signed-in caller only, with all  three flags `false` unless the installation switched plugins on. | [optional] [default to undefined]
**deepLink** | [**DeepLinkDto**](DeepLinkDto.md) | What a mobile client needs to hand a document link over to the installed application instead of opening it  in the browser. Its fields are empty strings when the installation configures no application. | [default to undefined]
**formGallery** | [**FormGalleryDto**](FormGalleryDto.md) | Where the ready-made form templates are served from and which extension they carry. Filled in for a  signed-in caller only. | [optional] [default to undefined]
**maxImageUploadSize** | **number** | The largest image the portal accepts as a logo or an avatar, in bytes. Filled in for a signed-in caller  only, and a larger upload is refused rather than resized. | [optional] [default to undefined]
**logoText** | **string** | The wordmark to print next to the portal logo. It falls back to the built-in one while the portal has  stored no text of its own, so it is never empty. | [optional] [default to undefined]
**externalResources** | [**ExternalResourcesDto**](ExternalResourcesDto.md) | The addresses of the vendor\'s help, support, forum and video resources, already picked for the portal  language. An entry is missing when the installation configures no address for it or the resource is  switched off, which `GET api/2.0/settings/rebranding/additional` reports flag by flag. | [optional] [default to undefined]
**defaultFolderType** | [**FolderType**](FolderType.md) | The section the client should open after sign-in, which is the caller\'s own preference rather than a  portal-wide one. Filled in for a signed-in caller only. | [optional] [default to undefined]
**externalDbEnabled** | **boolean** | Whether the installation has an external database wired up for form results, without which the operations  that write form results there are refused. Filled in for a signed-in caller only. | [optional] [default to undefined]

## Example

```typescript
import { SettingsDto } from '@onlyoffice/docspace-api-sdk';

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
    aiEnabled,
    walletLowBalance,
    userNameRegex,
    invitationLimit,
    plugins,
    deepLink,
    formGallery,
    maxImageUploadSize,
    logoText,
    externalResources,
    defaultFolderType,
    externalDbEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
