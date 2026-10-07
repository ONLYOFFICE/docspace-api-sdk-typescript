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
import type { ApiDateTime } from './api-date-time';
// May contain unused imports in some cases
// @ts-ignore
import type { Contact } from './contact';
// May contain unused imports in some cases
// @ts-ignore
import type { DarkThemeSettingsType } from './dark-theme-settings-type';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeActivationStatus } from './employee-activation-status';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeDto } from './employee-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeFullDto } from './employee-full-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { EmployeeStatus } from './employee-status';
// May contain unused imports in some cases
// @ts-ignore
import type { GroupSummaryDto } from './group-summary-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MobilePhoneActivationStatus } from './mobile-phone-activation-status';
// May contain unused imports in some cases
// @ts-ignore
import type { GroupDto } from './group-dto';

/**
 * @type AccountEntryDto
 * One entry of an account search: either a user or a group.
 */
export type AccountEntryDto = EmployeeFullDto | GroupDto;


