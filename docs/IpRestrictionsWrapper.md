# IpRestrictionsWrapper

The successful API response containing the IpRestrictionsDto object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**IpRestrictionsDto**](IpRestrictionsDto.md) | The IpRestrictionsDto object returned by the operation. | [optional] [default to undefined]
**count** | **number** | The total number of items in the response | [optional] [default to undefined]
**links** | [**Array&lt;GetPortalPrices200ResponseLinksInner&gt;**](GetPortalPrices200ResponseLinksInner.md) | List of links related to the response | [optional] [default to undefined]
**status** | **number** | HTTP status code of the response | [optional] [default to undefined]
**statusCode** | **number** | HTTP status code of the response (duplicate of status) | [optional] [default to undefined]

## Example

```typescript
import { IpRestrictionsWrapper } from '@onlyoffice/docspace-api-sdk';

const instance: IpRestrictionsWrapper = {
    response,
    count,
    links,
    status,
    statusCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
