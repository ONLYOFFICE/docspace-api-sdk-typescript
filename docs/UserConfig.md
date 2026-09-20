# UserConfig

The account the editors attribute the changes of this session to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The account the changes are recorded under. Two sessions carrying the same value are taken by the editors for  the same person. | [optional] [default to undefined]
**name** | **string** | The name shown next to the changes and in the list of participants. | [optional] [default to undefined]
**image** | **string** | An absolute address of the avatar shown for this participant. | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** | The filling roles this participant holds in the form being filled out. It is set only for a form in a virtual  data room, where the role decides which fields open for them. | [optional] [default to undefined]
**customerId** | **string** | Identifies the paying customer this participant belongs to, on deployments where the editors are licensed per  customer. | [optional] [default to undefined]

## Example

```typescript
import { UserConfig } from '@onlyoffice/docspace-api-sdk';

const instance: UserConfig = {
    id,
    name,
    image,
    roles,
    customerId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
