# DocsCloudTenant

Represents a DocsCloud tenant of a portal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dedicatedResourceExId** | **number** | The external ID of the dedicated resource the tenant is hosted on. | [optional] [default to undefined]
**alias** | **string** | The tenant alias. | [optional] [default to undefined]
**name** | **string** | The tenant name. | [optional] [default to undefined]
**modifiedDate** | **string** | The date and time when the tenant was last modified. | [optional] [default to undefined]
**customerId** | **string** | The customer ID. | [optional] [default to undefined]
**customerName** | **string** | The customer name. | [optional] [default to undefined]
**endDate** | **string** | The date and time when the tenant subscription ends. | [optional] [default to undefined]
**resourceType** | **number** | The resource type. | [optional] [default to undefined]
**isActive** | **boolean** | Whether the tenant is active (the end date is in the future). | [optional] [default to undefined]
**address** | **string** | The tenant address. | [optional] [default to undefined]
**payment** | [**DocsCloudPayment**](DocsCloudPayment.md) | The tenant payment information. | [optional] [default to undefined]

## Example

```typescript
import { DocsCloudTenant } from '@onlyoffice/docspace-api-sdk';

const instance: DocsCloudTenant = {
    dedicatedResourceExId,
    alias,
    name,
    modifiedDate,
    customerId,
    customerName,
    endDate,
    resourceType,
    isActive,
    address,
    payment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
