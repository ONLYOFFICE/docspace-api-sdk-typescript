# CustomizationConfigDto

The customization config parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | **boolean** | Specifies if the customization is about. | [optional] [default to undefined]
**customer** | [**CustomerConfigDto**](CustomerConfigDto.md) | The customization customer configuration. | [optional] [default to undefined]
**anonymous** | [**AnonymousConfigDto**](AnonymousConfigDto.md) | The anonymous configuration of the customization. | [optional] [default to undefined]
**feedback** | [**FeedbackConfig**](FeedbackConfig.md) | The feedback configuration of the customization. | [optional] [default to undefined]
**forcesave** | **boolean** | Specifies if the customization should be force saved. | [optional] [default to undefined]
**goback** | [**GobackConfig**](GobackConfig.md) | The go back configuration of the customization. | [optional] [default to undefined]
**review** | [**ReviewConfig**](ReviewConfig.md) | The review configuration of the customization. | [optional] [default to undefined]
**logo** | [**LogoConfigDto**](LogoConfigDto.md) | The logo of the customization. | [optional] [default to undefined]
**mentionShare** | **boolean** | Specifies if the share should be mentioned. | [optional] [default to undefined]
**submitForm** | [**SubmitForm**](SubmitForm.md) | The Complete & Submit button settings. | [optional] [default to undefined]
**startFillingForm** | [**StartFillingForm**](StartFillingForm.md) | The parameters of the button that starts filling out the form. | [optional] [default to undefined]

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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
