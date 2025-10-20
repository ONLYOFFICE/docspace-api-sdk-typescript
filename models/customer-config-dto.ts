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
 * The customer config parameters.
 * @export
 * @interface CustomerConfigDto
 */
export interface CustomerConfigDto {
    /**
     * The address of the customer configuration.
     * @type {string}
     * @memberof CustomerConfigDto
     */
    'address'?: string | null;
    /**
     * The logo of the customer configuration.
     * @type {string}
     * @memberof CustomerConfigDto
     */
    'logo'?: string | null;
    /**
     * The dark logo of the customer configuration.
     * @type {string}
     * @memberof CustomerConfigDto
     */
    'logoDark'?: string | null;
    /**
     * The mail address of the customer configuration.
     * @type {string}
     * @memberof CustomerConfigDto
     */
    'mail'?: string | null;
    /**
     * The name of the customer configuration.
     * @type {string}
     * @memberof CustomerConfigDto
     */
    'name'?: string | null;
    /**
     * The site web address of the customer configuration.
     * @type {string}
     * @memberof CustomerConfigDto
     */
    'www'?: string | null;
}

