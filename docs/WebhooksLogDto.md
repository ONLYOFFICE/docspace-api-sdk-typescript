# WebhooksLogDto

The webhook log parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The webhook log ID. | [optional] [default to undefined]
**configName** | **string** | The webhook configuration name. | [optional] [default to undefined]
**trigger** | [**WebhookTrigger**](WebhookTrigger.md) |  | [optional] [default to undefined]
**creationTime** | **string** | The webhook creation time. | [optional] [default to undefined]
**method** | **string** | The webhook method. | [optional] [default to undefined]
**route** | **string** | The webhook route. | [optional] [default to undefined]
**requestHeaders** | **string** | The webhook request headers. | [optional] [default to undefined]
**requestPayload** | **string** | The webhook request payload. | [optional] [default to undefined]
**responseHeaders** | **string** | The webhook response headers. | [optional] [default to undefined]
**responsePayload** | **string** | The webhook response payload. | [optional] [default to undefined]
**status** | **number** | The webhook status. | [optional] [default to undefined]
**delivery** | **string** | The webhook delivery time. | [optional] [default to undefined]

## Example

```typescript
import { WebhooksLogDto } from '@onlyoffice/docspace-api-typescript';

const instance: WebhooksLogDto = {
    id,
    configName,
    trigger,
    creationTime,
    method,
    route,
    requestHeaders,
    requestPayload,
    responseHeaders,
    responsePayload,
    status,
    delivery,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
