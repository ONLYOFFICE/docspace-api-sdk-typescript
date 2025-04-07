# DocSpace TypeScript SDK

A universal TypeScript SDK for ASC.Web.Api that works in both browser and Node.js environments.

## Installation

```bash
npm install docspace-typescript-sdk
# or
yarn add docspace-typescript-sdk
```

## Usage

### Example: Working with Account Information

```typescript
import { Configuration } from 'docspace-typescript-sdk';
import { AccountInfoApi } from 'docspace-typescript-sdk';
import axios from 'axios';

// Create configuration
const config = new Configuration({
    basePath: 'https://your-docspace-instance',
    apiKey: 'your-api-key',
    baseOptions: {
        headers: {
            'Accept': 'application/json'
        }
    }
});

// Create API instance
const accountApi = new AccountInfoApi(config);

// Get all accounts
try {
    const response = await accountApi.getAccounts();
    console.log('Total accounts:', response.data.count);
    
    // Process account information
    response.data.response?.forEach(account => {
        console.log(`Account: ${account.displayName} (${account.email})`);
    });
} catch (error) {
    if (axios.isAxiosError(error)) {
        console.error('API Error:', error.response?.data);
    }
}
```

### Browser Usage

For browser usage, you might want to use environment variables or a configuration service:

```typescript
const config = new Configuration({
    basePath: process.env.DOCSPACE_API_URL,
    apiKey: process.env.DOCSPACE_API_KEY
});
```

## Development

1. Build the project:
```bash
npm run build
```

## License

MIT
