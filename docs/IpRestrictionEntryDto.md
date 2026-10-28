# IpRestrictionEntryDto

One allowed address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **string** | The IPv4 or IPv6 address. | [default to undefined]
**forAdmin** | **boolean** | Whether the address admits administrators only. | [optional] [default to undefined]

## Example

```typescript
import { IpRestrictionEntryDto } from '@onlyoffice/docspace-api-sdk';

const instance: IpRestrictionEntryDto = {
    ip,
    forAdmin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
