# DownloadRequestItemDto

One file of a bulk download, together with the format it is converted to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**DownloadRequestItemDtoKey**](DownloadRequestItemDtoKey.md) |  | [default to undefined]
**value** | **string** | The format the file is converted to before it is packed, as a file extension without a leading dot. | [default to undefined]
**password** | **string** | The password that opens the source file, for a file protected with one; a protected file cannot be converted  without it. | [optional] [default to undefined]

## Example

```typescript
import { DownloadRequestItemDto } from '@onlyoffice/docspace-api-sdk';

const instance: DownloadRequestItemDto = {
    key,
    value,
    password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
