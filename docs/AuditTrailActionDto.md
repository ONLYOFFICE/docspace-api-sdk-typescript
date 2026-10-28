# AuditTrailActionDto

One audit trail action, with the kind of change it stands for and the kind of object it applies to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageAction** | **string** | The action name to send as the `action` filter of `GET api/2.0/security/audit/events/filter`, and the value  that comes back as `actionId` on an event. | [optional] [default to undefined]
**actionType** | **string** | The kind of change the action makes, accepted by the `actionType` filter of the same operation. | [optional] [default to undefined]
**entity** | **string** | The kind of object the action applies to, accepted by the `entryType` filter. It is `None` for an action  that targets no object, such as a settings change, and an action with a second object type reports only the  first one here. | [optional] [default to undefined]

## Example

```typescript
import { AuditTrailActionDto } from '@onlyoffice/docspace-api-sdk';

const instance: AuditTrailActionDto = {
    messageAction,
    actionType,
    entity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
