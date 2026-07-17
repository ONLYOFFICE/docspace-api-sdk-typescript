# ExternalSharingSettingsDto

The Access Control external sharing settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalShare** | **boolean** | Specifies whether external (public) link creation is allowed. | [optional] [default to undefined]
**defaultShareLinkInternal** | **boolean** | Specifies the default sharing link type: true = DocSpace users only, false = Anyone with the link. | [optional] [default to undefined]
**externalShareApplyToDocuments** | **boolean** | When external sharing is restricted, specifies whether the restriction applies to the My Documents section. | [optional] [default to undefined]
**externalShareApplyToRooms** | **boolean** | When external sharing is restricted, specifies whether the restriction applies to the Rooms section. | [optional] [default to undefined]
**blockExistingLinksOnRestrict** | **boolean** | When external sharing is restricted, specifies whether existing public links are blocked immediately. | [optional] [default to undefined]

## Example

```typescript
import { ExternalSharingSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: ExternalSharingSettingsDto = {
    externalShare,
    defaultShareLinkInternal,
    externalShareApplyToDocuments,
    externalShareApplyToRooms,
    blockExistingLinksOnRestrict,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
