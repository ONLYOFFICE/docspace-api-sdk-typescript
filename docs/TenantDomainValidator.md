# TenantDomainValidator

The domain validator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regex** | **string** | The regex string to validate a domain. | [optional] [readonly] [default to undefined]
**minLength** | **number** | The minimum length of the valid domain. | [optional] [readonly] [default to undefined]
**maxLength** | **number** | The maximum length of the valid domain. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { TenantDomainValidator } from '@onlyoffice/docspace-api-sdk';

const instance: TenantDomainValidator = {
    regex,
    minLength,
    maxLength,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
