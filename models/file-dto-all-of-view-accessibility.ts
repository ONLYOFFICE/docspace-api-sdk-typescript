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
 * Which ways of opening this format the portal supports at all - its own editor, the picture viewer, the media  player and so on. It answers whether the format can be shown, not whether this account may do it; rights are  reported in `security`.
 */
export interface FileDtoAllOfViewAccessibility {
    'ImageView'?: boolean;
    'MediaView'?: boolean;
    'WebView'?: boolean;
    'WebEdit'?: boolean;
    'WebReview'?: boolean;
    'WebCustomFilterEditing'?: boolean;
    'WebRestrictedEditing'?: boolean;
    'WebComment'?: boolean;
    'CanConvert'?: boolean;
    'MustConvert'?: boolean;
}

