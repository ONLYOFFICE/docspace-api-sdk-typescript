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


/**
 * Parameters for updating an existing MCP server. All fields are optional — only provided fields will be modified.
 */
export interface UpdateServerRequestBody {
    /**
     * New display name for the server. Only letters, numbers, underscores, and hyphens are allowed. Maximum 128 characters.
     */
    'name'?: string | null;
    /**
     * New human-readable description of the server\'s purpose. Maximum 255 characters.
     */
    'description'?: string | null;
    /**
     * New base URL of the MCP server endpoint. If changed, the system will re-verify connectivity before saving.
     */
    'endpoint'?: string | null;
    /**
     * New HTTP headers to include with every request. If changed alongside the endpoint, connectivity is re-verified.
     */
    'headers'?: { [key: string]: string; } | null;
    /**
     * Set to true to update the server icon. When true, the Icon field value (or null to remove) will be applied.
     */
    'updateIcon'?: boolean;
    /**
     * New Base64-encoded icon image for the server, or null to remove the existing icon. Only applied when UpdateIcon is true.
     */
    'icon'?: string | null;
}

