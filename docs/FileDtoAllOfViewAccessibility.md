# FileDtoAllOfViewAccessibility

Which ways of opening this format the portal supports at all - its own editor, the picture viewer, the media  player and so on. It answers whether the format can be shown, not whether this account may do it; rights are  reported in `security`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ImageView** | **boolean** |  | [optional] [default to undefined]
**MediaView** | **boolean** |  | [optional] [default to undefined]
**WebView** | **boolean** |  | [optional] [default to undefined]
**WebEdit** | **boolean** |  | [optional] [default to undefined]
**WebReview** | **boolean** |  | [optional] [default to undefined]
**WebCustomFilterEditing** | **boolean** |  | [optional] [default to undefined]
**WebRestrictedEditing** | **boolean** |  | [optional] [default to undefined]
**WebComment** | **boolean** |  | [optional] [default to undefined]
**CanConvert** | **boolean** |  | [optional] [default to undefined]
**MustConvert** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { FileDtoAllOfViewAccessibility } from '@onlyoffice/docspace-api-sdk';

const instance: FileDtoAllOfViewAccessibility = {
    ImageView,
    MediaView,
    WebView,
    WebEdit,
    WebReview,
    WebCustomFilterEditing,
    WebRestrictedEditing,
    WebComment,
    CanConvert,
    MustConvert,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
