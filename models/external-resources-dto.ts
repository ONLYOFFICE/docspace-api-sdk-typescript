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
import type { ExternalResourceDto } from './external-resource-dto';

/**
 * The external resources settings.
 */
export interface ExternalResourcesDto {
    /**
     * The link to the administration panel. It is returned only to the full administrators of a licensed (Enterprise) server (standalone) portal.
     */
    'adminPanel'?: ExternalResourceDto;
    /**
     * The link to the product API.
     */
    'api'?: ExternalResourceDto;
    /**
     * The link to the common product information.
     */
    'common'?: ExternalResourceDto;
    /**
     * The link to the forum.
     */
    'forum'?: ExternalResourceDto;
    /**
     * The link to the Help Center.
     */
    'helpcenter'?: ExternalResourceDto;
    /**
     * The link to the product integrations.
     */
    'integrations'?: ExternalResourceDto;
    /**
     * The link to the product website.
     */
    'site'?: ExternalResourceDto;
    /**
     * The link to the product social nerworks.
     */
    'socialNetworks'?: ExternalResourceDto;
    /**
     * The link to the product support.
     */
    'support'?: ExternalResourceDto;
    /**
     * The link to the video guides.
     */
    'videoguides'?: ExternalResourceDto;
}

