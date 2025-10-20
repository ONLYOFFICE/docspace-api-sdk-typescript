# StartReassignRequestDto

The request parameters for starting the reassignment process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fromUserId** | **string** | The user ID whose data will be reassigned to another user. | [default to undefined]
**toUserId** | **string** | The user ID to whom all the data will be reassigned. | [default to undefined]
**deleteProfile** | **boolean** | Specifies whether to delete a profile when the data reassignment will be finished or not. | [optional] [default to undefined]

## Example

```typescript
import { StartReassignRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: StartReassignRequestDto = {
    fromUserId,
    toUserId,
    deleteProfile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
