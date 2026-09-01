# AiTMCPItem

Descriptor for a tool exposed by an MCP server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Tool name as registered on the MCP server (e.g. `web_search`, `insert_text`). | [default to undefined]
**description** | **string** | Human-readable description shown to the AI model and in the tools list UI. | [default to undefined]
**inputSchema** | **object** | JSON Schema describing the tool\'s input parameters. | [default to undefined]
**enabled** | **boolean** | Whether this tool is currently enabled. Disabled tools are hidden from the AI model. | [optional] [default to undefined]
**serverType** | **string** | Server type (MCP server name / host tool group id) this tool belongs to — the key the persisted disabled map is stored under. Set by the source that enumerated the tool, so a caller-supplied tool can still be attributed to its group after being flattened into a single list: that is what lets the engine apply the disabled map to `actionArgs.tools` instead of trusting the caller to pre-filter. Wire-serializable, so it survives a remote (server-side) engine. | [optional] [default to undefined]
**requireApproval** | **boolean** | Whether the consumer must show an approval dialog before this tool runs. The engine reads it when deciding the `autoAllow` flag on a `tool-call-pending` event: `requireApproval === false` auto-allows the call (no dialog), `true` always prompts. `undefined` leaves the decision to the persisted always-allow list alone — so MCP / custom-server tools (which never set it) keep prompting as before, while host tools opt into auto-allow by default. Wire-serializable, so it survives a remote (server-side) engine. | [optional] [default to undefined]

## Example

```typescript
import { AiTMCPItem } from '@onlyoffice/docspace-api-sdk';

const instance: AiTMCPItem = {
    name,
    description,
    inputSchema,
    enabled,
    serverType,
    requireApproval,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
