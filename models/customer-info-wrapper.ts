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
import type { CustomerInfoDto } from './customer-info-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { GetPortalPrices200ResponseLinksInner } from './get-portal-prices200-response-links-inner';

export interface CustomerInfoWrapper {
    'response'?: CustomerInfoDto;
    'count'?: number;
    'links'?: Array<GetPortalPrices200ResponseLinksInner>;
    'status'?: number;
    'statusCode'?: number;
}

