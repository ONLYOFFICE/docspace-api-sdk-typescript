# FilesSettingsDto

The file settings parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extsImagePreviewed** | **Array&lt;string&gt;** | The list of extensions of the viewed images. | [optional] [default to undefined]
**extsMediaPreviewed** | **Array&lt;string&gt;** | The list of extensions of the viewed media files. | [optional] [default to undefined]
**extsWebPreviewed** | **Array&lt;string&gt;** | The list of extensions of the viewed files. | [optional] [default to undefined]
**extsWebEdited** | **Array&lt;string&gt;** | The list of extensions of the edited files. | [optional] [default to undefined]
**extsWebEncrypt** | **Array&lt;string&gt;** | The list of extensions of the encrypted files. | [optional] [default to undefined]
**extsWebReviewed** | **Array&lt;string&gt;** | The list of extensions of the reviewed files. | [optional] [default to undefined]
**extsWebCustomFilterEditing** | **Array&lt;string&gt;** | The list of extensions of the custom filter files. | [optional] [default to undefined]
**extsWebRestrictedEditing** | **Array&lt;string&gt;** | The list of extensions of the files that are restricted for editing. | [optional] [default to undefined]
**extsWebCommented** | **Array&lt;string&gt;** | The list of extensions of the commented files. | [optional] [default to undefined]
**extsWebTemplate** | **Array&lt;string&gt;** | The list of extensions of the template files. | [optional] [default to undefined]
**extsCoAuthoring** | **Array&lt;string&gt;** | The list of extensions of the co-authoring files. | [optional] [default to undefined]
**extsMustConvert** | **Array&lt;string&gt;** | The list of extensions of the files that must be converted. | [optional] [default to undefined]
**extsConvertible** | **{ [key: string]: Array&lt;string&gt; | null; }** | The list of the convertible extensions. | [optional] [default to undefined]
**extsUploadable** | **Array&lt;string&gt;** | The list of the uploadable extensions. | [optional] [default to undefined]
**extsArchive** | **Array&lt;string&gt;** | The list of extensions of the archive files. | [optional] [default to undefined]
**extsVideo** | **Array&lt;string&gt;** | The list of the video extensions. | [optional] [default to undefined]
**extsAudio** | **Array&lt;string&gt;** | The list of the audio extensions. | [optional] [default to undefined]
**extsImage** | **Array&lt;string&gt;** | The list of the image extensions. | [optional] [default to undefined]
**extsSpreadsheet** | **Array&lt;string&gt;** | The list of the spreadsheet extensions. | [optional] [default to undefined]
**extsPresentation** | **Array&lt;string&gt;** | The list of the presentation extensions. | [optional] [default to undefined]
**extsDocument** | **Array&lt;string&gt;** | The list of the text document extensions. | [optional] [default to undefined]
**internalFormats** | [**FilesSettingsDtoInternalFormats**](FilesSettingsDtoInternalFormats.md) |  | [optional] [default to undefined]
**masterFormExtension** | **string** | The master form extension. | [optional] [default to undefined]
**paramVersion** | **string** | The URL parameter which specifies the file version. | [optional] [default to undefined]
**paramOutType** | **string** | The URL parameter which specifies the output type of the converted file. | [optional] [default to undefined]
**fileDownloadUrlString** | **string** | The URL to download a file. | [optional] [default to undefined]
**fileWebViewerUrlString** | **string** | The URL to the file web viewer. | [optional] [default to undefined]
**fileWebViewerExternalUrlString** | **string** | The external URL to the file web viewer. | [optional] [default to undefined]
**fileWebEditorUrlString** | **string** | The URL to the file web editor. | [optional] [default to undefined]
**fileWebEditorExternalUrlString** | **string** | The external URL to the file web editor. | [optional] [default to undefined]
**fileRedirectPreviewUrlString** | **string** | The redirect URL to the file viewer. | [optional] [default to undefined]
**fileThumbnailUrlString** | **string** | The URL to the file thumbnail. | [optional] [default to undefined]
**confirmDelete** | **boolean** | Specifies whether to confirm the file deletion or not. | [optional] [default to undefined]
**enableThirdParty** | **boolean** | Specifies whether to allow users to connect the third-party storages. | [optional] [default to undefined]
**externalShare** | **boolean** | Specifies whether to enable sharing external links to the files. | [optional] [default to undefined]
**externalShareSocialMedia** | **boolean** | Specifies whether to enable sharing files on social media. | [optional] [default to undefined]
**storeOriginalFiles** | **boolean** | Specifies whether to enable storing original files. | [optional] [default to undefined]
**keepNewFileName** | **boolean** | Specifies whether to keep the new file name. | [optional] [default to undefined]
**displayFileExtension** | **boolean** | Specifies whether to display the file extension. | [optional] [default to undefined]
**convertNotify** | **boolean** | Specifies whether to display the conversion notification. | [optional] [default to undefined]
**hideConfirmCancelOperation** | **boolean** | Specifies whether to hide the confirmation dialog for the cancel operation. | [optional] [default to undefined]
**hideConfirmConvertSave** | **boolean** | Specifies whether to hide the confirmation dialog  for saving the file copy in the original format when converting a file. | [optional] [default to undefined]
**hideConfirmConvertOpen** | **boolean** | Specifies whether to hide the confirmation dialog  for opening the conversion result. | [optional] [default to undefined]
**hideConfirmRoomLifetime** | **boolean** | Specifies whether to hide the confirmation dialog about the file lifetime in the room. | [optional] [default to undefined]
**defaultOrder** | [**OrderBy**](OrderBy.md) |  | [optional] [default to undefined]
**forcesave** | **boolean** | Specifies whether to forcesave the files or not. | [optional] [default to undefined]
**storeForcesave** | **boolean** | Specifies whether to store the forcesaved file versions or not. | [optional] [default to undefined]
**recentSection** | **boolean** | Specifies if the \&quot;Recent\&quot; section is displayed or not. | [optional] [default to undefined]
**favoritesSection** | **boolean** | Specifies if the \&quot;Favorites\&quot; section is displayed or not. | [optional] [default to undefined]
**templatesSection** | **boolean** | Specifies if the \&quot;Templates\&quot; section is displayed or not. | [optional] [default to undefined]
**downloadTarGz** | **boolean** | Specifies whether to download the .tar.gz files or not. | [optional] [default to undefined]
**automaticallyCleanUp** | [**AutoCleanUpData**](AutoCleanUpData.md) |  | [optional] [default to undefined]
**canSearchByContent** | **boolean** | Specifies whether the file can be searched by its content or not. | [optional] [default to undefined]
**defaultSharingAccessRights** | **Array&lt;number&gt;** | The default access rights in sharing settings. | [optional] [default to undefined]
**maxUploadThreadCount** | **number** | The maximum number of upload threads. | [optional] [default to undefined]
**chunkUploadSize** | **number** | The size of a large file that is uploaded in chunks. | [optional] [default to undefined]
**openEditorInSameTab** | **boolean** | Specifies whether to open the editor in the same tab or not. | [optional] [default to undefined]

## Example

```typescript
import { FilesSettingsDto } from '@onlyoffice/docspace-api-typescript';

const instance: FilesSettingsDto = {
    extsImagePreviewed,
    extsMediaPreviewed,
    extsWebPreviewed,
    extsWebEdited,
    extsWebEncrypt,
    extsWebReviewed,
    extsWebCustomFilterEditing,
    extsWebRestrictedEditing,
    extsWebCommented,
    extsWebTemplate,
    extsCoAuthoring,
    extsMustConvert,
    extsConvertible,
    extsUploadable,
    extsArchive,
    extsVideo,
    extsAudio,
    extsImage,
    extsSpreadsheet,
    extsPresentation,
    extsDocument,
    internalFormats,
    masterFormExtension,
    paramVersion,
    paramOutType,
    fileDownloadUrlString,
    fileWebViewerUrlString,
    fileWebViewerExternalUrlString,
    fileWebEditorUrlString,
    fileWebEditorExternalUrlString,
    fileRedirectPreviewUrlString,
    fileThumbnailUrlString,
    confirmDelete,
    enableThirdParty,
    externalShare,
    externalShareSocialMedia,
    storeOriginalFiles,
    keepNewFileName,
    displayFileExtension,
    convertNotify,
    hideConfirmCancelOperation,
    hideConfirmConvertSave,
    hideConfirmConvertOpen,
    hideConfirmRoomLifetime,
    defaultOrder,
    forcesave,
    storeForcesave,
    recentSection,
    favoritesSection,
    templatesSection,
    downloadTarGz,
    automaticallyCleanUp,
    canSearchByContent,
    defaultSharingAccessRights,
    maxUploadThreadCount,
    chunkUploadSize,
    openEditorInSameTab,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
