# UserConfig

The configuration parameters of the user currently viewing or editing the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The user ID. | [optional] [default to undefined]
**name** | **string** | The full name of the user. | [optional] [default to undefined]
**image** | **string** | The path to the user\&#39;s avatar. | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** | Roles | [optional] [default to undefined]

## Example

```typescript
import { UserConfig } from '@onlyoffice/docspace-api-typescript';

const instance: UserConfig = {
    id,
    name,
    image,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
