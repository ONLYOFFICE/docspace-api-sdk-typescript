# AiToolsListSystemTools200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | **{ [key: string]: Array&lt;AiMCPItem&gt;; }** | Tools by server name, covering both the host-configured system servers and the custom MCP servers registered for this scope. | [default to undefined]
**errors** | **{ [key: string]: string; }** | Why a registered custom server could not be reached, keyed by server name. A server that answered is absent from this map. | [default to undefined]
**system** | **Array&lt;string&gt;** | Names of the host-configured system servers among the keys of `groups`; everything else there was registered as a custom server. | [default to undefined]

## Example

```typescript
import { AiToolsListSystemTools200Response } from '@onlyoffice/docspace-api-sdk';

const instance: AiToolsListSystemTools200Response = {
    groups,
    errors,
    system,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
