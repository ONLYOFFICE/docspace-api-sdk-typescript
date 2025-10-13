# FileShareLink

A shareable link for a file with its configuration and status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier of the shared link. | [optional] [default to undefined]
**title** | **string** | The title of the shared content. | [optional] [default to undefined]
**shareLink** | **string** | The URL for accessing the shared content. | [optional] [default to undefined]
**expirationDate** | [**ApiDateTime**](ApiDateTime.md) |  | [optional] [default to undefined]
**linkType** | [**LinkType**](LinkType.md) |  | [optional] [default to undefined]
**password** | **string** | The password protection for accessing the shared content. | [optional] [default to undefined]
**denyDownload** | **boolean** | Indicates whether downloading of the shared content is prohibited. | [optional] [default to undefined]
**isExpired** | **boolean** | Indicates whether the shared link has expired. | [optional] [default to undefined]
**primary** | **boolean** | Indicates whether this is the primary shared link. | [optional] [default to undefined]
**internal** | **boolean** | Indicates whether the link is for the internal sharing only. | [optional] [default to undefined]
**requestToken** | **string** | The token for validating access requests. | [optional] [default to undefined]

## Example

```typescript
import { FileShareLink } from '@onlyoffice/docspace-api-sdk';

const instance: FileShareLink = {
    id,
    title,
    shareLink,
    expirationDate,
    linkType,
    password,
    denyDownload,
    isExpired,
    primary,
    internal,
    requestToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
