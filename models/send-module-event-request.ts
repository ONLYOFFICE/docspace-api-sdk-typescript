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
 * A socket event from an integration module: who receives it in the portal, its name and its payload.
 */
export interface SendModuleEventRequest {
    /**
     * A room of the module in this portal: everyone subscribed to `plugin-{module}-{room}` receives the event. Latin  letters, digits and the characters `_ . : -`.
     */
    'room'?: string | null;
    /**
     * The e-mail of the portal user who receives the event; with single sign-on it is the same e-mail the module\'s own  application knows the person by. Only that user\'s open sessions receive it.
     */
    'user'?: string | null;
    /**
     * The event name. Browsers receive it as `plugin:{module}:{event}`. Latin letters, digits and the characters  `_ . : -`.
     */
    'event'?: string | null;
    /**
     * Passed to the browser as it is, as `{ message }`. Meant as a signal to re-read, such as an unread count; use  JSON text for structured data and keep personal content out of it.
     */
    'message'?: string | null;
}

