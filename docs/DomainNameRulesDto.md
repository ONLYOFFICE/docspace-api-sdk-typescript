# DomainNameRulesDto

The rules a portal name is checked against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regex** | **string** | The pattern the portal name has to match. | [optional] [default to undefined]
**minLength** | **number** | The shortest portal name accepted. | [optional] [default to undefined]
**maxLength** | **number** | The longest portal name accepted. | [optional] [default to undefined]

## Example

```typescript
import { DomainNameRulesDto } from '@onlyoffice/docspace-api-sdk';

const instance: DomainNameRulesDto = {
    regex,
    minLength,
    maxLength,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
