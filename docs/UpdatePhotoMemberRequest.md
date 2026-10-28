# UpdatePhotoMemberRequest

The request parameters for updating a photo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | **string** | The address the portal downloads the new avatar from. It has to be absolute or relative to the portal, and it  has to use HTTPS unless the request itself came over HTTP; an address the portal refuses to fetch is rejected.  It is required - an empty value is answered with 400 rather than clearing the avatar. | [optional] [default to undefined]

## Example

```typescript
import { UpdatePhotoMemberRequest } from '@onlyoffice/docspace-api-sdk';

const instance: UpdatePhotoMemberRequest = {
    files,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
