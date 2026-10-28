# FeedbackConfigDto

The settings for the Feedback & Support menu button.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The absolute URL to the website address which will be opened when clicking the Feedback & Support menu button. | [optional] [default to undefined]
**visible** | **boolean** | Whether the support button is shown. The portal always asks for it to be shown. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { FeedbackConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: FeedbackConfigDto = {
    url,
    visible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
