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
 * Where the caller\'s own filling draft of a form is kept.
 */
export interface ThirdPartyDraftLocation {
    /**
     * The folder holding the draft: the sub-folder that the room for filling keeps for drafts of this particular  form.
     */
    'folderId'?: string | null;
    /**
     * The title of that folder, which the portal takes from the form itself when the form is released for filling.
     */
    'folderTitle'?: string | null;
    /**
     * The draft itself - the copy the caller fills in, not the original form, and the identifier to pass to the file  operations while filling.
     */
    'fileId'?: string | null;
    /**
     * The title of the draft, which the portal builds from the name of the person filling it and the name of the  form. Null when the draft the record points at no longer exists.
     */
    'fileTitle'?: string | null;
}

