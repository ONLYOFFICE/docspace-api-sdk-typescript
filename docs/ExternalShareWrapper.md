# ExternalShareWrapper


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**ExternalShareDto**](ExternalShareDto.md) |  | [optional] [default to undefined]
**count** | **number** | The total number of items in the response | [optional] [default to undefined]
**links** | [**Array&lt;GetPortalPrices200ResponseLinksInner&gt;**](GetPortalPrices200ResponseLinksInner.md) | List of links related to the response | [optional] [default to undefined]
**status** | **number** | HTTP status code of the response | [optional] [default to undefined]
**statusCode** | **number** | HTTP status code of the response (duplicate of status) | [optional] [default to undefined]

## Example

```typescript
import { ExternalShareWrapper } from '@onlyoffice/docspace-api-sdk';

const instance: ExternalShareWrapper = {
    response,
    count,
    links,
    status,
    statusCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
