# SetAppSettingsBodySettings

The configuration the application reads, as any valid JSON value. Its shape is defined by the application and  is neither validated nor interpreted by the portal, which stores it verbatim. It replaces the whole stored  document rather than merging into it, and `null` drops it so the application falls back to its own defaults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```typescript
import { SetAppSettingsBodySettings } from '@onlyoffice/docspace-api-sdk';

const instance: SetAppSettingsBodySettings = {
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
