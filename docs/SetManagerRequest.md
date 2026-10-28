# SetManagerRequest

The request for setting a group manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | The account to make the manager. It has to exist, otherwise the operation answers 404, and it is added to the  group at the same time, so it does not have to be a member beforehand. | [default to undefined]

## Example

```typescript
import { SetManagerRequest } from '@onlyoffice/docspace-api-sdk';

const instance: SetManagerRequest = {
    userId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
