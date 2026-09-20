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
 * The parameters of one file conversion.
 */
export interface ThirdPartyCheckConversionRequestDto {
    /**
     * The file to convert. It is taken from the route of the operation, so a value sent in the body is overwritten.
     */
    'fileId'?: string | null;
    /**
     * How to wait for the result: `true` converts inside the request and answers with the finished result, which is  only sensible for small documents, while `false` queues the conversion and answers with an entry to poll.
     */
    'sync'?: boolean;
    /**
     * Whether the conversion is to be started. It is set by the operation itself, so a value sent in the body is  overwritten.
     */
    'startConvert'?: boolean;
    /**
     * The version to convert; 0 or less means the current version.
     */
    'version'?: number;
    /**
     * The password that opens the source document, for a file that is protected by one; anything else may be left  out.
     */
    'password'?: string | null;
    /**
     * The extension of the format to convert into, without the dot, and one the portal can produce from that  source format; left out, the default of the portal for that kind of document is used.
     */
    'outputType'?: string | null;
    /**
     * Where the result goes when the file has been converted before: `true` creates another file beside the source,  `false` replaces the converted file that already exists.
     */
    'createNewIfExist'?: boolean;
}

