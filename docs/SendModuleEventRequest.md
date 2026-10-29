# SendModuleEventRequest

A socket event from an integration module: who receives it in the portal, its name and its payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**room** | **string** | A room of the module in this portal: everyone subscribed to `plugin-{module}-{room}` receives the event. Latin  letters, digits and the characters `_ . : -`. | [optional] [default to undefined]
**user** | **string** | The e-mail of the portal user who receives the event; with single sign-on it is the same e-mail the module\'s own  application knows the person by. Only that user\'s open sessions receive it. | [optional] [default to undefined]
**event** | **string** | The event name. Browsers receive it as `plugin:{module}:{event}`. Latin letters, digits and the characters  `_ . : -`. | [optional] [default to undefined]
**message** | **string** | Passed to the browser as it is, as `{ message }`. Meant as a signal to re-read, such as an unread count; use  JSON text for structured data and keep personal content out of it. | [optional] [default to undefined]

## Example

```typescript
import { SendModuleEventRequest } from '@onlyoffice/docspace-api-sdk';

const instance: SendModuleEventRequest = {
    room,
    user,
    event,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
