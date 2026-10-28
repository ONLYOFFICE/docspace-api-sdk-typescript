# DefaultTemplateSettingsDto

The blank document the portal creates for each extension it covers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;DefaultTemplateItemDto&gt;**](DefaultTemplateItemDto.md) | One entry per extension the portal\'s built-in template set covers, whether or not a custom blank has been  chosen for it, so the list is never empty and its length follows the template set rather than the number of  custom blanks. Entries come in the order an interface shows them: text document, spreadsheet, presentation and  PDF first, everything else by extension. | [default to undefined]

## Example

```typescript
import { DefaultTemplateSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: DefaultTemplateSettingsDto = {
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
