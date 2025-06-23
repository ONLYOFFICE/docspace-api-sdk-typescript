// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

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
 * @export
 * @interface FilesSettingsDto
 */
export interface FilesSettingsDto {
    /**
     * The list of extensions of the viewed images.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsImagePreviewed'?: Array<string> | null;
    /**
     * The list of extensions of the viewed media files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsMediaPreviewed'?: Array<string> | null;
    /**
     * The list of extensions of the viewed files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsWebPreviewed'?: Array<string> | null;
    /**
     * The list of extensions of the edited files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsWebEdited'?: Array<string> | null;
    /**
     * The list of extensions of the encrypted files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsWebEncrypt'?: Array<string> | null;
    /**
     * The list of extensions of the reviewed files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsWebReviewed'?: Array<string> | null;
    /**
     * The list of extensions of the custom filter files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsWebCustomFilterEditing'?: Array<string> | null;
    /**
     * The list of extensions of the files that are restricted for editing.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsWebRestrictedEditing'?: Array<string> | null;
    /**
     * The list of extensions of the commented files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsWebCommented'?: Array<string> | null;
    /**
     * The list of extensions of the template files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsWebTemplate'?: Array<string> | null;
    /**
     * The list of extensions of the co-authoring files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsCoAuthoring'?: Array<string> | null;
    /**
     * The list of extensions of the files that must be converted.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsMustConvert'?: Array<string> | null;
    /**
     * The list of the convertible extensions.
     * @type {{ [key: string]: Array<string> | null; }}
     * @memberof FilesSettingsDto
     */
    'extsConvertible'?: { [key: string]: Array<string> | null; } | null;
    /**
     * The list of the uploadable extensions.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsUploadable'?: Array<string> | null;
    /**
     * The list of extensions of the archive files.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsArchive'?: Array<string> | null;
    /**
     * The list of the video extensions.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsVideo'?: Array<string> | null;
    /**
     * The list of the audio extensions.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsAudio'?: Array<string> | null;
    /**
     * The list of the image extensions.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsImage'?: Array<string> | null;
    /**
     * The list of the spreadsheet extensions.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsSpreadsheet'?: Array<string> | null;
    /**
     * The list of the presentation extensions.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsPresentation'?: Array<string> | null;
    /**
     * The list of the text document extensions.
     * @type {Array<string>}
     * @memberof FilesSettingsDto
     */
    'extsDocument'?: Array<string> | null;
    /**
     * 
     * @type {FilesSettingsDtoInternalFormats}
     * @memberof FilesSettingsDto
     */
    'internalFormats'?: FilesSettingsDtoInternalFormats | null;
    /**
     * The master form extension.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'masterFormExtension'?: string | null;
    /**
     * The URL parameter which specifies the file version.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'paramVersion'?: string | null;
    /**
     * The URL parameter which specifies the output type of the converted file.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'paramOutType'?: string | null;
    /**
     * The URL to download a file.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'fileDownloadUrlString'?: string | null;
    /**
     * The URL to the file web viewer.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'fileWebViewerUrlString'?: string | null;
    /**
     * The external URL to the file web viewer.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'fileWebViewerExternalUrlString'?: string | null;
    /**
     * The URL to the file web editor.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'fileWebEditorUrlString'?: string | null;
    /**
     * The external URL to the file web editor.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'fileWebEditorExternalUrlString'?: string | null;
    /**
     * The redirect URL to the file viewer.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'fileRedirectPreviewUrlString'?: string | null;
    /**
     * The URL to the file thumbnail.
     * @type {string}
     * @memberof FilesSettingsDto
     */
    'fileThumbnailUrlString'?: string | null;
    /**
     * Specifies whether to confirm the file deletion or not.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'confirmDelete'?: boolean;
    /**
     * Specifies whether to allow users to connect the third-party storages.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'enableThirdParty'?: boolean;
    /**
     * Specifies whether to enable sharing external links to the files.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'externalShare'?: boolean;
    /**
     * Specifies whether to enable sharing files on social media.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'externalShareSocialMedia'?: boolean;
    /**
     * Specifies whether to enable storing original files.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'storeOriginalFiles'?: boolean;
    /**
     * Specifies whether to keep the new file name.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'keepNewFileName'?: boolean;
    /**
     * Specifies whether to display the file extension.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'displayFileExtension'?: boolean;
    /**
     * Specifies whether to display the conversion notification.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'convertNotify'?: boolean;
    /**
     * Specifies whether to hide the confirmation dialog for the cancel operation.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'hideConfirmCancelOperation'?: boolean;
    /**
     * Specifies whether to hide the confirmation dialog  for saving the file copy in the original format when converting a file.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'hideConfirmConvertSave'?: boolean;
    /**
     * Specifies whether to hide the confirmation dialog  for opening the conversion result.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'hideConfirmConvertOpen'?: boolean;
    /**
     * Specifies whether to hide the confirmation dialog about the file lifetime in the room.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'hideConfirmRoomLifetime'?: boolean;
    /**
     * 
     * @type {OrderBy}
     * @memberof FilesSettingsDto
     */
    'defaultOrder'?: OrderBy;
    /**
     * Specifies whether to forcesave the files or not.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'forcesave'?: boolean;
    /**
     * Specifies whether to store the forcesaved file versions or not.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'storeForcesave'?: boolean;
    /**
     * Specifies if the \"Recent\" section is displayed or not.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'recentSection'?: boolean;
    /**
     * Specifies if the \"Favorites\" section is displayed or not.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'favoritesSection'?: boolean;
    /**
     * Specifies if the \"Templates\" section is displayed or not.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'templatesSection'?: boolean;
    /**
     * Specifies whether to download the .tar.gz files or not.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'downloadTarGz'?: boolean;
    /**
     * 
     * @type {AutoCleanUpData}
     * @memberof FilesSettingsDto
     */
    'automaticallyCleanUp'?: AutoCleanUpData;
    /**
     * Specifies whether the file can be searched by its content or not.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'canSearchByContent'?: boolean;
    /**
     * The default access rights in sharing settings.
     * @type {Array<number>}
     * @memberof FilesSettingsDto
     */
    'defaultSharingAccessRights'?: Array<FilesSettingsDtoDefaultSharingAccessRightsEnum> | null;
    /**
     * The maximum number of upload threads.
     * @type {number}
     * @memberof FilesSettingsDto
     */
    'maxUploadThreadCount'?: number;
    /**
     * The size of a large file that is uploaded in chunks.
     * @type {number}
     * @memberof FilesSettingsDto
     */
    'chunkUploadSize'?: number;
    /**
     * Specifies whether to open the editor in the same tab or not.
     * @type {boolean}
     * @memberof FilesSettingsDto
     */
    'openEditorInSameTab'?: boolean;
}

export const FilesSettingsDtoDefaultSharingAccessRightsEnum = {
    /**
    * None
    */
    None: 0,
    /**
    * Read and write
    */
    ReadWrite: 1,
    /**
    * Read
    */
    Read: 2,
    /**
    * Restrict
    */
    Restrict: 3,
    /**
    * Varies
    */
    Varies: 4,
    /**
    * Review
    */
    Review: 5,
    /**
    * Comment
    */
    Comment: 6,
    /**
    * Fill forms
    */
    FillForms: 7,
    /**
    * Custom filter
    */
    CustomFilter: 8,
    /**
    * Room manager
    */
    RoomManager: 9,
    /**
    * Editing
    */
    Editing: 10,
    /**
    * Content creator
    */
    ContentCreator: 11
} as const;

export type FilesSettingsDtoDefaultSharingAccessRightsEnum = typeof FilesSettingsDtoDefaultSharingAccessRightsEnum[keyof typeof FilesSettingsDtoDefaultSharingAccessRightsEnum];


