/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2025
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

// May contain unused imports in some cases
// @ts-ignore
import type { AutoCleanUpData } from './auto-clean-up-data';
// May contain unused imports in some cases
// @ts-ignore
import type { FilesSettingsDtoInternalFormats } from './files-settings-dto-internal-formats';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderBy } from './order-by';

/**
 * The file settings parameters.
 */
export interface FilesSettingsDto {
    /**
     * The list of extensions of the viewed images.
     */
    'extsImagePreviewed'?: Array<string> | null;
    /**
     * The list of extensions of the viewed media files.
     */
    'extsMediaPreviewed'?: Array<string> | null;
    /**
     * The list of extensions of the viewed files.
     */
    'extsWebPreviewed'?: Array<string> | null;
    /**
     * The list of extensions of the edited files.
     */
    'extsWebEdited'?: Array<string> | null;
    /**
     * The list of extensions of the encrypted files.
     */
    'extsWebEncrypt'?: Array<string> | null;
    /**
     * The list of extensions of the reviewed files.
     */
    'extsWebReviewed'?: Array<string> | null;
    /**
     * The list of extensions of the custom filter files.
     */
    'extsWebCustomFilterEditing'?: Array<string> | null;
    /**
     * The list of extensions of the files that are restricted for editing.
     */
    'extsWebRestrictedEditing'?: Array<string> | null;
    /**
     * The list of extensions of the commented files.
     */
    'extsWebCommented'?: Array<string> | null;
    /**
     * The list of extensions of the template files.
     */
    'extsWebTemplate'?: Array<string> | null;
    /**
     * The list of extensions of the files that must be converted.
     */
    'extsMustConvert'?: Array<string> | null;
    /**
     * The list of the convertible extensions.
     */
    'extsConvertible'?: { [key: string]: Array<string> | null; } | null;
    /**
     * The list of the uploadable extensions.
     */
    'extsUploadable'?: Array<string> | null;
    /**
     * The list of extensions of the archive files.
     */
    'extsArchive'?: Array<string> | null;
    /**
     * The list of the video extensions.
     */
    'extsVideo'?: Array<string> | null;
    /**
     * The list of the audio extensions.
     */
    'extsAudio'?: Array<string> | null;
    /**
     * The list of the image extensions.
     */
    'extsImage'?: Array<string> | null;
    /**
     * The list of the spreadsheet extensions.
     */
    'extsSpreadsheet'?: Array<string> | null;
    /**
     * The list of the presentation extensions.
     */
    'extsPresentation'?: Array<string> | null;
    /**
     * The list of the text document extensions.
     */
    'extsDocument'?: Array<string> | null;
    /**
     * The list of the diagram extensions.
     */
    'extsDiagram'?: Array<string> | null;
    'internalFormats'?: FilesSettingsDtoInternalFormats | null;
    /**
     * The master form extension.
     */
    'masterFormExtension'?: string | null;
    /**
     * The URL parameter which specifies the file version.
     */
    'paramVersion'?: string | null;
    /**
     * The URL parameter which specifies the output type of the converted file.
     */
    'paramOutType'?: string | null;
    /**
     * The URL to download a file.
     */
    'fileDownloadUrlString'?: string | null;
    /**
     * The URL to the file web viewer.
     */
    'fileWebViewerUrlString'?: string | null;
    /**
     * The external URL to the file web viewer.
     */
    'fileWebViewerExternalUrlString'?: string | null;
    /**
     * The URL to the file web editor.
     */
    'fileWebEditorUrlString'?: string | null;
    /**
     * The external URL to the file web editor.
     */
    'fileWebEditorExternalUrlString'?: string | null;
    /**
     * The redirect URL to the file viewer.
     */
    'fileRedirectPreviewUrlString'?: string | null;
    /**
     * The URL to the file thumbnail.
     */
    'fileThumbnailUrlString'?: string | null;
    /**
     * Specifies whether to confirm the file deletion or not.
     */
    'confirmDelete'?: boolean;
    /**
     * Specifies whether to allow users to connect the third-party storages.
     */
    'enableThirdParty'?: boolean;
    /**
     * Specifies whether to enable sharing external links to the files.
     */
    'externalShare'?: boolean;
    /**
     * Specifies whether to enable sharing files on social media.
     */
    'externalShareSocialMedia'?: boolean;
    /**
     * Specifies whether to enable storing original files.
     */
    'storeOriginalFiles'?: boolean;
    /**
     * Specifies whether to keep the new file name.
     */
    'keepNewFileName'?: boolean;
    /**
     * Specifies whether to display the file extension.
     */
    'displayFileExtension'?: boolean;
    /**
     * Specifies whether to display the conversion notification.
     */
    'convertNotify'?: boolean;
    /**
     * Specifies whether to hide the confirmation dialog for the cancel operation.
     */
    'hideConfirmCancelOperation'?: boolean;
    /**
     * Specifies whether to hide the confirmation dialog  for saving the file copy in the original format when converting a file.
     */
    'hideConfirmConvertSave'?: boolean;
    /**
     * Specifies whether to hide the confirmation dialog  for opening the conversion result.
     */
    'hideConfirmConvertOpen'?: boolean;
    /**
     * Specifies whether to hide the confirmation dialog about the file lifetime in the room.
     */
    'hideConfirmRoomLifetime'?: boolean;
    'defaultOrder'?: OrderBy;
    /**
     * Specifies whether to forcesave the files or not.
     */
    'forcesave'?: boolean;
    /**
     * Specifies whether to store the forcesaved file versions or not.
     */
    'storeForcesave'?: boolean;
    /**
     * Specifies if the Recent section is displayed or not.
     */
    'recentSection'?: boolean;
    /**
     * Specifies if the Favorites section is displayed or not.
     */
    'favoritesSection'?: boolean;
    /**
     * Specifies if the Templates section is displayed or not.
     */
    'templatesSection'?: boolean;
    /**
     * Specifies whether to download the .tar.gz files or not.
     */
    'downloadTarGz'?: boolean;
    'automaticallyCleanUp'?: AutoCleanUpData;
    /**
     * Specifies whether the file can be searched by its content or not.
     */
    'canSearchByContent'?: boolean;
    /**
     * The default access rights in sharing settings.
     */
    'defaultSharingAccessRights'?: Array<FilesSettingsDtoDefaultSharingAccessRightsEnum> | null;
    /**
     * The maximum number of upload threads.
     */
    'maxUploadThreadCount'?: number;
    /**
     * The size of a large file that is uploaded in chunks.
     */
    'chunkUploadSize'?: number;
    /**
     * Specifies whether to open the editor in the same tab or not.
     */
    'openEditorInSameTab'?: boolean;
    /**
     * Specifies whether the grouping of rooms is enabled or not.
     */
    'organizeRoomsGrouping'?: boolean;
    /**
     * List of extensions available for vectorization
     */
    'extsFilesVectorized'?: Array<string> | null;
    /**
     * The maximum file size for vectorization
     */
    'maxVectorizationFileSize'?: number;
}

export const FilesSettingsDtoDefaultSharingAccessRightsEnum = {
    None: 0,
    ReadWrite: 1,
    Read: 2,
    Restrict: 3,
    Varies: 4,
    Review: 5,
    Comment: 6,
    FillForms: 7,
    CustomFilter: 8,
    RoomManager: 9,
    Editing: 10,
    ContentCreator: 11
} as const;

export type FilesSettingsDtoDefaultSharingAccessRightsEnum = typeof FilesSettingsDtoDefaultSharingAccessRightsEnum[keyof typeof FilesSettingsDtoDefaultSharingAccessRightsEnum];


