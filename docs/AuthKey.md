# AuthKey

The authorization key parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The authorization key name. | [default to undefined]
**value** | **string** | The authorization key value. | [default to undefined]
**title** | **string** | The authorization key title. | [optional] [default to undefined]
**type** | **string** | The field type: text, password, select, toggle. | [optional] [default to undefined]
**_options** | **Array&lt;string&gt;** | The list of options for select type fields. | [optional] [default to undefined]
**dependsOn** | **string** | The name of another key this field depends on for visibility. | [optional] [default to undefined]
**dependsOnValue** | **string** | The value of ASC.Web.Studio.UserControls.Management.AuthKey.DependsOn key that makes this field visible. | [optional] [default to undefined]

## Example

```typescript
import { AuthKey } from '@onlyoffice/docspace-api-sdk';

const instance: AuthKey = {
    name,
    value,
    title,
    type,
    _options,
    dependsOn,
    dependsOnValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
