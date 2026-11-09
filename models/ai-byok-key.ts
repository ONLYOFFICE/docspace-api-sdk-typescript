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


export interface AiByokKey {
    /**
     * Model revision id the key is set for, used in the path when replacing or deleting it.
     */
    'id': string;
    /**
     * Model display name; absent when the model is no longer in the gateway catalogue.
     */
    'name'?: string;
    /**
     * BYOK provider id the key belongs to, e.g. `anthropic`.
     */
    'provider': string;
    /**
     * SVG markup of the logo of the model\'s owner.
     */
    'image'?: string;
}

