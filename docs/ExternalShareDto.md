# ExternalShareDto

The external sharing information and validation data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**Status**](Status.md) |  | [optional] [default to undefined]
**id** | **string** | The external data ID. | [optional] [default to undefined]
**title** | **string** | The external data title. | [optional] [default to undefined]
**tenantId** | **number** | The tenant ID. | [optional] [default to undefined]
**entityId** | **string** | The unique identifier of the shared entity. | [optional] [default to undefined]
**entryTitle** | **string** | The title of the shared entry. | [optional] [default to undefined]
**shared** | **boolean** | Specifies whether to share the external data or not. | [optional] [default to undefined]
**linkId** | **string** | The link ID of the external data. | [optional] [default to undefined]
**isAuthenticated** | **boolean** | Specifies whether the user is authenticated or not. | [optional] [default to undefined]

## Example

```typescript
import { ExternalShareDto } from '@onlyoffice/docspace-api-sdk';

const instance: ExternalShareDto = {
    status,
    id,
    title,
    tenantId,
    entityId,
    entryTitle,
    shared,
    linkId,
    isAuthenticated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
