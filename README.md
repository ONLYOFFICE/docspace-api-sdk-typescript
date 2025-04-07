# DocSpace TypeScript SDK

A universal TypeScript SDK for ASC.Web.Api that works in both browser and Node.js environments.

## Installation

```bash
npm install docspace-typescript-sdk
# or
yarn add docspace-typescript-sdk
```

## Usage

### Browser

```typescript
import { Configuration, ApiClient } from 'docspace-typescript-sdk';

const config = new Configuration({
  basePath: 'https://your-api-endpoint',
  apiKey: 'your-api-key'
});

const client = new ApiClient(config);
```

### Node.js

```typescript
const { Configuration, ApiClient } = require('docspace-typescript-sdk');

const config = new Configuration({
  basePath: 'https://your-api-endpoint',
  apiKey: 'your-api-key'
});

const client = new ApiClient(config);```

## Development

1. Build the project:
```bash
npm run build
```

## License

MIT
