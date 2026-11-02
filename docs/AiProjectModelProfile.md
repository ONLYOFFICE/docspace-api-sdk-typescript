# AiProjectModelProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The profile id. | [default to undefined]
**name** | **string** | The profile name; empty when the profile is gone. | [default to undefined]
**provider** | **string** | The provider type of the profile; `null` when the profile is gone. | [default to undefined]
**available** | **boolean** | `false` when the profile is gone or cannot chat: the project\'s rounds are refused. | [default to undefined]

## Example

```typescript
import { AiProjectModelProfile } from '@onlyoffice/docspace-api-sdk';

const instance: AiProjectModelProfile = {
    id,
    name,
    provider,
    available,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
