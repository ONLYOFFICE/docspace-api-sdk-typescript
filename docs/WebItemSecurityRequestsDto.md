# WebItemSecurityRequestsDto

The request parameters for configuring security settings of a single web module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The module ID. | [default to undefined]
**enabled** | **boolean** | Controls whether the security restrictions are enforced for this module. | [optional] [default to undefined]
**subjects** | **Array&lt;string&gt;** | The collection of user and group identifiers granted access to the module. | [optional] [default to undefined]

## Example

```typescript
import { WebItemSecurityRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: WebItemSecurityRequestsDto = {
    id,
    enabled,
    subjects,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
