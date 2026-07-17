# ExternalSharingSettingsRequestDto

The Access Control external sharing settings request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalShare** | **boolean** | Specifies whether external (public) link creation is allowed. | [optional] [default to undefined]
**defaultShareLinkInternal** | **boolean** | Specifies the default sharing link type: true = DocSpace users only, false = Anyone with the link.  Relevant only when ExternalShare is true. | [optional] [default to undefined]
**externalShareApplyToDocuments** | **boolean** | When external sharing is restricted, specifies whether to apply the restriction to the My Documents section.  Relevant only when ExternalShare is false. | [optional] [default to undefined]
**externalShareApplyToRooms** | **boolean** | When external sharing is restricted, specifies whether to apply the restriction to the Rooms section.  Relevant only when ExternalShare is false. | [optional] [default to undefined]
**blockExistingLinksOnRestrict** | **boolean** | When external sharing is restricted, specifies whether to block existing public links immediately.  Relevant only when ExternalShare is false. | [optional] [default to undefined]

## Example

```typescript
import { ExternalSharingSettingsRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: ExternalSharingSettingsRequestDto = {
    externalShare,
    defaultShareLinkInternal,
    externalShareApplyToDocuments,
    externalShareApplyToRooms,
    blockExistingLinksOnRestrict,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
