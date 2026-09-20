# OwnerChangeInstructionsDto

The outcome of asking for the portal-ownership transfer letter to be sent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **number** | Whether the letter was sent: `1` that it was, `0` that the request was turned down. A refusal comes back  with HTTP 200, so this field and not the status code is what says whether anything happened - the request  is turned down when the caller is not the portal owner and when the named member is unknown or inactive. | [optional] [default to undefined]
**message** | **string** | The outcome spelled out in the portal language. On success it names the address the letter went to, and it  carries an HTML `mailto:` anchor rather than plain text, so it has to be rendered as markup or stripped;  on a refusal it is the localised reason. | [optional] [default to undefined]

## Example

```typescript
import { OwnerChangeInstructionsDto } from '@onlyoffice/docspace-api-sdk';

const instance: OwnerChangeInstructionsDto = {
    status,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
