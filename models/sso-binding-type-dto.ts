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
 * The SAML bindings the SSO settings accept.
 */
export interface SsoBindingTypeDto {
    /**
     * The SAML 2.0 HTTP POST binding, which carries the request in a self-submitting form. It is what the  built-in configuration uses and the one to pick when requests are signed, since it has no length limit.
     */
    'saml20HttpPost'?: string | null;
    /**
     * The SAML 2.0 HTTP redirect binding, which carries the request in the query string and is therefore bound  by the length a URL may have.
     */
    'saml20HttpRedirect'?: string | null;
}

