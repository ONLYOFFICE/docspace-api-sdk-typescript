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
import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { ErrorApiResponse } from '../../models';
// @ts-ignore
import type { FileUploadResultWrapper } from '../../models';
// @ts-ignore
import type { ThumbnailsDataWrapper } from '../../models';
// @ts-ignore
import type { ThumbnailsRequest } from '../../models';
// @ts-ignore
import type { UpdatePhotoMemberRequest } from '../../models';
/**
 * PhotosApi - axios parameter creator
 * @export
 */
export const PhotosApiAxiosParamCreator = function (configuration?: Configuration) {
    
    
    return {
        /**
         * Crops the avatar of a profile to the rectangle given in the request and rebuilds all of its thumbnail sizes,  which is the second step of changing an avatar by hand.  It works in two modes: with `tmpFile` it takes the temporary image  `POST api/2.0/people/{userid}/photo` produced with `autosave` off, makes the cropped result the main photo and  then discards the temporary file, and without `tmpFile` it re-crops the photo the profile already has.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The call replaces the stored photo, so the previous crop is lost, and it can be repeated with new coordinates  as often as needed.  Passing `width` and `height` as 0 together with `tmpFile` keeps the whole uploaded image instead of cropping  it.  The answer holds the URLs of every generated size, the same shape `GET api/2.0/people/{userid}/photo`  returns.
         * @summary Create photo thumbnails
         * @param {string} userid The profile whose avatar is cropped, taken from the route. Either the ID of the account or its user name is  accepted, and it has to be the calling account, because a profile photo can only be changed by its owner.
         * @param {ThumbnailsRequest} thumbnailsRequest The crop rectangle, and optionally the temporary image to crop.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createMemberPhotoThumbnails operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-member-photo-thumbnails/
         */
        createMemberPhotoThumbnails: async (userid: string, thumbnailsRequest: ThumbnailsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('createMemberPhotoThumbnails', 'userid', userid)
            // verify required parameter 'thumbnailsRequest' is not null or undefined
            assertParamExists('createMemberPhotoThumbnails', 'thumbnailsRequest', thumbnailsRequest)

            const localVarPath = `/api/2.0/people/{userid}/photo/thumbnails`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(thumbnailsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes the avatar of a profile, so that the profile falls back to the default placeholder image.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The removal is permanent and cannot be undone: the stored image and all of its sizes are deleted, and a new  avatar has to be uploaded through `POST api/2.0/people/{userid}/photo` to replace it.  The call is idempotent, so removing an avatar from a profile that has none succeeds as well, and it raises a  `UserUpdated` webhook.  The answer still holds the URLs of every size, now pointing at the default image.
         * @summary Delete a user photo
         * @param {string} userid The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its  user name is accepted. Reading a photo works for any account the caller may see, while deleting one only  works for the calling account itself.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member-photo/
         */
        deleteMemberPhoto: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('deleteMemberPhoto', 'userid', userid)

            const localVarPath = `/api/2.0/people/{userid}/photo`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the URLs of the avatar of a profile in every size the portal keeps: the original, the retina and the  maximum variants, and the big, medium and small thumbnails.  Unlike the operations that change an avatar, this one may be called for another account, as long as the  caller is allowed to see that account - a guest, for instance, only sees the accounts it is related to.  The call is read-only and always answers with a full set of URLs: a profile that has no avatar of its own  gets the URLs of the default placeholder image rather than an empty answer.  The URLs are portal paths meant to be requested directly and may be replaced when the avatar changes, so they  should not be stored for a long time.  To change the avatar use `POST api/2.0/people/{userid}/photo` for an uploaded file,  `PUT api/2.0/people/{userid}/photo` for one taken from a URL, and  `DELETE api/2.0/people/{userid}/photo` to drop it.
         * @summary Get a user photo
         * @param {string} userid The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its  user name is accepted. Reading a photo works for any account the caller may see, while deleting one only  works for the calling account itself.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-member-photo/
         */
        getMemberPhoto: async (userid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('getMemberPhoto', 'userid', userid)

            const localVarPath = `/api/2.0/people/{userid}/photo`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets the avatar of a profile from an image the portal downloads itself from the URL given in `files`, which is  the way to reuse a picture that is already published somewhere.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The URL has to be absolute or relative to the portal, and it has to use HTTPS unless the request itself came  over HTTP; an address the portal refuses to fetch, and a download that does not succeed, both answer 403.  Passing the URL the profile already uses is a no-op, and an empty `files` is rejected with 400, so use  `DELETE api/2.0/people/{userid}/photo` to remove an avatar rather than sending an empty value.  The downloaded image replaces the stored avatar and all of its sizes at once, raises a `UserUpdated` webhook,  and is subject to the portal limit on image size.  To send the bytes instead of a URL, upload the file through `POST api/2.0/people/{userid}/photo`.
         * @summary Update a user photo
         * @param {string} userid The profile whose avatar is replaced, taken from the route. Either the ID of the account or its user name is  accepted, and it has to be the calling account, because a profile photo can only be changed by its owner.
         * @param {UpdatePhotoMemberRequest} updatePhotoMemberRequest The address of the image to use as the new avatar.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-photo/
         */
        updateMemberPhoto: async (userid: string, updatePhotoMemberRequest: UpdatePhotoMemberRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('updateMemberPhoto', 'userid', userid)
            // verify required parameter 'updatePhotoMemberRequest' is not null or undefined
            assertParamExists('updateMemberPhoto', 'updatePhotoMemberRequest', updatePhotoMemberRequest)

            const localVarPath = `/api/2.0/people/{userid}/photo`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updatePhotoMemberRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Uploads an image as multipart form data and either makes it the avatar of a profile straight away or keeps it  as a temporary file to be cropped afterwards.  With `autosave` set to true the image becomes the avatar immediately, all of its sizes are built and their  URLs come back in `data`, each with a `hash` query parameter that changes whenever the avatar does, so a  client can cache them safely.  With `autosave` left false the image is only stored as a temporary file and `data` holds its name, which has  to be passed as `tmpFile` to `POST api/2.0/people/{userid}/photo/thumbnails` to choose the crop; nothing  changes on the profile until that second call succeeds.  A caller may only do this to their own profile, the ID in the route has to be the calling account, and the  image has to be a format the portal can read and stay within the portal limit on image size.  This operation reports every problem in the body instead of as a status code: it answers 200 with `success`  set to false and a human-readable `message`, and it does so for a missing file, an unreadable format, an  oversized image and a rejected permission alike, so a client has to check `success` and must not rely on the  status alone.  A successful upload raises a `UserUpdated` webhook only in the `autosave` case.
         * @summary Upload a user photo
         * @param {string} userid The profile whose avatar is uploaded, taken from the route. Either the ID of the account or its user name is  accepted, and it has to be the calling account, because a profile photo can only be changed by its owner.
         * @param {File} file The image itself, sent as a multipart form field. It has to be a raster format the portal can read and stay  within the portal limit on image size; sending no file makes the operation answer with `success` false rather  than an error status.
         * @param {boolean} [autosave] Set it to true to make the uploaded image the avatar right away. With the default false the image is only  stored as a temporary file whose name comes back in `data`, and it has to be passed to  `POST api/2.0/people/{userid}/photo/thumbnails` to take effect.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-member-photo/
         */
        uploadMemberPhoto: async (userid: string, file: File, autosave?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('uploadMemberPhoto', 'userid', userid)
            // verify required parameter 'file' is not null or undefined
            assertParamExists('uploadMemberPhoto', 'file', file)

            const localVarPath = `/api/2.0/people/{userid}/photo`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["read", "write"], configuration)

            // authentication ApiKeyBearer required
            await setApiKeyToObject(localVarHeaderParameter, "ApiKeyBearer", configuration)

            // authentication asc_auth_key required

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication OpenId required


            if (file !== undefined) { 
                localVarFormParams.append('File', file as any);
            }
    
            if (autosave !== undefined) { 
                localVarFormParams.append('Autosave', String(autosave) as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PhotosApi - functional programming interface
 * @export
 */
export const PhotosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PhotosApiAxiosParamCreator(configuration)
    return {
        /**
         * Crops the avatar of a profile to the rectangle given in the request and rebuilds all of its thumbnail sizes,  which is the second step of changing an avatar by hand.  It works in two modes: with `tmpFile` it takes the temporary image  `POST api/2.0/people/{userid}/photo` produced with `autosave` off, makes the cropped result the main photo and  then discards the temporary file, and without `tmpFile` it re-crops the photo the profile already has.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The call replaces the stored photo, so the previous crop is lost, and it can be repeated with new coordinates  as often as needed.  Passing `width` and `height` as 0 together with `tmpFile` keeps the whole uploaded image instead of cropping  it.  The answer holds the URLs of every generated size, the same shape `GET api/2.0/people/{userid}/photo`  returns.
         * @summary Create photo thumbnails
         * @param {string} userid The profile whose avatar is cropped, taken from the route. Either the ID of the account or its user name is  accepted, and it has to be the calling account, because a profile photo can only be changed by its owner.
         * @param {ThumbnailsRequest} thumbnailsRequest The crop rectangle, and optionally the temporary image to crop.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for createMemberPhotoThumbnails operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-member-photo-thumbnails/
         */
        async createMemberPhotoThumbnails(userid: string, thumbnailsRequest: ThumbnailsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThumbnailsDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMemberPhotoThumbnails(userid, thumbnailsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.createMemberPhotoThumbnails']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Removes the avatar of a profile, so that the profile falls back to the default placeholder image.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The removal is permanent and cannot be undone: the stored image and all of its sizes are deleted, and a new  avatar has to be uploaded through `POST api/2.0/people/{userid}/photo` to replace it.  The call is idempotent, so removing an avatar from a profile that has none succeeds as well, and it raises a  `UserUpdated` webhook.  The answer still holds the URLs of every size, now pointing at the default image.
         * @summary Delete a user photo
         * @param {string} userid The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its  user name is accepted. Reading a photo works for any account the caller may see, while deleting one only  works for the calling account itself.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for deleteMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member-photo/
         */
        async deleteMemberPhoto(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThumbnailsDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMemberPhoto(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.deleteMemberPhoto']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the URLs of the avatar of a profile in every size the portal keeps: the original, the retina and the  maximum variants, and the big, medium and small thumbnails.  Unlike the operations that change an avatar, this one may be called for another account, as long as the  caller is allowed to see that account - a guest, for instance, only sees the accounts it is related to.  The call is read-only and always answers with a full set of URLs: a profile that has no avatar of its own  gets the URLs of the default placeholder image rather than an empty answer.  The URLs are portal paths meant to be requested directly and may be replaced when the avatar changes, so they  should not be stored for a long time.  To change the avatar use `POST api/2.0/people/{userid}/photo` for an uploaded file,  `PUT api/2.0/people/{userid}/photo` for one taken from a URL, and  `DELETE api/2.0/people/{userid}/photo` to drop it.
         * @summary Get a user photo
         * @param {string} userid The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its  user name is accepted. Reading a photo works for any account the caller may see, while deleting one only  works for the calling account itself.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for getMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-member-photo/
         */
        async getMemberPhoto(userid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThumbnailsDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMemberPhoto(userid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.getMemberPhoto']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sets the avatar of a profile from an image the portal downloads itself from the URL given in `files`, which is  the way to reuse a picture that is already published somewhere.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The URL has to be absolute or relative to the portal, and it has to use HTTPS unless the request itself came  over HTTP; an address the portal refuses to fetch, and a download that does not succeed, both answer 403.  Passing the URL the profile already uses is a no-op, and an empty `files` is rejected with 400, so use  `DELETE api/2.0/people/{userid}/photo` to remove an avatar rather than sending an empty value.  The downloaded image replaces the stored avatar and all of its sizes at once, raises a `UserUpdated` webhook,  and is subject to the portal limit on image size.  To send the bytes instead of a URL, upload the file through `POST api/2.0/people/{userid}/photo`.
         * @summary Update a user photo
         * @param {string} userid The profile whose avatar is replaced, taken from the route. Either the ID of the account or its user name is  accepted, and it has to be the calling account, because a profile photo can only be changed by its owner.
         * @param {UpdatePhotoMemberRequest} updatePhotoMemberRequest The address of the image to use as the new avatar.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for updateMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-photo/
         */
        async updateMemberPhoto(userid: string, updatePhotoMemberRequest: UpdatePhotoMemberRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThumbnailsDataWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMemberPhoto(userid, updatePhotoMemberRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.updateMemberPhoto']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Uploads an image as multipart form data and either makes it the avatar of a profile straight away or keeps it  as a temporary file to be cropped afterwards.  With `autosave` set to true the image becomes the avatar immediately, all of its sizes are built and their  URLs come back in `data`, each with a `hash` query parameter that changes whenever the avatar does, so a  client can cache them safely.  With `autosave` left false the image is only stored as a temporary file and `data` holds its name, which has  to be passed as `tmpFile` to `POST api/2.0/people/{userid}/photo/thumbnails` to choose the crop; nothing  changes on the profile until that second call succeeds.  A caller may only do this to their own profile, the ID in the route has to be the calling account, and the  image has to be a format the portal can read and stay within the portal limit on image size.  This operation reports every problem in the body instead of as a status code: it answers 200 with `success`  set to false and a human-readable `message`, and it does so for a missing file, an unreadable format, an  oversized image and a rejected permission alike, so a client has to check `success` and must not rely on the  status alone.  A successful upload raises a `UserUpdated` webhook only in the `autosave` case.
         * @summary Upload a user photo
         * @param {string} userid The profile whose avatar is uploaded, taken from the route. Either the ID of the account or its user name is  accepted, and it has to be the calling account, because a profile photo can only be changed by its owner.
         * @param {File} file The image itself, sent as a multipart form field. It has to be a raster format the portal can read and stay  within the portal limit on image size; sending no file makes the operation answer with `success` false rather  than an error status.
         * @param {boolean} [autosave] Set it to true to make the uploaded image the avatar right away. With the default false the image is only  stored as a temporary file whose name comes back in `data`, and it has to be passed to  `POST api/2.0/people/{userid}/photo/thumbnails` to take effect.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-member-photo/
         */
        async uploadMemberPhoto(userid: string, file: File, autosave?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileUploadResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadMemberPhoto(userid, file, autosave, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhotosApi.uploadMemberPhoto']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PhotosApi - factory interface
 * @export
 */
export const PhotosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PhotosApiFp(configuration)
    return {
        /**
         * Crops the avatar of a profile to the rectangle given in the request and rebuilds all of its thumbnail sizes,  which is the second step of changing an avatar by hand.  It works in two modes: with `tmpFile` it takes the temporary image  `POST api/2.0/people/{userid}/photo` produced with `autosave` off, makes the cropped result the main photo and  then discards the temporary file, and without `tmpFile` it re-crops the photo the profile already has.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The call replaces the stored photo, so the previous crop is lost, and it can be repeated with new coordinates  as often as needed.  Passing `width` and `height` as 0 together with `tmpFile` keeps the whole uploaded image instead of cropping  it.  The answer holds the URLs of every generated size, the same shape `GET api/2.0/people/{userid}/photo`  returns.
         * @summary Create photo thumbnails
         * @param {PhotosApiCreateMemberPhotoThumbnailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for createMemberPhotoThumbnails operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-member-photo-thumbnails/
         * @throws {RequiredError}
         */
        createMemberPhotoThumbnails(requestParameters: PhotosApiCreateMemberPhotoThumbnailsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ThumbnailsDataWrapper> {
            return localVarFp.createMemberPhotoThumbnails(requestParameters.userid, requestParameters.thumbnailsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes the avatar of a profile, so that the profile falls back to the default placeholder image.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The removal is permanent and cannot be undone: the stored image and all of its sizes are deleted, and a new  avatar has to be uploaded through `POST api/2.0/people/{userid}/photo` to replace it.  The call is idempotent, so removing an avatar from a profile that has none succeeds as well, and it raises a  `UserUpdated` webhook.  The answer still holds the URLs of every size, now pointing at the default image.
         * @summary Delete a user photo
         * @param {PhotosApiDeleteMemberPhotoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member-photo/
         * @throws {RequiredError}
         */
        deleteMemberPhoto(requestParameters: PhotosApiDeleteMemberPhotoRequest, options?: RawAxiosRequestConfig): AxiosPromise<ThumbnailsDataWrapper> {
            return localVarFp.deleteMemberPhoto(requestParameters.userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the URLs of the avatar of a profile in every size the portal keeps: the original, the retina and the  maximum variants, and the big, medium and small thumbnails.  Unlike the operations that change an avatar, this one may be called for another account, as long as the  caller is allowed to see that account - a guest, for instance, only sees the accounts it is related to.  The call is read-only and always answers with a full set of URLs: a profile that has no avatar of its own  gets the URLs of the default placeholder image rather than an empty answer.  The URLs are portal paths meant to be requested directly and may be replaced when the avatar changes, so they  should not be stored for a long time.  To change the avatar use `POST api/2.0/people/{userid}/photo` for an uploaded file,  `PUT api/2.0/people/{userid}/photo` for one taken from a URL, and  `DELETE api/2.0/people/{userid}/photo` to drop it.
         * @summary Get a user photo
         * @param {PhotosApiGetMemberPhotoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for getMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-member-photo/
         * @throws {RequiredError}
         */
        getMemberPhoto(requestParameters: PhotosApiGetMemberPhotoRequest, options?: RawAxiosRequestConfig): AxiosPromise<ThumbnailsDataWrapper> {
            return localVarFp.getMemberPhoto(requestParameters.userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets the avatar of a profile from an image the portal downloads itself from the URL given in `files`, which is  the way to reuse a picture that is already published somewhere.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The URL has to be absolute or relative to the portal, and it has to use HTTPS unless the request itself came  over HTTP; an address the portal refuses to fetch, and a download that does not succeed, both answer 403.  Passing the URL the profile already uses is a no-op, and an empty `files` is rejected with 400, so use  `DELETE api/2.0/people/{userid}/photo` to remove an avatar rather than sending an empty value.  The downloaded image replaces the stored avatar and all of its sizes at once, raises a `UserUpdated` webhook,  and is subject to the portal limit on image size.  To send the bytes instead of a URL, upload the file through `POST api/2.0/people/{userid}/photo`.
         * @summary Update a user photo
         * @param {PhotosApiUpdateMemberPhotoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-photo/
         * @throws {RequiredError}
         */
        updateMemberPhoto(requestParameters: PhotosApiUpdateMemberPhotoRequest, options?: RawAxiosRequestConfig): AxiosPromise<ThumbnailsDataWrapper> {
            return localVarFp.updateMemberPhoto(requestParameters.userid, requestParameters.updatePhotoMemberRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads an image as multipart form data and either makes it the avatar of a profile straight away or keeps it  as a temporary file to be cropped afterwards.  With `autosave` set to true the image becomes the avatar immediately, all of its sizes are built and their  URLs come back in `data`, each with a `hash` query parameter that changes whenever the avatar does, so a  client can cache them safely.  With `autosave` left false the image is only stored as a temporary file and `data` holds its name, which has  to be passed as `tmpFile` to `POST api/2.0/people/{userid}/photo/thumbnails` to choose the crop; nothing  changes on the profile until that second call succeeds.  A caller may only do this to their own profile, the ID in the route has to be the calling account, and the  image has to be a format the portal can read and stay within the portal limit on image size.  This operation reports every problem in the body instead of as a status code: it answers 200 with `success`  set to false and a human-readable `message`, and it does so for a missing file, an unreadable format, an  oversized image and a rejected permission alike, so a client has to check `success` and must not rely on the  status alone.  A successful upload raises a `UserUpdated` webhook only in the `autosave` case.
         * @summary Upload a user photo
         * @param {PhotosApiUploadMemberPhotoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-member-photo/
         * @throws {RequiredError}
         */
        uploadMemberPhoto(requestParameters: PhotosApiUploadMemberPhotoRequest, options?: RawAxiosRequestConfig): AxiosPromise<FileUploadResultWrapper> {
            return localVarFp.uploadMemberPhoto(requestParameters.userid, requestParameters.file, requestParameters.autosave, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createMemberPhotoThumbnails operation in PhotosApi.
 * @export
 * @interface PhotosApiCreateMemberPhotoThumbnailsRequest
 */
export interface PhotosApiCreateMemberPhotoThumbnailsRequest {
    /**
     * The profile whose avatar is cropped, taken from the route. Either the ID of the account or its user name is  accepted, and it has to be the calling account, because a profile photo can only be changed by its owner.
     * @type {string}
     * @memberof PhotosApiCreateMemberPhotoThumbnails
     */
    readonly userid: string

    /**
     * The crop rectangle, and optionally the temporary image to crop.
     * @type {ThumbnailsRequest}
     * @memberof PhotosApiCreateMemberPhotoThumbnails
     */
    readonly thumbnailsRequest: ThumbnailsRequest
}

/**
 * Request parameters for deleteMemberPhoto operation in PhotosApi.
 * @export
 * @interface PhotosApiDeleteMemberPhotoRequest
 */
export interface PhotosApiDeleteMemberPhotoRequest {
    /**
     * The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its  user name is accepted. Reading a photo works for any account the caller may see, while deleting one only  works for the calling account itself.
     * @type {string}
     * @memberof PhotosApiDeleteMemberPhoto
     */
    readonly userid: string
}

/**
 * Request parameters for getMemberPhoto operation in PhotosApi.
 * @export
 * @interface PhotosApiGetMemberPhotoRequest
 */
export interface PhotosApiGetMemberPhotoRequest {
    /**
     * The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its  user name is accepted. Reading a photo works for any account the caller may see, while deleting one only  works for the calling account itself.
     * @type {string}
     * @memberof PhotosApiGetMemberPhoto
     */
    readonly userid: string
}

/**
 * Request parameters for updateMemberPhoto operation in PhotosApi.
 * @export
 * @interface PhotosApiUpdateMemberPhotoRequest
 */
export interface PhotosApiUpdateMemberPhotoRequest {
    /**
     * The profile whose avatar is replaced, taken from the route. Either the ID of the account or its user name is  accepted, and it has to be the calling account, because a profile photo can only be changed by its owner.
     * @type {string}
     * @memberof PhotosApiUpdateMemberPhoto
     */
    readonly userid: string

    /**
     * The address of the image to use as the new avatar.
     * @type {UpdatePhotoMemberRequest}
     * @memberof PhotosApiUpdateMemberPhoto
     */
    readonly updatePhotoMemberRequest: UpdatePhotoMemberRequest
}

/**
 * Request parameters for uploadMemberPhoto operation in PhotosApi.
 * @export
 * @interface PhotosApiUploadMemberPhotoRequest
 */
export interface PhotosApiUploadMemberPhotoRequest {
    /**
     * The profile whose avatar is uploaded, taken from the route. Either the ID of the account or its user name is  accepted, and it has to be the calling account, because a profile photo can only be changed by its owner.
     * @type {string}
     * @memberof PhotosApiUploadMemberPhoto
     */
    readonly userid: string

    /**
     * The image itself, sent as a multipart form field. It has to be a raster format the portal can read and stay  within the portal limit on image size; sending no file makes the operation answer with `success` false rather  than an error status.
     * @type {File}
     * @memberof PhotosApiUploadMemberPhoto
     */
    readonly file: File

    /**
     * Set it to true to make the uploaded image the avatar right away. With the default false the image is only  stored as a temporary file whose name comes back in `data`, and it has to be passed to  `POST api/2.0/people/{userid}/photo/thumbnails` to take effect.
     * @type {boolean}
     * @memberof PhotosApiUploadMemberPhoto
     */
    readonly autosave?: boolean
}

/**
 * PhotosApi - object-oriented interface
 * @export
 * @class PhotosApi
 * @extends {BaseAPI}
 */
export class PhotosApi extends BaseAPI {
    /**
     * Crops the avatar of a profile to the rectangle given in the request and rebuilds all of its thumbnail sizes,  which is the second step of changing an avatar by hand.  It works in two modes: with `tmpFile` it takes the temporary image  `POST api/2.0/people/{userid}/photo` produced with `autosave` off, makes the cropped result the main photo and  then discards the temporary file, and without `tmpFile` it re-crops the photo the profile already has.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The call replaces the stored photo, so the previous crop is lost, and it can be repeated with new coordinates  as often as needed.  Passing `width` and `height` as 0 together with `tmpFile` keeps the whole uploaded image instead of cropping  it.  The answer holds the URLs of every generated size, the same shape `GET api/2.0/people/{userid}/photo`  returns.
     * @summary Create photo thumbnails
     * @param {PeoplePhotosApiCreateMemberPhotoThumbnailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public createMemberPhotoThumbnails(requestParameters: PhotosApiCreateMemberPhotoThumbnailsRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).createMemberPhotoThumbnails(requestParameters.userid, requestParameters.thumbnailsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes the avatar of a profile, so that the profile falls back to the default placeholder image.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The removal is permanent and cannot be undone: the stored image and all of its sizes are deleted, and a new  avatar has to be uploaded through `POST api/2.0/people/{userid}/photo` to replace it.  The call is idempotent, so removing an avatar from a profile that has none succeeds as well, and it raises a  `UserUpdated` webhook.  The answer still holds the URLs of every size, now pointing at the default image.
     * @summary Delete a user photo
     * @param {PeoplePhotosApiDeleteMemberPhotoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public deleteMemberPhoto(requestParameters: PhotosApiDeleteMemberPhotoRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).deleteMemberPhoto(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the URLs of the avatar of a profile in every size the portal keeps: the original, the retina and the  maximum variants, and the big, medium and small thumbnails.  Unlike the operations that change an avatar, this one may be called for another account, as long as the  caller is allowed to see that account - a guest, for instance, only sees the accounts it is related to.  The call is read-only and always answers with a full set of URLs: a profile that has no avatar of its own  gets the URLs of the default placeholder image rather than an empty answer.  The URLs are portal paths meant to be requested directly and may be replaced when the avatar changes, so they  should not be stored for a long time.  To change the avatar use `POST api/2.0/people/{userid}/photo` for an uploaded file,  `PUT api/2.0/people/{userid}/photo` for one taken from a URL, and  `DELETE api/2.0/people/{userid}/photo` to drop it.
     * @summary Get a user photo
     * @param {PeoplePhotosApiGetMemberPhotoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public getMemberPhoto(requestParameters: PhotosApiGetMemberPhotoRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).getMemberPhoto(requestParameters.userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets the avatar of a profile from an image the portal downloads itself from the URL given in `files`, which is  the way to reuse a picture that is already published somewhere.  A caller may only do this to their own profile - the ID in the route has to be the calling account, and an  administrator gets 403 for anybody else - and the account must be allowed to edit its own profile.  The URL has to be absolute or relative to the portal, and it has to use HTTPS unless the request itself came  over HTTP; an address the portal refuses to fetch, and a download that does not succeed, both answer 403.  Passing the URL the profile already uses is a no-op, and an empty `files` is rejected with 400, so use  `DELETE api/2.0/people/{userid}/photo` to remove an avatar rather than sending an empty value.  The downloaded image replaces the stored avatar and all of its sizes at once, raises a `UserUpdated` webhook,  and is subject to the portal limit on image size.  To send the bytes instead of a URL, upload the file through `POST api/2.0/people/{userid}/photo`.
     * @summary Update a user photo
     * @param {PeoplePhotosApiUpdateMemberPhotoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public updateMemberPhoto(requestParameters: PhotosApiUpdateMemberPhotoRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).updateMemberPhoto(requestParameters.userid, requestParameters.updatePhotoMemberRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads an image as multipart form data and either makes it the avatar of a profile straight away or keeps it  as a temporary file to be cropped afterwards.  With `autosave` set to true the image becomes the avatar immediately, all of its sizes are built and their  URLs come back in `data`, each with a `hash` query parameter that changes whenever the avatar does, so a  client can cache them safely.  With `autosave` left false the image is only stored as a temporary file and `data` holds its name, which has  to be passed as `tmpFile` to `POST api/2.0/people/{userid}/photo/thumbnails` to choose the crop; nothing  changes on the profile until that second call succeeds.  A caller may only do this to their own profile, the ID in the route has to be the calling account, and the  image has to be a format the portal can read and stay within the portal limit on image size.  This operation reports every problem in the body instead of as a status code: it answers 200 with `success`  set to false and a human-readable `message`, and it does so for a missing file, an unreadable format, an  oversized image and a rejected permission alike, so a client has to check `success` and must not rely on the  status alone.  A successful upload raises a `UserUpdated` webhook only in the `autosave` case.
     * @summary Upload a user photo
     * @param {PeoplePhotosApiUploadMemberPhotoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public uploadMemberPhoto(requestParameters: PhotosApiUploadMemberPhotoRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).uploadMemberPhoto(requestParameters.userid, requestParameters.file, requestParameters.autosave, options).then((request) => request(this.axios, this.basePath));
    }
}

