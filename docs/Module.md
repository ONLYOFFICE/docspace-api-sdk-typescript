# Module

The descriptor of a portal module: what it is called, where it starts and how it is pictured.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the module. It is the same in every portal and in every language, so use it rather than the  title to tell modules apart. | [optional] [default to undefined]
**appName** | **string** | The short system name of the module, the one that appears in its addresses and in the portal configuration.  Unlike the title it is not translated. | [optional] [default to undefined]
**title** | **string** | The display name of the module, already translated for the calling account, so it changes with the language  and must not be compared against a fixed string. | [optional] [default to undefined]
**link** | **string** | The address of the start page of the module, to be opened in a browser rather than called as an API. | [optional] [default to undefined]
**iconUrl** | **string** | The address of the small icon of the module, meant for a menu entry. | [optional] [default to undefined]
**imageUrl** | **string** | The address of the large image of the module, meant for a tile or a start screen. | [optional] [default to undefined]
**helpUrl** | **string** | The address of the help section of the module. It is empty when the portal publishes no help for it. | [optional] [default to undefined]
**description** | **string** | The one-line description of the module shown next to its title, translated for the calling account. | [optional] [default to undefined]
**isPrimary** | **boolean** | Whether the portal opens this module first when no other destination is given. | [optional] [default to undefined]

## Example

```typescript
import { Module } from '@onlyoffice/docspace-api-sdk';

const instance: Module = {
    id,
    appName,
    title,
    link,
    iconUrl,
    imageUrl,
    helpUrl,
    description,
    isPrimary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
