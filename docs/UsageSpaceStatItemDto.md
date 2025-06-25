# UsageSpaceStatItemDto

The parameters of the usage space statistics item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The item name. | [optional] [default to undefined]
**icon** | **string** | The item icon path. | [optional] [default to undefined]
**disabled** | **boolean** | Specifies if the item is disabled or not. | [optional] [default to undefined]
**size** | **string** | The item used space. | [optional] [default to undefined]
**url** | **string** | The item URL. | [optional] [default to undefined]

## Example

```typescript
import { UsageSpaceStatItemDto } from '@onlyoffice/docspace-api-typescript';

const instance: UsageSpaceStatItemDto = {
    name,
    icon,
    disabled,
    size,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
