# PluginsDto

The plugins parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Specifies if the plugins are enabled or not. | [optional] [default to undefined]
**upload** | **boolean** | Specifies if the plugins can be uploaded or not. | [optional] [default to undefined]
**_delete** | **boolean** | Specifies if the plugins can be deleted or not. | [optional] [default to undefined]

## Example

```typescript
import { PluginsDto } from '@onlyoffice/docspace-api-sdk';

const instance: PluginsDto = {
    enabled,
    upload,
    _delete,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
