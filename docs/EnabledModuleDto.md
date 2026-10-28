# EnabledModuleDto

One portal module the calling user may open.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The module\'s product class name, HTML-escaped. It is a display-oriented identifier and not the GUID the  access-settings operations work with, so it must not be passed to `GET api/2.0/settings/security/{id}`. | [optional] [default to undefined]
**title** | **string** | The module name in the portal language, HTML-escaped and ready to be rendered as text. | [optional] [default to undefined]

## Example

```typescript
import { EnabledModuleDto } from '@onlyoffice/docspace-api-sdk';

const instance: EnabledModuleDto = {
    id,
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
