# UsageSpaceStatItemDto

The storage one category of a portal module occupies, in the form a statistics page prints it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The category name in the portal language, HTML-escaped and ready to be rendered as text. What a category  stands for depends on the module asked about - for the Documents module it is a room type. | [optional] [default to undefined]
**icon** | **string** | The path of the icon to render beside the name, relative to the portal address. It is empty for a category  that ships no icon. | [optional] [default to undefined]
**disabled** | **boolean** | Whether the category is switched off for this portal. A disabled category still reports the space it  occupies, so it is worth showing greyed out rather than dropping. | [optional] [default to undefined]
**size** | **string** | The occupied space already formatted for display, with its unit and in the portal language - `0 Byte` for  an empty category. It is not a byte count and must not be parsed; the raw numbers live in the quota  reported by `GET api/2.0/portal/quota`. | [optional] [default to undefined]
**url** | **string** | The portal page that lists the contents of this category, relative to the portal address, so a statistics  page can link through to it. It is empty for a category with no page of its own. | [optional] [default to undefined]

## Example

```typescript
import { UsageSpaceStatItemDto } from '@onlyoffice/docspace-api-sdk';

const instance: UsageSpaceStatItemDto = {
    name,
    icon,
    disabled,
    size,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
