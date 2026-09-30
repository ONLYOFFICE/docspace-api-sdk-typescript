# AmazonS3RegionArrayWrapper

The successful API response containing the list of AmazonS3RegionDto objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**Array&lt;AmazonS3RegionDto&gt;**](AmazonS3RegionDto.md) | The list of AmazonS3RegionDto objects returned by the operation. | [optional] [default to undefined]
**count** | **number** | The total number of items in the response | [optional] [default to undefined]
**links** | [**Array&lt;GetPortalPrices200ResponseLinksInner&gt;**](GetPortalPrices200ResponseLinksInner.md) | List of links related to the response | [optional] [default to undefined]
**status** | **number** | HTTP status code of the response | [optional] [default to undefined]
**statusCode** | **number** | HTTP status code of the response (duplicate of status) | [optional] [default to undefined]

## Example

```typescript
import { AmazonS3RegionArrayWrapper } from '@onlyoffice/docspace-api-sdk';

const instance: AmazonS3RegionArrayWrapper = {
    response,
    count,
    links,
    status,
    statusCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
