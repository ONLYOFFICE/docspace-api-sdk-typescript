# CookieSettingsRequestsDto

The request parameters for managing cookie settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lifeTime** | **number** | The cookie lifetime in minutes. | [optional] [default to undefined]
**enabled** | **boolean** | Specifies whether the cookie settings are enabled or disabled. | [optional] [default to undefined]

## Example

```typescript
import { CookieSettingsRequestsDto } from '@onlyoffice/docspace-api-typescript';

const instance: CookieSettingsRequestsDto = {
    lifeTime,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
