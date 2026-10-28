# StorageRequestDto

Which storage provider the portal is pointed at, and the credentials it needs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module** | **string** | The storage provider to switch to, by the identifier the matching listing operation reports - `default` for  the built-in local storage. The provider has to be available on the server, which that listing reports as  `isSet`, otherwise the request is refused with 400; sending the module already in use changes nothing. | [default to undefined]
**props** | [**Array&lt;ItemKeyValuePairStringString&gt;**](ItemKeyValuePairStringString.md) | The credentials the provider expects, as the name and value pairs it defines - a bucket, a region and an  access key for an Amazon S3 storage, for instance. Read the expected names from the entry of that provider in  the listing operation; they differ per provider, so there is no fixed set. | [optional] [default to undefined]

## Example

```typescript
import { StorageRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: StorageRequestDto = {
    module,
    props,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
