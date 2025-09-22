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

import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import type { FileUploadResultWrapper } from '../../models';
// @ts-ignore
import type { KeyValuePairStringStringValues } from '../../models';
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
         * Creates the user photo thumbnails by coordinates of the original image specified in the request.
         * @summary Create photo thumbnails
         * @param {string} userid The user ID.
         * @param {ThumbnailsRequest} thumbnailsRequest The thumbnail request.
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
         * Deletes a photo of the user with the ID specified in the request.
         * @summary Delete a user photo
         * @param {string} userid The user ID.
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
         * Returns a photo of the user with the ID specified in the request.
         * @summary Get a user photo
         * @param {string} userid The user ID.
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
         * Updates a photo of the user with the ID specified in the request.
         * @summary Update a user photo
         * @param {string} userid The user ID.
         * @param {UpdatePhotoMemberRequest} updatePhotoMemberRequest The request parameters for updating a photo.
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
         * Uploads a photo of the user with the ID specified in the request.
         * @summary Upload a user photo
         * @param {string} userid The user ID.
         * @param {Array<KeyValuePairStringStringValues>} formCollection The image data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-member-photo/
         */
        uploadMemberPhoto: async (userid: string, formCollection: Array<KeyValuePairStringStringValues>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userid' is not null or undefined
            assertParamExists('uploadMemberPhoto', 'userid', userid)
            // verify required parameter 'formCollection' is not null or undefined
            assertParamExists('uploadMemberPhoto', 'formCollection', formCollection)
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

            if (formCollection) {
                formCollection.forEach((element) => {
                    localVarFormParams.append('formCollection', element as any);
                })
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
         * Creates the user photo thumbnails by coordinates of the original image specified in the request.
         * @summary Create photo thumbnails
         * @param {string} userid The user ID.
         * @param {ThumbnailsRequest} thumbnailsRequest The thumbnail request.
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
         * Deletes a photo of the user with the ID specified in the request.
         * @summary Delete a user photo
         * @param {string} userid The user ID.
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
         * Returns a photo of the user with the ID specified in the request.
         * @summary Get a user photo
         * @param {string} userid The user ID.
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
         * Updates a photo of the user with the ID specified in the request.
         * @summary Update a user photo
         * @param {string} userid The user ID.
         * @param {UpdatePhotoMemberRequest} updatePhotoMemberRequest The request parameters for updating a photo.
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
         * Uploads a photo of the user with the ID specified in the request.
         * @summary Upload a user photo
         * @param {string} userid The user ID.
         * @param {Array<KeyValuePairStringStringValues>} formCollection The image data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * REST API Reference for uploadMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-member-photo/
         */
        async uploadMemberPhoto(userid: string, formCollection: Array<KeyValuePairStringStringValues>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileUploadResultWrapper>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadMemberPhoto(userid, formCollection, options);
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
         * Creates the user photo thumbnails by coordinates of the original image specified in the request.
         * @summary Create photo thumbnails
         * @param {string} userid The user ID.
         * @param {ThumbnailsRequest} thumbnailsRequest The thumbnail request.
         * @param {*} [options] Override http request option.
         * REST API Reference for createMemberPhotoThumbnails operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/create-member-photo-thumbnails/
         * @throws {RequiredError}
         */
        createMemberPhotoThumbnails(userid: string, thumbnailsRequest: ThumbnailsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ThumbnailsDataWrapper> {
            return localVarFp.createMemberPhotoThumbnails(userid, thumbnailsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a photo of the user with the ID specified in the request.
         * @summary Delete a user photo
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for deleteMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/delete-member-photo/
         * @throws {RequiredError}
         */
        deleteMemberPhoto(userid: string, options?: RawAxiosRequestConfig): AxiosPromise<ThumbnailsDataWrapper> {
            return localVarFp.deleteMemberPhoto(userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a photo of the user with the ID specified in the request.
         * @summary Get a user photo
         * @param {string} userid The user ID.
         * @param {*} [options] Override http request option.
         * REST API Reference for getMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/get-member-photo/
         * @throws {RequiredError}
         */
        getMemberPhoto(userid: string, options?: RawAxiosRequestConfig): AxiosPromise<ThumbnailsDataWrapper> {
            return localVarFp.getMemberPhoto(userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a photo of the user with the ID specified in the request.
         * @summary Update a user photo
         * @param {string} userid The user ID.
         * @param {UpdatePhotoMemberRequest} updatePhotoMemberRequest The request parameters for updating a photo.
         * @param {*} [options] Override http request option.
         * REST API Reference for updateMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/update-member-photo/
         * @throws {RequiredError}
         */
        updateMemberPhoto(userid: string, updatePhotoMemberRequest: UpdatePhotoMemberRequest, options?: RawAxiosRequestConfig): AxiosPromise<ThumbnailsDataWrapper> {
            return localVarFp.updateMemberPhoto(userid, updatePhotoMemberRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads a photo of the user with the ID specified in the request.
         * @summary Upload a user photo
         * @param {string} userid The user ID.
         * @param {Array<KeyValuePairStringStringValues>} formCollection The image data.
         * @param {*} [options] Override http request option.
         * REST API Reference for uploadMemberPhoto operation
         * @see https://api.onlyoffice.com/docspace/api-backend/usage-api/upload-member-photo/
         * @throws {RequiredError}
         */
        uploadMemberPhoto(userid: string, formCollection: Array<KeyValuePairStringStringValues>, options?: RawAxiosRequestConfig): AxiosPromise<FileUploadResultWrapper> {
            return localVarFp.uploadMemberPhoto(userid, formCollection, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PhotosApi - object-oriented interface
 * @export
 * @class PhotosApi
 * @extends {BaseAPI}
 */
export class PhotosApi extends BaseAPI {
    /**
     * Creates the user photo thumbnails by coordinates of the original image specified in the request.
     * @summary Create photo thumbnails
     * @param {string} userid The user ID.
     * @param {ThumbnailsRequest} thumbnailsRequest The thumbnail request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public createMemberPhotoThumbnails(userid: string, thumbnailsRequest: ThumbnailsRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).createMemberPhotoThumbnails(userid, thumbnailsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a photo of the user with the ID specified in the request.
     * @summary Delete a user photo
     * @param {string} userid The user ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public deleteMemberPhoto(userid: string, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).deleteMemberPhoto(userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a photo of the user with the ID specified in the request.
     * @summary Get a user photo
     * @param {string} userid The user ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public getMemberPhoto(userid: string, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).getMemberPhoto(userid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a photo of the user with the ID specified in the request.
     * @summary Update a user photo
     * @param {string} userid The user ID.
     * @param {UpdatePhotoMemberRequest} updatePhotoMemberRequest The request parameters for updating a photo.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public updateMemberPhoto(userid: string, updatePhotoMemberRequest: UpdatePhotoMemberRequest, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).updateMemberPhoto(userid, updatePhotoMemberRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads a photo of the user with the ID specified in the request.
     * @summary Upload a user photo
     * @param {string} userid The user ID.
     * @param {Array<KeyValuePairStringStringValues>} formCollection The image data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhotosApi
     */
    public uploadMemberPhoto(userid: string, formCollection: Array<KeyValuePairStringStringValues>, options?: RawAxiosRequestConfig) {
        return PhotosApiFp(this.configuration).uploadMemberPhoto(userid, formCollection, options).then((request) => request(this.axios, this.basePath));
    }
}

