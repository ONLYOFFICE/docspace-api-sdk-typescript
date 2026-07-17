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
 * The Firebase parameters.
 */
export interface FirebaseDto {
    /**
     * The Firebase API key.
     */
    'apiKey': string | null;
    /**
     * The Firebase authentication domain.
     */
    'authDomain': string | null;
    /**
     * The Firebase project ID.
     */
    'projectId': string | null;
    /**
     * The Firebase storage bucket.
     */
    'storageBucket': string | null;
    /**
     * The Firebase messaging sender ID.
     */
    'messagingSenderId': string | null;
    /**
     * The Firebase application ID.
     */
    'appId': string | null;
    /**
     * The Firebase measurement ID.
     */
    'measurementId': string | null;
    /**
     * The Firebase database URL.
     */
    'databaseURL': string | null;
}

