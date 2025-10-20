# SecurityInfoSimpleRequestDto

The parameters of the security information request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**share** | [**Array&lt;FileShareParams&gt;**](FileShareParams.md) | The collection of sharing parameters. | [optional] [default to undefined]
**notify** | **boolean** | Specifies whether to notify users about the shared file or not. | [optional] [default to undefined]
**sharingMessage** | **string** | The message to send when notifying about the shared file. | [optional] [default to undefined]

## Example

```typescript
import { SecurityInfoSimpleRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: SecurityInfoSimpleRequestDto = {
    share,
    notify,
    sharingMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
