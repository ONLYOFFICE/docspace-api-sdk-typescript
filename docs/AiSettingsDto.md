# AiSettingsDto

The AI module settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webSearchEnabled** | **boolean** | Indicates whether web search is enabled for AI chat sessions. | [optional] [default to undefined]
**webSearchNeedReset** | **boolean** | Indicates whether the web search API key needs to be reconfigured. | [optional] [default to undefined]
**vectorizationEnabled** | **boolean** | Indicates whether document vectorization is enabled. | [optional] [default to undefined]
**vectorizationNeedReset** | **boolean** | Indicates whether the embedding provider API key needs to be reconfigured. | [optional] [default to undefined]
**aiReady** | **boolean** | Indicates whether the AI subsystem is fully configured and operational. | [optional] [default to undefined]
**aiReadyNeedReset** | **boolean** | Indicates whether the AI provider API key needs to be reconfigured. | [optional] [default to undefined]
**portalMcpServerId** | **string** | The unique identifier of the portal-level MCP server, if configured. | [optional] [default to undefined]
**embeddingModel** | **string** | The name of the embedding model used for document vectorization. | [default to undefined]
**modelAliases** | **{ [key: string]: string; }** | Mapping of model identifiers to human-readable aliases. | [default to undefined]
**knowledgeSearchToolName** | **string** | The tool name used by the AI assistant for knowledge base search. | [default to undefined]
**webSearchToolName** | **string** | The tool name used by the AI assistant for web search. | [default to undefined]
**webCrawlingToolName** | **string** | The tool name used by the AI assistant for web page crawling. | [default to undefined]
**generateDocxToolName** | **string** | The tool name used by the AI to launch docx creation in the editor. | [default to undefined]
**generateFormToolName** | **string** | The tool name used by the AI assistant to launch form creation in the editor. | [default to undefined]
**generatePresentationToolName** | **string** | The tool name used by the AI assistant to launch presentation creation in the editor. | [default to undefined]

## Example

```typescript
import { AiSettingsDto } from '@onlyoffice/docspace-api-sdk';

const instance: AiSettingsDto = {
    webSearchEnabled,
    webSearchNeedReset,
    vectorizationEnabled,
    vectorizationNeedReset,
    aiReady,
    aiReadyNeedReset,
    portalMcpServerId,
    embeddingModel,
    modelAliases,
    knowledgeSearchToolName,
    webSearchToolName,
    webCrawlingToolName,
    generateDocxToolName,
    generateFormToolName,
    generatePresentationToolName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
