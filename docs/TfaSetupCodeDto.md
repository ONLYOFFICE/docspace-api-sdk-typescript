# TfaSetupCodeDto

The setup TFA code parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **string** | The account for which the setup code is generated. | [optional] [readonly] [default to undefined]
**manualEntryKey** | **string** | The manual entry key. | [optional] [readonly] [default to undefined]
**qrCodeSetupImageUrl** | **string** | The QR-code setup image URL (base64-encoded PNG image). | [optional] [readonly] [default to undefined]

## Example

```typescript
import { TfaSetupCodeDto } from '@onlyoffice/docspace-api-sdk';

const instance: TfaSetupCodeDto = {
    account,
    manualEntryKey,
    qrCodeSetupImageUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
