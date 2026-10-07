# IpRestrictionDto

The IP restiction parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The IP restiction ID. | [optional] [default to undefined]
**tenantId** | **number** | The tenant ID. | [optional] [default to undefined]
**ip** | **string** | The IP address. | [default to undefined]
**forAdmin** | **boolean** | Specifies if the IP address is for administrator users only or not. | [optional] [default to undefined]

## Example

```typescript
import { IpRestrictionDto } from '@onlyoffice/docspace-api-sdk';

const instance: IpRestrictionDto = {
    id,
    tenantId,
    ip,
    forAdmin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
