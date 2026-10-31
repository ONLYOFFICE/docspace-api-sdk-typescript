# TenantDeepLinkSettingsWrapper

The successful API response containing the TenantDeepLinkSettingsDto object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**TenantDeepLinkSettingsDto**](TenantDeepLinkSettingsDto.md) | The TenantDeepLinkSettingsDto object returned by the operation. | [optional] [default to undefined]
**count** | **number** | How many items this response carries: the length of the page for a list, 1 for a single object | [optional] [default to undefined]
**total** | **number** | How many items the whole list holds across all pages, for working out how many pages to request. Sent only by the operations that page their results, and left out of every other response | [optional] [default to undefined]
**links** | [**Array&lt;GetPortalPrices200ResponseLinksInner&gt;**](GetPortalPrices200ResponseLinksInner.md) | List of links related to the response | [optional] [default to undefined]
**status** | **number** | HTTP status code of the response | [optional] [default to undefined]
**statusCode** | **number** | HTTP status code of the response (duplicate of status) | [optional] [default to undefined]

## Example

```typescript
import { TenantDeepLinkSettingsWrapper } from '@onlyoffice/docspace-api-sdk';

const instance: TenantDeepLinkSettingsWrapper = {
    response,
    count,
    total,
    links,
    status,
    statusCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
