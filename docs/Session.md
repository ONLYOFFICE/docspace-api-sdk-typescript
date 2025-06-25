# Session

Represents a session with reserved amount and currency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sessionId** | **number** | Unique identifier of the session. | [optional] [default to undefined]
**reservedAmount** | **number** | Amount reserved for the session. | [optional] [default to undefined]
**currency** | **string** | The three-character ISO 4217 currency symbol of the reserved amount. | [optional] [default to undefined]

## Example

```typescript
import { Session } from '@onlyoffice/docspace-api-typescript';

const instance: Session = {
    sessionId,
    reservedAmount,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
