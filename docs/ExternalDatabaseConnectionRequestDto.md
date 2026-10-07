# ExternalDatabaseConnectionRequestDto

The connection parameters of an external database to test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**databaseType** | **string** | The engine of the external database: `mysql`, or `sqlite` on a Standalone installation. | [optional] [default to undefined]
**databaseTypeEnum** | [**ExternalDatabaseType**](ExternalDatabaseType.md) | The engine named by `databaseType`, as the server reads it. A value sent here is ignored. | [optional] [default to undefined]
**dbHost** | **string** | The host name or the IP address of the database server. | [optional] [default to undefined]
**dbPort** | **number** | The port the database server listens on. | [optional] [default to undefined]
**dbName** | **string** | The name of the database to connect to. | [optional] [default to undefined]
**dbUser** | **string** | The user name to connect with. | [optional] [default to undefined]
**dbPassword** | **string** | The password to connect with. | [optional] [default to undefined]
**dbSsl** | **boolean** | Whether the connection is secured with SSL. | [optional] [default to undefined]
**sqliteFilePath** | **string** | The path to the database file, used by the SQLite engine only. | [optional] [default to undefined]

## Example

```typescript
import { ExternalDatabaseConnectionRequestDto } from '@onlyoffice/docspace-api-sdk';

const instance: ExternalDatabaseConnectionRequestDto = {
    databaseType,
    databaseTypeEnum,
    dbHost,
    dbPort,
    dbName,
    dbUser,
    dbPassword,
    dbSsl,
    sqliteFilePath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
