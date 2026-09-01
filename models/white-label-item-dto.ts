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
import type { WhiteLabelItemPathDto } from './white-label-item-path-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { WhiteLabelItemSizeDto } from './white-label-item-size-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { WhiteLabelLogoType } from './white-label-logo-type';

/**
 * The white label item parameters.
 */
export interface WhiteLabelItemDto {
    /**
     * The white label logo type.
     */
    'type'?: WhiteLabelLogoType;
    /**
     * The white label file name.
     */
    'name'?: string | null;
    /**
     * The white label file size.
     */
    'size'?: WhiteLabelItemSizeDto;
    /**
     * The white label file path.
     */
    'path'?: WhiteLabelItemPathDto;
}



