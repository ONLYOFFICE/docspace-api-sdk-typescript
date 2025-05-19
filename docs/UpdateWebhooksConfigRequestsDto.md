# UpdateWebhooksConfigRequestsDto

The request parameters for updating the webhook configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The human-readable name of the webhook configuration. | [default to undefined]
**uri** | **string** | The destination URL where the webhook events will be sent. | [default to undefined]
**secretKey** | **string** | The webhook secret key used to sign the webhook payloads for the security verification. | [optional] [default to undefined]
**enabled** | **boolean** | Specifies whether the webhook configuration is active or not. | [optional] [default to undefined]
**ssl** | **boolean** | Specifies whether the SSL certificate verification is required or not. | [optional] [default to undefined]
**triggers** | [**WebhookTrigger**](WebhookTrigger.md) |  | [optional] [default to undefined]
**targetId** | **string** | Target ID | [optional] [default to undefined]
**id** | **number** | The webhook configuration ID. | [optional] [default to undefined]

## Example

```typescript
import { UpdateWebhooksConfigRequestsDto } from '@onlyoffice/docspace-api-typescript';

const instance: UpdateWebhooksConfigRequestsDto = {
    name,
    uri,
    secretKey,
    enabled,
    ssl,
    triggers,
    targetId,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
