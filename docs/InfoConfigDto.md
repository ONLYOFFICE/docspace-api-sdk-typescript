# InfoConfigDto

The information config parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**favorite** | **boolean** | Specifies if the file is favorite or not. | [optional] [default to undefined]
**folder** | **string** | The folder of the file. | [optional] [default to undefined]
**owner** | **string** | The file owner. | [optional] [default to undefined]
**sharingSettings** | [**Array&lt;AceShortWrapper&gt;**](AceShortWrapper.md) | The sharing settings of the file. | [optional] [default to undefined]
**type** | [**EditorType**](EditorType.md) |  | [optional] [default to undefined]
**uploaded** | **string** | The uploaded file. | [optional] [default to undefined]

## Example

```typescript
import { InfoConfigDto } from '@onlyoffice/docspace-api-typescript';

const instance: InfoConfigDto = {
    favorite,
    folder,
    owner,
    sharingSettings,
    type,
    uploaded,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
