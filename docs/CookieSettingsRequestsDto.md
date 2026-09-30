# CookieSettingsRequestsDto

How long an authentication session of the portal stays valid, and whether that limit is applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lifeTime** | **number** | How long, in minutes, a session issued from now on remains valid. A value above 9999 is clamped to 9999  rather than refused, and 0 or less clears the number, which together with `enabled` leaves sessions that  never expire on their own. Any positive value invalidates every session issued before this call, the  caller\'s included, so the client has to keep the fresh cookie the response carries. | [optional] [default to undefined]
**enabled** | **boolean** | Whether the stored lifetime is applied at all. While it is false the number is ignored and an issued session  is honoured for a year; while it is true the connections behind expired sessions are dropped as well. | [optional] [default to undefined]

## Example

```typescript
import { CookieSettingsRequestsDto } from '@onlyoffice/docspace-api-sdk';

const instance: CookieSettingsRequestsDto = {
    lifeTime,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
