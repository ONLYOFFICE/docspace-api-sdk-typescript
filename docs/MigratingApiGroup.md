# MigratingApiGroup

The migrating group parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shouldImport** | **boolean** | Specifies whether the API entity should be imported. | [optional] [default to undefined]
**groupName** | **string** | The group name. | [optional] [default to undefined]
**moduleName** | **string** | The group module name. | [optional] [default to undefined]
**userUidList** | **Array&lt;string&gt;** | The list of group user UIDs. | [optional] [default to undefined]

## Example

```typescript
import { MigratingApiGroup } from '@onlyoffice/docspace-api-sdk';

const instance: MigratingApiGroup = {
    shouldImport,
    groupName,
    moduleName,
    userUidList,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
