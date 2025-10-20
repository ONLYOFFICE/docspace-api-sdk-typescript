# WebhooksConfigDto

The webhook configuration parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The webhook ID. | [default to undefined]
**name** | **string** | The webhook name. | [optional] [default to undefined]
**uri** | **string** | The webhook URI. | [optional] [default to undefined]
**enabled** | **boolean** | Specifies if the webhooks are enabled or not. | [optional] [default to undefined]
**ssl** | **boolean** | The webhook SSL verification (enabled or not). | [optional] [default to undefined]
**triggers** | [**WebhookTrigger**](WebhookTrigger.md) |  | [optional] [default to undefined]
**targetId** | **string** | The webhook target ID. | [optional] [default to undefined]
**createdBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]
**createdOn** | **string** | The date and time when the webhook was created. | [optional] [default to undefined]
**modifiedBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]
**modifiedOn** | **string** | The date and time when the webhook was modified. | [optional] [default to undefined]
**lastFailureOn** | **string** | The date and time of the webhook last failure. | [optional] [default to undefined]
**lastFailureContent** | **string** | The webhook last failure content. | [optional] [default to undefined]
**lastSuccessOn** | **string** | The date and time of the webhook last success. | [optional] [default to undefined]

## Example

```typescript
import { WebhooksConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: WebhooksConfigDto = {
    id,
    name,
    uri,
    enabled,
    ssl,
    triggers,
    targetId,
    createdBy,
    createdOn,
    modifiedBy,
    modifiedOn,
    lastFailureOn,
    lastFailureContent,
    lastSuccessOn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
