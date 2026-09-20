# CustomizationConfigDto

How the editor interface is dressed: branding, the buttons that lead back into the portal, and the behaviour of  review, mentions and form submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | **boolean** | Whether the About entry of the editor menu is shown. | [optional] [default to undefined]
**customer** | [**CustomerConfigDto**](CustomerConfigDto.md) | The branding of the organization running the portal. It is filled in on a server installation only and is  empty in the cloud. | [optional] [default to undefined]
**anonymous** | [**AnonymousConfigDto**](AnonymousConfigDto.md) | How an anonymous participant is treated in this session. | [optional] [default to undefined]
**feedback** | [**FeedbackConfig**](FeedbackConfig.md) | The support link the editor offers behind its feedback button. | [optional] [default to undefined]
**forcesave** | **boolean** | Whether the editors write intermediate revisions while the document stays open. It is empty when the portal  leaves the decision to the editors themselves. | [optional] [default to undefined]
**goback** | [**GobackConfig**](GobackConfig.md) | Where the editor returns the user to when they leave the document. It is empty when there is nowhere to go  back to, as in an embedded opening. | [optional] [default to undefined]
**review** | [**ReviewConfig**](ReviewConfig.md) | How tracked changes are displayed when the document opens; it depends on whether this session may write. | [optional] [default to undefined]
**logo** | [**LogoConfigDto**](LogoConfigDto.md) | The logo the editor shows, in the variants the current layout and file type need. | [optional] [default to undefined]
**mentionShare** | **boolean** | Whether mentioning a user who cannot yet open the document offers to share it with them, instead of silently  notifying nobody. | [optional] [default to undefined]
**submitForm** | [**SubmitForm**](SubmitForm.md) | The submit button of a form: whether it is shown and what it says. | [optional] [default to undefined]
**startFillingForm** | [**StartFillingForm**](StartFillingForm.md) | The button that starts filling out the form. It is empty when this opening offers no such button. | [optional] [default to undefined]
**ai** | [**AIConfig**](AIConfig.md) | The AI configuration settings. | [optional] [default to undefined]

## Example

```typescript
import { CustomizationConfigDto } from '@onlyoffice/docspace-api-sdk';

const instance: CustomizationConfigDto = {
    about,
    customer,
    anonymous,
    feedback,
    forcesave,
    goback,
    review,
    logo,
    mentionShare,
    submitForm,
    startFillingForm,
    ai,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
