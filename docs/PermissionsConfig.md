# PermissionsConfig

The permissions configuration parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **boolean** | Defines if the document can be commented or not. | [optional] [default to undefined]
**chat** | **boolean** | Defines if the chat functionality is enabled in the document or not. | [optional] [default to undefined]
**download** | **boolean** | Defines if the document can be downloaded or only viewed or edited online. | [optional] [default to undefined]
**edit** | **boolean** | Defines if the document can be edited or only viewed. | [optional] [default to undefined]
**fillForms** | **boolean** | Defines if the forms can be filled. | [optional] [default to undefined]
**modifyFilter** | **boolean** | Defines if the filter can be applied globally (true) affecting all the other users,  or locally (false), i.e. for the current user only. | [optional] [default to undefined]
**protect** | **boolean** | Defines if the \&quot;Protection\&quot; tab on the toolbar and the \&quot;Protect\&quot; button in the left menu are displayedor hidden. | [optional] [default to undefined]
**print** | **boolean** | Defines if the document can be printed or not. | [optional] [default to undefined]
**rename** | **boolean** | Specifies whether to display the \&quot;Rename...\&quot; button when using the \&quot;onRequestRename\&quot; event. | [optional] [default to undefined]
**review** | **boolean** | Defines if the document can be reviewed or not. | [optional] [default to undefined]
**copy** | **boolean** | Defines if the content can be copied to the clipboard or not. | [optional] [default to undefined]

## Example

```typescript
import { PermissionsConfig } from '@onlyoffice/docspace-api-typescript';

const instance: PermissionsConfig = {
    comment,
    chat,
    download,
    edit,
    fillForms,
    modifyFilter,
    protect,
    print,
    rename,
    review,
    copy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
