# DownloadRequestItemDto

The download request item with conversion parameters and security settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**DownloadRequestItemDtoKey**](DownloadRequestItemDtoKey.md) |  | [default to undefined]
**value** | **string** | The target format or conversion type for the file download. | [default to undefined]
**password** | **string** | The optional password for accessing protected files. | [optional] [default to undefined]

## Example

```typescript
import { DownloadRequestItemDto } from '@onlyoffice/docspace-api-typescript';

const instance: DownloadRequestItemDto = {
    key,
    value,
    password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
