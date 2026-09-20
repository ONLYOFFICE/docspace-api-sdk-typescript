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


/**
 * The blank document configured for one extension.
 */
export interface DefaultTemplateItemDto {
    /**
     * The copy stored in the portal that serves as the blank for this extension. A null means no custom blank has  been chosen and new documents start from the portal\'s built-in one; the other fields of the entry are then  empty as well.
     */
    'selectedFile'?: number | null;
    /**
     * The extension the entry describes, in lower case with the leading dot. It is the value to send back when this  blank is replaced or reset.
     */
    'fileExtension': string | null;
    /**
     * The name the custom blank was copied under, useful for showing which document was chosen. Empty while the  built-in blank is in use.
     */
    'fileTitle'?: string | null;
    /**
     * When the custom blank was last changed, in the time zone of the portal. Null while the built-in blank is in  use.
     */
    'lastModified'?: string | null;
    /**
     * The size of the custom blank in bytes. Null while the built-in blank is in use.
     */
    'fileSize'?: number | null;
    /**
     * The address the custom blank can be downloaded from, already carrying the access key of the calling account.  Empty while the built-in blank is in use.
     */
    'viewUrl'?: string | null;
}

