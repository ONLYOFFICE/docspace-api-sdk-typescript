# TfaRequestsDto

The request parameters for configuring the Two-Factor Authentication (TFA) settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TfaRequestsDtoType**](TfaRequestsDtoType.md) |  | [default to undefined]
**id** | **string** | The ID of the user for whom the TFA settings are being configured. | [default to undefined]
**trustedIps** | **Array&lt;string&gt;** | The list of IP addresses that bypass TFA verification. | [optional] [default to undefined]
**mandatoryUsers** | **Array&lt;string&gt;** | The list of user IDs for whom TFA is mandatory. | [optional] [default to undefined]
**mandatoryGroups** | **Array&lt;string&gt;** | The list group IDs whose members must use TFA. | [optional] [default to undefined]

## Example

```typescript
import { TfaRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TfaRequestsDto = {
    type,
    id,
    trustedIps,
    mandatoryUsers,
    mandatoryGroups,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
