# FileEncryptionInfoDto

The encryption information of a file: the user key pairs and the per-user file keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userKeys** | [**Array&lt;EncryptionKeyDto&gt;**](EncryptionKeyDto.md) | The key pairs of the users who have access to the file. | [optional] [default to undefined]
**fileKeys** | [**Array&lt;FileKeys&gt;**](FileKeys.md) | The file keys issued to those users. | [optional] [default to undefined]

## Example

```typescript
import { FileEncryptionInfoDto } from '@onlyoffice/docspace-api-sdk';

const instance: FileEncryptionInfoDto = {
    userKeys,
    fileKeys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
