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


/**
 * The request parameters for tracking SMTP (Simple Mail Transfer Protocol) operation status.
 * @export
 * @interface SmtpOperationStatusRequestsDto
 */
export interface SmtpOperationStatusRequestsDto {
    /**
     * Specifies whether the SMTP operation has finished processing.
     * @type {boolean}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'completed'?: boolean;
    /**
     * The unique identifier for tracking the SMTP operation.
     * @type {string}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'id'?: string | null;
    /**
     * The error message if the SMTP operation encountered issues.
     * @type {string}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'error'?: string | null;
    /**
     * The current state of the SMTP operation.
     * @type {string}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'status'?: string | null;
    /**
     * The progress indicator showing completion percentage of the operation.
     * @type {number}
     * @memberof SmtpOperationStatusRequestsDto
     */
    'percents'?: number;
}

