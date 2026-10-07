# SetAppEnabledRequest

Whether a portal application is switched on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether the application is available in this portal. Switching it off leaves its settings document stored, so  switching it back on restores the configuration it had; connected clients are told of the new state without a  reload. | [optional] [default to undefined]

## Example

```typescript
import { SetAppEnabledRequest } from '@onlyoffice/docspace-api-sdk';

const instance: SetAppEnabledRequest = {
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
