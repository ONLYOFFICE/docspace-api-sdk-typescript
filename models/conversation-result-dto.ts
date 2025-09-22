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
import type { FileOperationType } from './file-operation-type';

/**
 * The result of file convertion operation.
 * @export
 * @interface ConversationResultDto
 */
export interface ConversationResultDto {
    /**
     * The conversion operation ID.
     * @type {string}
     * @memberof ConversationResultDto
     */
    'id': string | null;
    /**
     * 
     * @type {FileOperationType}
     * @memberof ConversationResultDto
     */
    'Operation': FileOperationType;
    /**
     * The conversion operation progress.
     * @type {number}
     * @memberof ConversationResultDto
     */
    'progress': number;
    /**
     * The source file for the conversion.
     * @type {string}
     * @memberof ConversationResultDto
     */
    'source'?: string | null;
    /**
     * The resulting file after the conversion.
     * @type {any}
     * @memberof ConversationResultDto
     */
    'result'?: any | null;
    /**
     * The conversion operation error message.
     * @type {string}
     * @memberof ConversationResultDto
     */
    'error'?: string | null;
    /**
     * Specifies if the conversion operation is processed or not.
     * @type {string}
     * @memberof ConversationResultDto
     */
    'processed'?: string | null;
}



