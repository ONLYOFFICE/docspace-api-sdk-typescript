# CreateTagRequestDto

The parameters for adding a custom tag to the portal catalog of room tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the tag to create, which is also its identity: tags are addressed by name everywhere, there is no  separate identifier. It is stored exactly as sent, spacing and case included, and a name that is already in  the catalog gives back that tag instead of a second one. | [default to undefined]

## Example

```typescript
import { CreateTagRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CreateTagRequestDto = {
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
