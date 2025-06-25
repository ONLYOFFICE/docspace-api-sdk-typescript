# PageableModificationResponse

The response containing paginated modification information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | The paginated modification data. | [optional] [default to undefined]
**limit** | **number** | The maximum number of results returned per page. | [optional] [default to undefined]
**last_modified_on** | **string** | The date when the user consent was last modified. | [optional] [default to undefined]

## Example

```typescript
import { PageableModificationResponse } from '@onlyoffice/docspace-api-typescript';

const instance: PageableModificationResponse = {
    data,
    limit,
    last_modified_on,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
