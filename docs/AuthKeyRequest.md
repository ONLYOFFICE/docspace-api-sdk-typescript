# AuthKeyRequest

One key of a provider and the value to store for it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The key name, as `GET api/2.0/settings/authservice` lists it in `props`. | [default to undefined]
**value** | **string** | The value to store. An empty string clears the key. | [default to undefined]
**title** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**type** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**_options** | **Array&lt;string&gt;** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**dependsOn** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**dependsOnValue** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]

## Example

```typescript
import { AuthKeyRequest } from '@onlyoffice/docspace-api-sdk';

const instance: AuthKeyRequest = {
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
