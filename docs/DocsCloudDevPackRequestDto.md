# DocsCloudDevPackRequestDto

The request parameters for switching the DocsCloud subscription to DocsCloudDevPack, or for calculating  the cost of that switch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **number** | The number of users to subscribe to DocsCloudDevPack for. It must be at least the number of users of  the currently purchased DocsCloud subscription, and at least the DocsCloudDevPack minimum configured  for the installation, which is 10 users by default; a smaller value is rejected with 400. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudDevPackRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudDevPackRequestDto = {
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
