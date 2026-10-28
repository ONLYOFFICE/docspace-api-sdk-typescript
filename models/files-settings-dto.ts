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

// May contain unused imports in some cases
// @ts-ignore
import type { AutoCleanUpDataDto } from './auto-clean-up-data-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FilesSettingsDtoInternalFormats } from './files-settings-dto-internal-formats';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderByDto } from './order-by-dto';

/**
 * Everything a client needs to work with documents in this portal: the format tables, the address templates, the  upload limits, the portal-wide switches and the preferences of the calling account.
 */
export interface FilesSettingsDto {
    /**
     * Images the portal can show in its own viewer. Anything outside the list has to be downloaded to be seen.
     */
    'extsImagePreviewed'?: Array<string> | null;
    /**
     * Audio and video the portal can play in its own player.
     */
    'extsMediaPreviewed'?: Array<string> | null;
    /**
     * Documents the editor can open read-only. A format that is here but not in the edited list can be viewed and  not changed.
     */
    'extsWebPreviewed'?: Array<string> | null;
    /**
     * Documents the editor can open for editing. Uploading a format outside this list and outside the convertible  list leaves a file that can only be downloaded.
     */
    'extsWebEdited'?: Array<string> | null;
    /**
     * Documents that can be edited inside a private room, where the content is encrypted on the client.
     */
    'extsWebEncrypt'?: Array<string> | null;
    /**
     * Documents that support the reviewing mode, so that granting review access to them is meaningful.
     */
    'extsWebReviewed'?: Array<string> | null;
    /**
     * Spreadsheets that support the custom filter mode, where a filter applied by one editor does not disturb the  others.
     */
    'extsWebCustomFilterEditing'?: Array<string> | null;
    /**
     * Documents that can only be filled in or commented on rather than edited freely, whatever access the caller  holds.
     */
    'extsWebRestrictedEditing'?: Array<string> | null;
    /**
     * Documents that support comments, so that granting comment access to them is meaningful.
     */
    'extsWebCommented'?: Array<string> | null;
    /**
     * Documents the portal treats as templates to create new files from.
     */
    'extsWebTemplate'?: Array<string> | null;
    /**
     * Formats that cannot be edited as they are and are converted on upload or on first opening. Which target each  one has is in the convertible table below.
     */
    'extsMustConvert'?: Array<string> | null;
    /**
     * The conversion map of the portal: for each source extension, the extensions it can be converted into. Use it  to fill the target format of a conversion request instead of guessing one.
     */
    'extsConvertible'?: { [key: string]: Array<string> | null; };
    /**
     * Formats the portal offers to create and upload as documents. It is not an upload filter: files of other  formats are stored as they are.
     */
    'extsUploadable'?: Array<string> | null;
    /**
     * Formats recognised as archives, which is what decides the archive icon and the offer to unpack.
     */
    'extsArchive'?: Array<string> | null;
    /**
     * Formats classified as video. The classification lists drive icons and the media filters of the listing  operations, and are wider than what the built-in player can show.
     */
    'extsVideo'?: Array<string> | null;
    /**
     * Formats classified as audio.
     */
    'extsAudio'?: Array<string> | null;
    /**
     * Formats classified as images.
     */
    'extsImage'?: Array<string> | null;
    /**
     * Formats classified as spreadsheets.
     */
    'extsSpreadsheet'?: Array<string> | null;
    /**
     * Formats classified as presentations.
     */
    'extsPresentation'?: Array<string> | null;
    /**
     * Formats classified as text documents.
     */
    'extsDocument'?: Array<string> | null;
    /**
     * Formats classified as diagrams.
     */
    'extsDiagram'?: Array<string> | null;
    'internalFormats'?: FilesSettingsDtoInternalFormats | null;
    /**
     * The extension of a fillable form template in this portal. It is configurable, so read it rather than assuming  the product default.
     */
    'masterFormExtension'?: string | null;
    /**
     * The name of the query parameter that pins a document address to one version. Append it to the addresses below  instead of composing a version address by hand.
     */
    'paramVersion'?: string | null;
    /**
     * The name of the query parameter that asks a download address for a converted copy in another format.
     */
    'paramOutType'?: string | null;
    /**
     * The template of the address a file is downloaded from: substitute the file identifier for the `{0}`  placeholder. Add the version and output-type parameters named above for a particular version or format.
     */
    'fileDownloadUrlString'?: string | null;
    /**
     * The template of the address that opens a file in the viewer inside the portal, with `{0}` for the file  identifier. It is a portal-relative address, meant to be opened in a browser rather than called as an API.
     */
    'fileWebViewerUrlString'?: string | null;
    /**
     * The same viewer address as an absolute one, for a message or a page outside the portal.
     */
    'fileWebViewerExternalUrlString'?: string | null;
    /**
     * The template of the address that opens a file for editing inside the portal, with `{0}` for the file  identifier. Whether the session really becomes editable still depends on the access the caller holds.
     */
    'fileWebEditorUrlString'?: string | null;
    /**
     * The same editing address as an absolute one, for use outside the portal.
     */
    'fileWebEditorExternalUrlString'?: string | null;
    /**
     * The template of the address that sends the browser on to whichever viewer or editor suits the file, with `{0}`  for the file identifier. Use it when the kind of the file is not known in advance.
     */
    'fileRedirectPreviewUrlString'?: string | null;
    /**
     * The template of the address a file thumbnail is fetched from, with `{0}` for the file identifier. A thumbnail  is built in the background, so the address can answer with nothing for a while after the file appears.
     */
    'fileThumbnailUrlString'?: string | null;
    /**
     * Whether the caller asked to be prompted before a deletion. Written by `PUT api/2.0/files/changedeleteconfrim`.
     */
    'confirmDelete'?: boolean;
    /**
     * Whether this portal allows third-party storages to be connected at all. It is set portal-wide by an  administrator, so a member sees it as read-only.
     */
    'enableThirdParty'?: boolean;
    /**
     * Whether links that open an entry without a portal account may be created in this portal. Set portal-wide by an  administrator.
     */
    'externalShare'?: boolean;
    /**
     * Whether the share-to-network buttons are offered next to an external link. It is reported as false whenever  external sharing itself is off.
     */
    'externalShareSocialMedia'?: boolean;
    /**
     * Whether the caller\'s uploads keep the original file when the portal converts them. With false the conversion  replaces the uploaded file with a new version of it.
     */
    'storeOriginalFiles'?: boolean;
    /**
     * Whether the caller asked for new documents to be created with the default name instead of being prompted for  one.
     */
    'keepNewFileName'?: boolean;
    /**
     * Whether the caller asked to see extensions in file titles. Stored titles always carry the extension whatever  this says.
     */
    'displayFileExtension'?: boolean;
    /**
     * Specifies whether to display the quick action buttons.
     */
    'showQuickActions'?: boolean;
    /**
     * Whether the caller is told about the result of a conversion. There is no operation in this document that  writes it.
     */
    'convertNotify'?: boolean;
    /**
     * Whether the prompt shown before a running operation is abandoned is hidden for the caller.
     */
    'hideConfirmCancelOperation'?: boolean;
    /**
     * Whether the prompt that offers to keep a copy in the original format on conversion is hidden for the caller.  Once true it cannot be turned back through the API.
     */
    'hideConfirmConvertSave'?: boolean;
    /**
     * Whether the prompt that offers to open the conversion result is hidden for the caller. Once true it cannot be  turned back through the API.
     */
    'hideConfirmConvertOpen'?: boolean;
    /**
     * Whether the warning shown before the lifetime settings of a room are changed is hidden for the caller.
     */
    'hideConfirmRoomLifetime'?: boolean;
    /**
     * The ordering the listing operations fall back to when a request names none. It follows the last order the  caller asked a listing for, so it changes on its own as the account is used.
     */
    'defaultOrder'?: OrderByDto;
    /**
     * Whether the editor writes a document back to storage while the session is still open. It is on for every  portal and cannot be switched off.
     */
    'forcesave'?: boolean;
    /**
     * Whether those intermediate saves are kept as separate versions. They are not, in any portal: they update the  current version instead.
     */
    'storeForcesave'?: boolean;
    /**
     * Whether the Recent section is offered to the caller among the section roots.
     */
    'recentSection'?: boolean;
    /**
     * Whether the Favorites section is offered to the caller among the section roots.
     */
    'favoritesSection'?: boolean;
    /**
     * Whether the Templates section is offered to the caller among the section roots.
     */
    'templatesSection'?: boolean;
    /**
     * The archive format the caller\'s multi-item downloads are packed into: true for `.tar.gz`, false for `.zip`.
     */
    'downloadTarGz'?: boolean;
    /**
     * The trash auto-clearing setting of the caller, the same pair `GET api/2.0/files/settings/autocleanup` returns.
     */
    'automaticallyCleanUp'?: AutoCleanUpDataDto;
    /**
     * Whether documents in this portal can be searched by what is inside them and not only by title. It depends on  the full-text search service being configured and having indexed the portal.
     */
    'canSearchByContent'?: boolean;
    /**
     * The access rights the sharing dialog offers the caller by default. The portal normalises the set it stores, so  this can be shorter than what was last sent.
     */
    'defaultSharingAccessRights'?: Array<FilesSettingsDtoDefaultSharingAccessRightsEnum> | null;
    /**
     * How many upload requests the portal accepts from one account at a time. Sending more than this in parallel  gets the extra ones refused rather than queued.
     */
    'maxUploadThreadCount'?: number;
    /**
     * The size in bytes of one chunk of a chunked upload. Split a large file exactly along this size: a chunk that  does not match is refused by the upload session.
     */
    'chunkUploadSize'?: number;
    /**
     * Whether the caller asked for documents to open in the current browser tab.
     */
    'openEditorInSameTab'?: boolean;
    /**
     * Whether the caller asked to see rooms arranged by the groups they belong to.
     */
    'organizeRoomsGrouping'?: boolean;
    /**
     * The kind of external link this portal offers first: true for a link only its own accounts can open, false for  one anyone holding it can open.
     */
    'defaultShareLinkInternal'?: boolean;
    /**
     * Whether the external sharing restriction covers personal documents. It matters only while external sharing is  off.
     */
    'externalShareApplyToDocuments'?: boolean;
    /**
     * Whether the external sharing restriction covers rooms, including making a new one public. It matters only  while external sharing is off.
     */
    'externalShareApplyToRooms'?: boolean;
    /**
     * Whether links created before the restriction stop opening as well, rather than only new ones being refused.
     */
    'blockExistingLinksOnRestrict'?: boolean;
    /**
     * Formats whose content can be indexed for the AI features of the portal. A file outside the list is left out of  that index.
     */
    'extsFilesVectorized'?: Array<string> | null;
    /**
     * The largest file size in bytes that is indexed for the AI features. A larger file is skipped even when its  format is listed above.
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
    ContentCreator: 11,
} as const;

export type FilesSettingsDtoDefaultSharingAccessRightsEnum = typeof FilesSettingsDtoDefaultSharingAccessRightsEnum[keyof typeof FilesSettingsDtoDefaultSharingAccessRightsEnum];


