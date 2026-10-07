# @onlyoffice/docspace-api-sdk

The ONLYOFFICE DocSpace SDK for TypeScript is a library that provides tools for integrating and managing DocSpace features within your applications. It simplifies interaction with the DocSpace API by offering ready-to-use methods and models.

For more information, please visit [https://helpdesk.onlyoffice.com/hc/en-us](https://helpdesk.onlyoffice.com/hc/en-us)

### Building

To build and compile the TypeScript sources to JavaScript, use the following commands:

```bash
npm install
npm run build
```

### Consuming

To use the SDK in your project, navigate to the root folder of your consuming project and run one of the following commands:

#### From published package (recommended)

```bash
npm install @onlyoffice/docspace-api-sdk --save
```

#### From local build (not recommended)

```bash
npm install PATH_TO_GENERATED_PACKAGE --save
```

## Getting Started

Please follow the [building](#building) instruction and execute the following TS code:

```typescript

import { Configuration, AIAIApi } from '@onlyoffice/docspace-api-sdk';

const config = new Configuration ({
    basePath: "https://your-docspace.onlyoffice.com",
    accessToken: "YOUR ACCESS TOKEN",
});

const apiInstance = new AIAIApi(config);

const aiApproveToolCallRequest: AiApproveToolCallRequest = ; // 
try {
    const result = await apiInstance.aiApproveToolCall(
      aiApproveToolCallRequest
    );
    console.log('API called successfully. Returned data: ', result.data);
  } catch (error) {
    console.error(error);
}


```

## Documentation For Authorization


Authentication schemes defined for the API:
<a id="cookieAuth"></a>
### cookieAuth

- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: Cookie

<a id="bearerAuth"></a>
### bearerAuth

- **Type**: Bearer authentication

<a id="asc_auth_key"></a>
### asc_auth_key

- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: Cookie

<a id="Basic"></a>
### Basic

- **Type**: HTTP basic authentication

<a id="Bearer"></a>
### Bearer

- **Type**: Bearer authentication (JWT)

<a id="ApiKeyBearer"></a>
### ApiKeyBearer

- **Type**: API key
- **API key parameter name**: ApiKeyBearer
- **Location**: HTTP header

<a id="OAuth2"></a>
### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: {{authBaseUrl}}/oauth2/authorize
- **Token Url**: {{authBaseUrl}}/oauth2/token
- **Scopes**: 
 - **read**: Read access to protected resources
 - **write**: Write access to protected resources

<a id="OpenId"></a>
### OpenId

- **Type**: OpenId Connect
- **OpenId Connect URL**: {{authBaseUrl}}/.well-known/openid-configuration

<a id="x-signature"></a>
### x-signature

- **Type**: API key
- **API key parameter name**: x-signature
- **Location**: Cookie


## Rate Limiting

All API responses may include the following rate limiting headers:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Sliding window rate limit: 1500 requests per minute per user/IP. |
| `X-RateLimit-Remaining` | Number of requests remaining in the current sliding window (1500 req/min). Concurrent limits also apply: 50 parallel GET requests, 15 parallel POST/PUT requests. |
| `X-RateLimit-Reset` | Unix timestamp (seconds) when the current sliding window rate limit resets. |
| `Retry-After` | Seconds to wait before retrying. Up to 60s for the sliding window (1500 req/min), up to 86400s for the daily POST/PUT limit (10000/day). |

### Documentation for API Endpoints

All URIs are relative to *https://your-docspace.onlyoffice.com*

### API Endoints tables:

<details>
  <summary>AI</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>AIApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIAIApi.md#aiapprovetoolcall"><strong>aiApproveToolCall</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/ai/approve-tool-call</td>
        <td>Approve tool call</td>
      </tr>
      <tr>
        <td><a href="docs/AIAIApi.md#aidenytoolcall"><strong>aiDenyToolCall</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/ai/deny-tool-call</td>
        <td>Deny tool call</td>
      </tr>
      <tr>
        <td><a href="docs/AIAIApi.md#airegeneratestream"><strong>aiRegenerateStream</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/ai/regenerate-stream</td>
        <td>Regenerate stream</td>
      </tr>
      <tr>
        <td><a href="docs/AIAIApi.md#aisend"><strong>aiSend</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/ai/send</td>
        <td>Run an AI action</td>
      </tr>
      <tr>
        <td><a href="docs/AIAIApi.md#aisendcustom"><strong>aiSendCustom</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/ai/send-custom</td>
        <td>Send custom</td>
      </tr>
      <tr>
        <td><a href="docs/AIAIApi.md#aisendwithstream"><strong>aiSendWithStream</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/ai/send-with-stream</td>
        <td>Send with stream</td>
      </tr>
      <tr>
        <td><a href="docs/AIAIApi.md#aisendwithstreamopenai"><strong>aiSendWithStreamOpenAI</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/ai/send-with-stream-openai</td>
        <td>Stream a chat in OpenAI format</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>AgentsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIAgentsApi.md#aiagentscreate"><strong>aiAgentsCreate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/agents</td>
        <td>Create an agent</td>
      </tr>
      <tr>
        <td><a href="docs/AIAgentsApi.md#aiagentsdelete"><strong>aiAgentsDelete</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/agents/{id}</td>
        <td>Delete an agent</td>
      </tr>
      <tr>
        <td><a href="docs/AIAgentsApi.md#aiagentsget"><strong>aiAgentsGet</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/agents/{id}</td>
        <td>Get an agent</td>
      </tr>
      <tr>
        <td><a href="docs/AIAgentsApi.md#aiagentslist"><strong>aiAgentsList</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/agents</td>
        <td>List agents</td>
      </tr>
      <tr>
        <td><a href="docs/AIAgentsApi.md#aiagentsnews"><strong>aiAgentsNews</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/agents/news</td>
        <td>List agent news items</td>
      </tr>
      <tr>
        <td><a href="docs/AIAgentsApi.md#aiagentsresetquota"><strong>aiAgentsResetQuota</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/agents/resetquota</td>
        <td>Reset agents\' quota</td>
      </tr>
      <tr>
        <td><a href="docs/AIAgentsApi.md#aiagentsupdate"><strong>aiAgentsUpdate</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/agents/{id}</td>
        <td>Update an agent</td>
      </tr>
      <tr>
        <td><a href="docs/AIAgentsApi.md#aiagentsupdatequota"><strong>aiAgentsUpdateQuota</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/agents/agentquota</td>
        <td>Update agents\' quota</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>AssignmentsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIAssignmentsApi.md#aiassignmentsassign"><strong>aiAssignmentsAssign</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/assignments/assign</td>
        <td>Bind a profile to an action</td>
      </tr>
      <tr>
        <td><a href="docs/AIAssignmentsApi.md#aiassignmentsbulkassign"><strong>aiAssignmentsBulkAssign</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/assignments/bulk-assign</td>
        <td>Bulk assign</td>
      </tr>
      <tr>
        <td><a href="docs/AIAssignmentsApi.md#aiassignmentscascadeprofiledelete"><strong>aiAssignmentsCascadeProfileDelete</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/assignments/cascade-profile-delete</td>
        <td>Cascade profile delete</td>
      </tr>
      <tr>
        <td><a href="docs/AIAssignmentsApi.md#aiassignmentsgetallassignments"><strong>aiAssignmentsGetAllAssignments</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/assignments/get-all-assignments</td>
        <td>Get all assignments</td>
      </tr>
      <tr>
        <td><a href="docs/AIAssignmentsApi.md#aiassignmentsgetassignment"><strong>aiAssignmentsGetAssignment</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/assignments/get-assignment</td>
        <td>Get assignment</td>
      </tr>
      <tr>
        <td><a href="docs/AIAssignmentsApi.md#aiassignmentsresolveforaction"><strong>aiAssignmentsResolveForAction</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/assignments/resolve-for-action</td>
        <td>Resolve for action</td>
      </tr>
      <tr>
        <td><a href="docs/AIAssignmentsApi.md#aiassignmentstryresolveforaction"><strong>aiAssignmentsTryResolveForAction</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/assignments/try-resolve-for-action</td>
        <td>Try resolve for action</td>
      </tr>
      <tr>
        <td><a href="docs/AIAssignmentsApi.md#aiassignmentsunassign"><strong>aiAssignmentsUnassign</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/assignments/unassign</td>
        <td>Clear an action\'s profile</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>AttachmentsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIAttachmentsApi.md#aiattachmentsdelete"><strong>aiAttachmentsDelete</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/attachments/delete</td>
        <td>Delete one attachment</td>
      </tr>
      <tr>
        <td><a href="docs/AIAttachmentsApi.md#aiattachmentsdeletemany"><strong>aiAttachmentsDeleteMany</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/attachments/delete-many</td>
        <td>Delete many</td>
      </tr>
      <tr>
        <td><a href="docs/AIAttachmentsApi.md#aiattachmentsget"><strong>aiAttachmentsGet</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/attachments/get</td>
        <td>Get one attachment</td>
      </tr>
      <tr>
        <td><a href="docs/AIAttachmentsApi.md#aiattachmentsgetmany"><strong>aiAttachmentsGetMany</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/attachments/get-many</td>
        <td>Get many</td>
      </tr>
      <tr>
        <td><a href="docs/AIAttachmentsApi.md#aiattachmentsgetsuggestedquestions"><strong>aiAttachmentsGetSuggestedQuestions</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/attachments/suggested-questions</td>
        <td>Get suggested questions</td>
      </tr>
      <tr>
        <td><a href="docs/AIAttachmentsApi.md#aiattachmentslinktomessage"><strong>aiAttachmentsLinkToMessage</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/attachments/link-to-message</td>
        <td>Link to message</td>
      </tr>
      <tr>
        <td><a href="docs/AIAttachmentsApi.md#aiattachmentssavefile"><strong>aiAttachmentsSaveFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/attachments/save-file</td>
        <td>Save file</td>
      </tr>
      <tr>
        <td><a href="docs/AIAttachmentsApi.md#aiattachmentssavefilesmany"><strong>aiAttachmentsSaveFilesMany</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/attachments/save-files-many</td>
        <td>Save files many</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ContextApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIContextApi.md#aicontextgetcontextfolders"><strong>aiContextGetContextFolders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/context/get-context-folders</td>
        <td>Get context folders</td>
      </tr>
      <tr>
        <td><a href="docs/AIContextApi.md#aicontextgetroomskill"><strong>aiContextGetRoomSkill</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/context/get-room-skill</td>
        <td>Get room skill</td>
      </tr>
      <tr>
        <td><a href="docs/AIContextApi.md#aicontextgetroomskills"><strong>aiContextGetRoomSkills</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/context/get-room-skills</td>
        <td>Get room skills</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>EditorToolsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIEditorToolsApi.md#aieditortoolscall"><strong>aiEditorToolsCall</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/editor-tools/call</td>
        <td>Call an editor tool</td>
      </tr>
      <tr>
        <td><a href="docs/AIEditorToolsApi.md#aieditortoolslist"><strong>aiEditorToolsList</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/editor-tools/list</td>
        <td>List editor tools</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ExportApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIExportApi.md#aiexporttexttodocx"><strong>aiExportTextToDocx</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/text-to-docx</td>
        <td>Start markdown export</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>OpenAIPassthroughApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIOpenAIPassthroughApi.md#aiopenaichatcompletions"><strong>aiOpenaiChatCompletions</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/openai/{profileId}/v1/chat/completions</td>
        <td>OpenAI chat completions passthrough</td>
      </tr>
      <tr>
        <td><a href="docs/AIOpenAIPassthroughApi.md#aiopenaiimagesgenerations"><strong>aiOpenaiImagesGenerations</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/openai/{profileId}/v1/images/generations</td>
        <td>OpenAI image generation passthrough</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PreferencesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIPreferencesApi.md#aipreferencescleardeepmode"><strong>aiPreferencesClearDeepMode</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/preferences/clear-deep-mode</td>
        <td>Clear deep mode</td>
      </tr>
      <tr>
        <td><a href="docs/AIPreferencesApi.md#aipreferencesgetdeepmode"><strong>aiPreferencesGetDeepMode</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/preferences/get-deep-mode</td>
        <td>Get deep mode</td>
      </tr>
      <tr>
        <td><a href="docs/AIPreferencesApi.md#aipreferencesgetreasoninglevel"><strong>aiPreferencesGetReasoningLevel</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/preferences/get-reasoning-level</td>
        <td>Get reasoning level</td>
      </tr>
      <tr>
        <td><a href="docs/AIPreferencesApi.md#aipreferencesgettoolpermissionmode"><strong>aiPreferencesGetToolPermissionMode</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/preferences/get-tool-permission-mode</td>
        <td>Get tool permission mode</td>
      </tr>
      <tr>
        <td><a href="docs/AIPreferencesApi.md#aipreferencesisdeepmodeset"><strong>aiPreferencesIsDeepModeSet</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/preferences/is-deep-mode-set</td>
        <td>Is deep mode set</td>
      </tr>
      <tr>
        <td><a href="docs/AIPreferencesApi.md#aipreferencessetdeepmode"><strong>aiPreferencesSetDeepMode</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/preferences/set-deep-mode</td>
        <td>Set deep mode</td>
      </tr>
      <tr>
        <td><a href="docs/AIPreferencesApi.md#aipreferencessetreasoninglevel"><strong>aiPreferencesSetReasoningLevel</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/preferences/set-reasoning-level</td>
        <td>Set reasoning level</td>
      </tr>
      <tr>
        <td><a href="docs/AIPreferencesApi.md#aipreferencessettoolpermissionmode"><strong>aiPreferencesSetToolPermissionMode</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/preferences/set-tool-permission-mode</td>
        <td>Set tool permission mode</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ProfilesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIProfilesApi.md#aiprofilescreate"><strong>aiProfilesCreate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/profiles/create</td>
        <td>Create a provider profile</td>
      </tr>
      <tr>
        <td><a href="docs/AIProfilesApi.md#aiprofilesdelete"><strong>aiProfilesDelete</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/profiles/delete</td>
        <td>Delete a provider profile</td>
      </tr>
      <tr>
        <td><a href="docs/AIProfilesApi.md#aiprofilesgetbyid"><strong>aiProfilesGetById</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/profiles/get-by-id</td>
        <td>Get a provider profile</td>
      </tr>
      <tr>
        <td><a href="docs/AIProfilesApi.md#aiprofileslist"><strong>aiProfilesList</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/profiles/list</td>
        <td>List provider profiles</td>
      </tr>
      <tr>
        <td><a href="docs/AIProfilesApi.md#aiprofileslistmodels"><strong>aiProfilesListModels</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/profiles/list-models</td>
        <td>List models</td>
      </tr>
      <tr>
        <td><a href="docs/AIProfilesApi.md#aiprofileslistprovidermodels"><strong>aiProfilesListProviderModels</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/profiles/list-provider-models</td>
        <td>List provider models</td>
      </tr>
      <tr>
        <td><a href="docs/AIProfilesApi.md#aiprofilestestconnection"><strong>aiProfilesTestConnection</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/profiles/test-connection</td>
        <td>Test a profile\'s provider</td>
      </tr>
      <tr>
        <td><a href="docs/AIProfilesApi.md#aiprofilesupdate"><strong>aiProfilesUpdate</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/profiles/update</td>
        <td>Update a provider profile</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PromptsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptscreate"><strong>aiPromptsCreate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/prompts/create</td>
        <td>Save a prompt</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptscreatefolder"><strong>aiPromptsCreateFolder</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/prompts/create-folder</td>
        <td>Create folder</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptsdelete"><strong>aiPromptsDelete</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/prompts/delete</td>
        <td>Delete a saved prompt</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptsdeletefolder"><strong>aiPromptsDeleteFolder</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/prompts/delete-folder</td>
        <td>Delete folder</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptsexport"><strong>aiPromptsExport</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/prompts/export</td>
        <td>Export the prompt library</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptsgetbyid"><strong>aiPromptsGetById</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/prompts/get-by-id</td>
        <td>Get a saved prompt</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptsgetfolderbyid"><strong>aiPromptsGetFolderById</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/prompts/get-folder-by-id</td>
        <td>Get a prompt folder</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptsimportbundle"><strong>aiPromptsImportBundle</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/prompts/import-bundle</td>
        <td>Import bundle</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptslist"><strong>aiPromptsList</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/prompts/list</td>
        <td>List saved prompts</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptslistfolders"><strong>aiPromptsListFolders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/prompts/list-folders</td>
        <td>List folders</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptsmove"><strong>aiPromptsMove</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/prompts/move</td>
        <td>Move a prompt to a folder</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptsrenamefolder"><strong>aiPromptsRenameFolder</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/prompts/rename-folder</td>
        <td>Rename folder</td>
      </tr>
      <tr>
        <td><a href="docs/AIPromptsApi.md#aipromptsupdate"><strong>aiPromptsUpdate</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/prompts/update</td>
        <td>Update a saved prompt</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SettingsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AISettingsApi.md#aisettingsget"><strong>aiSettingsGet</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/config</td>
        <td>Get AI settings</td>
      </tr>
      <tr>
        <td><a href="docs/AISettingsApi.md#aisettingsgettoolmode"><strong>aiSettingsGetToolMode</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/config/tool-mode</td>
        <td>Get the tool permission mode</td>
      </tr>
      <tr>
        <td><a href="docs/AISettingsApi.md#aisettingsgetuser"><strong>aiSettingsGetUser</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/config/user</td>
        <td>Get user AI settings</td>
      </tr>
      <tr>
        <td><a href="docs/AISettingsApi.md#aisettingsgetvectorization"><strong>aiSettingsGetVectorization</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/config/vectorization</td>
        <td>Get vectorization settings</td>
      </tr>
      <tr>
        <td><a href="docs/AISettingsApi.md#aisettingssettoolmode"><strong>aiSettingsSetToolMode</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/config/tool-mode</td>
        <td>Set the tool permission mode</td>
      </tr>
      <tr>
        <td><a href="docs/AISettingsApi.md#aisettingssetuser"><strong>aiSettingsSetUser</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/config/user</td>
        <td>Update user AI settings</td>
      </tr>
      <tr>
        <td><a href="docs/AISettingsApi.md#aisettingssetvectorization"><strong>aiSettingsSetVectorization</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/config/vectorization</td>
        <td>Update vectorization settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ThreadsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsappendusermessage"><strong>aiThreadsAppendUserMessage</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/threads/append-user-message</td>
        <td>Append user message</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsclearmessages"><strong>aiThreadsClearMessages</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/threads/clear-messages</td>
        <td>Clear messages</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadscreate"><strong>aiThreadsCreate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/threads/create</td>
        <td>Create a chat thread</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsdelete"><strong>aiThreadsDelete</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/threads/delete</td>
        <td>Delete a chat thread</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsdeletemessage"><strong>aiThreadsDeleteMessage</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/threads/delete-message</td>
        <td>Delete message</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsgetbyid"><strong>aiThreadsGetById</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/threads/get-by-id</td>
        <td>Get a chat thread</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsgetmessagebyid"><strong>aiThreadsGetMessageById</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/threads/get-message-by-id</td>
        <td>Get one chat message</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadslist"><strong>aiThreadsList</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/threads/list</td>
        <td>List chat threads</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsopenorcreate"><strong>aiThreadsOpenOrCreate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/threads/open-or-create</td>
        <td>Open or create</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsreadmessages"><strong>aiThreadsReadMessages</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/threads/read-messages</td>
        <td>Read messages</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsregeneratetitle"><strong>aiThreadsRegenerateTitle</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/threads/regenerate-title</td>
        <td>Regenerate title</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsrename"><strong>aiThreadsRename</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/threads/rename</td>
        <td>Rename a chat thread</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadstouch"><strong>aiThreadsTouch</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/threads/touch</td>
        <td>Bump a thread\'s activity</td>
      </tr>
      <tr>
        <td><a href="docs/AIThreadsApi.md#aithreadsupdatemessage"><strong>aiThreadsUpdateMessage</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/threads/update-message</td>
        <td>Update message</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ToolsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolsaddcustomserver"><strong>aiToolsAddCustomServer</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/tools/add-custom-server</td>
        <td>Add custom server</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolsgetallowalways"><strong>aiToolsGetAllowAlways</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/tools/get-allow-always</td>
        <td>Get allow always</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolsgetcustomserver"><strong>aiToolsGetCustomServer</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/tools/get-custom-server</td>
        <td>Get custom server</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolsgetdisabled"><strong>aiToolsGetDisabled</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/tools/get-disabled</td>
        <td>Get disabled</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolsisallowalways"><strong>aiToolsIsAllowAlways</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/tools/is-allow-always</td>
        <td>Is allow always</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolsistooldisabled"><strong>aiToolsIsToolDisabled</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/tools/is-tool-disabled</td>
        <td>Is tool disabled</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolslistcustomservers"><strong>aiToolsListCustomServers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/tools/list-custom-servers</td>
        <td>List custom servers</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolslistsystemtools"><strong>aiToolsListSystemTools</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/tools/list-system-tools</td>
        <td>List system tools</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolsremovecustomserver"><strong>aiToolsRemoveCustomServer</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/tools/remove-custom-server</td>
        <td>Remove custom server</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolsreplaceallcustomservers"><strong>aiToolsReplaceAllCustomServers</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/tools/replace-all-custom-servers</td>
        <td>Replace all custom servers</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolssetallowalways"><strong>aiToolsSetAllowAlways</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/tools/set-allow-always</td>
        <td>Set allow always</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolssetdisabled"><strong>aiToolsSetDisabled</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/tools/set-disabled</td>
        <td>Set disabled</td>
      </tr>
      <tr>
        <td><a href="docs/AIToolsApi.md#aitoolsupdatecustomserver"><strong>aiToolsUpdateCustomServer</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/tools/update-custom-server</td>
        <td>Update custom server</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>VectorizationApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIVectorizationApi.md#aivectorizationstarttask"><strong>aiVectorizationStartTask</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/vectorization/tasks</td>
        <td>Start a vectorization task</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>WebSearchApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AIWebSearchApi.md#aiwebsearchclear"><strong>aiWebSearchClear</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/ai/web-search/clear</td>
        <td>Clear the web-search configuration</td>
      </tr>
      <tr>
        <td><a href="docs/AIWebSearchApi.md#aiwebsearchconfigure"><strong>aiWebSearchConfigure</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/web-search/configure</td>
        <td>Configure and verify web search</td>
      </tr>
      <tr>
        <td><a href="docs/AIWebSearchApi.md#aiwebsearchgetactiveconfig"><strong>aiWebSearchGetActiveConfig</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/web-search/get-active-config</td>
        <td>Get active config</td>
      </tr>
      <tr>
        <td><a href="docs/AIWebSearchApi.md#aiwebsearchisconfigured"><strong>aiWebSearchIsConfigured</strong></a></td>
        <td><strong>GET</strong> /api/2.0/ai/web-search/is-configured</td>
        <td>Is configured</td>
      </tr>
      <tr>
        <td><a href="docs/AIWebSearchApi.md#aiwebsearchpassthroughcontents"><strong>aiWebSearchPassthroughContents</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/websearch/v1/contents</td>
        <td>Web page contents passthrough</td>
      </tr>
      <tr>
        <td><a href="docs/AIWebSearchApi.md#aiwebsearchpassthroughsearch"><strong>aiWebSearchPassthroughSearch</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/websearch/v1/search</td>
        <td>Web search passthrough</td>
      </tr>
      <tr>
        <td><a href="docs/AIWebSearchApi.md#aiwebsearchsetactiveconfig"><strong>aiWebSearchSetActiveConfig</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/ai/web-search/set-active-config</td>
        <td>Set active config</td>
      </tr>
      <tr>
        <td><a href="docs/AIWebSearchApi.md#aiwebsearchtestconnection"><strong>aiWebSearchTestConnection</strong></a></td>
        <td><strong>POST</strong> /api/2.0/ai/web-search/test-connection</td>
        <td>Test a web-search provider</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>ApiKeys</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>ApiKeysApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/ApiKeysApi.md#createapikey"><strong>createApiKey</strong></a></td>
        <td><strong>POST</strong> /api/2.0/keys</td>
        <td>Create a user API key</td>
      </tr>
      <tr>
        <td><a href="docs/ApiKeysApi.md#deleteapikey"><strong>deleteApiKey</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/keys/{keyId}</td>
        <td>Delete an API key</td>
      </tr>
      <tr>
        <td><a href="docs/ApiKeysApi.md#getallpermissions"><strong>getAllPermissions</strong></a></td>
        <td><strong>GET</strong> /api/2.0/keys/permissions</td>
        <td>Get API key permissions</td>
      </tr>
      <tr>
        <td><a href="docs/ApiKeysApi.md#getapikey"><strong>getApiKey</strong></a></td>
        <td><strong>GET</strong> /api/2.0/keys/@self</td>
        <td>Get the current API key</td>
      </tr>
      <tr>
        <td><a href="docs/ApiKeysApi.md#getapikeys"><strong>getApiKeys</strong></a></td>
        <td><strong>GET</strong> /api/2.0/keys</td>
        <td>Get the API keys</td>
      </tr>
      <tr>
        <td><a href="docs/ApiKeysApi.md#updateapikey"><strong>updateApiKey</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/keys/{keyId}</td>
        <td>Update an API key</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Apps</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>AppsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AppsApi.md#get"><strong>get</strong></a></td>
        <td><strong>GET</strong> /api/2.0/apps/{id}</td>
        <td>Get an app</td>
      </tr>
      <tr>
        <td><a href="docs/AppsApi.md#getall"><strong>getAll</strong></a></td>
        <td><strong>GET</strong> /api/2.0/apps</td>
        <td>Get all apps</td>
      </tr>
      <tr>
        <td><a href="docs/AppsApi.md#getsettings"><strong>getSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/apps/{id}/settings</td>
        <td>Get app settings</td>
      </tr>
      <tr>
        <td><a href="docs/AppsApi.md#setenabled"><strong>setEnabled</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/apps/{id}/enabled</td>
        <td>Enable or disable an app</td>
      </tr>
      <tr>
        <td><a href="docs/AppsApi.md#setsettings"><strong>setSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/apps/{id}/settings</td>
        <td>Save app settings</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Authentication</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>AuthenticationApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/AuthenticationApi.md#authenticateme"><strong>authenticateMe</strong></a></td>
        <td><strong>POST</strong> /api/2.0/authentication</td>
        <td>Authenticate a user</td>
      </tr>
      <tr>
        <td><a href="docs/AuthenticationApi.md#authenticatemefrombodywithcode"><strong>authenticateMeFromBodyWithCode</strong></a></td>
        <td><strong>POST</strong> /api/2.0/authentication/{code}</td>
        <td>Authenticate a user by code</td>
      </tr>
      <tr>
        <td><a href="docs/AuthenticationApi.md#checkconfirm"><strong>checkConfirm</strong></a></td>
        <td><strong>POST</strong> /api/2.0/authentication/confirm</td>
        <td>Check a confirmation link</td>
      </tr>
      <tr>
        <td><a href="docs/AuthenticationApi.md#getisauthentificated"><strong>getIsAuthentificated</strong></a></td>
        <td><strong>GET</strong> /api/2.0/authentication</td>
        <td>Check authentication</td>
      </tr>
      <tr>
        <td><a href="docs/AuthenticationApi.md#logout"><strong>logout</strong></a></td>
        <td><strong>POST</strong> /api/2.0/authentication/logout</td>
        <td>Log out</td>
      </tr>
      <tr>
        <td><a href="docs/AuthenticationApi.md#savemobilephone"><strong>saveMobilePhone</strong></a></td>
        <td><strong>POST</strong> /api/2.0/authentication/setphone</td>
        <td>Set a mobile phone</td>
      </tr>
      <tr>
        <td><a href="docs/AuthenticationApi.md#sendsmscode"><strong>sendSmsCode</strong></a></td>
        <td><strong>POST</strong> /api/2.0/authentication/sendsms</td>
        <td>Send SMS code</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Backup</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>BackupApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#cancelbackup"><strong>cancelBackup</strong></a></td>
        <td><strong>POST</strong> /api/2.0/backup/cancelbackup</td>
        <td>Cancel the running backup</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#createbackupschedule"><strong>createBackupSchedule</strong></a></td>
        <td><strong>POST</strong> /api/2.0/backup/createbackupschedule</td>
        <td>Create the backup schedule</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#deletebackup"><strong>deleteBackup</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/backup/deletebackup/{id}</td>
        <td>Delete the backup</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#deletebackuphistory"><strong>deleteBackupHistory</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/backup/deletebackuphistory</td>
        <td>Delete the backup history</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#deletebackupschedule"><strong>deleteBackupSchedule</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/backup/deletebackupschedule</td>
        <td>Delete the backup schedule</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#getbackuphistory"><strong>getBackupHistory</strong></a></td>
        <td><strong>GET</strong> /api/2.0/backup/getbackuphistory</td>
        <td>Get the backup history</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#getbackupprogress"><strong>getBackupProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/backup/getbackupprogress</td>
        <td>Get the backup progress</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#getbackupschedule"><strong>getBackupSchedule</strong></a></td>
        <td><strong>GET</strong> /api/2.0/backup/getbackupschedule</td>
        <td>Get the backup schedule</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#getbackupscount"><strong>getBackupsCount</strong></a></td>
        <td><strong>GET</strong> /api/2.0/backup/getbackupscount</td>
        <td>Get the number of backups</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#getbackupscounts"><strong>getBackupsCounts</strong></a></td>
        <td><strong>GET</strong> /api/2.0/backup/getbackupscountbypaid</td>
        <td>Get free and paid backup counts</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#getbackupsservicestate"><strong>getBackupsServiceState</strong></a></td>
        <td><strong>GET</strong> /api/2.0/backup/getservicestate</td>
        <td>Check whether backups are enabled</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#getrestoreprogress"><strong>getRestoreProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/backup/getrestoreprogress</td>
        <td>Get the restoring progress</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#startbackup"><strong>startBackup</strong></a></td>
        <td><strong>POST</strong> /api/2.0/backup/startbackup</td>
        <td>Start the backup</td>
      </tr>
      <tr>
        <td><a href="docs/BackupApi.md#startbackuprestore"><strong>startBackupRestore</strong></a></td>
        <td><strong>POST</strong> /api/2.0/backup/startrestore</td>
        <td>Start the restoring process</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Capabilities</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>CapabilitiesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/CapabilitiesApi.md#getportalcapabilities"><strong>getPortalCapabilities</strong></a></td>
        <td><strong>GET</strong> /api/2.0/capabilities</td>
        <td>Get portal capabilities</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Files</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>FilesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#addfiletorecent"><strong>addFileToRecent</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{fileId}/recent</td>
        <td>Add a file to Recent</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#addtemplates"><strong>addTemplates</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/templates</td>
        <td>Add template files</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#changeversionhistory"><strong>changeVersionHistory</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/history</td>
        <td>Change version history</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#checkfillformdraft"><strong>checkFillFormDraft</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/masterform/{fileId}/checkfillformdraft</td>
        <td>Open a form draft for filling</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#copyfileas"><strong>copyFileAs</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{fileId}/copyas</td>
        <td>Copy a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createeditsession"><strong>createEditSession</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{fileId}/edit_session</td>
        <td>Create the editing session</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createfile"><strong>createFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/file</td>
        <td>Create a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createfileinmydocuments"><strong>createFileInMyDocuments</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/@my/file</td>
        <td>Create a file in My documents</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createfileprimaryexternallink"><strong>createFilePrimaryExternalLink</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{id}/link</td>
        <td>Create the file primary external link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createhtmlfile"><strong>createHtmlFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/html</td>
        <td>Create an HTML file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createhtmlfileinmydocuments"><strong>createHtmlFileInMyDocuments</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/@my/html</td>
        <td>Create an HTML file in My documents</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createtextfile"><strong>createTextFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/text</td>
        <td>Create a text file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createtextfileinmydocuments"><strong>createTextFileInMyDocuments</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/@my/text</td>
        <td>Create a text file in My documents</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createthumbnails"><strong>createThumbnails</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/thumbnails</td>
        <td>Queue file thumbnails</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#deletefile"><strong>deleteFile</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/file/{fileId}</td>
        <td>Delete a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#deleterecent"><strong>deleteRecent</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/recent</td>
        <td>Delete recent files</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#deletetemplates"><strong>deleteTemplates</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/templates</td>
        <td>Delete template files</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#generatexlsx"><strong>generateXlsx</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{fileId}/xlsx</td>
        <td>Generate a form answers report</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getallformroles"><strong>getAllFormRoles</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/formroles</td>
        <td>Get form roles</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#geteditdiffurl"><strong>getEditDiffUrl</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/edit/diff</td>
        <td>Get changes URL</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getedithistory"><strong>getEditHistory</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/edit/history</td>
        <td>Get version history</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getencryptioninfo"><strong>getEncryptionInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/{fileId}/access</td>
        <td>Get file encryption information</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getfilehistory"><strong>getFileHistory</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/log</td>
        <td>Get file history</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getfileinfo"><strong>getFileInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}</td>
        <td>Get file information</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getfilelinks"><strong>getFileLinks</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{id}/links</td>
        <td>Get file external links</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getfileprimaryexternallink"><strong>getFilePrimaryExternalLink</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{id}/link</td>
        <td>Get the file primary external link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getfileversioninfo"><strong>getFileVersionInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/history</td>
        <td>Get file versions</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getfillresult"><strong>getFillResult</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/fillresult</td>
        <td>Get form-filling result</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getformsubmissions"><strong>getFormSubmissions</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/submissions</td>
        <td>Get form submission results</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getpresignedfileuri"><strong>getPresignedFileUri</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/presigned</td>
        <td>Get a signed download address</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getpresigneduri"><strong>getPresignedUri</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/presigneduri</td>
        <td>Get file download link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getprotectedfileusers"><strong>getProtectedFileUsers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/protectusers</td>
        <td>Get users for document protection</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getreferencedata"><strong>getReferenceData</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/referencedata</td>
        <td>Resolve a spreadsheet reference</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getxlsx"><strong>getXlsx</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/xlsx</td>
        <td>Get form report generation status</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#isformpdf"><strong>isFormPDF</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/isformpdf</td>
        <td>Check the PDF file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#lockfile"><strong>lockFile</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/lock</td>
        <td>Lock a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#manageformfilling"><strong>manageFormFilling</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/manageformfilling</td>
        <td>Perform form filling action</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#openeditfile"><strong>openEditFile</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/openedit</td>
        <td>Get the editor configuration</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#restorefileversion"><strong>restoreFileVersion</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{fileId}/restoreversion</td>
        <td>Restore a file version</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#saveeditingfilefromform"><strong>saveEditingFileFromForm</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/saveediting</td>
        <td>Save edited file content</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#savefileaspdf"><strong>saveFileAsPdf</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{id}/saveaspdf</td>
        <td>Save a file as PDF</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#saveformrolemapping"><strong>saveFormRoleMapping</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{fileId}/formrolemapping</td>
        <td>Save form role mapping</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#setcustomfiltertag"><strong>setCustomFilterTag</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/customfilter</td>
        <td>Set the Custom Filter editing mode</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#setencryptioninfo"><strong>setEncryptionInfo</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/{fileId}/access</td>
        <td>Set file encryption information</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#setfileexternallink"><strong>setFileExternalLink</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{id}/links</td>
        <td>Set a file external link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#setfileorder"><strong>setFileOrder</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/{fileId}/order</td>
        <td>Set file order</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#setfilesorder"><strong>setFilesOrder</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/order</td>
        <td>Set order of files</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#starteditfile"><strong>startEditFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{fileId}/startedit</td>
        <td>Open an editing session</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#startfillingfile"><strong>startFillingFile</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/startfilling</td>
        <td>Start filling a form</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#togglefilefavorite"><strong>toggleFileFavorite</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/favorites/{fileId}</td>
        <td>Set the file favorite status</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#trackeditfile"><strong>trackEditFile</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/trackeditfile</td>
        <td>Track an editing session</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#updatefile"><strong>updateFile</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}</td>
        <td>Update a file</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>FoldersApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#checkupload"><strong>checkUpload</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/upload/check</td>
        <td>Check for upload conflicts</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#createfolder"><strong>createFolder</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/folder/{folderId}</td>
        <td>Create a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#createfolderprimaryexternallink"><strong>createFolderPrimaryExternalLink</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/folder/{id}/link</td>
        <td>Create the folder primary external link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#createreportfolderhistory"><strong>createReportFolderHistory</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/folder/{folderId}/log/report</td>
        <td>Start the folder history report generation</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#deletefolder"><strong>deleteFolder</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/folder/{folderId}</td>
        <td>Delete a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#generatexlsxbyfolder"><strong>generateXlsxByFolder</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/folder/{folderId}/xlsx</td>
        <td>Generate XLSX report by folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfavoritesfolder"><strong>getFavoritesFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@favorites</td>
        <td>Get the Favorites section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfilesusedspace"><strong>getFilesUsedSpace</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/filesusedspace</td>
        <td>Get used space of files</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolder"><strong>getFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/{folderId}/formfilter</td>
        <td>Get folder form filter</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolderbyfolderid"><strong>getFolderByFolderId</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/{folderId}</td>
        <td>Get a folder by ID</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolderhistory"><strong>getFolderHistory</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{folderId}/log</td>
        <td>Get folder history</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolderinfo"><strong>getFolderInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{folderId}</td>
        <td>Get folder information</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolderlinks"><strong>getFolderLinks</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{id}/links</td>
        <td>Get folder external links</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolderpath"><strong>getFolderPath</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{folderId}/path</td>
        <td>Get the folder path</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolderprimaryexternallink"><strong>getFolderPrimaryExternalLink</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{id}/link</td>
        <td>Get the folder primary external link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolders"><strong>getFolders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/{folderId}/subfolders</td>
        <td>Get subfolders</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getformsfolder"><strong>getFormsFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@forms</td>
        <td>Get the Forms section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getmyfolder"><strong>getMyFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@my</td>
        <td>Get the My documents section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getnewfolderitems"><strong>getNewFolderItems</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/{folderId}/news</td>
        <td>Get new folder items</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getrecentfolder"><strong>getRecentFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/recent</td>
        <td>Get the Recent section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getreportfolderhistory"><strong>getReportFolderHistory</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{folderId}/log/report</td>
        <td>Get the folder history report generation status</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getrootfolders"><strong>getRootFolders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@root</td>
        <td>Get filtered sections</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#gettrashfolder"><strong>getTrashFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@trash</td>
        <td>Get the Trash section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#insertfile"><strong>insertFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/insert</td>
        <td>Insert a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#insertfiletomyfrombody"><strong>insertFileToMyFromBody</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/@my/insert</td>
        <td>Insert a file into My documents</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#renamefolder"><strong>renameFolder</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/folder/{folderId}</td>
        <td>Rename a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#searchfolder"><strong>searchFolder</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/search</td>
        <td>Search a folder by metadata</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#setfolderorder"><strong>setFolderOrder</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/folder/{folderId}/order</td>
        <td>Set folder order</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#setfolderprimaryexternallink"><strong>setFolderPrimaryExternalLink</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/folder/{id}/links</td>
        <td>Set the folder external link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#terminatereportfolderhistory"><strong>terminateReportFolderHistory</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/folder/{folderId}/log/report</td>
        <td>Terminate the folder history report generation</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#uploadfile"><strong>uploadFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/upload</td>
        <td>Upload a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#uploadfiletomy"><strong>uploadFileToMy</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/@my/upload</td>
        <td>Upload a file to My documents</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>MetadataApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#assignfiletemplates"><strong>assignFileTemplates</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/metadata/file/{fileId}/templates</td>
        <td>Assign templates to a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#assignfoldertemplates"><strong>assignFolderTemplates</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/metadata/folder/{folderId}/templates</td>
        <td>Assign templates to a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#createfield"><strong>createField</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/metadata/templates/{templateId}/fields</td>
        <td>Add a metadata field</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#createtemplate"><strong>createTemplate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/metadata/templates</td>
        <td>Create a metadata template</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#deletefield"><strong>deleteField</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}</td>
        <td>Delete a metadata field</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#deletetemplate"><strong>deleteTemplate</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/metadata/templates/{templateId}</td>
        <td>Delete a metadata template</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#getcascadeprogress"><strong>getCascadeProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/metadata/folder/{folderId}/templates/progress</td>
        <td>Get cascade progress</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#getfilemetadata"><strong>getFileMetadata</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/metadata/file/{fileId}</td>
        <td>Get file metadata</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#getfoldermetadata"><strong>getFolderMetadata</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/metadata/folder/{folderId}</td>
        <td>Get folder metadata</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#gettemplate"><strong>getTemplate</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/metadata/templates/{templateId}</td>
        <td>Get a metadata template</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#gettemplates"><strong>getTemplates</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/metadata/templates</td>
        <td>Get metadata templates</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#setfilecustomfields"><strong>setFileCustomFields</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/metadata/file/{fileId}/customfields</td>
        <td>Set file custom fields</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#setfilevalues"><strong>setFileValues</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/metadata/file/{fileId}/values</td>
        <td>Set file metadata values</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#setfoldercustomfields"><strong>setFolderCustomFields</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/metadata/folder/{folderId}/customfields</td>
        <td>Set folder custom fields</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#setfoldervalues"><strong>setFolderValues</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/metadata/folder/{folderId}/values</td>
        <td>Set folder metadata values</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#unassignfiletemplate"><strong>unassignFileTemplate</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/metadata/file/{fileId}/templates/{templateId}</td>
        <td>Unassign a template from a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#unassignfoldertemplate"><strong>unassignFolderTemplate</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/metadata/folder/{folderId}/templates/{templateId}</td>
        <td>Unassign a template from a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#updatefield"><strong>updateField</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}</td>
        <td>Update a metadata field</td>
      </tr>
      <tr>
        <td><a href="docs/FilesMetadataApi.md#updatetemplate"><strong>updateTemplate</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/metadata/templates/{templateId}</td>
        <td>Update a metadata template</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>OperationsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#abortuploadsession"><strong>abortUploadSession</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/{folderId}/session/{sessionId}</td>
        <td>Abort an upload session</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#addfavorites"><strong>addFavorites</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/favorites</td>
        <td>Add favorite files and folders</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#bulkdownload"><strong>bulkDownload</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/bulkdownload</td>
        <td>Bulk download</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#checkconversionstatus"><strong>checkConversionStatus</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/checkconversion</td>
        <td>Get conversion status</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#checkmoveorcopybatchitems"><strong>checkMoveOrCopyBatchItems</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/fileops/move</td>
        <td>Check move or copy conflicts</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#checkmoveorcopydestfolder"><strong>checkMoveOrCopyDestFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/fileops/checkdestfolder</td>
        <td>Check the destination folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#copybatchitems"><strong>copyBatchItems</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/copy</td>
        <td>Copy files and folders</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#createuploadsession"><strong>createUploadSession</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/upload/create_session</td>
        <td>Chunked upload</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#createuploadsessioninfolder"><strong>createUploadSessionInFolder</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/session</td>
        <td>Create an upload session</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#deletebatchitems"><strong>deleteBatchItems</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/delete</td>
        <td>Delete files and folders</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#deletefavoritesfrombody"><strong>deleteFavoritesFromBody</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/favorites</td>
        <td>Delete favorite files and folders</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#deletefileversions"><strong>deleteFileVersions</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/deleteversion</td>
        <td>Delete file versions</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#duplicatebatchitems"><strong>duplicateBatchItems</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/duplicate</td>
        <td>Duplicate files and folders</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#emptytrash"><strong>emptyTrash</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/emptytrash</td>
        <td>Empty the Trash folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#finalizesession"><strong>finalizeSession</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/{folderId}/session/{sessionId}/finalize</td>
        <td>Finalize an upload session</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#getoperationstatuses"><strong>getOperationStatuses</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/fileops</td>
        <td>Get active file operations</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#getoperationstatusesbytype"><strong>getOperationStatusesByType</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/fileops/{operationType}</td>
        <td>Get file operations by type</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#markasread"><strong>markAsRead</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/markasread</td>
        <td>Mark files and folders as read</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#movebatchitems"><strong>moveBatchItems</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/move</td>
        <td>Move files and folders</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#startfileconversion"><strong>startFileConversion</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/checkconversion</td>
        <td>Start file conversion</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#terminatetasks"><strong>terminateTasks</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/terminate/{id}</td>
        <td>Cancel file operations</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#updatefilecomment"><strong>updateFileComment</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/comment</td>
        <td>Update a comment</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#uploadasyncsession"><strong>uploadAsyncSession</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/session/{sessionId}/upload</td>
        <td>Upload a numbered chunk</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#uploadsession"><strong>uploadSession</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/session/{sessionId}</td>
        <td>Upload the next chunk</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>QuotaApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/FilesQuotaApi.md#resetroomquota"><strong>resetRoomQuota</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/resetquota</td>
        <td>Reset the room quota limit</td>
      </tr>
      <tr>
        <td><a href="docs/FilesQuotaApi.md#updateroomsquota"><strong>updateRoomsQuota</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/roomquota</td>
        <td>Change the room quota limit</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>FilesSettingsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#changeaccesstothirdparty"><strong>changeAccessToThirdparty</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/thirdparty</td>
        <td>Change the third-party settings access</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#changeautomaticallycleanup"><strong>changeAutomaticallyCleanUp</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/autocleanup</td>
        <td>Update the trash bin auto-clearing setting</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#changedefaultaccessrights"><strong>changeDefaultAccessRights</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/dafaultaccessrights</td>
        <td>Change the default access rights</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#changedeleteconfirm"><strong>changeDeleteConfirm</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/changedeleteconfrim</td>
        <td>Ask for delete confirmation</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#changedownloadzip"><strong>changeDownloadZip</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/downloadtargz</td>
        <td>Change the download archive format</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#changeexternalsharingsettings"><strong>changeExternalSharingSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/externalsharingsettings</td>
        <td>Configure external sharing</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#checkdocserviceurl"><strong>checkDocServiceUrl</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/docservice</td>
        <td>Set the document service address</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#displayfileextension"><strong>displayFileExtension</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/displayfileextension</td>
        <td>Display a file extension</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#displayrecent"><strong>displayRecent</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/displayrecent</td>
        <td>Show the Recent section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#externalshare"><strong>externalShare</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/external</td>
        <td>Change the external sharing ability</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#externalsharesocialmedia"><strong>externalShareSocialMedia</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/externalsocialmedia</td>
        <td>Change the external sharing ability on social networks</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#forcesave"><strong>forcesave</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/forcesave</td>
        <td>Change the forcesaving ability</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#getautomaticallycleanup"><strong>getAutomaticallyCleanUp</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/settings/autocleanup</td>
        <td>Get the trash bin auto-clearing setting</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#getdefaulttemplates"><strong>getDefaultTemplates</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/settings/defaulttemplate</td>
        <td>Get the default template setting</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#getdocserviceurl"><strong>getDocServiceUrl</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/docservice</td>
        <td>Get the document service address</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#getfilesmodule"><strong>getFilesModule</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/info</td>
        <td>Get the Documents module information</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#getfilessettings"><strong>getFilesSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/settings</td>
        <td>Get file settings</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#hideconfirmcanceloperation"><strong>hideConfirmCancelOperation</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/hideconfirmcanceloperation</td>
        <td>Hide confirmation dialog when canceling operations</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#hideconfirmconvert"><strong>hideConfirmConvert</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/hideconfirmconvert</td>
        <td>Hide the confirmation dialog when converting</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#hideconfirmroomlifetime"><strong>hideConfirmRoomLifetime</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/hideconfirmroomlifetime</td>
        <td>Hide confirmation dialog when changing room lifetime settings</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#keepnewfilename"><strong>keepNewFileName</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/keepnewfilename</td>
        <td>Keep the default file name</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#resetdefaulttemplate"><strong>resetDefaultTemplate</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/settings/defaulttemplate</td>
        <td>Reset the default template setting</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#setdefaulttemplate"><strong>setDefaultTemplate</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/defaulttemplate</td>
        <td>Change the default template setting</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#setopeneditorinsametab"><strong>setOpenEditorInSameTab</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/openeditorinsametab</td>
        <td>Open document in the same browser tab</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#setorganizeroomsgrouping"><strong>setOrganizeRoomsGrouping</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/organizegrouping</td>
        <td>Organize rooms grouping</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#showquickactions"><strong>showQuickActions</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/showquickactions</td>
        <td>Display quick actions</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#storeforcesave"><strong>storeForcesave</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/storeforcesave</td>
        <td>Change the ability to store the forcesaved files</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#storeoriginal"><strong>storeOriginal</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/storeoriginal</td>
        <td>Change the ability to upload original formats</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#updatefileifexist"><strong>updateFileIfExist</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/updateifexist</td>
        <td>Update a file version if it exists</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#uploaddefaulttemplate"><strong>uploadDefaultTemplate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/settings/defaulttemplate</td>
        <td>Upload a file as the default template setting</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SharingApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#applyexternalsharepassword"><strong>applyExternalSharePassword</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/share/{key}/password</td>
        <td>Unlock a password-protected link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#changefileowner"><strong>changeFileOwner</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/owner</td>
        <td>Change the room or file owner</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getencryptionaccess"><strong>getEncryptionAccess</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/publickeys</td>
        <td>Get file encryption keys</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getexternalsharedata"><strong>getExternalShareData</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/share/{key}</td>
        <td>Resolve an external share link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getfilesecurityinfo"><strong>getFileSecurityInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{id}/share</td>
        <td>Get file sharing rights</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getfoldersecurityinfo"><strong>getFolderSecurityInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{id}/share</td>
        <td>Get folder sharing rights</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getgroupsmemberswithfilesecurity"><strong>getGroupsMembersWithFileSecurity</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/group/{groupId}/share</td>
        <td>Get file access of group members</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getgroupsmemberswithfoldersecurity"><strong>getGroupsMembersWithFolderSecurity</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{folderId}/group/{groupId}/share</td>
        <td>Get folder access of group members</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getsecurityinfo"><strong>getSecurityInfo</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/share</td>
        <td>Get sharing rights in batch</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getsharedusers"><strong>getSharedUsers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/sharedusers</td>
        <td>Get users to mention in a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#removesecurityinfo"><strong>removeSecurityInfo</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/share</td>
        <td>Remove sharing rights in batch</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#sendeditornotify"><strong>sendEditorNotify</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{fileId}/sendeditornotify</td>
        <td>Notify mentioned users</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#setfilesecurityinfo"><strong>setFileSecurityInfo</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{id}/share</td>
        <td>Share a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#setfoldersecurityinfo"><strong>setFolderSecurityInfo</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/folder/{id}/share</td>
        <td>Share a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#setsecurityinfo"><strong>setSecurityInfo</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/share</td>
        <td>Set sharing rights in batch</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ThirdPartyIntegrationApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#deletethirdparty"><strong>deleteThirdParty</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/thirdparty/{providerId}</td>
        <td>Remove a third-party account</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#getallproviders"><strong>getAllProviders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/thirdparty/providers</td>
        <td>Get all third-party providers</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#getbackupthirdpartyaccount"><strong>getBackupThirdPartyAccount</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/thirdparty/backup</td>
        <td>Get the third-party backup folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#getcapabilities"><strong>getCapabilities</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/thirdparty/capabilities</td>
        <td>Get third-party provider capabilities</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#getcommonthirdpartyfolders"><strong>getCommonThirdPartyFolders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/thirdparty/common</td>
        <td>Get common third-party folders</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#getthirdpartyaccounts"><strong>getThirdPartyAccounts</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/thirdparty</td>
        <td>Get the third-party accounts</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#savethirdparty"><strong>saveThirdParty</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/thirdparty</td>
        <td>Connect a third-party account</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#savethirdpartybackup"><strong>saveThirdPartyBackup</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/thirdparty/backup</td>
        <td>Connect the third-party backup storage</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Group</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>GroupApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#addgroup"><strong>addGroup</strong></a></td>
        <td><strong>POST</strong> /api/2.0/group</td>
        <td>Add a new group</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#addmembersto"><strong>addMembersTo</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/group/{id}/members</td>
        <td>Add group members</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#deletegroup"><strong>deleteGroup</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/group/{id}</td>
        <td>Delete a group</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#getgroup"><strong>getGroup</strong></a></td>
        <td><strong>GET</strong> /api/2.0/group/{id}</td>
        <td>Get a group</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#getgroupbyuserid"><strong>getGroupByUserId</strong></a></td>
        <td><strong>GET</strong> /api/2.0/group/user/{userId}</td>
        <td>Get user groups</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#getgroups"><strong>getGroups</strong></a></td>
        <td><strong>GET</strong> /api/2.0/group</td>
        <td>Get groups</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#movemembersto"><strong>moveMembersTo</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/group/{fromId}/members/{toId}</td>
        <td>Move group members</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#removemembersfrom"><strong>removeMembersFrom</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/group/{id}/members</td>
        <td>Remove group members</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#setgroupmanager"><strong>setGroupManager</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/group/{id}/manager</td>
        <td>Set a group manager</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#setmembersto"><strong>setMembersTo</strong></a></td>
        <td><strong>POST</strong> /api/2.0/group/{id}/members</td>
        <td>Replace group members</td>
      </tr>
      <tr>
        <td><a href="docs/GroupApi.md#updategroup"><strong>updateGroup</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/group/{id}</td>
        <td>Update a group</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SearchApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/GroupSearchApi.md#getgroupswithfilesshared"><strong>getGroupsWithFilesShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/group/file/{id}</td>
        <td>Search groups for a file</td>
      </tr>
      <tr>
        <td><a href="docs/GroupSearchApi.md#getgroupswithfoldersshared"><strong>getGroupsWithFoldersShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/group/folder/{id}</td>
        <td>Search groups for a folder</td>
      </tr>
      <tr>
        <td><a href="docs/GroupSearchApi.md#getgroupswithroomsshared"><strong>getGroupsWithRoomsShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/group/room/{id}</td>
        <td>Search groups for a room</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Migration</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>MigrationApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#cancelmigration"><strong>cancelMigration</strong></a></td>
        <td><strong>POST</strong> /api/2.0/migration/cancel</td>
        <td>Cancel migration</td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#clearmigration"><strong>clearMigration</strong></a></td>
        <td><strong>POST</strong> /api/2.0/migration/clear</td>
        <td>Clear migration</td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#finishmigration"><strong>finishMigration</strong></a></td>
        <td><strong>POST</strong> /api/2.0/migration/finish</td>
        <td>Finish migration</td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#getmigrationlogs"><strong>getMigrationLogs</strong></a></td>
        <td><strong>GET</strong> /api/2.0/migration/logs</td>
        <td>Get migration logs</td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#getmigrationstatus"><strong>getMigrationStatus</strong></a></td>
        <td><strong>GET</strong> /api/2.0/migration/status</td>
        <td>Get migration status</td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#listmigrations"><strong>listMigrations</strong></a></td>
        <td><strong>GET</strong> /api/2.0/migration/list</td>
        <td>Get available migrators</td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#startmigration"><strong>startMigration</strong></a></td>
        <td><strong>POST</strong> /api/2.0/migration/migrate</td>
        <td>Start migration</td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#uploadandinitializemigration"><strong>uploadAndInitializeMigration</strong></a></td>
        <td><strong>POST</strong> /api/2.0/migration/init/{migratorName}</td>
        <td>Parse migration archive</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>OAuth20</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>AuthorizationApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20AuthorizationApi.md#authorizeoauth"><strong>authorizeOAuth</strong></a></td>
        <td><strong>GET</strong> /oauth2/authorize</td>
        <td>Start the authorization flow</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20AuthorizationApi.md#exchangetoken"><strong>exchangeToken</strong></a></td>
        <td><strong>POST</strong> /oauth2/token</td>
        <td>Exchange the authorization code</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20AuthorizationApi.md#submitconsent"><strong>submitConsent</strong></a></td>
        <td><strong>POST</strong> /oauth2/authorize</td>
        <td>Submit the consent decision</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ClientManagementApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#changeactivation"><strong>changeActivation</strong></a></td>
        <td><strong>PATCH</strong> /api/2.0/oauth2/clients/{clientId}/activation</td>
        <td>Change client activation status</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#createclient"><strong>createClient</strong></a></td>
        <td><strong>POST</strong> /api/2.0/oauth2/clients</td>
        <td>Create a new OAuth2 client</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#deleteclient"><strong>deleteClient</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/oauth2/clients/{clientId}</td>
        <td>Delete an OAuth2 client</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#deletetenantclients"><strong>deleteTenantClients</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/oauth2/clients/tenant</td>
        <td>Delete all tenant OAuth2 clients</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#deleteuserclients"><strong>deleteUserClients</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/oauth2/clients</td>
        <td>Delete all user OAuth2 clients</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#regeneratesecret"><strong>regenerateSecret</strong></a></td>
        <td><strong>PATCH</strong> /api/2.0/oauth2/clients/{clientId}/regenerate</td>
        <td>Regenerate client secret</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#revokeuserclient"><strong>revokeUserClient</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/oauth2/clients/{clientId}/revoke</td>
        <td>Revoke client consent</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#updateclient"><strong>updateClient</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/oauth2/clients/{clientId}</td>
        <td>Update an existing OAuth2 client</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ClientQueryingApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getclient"><strong>getClient</strong></a></td>
        <td><strong>GET</strong> /api/2.0/oauth2/clients/{clientId}</td>
        <td>Get client details</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getclientinfo"><strong>getClientInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/oauth2/clients/{clientId}/info</td>
        <td>Get client info</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getclients"><strong>getClients</strong></a></td>
        <td><strong>GET</strong> /api/2.0/oauth2/clients</td>
        <td>List clients</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getclientsinfo"><strong>getClientsInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/oauth2/clients/info</td>
        <td>List client info</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getconsents"><strong>getConsents</strong></a></td>
        <td><strong>GET</strong> /api/2.0/oauth2/clients/consents</td>
        <td>List user consents</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getpublicclientinfo"><strong>getPublicClientInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/oauth2/clients/{clientId}/public/info</td>
        <td>Get public client info</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>DiscoveryApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20DiscoveryApi.md#handleoptions"><strong>handleOptions</strong></a></td>
        <td><strong>OPTIONS</strong> /.well-known/oauth-authorization-server</td>
        <td>Probe the discovery endpoint</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ScopeManagementApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ScopeManagementApi.md#getscopes"><strong>getScopes</strong></a></td>
        <td><strong>GET</strong> /api/2.0/oauth2/scopes</td>
        <td>List available OAuth2 scopes</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>People</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>EmailApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleEmailApi.md#changeuseremail"><strong>changeUserEmail</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/{userId}/email</td>
        <td>Change a user email</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleEmailApi.md#sendemailchangeinstructions"><strong>sendEmailChangeInstructions</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/email</td>
        <td>Send instructions to change email</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>GuestsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleGuestsApi.md#approveguestsharelink"><strong>approveGuestShareLink</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/guests/share/approve</td>
        <td>Approve a guest sharing link</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleGuestsApi.md#deleteguests"><strong>deleteGuests</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/people/guests</td>
        <td>Remove guest relations</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PasswordApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePasswordApi.md#changeuserpassword"><strong>changeUserPassword</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/{userId}/password</td>
        <td>Change a user password</td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePasswordApi.md#senduserpassword"><strong>sendUserPassword</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/password</td>
        <td>Remind a user password</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PhotosApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePhotosApi.md#creatememberphotothumbnails"><strong>createMemberPhotoThumbnails</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/{userId}/photo/thumbnails</td>
        <td>Create photo thumbnails</td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePhotosApi.md#deletememberphoto"><strong>deleteMemberPhoto</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/people/{userId}/photo</td>
        <td>Delete a user photo</td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePhotosApi.md#getmemberphoto"><strong>getMemberPhoto</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/{userId}/photo</td>
        <td>Get a user photo</td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePhotosApi.md#updatememberphoto"><strong>updateMemberPhoto</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/{userId}/photo</td>
        <td>Update a user photo</td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePhotosApi.md#uploadmemberphoto"><strong>uploadMemberPhoto</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/{userId}/photo</td>
        <td>Upload a user photo</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PeopleProfilesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#addmember"><strong>addMember</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people</td>
        <td>Add a user</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#checkuserexistsbyemail"><strong>checkUserExistsByEmail</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/exists</td>
        <td>Check whether an email is taken</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#deletemember"><strong>deleteMember</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/people/{userId}</td>
        <td>Delete a user</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#deleteprofile"><strong>deleteProfile</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/people/@self</td>
        <td>Close my own profile</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#getallprofiles"><strong>getAllProfiles</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people</td>
        <td>Get the active profiles</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#getclaims"><strong>getClaims</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/tokendiagnostics</td>
        <td>Get user claims</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#getprofilebyemail"><strong>getProfileByEmail</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/email</td>
        <td>Get a profile by user email</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#getprofilebyuserid"><strong>getProfileByUserId</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/{userId}</td>
        <td>Get a profile by user ID</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#getselfprofile"><strong>getSelfProfile</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/@self</td>
        <td>Get my profile</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#inviteusers"><strong>inviteUsers</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/invite</td>
        <td>Invite users</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#removeusers"><strong>removeUsers</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/delete</td>
        <td>Delete users</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#resenduserinvites"><strong>resendUserInvites</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/invite</td>
        <td>Resend activation emails</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#updatemember"><strong>updateMember</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/{userId}</td>
        <td>Update a user</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#updatememberculture"><strong>updateMemberCulture</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/{userId}/culture</td>
        <td>Update a user culture</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PeopleQuotaApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleQuotaApi.md#resetusersquota"><strong>resetUsersQuota</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/resetquota</td>
        <td>Reset a user quota limit</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleQuotaApi.md#updateuserquota"><strong>updateUserQuota</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/userquota</td>
        <td>Change a user quota limit</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PeopleSearchApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getaccountsentrieswithfilesshared"><strong>getAccountsEntriesWithFilesShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/accounts/file/{id}/search</td>
        <td>Search accounts for a file</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getaccountsentrieswithfoldersshared"><strong>getAccountsEntriesWithFoldersShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/accounts/folder/{id}/search</td>
        <td>Search accounts for a folder</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getaccountsentrieswithroomsshared"><strong>getAccountsEntriesWithRoomsShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/accounts/room/{id}/search</td>
        <td>Search accounts for a room</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getsearch"><strong>getSearch</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/@search/{query}</td>
        <td>Search users</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getsimplebyfilter"><strong>getSimpleByFilter</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/simple/filter</td>
        <td>Filter users in brief</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getuserswithfilesshared"><strong>getUsersWithFilesShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/file/{id}</td>
        <td>Search users for a file</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getuserswithfoldersshared"><strong>getUsersWithFoldersShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/folder/{id}</td>
        <td>Search users for a folder</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getuserswithroomshared"><strong>getUsersWithRoomShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/room/{id}</td>
        <td>Search users for a room</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#searchusersbyextendedfilter"><strong>searchUsersByExtendedFilter</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/filter</td>
        <td>Filter users in detail</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#searchusersbyquery"><strong>searchUsersByQuery</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/search</td>
        <td>Search users by query</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#searchusersbystatus"><strong>searchUsersByStatus</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/status/{status}/search</td>
        <td>Search users by status filter</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ThemeApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleThemeApi.md#changeportaltheme"><strong>changePortalTheme</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/theme</td>
        <td>Change the portal theme</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleThemeApi.md#getportaltheme"><strong>getPortalTheme</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/theme</td>
        <td>Get the portal theme</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ThirdPartyAccountsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleThirdPartyAccountsApi.md#getthirdpartyauthproviders"><strong>getThirdPartyAuthProviders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/thirdparty/providers</td>
        <td>Get third-party providers</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleThirdPartyAccountsApi.md#linkthirdpartyaccount"><strong>linkThirdPartyAccount</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/thirdparty/linkaccount</td>
        <td>Link a third-party account</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleThirdPartyAccountsApi.md#signupthirdpartyaccount"><strong>signupThirdPartyAccount</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/thirdparty/signup</td>
        <td>Sign up with a provider</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleThirdPartyAccountsApi.md#unlinkthirdpartyaccount"><strong>unlinkThirdPartyAccount</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/people/thirdparty/unlinkaccount</td>
        <td>Unlink a third-party account</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>UserDataApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#getdeletepersonalfolderprogress"><strong>getDeletePersonalFolderProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/delete/personal/progress</td>
        <td>Get the personal folder deletion progress</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#getreassignprogress"><strong>getReassignProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/reassign/progress/{userId}</td>
        <td>Get the reassignment progress</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#getremoveprogress"><strong>getRemoveProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/remove/progress/{userId}</td>
        <td>Get the deletion progress</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#necessaryreassign"><strong>necessaryReassign</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/reassign/necessary</td>
        <td>Check data for reassignment need</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#sendinstructionstodelete"><strong>sendInstructionsToDelete</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/self/delete</td>
        <td>Send the deletion instructions</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#startdeletepersonalfolder"><strong>startDeletePersonalFolder</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/delete/personal/start</td>
        <td>Delete the personal folder</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#startreassign"><strong>startReassign</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/reassign/start</td>
        <td>Start the data reassignment</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#startremove"><strong>startRemove</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/remove/start</td>
        <td>Start the data deletion</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#terminatereassign"><strong>terminateReassign</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/reassign/terminate</td>
        <td>Terminate the data reassignment</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#terminateremove"><strong>terminateRemove</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/remove/terminate</td>
        <td>Terminate the data deletion</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>UserStatusApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserStatusApi.md#getbystatus"><strong>getByStatus</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/status/{status}</td>
        <td>Get profiles by status</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserStatusApi.md#updateuseractivationstatus"><strong>updateUserActivationStatus</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/activationstatus/{activationStatus}</td>
        <td>Set my activation status</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserStatusApi.md#updateuserstatus"><strong>updateUserStatus</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/status/{status}</td>
        <td>Change a user status</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>UserTypeApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserTypeApi.md#getusertypeupdateprogress"><strong>getUserTypeUpdateProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/type/progress/{userId}</td>
        <td>Get the user type change progress</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserTypeApi.md#startusertypeupdate"><strong>startUserTypeUpdate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/type</td>
        <td>Start updating user type</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserTypeApi.md#terminateusertypeupdate"><strong>terminateUserTypeUpdate</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/type/terminate</td>
        <td>Terminate updating user type</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserTypeApi.md#updateusertype"><strong>updateUserType</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/type/{type}</td>
        <td>Change a user type</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Portal</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>PortalGuestsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PortalGuestsApi.md#getguestsharinglink"><strong>getGuestSharingLink</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/guests/{userId}/share</td>
        <td>Get a guest sharing link</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PaymentApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#calculatewalletpayment"><strong>calculateWalletPayment</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/payment/calculatewallet</td>
        <td>Calculate the wallet payment amount</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#changetenantwalletservicestate"><strong>changeTenantWalletServiceState</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/servicestate</td>
        <td>Switch a wallet service</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#createcustomermonthlyusagereport"><strong>createCustomerMonthlyUsageReport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/customer/usage/monthly/report</td>
        <td>Start the monthly usage report</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#createcustomeroperationsreport"><strong>createCustomerOperationsReport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/customer/operationsreport</td>
        <td>Start the operations report</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#createcustomerserviceusagereport"><strong>createCustomerServiceUsageReport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/customer/usage/report</td>
        <td>Start the service usage report</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getaccountingserviceprices"><strong>getAccountingServicePrices</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/accounting/prices/{serviceName}</td>
        <td>Get the service prices from the accounting service</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getactiveservices"><strong>getActiveServices</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/activeservices</td>
        <td>Get the active wallet services</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getaiprices"><strong>getAiPrices</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/ai-prices</td>
        <td>Get AI model prices</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcheckoutsetupurl"><strong>getCheckoutSetupUrl</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/checkoutsetupurl</td>
        <td>Get the checkout setup page URL</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcustomerbalance"><strong>getCustomerBalance</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/customer/balance</td>
        <td>Get the customer balance</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcustomerinfo"><strong>getCustomerInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/customerinfo</td>
        <td>Get the customer information</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcustomermonthlyusage"><strong>getCustomerMonthlyUsage</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/customer/usage/monthly</td>
        <td>Get the customer monthly usage</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcustomermonthlyusagereport"><strong>getCustomerMonthlyUsageReport</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/customer/usage/monthly/report</td>
        <td>Get the monthly usage report status</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcustomeroperations"><strong>getCustomerOperations</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/customer/operations</td>
        <td>Get the wallet operations</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcustomeroperationsreport"><strong>getCustomerOperationsReport</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/customer/operationsreport</td>
        <td>Get the operations report status</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcustomerserviceusage"><strong>getCustomerServiceUsage</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/customer/usage</td>
        <td>Get the customer service usage</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcustomerserviceusagereport"><strong>getCustomerServiceUsageReport</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/customer/usage/report</td>
        <td>Get the service usage report status</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getpaymentaccount"><strong>getPaymentAccount</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/account</td>
        <td>Get the billing account page</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getpaymentcurrencies"><strong>getPaymentCurrencies</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/currencies</td>
        <td>Get the billing currencies</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getpaymentquotas"><strong>getPaymentQuotas</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/quotas</td>
        <td>Get the purchasable quotas</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getpaymenturl"><strong>getPaymentUrl</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/payment/url</td>
        <td>Get the payment page URL</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getportalprices"><strong>getPortalPrices</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/prices</td>
        <td>Get the product prices</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getquotapaymentinformation"><strong>getQuotaPaymentInformation</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/quota</td>
        <td>Get the current plan and limits</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getrestrictedaimodels"><strong>getRestrictedAiModels</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/ai-model/restrictions</td>
        <td>Get restricted AI models</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getsubscriptionbalanceinfo"><strong>getSubscriptionBalanceInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/subscription/balance</td>
        <td>Get the subscription balance information</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#gettenantwalletservicesettings"><strong>getTenantWalletServiceSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/servicessettings</td>
        <td>Get the wallet service settings</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#gettenantwalletsettings"><strong>getTenantWalletSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/topupsettings</td>
        <td>Get the auto top-up settings</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getwalletservice"><strong>getWalletService</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/walletservice</td>
        <td>Get a wallet service</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getwalletservices"><strong>getWalletServices</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/walletservices</td>
        <td>Get wallet services</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#movesubscriptiontowallet"><strong>moveSubscriptionToWallet</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/subscription/movetowallet</td>
        <td>Move the subscription to the wallet</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#sendpaymentrequest"><strong>sendPaymentRequest</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/request</td>
        <td>Contact the sales team</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#setrestrictedaimodels"><strong>setRestrictedAiModels</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/payment/ai-model/restrictions</td>
        <td>Set restricted AI models</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#settenantwalletsettings"><strong>setTenantWalletSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/topupsettings</td>
        <td>Set the auto top-up settings</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#terminatecustomermonthlyusagereport"><strong>terminateCustomerMonthlyUsageReport</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/portal/payment/customer/usage/monthly/report</td>
        <td>Terminate the monthly usage report</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#terminatecustomeroperationsreport"><strong>terminateCustomerOperationsReport</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/portal/payment/customer/operationsreport</td>
        <td>Terminate the operations report</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#terminatecustomerserviceusagereport"><strong>terminateCustomerServiceUsageReport</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/portal/payment/customer/usage/report</td>
        <td>Terminate the service usage report</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#topupdeposit"><strong>topUpDeposit</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/deposit</td>
        <td>Top up the wallet</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#updatepayment"><strong>updatePayment</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/payment/update</td>
        <td>Change the subscription quantity</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#updatewalletpayment"><strong>updateWalletPayment</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/payment/updatewallet</td>
        <td>Change a wallet service quantity</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PortalQuotaApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PortalQuotaApi.md#getportalquota"><strong>getPortalQuota</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/quota</td>
        <td>Get the portal quota</td>
      </tr>
      <tr>
        <td><a href="docs/PortalQuotaApi.md#getportaltariff"><strong>getPortalTariff</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/tariff</td>
        <td>Get the portal tariff</td>
      </tr>
      <tr>
        <td><a href="docs/PortalQuotaApi.md#getportalusedspace"><strong>getPortalUsedSpace</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/usedspace</td>
        <td>Get the portal used space</td>
      </tr>
      <tr>
        <td><a href="docs/PortalQuotaApi.md#getrightquota"><strong>getRightQuota</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/quota/right</td>
        <td>Get the recommended quota</td>
      </tr>
      <tr>
        <td><a href="docs/PortalQuotaApi.md#getupcomingpayments"><strong>getUpcomingPayments</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/tariff/upcoming</td>
        <td>Get upcoming payments</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PortalSettingsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PortalSettingsApi.md#continueportal"><strong>continuePortal</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/continue</td>
        <td>Restore a portal</td>
      </tr>
      <tr>
        <td><a href="docs/PortalSettingsApi.md#deleteportal"><strong>deletePortal</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/portal/delete</td>
        <td>Delete a portal</td>
      </tr>
      <tr>
        <td><a href="docs/PortalSettingsApi.md#getportalinformation"><strong>getPortalInformation</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal</td>
        <td>Get portal information</td>
      </tr>
      <tr>
        <td><a href="docs/PortalSettingsApi.md#getportalpath"><strong>getPortalPath</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/path</td>
        <td>Get a path to the portal</td>
      </tr>
      <tr>
        <td><a href="docs/PortalSettingsApi.md#senddeleteinstructions"><strong>sendDeleteInstructions</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/delete</td>
        <td>Send removal instructions</td>
      </tr>
      <tr>
        <td><a href="docs/PortalSettingsApi.md#sendsuspendinstructions"><strong>sendSuspendInstructions</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/suspend</td>
        <td>Send suspension instructions</td>
      </tr>
      <tr>
        <td><a href="docs/PortalSettingsApi.md#suspendportal"><strong>suspendPortal</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/suspend</td>
        <td>Deactivate a portal</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>UsersApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#createinvitationlink"><strong>createInvitationLink</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/users/invitationlink</td>
        <td>Create an invitation link</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#deleteinvitationlink"><strong>deleteInvitationLink</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/portal/users/invitationlink</td>
        <td>Delete an invitation link</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#getinvitationlink"><strong>getInvitationLink</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/users/invite/{employeeType}</td>
        <td>Get a legacy invitation link</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#getinvitationlinkbyemployeetype"><strong>getInvitationLinkByEmployeeType</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/users/invitationlink/{employeeType}</td>
        <td>Get an invitation link by role</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#getportaluserscount"><strong>getPortalUsersCount</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/userscount</td>
        <td>Get a number of portal users</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#getuserbyid"><strong>getUserById</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/users/{userId}</td>
        <td>Get a portal user</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#markgiftmessageasread"><strong>markGiftMessageAsRead</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/present/mark</td>
        <td>Mark a gift message as read</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#sendcongratulations"><strong>sendCongratulations</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/sendcongratulations</td>
        <td>Send congratulations</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#updateinvitationlink"><strong>updateInvitationLink</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/users/invitationlink</td>
        <td>Update an invitation link</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Rooms</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>RoomsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#addroomtags"><strong>addRoomTags</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/tags</td>
        <td>Attach tags to a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#archiveroom"><strong>archiveRoom</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/archive</td>
        <td>Archive a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#changeroomcover"><strong>changeRoomCover</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/{id}/cover</td>
        <td>Change the room cover</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#createroom"><strong>createRoom</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms</td>
        <td>Create a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#createroomfromtemplate"><strong>createRoomFromTemplate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/fromtemplate</td>
        <td>Create a room from the template</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#createroomlogo"><strong>createRoomLogo</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/{id}/logo</td>
        <td>Set the room logo</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#createroomtag"><strong>createRoomTag</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/tags</td>
        <td>Create a room tag</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#createroomtemplate"><strong>createRoomTemplate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/roomtemplate</td>
        <td>Create a room template</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#createroomthirdparty"><strong>createRoomThirdParty</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/thirdparty/{id}</td>
        <td>Create a third-party room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#deletecustomtags"><strong>deleteCustomTags</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/tags</td>
        <td>Delete the custom room tags</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#deleteroom"><strong>deleteRoom</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/rooms/{id}</td>
        <td>Remove a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#deleteroomlogo"><strong>deleteRoomLogo</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/rooms/{id}/logo</td>
        <td>Remove a room logo</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#deleteroomtags"><strong>deleteRoomTags</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/rooms/{id}/tags</td>
        <td>Detach tags from a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getexternaldbsyncstatus"><strong>getExternalDbSyncStatus</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/{id}/externaldbsync</td>
        <td>Get external DB sync status</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getnewroomitems"><strong>getNewRoomItems</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/{id}/news</td>
        <td>Get new items in a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getpublicsettings"><strong>getPublicSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/roomtemplate/{id}/public</td>
        <td>Get room template public access</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomaifolder"><strong>getRoomAiFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/{id}/ai</td>
        <td>Get the .ai folder of a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomcovers"><strong>getRoomCovers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/covers</td>
        <td>Get room cover gallery</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomcreatingstatus"><strong>getRoomCreatingStatus</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/fromtemplate/status</td>
        <td>Get the room creation progress</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomindexexport"><strong>getRoomIndexExport</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/indexexport</td>
        <td>Get the room index export</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroominfo"><strong>getRoomInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/{id}</td>
        <td>Get room information</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomlinks"><strong>getRoomLinks</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/{id}/links</td>
        <td>Get the room links</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomsecurityinfo"><strong>getRoomSecurityInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/{id}/share</td>
        <td>Get the room access rights</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomtagsinfo"><strong>getRoomTagsInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/tags</td>
        <td>Get available room tags</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomtemplatecreatingstatus"><strong>getRoomTemplateCreatingStatus</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/roomtemplate/status</td>
        <td>Get room template creation status</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomsfolder"><strong>getRoomsFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms</td>
        <td>Get rooms</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomsnewitems"><strong>getRoomsNewItems</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/news</td>
        <td>Get new items in all rooms</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomsprimaryexternallink"><strong>getRoomsPrimaryExternalLink</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/{id}/link</td>
        <td>Get the room primary external link</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#hastaglinks"><strong>hasTagLinks</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/tags/{tagName}/haslinks</td>
        <td>Check room tag usage</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#pinroom"><strong>pinRoom</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/pin</td>
        <td>Pin a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#reorderroom"><strong>reorderRoom</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/reorder</td>
        <td>Reorder room contents</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#resendemailinvitations"><strong>resendEmailInvitations</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/{id}/resend</td>
        <td>Resend the room invitations</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#searchrooms"><strong>searchRooms</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/search</td>
        <td>Search the rooms by metadata</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#setpublicsettings"><strong>setPublicSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/roomtemplate/public</td>
        <td>Set room template public access</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#setroomlink"><strong>setRoomLink</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/links</td>
        <td>Set the room external or invitation link</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#setroomsecurity"><strong>setRoomSecurity</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/share</td>
        <td>Set the room access rights</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#startexternaldbsync"><strong>startExternalDbSync</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/{id}/externaldbsync</td>
        <td>Start external DB sync</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#startroomindexexport"><strong>startRoomIndexExport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/{id}/indexexport</td>
        <td>Start the room index export</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#terminateroomindexexport"><strong>terminateRoomIndexExport</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/rooms/indexexport</td>
        <td>Terminate the room index export</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#unarchiveroom"><strong>unarchiveRoom</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/unarchive</td>
        <td>Unarchive a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#unpinroom"><strong>unpinRoom</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/unpin</td>
        <td>Unpin a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#updateroom"><strong>updateRoom</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}</td>
        <td>Update a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#updateroomtag"><strong>updateRoomTag</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/tags</td>
        <td>Rename a room tag</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#uploadroomlogo"><strong>uploadRoomLogo</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/logos</td>
        <td>Upload a room logo image</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>GroupsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/RoomsGroupsApi.md#addroomgroup"><strong>addRoomGroup</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/group</td>
        <td>Add a new room group</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsGroupsApi.md#changeroomgroupicon"><strong>changeRoomGroupIcon</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/group/{id}/icon</td>
        <td>Change room group icon</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsGroupsApi.md#deleteroomgroup"><strong>deleteRoomGroup</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/group/{id}</td>
        <td>Delete a room group</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsGroupsApi.md#getroomgroupinfo"><strong>getRoomGroupInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/group/{id}</td>
        <td>Get room group info</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsGroupsApi.md#getroomgroups"><strong>getRoomGroups</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/group</td>
        <td>List room groups</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsGroupsApi.md#updateroomgroup"><strong>updateRoomGroup</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/group/{id}</td>
        <td>Update room group</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PrivacyRoomApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/RoomsPrivacyRoomApi.md#deletekeys"><strong>deleteKeys</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/privacyroom/keys/{id}</td>
        <td>Delete an encryption key</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsPrivacyRoomApi.md#getuserkeys"><strong>getUserKeys</strong></a></td>
        <td><strong>GET</strong> /api/2.0/privacyroom/keys</td>
        <td>Get own encryption keys</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsPrivacyRoomApi.md#getuserkeysforroom"><strong>getUserKeysForRoom</strong></a></td>
        <td><strong>GET</strong> /api/2.0/privacyroom/{roomId}/access</td>
        <td>Get private room access keys</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsPrivacyRoomApi.md#replacekey"><strong>replaceKey</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/privacyroom/keys</td>
        <td>Rotate an encryption key</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsPrivacyRoomApi.md#setkeys"><strong>setKeys</strong></a></td>
        <td><strong>POST</strong> /api/2.0/privacyroom/keys</td>
        <td>Create an encryption key</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Security</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>SecurityAccessToDevToolsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAccessToDevToolsApi.md#settenantdevtoolsaccesssettings"><strong>setTenantDevToolsAccessSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/devtoolsaccess</td>
        <td>Set the Developer Tools access settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ActiveConnectionsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityActiveConnectionsApi.md#getallactiveconnections"><strong>getAllActiveConnections</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/activeconnections</td>
        <td>Get active connections</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityActiveConnectionsApi.md#logoutactiveconnection"><strong>logOutActiveConnection</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/security/activeconnections/logout/{loginEventId}</td>
        <td>Log out one connection</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionschangepassword"><strong>logOutAllActiveConnectionsChangePassword</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/security/activeconnections/logoutallchangepassword</td>
        <td>Log out and reset password</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionsforuser"><strong>logOutAllActiveConnectionsForUser</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/security/activeconnections/logoutall/{userId}</td>
        <td>Log out a user everywhere</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityActiveConnectionsApi.md#logoutallexceptthisconnection"><strong>logOutAllExceptThisConnection</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/security/activeconnections/logoutallexceptthis</td>
        <td>Log out other connections</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>AuditTrailDataApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#createaudittrailreport"><strong>createAuditTrailReport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/security/audit/events/report</td>
        <td>Start audit trail report</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getauditeventsbyfilter"><strong>getAuditEventsByFilter</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/events/filter</td>
        <td>Get filtered audit events</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getauditsettings"><strong>getAuditSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/settings/lifetime</td>
        <td>Get audit lifetime settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getaudittrailmappers"><strong>getAuditTrailMappers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/mappers</td>
        <td>Get audit trail mappers</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getaudittrailreport"><strong>getAuditTrailReport</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/events/report</td>
        <td>Get audit trail report status</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getaudittrailtypes"><strong>getAuditTrailTypes</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/types</td>
        <td>Get audit trail types</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getlastauditevents"><strong>getLastAuditEvents</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/events/last</td>
        <td>Get recent audit events</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#setauditsettings"><strong>setAuditSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/security/audit/settings/lifetime</td>
        <td>Set audit lifetime settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#terminateaudittrailreport"><strong>terminateAuditTrailReport</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/security/audit/events/report</td>
        <td>Terminate audit trail report</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SecurityBannersVisibilityApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityBannersVisibilityApi.md#settenantbannersettings"><strong>setTenantBannerSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/banner</td>
        <td>Set the banners visibility</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>CSPApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityCSPApi.md#configurecsp"><strong>configureCsp</strong></a></td>
        <td><strong>POST</strong> /api/2.0/security/csp</td>
        <td>Configure CSP settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityCSPApi.md#getcspsettings"><strong>getCspSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/csp</td>
        <td>Get CSP settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>FirebaseApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityFirebaseApi.md#docregisterpusnnotificationdevice"><strong>docRegisterPusnNotificationDevice</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/push/docregisterdevice</td>
        <td>Register a push device</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityFirebaseApi.md#subscribedocumentspushnotification"><strong>subscribeDocumentsPushNotification</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/push/docsubscribe</td>
        <td>Set push subscription</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>LoginHistoryApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityLoginHistoryApi.md#createloginhistoryreport"><strong>createLoginHistoryReport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/security/audit/login/report</td>
        <td>Start login history report</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityLoginHistoryApi.md#getlastloginevents"><strong>getLastLoginEvents</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/login/last</td>
        <td>Get recent login events</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityLoginHistoryApi.md#getlogineventsbyfilter"><strong>getLoginEventsByFilter</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/login/filter</td>
        <td>Get filtered login events</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityLoginHistoryApi.md#getloginhistoryreport"><strong>getLoginHistoryReport</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/login/report</td>
        <td>Get login history report status</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityLoginHistoryApi.md#terminateloginhistoryreport"><strong>terminateLoginHistoryReport</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/security/audit/login/report</td>
        <td>Terminate login history report</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>OAuth2Api</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityOAuth2Api.md#generatejwttoken"><strong>generateJwtToken</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/oauth2/token</td>
        <td>Generate JWT token</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SMTPSettingsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecuritySMTPSettingsApi.md#getsmtpoperationstatus"><strong>getSmtpOperationStatus</strong></a></td>
        <td><strong>GET</strong> /api/2.0/smtpsettings/smtp/test/status</td>
        <td>Get SMTP test status</td>
      </tr>
      <tr>
        <td><a href="docs/SecuritySMTPSettingsApi.md#getsmtpsettings"><strong>getSmtpSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/smtpsettings/smtp</td>
        <td>Get SMTP settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecuritySMTPSettingsApi.md#resetsmtpsettings"><strong>resetSmtpSettings</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/smtpsettings/smtp</td>
        <td>Reset SMTP settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecuritySMTPSettingsApi.md#savesmtpsettings"><strong>saveSmtpSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/smtpsettings/smtp</td>
        <td>Save SMTP settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecuritySMTPSettingsApi.md#testsmtpsettings"><strong>testSmtpSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/smtpsettings/smtp/test</td>
        <td>Test SMTP settings</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>Settings</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>AccessToDevToolsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsAccessToDevToolsApi.md#gettenantaccessdevtoolssettings"><strong>getTenantAccessDevToolsSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/devtoolsaccess</td>
        <td>Get the Developer Tools access settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SettingsAuthorizationApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsAuthorizationApi.md#getauthservices"><strong>getAuthServices</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/authservice</td>
        <td>Get the authorization services</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsAuthorizationApi.md#saveauthkeys"><strong>saveAuthKeys</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/authservice</td>
        <td>Save the authorization keys</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsAuthorizationApi.md#testexternaldatabaseconnection"><strong>testExternalDatabaseConnection</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/authservice/externaldb/test</td>
        <td>Test external database connection</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>BannersVisibilityApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsBannersVisibilityApi.md#gettenantbannersettings"><strong>getTenantBannerSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/banner</td>
        <td>Get the banners visibility</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>CommonSettingsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#closeadminhelper"><strong>closeAdminHelper</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/closeadminhelper</td>
        <td>Close the admin helper</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#completewizard"><strong>completeWizard</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/wizard/complete</td>
        <td>Complete the Wizard settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#configuredeeplink"><strong>configureDeepLink</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/deeplink</td>
        <td>Configure the deep link settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#deleteportalcolortheme"><strong>deletePortalColorTheme</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/colortheme</td>
        <td>Delete a color theme</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#getdeeplinksettings"><strong>getDeepLinkSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/deeplink</td>
        <td>Get the deep link settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#getpaymentsettings"><strong>getPaymentSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/payment</td>
        <td>Get the payment settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#getportalcolortheme"><strong>getPortalColorTheme</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/colortheme</td>
        <td>Get a color theme</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#getportalhostname"><strong>getPortalHostname</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/machine</td>
        <td>Get the portal hostname</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#getportallogo"><strong>getPortalLogo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/logo</td>
        <td>Get a portal logo</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#getportalsettings"><strong>getPortalSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings</td>
        <td>Get the portal settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#getsocketsettings"><strong>getSocketSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/socket</td>
        <td>Get the socket settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#getsupportedcultures"><strong>getSupportedCultures</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/cultures</td>
        <td>Get supported languages</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#gettenantaiaccesssettings"><strong>getTenantAiAccessSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/ai-access</td>
        <td>Get the AI access settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#gettenantuserinvitationsettings"><strong>getTenantUserInvitationSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/invitationsettings</td>
        <td>Get the user invitation settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#gettimezones"><strong>getTimeZones</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/timezones</td>
        <td>Get time zones</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#savedefaultfolder"><strong>saveDefaultFolder</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/defaultfolder</td>
        <td>Set the default folder</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#savednssettings"><strong>saveDnsSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/dns</td>
        <td>Save the DNS settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#savemaildomainsettings"><strong>saveMailDomainSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/maildomainsettings</td>
        <td>Save the mail domain settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#saveportalcolortheme"><strong>savePortalColorTheme</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/colortheme</td>
        <td>Save a color theme</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#settenantaiaccesssettings"><strong>setTenantAiAccessSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/ai-access</td>
        <td>Set the AI access settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#updateemailactivationsettings"><strong>updateEmailActivationSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/emailactivation</td>
        <td>Update the email activation settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#updateinvitationsettings"><strong>updateInvitationSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/invitationsettings</td>
        <td>Update the user invitation settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>CookiesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCookiesApi.md#getcookiesettings"><strong>getCookieSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/cookiesettings</td>
        <td>Get the cookie lifetime settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCookiesApi.md#updatecookiesettings"><strong>updateCookieSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/cookiesettings</td>
        <td>Update the cookie lifetime settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>DocsCloudApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#calculatedevpack"><strong>calculateDevPack</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/docscloud/calculatedevpack</td>
        <td>Calculate the Docs Connect Dev Pack switch cost</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#createtenantquotareport"><strong>createTenantQuotaReport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/docscloud/tenant/quota/report</td>
        <td>Start the Docs Connect quota report</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#gettenant"><strong>getTenant</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/docscloud/tenant</td>
        <td>Get the Docs Connect tenant</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#gettenantconfig"><strong>getTenantConfig</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/docscloud/tenant/config</td>
        <td>Get the Docs Connect tenant configuration</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#gettenantinfo"><strong>getTenantInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/docscloud/tenant/info</td>
        <td>Get the Docs Connect tenant information</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#gettenantquota"><strong>getTenantQuota</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/docscloud/tenant/quota</td>
        <td>Get the Docs Connect tenant quota</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#gettenantquotareport"><strong>getTenantQuotaReport</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/docscloud/tenant/quota/report</td>
        <td>Get the Docs Connect quota report status</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#gettenantusage"><strong>getTenantUsage</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/docscloud/tenant/usage</td>
        <td>Get the Docs Connect tenant usage</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#startdocscloudtrial"><strong>startDocsCloudTrial</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/docscloud/trial</td>
        <td>Start the Docs Connect trial</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#switchtodevpack"><strong>switchToDevPack</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/docscloud/switchtodevpack</td>
        <td>Switch Docs Connect to Docs Connect Dev Pack</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#terminatetenantquotareport"><strong>terminateTenantQuotaReport</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/docscloud/tenant/quota/report</td>
        <td>Terminate the Docs Connect quota report</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsDocsCloudApi.md#updatetenantconfig"><strong>updateTenantConfig</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/docscloud/tenant/config</td>
        <td>Update the Docs Connect tenant configuration</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>EncryptionApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsEncryptionApi.md#getstorageencryptionprogress"><strong>getStorageEncryptionProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/encryption/progress</td>
        <td>Get the storage encryption progress</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsEncryptionApi.md#getstorageencryptionsettings"><strong>getStorageEncryptionSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/encryption/settings</td>
        <td>Get the storage encryption settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsEncryptionApi.md#startstorageencryption"><strong>startStorageEncryption</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/encryption/start</td>
        <td>Start the storage encryption</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>GreetingSettingsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsGreetingSettingsApi.md#getgreetingsettings"><strong>getGreetingSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/greetingsettings</td>
        <td>Get greeting settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsGreetingSettingsApi.md#getisdefaultgreetingsettings"><strong>getIsDefaultGreetingSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/greetingsettings/isdefault</td>
        <td>Check the default greeting settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsGreetingSettingsApi.md#restoregreetingsettings"><strong>restoreGreetingSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/greetingsettings/restore</td>
        <td>Restore the greeting settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsGreetingSettingsApi.md#savegreetingsettings"><strong>saveGreetingSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/greetingsettings</td>
        <td>Save the greeting settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>IPRestrictionsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsIPRestrictionsApi.md#getiprestrictions"><strong>getIpRestrictions</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/iprestrictions</td>
        <td>Get IP restrictions</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsIPRestrictionsApi.md#readiprestrictionssettings"><strong>readIpRestrictionsSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/iprestrictions/settings</td>
        <td>Get IP restriction settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsIPRestrictionsApi.md#saveiprestrictions"><strong>saveIpRestrictions</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/iprestrictions</td>
        <td>Save IP restrictions</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsIPRestrictionsApi.md#updateiprestrictionssettings"><strong>updateIpRestrictionsSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/iprestrictions/settings</td>
        <td>Update IP restriction settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>LicenseApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsLicenseApi.md#acceptlicense"><strong>acceptLicense</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/license/accept</td>
        <td>Activate a license</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsLicenseApi.md#getislicenserequired"><strong>getIsLicenseRequired</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/license/required</td>
        <td>Check if a license is required</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsLicenseApi.md#refreshlicense"><strong>refreshLicense</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/license/refresh</td>
        <td>Refresh the license</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsLicenseApi.md#uploadlicense"><strong>uploadLicense</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/license</td>
        <td>Upload a license</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>LoginSettingsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsLoginSettingsApi.md#getloginsettings"><strong>getLoginSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/loginsettings</td>
        <td>Get login settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsLoginSettingsApi.md#setdefaultloginsettings"><strong>setDefaultLoginSettings</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/security/loginsettings</td>
        <td>Reset login settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsLoginSettingsApi.md#updateloginsettings"><strong>updateLoginSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security/loginsettings</td>
        <td>Update login settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>MessagesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsMessagesApi.md#enableadminmessagesettings"><strong>enableAdminMessageSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/messagesettings</td>
        <td>Enable or disable administrator messages</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsMessagesApi.md#sendadminmail"><strong>sendAdminMail</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/sendadmmail</td>
        <td>Send a message to the administrator</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsMessagesApi.md#sendjoininvitemail"><strong>sendJoinInviteMail</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/sendjoininvite</td>
        <td>Send an invitation email</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>NotificationsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsNotificationsApi.md#getnotificationchannels"><strong>getNotificationChannels</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/notification/channels</td>
        <td>Get notification channels</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsNotificationsApi.md#getnotificationsettings"><strong>getNotificationSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/notification/{type}</td>
        <td>Check notification availability</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsNotificationsApi.md#getroomsnotificationsettings"><strong>getRoomsNotificationSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/notification/rooms</td>
        <td>Get muted rooms</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsNotificationsApi.md#setnotificationsettings"><strong>setNotificationSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/notification</td>
        <td>Set notification status</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsNotificationsApi.md#setroomsnotificationstatus"><strong>setRoomsNotificationStatus</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/notification/rooms</td>
        <td>Mute or unmute a room</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>OwnerApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsOwnerApi.md#sendownerchangeinstructions"><strong>sendOwnerChangeInstructions</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/owner</td>
        <td>Start the portal owner change</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsOwnerApi.md#updateportalowner"><strong>updatePortalOwner</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/owner</td>
        <td>Confirm the portal owner change</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SettingsQuotaApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsQuotaApi.md#getuserquotasettings"><strong>getUserQuotaSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/userquotasettings</td>
        <td>Get the user quota settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsQuotaApi.md#saveaiagentquotasettings"><strong>saveAiAgentQuotaSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/aiagentquotasettings</td>
        <td>Save the AI Agent quota settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsQuotaApi.md#saveroomquotasettings"><strong>saveRoomQuotaSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/roomquotasettings</td>
        <td>Save the room quota settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsQuotaApi.md#settenantquotasettings"><strong>setTenantQuotaSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/tenantquotasettings</td>
        <td>Save the tenant quota settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>RebrandingApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#deleteadditionalwhitelabelsettings"><strong>deleteAdditionalWhiteLabelSettings</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/rebranding/additional</td>
        <td>Delete the additional white label settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#deletecompanywhitelabelsettings"><strong>deleteCompanyWhiteLabelSettings</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/rebranding/company</td>
        <td>Delete the company white label settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#getadditionalwhitelabelsettings"><strong>getAdditionalWhiteLabelSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/rebranding/additional</td>
        <td>Get the additional white label settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#getcompanywhitelabelsettings"><strong>getCompanyWhiteLabelSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/rebranding/company</td>
        <td>Get the company white label settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#getenablewhitelabel"><strong>getEnableWhitelabel</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/enablewhitelabel</td>
        <td>Check the white label availability</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#getisdefaultwhitelabellogotext"><strong>getIsDefaultWhiteLabelLogoText</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/whitelabel/logotext/isdefault</td>
        <td>Check the default logo text</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#getisdefaultwhitelabellogos"><strong>getIsDefaultWhiteLabelLogos</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/whitelabel/logos/isdefault</td>
        <td>Check the default white label logos</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#getlicensordata"><strong>getLicensorData</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/companywhitelabel</td>
        <td>Get the licensor data</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#getwhitelabellogotext"><strong>getWhiteLabelLogoText</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/whitelabel/logotext</td>
        <td>Get the white label logo text</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#getwhitelabellogos"><strong>getWhiteLabelLogos</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/whitelabel/logos</td>
        <td>Get the white label logos</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#restorewhitelabellogotext"><strong>restoreWhiteLabelLogoText</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/whitelabel/logotext/restore</td>
        <td>Restore the white label logo text</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#restorewhitelabellogos"><strong>restoreWhiteLabelLogos</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/whitelabel/logos/restore</td>
        <td>Restore the white label logos</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#saveadditionalwhitelabelsettings"><strong>saveAdditionalWhiteLabelSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/rebranding/additional</td>
        <td>Save the additional white label settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#savecompanywhitelabelsettings"><strong>saveCompanyWhiteLabelSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/rebranding/company</td>
        <td>Save the company white label settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#savewhitelabellogotext"><strong>saveWhiteLabelLogoText</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/whitelabel/logotext/save</td>
        <td>Save the white label logo text</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#savewhitelabelsettings"><strong>saveWhiteLabelSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/whitelabel/logos/save</td>
        <td>Save the white label logos</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#savewhitelabelsettingsfromfiles"><strong>saveWhiteLabelSettingsFromFiles</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/whitelabel/logos/savefromfiles</td>
        <td>Save the logos from files</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SSOApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSSOApi.md#getdefaultssosettingsv2"><strong>getDefaultSsoSettingsV2</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/ssov2/default</td>
        <td>Get the default SSO settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSSOApi.md#getssosettingsv2"><strong>getSsoSettingsV2</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/ssov2</td>
        <td>Get the SSO settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSSOApi.md#getssosettingsv2constants"><strong>getSsoSettingsV2Constants</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/ssov2/constants</td>
        <td>Get the SSO settings constants</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSSOApi.md#resetssosettingsv2"><strong>resetSsoSettingsV2</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/ssov2</td>
        <td>Reset the SSO settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSSOApi.md#savessosettingsv2"><strong>saveSsoSettingsV2</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/ssov2</td>
        <td>Save the SSO settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SecurityApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getenabledmodules"><strong>getEnabledModules</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/modules</td>
        <td>Get enabled modules</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getisproductadministrator"><strong>getIsProductAdministrator</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/administrator</td>
        <td>Check product administrator</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getpasswordsettings"><strong>getPasswordSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/password</td>
        <td>Get password settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getproductadministrators"><strong>getProductAdministrators</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/administrator/{productId}</td>
        <td>Get product administrators</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getwebitemsecurityinfo"><strong>getWebItemSecurityInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/{id}</td>
        <td>Check module availability</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getwebitemsettingssecurityinfo"><strong>getWebItemSettingsSecurityInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security</td>
        <td>Get module access settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#setaccesstowebitems"><strong>setAccessToWebItems</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security/access</td>
        <td>Set access to modules in bulk</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#setproductadministrator"><strong>setProductAdministrator</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security/administrator</td>
        <td>Set product administrator</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#setwebitemsecurity"><strong>setWebItemSecurity</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security</td>
        <td>Set module access</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#updatepasswordsettings"><strong>updatePasswordSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security/password</td>
        <td>Update password settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>StatisticsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStatisticsApi.md#getspaceusagestatistics"><strong>getSpaceUsageStatistics</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/statistics/spaceusage/{id}</td>
        <td>Get the space usage statistics</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>StorageApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#getallbackupstorages"><strong>getAllBackupStorages</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/storage/backup</td>
        <td>Get the backup storages</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#getallcdnstorages"><strong>getAllCdnStorages</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/storage/cdn</td>
        <td>Get the CDN storages</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#getallstorages"><strong>getAllStorages</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/storage</td>
        <td>Get the portal storages</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#getamazons3regions"><strong>getAmazonS3Regions</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/storage/s3/regions</td>
        <td>Get the Amazon S3 regions</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#getstorageprogress"><strong>getStorageProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/storage/progress</td>
        <td>Get the storage migration progress</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#resetcdntodefault"><strong>resetCdnToDefault</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/storage/cdn</td>
        <td>Reset the CDN storage settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#resetstoragetodefault"><strong>resetStorageToDefault</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/storage</td>
        <td>Reset the storage settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#updatecdnstorage"><strong>updateCdnStorage</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/storage/cdn</td>
        <td>Update the CDN storage</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#updatestorage"><strong>updateStorage</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/storage</td>
        <td>Switch the portal storage</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>TFASettingsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#gettfaappcodes"><strong>getTfaAppCodes</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/tfaappcodes</td>
        <td>Get the TFA backup codes</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#gettfaconfirmdata"><strong>getTfaConfirmData</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/tfaapp/confirm</td>
        <td>Get TFA confirmation data</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#gettfasettings"><strong>getTfaSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/tfaapp</td>
        <td>Get the TFA settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#tfaappgeneratesetupcode"><strong>tfaAppGenerateSetupCode</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/tfaapp/setup</td>
        <td>Generate the TFA setup code</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#tfavalidateauthcode"><strong>tfaValidateAuthCode</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/tfaapp/validate</td>
        <td>Validate the TFA code</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#unlinktfaapp"><strong>unlinkTfaApp</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/tfaappnewapp</td>
        <td>Unlink the TFA application</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#updatetfaappcodes"><strong>updateTfaAppCodes</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/tfaappnewcodes</td>
        <td>Regenerate the TFA backup codes</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#updatetfasettings"><strong>updateTfaSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/tfaapp</td>
        <td>Update the TFA settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#updatetfasettingslink"><strong>updateTfaSettingsLink</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/tfaappwithlink</td>
        <td>Update TFA settings with a link</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>TelegramApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTelegramApi.md#checktelegram"><strong>checkTelegram</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/telegram/check</td>
        <td>Check the Telegram connection</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTelegramApi.md#linktelegram"><strong>linkTelegram</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/telegram/link</td>
        <td>Get the Telegram link</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTelegramApi.md#unlinktelegram"><strong>unlinkTelegram</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/telegram/link</td>
        <td>Unlink Telegram</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>WebhooksApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#createwebhook"><strong>createWebhook</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/webhook</td>
        <td>Create a webhook</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#enablewebhook"><strong>enableWebhook</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/webhook/enable</td>
        <td>Switch a webhook on or off</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#gettenantwebhooks"><strong>getTenantWebhooks</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/webhook</td>
        <td>Get the portal webhooks</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#getwebhooktriggers"><strong>getWebhookTriggers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/webhook/triggers</td>
        <td>Get the webhook triggers</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#getwebhookslogs"><strong>getWebhooksLogs</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/webhooks/log</td>
        <td>Get the webhook delivery log</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#removewebhook"><strong>removeWebhook</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/webhook/{id}</td>
        <td>Remove a webhook</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#retrywebhook"><strong>retryWebhook</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/webhook/{id}/retry</td>
        <td>Retry a webhook delivery</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#retrywebhooks"><strong>retryWebhooks</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/webhook/retry</td>
        <td>Retry webhook deliveries</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#updatewebhook"><strong>updateWebhook</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/webhook</td>
        <td>Update a webhook</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>WebpluginsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebpluginsApi.md#addwebpluginfromfile"><strong>addWebPluginFromFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/webplugins</td>
        <td>Add a web plugin</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebpluginsApi.md#deletewebplugin"><strong>deleteWebPlugin</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/webplugins/{name}</td>
        <td>Delete a web plugin</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebpluginsApi.md#getwebplugin"><strong>getWebPlugin</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/webplugins/{name}</td>
        <td>Get a web plugin by name</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebpluginsApi.md#getwebplugins"><strong>getWebPlugins</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/webplugins</td>
        <td>Get web plugins</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebpluginsApi.md#updatewebplugin"><strong>updateWebPlugin</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/webplugins/{name}</td>
        <td>Update a web plugin</td>
      </tr>
    </tbody>
  </table>

</details>
<details>
  <summary>ThirdParty</summary>

  <table>
    <tbody>
      <tr>
        <th>Method</th>
        <th>HTTP request</th>
        <th>Description</th>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;"><strong>ThirdPartyApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/ThirdPartyApi.md#getthirdpartycode"><strong>getThirdPartyCode</strong></a></td>
        <td><strong>GET</strong> /api/2.0/thirdparty/{provider}</td>
        <td>Get provider consent URL</td>
      </tr>
    </tbody>
  </table>

</details>

### Documentation For Models

<details><summary>Models list</summary>

 - [AccessRequestKeyDto](docs/AccessRequestKeyDto.md)
 - [AccountEntryArrayWrapper](docs/AccountEntryArrayWrapper.md)
 - [AccountEntryDto](docs/AccountEntryDto.md)
 - [AccountInfoArrayWrapper](docs/AccountInfoArrayWrapper.md)
 - [AccountInfoDto](docs/AccountInfoDto.md)
 - [AccountLoginType](docs/AccountLoginType.md)
 - [AccountSearchArea](docs/AccountSearchArea.md)
 - [AceShortArrayWrapper](docs/AceShortArrayWrapper.md)
 - [AceShortDto](docs/AceShortDto.md)
 - [ActionLinkActionRequest](docs/ActionLinkActionRequest.md)
 - [ActionLinkRequest](docs/ActionLinkRequest.md)
 - [ActionType](docs/ActionType.md)
 - [ActiveConnectionsDto](docs/ActiveConnectionsDto.md)
 - [ActiveConnectionsItemDto](docs/ActiveConnectionsItemDto.md)
 - [ActiveConnectionsWrapper](docs/ActiveConnectionsWrapper.md)
 - [ActiveServiceArrayWrapper](docs/ActiveServiceArrayWrapper.md)
 - [ActiveServiceDto](docs/ActiveServiceDto.md)
 - [AdditionalResourcesDto](docs/AdditionalResourcesDto.md)
 - [AdditionalResourcesWrapper](docs/AdditionalResourcesWrapper.md)
 - [AdditionalWhiteLabelSettingsDto](docs/AdditionalWhiteLabelSettingsDto.md)
 - [AdditionalWhiteLabelSettingsRequestDto](docs/AdditionalWhiteLabelSettingsRequestDto.md)
 - [AdditionalWhiteLabelSettingsWrapper](docs/AdditionalWhiteLabelSettingsWrapper.md)
 - [AdminMessageBaseSettingsRequestDto](docs/AdminMessageBaseSettingsRequestDto.md)
 - [AdminMessageSettingsRequestDto](docs/AdminMessageSettingsRequestDto.md)
 - [AiActionArgs](docs/AiActionArgs.md)
 - [AiActionArgsPrompt](docs/AiActionArgsPrompt.md)
 - [AiActionType](docs/AiActionType.md)
 - [AiAgentNewItemsDto](docs/AiAgentNewItemsDto.md)
 - [AiAgentsCreateRequest](docs/AiAgentsCreateRequest.md)
 - [AiAgentsDeleteRequest](docs/AiAgentsDeleteRequest.md)
 - [AiAgentsGet200Response](docs/AiAgentsGet200Response.md)
 - [AiAgentsGet200ResponseAllOfResponse](docs/AiAgentsGet200ResponseAllOfResponse.md)
 - [AiAgentsResetQuotaRequest](docs/AiAgentsResetQuotaRequest.md)
 - [AiAgentsUpdateQuotaRequest](docs/AiAgentsUpdateQuotaRequest.md)
 - [AiAgentsUpdateQuotaRequestRoomIdsInner](docs/AiAgentsUpdateQuotaRequestRoomIdsInner.md)
 - [AiAgentsUpdateRequest](docs/AiAgentsUpdateRequest.md)
 - [AiApiDateTime](docs/AiApiDateTime.md)
 - [AiApproveToolCallRequest](docs/AiApproveToolCallRequest.md)
 - [AiAssignmentMutationResult](docs/AiAssignmentMutationResult.md)
 - [AiAssignmentsAssignRequest](docs/AiAssignmentsAssignRequest.md)
 - [AiAssignmentsCascadeProfileDeleteRequest](docs/AiAssignmentsCascadeProfileDeleteRequest.md)
 - [AiAttachment](docs/AiAttachment.md)
 - [AiAttachmentFormKeysInner](docs/AiAttachmentFormKeysInner.md)
 - [AiAttachmentsLinkToMessageRequest](docs/AiAttachmentsLinkToMessageRequest.md)
 - [AiAttachmentsSaveFileRequest](docs/AiAttachmentsSaveFileRequest.md)
 - [AiAttachmentsSaveFileRequestInput](docs/AiAttachmentsSaveFileRequestInput.md)
 - [AiAttachmentsSaveFilesManyRequest](docs/AiAttachmentsSaveFilesManyRequest.md)
 - [AiBuiltinProviderType](docs/AiBuiltinProviderType.md)
 - [AiBulkAssignmentResult](docs/AiBulkAssignmentResult.md)
 - [AiBulkAssignmentResultErrorsInner](docs/AiBulkAssignmentResultErrorsInner.md)
 - [AiChatEvent](docs/AiChatEvent.md)
 - [AiChatPriceDto](docs/AiChatPriceDto.md)
 - [AiChatSettingsDto](docs/AiChatSettingsDto.md)
 - [AiChatToolPermissionMode](docs/AiChatToolPermissionMode.md)
 - [AiConfigDto](docs/AiConfigDto.md)
 - [AiCreateProfileInput](docs/AiCreateProfileInput.md)
 - [AiCreatePromptInput](docs/AiCreatePromptInput.md)
 - [AiDistributedTaskStatus](docs/AiDistributedTaskStatus.md)
 - [AiEditorToolsCall200Response](docs/AiEditorToolsCall200Response.md)
 - [AiEditorToolsCallRequest](docs/AiEditorToolsCallRequest.md)
 - [AiEditorToolsList200Response](docs/AiEditorToolsList200Response.md)
 - [AiEditorToolsList200ResponseToolsInner](docs/AiEditorToolsList200ResponseToolsInner.md)
 - [AiEmbeddingPriceDto](docs/AiEmbeddingPriceDto.md)
 - [AiEmbeddingProviderType](docs/AiEmbeddingProviderType.md)
 - [AiEmployeeDto](docs/AiEmployeeDto.md)
 - [AiEntryPricingDtoAiChatPriceDto](docs/AiEntryPricingDtoAiChatPriceDto.md)
 - [AiEntryPricingDtoAiEmbeddingPriceDto](docs/AiEntryPricingDtoAiEmbeddingPriceDto.md)
 - [AiEntryPricingDtoAiImagePriceDto](docs/AiEntryPricingDtoAiImagePriceDto.md)
 - [AiEntryPricingDtoDecimal](docs/AiEntryPricingDtoDecimal.md)
 - [AiErrorData](docs/AiErrorData.md)
 - [AiErrorResponse](docs/AiErrorResponse.md)
 - [AiExportTextToDocx202Response](docs/AiExportTextToDocx202Response.md)
 - [AiExportTextToDocxRequest](docs/AiExportTextToDocxRequest.md)
 - [AiExportTextToDocxRequestFolderId](docs/AiExportTextToDocxRequestFolderId.md)
 - [AiFileEntryBaseDto](docs/AiFileEntryBaseDto.md)
 - [AiFileEntryDto](docs/AiFileEntryDto.md)
 - [AiFileEntryDtoAllOfAvailableShareRights](docs/AiFileEntryDtoAllOfAvailableShareRights.md)
 - [AiFileEntryDtoAllOfSecurity](docs/AiFileEntryDtoAllOfSecurity.md)
 - [AiFileEntryDtoAllOfShareSettings](docs/AiFileEntryDtoAllOfShareSettings.md)
 - [AiFileEntryType](docs/AiFileEntryType.md)
 - [AiFileOperationDto](docs/AiFileOperationDto.md)
 - [AiFileOperationType](docs/AiFileOperationType.md)
 - [AiFileOperationWrapper](docs/AiFileOperationWrapper.md)
 - [AiFileShare](docs/AiFileShare.md)
 - [AiFolderArrayWrapper](docs/AiFolderArrayWrapper.md)
 - [AiFolderContentDto](docs/AiFolderContentDto.md)
 - [AiFolderContentWrapper](docs/AiFolderContentWrapper.md)
 - [AiFolderDto](docs/AiFolderDto.md)
 - [AiFolderMutationResult](docs/AiFolderMutationResult.md)
 - [AiFolderType](docs/AiFolderType.md)
 - [AiFolderWrapper](docs/AiFolderWrapper.md)
 - [AiImagePriceDto](docs/AiImagePriceDto.md)
 - [AiImportError](docs/AiImportError.md)
 - [AiImportMode](docs/AiImportMode.md)
 - [AiImportResult](docs/AiImportResult.md)
 - [AiImportResultImported](docs/AiImportResultImported.md)
 - [AiLogoCoverDto](docs/AiLogoCoverDto.md)
 - [AiLogoDto](docs/AiLogoDto.md)
 - [AiMCPItem](docs/AiMCPItem.md)
 - [AiModel](docs/AiModel.md)
 - [AiNewItemsAgentNewItemsArrayWrapper](docs/AiNewItemsAgentNewItemsArrayWrapper.md)
 - [AiNewItemsDtoAgentNewItemsDto](docs/AiNewItemsDtoAgentNewItemsDto.md)
 - [AiOpenAIChatCompletionChunk](docs/AiOpenAIChatCompletionChunk.md)
 - [AiOpenAIChoiceDelta](docs/AiOpenAIChoiceDelta.md)
 - [AiOpenAIChunkChoice](docs/AiOpenAIChunkChoice.md)
 - [AiOpenAIFinishReason](docs/AiOpenAIFinishReason.md)
 - [AiOpenAIStreamChunk](docs/AiOpenAIStreamChunk.md)
 - [AiOpenAIStreamError](docs/AiOpenAIStreamError.md)
 - [AiOpenAIStreamErrorError](docs/AiOpenAIStreamErrorError.md)
 - [AiOpenAIToolCallDelta](docs/AiOpenAIToolCallDelta.md)
 - [AiOpenAIToolCallDeltaFunction](docs/AiOpenAIToolCallDeltaFunction.md)
 - [AiOpenOrCreateResult](docs/AiOpenOrCreateResult.md)
 - [AiOpenaiChatCompletions403Response](docs/AiOpenaiChatCompletions403Response.md)
 - [AiOpenaiChatCompletions403ResponseError](docs/AiOpenaiChatCompletions403ResponseError.md)
 - [AiPreferencesSetDeepModeRequest](docs/AiPreferencesSetDeepModeRequest.md)
 - [AiPreferencesSetReasoningLevelRequest](docs/AiPreferencesSetReasoningLevelRequest.md)
 - [AiPreferencesSetToolPermissionModeRequest](docs/AiPreferencesSetToolPermissionModeRequest.md)
 - [AiPriceCurrencyDto](docs/AiPriceCurrencyDto.md)
 - [AiPricesDto](docs/AiPricesDto.md)
 - [AiPricesWrapper](docs/AiPricesWrapper.md)
 - [AiProfile](docs/AiProfile.md)
 - [AiProfileMutationResult](docs/AiProfileMutationResult.md)
 - [AiProfilesGetById200Response](docs/AiProfilesGetById200Response.md)
 - [AiProfilesListProviderModels400Response](docs/AiProfilesListProviderModels400Response.md)
 - [AiProfilesListProviderModels400ResponseAnyOf](docs/AiProfilesListProviderModels400ResponseAnyOf.md)
 - [AiProfilesListProviderModelsRequest](docs/AiProfilesListProviderModelsRequest.md)
 - [AiProfilesTestConnection200Response](docs/AiProfilesTestConnection200Response.md)
 - [AiProfilesTestConnection200ResponseAnyOf](docs/AiProfilesTestConnection200ResponseAnyOf.md)
 - [AiPrompt](docs/AiPrompt.md)
 - [AiPromptBundle](docs/AiPromptBundle.md)
 - [AiPromptFolder](docs/AiPromptFolder.md)
 - [AiPromptMutationResult](docs/AiPromptMutationResult.md)
 - [AiPromptsImportBundleRequest](docs/AiPromptsImportBundleRequest.md)
 - [AiPromptsImportBundleRequestOptions](docs/AiPromptsImportBundleRequestOptions.md)
 - [AiPromptsMoveRequest](docs/AiPromptsMoveRequest.md)
 - [AiPromptsRenameFolderRequest](docs/AiPromptsRenameFolderRequest.md)
 - [AiPromptsUpdateRequest](docs/AiPromptsUpdateRequest.md)
 - [AiPromptsUpdateRequestUpdates](docs/AiPromptsUpdateRequestUpdates.md)
 - [AiProvider](docs/AiProvider.md)
 - [AiProviderType](docs/AiProviderType.md)
 - [AiReasoningDepth](docs/AiReasoningDepth.md)
 - [AiReasoningLevel](docs/AiReasoningLevel.md)
 - [AiReasoningSupport](docs/AiReasoningSupport.md)
 - [AiRegenerateStreamRequest](docs/AiRegenerateStreamRequest.md)
 - [AiResolvedAssignment](docs/AiResolvedAssignment.md)
 - [AiRoomDataLifetimeDto](docs/AiRoomDataLifetimeDto.md)
 - [AiRoomDataLifetimePeriod](docs/AiRoomDataLifetimePeriod.md)
 - [AiRoomType](docs/AiRoomType.md)
 - [AiSendCustomRequest](docs/AiSendCustomRequest.md)
 - [AiSendRequest](docs/AiSendRequest.md)
 - [AiSendStreamBody](docs/AiSendStreamBody.md)
 - [AiSettingsDto](docs/AiSettingsDto.md)
 - [AiSettingsWrapper](docs/AiSettingsWrapper.md)
 - [AiSuccessResponse](docs/AiSuccessResponse.md)
 - [AiThread](docs/AiThread.md)
 - [AiThreadMessageLike](docs/AiThreadMessageLike.md)
 - [AiThreadMessageLikeContent](docs/AiThreadMessageLikeContent.md)
 - [AiThreadMessageLikeContentAnyOfInner](docs/AiThreadMessageLikeContentAnyOfInner.md)
 - [AiThreadMessageLikeStatus](docs/AiThreadMessageLikeStatus.md)
 - [AiThreadsAppendUserMessage200Response](docs/AiThreadsAppendUserMessage200Response.md)
 - [AiThreadsAppendUserMessageRequest](docs/AiThreadsAppendUserMessageRequest.md)
 - [AiThreadsCreateRequest](docs/AiThreadsCreateRequest.md)
 - [AiThreadsOpenOrCreateRequest](docs/AiThreadsOpenOrCreateRequest.md)
 - [AiThreadsOpenOrCreateRequestEntityMeta](docs/AiThreadsOpenOrCreateRequestEntityMeta.md)
 - [AiThreadsRegenerateTitle200Response](docs/AiThreadsRegenerateTitle200Response.md)
 - [AiThreadsRegenerateTitleRequest](docs/AiThreadsRegenerateTitleRequest.md)
 - [AiThreadsRenameRequest](docs/AiThreadsRenameRequest.md)
 - [AiThreadsTouchRequest](docs/AiThreadsTouchRequest.md)
 - [AiThreadsUpdateMessageRequest](docs/AiThreadsUpdateMessageRequest.md)
 - [AiToolAnnotations](docs/AiToolAnnotations.md)
 - [AiToolCallData](docs/AiToolCallData.md)
 - [AiToolPermissionMode](docs/AiToolPermissionMode.md)
 - [AiToolsAddCustomServerRequest](docs/AiToolsAddCustomServerRequest.md)
 - [AiToolsBulkResult](docs/AiToolsBulkResult.md)
 - [AiToolsBulkResultErrorsInner](docs/AiToolsBulkResultErrorsInner.md)
 - [AiToolsListSystemTools200Response](docs/AiToolsListSystemTools200Response.md)
 - [AiToolsMutationResult](docs/AiToolsMutationResult.md)
 - [AiToolsRemoveCustomServerRequest](docs/AiToolsRemoveCustomServerRequest.md)
 - [AiToolsReplaceAllCustomServersRequest](docs/AiToolsReplaceAllCustomServersRequest.md)
 - [AiToolsSetAllowAlwaysRequest](docs/AiToolsSetAllowAlwaysRequest.md)
 - [AiToolsSetDisabledRequest](docs/AiToolsSetDisabledRequest.md)
 - [AiToolsUpdateCustomServerRequest](docs/AiToolsUpdateCustomServerRequest.md)
 - [AiUserSettingsDto](docs/AiUserSettingsDto.md)
 - [AiUserSettingsWrapper](docs/AiUserSettingsWrapper.md)
 - [AiVectorizationSettingsDto](docs/AiVectorizationSettingsDto.md)
 - [AiVectorizationSettingsWrapper](docs/AiVectorizationSettingsWrapper.md)
 - [AiVectorizationStartTask200Response](docs/AiVectorizationStartTask200Response.md)
 - [AiVectorizationStartTaskRequest](docs/AiVectorizationStartTaskRequest.md)
 - [AiWatermarkAdditions](docs/AiWatermarkAdditions.md)
 - [AiWatermarkDto](docs/AiWatermarkDto.md)
 - [AiWebSearchConfig](docs/AiWebSearchConfig.md)
 - [AiWebSearchConfigureRequest](docs/AiWebSearchConfigureRequest.md)
 - [AiWebSearchMutationResult](docs/AiWebSearchMutationResult.md)
 - [AiWebSearchSetActiveConfigRequest](docs/AiWebSearchSetActiveConfigRequest.md)
 - [AmazonS3RegionArrayWrapper](docs/AmazonS3RegionArrayWrapper.md)
 - [AmazonS3RegionDto](docs/AmazonS3RegionDto.md)
 - [AnonymousConfigDto](docs/AnonymousConfigDto.md)
 - [ApiDateTime](docs/ApiDateTime.md)
 - [ApiKeyResponseArrayWrapper](docs/ApiKeyResponseArrayWrapper.md)
 - [ApiKeyResponseDto](docs/ApiKeyResponseDto.md)
 - [ApiKeyResponseWrapper](docs/ApiKeyResponseWrapper.md)
 - [AppArrayWrapper](docs/AppArrayWrapper.md)
 - [AppDto](docs/AppDto.md)
 - [AppWrapper](docs/AppWrapper.md)
 - [ApplyFilterOption](docs/ApplyFilterOption.md)
 - [ArchiveRoomRequest](docs/ArchiveRoomRequest.md)
 - [ArrayArrayWrapper](docs/ArrayArrayWrapper.md)
 - [AssignMetadataTemplates](docs/AssignMetadataTemplates.md)
 - [AuditEventArrayWrapper](docs/AuditEventArrayWrapper.md)
 - [AuditEventDto](docs/AuditEventDto.md)
 - [AuditReportFormat](docs/AuditReportFormat.md)
 - [AuditTrailActionDto](docs/AuditTrailActionDto.md)
 - [AuditTrailModuleDto](docs/AuditTrailModuleDto.md)
 - [AuditTrailProductArrayWrapper](docs/AuditTrailProductArrayWrapper.md)
 - [AuditTrailProductDto](docs/AuditTrailProductDto.md)
 - [AuditTrailTypesDto](docs/AuditTrailTypesDto.md)
 - [AuditTrailTypesWrapper](docs/AuditTrailTypesWrapper.md)
 - [AuthKeyDto](docs/AuthKeyDto.md)
 - [AuthKeyRequest](docs/AuthKeyRequest.md)
 - [AuthRequestDto](docs/AuthRequestDto.md)
 - [AuthServiceArrayWrapper](docs/AuthServiceArrayWrapper.md)
 - [AuthServiceDto](docs/AuthServiceDto.md)
 - [AuthWithCodeRequestDto](docs/AuthWithCodeRequestDto.md)
 - [AuthenticationTokenDto](docs/AuthenticationTokenDto.md)
 - [AuthenticationTokenWrapper](docs/AuthenticationTokenWrapper.md)
 - [AutoCleanUpDataDto](docs/AutoCleanUpDataDto.md)
 - [AutoCleanUpDataWrapper](docs/AutoCleanUpDataWrapper.md)
 - [AutoCleanupRequestDto](docs/AutoCleanupRequestDto.md)
 - [BackupCronRequest](docs/BackupCronRequest.md)
 - [BackupHistoryRecordArrayWrapper](docs/BackupHistoryRecordArrayWrapper.md)
 - [BackupHistoryRecordDto](docs/BackupHistoryRecordDto.md)
 - [BackupPeriod](docs/BackupPeriod.md)
 - [BackupProgressDto](docs/BackupProgressDto.md)
 - [BackupProgressEnum](docs/BackupProgressEnum.md)
 - [BackupProgressWrapper](docs/BackupProgressWrapper.md)
 - [BackupServiceStateDto](docs/BackupServiceStateDto.md)
 - [BackupServiceStateWrapper](docs/BackupServiceStateWrapper.md)
 - [BackupStorageType](docs/BackupStorageType.md)
 - [BackupsCountResultDto](docs/BackupsCountResultDto.md)
 - [BackupsCountResultWrapper](docs/BackupsCountResultWrapper.md)
 - [BalanceDto](docs/BalanceDto.md)
 - [BalanceWrapper](docs/BalanceWrapper.md)
 - [BaseBatchRequestDto](docs/BaseBatchRequestDto.md)
 - [BaseBatchRequestDtoAllOfFileIds](docs/BaseBatchRequestDtoAllOfFileIds.md)
 - [BaseBatchRequestDtoAllOfFolderIds](docs/BaseBatchRequestDtoAllOfFolderIds.md)
 - [BatchRequestDto](docs/BatchRequestDto.md)
 - [BatchRequestDtoAllOfDestFolderId](docs/BatchRequestDtoAllOfDestFolderId.md)
 - [BatchRequestDtoAllOfFileIds](docs/BatchRequestDtoAllOfFileIds.md)
 - [BatchRequestDtoAllOfFolderIds](docs/BatchRequestDtoAllOfFolderIds.md)
 - [BatchTagsRequestDto](docs/BatchTagsRequestDto.md)
 - [BooleanWrapper](docs/BooleanWrapper.md)
 - [CapabilitiesDto](docs/CapabilitiesDto.md)
 - [CapabilitiesWrapper](docs/CapabilitiesWrapper.md)
 - [ChangeClientActivationRequest](docs/ChangeClientActivationRequest.md)
 - [ChangeEmailRequest](docs/ChangeEmailRequest.md)
 - [ChangeHistoryRequest](docs/ChangeHistoryRequest.md)
 - [ChangeOwnerRequestDto](docs/ChangeOwnerRequestDto.md)
 - [ChangePasswordRequest](docs/ChangePasswordRequest.md)
 - [ChangeWalletServiceStateRequestDto](docs/ChangeWalletServiceStateRequestDto.md)
 - [ChatSettings](docs/ChatSettings.md)
 - [ChatSettingsDto](docs/ChatSettingsDto.md)
 - [CheckConfirmRequestDto](docs/CheckConfirmRequestDto.md)
 - [CheckConversionRequestDto](docs/CheckConversionRequestDto.md)
 - [CheckDestFolderDto](docs/CheckDestFolderDto.md)
 - [CheckDestFolderResult](docs/CheckDestFolderResult.md)
 - [CheckDestFolderWrapper](docs/CheckDestFolderWrapper.md)
 - [CheckDocServiceUrlRequestDto](docs/CheckDocServiceUrlRequestDto.md)
 - [CheckFillFormDraftRequest](docs/CheckFillFormDraftRequest.md)
 - [CheckMoveOrCopyBatchItemsDestFolderIdParameter](docs/CheckMoveOrCopyBatchItemsDestFolderIdParameter.md)
 - [CheckMoveOrCopyBatchItemsFolderIdsParameterInner](docs/CheckMoveOrCopyBatchItemsFolderIdsParameterInner.md)
 - [CheckUploadRequest](docs/CheckUploadRequest.md)
 - [ChunkedUploadSessionDto](docs/ChunkedUploadSessionDto.md)
 - [ChunkedUploadSessionResultDto](docs/ChunkedUploadSessionResultDto.md)
 - [ChunkedUploadSessionResultWrapper](docs/ChunkedUploadSessionResultWrapper.md)
 - [ChunkedUploadSessionWrapper](docs/ChunkedUploadSessionWrapper.md)
 - [ClientInfoResponse](docs/ClientInfoResponse.md)
 - [ClientResponse](docs/ClientResponse.md)
 - [ClientSecretResponse](docs/ClientSecretResponse.md)
 - [CoEditingConfigDto](docs/CoEditingConfigDto.md)
 - [CoEditingConfigMode](docs/CoEditingConfigMode.md)
 - [ColorThemeColorsDto](docs/ColorThemeColorsDto.md)
 - [ColorThemeColorsRequestDto](docs/ColorThemeColorsRequestDto.md)
 - [CompanyWhiteLabelSettingsDto](docs/CompanyWhiteLabelSettingsDto.md)
 - [CompanyWhiteLabelSettingsRequestDto](docs/CompanyWhiteLabelSettingsRequestDto.md)
 - [CompanyWhiteLabelSettingsWrapper](docs/CompanyWhiteLabelSettingsWrapper.md)
 - [ConfigurationDto](docs/ConfigurationDto.md)
 - [ConfigurationWrapper](docs/ConfigurationWrapper.md)
 - [ConfirmData](docs/ConfirmData.md)
 - [ConfirmDto](docs/ConfirmDto.md)
 - [ConfirmType](docs/ConfirmType.md)
 - [ConfirmWrapper](docs/ConfirmWrapper.md)
 - [ConnectionTestResultDto](docs/ConnectionTestResultDto.md)
 - [ConnectionTestResultWrapper](docs/ConnectionTestResultWrapper.md)
 - [Contact](docs/Contact.md)
 - [ConversationResultArrayWrapper](docs/ConversationResultArrayWrapper.md)
 - [ConversationResultDto](docs/ConversationResultDto.md)
 - [CookieSettingsDto](docs/CookieSettingsDto.md)
 - [CookieSettingsRequestDto](docs/CookieSettingsRequestDto.md)
 - [CookieSettingsWrapper](docs/CookieSettingsWrapper.md)
 - [CopyAsRequest](docs/CopyAsRequest.md)
 - [CopyAsRequestDestFolderId](docs/CopyAsRequestDestFolderId.md)
 - [CoverRequestDto](docs/CoverRequestDto.md)
 - [CoversResultArrayWrapper](docs/CoversResultArrayWrapper.md)
 - [CoversResultDto](docs/CoversResultDto.md)
 - [CreateApiKeyRequestDto](docs/CreateApiKeyRequestDto.md)
 - [CreateBackupScheduleRequestDto](docs/CreateBackupScheduleRequestDto.md)
 - [CreateClientRequest](docs/CreateClientRequest.md)
 - [CreateFileRequest](docs/CreateFileRequest.md)
 - [CreateFileRequestTemplateId](docs/CreateFileRequestTemplateId.md)
 - [CreateFolderRequest](docs/CreateFolderRequest.md)
 - [CreateMetadataTemplateRequestDto](docs/CreateMetadataTemplateRequestDto.md)
 - [CreateRoomFromTemplateDto](docs/CreateRoomFromTemplateDto.md)
 - [CreateRoomRequestDto](docs/CreateRoomRequestDto.md)
 - [CreateTagRequestDto](docs/CreateTagRequestDto.md)
 - [CreateTextOrHtmlFileRequest](docs/CreateTextOrHtmlFileRequest.md)
 - [CreateThirdPartyRoomRequest](docs/CreateThirdPartyRoomRequest.md)
 - [CreateWebhooksConfigRequestDto](docs/CreateWebhooksConfigRequestDto.md)
 - [CronParamsDto](docs/CronParamsDto.md)
 - [CspDto](docs/CspDto.md)
 - [CspRequestDto](docs/CspRequestDto.md)
 - [CspWrapper](docs/CspWrapper.md)
 - [CurrenciesArrayWrapper](docs/CurrenciesArrayWrapper.md)
 - [CurrenciesDto](docs/CurrenciesDto.md)
 - [CurrentLicenseInfo](docs/CurrentLicenseInfo.md)
 - [CustomColorThemeDto](docs/CustomColorThemeDto.md)
 - [CustomColorThemeRequestDto](docs/CustomColorThemeRequestDto.md)
 - [CustomColorThemesSettingsDto](docs/CustomColorThemesSettingsDto.md)
 - [CustomColorThemesSettingsRequestDto](docs/CustomColorThemesSettingsRequestDto.md)
 - [CustomColorThemesSettingsWrapper](docs/CustomColorThemesSettingsWrapper.md)
 - [CustomFieldRequest](docs/CustomFieldRequest.md)
 - [CustomFieldValueArrayWrapper](docs/CustomFieldValueArrayWrapper.md)
 - [CustomFieldValueDto](docs/CustomFieldValueDto.md)
 - [CustomFilterRequest](docs/CustomFilterRequest.md)
 - [CustomerConfigDto](docs/CustomerConfigDto.md)
 - [CustomerInfoDto](docs/CustomerInfoDto.md)
 - [CustomerInfoWrapper](docs/CustomerInfoWrapper.md)
 - [CustomerMonthlyUsageArrayWrapper](docs/CustomerMonthlyUsageArrayWrapper.md)
 - [CustomerMonthlyUsageDto](docs/CustomerMonthlyUsageDto.md)
 - [CustomerMonthlyUsageReportRequestDto](docs/CustomerMonthlyUsageReportRequestDto.md)
 - [CustomerOperationsReportRequestDto](docs/CustomerOperationsReportRequestDto.md)
 - [CustomerServiceUsageDto](docs/CustomerServiceUsageDto.md)
 - [CustomerServiceUsageReportDto](docs/CustomerServiceUsageReportDto.md)
 - [CustomerServiceUsageReportRequestDto](docs/CustomerServiceUsageReportRequestDto.md)
 - [CustomerServiceUsageReportWrapper](docs/CustomerServiceUsageReportWrapper.md)
 - [CustomizationConfigDto](docs/CustomizationConfigDto.md)
 - [DarkThemeSettingsDto](docs/DarkThemeSettingsDto.md)
 - [DarkThemeSettingsRequestDto](docs/DarkThemeSettingsRequestDto.md)
 - [DarkThemeSettingsType](docs/DarkThemeSettingsType.md)
 - [DarkThemeSettingsWrapper](docs/DarkThemeSettingsWrapper.md)
 - [DateToAutoCleanUp](docs/DateToAutoCleanUp.md)
 - [DeepLinkConfigurationRequestDto](docs/DeepLinkConfigurationRequestDto.md)
 - [DeepLinkDto](docs/DeepLinkDto.md)
 - [DeepLinkHandlingMode](docs/DeepLinkHandlingMode.md)
 - [DeepLinkSettingsRequestDto](docs/DeepLinkSettingsRequestDto.md)
 - [DefaultProductRequestDto](docs/DefaultProductRequestDto.md)
 - [DefaultTemplateItemDto](docs/DefaultTemplateItemDto.md)
 - [DefaultTemplateSettingsDto](docs/DefaultTemplateSettingsDto.md)
 - [DefaultTemplateSettingsRequestDto](docs/DefaultTemplateSettingsRequestDto.md)
 - [DefaultTemplateSettingsRequestDtoSelectedFile](docs/DefaultTemplateSettingsRequestDtoSelectedFile.md)
 - [DefaultTemplateSettingsResetRequestDto](docs/DefaultTemplateSettingsResetRequestDto.md)
 - [DefaultTemplateSettingsWrapper](docs/DefaultTemplateSettingsWrapper.md)
 - [DeleteBatchRequestDto](docs/DeleteBatchRequestDto.md)
 - [DeleteBatchRequestDtoAllOfFileIds](docs/DeleteBatchRequestDtoAllOfFileIds.md)
 - [DeleteBatchRequestDtoAllOfFolderIds](docs/DeleteBatchRequestDtoAllOfFolderIds.md)
 - [DeleteFileRequest](docs/DeleteFileRequest.md)
 - [DeleteFolderRequest](docs/DeleteFolderRequest.md)
 - [DeleteRoomRequest](docs/DeleteRoomRequest.md)
 - [DeleteVersionBatchRequestDto](docs/DeleteVersionBatchRequestDto.md)
 - [DiscountCategoryDto](docs/DiscountCategoryDto.md)
 - [DisplayRequestDto](docs/DisplayRequestDto.md)
 - [DistributedTaskStatus](docs/DistributedTaskStatus.md)
 - [DnsSettingsRequestDto](docs/DnsSettingsRequestDto.md)
 - [DocServiceUrlDto](docs/DocServiceUrlDto.md)
 - [DocServiceUrlWrapper](docs/DocServiceUrlWrapper.md)
 - [DocsCloudConfigDto](docs/DocsCloudConfigDto.md)
 - [DocsCloudConfigRequestDto](docs/DocsCloudConfigRequestDto.md)
 - [DocsCloudConfigWrapper](docs/DocsCloudConfigWrapper.md)
 - [DocsCloudDevPackRequestDto](docs/DocsCloudDevPackRequestDto.md)
 - [DocsCloudIpFilterConfigDto](docs/DocsCloudIpFilterConfigDto.md)
 - [DocsCloudIpFilterConfigRequest](docs/DocsCloudIpFilterConfigRequest.md)
 - [DocsCloudIpFilterRuleDto](docs/DocsCloudIpFilterRuleDto.md)
 - [DocsCloudIpFilterRuleRequest](docs/DocsCloudIpFilterRuleRequest.md)
 - [DocsCloudLicenseInfoDto](docs/DocsCloudLicenseInfoDto.md)
 - [DocsCloudPaymentDto](docs/DocsCloudPaymentDto.md)
 - [DocsCloudQuotaDto](docs/DocsCloudQuotaDto.md)
 - [DocsCloudQuotaUserDto](docs/DocsCloudQuotaUserDto.md)
 - [DocsCloudQuotaWrapper](docs/DocsCloudQuotaWrapper.md)
 - [DocsCloudSecurityConfigDto](docs/DocsCloudSecurityConfigDto.md)
 - [DocsCloudSecurityConfigRequest](docs/DocsCloudSecurityConfigRequest.md)
 - [DocsCloudServerConfigDto](docs/DocsCloudServerConfigDto.md)
 - [DocsCloudServerConfigRequest](docs/DocsCloudServerConfigRequest.md)
 - [DocsCloudServerInfoDto](docs/DocsCloudServerInfoDto.md)
 - [DocsCloudStatsDto](docs/DocsCloudStatsDto.md)
 - [DocsCloudTenantDto](docs/DocsCloudTenantDto.md)
 - [DocsCloudTenantInfoDto](docs/DocsCloudTenantInfoDto.md)
 - [DocsCloudTenantInfoWrapper](docs/DocsCloudTenantInfoWrapper.md)
 - [DocsCloudTenantWrapper](docs/DocsCloudTenantWrapper.md)
 - [DocsCloudUsageDto](docs/DocsCloudUsageDto.md)
 - [DocsCloudUsageWrapper](docs/DocsCloudUsageWrapper.md)
 - [DocsCloudUserStatsDto](docs/DocsCloudUserStatsDto.md)
 - [DocsCloudUsersLimitDto](docs/DocsCloudUsersLimitDto.md)
 - [DocsCloudWopiConfigDto](docs/DocsCloudWopiConfigDto.md)
 - [DocsCloudWopiConfigRequest](docs/DocsCloudWopiConfigRequest.md)
 - [DocumentBuilderTaskDto](docs/DocumentBuilderTaskDto.md)
 - [DocumentBuilderTaskWrapper](docs/DocumentBuilderTaskWrapper.md)
 - [DocumentConfigDto](docs/DocumentConfigDto.md)
 - [DocumentOptionsDto](docs/DocumentOptionsDto.md)
 - [DomainNameRulesDto](docs/DomainNameRulesDto.md)
 - [DoubleNullableWrapper](docs/DoubleNullableWrapper.md)
 - [DoubleWrapper](docs/DoubleWrapper.md)
 - [DownloadRequestDto](docs/DownloadRequestDto.md)
 - [DownloadRequestDtoAllOfFileIds](docs/DownloadRequestDtoAllOfFileIds.md)
 - [DownloadRequestDtoAllOfFolderIds](docs/DownloadRequestDtoAllOfFolderIds.md)
 - [DownloadRequestItemDto](docs/DownloadRequestItemDto.md)
 - [DownloadRequestItemDtoKey](docs/DownloadRequestItemDtoKey.md)
 - [DraftLocation](docs/DraftLocation.md)
 - [DuplicateRequestDto](docs/DuplicateRequestDto.md)
 - [DuplicateRequestDtoAllOfFileIds](docs/DuplicateRequestDtoAllOfFileIds.md)
 - [DuplicateRequestDtoAllOfFolderIds](docs/DuplicateRequestDtoAllOfFolderIds.md)
 - [EditHistoryArrayWrapper](docs/EditHistoryArrayWrapper.md)
 - [EditHistoryAuthorDto](docs/EditHistoryAuthorDto.md)
 - [EditHistoryChangesDto](docs/EditHistoryChangesDto.md)
 - [EditHistoryDataDto](docs/EditHistoryDataDto.md)
 - [EditHistoryDataWrapper](docs/EditHistoryDataWrapper.md)
 - [EditHistoryDto](docs/EditHistoryDto.md)
 - [EditHistoryUrlDto](docs/EditHistoryUrlDto.md)
 - [EditorConfigurationDto](docs/EditorConfigurationDto.md)
 - [EditorToolCallParametersDto](docs/EditorToolCallParametersDto.md)
 - [EditorToolCallStateDto](docs/EditorToolCallStateDto.md)
 - [EditorType](docs/EditorType.md)
 - [EmailActivationSettingsDto](docs/EmailActivationSettingsDto.md)
 - [EmailActivationSettingsRequestDto](docs/EmailActivationSettingsRequestDto.md)
 - [EmailActivationSettingsWrapper](docs/EmailActivationSettingsWrapper.md)
 - [EmailInvitationDto](docs/EmailInvitationDto.md)
 - [EmailMemberRequestDto](docs/EmailMemberRequestDto.md)
 - [EmbeddedConfigDto](docs/EmbeddedConfigDto.md)
 - [EmployeeActivationStatus](docs/EmployeeActivationStatus.md)
 - [EmployeeArrayWrapper](docs/EmployeeArrayWrapper.md)
 - [EmployeeDto](docs/EmployeeDto.md)
 - [EmployeeFullArrayWrapper](docs/EmployeeFullArrayWrapper.md)
 - [EmployeeFullDto](docs/EmployeeFullDto.md)
 - [EmployeeFullWrapper](docs/EmployeeFullWrapper.md)
 - [EmployeeStatus](docs/EmployeeStatus.md)
 - [EmployeeType](docs/EmployeeType.md)
 - [EmployeeWrapper](docs/EmployeeWrapper.md)
 - [EnabledModuleArrayWrapper](docs/EnabledModuleArrayWrapper.md)
 - [EnabledModuleDto](docs/EnabledModuleDto.md)
 - [EncryptionKeyArrayWrapper](docs/EncryptionKeyArrayWrapper.md)
 - [EncryptionKeyDto](docs/EncryptionKeyDto.md)
 - [EncryptionKeyRequestDto](docs/EncryptionKeyRequestDto.md)
 - [EncryptionSettingsDto](docs/EncryptionSettingsDto.md)
 - [EncryptionSettingsWrapper](docs/EncryptionSettingsWrapper.md)
 - [EncryptionStatus](docs/EncryptionStatus.md)
 - [EntityQuotaDto](docs/EntityQuotaDto.md)
 - [EntityQuotaSettingsDto](docs/EntityQuotaSettingsDto.md)
 - [EntityQuotaSettingsWrapper](docs/EntityQuotaSettingsWrapper.md)
 - [EntryFieldDto](docs/EntryFieldDto.md)
 - [EntryMetadataDto](docs/EntryMetadataDto.md)
 - [EntryMetadataWrapper](docs/EntryMetadataWrapper.md)
 - [EntryTemplateDto](docs/EntryTemplateDto.md)
 - [EntryType](docs/EntryType.md)
 - [ErrorApiResponse](docs/ErrorApiResponse.md)
 - [ErrorApiResponseError](docs/ErrorApiResponseError.md)
 - [ExchangeToken200Response](docs/ExchangeToken200Response.md)
 - [ExternalDatabaseConnectionRequestDto](docs/ExternalDatabaseConnectionRequestDto.md)
 - [ExternalDatabaseType](docs/ExternalDatabaseType.md)
 - [ExternalDbSyncFormResultDto](docs/ExternalDbSyncFormResultDto.md)
 - [ExternalDbSyncTaskDto](docs/ExternalDbSyncTaskDto.md)
 - [ExternalDbSyncTaskWrapper](docs/ExternalDbSyncTaskWrapper.md)
 - [ExternalResourceDto](docs/ExternalResourceDto.md)
 - [ExternalResourcesDto](docs/ExternalResourcesDto.md)
 - [ExternalShareDto](docs/ExternalShareDto.md)
 - [ExternalShareRequestParam](docs/ExternalShareRequestParam.md)
 - [ExternalShareStatus](docs/ExternalShareStatus.md)
 - [ExternalShareWrapper](docs/ExternalShareWrapper.md)
 - [ExternalSharingSettingsDto](docs/ExternalSharingSettingsDto.md)
 - [ExternalSharingSettingsRequestDto](docs/ExternalSharingSettingsRequestDto.md)
 - [ExternalSharingSettingsWrapper](docs/ExternalSharingSettingsWrapper.md)
 - [FeatureUsedDto](docs/FeatureUsedDto.md)
 - [FeedbackConfigDto](docs/FeedbackConfigDto.md)
 - [FieldError](docs/FieldError.md)
 - [FileArrayWrapper](docs/FileArrayWrapper.md)
 - [FileConflictResolveType](docs/FileConflictResolveType.md)
 - [FileDto](docs/FileDto.md)
 - [FileDtoAllOfViewAccessibility](docs/FileDtoAllOfViewAccessibility.md)
 - [FileEncryptionInfoDto](docs/FileEncryptionInfoDto.md)
 - [FileEncryptionInfoWrapper](docs/FileEncryptionInfoWrapper.md)
 - [FileEntryArrayWrapper](docs/FileEntryArrayWrapper.md)
 - [FileEntryBaseArrayWrapper](docs/FileEntryBaseArrayWrapper.md)
 - [FileEntryBaseDto](docs/FileEntryBaseDto.md)
 - [FileEntryBaseWrapper](docs/FileEntryBaseWrapper.md)
 - [FileEntryDto](docs/FileEntryDto.md)
 - [FileEntryType](docs/FileEntryType.md)
 - [FileKeysDto](docs/FileKeysDto.md)
 - [FileLinkDto](docs/FileLinkDto.md)
 - [FileLinkRequest](docs/FileLinkRequest.md)
 - [FileLinkWrapper](docs/FileLinkWrapper.md)
 - [FileOperationArrayWrapper](docs/FileOperationArrayWrapper.md)
 - [FileOperationDto](docs/FileOperationDto.md)
 - [FileOperationRequestBaseDto](docs/FileOperationRequestBaseDto.md)
 - [FileOperationType](docs/FileOperationType.md)
 - [FileOperationWrapper](docs/FileOperationWrapper.md)
 - [FileReferenceDataDto](docs/FileReferenceDataDto.md)
 - [FileReferenceDto](docs/FileReferenceDto.md)
 - [FileReferenceWrapper](docs/FileReferenceWrapper.md)
 - [FileShare](docs/FileShare.md)
 - [FileShareArrayWrapper](docs/FileShareArrayWrapper.md)
 - [FileShareDto](docs/FileShareDto.md)
 - [FileShareLink](docs/FileShareLink.md)
 - [FileShareParams](docs/FileShareParams.md)
 - [FileShareResponseArrayWrapper](docs/FileShareResponseArrayWrapper.md)
 - [FileShareWrapper](docs/FileShareWrapper.md)
 - [FileStatus](docs/FileStatus.md)
 - [FileType](docs/FileType.md)
 - [FileUploadResultDto](docs/FileUploadResultDto.md)
 - [FileUploadResultWrapper](docs/FileUploadResultWrapper.md)
 - [FileWrapper](docs/FileWrapper.md)
 - [FilesSettingsDto](docs/FilesSettingsDto.md)
 - [FilesSettingsDtoInternalFormats](docs/FilesSettingsDtoInternalFormats.md)
 - [FilesSettingsWrapper](docs/FilesSettingsWrapper.md)
 - [FilesStatisticsFolder](docs/FilesStatisticsFolder.md)
 - [FilesStatisticsResultDto](docs/FilesStatisticsResultDto.md)
 - [FilesStatisticsResultWrapper](docs/FilesStatisticsResultWrapper.md)
 - [FillingFormResultDto](docs/FillingFormResultDto.md)
 - [FillingFormResultWrapper](docs/FillingFormResultWrapper.md)
 - [FilterType](docs/FilterType.md)
 - [FinishDto](docs/FinishDto.md)
 - [FirebaseDeviceDto](docs/FirebaseDeviceDto.md)
 - [FirebaseDeviceWrapper](docs/FirebaseDeviceWrapper.md)
 - [FirebaseDto](docs/FirebaseDto.md)
 - [FirebaseRequestDto](docs/FirebaseRequestDto.md)
 - [FolderArrayWrapper](docs/FolderArrayWrapper.md)
 - [FolderContentArrayWrapper](docs/FolderContentArrayWrapper.md)
 - [FolderContentDto](docs/FolderContentDto.md)
 - [FolderContentWrapper](docs/FolderContentWrapper.md)
 - [FolderDto](docs/FolderDto.md)
 - [FolderLinkRequest](docs/FolderLinkRequest.md)
 - [FolderMetadataSearch](docs/FolderMetadataSearch.md)
 - [FolderType](docs/FolderType.md)
 - [FolderWrapper](docs/FolderWrapper.md)
 - [FormFillingManageAction](docs/FormFillingManageAction.md)
 - [FormFillingStatus](docs/FormFillingStatus.md)
 - [FormGalleryDto](docs/FormGalleryDto.md)
 - [FormMetadataDto](docs/FormMetadataDto.md)
 - [FormResultsDto](docs/FormResultsDto.md)
 - [FormRoleArrayWrapper](docs/FormRoleArrayWrapper.md)
 - [FormRoleDto](docs/FormRoleDto.md)
 - [FormRoleRequest](docs/FormRoleRequest.md)
 - [FormSubmissionsDto](docs/FormSubmissionsDto.md)
 - [FormSubmissionsWrapper](docs/FormSubmissionsWrapper.md)
 - [FormsItemArrayWrapper](docs/FormsItemArrayWrapper.md)
 - [FormsItemDataDto](docs/FormsItemDataDto.md)
 - [FormsItemDto](docs/FormsItemDto.md)
 - [GenerateDocxToolCallParametersDto](docs/GenerateDocxToolCallParametersDto.md)
 - [GenerateFormToolCallParametersDto](docs/GenerateFormToolCallParametersDto.md)
 - [GeneratePresentationToolCallParametersDto](docs/GeneratePresentationToolCallParametersDto.md)
 - [GetPortalPrices200Response](docs/GetPortalPrices200Response.md)
 - [GetPortalPrices200ResponseLinksInner](docs/GetPortalPrices200ResponseLinksInner.md)
 - [GetReferenceDataDto](docs/GetReferenceDataDto.md)
 - [GobackConfigDto](docs/GobackConfigDto.md)
 - [GreetingSettingsRequestDto](docs/GreetingSettingsRequestDto.md)
 - [GroupArrayWrapper](docs/GroupArrayWrapper.md)
 - [GroupDto](docs/GroupDto.md)
 - [GroupMemberSecurityArrayWrapper](docs/GroupMemberSecurityArrayWrapper.md)
 - [GroupMemberSecurityDto](docs/GroupMemberSecurityDto.md)
 - [GroupRequestDto](docs/GroupRequestDto.md)
 - [GroupSummaryArrayWrapper](docs/GroupSummaryArrayWrapper.md)
 - [GroupSummaryDto](docs/GroupSummaryDto.md)
 - [GroupWrapper](docs/GroupWrapper.md)
 - [HideConfirmConvertRequestDto](docs/HideConfirmConvertRequestDto.md)
 - [HistoryActionDto](docs/HistoryActionDto.md)
 - [HistoryArrayWrapper](docs/HistoryArrayWrapper.md)
 - [HistoryDataDto](docs/HistoryDataDto.md)
 - [HistoryDto](docs/HistoryDto.md)
 - [ICompressWrapper](docs/ICompressWrapper.md)
 - [IconRequest](docs/IconRequest.md)
 - [ImageSizeDto](docs/ImageSizeDto.md)
 - [ImportableApiEntity](docs/ImportableApiEntity.md)
 - [InfoConfigDto](docs/InfoConfigDto.md)
 - [Int32Wrapper](docs/Int32Wrapper.md)
 - [Int64Wrapper](docs/Int64Wrapper.md)
 - [InvitationLinkCreateRequestDto](docs/InvitationLinkCreateRequestDto.md)
 - [InvitationLinkDeleteRequestDto](docs/InvitationLinkDeleteRequestDto.md)
 - [InvitationLinkDto](docs/InvitationLinkDto.md)
 - [InvitationLinkUpdateRequestDto](docs/InvitationLinkUpdateRequestDto.md)
 - [InvitationLinkWrapper](docs/InvitationLinkWrapper.md)
 - [InviteUsersRequestDto](docs/InviteUsersRequestDto.md)
 - [IpRestrictionArrayWrapper](docs/IpRestrictionArrayWrapper.md)
 - [IpRestrictionDto](docs/IpRestrictionDto.md)
 - [IpRestrictionEntryDto](docs/IpRestrictionEntryDto.md)
 - [IpRestrictionsDto](docs/IpRestrictionsDto.md)
 - [IpRestrictionsSettingsDto](docs/IpRestrictionsSettingsDto.md)
 - [IpRestrictionsSettingsWrapper](docs/IpRestrictionsSettingsWrapper.md)
 - [IpRestrictionsWrapper](docs/IpRestrictionsWrapper.md)
 - [IsDefaultWhiteLabelLogosArrayWrapper](docs/IsDefaultWhiteLabelLogosArrayWrapper.md)
 - [IsDefaultWhiteLabelLogosDto](docs/IsDefaultWhiteLabelLogosDto.md)
 - [IsDefaultWhiteLabelLogosWrapper](docs/IsDefaultWhiteLabelLogosWrapper.md)
 - [ItemKeyValuePairBooleanString](docs/ItemKeyValuePairBooleanString.md)
 - [ItemKeyValuePairBooleanStringWrapper](docs/ItemKeyValuePairBooleanStringWrapper.md)
 - [ItemKeyValuePairObjectObject](docs/ItemKeyValuePairObjectObject.md)
 - [ItemKeyValuePairStringBoolean](docs/ItemKeyValuePairStringBoolean.md)
 - [ItemKeyValuePairStringLogoRequestDto](docs/ItemKeyValuePairStringLogoRequestDto.md)
 - [ItemKeyValuePairStringString](docs/ItemKeyValuePairStringString.md)
 - [JsonValueWrapper](docs/JsonValueWrapper.md)
 - [LicensorDetailsArrayWrapper](docs/LicensorDetailsArrayWrapper.md)
 - [LicensorDetailsDto](docs/LicensorDetailsDto.md)
 - [LicensorDetailsWrapper](docs/LicensorDetailsWrapper.md)
 - [LinkAccountRequestDto](docs/LinkAccountRequestDto.md)
 - [LinkType](docs/LinkType.md)
 - [LocationType](docs/LocationType.md)
 - [LockFileRequest](docs/LockFileRequest.md)
 - [LoginEventArrayWrapper](docs/LoginEventArrayWrapper.md)
 - [LoginEventDto](docs/LoginEventDto.md)
 - [LoginProvider](docs/LoginProvider.md)
 - [LoginSettingsDto](docs/LoginSettingsDto.md)
 - [LoginSettingsRequestDto](docs/LoginSettingsRequestDto.md)
 - [LoginSettingsWrapper](docs/LoginSettingsWrapper.md)
 - [LogoConfigDto](docs/LogoConfigDto.md)
 - [LogoCoverDto](docs/LogoCoverDto.md)
 - [LogoDto](docs/LogoDto.md)
 - [LogoRequest](docs/LogoRequest.md)
 - [LogoRequestDto](docs/LogoRequestDto.md)
 - [MailDomainSettingsRequestDto](docs/MailDomainSettingsRequestDto.md)
 - [ManageFormFillingDto](docs/ManageFormFillingDto.md)
 - [MemberRequestDto](docs/MemberRequestDto.md)
 - [MembersRequest](docs/MembersRequest.md)
 - [MentionArrayWrapper](docs/MentionArrayWrapper.md)
 - [MentionDto](docs/MentionDto.md)
 - [MentionMessageRequest](docs/MentionMessageRequest.md)
 - [MessageAction](docs/MessageAction.md)
 - [MetadataConflictResolveType](docs/MetadataConflictResolveType.md)
 - [MetadataFieldDto](docs/MetadataFieldDto.md)
 - [MetadataFieldOptionDto](docs/MetadataFieldOptionDto.md)
 - [MetadataFieldOptionRequest](docs/MetadataFieldOptionRequest.md)
 - [MetadataFieldRequest](docs/MetadataFieldRequest.md)
 - [MetadataFieldType](docs/MetadataFieldType.md)
 - [MetadataFieldWrapper](docs/MetadataFieldWrapper.md)
 - [MetadataFilterConditionRequest](docs/MetadataFilterConditionRequest.md)
 - [MetadataOperationDto](docs/MetadataOperationDto.md)
 - [MetadataOperationWrapper](docs/MetadataOperationWrapper.md)
 - [MetadataTemplateArrayWrapper](docs/MetadataTemplateArrayWrapper.md)
 - [MetadataTemplateDto](docs/MetadataTemplateDto.md)
 - [MetadataTemplateWrapper](docs/MetadataTemplateWrapper.md)
 - [MetadataValueDto](docs/MetadataValueDto.md)
 - [MetadataValueRequest](docs/MetadataValueRequest.md)
 - [MigratingApiFiles](docs/MigratingApiFiles.md)
 - [MigratingApiGroup](docs/MigratingApiGroup.md)
 - [MigratingApiUser](docs/MigratingApiUser.md)
 - [MigrationApiInfo](docs/MigrationApiInfo.md)
 - [MigrationStatusDto](docs/MigrationStatusDto.md)
 - [MigrationStatusWrapper](docs/MigrationStatusWrapper.md)
 - [MobilePhoneActivationStatus](docs/MobilePhoneActivationStatus.md)
 - [MobileRequestDto](docs/MobileRequestDto.md)
 - [Module](docs/Module.md)
 - [ModuleWrapper](docs/ModuleWrapper.md)
 - [MultiSizeLogoCoverDto](docs/MultiSizeLogoCoverDto.md)
 - [NewItemsDtoFileEntryBaseDto](docs/NewItemsDtoFileEntryBaseDto.md)
 - [NewItemsDtoRoomNewItemsDto](docs/NewItemsDtoRoomNewItemsDto.md)
 - [NewItemsFileEntryBaseArrayWrapper](docs/NewItemsFileEntryBaseArrayWrapper.md)
 - [NewItemsRoomNewItemsArrayWrapper](docs/NewItemsRoomNewItemsArrayWrapper.md)
 - [NotificationChannelDto](docs/NotificationChannelDto.md)
 - [NotificationChannelStatusDto](docs/NotificationChannelStatusDto.md)
 - [NotificationChannelStatusWrapper](docs/NotificationChannelStatusWrapper.md)
 - [NotificationSettingsDto](docs/NotificationSettingsDto.md)
 - [NotificationSettingsRequestDto](docs/NotificationSettingsRequestDto.md)
 - [NotificationSettingsWrapper](docs/NotificationSettingsWrapper.md)
 - [NotificationType](docs/NotificationType.md)
 - [ObjectArrayWrapper](docs/ObjectArrayWrapper.md)
 - [OperationDto](docs/OperationDto.md)
 - [OperationOrderType](docs/OperationOrderType.md)
 - [OperationStatus](docs/OperationStatus.md)
 - [OperationTokenUsageDto](docs/OperationTokenUsageDto.md)
 - [OperationType](docs/OperationType.md)
 - [OrderByDto](docs/OrderByDto.md)
 - [OrderRequestDto](docs/OrderRequestDto.md)
 - [OrdersItemRequestDto](docs/OrdersItemRequestDto.md)
 - [OrdersRequestDto](docs/OrdersRequestDto.md)
 - [OwnerChangeInstructionsDto](docs/OwnerChangeInstructionsDto.md)
 - [OwnerChangeInstructionsWrapper](docs/OwnerChangeInstructionsWrapper.md)
 - [OwnerIdSettingsRequestDto](docs/OwnerIdSettingsRequestDto.md)
 - [PageableClientInfoResponse](docs/PageableClientInfoResponse.md)
 - [PageableClientResponse](docs/PageableClientResponse.md)
 - [PageableModificationResponse](docs/PageableModificationResponse.md)
 - [PageableResponse](docs/PageableResponse.md)
 - [PasswordHashSettingsDto](docs/PasswordHashSettingsDto.md)
 - [PasswordSettingsDto](docs/PasswordSettingsDto.md)
 - [PasswordSettingsRequestDto](docs/PasswordSettingsRequestDto.md)
 - [PasswordSettingsWrapper](docs/PasswordSettingsWrapper.md)
 - [PaymentCalculationDto](docs/PaymentCalculationDto.md)
 - [PaymentCalculationWrapper](docs/PaymentCalculationWrapper.md)
 - [PaymentMethodStatus](docs/PaymentMethodStatus.md)
 - [PaymentSettingsDto](docs/PaymentSettingsDto.md)
 - [PaymentSettingsWrapper](docs/PaymentSettingsWrapper.md)
 - [PaymentUrlRequestDto](docs/PaymentUrlRequestDto.md)
 - [Payments](docs/Payments.md)
 - [PermissionsConfigDto](docs/PermissionsConfigDto.md)
 - [PluginsConfigDto](docs/PluginsConfigDto.md)
 - [PluginsDto](docs/PluginsDto.md)
 - [PortalUserDto](docs/PortalUserDto.md)
 - [PortalUserWrapper](docs/PortalUserWrapper.md)
 - [PriceDto](docs/PriceDto.md)
 - [PriceStatus](docs/PriceStatus.md)
 - [PriceTimeUnit](docs/PriceTimeUnit.md)
 - [ProblemDetail](docs/ProblemDetail.md)
 - [ProductAdministratorDto](docs/ProductAdministratorDto.md)
 - [ProductAdministratorWrapper](docs/ProductAdministratorWrapper.md)
 - [ProductQuantityType](docs/ProductQuantityType.md)
 - [ProductType](docs/ProductType.md)
 - [ProviderArrayWrapper](docs/ProviderArrayWrapper.md)
 - [ProviderDto](docs/ProviderDto.md)
 - [ProviderFilter](docs/ProviderFilter.md)
 - [QuantityRequestDto](docs/QuantityRequestDto.md)
 - [QuotaArrayWrapper](docs/QuotaArrayWrapper.md)
 - [QuotaDto](docs/QuotaDto.md)
 - [QuotaFilter](docs/QuotaFilter.md)
 - [QuotaScope](docs/QuotaScope.md)
 - [QuotaSettingsRequestDto](docs/QuotaSettingsRequestDto.md)
 - [QuotaSettingsRequestDtoDefaultQuota](docs/QuotaSettingsRequestDtoDefaultQuota.md)
 - [QuotaState](docs/QuotaState.md)
 - [QuotaWrapper](docs/QuotaWrapper.md)
 - [RecaptchaType](docs/RecaptchaType.md)
 - [RecentConfigDto](docs/RecentConfigDto.md)
 - [RegStatus](docs/RegStatus.md)
 - [ReportDto](docs/ReportDto.md)
 - [ReportWrapper](docs/ReportWrapper.md)
 - [RequestLocation](docs/RequestLocation.md)
 - [RestrictedAiModelsDto](docs/RestrictedAiModelsDto.md)
 - [RestrictedAiModelsWrapper](docs/RestrictedAiModelsWrapper.md)
 - [ReviewConfigDto](docs/ReviewConfigDto.md)
 - [RoomDataLifetimeDto](docs/RoomDataLifetimeDto.md)
 - [RoomDataLifetimePeriod](docs/RoomDataLifetimePeriod.md)
 - [RoomFromTemplateStatusDto](docs/RoomFromTemplateStatusDto.md)
 - [RoomFromTemplateStatusWrapper](docs/RoomFromTemplateStatusWrapper.md)
 - [RoomGroupArrayWrapper](docs/RoomGroupArrayWrapper.md)
 - [RoomGroupDto](docs/RoomGroupDto.md)
 - [RoomGroupRequestDto](docs/RoomGroupRequestDto.md)
 - [RoomGroupWrapper](docs/RoomGroupWrapper.md)
 - [RoomInvitation](docs/RoomInvitation.md)
 - [RoomInvitationRequest](docs/RoomInvitationRequest.md)
 - [RoomLinkRequest](docs/RoomLinkRequest.md)
 - [RoomNewItemsDto](docs/RoomNewItemsDto.md)
 - [RoomPrivacyFilter](docs/RoomPrivacyFilter.md)
 - [RoomSecurityDto](docs/RoomSecurityDto.md)
 - [RoomSecurityError](docs/RoomSecurityError.md)
 - [RoomSecurityWrapper](docs/RoomSecurityWrapper.md)
 - [RoomTemplateDto](docs/RoomTemplateDto.md)
 - [RoomTemplateStatusDto](docs/RoomTemplateStatusDto.md)
 - [RoomTemplateStatusWrapper](docs/RoomTemplateStatusWrapper.md)
 - [RoomType](docs/RoomType.md)
 - [RoomsMetadataSearchRequestDto](docs/RoomsMetadataSearchRequestDto.md)
 - [RoomsNotificationSettingsDto](docs/RoomsNotificationSettingsDto.md)
 - [RoomsNotificationSettingsWrapper](docs/RoomsNotificationSettingsWrapper.md)
 - [RoomsNotificationsSettingsRequestDto](docs/RoomsNotificationsSettingsRequestDto.md)
 - [SalesRequestDto](docs/SalesRequestDto.md)
 - [SaveAdditionalResourcesRequest](docs/SaveAdditionalResourcesRequest.md)
 - [SaveAsPdfRequest](docs/SaveAsPdfRequest.md)
 - [SaveAuthKeysRequestDto](docs/SaveAuthKeysRequestDto.md)
 - [SaveCompanyInfoRequest](docs/SaveCompanyInfoRequest.md)
 - [SaveFormRoleMappingDto](docs/SaveFormRoleMappingDto.md)
 - [ScheduleDto](docs/ScheduleDto.md)
 - [ScheduleWrapper](docs/ScheduleWrapper.md)
 - [ScopeResponse](docs/ScopeResponse.md)
 - [SearchArea](docs/SearchArea.md)
 - [SecurityArrayWrapper](docs/SecurityArrayWrapper.md)
 - [SecurityDto](docs/SecurityDto.md)
 - [SecurityInfoRequestDto](docs/SecurityInfoRequestDto.md)
 - [SecurityInfoSimpleRequestDto](docs/SecurityInfoSimpleRequestDto.md)
 - [SecurityRequestDto](docs/SecurityRequestDto.md)
 - [ServicePriceArrayWrapper](docs/ServicePriceArrayWrapper.md)
 - [ServicePriceDto](docs/ServicePriceDto.md)
 - [SessionRequest](docs/SessionRequest.md)
 - [SetAppEnabledRequest](docs/SetAppEnabledRequest.md)
 - [SetAppSettingsRequest](docs/SetAppSettingsRequest.md)
 - [SetAuditLifetimeSettingsRequest](docs/SetAuditLifetimeSettingsRequest.md)
 - [SetCustomFields](docs/SetCustomFields.md)
 - [SetManagerRequest](docs/SetManagerRequest.md)
 - [SetMetadataValues](docs/SetMetadataValues.md)
 - [SetPublicDto](docs/SetPublicDto.md)
 - [SetRestrictedAiModelsRequestDto](docs/SetRestrictedAiModelsRequestDto.md)
 - [SetWalletTopUpSettingsRequest](docs/SetWalletTopUpSettingsRequest.md)
 - [SettingsDto](docs/SettingsDto.md)
 - [SettingsRequestDto](docs/SettingsRequestDto.md)
 - [SettingsWrapper](docs/SettingsWrapper.md)
 - [ShareFilterType](docs/ShareFilterType.md)
 - [SignupAccountRequestDto](docs/SignupAccountRequestDto.md)
 - [SmtpOperationStatusDto](docs/SmtpOperationStatusDto.md)
 - [SmtpOperationStatusWrapper](docs/SmtpOperationStatusWrapper.md)
 - [SmtpSettingsDto](docs/SmtpSettingsDto.md)
 - [SmtpSettingsWrapper](docs/SmtpSettingsWrapper.md)
 - [SocketSettingsDto](docs/SocketSettingsDto.md)
 - [SocketSettingsWrapper](docs/SocketSettingsWrapper.md)
 - [SortOrder](docs/SortOrder.md)
 - [SortedByType](docs/SortedByType.md)
 - [SsoBindingTypeDto](docs/SsoBindingTypeDto.md)
 - [SsoCertificateDto](docs/SsoCertificateDto.md)
 - [SsoEncryptAlgorithmTypeDto](docs/SsoEncryptAlgorithmTypeDto.md)
 - [SsoFieldMappingDto](docs/SsoFieldMappingDto.md)
 - [SsoIdpCertificateActionTypeDto](docs/SsoIdpCertificateActionTypeDto.md)
 - [SsoIdpCertificateAdvancedDto](docs/SsoIdpCertificateAdvancedDto.md)
 - [SsoIdpSettingsDto](docs/SsoIdpSettingsDto.md)
 - [SsoNameIdFormatTypeDto](docs/SsoNameIdFormatTypeDto.md)
 - [SsoSettingsConstantsDto](docs/SsoSettingsConstantsDto.md)
 - [SsoSettingsConstantsWrapper](docs/SsoSettingsConstantsWrapper.md)
 - [SsoSettingsDto](docs/SsoSettingsDto.md)
 - [SsoSettingsRequestDto](docs/SsoSettingsRequestDto.md)
 - [SsoSettingsWrapper](docs/SsoSettingsWrapper.md)
 - [SsoSigningAlgorithmTypeDto](docs/SsoSigningAlgorithmTypeDto.md)
 - [SsoSpCertificateActionTypeDto](docs/SsoSpCertificateActionTypeDto.md)
 - [SsoSpCertificateAdvancedDto](docs/SsoSpCertificateAdvancedDto.md)
 - [StartBackupRequestDto](docs/StartBackupRequestDto.md)
 - [StartBackupRestoreRequestDto](docs/StartBackupRestoreRequestDto.md)
 - [StartEditRequest](docs/StartEditRequest.md)
 - [StartFillingForm](docs/StartFillingForm.md)
 - [StartFillingMode](docs/StartFillingMode.md)
 - [StartReassignRequestDto](docs/StartReassignRequestDto.md)
 - [StartUpdateUserTypeDto](docs/StartUpdateUserTypeDto.md)
 - [StorageArrayWrapper](docs/StorageArrayWrapper.md)
 - [StorageDto](docs/StorageDto.md)
 - [StorageEncryptionRequestDto](docs/StorageEncryptionRequestDto.md)
 - [StorageFilter](docs/StorageFilter.md)
 - [StorageRequestDto](docs/StorageRequestDto.md)
 - [StorageSettingsDto](docs/StorageSettingsDto.md)
 - [StorageSettingsWrapper](docs/StorageSettingsWrapper.md)
 - [StringArrayWrapper](docs/StringArrayWrapper.md)
 - [StringWrapper](docs/StringWrapper.md)
 - [StudioDefaultPageSettingsDto](docs/StudioDefaultPageSettingsDto.md)
 - [StudioDefaultPageSettingsWrapper](docs/StudioDefaultPageSettingsWrapper.md)
 - [SubAccountDto](docs/SubAccountDto.md)
 - [SubjectType](docs/SubjectType.md)
 - [SubmitFormDto](docs/SubmitFormDto.md)
 - [SubscriptionBalanceDto](docs/SubscriptionBalanceDto.md)
 - [SubscriptionBalanceWrapper](docs/SubscriptionBalanceWrapper.md)
 - [TariffDto](docs/TariffDto.md)
 - [TariffQuotaDto](docs/TariffQuotaDto.md)
 - [TariffState](docs/TariffState.md)
 - [TariffWrapper](docs/TariffWrapper.md)
 - [TaskProgressResponseDto](docs/TaskProgressResponseDto.md)
 - [TaskProgressResponseWrapper](docs/TaskProgressResponseWrapper.md)
 - [TelegramStatusDto](docs/TelegramStatusDto.md)
 - [TelegramStatusWrapper](docs/TelegramStatusWrapper.md)
 - [TemplatesConfigDto](docs/TemplatesConfigDto.md)
 - [TemplatesRequestDto](docs/TemplatesRequestDto.md)
 - [TenantAiAccessSettingsDto](docs/TenantAiAccessSettingsDto.md)
 - [TenantAiAccessSettingsRequestDto](docs/TenantAiAccessSettingsRequestDto.md)
 - [TenantAiAccessSettingsWrapper](docs/TenantAiAccessSettingsWrapper.md)
 - [TenantAuditSettingsDto](docs/TenantAuditSettingsDto.md)
 - [TenantAuditSettingsRequestDto](docs/TenantAuditSettingsRequestDto.md)
 - [TenantAuditSettingsWrapper](docs/TenantAuditSettingsWrapper.md)
 - [TenantBannerSettingsDto](docs/TenantBannerSettingsDto.md)
 - [TenantBannerSettingsRequestDto](docs/TenantBannerSettingsRequestDto.md)
 - [TenantBannerSettingsWrapper](docs/TenantBannerSettingsWrapper.md)
 - [TenantDeepLinkSettingsDto](docs/TenantDeepLinkSettingsDto.md)
 - [TenantDeepLinkSettingsWrapper](docs/TenantDeepLinkSettingsWrapper.md)
 - [TenantDevToolsAccessSettingsDto](docs/TenantDevToolsAccessSettingsDto.md)
 - [TenantDevToolsAccessSettingsRequestDto](docs/TenantDevToolsAccessSettingsRequestDto.md)
 - [TenantDevToolsAccessSettingsWrapper](docs/TenantDevToolsAccessSettingsWrapper.md)
 - [TenantDto](docs/TenantDto.md)
 - [TenantIndustry](docs/TenantIndustry.md)
 - [TenantQuotaDto](docs/TenantQuotaDto.md)
 - [TenantQuotaFeatureDto](docs/TenantQuotaFeatureDto.md)
 - [TenantQuotaSettingsDto](docs/TenantQuotaSettingsDto.md)
 - [TenantQuotaSettingsRequestDto](docs/TenantQuotaSettingsRequestDto.md)
 - [TenantQuotaSettingsWrapper](docs/TenantQuotaSettingsWrapper.md)
 - [TenantQuotaWrapper](docs/TenantQuotaWrapper.md)
 - [TenantStatus](docs/TenantStatus.md)
 - [TenantTrustedDomainsType](docs/TenantTrustedDomainsType.md)
 - [TenantUserInvitationSettingsDto](docs/TenantUserInvitationSettingsDto.md)
 - [TenantUserInvitationSettingsRequestDto](docs/TenantUserInvitationSettingsRequestDto.md)
 - [TenantUserInvitationSettingsWrapper](docs/TenantUserInvitationSettingsWrapper.md)
 - [TenantWalletService](docs/TenantWalletService.md)
 - [TenantWalletServiceSettingsDto](docs/TenantWalletServiceSettingsDto.md)
 - [TenantWalletServiceSettingsWrapper](docs/TenantWalletServiceSettingsWrapper.md)
 - [TenantWalletSettingsDto](docs/TenantWalletSettingsDto.md)
 - [TenantWalletSettingsRequestDto](docs/TenantWalletSettingsRequestDto.md)
 - [TenantWalletSettingsWrapper](docs/TenantWalletSettingsWrapper.md)
 - [TenantWrapper](docs/TenantWrapper.md)
 - [TerminateRequestDto](docs/TerminateRequestDto.md)
 - [TfaAppCodeArrayWrapper](docs/TfaAppCodeArrayWrapper.md)
 - [TfaAppCodeDto](docs/TfaAppCodeDto.md)
 - [TfaConfirmDataDto](docs/TfaConfirmDataDto.md)
 - [TfaConfirmDataWrapper](docs/TfaConfirmDataWrapper.md)
 - [TfaRequestDto](docs/TfaRequestDto.md)
 - [TfaSettingsArrayWrapper](docs/TfaSettingsArrayWrapper.md)
 - [TfaSettingsDto](docs/TfaSettingsDto.md)
 - [TfaSetupCodeDto](docs/TfaSetupCodeDto.md)
 - [TfaSetupCodeWrapper](docs/TfaSetupCodeWrapper.md)
 - [TfaType](docs/TfaType.md)
 - [TfaValidateRequestDto](docs/TfaValidateRequestDto.md)
 - [ThirdPartyAccountArrayWrapper](docs/ThirdPartyAccountArrayWrapper.md)
 - [ThirdPartyAccountDto](docs/ThirdPartyAccountDto.md)
 - [ThirdPartyBackupRequestDto](docs/ThirdPartyBackupRequestDto.md)
 - [ThirdPartyCheckConversionRequestDto](docs/ThirdPartyCheckConversionRequestDto.md)
 - [ThirdPartyChunkedUploadSessionDto](docs/ThirdPartyChunkedUploadSessionDto.md)
 - [ThirdPartyChunkedUploadSessionResultDto](docs/ThirdPartyChunkedUploadSessionResultDto.md)
 - [ThirdPartyChunkedUploadSessionResultWrapper](docs/ThirdPartyChunkedUploadSessionResultWrapper.md)
 - [ThirdPartyChunkedUploadSessionWrapper](docs/ThirdPartyChunkedUploadSessionWrapper.md)
 - [ThirdPartyConfigurationDto](docs/ThirdPartyConfigurationDto.md)
 - [ThirdPartyConfigurationWrapper](docs/ThirdPartyConfigurationWrapper.md)
 - [ThirdPartyDraftLocation](docs/ThirdPartyDraftLocation.md)
 - [ThirdPartyFileArrayWrapper](docs/ThirdPartyFileArrayWrapper.md)
 - [ThirdPartyFileDto](docs/ThirdPartyFileDto.md)
 - [ThirdPartyFileEntryDto](docs/ThirdPartyFileEntryDto.md)
 - [ThirdPartyFileWrapper](docs/ThirdPartyFileWrapper.md)
 - [ThirdPartyFolderArrayWrapper](docs/ThirdPartyFolderArrayWrapper.md)
 - [ThirdPartyFolderContentDto](docs/ThirdPartyFolderContentDto.md)
 - [ThirdPartyFolderContentWrapper](docs/ThirdPartyFolderContentWrapper.md)
 - [ThirdPartyFolderDto](docs/ThirdPartyFolderDto.md)
 - [ThirdPartyFolderWrapper](docs/ThirdPartyFolderWrapper.md)
 - [ThirdPartyRequestDto](docs/ThirdPartyRequestDto.md)
 - [ThirdPartySaveAsPdfRequest](docs/ThirdPartySaveAsPdfRequest.md)
 - [ThirdPartyUploadSessionResponseDto](docs/ThirdPartyUploadSessionResponseDto.md)
 - [ThirdPartyUploadSessionResponseWrapper](docs/ThirdPartyUploadSessionResponseWrapper.md)
 - [Thumbnail](docs/Thumbnail.md)
 - [ThumbnailsDataDto](docs/ThumbnailsDataDto.md)
 - [ThumbnailsDataWrapper](docs/ThumbnailsDataWrapper.md)
 - [ThumbnailsRequest](docs/ThumbnailsRequest.md)
 - [TimeBoundDto](docs/TimeBoundDto.md)
 - [TimezoneArrayWrapper](docs/TimezoneArrayWrapper.md)
 - [TimezoneDto](docs/TimezoneDto.md)
 - [TokenDiagnosticsDto](docs/TokenDiagnosticsDto.md)
 - [TokenDiagnosticsWrapper](docs/TokenDiagnosticsWrapper.md)
 - [TopUpDepositRequestDto](docs/TopUpDepositRequestDto.md)
 - [TransactionInfoDto](docs/TransactionInfoDto.md)
 - [TurnOnAdminMessageSettingsRequestDto](docs/TurnOnAdminMessageSettingsRequestDto.md)
 - [UpcomingPaymentArrayWrapper](docs/UpcomingPaymentArrayWrapper.md)
 - [UpcomingPaymentDto](docs/UpcomingPaymentDto.md)
 - [UpdateApiKeyRequest](docs/UpdateApiKeyRequest.md)
 - [UpdateClientRequest](docs/UpdateClientRequest.md)
 - [UpdateCommentRequest](docs/UpdateCommentRequest.md)
 - [UpdateFileRequest](docs/UpdateFileRequest.md)
 - [UpdateGroupRequest](docs/UpdateGroupRequest.md)
 - [UpdateMemberCultureRequest](docs/UpdateMemberCultureRequest.md)
 - [UpdateMemberRequestDto](docs/UpdateMemberRequestDto.md)
 - [UpdateMembersQuotaRequestDto](docs/UpdateMembersQuotaRequestDto.md)
 - [UpdateMembersQuotaRequestDtoQuota](docs/UpdateMembersQuotaRequestDtoQuota.md)
 - [UpdateMembersRequestDto](docs/UpdateMembersRequestDto.md)
 - [UpdateMetadataFieldRequest](docs/UpdateMetadataFieldRequest.md)
 - [UpdateMetadataTemplate](docs/UpdateMetadataTemplate.md)
 - [UpdatePhotoMemberRequest](docs/UpdatePhotoMemberRequest.md)
 - [UpdateRoomGroupRequest](docs/UpdateRoomGroupRequest.md)
 - [UpdateRoomRequest](docs/UpdateRoomRequest.md)
 - [UpdateRoomsQuotaRequestDto](docs/UpdateRoomsQuotaRequestDto.md)
 - [UpdateRoomsRoomIdsRequestDto](docs/UpdateRoomsRoomIdsRequestDto.md)
 - [UpdateTagRequestDto](docs/UpdateTagRequestDto.md)
 - [UpdateWebhooksConfigRequestDto](docs/UpdateWebhooksConfigRequestDto.md)
 - [UploadResultDto](docs/UploadResultDto.md)
 - [UploadResultWrapper](docs/UploadResultWrapper.md)
 - [UploadSessionResponseDto](docs/UploadSessionResponseDto.md)
 - [UploadSessionResponseWrapper](docs/UploadSessionResponseWrapper.md)
 - [UsageSpaceStatItemArrayWrapper](docs/UsageSpaceStatItemArrayWrapper.md)
 - [UsageSpaceStatItemDto](docs/UsageSpaceStatItemDto.md)
 - [UserConfigDto](docs/UserConfigDto.md)
 - [UserExistsResponseDto](docs/UserExistsResponseDto.md)
 - [UserExistsResponseWrapper](docs/UserExistsResponseWrapper.md)
 - [UserInvitation](docs/UserInvitation.md)
 - [UserInvitationRequestDto](docs/UserInvitationRequestDto.md)
 - [ValidationErrorResponse](docs/ValidationErrorResponse.md)
 - [ValidationResult](docs/ValidationResult.md)
 - [VectorizationStatus](docs/VectorizationStatus.md)
 - [WalletQuantityRequestDto](docs/WalletQuantityRequestDto.md)
 - [WalletServiceArrayWrapper](docs/WalletServiceArrayWrapper.md)
 - [WalletServiceDto](docs/WalletServiceDto.md)
 - [WalletServiceWrapper](docs/WalletServiceWrapper.md)
 - [WatermarkAdditions](docs/WatermarkAdditions.md)
 - [WatermarkDto](docs/WatermarkDto.md)
 - [WatermarkOnDrawDto](docs/WatermarkOnDrawDto.md)
 - [WatermarkParagraphDto](docs/WatermarkParagraphDto.md)
 - [WatermarkRequestDto](docs/WatermarkRequestDto.md)
 - [WatermarkTextRunDto](docs/WatermarkTextRunDto.md)
 - [WebItemSecurityRequestDto](docs/WebItemSecurityRequestDto.md)
 - [WebItemsSecurityRequestDto](docs/WebItemsSecurityRequestDto.md)
 - [WebPluginArrayWrapper](docs/WebPluginArrayWrapper.md)
 - [WebPluginDto](docs/WebPluginDto.md)
 - [WebPluginRequest](docs/WebPluginRequest.md)
 - [WebPluginWrapper](docs/WebPluginWrapper.md)
 - [WebhookGroupStatus](docs/WebhookGroupStatus.md)
 - [WebhookRetryRequestDto](docs/WebhookRetryRequestDto.md)
 - [WebhookTrigger](docs/WebhookTrigger.md)
 - [WebhookTriggerArrayWrapper](docs/WebhookTriggerArrayWrapper.md)
 - [WebhookTriggerDto](docs/WebhookTriggerDto.md)
 - [WebhooksConfigDto](docs/WebhooksConfigDto.md)
 - [WebhooksConfigWithStatusArrayWrapper](docs/WebhooksConfigWithStatusArrayWrapper.md)
 - [WebhooksConfigWithStatusDto](docs/WebhooksConfigWithStatusDto.md)
 - [WebhooksConfigWrapper](docs/WebhooksConfigWrapper.md)
 - [WebhooksLogArrayWrapper](docs/WebhooksLogArrayWrapper.md)
 - [WebhooksLogDto](docs/WebhooksLogDto.md)
 - [WebhooksLogWrapper](docs/WebhooksLogWrapper.md)
 - [WhiteLabelItemArrayWrapper](docs/WhiteLabelItemArrayWrapper.md)
 - [WhiteLabelItemDto](docs/WhiteLabelItemDto.md)
 - [WhiteLabelItemPathDto](docs/WhiteLabelItemPathDto.md)
 - [WhiteLabelItemSizeDto](docs/WhiteLabelItemSizeDto.md)
 - [WhiteLabelLogoType](docs/WhiteLabelLogoType.md)
 - [WhiteLabelRequestDto](docs/WhiteLabelRequestDto.md)
 - [WizardRequestDto](docs/WizardRequestDto.md)
 - [WizardSettingsDto](docs/WizardSettingsDto.md)
 - [WizardSettingsWrapper](docs/WizardSettingsWrapper.md)
 - [XlsxReportResponseDto](docs/XlsxReportResponseDto.md)
 - [XlsxReportResponseWrapper](docs/XlsxReportResponseWrapper.md)

</details>
