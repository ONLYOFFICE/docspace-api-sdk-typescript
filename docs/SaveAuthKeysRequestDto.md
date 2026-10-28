# SaveAuthKeysRequestDto

The keys to store for one third-party authorization or storage provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The internal key of the provider, such as `google` or `box`. Take it from the `name` of  `GET api/2.0/settings/authservice`. | [optional] [default to undefined]
**title** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**description** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**instruction** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**canSet** | **boolean** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**paid** | **boolean** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]
**props** | [**Array&lt;AuthKeyRequest&gt;**](AuthKeyRequest.md) | The keys of the provider with their new values, by the key names `GET api/2.0/settings/authservice` lists in  `props`. | [optional] [default to undefined]

## Example

```typescript
import { SaveAuthKeysRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: SaveAuthKeysRequestDto = {
    name,
    title,
    description,
    instruction,
    canSet,
    paid,
    props,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
