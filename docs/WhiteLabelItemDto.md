# WhiteLabelItemDto

The white label item parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**WhiteLabelLogoType**](WhiteLabelLogoType.md) | The white label logo type. | [optional] [default to undefined]
**name** | **string** | The white label file name. | [optional] [default to undefined]
**size** | [**WhiteLabelItemSizeDto**](WhiteLabelItemSizeDto.md) | The white label file size. | [optional] [default to undefined]
**path** | [**WhiteLabelItemPathDto**](WhiteLabelItemPathDto.md) | The white label file path. | [optional] [default to undefined]

## Example

```typescript
import { WhiteLabelItemDto } from '@onlyoffice/docspace-api-sdk';

const instance: WhiteLabelItemDto = {
    type,
    name,
    size,
    path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
