# TokenDiagnosticsDto

What the current token carries, for diagnostics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the authenticated identity. | [optional] [default to undefined]
**claims** | **Array&lt;string&gt;** | The claims of the identity, each formatted as type:value. | [optional] [default to undefined]

## Example

```typescript
import { TokenDiagnosticsDto } from '@onlyoffice/docspace-api-sdk';

const instance: TokenDiagnosticsDto = {
    name,
    claims,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
