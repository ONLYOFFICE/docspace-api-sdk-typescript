# AiBuiltinProviderType

Union of all 17 built-in AI provider type identifiers.  The `external` provider has no built-in transport — it delegates every HTTP request to `PlatformAdapter.externalFetch` and parses the response with the inner provider selected by `Profile.basedOn`.

## Enum

* `Anthropic` (value: `'anthropic'`)

* `Ollama` (value: `'ollama'`)

* `Openai` (value: `'openai'`)

* `Openaicompatible` (value: `'openaicompatible'`)

* `Together` (value: `'together'`)

* `Openrouter` (value: `'openrouter'`)

* `Genai` (value: `'genai'`)

* `Deepseek` (value: `'deepseek'`)

* `Xai` (value: `'xai'`)

* `LmStudio` (value: `'lm-studio'`)

* `Mistral` (value: `'mistral'`)

* `Groq` (value: `'groq'`)

* `Zhipu` (value: `'zhipu'`)

* `Stabilityai` (value: `'stabilityai'`)

* `Gpt4all` (value: `'gpt4all'`)

* `Onlyoffice` (value: `'onlyoffice'`)

* `External` (value: `'external'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
