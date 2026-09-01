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

// May contain unused imports in some cases
// @ts-ignore
import type { OperationType } from './operation-type';

/**
 * Represents an operation.
 */
export interface OperationDto {
    /**
     * The date when the operation took place.
     */
    'date'?: string | null;
    /**
     * The service related to the operation.
     */
    'service'?: string | null;
    /**
     * The brief operation description.
     */
    'description'?: string | null;
    /**
     * The detailed information about the operation.
     */
    'details'?: string | null;
    /**
     * The service unit.
     */
    'serviceUnit'?: string | null;
    /**
     * The quantity of the service used.
     */
    'quantity'?: number;
    /**
     * The three-character ISO 4217 currency symbol of the operation.
     */
    'currency'?: string | null;
    /**
     * The credit amount of the operation.
     */
    'credit'?: number;
    /**
     * The debit amount of the operation.
     */
    'debit'?: number;
    /**
     * The participant original name.
     */
    'participantName'?: string | null;
    /**
     * The participant display name.
     */
    'participantDisplayName'?: string | null;
    /**
     * AI Agent id.
     */
    'agentId'?: string | null;
    /**
     * AI Agent name.
     */
    'agentTitle'?: string | null;
    /**
     * Type of the operation
     */
    'type'?: OperationType;
}



