# IpRestrictionBase

The IP restiction base parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **string** | The IP address. | [default to undefined]
**forAdmin** | **boolean** | Specifies if the IP address is for administrator users only or not. | [optional] [default to undefined]

## Example

```typescript
import { IpRestrictionBase } from '@onlyoffice/docspace-api-sdk';

const instance: IpRestrictionBase = {
    ip,
    forAdmin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
