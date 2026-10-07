# AdditionalResourcesDto

Which of the ONLYOFFICE help and community entries the interface may offer, installation-wide, in the shape the  reset of these flags returns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDocsEnabled** | **boolean** | Whether the sample documents that ONLYOFFICE ships may be placed in a new user\'s Documents. Unlike the link  flags below it depends on nothing that has to be configured, so its built-in value is always `true`. | [optional] [default to undefined]
**helpCenterEnabled** | **boolean** | Whether the interface may offer the Help Center entry. It is `false` both when the entry was switched off  for the installation and when the installation configures no Help Center address at all; the addresses  themselves are not part of this answer and arrive in `externalResources` of `GET api/2.0/settings`. | [optional] [default to undefined]
**feedbackAndSupportEnabled** | **boolean** | Whether the interface may offer the Feedback and Support entry, `false` for the same two reasons as  `helpCenterEnabled`. | [optional] [default to undefined]
**userForumEnabled** | **boolean** | Whether the interface may offer the user forum entry, `false` for the same two reasons as  `helpCenterEnabled`. | [optional] [default to undefined]
**videoGuidesEnabled** | **boolean** | Whether the interface may offer the Video Guides entry, `false` for the same two reasons as  `helpCenterEnabled`. | [optional] [default to undefined]
**licenseAgreementsEnabled** | **boolean** | Whether the interface may offer the License Agreements entry, `false` for the same two reasons as  `helpCenterEnabled`. | [optional] [default to undefined]
**lastModified** | **string** | When these flags were last stored. Flags that were never stored report the moment they were read, and the  answer of the reset operation reports `0001-01-01T00:00:00`. | [optional] [default to undefined]

## Example

```typescript
import { AdditionalResourcesDto } from '@onlyoffice/docspace-api-sdk';

const instance: AdditionalResourcesDto = {
    startDocsEnabled,
    helpCenterEnabled,
    feedbackAndSupportEnabled,
    userForumEnabled,
    videoGuidesEnabled,
    licenseAgreementsEnabled,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
