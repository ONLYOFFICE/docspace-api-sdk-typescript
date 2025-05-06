# PageableResponseClientInfoResponse

The response containing paginated client information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | The paginated client data. | [optional] [default to undefined]
**limit** | **number** | The maximum number of results returned per page. | [optional] [default to undefined]
**last_client_id** | **string** | The identifier of the last retrieved client. | [optional] [default to undefined]
**last_created_on** | **string** | The creation date of the last retrieved client. | [optional] [default to undefined]

## Example

```typescript
import { PageableResponseClientInfoResponse } from '@onlyoffice/docspace-api-typescript';

const instance: PageableResponseClientInfoResponse = {
    data,
    limit,
    last_client_id,
    last_created_on,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
