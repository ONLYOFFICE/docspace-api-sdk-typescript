# LoginEventDto

The login event parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The login event ID. | [optional] [default to undefined]
**date** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**user** | **string** | The user name of the login event. | [optional] [default to undefined]
**userId** | **string** | The user ID of the login event. | [optional] [default to undefined]
**login** | **string** | The user login of the login event. | [optional] [default to undefined]
**action** | **string** | The login event action. | [optional] [default to undefined]
**actionId** | [**MessageAction**](MessageAction.md) |  | [optional] [default to undefined]
**ip** | **string** | The login event IP. | [optional] [default to undefined]
**country** | **string** | The login event country. | [optional] [default to undefined]
**city** | **string** | The login event city. | [optional] [default to undefined]
**browser** | **string** | The login event browser. | [optional] [default to undefined]
**platform** | **string** | The login event platform. | [optional] [default to undefined]
**page** | **string** | The login event page. | [optional] [default to undefined]

## Example

```typescript
import { LoginEventDto } from '@onlyoffice/docspace-api-typescript';

const instance: LoginEventDto = {
    id,
    date,
    user,
    userId,
    login,
    action,
    actionId,
    ip,
    country,
    city,
    browser,
    platform,
    page,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
