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

import { Configuration, ApiKeysApi } from '@onlyoffice/docspace-api-sdk';

const config = new Configuration ({
    basePath: "https://your-docspace.onlyoffice.com",
    accessToken: "YOUR ACCESS TOKEN",
});

const apiInstance = new ApiKeysApi(config);

const opts: any = {
  'createApiKeyRequestDto':  // 
};
try {
    const result = await apiInstance.createApiKey(
      opts
    );
    console.log('API called successfully. Returned data: ', result.data);
  } catch (error) {
    console.error(error);
}


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

All URIs are relative to *https://your-docspace.onlyoffice.com*

### API Endoints tables:

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
        <td>Delete a user API key</td>
      </tr>
      <tr>
        <td><a href="docs/ApiKeysApi.md#getallpermissions"><strong>getAllPermissions</strong></a></td>
        <td><strong>GET</strong> /api/2.0/keys/permissions</td>
        <td>Get API key permissions</td>
      </tr>
      <tr>
        <td><a href="docs/ApiKeysApi.md#getapikey"><strong>getApiKey</strong></a></td>
        <td><strong>GET</strong> /api/2.0/keys/@self</td>
        <td>Get user API key info</td>
      </tr>
      <tr>
        <td><a href="docs/ApiKeysApi.md#getapikeys"><strong>getApiKeys</strong></a></td>
        <td><strong>GET</strong> /api/2.0/keys</td>
        <td>Get user API keys</td>
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
        <td>Open confirmation email URL</td>
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
        <td>Check the form draft filling</td>
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
        <td>Create a file in the \&quot;My documents\&quot; section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createhtmlfile"><strong>createHtmlFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/html</td>
        <td>Create an HTML file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createhtmlfileinmydocuments"><strong>createHtmlFileInMyDocuments</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/@my/html</td>
        <td>Create an HTML file in the \&quot;My documents\&quot; section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createprimaryexternallink"><strong>createPrimaryExternalLink</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{id}/link</td>
        <td>Create primary external link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createtextfile"><strong>createTextFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/text</td>
        <td>Create a text file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createtextfileinmydocuments"><strong>createTextFileInMyDocuments</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/@my/text</td>
        <td>Create a text file in the \&quot;My documents\&quot; section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#createthumbnails"><strong>createThumbnails</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/thumbnails</td>
        <td>Create file thumbnails</td>
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
        <td>Get primary external link</td>
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
        <td><a href="docs/FilesFilesApi.md#getpresignedfileuri"><strong>getPresignedFileUri</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/presigned</td>
        <td>Get file download link asynchronously</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getpresigneduri"><strong>getPresignedUri</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/presigneduri</td>
        <td>Get file download link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getprotectedfileusers"><strong>getProtectedFileUsers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/protectusers</td>
        <td>Get users access rights to the protected file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#getreferencedata"><strong>getReferenceData</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/referencedata</td>
        <td>Get reference data</td>
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
        <td>Open a file configuration</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#restorefileversion"><strong>restoreFileVersion</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/restoreversion</td>
        <td>Restore a file version</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#saveeditingfilefromform"><strong>saveEditingFileFromForm</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/saveediting</td>
        <td>Save file edits</td>
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
        <td><a href="docs/FilesFilesApi.md#setexternallink"><strong>setExternalLink</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{id}/links</td>
        <td>Set an external link</td>
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
        <td>Start file editing</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#startfillingfile"><strong>startFillingFile</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/startfilling</td>
        <td>Start file filling</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFilesApi.md#trackeditfile"><strong>trackEditFile</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/trackeditfile</td>
        <td>Track file editing</td>
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
        <td>Check file uploads</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#createfolder"><strong>createFolder</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/folder/{folderId}</td>
        <td>Create a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#deletefolder"><strong>deleteFolder</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/folder/{folderId}</td>
        <td>Delete a folder</td>
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
        <td><a href="docs/FilesFoldersApi.md#getfolderpath"><strong>getFolderPath</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{folderId}/path</td>
        <td>Get the folder path</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolderprimaryexternallink"><strong>getFolderPrimaryExternalLink</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/folder/{id}/link</td>
        <td>Get primary external link</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getfolders"><strong>getFolders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/{folderId}/subfolders</td>
        <td>Get subfolders</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getmyfolder"><strong>getMyFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@my</td>
        <td>Get the \&quot;My documents\&quot; section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getnewfolderitems"><strong>getNewFolderItems</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/{folderId}/news</td>
        <td>Get new folder items</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getprivacyfolder"><strong>getPrivacyFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@privacy</td>
        <td>Get the \&quot;Private Room\&quot; section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#getrootfolders"><strong>getRootFolders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@root</td>
        <td>Get filtered sections</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#gettrashfolder"><strong>getTrashFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@trash</td>
        <td>Get the \&quot;Trash\&quot; section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#insertfile"><strong>insertFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/insert</td>
        <td>Insert a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#insertfiletomyfrombody"><strong>insertFileToMyFromBody</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/@my/insert</td>
        <td>Insert a file to the \&quot;My documents\&quot; section</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#renamefolder"><strong>renameFolder</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/folder/{folderId}</td>
        <td>Rename a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#setfolderorder"><strong>setFolderOrder</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/folder/{folderId}/order</td>
        <td>Set folder order</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#uploadfile"><strong>uploadFile</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/upload</td>
        <td>Upload a file</td>
      </tr>
      <tr>
        <td><a href="docs/FilesFoldersApi.md#uploadfiletomy"><strong>uploadFileToMy</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/@my/upload</td>
        <td>Upload a file to the \&quot;My documents\&quot; section</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>OperationsApi</strong></td>
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
        <td>Check and move or copy to a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#checkmoveorcopydestfolder"><strong>checkMoveOrCopyDestFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/fileops/checkdestfolder</td>
        <td>Check for moving or copying to a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#copybatchitems"><strong>copyBatchItems</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/copy</td>
        <td>Copy to the folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#createuploadsession"><strong>createUploadSession</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/{folderId}/upload/create_session</td>
        <td>Chunked upload</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#deletebatchitems"><strong>deleteBatchItems</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/delete</td>
        <td>Delete files and folders</td>
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
        <td>Empty the \&quot;Trash\&quot; folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#getoperationstatuses"><strong>getOperationStatuses</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/fileops</td>
        <td>Get active file operations</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#getoperationstatusesbytype"><strong>getOperationStatusesByType</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/fileops/{operationType}</td>
        <td>Get file operation statuses</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#markasread"><strong>markAsRead</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/markasread</td>
        <td>Mark as read</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#movebatchitems"><strong>moveBatchItems</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/move</td>
        <td>Move or copy to a folder</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#startfileconversion"><strong>startFileConversion</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/checkconversion</td>
        <td>Start file conversion</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#terminatetasks"><strong>terminateTasks</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/fileops/terminate/{id}</td>
        <td>Finish active operations</td>
      </tr>
      <tr>
        <td><a href="docs/FilesOperationsApi.md#updatefilecomment"><strong>updateFileComment</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/file/{fileId}/comment</td>
        <td>Update a comment</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>FilesQuotaApi</strong></td>
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
        <td>Confirm the file deletion</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#changedownloadzipfrombody"><strong>changeDownloadZipFromBody</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/downloadtargz</td>
        <td>Change the archive format (using body parameters)</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#checkdocserviceurl"><strong>checkDocServiceUrl</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/docservice</td>
        <td>Check the document service URL</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#displayfileextension"><strong>displayFileExtension</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/displayfileextension</td>
        <td>Display a file extension</td>
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
        <td><a href="docs/FilesSettingsApi.md#getdocserviceurl"><strong>getDocServiceUrl</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/docservice</td>
        <td>Get the document service URL</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#getfilesmodule"><strong>getFilesModule</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/info</td>
        <td>Get the \&quot;Documents\&quot; information</td>
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
        <td><a href="docs/FilesSettingsApi.md#isavailableprivacyroomsettings"><strong>isAvailablePrivacyRoomSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/@privacy/available</td>
        <td>Check the \&quot;Private Room\&quot; availability</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#keepnewfilename"><strong>keepNewFileName</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/keepnewfilename</td>
        <td>Ask a new file name</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSettingsApi.md#setopeneditorinsametab"><strong>setOpenEditorInSameTab</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/settings/openeditorinsametab</td>
        <td>Open document in the same browser tab</td>
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
        <td colspan="3" style="text-align: center;"><strong>SharingApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#applyexternalsharepassword"><strong>applyExternalSharePassword</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/share/{key}/password</td>
        <td>Apply external data password</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#changefileowner"><strong>changeFileOwner</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/owner</td>
        <td>Change the file owner</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getexternalsharedata"><strong>getExternalShareData</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/share/{key}</td>
        <td>Get the external data</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#getsharedusers"><strong>getSharedUsers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/file/{fileId}/sharedusers</td>
        <td>Get user access rights by file ID</td>
      </tr>
      <tr>
        <td><a href="docs/FilesSharingApi.md#sendeditornotify"><strong>sendEditorNotify</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/file/{fileId}/sendeditornotify</td>
        <td>Send the mention message</td>
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
        <td>Get all providers</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#getbackupthirdpartyaccount"><strong>getBackupThirdPartyAccount</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/thirdparty/backup</td>
        <td>Get a third-party account backup</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#getcapabilities"><strong>getCapabilities</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/thirdparty/capabilities</td>
        <td>Get providers</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#getcommonthirdpartyfolders"><strong>getCommonThirdPartyFolders</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/thirdparty/common</td>
        <td>Get the common third-party services</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#getthirdpartyaccounts"><strong>getThirdPartyAccounts</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/thirdparty</td>
        <td>Get the third-party accounts</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#savethirdparty"><strong>saveThirdParty</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/thirdparty</td>
        <td>Save a third-party account</td>
      </tr>
      <tr>
        <td><a href="docs/FilesThirdPartyIntegrationApi.md#savethirdpartybackup"><strong>saveThirdPartyBackup</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/thirdparty/backup</td>
        <td>Save a third-party account backup</td>
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
        <td><strong>GET</strong> /api/2.0/group/user/{userid}</td>
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
        <td colspan="3" style="text-align: center;"><strong>RoomsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/GroupRoomsApi.md#getgroupswithshared"><strong>getGroupsWithShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/group/room/{id}</td>
        <td>Get groups with sharing settings</td>
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
        <td>Get migrations</td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#startmigration"><strong>startMigration</strong></a></td>
        <td><strong>POST</strong> /api/2.0/migration/migrate</td>
        <td>Start migration</td>
      </tr>
      <tr>
        <td><a href="docs/MigrationApi.md#uploadandinitializemigration"><strong>uploadAndInitializeMigration</strong></a></td>
        <td><strong>POST</strong> /api/2.0/migration/init/{migratorName}</td>
        <td>Upload and initialize migration</td>
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
        <td colspan="3" style="text-align: center;"><strong>OAuth20AuthorizationApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20AuthorizationApi.md#authorizeoauth"><strong>authorizeOAuth</strong></a></td>
        <td><strong>GET</strong> /oauth2/authorize</td>
        <td>OAuth2 authorization endpoint</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20AuthorizationApi.md#exchangetoken"><strong>exchangeToken</strong></a></td>
        <td><strong>POST</strong> /oauth2/token</td>
        <td>OAuth2 token endpoint</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20AuthorizationApi.md#submitconsent"><strong>submitConsent</strong></a></td>
        <td><strong>POST</strong> /oauth2/authorize</td>
        <td>OAuth2 consent endpoint</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ClientManagementApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#changeactivation"><strong>changeActivation</strong></a></td>
        <td><strong>PATCH</strong> /api/2.0/clients/{clientId}/activation</td>
        <td>Change the client activation status</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#createclient"><strong>createClient</strong></a></td>
        <td><strong>POST</strong> /api/2.0/clients</td>
        <td>Create a new OAuth2 client</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#deleteclient"><strong>deleteClient</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/clients/{clientId}</td>
        <td>Delete an OAuth2 client</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#regeneratesecret"><strong>regenerateSecret</strong></a></td>
        <td><strong>PATCH</strong> /api/2.0/clients/{clientId}/regenerate</td>
        <td>Regenerate the client secret</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#revokeuserclient"><strong>revokeUserClient</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/clients/{clientId}/revoke</td>
        <td>Revoke client consent</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientManagementApi.md#updateclient"><strong>updateClient</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/clients/{clientId}</td>
        <td>Update an existing OAuth2 client</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ClientQueryingApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getclient"><strong>getClient</strong></a></td>
        <td><strong>GET</strong> /api/2.0/clients/{clientId}</td>
        <td>Get client details</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getclientinfo"><strong>getClientInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/clients/{clientId}/info</td>
        <td>Get detailed client information</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getclients"><strong>getClients</strong></a></td>
        <td><strong>GET</strong> /api/2.0/clients</td>
        <td>Get clients</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getclientsinfo"><strong>getClientsInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/clients/info</td>
        <td>Get detailed information of clients</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getconsents"><strong>getConsents</strong></a></td>
        <td><strong>GET</strong> /api/2.0/clients/consents</td>
        <td>Get user consents</td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ClientQueryingApi.md#getpublicclientinfo"><strong>getPublicClientInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/clients/{clientId}/public/info</td>
        <td>Get public client information</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ScopeManagementApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/OAuth20ScopeManagementApi.md#getscopes"><strong>getScopes</strong></a></td>
        <td><strong>GET</strong> /api/2.0/scopes</td>
        <td>Get available OAuth2 scopes</td>
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
        <td>Delete guests</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PasswordApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePasswordApi.md#changeuserpassword"><strong>changeUserPassword</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/{userid}/password</td>
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
        <td><strong>POST</strong> /api/2.0/people/{userid}/photo/thumbnails</td>
        <td>Create photo thumbnails</td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePhotosApi.md#deletememberphoto"><strong>deleteMemberPhoto</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/people/{userid}/photo</td>
        <td>Delete a user photo</td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePhotosApi.md#getmemberphoto"><strong>getMemberPhoto</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/{userid}/photo</td>
        <td>Get a user photo</td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePhotosApi.md#updatememberphoto"><strong>updateMemberPhoto</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/{userid}/photo</td>
        <td>Update a user photo</td>
      </tr>
      <tr>
        <td><a href="docs/PeoplePhotosApi.md#uploadmemberphoto"><strong>uploadMemberPhoto</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/{userid}/photo</td>
        <td>Upload a user photo</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>ProfilesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#addmember"><strong>addMember</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people</td>
        <td>Add a user</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#deletemember"><strong>deleteMember</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/people/{userid}</td>
        <td>Delete a user</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#deleteprofile"><strong>deleteProfile</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/people/@self</td>
        <td>Delete my profile</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#getallprofiles"><strong>getAllProfiles</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people</td>
        <td>Get profiles</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#getclaims"><strong>getClaims</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/tokendiagnostics</td>
        <td>Returns the user claims.</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#getprofilebyemail"><strong>getProfileByEmail</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/email</td>
        <td>Get a profile by user email</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#getprofilebyuserid"><strong>getProfileByUserId</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/{userid}</td>
        <td>Get a profile by user name</td>
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
        <td><a href="docs/PeopleProfilesApi.md#sendemailchangeinstructions"><strong>sendEmailChangeInstructions</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/email</td>
        <td>Send instructions to change email</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#updatemember"><strong>updateMember</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/{userid}</td>
        <td>Update a user</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleProfilesApi.md#updatememberculture"><strong>updateMemberCulture</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/{userid}/culture</td>
        <td>Update a user culture code</td>
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
        <td colspan="3" style="text-align: center;"><strong>SearchApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getaccountsentrieswithshared"><strong>getAccountsEntriesWithShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/accounts/room/{id}/search</td>
        <td>Get account entries</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getsearch"><strong>getSearch</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/@search/{query}</td>
        <td>Search users</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getsimplebyfilter"><strong>getSimpleByFilter</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/simple/filter</td>
        <td>Search users by extended filter</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#getuserswithroomshared"><strong>getUsersWithRoomShared</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/room/{id}</td>
        <td>Get users with room sharing settings</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#searchusersbyextendedfilter"><strong>searchUsersByExtendedFilter</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/filter</td>
        <td>Search users with detaailed information by extended filter</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleSearchApi.md#searchusersbyquery"><strong>searchUsersByQuery</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/search</td>
        <td>Search users (using query parameters)</td>
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
        <td>Get third-party accounts</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleThirdPartyAccountsApi.md#linkthirdpartyaccount"><strong>linkThirdPartyAccount</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/thirdparty/linkaccount</td>
        <td>Link a third-pary account</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleThirdPartyAccountsApi.md#signupthirdpartyaccount"><strong>signupThirdPartyAccount</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/thirdparty/signup</td>
        <td>Create a third-pary account</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleThirdPartyAccountsApi.md#unlinkthirdpartyaccount"><strong>unlinkThirdPartyAccount</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/people/thirdparty/unlinkaccount</td>
        <td>Unlink a third-pary account</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>UserDataApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#getdeletepersonalfolderprogress"><strong>getDeletePersonalFolderProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/delete/personal/progress</td>
        <td>Get the progress of deleting the personal folder</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#getreassignprogress"><strong>getReassignProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/reassign/progress/{userid}</td>
        <td>Get the reassignment progress</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#getremoveprogress"><strong>getRemoveProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/remove/progress/{userid}</td>
        <td>Get the deletion progress</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserDataApi.md#necessaryreassign"><strong>necessaryReassign</strong></a></td>
        <td><strong>GET</strong> /api/2.0/people/reassign/necessary</td>
        <td>Check the data reassignment need</td>
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
        <td><strong>PUT</strong> /api/2.0/people/activationstatus/{activationstatus}</td>
        <td>Set an activation status to the users</td>
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
        <td><strong>GET</strong> /api/2.0/people/type/progress/{userid}</td>
        <td>Get the progress of updating user type</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserTypeApi.md#starusertypetupdate"><strong>starUserTypetUpdate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/people/type</td>
        <td>Update user type</td>
      </tr>
      <tr>
        <td><a href="docs/PeopleUserTypeApi.md#terminateusertypeupdate"><strong>terminateUserTypeUpdate</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/people/type/terminate</td>
        <td>Terminate update user type</td>
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
        <td><strong>GET</strong> /api/2.0/people/guests/{userid}/share</td>
        <td>Get a guest sharing link</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>PaymentApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#calculatewalletpayment"><strong>calculateWalletPayment</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/payment/calculatewallet</td>
        <td>Calculate amount of the wallet payment</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#createcustomeroperationsreport"><strong>createCustomerOperationsReport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/customer/operationsreport</td>
        <td>Generate the customer operations report</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcheckoutsetupurl"><strong>getCheckoutSetupUrl</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/chechoutsetupurl</td>
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
        <td>Get the customer info</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getcustomeroperations"><strong>getCustomerOperations</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/customer/operations</td>
        <td>Get the customer operations</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getpaymentaccount"><strong>getPaymentAccount</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/account</td>
        <td>Get the payment account</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getpaymentcurrencies"><strong>getPaymentCurrencies</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/currencies</td>
        <td>Get currencies</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getpaymentquotas"><strong>getPaymentQuotas</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/quotas</td>
        <td>Get quotas</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getpaymenturl"><strong>getPaymentUrl</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/payment/url</td>
        <td>Get the payment page URL</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getportalprices"><strong>getPortalPrices</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/prices</td>
        <td>Get prices</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#getquotapaymentinformation"><strong>getQuotaPaymentInformation</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/quota</td>
        <td>Get quota payment information</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#gettenantwalletsettings"><strong>getTenantWalletSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/payment/topupsettings</td>
        <td>Get wallet auto top up settings</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#sendpaymentrequest"><strong>sendPaymentRequest</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/request</td>
        <td>Send a payment request</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#settenantwalletsettings"><strong>setTenantWalletSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/topupsettings</td>
        <td>Set wallet auto top up settings</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#topupdeposit"><strong>topUpDeposit</strong></a></td>
        <td><strong>POST</strong> /api/2.0/portal/payment/deposit</td>
        <td>Put money on deposit</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#updatepayment"><strong>updatePayment</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/payment/update</td>
        <td>Update the payment quantity</td>
      </tr>
      <tr>
        <td><a href="docs/PortalPaymentApi.md#updatewalletpayment"><strong>updateWalletPayment</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/portal/payment/updatewallet</td>
        <td>Update the wallet payment quantity</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>QuotaApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/PortalQuotaApi.md#getportalquota"><strong>getPortalQuota</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/quota</td>
        <td>Get a portal quota</td>
      </tr>
      <tr>
        <td><a href="docs/PortalQuotaApi.md#getportaltariff"><strong>getPortalTariff</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/tariff</td>
        <td>Get a portal tariff</td>
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
        <td colspan="3" style="text-align: center;"><strong>SettingsApi</strong></td>
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
        <td>Get a portal</td>
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
        <td><a href="docs/PortalUsersApi.md#getinvitationlink"><strong>getInvitationLink</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/users/invite/{employeeType}</td>
        <td>Get an invitation link</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#getportaluserscount"><strong>getPortalUsersCount</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/userscount</td>
        <td>Get a number of portal users</td>
      </tr>
      <tr>
        <td><a href="docs/PortalUsersApi.md#getuserbyid"><strong>getUserById</strong></a></td>
        <td><strong>GET</strong> /api/2.0/portal/users/{userID}</td>
        <td>Get a user by ID</td>
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
        <td colspan="3" style="text-align: center;"><strong>RoomsRoomsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#addroomtags"><strong>addRoomTags</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/tags</td>
        <td>Add the room tags</td>
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
        <td>Create a room logo</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#createroomtag"><strong>createRoomTag</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/tags</td>
        <td>Create a tag</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#createroomtemplate"><strong>createRoomTemplate</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/roomtemplate</td>
        <td>Start creating room template</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#createroomthirdparty"><strong>createRoomThirdParty</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/thirdparty/{id}</td>
        <td>Create a third-party room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#deletecustomtags"><strong>deleteCustomTags</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/files/tags</td>
        <td>Delete tags</td>
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
        <td>Remove the room tags</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getnewroomitems"><strong>getNewRoomItems</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/{id}/news</td>
        <td>Get the new room items</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getpublicsettings"><strong>getPublicSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/roomtemplate/{id}/public</td>
        <td>Get public settings</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomcovers"><strong>getRoomCovers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/covers</td>
        <td>Get covers</td>
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
        <td>Get tags</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomtemplatecreatingstatus"><strong>getRoomTemplateCreatingStatus</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/roomtemplate/status</td>
        <td>Get status of room template creation</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomsfolder"><strong>getRoomsFolder</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms</td>
        <td>Get rooms</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomsnewitems"><strong>getRoomsNewItems</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/news</td>
        <td>Get the room new items</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#getroomsprimaryexternallink"><strong>getRoomsPrimaryExternalLink</strong></a></td>
        <td><strong>GET</strong> /api/2.0/files/rooms/{id}/link</td>
        <td>Get the room primary external link</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#pinroom"><strong>pinRoom</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/pin</td>
        <td>Pin a room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#reorderroom"><strong>reorderRoom</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/rooms/{id}/reorder</td>
        <td>Reorder the room</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#resendemailinvitations"><strong>resendEmailInvitations</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/rooms/{id}/resend</td>
        <td>Resend the room invitations</td>
      </tr>
      <tr>
        <td><a href="docs/RoomsApi.md#setpublicsettings"><strong>setPublicSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/files/roomtemplate/public</td>
        <td>Set public settings</td>
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
        <td><a href="docs/RoomsApi.md#uploadroomlogo"><strong>uploadRoomLogo</strong></a></td>
        <td><strong>POST</strong> /api/2.0/files/logos</td>
        <td>Upload a room logo image</td>
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
        <td>Log out from the connection</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionschangepassword"><strong>logOutAllActiveConnectionsChangePassword</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/security/activeconnections/logoutallchangepassword</td>
        <td>Log out and change password</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityActiveConnectionsApi.md#logoutallactiveconnectionsforuser"><strong>logOutAllActiveConnectionsForUser</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/security/activeconnections/logoutall/{userId}</td>
        <td>Log out for the user by ID</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityActiveConnectionsApi.md#logoutallexceptthisconnection"><strong>logOutAllExceptThisConnection</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/security/activeconnections/logoutallexceptthis</td>
        <td>Log out from all connections except the current one</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>AuditTrailDataApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#createaudittrailreport"><strong>createAuditTrailReport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/security/audit/events/report</td>
        <td>Generate the audit trail report</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getauditeventsbyfilter"><strong>getAuditEventsByFilter</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/events/filter</td>
        <td>Get filtered audit trail data</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getauditsettings"><strong>getAuditSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/settings/lifetime</td>
        <td>Get the audit trail settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getaudittrailmappers"><strong>getAuditTrailMappers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/mappers</td>
        <td>Get audit trail mappers</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getaudittrailtypes"><strong>getAuditTrailTypes</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/types</td>
        <td>Get audit trail types</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#getlastauditevents"><strong>getLastAuditEvents</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/events/last</td>
        <td>Get audit trail data</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityAuditTrailDataApi.md#setauditsettings"><strong>setAuditSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/security/audit/settings/lifetime</td>
        <td>Set the audit trail settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>SecurityBannersVisibilityApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityBannersVisibilityApi.md#settenantbannersettings"><strong>setTenantBannerSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/banner</td>
        <td>Set the promotional banners visibility settings</td>
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
        <td>Save the Documents Firebase device token</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityFirebaseApi.md#subscribedocumentspushnotification"><strong>subscribeDocumentsPushNotification</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/push/docsubscribe</td>
        <td>Subscribe to Documents push notification</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>LoginHistoryApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SecurityLoginHistoryApi.md#createloginhistoryreport"><strong>createLoginHistoryReport</strong></a></td>
        <td><strong>POST</strong> /api/2.0/security/audit/login/report</td>
        <td>Generate the login history report</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityLoginHistoryApi.md#getlastloginevents"><strong>getLastLoginEvents</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/login/last</td>
        <td>Get login history</td>
      </tr>
      <tr>
        <td><a href="docs/SecurityLoginHistoryApi.md#getlogineventsbyfilter"><strong>getLoginEventsByFilter</strong></a></td>
        <td><strong>GET</strong> /api/2.0/security/audit/login/filter</td>
        <td>Get filtered login events</td>
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
        <td>Get the SMTP testing process status</td>
      </tr>
      <tr>
        <td><a href="docs/SecuritySMTPSettingsApi.md#getsmtpsettings"><strong>getSmtpSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/smtpsettings/smtp</td>
        <td>Get the SMTP settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecuritySMTPSettingsApi.md#resetsmtpsettings"><strong>resetSmtpSettings</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/smtpsettings/smtp</td>
        <td>Reset the SMTP settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecuritySMTPSettingsApi.md#savesmtpsettings"><strong>saveSmtpSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/smtpsettings/smtp</td>
        <td>Save the SMTP settings</td>
      </tr>
      <tr>
        <td><a href="docs/SecuritySMTPSettingsApi.md#testsmtpsettings"><strong>testSmtpSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/smtpsettings/smtp/test</td>
        <td>Test the SMTP settings</td>
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
        <td colspan="3" style="text-align: center;"><strong>AuthorizationApi</strong></td>
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
        <td colspan="3" style="text-align: center;"><strong>BannersVisibilityApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsBannersVisibilityApi.md#gettenantbannersettings"><strong>getTenantBannerSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/banner</td>
        <td>Get the promotional banners visibility settings</td>
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
        <td>Get hostname</td>
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
        <td><a href="docs/SettingsCommonSettingsApi.md#updateemailactivationsettings"><strong>updateEmailActivationSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/emailactivation</td>
        <td>Update the email activation settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCommonSettingsApi.md#updateinvitationsettings"><strong>updateInvitationSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/invitationsettings</td>
        <td>Update user invitation settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>CookiesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCookiesApi.md#getcookiesettings"><strong>getCookieSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/cookiesettings</td>
        <td>Get cookies lifetime</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCookiesApi.md#updatecookiesettings"><strong>updateCookieSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/cookiesettings</td>
        <td>Update cookies lifetime</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>CustomNavigationApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCustomNavigationApi.md#createcustomnavigationitem"><strong>createCustomNavigationItem</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/customnavigation/create</td>
        <td>Add a custom navigation item</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCustomNavigationApi.md#deletecustomnavigationitem"><strong>deleteCustomNavigationItem</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/customnavigation/delete/{id}</td>
        <td>Delete a custom navigation item</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCustomNavigationApi.md#getcustomnavigationitem"><strong>getCustomNavigationItem</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/customnavigation/get/{id}</td>
        <td>Get a custom navigation item by ID</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCustomNavigationApi.md#getcustomnavigationitemsample"><strong>getCustomNavigationItemSample</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/customnavigation/getsample</td>
        <td>Get a custom navigation item sample</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsCustomNavigationApi.md#getcustomnavigationitems"><strong>getCustomNavigationItems</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/customnavigation/getall</td>
        <td>Get the custom navigation items</td>
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
        <td>Start the storage encryption process</td>
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
        <td>Get the IP portal restrictions</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsIPRestrictionsApi.md#readiprestrictionssettings"><strong>readIpRestrictionsSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/iprestrictions/settings</td>
        <td>Get the IP restriction settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsIPRestrictionsApi.md#saveiprestrictions"><strong>saveIpRestrictions</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/iprestrictions</td>
        <td>Update the IP restrictions</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsIPRestrictionsApi.md#updateiprestrictionssettings"><strong>updateIpRestrictionsSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/iprestrictions/settings</td>
        <td>Update the IP restriction settings</td>
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
        <td>Request a license</td>
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
        <td>Get the login settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsLoginSettingsApi.md#setdefaultloginsettings"><strong>setDefaultLoginSettings</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/security/loginsettings</td>
        <td>Reset the login settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsLoginSettingsApi.md#updateloginsettings"><strong>updateLoginSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security/loginsettings</td>
        <td>Update the login settings</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>MessagesApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsMessagesApi.md#enableadminmessagesettings"><strong>enableAdminMessageSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/messagesettings</td>
        <td>Enable the administrator message settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsMessagesApi.md#sendadminmail"><strong>sendAdminMail</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/sendadmmail</td>
        <td>Send a message to the administrator</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsMessagesApi.md#sendjoininvitemail"><strong>sendJoinInviteMail</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/sendjoininvite</td>
        <td>Sends an invitation email</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>NotificationsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsNotificationsApi.md#getnotificationsettings"><strong>getNotificationSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/notification/{type}</td>
        <td>Check notification availability</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsNotificationsApi.md#getroomsnotificationsettings"><strong>getRoomsNotificationSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/notification/rooms</td>
        <td>Get room notification settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsNotificationsApi.md#setnotificationsettings"><strong>setNotificationSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/notification</td>
        <td>Enable notifications</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsNotificationsApi.md#setroomsnotificationstatus"><strong>setRoomsNotificationStatus</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/notification/rooms</td>
        <td>Set room notification status</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>OwnerApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsOwnerApi.md#sendownerchangeinstructions"><strong>sendOwnerChangeInstructions</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/owner</td>
        <td>Send the owner change instructions</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsOwnerApi.md#updateportalowner"><strong>updatePortalOwner</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/owner</td>
        <td>Update the portal owner</td>
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
        <td>Check the default white label logo text</td>
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
        <td>Save the white label logo text settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#savewhitelabelsettings"><strong>saveWhiteLabelSettings</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/whitelabel/logos/save</td>
        <td>Save the white label logos</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsRebrandingApi.md#savewhitelabelsettingsfromfiles"><strong>saveWhiteLabelSettingsFromFiles</strong></a></td>
        <td><strong>POST</strong> /api/2.0/settings/whitelabel/logos/savefromfiles</td>
        <td>Save the white label logos from files</td>
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
        <td>Get the enabled modules</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getisproductadministrator"><strong>getIsProductAdministrator</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/administrator</td>
        <td>Check a product administrator</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getpasswordsettings"><strong>getPasswordSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/password</td>
        <td>Get the password settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getproductadministrators"><strong>getProductAdministrators</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/administrator/{productid}</td>
        <td>Get the product administrators</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getwebitemsecurityinfo"><strong>getWebItemSecurityInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security/{id}</td>
        <td>Get the module availability</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#getwebitemsettingssecurityinfo"><strong>getWebItemSettingsSecurityInfo</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/security</td>
        <td>Get the security settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#setaccesstowebitems"><strong>setAccessToWebItems</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security/access</td>
        <td>Set the security settings to modules</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#setproductadministrator"><strong>setProductAdministrator</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security/administrator</td>
        <td>Set a product administrator</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#setwebitemsecurity"><strong>setWebItemSecurity</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security</td>
        <td>Set the module security settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsSecurityApi.md#updatepasswordsettings"><strong>updatePasswordSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/security/password</td>
        <td>Set the password settings</td>
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
        <td>Get storages</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#getamazons3regions"><strong>getAmazonS3Regions</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/storage/s3/regions</td>
        <td>Get Amazon regions</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsStorageApi.md#getstorageprogress"><strong>getStorageProgress</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/storage/progress</td>
        <td>Get the storage progress</td>
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
        <td>Update a storage</td>
      </tr>
    <tr>
        <td colspan="3" style="text-align: center;"><strong>TFASettingsApi</strong></td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#gettfaappcodes"><strong>getTfaAppCodes</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/tfaappcodes</td>
        <td>Get the TFA codes</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#gettfaconfirmurl"><strong>getTfaConfirmUrl</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/tfaapp/confirm</td>
        <td>Get confirmation email</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#gettfasettings"><strong>getTfaSettings</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/tfaapp</td>
        <td>Get the TFA settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#tfaappgeneratesetupcode"><strong>tfaAppGenerateSetupCode</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/tfaapp/setup</td>
        <td>Generate setup code</td>
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
        <td>Update the TFA codes</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#updatetfasettings"><strong>updateTfaSettings</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/tfaapp</td>
        <td>Update the TFA settings</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsTFASettingsApi.md#updatetfasettingslink"><strong>updateTfaSettingsLink</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/tfaappwithlink</td>
        <td>Get a confirmation email for updating TFA settings</td>
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
        <td>Enable a webhook</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#gettenantwebhooks"><strong>getTenantWebhooks</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/webhook</td>
        <td>Get webhooks</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#getwebhooktriggers"><strong>getWebhookTriggers</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/webhook/triggers</td>
        <td>Get webhook triggers</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#getwebhookslogs"><strong>getWebhooksLogs</strong></a></td>
        <td><strong>GET</strong> /api/2.0/settings/webhooks/log</td>
        <td>Get webhook logs</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#removewebhook"><strong>removeWebhook</strong></a></td>
        <td><strong>DELETE</strong> /api/2.0/settings/webhook/{id}</td>
        <td>Remove a webhook</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#retrywebhook"><strong>retryWebhook</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/webhook/{id}/retry</td>
        <td>Retry a webhook</td>
      </tr>
      <tr>
        <td><a href="docs/SettingsWebhooksApi.md#retrywebhooks"><strong>retryWebhooks</strong></a></td>
        <td><strong>PUT</strong> /api/2.0/settings/webhook/retry</td>
        <td>Retry webhooks</td>
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
        <td>Get the code request</td>
      </tr>
    </tbody>
  </table>

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
 - [BaseBatchRequestDtoAllOfFileIds](docs/BaseBatchRequestDtoAllOfFileIds.md)
 - [BaseBatchRequestDtoAllOfFolderIds](docs/BaseBatchRequestDtoAllOfFolderIds.md)
 - [BaseStorageSettingsCdnStorageSettings](docs/BaseStorageSettingsCdnStorageSettings.md)
 - [BaseStorageSettingsStorageSettings](docs/BaseStorageSettingsStorageSettings.md)
 - [BatchRequestDto](docs/BatchRequestDto.md)
 - [BatchRequestDtoAllOfDestFolderId](docs/BatchRequestDtoAllOfDestFolderId.md)
 - [BatchRequestDtoAllOfFileIds](docs/BatchRequestDtoAllOfFileIds.md)
 - [BatchRequestDtoAllOfFolderIds](docs/BatchRequestDtoAllOfFolderIds.md)
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
 - [ConfigurationDtoString](docs/ConfigurationDtoString.md)
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
 - [DeleteBatchRequestDtoAllOfFileIds](docs/DeleteBatchRequestDtoAllOfFileIds.md)
 - [DeleteBatchRequestDtoAllOfFolderIds](docs/DeleteBatchRequestDtoAllOfFolderIds.md)
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
 - [DownloadRequestDtoAllOfFileIds](docs/DownloadRequestDtoAllOfFileIds.md)
 - [DownloadRequestDtoAllOfFolderIds](docs/DownloadRequestDtoAllOfFolderIds.md)
 - [DownloadRequestItemDto](docs/DownloadRequestItemDto.md)
 - [DownloadRequestItemDtoKey](docs/DownloadRequestItemDtoKey.md)
 - [DraftLocationInteger](docs/DraftLocationInteger.md)
 - [DraftLocationString](docs/DraftLocationString.md)
 - [DuplicateRequestDto](docs/DuplicateRequestDto.md)
 - [DuplicateRequestDtoAllOfFileIds](docs/DuplicateRequestDtoAllOfFileIds.md)
 - [DuplicateRequestDtoAllOfFolderIds](docs/DuplicateRequestDtoAllOfFolderIds.md)
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
 - [EmailInvitationDto](docs/EmailInvitationDto.md)
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
 - [FileDtoIntegerAllOfViewAccessibility](docs/FileDtoIntegerAllOfViewAccessibility.md)
 - [FileDtoString](docs/FileDtoString.md)
 - [FileEntryBaseArrayWrapper](docs/FileEntryBaseArrayWrapper.md)
 - [FileEntryBaseDto](docs/FileEntryBaseDto.md)
 - [FileEntryBaseWrapper](docs/FileEntryBaseWrapper.md)
 - [FileEntryDtoInteger](docs/FileEntryDtoInteger.md)
 - [FileEntryDtoIntegerAllOfSecurity](docs/FileEntryDtoIntegerAllOfSecurity.md)
 - [FileEntryDtoString](docs/FileEntryDtoString.md)
 - [FileEntryStringArrayWrapper](docs/FileEntryStringArrayWrapper.md)
 - [FileEntryType](docs/FileEntryType.md)
 - [FileIntegerWrapper](docs/FileIntegerWrapper.md)
 - [FileLink](docs/FileLink.md)
 - [FileLinkRequest](docs/FileLinkRequest.md)
 - [FileLinkWrapper](docs/FileLinkWrapper.md)
 - [FileOperationArrayWrapper](docs/FileOperationArrayWrapper.md)
 - [FileOperationDto](docs/FileOperationDto.md)
 - [FileOperationRequestBaseDto](docs/FileOperationRequestBaseDto.md)
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
 - [FileStringArrayWrapper](docs/FileStringArrayWrapper.md)
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
 - [FillingFormResultDtoString](docs/FillingFormResultDtoString.md)
 - [FillingFormResultIntegerWrapper](docs/FillingFormResultIntegerWrapper.md)
 - [FilterType](docs/FilterType.md)
 - [FinishDto](docs/FinishDto.md)
 - [FireBaseUser](docs/FireBaseUser.md)
 - [FireBaseUserWrapper](docs/FireBaseUserWrapper.md)
 - [FirebaseDto](docs/FirebaseDto.md)
 - [FirebaseRequestsDto](docs/FirebaseRequestsDto.md)
 - [FolderContentDtoInteger](docs/FolderContentDtoInteger.md)
 - [FolderContentDtoString](docs/FolderContentDtoString.md)
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
 - [ImportableApiEntity](docs/ImportableApiEntity.md)
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
 - [NewItemsDtoFileEntryBaseDto](docs/NewItemsDtoFileEntryBaseDto.md)
 - [NewItemsDtoRoomNewItemsDto](docs/NewItemsDtoRoomNewItemsDto.md)
 - [NewItemsFileEntryBaseArrayWrapper](docs/NewItemsFileEntryBaseArrayWrapper.md)
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
 - [ScheduleDto](docs/ScheduleDto.md)
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
 - [StatusCodeResult](docs/StatusCodeResult.md)
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
