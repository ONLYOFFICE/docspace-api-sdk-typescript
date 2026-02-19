# MessageDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The unique identifier of the message. | [optional] [default to undefined]
**role** | [**Role**](Role.md) |  | [optional] [default to undefined]
**contents** | [**Array&lt;MessageContentDto&gt;**](MessageContentDto.md) | The ordered collection of content blocks that make up the message body (text, tool calls, or attachments). | [optional] [default to undefined]
**createdOn** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MessageDto } from '@onlyoffice/docspace-api-sdk';

const instance: MessageDto = {
    id,
    role,
    contents,
    createdOn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
