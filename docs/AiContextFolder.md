# AiContextFolder

The rooms of one account the caller can connect as context, grouped under the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud** | **string** | The account the rooms belong to; `docspace` for this portal. | [default to undefined]
**rooms** | [**Array&lt;AiContextRoom&gt;**](AiContextRoom.md) | The rooms of that account the caller can connect. | [default to undefined]

## Example

```typescript
import { AiContextFolder } from '@onlyoffice/docspace-api-sdk';

const instance: AiContextFolder = {
    cloud,
    rooms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
