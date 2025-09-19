# RoomLinkRequest

The room link parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linkId** | **string** | The room link ID. | [optional] [default to undefined]
**access** | [**FileShare**](FileShare.md) |  | [optional] [default to undefined]
**expirationDate** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**internal** | **boolean** | The link scope, whether it is internal or not. | [optional] [default to undefined]
**title** | **string** | The link name. | [optional] [default to undefined]
**linkType** | [**LinkType**](LinkType.md) |  | [optional] [default to undefined]
**password** | **string** | The link password. | [optional] [default to undefined]
**denyDownload** | **boolean** | Specifies if downloading the file from the link is disabled or not. | [optional] [default to undefined]

## Example

```typescript
import { RoomLinkRequest } from '@onlyoffice/docspace-api-sdk';

const instance: RoomLinkRequest = {
    linkId,
    access,
    expirationDate,
    internal,
    title,
    linkType,
    password,
    denyDownload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
