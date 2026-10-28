# DocsCloudDevPackRequestDto

The request parameters for switching the Docs Connect subscription to Docs Connect Dev Pack, or for calculating  the cost of that switch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **number** | The number of users to subscribe to Docs Connect Dev Pack for. It must be at least the number of users of  the currently purchased Docs Connect subscription, and at least the Docs Connect Dev Pack minimum configured  for the installation, which is 10 users by default; a smaller value is rejected with 400. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudDevPackRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudDevPackRequestDto = {
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
