# ChatDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier of the AI chat session. | [optional] [default to undefined]
**title** | **string** | The display title of the chat session. | [optional] [default to undefined]
**createdOn** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**modifiedOn** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**createdBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChatDto } from '@onlyoffice/docspace-api-sdk';

const instance: ChatDto = {
    id,
    title,
    createdOn,
    modifiedOn,
    createdBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
