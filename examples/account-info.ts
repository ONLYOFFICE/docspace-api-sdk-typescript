import { Configuration } from '../src/configuration';
import { AccountInfoApi } from '../src/api';
import axios from 'axios';

async function main() {
    // Create configuration
    const config = new Configuration({
        basePath: 'https://your-docspace-instance',
        apiKey: 'your-api-key',
        // Optional: custom axios instance
        baseOptions: {
            headers: {
                'Accept': 'application/json'
            }
        }
    });

    // Create API instance
    const accountApi = new AccountInfoApi(config);

    try {
        // Get account information
        const response = await accountApi.getAccounts();
        
        if (response.data.response) {
            console.log('Total accounts:', response.data.count);
            
            // Process each account
            response.data.response.forEach(account => {
                console.log(`
Account Details:
---------------
ID: ${account.id}
Email: ${account.email}
Name: ${account.displayName}
Active: ${account.active}
                `);
            });
        }

        // Example of getting a specific account
        if (response.data.response && response.data.response[0]) {
            const accountId = response.data.response[0].id;
            const singleAccount = await accountApi.getAccount(accountId);
            console.log('Single account details:', singleAccount.data);
        }

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API Error:', error.response?.data);
        } else {
            console.error('Error:', error);
        }
    }
}

// Run the example
main().catch(console.error);
