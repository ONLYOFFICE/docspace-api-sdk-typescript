# ApiKeyResponseDto

The response data for the API key operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The API key unique identifier. | [default to undefined]
**name** | **string** | The API key name. | [default to undefined]
**key** | **string** | The full API key value (only returned when creating a new key). | [default to undefined]
**keyPostfix** | **string** | The API key postfix (used for identification). | [optional] [default to undefined]
**permissions** | **Array&lt;string&gt;** | The list of permissions granted to the API key. | [default to undefined]
**lastUsed** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**createOn** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**createBy** | [**EmployeeDto**](EmployeeDto.md) |  | [optional] [default to undefined]
**expiresAt** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**isActive** | **boolean** | Indicates whether the API key is active or not. | [default to undefined]

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
