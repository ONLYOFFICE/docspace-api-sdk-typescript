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
 * One currency the portal\'s subscription prices can be quoted in, with the region it belongs to.
 */
export interface CurrenciesDto {
    /**
     * The two-letter ISO code of the country the currency is that of, which is the region the price list was  picked for rather than the country of the caller.
     */
    'isoCountryCode'?: string | null;
    /**
     * The three-letter ISO 4217 code of the currency. On the first item of the answer it is the currency the  amounts from `GET api/2.0/portal/payment/prices` are expressed in.
     */
    'isoCurrencySymbol'?: string | null;
    /**
     * The currency name in the language of its own region - not in the portal language, and not a symbol.
     */
    'currencyNativeName'?: string | null;
}

