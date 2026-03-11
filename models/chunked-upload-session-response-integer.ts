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
 * Represents the response returned from a chunked upload session.
 */
export interface ChunkedUploadSessionResponseInteger {
    /**
     * The unique identifier for the entity.
     */
    'id'?: string | null;
    /**
     * Represents the hierarchical path of folders associated with a chunked upload session.
     */
    'path'?: Array<number> | null;
    /**
     * The timestamp indicating when the chunked upload session was created.
     */
    'created'?: string;
    /**
     * The date and time when the chunked upload session is set to expire.
     */
    'expired'?: string;
    /**
     * Represents the URI or path of the chunked upload session\'s current location.
     */
    'location'?: string | null;
    /**
     * The total size, in bytes, of the file being uploaded in the chunked upload session.
     */
    'bytes_total'?: number;
}

