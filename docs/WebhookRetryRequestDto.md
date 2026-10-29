# WebhookRetryRequestDto

Which past webhook deliveries are sent again.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **Array&lt;number&gt;** | The delivery records to send again, by the `id` values `GET api/2.0/settings/webhooks/log` reports. The bound  is per call: a longer batch has to be split into several calls. | [optional] [default to undefined]

## Example

```typescript
import { WebhookRetryRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: WebhookRetryRequestDto = {
    ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
