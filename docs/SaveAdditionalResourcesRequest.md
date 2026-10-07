# SaveAdditionalResourcesRequest

Which help and community resources the interface links to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDocsEnabled** | **boolean** | Whether the getting-started documents are offered. | [optional] [default to undefined]
**helpCenterEnabled** | **boolean** | Whether the help center is linked. | [optional] [default to undefined]
**feedbackAndSupportEnabled** | **boolean** | Whether the feedback and support link is shown. | [optional] [default to undefined]
**userForumEnabled** | **boolean** | Whether the user forum is linked. | [optional] [default to undefined]
**videoGuidesEnabled** | **boolean** | Whether the video guides are linked. | [optional] [default to undefined]
**licenseAgreementsEnabled** | **boolean** | Whether the license agreements are linked. | [optional] [default to undefined]
**lastModified** | **string** | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [default to undefined]

## Example

```typescript
import { SaveAdditionalResourcesRequest } from '@onlyoffice/docspace-api-sdk';

const instance: SaveAdditionalResourcesRequest = {
    startDocsEnabled,
    helpCenterEnabled,
    feedbackAndSupportEnabled,
    userForumEnabled,
    videoGuidesEnabled,
    licenseAgreementsEnabled,
    lastModified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
