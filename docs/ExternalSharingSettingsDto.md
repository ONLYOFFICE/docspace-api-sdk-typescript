# ExternalSharingSettingsDto

The external sharing policy of the portal as it now stands.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalShare** | **boolean** | Whether links that open a file or a room without a portal account may be created. While it is false the portal  also reports sharing on social networks as off and the default link type as internal, whatever was asked for. | [optional] [default to undefined]
**defaultShareLinkInternal** | **boolean** | The kind of link the portal offers first: true means a link only accounts of this portal can open, false one  that anyone holding it can open. | [optional] [default to undefined]
**externalShareApplyToDocuments** | **boolean** | Whether the restriction covers personal documents. It only has an effect while external sharing is off, so a  true here with sharing allowed restricts nothing. | [optional] [default to undefined]
**externalShareApplyToRooms** | **boolean** | Whether the restriction covers rooms, including the creation of new public ones. It only has an effect while  external sharing is off. | [optional] [default to undefined]
**blockExistingLinksOnRestrict** | **boolean** | Whether links created before the restriction stop opening as well. With false they keep working and only new  ones are refused. | [optional] [default to undefined]

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
