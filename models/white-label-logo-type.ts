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
 * [1 - Light small, 2 - Login page, 3 - Favicon, 4 - Docs editor, 5 - Docs editor embed, 6 - Left menu, 7 - About page, 8 - Notification, 9 - Spreadsheet editor, 10 - Spreadsheet editor embed, 11 - Presentation editor, 12 - Presentation editor embed, 13 - Pdf editor, 14 - Pdf editor embed, 15 - Diagram editor, 16 - Diagram editor embed]
 */

export const WhiteLabelLogoType = {
    LightSmall: 1,
    LoginPage: 2,
    Favicon: 3,
    DocsEditor: 4,
    DocsEditorEmbed: 5,
    LeftMenu: 6,
    AboutPage: 7,
    Notification: 8,
    SpreadsheetEditor: 9,
    SpreadsheetEditorEmbed: 10,
    PresentationEditor: 11,
    PresentationEditorEmbed: 12,
    PdfEditor: 13,
    PdfEditorEmbed: 14,
    DiagramEditor: 15,
    DiagramEditorEmbed: 16
} as const;

export type WhiteLabelLogoType = typeof WhiteLabelLogoType[keyof typeof WhiteLabelLogoType];



