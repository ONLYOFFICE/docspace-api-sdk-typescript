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
import type { AxiosError } from 'axios';

export class DocSpaceApiError extends Error {
    readonly hresult: number | undefined;
    readonly statusCode: number | undefined;
    readonly apiStack: string | undefined;

    constructor(message: string, options?: { hresult?: number; statusCode?: number; apiStack?: string }) {
        super(message);
        Object.setPrototypeOf(this, DocSpaceApiError.prototype);
        this.name = 'DocSpaceApiError';
        this.hresult = options?.hresult;
        this.statusCode = options?.statusCode;
        this.apiStack = options?.apiStack;
    }

    static fromAxiosError(error: AxiosError): DocSpaceApiError {
        const data = error.response?.data as any;
        const apiError = data?.error;
        return new DocSpaceApiError(
            apiError?.message ?? error.message,
            {
                hresult: apiError?.hresult,
                statusCode: error.response?.status,
                apiStack: apiError?.stack,
            }
        );
    }

    static isDocSpaceApiError(error: unknown): error is DocSpaceApiError {
        return error instanceof DocSpaceApiError;
    }
}