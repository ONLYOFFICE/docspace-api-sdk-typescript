# AppDto

The portal application information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The application identifier (stable slug). The client maps this to its title, description and icon. | [optional] [default to undefined]
**enabled** | **boolean** | Whether the application is enabled for the current tenant. | [optional] [default to undefined]
**settings** | [**AppDtoSettings**](AppDtoSettings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AppDto } from '@onlyoffice/docspace-api-sdk';

const instance: AppDto = {
    id,
    enabled,
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
