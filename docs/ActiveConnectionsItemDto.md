# ActiveConnectionsItemDto

The active connection item parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The active connection ID. | [optional] [default to undefined]
**tenantId** | **number** | The tenant ID. | [optional] [default to undefined]
**userId** | **string** | The user ID. | [optional] [default to undefined]
**mobile** | **boolean** | Specifies if the active connection has a mobile phone or not. | [optional] [default to undefined]
**ip** | **string** | The IP address of the active connection. | [optional] [default to undefined]
**country** | **string** | The active connection country. | [optional] [default to undefined]
**city** | **string** | The active connection city. | [optional] [default to undefined]
**browser** | **string** | The active connection browser. | [optional] [default to undefined]
**platform** | **string** | The active connection platform. | [optional] [default to undefined]
**date** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**page** | **string** | The active connection page. | [optional] [default to undefined]

## Example

```typescript
import { ActiveConnectionsItemDto } from '@onlyoffice/docspace-api-typescript';

const instance: ActiveConnectionsItemDto = {
    id,
    tenantId,
    userId,
    mobile,
    ip,
    country,
    city,
    browser,
    platform,
    date,
    page,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
