# Module

The module information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The module ID. | [optional] [default to undefined]
**appName** | **string** | The module product class name. | [optional] [default to undefined]
**title** | **string** | The module product class name. | [optional] [default to undefined]
**link** | **string** | The URL to the module start page. | [optional] [default to undefined]
**iconUrl** | **string** | The module icon URL. | [optional] [default to undefined]
**imageUrl** | **string** | The module large image URL. | [optional] [default to undefined]
**helpUrl** | **string** | The module help URL. | [optional] [default to undefined]
**description** | **string** | The module description. | [optional] [default to undefined]
**isPrimary** | **boolean** | Specifies if the module is primary or not. | [optional] [default to undefined]

## Example

```typescript
import { Module } from '@onlyoffice/docspace-api-typescript';

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
