# @onlyoffice/docspace-api-typescript

The ONLYOFFICE DocSpace SDK for TypeScript is a library that provides tools for integrating and managing DocSpace features within your applications. It simplifies interaction with the DocSpace API by offering ready-to-use methods and models.

- API version: 3.2.0
- SDK version: 1.0.0

For more information, please visit [https://helpdesk.onlyoffice.com/hc/en-us](https://helpdesk.onlyoffice.com/hc/en-us)

This SDK utilizes axios for HTTP communication. The resulting Node module can be used in various environments:

* [Node.js](https://nodejs.org/en)
* [Webpack](https://webpack.js.org/)
* [Browserify](https://browserify.org/)

#### Language levels
* ES5 - you must have a Promises/A+ library installed
* ES6

#### Module systems
* CommonJS
* ES6 module system

This SDK can be used in both TypeScript and JavaScript projects. In TypeScript, definitions are automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

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
npm install @onlyoffice/docspace-api-typescript --save
```

#### From local build (not recommended)

```bash
npm install PATH_TO_GENERATED_PACKAGE --save
```

<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
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


### Documentation for API Endpoints

All URIs are relative to *http://localhost:8092*

<details><summary>API Endoints table</summary>
Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiKeysApi* | [**createApiKey**](docs/ApiKeysApi.md#createapikey) | **POST** /api/2.0/keys | Create a user API key
*ApiKeysApi* | [**deleteApiKey**](docs/ApiKeysApi.md#deleteapikey) | **DELETE** /api/2.0/keys/{keyId} | Delete a user API key
*ApiKeysApi* | [**getAllPermissions**](docs/ApiKeysApi.md#getallpermissions) | **GET** /api/2.0/keys/permissions | Get API key permissions
*ApiKeysApi* | [**getApiKey**](docs/ApiKeysApi.md#getapikey) | **GET** /api/2.0/keys/@self | Get user API key info
*ApiKeysApi* | [**getApiKeys**](docs/ApiKeysApi.md#getapikeys) | **GET** /api/2.0/keys | Get user API keys
*ApiKeysApi* | [**updateApiKey**](docs/ApiKeysApi.md#updateapikey) | **PUT** /api/2.0/keys/{keyId} | Update an API key
*AuthenticationApi* | [**authenticateMe**](docs/AuthenticationApi.md#authenticateme) | **POST** /api/2.0/authentication | Authenticate a user
*AuthenticationApi* | [**authenticateMeFromBodyWithCode**](docs/AuthenticationApi.md#authenticatemefrombodywithcode) | **POST** /api/2.0/authentication/{code} | Authenticate a user by code
*AuthenticationApi* | [**checkConfirm**](docs/AuthenticationApi.md#checkconfirm) | **POST** /api/2.0/authentication/confirm | Open confirmation email URL
*AuthenticationApi* | [**getIsAuthentificated**](docs/AuthenticationApi.md#getisauthentificated) | **GET** /api/2.0/authentication | Check authentication
*AuthenticationApi* | [**logout**](docs/AuthenticationApi.md#logout) | **POST** /api/2.0/authentication/logout | Log out
*AuthenticationApi* | [**saveMobilePhone**](docs/AuthenticationApi.md#savemobilephone) | **POST** /api/2.0/authentication/setphone | Set a mobile phone
*AuthenticationApi* | [**sendSmsCode**](docs/AuthenticationApi.md#sendsmscode) | **POST** /api/2.0/authentication/sendsms | Send SMS code
*BackupApi* | [**createBackupSchedule**](docs/BackupApi.md#createbackupschedule) | **POST** /api/2.0/backup/createbackupschedule | Create the backup schedule
*BackupApi* | [**deleteBackup**](docs/BackupApi.md#deletebackup) | **DELETE** /api/2.0/backup/deletebackup/{id} | Delete the backup
*BackupApi* | [**deleteBackupHistory**](docs/BackupApi.md#deletebackuphistory) | **DELETE** /api/2.0/backup/deletebackuphistory | Delete the backup history
*BackupApi* | [**deleteBackupSchedule**](docs/BackupApi.md#deletebackupschedule) | **DELETE** /api/2.0/backup/deletebackupschedule | Delete the backup schedule
*BackupApi* | [**getBackupHistory**](docs/BackupApi.md#getbackuphistory) | **GET** /api/2.0/backup/getbackuphistory | Get the backup history
*BackupApi* | [**getBackupProgress**](docs/BackupApi.md#getbackupprogress) | **GET** /api/2.0/backup/getbackupprogress | Get the backup progress
*BackupApi* | [**getBackupSchedule**](docs/BackupApi.md#getbackupschedule) | **GET** /api/2.0/backup/getbackupschedule | Get the backup schedule
*BackupApi* | [**getRestoreProgress**](docs/BackupApi.md#getrestoreprogress) | **GET** /api/2.0/backup/getrestoreprogress | Get the restoring progress
*BackupApi* | [**startBackup**](docs/BackupApi.md#startbackup) | **POST** /api/2.0/backup/startbackup | Start the backup
*BackupApi* | [**startBackupRestore**](docs/BackupApi.md#startbackuprestore) | **POST** /api/2.0/backup/startrestore | Start the restoring process
*CapabilitiesApi* | [**getPortalCapabilities**](docs/CapabilitiesApi.md#getportalcapabilities) | **GET** /api/2.0/capabilities | Get portal capabilities
*FilesFilesApi* | [**addTemplates**](docs/FilesFilesApi.md#addtemplates) | **POST** /api/2.0/files/templates | Add template files
*FilesFilesApi* | [**changeVersionHistory**](docs/FilesFilesApi.md#changeversionhistory) | **PUT** /api/2.0/files/file/{fileId}/history | Change version history
*FilesFilesApi* | [**checkFillFormDraft**](docs/FilesFilesApi.md#checkfillformdraft) | **POST** /api/2.0/files/masterform/{fileId}/checkfillformdraft | Check the form draft filling
*FilesFilesApi* | [**copyFileAs**](docs/FilesFilesApi.md#copyfileas) | **POST** /api/2.0/files/file/{fileId}/copyas | Copy a file
*FilesFilesApi* | [**createEditSession**](docs/FilesFilesApi.md#createeditsession) | **POST** /api/2.0/files/file/{fileId}/edit_session | Create the editing session
*FilesFilesApi* | [**createFile**](docs/FilesFilesApi.md#createfile) | **POST** /api/2.0/files/{folderId}/file | Create a file
*FilesFilesApi* | [**createFileInMyDocuments**](docs/FilesFilesApi.md#createfileinmydocuments) | **POST** /api/2.0/files/@my/file | Create a file in the \&quot;My documents\&quot; section
*FilesFilesApi* | [**createHtmlFile**](docs/FilesFilesApi.md#createhtmlfile) | **POST** /api/2.0/files/{folderId}/html | Create an HTML file
*FilesFilesApi* | [**createHtmlFileInMyDocuments**](docs/FilesFilesApi.md#createhtmlfileinmydocuments) | **POST** /api/2.0/files/@my/html | Create an HTML file in the \&quot;My documents\&quot; section
*FilesFilesApi* | [**createPrimaryExternalLink**](docs/FilesFilesApi.md#createprimaryexternallink) | **POST** /api/2.0/files/file/{id}/link | Create primary external link
*FilesFilesApi* | [**createTextFile**](docs/FilesFilesApi.md#createtextfile) | **POST** /api/2.0/files/{folderId}/text | Create a text file
*FilesFilesApi* | [**createTextFileInMyDocuments**](docs/FilesFilesApi.md#createtextfileinmydocuments) | **POST** /api/2.0/files/@my/text | Create a text file in the \&quot;My documents\&quot; section
*FilesFilesApi* | [**createThumbnails**](docs/FilesFilesApi.md#createthumbnails) | **POST** /api/2.0/files/thumbnails | Create file thumbnails
*FilesFilesApi* | [**deleteFile**](docs/FilesFilesApi.md#deletefile) | **DELETE** /api/2.0/files/file/{fileId} | Delete a file
*FilesFilesApi* | [**deleteRecent**](docs/FilesFilesApi.md#deleterecent) | **DELETE** /api/2.0/files/recent | Delete recent files
*FilesFilesApi* | [**deleteTemplates**](docs/FilesFilesApi.md#deletetemplates) | **DELETE** /api/2.0/files/templates | Delete template files
*FilesFilesApi* | [**getAllFormRoles**](docs/FilesFilesApi.md#getallformroles) | **GET** /api/2.0/files/file/{fileId}/formroles | Get form roles
*FilesFilesApi* | [**getEditDiffUrl**](docs/FilesFilesApi.md#geteditdiffurl) | **GET** /api/2.0/files/file/{fileId}/edit/diff | Get changes URL
*FilesFilesApi* | [**getEditHistory**](docs/FilesFilesApi.md#getedithistory) | **GET** /api/2.0/files/file/{fileId}/edit/history | Get version history
*FilesFilesApi* | [**getFileHistory**](docs/FilesFilesApi.md#getfilehistory) | **GET** /api/2.0/files/file/{fileId}/log | Get file history
*FilesFilesApi* | [**getFileInfo**](docs/FilesFilesApi.md#getfileinfo) | **GET** /api/2.0/files/file/{fileId} | Get file information
*FilesFilesApi* | [**getFileLinks**](docs/FilesFilesApi.md#getfilelinks) | **GET** /api/2.0/files/file/{id}/links | Get file external links
*FilesFilesApi* | [**getFilePrimaryExternalLink**](docs/FilesFilesApi.md#getfileprimaryexternallink) | **GET** /api/2.0/files/file/{id}/link | Get primary external link
*FilesFilesApi* | [**getFileVersionInfo**](docs/FilesFilesApi.md#getfileversioninfo) | **GET** /api/2.0/files/file/{fileId}/history | Get file versions
*FilesFilesApi* | [**getFillResult**](docs/FilesFilesApi.md#getfillresult) | **GET** /api/2.0/files/file/fillresult | Get form-filling result
*FilesFilesApi* | [**getPresignedFileUri**](docs/FilesFilesApi.md#getpresignedfileuri) | **GET** /api/2.0/files/file/{fileId}/presigned | Get file download link asynchronously
*FilesFilesApi* | [**getPresignedUri**](docs/FilesFilesApi.md#getpresigneduri) | **GET** /api/2.0/files/file/{fileId}/presigneduri | Get file download link
*FilesFilesApi* | [**getProtectedFileUsers**](docs/FilesFilesApi.md#getprotectedfileusers) | **GET** /api/2.0/files/file/{fileId}/protectusers | Get users access rights to the protected file
*FilesFilesApi* | [**getReferenceData**](docs/FilesFilesApi.md#getreferencedata) | **POST** /api/2.0/files/file/referencedata | Get reference data
*FilesFilesApi* | [**isFormPDF**](docs/FilesFilesApi.md#isformpdf) | **GET** /api/2.0/files/file/{fileId}/isformpdf | Check the PDF file
*FilesFilesApi* | [**lockFile**](docs/FilesFilesApi.md#lockfile) | **PUT** /api/2.0/files/file/{fileId}/lock | Lock a file
*FilesFilesApi* | [**manageFormFilling**](docs/FilesFilesApi.md#manageformfilling) | **PUT** /api/2.0/files/file/{fileId}/manageformfilling | Perform form filling action
*FilesFilesApi* | [**openEditFile**](docs/FilesFilesApi.md#openeditfile) | **GET** /api/2.0/files/file/{fileId}/openedit | Open a file configuration
*FilesFilesApi* | [**restoreFileVersion**](docs/FilesFilesApi.md#restorefileversion) | **GET** /api/2.0/files/file/{fileId}/restoreversion | Restore a file version
*FilesFilesApi* | [**saveEditingFileFromForm**](docs/FilesFilesApi.md#saveeditingfilefromform) | **PUT** /api/2.0/files/file/{fileId}/saveediting | Save file edits
*FilesFilesApi* | [**saveFileAsPdf**](docs/FilesFilesApi.md#savefileaspdf) | **POST** /api/2.0/files/file/{id}/saveaspdf | Save a file as PDF
*FilesFilesApi* | [**saveFormRoleMapping**](docs/FilesFilesApi.md#saveformrolemapping) | **POST** /api/2.0/files/file/{fileId}/formrolemapping | Save form role mapping
*FilesFilesApi* | [**setCustomFilterTag**](docs/FilesFilesApi.md#setcustomfiltertag) | **PUT** /api/2.0/files/file/{fileId}/customfilter | Set the Custom Filter editing mode
*FilesFilesApi* | [**setExternalLink**](docs/FilesFilesApi.md#setexternallink) | **PUT** /api/2.0/files/file/{id}/links | Set an external link
*FilesFilesApi* | [**setFileOrder**](docs/FilesFilesApi.md#setfileorder) | **PUT** /api/2.0/files/{fileId}/order | Set file order
*FilesFilesApi* | [**setFilesOrder**](docs/FilesFilesApi.md#setfilesorder) | **PUT** /api/2.0/files/order | Set order of files
*FilesFilesApi* | [**startEditFile**](docs/FilesFilesApi.md#starteditfile) | **POST** /api/2.0/files/file/{fileId}/startedit | Start file editing
*FilesFilesApi* | [**startFillingFile**](docs/FilesFilesApi.md#startfillingfile) | **PUT** /api/2.0/files/file/{fileId}/startfilling | Start file filling
*FilesFilesApi* | [**trackEditFile**](docs/FilesFilesApi.md#trackeditfile) | **GET** /api/2.0/files/file/{fileId}/trackeditfile | Track file editing
*FilesFilesApi* | [**updateFile**](docs/FilesFilesApi.md#updatefile) | **PUT** /api/2.0/files/file/{fileId} | Update a file
*FilesFoldersApi* | [**checkUpload**](docs/FilesFoldersApi.md#checkupload) | **POST** /api/2.0/files/{folderId}/upload/check | Check file uploads
*FilesFoldersApi* | [**createFolder**](docs/FilesFoldersApi.md#createfolder) | **POST** /api/2.0/files/folder/{folderId} | Create a folder
*FilesFoldersApi* | [**deleteFolder**](docs/FilesFoldersApi.md#deletefolder) | **DELETE** /api/2.0/files/folder/{folderId} | Delete a folder
*FilesFoldersApi* | [**getFilesUsedSpace**](docs/FilesFoldersApi.md#getfilesusedspace) | **GET** /api/2.0/files/filesusedspace | Get used space of files
*FilesFoldersApi* | [**getFolder**](docs/FilesFoldersApi.md#getfolder) | **GET** /api/2.0/files/{folderId}/formfilter | Get folder form filter
*FilesFoldersApi* | [**getFolderByFolderId**](docs/FilesFoldersApi.md#getfolderbyfolderid) | **GET** /api/2.0/files/{folderId} | Get a folder by ID
*FilesFoldersApi* | [**getFolderHistory**](docs/FilesFoldersApi.md#getfolderhistory) | **GET** /api/2.0/files/folder/{folderId}/log | Get folder history
*FilesFoldersApi* | [**getFolderInfo**](docs/FilesFoldersApi.md#getfolderinfo) | **GET** /api/2.0/files/folder/{folderId} | Get folder information
*FilesFoldersApi* | [**getFolderPath**](docs/FilesFoldersApi.md#getfolderpath) | **GET** /api/2.0/files/folder/{folderId}/path | Get the folder path
*FilesFoldersApi* | [**getFolderPrimaryExternalLink**](docs/FilesFoldersApi.md#getfolderprimaryexternallink) | **GET** /api/2.0/files/folder/{id}/link | Get primary external link
*FilesFoldersApi* | [**getFolders**](docs/FilesFoldersApi.md#getfolders) | **GET** /api/2.0/files/{folderId}/subfolders | Get subfolders
*FilesFoldersApi* | [**getMyFolder**](docs/FilesFoldersApi.md#getmyfolder) | **GET** /api/2.0/files/@my | Get the \&quot;My documents\&quot; section
*FilesFoldersApi* | [**getNewFolderItems**](docs/FilesFoldersApi.md#getnewfolderitems) | **GET** /api/2.0/files/{folderId}/news | Get new folder items
*FilesFoldersApi* | [**getPrivacyFolder**](docs/FilesFoldersApi.md#getprivacyfolder) | **GET** /api/2.0/files/@privacy | Get the \&quot;Private Room\&quot; section
*FilesFoldersApi* | [**getRootFolders**](docs/FilesFoldersApi.md#getrootfolders) | **GET** /api/2.0/files/@root | Get filtered sections
*FilesFoldersApi* | [**getTrashFolder**](docs/FilesFoldersApi.md#gettrashfolder) | **GET** /api/2.0/files/@trash | Get the \&quot;Trash\&quot; section
*FilesFoldersApi* | [**insertFile**](docs/FilesFoldersApi.md#insertfile) | **POST** /api/2.0/files/{folderId}/insert | Insert a file
*FilesFoldersApi* | [**insertFileToMyFromBody**](docs/FilesFoldersApi.md#insertfiletomyfrombody) | **POST** /api/2.0/files/@my/insert | Insert a file to the \&quot;My documents\&quot; section
*FilesFoldersApi* | [**renameFolder**](docs/FilesFoldersApi.md#renamefolder) | **PUT** /api/2.0/files/folder/{folderId} | Rename a folder
*FilesFoldersApi* | [**setFolderOrder**](docs/FilesFoldersApi.md#setfolderorder) | **PUT** /api/2.0/files/folder/{folderId}/order | Set folder order
*FilesFoldersApi* | [**uploadFile**](docs/FilesFoldersApi.md#uploadfile) | **POST** /api/2.0/files/{folderId}/upload | Upload a file
*FilesFoldersApi* | [**uploadFileToMy**](docs/FilesFoldersApi.md#uploadfiletomy) | **POST** /api/2.0/files/@my/upload | Upload a file to the \&quot;My documents\&quot; section
*FilesOperationsApi* | [**bulkDownload**](docs/FilesOperationsApi.md#bulkdownload) | **PUT** /api/2.0/files/fileops/bulkdownload | Bulk download
*FilesOperationsApi* | [**checkConversionStatus**](docs/FilesOperationsApi.md#checkconversionstatus) | **GET** /api/2.0/files/file/{fileId}/checkconversion | Get conversion status
*FilesOperationsApi* | [**checkMoveOrCopyBatchItems**](docs/FilesOperationsApi.md#checkmoveorcopybatchitems) | **GET** /api/2.0/files/fileops/move | Check and move or copy to a folder
*FilesOperationsApi* | [**checkMoveOrCopyDestFolder**](docs/FilesOperationsApi.md#checkmoveorcopydestfolder) | **GET** /api/2.0/files/fileops/checkdestfolder | Check for moving or copying to a folder
*FilesOperationsApi* | [**copyBatchItems**](docs/FilesOperationsApi.md#copybatchitems) | **PUT** /api/2.0/files/fileops/copy | Copy to the folder
*FilesOperationsApi* | [**createUploadSession**](docs/FilesOperationsApi.md#createuploadsession) | **POST** /api/2.0/files/{folderId}/upload/create_session | Chunked upload
*FilesOperationsApi* | [**deleteBatchItems**](docs/FilesOperationsApi.md#deletebatchitems) | **PUT** /api/2.0/files/fileops/delete | Delete files and folders
*FilesOperationsApi* | [**deleteFileVersions**](docs/FilesOperationsApi.md#deletefileversions) | **PUT** /api/2.0/files/fileops/deleteversion | Delete file versions
*FilesOperationsApi* | [**duplicateBatchItems**](docs/FilesOperationsApi.md#duplicatebatchitems) | **PUT** /api/2.0/files/fileops/duplicate | Duplicate files and folders
*FilesOperationsApi* | [**emptyTrash**](docs/FilesOperationsApi.md#emptytrash) | **PUT** /api/2.0/files/fileops/emptytrash | Empty the \&quot;Trash\&quot; folder
*FilesOperationsApi* | [**getOperationStatuses**](docs/FilesOperationsApi.md#getoperationstatuses) | **GET** /api/2.0/files/fileops | Get active file operations
*FilesOperationsApi* | [**getOperationStatusesByType**](docs/FilesOperationsApi.md#getoperationstatusesbytype) | **GET** /api/2.0/files/fileops/{operationType} | Get file operation statuses
*FilesOperationsApi* | [**markAsRead**](docs/FilesOperationsApi.md#markasread) | **PUT** /api/2.0/files/fileops/markasread | Mark as read
*FilesOperationsApi* | [**moveBatchItems**](docs/FilesOperationsApi.md#movebatchitems) | **PUT** /api/2.0/files/fileops/move | Move or copy to a folder
*FilesOperationsApi* | [**startFileConversion**](docs/FilesOperationsApi.md#startfileconversion) | **PUT** /api/2.0/files/file/{fileId}/checkconversion | Start file conversion
*FilesOperationsApi* | [**terminateTasks**](docs/FilesOperationsApi.md#terminatetasks) | **PUT** /api/2.0/files/fileops/terminate/{id} | Finish active operations
*FilesOperationsApi* | [**updateFileComment**](docs/FilesOperationsApi.md#updatefilecomment) | **PUT** /api/2.0/files/file/{fileId}/comment | Update a comment
*FilesQuotaApi* | [**resetRoomQuota**](docs/FilesQuotaApi.md#resetroomquota) | **PUT** /api/2.0/files/rooms/resetquota | Reset the room quota limit
*FilesQuotaApi* | [**updateRoomsQuota**](docs/FilesQuotaApi.md#updateroomsquota) | **PUT** /api/2.0/files/rooms/roomquota | Change the room quota limit
*FilesSettingsApi* | [**changeAccessToThirdparty**](docs/FilesSettingsApi.md#changeaccesstothirdparty) | **PUT** /api/2.0/files/thirdparty | Change the third-party settings access
*FilesSettingsApi* | [**changeAutomaticallyCleanUp**](docs/FilesSettingsApi.md#changeautomaticallycleanup) | **PUT** /api/2.0/files/settings/autocleanup | Update the trash bin auto-clearing setting
*FilesSettingsApi* | [**changeDefaultAccessRights**](docs/FilesSettingsApi.md#changedefaultaccessrights) | **PUT** /api/2.0/files/settings/dafaultaccessrights | Change the default access rights
*FilesSettingsApi* | [**changeDeleteConfirm**](docs/FilesSettingsApi.md#changedeleteconfirm) | **PUT** /api/2.0/files/changedeleteconfrim | Confirm the file deletion
*FilesSettingsApi* | [**changeDownloadZipFromBody**](docs/FilesSettingsApi.md#changedownloadzipfrombody) | **PUT** /api/2.0/files/settings/downloadtargz | Change the archive format (using body parameters)
*FilesSettingsApi* | [**checkDocServiceUrl**](docs/FilesSettingsApi.md#checkdocserviceurl) | **PUT** /api/2.0/files/docservice | Check the document service URL
*FilesSettingsApi* | [**displayFileExtension**](docs/FilesSettingsApi.md#displayfileextension) | **PUT** /api/2.0/files/displayfileextension | Display a file extension
*FilesSettingsApi* | [**externalShare**](docs/FilesSettingsApi.md#externalshare) | **PUT** /api/2.0/files/settings/external | Change the external sharing ability
*FilesSettingsApi* | [**externalShareSocialMedia**](docs/FilesSettingsApi.md#externalsharesocialmedia) | **PUT** /api/2.0/files/settings/externalsocialmedia | Change the external sharing ability on social networks
*FilesSettingsApi* | [**forcesave**](docs/FilesSettingsApi.md#forcesave) | **PUT** /api/2.0/files/forcesave | Change the forcesaving ability
*FilesSettingsApi* | [**getAutomaticallyCleanUp**](docs/FilesSettingsApi.md#getautomaticallycleanup) | **GET** /api/2.0/files/settings/autocleanup | Get the trash bin auto-clearing setting
*FilesSettingsApi* | [**getDocServiceUrl**](docs/FilesSettingsApi.md#getdocserviceurl) | **GET** /api/2.0/files/docservice | Get the document service URL
*FilesSettingsApi* | [**getFilesModule**](docs/FilesSettingsApi.md#getfilesmodule) | **GET** /api/2.0/files/info | Get the \&quot;Documents\&quot; information
*FilesSettingsApi* | [**getFilesSettings**](docs/FilesSettingsApi.md#getfilessettings) | **GET** /api/2.0/files/settings | Get file settings
*FilesSettingsApi* | [**hideConfirmCancelOperation**](docs/FilesSettingsApi.md#hideconfirmcanceloperation) | **PUT** /api/2.0/files/hideconfirmcanceloperation | Hide confirmation dialog when canceling operations
*FilesSettingsApi* | [**hideConfirmConvert**](docs/FilesSettingsApi.md#hideconfirmconvert) | **PUT** /api/2.0/files/hideconfirmconvert | Hide the confirmation dialog when converting
*FilesSettingsApi* | [**hideConfirmRoomLifetime**](docs/FilesSettingsApi.md#hideconfirmroomlifetime) | **PUT** /api/2.0/files/hideconfirmroomlifetime | Hide confirmation dialog when changing room lifetime settings
*FilesSettingsApi* | [**isAvailablePrivacyRoomSettings**](docs/FilesSettingsApi.md#isavailableprivacyroomsettings) | **GET** /api/2.0/files/@privacy/available | Check the \&quot;Private Room\&quot; availability
*FilesSettingsApi* | [**keepNewFileName**](docs/FilesSettingsApi.md#keepnewfilename) | **PUT** /api/2.0/files/keepnewfilename | Ask a new file name
*FilesSettingsApi* | [**setOpenEditorInSameTab**](docs/FilesSettingsApi.md#setopeneditorinsametab) | **PUT** /api/2.0/files/settings/openeditorinsametab | Open document in the same browser tab
*FilesSettingsApi* | [**storeForcesave**](docs/FilesSettingsApi.md#storeforcesave) | **PUT** /api/2.0/files/storeforcesave | Change the ability to store the forcesaved files
*FilesSettingsApi* | [**storeOriginal**](docs/FilesSettingsApi.md#storeoriginal) | **PUT** /api/2.0/files/storeoriginal | Change the ability to upload original formats
*FilesSettingsApi* | [**updateFileIfExist**](docs/FilesSettingsApi.md#updatefileifexist) | **PUT** /api/2.0/files/updateifexist | Update a file version if it exists
*FilesSharingApi* | [**applyExternalSharePassword**](docs/FilesSharingApi.md#applyexternalsharepassword) | **POST** /api/2.0/files/share/{key}/password | Apply external data password
*FilesSharingApi* | [**changeFileOwner**](docs/FilesSharingApi.md#changefileowner) | **POST** /api/2.0/files/owner | Change the file owner
*FilesSharingApi* | [**getExternalShareData**](docs/FilesSharingApi.md#getexternalsharedata) | **GET** /api/2.0/files/share/{key} | Get the external data
*FilesSharingApi* | [**getSharedUsers**](docs/FilesSharingApi.md#getsharedusers) | **GET** /api/2.0/files/file/{fileId}/sharedusers | Get user access rights by file ID
*FilesSharingApi* | [**sendEditorNotify**](docs/FilesSharingApi.md#sendeditornotify) | **POST** /api/2.0/files/file/{fileId}/sendeditornotify | Send the mention message
*FilesThirdPartyIntegrationApi* | [**deleteThirdParty**](docs/FilesThirdPartyIntegrationApi.md#deletethirdparty) | **DELETE** /api/2.0/files/thirdparty/{providerId} | Remove a third-party account
*FilesThirdPartyIntegrationApi* | [**getAllProviders**](docs/FilesThirdPartyIntegrationApi.md#getallproviders) | **GET** /api/2.0/files/thirdparty/providers | Get all providers
*FilesThirdPartyIntegrationApi* | [**getBackupThirdPartyAccount**](docs/FilesThirdPartyIntegrationApi.md#getbackupthirdpartyaccount) | **GET** /api/2.0/files/thirdparty/backup | Get a third-party account backup
*FilesThirdPartyIntegrationApi* | [**getCapabilities**](docs/FilesThirdPartyIntegrationApi.md#getcapabilities) | **GET** /api/2.0/files/thirdparty/capabilities | Get providers
*FilesThirdPartyIntegrationApi* | [**getCommonThirdPartyFolders**](docs/FilesThirdPartyIntegrationApi.md#getcommonthirdpartyfolders) | **GET** /api/2.0/files/thirdparty/common | Get the common third-party services
*FilesThirdPartyIntegrationApi* | [**getThirdPartyAccounts**](docs/FilesThirdPartyIntegrationApi.md#getthirdpartyaccounts) | **GET** /api/2.0/files/thirdparty | Get the third-party accounts
*FilesThirdPartyIntegrationApi* | [**saveThirdParty**](docs/FilesThirdPartyIntegrationApi.md#savethirdparty) | **POST** /api/2.0/files/thirdparty | Save a third-party account
*FilesThirdPartyIntegrationApi* | [**saveThirdPartyBackup**](docs/FilesThirdPartyIntegrationApi.md#savethirdpartybackup) | **POST** /api/2.0/files/thirdparty/backup | Save a third-party account backup
*GroupApi* | [**addGroup**](docs/GroupApi.md#addgroup) | **POST** /api/2.0/group | Add a new group
*GroupApi* | [**addMembersTo**](docs/GroupApi.md#addmembersto) | **PUT** /api/2.0/group/{id}/members | Add group members
*GroupApi* | [**deleteGroup**](docs/GroupApi.md#deletegroup) | **DELETE** /api/2.0/group/{id} | Delete a group
*GroupApi* | [**getGroup**](docs/GroupApi.md#getgroup) | **GET** /api/2.0/group/{id} | Get a group
*GroupApi* | [**getGroupByUserId**](docs/GroupApi.md#getgroupbyuserid) | **GET** /api/2.0/group/user/{userid} | Get user groups
*GroupApi* | [**getGroups**](docs/GroupApi.md#getgroups) | **GET** /api/2.0/group | Get groups
*GroupApi* | [**moveMembersTo**](docs/GroupApi.md#movemembersto) | **PUT** /api/2.0/group/{fromId}/members/{toId} | Move group members
*GroupApi* | [**removeMembersFrom**](docs/GroupApi.md#removemembersfrom) | **DELETE** /api/2.0/group/{id}/members | Remove group members
*GroupApi* | [**setGroupManager**](docs/GroupApi.md#setgroupmanager) | **PUT** /api/2.0/group/{id}/manager | Set a group manager
*GroupApi* | [**setMembersTo**](docs/GroupApi.md#setmembersto) | **POST** /api/2.0/group/{id}/members | Replace group members
*GroupApi* | [**updateGroup**](docs/GroupApi.md#updategroup) | **PUT** /api/2.0/group/{id} | Update a group
*GroupRoomsApi* | [**getGroupsWithShared**](docs/GroupRoomsApi.md#getgroupswithshared) | **GET** /api/2.0/group/room/{id} | Get groups with sharing settings
*MigrationApi* | [**cancelMigration**](docs/MigrationApi.md#cancelmigration) | **POST** /api/2.0/migration/cancel | Cancel migration
*MigrationApi* | [**clearMigration**](docs/MigrationApi.md#clearmigration) | **POST** /api/2.0/migration/clear | Clear migration
*MigrationApi* | [**finishMigration**](docs/MigrationApi.md#finishmigration) | **POST** /api/2.0/migration/finish | Finish migration
*MigrationApi* | [**getMigrationLogs**](docs/MigrationApi.md#getmigrationlogs) | **GET** /api/2.0/migration/logs | Get migration logs
*MigrationApi* | [**getMigrationStatus**](docs/MigrationApi.md#getmigrationstatus) | **GET** /api/2.0/migration/status | Get migration status
*MigrationApi* | [**listMigrations**](docs/MigrationApi.md#listmigrations) | **GET** /api/2.0/migration/list | Get migrations
*MigrationApi* | [**startMigration**](docs/MigrationApi.md#startmigration) | **POST** /api/2.0/migration/migrate | Start migration
*MigrationApi* | [**uploadAndInitializeMigration**](docs/MigrationApi.md#uploadandinitializemigration) | **POST** /api/2.0/migration/init/{migratorName} | Upload and initialize migration
*OAuth20AuthorizationApi* | [**authorizeOAuth**](docs/OAuth20AuthorizationApi.md#authorizeoauth) | **GET** /oauth2/authorize | OAuth2 authorization endpoint
*OAuth20AuthorizationApi* | [**exchangeToken**](docs/OAuth20AuthorizationApi.md#exchangetoken) | **POST** /oauth2/token | OAuth2 token endpoint
*OAuth20AuthorizationApi* | [**submitConsent**](docs/OAuth20AuthorizationApi.md#submitconsent) | **POST** /oauth2/authorize | OAuth2 consent endpoint
*OAuth20ClientManagementApi* | [**changeActivation**](docs/OAuth20ClientManagementApi.md#changeactivation) | **PATCH** /api/2.0/clients/{clientId}/activation | Change the client activation status
*OAuth20ClientManagementApi* | [**createClient**](docs/OAuth20ClientManagementApi.md#createclient) | **POST** /api/2.0/clients | Create a new OAuth2 client
*OAuth20ClientManagementApi* | [**deleteClient**](docs/OAuth20ClientManagementApi.md#deleteclient) | **DELETE** /api/2.0/clients/{clientId} | Delete an OAuth2 client
*OAuth20ClientManagementApi* | [**regenerateSecret**](docs/OAuth20ClientManagementApi.md#regeneratesecret) | **PATCH** /api/2.0/clients/{clientId}/regenerate | Regenerate the client secret
*OAuth20ClientManagementApi* | [**revokeUserClient**](docs/OAuth20ClientManagementApi.md#revokeuserclient) | **DELETE** /api/2.0/clients/{clientId}/revoke | Revoke client consent
*OAuth20ClientManagementApi* | [**updateClient**](docs/OAuth20ClientManagementApi.md#updateclient) | **PUT** /api/2.0/clients/{clientId} | Update an existing OAuth2 client
*OAuth20ClientQueryingApi* | [**getClient**](docs/OAuth20ClientQueryingApi.md#getclient) | **GET** /api/2.0/clients/{clientId} | Get client details
*OAuth20ClientQueryingApi* | [**getClientInfo**](docs/OAuth20ClientQueryingApi.md#getclientinfo) | **GET** /api/2.0/clients/{clientId}/info | Get detailed client information
*OAuth20ClientQueryingApi* | [**getClients**](docs/OAuth20ClientQueryingApi.md#getclients) | **GET** /api/2.0/clients | Get clients
*OAuth20ClientQueryingApi* | [**getClientsInfo**](docs/OAuth20ClientQueryingApi.md#getclientsinfo) | **GET** /api/2.0/clients/info | Get detailed information of clients
*OAuth20ClientQueryingApi* | [**getConsents**](docs/OAuth20ClientQueryingApi.md#getconsents) | **GET** /api/2.0/clients/consents | Get user consents
*OAuth20ClientQueryingApi* | [**getPublicClientInfo**](docs/OAuth20ClientQueryingApi.md#getpublicclientinfo) | **GET** /api/2.0/clients/{clientId}/public/info | Get public client information
*OAuth20ScopeManagementApi* | [**getScopes**](docs/OAuth20ScopeManagementApi.md#getscopes) | **GET** /api/2.0/scopes | Get available OAuth2 scopes
*PeopleGuestsApi* | [**approveGuestShareLink**](docs/PeopleGuestsApi.md#approveguestsharelink) | **POST** /api/2.0/people/guests/share/approve | Approve a guest sharing link
*PeopleGuestsApi* | [**deleteGuests**](docs/PeopleGuestsApi.md#deleteguests) | **DELETE** /api/2.0/people/guests | Delete guests
*PeoplePasswordApi* | [**changeUserPassword**](docs/PeoplePasswordApi.md#changeuserpassword) | **PUT** /api/2.0/people/{userid}/password | Change a user password
*PeoplePasswordApi* | [**sendUserPassword**](docs/PeoplePasswordApi.md#senduserpassword) | **POST** /api/2.0/people/password | Remind a user password
*PeoplePhotosApi* | [**createMemberPhotoThumbnails**](docs/PeoplePhotosApi.md#creatememberphotothumbnails) | **POST** /api/2.0/people/{userid}/photo/thumbnails | Create photo thumbnails
*PeoplePhotosApi* | [**deleteMemberPhoto**](docs/PeoplePhotosApi.md#deletememberphoto) | **DELETE** /api/2.0/people/{userid}/photo | Delete a user photo
*PeoplePhotosApi* | [**getMemberPhoto**](docs/PeoplePhotosApi.md#getmemberphoto) | **GET** /api/2.0/people/{userid}/photo | Get a user photo
*PeoplePhotosApi* | [**updateMemberPhoto**](docs/PeoplePhotosApi.md#updatememberphoto) | **PUT** /api/2.0/people/{userid}/photo | Update a user photo
*PeoplePhotosApi* | [**uploadMemberPhoto**](docs/PeoplePhotosApi.md#uploadmemberphoto) | **POST** /api/2.0/people/{userid}/photo | Upload a user photo
*PeopleProfilesApi* | [**addMember**](docs/PeopleProfilesApi.md#addmember) | **POST** /api/2.0/people | Add a user
*PeopleProfilesApi* | [**deleteMember**](docs/PeopleProfilesApi.md#deletemember) | **DELETE** /api/2.0/people/{userid} | Delete a user
*PeopleProfilesApi* | [**deleteProfile**](docs/PeopleProfilesApi.md#deleteprofile) | **DELETE** /api/2.0/people/@self | Delete my profile
*PeopleProfilesApi* | [**getAllProfiles**](docs/PeopleProfilesApi.md#getallprofiles) | **GET** /api/2.0/people | Get profiles
*PeopleProfilesApi* | [**getClaims**](docs/PeopleProfilesApi.md#getclaims) | **GET** /api/2.0/people/tokendiagnostics | Returns the user claims.
*PeopleProfilesApi* | [**getProfileByEmail**](docs/PeopleProfilesApi.md#getprofilebyemail) | **GET** /api/2.0/people/email | Get a profile by user email
*PeopleProfilesApi* | [**getProfileByUserId**](docs/PeopleProfilesApi.md#getprofilebyuserid) | **GET** /api/2.0/people/{userid} | Get a profile by user name
*PeopleProfilesApi* | [**getSelfProfile**](docs/PeopleProfilesApi.md#getselfprofile) | **GET** /api/2.0/people/@self | Get my profile
*PeopleProfilesApi* | [**inviteUsers**](docs/PeopleProfilesApi.md#inviteusers) | **POST** /api/2.0/people/invite | Invite users
*PeopleProfilesApi* | [**removeUsers**](docs/PeopleProfilesApi.md#removeusers) | **PUT** /api/2.0/people/delete | Delete users
*PeopleProfilesApi* | [**resendUserInvites**](docs/PeopleProfilesApi.md#resenduserinvites) | **PUT** /api/2.0/people/invite | Resend activation emails
*PeopleProfilesApi* | [**sendEmailChangeInstructions**](docs/PeopleProfilesApi.md#sendemailchangeinstructions) | **POST** /api/2.0/people/email | Send instructions to change email
*PeopleProfilesApi* | [**updateMember**](docs/PeopleProfilesApi.md#updatemember) | **PUT** /api/2.0/people/{userid} | Update a user
*PeopleProfilesApi* | [**updateMemberCulture**](docs/PeopleProfilesApi.md#updatememberculture) | **PUT** /api/2.0/people/{userid}/culture | Update a user culture code
*PeopleQuotaApi* | [**resetUsersQuota**](docs/PeopleQuotaApi.md#resetusersquota) | **PUT** /api/2.0/people/resetquota | Reset a user quota limit
*PeopleQuotaApi* | [**updateUserQuota**](docs/PeopleQuotaApi.md#updateuserquota) | **PUT** /api/2.0/people/userquota | Change a user quota limit
*PeopleSearchApi* | [**getAccountsEntriesWithShared**](docs/PeopleSearchApi.md#getaccountsentrieswithshared) | **GET** /api/2.0/accounts/room/{id}/search | Get account entries
*PeopleSearchApi* | [**getSearch**](docs/PeopleSearchApi.md#getsearch) | **GET** /api/2.0/people/@search/{query} | Search users
*PeopleSearchApi* | [**getSimpleByFilter**](docs/PeopleSearchApi.md#getsimplebyfilter) | **GET** /api/2.0/people/simple/filter | Search users by extended filter
*PeopleSearchApi* | [**getUsersWithRoomShared**](docs/PeopleSearchApi.md#getuserswithroomshared) | **GET** /api/2.0/people/room/{id} | Get users with room sharing settings
*PeopleSearchApi* | [**searchUsersByExtendedFilter**](docs/PeopleSearchApi.md#searchusersbyextendedfilter) | **GET** /api/2.0/people/filter | Search users with detaailed information by extended filter
*PeopleSearchApi* | [**searchUsersByQuery**](docs/PeopleSearchApi.md#searchusersbyquery) | **GET** /api/2.0/people/search | Search users (using query parameters)
*PeopleSearchApi* | [**searchUsersByStatus**](docs/PeopleSearchApi.md#searchusersbystatus) | **GET** /api/2.0/people/status/{status}/search | Search users by status filter
*PeopleThemeApi* | [**changePortalTheme**](docs/PeopleThemeApi.md#changeportaltheme) | **PUT** /api/2.0/people/theme | Change the portal theme
*PeopleThemeApi* | [**getPortalTheme**](docs/PeopleThemeApi.md#getportaltheme) | **GET** /api/2.0/people/theme | Get the portal theme
*PeopleThirdPartyAccountsApi* | [**getThirdPartyAuthProviders**](docs/PeopleThirdPartyAccountsApi.md#getthirdpartyauthproviders) | **GET** /api/2.0/people/thirdparty/providers | Get third-party accounts
*PeopleThirdPartyAccountsApi* | [**linkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#linkthirdpartyaccount) | **PUT** /api/2.0/people/thirdparty/linkaccount | Link a third-pary account
*PeopleThirdPartyAccountsApi* | [**signupThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#signupthirdpartyaccount) | **POST** /api/2.0/people/thirdparty/signup | Create a third-pary account
*PeopleThirdPartyAccountsApi* | [**unlinkThirdPartyAccount**](docs/PeopleThirdPartyAccountsApi.md#unlinkthirdpartyaccount) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Unlink a third-pary account
*PeopleUserDataApi* | [**getDeletePersonalFolderProgress**](docs/PeopleUserDataApi.md#getdeletepersonalfolderprogress) | **GET** /api/2.0/people/delete/personal/progress | Get the progress of deleting the personal folder
*PeopleUserDataApi* | [**getReassignProgress**](docs/PeopleUserDataApi.md#getreassignprogress) | **GET** /api/2.0/people/reassign/progress/{userid} | Get the reassignment progress
*PeopleUserDataApi* | [**getRemoveProgress**](docs/PeopleUserDataApi.md#getremoveprogress) | **GET** /api/2.0/people/remove/progress/{userid} | Get the deletion progress
*PeopleUserDataApi* | [**necessaryReassign**](docs/PeopleUserDataApi.md#necessaryreassign) | **GET** /api/2.0/people/reassign/necessary | Check the data reassignment need
*PeopleUserDataApi* | [**sendInstructionsToDelete**](docs/PeopleUserDataApi.md#sendinstructionstodelete) | **PUT** /api/2.0/people/self/delete | Send the deletion instructions
*PeopleUserDataApi* | [**startDeletePersonalFolder**](docs/PeopleUserDataApi.md#startdeletepersonalfolder) | **POST** /api/2.0/people/delete/personal/start | Delete the personal folder
*PeopleUserDataApi* | [**startReassign**](docs/PeopleUserDataApi.md#startreassign) | **POST** /api/2.0/people/reassign/start | Start the data reassignment
*PeopleUserDataApi* | [**startRemove**](docs/PeopleUserDataApi.md#startremove) | **POST** /api/2.0/people/remove/start | Start the data deletion
*PeopleUserDataApi* | [**terminateReassign**](docs/PeopleUserDataApi.md#terminatereassign) | **PUT** /api/2.0/people/reassign/terminate | Terminate the data reassignment
*PeopleUserDataApi* | [**terminateRemove**](docs/PeopleUserDataApi.md#terminateremove) | **PUT** /api/2.0/people/remove/terminate | Terminate the data deletion
*PeopleUserStatusApi* | [**getByStatus**](docs/PeopleUserStatusApi.md#getbystatus) | **GET** /api/2.0/people/status/{status} | Get profiles by status
*PeopleUserStatusApi* | [**updateUserActivationStatus**](docs/PeopleUserStatusApi.md#updateuseractivationstatus) | **PUT** /api/2.0/people/activationstatus/{activationstatus} | Set an activation status to the users
*PeopleUserStatusApi* | [**updateUserStatus**](docs/PeopleUserStatusApi.md#updateuserstatus) | **PUT** /api/2.0/people/status/{status} | Change a user status
*PeopleUserTypeApi* | [**getUserTypeUpdateProgress**](docs/PeopleUserTypeApi.md#getusertypeupdateprogress) | **GET** /api/2.0/people/type/progress/{userid} | Get the progress of updating user type
*PeopleUserTypeApi* | [**starUserTypetUpdate**](docs/PeopleUserTypeApi.md#starusertypetupdate) | **POST** /api/2.0/people/type | Update user type
*PeopleUserTypeApi* | [**terminateUserTypeUpdate**](docs/PeopleUserTypeApi.md#terminateusertypeupdate) | **PUT** /api/2.0/people/type/terminate | Terminate update user type
*PeopleUserTypeApi* | [**updateUserType**](docs/PeopleUserTypeApi.md#updateusertype) | **PUT** /api/2.0/people/type/{type} | Change a user type
*PortalGuestsApi* | [**getGuestSharingLink**](docs/PortalGuestsApi.md#getguestsharinglink) | **GET** /api/2.0/people/guests/{userid}/share | Get a guest sharing link
*PortalPaymentApi* | [**calculateWalletPayment**](docs/PortalPaymentApi.md#calculatewalletpayment) | **PUT** /api/2.0/portal/payment/calculatewallet | Calculate amount of the wallet payment
*PortalPaymentApi* | [**createCustomerOperationsReport**](docs/PortalPaymentApi.md#createcustomeroperationsreport) | **POST** /api/2.0/portal/payment/customer/operationsreport | Generate the customer operations report
*PortalPaymentApi* | [**getCheckoutSetupUrl**](docs/PortalPaymentApi.md#getcheckoutsetupurl) | **GET** /api/2.0/portal/payment/chechoutsetupurl | Get the checkout setup page URL
*PortalPaymentApi* | [**getCustomerBalance**](docs/PortalPaymentApi.md#getcustomerbalance) | **GET** /api/2.0/portal/payment/customer/balance | Get the customer balance
*PortalPaymentApi* | [**getCustomerInfo**](docs/PortalPaymentApi.md#getcustomerinfo) | **GET** /api/2.0/portal/payment/customerinfo | Get the customer info
*PortalPaymentApi* | [**getCustomerOperations**](docs/PortalPaymentApi.md#getcustomeroperations) | **GET** /api/2.0/portal/payment/customer/operations | Get the customer operations
*PortalPaymentApi* | [**getPaymentAccount**](docs/PortalPaymentApi.md#getpaymentaccount) | **GET** /api/2.0/portal/payment/account | Get the payment account
*PortalPaymentApi* | [**getPaymentCurrencies**](docs/PortalPaymentApi.md#getpaymentcurrencies) | **GET** /api/2.0/portal/payment/currencies | Get currencies
*PortalPaymentApi* | [**getPaymentQuotas**](docs/PortalPaymentApi.md#getpaymentquotas) | **GET** /api/2.0/portal/payment/quotas | Get quotas
*PortalPaymentApi* | [**getPaymentUrl**](docs/PortalPaymentApi.md#getpaymenturl) | **PUT** /api/2.0/portal/payment/url | Get the payment page URL
*PortalPaymentApi* | [**getPortalPrices**](docs/PortalPaymentApi.md#getportalprices) | **GET** /api/2.0/portal/payment/prices | Get prices
*PortalPaymentApi* | [**getQuotaPaymentInformation**](docs/PortalPaymentApi.md#getquotapaymentinformation) | **GET** /api/2.0/portal/payment/quota | Get quota payment information
*PortalPaymentApi* | [**getTenantWalletSettings**](docs/PortalPaymentApi.md#gettenantwalletsettings) | **GET** /api/2.0/portal/payment/topupsettings | Get wallet auto top up settings
*PortalPaymentApi* | [**sendPaymentRequest**](docs/PortalPaymentApi.md#sendpaymentrequest) | **POST** /api/2.0/portal/payment/request | Send a payment request
*PortalPaymentApi* | [**setTenantWalletSettings**](docs/PortalPaymentApi.md#settenantwalletsettings) | **POST** /api/2.0/portal/payment/topupsettings | Set wallet auto top up settings
*PortalPaymentApi* | [**topUpDeposit**](docs/PortalPaymentApi.md#topupdeposit) | **POST** /api/2.0/portal/payment/deposit | Put money on deposit
*PortalPaymentApi* | [**updatePayment**](docs/PortalPaymentApi.md#updatepayment) | **PUT** /api/2.0/portal/payment/update | Update the payment quantity
*PortalPaymentApi* | [**updateWalletPayment**](docs/PortalPaymentApi.md#updatewalletpayment) | **PUT** /api/2.0/portal/payment/updatewallet | Update the wallet payment quantity
*PortalQuotaApi* | [**getPortalQuota**](docs/PortalQuotaApi.md#getportalquota) | **GET** /api/2.0/portal/quota | Get a portal quota
*PortalQuotaApi* | [**getPortalTariff**](docs/PortalQuotaApi.md#getportaltariff) | **GET** /api/2.0/portal/tariff | Get a portal tariff
*PortalQuotaApi* | [**getPortalUsedSpace**](docs/PortalQuotaApi.md#getportalusedspace) | **GET** /api/2.0/portal/usedspace | Get the portal used space
*PortalQuotaApi* | [**getRightQuota**](docs/PortalQuotaApi.md#getrightquota) | **GET** /api/2.0/portal/quota/right | Get the recommended quota
*PortalSettingsApi* | [**continuePortal**](docs/PortalSettingsApi.md#continueportal) | **PUT** /api/2.0/portal/continue | Restore a portal
*PortalSettingsApi* | [**deletePortal**](docs/PortalSettingsApi.md#deleteportal) | **DELETE** /api/2.0/portal/delete | Delete a portal
*PortalSettingsApi* | [**getPortalInformation**](docs/PortalSettingsApi.md#getportalinformation) | **GET** /api/2.0/portal | Get a portal
*PortalSettingsApi* | [**getPortalPath**](docs/PortalSettingsApi.md#getportalpath) | **GET** /api/2.0/portal/path | Get a path to the portal
*PortalSettingsApi* | [**sendDeleteInstructions**](docs/PortalSettingsApi.md#senddeleteinstructions) | **POST** /api/2.0/portal/delete | Send removal instructions
*PortalSettingsApi* | [**sendSuspendInstructions**](docs/PortalSettingsApi.md#sendsuspendinstructions) | **POST** /api/2.0/portal/suspend | Send suspension instructions
*PortalSettingsApi* | [**suspendPortal**](docs/PortalSettingsApi.md#suspendportal) | **PUT** /api/2.0/portal/suspend | Deactivate a portal
*PortalUsersApi* | [**getInvitationLink**](docs/PortalUsersApi.md#getinvitationlink) | **GET** /api/2.0/portal/users/invite/{employeeType} | Get an invitation link
*PortalUsersApi* | [**getPortalUsersCount**](docs/PortalUsersApi.md#getportaluserscount) | **GET** /api/2.0/portal/userscount | Get a number of portal users
*PortalUsersApi* | [**getUserById**](docs/PortalUsersApi.md#getuserbyid) | **GET** /api/2.0/portal/users/{userID} | Get a user by ID
*PortalUsersApi* | [**markGiftMessageAsRead**](docs/PortalUsersApi.md#markgiftmessageasread) | **POST** /api/2.0/portal/present/mark | Mark a gift message as read
*PortalUsersApi* | [**sendCongratulations**](docs/PortalUsersApi.md#sendcongratulations) | **POST** /api/2.0/portal/sendcongratulations | Send congratulations
*RoomsApi* | [**addRoomTags**](docs/RoomsApi.md#addroomtags) | **PUT** /api/2.0/files/rooms/{id}/tags | Add the room tags
*RoomsApi* | [**archiveRoom**](docs/RoomsApi.md#archiveroom) | **PUT** /api/2.0/files/rooms/{id}/archive | Archive a room
*RoomsApi* | [**changeRoomCover**](docs/RoomsApi.md#changeroomcover) | **POST** /api/2.0/files/rooms/{id}/cover | Change the room cover
*RoomsApi* | [**createRoom**](docs/RoomsApi.md#createroom) | **POST** /api/2.0/files/rooms | Create a room
*RoomsApi* | [**createRoomFromTemplate**](docs/RoomsApi.md#createroomfromtemplate) | **POST** /api/2.0/files/rooms/fromtemplate | Create a room from the template
*RoomsApi* | [**createRoomLogo**](docs/RoomsApi.md#createroomlogo) | **POST** /api/2.0/files/rooms/{id}/logo | Create a room logo
*RoomsApi* | [**createRoomTag**](docs/RoomsApi.md#createroomtag) | **POST** /api/2.0/files/tags | Create a tag
*RoomsApi* | [**createRoomTemplate**](docs/RoomsApi.md#createroomtemplate) | **POST** /api/2.0/files/roomtemplate | Start creating room template
*RoomsApi* | [**createRoomThirdParty**](docs/RoomsApi.md#createroomthirdparty) | **POST** /api/2.0/files/rooms/thirdparty/{id} | Create a third-party room
*RoomsApi* | [**deleteCustomTags**](docs/RoomsApi.md#deletecustomtags) | **DELETE** /api/2.0/files/tags | Delete tags
*RoomsApi* | [**deleteRoom**](docs/RoomsApi.md#deleteroom) | **DELETE** /api/2.0/files/rooms/{id} | Remove a room
*RoomsApi* | [**deleteRoomLogo**](docs/RoomsApi.md#deleteroomlogo) | **DELETE** /api/2.0/files/rooms/{id}/logo | Remove a room logo
*RoomsApi* | [**deleteRoomTags**](docs/RoomsApi.md#deleteroomtags) | **DELETE** /api/2.0/files/rooms/{id}/tags | Remove the room tags
*RoomsApi* | [**getNewRoomItems**](docs/RoomsApi.md#getnewroomitems) | **GET** /api/2.0/files/rooms/{id}/news | Get the new room items
*RoomsApi* | [**getPublicSettings**](docs/RoomsApi.md#getpublicsettings) | **GET** /api/2.0/files/roomtemplate/{id}/public | Get public settings
*RoomsApi* | [**getRoomCovers**](docs/RoomsApi.md#getroomcovers) | **GET** /api/2.0/files/rooms/covers | Get covers
*RoomsApi* | [**getRoomCreatingStatus**](docs/RoomsApi.md#getroomcreatingstatus) | **GET** /api/2.0/files/rooms/fromtemplate/status | Get the room creation progress
*RoomsApi* | [**getRoomIndexExport**](docs/RoomsApi.md#getroomindexexport) | **GET** /api/2.0/files/rooms/indexexport | Get the room index export
*RoomsApi* | [**getRoomInfo**](docs/RoomsApi.md#getroominfo) | **GET** /api/2.0/files/rooms/{id} | Get room information
*RoomsApi* | [**getRoomLinks**](docs/RoomsApi.md#getroomlinks) | **GET** /api/2.0/files/rooms/{id}/links | Get the room links
*RoomsApi* | [**getRoomSecurityInfo**](docs/RoomsApi.md#getroomsecurityinfo) | **GET** /api/2.0/files/rooms/{id}/share | Get the room access rights
*RoomsApi* | [**getRoomTagsInfo**](docs/RoomsApi.md#getroomtagsinfo) | **GET** /api/2.0/files/tags | Get tags
*RoomsApi* | [**getRoomTemplateCreatingStatus**](docs/RoomsApi.md#getroomtemplatecreatingstatus) | **GET** /api/2.0/files/roomtemplate/status | Get status of room template creation
*RoomsApi* | [**getRoomsFolder**](docs/RoomsApi.md#getroomsfolder) | **GET** /api/2.0/files/rooms | Get rooms
*RoomsApi* | [**getRoomsNewItems**](docs/RoomsApi.md#getroomsnewitems) | **GET** /api/2.0/files/rooms/news | Get the room new items
*RoomsApi* | [**getRoomsPrimaryExternalLink**](docs/RoomsApi.md#getroomsprimaryexternallink) | **GET** /api/2.0/files/rooms/{id}/link | Get the room primary external link
*RoomsApi* | [**pinRoom**](docs/RoomsApi.md#pinroom) | **PUT** /api/2.0/files/rooms/{id}/pin | Pin a room
*RoomsApi* | [**reorderRoom**](docs/RoomsApi.md#reorderroom) | **PUT** /api/2.0/files/rooms/{id}/reorder | Reorder the room
*RoomsApi* | [**resendEmailInvitations**](docs/RoomsApi.md#resendemailinvitations) | **POST** /api/2.0/files/rooms/{id}/resend | Resend the room invitations
*RoomsApi* | [**setPublicSettings**](docs/RoomsApi.md#setpublicsettings) | **PUT** /api/2.0/files/roomtemplate/public | Set public settings
*RoomsApi* | [**setRoomLink**](docs/RoomsApi.md#setroomlink) | **PUT** /api/2.0/files/rooms/{id}/links | Set the room external or invitation link
*RoomsApi* | [**setRoomSecurity**](docs/RoomsApi.md#setroomsecurity) | **PUT** /api/2.0/files/rooms/{id}/share | Set the room access rights
*RoomsApi* | [**startRoomIndexExport**](docs/RoomsApi.md#startroomindexexport) | **POST** /api/2.0/files/rooms/{id}/indexexport | Start the room index export
*RoomsApi* | [**terminateRoomIndexExport**](docs/RoomsApi.md#terminateroomindexexport) | **DELETE** /api/2.0/files/rooms/indexexport | Terminate the room index export
*RoomsApi* | [**unarchiveRoom**](docs/RoomsApi.md#unarchiveroom) | **PUT** /api/2.0/files/rooms/{id}/unarchive | Unarchive a room
*RoomsApi* | [**unpinRoom**](docs/RoomsApi.md#unpinroom) | **PUT** /api/2.0/files/rooms/{id}/unpin | Unpin a room
*RoomsApi* | [**updateRoom**](docs/RoomsApi.md#updateroom) | **PUT** /api/2.0/files/rooms/{id} | Update a room
*RoomsApi* | [**uploadRoomLogo**](docs/RoomsApi.md#uploadroomlogo) | **POST** /api/2.0/files/logos | Upload a room logo image
*SecurityAccessToDevToolsApi* | [**setTenantDevToolsAccessSettings**](docs/SecurityAccessToDevToolsApi.md#settenantdevtoolsaccesssettings) | **POST** /api/2.0/settings/devtoolsaccess | Set the Developer Tools access settings
*SecurityActiveConnectionsApi* | [**getAllActiveConnections**](docs/SecurityActiveConnectionsApi.md#getallactiveconnections) | **GET** /api/2.0/security/activeconnections | Get active connections
*SecurityActiveConnectionsApi* | [**logOutActiveConnection**](docs/SecurityActiveConnectionsApi.md#logoutactiveconnection) | **PUT** /api/2.0/security/activeconnections/logout/{loginEventId} | Log out from the connection
*SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsChangePassword**](docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionschangepassword) | **PUT** /api/2.0/security/activeconnections/logoutallchangepassword | Log out and change password
*SecurityActiveConnectionsApi* | [**logOutAllActiveConnectionsForUser**](docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionsforuser) | **PUT** /api/2.0/security/activeconnections/logoutall/{userId} | Log out for the user by ID
*SecurityActiveConnectionsApi* | [**logOutAllExceptThisConnection**](docs/SecurityActiveConnectionsApi.md#logoutallexceptthisconnection) | **PUT** /api/2.0/security/activeconnections/logoutallexceptthis | Log out from all connections except the current one
*SecurityAuditTrailDataApi* | [**createAuditTrailReport**](docs/SecurityAuditTrailDataApi.md#createaudittrailreport) | **POST** /api/2.0/security/audit/events/report | Generate the audit trail report
*SecurityAuditTrailDataApi* | [**getAuditEventsByFilter**](docs/SecurityAuditTrailDataApi.md#getauditeventsbyfilter) | **GET** /api/2.0/security/audit/events/filter | Get filtered audit trail data
*SecurityAuditTrailDataApi* | [**getAuditSettings**](docs/SecurityAuditTrailDataApi.md#getauditsettings) | **GET** /api/2.0/security/audit/settings/lifetime | Get the audit trail settings
*SecurityAuditTrailDataApi* | [**getAuditTrailMappers**](docs/SecurityAuditTrailDataApi.md#getaudittrailmappers) | **GET** /api/2.0/security/audit/mappers | Get audit trail mappers
*SecurityAuditTrailDataApi* | [**getAuditTrailTypes**](docs/SecurityAuditTrailDataApi.md#getaudittrailtypes) | **GET** /api/2.0/security/audit/types | Get audit trail types
*SecurityAuditTrailDataApi* | [**getLastAuditEvents**](docs/SecurityAuditTrailDataApi.md#getlastauditevents) | **GET** /api/2.0/security/audit/events/last | Get audit trail data
*SecurityAuditTrailDataApi* | [**setAuditSettings**](docs/SecurityAuditTrailDataApi.md#setauditsettings) | **POST** /api/2.0/security/audit/settings/lifetime | Set the audit trail settings
*SecurityBannersVisibilityApi* | [**setTenantBannerSettings**](docs/SecurityBannersVisibilityApi.md#settenantbannersettings) | **POST** /api/2.0/settings/banner | Set the promotional banners visibility settings
*SecurityCSPApi* | [**configureCsp**](docs/SecurityCSPApi.md#configurecsp) | **POST** /api/2.0/security/csp | Configure CSP settings
*SecurityCSPApi* | [**getCspSettings**](docs/SecurityCSPApi.md#getcspsettings) | **GET** /api/2.0/security/csp | Get CSP settings
*SecurityFirebaseApi* | [**docRegisterPusnNotificationDevice**](docs/SecurityFirebaseApi.md#docregisterpusnnotificationdevice) | **POST** /api/2.0/settings/push/docregisterdevice | Save the Documents Firebase device token
*SecurityFirebaseApi* | [**subscribeDocumentsPushNotification**](docs/SecurityFirebaseApi.md#subscribedocumentspushnotification) | **PUT** /api/2.0/settings/push/docsubscribe | Subscribe to Documents push notification
*SecurityLoginHistoryApi* | [**createLoginHistoryReport**](docs/SecurityLoginHistoryApi.md#createloginhistoryreport) | **POST** /api/2.0/security/audit/login/report | Generate the login history report
*SecurityLoginHistoryApi* | [**getLastLoginEvents**](docs/SecurityLoginHistoryApi.md#getlastloginevents) | **GET** /api/2.0/security/audit/login/last | Get login history
*SecurityLoginHistoryApi* | [**getLoginEventsByFilter**](docs/SecurityLoginHistoryApi.md#getlogineventsbyfilter) | **GET** /api/2.0/security/audit/login/filter | Get filtered login events
*SecurityOAuth2Api* | [**generateJwtToken**](docs/SecurityOAuth2Api.md#generatejwttoken) | **GET** /api/2.0/security/oauth2/token | Generate JWT token
*SecuritySMTPSettingsApi* | [**getSmtpOperationStatus**](docs/SecuritySMTPSettingsApi.md#getsmtpoperationstatus) | **GET** /api/2.0/smtpsettings/smtp/test/status | Get the SMTP testing process status
*SecuritySMTPSettingsApi* | [**getSmtpSettings**](docs/SecuritySMTPSettingsApi.md#getsmtpsettings) | **GET** /api/2.0/smtpsettings/smtp | Get the SMTP settings
*SecuritySMTPSettingsApi* | [**resetSmtpSettings**](docs/SecuritySMTPSettingsApi.md#resetsmtpsettings) | **DELETE** /api/2.0/smtpsettings/smtp | Reset the SMTP settings
*SecuritySMTPSettingsApi* | [**saveSmtpSettings**](docs/SecuritySMTPSettingsApi.md#savesmtpsettings) | **POST** /api/2.0/smtpsettings/smtp | Save the SMTP settings
*SecuritySMTPSettingsApi* | [**testSmtpSettings**](docs/SecuritySMTPSettingsApi.md#testsmtpsettings) | **GET** /api/2.0/smtpsettings/smtp/test | Test the SMTP settings
*SettingsAccessToDevToolsApi* | [**getTenantAccessDevToolsSettings**](docs/SettingsAccessToDevToolsApi.md#gettenantaccessdevtoolssettings) | **GET** /api/2.0/settings/devtoolsaccess | Get the Developer Tools access settings
*SettingsAuthorizationApi* | [**getAuthServices**](docs/SettingsAuthorizationApi.md#getauthservices) | **GET** /api/2.0/settings/authservice | Get the authorization services
*SettingsAuthorizationApi* | [**saveAuthKeys**](docs/SettingsAuthorizationApi.md#saveauthkeys) | **POST** /api/2.0/settings/authservice | Save the authorization keys
*SettingsBannersVisibilityApi* | [**getTenantBannerSettings**](docs/SettingsBannersVisibilityApi.md#gettenantbannersettings) | **GET** /api/2.0/settings/banner | Get the promotional banners visibility settings
*SettingsCommonSettingsApi* | [**closeAdminHelper**](docs/SettingsCommonSettingsApi.md#closeadminhelper) | **PUT** /api/2.0/settings/closeadminhelper | Close the admin helper
*SettingsCommonSettingsApi* | [**completeWizard**](docs/SettingsCommonSettingsApi.md#completewizard) | **PUT** /api/2.0/settings/wizard/complete | Complete the Wizard settings
*SettingsCommonSettingsApi* | [**configureDeepLink**](docs/SettingsCommonSettingsApi.md#configuredeeplink) | **POST** /api/2.0/settings/deeplink | Configure the deep link settings
*SettingsCommonSettingsApi* | [**deletePortalColorTheme**](docs/SettingsCommonSettingsApi.md#deleteportalcolortheme) | **DELETE** /api/2.0/settings/colortheme | Delete a color theme
*SettingsCommonSettingsApi* | [**getDeepLinkSettings**](docs/SettingsCommonSettingsApi.md#getdeeplinksettings) | **GET** /api/2.0/settings/deeplink | Get the deep link settings
*SettingsCommonSettingsApi* | [**getPaymentSettings**](docs/SettingsCommonSettingsApi.md#getpaymentsettings) | **GET** /api/2.0/settings/payment | Get the payment settings
*SettingsCommonSettingsApi* | [**getPortalColorTheme**](docs/SettingsCommonSettingsApi.md#getportalcolortheme) | **GET** /api/2.0/settings/colortheme | Get a color theme
*SettingsCommonSettingsApi* | [**getPortalHostname**](docs/SettingsCommonSettingsApi.md#getportalhostname) | **GET** /api/2.0/settings/machine | Get hostname
*SettingsCommonSettingsApi* | [**getPortalLogo**](docs/SettingsCommonSettingsApi.md#getportallogo) | **GET** /api/2.0/settings/logo | Get a portal logo
*SettingsCommonSettingsApi* | [**getPortalSettings**](docs/SettingsCommonSettingsApi.md#getportalsettings) | **GET** /api/2.0/settings | Get the portal settings
*SettingsCommonSettingsApi* | [**getSocketSettings**](docs/SettingsCommonSettingsApi.md#getsocketsettings) | **GET** /api/2.0/settings/socket | Get the socket settings
*SettingsCommonSettingsApi* | [**getSupportedCultures**](docs/SettingsCommonSettingsApi.md#getsupportedcultures) | **GET** /api/2.0/settings/cultures | Get supported languages
*SettingsCommonSettingsApi* | [**getTenantUserInvitationSettings**](docs/SettingsCommonSettingsApi.md#gettenantuserinvitationsettings) | **GET** /api/2.0/settings/invitationsettings | Get the user invitation settings
*SettingsCommonSettingsApi* | [**getTimeZones**](docs/SettingsCommonSettingsApi.md#gettimezones) | **GET** /api/2.0/settings/timezones | Get time zones
*SettingsCommonSettingsApi* | [**saveDnsSettings**](docs/SettingsCommonSettingsApi.md#savednssettings) | **PUT** /api/2.0/settings/dns | Save the DNS settings
*SettingsCommonSettingsApi* | [**saveMailDomainSettings**](docs/SettingsCommonSettingsApi.md#savemaildomainsettings) | **POST** /api/2.0/settings/maildomainsettings | Save the mail domain settings
*SettingsCommonSettingsApi* | [**savePortalColorTheme**](docs/SettingsCommonSettingsApi.md#saveportalcolortheme) | **PUT** /api/2.0/settings/colortheme | Save a color theme
*SettingsCommonSettingsApi* | [**updateEmailActivationSettings**](docs/SettingsCommonSettingsApi.md#updateemailactivationsettings) | **PUT** /api/2.0/settings/emailactivation | Update the email activation settings
*SettingsCommonSettingsApi* | [**updateInvitationSettings**](docs/SettingsCommonSettingsApi.md#updateinvitationsettings) | **PUT** /api/2.0/settings/invitationsettings | Update user invitation settings
*SettingsCookiesApi* | [**getCookieSettings**](docs/SettingsCookiesApi.md#getcookiesettings) | **GET** /api/2.0/settings/cookiesettings | Get cookies lifetime
*SettingsCookiesApi* | [**updateCookieSettings**](docs/SettingsCookiesApi.md#updatecookiesettings) | **PUT** /api/2.0/settings/cookiesettings | Update cookies lifetime
*SettingsCustomNavigationApi* | [**createCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#createcustomnavigationitem) | **POST** /api/2.0/settings/customnavigation/create | Add a custom navigation item
*SettingsCustomNavigationApi* | [**deleteCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#deletecustomnavigationitem) | **DELETE** /api/2.0/settings/customnavigation/delete/{id} | Delete a custom navigation item
*SettingsCustomNavigationApi* | [**getCustomNavigationItem**](docs/SettingsCustomNavigationApi.md#getcustomnavigationitem) | **GET** /api/2.0/settings/customnavigation/get/{id} | Get a custom navigation item by ID
*SettingsCustomNavigationApi* | [**getCustomNavigationItemSample**](docs/SettingsCustomNavigationApi.md#getcustomnavigationitemsample) | **GET** /api/2.0/settings/customnavigation/getsample | Get a custom navigation item sample
*SettingsCustomNavigationApi* | [**getCustomNavigationItems**](docs/SettingsCustomNavigationApi.md#getcustomnavigationitems) | **GET** /api/2.0/settings/customnavigation/getall | Get the custom navigation items
*SettingsEncryptionApi* | [**getStorageEncryptionProgress**](docs/SettingsEncryptionApi.md#getstorageencryptionprogress) | **GET** /api/2.0/settings/encryption/progress | Get the storage encryption progress
*SettingsEncryptionApi* | [**getStorageEncryptionSettings**](docs/SettingsEncryptionApi.md#getstorageencryptionsettings) | **GET** /api/2.0/settings/encryption/settings | Get the storage encryption settings
*SettingsEncryptionApi* | [**startStorageEncryption**](docs/SettingsEncryptionApi.md#startstorageencryption) | **POST** /api/2.0/settings/encryption/start | Start the storage encryption process
*SettingsGreetingSettingsApi* | [**getGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getgreetingsettings) | **GET** /api/2.0/settings/greetingsettings | Get greeting settings
*SettingsGreetingSettingsApi* | [**getIsDefaultGreetingSettings**](docs/SettingsGreetingSettingsApi.md#getisdefaultgreetingsettings) | **GET** /api/2.0/settings/greetingsettings/isdefault | Check the default greeting settings
*SettingsGreetingSettingsApi* | [**restoreGreetingSettings**](docs/SettingsGreetingSettingsApi.md#restoregreetingsettings) | **POST** /api/2.0/settings/greetingsettings/restore | Restore the greeting settings
*SettingsGreetingSettingsApi* | [**saveGreetingSettings**](docs/SettingsGreetingSettingsApi.md#savegreetingsettings) | **POST** /api/2.0/settings/greetingsettings | Save the greeting settings
*SettingsIPRestrictionsApi* | [**getIpRestrictions**](docs/SettingsIPRestrictionsApi.md#getiprestrictions) | **GET** /api/2.0/settings/iprestrictions | Get the IP portal restrictions
*SettingsIPRestrictionsApi* | [**readIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#readiprestrictionssettings) | **GET** /api/2.0/settings/iprestrictions/settings | Get the IP restriction settings
*SettingsIPRestrictionsApi* | [**saveIpRestrictions**](docs/SettingsIPRestrictionsApi.md#saveiprestrictions) | **PUT** /api/2.0/settings/iprestrictions | Update the IP restrictions
*SettingsIPRestrictionsApi* | [**updateIpRestrictionsSettings**](docs/SettingsIPRestrictionsApi.md#updateiprestrictionssettings) | **PUT** /api/2.0/settings/iprestrictions/settings | Update the IP restriction settings
*SettingsLicenseApi* | [**acceptLicense**](docs/SettingsLicenseApi.md#acceptlicense) | **POST** /api/2.0/settings/license/accept | Activate a license
*SettingsLicenseApi* | [**getIsLicenseRequired**](docs/SettingsLicenseApi.md#getislicenserequired) | **GET** /api/2.0/settings/license/required | Request a license
*SettingsLicenseApi* | [**refreshLicense**](docs/SettingsLicenseApi.md#refreshlicense) | **GET** /api/2.0/settings/license/refresh | Refresh the license
*SettingsLicenseApi* | [**uploadLicense**](docs/SettingsLicenseApi.md#uploadlicense) | **POST** /api/2.0/settings/license | Upload a license
*SettingsLoginSettingsApi* | [**getLoginSettings**](docs/SettingsLoginSettingsApi.md#getloginsettings) | **GET** /api/2.0/settings/security/loginsettings | Get the login settings
*SettingsLoginSettingsApi* | [**setDefaultLoginSettings**](docs/SettingsLoginSettingsApi.md#setdefaultloginsettings) | **DELETE** /api/2.0/settings/security/loginsettings | Reset the login settings
*SettingsLoginSettingsApi* | [**updateLoginSettings**](docs/SettingsLoginSettingsApi.md#updateloginsettings) | **PUT** /api/2.0/settings/security/loginsettings | Update the login settings
*SettingsMessagesApi* | [**enableAdminMessageSettings**](docs/SettingsMessagesApi.md#enableadminmessagesettings) | **POST** /api/2.0/settings/messagesettings | Enable the administrator message settings
*SettingsMessagesApi* | [**sendAdminMail**](docs/SettingsMessagesApi.md#sendadminmail) | **POST** /api/2.0/settings/sendadmmail | Send a message to the administrator
*SettingsMessagesApi* | [**sendJoinInviteMail**](docs/SettingsMessagesApi.md#sendjoininvitemail) | **POST** /api/2.0/settings/sendjoininvite | Sends an invitation email
*SettingsNotificationsApi* | [**getNotificationSettings**](docs/SettingsNotificationsApi.md#getnotificationsettings) | **GET** /api/2.0/settings/notification/{type} | Check notification availability
*SettingsNotificationsApi* | [**getRoomsNotificationSettings**](docs/SettingsNotificationsApi.md#getroomsnotificationsettings) | **GET** /api/2.0/settings/notification/rooms | Get room notification settings
*SettingsNotificationsApi* | [**setNotificationSettings**](docs/SettingsNotificationsApi.md#setnotificationsettings) | **POST** /api/2.0/settings/notification | Enable notifications
*SettingsNotificationsApi* | [**setRoomsNotificationStatus**](docs/SettingsNotificationsApi.md#setroomsnotificationstatus) | **POST** /api/2.0/settings/notification/rooms | Set room notification status
*SettingsOwnerApi* | [**sendOwnerChangeInstructions**](docs/SettingsOwnerApi.md#sendownerchangeinstructions) | **POST** /api/2.0/settings/owner | Send the owner change instructions
*SettingsOwnerApi* | [**updatePortalOwner**](docs/SettingsOwnerApi.md#updateportalowner) | **PUT** /api/2.0/settings/owner | Update the portal owner
*SettingsQuotaApi* | [**getUserQuotaSettings**](docs/SettingsQuotaApi.md#getuserquotasettings) | **GET** /api/2.0/settings/userquotasettings | Get the user quota settings
*SettingsQuotaApi* | [**saveRoomQuotaSettings**](docs/SettingsQuotaApi.md#saveroomquotasettings) | **POST** /api/2.0/settings/roomquotasettings | Save the room quota settings
*SettingsQuotaApi* | [**setTenantQuotaSettings**](docs/SettingsQuotaApi.md#settenantquotasettings) | **PUT** /api/2.0/settings/tenantquotasettings | Save the tenant quota settings
*SettingsRebrandingApi* | [**deleteAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deleteadditionalwhitelabelsettings) | **DELETE** /api/2.0/settings/rebranding/additional | Delete the additional white label settings
*SettingsRebrandingApi* | [**deleteCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#deletecompanywhitelabelsettings) | **DELETE** /api/2.0/settings/rebranding/company | Delete the company white label settings
*SettingsRebrandingApi* | [**getAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getadditionalwhitelabelsettings) | **GET** /api/2.0/settings/rebranding/additional | Get the additional white label settings
*SettingsRebrandingApi* | [**getCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#getcompanywhitelabelsettings) | **GET** /api/2.0/settings/rebranding/company | Get the company white label settings
*SettingsRebrandingApi* | [**getEnableWhitelabel**](docs/SettingsRebrandingApi.md#getenablewhitelabel) | **GET** /api/2.0/settings/enablewhitelabel | Check the white label availability
*SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getisdefaultwhitelabellogotext) | **GET** /api/2.0/settings/whitelabel/logotext/isdefault | Check the default white label logo text
*SettingsRebrandingApi* | [**getIsDefaultWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getisdefaultwhitelabellogos) | **GET** /api/2.0/settings/whitelabel/logos/isdefault | Check the default white label logos
*SettingsRebrandingApi* | [**getLicensorData**](docs/SettingsRebrandingApi.md#getlicensordata) | **GET** /api/2.0/settings/companywhitelabel | Get the licensor data
*SettingsRebrandingApi* | [**getWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#getwhitelabellogotext) | **GET** /api/2.0/settings/whitelabel/logotext | Get the white label logo text
*SettingsRebrandingApi* | [**getWhiteLabelLogos**](docs/SettingsRebrandingApi.md#getwhitelabellogos) | **GET** /api/2.0/settings/whitelabel/logos | Get the white label logos
*SettingsRebrandingApi* | [**restoreWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#restorewhitelabellogotext) | **PUT** /api/2.0/settings/whitelabel/logotext/restore | Restore the white label logo text
*SettingsRebrandingApi* | [**restoreWhiteLabelLogos**](docs/SettingsRebrandingApi.md#restorewhitelabellogos) | **PUT** /api/2.0/settings/whitelabel/logos/restore | Restore the white label logos
*SettingsRebrandingApi* | [**saveAdditionalWhiteLabelSettings**](docs/SettingsRebrandingApi.md#saveadditionalwhitelabelsettings) | **POST** /api/2.0/settings/rebranding/additional | Save the additional white label settings
*SettingsRebrandingApi* | [**saveCompanyWhiteLabelSettings**](docs/SettingsRebrandingApi.md#savecompanywhitelabelsettings) | **POST** /api/2.0/settings/rebranding/company | Save the company white label settings
*SettingsRebrandingApi* | [**saveWhiteLabelLogoText**](docs/SettingsRebrandingApi.md#savewhitelabellogotext) | **POST** /api/2.0/settings/whitelabel/logotext/save | Save the white label logo text settings
*SettingsRebrandingApi* | [**saveWhiteLabelSettings**](docs/SettingsRebrandingApi.md#savewhitelabelsettings) | **POST** /api/2.0/settings/whitelabel/logos/save | Save the white label logos
*SettingsRebrandingApi* | [**saveWhiteLabelSettingsFromFiles**](docs/SettingsRebrandingApi.md#savewhitelabelsettingsfromfiles) | **POST** /api/2.0/settings/whitelabel/logos/savefromfiles | Save the white label logos from files
*SettingsSSOApi* | [**getDefaultSsoSettingsV2**](docs/SettingsSSOApi.md#getdefaultssosettingsv2) | **GET** /api/2.0/settings/ssov2/default | Get the default SSO settings
*SettingsSSOApi* | [**getSsoSettingsV2**](docs/SettingsSSOApi.md#getssosettingsv2) | **GET** /api/2.0/settings/ssov2 | Get the SSO settings
*SettingsSSOApi* | [**getSsoSettingsV2Constants**](docs/SettingsSSOApi.md#getssosettingsv2constants) | **GET** /api/2.0/settings/ssov2/constants | Get the SSO settings constants
*SettingsSSOApi* | [**resetSsoSettingsV2**](docs/SettingsSSOApi.md#resetssosettingsv2) | **DELETE** /api/2.0/settings/ssov2 | Reset the SSO settings
*SettingsSSOApi* | [**saveSsoSettingsV2**](docs/SettingsSSOApi.md#savessosettingsv2) | **POST** /api/2.0/settings/ssov2 | Save the SSO settings
*SettingsSecurityApi* | [**getEnabledModules**](docs/SettingsSecurityApi.md#getenabledmodules) | **GET** /api/2.0/settings/security/modules | Get the enabled modules
*SettingsSecurityApi* | [**getIsProductAdministrator**](docs/SettingsSecurityApi.md#getisproductadministrator) | **GET** /api/2.0/settings/security/administrator | Check a product administrator
*SettingsSecurityApi* | [**getPasswordSettings**](docs/SettingsSecurityApi.md#getpasswordsettings) | **GET** /api/2.0/settings/security/password | Get the password settings
*SettingsSecurityApi* | [**getProductAdministrators**](docs/SettingsSecurityApi.md#getproductadministrators) | **GET** /api/2.0/settings/security/administrator/{productid} | Get the product administrators
*SettingsSecurityApi* | [**getWebItemSecurityInfo**](docs/SettingsSecurityApi.md#getwebitemsecurityinfo) | **GET** /api/2.0/settings/security/{id} | Get the module availability
*SettingsSecurityApi* | [**getWebItemSettingsSecurityInfo**](docs/SettingsSecurityApi.md#getwebitemsettingssecurityinfo) | **GET** /api/2.0/settings/security | Get the security settings
*SettingsSecurityApi* | [**setAccessToWebItems**](docs/SettingsSecurityApi.md#setaccesstowebitems) | **PUT** /api/2.0/settings/security/access | Set the security settings to modules
*SettingsSecurityApi* | [**setProductAdministrator**](docs/SettingsSecurityApi.md#setproductadministrator) | **PUT** /api/2.0/settings/security/administrator | Set a product administrator
*SettingsSecurityApi* | [**setWebItemSecurity**](docs/SettingsSecurityApi.md#setwebitemsecurity) | **PUT** /api/2.0/settings/security | Set the module security settings
*SettingsSecurityApi* | [**updatePasswordSettings**](docs/SettingsSecurityApi.md#updatepasswordsettings) | **PUT** /api/2.0/settings/security/password | Set the password settings
*SettingsStatisticsApi* | [**getSpaceUsageStatistics**](docs/SettingsStatisticsApi.md#getspaceusagestatistics) | **GET** /api/2.0/settings/statistics/spaceusage/{id} | Get the space usage statistics
*SettingsStorageApi* | [**getAllBackupStorages**](docs/SettingsStorageApi.md#getallbackupstorages) | **GET** /api/2.0/settings/storage/backup | Get the backup storages
*SettingsStorageApi* | [**getAllCdnStorages**](docs/SettingsStorageApi.md#getallcdnstorages) | **GET** /api/2.0/settings/storage/cdn | Get the CDN storages
*SettingsStorageApi* | [**getAllStorages**](docs/SettingsStorageApi.md#getallstorages) | **GET** /api/2.0/settings/storage | Get storages
*SettingsStorageApi* | [**getAmazonS3Regions**](docs/SettingsStorageApi.md#getamazons3regions) | **GET** /api/2.0/settings/storage/s3/regions | Get Amazon regions
*SettingsStorageApi* | [**getStorageProgress**](docs/SettingsStorageApi.md#getstorageprogress) | **GET** /api/2.0/settings/storage/progress | Get the storage progress
*SettingsStorageApi* | [**resetCdnToDefault**](docs/SettingsStorageApi.md#resetcdntodefault) | **DELETE** /api/2.0/settings/storage/cdn | Reset the CDN storage settings
*SettingsStorageApi* | [**resetStorageToDefault**](docs/SettingsStorageApi.md#resetstoragetodefault) | **DELETE** /api/2.0/settings/storage | Reset the storage settings
*SettingsStorageApi* | [**updateCdnStorage**](docs/SettingsStorageApi.md#updatecdnstorage) | **PUT** /api/2.0/settings/storage/cdn | Update the CDN storage
*SettingsStorageApi* | [**updateStorage**](docs/SettingsStorageApi.md#updatestorage) | **PUT** /api/2.0/settings/storage | Update a storage
*SettingsTFASettingsApi* | [**getTfaAppCodes**](docs/SettingsTFASettingsApi.md#gettfaappcodes) | **GET** /api/2.0/settings/tfaappcodes | Get the TFA codes
*SettingsTFASettingsApi* | [**getTfaConfirmUrl**](docs/SettingsTFASettingsApi.md#gettfaconfirmurl) | **GET** /api/2.0/settings/tfaapp/confirm | Get confirmation email
*SettingsTFASettingsApi* | [**getTfaSettings**](docs/SettingsTFASettingsApi.md#gettfasettings) | **GET** /api/2.0/settings/tfaapp | Get the TFA settings
*SettingsTFASettingsApi* | [**tfaAppGenerateSetupCode**](docs/SettingsTFASettingsApi.md#tfaappgeneratesetupcode) | **GET** /api/2.0/settings/tfaapp/setup | Generate setup code
*SettingsTFASettingsApi* | [**tfaValidateAuthCode**](docs/SettingsTFASettingsApi.md#tfavalidateauthcode) | **POST** /api/2.0/settings/tfaapp/validate | Validate the TFA code
*SettingsTFASettingsApi* | [**unlinkTfaApp**](docs/SettingsTFASettingsApi.md#unlinktfaapp) | **PUT** /api/2.0/settings/tfaappnewapp | Unlink the TFA application
*SettingsTFASettingsApi* | [**updateTfaAppCodes**](docs/SettingsTFASettingsApi.md#updatetfaappcodes) | **PUT** /api/2.0/settings/tfaappnewcodes | Update the TFA codes
*SettingsTFASettingsApi* | [**updateTfaSettings**](docs/SettingsTFASettingsApi.md#updatetfasettings) | **PUT** /api/2.0/settings/tfaapp | Update the TFA settings
*SettingsTFASettingsApi* | [**updateTfaSettingsLink**](docs/SettingsTFASettingsApi.md#updatetfasettingslink) | **PUT** /api/2.0/settings/tfaappwithlink | Get a confirmation email for updating TFA settings
*SettingsWebhooksApi* | [**createWebhook**](docs/SettingsWebhooksApi.md#createwebhook) | **POST** /api/2.0/settings/webhook | Create a webhook
*SettingsWebhooksApi* | [**enableWebhook**](docs/SettingsWebhooksApi.md#enablewebhook) | **PUT** /api/2.0/settings/webhook/enable | Enable a webhook
*SettingsWebhooksApi* | [**getTenantWebhooks**](docs/SettingsWebhooksApi.md#gettenantwebhooks) | **GET** /api/2.0/settings/webhook | Get webhooks
*SettingsWebhooksApi* | [**getWebhookTriggers**](docs/SettingsWebhooksApi.md#getwebhooktriggers) | **GET** /api/2.0/settings/webhook/triggers | Get webhook triggers
*SettingsWebhooksApi* | [**getWebhooksLogs**](docs/SettingsWebhooksApi.md#getwebhookslogs) | **GET** /api/2.0/settings/webhooks/log | Get webhook logs
*SettingsWebhooksApi* | [**removeWebhook**](docs/SettingsWebhooksApi.md#removewebhook) | **DELETE** /api/2.0/settings/webhook/{id} | Remove a webhook
*SettingsWebhooksApi* | [**retryWebhook**](docs/SettingsWebhooksApi.md#retrywebhook) | **PUT** /api/2.0/settings/webhook/{id}/retry | Retry a webhook
*SettingsWebhooksApi* | [**retryWebhooks**](docs/SettingsWebhooksApi.md#retrywebhooks) | **PUT** /api/2.0/settings/webhook/retry | Retry webhooks
*SettingsWebhooksApi* | [**updateWebhook**](docs/SettingsWebhooksApi.md#updatewebhook) | **PUT** /api/2.0/settings/webhook | Update a webhook
*SettingsWebpluginsApi* | [**addWebPluginFromFile**](docs/SettingsWebpluginsApi.md#addwebpluginfromfile) | **POST** /api/2.0/settings/webplugins | Add a web plugin
*SettingsWebpluginsApi* | [**deleteWebPlugin**](docs/SettingsWebpluginsApi.md#deletewebplugin) | **DELETE** /api/2.0/settings/webplugins/{name} | Delete a web plugin
*SettingsWebpluginsApi* | [**getWebPlugin**](docs/SettingsWebpluginsApi.md#getwebplugin) | **GET** /api/2.0/settings/webplugins/{name} | Get a web plugin by name
*SettingsWebpluginsApi* | [**getWebPlugins**](docs/SettingsWebpluginsApi.md#getwebplugins) | **GET** /api/2.0/settings/webplugins | Get web plugins
*SettingsWebpluginsApi* | [**updateWebPlugin**](docs/SettingsWebpluginsApi.md#updatewebplugin) | **PUT** /api/2.0/settings/webplugins/{name} | Update a web plugin
*ThirdPartyApi* | [**getThirdPartyCode**](docs/ThirdPartyApi.md#getthirdpartycode) | **GET** /api/2.0/thirdparty/{provider} | Get the code request

</details>

### Documentation For Models

<details><summary>Models list</summary>
 - [AccountInfoArrayWrapper](docs/AccountInfoArrayWrapper.md)
 - [AccountInfoDto](docs/AccountInfoDto.md)
 - [AccountLoginType](docs/AccountLoginType.md)
 - [AceShortWrapper](docs/AceShortWrapper.md)
 - [AceShortWrapperArrayWrapper](docs/AceShortWrapperArrayWrapper.md)
 - [ActionConfig](docs/ActionConfig.md)
 - [ActionLinkConfig](docs/ActionLinkConfig.md)
 - [ActionType](docs/ActionType.md)
 - [ActiveConnectionsDto](docs/ActiveConnectionsDto.md)
 - [ActiveConnectionsItemDto](docs/ActiveConnectionsItemDto.md)
 - [ActiveConnectionsWrapper](docs/ActiveConnectionsWrapper.md)
 - [ActiveConnectionsWrapperLinksInner](docs/ActiveConnectionsWrapperLinksInner.md)
 - [AdditionalWhiteLabelSettings](docs/AdditionalWhiteLabelSettings.md)
 - [AdditionalWhiteLabelSettingsDto](docs/AdditionalWhiteLabelSettingsDto.md)
 - [AdditionalWhiteLabelSettingsWrapper](docs/AdditionalWhiteLabelSettingsWrapper.md)
 - [AdminMessageBaseSettingsRequestsDto](docs/AdminMessageBaseSettingsRequestsDto.md)
 - [AdminMessageSettingsRequestsDto](docs/AdminMessageSettingsRequestsDto.md)
 - [AnonymousConfigDto](docs/AnonymousConfigDto.md)
 - [ApiDateTime](docs/ApiDateTime.md)
 - [ApiKeyResponseArrayWrapper](docs/ApiKeyResponseArrayWrapper.md)
 - [ApiKeyResponseDto](docs/ApiKeyResponseDto.md)
 - [ApiKeyResponseWrapper](docs/ApiKeyResponseWrapper.md)
 - [ApplyFilterOption](docs/ApplyFilterOption.md)
 - [ArchiveRoomRequest](docs/ArchiveRoomRequest.md)
 - [Area](docs/Area.md)
 - [ArrayArrayWrapper](docs/ArrayArrayWrapper.md)
 - [AuditEventArrayWrapper](docs/AuditEventArrayWrapper.md)
 - [AuditEventDto](docs/AuditEventDto.md)
 - [AuthData](docs/AuthData.md)
 - [AuthKey](docs/AuthKey.md)
 - [AuthRequestsDto](docs/AuthRequestsDto.md)
 - [AuthServiceRequestsArrayWrapper](docs/AuthServiceRequestsArrayWrapper.md)
 - [AuthServiceRequestsDto](docs/AuthServiceRequestsDto.md)
 - [AuthenticationTokenDto](docs/AuthenticationTokenDto.md)
 - [AuthenticationTokenWrapper](docs/AuthenticationTokenWrapper.md)
 - [AutoCleanUpData](docs/AutoCleanUpData.md)
 - [AutoCleanUpDataWrapper](docs/AutoCleanUpDataWrapper.md)
 - [AutoCleanupRequestDto](docs/AutoCleanupRequestDto.md)
 - [BackupDto](docs/BackupDto.md)
 - [BackupHistoryRecord](docs/BackupHistoryRecord.md)
 - [BackupHistoryRecordArrayWrapper](docs/BackupHistoryRecordArrayWrapper.md)
 - [BackupPeriod](docs/BackupPeriod.md)
 - [BackupProgress](docs/BackupProgress.md)
 - [BackupProgressEnum](docs/BackupProgressEnum.md)
 - [BackupProgressWrapper](docs/BackupProgressWrapper.md)
 - [BackupRestoreDto](docs/BackupRestoreDto.md)
 - [BackupScheduleDto](docs/BackupScheduleDto.md)
 - [BackupStorageType](docs/BackupStorageType.md)
 - [Balance](docs/Balance.md)
 - [BalanceWrapper](docs/BalanceWrapper.md)
 - [BaseBatchRequestDto](docs/BaseBatchRequestDto.md)
 - [BaseBatchRequestDtoFolderIdsInner](docs/BaseBatchRequestDtoFolderIdsInner.md)
 - [BatchRequestDto](docs/BatchRequestDto.md)
 - [BatchRequestDtoDestFolderId](docs/BatchRequestDtoDestFolderId.md)
 - [BatchTagsRequestDto](docs/BatchTagsRequestDto.md)
 - [BooleanWrapper](docs/BooleanWrapper.md)
 - [CapabilitiesDto](docs/CapabilitiesDto.md)
 - [CapabilitiesWrapper](docs/CapabilitiesWrapper.md)
 - [CdnStorageSettings](docs/CdnStorageSettings.md)
 - [CdnStorageSettingsWrapper](docs/CdnStorageSettingsWrapper.md)
 - [ChangeClientActivationRequest](docs/ChangeClientActivationRequest.md)
 - [ChangeHistory](docs/ChangeHistory.md)
 - [ChangeOwnerRequestDto](docs/ChangeOwnerRequestDto.md)
 - [CheckConversionRequestDtoInteger](docs/CheckConversionRequestDtoInteger.md)
 - [CheckDestFolderDto](docs/CheckDestFolderDto.md)
 - [CheckDestFolderResult](docs/CheckDestFolderResult.md)
 - [CheckDestFolderWrapper](docs/CheckDestFolderWrapper.md)
 - [CheckDocServiceUrlRequestDto](docs/CheckDocServiceUrlRequestDto.md)
 - [CheckFillFormDraft](docs/CheckFillFormDraft.md)
 - [CheckUploadRequest](docs/CheckUploadRequest.md)
 - [ClientInfoResponse](docs/ClientInfoResponse.md)
 - [ClientResponse](docs/ClientResponse.md)
 - [ClientSecretResponse](docs/ClientSecretResponse.md)
 - [CoEditingConfig](docs/CoEditingConfig.md)
 - [CoEditingConfigMode](docs/CoEditingConfigMode.md)
 - [CompanyWhiteLabelSettings](docs/CompanyWhiteLabelSettings.md)
 - [CompanyWhiteLabelSettingsArrayWrapper](docs/CompanyWhiteLabelSettingsArrayWrapper.md)
 - [CompanyWhiteLabelSettingsDto](docs/CompanyWhiteLabelSettingsDto.md)
 - [CompanyWhiteLabelSettingsWrapper](docs/CompanyWhiteLabelSettingsWrapper.md)
 - [ConfigurationDtoInteger](docs/ConfigurationDtoInteger.md)
 - [ConfigurationIntegerWrapper](docs/ConfigurationIntegerWrapper.md)
 - [ConfirmData](docs/ConfirmData.md)
 - [ConfirmDto](docs/ConfirmDto.md)
 - [ConfirmType](docs/ConfirmType.md)
 - [ConfirmWrapper](docs/ConfirmWrapper.md)
 - [Contact](docs/Contact.md)
 - [ContentDisposition](docs/ContentDisposition.md)
 - [ContentType](docs/ContentType.md)
 - [ConversationResultArrayWrapper](docs/ConversationResultArrayWrapper.md)
 - [ConversationResultDto](docs/ConversationResultDto.md)
 - [CookieSettingsDto](docs/CookieSettingsDto.md)
 - [CookieSettingsRequestsDto](docs/CookieSettingsRequestsDto.md)
 - [CookieSettingsWrapper](docs/CookieSettingsWrapper.md)
 - [CopyAsJsonElement](docs/CopyAsJsonElement.md)
 - [CopyAsJsonElementDestFolderId](docs/CopyAsJsonElementDestFolderId.md)
 - [CoverRequestDto](docs/CoverRequestDto.md)
 - [CoversResultArrayWrapper](docs/CoversResultArrayWrapper.md)
 - [CoversResultDto](docs/CoversResultDto.md)
 - [CreateApiKeyRequestDto](docs/CreateApiKeyRequestDto.md)
 - [CreateClientRequest](docs/CreateClientRequest.md)
 - [CreateFileJsonElement](docs/CreateFileJsonElement.md)
 - [CreateFileJsonElementTemplateId](docs/CreateFileJsonElementTemplateId.md)
 - [CreateFolder](docs/CreateFolder.md)
 - [CreateRoomFromTemplateDto](docs/CreateRoomFromTemplateDto.md)
 - [CreateRoomRequestDto](docs/CreateRoomRequestDto.md)
 - [CreateTagRequestDto](docs/CreateTagRequestDto.md)
 - [CreateTextOrHtmlFile](docs/CreateTextOrHtmlFile.md)
 - [CreateThirdPartyRoom](docs/CreateThirdPartyRoom.md)
 - [CreateWebhooksConfigRequestsDto](docs/CreateWebhooksConfigRequestsDto.md)
 - [Cron](docs/Cron.md)
 - [CronParams](docs/CronParams.md)
 - [CspDto](docs/CspDto.md)
 - [CspRequestsDto](docs/CspRequestsDto.md)
 - [CspWrapper](docs/CspWrapper.md)
 - [Culture](docs/Culture.md)
 - [CultureSpecificExternalResource](docs/CultureSpecificExternalResource.md)
 - [CultureSpecificExternalResources](docs/CultureSpecificExternalResources.md)
 - [CurrenciesArrayWrapper](docs/CurrenciesArrayWrapper.md)
 - [CurrenciesDto](docs/CurrenciesDto.md)
 - [CurrentLicenseInfo](docs/CurrentLicenseInfo.md)
 - [CustomColorThemesSettingsColorItem](docs/CustomColorThemesSettingsColorItem.md)
 - [CustomColorThemesSettingsDto](docs/CustomColorThemesSettingsDto.md)
 - [CustomColorThemesSettingsItem](docs/CustomColorThemesSettingsItem.md)
 - [CustomColorThemesSettingsRequestsDto](docs/CustomColorThemesSettingsRequestsDto.md)
 - [CustomColorThemesSettingsWrapper](docs/CustomColorThemesSettingsWrapper.md)
 - [CustomFilterParameters](docs/CustomFilterParameters.md)
 - [CustomNavigationItem](docs/CustomNavigationItem.md)
 - [CustomNavigationItemArrayWrapper](docs/CustomNavigationItemArrayWrapper.md)
 - [CustomNavigationItemWrapper](docs/CustomNavigationItemWrapper.md)
 - [CustomerConfigDto](docs/CustomerConfigDto.md)
 - [CustomerInfoDto](docs/CustomerInfoDto.md)
 - [CustomerInfoWrapper](docs/CustomerInfoWrapper.md)
 - [CustomerOperationsReportRequestDto](docs/CustomerOperationsReportRequestDto.md)
 - [CustomizationConfigDto](docs/CustomizationConfigDto.md)
 - [DarkThemeSettings](docs/DarkThemeSettings.md)
 - [DarkThemeSettingsRequestDto](docs/DarkThemeSettingsRequestDto.md)
 - [DarkThemeSettingsType](docs/DarkThemeSettingsType.md)
 - [DarkThemeSettingsWrapper](docs/DarkThemeSettingsWrapper.md)
 - [DateToAutoCleanUp](docs/DateToAutoCleanUp.md)
 - [DbTenant](docs/DbTenant.md)
 - [DbTenantPartner](docs/DbTenantPartner.md)
 - [DeepLinkConfigurationRequestsDto](docs/DeepLinkConfigurationRequestsDto.md)
 - [DeepLinkDto](docs/DeepLinkDto.md)
 - [DeepLinkHandlingMode](docs/DeepLinkHandlingMode.md)
 - [Delete](docs/Delete.md)
 - [DeleteBatchRequestDto](docs/DeleteBatchRequestDto.md)
 - [DeleteFolder](docs/DeleteFolder.md)
 - [DeleteRoomRequest](docs/DeleteRoomRequest.md)
 - [DeleteVersionBatchRequestDto](docs/DeleteVersionBatchRequestDto.md)
 - [DisplayRequestDto](docs/DisplayRequestDto.md)
 - [DistributedTaskStatus](docs/DistributedTaskStatus.md)
 - [DnsSettingsRequestsDto](docs/DnsSettingsRequestsDto.md)
 - [DocServiceUrlDto](docs/DocServiceUrlDto.md)
 - [DocServiceUrlWrapper](docs/DocServiceUrlWrapper.md)
 - [DocumentBuilderTaskDto](docs/DocumentBuilderTaskDto.md)
 - [DocumentBuilderTaskWrapper](docs/DocumentBuilderTaskWrapper.md)
 - [DocumentConfigDto](docs/DocumentConfigDto.md)
 - [DoubleWrapper](docs/DoubleWrapper.md)
 - [DownloadRequestDto](docs/DownloadRequestDto.md)
 - [DownloadRequestItemDto](docs/DownloadRequestItemDto.md)
 - [DownloadRequestItemDtoKey](docs/DownloadRequestItemDtoKey.md)
 - [DraftLocationInteger](docs/DraftLocationInteger.md)
 - [DuplicateRequestDto](docs/DuplicateRequestDto.md)
 - [EditHistoryArrayWrapper](docs/EditHistoryArrayWrapper.md)
 - [EditHistoryAuthor](docs/EditHistoryAuthor.md)
 - [EditHistoryChangesWrapper](docs/EditHistoryChangesWrapper.md)
 - [EditHistoryDataDto](docs/EditHistoryDataDto.md)
 - [EditHistoryDataWrapper](docs/EditHistoryDataWrapper.md)
 - [EditHistoryDto](docs/EditHistoryDto.md)
 - [EditHistoryUrl](docs/EditHistoryUrl.md)
 - [EditorConfigurationDto](docs/EditorConfigurationDto.md)
 - [EditorType](docs/EditorType.md)
 - [EmailActivationSettings](docs/EmailActivationSettings.md)
 - [EmailActivationSettingsWrapper](docs/EmailActivationSettingsWrapper.md)
 - [EmailMemberRequestDto](docs/EmailMemberRequestDto.md)
 - [EmailValidationKeyModel](docs/EmailValidationKeyModel.md)
 - [EmbeddedConfig](docs/EmbeddedConfig.md)
 - [EmployeeActivationStatus](docs/EmployeeActivationStatus.md)
 - [EmployeeArrayWrapper](docs/EmployeeArrayWrapper.md)
 - [EmployeeDto](docs/EmployeeDto.md)
 - [EmployeeFullArrayWrapper](docs/EmployeeFullArrayWrapper.md)
 - [EmployeeFullDto](docs/EmployeeFullDto.md)
 - [EmployeeFullWrapper](docs/EmployeeFullWrapper.md)
 - [EmployeeStatus](docs/EmployeeStatus.md)
 - [EmployeeType](docs/EmployeeType.md)
 - [EncryprtionStatus](docs/EncryprtionStatus.md)
 - [EncryptionKeysConfig](docs/EncryptionKeysConfig.md)
 - [EncryptionSettings](docs/EncryptionSettings.md)
 - [EncryptionSettingsWrapper](docs/EncryptionSettingsWrapper.md)
 - [EntryType](docs/EntryType.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [ExchangeToken200Response](docs/ExchangeToken200Response.md)
 - [ExternalShareDto](docs/ExternalShareDto.md)
 - [ExternalShareRequestParam](docs/ExternalShareRequestParam.md)
 - [ExternalShareWrapper](docs/ExternalShareWrapper.md)
 - [FeatureUsedDto](docs/FeatureUsedDto.md)
 - [FeedbackConfig](docs/FeedbackConfig.md)
 - [FileConflictResolveType](docs/FileConflictResolveType.md)
 - [FileDtoInteger](docs/FileDtoInteger.md)
 - [FileDtoIntegerSecurity](docs/FileDtoIntegerSecurity.md)
 - [FileDtoIntegerViewAccessibility](docs/FileDtoIntegerViewAccessibility.md)
 - [FileEntryArrayWrapper](docs/FileEntryArrayWrapper.md)
 - [FileEntryDto](docs/FileEntryDto.md)
 - [FileEntryType](docs/FileEntryType.md)
 - [FileEntryWrapper](docs/FileEntryWrapper.md)
 - [FileIntegerArrayWrapper](docs/FileIntegerArrayWrapper.md)
 - [FileIntegerWrapper](docs/FileIntegerWrapper.md)
 - [FileLink](docs/FileLink.md)
 - [FileLinkRequest](docs/FileLinkRequest.md)
 - [FileLinkWrapper](docs/FileLinkWrapper.md)
 - [FileOperationArrayWrapper](docs/FileOperationArrayWrapper.md)
 - [FileOperationDto](docs/FileOperationDto.md)
 - [FileOperationType](docs/FileOperationType.md)
 - [FileOperationWrapper](docs/FileOperationWrapper.md)
 - [FileReference](docs/FileReference.md)
 - [FileReferenceData](docs/FileReferenceData.md)
 - [FileReferenceWrapper](docs/FileReferenceWrapper.md)
 - [FileShare](docs/FileShare.md)
 - [FileShareArrayWrapper](docs/FileShareArrayWrapper.md)
 - [FileShareDto](docs/FileShareDto.md)
 - [FileShareParams](docs/FileShareParams.md)
 - [FileShareWrapper](docs/FileShareWrapper.md)
 - [FileStatus](docs/FileStatus.md)
 - [FileType](docs/FileType.md)
 - [FileUploadResultDto](docs/FileUploadResultDto.md)
 - [FileUploadResultWrapper](docs/FileUploadResultWrapper.md)
 - [FilesSettingsDto](docs/FilesSettingsDto.md)
 - [FilesSettingsDtoInternalFormats](docs/FilesSettingsDtoInternalFormats.md)
 - [FilesSettingsWrapper](docs/FilesSettingsWrapper.md)
 - [FilesStatisticsFolder](docs/FilesStatisticsFolder.md)
 - [FilesStatisticsResultDto](docs/FilesStatisticsResultDto.md)
 - [FilesStatisticsResultWrapper](docs/FilesStatisticsResultWrapper.md)
 - [FillingFormResultDtoInteger](docs/FillingFormResultDtoInteger.md)
 - [FillingFormResultIntegerWrapper](docs/FillingFormResultIntegerWrapper.md)
 - [FilterType](docs/FilterType.md)
 - [FinishDto](docs/FinishDto.md)
 - [FireBaseUser](docs/FireBaseUser.md)
 - [FireBaseUserWrapper](docs/FireBaseUserWrapper.md)
 - [FirebaseDto](docs/FirebaseDto.md)
 - [FirebaseRequestsDto](docs/FirebaseRequestsDto.md)
 - [FolderContentDtoInteger](docs/FolderContentDtoInteger.md)
 - [FolderContentIntegerArrayWrapper](docs/FolderContentIntegerArrayWrapper.md)
 - [FolderContentIntegerWrapper](docs/FolderContentIntegerWrapper.md)
 - [FolderDtoInteger](docs/FolderDtoInteger.md)
 - [FolderDtoString](docs/FolderDtoString.md)
 - [FolderIntegerArrayWrapper](docs/FolderIntegerArrayWrapper.md)
 - [FolderIntegerWrapper](docs/FolderIntegerWrapper.md)
 - [FolderStringArrayWrapper](docs/FolderStringArrayWrapper.md)
 - [FolderStringWrapper](docs/FolderStringWrapper.md)
 - [FolderType](docs/FolderType.md)
 - [FormFillingManageAction](docs/FormFillingManageAction.md)
 - [FormFillingStatus](docs/FormFillingStatus.md)
 - [FormGalleryDto](docs/FormGalleryDto.md)
 - [FormRole](docs/FormRole.md)
 - [FormRoleArrayWrapper](docs/FormRoleArrayWrapper.md)
 - [FormRoleWrapper](docs/FormRoleWrapper.md)
 - [FormsItemArrayWrapper](docs/FormsItemArrayWrapper.md)
 - [FormsItemDto](docs/FormsItemDto.md)
 - [GetReferenceDataDtoInteger](docs/GetReferenceDataDtoInteger.md)
 - [GobackConfig](docs/GobackConfig.md)
 - [GreetingSettingsRequestsDto](docs/GreetingSettingsRequestsDto.md)
 - [GroupArrayWrapper](docs/GroupArrayWrapper.md)
 - [GroupDto](docs/GroupDto.md)
 - [GroupRequestDto](docs/GroupRequestDto.md)
 - [GroupSummaryArrayWrapper](docs/GroupSummaryArrayWrapper.md)
 - [GroupSummaryDto](docs/GroupSummaryDto.md)
 - [GroupWrapper](docs/GroupWrapper.md)
 - [HideConfirmConvertRequestDto](docs/HideConfirmConvertRequestDto.md)
 - [HistoryAction](docs/HistoryAction.md)
 - [HistoryArrayWrapper](docs/HistoryArrayWrapper.md)
 - [HistoryData](docs/HistoryData.md)
 - [HistoryDto](docs/HistoryDto.md)
 - [ICompressWrapper](docs/ICompressWrapper.md)
 - [IMagickGeometry](docs/IMagickGeometry.md)
 - [IPRestriction](docs/IPRestriction.md)
 - [IPRestrictionArrayWrapper](docs/IPRestrictionArrayWrapper.md)
 - [IPRestrictionsSettings](docs/IPRestrictionsSettings.md)
 - [IPRestrictionsSettingsWrapper](docs/IPRestrictionsSettingsWrapper.md)
 - [InfoConfigDto](docs/InfoConfigDto.md)
 - [Int64Wrapper](docs/Int64Wrapper.md)
 - [InviteUsersRequestDto](docs/InviteUsersRequestDto.md)
 - [IpRestrictionBase](docs/IpRestrictionBase.md)
 - [IpRestrictionsDto](docs/IpRestrictionsDto.md)
 - [IpRestrictionsWrapper](docs/IpRestrictionsWrapper.md)
 - [IsDefaultWhiteLabelLogosArrayWrapper](docs/IsDefaultWhiteLabelLogosArrayWrapper.md)
 - [IsDefaultWhiteLabelLogosDto](docs/IsDefaultWhiteLabelLogosDto.md)
 - [IsDefaultWhiteLabelLogosWrapper](docs/IsDefaultWhiteLabelLogosWrapper.md)
 - [ItemKeyValuePairObjectObject](docs/ItemKeyValuePairObjectObject.md)
 - [ItemKeyValuePairStringBoolean](docs/ItemKeyValuePairStringBoolean.md)
 - [ItemKeyValuePairStringLogoRequestsDto](docs/ItemKeyValuePairStringLogoRequestsDto.md)
 - [ItemKeyValuePairStringString](docs/ItemKeyValuePairStringString.md)
 - [KeyValuePairBooleanString](docs/KeyValuePairBooleanString.md)
 - [KeyValuePairBooleanStringWrapper](docs/KeyValuePairBooleanStringWrapper.md)
 - [KeyValuePairStringStringValues](docs/KeyValuePairStringStringValues.md)
 - [LinkAccountRequestDto](docs/LinkAccountRequestDto.md)
 - [LinkType](docs/LinkType.md)
 - [LockFileParameters](docs/LockFileParameters.md)
 - [LoginEventArrayWrapper](docs/LoginEventArrayWrapper.md)
 - [LoginEventDto](docs/LoginEventDto.md)
 - [LoginProvider](docs/LoginProvider.md)
 - [LoginSettingsDto](docs/LoginSettingsDto.md)
 - [LoginSettingsRequestDto](docs/LoginSettingsRequestDto.md)
 - [LoginSettingsWrapper](docs/LoginSettingsWrapper.md)
 - [Logo](docs/Logo.md)
 - [LogoConfigDto](docs/LogoConfigDto.md)
 - [LogoCover](docs/LogoCover.md)
 - [LogoRequest](docs/LogoRequest.md)
 - [LogoRequestsDto](docs/LogoRequestsDto.md)
 - [MailDomainSettingsRequestsDto](docs/MailDomainSettingsRequestsDto.md)
 - [ManageFormFillingDtoInteger](docs/ManageFormFillingDtoInteger.md)
 - [MemberBaseRequestDto](docs/MemberBaseRequestDto.md)
 - [MemberRequestDto](docs/MemberRequestDto.md)
 - [MembersRequest](docs/MembersRequest.md)
 - [MentionMessageWrapper](docs/MentionMessageWrapper.md)
 - [MentionWrapper](docs/MentionWrapper.md)
 - [MentionWrapperArrayWrapper](docs/MentionWrapperArrayWrapper.md)
 - [MessageAction](docs/MessageAction.md)
 - [MigratingApiFiles](docs/MigratingApiFiles.md)
 - [MigratingApiGroup](docs/MigratingApiGroup.md)
 - [MigratingApiUser](docs/MigratingApiUser.md)
 - [MigrationApiInfo](docs/MigrationApiInfo.md)
 - [MigrationStatusDto](docs/MigrationStatusDto.md)
 - [MigrationStatusWrapper](docs/MigrationStatusWrapper.md)
 - [MobilePhoneActivationStatus](docs/MobilePhoneActivationStatus.md)
 - [MobileRequestsDto](docs/MobileRequestsDto.md)
 - [Module](docs/Module.md)
 - [ModuleType](docs/ModuleType.md)
 - [ModuleWrapper](docs/ModuleWrapper.md)
 - [NewItemsDtoFileEntryDto](docs/NewItemsDtoFileEntryDto.md)
 - [NewItemsDtoRoomNewItemsDto](docs/NewItemsDtoRoomNewItemsDto.md)
 - [NewItemsFileEntryArrayWrapper](docs/NewItemsFileEntryArrayWrapper.md)
 - [NewItemsRoomNewItemsArrayWrapper](docs/NewItemsRoomNewItemsArrayWrapper.md)
 - [NoContentResult](docs/NoContentResult.md)
 - [NoContentResultWrapper](docs/NoContentResultWrapper.md)
 - [NotificationSettingsDto](docs/NotificationSettingsDto.md)
 - [NotificationSettingsRequestsDto](docs/NotificationSettingsRequestsDto.md)
 - [NotificationSettingsWrapper](docs/NotificationSettingsWrapper.md)
 - [NotificationType](docs/NotificationType.md)
 - [OAuth20Token](docs/OAuth20Token.md)
 - [ObjectArrayWrapper](docs/ObjectArrayWrapper.md)
 - [ObjectWrapper](docs/ObjectWrapper.md)
 - [OperationDto](docs/OperationDto.md)
 - [Options](docs/Options.md)
 - [OrderBy](docs/OrderBy.md)
 - [OrderRequestDto](docs/OrderRequestDto.md)
 - [OrdersItemRequestDtoInteger](docs/OrdersItemRequestDtoInteger.md)
 - [OrdersRequestDtoInteger](docs/OrdersRequestDtoInteger.md)
 - [OwnerChangeInstructionsDto](docs/OwnerChangeInstructionsDto.md)
 - [OwnerChangeInstructionsWrapper](docs/OwnerChangeInstructionsWrapper.md)
 - [OwnerIdSettingsRequestDto](docs/OwnerIdSettingsRequestDto.md)
 - [PageableModificationResponse](docs/PageableModificationResponse.md)
 - [PageableResponse](docs/PageableResponse.md)
 - [PageableResponseClientInfoResponse](docs/PageableResponseClientInfoResponse.md)
 - [Paragraph](docs/Paragraph.md)
 - [PasswordHasher](docs/PasswordHasher.md)
 - [PasswordSettingsDto](docs/PasswordSettingsDto.md)
 - [PasswordSettingsRequestsDto](docs/PasswordSettingsRequestsDto.md)
 - [PasswordSettingsWrapper](docs/PasswordSettingsWrapper.md)
 - [PaymentCalculation](docs/PaymentCalculation.md)
 - [PaymentCalculationWrapper](docs/PaymentCalculationWrapper.md)
 - [PaymentMethodStatus](docs/PaymentMethodStatus.md)
 - [PaymentSettingsDto](docs/PaymentSettingsDto.md)
 - [PaymentSettingsWrapper](docs/PaymentSettingsWrapper.md)
 - [PaymentUrlRequestsDto](docs/PaymentUrlRequestsDto.md)
 - [Payments](docs/Payments.md)
 - [PermissionsConfig](docs/PermissionsConfig.md)
 - [PluginsConfig](docs/PluginsConfig.md)
 - [PluginsDto](docs/PluginsDto.md)
 - [PriceDto](docs/PriceDto.md)
 - [ProductAdministratorDto](docs/ProductAdministratorDto.md)
 - [ProductAdministratorWrapper](docs/ProductAdministratorWrapper.md)
 - [ProductQuantityType](docs/ProductQuantityType.md)
 - [ProductType](docs/ProductType.md)
 - [ProviderArrayWrapper](docs/ProviderArrayWrapper.md)
 - [ProviderDto](docs/ProviderDto.md)
 - [ProviderFilter](docs/ProviderFilter.md)
 - [QuantityRequestDto](docs/QuantityRequestDto.md)
 - [Quota](docs/Quota.md)
 - [QuotaArrayWrapper](docs/QuotaArrayWrapper.md)
 - [QuotaDto](docs/QuotaDto.md)
 - [QuotaFilter](docs/QuotaFilter.md)
 - [QuotaSettingsRequestsDto](docs/QuotaSettingsRequestsDto.md)
 - [QuotaSettingsRequestsDtoDefaultQuota](docs/QuotaSettingsRequestsDtoDefaultQuota.md)
 - [QuotaState](docs/QuotaState.md)
 - [QuotaWrapper](docs/QuotaWrapper.md)
 - [RecaptchaType](docs/RecaptchaType.md)
 - [RecentConfig](docs/RecentConfig.md)
 - [ReportDto](docs/ReportDto.md)
 - [ReportWrapper](docs/ReportWrapper.md)
 - [ReviewConfig](docs/ReviewConfig.md)
 - [RoomDataLifetimeDto](docs/RoomDataLifetimeDto.md)
 - [RoomDataLifetimePeriod](docs/RoomDataLifetimePeriod.md)
 - [RoomFromTemplateStatusDto](docs/RoomFromTemplateStatusDto.md)
 - [RoomFromTemplateStatusWrapper](docs/RoomFromTemplateStatusWrapper.md)
 - [RoomInvitation](docs/RoomInvitation.md)
 - [RoomInvitationRequest](docs/RoomInvitationRequest.md)
 - [RoomLinkRequest](docs/RoomLinkRequest.md)
 - [RoomNewItemsDto](docs/RoomNewItemsDto.md)
 - [RoomSecurityDto](docs/RoomSecurityDto.md)
 - [RoomSecurityError](docs/RoomSecurityError.md)
 - [RoomSecurityWrapper](docs/RoomSecurityWrapper.md)
 - [RoomTemplateDto](docs/RoomTemplateDto.md)
 - [RoomTemplateStatusDto](docs/RoomTemplateStatusDto.md)
 - [RoomTemplateStatusWrapper](docs/RoomTemplateStatusWrapper.md)
 - [RoomType](docs/RoomType.md)
 - [RoomsNotificationSettingsDto](docs/RoomsNotificationSettingsDto.md)
 - [RoomsNotificationSettingsWrapper](docs/RoomsNotificationSettingsWrapper.md)
 - [RoomsNotificationsSettingsRequestDto](docs/RoomsNotificationsSettingsRequestDto.md)
 - [Run](docs/Run.md)
 - [STRINGArrayWrapper](docs/STRINGArrayWrapper.md)
 - [SalesRequestsDto](docs/SalesRequestsDto.md)
 - [SaveAsPdfInteger](docs/SaveAsPdfInteger.md)
 - [SaveFormRoleMappingDtoInteger](docs/SaveFormRoleMappingDtoInteger.md)
 - [Schedule](docs/Schedule.md)
 - [ScheduleWrapper](docs/ScheduleWrapper.md)
 - [ScopeResponse](docs/ScopeResponse.md)
 - [SearchArea](docs/SearchArea.md)
 - [SecurityArrayWrapper](docs/SecurityArrayWrapper.md)
 - [SecurityDto](docs/SecurityDto.md)
 - [SecurityRequestsDto](docs/SecurityRequestsDto.md)
 - [SessionRequest](docs/SessionRequest.md)
 - [SetManagerRequest](docs/SetManagerRequest.md)
 - [SetPublicDto](docs/SetPublicDto.md)
 - [SettingsDto](docs/SettingsDto.md)
 - [SettingsRequestDto](docs/SettingsRequestDto.md)
 - [SettingsWrapper](docs/SettingsWrapper.md)
 - [SetupCode](docs/SetupCode.md)
 - [SetupCodeWrapper](docs/SetupCodeWrapper.md)
 - [SexEnum](docs/SexEnum.md)
 - [ShareFilterType](docs/ShareFilterType.md)
 - [SignupAccountRequestDto](docs/SignupAccountRequestDto.md)
 - [SmtpOperationStatusRequestsDto](docs/SmtpOperationStatusRequestsDto.md)
 - [SmtpOperationStatusRequestsWrapper](docs/SmtpOperationStatusRequestsWrapper.md)
 - [SmtpSettingsDto](docs/SmtpSettingsDto.md)
 - [SmtpSettingsWrapper](docs/SmtpSettingsWrapper.md)
 - [SortOrder](docs/SortOrder.md)
 - [SortedByType](docs/SortedByType.md)
 - [SsoCertificate](docs/SsoCertificate.md)
 - [SsoFieldMapping](docs/SsoFieldMapping.md)
 - [SsoIdpCertificateAdvanced](docs/SsoIdpCertificateAdvanced.md)
 - [SsoIdpSettings](docs/SsoIdpSettings.md)
 - [SsoSettingsRequestsDto](docs/SsoSettingsRequestsDto.md)
 - [SsoSettingsV2](docs/SsoSettingsV2.md)
 - [SsoSettingsV2Wrapper](docs/SsoSettingsV2Wrapper.md)
 - [SsoSpCertificateAdvanced](docs/SsoSpCertificateAdvanced.md)
 - [StartEdit](docs/StartEdit.md)
 - [StartFillingForm](docs/StartFillingForm.md)
 - [StartFillingMode](docs/StartFillingMode.md)
 - [StartReassignRequestDto](docs/StartReassignRequestDto.md)
 - [StartUpdateUserTypeDto](docs/StartUpdateUserTypeDto.md)
 - [Status](docs/Status.md)
 - [StorageArrayWrapper](docs/StorageArrayWrapper.md)
 - [StorageDto](docs/StorageDto.md)
 - [StorageEncryptionRequestsDto](docs/StorageEncryptionRequestsDto.md)
 - [StorageFilter](docs/StorageFilter.md)
 - [StorageRequestsDto](docs/StorageRequestsDto.md)
 - [StorageSettings](docs/StorageSettings.md)
 - [StorageSettingsWrapper](docs/StorageSettingsWrapper.md)
 - [StringWrapper](docs/StringWrapper.md)
 - [SubAccount](docs/SubAccount.md)
 - [SubjectFilter](docs/SubjectFilter.md)
 - [SubjectType](docs/SubjectType.md)
 - [SubmitForm](docs/SubmitForm.md)
 - [Tariff](docs/Tariff.md)
 - [TariffState](docs/TariffState.md)
 - [TariffWrapper](docs/TariffWrapper.md)
 - [TaskProgressResponseDto](docs/TaskProgressResponseDto.md)
 - [TaskProgressResponseWrapper](docs/TaskProgressResponseWrapper.md)
 - [TemplatesConfig](docs/TemplatesConfig.md)
 - [TemplatesRequestDto](docs/TemplatesRequestDto.md)
 - [TenantAuditSettings](docs/TenantAuditSettings.md)
 - [TenantAuditSettingsWrapper](docs/TenantAuditSettingsWrapper.md)
 - [TenantBannerSettings](docs/TenantBannerSettings.md)
 - [TenantBannerSettingsDto](docs/TenantBannerSettingsDto.md)
 - [TenantBannerSettingsWrapper](docs/TenantBannerSettingsWrapper.md)
 - [TenantDeepLinkSettings](docs/TenantDeepLinkSettings.md)
 - [TenantDeepLinkSettingsWrapper](docs/TenantDeepLinkSettingsWrapper.md)
 - [TenantDevToolsAccessSettings](docs/TenantDevToolsAccessSettings.md)
 - [TenantDevToolsAccessSettingsDto](docs/TenantDevToolsAccessSettingsDto.md)
 - [TenantDevToolsAccessSettingsWrapper](docs/TenantDevToolsAccessSettingsWrapper.md)
 - [TenantDomainValidator](docs/TenantDomainValidator.md)
 - [TenantDto](docs/TenantDto.md)
 - [TenantEntityQuotaSettings](docs/TenantEntityQuotaSettings.md)
 - [TenantIndustry](docs/TenantIndustry.md)
 - [TenantQuota](docs/TenantQuota.md)
 - [TenantQuotaFeatureDto](docs/TenantQuotaFeatureDto.md)
 - [TenantQuotaSettings](docs/TenantQuotaSettings.md)
 - [TenantQuotaSettingsRequestsDto](docs/TenantQuotaSettingsRequestsDto.md)
 - [TenantQuotaSettingsWrapper](docs/TenantQuotaSettingsWrapper.md)
 - [TenantQuotaWrapper](docs/TenantQuotaWrapper.md)
 - [TenantRoomQuotaSettings](docs/TenantRoomQuotaSettings.md)
 - [TenantRoomQuotaSettingsWrapper](docs/TenantRoomQuotaSettingsWrapper.md)
 - [TenantStatus](docs/TenantStatus.md)
 - [TenantTrustedDomainsType](docs/TenantTrustedDomainsType.md)
 - [TenantUserInvitationSettingsDto](docs/TenantUserInvitationSettingsDto.md)
 - [TenantUserInvitationSettingsRequestDto](docs/TenantUserInvitationSettingsRequestDto.md)
 - [TenantUserInvitationSettingsWrapper](docs/TenantUserInvitationSettingsWrapper.md)
 - [TenantUserQuotaSettings](docs/TenantUserQuotaSettings.md)
 - [TenantUserQuotaSettingsWrapper](docs/TenantUserQuotaSettingsWrapper.md)
 - [TenantWalletSettings](docs/TenantWalletSettings.md)
 - [TenantWalletSettingsWrapper](docs/TenantWalletSettingsWrapper.md)
 - [TenantWrapper](docs/TenantWrapper.md)
 - [TerminateRequestDto](docs/TerminateRequestDto.md)
 - [TfaRequestsDto](docs/TfaRequestsDto.md)
 - [TfaRequestsDtoType](docs/TfaRequestsDtoType.md)
 - [TfaSettingsArrayWrapper](docs/TfaSettingsArrayWrapper.md)
 - [TfaSettingsDto](docs/TfaSettingsDto.md)
 - [TfaValidateRequestsDto](docs/TfaValidateRequestsDto.md)
 - [ThirdPartyBackupRequestDto](docs/ThirdPartyBackupRequestDto.md)
 - [ThirdPartyParams](docs/ThirdPartyParams.md)
 - [ThirdPartyParamsArrayWrapper](docs/ThirdPartyParamsArrayWrapper.md)
 - [ThirdPartyRequestDto](docs/ThirdPartyRequestDto.md)
 - [Thumbnail](docs/Thumbnail.md)
 - [ThumbnailsDataDto](docs/ThumbnailsDataDto.md)
 - [ThumbnailsDataWrapper](docs/ThumbnailsDataWrapper.md)
 - [ThumbnailsRequest](docs/ThumbnailsRequest.md)
 - [TimezonesRequestsArrayWrapper](docs/TimezonesRequestsArrayWrapper.md)
 - [TimezonesRequestsDto](docs/TimezonesRequestsDto.md)
 - [TopUpDepositRequestDto](docs/TopUpDepositRequestDto.md)
 - [TurnOnAdminMessageSettingsRequestDto](docs/TurnOnAdminMessageSettingsRequestDto.md)
 - [UnknownWrapper](docs/UnknownWrapper.md)
 - [UpdateApiKeyRequest](docs/UpdateApiKeyRequest.md)
 - [UpdateClientRequest](docs/UpdateClientRequest.md)
 - [UpdateComment](docs/UpdateComment.md)
 - [UpdateFile](docs/UpdateFile.md)
 - [UpdateGroupRequest](docs/UpdateGroupRequest.md)
 - [UpdateMemberRequestDto](docs/UpdateMemberRequestDto.md)
 - [UpdateMembersQuotaRequestDto](docs/UpdateMembersQuotaRequestDto.md)
 - [UpdateMembersQuotaRequestDtoQuota](docs/UpdateMembersQuotaRequestDtoQuota.md)
 - [UpdateMembersRequestDto](docs/UpdateMembersRequestDto.md)
 - [UpdatePhotoMemberRequest](docs/UpdatePhotoMemberRequest.md)
 - [UpdateRoomRequest](docs/UpdateRoomRequest.md)
 - [UpdateRoomsQuotaRequestDtoInteger](docs/UpdateRoomsQuotaRequestDtoInteger.md)
 - [UpdateRoomsRoomIdsRequestDtoInteger](docs/UpdateRoomsRoomIdsRequestDtoInteger.md)
 - [UpdateWebhooksConfigRequestsDto](docs/UpdateWebhooksConfigRequestsDto.md)
 - [UploadRequestDto](docs/UploadRequestDto.md)
 - [UploadResultDto](docs/UploadResultDto.md)
 - [UploadResultWrapper](docs/UploadResultWrapper.md)
 - [UsageSpaceStatItemArrayWrapper](docs/UsageSpaceStatItemArrayWrapper.md)
 - [UsageSpaceStatItemDto](docs/UsageSpaceStatItemDto.md)
 - [UserConfig](docs/UserConfig.md)
 - [UserInfo](docs/UserInfo.md)
 - [UserInfoWrapper](docs/UserInfoWrapper.md)
 - [UserInvitation](docs/UserInvitation.md)
 - [UserInvitationRequestDto](docs/UserInvitationRequestDto.md)
 - [ValidationResult](docs/ValidationResult.md)
 - [WalletQuantityRequestDto](docs/WalletQuantityRequestDto.md)
 - [WatermarkAdditions](docs/WatermarkAdditions.md)
 - [WatermarkDto](docs/WatermarkDto.md)
 - [WatermarkOnDraw](docs/WatermarkOnDraw.md)
 - [WatermarkRequestDto](docs/WatermarkRequestDto.md)
 - [WebItemSecurityRequestsDto](docs/WebItemSecurityRequestsDto.md)
 - [WebItemsSecurityRequestsDto](docs/WebItemsSecurityRequestsDto.md)
 - [WebPluginArrayWrapper](docs/WebPluginArrayWrapper.md)
 - [WebPluginDto](docs/WebPluginDto.md)
 - [WebPluginRequests](docs/WebPluginRequests.md)
 - [WebPluginWrapper](docs/WebPluginWrapper.md)
 - [WebhookGroupStatus](docs/WebhookGroupStatus.md)
 - [WebhookRetryRequestsDto](docs/WebhookRetryRequestsDto.md)
 - [WebhookTrigger](docs/WebhookTrigger.md)
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
 - [WhiteLabelRequestsDto](docs/WhiteLabelRequestsDto.md)
 - [WizardRequestsDto](docs/WizardRequestsDto.md)
 - [WizardSettings](docs/WizardSettings.md)
 - [WizardSettingsWrapper](docs/WizardSettingsWrapper.md)

</details>
