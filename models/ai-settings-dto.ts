/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */


/**
 * The AI module settings.
 */
export interface AiSettingsDto {
    /**
     * Indicates whether web search is enabled for AI chat sessions.
     */
    'webSearchEnabled'?: boolean;
    /**
     * Indicates whether the web search API key needs to be reconfigured.
     */
    'webSearchNeedReset'?: boolean;
    /**
     * Indicates whether document vectorization is enabled.
     */
    'vectorizationEnabled'?: boolean;
    /**
     * Indicates whether the embedding provider API key needs to be reconfigured.
     */
    'vectorizationNeedReset'?: boolean;
    /**
     * Indicates whether the AI subsystem is fully configured and operational.
     */
    'aiReady'?: boolean;
    /**
     * Indicates whether the AI provider API key needs to be reconfigured.
     */
    'aiReadyNeedReset'?: boolean;
    /**
     * The unique identifier of the portal-level MCP server, if configured.
     */
    'portalMcpServerId'?: string | null;
    /**
     * The name of the embedding model used for document vectorization.
     */
    'embeddingModel': string | null;
    /**
     * Mapping of model identifiers to human-readable aliases.
     */
    'modelAliases': { [key: string]: string; } | null;
    /**
     * The tool name used by the AI assistant for knowledge base search.
     */
    'knowledgeSearchToolName': string | null;
    /**
     * The tool name used by the AI assistant for web search.
     */
    'webSearchToolName': string | null;
    /**
     * The tool name used by the AI assistant for web page crawling.
     */
    'webCrawlingToolName': string | null;
    /**
     * The tool name used by the AI to launch docx creation in the editor.
     */
    'generateDocxToolName': string | null;
    /**
     * The tool name used by the AI assistant to launch form creation in the editor.
     */
    'generateFormToolName': string | null;
    /**
     * The tool name used by the AI assistant to launch presentation creation in the editor.
     */
    'generatePresentationToolName': string | null;
    /**
     * Indicates whether the system-level AI provider is enabled.
     */
    'systemAiEnabled'?: boolean;
    /**
     * The identifier of the model recommended for form generation.
     */
    'recommendedModelForForms'?: string | null;
}

