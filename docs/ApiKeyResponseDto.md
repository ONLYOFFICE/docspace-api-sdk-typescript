# ApiKeyResponseDto

The response data for the API key operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the key. This is the value to pass to `PUT api/2.0/keys/{keyId}` and  `DELETE api/2.0/keys/{keyId}`. | [default to undefined]
**name** | **string** | The label given to the key when it was created or last updated. | [default to undefined]
**key** | **string** | The secret to send in the `Authorization` header as `Bearer sk-...`. It is filled in only by the answer of  `POST api/2.0/keys` and cannot be read again afterwards, so it has to be stored at that moment. | [default to undefined]
**keyPostfix** | **string** | The last four characters of the secret. It is the only part of the secret that later reads expose, and it is  meant for telling keys apart in a list. | [optional] [default to undefined]
**permissions** | **Array&lt;string&gt;** | The scopes the key may use, as accepted by `GET api/2.0/keys/permissions`. An empty list means the key has no  scope restrictions. | [default to undefined]
**lastUsed** | [**ApiDateTime**](ApiDateTime.md) | The UTC moment the key was last used to authenticate a request. It is empty for a key that has never been  used. | [optional] [default to undefined]
**createOn** | [**ApiDateTime**](ApiDateTime.md) | The UTC moment the key was created. | [optional] [default to undefined]
**createBy** | [**EmployeeDto**](EmployeeDto.md) | The portal member who created the key, and whose access the key acts with. | [optional] [default to undefined]
**expiresAt** | [**ApiDateTime**](ApiDateTime.md) | The UTC moment the key stops working. It is empty for a key created without `expiresInDays`, which never  expires. | [optional] [default to undefined]
**isActive** | **boolean** | Whether the key may authenticate requests. A key deactivated through `PUT api/2.0/keys/{keyId}` stays in the  list with this field set to false. | [default to undefined]

## Example

```typescript
import { ApiKeyResponseDto } from '@onlyoffice/docspace-api-sdk';

const instance: ApiKeyResponseDto = {
    id,
    name,
    key,
    keyPostfix,
    permissions,
    lastUsed,
    createOn,
    createBy,
    expiresAt,
    isActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
