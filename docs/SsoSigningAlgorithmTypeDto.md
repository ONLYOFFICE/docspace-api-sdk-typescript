# SsoSigningAlgorithmTypeDto

The signing algorithms the SSO settings accept.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rsaSha1** | **string** | The RSA-SHA1 signing algorithm, which the built-in configuration uses. SHA-1 is the weakest of the three  and some identity providers no longer accept it. | [optional] [readonly] [default to undefined]
**rsaSha256** | **string** | The RSA-SHA256 signing algorithm. | [optional] [readonly] [default to undefined]
**rsaSha512** | **string** | The RSA-SHA512 signing algorithm. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { SsoSigningAlgorithmTypeDto } from '@onlyoffice/docspace-api-sdk';

const instance: SsoSigningAlgorithmTypeDto = {
    rsaSha1,
    rsaSha256,
    rsaSha512,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
