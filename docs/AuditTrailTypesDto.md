# AuditTrailTypesDto

The vocabularies the audit and login-history filters accept, one array of names per dimension of an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **Array&lt;string&gt;** | Every action name the build can record, spelled as the `action` filter of  `GET api/2.0/security/audit/events/filter` and `GET api/2.0/security/audit/login/filter` expects it. It is  the whole vocabulary, not the actions this portal has recorded, and only a handful of the names are the  sign-in actions the login filter accepts. | [optional] [default to undefined]
**actionTypes** | **Array&lt;string&gt;** | The kinds of change an action can stand for, spelled as the `actionType` filter of  `GET api/2.0/security/audit/events/filter` expects it. | [optional] [default to undefined]
**productTypes** | **Array&lt;string&gt;** | The products an action can belong to, spelled as the `productType` filter of  `GET api/2.0/security/audit/mappers` expects it. The audit trail itself cannot be filtered by product. | [optional] [default to undefined]
**moduleTypes** | **Array&lt;string&gt;** | The locations inside those products, spelled as the `moduleType` filter of  `GET api/2.0/security/audit/events/filter` and `GET api/2.0/security/audit/mappers` expects it. | [optional] [default to undefined]
**entryTypes** | **Array&lt;string&gt;** | The kinds of object an action can be applied to, spelled as the `entryType` filter of  `GET api/2.0/security/audit/events/filter` expects it. | [optional] [default to undefined]

## Example

```typescript
import { AuditTrailTypesDto } from '@onlyoffice/docspace-api-sdk';

const instance: AuditTrailTypesDto = {
    actions,
    actionTypes,
    productTypes,
    moduleTypes,
    entryTypes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
