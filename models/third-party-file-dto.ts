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
import type { AiFileEntryDtoAllOfAvailableShareRights } from './ai-file-entry-dto-all-of-available-share-rights';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryDtoAllOfSecurity } from './ai-file-entry-dto-all-of-security';
// May contain unused imports in some cases
// @ts-ignore
import type { AiFileEntryDtoAllOfShareSettings } from './ai-file-entry-dto-all-of-share-settings';
// May contain unused imports in some cases
// @ts-ignore
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { FileDtoAllOfViewAccessibility } from './file-dto-all-of-view-accessibility';
// May contain unused imports in some cases
// @ts-ignore
import type { FileEntryType } from './file-entry-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FileShare } from './file-share';
// May contain unused imports in some cases
// @ts-ignore
import type { FileStatus } from './file-status';
// May contain unused imports in some cases
// @ts-ignore
import type { FileType } from './file-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FolderType } from './folder-type';
// May contain unused imports in some cases
// @ts-ignore
import type { FormFillingStatus } from './form-filling-status';
// May contain unused imports in some cases
// @ts-ignore
import type { Size } from './size';
// May contain unused imports in some cases
// @ts-ignore
import type { ThirdPartyDraftLocation } from './third-party-draft-location';
// May contain unused imports in some cases
// @ts-ignore
import type { ThirdPartyFileEntryDto } from './third-party-file-entry-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { Thumbnail } from './thumbnail';
// May contain unused imports in some cases
// @ts-ignore
import type { VectorizationStatus } from './vectorization-status';

/**
 * @type ThirdPartyFileDto
 * A stored file as the calling account sees it: where it lives, which revision this is, how it can be opened and  what the portal is currently doing with it.
 * @export
 */
export type ThirdPartyFileDto = ThirdPartyFileEntryDto &  {
    /**
     * The folder the file is stored in. When the file was reached through a share and the caller cannot open its  real parent, the identifier of the Shared with me section is reported instead, so this is where the file is  visible rather than where it physically sits.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'folderId'?: string | null;
    /**
     * The revision this entry describes. It starts at 1 and moves to the next number each time new content is stored  over the file, except for an editing session opened against the file itself, which replaces the content and  keeps the number. `GET api/2.0/files/file/{fileId}/history` lists them all.
     * @type {number}
     * @memberof ThirdPartyFileDto
     */
    'version'?: number;
    /**
     * Groups revisions that belong together, which is how a history can fold a long editing session into one entry:  versions saved inside one session share this number, and an upload over the file starts a new group.
     * @type {number}
     * @memberof ThirdPartyFileDto
     */
    'versionGroup'?: number;
    /**
     * The size already formatted for display, with a unit and the separators of the caller\'s language. Read  `pureContentLength` for a number to calculate with.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'contentLength'?: string | null;
    /**
     * The size of the stored content in bytes, and null for an empty file.
     * @type {number}
     * @memberof ThirdPartyFileDto
     */
    'pureContentLength'?: number | null;
    /**
     * What the portal is currently doing with the file and how the caller stands towards it - open in the editor,  unread, being converted, and so on. The value is a bit mask that combines those states, so a file can report a  number that matches none of the published members on its own.
     * @type {FileStatus}
     * @memberof ThirdPartyFileDto
     */
    'fileStatus'?: FileStatus;
    /**
     * The accounts that have the file open in the editor at this moment, as account identifier to display name, and  empty when nobody has. The all-zero identifier stands for people who came in through an external link without  signing in, and its name carries their number in brackets when there is more than one.
     * @type {{ [key: string]: string | null; }}
     * @memberof ThirdPartyFileDto
     */
    'editingBy'?: { [key: string]: string | null; };
    /**
     * Not a property of the file at all: it repeats, inverted, the calling account\'s own switch for new-item badges,  so it is the same in every entry of one answer. True means that account has badges turned off.
     * @type {boolean}
     * @memberof ThirdPartyFileDto
     */
    'mute'?: boolean;
    /**
     * The address that returns the bytes of the file - a download, in spite of the name; `webUrl` is the address a  person opens. When the file was reached through an external link the address carries the key of that link, so  it keeps working without signing in.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'viewUrl'?: string | null;
    /**
     * The page that opens the file in a browser: the editor for a format the portal edits, the media viewer for  pictures, audio and video, and the download address for a format it cannot show at all.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'webUrl'?: string | null;
    /**
     * The broad kind of content, worked out from the extension, which is what a client uses to pick an icon or a  viewer without parsing `fileExst` itself.
     * @type {FileType}
     * @memberof ThirdPartyFileDto
     */
    'fileType'?: FileType;
    /**
     * The extension of the stored file, leading dot included and always lower case. For a format the portal keeps in  a converted shape this is the extension it is served under, not the one it was uploaded with.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'fileExst'?: string | null;
    /**
     * The note kept with this revision. The portal writes it itself for revisions it creates, an upload over an  existing file among them, and an editor stores the note a person typed when saving a version.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'comment'?: string | null;
    /**
     * True for a file in a private room, whose content the server never sees and which therefore cannot be converted  or taken over by an upload. Null, rather than false, for an ordinary file.
     * @type {boolean}
     * @memberof ThirdPartyFileDto
     */
    'encrypted'?: boolean | null;
    /**
     * The address of the generated preview image. It is filled in only while `thumbnailStatus` says the preview has  been created, and it carries a suffix that changes with the file, so an image cached for an earlier revision  is not reused.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'thumbnailUrl'?: string | null;
    /**
     * How far the preview image has got. Only the created state means `thumbnailUrl` holds an address; the others  mean there is none, either because it is still being produced or because this format has no preview.
     * @type {Thumbnail}
     * @memberof ThirdPartyFileDto
     */
    'thumbnailStatus'?: Thumbnail;
    /**
     * True while the file is held under a lock that stops anyone but its holder from editing it, and null rather  than false when there is no lock. `lockedBy` names the holder unless the caller is the holder.
     * @type {boolean}
     * @memberof ThirdPartyFileDto
     */
    'locked'?: boolean | null;
    /**
     * The display name of the account holding the lock, and null when the caller holds it - so `locked` true  together with no name here means the lock is the caller\'s own.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'lockedBy'?: string | null;
    /**
     * For a fillable PDF form, whether the caller already has a filling draft of it, in which case `draftLocation`  says where that draft lives. Null for anything that is not a form.
     * @type {boolean}
     * @memberof ThirdPartyFileDto
     */
    'hasDraft'?: boolean | null;
    /**
     * How far the filling of this form has got for the calling account, and whose turn it is now. It is worked out  only inside a virtual data room, where filling runs in steps; everywhere else it stays at the none value.
     * @type {FormFillingStatus}
     * @memberof ThirdPartyFileDto
     */
    'formFillingStatus'?: FormFillingStatus;
    /**
     * Whether the file is a PDF, and so offered as a fillable form. It is null for any other file type.
     * @type {boolean}
     * @memberof ThirdPartyFileDto
     */
    'isForm'?: boolean | null;
    /**
     * True while a spreadsheet is in the mode where each person sorts and filters their own view without changing  what the others see, and null rather than false when it is not.
     * @type {boolean}
     * @memberof ThirdPartyFileDto
     */
    'customFilterEnabled'?: boolean | null;
    /**
     * The display name of the account that turned that mode on, and null when the caller turned it on themselves.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'customFilterEnabledBy'?: string | null;
    /**
     * For a form in a room for filling, whether it has been released for filling; until then it is still being  prepared and only the people running the room work with it. Null for a file this does not apply to.
     * @type {boolean}
     * @memberof ThirdPartyFileDto
     */
    'startFilling'?: boolean | null;
    /**
     * True during the short window in which a released form is still being written out by the editor. Neither  filling nor editing is accepted while it lasts, so a client should wait and read the file again.
     * @type {boolean}
     * @memberof ThirdPartyFileDto
     */
    'isFillingPreparing'?: boolean | null;
    /**
     * Left empty by the portal: the folder holding the caller\'s draft is reported in `draftLocation` instead.
     * @type {number}
     * @memberof ThirdPartyFileDto
     */
    'inProcessFolderId'?: number | null;
    /**
     * Left empty by the portal, like the identifier beside it; the draft\'s folder is named in `draftLocation`.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'inProcessFolderTitle'?: string | null;
    /**
     * The folder that collects the completed copies of this form. It is filled in only for the original form of a  room for filling, and only for a caller allowed to work with that form; null everywhere else.
     * @type {number}
     * @memberof ThirdPartyFileDto
     */
    'resultsFolderId'?: number | null;
    /**
     * Where the caller\'s own filling draft of this form is kept. Null when there is no draft yet, which is the same  thing `hasDraft` reports.
     * @type {ThirdPartyDraftLocation}
     * @memberof ThirdPartyFileDto
     */
    'draftLocation'?: ThirdPartyDraftLocation;
    /**
     * 
     * @type {FileDtoAllOfViewAccessibility}
     * @memberof ThirdPartyFileDto
     */
    'viewAccessibility'?: FileDtoAllOfViewAccessibility | null;
    /**
     * The moment the caller last opened the file. It is kept per account and is what orders the Recent section, so  it is null for a file this account has never opened. Written with the offset of the portal\'s time zone.
     * @type {ApiDateTime}
     * @memberof ThirdPartyFileDto
     */
    'lastOpened'?: ApiDateTime;
    /**
     * The moment the file falls under the lifetime rule of the room holding it and is removed. It is counted from  the first revision rather than the latest one, so editing a file does not postpone it, and it is null when the  room sets no lifetime. Written with the offset of the portal\'s time zone.
     * @type {ApiDateTime}
     * @memberof ThirdPartyFileDto
     */
    'expired'?: ApiDateTime;
    /**
     * How far the indexing of the file\'s content for AI search has got. It is null for a file that has never been  queued for indexing, which is every file while the feature is off for the portal.
     * @type {VectorizationStatus}
     * @memberof ThirdPartyFileDto
     */
    'vectorizationStatus'?: VectorizationStatus;
    /**
     * The table collecting the submitted values of this form in the external database configured for its room. The  field is left out of the answer entirely when the form has no such table.
     * @type {string}
     * @memberof ThirdPartyFileDto
     */
    'externalDbTableName'?: string | null;
    /**
     * The pixel size of the picture, measured by reading the stored file rather than taken from any stored metadata.  Null for anything that is not a picture the portal can show, and also when the file could not be read.
     * @type {Size}
     * @memberof ThirdPartyFileDto
     */
    'dimensions'?: Size;
};


