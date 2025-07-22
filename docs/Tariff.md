# Tariff

The tariff parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The tariff ID. | [optional] [default to undefined]
**state** | [**TariffState**](TariffState.md) |  | [optional] [default to undefined]
**dueDate** | **string** | The tariff due date. | [optional] [default to undefined]
**delayDueDate** | **string** | The tariff delay due date. | [optional] [default to undefined]
**licenseDate** | **string** | The tariff license date. | [optional] [default to undefined]
**customerId** | **string** | The tariff customer ID. | [optional] [default to undefined]
**quotas** | [**Array&lt;Quota&gt;**](Quota.md) | The list of tariff quotas. | [optional] [default to undefined]
**overdueQuotas** | [**Array&lt;Quota&gt;**](Quota.md) | The list of overdue tariff quotas. | [optional] [default to undefined]

## Example

```typescript
import { Tariff } from '@onlyoffice/docspace-api-sdk';

const instance: Tariff = {
    id,
    state,
    dueDate,
    delayDueDate,
    licenseDate,
    customerId,
    quotas,
    overdueQuotas,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
