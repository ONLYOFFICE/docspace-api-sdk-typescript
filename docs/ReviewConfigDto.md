# ReviewConfigDto

How tracked changes are displayed when the document opens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewDisplay** | **string** | How the editors render tracked changes at first: with the markup, in a simplified markup, as the final text,  or as the original text. A session that may not write opens on the final text. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ReviewConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: ReviewConfigDto = {
    reviewDisplay,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
