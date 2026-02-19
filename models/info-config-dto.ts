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
import type { AceShortWrapper } from './ace-short-wrapper';
// May contain unused imports in some cases
// @ts-ignore
import type { EditorType } from './editor-type';

/**
 * The information config parameters.
 */
export interface InfoConfigDto {
    /**
     * Specifies if the file is favorite or not.
     */
    'favorite'?: boolean;
    /**
     * The folder of the file.
     */
    'folder'?: string;
    /**
     * The file owner.
     */
    'owner'?: string;
    /**
     * The sharing settings of the file.
     */
    'sharingSettings'?: Array<AceShortWrapper>;
    'type'?: EditorType;
    /**
     * The uploaded file.
     */
    'uploaded'?: string;
}



