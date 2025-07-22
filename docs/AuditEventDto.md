# AuditEventDto

The audit event parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The audit event ID. | [optional] [default to undefined]
**date** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**user** | **string** | The name of the user who triggered the audit event. | [optional] [default to undefined]
**userId** | **string** | The ID of the user who triggered the audit event. | [optional] [default to undefined]
**action** | **string** | The audit event action. | [optional] [default to undefined]
**actionId** | [**MessageAction**](MessageAction.md) |  | [optional] [default to undefined]
**ip** | **string** | The audit event IP. | [optional] [default to undefined]
**country** | **string** | The audit event country. | [optional] [default to undefined]
**city** | **string** | The audit event city. | [optional] [default to undefined]
**browser** | **string** | The audit event browser. | [optional] [default to undefined]
**platform** | **string** | The audit event platform. | [optional] [default to undefined]
**page** | **string** | The audit event page. | [optional] [default to undefined]
**actionType** | [**ActionType**](ActionType.md) |  | [optional] [default to undefined]
**product** | [**ProductType**](ProductType.md) |  | [optional] [default to undefined]
**module** | [**ModuleType**](ModuleType.md) |  | [optional] [default to undefined]
**target** | **Array&lt;string&gt;** | The list of target objects affected by the audit event (e.g., document ID, user account). | [optional] [default to undefined]
**entries** | [**Array&lt;EntryType&gt;**](EntryType.md) | The list of audit entry types (e.g., Folder, User, File). | [optional] [default to undefined]
**context** | **string** | The audit event context. | [optional] [default to undefined]

## Example

```typescript
import { AuditEventDto } from '@onlyoffice/docspace-api-sdk';

const instance: AuditEventDto = {
    id,
    date,
    user,
    userId,
    action,
    actionId,
    ip,
    country,
    city,
    browser,
    platform,
    page,
    actionType,
    product,
    module,
    target,
    entries,
    context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
