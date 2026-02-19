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
import type { FileOperationType } from './file-operation-type';

/**
 * The result of file convertion operation.
 */
export interface ConversationResultDto {
    /**
     * The conversion operation ID.
     */
    'id': string;
    'Operation': FileOperationType;
    /**
     * The conversion operation progress.
     */
    'progress': number;
    /**
     * The source file for the conversion.
     */
    'source'?: string;
    'result'?: any;
    /**
     * The conversion operation error message.
     */
    'error'?: string;
    /**
     * Specifies if the conversion operation is processed or not.
     */
    'processed'?: string;
}



