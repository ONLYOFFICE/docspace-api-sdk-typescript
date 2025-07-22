# AceShortWrapper

The information about the settings which allow to share the document with other users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | **string** | The name of the user the document will be shared with. | [optional] [default to undefined]
**permissions** | **string** | The access rights for the user with the name above.  Can be \&quot;Full Access\&quot;, \&quot;Read Only\&quot;, or \&quot;Deny Access\&quot;. | [optional] [default to undefined]
**isLink** | **boolean** | Specifies whether to change the user icon to the link icon. | [optional] [default to undefined]

## Example

```typescript
import { AceShortWrapper } from '@onlyoffice/docspace-api-sdk';

const instance: AceShortWrapper = {
    user,
    permissions,
    isLink,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
