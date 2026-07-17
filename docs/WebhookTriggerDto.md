# WebhookTriggerDto

The webhook trigger with its availability for the current user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The trigger name. | [optional] [default to undefined]
**id** | **number** | The trigger bit value. | [optional] [default to undefined]
**available** | **boolean** | Specifies whether this trigger is available for the current user\'s role. | [optional] [default to undefined]

## Example

```typescript
import { WebhookTriggerDto } from '@onlyoffice/docspace-api-sdk';

const instance: WebhookTriggerDto = {
    name,
    id,
    available,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
