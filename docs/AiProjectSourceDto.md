# AiProjectSourceDto

A room linked to an AI project as its source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | ID of the room. | [default to undefined]
**title** | **string** | Room title. | [default to undefined]
**logo** | [**LogoDto**](LogoDto.md) | Room logo. | [optional] [default to undefined]

## Example

```typescript
import { AiProjectSourceDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiProjectSourceDto = {
    id,
    title,
    logo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
