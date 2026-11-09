# SkillsApi

All URIs are relative to *https://your-docspace.onlyoffice.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiSkillsGenerate**](#aiskillsgenerate) | **POST** /api/2.0/ai/skills/generate | Generate a skill|

# **aiSkillsGenerate**
> AiSkillsGenerate200Response aiSkillsGenerate(aiSkillsGenerateRequest)

Writes the text of one skill from a title and the caller\'s description of the skill they need, for an Instructions room, without saving it: the caller shows the text for review and saves the version the user accepts as `<name>.md` through `POST api/2.0/files/{folderId}/insert`, where the Files service validates the frontmatter. `destId` is the integer id of the Instructions room, checked before the model runs: the caller has to be able to create files in it, and any other folder answers 400. `title` becomes the skill\'s `name`: it is lower-cased and every run of characters other than letters and digits is folded into one hyphen, so `Sales report` becomes `sales-report`. `description` is a specification of the skill, passed to the model as data, never as an instruction. The model bound to the `Chat` action - the `Default` slot when that action has no profile of its own - runs once, without tools, and writes the description and the body; the frontmatter is then rebuilt here, with the description flattened to one line, stripped of tags and cut to 1 024 characters, so the text as returned always passes the Files service\'s skill validation. The answer carries the skill\'s name and the whole file, frontmatter included.

For more information, see [api.onlyoffice.com](https://api.onlyoffice.com/docspace/api-backend/usage-api/ai-skills-generate/).

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aiSkillsGenerateRequest** | **AiSkillsGenerateRequest**|  | |


### Return type

**AiSkillsGenerate200Response**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### Example

```typescript
import {
    AISkillsApi,
    Configuration,
    AiSkillsGenerateRequest
} from '@onlyoffice/docspace-api-sdk';

const configuration = new Configuration();
const apiInstance = new AISkillsApi(configuration);

let aiSkillsGenerateRequest: AiSkillsGenerateRequest; //

const { status, data } = await apiInstance.aiSkillsGenerate(
    aiSkillsGenerateRequest
);
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The skill\'s name and the whole Markdown file, frontmatter included; nothing is saved. |  -  |
|**400** | `destId` is not an integer id, `title` or `description` is missing or too long, `title` has no letter or digit, or the folder is not an Instructions room. |  -  |
|**401** | Missing `asc_auth_key` cookie or `Authorization` header. |  -  |
|**402** | The model provider refused the request for lack of credit; `code` and `providerMessage` carry its own words. |  -  |
|**403** | The caller cannot create files in the room. |  -  |
|**404** | The room does not exist. |  -  |
|**413** | The request body is larger than 100 KB, the JSON parser\'s limit on this route. |  -  |
|**429** | The model provider is rate-limiting requests; `code` and `providerMessage` carry its own words. |  -  |
|**500** | Unhandled failure. The reason is logged server-side and never echoed back. |  -  |
|**502** | The model request failed or returned an empty skill; `code` says how. `providerMessage` carries the provider\'s own words only for the portal\'s spending limit; other failures, an authentication one among them, leave it out. |  -  |
|**503** | No profile is bound to `Chat` and the `Default` slot is empty too. |  -  |
|**504** | The model round did not finish within the time budget. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

