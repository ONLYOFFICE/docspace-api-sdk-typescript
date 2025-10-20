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
 * The request parameters for the payment URL configuration with quantity information.
 * @export
 * @interface PaymentUrlRequestsDto
 */
export interface PaymentUrlRequestsDto {
    /**
     * The URL where the user will be redirected after payment processing.
     * @type {string}
     * @memberof PaymentUrlRequestsDto
     */
    'backUrl'?: string | null;
    /**
     * The payment quantity.
     * @type {{ [key: string]: number; }}
     * @memberof PaymentUrlRequestsDto
     */
    'quantity'?: { [key: string]: number; } | null;
}

