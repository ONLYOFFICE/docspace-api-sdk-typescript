# PageableClientResponse

One page of full client records together with the next-page cursor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;ClientResponse&gt;**](ClientResponse.md) | The items on this page, at most as many as the requested limit. An empty array means there is nothing further to read. | [optional] [default to undefined]
**limit** | **number** | The page size that was applied to this request, between 1 and 50. | [optional] [default to undefined]
**last_client_id** | **string** | The cursor to send back as last_client_id to ask for the next page, together with last_created_on. It is null when the page is empty. | [optional] [default to undefined]
**last_created_on** | **string** | The cursor to send back as last_created_on to ask for the next page, together with last_client_id. It is null when the page is empty. | [optional] [default to undefined]

## Example

```typescript
import { PageableClientResponse } from '@onlyoffice/docspace-api-sdk';

const instance: PageableClientResponse = {
    data,
    limit,
    last_client_id,
    last_created_on,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
