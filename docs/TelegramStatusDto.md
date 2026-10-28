# TelegramStatusDto

Whether the calling user\'s account is linked to the portal\'s Telegram bot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**RegStatus**](RegStatus.md) | Where the caller\'s own account stands: not linked, linked, or a registration link issued and the portal  still waiting for it to be opened in Telegram. The waiting state ends on its own when the link expires,  so it is worth polling rather than treating as final. | [default to undefined]
**username** | **string** | The Telegram handle the account is linked to, without the leading `@`. It is filled in only while the  account is linked and comes back empty in the other two states. | [optional] [default to undefined]

## Example

```typescript
import { TelegramStatusDto } from '@onlyoffice/docspace-api-sdk';

const instance: TelegramStatusDto = {
    status,
    username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
