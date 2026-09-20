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
import type { FieldError } from './field-error';

/**
 * RFC 7807 problem details returned by the registration API for failed requests.
 */
export interface ProblemDetail {
    /**
     * A URI reference that identifies the problem type. This service sets it to the DocSpace API getting-started page.
     */
    'type'?: string;
    /**
     * A short, human-readable summary of the problem type, typically the HTTP status reason phrase.
     */
    'title'?: string;
    /**
     * The HTTP status code for this occurrence of the problem.
     */
    'status'?: number;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    'detail'?: string;
    /**
     * A URI reference that identifies the specific occurrence, set to the request path.
     */
    'instance'?: string;
    /**
     * Extension members carried on the problem. Usually empty; validation failures also surface as the top-level errors array.
     */
    'properties'?: { [key: string]: any | null; };
    /**
     * Field-specific validation errors. Present when the request body or parameters failed validation, or when a named scope is not in the tenant catalogue.
     */
    'errors'?: Array<FieldError>;
}

