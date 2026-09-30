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
 * What an image model charges: the tokens of the request and the images that come out of it.
 */
export interface AiImagePriceDto {
    /**
     * The cost of one million tokens sent to the image model, which is the prompt describing the picture.
     */
    'prompt'?: number;
    /**
     * The cost of one million tokens the image model writes back alongside the picture.
     */
    'completion'?: number;
    /**
     * The cost of one produced image, charged on top of the token amounts above.
     */
    'image'?: number;
}

