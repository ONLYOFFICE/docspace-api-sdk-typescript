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
 * The Firebase project a client initialises its SDK with to receive push notifications from this portal.
 */
export interface FirebaseDto {
    /**
     * The web API key of the project. Every field of this object is an empty string on an installation that  configures no Firebase project, and an empty `projectId` is the cheapest thing to test for before  initialising an SDK. None of these values is a secret - they are meant to be embedded in a client.
     */
    'apiKey': string | null;
    /**
     * The host the Firebase SDK performs its own authentication against.
     */
    'authDomain': string | null;
    /**
     * The identifier of the Firebase project itself, which ties all the other fields together.
     */
    'projectId': string | null;
    /**
     * The Cloud Storage bucket of the project. The portal does not store portal files there; it is part of the  SDK configuration.
     */
    'storageBucket': string | null;
    /**
     * The sender ID that push messages of this project arrive under, which a client checks an incoming message  against.
     */
    'messagingSenderId': string | null;
    /**
     * The identifier of the Firebase application registration this client is to use.
     */
    'appId': string | null;
    /**
     * The Google Analytics measurement ID of the project, empty when the project reports no analytics.
     */
    'measurementId': string | null;
    /**
     * The Realtime Database endpoint of the project, empty when the project has no such database.
     */
    'databaseURL': string | null;
}

