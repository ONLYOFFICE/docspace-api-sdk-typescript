# ActiveServiceDto

Represents an active wallet service (quota) of the current portal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **string** | The name of the service. | [optional] [default to undefined]
**serviceUnit** | **string** | The unit of measurement for the service. | [optional] [default to undefined]
**subscription** | **boolean** | Indicates whether the service is subscription-based. | [optional] [default to undefined]
**title** | **string** | The title of the service. | [optional] [default to undefined]
**limit** | **number** | The service limit. Populated only for the subscription-based services. | [optional] [default to undefined]
**used** | **number** | The current service usage. Populated only for the subscription-based services. | [optional] [default to undefined]

## Example

```typescript
import { ActiveServiceDto } from '@onlyoffice/docspace-api-sdk';

const instance: ActiveServiceDto = {
    service,
    serviceUnit,
    subscription,
    title,
    limit,
    used,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
