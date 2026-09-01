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
 * The CDN storage settings.
 */
export interface CdnStorageSettings {
    /**
     * The storage name.
     */
    'module'?: string | null;
    /**
     * The storage properties.
     */
    'props'?: { [key: string]: string | null; };
    /**
     * The date and time when the storage settings were last modified.
     */
    'lastModified'?: string;
}

