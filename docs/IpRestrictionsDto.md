# IpRestrictionsDto

The parameters for configuring new IP restriction settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipRestrictions** | [**Array&lt;IpRestrictionBase&gt;**](IpRestrictionBase.md) | The list of IP restriction addresses. | [optional] [default to undefined]
**enable** | **boolean** | Specifies whether to enable IP restrictions or not. | [optional] [default to undefined]

## Example

```typescript
import { IpRestrictionsDto } from '@onlyoffice/docspace-api-sdk';

const instance: IpRestrictionsDto = {
    ipRestrictions,
    enable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
