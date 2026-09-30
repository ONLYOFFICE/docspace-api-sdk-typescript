# CoverRequestDto

The picture and the colour a room is drawn with while it has no logo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **string** | The background colour the room is drawn with while it has no logo, as six hexadecimal digits with no leading  number sign. An empty value restores the default colour of the room type. | [optional] [default to undefined]
**cover** | **string** | The picture drawn on the room while it has no logo, named by an identifier from  `GET api/2.0/files/rooms/covers`. Any other value is rejected, and an empty value leaves the room without a  cover. | [optional] [default to undefined]

## Example

```typescript
import { CoverRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: CoverRequestDto = {
    color,
    cover,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
