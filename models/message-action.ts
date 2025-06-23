// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode


/**
 * [1000 - Login success, 1001 - Login success via social account, 1002 - Login fail invalid combination, 1003 - Login fail social account not found, 1004 - Login fail disabled profile, 1005 - Login fail, 1006 - Logout, 1007 - Login success via sms, 1008 - Login fail via sms, 1009 - Login fail ip security, 1010 - Login success via api, 1011 - Login success via social app, 1012 - Login success via api sms, 1013 - Login fail via api, 1014 - Login fail via api sms, 1015 - Login success via SSO, 1016 - Session started, 1017 - Session completed, 1018 - Login fail via SSO, 1019 - Login success via api social account, 1020 - Login fail via api social account, 1021 - Login succes via tfa app, 1022 - Login fail via Tfa app, 1023 - Login fail brute force, 1024 - Login success via api tfa, 1025 - Login fail via api tfa, 1026 - Login fail recaptcha, 1027 - Authorization link activated, 4000 - User created, 4001 - Guest created, 4002 - User created via invite, 4003 - Guest created via invite, 4004 - User activated, 4005 - Guest activated, 4006 - User updated, 4007 - User updated language, 4008 - User added avatar, 4009 - User deleted avatar, 4010 - User updated avatar thumbnails, 4011 - User linked social account, 4012 - User unlinked social account, 4013 - User sent activation instructions, 4014 - User sent email change instructions, 4015 - User sent password change instructions, 4016 - User sent delete instructions, 4017 - User updated password, 4018 - User deleted, 4019 - Users updated type, 4020 - Users updated status, 4021 - Users sent activation instructions, 4022 - Users deleted, 4023 - Sent invite instructions, 4024 - User imported, 4025 - Guest imported, 4026 - Group created, 4027 - Group updated, 4028 - Group deleted, 4029 - User updated mobile number, 4030 - User data reassigns, 4031 - User data removing, 4032 - User connected tfa app, 4033 - User disconnected tfa app, 4034 - User logout active connections, 4035 - User logout active connection, 4036 - User logout active connections for user, 4037 - Send join invite, 5000 - File created, 5001 - File renamed, 5002 - File updated, 5003 - File created version, 5004 - File deleted version, 5005 - File updated revision comment, 5006 - File locked, 5007 - File unlocked, 5008 - File updated access, 5009 - File downloaded, 5010 - File downloaded as, 5011 - File uploaded, 5012 - File imported, 5013 - File copied, 5014 - File copied with overwriting, 5015 - File moved, 5016 - File moved with overwriting, 5017 - File moved to trash, 5018 - File deleted, 5019 - Folder created, 5020 - Folder renamed, 5021 - Folder updated access, 5022 - Folder copied, 5023 - Folder copied with overwriting, 5024 - Folder moved, 5025 - Folder moved with overwriting, 5026 - Folder moved to trash, 5027 - Folder deleted, 5028 - ThirdParty created, 5029 - ThirdParty updated, 5030 - ThirdParty deleted, 5031 - Documents ThirdParty settings updated, 5032 - Documents overwriting settings updated, 5033 - Documents uploading formats settings updated, 5034 - User file updated, 5035 - File converted, 5036 - File send access link, 5037 - Document service location setting, 5038 - Authorization keys setting, 5039 - Full text search setting, 5040 - Start transfer setting, 5041 - Start backup setting, 5042 - License key uploaded, 5043 - File change owner, 5044 - File restore version, 5045 - Document send to sign, 5046 - Document sign complete, 5047 - User updated email, 5048 - Documents store forcesave, 5049 - Documents forcesave, 5050 - Start storage encryption, 5051 - Privacy room enable, 5052 - Privacy room disable, 5053 - Start storage decryption, 5054 - File opened for change, 5055 - File marked as favorite, 5056 - File removed from favorite, 5057 - Folder downloaded, 5058 - File removed from list, 5059 - Folder removed from list, 5060 - File external link access updated, 5061 - Trash emptied, 5062 - File revision downloaded, 5063 - File marked as read, 5064 - File readed, 5065 - Folder marked as read, 5066 - Folder updated access for, 5068 - File updated access for, 5069 - Documents external share settings updated, 5070 - Room created, 5071 - Room renamed, 5072 - Room archived, 5073 - Room unarchived, 5074 - Room deleted, 5075 - Room update access for user, 5076 - Tag created, 5077 - Tags deleted, 5078 - Added room tags, 5079 - Deleted room tags, 5080 - Room logo created, 5081 - Room logo deleted, 5082 - Room invitation link updated, 5083 - Documents keep new file name settings updated, 5084 - Room remove user, 5085 - Room create user, 5086 - Room invitation link created, 5087 - Room invitation link deleted, 5088 - Room external link created, 5089 - Room external link updated, 5090 - Room external link deleted, 5091 - File external link created, 5092 - File external link updated, 5093 - File external link deleted, 5094 - Room group added, 5095 - Room update access for group, 5096 - Room group remove, 5097 - Room external link revoked, 5098 - Room external link renamed, 5099 - File uploaded with overwriting, 5100 - Room copied, 5101 - Documents display file extension updated, 5102 - Room color changed, 5103 - Room cover changed, 5104 - Room indexing changed, 5105 - Room deny download changed, 5106 - Room index export saved, 5107 - Folder index changed, 5108 - Folder index reordered, 5109 - Room deny download enabled, 5110 - Room deny download disabled, 5111 - File index changed, 5112 - Room watermark set, 5113 - Room watermark disabled, 5114 - Room index export saved, 5115 - Room indexing disabled, 5116 - Room life time set, 5117 - Room life time disabled, 5118 - Room invite resend, 5119 - File version deleted, 5120 - File custom filter enabled, 5121 - File custom filter disabled, 5150 - Form started to fill, 5151 - Form partially filled, 5152 - Form completely filled, 5153 - Form stopped, 5501 - Ldap enabled, 5502 - Ldap disabled, 5503 - LDAP synchronization completed, 6000 - Language settings updated, 6001 - Time zone settings updated, 6002 - Dns settings updated, 6003 - Trusted mail domain settings updated, 6004 - Password strength settings updated, 6005 - Two factor authentication settings updated, 6006 - Administrator message settings updated, 6007 - Default start page settings updated, 6008 - Products list updated, 6009 - Administrator added, 6010 - Administrator opened full access, 6011 - Administrator deleted, 6012 - Users opened product access, 6013 - Groups opened product access, 6014 - Product access opened, 6015 - Product access restricted, 6016 - Product added administrator, 6017 - Product deleted administrator, 6018 - Greeting settings updated, 6019 - Team template changed, 6020 - Color theme changed, 6021 - Owner sent change owner instructions, 6022 - Owner updated, 6023 - Owner sent portal deactivation instructions, 6024 - Owner sent portal delete instructions, 6025 - Portal deactivated, 6026 - Portal deleted, 6027 - Login history report downloaded, 6028 - Audit trail report downloaded, 6029 - SSO enabled, 6030 - SSO disabled, 6031 - Portal access settings updated, 6032 - Cookie settings updated, 6033 - Mail service settings updated, 6034 - Custom navigation settings updated, 6035 - Audit settings updated, 6036 - Two factor authentication disabled, 6037 - Two factor authentication enabled by sms, 6038 - Two factor authentication enabled by tfa app, 6039 - Portal renamed, 6040 - Quota per room changed, 6041 - Quota per room disabled, 6042 - Quota per user changed, 6043 - Quota per user disabled, 6044 - Quota per portal changed, 6045 - Quota per portal disabled, 6046 - Form submit, 6047 - Form opened for filling, 6048 - Custom quota per room default, 6049 - Custom quota per room changed, 6050 - Custom quota per room disabled, 6051 - Custom quota per user default, 6052 - Custom quota per user changed, 6053 - Custom quota per user disabled, 6054 - DevTools access settings changed, 6055 - Webhook created, 6056 - Webhook updated, 6057 - Webhook deleted, 6058 - Created api key, 6059 - Update api key, 6060 - Deleted User api key, 6061 - Customer wallet topped up, 6062 - Customer operation performed, 6063 - Customer operations report downloaded, 6064 - Customer wallet top up settings updated, 6065 - Customer subscription updated, 7000 - Contact admin mail sent, 7001 - Room invite link used, 7002 - User created and added to room, 7003 - Guest created and added to room, 7004 - Contact sales mail sent, 9901 - Create client, 9902 - Update client, 9903 - Regenerate secret, 9904 - Delete client, 9905 - Change client activation, 9906 - Change client visibility, 9907 - Revoke user client, 9908 - Generate authorization code token, 9909 - Generate personal access token, -1 - None]
 * @export
 * @enum {number}
 */

export const MessageAction = {
    /**
    * Login success
    */
    LoginSuccess: 1000,
    /**
    * Login success via social account
    */
    LoginSuccessViaSocialAccount: 1001,
    /**
    * Login fail invalid combination
    */
    LoginFailInvalidCombination: 1002,
    /**
    * Login fail social account not found
    */
    LoginFailSocialAccountNotFound: 1003,
    /**
    * Login fail disabled profile
    */
    LoginFailDisabledProfile: 1004,
    /**
    * Login fail
    */
    LoginFail: 1005,
    /**
    * Logout
    */
    Logout: 1006,
    /**
    * Login success via sms
    */
    LoginSuccessViaSms: 1007,
    /**
    * Login fail via sms
    */
    LoginFailViaSms: 1008,
    /**
    * Login fail ip security
    */
    LoginFailIpSecurity: 1009,
    /**
    * Login success via api
    */
    LoginSuccessViaApi: 1010,
    /**
    * Login success via social app
    */
    LoginSuccessViaSocialApp: 1011,
    /**
    * Login success via api sms
    */
    LoginSuccessViaApiSms: 1012,
    /**
    * Login fail via api
    */
    LoginFailViaApi: 1013,
    /**
    * Login fail via api sms
    */
    LoginFailViaApiSms: 1014,
    /**
    * Login success via SSO
    */
    LoginSuccessViaSSO: 1015,
    /**
    * Session started
    */
    SessionStarted: 1016,
    /**
    * Session completed
    */
    SessionCompleted: 1017,
    /**
    * Login fail via SSO
    */
    LoginFailViaSSO: 1018,
    /**
    * Login success via api social account
    */
    LoginSuccessViaApiSocialAccount: 1019,
    /**
    * Login fail via api social account
    */
    LoginFailViaApiSocialAccount: 1020,
    /**
    * Login succes via tfa app
    */
    LoginSuccesViaTfaApp: 1021,
    /**
    * Login fail via Tfa app
    */
    LoginFailViaTfaApp: 1022,
    /**
    * Login fail brute force
    */
    LoginFailBruteForce: 1023,
    /**
    * Login success via api tfa
    */
    LoginSuccessViaApiTfa: 1024,
    /**
    * Login fail via api tfa
    */
    LoginFailViaApiTfa: 1025,
    /**
    * Login fail recaptcha
    */
    LoginFailRecaptcha: 1026,
    /**
    * Authorization link activated
    */
    AuthLinkActivated: 1027,
    /**
    * User created
    */
    UserCreated: 4000,
    /**
    * Guest created
    */
    GuestCreated: 4001,
    /**
    * User created via invite
    */
    UserCreatedViaInvite: 4002,
    /**
    * Guest created via invite
    */
    GuestCreatedViaInvite: 4003,
    /**
    * User activated
    */
    UserActivated: 4004,
    /**
    * Guest activated
    */
    GuestActivated: 4005,
    /**
    * User updated
    */
    UserUpdated: 4006,
    /**
    * User updated language
    */
    UserUpdatedLanguage: 4007,
    /**
    * User added avatar
    */
    UserAddedAvatar: 4008,
    /**
    * User deleted avatar
    */
    UserDeletedAvatar: 4009,
    /**
    * User updated avatar thumbnails
    */
    UserUpdatedAvatarThumbnails: 4010,
    /**
    * User linked social account
    */
    UserLinkedSocialAccount: 4011,
    /**
    * User unlinked social account
    */
    UserUnlinkedSocialAccount: 4012,
    /**
    * User sent activation instructions
    */
    UserSentActivationInstructions: 4013,
    /**
    * User sent email change instructions
    */
    UserSentEmailChangeInstructions: 4014,
    /**
    * User sent password change instructions
    */
    UserSentPasswordChangeInstructions: 4015,
    /**
    * User sent delete instructions
    */
    UserSentDeleteInstructions: 4016,
    /**
    * User updated password
    */
    UserUpdatedPassword: 4017,
    /**
    * User deleted
    */
    UserDeleted: 4018,
    /**
    * Users updated type
    */
    UsersUpdatedType: 4019,
    /**
    * Users updated status
    */
    UsersUpdatedStatus: 4020,
    /**
    * Users sent activation instructions
    */
    UsersSentActivationInstructions: 4021,
    /**
    * Users deleted
    */
    UsersDeleted: 4022,
    /**
    * Sent invite instructions
    */
    SentInviteInstructions: 4023,
    /**
    * User imported
    */
    UserImported: 4024,
    /**
    * Guest imported
    */
    GuestImported: 4025,
    /**
    * Group created
    */
    GroupCreated: 4026,
    /**
    * Group updated
    */
    GroupUpdated: 4027,
    /**
    * Group deleted
    */
    GroupDeleted: 4028,
    /**
    * User updated mobile number
    */
    UserUpdatedMobileNumber: 4029,
    /**
    * User data reassigns
    */
    UserDataReassigns: 4030,
    /**
    * User data removing
    */
    UserDataRemoving: 4031,
    /**
    * User connected tfa app
    */
    UserConnectedTfaApp: 4032,
    /**
    * User disconnected tfa app
    */
    UserDisconnectedTfaApp: 4033,
    /**
    * User logout active connections
    */
    UserLogoutActiveConnections: 4034,
    /**
    * User logout active connection
    */
    UserLogoutActiveConnection: 4035,
    /**
    * User logout active connections for user
    */
    UserLogoutActiveConnectionsForUser: 4036,
    /**
    * Send join invite
    */
    SendJoinInvite: 4037,
    /**
    * File created
    */
    FileCreated: 5000,
    /**
    * File renamed
    */
    FileRenamed: 5001,
    /**
    * File updated
    */
    FileUpdated: 5002,
    /**
    * File created version
    */
    FileCreatedVersion: 5003,
    /**
    * File deleted version
    */
    FileDeletedVersion: 5004,
    /**
    * File updated revision comment
    */
    FileUpdatedRevisionComment: 5005,
    /**
    * File locked
    */
    FileLocked: 5006,
    /**
    * File unlocked
    */
    FileUnlocked: 5007,
    /**
    * File updated access
    */
    FileUpdatedAccess: 5008,
    /**
    * File downloaded
    */
    FileDownloaded: 5009,
    /**
    * File downloaded as
    */
    FileDownloadedAs: 5010,
    /**
    * File uploaded
    */
    FileUploaded: 5011,
    /**
    * File imported
    */
    FileImported: 5012,
    /**
    * File copied
    */
    FileCopied: 5013,
    /**
    * File copied with overwriting
    */
    FileCopiedWithOverwriting: 5014,
    /**
    * File moved
    */
    FileMoved: 5015,
    /**
    * File moved with overwriting
    */
    FileMovedWithOverwriting: 5016,
    /**
    * File moved to trash
    */
    FileMovedToTrash: 5017,
    /**
    * File deleted
    */
    FileDeleted: 5018,
    /**
    * Folder created
    */
    FolderCreated: 5019,
    /**
    * Folder renamed
    */
    FolderRenamed: 5020,
    /**
    * Folder updated access
    */
    FolderUpdatedAccess: 5021,
    /**
    * Folder copied
    */
    FolderCopied: 5022,
    /**
    * Folder copied with overwriting
    */
    FolderCopiedWithOverwriting: 5023,
    /**
    * Folder moved
    */
    FolderMoved: 5024,
    /**
    * Folder moved with overwriting
    */
    FolderMovedWithOverwriting: 5025,
    /**
    * Folder moved to trash
    */
    FolderMovedToTrash: 5026,
    /**
    * Folder deleted
    */
    FolderDeleted: 5027,
    /**
    * ThirdParty created
    */
    ThirdPartyCreated: 5028,
    /**
    * ThirdParty updated
    */
    ThirdPartyUpdated: 5029,
    /**
    * ThirdParty deleted
    */
    ThirdPartyDeleted: 5030,
    /**
    * Documents ThirdParty settings updated
    */
    DocumentsThirdPartySettingsUpdated: 5031,
    /**
    * Documents overwriting settings updated
    */
    DocumentsOverwritingSettingsUpdated: 5032,
    /**
    * Documents uploading formats settings updated
    */
    DocumentsUploadingFormatsSettingsUpdated: 5033,
    /**
    * User file updated
    */
    UserFileUpdated: 5034,
    /**
    * File converted
    */
    FileConverted: 5035,
    /**
    * File send access link
    */
    FileSendAccessLink: 5036,
    /**
    * Document service location setting
    */
    DocumentServiceLocationSetting: 5037,
    /**
    * Authorization keys setting
    */
    AuthorizationKeysSetting: 5038,
    /**
    * Full text search setting
    */
    FullTextSearchSetting: 5039,
    /**
    * Start transfer setting
    */
    StartTransferSetting: 5040,
    /**
    * Start backup setting
    */
    StartBackupSetting: 5041,
    /**
    * License key uploaded
    */
    LicenseKeyUploaded: 5042,
    /**
    * File change owner
    */
    FileChangeOwner: 5043,
    /**
    * File restore version
    */
    FileRestoreVersion: 5044,
    /**
    * Document send to sign
    */
    DocumentSendToSign: 5045,
    /**
    * Document sign complete
    */
    DocumentSignComplete: 5046,
    /**
    * User updated email
    */
    UserUpdatedEmail: 5047,
    /**
    * Documents store forcesave
    */
    DocumentsStoreForcesave: 5048,
    /**
    * Documents forcesave
    */
    DocumentsForcesave: 5049,
    /**
    * Start storage encryption
    */
    StartStorageEncryption: 5050,
    /**
    * Privacy room enable
    */
    PrivacyRoomEnable: 5051,
    /**
    * Privacy room disable
    */
    PrivacyRoomDisable: 5052,
    /**
    * Start storage decryption
    */
    StartStorageDecryption: 5053,
    /**
    * File opened for change
    */
    FileOpenedForChange: 5054,
    /**
    * File marked as favorite
    */
    FileMarkedAsFavorite: 5055,
    /**
    * File removed from favorite
    */
    FileRemovedFromFavorite: 5056,
    /**
    * Folder downloaded
    */
    FolderDownloaded: 5057,
    /**
    * File removed from list
    */
    FileRemovedFromList: 5058,
    /**
    * Folder removed from list
    */
    FolderRemovedFromList: 5059,
    /**
    * File external link access updated
    */
    FileExternalLinkAccessUpdated: 5060,
    /**
    * Trash emptied
    */
    TrashEmptied: 5061,
    /**
    * File revision downloaded
    */
    FileRevisionDownloaded: 5062,
    /**
    * File marked as read
    */
    FileMarkedAsRead: 5063,
    /**
    * File readed
    */
    FileReaded: 5064,
    /**
    * Folder marked as read
    */
    FolderMarkedAsRead: 5065,
    /**
    * Folder updated access for
    */
    FolderUpdatedAccessFor: 5066,
    /**
    * File updated access for
    */
    FileUpdatedAccessFor: 5068,
    /**
    * Documents external share settings updated
    */
    DocumentsExternalShareSettingsUpdated: 5069,
    /**
    * Room created
    */
    RoomCreated: 5070,
    /**
    * Room renamed
    */
    RoomRenamed: 5071,
    /**
    * Room archived
    */
    RoomArchived: 5072,
    /**
    * Room unarchived
    */
    RoomUnarchived: 5073,
    /**
    * Room deleted
    */
    RoomDeleted: 5074,
    /**
    * Room update access for user
    */
    RoomUpdateAccessForUser: 5075,
    /**
    * Tag created
    */
    TagCreated: 5076,
    /**
    * Tags deleted
    */
    TagsDeleted: 5077,
    /**
    * Added room tags
    */
    AddedRoomTags: 5078,
    /**
    * Deleted room tags
    */
    DeletedRoomTags: 5079,
    /**
    * Room logo created
    */
    RoomLogoCreated: 5080,
    /**
    * Room logo deleted
    */
    RoomLogoDeleted: 5081,
    /**
    * Room invitation link updated
    */
    RoomInvitationLinkUpdated: 5082,
    /**
    * Documents keep new file name settings updated
    */
    DocumentsKeepNewFileNameSettingsUpdated: 5083,
    /**
    * Room remove user
    */
    RoomRemoveUser: 5084,
    /**
    * Room create user
    */
    RoomCreateUser: 5085,
    /**
    * Room invitation link created
    */
    RoomInvitationLinkCreated: 5086,
    /**
    * Room invitation link deleted
    */
    RoomInvitationLinkDeleted: 5087,
    /**
    * Room external link created
    */
    RoomExternalLinkCreated: 5088,
    /**
    * Room external link updated
    */
    RoomExternalLinkUpdated: 5089,
    /**
    * Room external link deleted
    */
    RoomExternalLinkDeleted: 5090,
    /**
    * File external link created
    */
    FileExternalLinkCreated: 5091,
    /**
    * File external link updated
    */
    FileExternalLinkUpdated: 5092,
    /**
    * File external link deleted
    */
    FileExternalLinkDeleted: 5093,
    /**
    * Room group added
    */
    RoomGroupAdded: 5094,
    /**
    * Room update access for group
    */
    RoomUpdateAccessForGroup: 5095,
    /**
    * Room group remove
    */
    RoomGroupRemove: 5096,
    /**
    * Room external link revoked
    */
    RoomExternalLinkRevoked: 5097,
    /**
    * Room external link renamed
    */
    RoomExternalLinkRenamed: 5098,
    /**
    * File uploaded with overwriting
    */
    FileUploadedWithOverwriting: 5099,
    /**
    * Room copied
    */
    RoomCopied: 5100,
    /**
    * Documents display file extension updated
    */
    DocumentsDisplayFileExtensionUpdated: 5101,
    /**
    * Room color changed
    */
    RoomColorChanged: 5102,
    /**
    * Room cover changed
    */
    RoomCoverChanged: 5103,
    /**
    * Room indexing changed
    */
    RoomIndexingChanged: 5104,
    /**
    * Room deny download changed
    */
    RoomDenyDownloadChanged: 5105,
    /**
    * Room index export saved
    */
    RoomIndexExportSaved: 5106,
    /**
    * Folder index changed
    */
    FolderIndexChanged: 5107,
    /**
    * Folder index reordered
    */
    FolderIndexReordered: 5108,
    /**
    * Room deny download enabled
    */
    RoomDenyDownloadEnabled: 5109,
    /**
    * Room deny download disabled
    */
    RoomDenyDownloadDisabled: 5110,
    /**
    * File index changed
    */
    FileIndexChanged: 5111,
    /**
    * Room watermark set
    */
    RoomWatermarkSet: 5112,
    /**
    * Room watermark disabled
    */
    RoomWatermarkDisabled: 5113,
    /**
    * Room index export saved
    */
    RoomIndexingEnabled: 5114,
    /**
    * Room indexing disabled
    */
    RoomIndexingDisabled: 5115,
    /**
    * Room life time set
    */
    RoomLifeTimeSet: 5116,
    /**
    * Room life time disabled
    */
    RoomLifeTimeDisabled: 5117,
    /**
    * Room invite resend
    */
    RoomInviteResend: 5118,
    /**
    * File version deleted
    */
    FileVersionRemoved: 5119,
    /**
    * File custom filter enabled
    */
    FileCustomFilterEnabled: 5120,
    /**
    * File custom filter disabled
    */
    FileCustomFilterDisabled: 5121,
    /**
    * Form started to fill
    */
    FormStartedToFill: 5150,
    /**
    * Form partially filled
    */
    FormPartiallyFilled: 5151,
    /**
    * Form completely filled
    */
    FormCompletelyFilled: 5152,
    /**
    * Form stopped
    */
    FormStopped: 5153,
    /**
    * Ldap enabled
    */
    LdapEnabled: 5501,
    /**
    * Ldap disabled
    */
    LdapDisabled: 5502,
    /**
    * LDAP synchronization completed
    */
    LdapSync: 5503,
    /**
    * Language settings updated
    */
    LanguageSettingsUpdated: 6000,
    /**
    * Time zone settings updated
    */
    TimeZoneSettingsUpdated: 6001,
    /**
    * Dns settings updated
    */
    DnsSettingsUpdated: 6002,
    /**
    * Trusted mail domain settings updated
    */
    TrustedMailDomainSettingsUpdated: 6003,
    /**
    * Password strength settings updated
    */
    PasswordStrengthSettingsUpdated: 6004,
    /**
    * Two factor authentication settings updated
    */
    TwoFactorAuthenticationSettingsUpdated: 6005,
    /**
    * Administrator message settings updated
    */
    AdministratorMessageSettingsUpdated: 6006,
    /**
    * Default start page settings updated
    */
    DefaultStartPageSettingsUpdated: 6007,
    /**
    * Products list updated
    */
    ProductsListUpdated: 6008,
    /**
    * Administrator added
    */
    AdministratorAdded: 6009,
    /**
    * Administrator opened full access
    */
    AdministratorOpenedFullAccess: 6010,
    /**
    * Administrator deleted
    */
    AdministratorDeleted: 6011,
    /**
    * Users opened product access
    */
    UsersOpenedProductAccess: 6012,
    /**
    * Groups opened product access
    */
    GroupsOpenedProductAccess: 6013,
    /**
    * Product access opened
    */
    ProductAccessOpened: 6014,
    /**
    * Product access restricted
    */
    ProductAccessRestricted: 6015,
    /**
    * Product added administrator
    */
    ProductAddedAdministrator: 6016,
    /**
    * Product deleted administrator
    */
    ProductDeletedAdministrator: 6017,
    /**
    * Greeting settings updated
    */
    GreetingSettingsUpdated: 6018,
    /**
    * Team template changed
    */
    TeamTemplateChanged: 6019,
    /**
    * Color theme changed
    */
    ColorThemeChanged: 6020,
    /**
    * Owner sent change owner instructions
    */
    OwnerSentChangeOwnerInstructions: 6021,
    /**
    * Owner updated
    */
    OwnerUpdated: 6022,
    /**
    * Owner sent portal deactivation instructions
    */
    OwnerSentPortalDeactivationInstructions: 6023,
    /**
    * Owner sent portal delete instructions
    */
    OwnerSentPortalDeleteInstructions: 6024,
    /**
    * Portal deactivated
    */
    PortalDeactivated: 6025,
    /**
    * Portal deleted
    */
    PortalDeleted: 6026,
    /**
    * Login history report downloaded
    */
    LoginHistoryReportDownloaded: 6027,
    /**
    * Audit trail report downloaded
    */
    AuditTrailReportDownloaded: 6028,
    /**
    * SSO enabled
    */
    SSOEnabled: 6029,
    /**
    * SSO disabled
    */
    SSODisabled: 6030,
    /**
    * Portal access settings updated
    */
    PortalAccessSettingsUpdated: 6031,
    /**
    * Cookie settings updated
    */
    CookieSettingsUpdated: 6032,
    /**
    * Mail service settings updated
    */
    MailServiceSettingsUpdated: 6033,
    /**
    * Custom navigation settings updated
    */
    CustomNavigationSettingsUpdated: 6034,
    /**
    * Audit settings updated
    */
    AuditSettingsUpdated: 6035,
    /**
    * Two factor authentication disabled
    */
    TwoFactorAuthenticationDisabled: 6036,
    /**
    * Two factor authentication enabled by sms
    */
    TwoFactorAuthenticationEnabledBySms: 6037,
    /**
    * Two factor authentication enabled by tfa app
    */
    TwoFactorAuthenticationEnabledByTfaApp: 6038,
    /**
    * Portal renamed
    */
    PortalRenamed: 6039,
    /**
    * Quota per room changed
    */
    QuotaPerRoomChanged: 6040,
    /**
    * Quota per room disabled
    */
    QuotaPerRoomDisabled: 6041,
    /**
    * Quota per user changed
    */
    QuotaPerUserChanged: 6042,
    /**
    * Quota per user disabled
    */
    QuotaPerUserDisabled: 6043,
    /**
    * Quota per portal changed
    */
    QuotaPerPortalChanged: 6044,
    /**
    * Quota per portal disabled
    */
    QuotaPerPortalDisabled: 6045,
    /**
    * Form submit
    */
    FormSubmit: 6046,
    /**
    * Form opened for filling
    */
    FormOpenedForFilling: 6047,
    /**
    * Custom quota per room default
    */
    CustomQuotaPerRoomDefault: 6048,
    /**
    * Custom quota per room changed
    */
    CustomQuotaPerRoomChanged: 6049,
    /**
    * Custom quota per room disabled
    */
    CustomQuotaPerRoomDisabled: 6050,
    /**
    * Custom quota per user default
    */
    CustomQuotaPerUserDefault: 6051,
    /**
    * Custom quota per user changed
    */
    CustomQuotaPerUserChanged: 6052,
    /**
    * Custom quota per user disabled
    */
    CustomQuotaPerUserDisabled: 6053,
    /**
    * DevTools access settings changed
    */
    DevToolsAccessSettingsChanged: 6054,
    /**
    * Webhook created
    */
    WebhookCreated: 6055,
    /**
    * Webhook updated
    */
    WebhookUpdated: 6056,
    /**
    * Webhook deleted
    */
    WebhookDeleted: 6057,
    /**
    * Created api key
    */
    ApiKeyCreated: 6058,
    /**
    * Update api key
    */
    ApiKeyUpdated: 6059,
    /**
    * Deleted User api key
    */
    ApiKeyDeleted: 6060,
    /**
    * Customer wallet topped up
    */
    CustomerWalletToppedUp: 6061,
    /**
    * Customer operation performed
    */
    CustomerOperationPerformed: 6062,
    /**
    * Customer operations report downloaded
    */
    CustomerOperationsReportDownloaded: 6063,
    /**
    * Customer wallet top up settings updated
    */
    CustomerWalletTopUpSettingsUpdated: 6064,
    /**
    * Customer subscription updated
    */
    CustomerSubscriptionUpdated: 6065,
    /**
    * Contact admin mail sent
    */
    ContactAdminMailSent: 7000,
    /**
    * Room invite link used
    */
    RoomInviteLinkUsed: 7001,
    /**
    * User created and added to room
    */
    UserCreatedAndAddedToRoom: 7002,
    /**
    * Guest created and added to room
    */
    GuestCreatedAndAddedToRoom: 7003,
    /**
    * Contact sales mail sent
    */
    ContactSalesMailSent: 7004,
    /**
    * Create client
    */
    CreateClient: 9901,
    /**
    * Update client
    */
    UpdateClient: 9902,
    /**
    * Regenerate secret
    */
    RegenerateSecret: 9903,
    /**
    * Delete client
    */
    DeleteClient: 9904,
    /**
    * Change client activation
    */
    ChangeClientActivation: 9905,
    /**
    * Change client visibility
    */
    ChangeClientVisibility: 9906,
    /**
    * Revoke user client
    */
    RevokeUserClient: 9907,
    /**
    * Generate authorization code token
    */
    GenerateAuthorizationCodeToken: 9908,
    /**
    * Generate personal access token
    */
    GeneratePersonalAccessToken: 9909,
    /**
    * None
    */
    None: -1
} as const;

export type MessageAction = typeof MessageAction[keyof typeof MessageAction];



