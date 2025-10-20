# SecurityDto

The security information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webItemId** | **string** | The module ID. | [optional] [default to undefined]
**users** | [**Array&lt;EmployeeDto&gt;**](EmployeeDto.md) | The list of users with the access to the module. | [optional] [default to undefined]
**groups** | [**Array&lt;GroupSummaryDto&gt;**](GroupSummaryDto.md) | The list of groups with the access to the module. | [optional] [default to undefined]
**enabled** | **boolean** | Specifies if the security settings are enabled or not. | [optional] [default to undefined]
**isSubItem** | **boolean** | Specifies if the module is a subitem or not. | [optional] [default to undefined]

## Example

```typescript
import { SecurityDto } from '@onlyoffice/docspace-api-sdk';

const instance: SecurityDto = {
    webItemId,
    users,
    groups,
    enabled,
    isSubItem,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
