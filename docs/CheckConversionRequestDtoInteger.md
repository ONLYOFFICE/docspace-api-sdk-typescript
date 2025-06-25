# CheckConversionRequestDtoInteger

The parameters for checking file conversion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileId** | **number** | The file ID to check conversion proccess. | [optional] [default to undefined]
**sync** | **boolean** | Specifies if the conversion process is synchronous or not. | [optional] [default to undefined]
**startConvert** | **boolean** | Specifies whether to start a conversion process or not. | [optional] [default to undefined]
**version** | **number** | The file version that is converted. | [optional] [default to undefined]
**password** | **string** | The password of the converted file. | [optional] [default to undefined]
**outputType** | **string** | The conversion output type. | [optional] [default to undefined]
**createNewIfExist** | **boolean** | Specifies whether to create a new file if it exists or not. | [optional] [default to undefined]

## Example

```typescript
import { CheckConversionRequestDtoInteger } from '@onlyoffice/docspace-api-typescript';

const instance: CheckConversionRequestDtoInteger = {
    fileId,
    sync,
    startConvert,
    version,
    password,
    outputType,
    createNewIfExist,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
