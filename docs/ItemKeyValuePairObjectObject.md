# ItemKeyValuePairObjectObject

One entry of a keyed collection, carried as an explicit pair of `key` and `value` fields instead of as a member  of a JSON object, so that the key is not restricted to a string and the entries keep the order they are sent in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **any** |  | [optional] [default to undefined]
**value** | **any** |  | [optional] [default to undefined]

## Example

```typescript
import { ItemKeyValuePairObjectObject } from '@onlyoffice/docspace-api-sdk';

const instance: ItemKeyValuePairObjectObject = {
    key,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
